import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

//************* Hook/Contexto de Transações *********************/
//Esse arquivo é um contexto de transações, ou seja, ele gerencia as regras de negócio de transações
//a partir de qualquer componente que o chama.
//Ele é um hook próprio, sempre exportamos por padrão o hook useContext, dessa forma não precisa importar
//o useContext em todos os componentes que vão chamar ele, aqui já faz isso.

//Tipagem de Transações
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

//Tipagem para criar novas transações, herda tudo do Transaction apenas tirando o id e o createAt
//type TransactionInput = Omit<Transaction, "id" | "createAt">;

//Tipagem para criar novas transações, herda os campos que quero do Transaction apenas
type TransactionInput = Pick<
  Transaction,
  "title" | "amount" | "type" | "category" | "createAt"
>;

//Permite o componente TransactionsProvider ter childrens. Exemplo <TransactionsProvider> bla bla bla </TransactionsProvider>
interface TransactionProviderProps {
  children: ReactNode;
}

//Interface com os tipos de objeto que vai ter no contexto
interface TransactionContextData {
  transactions: Transaction[]; //Estado de transações
  createTransaction: (Transaction: TransactionInput) => Promise<void>; //Função para criar novas transações (Retorna void)
}

//Inicia o contexto com o valor default, nesse caso um vetor vazio [] do tipo Transaction
export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

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

  //Método para criar transações
  async function createTransaction(transactionInput: TransactionInput) {
    //Envia o form para a a API cadastrar
    //A rota é configurada no index.tsx

    const response = await api.post("/transactions", transactionInput);
    //A API sempre retorna o objeto inserido. Mapear ele para adicionar no estado de transações.
    const { transaction } = response.data;

    //Os ... copia os valores atuais e adiciona o novo no final
    setTransactions([...transactions, transaction]);
  }

  //Retorna o Provider com os valores do estado de transações e o método para criar novas transações
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}



//Exporta o nosso hook personalizado já usando o useContext
export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
