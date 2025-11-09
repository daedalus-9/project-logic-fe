import { BubbleButton } from "@/components/buttons/BubbleButton";
import { motion } from "framer-motion";
import React from "react";
import { FiTruck } from "react-icons/fi";
import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";
import { scrollToForm } from "@/components/utils/scrollToForm";

export const MiniCard1 = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>Fair payment terms</CalloutChip>
        <p className="mb-1.5 text-center text-2xl">
          Reliable payments you can count on
        </p>
        <p className="mb-6 text-center text-zinc-400">
          We believe trust starts with transparency — fair payment terms and
          consistent cashflow for every subcontractor we work with.
        </p>

        <BubbleButton onClick={()=> scrollToForm()} className="mx-auto">Learn more</BubbleButton>

        <FreightPing />
      </Card>
    </div>
  );
};

const LOOP_DURATION = 6;

const FreightPing = () => {
  return (
    <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 translate-y-1/2">
      {/* Central truck icon */}
      <FiTruck className="relative z-10 text-7xl text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]" />

      {/* Pulsing rings */}
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 size-80 rounded-full border border-amber-600/60 bg-gradient-to-br from-amber-500/40 to-amber-900/20"
    />
  );
};
