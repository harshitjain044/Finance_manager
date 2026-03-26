import {
  Card,
  CardContent,
} from "@/components/ui/card";
import PageLayout from "@/components/page-layout";
import ScheduleReportDrawer from "./_component/schedule-report-drawer";
import ReportTable from "./_component/report-table";
import SendTestReportButton from "./_component/send-test-report-button";


export default function Reports() {
 
  return (
    <PageLayout
      title="Report History"
      subtitle="View and manage your financial reports"
      addMarginTop
      rightAction={
        <div className="flex flex-wrap items-center gap-3">
          <SendTestReportButton />
          <ScheduleReportDrawer />
        </div>
      }
    >
        <Card className="border shadow-none">
          <CardContent>
           <ReportTable />
          </CardContent>
        </Card>
    </PageLayout>
  );
}
