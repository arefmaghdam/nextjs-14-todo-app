import { LinkProps } from "@/types/NavbarTypes";
import Link from "next/link";
import React, { FC } from "react";

// Use the defined type for navbar links props
const LinkComponent: FC<LinkProps> = ({ linkHref, linkTitle }) => {
  return (
    <Link className="mx-5 text-sm" href={linkHref}>
      {linkTitle}
    </Link>
  );
};

export default LinkComponent;
