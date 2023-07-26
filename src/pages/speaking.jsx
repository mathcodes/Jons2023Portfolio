import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
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

export default function Speaking() {
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
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 font-bold font-bold">As a Software Developer & Trainer...</h1>
          <h5 className="container contact text-black-800 font-bold transition dark:text-zinc-100 font-bold font-bold" style={{ padding: '20px', maxWidth: `768px` }}>... I am excited to connect with potential opportunities and collaborations. With over a 5+ years of experience as a front-end developer, I have worked extensively with JavaScript, TypeScript, React, React Native, WordPress, SquareSpace, HTML, CSS, PHP, Python and more, including libraries and frameworks   to enhance and create websites for clients.
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
          <div class="flex flex-col text-2xl   md:space-x-4 text-gray-900 dark:text-white"><hr />
            <h4 className="flex text-3xl font-extrabold mt-6 my-2">Jon Christie</h4>
            {/* make link to call 9193683369 */}
            <a className="my-2" href="tel:9193683369"
            ><h5>919-368-3369</h5></a>
            <a className="my-2" href="mailto:jon@jonchristie.net"><h5>jon@jonchristie.net</h5></a>
          </div>
          {/* <form action="#" class="space-y-8">


          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form> */}
        </div>
      </section>
    </>
  )
}
