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
          <div className="lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Skills
            </h1>
            <div className="flex flex-wrap justify-center">
              <img src="https://raw.githubusercontent.com/mathcodes/Jons2023Portfolio/main/src/images/logos/openai.svg" alt="OpenAI" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML 5" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS 3" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" width="40px" />
              <img src="https://ih1.redbubble.net/image.4697323204.3036/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.jpg" alt="OpenAI API" width="40px" height="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Natural_Language_Processing_Logo.svg" alt="NLP" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Machine_learning_icon.png" alt="ML" width="40px" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Artificial_intelligence_icon.png" alt="AI" width="40px" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
