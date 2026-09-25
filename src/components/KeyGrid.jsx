import { Key } from "./Key";
import keyToSound from "../keyToSound";

export function KeyGrid({ power, volume, onPlay }) {
  return (
    <div className="grid grid-cols-3 gap-3 px-4">
      {Object.keys(keyToSound).map((key) => {
        return (
          <Key
            key={key}
            keyName={key}
            drumName={keyToSound[key].drumName}
            fileName={keyToSound[key].fileName}
            power={power}
            volume={volume}
            onPlay={onPlay}
          />
        );
      })}
    </div>
  );
}
