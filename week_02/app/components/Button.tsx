"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type BtnType = {
  btnName: string;
  style: string;
};

const Button = ({ btnName, style }: BtnType) => {
  const router = useRouter();
  return (
    <button className={style} onClick={() => router.push("/aboutus")}>
      {btnName}
    </button>
  );
};

export default Button;
