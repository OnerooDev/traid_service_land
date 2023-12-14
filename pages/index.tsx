import Head from 'next/head';
import { Logo, FoilRoll, MetallBars, ControlPanel, Frezer, HelpGirl, LogoGreen } from '../components/images';
import {Form} from '../components/Form';
 
export default function Home() {

  return (
    <>
      <Head>
        <title>Traid Service</title>
        <meta name="description" content="Traid Service - Комплексный поставщик металла и электронной компонентной базы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="hero">
          <div className="container">
            <div className="flex">
              <Logo />
              <div className='menu'>
                <p className='menu_a'>E-mail: info@traidservice.ru</p>
                <p className='menu_a'>Тел: +7 (926) 058-06-17 (Telegram, WhatsApp)</p>
              </div>
            </div>
            <br />
            <div className="flex padding_content">
              <div className='head'>
                <p className='header padding'>ТРЕЙДСЕРВИС - ваш надежный поставщик</p>
                <p className='description padding'>Комплексные поставки металлопроката и электронной компонентной базы отечественного и иностранного производства</p>
                <br />
                <a className='hero_a' href='#products'>Спектр услуг</a>
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
                <p className='head'>ЭЛЕКТРОННАЯ КОМПОНЕНТНАЯ БАЗА (ЭКБ)</p>
                <p className='desc'>- Отечественного и иностранного производства</p>
                <p className='desc'>- Корпусная и узловая сборка электронных устройств</p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer' id="footer">
          <div className='form_block'>
            <div className='form_line'>
              <div className='contacts'>
                <p className='he'>Контакты</p>
                <p className='text'>+7 (495) 748-96-88</p>
              </div>
              <HelpGirl />
              <Form />
            </div>
          </div>
          <br />
          <div className='info_block'>
              <p className='copyright'>© 2023 Все права защищены</p>
          </div>
        </div>
    </>
  )
}
