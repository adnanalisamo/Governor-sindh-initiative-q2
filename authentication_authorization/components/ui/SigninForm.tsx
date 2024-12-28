"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SigninForm = () => {
    const[confirmPassword,setConfirmPassword]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for signing up");
    console.log("sign in attempt with:", { email, password,confirmPassword });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Signin</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="confirmpassword"
              placeholder="confirmPassword"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Signin
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default SigninForm;