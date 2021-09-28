import { Container } from "./styles";

export function TransactionTable() {
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
          <tr>
            <td>Salário</td>
            <td className="deposit">R$4.500,00</td>
            <td>Emprego</td>
            <td>05/09/2021</td>
          </tr>
          <tr>
            <td>Financiamento Casa</td>
            <td className="withdraw">-R$2.264,00</td>
            <td>Desenvolvimento</td>
            <td>10/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$8.000,00</td>
            <td>Desenvolvimento</td>
            <td>25/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
