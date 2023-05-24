import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
            <Link href="/">
                <Image
                src="https://"
                width={70}
                height={70}
                alt="logo"
                />
            </Link>
        </header>
    )
}