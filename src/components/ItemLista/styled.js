import styled from "styled-components";

export const Container = styled.div`
  background-color: #856957;
  color: #fff;
  margin: 25px 10px;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #734136;
  width: 150px;
  height: 200px;
`;

export const NomeSigno = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ImagemSigno = styled.img`
  width: 140px;
  height: 100px;
  background-color: #fff;
  object-fit: contain;
  border-radius: 2px;
  border: 1px solid #734136;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 8px;
  flex: 1;
`;

export const PeriodoNascimento = styled.p`
  font-size: 14px;
`;
