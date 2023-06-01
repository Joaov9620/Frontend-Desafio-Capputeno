"use client"//componente tem que ser renderizado pelo lado do cliente
import styled from "styled-components";
import { PrimaryInputWSearchIcon } from './primaryInput';

import { Saira_Stencil_One } from 'next/font/google'
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: ${props => props.theme.tabletBreakpoint}){
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    font-size: 40px;
  }
`;

export function Header(){
  const {setSearch, search} = useFilter()

  return(
    <TagHeader>
      <Logo className={sairaStencil.className} href="/">Capputeno</Logo>
      <div>
        <PrimaryInputWSearchIcon 
          value={search}
          handleChange={setSearch}
          placeholder='Procurando por algo específico?'
        />
        <CartControl/>
      </div>
    </TagHeader>
  )
}