import { BackIcon } from "@/components/icons/back-icon";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);

  transition: filter 0.2s;
        
  :hover{
    filter: brightness(0.9);
  }
`;

export function BackBtn(){
  const handleNavigate = () => {
    window.history.back();
  }
  return (
    <Button onClick={handleNavigate}>
      <BackIcon/>
      Voltar
    </Button>
  )
}