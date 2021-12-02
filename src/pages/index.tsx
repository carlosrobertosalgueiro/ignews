import Head from 'next/head'
import home from '../styles/home.module.scss'

export default function Home() {
  return (
    <>

    <Head>
    <title>Inicio | Ig.News</title>
    </Head>

    <h1 className={home.title} >Hello Word</h1>

    </>
  )
}
