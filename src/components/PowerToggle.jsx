export function PowerToggle({ power, onToggle }) {
  return (
    <div className="group my-4 w-full">
      <input
        type="checkbox"
        id="power"
        onChange={onToggle}
        className="sr-only"
        checked={power}
      />
      <label htmlFor="power" className="flex items-center justify-between">
        <span className="text-lg font-medium text-gray-200">
          Power: {power ? "On" : "Off"}
        </span>
        <span className="inline-block h-7 w-14 rounded-full bg-gray-400 p-1 shadow-md shadow-transparent group-has-checked:bg-green-500 group-has-checked:shadow-green-400/50">
          <span className="inline-block aspect-square h-full rounded-full bg-white transition-transform duration-300 group-has-checked:translate-x-7"></span>
        </span>
      </label>
    </div>
  );
}
