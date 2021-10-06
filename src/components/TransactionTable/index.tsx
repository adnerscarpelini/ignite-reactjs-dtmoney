import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

export function TransactionTable() {
  //Estado com o array de transações retornadas da API
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //Cria uma API Fake ao iniciar a aplicação através do Mirage.Js
  //Isso é configurado no index.tsx
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {/* O map percorre cada registro do vetir de transactions, e retorna o html da lista */}
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>

                <td className={transaction.type}>
                  {/* O Intl é uma função nativa dos navegadores para formatar numeros */}
                  {new Intl.NumberFormat("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>

                <td className={transaction.type}>
                  {/* O Intl é uma função nativa dos navegadores para formatar numeros */}
                  {new Intl.DateTimeFormat("pt-Br").format(
                    new Date(transaction.createAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
