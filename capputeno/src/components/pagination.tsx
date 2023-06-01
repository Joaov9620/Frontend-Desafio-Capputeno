/** 1- Verificar se tem pagina anterior 
 *  2-
*/

import styled from "styled-components"

interface PaginationProps{
  selected: boolean
}

const PaginationNav =  styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  margin-top: 28px;
  width: 100%;
  
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    list-style: none;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-left: 8px;
  }
`;

const ButtonSelect = styled.button<PaginationProps>`
  width: 32px;
  height: 32px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: none;
   
  padding: 4px;
  border-radius: 8px;

  color: ${props => props.selected ? 'var(--orange-low)' : 'var(--text-dark)'};
  background-color: ${props => props.selected ? 'white' : '#E9E9F0'} ;
  border: ${props => props.selected ? '1px solid var(--orange-low)' : 'none'};
`;

export function Pagination(){
  return (
    <PaginationNav>
      <ul>
        <li><ButtonSelect selected>1</ButtonSelect></li>
        <li><ButtonSelect selected={false}>2</ButtonSelect></li>
        <li><ButtonSelect selected={false}>3</ButtonSelect></li>
        <li><ButtonSelect selected={false}>4</ButtonSelect></li>
        <li><ButtonSelect selected={false}>5</ButtonSelect></li>
      </ul>
      <div>
        <ButtonSelect selected={false}>&lt;</ButtonSelect>
        <ButtonSelect selected={false}>&gt;</ButtonSelect>
      </div>
  </PaginationNav>
  )
}