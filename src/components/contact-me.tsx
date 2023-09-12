import React from "react";

interface iContactMe {
  extraClass?: string | null;
}

const ContactMe: React.FC<iContactMe> = ({ extraClass }) => {
  return (
    <>
      <button
        className={`btn btn-primary ${extraClass && extraClass}`}
        onClick={() => {
          if (document) {
            (
              document.getElementById("contact-me") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        Contact Me
      </button>
      <dialog id="contact-me" className="modal">
        <div className="modal-box">
          <div className="flex">
            <h3 className="font-bold text-lg">Contact Me</h3>
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
              className="ml-auto"
              onClick={() => {
                if (document) {
                  (
                    document.getElementById("contact-me") as HTMLFormElement
                  ).close();
                }
              }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <p className="py-4 mt-1">Call me at: (971) 998 - 2695</p>
          <p className="">Email me at: vietnguyent22@gmail.com</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
export default ContactMe;
