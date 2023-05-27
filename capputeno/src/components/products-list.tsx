"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProductsListsProps{

}

export function ProductsLists(props: ProductsListsProps){
  const {data} = useProducts();
  return (
    <>
    </>
  )
}