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
          <div>
            
          </div>





          <div className={style.wrapper}>
            <div className={style.mp}>
              <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/4ca4e73e-1119-48ce-8921-66e3679d4532.jpg" alt="logo" className={style.img2} />
              <div>
                <h3>Четыре сезона</h3><br />
                <p>Средняя 30 см, традиционное тесто</p>
              </div>
            </div>
            <hr />
            <div className={style.footer}>
              <h3>1058 сом</h3>
              <div className={style.btn2}><button className={style.bnt} type="button"><svg width="10" height="10" viewBox="0 0 10 10" ><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg></button><div >2</div><button data-testid="menu__meta-product_add-control" type="button"><svg width="10" height="10" viewBox="0 0 10 10" class="icon"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g></svg></button></div>
            </div>

            <div className={style.wrapper1}>
              <h3>Добавить к заказу?</h3>
              <div className={style.often}>
                <div className={style.often1}>
                  <img src="https://dodopizza-a.akamaihd.net/site-static/dist/e73ba65cd5f12f760af6.png" alt="logo" /> 
                  <h5>Соусы</h5>
                </div>
                <div className={style.often2}>
                  <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/dc8dfaf710fc4cd784850dbe8b73ea45_138x138.jpeg" alt="logo" />
                  <h5>Картовфель из печи, большой <br/> 169 сом</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}