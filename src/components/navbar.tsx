import { useState, useContext } from "react";
import Link from "next/link";
import ModeSwitch from "./mode-switch";
import ContactMe from "./contact-me";

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const closeNav = () => {
    if (document) {
      (document.getElementById("nav") as HTMLFormElement).close();
    }
  };

  return (
    <nav className="navbar px-6 sm:justify-between">
      <Link href="/" className="flex-1 md:flex-none">
        <p className="text-xl font-bold">VN</p>
      </Link>
      <div className="hidden md:block">
        <Link href="/#projects" className="mr-3 hover:link xl:mr-6">
          Freelance Projects
        </Link>
        <Link href="/#experience" className="mr-3 hover:link xl:mr-6">
          Experience
        </Link>
        <Link href="/#about" className="mr-3 hover:link xl:mr-6">
          About
        </Link>
      </div>
      <div className="flex-none">
        <ContactMe />
        <ModeSwitch />
        <button
          className="btn btn-square btn-ghost ml-3 md:hidden"
          onClick={() => {
            if (document) {
              (document.getElementById("nav") as HTMLFormElement).showModal();
            }
          }}
        >
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
        </button>
      </div>
      <dialog id="nav" className="modal h-auto md:hidden">
        <div className="modal-box absolute top-5 right-2 w-1/2">
          <ul className="flex flex-col">
            <button
              className="btn btn-square btn-ghost ml-auto mb-3"
              onClick={closeNav}
            >
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
            </button>
            <Link
              href="/#projects"
              className="ml-auto text-xl mb-3"
              onClick={closeNav}
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="ml-auto text-xl mb-3"
              onClick={closeNav}
            >
              Experience
            </Link>
            <Link href="/#about" className="ml-auto text-xl" onClick={closeNav}>
              About
            </Link>
          </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
};
