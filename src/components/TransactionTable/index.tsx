import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionTable() {
  //Chama o Contexto de Transações
  const { transactions }  = useContext(TransactionsContext);

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
