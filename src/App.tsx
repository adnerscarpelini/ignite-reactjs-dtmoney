import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionaModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionaModalOpen}
        onRequestClose={handleCloseNewTransactionaModal}
      />
      <GlobalStyle />
    </>
  );
}
