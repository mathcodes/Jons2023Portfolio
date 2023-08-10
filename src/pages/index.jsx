import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import gncoLogo from '@/images/logos/gncoLogo.png'
import asksageLogo from '@/images/logos/askSageLogo.png'
import scbLogo from '@/images/logos/scbLogo.png'
import te21Logo from '@/images/logos/te21Logo.jpg'
import pivotousLogo from '@/images/logos/pivotousLogo.png'
import image1 from '@/images/1.png'
import image2 from '@/images/2.png'
import image3 from '@/images/3.png'
import image4 from '@/images/4.png'
import image5 from '@/images/5.png'
import image6 from '@/images/6.png'
import image7 from '@/images/7.png'
import image8 from '@/images/8.png'
import image9 from '@/images/9.png'
import image10 from '@/images/10.png'


import { formatDate } from '@/lib/formatDate'
import Slideshow from '@/components/SlideShow'
import Journals from '@/components/Journals'



function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className=" p-3 h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'asksage.ai',
      title: 'Frontend Developer',
      logo: asksageLogo,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Gladis & Co.',
      title: 'Web Developer',
      logo: gncoLogo,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Sweet Clover Barn',
      title: 'Web Developer',
      logo: scbLogo,
      start: 'April 2021',
      end: 'June 2021',
    },
    {
      company: 'TE21, Inc.',
      title: 'Curriculum Developer',
      logo: te21Logo,
      start: '2016',
      end: '2018',
    },
    {
      company: 'Pivotous',
      title: 'Shift Supervisor',
      logo: pivotousLogo,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-bold font-bold">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        <span className="ml-3">


          Clients</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 font-bold font-bold">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-100 font-bold">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-800 dark:text-zinc-100 font-bold font-bold"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a href="/files/Jon_Christie_Resume.pdf" download="Jon_Christie_CV.pdf" >

        <div className="group stroke-red-600 transition group-active:stroke-red-600 dark:group-hover:stroke-red-500 dark:group-active:stroke-red-500">
          <Button variant="secondary" className="mt-6 w-full relative border stroke-red-600 border-red-600 text-white font-bold transition group-active:stroke-red-600 dark:group-hover:stroke-red-900 dark:group-active:stroke-red-500">
            Download CV
            <ArrowDownIcon className="h-4 w-4 stroke-red-600 transition group-active:stroke-red-600 dark:group-hover:stroke-red-500 dark:group-active:stroke-red-500" />
          </Button></div></a>
    </div>
  )
}

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  const allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const shuffledImages = [...allImages].sort(() => 0.5 - Math.random());
    const selectedImages = shuffledImages.slice(0, 5);
    setRandomImages(selectedImages);
  }, []);

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {randomImages.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt="this is a random image made with Lensa using jonchristie's jon christie images photos"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy" // Add lazy loading attribute
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Jon Christie - Software Developer and Trainer
        </title>
        <meta
          name="description"
          content="Front-End Developer with experience working with Javascript, Typescript, React and React Native enhancing and creating websites for clients. As a teacher for 10 years, I also provide guidance and content to clients and the community, bringing clarity to confusion on a daily basis.

          My ongoing drive to learn and adapt along with my passion for coding, education, gaming, technology, science and green energy have helped me become an irreplaceable asset for the companies and teammates I’ve had the pleasure working with over the years. I’m always looking for new challenges and opportunities to grow and learn."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-00 dark:text-zinc-100 font-bold font-bold sm:text-5xl">
            Software Developer & Trainer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-100 font-bold">
            I’m Jon, a software developer and trainer looking for work!
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com/jcircle9"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col ">
            <Journals />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
