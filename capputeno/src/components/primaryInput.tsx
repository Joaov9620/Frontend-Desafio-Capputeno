import styled from "styled-components"
import { SearchIcon } from "@/assets/icons/search-icon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secondary); 

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media(min-width: 768px){
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media(min-width: 768px){
    width: 352px;
  }
`;

//para poder usar as propiedades de um input
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  value: string,
  handleChange: (value:string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
  return (
    <InputContainer>
      <PrimaryInput onChange={(e) => props.handleChange(e.target.value)} {...props}/>
      <SearchIcon/>
    </InputContainer>
  )
}
