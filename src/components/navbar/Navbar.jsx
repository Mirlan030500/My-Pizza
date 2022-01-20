import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import style from './Navbar.module.css'

export default function Navbar({ basket }) {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const onModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={"container " + style.navka}>
      <ul className={style.ull}>
        <li> Пицца</li>
        <li>Комбо</li>
        <li>Закуски</li>
        <li>Десерты</li>
        <li>Напитки</li>
        <li>Другие товары</li>
        <li>Акции</li>
        <li>Контакты</li>
        <li>О нас</li>
        <li> <a id="camera-link" className={style.mig} data-type="primary">  Прямой эфир</a></li>

        <button className={style.btn} onClick={onModal}>Корзина <span>|</span>
          <span> {basket.length}</span>
        </button>
      </ul>
      <div onClick={onModal} className={style.modalWrapper + " " + (isOpen ? style.opened : "")}>
        <div onClick={(e) => e.stopPropagation()} className={style.modal}>
          <button onClick={onModal}> Close </button>
          <div>
            <h1>{basket.length}  товар на {basket.reduce((sum, pizza) => sum + pizza.price, 0)} сомов </h1>
          </div>
          <hr />
          <div>
            
          </div>
        </div>
      </div>
      <hr />


    </div>
  )
}