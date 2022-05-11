import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCoffee} from './features/coffeeReducer/coffeeReducer';
import './App.css';
import CoffeCard from './components/CoffeCard';
import Header from './components/Header';
import Loading from './components/Loading';

function App({coffeeMenu, status}) {

  return (
    <>
      <Header/>
      <section className='section'>
        {
          status === 'loading'
            ? <Loading/>:
            status === 'failed'
              ? <h1>Что-то пошло не так </h1>:
              status === 'succeeded' && coffeeMenu.length > 0
                ? coffeeMenu.map(item => <CoffeCard key={item.id} item={item}/>): <h1>Пусто</h1>                      
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
