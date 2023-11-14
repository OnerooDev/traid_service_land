import Head from 'next/head'
import Image from 'next/image'
import { Logo } from '../components/images/Logo';
import { FoilRoll } from '../components/images/FoilRoll';
import { BigBeam } from '../components/images/BigBeam';

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
                <a href='#products'>Продукция</a>
                <a href='#about'>О нас</a>
                <div className='centered'>
                  <a href='#contact'>Обратная cвязь</a>
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
        <div className='about' id='about'>
          <div className="container">
            <div className='head centered'>
              <p className='header'>О нашей компании</p>
              <p className='description'>Качество - наш приоритет</p>
            </div>
            <br />
            <div className='about_box'>
              <div className='info_block'>
                <img src='/imgs/storage_photo.png' />
                <p className='head'>Наши склады</p>
                <p className='desc'>Сухие, современные складские помещения</p>
              </div>
              <BigBeam />
              <div className='info_block'>
                <p className='head'>Транспортировка</p>
                <p className='desc'>Мы имеем огромный парк большегрузных автомобилей</p>
                <img src='/imgs/transport_photo.png' />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
