import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabin">Cabin</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </div>
  );
}

export default Navigation;
