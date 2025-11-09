"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

interface EnquiryFormProps {
  region?: string; // e.g. "Scotland"
  className?: string;
}

export function EnquiryForm({
  region = "the UK",
  className,
}: EnquiryFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Truck placement submitted");
  };

  return (
    <div
      id="form"
      className={cn(
        "shadow-input m-auto mx-auto w-full max-w-lg rounded-none bg-white p-6 sm:max-w-xl md:max-w-2xl md:rounded-2xl md:p-10 lg:max-w-3xl lg:p-12 dark:bg-black",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-neutral-800 sm:text-3xl md:text-4xl dark:text-neutral-200">
        Place a Truck in {region}
      </h2>

      {/* Contact Options */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <a
          href="tel:01633441457"
          className="mt-3 max-w-lg text-base text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-800 hover:underline sm:text-lg md:text-xl dark:text-neutral-300 dark:hover:text-white"
        >
          01633 441457
        </a>

        <a
          href="mailto:traffic@logic-freight.co.uk"
          className="mt-3 max-w-lg text-base text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-800 hover:underline sm:text-lg md:text-xl dark:text-neutral-300 dark:hover:text-white"
        >
          traffic@logic-freight.co.uk
        </a>
      </div>

      {/* Form */}
      <form className="my-10 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="region" value={region} />

        {/* Name & Company */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="fullname" className="text-base md:text-lg">
              Full name
            </Label>
            <Input
              id="fullname"
              placeholder="John Smith"
              type="text"
              className="h-12 text-base md:h-14 md:text-lg"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="companyname" className="text-base md:text-lg">
              Company name
            </Label>
            <Input
              id="companyname"
              placeholder="John's Logistics"
              type="text"
              className="h-12 text-base md:h-14 md:text-lg"
            />
          </LabelInputContainer>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="email" className="text-base md:text-lg">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="johnsmith@gmail.com"
              type="email"
              className="h-12 text-base md:h-14 md:text-lg"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phoneNumber" className="text-base md:text-lg">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              placeholder="+44 7123 456 789"
              type="tel"
              className="h-12 text-base md:h-14 md:text-lg"
            />
          </LabelInputContainer>
        </div>

        {/* Truck Placement Details */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <LabelInputContainer>
            <Label htmlFor="location" className="text-base md:text-lg">
              Truck location
            </Label>
            <Input
              id="location"
              placeholder={`Location in ${region}`}
              type="text"
              className="h-12 text-base md:h-14 md:text-lg"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="availableFrom" className="text-base md:text-lg">
              Available from
            </Label>
            <Input
              id="availableFrom"
              type="date"
              className="h-12 text-base md:h-14 md:text-lg"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="availableUntil" className="text-base md:text-lg">
              Available until
            </Label>
            <Input
              id="availableUntil"
              type="date"
              className="h-12 text-base md:h-14 md:text-lg"
            />
          </LabelInputContainer>
        </div>

        {/* Notes */}
        <LabelInputContainer>
          <Label htmlFor="message" className="text-base md:text-lg">
            Additional info
          </Label>
          <Input
            id="message"
            placeholder={`Type any extra details about your truck placement in ${region}...`}
            type="text"
            className="h-12 text-base md:h-14 md:text-lg"
          />
        </LabelInputContainer>

        {/* Submit */}
        <button
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 text-lg font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-transform duration-200 hover:scale-[1.02] md:h-14 md:text-xl dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit Placement →
          <BottomGradient />
        </button>

        <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
