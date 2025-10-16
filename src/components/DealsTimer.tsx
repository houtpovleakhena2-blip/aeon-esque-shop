import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const DealsTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="py-12 bg-gradient-to-r from-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-8 w-8 animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl font-bold">Flash Deals End Soon!</h2>
          </div>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Don't miss out on these incredible limited-time offers
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm md:text-base opacity-90">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm md:text-base opacity-90">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm md:text-base opacity-90">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsTimer;
