import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useEffect} from 'react';
import PizzaEdit from '../../components/PizzaEdit/PizzaEdit';
import css from './Dashboard.module.css';

export default function Dashboard({setIsAuth, setPizza, pizza}) {
  useEffect(() => {
    fetch('https://61da936a4593510017aff59d.mockapi.io/pizza/pizzas')
    .then((res) => res.json())
    .then((data) => {
      setPizza(data);
    });
  })
  return <Container>
    <Grid container spacing={2}>
      {/* <Grid item xs={3}> */}
        <aside className={css.navka + ' container'}>
        <ul className={css.ull}>
        <li> Пицца</li>
        <li>Комбо</li>
        <li>Закуски</li>
        <li>Десерты</li>
        <li>Напитки</li>
        <li>Другие товары</li>
        

       
      
          <Button onClick={()=> setIsAuth(null)} variant="outlined" color="error">
            Logout
          </Button>
          </ul>
        </aside>
      {/* </Grid> */}
       <div className={css.wrapper + ' container'}>
         {pizza.map((e) => (
           <PizzaEdit
           image = {e.img}
           name = {e.name}
           description = {e.des}
           price = {e.cost}
           key = {e.id}
           />
           
         ))}
       </div>
    </Grid>
  </Container>
}
