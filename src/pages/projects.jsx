import Head from 'next/head';
import Image from 'next/image';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
// import logoAnimaginary from '@/images/logos/animaginary.svg';
// import logoCosmos from '@/images/logos/cosmos.svg';
// import logoHelioStream from '@/images/logos/helio-stream.svg';
// import logoOpenShuttle from '@/images/logos/open-shuttle.svg';
// import logoPlanetaria from '@/images/logos/planetaria.svg';
// import logoReact from '@/images/logos/react.svg';
import cfd from '@/images/projects/cfd.png';
import askSage from '../images/projects/AskSage.png';
import gptfordevs from '@/images/projects/ChatGPT.png';
// // import figma, html, css, react, firebase, GitHub, tailwind
// import Figma from '@/images/logos/figma.svg';
// import HTML from '@/images/logos/html.svg';
// import CSS from '@/images/logos/css.svg';
// import ReactLogo from '@/images/logos/react.svg';
// import Firebase from '@/images/logos/firebase.svg';
// import GitHub from '@/images/logos/GitHub.svg';
// import Tailwind from '@/images/logos/tailwind.svg';
// import OpenAi from '@/images/logos/openaism.svg';
// import Emotion from '@/images/logos/emotion.png';
// import Bootstrap from '@/images/logos/bootstrap.svg';
// import MUI from '@/images/logos/materialui.svg';
// import Python from '@/images/logos/python.svg';
// import Javascript from '@/images/logos/javascript.svg';
// import Git from '@/images/logos/git.svg';
// import NextJS from '@/images/logos/nextJS.svg';
// import Express from '@/images/logos/expressjs.png';

const projects = [
  {
    name: 'Content For Developers',
    description:
      'This open-source project aims to please users with not just another site full of resources, exercises, and solutions to problems. Contributors are encouraged to upload and share any additional content such as visual diagrams, animated GIFs, notes, charts, or whatever works for them in an effort to provide a more complete learning experience for all utilizing different learning styles.',
    linkLive: 'http://contentfordevelopers.com',
    linkGH: 'https://GitHub.com/mathcodes/contentfordevelopers',
    image: cfd,
    // tech: [ReactLogo, Tailwind, HTML, CSS, GitHub, Emotion, MUI, Express],
  },
  {
    name: 'AskSage.ai',
    description:
      'New role as the UX/UI and front-end developer for a startup in the AI space. I am responsible for the design, accessibility, and adherence to best practices for the front-end of the application regarding the implementation of AI and machine learning.',
    linkLive: 'https://asksage.ai',
    linkGH: '#',
    image: askSage,
    // tech: [Figma, ReactLogo, Bootstrap, HTML, CSS, Python, Javascript, Git, GitHub],
  },
  {
    name: 'ChatGPT for Developers',
    description:
      'Utilize and learn about the different models offered by OpenAI’s GPT-3 API. This project is a simple chat application that allows users to interact with the different models and see the results in real-time.',
    linkLive: 'https://chatgpt-for-developers.vercel.app/',
    linkGH: 'https://GitHub.com/mathcodes/chatgpt-for-developers',
    image: gptfordevs,
    // tech: [OpenAi, ReactLogo, Tailwind, OpenAi, Emotion, HTML, CSS, GitHub, NextJS, Firebase],
  },
];





export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jon Christie</title>
        <meta name="description" content="Some of my most recent and favorite projects." />
      </Head>
      <SimpleLayout title="Some of my most recent and favorite projects">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
                <Image src={project.image} alt="" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <div>

              </div>
              <Card.Description>{project.description}</Card.Description>
              <div className="relative z-10 mt-2 flex flex-row justify-center space-x-4 space-y-0 text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
                <a href={project.linkGH} className="m-0 inline-flex h-8 items-center justify-center rounded-full px-1.5 py-0.5 text-xs font-medium w-20 ring-1 ring-inset border text-black ring-black hover:scale-105 hover:border-white bg-gray-200 hover:bg-gray-400 hover:text-white">
                  GitHub
                </a>
                <a href={project.linkLive} className="m-0 inline-flex h-8 items-center justify-center rounded-full px-1.5 py-0 text-xs font-medium w-20 text-black ring-1 ring-inset border border-white ring-green-600/20 hover:border-[#2ae4eb] hover:text-white bg-[#2ae4eb] hover:bg-[#47cdd2]">
                  Live
                </a>
              </div>
            </Card>

          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
