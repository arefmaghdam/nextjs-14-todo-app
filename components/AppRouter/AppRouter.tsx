import React, { FC } from "react";
import LinkComponent from "../Elements/LinkComponent";
import { navbarLinkArray } from "@/db/navbar-links";

// All of the routes is defined in this component
const AppRouter: FC = () => {
  return (
    <div className="text-center">
      {navbarLinkArray.map((item) => (
        <LinkComponent
          key={item.id}
          linkTitle={item.linkTitle}
          linkHref={item.linkHref}
        />
      ))}
    </div>
  );
};

export default AppRouter;
