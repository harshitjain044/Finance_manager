import Logo from "@/components/logo/logo";
import { useTheme } from "@/context/theme-provider";
import dashboardImg from "../../assets/images/dashboard_.png";
import dashboardImgDark from "../../assets/images/dashboard_dark.png";
import SignUpForm from "./_component/signup-form";

const SignUp = () => {
  const { theme } = useTheme();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 md:pt-6">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo url="/" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
  <div className="absolute inset-0 flex flex-col justify-end p-8">

    {/* TEXT */}
    <div className="max-w-xl ">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Build better money habits with Spendly.
      </h1>

      <p className="mt-4 text-muted-foreground">
        Create an account to monitor cash flow, surface patterns in your spending,
        and stay ahead with scheduled reports.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative mt-6 h-full w-full overflow-hidden">
      <img
        src={theme === "dark" ? dashboardImgDark : dashboardImg}
        alt="Spendly dashboard preview"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 " />
    </div>

  </div>
</div>
    </div>
  );
};

export default SignUp;
