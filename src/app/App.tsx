import { useState } from "react";
import Desktop from "../imports/Desktop144";
import LoaderSplash from "./components/LoaderSplash";

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <div className="w-full h-[4521px] relative overflow-y-hidden">
        <Desktop introActive={isSplashComplete} />
      </div>

      {!isSplashComplete ? (
        <LoaderSplash
          onComplete={() => {
            setIsSplashComplete(true);
          }}
        />
      ) : null}
    </div>
  );
}
