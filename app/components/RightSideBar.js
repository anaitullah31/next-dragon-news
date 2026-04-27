import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
const RightSideBar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, "Google Signin");
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data, "Google Signin");
  };
  return (
    <div className="flex w-full flex-col gap-3 mt-4">
      <Button
        onClick={handleGoogleSignin}
        className="w-full rounded-md"
        variant="tertiary"
      >
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      <Button
        onClick={handleGithubSignin}
        className="w-full rounded-md"
        variant="tertiary"
      >
        <Icon icon="mdi:github" />
        Sign in with GitHub
      </Button>
      {/* <Button className="w-full rounded-md" variant="tertiary">
        <Icon icon="ion:logo-apple" />
        Sign in with Apple
      </Button> */}
    </div>
  );
};

export default RightSideBar;
