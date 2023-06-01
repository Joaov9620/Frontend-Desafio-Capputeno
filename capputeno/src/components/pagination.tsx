import { useFilter } from "@/hooks/useFilter";
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
  const {page, setPage} = useFilter();

  const handleChangePage = (value: number) => {
    setPage(value);
  }

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  const handleNextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  }


  return (
    <PaginationNav>
      <ul>
        <li>
          <ButtonSelect 
            selected={page === 0} 
            onClick={() => handleChangePage(0)}
          >1
          </ButtonSelect></li>
          <li>
          <ButtonSelect 
            selected={page === 1} 
            onClick={() => handleChangePage(1)}
          >2
          </ButtonSelect></li>
          <li>
          <ButtonSelect 
            selected={page === 2} 
            onClick={() => handleChangePage(2)}
          >3
          </ButtonSelect></li>
          <li>
          <ButtonSelect 
            selected={page === 3} 
            onClick={() => handleChangePage(3)}
          >4
          </ButtonSelect></li>
          <li>
          <ButtonSelect 
            selected={page === 4} 
            onClick={() => handleChangePage(4)}
          >5
          </ButtonSelect></li>
      </ul>
      <div>
        <ButtonSelect selected={false} onClick={handlePreviousPage}>&lt;</ButtonSelect>
        <ButtonSelect selected={false} onClick={handleNextPage}>&gt;</ButtonSelect>
      </div>
  </PaginationNav>
  )
}