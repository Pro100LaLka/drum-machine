export function VolumeToggle({ onToggle, volume }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor="volume" className="text-white">
        Volume
      </label>
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={onToggle}
      />
    </div>
  );
}
