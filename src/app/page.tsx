import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";
import React from "react";
const Homepage = () => {
  return (
    <div>
      Home Page
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default Homepage;
