"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Button = () => (
  <button
    disabled
    type="button"
    className={'custom-btn'}
  >
    <span className={`flex-1`}>{'title'}</span>
    (
    <div className="relative w-6 h-6">
      <Image
        src={''}
        alt="arrow_left"
        fill
        className="object-contain"
      />
    </div>
    )
  </button>
);

export default Button;
