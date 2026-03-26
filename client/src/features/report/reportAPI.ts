import { apiClient } from "@/app/api-client";
import {
  GetAllReportResponse,
  ReportActionResponse,
  UpdateReportSettingParams,
} from "./reportType";

export const reportApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllReports: builder.query<GetAllReportResponse, {pageNumber: number, pageSize: number}>({
      query: (params) => {
        const { pageNumber = 1, pageSize = 20 } = params;
        return ({
          url: "/report/all",
          method: "GET",
          params: { pageNumber, pageSize },
        });
      },
    }),

    updateReportSetting: builder.mutation<void, UpdateReportSettingParams>({
      query: (payload) => ({
        url: "/report/update-setting",
        method: "PUT",
        body: payload,
      }),
    }),

    sendTestReport: builder.mutation<ReportActionResponse, void>({
      query: () => ({
        url: "/report/send-test",
        method: "POST",
      }),
    }),
  }),
});

export const {
    useGetAllReportsQuery,
    useSendTestReportMutation,
    useUpdateReportSettingMutation
} = reportApi;
