import {useState, FC} from 'react'

export const Form = ({}) => {
    const [placeholder, setPlaceholder] = useState('Введите Email или Номер')
    const [email, setEmail] = useState('');
    const [dis, setDis] = useState(false);
    const [text_button, setText] = useState('Отправить');
    const handleChange = (event: any) => setEmail(event.target.value);
  
    const sendEmail = async () => {
        if (email) {
            const res = await fetch('/api/new_req?text=' + email);
            setText('Отправлено');
            setDis(true);
        } else {
            setPlaceholder('Email или Номер не введен');
        }
    }
    return (
        <div className='form_box'>
            <p className='quest'>ИНТЕРЕСЕН ТОВАР ИЛИ ХОТИТЕ УЗНАТЬ ПОДРОБНЕЕ?</p>
            <p className='form_head'>ОСТАВЬТЕ ЗАЯВКУ</p>
            <input className='input_field' type="text" id="email" name="email" placeholder={placeholder} onChange={handleChange} />
            <button className='form_button' disabled={dis} onClick={sendEmail}>{text_button}</button>
            <p className='description'>Наш сотрудник свяжется с вами в ближайшие 15 минут</p>
        </div>
    )
}