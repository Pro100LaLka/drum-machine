import { useEffect, useRef } from "react";
import clsx from "clsx";

export function Key({ keyName, fileName, drumName, power, volume, onPlay }) {
  const soundRef = useRef(null);

  function play() {
    if (!power) return;
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  }

  function handleClick() {
    play();
    onPlay(drumName);
  }

  useEffect(() => {
    soundRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "size-20 rounded-lg bg-neutral-500 text-2xl text-gray-200 hover:bg-neutral-400",
        power && "active:bg-amber-500 active:text-black",
      )}
    >
      {keyName}
      <audio
        volume={volume}
        ref={soundRef}
        src={`https://cdn.freecodecamp.org/curriculum/drum/${fileName}`}
      ></audio>
    </button>
  );
}
