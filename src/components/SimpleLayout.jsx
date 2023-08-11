import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className=" mt-6 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl   tracking-tight text-zinc-800 dark:text-[#1bd8e1]   sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-800 dark:text-zinc-100  ">
          {intro}
        </p>
      </header>
      <div className=" mt-6 font-light">{children}</div>
    </Container>
  )
}
