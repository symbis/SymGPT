import { cn } from '~/utils/';

export default function AzureMinimalIcon({
  size = 25,
  className = 'h-4 w-4',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src="assets/logo.png"
      alt="SymGPT Icon"
      className={cn('object-contain', className)}
      width={size}
      height={size}
    />
  );
}
