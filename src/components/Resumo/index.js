import React from "react";
import ResumoItem from "../ResumoItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";
import { StyledResumo } from "./styles";

const Resumo = ({ entrada, expense, total }) => {
    return (  
        <StyledResumo>
            <ResumoItem
                title="Entradas"
                Icon={FaRegArrowAltCircleUp}
                value={entrada}
            />
            <ResumoItem
                title="Saídas"
                Icon={FaRegArrowAltCircleDown}
                value={expense}
            />
            <ResumoItem title="Total" Icon={FaDollarSign} value={total} />
        </StyledResumo>
    );
};

export default Resumo;