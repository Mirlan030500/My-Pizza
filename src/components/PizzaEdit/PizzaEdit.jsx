import css from './PizzaEdit.module.css';

export default function PizzaCard(props) {
    const onSelect = () => {
       
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

                    <button onClick={onSelect}>Изменить</button>


                </div>
            </div>
        </div>
    )
}
