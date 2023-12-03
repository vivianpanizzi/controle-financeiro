import React, { useState } from "react";
import Tabela from "../Tabela";
import * as C from "./styles";

const CadastroContas = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [data, setData] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount || !data) {
      alert("Preencha todos os campos!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      data: data,
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setData("");
    setDesc("");
    setAmount("");

  };

  return (
    <>
      <C.Container>
        <C.InputContent>
            <C.Label>Data</C.Label>
            <C.Input value={data} type="date" onChange={(e) => setData(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rEntrada"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rEntrada">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Tabela itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default CadastroContas;