// rafce
"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const CustomLink = ({ link, name }: { link: string; name: string }) => {
  const currentUrl = usePathname();

  console.log(currentUrl);

  const isActive = currentUrl === link;

  return (
    <Link
      href={link}
      // className={clsx(
      //   "border border-gray-200 px-2 py-1",
      //   //    {
      //   //     "bg-gray-300 text-black": status === "pending",
      //   //     "bg-green-500 text-white": status === "paid",
      //   //   }
      //   {
      //     "bg-blue-300": isActive,
      //   }
      // )}
      className={clsx("border border-gray-200 px-2 py-1 m-2", {
        "bg-blue-200": isActive,
      })}
    >
      {name}
    </Link>
  );
};

export default CustomLink;
