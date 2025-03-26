"use client";
import LogoSvg from "@/images/logo";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
export default function Headers() {
  const currentPath = usePathname();

  return (
    <div className="flex z-10 flex-row justify-between items-center p-5 lg:px-38  fixed w-full h-[70px] lg:h-[90px] top-0 left-0 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)]">
      <div className="logo">
        <LogoSvg />
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="flex lg:hidden px-1 py-2 ">
            <AlignJustify size={30} />
          </div>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="border-b p-5">
                <LogoSvg />
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex  flex-col w-full ">
            <ul className="flex flex-col p-3 gap-5">
              <a
                href="/"
                className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none  flex-grow-0"
              >
                Home
              </a>
              <a
                href="/about"
                className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none  flex-grow-0"
              >
                About Us
              </a>
              <div
                className={` font-inter font-semibold text-[16px] leading-[36px] flex items-center capitalize  ${
                  currentPath == "/territorypartner"
                    ? "text-[#004170]"
                    : "text-[#0BB501] "
                } flex-none  flex-grow-0`}
              >
                {currentPath == "/territorypartner"
                  ? "Territory Partner"
                  : "Project Partner"}
                <svg
                  width="24"
                  height="24"
                  stroke={`  ${
                    currentPath == "/territorypartner"
                      ? "[#026FBE]"
                      : "[#0BB501]"
                  } `}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 15L7 10H17L12 15Z" fill="#0BB501" />
                </svg>
              </div>
              <a
                href="/contact"
                className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none order-3 flex-grow-0"
              >
                Contact Us
              </a>
            </ul>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Menu list */}
      <div className="hidden lg:flex flex-row p-0 gap-10  flex-none order-1 flex-grow-0 mr-8">
        <a
          href="/"
          className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none  flex-grow-0"
        >
          Home
        </a>
        <a
          href="/about"
          className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none  flex-grow-0"
        >
          About Us
        </a>
        <div
          className={` font-inter font-semibold text-[16px] leading-[36px] flex items-center capitalize ${
            currentPath == "/territorypartner"
              ? "text-[#004170]"
              : "text-[#0BB501] "
          } flex-none  flex-grow-0`}
        >
          {currentPath == "/territorypartner"
            ? "Territory Partner"
            : "Project Partner"}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#026FBE"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15L7 10H17L12 15Z" fill="#0BB501" />
          </svg>
        </div>
        <a
          href="/contact"
          className=" font-inter font-medium text-[16px] leading-[36px] flex items-center capitalize text-black hover:text-[#0BB501] flex-none order-3 flex-grow-0"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
