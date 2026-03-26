import { Request, Response } from "express";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";
import { asyncHandler } from "../middlewares/asyncHandler.middlerware";
import { HTTPSTATUS } from "../config/http.config";
import {
  generateReportService,
  getAllReportsService,
  updateReportSettingService,
} from "../services/report.service";
import { updateReportSettingSchema } from "../validators/report.validator";
import { BadRequestException } from "../utils/app-error";
import { sendReportEmail } from "../mailers/report.mailer";

export const getAllReportsController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const pagination = {
      pageSize: parseInt(req.query.pageSize as string) || 20,
      pageNumber: parseInt(req.query.pageNumber as string) || 1,
    };

    const result = await getAllReportsService(userId, pagination);

    return res.status(HTTPSTATUS.OK).json({
      message: "Reports history fetched successfully",
      ...result,
    });
  }
);

export const updateReportSettingController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body = updateReportSettingSchema.parse(req.body);

    await updateReportSettingService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Reports setting updated successfully",
    });
  }
);

export const generateReportController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const { from, to } = req.query;
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const result = await generateReportService(userId, fromDate, toDate);

    return res.status(HTTPSTATUS.OK).json({
      message: "Report generated successfully",
      ...result,
    });
  }
);

export const sendTestReportController = asyncHandler(
  async (req: Request, res: Response) => {
    const user = req.user;
    const userId = req.user?._id;

    if (!user || !userId) {
      throw new BadRequestException("Authenticated user not found");
    }

    const from = startOfMonth(subMonths(new Date(), 1));
    const to = endOfMonth(subMonths(new Date(), 1));

    const result = await generateReportService(userId, from, to);

    if (!result) {
      throw new BadRequestException(
        "No report data found for last month. Add transactions in the previous month first."
      );
    }

    await sendReportEmail({
      email: user.email,
      username: user.name,
      report: {
        period: result.period,
        totalIncome: result.summary.income,
        totalExpenses: result.summary.expenses,
        availableBalance: result.summary.balance,
        savingsRate: result.summary.savingsRate,
        topSpendingCategories: result.summary.topCategories,
        insights: result.insights,
      },
      frequency: "MONTHLY",
    });

    return res.status(HTTPSTATUS.OK).json({
      message: `Test report sent to ${user.email} for ${result.period}`,
    });
  }
);
