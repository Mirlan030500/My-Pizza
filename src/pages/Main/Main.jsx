import React, { useEffect, useState } from "react";
import {Section} from '../../components/Section/section'
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import css from './Main.module.css'
import MySlider from "../../components/slider/Slider";
import Slider from "react-slick";
import Api from "../../api/api"

export default function Main(props) {
    const [pizzas, setPizzas] = useState([]);
   
    useEffect(() => {
        Api.getAllPizzas()
        .then((res)=> {
            setPizzas(res.data)
        })
            .catch((error) => console.log(error))
    }, []);

    const SectionList = [ 
        { 
            img:'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/730db614-8678-4465-859c-bd8c9d8ef427.jpg', 
            name:'Пеперони', 
            cost:'от 365 сом' 
        }, 
        { 
            img:'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe11cd84d2654f9986a9c77d75d9d375_138x138.webp', 
            name:'2 пиццы', 
            cost:'979 сом' 
        }, 
        { 
            img:'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/27593636-cbd8-417e-a702-2c03a6a2bff9.jpg', 
            name:'Мексиканская', 
            cost:'от 395 сом' 
        }, 
        { 
            img:'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.webp', 
            name:'Комбо за 1049 сом', 
            cost:'1049 сом' 
        }, 
        { 
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c7438015dcc24d599daa02db7ff79be6_138x138.jpeg', 
            name: 'Додстер', 
            cost: '149 сом' 
        }, 
        { 
            img:'https://dodopizza-a.akamaihd.net/static/Img/Products/c1b04dac00494475bbb58c70db4c7bdf_138x138.jpeg', 
            name: 'Рулетики с брусникой', 
            cost: '149 сом' 
        } 
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,

        
    };
    return (
        <div className="container">
            <MySlider />
            <h3 className={css.chasto}>Часто заказывают</h3>
           <Slider {...settings} className='container'>
            {
                    SectionList.map((item) => <Section
                        name={item.name}
                        cost={item.cost}
                        img ={item.img}
                    />)
                }
                </Slider>
            <h1 className='title'>Пицца</h1>
            <div className={css.pizzaWrapper}>
                {
                    pizzas.map((item) => <PizzaCard
                        name={item.name}
                        description={item.info}
                        price={item.price}
                        image ={item.avatar}
                        setBasket={props.setBasket}
                        id={item.id}
                    />)
                }
            </div>
        </div>
    )
}