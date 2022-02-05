import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import PizzaEdit from '../../components/PizzaEdit/PizzaEdit';
import css from './Dashboard.module.css';
import Api from '../../api/api';
import { useDispatch } from 'react-redux';

export default function Dashboard({ }) {
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    Api.getAllPizzas()
      .then((res) => {
        console.log(res)
        setPizzas(res.data.data.data)
      })
      .catch((error) => console.log(error))
  }, []);
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




          <Button onClick={() => dispatch({ type: "logout auth" })} variant="outlined" color="error">
            Logout
          </Button>
        </ul>
      </aside>
      {/* </Grid> */}
      <div className={css.wrapper + ' container'}>
        {pizzas.map((e) => (
          <PizzaEdit
            image={e.img}
            name={e.name}
            description={e.des}
            price={e.cost}
            key={e.id}
          />

        ))}
      </div>
    </Grid>
  </Container>
}
