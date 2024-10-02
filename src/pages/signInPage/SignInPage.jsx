import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./signInPage.css";

const SignInPage = () => {
  return (
    <div className="signInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />

      <footer>
        <p>Testing email: d1211773@gmail.com</p>
        <br/>
        <p>Testing password: 19980608!</p>
      </footer>
    </div>
  );
};

export default SignInPage;
