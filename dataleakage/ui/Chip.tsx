import { twMerge } from "tailwind-merge";

export default function Chip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        className,
        "text-sm inline-flex border border-b-indigo-400 /10 px-3 py-1 rounded-lg tracking-tight"
      )}
    >
      {children}
    </div>
  );
}
