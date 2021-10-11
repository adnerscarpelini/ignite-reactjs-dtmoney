import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

export function App() {
  //Estado para controlar a Modal
  const [isNewTransactionaModalOpen, setIsNewTransactionaModalOpen] =
    useState(false);

  //Handle é apenas um padrão para sabermos que é uma função clicavel pelo usuário
  //Essas Funções ficaram no App devido o Header não ter acesso no NewTransactionModal, aqui é Global
  //Função para abrir a modal
  function handleOpenNewTransactionaModal() {
    setIsNewTransactionaModalOpen(true);
  }

  //Função para fechar a modal
  function handleCloseNewTransactionaModal() {
    setIsNewTransactionaModalOpen(false);
  }

  return (
    //Coloca o Contexto de Transações em volta de tudo, passando um vetor null
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionaModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionaModalOpen}
        onRequestClose={handleCloseNewTransactionaModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
