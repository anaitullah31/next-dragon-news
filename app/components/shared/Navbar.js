import Image from "next/image";
import Avatar from "@/app/assets/user.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto bg-white">
      <div className="mx-auto flex h-16 items-center justify-end">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-black">
              About
            </Link>
            <Link href="/career" className="hover:text-black">
              Career
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={Avatar}
              alt="User avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            <button className="bg-zinc-800 rounded-md px-8 py-2 text-sm font-semibold text-white hover:bg-zinc-900">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
