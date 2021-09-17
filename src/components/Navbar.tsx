import Link from "next/link";
import Image from "next/image";

const linkStyle =
  "transition-colors border-b-2 border-opacity-0 hover:border-opacity-75 border-gray-900";

const Navbar: React.FC = () => (
  <nav className="container flex flex-col items-center justify-center py-4 mx-auto space-x-4 space-y-4 md:space-y-0 md:flex-row md:justify-start">
    <div className="flex items-center flex-grow space-x-2">
      <Image src="/grand-yazici-icon.png" width="32" height="32" alt="Icon" />

      <Link href="/">
        <a className={`${linkStyle} font-semibold text-lg`}>Marmaris Palace</a>
      </Link>
    </div>

    <div className="flex flex-col-reverse items-center space-x-6 md:flex-row">
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/">
            <a className={linkStyle}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/#about">
            <a className={linkStyle}>About</a>
          </Link>
        </li>

        <li>
          <Link href="/#activities">
            <a className={linkStyle}>Activities</a>
          </Link>
        </li>

        <li>
          <Link href="/#contact">
            <a className={linkStyle}>Contact</a>
          </Link>
        </li>
      </ul>

      <button className="rounded-lg hidden md:block border-2 border-gray-800 py-1.5 px-6 transition-colors hover:bg-gray-800 hover:text-white">
        Login
      </button>
    </div>
  </nav>
);

export default Navbar;
