//import {useState, FC} from 'react'
import { BigBeam} from './images';

export const About = ({}) => {
    return (
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
    )
}