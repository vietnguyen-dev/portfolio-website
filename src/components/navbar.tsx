import { useState, useContext } from "react";
import Link from "next/link";
import ModeSwitch from "./mode-switch";
import ContactMe from "./contact-me";

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <nav className="navbar px-6 py-3 sm:justify-between sm:px-12 sm:py-6">
      <Link href="/" className="flex-1 md:flex-none">
        <p className="text-xl font-bold">VN</p>
      </Link>
      <div className="hidden md:block">
        <Link href="#experience" className="mr-3 xl:mr-6">
          Experience
        </Link>
        <Link href="#projects" className="mr-3 xl:mr-6">
          Freelance Projects
        </Link>
        <Link href="/about" className="mr-3 xl:mr-6">
          About
        </Link>
        <Link href="/blog" className="mr-3 xl:mr-6">
          Blog
        </Link>
      </div>
      <div className="flex-none">
        <ContactMe />
        <ModeSwitch />
        <button
          className="btn btn-square btn-ghost ml-3 md:hidden"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          {showMobileNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {showMobileNav && (
        <ul className="flex absolute right-5 top-16 menu bg-base-200 w-56 h-28 rounded-box md:hidden">
          <Link href="/how-it-works">Projects</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Blog</Link>
        </ul>
      )}
    </nav>
  );
};
