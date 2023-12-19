import React, { FC } from "react";
import LinkComponent from "../Elements/LinkComponent";
import { sidebarHomeLink } from "@/db/sidebar-links";

// All of the routes is defined in sidebarRouter component
const SidebarRouter: FC = () => {
  return (
    <div className="grid grid-cols-1 my-2">
      {sidebarHomeLink.map((item) => (
        <div className="my-4">
          <LinkComponent
            key={item.id}
            linkTitle={item.linkTitle}
            linkHref={item.linkHref}
          />
        </div>
      ))}
    </div>
  );
};

export default SidebarRouter;
