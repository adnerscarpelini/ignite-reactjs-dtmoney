import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

//Cria uma API Fake com o Mirage.Js
createServer({
  //Cria as tabelas que o Mirage vai usar. O schema é um banco criado pelo Mirage
  models: {
    transaction: Model,
  },

  //Valores pre cadastrados para quando iniciar a aplicação, pra não mostrar o table em branco
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salário",
          type: "deposit",
          category: "Serviço",
          amount: 5000,
          createAt: new Date("2021-06-10 09:00:00"),
        },
        {
          id: 2,
          title: "Cartão de Crédito",
          type: "withdraw",
          category: "Despesas",
          amount: 1200,
          createAt: new Date("2021-06-10 12:00:00"),
        },
      ],
    });
  },

  routes() {
    //cria a rota do endereço do app/api
    this.namespace = "api";

    //Rota de consultar Transações
    this.get("/transactions", () => {
      return this.schema.all("transaction"); //Retona todos os registros da tabela transaction
    });

    //Rota para cadastrar Transação
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data); //Insere na tabela transaction
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
