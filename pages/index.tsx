import Head from 'next/head'
import Image from 'next/image'
import { Logo } from '../components/images/Logo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Traid Service</title>
        <meta name="description" content="Traid Service - Надёжный поставщик метала" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="hero">
          <div className="container">
            <Logo />
            <p>Hi</p>
          </div>
        </div>
        <div className='about'>
          <div className="container">
            <p>Hi</p>
          </div>
        </div>
    </>
  )
}
