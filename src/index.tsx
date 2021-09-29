import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

//Cria uma API Fake com o Mirage.Js
createServer({
  routes(){
    //cria a rota do endereço do app/api
    this.namespace = 'api';

    //Rota de Transações
    this.get('/transactions', () => {
      return { 
        id: 1,
        title: 'Salário',
        amount: 4900,
        type: 'deposit',
        category: 'Emprego',
        createAt: new Date()
      }
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);