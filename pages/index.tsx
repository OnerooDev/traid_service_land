import Head from 'next/head'
import Image from 'next/image'
import { Logo } from '../components/images/Logo';
import { FoilRoll } from '../components/images/FoilRoll';

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
            <div className="flex">
              <Logo />
              <div className='menu'>
                <p>Поддержка</p>
                <p>О нас</p>
                <div className='centered'>
                  <p>Обратная cвязь</p>
                </div>
              </div>
            </div>
            <div className="flex padding_content">
              <div className='head'>
                <p className='header padding'>Все виды металла в одном месте</p>
                <p className='description padding'>Поставщик высококачественного металлопроката</p>
                <br />
                <br />
                <button>
                  <p>Спектр услуг</p>
                </button>
              </div>
              <FoilRoll />
            </div>
          </div>
        </div>
        <div className='about'>
          <div className="container">
            <div className='flex centered'>
              <p className='headders'>О нашей компании</p>
            </div>
          </div>
        </div>
    </>
  )
}
