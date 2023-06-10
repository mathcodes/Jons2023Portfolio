import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Jon Christie</title>
        <meta
          name="description"
          content="I’m Jon Christie. I live in Raleigh, North Carolina and work as a Front-End Developer at a small company called 3Advance."
       />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              {/* <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              /> */}
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-circle rotate-3 rounded-2xl bg-none object-cover  "
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Jon Christie
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Born in South Africa, raised in Philadelphia, and now in North Carolina where I spend my days coding, collaborating, training, and networking to become the best full-stack web developer on your next team!
              </p>
              <p>
                Front-End Developer with experience working with Javascript, Typescript, React and React Native enhancing and creating websites for clients. As a teacher for 10 years, I also provide guidance and content to clients and the community, bringing clarity to confusion on a daily basis.
              </p>
              <p>
                My ongoing drive to learn and adapt along with my passion for coding, education, gaming, technology, science and green energy have helped me become an irreplaceable asset for the companies and teammates I’ve had the pleasure working with over the years.
              </p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/jCircle9" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/jcirclenine/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/mathcodes" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jonpchristie/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jon@jonchristie.net"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jon@jonchristie.net
              </SocialLink>
            </ul>
          </div>
        </div>
          <div className="lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Skills
            </h1>
            <div className="flex flex-wrap space-x-2  justify-center">
              <img src="https://img.shields.io/badge/-Express-black?style=flat&logo=express&logoColor=white" alt="Express" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-ReactJS-blue?style=flat&logo=react&logoColor=white" alt="ReactJS" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-MongoDB-green?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-React_Native-61DAFB?style=flat&logo=react&logoColor=white" alt="React-Native" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-TypeScript-blue?style=flat&logo=typescript&logoColor=white" alt="TypeScript" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=javascript&logoColor=white" alt="JavaScript" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-HTML-orange?style=flat&logo=html5&logoColor=white" alt="HTML" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-CSS-blue?style=flat&logo=css3&logoColor=white" alt="CSS" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Python-blue?style=flat&logo=python&logoColor=white" alt="Python" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Django-green?style=flat&logo=django&logoColor=white" alt="Django" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Flask-black?style=flat&logo=flask&logoColor=white" alt="Flask" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-SQL-blue?style=flat&logo=sql&logoColor=white" alt="SQL" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-noSQL-green?style=flat" alt="noSQL" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-OpenAI_API-blue?style=flat" alt="OpenAI-API" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-UI_UX-purple?style=flat" alt="UI/UX" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Git-orange?style=flat&logo=git&logoColor=white" alt="Git" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Jest-red?style=flat&logo=jest&logoColor=white" alt="Jest" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-React_Testing_Library-purple?style=flat" alt="React-Testing-Library" style={{height:"1.5rem"}} className="my-2"/>
              <img src="https://img.shields.io/badge/-Open_Source-brightgreen?style=flat" alt="Open-Source" style={{height:"1.5rem"}} className="my-2"/>

            </div>
          </div>
      </Container>
    </>
  )
}
