import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL,{ query: `
  query{
    Product(id: "${productId}") {
      name
      description
      price_in_cents
      category
      image_url
    }
  }
  ` })
}

export function useProduct(id: string){
  // const {data} = useQuery({
  //   queryFn: () => fetcher(id),
  //   queryKey: ['product', id],
  //   enable: !!id //se id tiver valor ele deixa o enable true e a query faz a busca dos dados
  // });
  const { data } = useQuery(['product', id], () => fetcher(id), {
    enabled: !!id, // se id tiver valor ele deixa o enable true e a query faz a busca dos dados
    staleTime: 1000 * 60 * 5 //5 minutos o cash fica salvo
  });

  return {
    data: data?.data?.data?.Product
  }
}