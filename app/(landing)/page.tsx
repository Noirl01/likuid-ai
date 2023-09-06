import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const LandingPage = () => {
  const { userId } = auth();
  return (
    <>
      <div>Landing Page (Unprotected)</div>
      <div>
        <Link href={userId !== null ? "/dashboard" : "/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={userId !== null ? "/dashboard" : "/sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
