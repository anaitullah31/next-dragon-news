"use client";
import RightSideBar from "@/app/components/RightSideBar";
import { authClient } from "@/lib/auth-client";
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
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = async (data) => {
    // e.preventDefault();
    const { data: response, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
    //   rememberMe: true,
      callbackURL: "/",
    });
    console.log(response, "RESPONSE");
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="border p-12 rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login you account
        </h2>
        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="flex w-96 flex-col gap-4"
        >
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input
              {...register("email", { required: "Email field is required" })}
              className={"rounded-md"}
              placeholder="john@example.com"
            />
            <FieldError />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </TextField>
          <TextField isRequired type="password">
            <Label>Password</Label>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
              className={"rounded-md"}
              placeholder="Enter your password"
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            {/* {errors.password && <p>{errors.password.message}</p>} */}
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
        <RightSideBar />
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
