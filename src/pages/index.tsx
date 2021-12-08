import Head from 'next/head'
import style from './home.module.scss'

export default function Home() {
  return (
    <>

    <Head>
    <title>Home | Ig.News</title>
    </Head>

    <main className={style.contentContainer} >
        <section className={style.hero}>
          <span> Hey, Welcone</span>
          <h1> News About the <span>React</span> world</h1>
          <p>
              Get acess to all publication <br/>
              <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="" />

    </main>

    </>
  )
}
