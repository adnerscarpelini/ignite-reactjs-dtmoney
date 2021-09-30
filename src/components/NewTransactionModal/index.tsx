import Modal from "react-modal";
import { Container } from "./styles";

Modal.setAppElement('#root');


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Container>
      {/* Modal de Cadastro */}
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar Transação</h2>
      </Modal>
    </Container>
  );
}
