import React from "react";

export default function DoashboardLayout(props: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <>
      <nav>Header</nav>
      <main>{props.children}</main>
      <div className="grid grid-cols-2">
        <div>{props.left}</div>
        <div>{props.right}</div>
      </div>
    </>
  );
}
