import React from "react";
import { Container, ImagemSigno, NomeSigno, PeriodoNascimento } from "./styled";

export default function ItemLista(props) {
  const { signo, imagem, dataInicio, dataFim } = props;

  return (
    <Container>
      <NomeSigno>{signo}</NomeSigno>
      <ImagemSigno src={imagem} alt={signo} />
      <PeriodoNascimento>
        {dataInicio} - {dataFim}
      </PeriodoNascimento>
    </Container>
  );
}
