import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import {  mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";
import page from "@/app/page";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL,{ query })
}

export function useProducts(){
    const { type, priority, search, page } = useFilter()
    const searchDeferred = useDeferredValue(search) //useDeferredValue -  só ira atualizar depois que o usuário terminar de digitar
    const query = mountQuery(type, priority, page)
    const { data } = useQuery({
      queryFn: () => fetcher(query),
      queryKey: ['products', type, priority, page],
      staleTime: 1000 * 60 * 1
    })

    const products =  data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
      data: filteredProducts
    }
}