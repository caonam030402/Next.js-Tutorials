import React, { Suspense } from "react";
import Loading from "./loading";

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
