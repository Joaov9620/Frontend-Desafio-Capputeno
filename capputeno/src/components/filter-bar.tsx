"use client" 
import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";
import { Pagination } from "./pagination";

interface FilterBarProps{

}

const FilterContainer = styled.div`
  width: 100%;
  
  >div{
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
  }
`;

export function FilterBar(props: FilterBarProps){
  return (
    <FilterContainer>
      <div>
        <FilterByType/>
        <FilterByPriority/>
      </div>
      <Pagination/>
    </FilterContainer>
  )
}