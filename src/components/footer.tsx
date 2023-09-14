import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content xl:w-3/4 xl:mx-auto">
      <aside>
        <p className="text-4xl font-semibold">VN</p>
        <p>
          Viet Nguyen LLC.
          <br />
          Providing reliable tech since 2021
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.linkedin.com/in/vietnguyen-dev/">
            <Image
              src="/linkedin.png"
              height="24"
              width="24"
              alt="link to my linkedin"
            />
          </Link>
          <Link href="https://github.com/vietnguyen-dev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .298c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.58 0-.287-.011-1.04-.015-2.04-3.006.653-3.64-1.445-3.64-1.445-.492-1.246-1.2-1.578-1.2-1.578-.983-.67.074-.658.074-.658 1.086.076 1.657 1.113 1.657 1.113.963 1.651 2.53 1.176 3.147.9.097-.696.376-1.175.685-1.445-2.396-.27-4.908-1.198-4.908-5.332 0-1.18.423-2.142 1.114-2.89-.111-.272-.48-1.366.105-2.842 0 0 .897-.288 2.938 1.103a10.426 10.426 0 0 1 2.794-.378 10.45 10.45 0 0 1 2.794.378c2.04-1.392 2.936-1.103 2.936-1.103.585 1.476.215 2.57.105 2.842.692.748 1.114 1.71 1.114 2.89 0 4.144-2.514 5.06-4.92 5.324.387.335.732.993.732 1.996 0 1.444-.013 2.609-.013 2.959 0 .32.191.698.799.579a12.013 12.013 0 0 0 8.21-11.385c0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
