import { Button } from "@/components/ui/button";
import { useSendTestReportMutation } from "@/features/report/reportAPI";
import { Loader, Mail } from "lucide-react";
import { toast } from "sonner";

const SendTestReportButton = () => {
  const [sendTestReport, { isLoading }] = useSendTestReportMutation();

  const handleSend = () => {
    sendTestReport()
      .unwrap()
      .then((response) => {
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.data?.message || "Failed to send test report");
      });
  };

  return (
    <Button
      onClick={handleSend}
      disabled={isLoading}
      variant="outline"
      className="bg-white/10 text-white hover:bg-white/15 hover:text-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      {isLoading ? <Loader className="animate-spin" /> : <Mail />}
      Send Test Report
    </Button>
  );
};

export default SendTestReportButton;
