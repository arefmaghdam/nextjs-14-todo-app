import Home from "@/app/page";
import Link from "next/link";
import React, { FC } from "react";

const AppRouter: FC = () => {
  return (
    <div className="text-center">
      <Link className="mx-5 text-sm" href="/">
        Home
      </Link>
      <Link className="mx-5 text-sm" href="strategic-plan">
        Strategic plan
      </Link>
      <Link className="mx-5 text-sm" href="yearly-plan">
        Yearly plan
      </Link>
      <Link className="mx-5 text-sm" href="monthly-plan">
        Monthly plan
      </Link>
      <Link className="mx-5 text-sm" href="weekly-plan">
        Weekly plan
      </Link>
      <Link className="mx-5 text-sm" href="daily-plan">
        Daily plan
      </Link>
    </div>
  );
};

export default AppRouter;
