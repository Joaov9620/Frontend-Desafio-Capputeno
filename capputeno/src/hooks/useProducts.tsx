import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL= process.env.NEXT_PUBLIC_API_URL as string; //garantindo pro next que isso é uma string

const fetcher = (): AxiosPromise<ProductsFetchResponse> => { //ProductsFetchResponse => tipa o retorno do axios
  //toda requisição GraphiQl é post o que muda é o que vai no boddy
  return axios.post(
  API_URL,
  {
    query: `query{
      allProducts {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
  })
}

export function useProducts(){
  const {data} = useQuery({
    queryFn: fetcher,  //função que chama para fazer a busca dos dados
    queryKey: ['products'] //chave que passa para requisição para identifica-lá
  })

  return {
    data: data?.data?.data?.allProducts
  }
}