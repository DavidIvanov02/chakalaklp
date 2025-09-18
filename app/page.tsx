"use client";

import MobileVersion from "@/components/MobileVersion";
import DesktopVersion from "@/components/DesktopVersion";
import { useCountdown } from "@/utils/useCountdown";

export default function Home() {
  const timeLeft = useCountdown("2025-10-25T00:00:00");

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <MobileVersion timeLeft={timeLeft} />
      <DesktopVersion timeLeft={timeLeft} />
    </div>
  );
}