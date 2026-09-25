export function Display({ displayString }) {
  return (
    <div className="flex h-18 w-full items-center justify-center rounded-md bg-neutral-600">
      <p className="text-xl text-gray-200">{displayString}</p>
    </div>
  );
}
