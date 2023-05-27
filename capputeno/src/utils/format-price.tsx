export function formatPrice(valueInCents: number){
  const formattedValue = valueInCents / 100;
  return formattedValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}