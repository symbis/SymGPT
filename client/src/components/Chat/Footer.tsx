export default function Footer({ className }: { className?: string }) {
  return (
    <div className="relative w-full">
      <div
        className={
          className ??
          'absolute bottom-0 left-0 right-0 hidden items-center justify-center px-2 py-2 text-center text-xs text-text-primary sm:flex md:px-[60px]'
        }
        role="contentinfo"
      >
        SymGPT | Powered by Symbis
      </div>
    </div>
  );
}
