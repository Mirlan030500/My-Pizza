import css from './PizzaCard.module.css';

export default function PizzaCard({setBasket, ...props}) {
    const onSelect = () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || []
        basket.forEach((item, index) => {
            if (item.id === props.id) {
                return null
            }else if (index === basket.length - 1)  {
                basket.push(props)
                localStorage.setItem("basket", JSON.stringify(basket))
                setBasket(basket)
            }
        })
        if (basket.length === 0) {
            basket.push(props)
            localStorage.setItem("basket", JSON.stringify(basket))
            setBasket(basket)
        }
    }
    return (
        <div>
            <div className={css.wrapper}>
                <div className={css.imgWrapper}>
                    <img src={props.image} alt="pizza" />
                </div>
                <div className={css.name}>
                    {props.name}
                </div>
                <div className={css.description}>
                    {props.description}
                </div>
                <div className={css.footer}>
                    <div className={css.price}> от {props.price} сом</div>

                    <button onClick={onSelect}>выбрать</button>


                </div>
            </div>
        </div>
    )
}
