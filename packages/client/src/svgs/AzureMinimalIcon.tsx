import { cn } from '~/utils/';

export default function AzureMinimalIcon({
  size = 25,
  className = 'h-4 w-4',
}: {
  size?: number;
  className?: string;
}) {
  const height = size;
  const width = size;

  return (
    <img
      src="/assets/favicon-removebg-preview.png"
      alt="SymGPT"
      className={cn(className, 'object-contain')}
      width={width}
      height={height}
    />
  );
}
