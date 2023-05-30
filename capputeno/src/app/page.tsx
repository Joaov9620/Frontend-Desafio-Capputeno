"use client"
import { DefaultPageLayout } from '@/components/default-page-layout';
import { FilterBar } from '@/components/filter-bar'
import { ProductsLists } from '@/components/products-list'
import styled from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar/>
        <ProductsLists/>
      </PageWrapper>
    </DefaultPageLayout>
  )
}
