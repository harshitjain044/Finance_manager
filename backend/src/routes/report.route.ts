import { Router } from "express";
import {
  generateReportController,
  getAllReportsController,
  sendTestReportController,
  updateReportSettingController,
} from "../controllers/report.controller";

const reportRoutes = Router();

reportRoutes.get("/all", getAllReportsController);
reportRoutes.get("/generate", generateReportController);
reportRoutes.post("/send-test", sendTestReportController);
reportRoutes.put("/update-setting", updateReportSettingController);

export default reportRoutes;
