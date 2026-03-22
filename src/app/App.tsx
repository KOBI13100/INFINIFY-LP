import { useCallback, useState } from "react";
import { flushSync } from "react-dom";
import Desktop from "../imports/Desktop144";
import LoaderSplash from "./components/LoaderSplash";

export default function App() {
  const [isHeroIntroActive, setIsHeroIntroActive] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashExitStart = useCallback(() => {
    flushSync(() => {
      setIsHeroIntroActive(true);
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <div className="relative w-full">
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
  );
}
