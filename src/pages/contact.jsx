import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import clsx from 'clsx'

function ContactSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
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

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-[#2ae4eb] dark:text-zinc-200 dark:hover:text-[#2ae4eb]"
      >
        <Icon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#2ae4eb]" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>

    // <li class="mt-4 flex">
    // <a class="group flex text-sm font-medium text-zinc-800 transition hover:text[#2ae4eb] dark:text-zinc-200 dark:hover:text[#2ae4eb]">
    // <Icon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#2ae4eb]" />
    // <span className="ml-4">{children}</span>
    // </a>
    // </li>

  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article" >
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Thank you for visiting my portfolio! "
        />
      </Head>
      <SimpleLayout title="Get in touch today!">
        <div className="container contact" style={{ padding: '20px', maxWidth: `768px` }}>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">As a Software Developer & Trainer...</h1>
          <h5 className="container contact text-black-800 transition dark:text-zinc-100" style={{ padding: '20px', maxWidth: `768px` }}>... I am excited to connect with potential opportunities and collaborations. With over a 5+ years of experience as a front-end developer, I have worked extensively with JavaScript, TypeScript, React, React Native, WordPress, SquareSpace, HTML, CSS, PHP, Python and more, including libraries and frameworks   to enhance and create websites for clients.
            <br />
            <br />
            In addition to my technical expertise, I have a passion for teaching and providing guidance to clients and the community. I strive to bring clarity to confusion on a daily basis. My commitment to learning and adapting, along with my deep interests in gaming, technology, science, and green energy, have made me an invaluable asset to the teams I&apos;ve worked with.
            <br />
            <br />
            If you are interested in discussing potential projects, employment opportunities, or simply want to connect, please feel free to reach out. You can contact me using the information provided below. I am eager to explore how I can contribute my skills, knowledge, and enthusiasm to your organization&apos;s success.
          </h5>
        </div>
      </SimpleLayout>
      <section class=" ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
          <hr className="mb-4"/>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div class="flex flex-col text-2xl  first-letter: text-gray-900 dark:text-white">
              <h4 className="flex text-3xl font-extrabold mt-6 my-2">Jon Christie</h4>
              <a className="my-2" href="tel:9193683369"
              ><h5>919-368-3369</h5></a>
              <a className="my-2" href="mailto:jon@jonchristie.net"><h5>jon@jonchristie.net</h5></a>
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
                  className="mt-4 border-b border-zinc-100 pb-8 dark:border-zinc-700/40"
                >
                  jon@jonchristie.net
                </SocialLink>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
