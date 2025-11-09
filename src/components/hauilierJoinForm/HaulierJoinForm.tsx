"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

interface HaulierJoinFormProps {
  region?: string;
  className?: string;
}

export function HaulierJoinForm({
  region = "UK",
  className,
}: HaulierJoinFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Haulier join form submitted");
    // handle submission to backend
  };

  return (
    <div
      className={cn(
        "shadow-input m-auto w-full max-w-lg rounded-none bg-white p-6 md:rounded-2xl md:p-10 dark:bg-black",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-neutral-800 sm:text-3xl md:text-4xl dark:text-neutral-200">
        Join as a Haulier
      </h2>

      <form className="my-10 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Label htmlFor="fullname" className="text-base md:text-lg">
            Full Name
          </Label>
          <Input
            id="fullname"
            placeholder="John Doe"
            type="text"
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="email" className="text-base md:text-lg">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="john@example.com"
            type="email"
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="phoneNumber" className="text-base md:text-lg">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            placeholder="+44 7123 456 789"
            type="tel"
            className="h-12 text-base md:h-14 md:text-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="group relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg font-medium text-white transition-transform duration-200 hover:scale-[1.02] md:h-14 md:text-xl"
        >
          Join Now →
        </button>
      </form>
    </div>
  );
}
