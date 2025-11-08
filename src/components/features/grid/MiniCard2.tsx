import { CornerBlur } from "@/components/utils/CornerBlur";
import React from "react";
import { FiBell } from "react-icons/fi";
import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>Smart alerts</CalloutChip>
        <p className="mb-1.5 text-2xl">Loads where your trucks are</p>
        <p className="text-zinc-400">
          Get notified instantly when new loads align with your current routes,
          saving time, fuel, and wasted mileage.
        </p>

        {/* Simulated load match notification */}
        <div className="absolute -bottom-2 left-2 right-2 z-10 h-44 rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="grid size-10 shrink-0 place-content-center rounded-full bg-blue-600/20">
              <FiBell className="size-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                New load near Manchester
              </p>
              <p className="text-xs text-zinc-400">Matches your route M6–M1</p>
            </div>
          </div>

          <p className="text-sm leading-snug text-zinc-300">
            <span className="font-semibold text-blue-300">Logic Freight</span>{" "}
            has posted a new load close to your current delivery route.
            <br />
            <span className="text-xs text-zinc-500">2 mins ago</span>
          </p>
        </div>

        <CornerBlur />
      </Card>
    </div>
  );
};
