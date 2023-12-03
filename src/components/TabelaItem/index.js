import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const TabelaItem = ({ item, onDelete }) => {
    return (
        <C.Tr>
        <C.Td>{item.data}</C.Td>
        <C.Td>{item.desc}</C.Td>
        <C.Td>{item.amount}</C.Td>
        <C.Td alignCenter>
            {item.expense ? (
            <FaRegArrowAltCircleDown color="red" />
            ) : (
            <FaRegArrowAltCircleUp color="green" />
            )}
        </C.Td>
        <C.Td alignCenter>
            <FaTrash onClick={() => onDelete(item.id)} style={{ cursor: "pointer" }} />
        </C.Td>
        </C.Tr>
    );
};

export default TabelaItem;