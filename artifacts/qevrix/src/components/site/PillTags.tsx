interface PillTagsProps {
  filled: string;
  outline: string;
  className?: string;
}

export function PillTags({ filled, outline, className = "" }: PillTagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="pill pill-filled">[ {filled} ]</span>
      <span className="pill pill-outline">[ {outline} ]</span>
    </div>
  );
}
