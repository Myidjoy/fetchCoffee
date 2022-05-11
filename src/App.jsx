import { AppBar, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {fetchCoffee} from './features/coffeeReducer/coffeeReducer';
import './App.css';

function App({coffeeMenu, status}) {

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
        Наш суперкофе
          </Typography>
        </Toolbar>
      </AppBar>   
      <section className='section'>
        {
          status === 'loading'?
            <div className='loading'>
              <CircularProgress disableShrink />
            </div>:
            status === 'failed'?
              <h1>Что-то пошло не так </h1>:
              status === 'succeeded' && coffeeMenu.length > 0
                ? coffeeMenu.map(item => (
                  <Card key={item.id} sx={{ minWidth: 275, marginBottom: 2}}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        name: {item.blend_name}
                      </Typography>
                      <Typography variant="h6" component="div">
                        origin: {item.origin}
                      </Typography>
                      <Typography variant="h6" component="div">
                        notes: {item.notes}
                      </Typography>        
                    </CardContent>
                    <CardActions />
                  </Card>
                )): <h1>Пусто</h1>
                              
        }
      </section>
    </>
    
  );
}

const wrapperApp = Component => function() {
  const dispatch = useDispatch();
  const {coffeeMenu, status} = useSelector(state => state.coffee);
  
  useEffect(() => {
    dispatch(fetchCoffee());
  }, []);

  return <Component coffeeMenu={coffeeMenu} status={status}/>;
};

const NewApp = wrapperApp(App);

export default NewApp;
