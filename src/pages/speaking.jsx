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
    <Card as="article">
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
        <title>Speaking - Jon Christie</title>
        <meta
          name="description"
          content="Thank you for visiting my portfolio! "
        />
      </Head>
      <h6 className="container contact" style={{ padding:'20px', maxWidth:`768px`}}>As a software designer, founder, and amateur astronaut, I am excited to connect with potential opportunities and collaborations. With over a decade of experience as a front-end developer, I have worked extensively with JavaScript, TypeScript, React, and React Native to enhance and create websites for clients.
        <br />
        <br />
        In addition to my technical expertise, I have a passion for teaching and providing guidance to clients and the community. I strive to bring clarity to confusion on a daily basis. My commitment to learning and adapting, along with my deep interests in gaming, technology, science, and green energy, have made me an invaluable asset to the teams I've worked with.
        <br />
        <br />
        If you are interested in discussing potential projects, employment opportunities, or simply want to connect, please feel free to reach out. You can contact me at [Your Contact Information]. I am eager to explore how I can contribute my skills, knowledge, and enthusiasm to your organization's success.
      </h6>
    </>
  )
}
