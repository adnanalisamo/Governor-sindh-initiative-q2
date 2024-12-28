"use client";

import { useState } from "react";
import LoginForm from "@/components/ui/LoginForm";
import SigninForm from "@/components/ui/SigninForm";
import { Button } from "@/components/ui/button";

export default function User() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-l-orange-200">
      <div className="mb-4">
        <Button
          className="text-sm"
          onClick={() => setIsLogin(!isLogin)}
          variant="ghost"
        >
          {isLogin
            ? "Need an account? Create one"
            : "Login with your current account"}
        </Button>
      </div>
      {isLogin ? <LoginForm /> : <SigninForm />}
    </div>
  );
}