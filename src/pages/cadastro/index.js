import React, {useState, useEffect} from "react";
import "./index.css";
import Resumo from "../../components/Resumo";
import CadastroContas from "../../components/CadastroContas";

const Cadastro = () => {

    const dados = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        dados ? JSON.parse(dados) : []
    );
    
    const [entrada, setEntrada] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountEntrada = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const entrada = amountEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(entrada - expense).toFixed(2);

        setEntrada(`R$ ${entrada}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(entrada) < Number(expense) ? "-" : ""}R$ ${total}`);
        }, [transactionsList]);


        const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };

    return (
        <>
        <div className="titulo">
        <h1>Cadastro de contas</h1>
        </div>
        <div>
        <Resumo entrada={entrada} expense={expense} total={total} />
        <CadastroContas handleAdd={handleAdd}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
        />
        </div>

        </>
    );    
};

export default Cadastro;