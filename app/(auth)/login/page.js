"use client";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { Check } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const handleLoginFunc = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="border p-12 rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login you account
        </h2>
        <form onSubmit={handleLoginFunc} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input className={"rounded-md"} placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input className={"rounded-md"} placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <Button className="w-full rounded-md" type="submit">
            <Check />
            Login
          </Button>
        </form>
        <div className="text-small flex items-center space-x-4 mt-4">
          <Separator className="flex-1" orientation="horizontal" />
          <span>Or Signin With</span>
          <Separator className="flex-1" orientation="horizontal" />
        </div>
        <div className="flex w-full flex-col gap-3 mt-4">
          <Button className="w-full rounded-md" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <Button className="w-full rounded-md" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
          <Button className="w-full rounded-md" variant="tertiary">
            <Icon icon="ion:logo-apple" />
            Sign in with Apple
          </Button>
        </div>
        <p className="mt-4">
          Do not have account?{" "}
          <Link className="text-blue-400" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
