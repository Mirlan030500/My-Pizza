import css from "./Header.module.css"

export default function Headers() {
    return (
    
        <div className={"container " + css.wrapper}>
            

            <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/640px-Dodo_Logo.svg.png" alt="logo" />
            <div className={css.divka}>
                <p className=""> Доставка пиццы Бишкек</p>
                <p className={css.min}> 40 мин <i className={css.tochka}></i> 4,75 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={css.star}><defs><linearGradient id="star_16_svg__a"><stop offset="50%" stop-color="#FFD200"></stop><stop offset="50%" stop-color="#999" stop-opacity="0.5"></stop></linearGradient></defs><path fill="url(#star_16_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg></p>
            </div>
            <div className={css.divka2}>
                <a href="tel:0707 497 336" className={css.number}>
                    0(707) 497-336
                    <p className={css.call}>Звонок по телефону</p>
                </a>
            </div>
            <div className={css.divkaRight}>
                <div className={css.Coin}>
                    <span className={css.icon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z" fill="#000"></path></svg></span>
                    <p className={css.dodo}>Додокоины</p>
                </div>
                <button className={css.btn}>Войти</button>

            </div>
            
            
        </div>
        
    )
}



