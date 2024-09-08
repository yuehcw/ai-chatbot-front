import { SignUp } from "@clerk/clerk-react";
import React from "react";
import "./signUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/https://safe-muskox-9.accounts.dev/sign-up" signInUrl="/sign-in"/>
    </div>
  );
};

export default SignUpPage;
