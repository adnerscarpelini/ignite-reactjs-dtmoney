import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

//Tipagem de Transações
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

//Permite o componente TransactionsProvider ter childrens. Exemplo <TransactionsProvider> bla bla bla </TransactionsProvider>
interface TransactionProviderProps {
  children: ReactNode;
}

//Inicia o contexto com o valor default, nesse caso um vetor vazio [] do tipo Transaction
export const TransactionsContext = createContext<Transaction[]>([]);

//O provider é onde vai buscar os dados e carregar o estado para os valores do contexto.
export function TransactionsProvider({ children }: TransactionProviderProps) {
  //Estado com o array de transações retornadas da API
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //Cria uma API Fake ao iniciar a aplicação através do Mirage.Js
  //Isso é configurado no index.tsx
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  //Retorna o Provider com os valores do estado de transações
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
