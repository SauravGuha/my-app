import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (<header className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
        <Link href="/" aria-label="Next Blog home">
            <Image src="/next.svg" alt="Next.js" width={100} height={20} priority />
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <Link href="/posts" className="hover:underline">
                Posts
            </Link>
        </nav>
    </header>);
}