import Head from 'next/head'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Blog({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.slug}`} target="_blank">
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Jon Christie</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Check out my articles"
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        {articles.map((article) => (

          <Blog key={article.slug} article={article} />
        ))}
      </SimpleLayout>
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
//     },
//   }
// }


// Here we can use a cache mechanism to store the result of getAllArticles to avoid unnecessary calls.
export async function getStaticProps() {
  try {
    const articles = await getAllArticles();
    return {
      props: {
        articles: articles.map(({ component, ...meta }) => meta),
      },
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        articles: [],
      },
    }
  }
}
