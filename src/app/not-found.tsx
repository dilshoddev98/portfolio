import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center min-h-[70dvh] gap-4">
      <h2 className="text-center text-2xl">Page Not Found</h2>
      <Link
        href="/"
        className="block  py-2 px-4 rounded bg-white/60 dark:text-white/90 dark:bg-white/20"
      >
        Return Home
      </Link>
    </section>
  );
}
