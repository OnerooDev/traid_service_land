import {useState, FC} from 'react'

export const Form = ({}) => {
    const [email, setEmail] = useState('')
    const handleChange = (event: any) => setEmail(event.target.value)
  
    return (
        <div className='form_box'>
            <p className='quest'>ИНТЕРЕСЕН ТОВАР ИЛИ ХОТИТЕ УЗНАТЬ ПОДРОБНЕЕ?</p>
            <p className='form_head'>ОСТАВЬТЕ ЗАЯВКУ</p>
            <input className='input_field' type="text" id="email" name="email" placeholder={'Введите ваш Email или Номер'} onChange={handleChange} />
            <div className='form_button' onClick={() => (email)}>Подтвердить</div>
            <p className='description'>Наш сотрудник свяжется с вами в ближайшие 15 минут</p>
        </div>
    )
}