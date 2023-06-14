import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/portfolio.png";
import gif1 from "../../public/images/projects/portofolio2.gif";

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
  gif,
}) => {
  return (
    <div>
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2x1">
        <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2x1" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={gif}
            className="absolute w-[47.1%] border border-solid border-dark rounded-xl opacity-0 hover:opacity-100 duration-500"
          />
          <Image
            src={image}
            alt={title}
            className="w-full h-auto border border-solid border-dark rounded-xl"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
              Demo do Projecto
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ title, type, image, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light p-6">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-lg font-semibold underline">
            Demo
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Andrei Boulter | Projectos</title>
        <meta name="description" content="Projectos" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Projectos" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
                gif={gif1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
                gif={gif1}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Projecto front end"
                image={project1}
                summary="Projecto front end flag"
                link="/"
                type="Projecto em Destaque"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
