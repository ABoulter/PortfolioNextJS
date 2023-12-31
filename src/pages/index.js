import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrei Boulter's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Andrei Boulter"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="O meu nome é Andrei Boulter"
                className="!text-6x1 text-left"
              />
              <p className="my-4 text-base font-medium self-start">
                Sou um Full-Stack Web Developer Junior, à procura de aprender
                mais e crescer na área!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}>
                  Currículo
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:paink_34@hotmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
