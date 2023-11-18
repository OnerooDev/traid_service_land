import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Logo, FoilRoll, BigBeam, MetallBars, ControlPanel, Frezer, HelpGirl, LogoGreen } from '../components/images';

export default function Home() {

  const [email, setEmail] = useState('')
  const handleChange = (event: any) => setEmail(event.target.value)

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
                <a className='menu_a' href='#products'>Продукция</a>
                <a className='menu_a' href='#about'>О нас</a>
                <a className='menu_a' href='#footer'>Обратная cвязь</a>
              </div>
            </div>
            <div className="flex padding_content">
              <div className='head'>
                <p className='header padding'>Все виды металла в одном месте</p>
                <p className='description padding'>Поставщик высококачественного металлопроката</p>
                <br />
                <br />
                <a className='hero_a' href='#products'>Спектр услуг</a>
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
        <div className='services' id='products'>
          <div className="container">
            <div className='head'>
              <p className='header'>Спектр услуг</p>
              <p className='description'>Качество - наш приоритет</p>
            </div>
            <div className='service_box'>
              <div className='service_block'>
                <MetallBars />
                <p className='head'>МЕТАЛЛОПРОКАТ</p>
                <p className='desc'>- Черный металлопрокат</p>
                <p className='desc'>- Цветной металлопрокат</p>
              </div>
              <div className='service_block'>
                <Frezer />
                <p className='head'>МЕТАЛЛООБРАБОТКА</p>
                <p className='desc'>- Инженерия - проектирование промышленных деталей и корпусов по чертежам и образцам заказчика</p>
                <p className='desc'>- Токарная и фрезерная обработка на станках с ЧПУ и универсальных станках</p>
                <p className='desc'>- Лазерная резка листового металла и труб</p>
                <p className='desc'>- Гибка листового металла</p>
                <p className='desc'>- Сварка лазером, полуавтоматом, аргоном, роботом</p>
                <p className='desc'>- Гибка листового металла</p>
              </div>
              <div className='service_block'>
                <ControlPanel />
                <p className='head'>ЭКБ</p>
                <p className='desc'>- Корпусная и узловая сборка электронных устройств</p>
              </div>
            </div>
          </div>
          {email}
        </div>
        <div className='footer' id="footer">
          <div className='form_block'>
            <div className='form_line'>
              <HelpGirl />
              <div className='form_box'>
                <p className='quest'>ИНТЕРЕСЕН ТОВАР ИЛИ ХОТИТЕ УЗНАТЬ ПОДРОБНЕЕ?</p>
                <p className='form_head'>ОСТАВЬТЕ ЗАЯВКУ</p>
                <input className='input_field' type="text" id="email" name="email" placeholder={'Ввелите ваш Email или Номер'} onChange={handleChange} />
                <div className='form_button' onClick={() => null}>Подтвердить</div>
                <p className='description'>Наш сотрудник свяжется с вами в ближайшие 15 минут</p>
              </div>
            </div>
          </div>
          <div className='info_block'>
              <LogoGreen />
              <p className='copyright'>© 2023 Все права защищены</p>
              <a className='social_media' href='https://t.me/'>Соц.сети</a>
          </div>
          <div className='sign_block'>
              <a className='sign' href='https://t.me/oneroodev'>by OnerooDev</a>
          </div>
        </div>
    </>
  )
}
