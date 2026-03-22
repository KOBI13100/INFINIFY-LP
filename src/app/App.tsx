import { useCallback, useState } from "react";
import { flushSync } from "react-dom";
import Desktop from "../imports/Desktop144";
import LoaderSplash from "./components/LoaderSplash";
import { RevealRegistryProvider } from "../hooks/useRevealRegistry";

export default function App() {
  const [isHeroIntroActive, setIsHeroIntroActive] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const handleSplashExitStart = useCallback(() => {
    flushSync(() => {
      setIsHeroIntroActive(true);
    });
  }, []);

  return (
    <RevealRegistryProvider>
      <div className="w-full min-h-screen overflow-x-hidden bg-white">
        <div className="w-full h-[4521px] relative overflow-y-hidden">
          <Desktop introActive={isHeroIntroActive} />
        </div>

        {isSplashVisible ? (
          <LoaderSplash
            onScreenExitStart={handleSplashExitStart}
            onComplete={() => {
              flushSync(() => {
                setIsSplashVisible(false);
              });
            }}
          />
        ) : null}
      </div>
    </RevealRegistryProvider>
  );
}
