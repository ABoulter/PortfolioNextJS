import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Construido com
          <span className="text-primary text-2x1 px-1">&#9825;</span>
          por&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Andrei Boulter
          </Link>
        </div>
        <Link
          href="/contacto"
          target={"_blank"}
          className="underline underline-offset-2">
          Diz Olá!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
