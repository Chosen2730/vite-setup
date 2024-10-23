import AuthHeeader from "../components/layout/authHeeader";
import AuthWrapper from "../components/layout/authWrapper";
import { Button, Input } from "@material-tailwind/react";
import { useResetPassword } from "../hooks/pages/useResetPassword.ts";
import { CustomTypography } from "../components/general/Typography.tsx";
import { EnvelopeIcon } from "../assets/icons/Message.tsx";

const CheckMail = () => {
  const {
    // Values
    queryEmail,

    // Function
    resendForgotPassword,
  } = useResetPassword();

  return (
    <div>
      <AuthHeeader />
      <AuthWrapper>
        <div className="bg-[#ECFFE5] p-2 rounded-md w-fit">
          <EnvelopeIcon fill="#519527" width={24} height={24} />
        </div>
        <CustomTypography variant="h4" className="text-2xl font-bold">
          Check your mail
        </CustomTypography>
        <CustomTypography variant="p" className="my-6">
          A password reset link was sent to your email address
        </CustomTypography>
        <div className="w-full max-w-sm flex flex-col gap-4 mt-4">
          <Input
            label="Email"
            crossOrigin=""
            disabled={true}
            value={queryEmail ?? ""}
          />
          <a href="mailto:">
            <Button className="bg-sec text-white w-full lowercase first-letter:capitalize text-base">
              Open email app
            </Button>
          </a>

          <CustomTypography variant="p" className="text-center my-2">
            Didn’t receive any mail?{" "}
            <span
              className="text-sec underline hover:cursor-pointer"
              onClick={resendForgotPassword}
            >
              Click to resend
            </span>
          </CustomTypography>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default CheckMail;
