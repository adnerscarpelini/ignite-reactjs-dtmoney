import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

//A Modal fica no App.tsx, então recebo como Props a Função que deve executar para abrir a Modal
//Passando a função para cá como props, eu consigo clicar nela no botão Nova Transação
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
 
  return (
    // Container é o Styled Component
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
