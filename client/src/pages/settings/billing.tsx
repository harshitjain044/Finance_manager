import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, ShieldCheck, Sparkles } from "lucide-react";

const Billing = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your plan, invoices, and future premium features.
        </p>
      </div>
      <Separator />

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-none bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
          <CardHeader className="space-y-3">
            <Badge className="w-fit border-white/20 bg-white/15 text-white hover:bg-white/15">
              Current plan
            </Badge>
            <CardTitle className="text-2xl">Spendly Free</CardTitle>
            <CardDescription className="text-emerald-50">
              Built for day-to-day money tracking with a clean dashboard, reports, and imports.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="size-4" />
                  Included now
                </div>
                <p className="text-sm text-emerald-50">
                  Analytics dashboard, recurring transactions, CSV import, and scheduled reports.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="size-4" />
                  Ready to expand
                </div>
                <p className="text-sm text-emerald-50">
                  This screen can later show renewals, invoices, and subscription controls once payments are added.
                </p>
              </div>
            </div>
            <p className="text-sm text-emerald-50">
              Replacing the original upsell content here makes the product feel owned, credible, and launch-ready.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CreditCard className="size-4 text-emerald-600" />
              Billing status
            </CardTitle>
            <CardDescription>
              Payments are not enabled in this build yet.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
              Connect Stripe or another provider when you are ready to support subscriptions or invoice history.
            </div>
            <Button className="w-full" disabled>
              Upgrade Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
