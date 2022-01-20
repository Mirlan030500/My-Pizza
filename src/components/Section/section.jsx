// import Section from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import css from './section.module.css';

// export default function MySection(){
//     return(
//         <div className='container '  >
//             <h1 className={css.text}>Часто заказывают</h1>

        
//                  <div className={css.divka }  >
                    
//                     <article className={css.article}  >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/730db614-8678-4465-859c-bd8c9d8ef427.jpg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>Пепперони</h2>
//                          <div>
//                              <p>от 365 сом</p>
//                          </div>
//                      </div>
//                     </article>

//                     <article className={css.article} >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe11cd84d2654f9986a9c77d75d9d375_138x138.jpeg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>2 пиццы</h2>
//                          <div>
//                              <p>979 сом</p>
//                          </div>
//                      </div>
//                     </article>

//                     <article className={css.article}  >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/27593636-cbd8-417e-a702-2c03a6a2bff9.jpg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>Мексиканская</h2>
//                          <div>
//                              <p>от 395 сом</p>
//                          </div>
//                      </div>
//                     </article>

//                     <article className={css.article}  >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.jpeg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>Комбо за 1049 сом</h2>
//                          <div>
//                              <p>1049 сом</p>
//                          </div>
//                      </div>
//                     </article>

//                     <article className={css.article}  >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.jpeg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>Комбо за 1049 сом</h2>
//                          <div>
//                              <p>1049 сом</p>
//                          </div>
//                      </div>
//                     </article>

//                     <article className={css.article}  >
//                     <img src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.jpeg' className={css.image}/>
//                      <div className={css.divka1}>
//                          <h2>Комбо за 1049 сом</h2>
//                          <div>
//                              <p>1049 сом</p>
//                          </div>
//                      </div>
//                     </article> 
  
         
//      </div>
//     )
// }

import { Link } from 'react-router-dom' 
import css from './section.module.css' 
 
export const Section = (props) =>{ 
 
    return( 
        <div> 
             
            <Link className={css.order}> 
                <img src={props.img}/> 
                 
                <div className={css.cost}> 
                    <div>{props.name}</div> 
                    <div>{props.cost}</div> 
                </div> 
            </Link> 
        </div> 
    ) 
}