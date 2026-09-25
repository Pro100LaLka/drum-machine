import { useEffect, useRef, useState } from "react";
import { KeyGrid } from "./KeyGrid.jsx";
import { PowerToggle } from "./PowerToggle.jsx";
import { Display } from "./Display.jsx";
import { VolumeToggle } from "./VolumeToggle.jsx";

const volumeResetTime = 1000;

export function DrumMachine() {
  const [power, setPower] = useState(true);
  const [displayString, setDisplayString] = useState("");
  const [volume, setVolume] = useState(30);

  const debounceTimeoutRef = useRef(null);

  function togglePower() {
    setPower(!power);
  }

  function handleVolumeChange(e) {
    const value = e.target.value;
    setVolume(value);
    setDisplayString(`Volume: ${value}`);
  }

  useEffect(() => {
    debounceTimeoutRef.current = setTimeout(() => {
      setDisplayString("");
    }, volumeResetTime);
    return () => clearTimeout(debounceTimeoutRef.current);
  }, [volume]);

  useEffect(() => {
    return () => clearTimeout(debounceTimeoutRef.current);
  }, [displayString]);

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-violet-900/50 p-5">
      <KeyGrid
        power={power}
        volume={volume}
        onPlay={(drumName) => setDisplayString(drumName)}
      />
      <PowerToggle onToggle={togglePower} power={power} />
      <Display displayString={displayString} />
      <VolumeToggle onToggle={handleVolumeChange} volume={volume} />
    </div>
  );
}
