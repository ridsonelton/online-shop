
type Amount ={
    amount:number
}

export default function FormatPrice({amount}:Amount) {
    const formattedAmmount = new Number(amount).toLocaleString("ja-JP-u-ca-japanese",{style:"currency",currency:"JPY",minimumFractionDigits:2})
  return (
    <span>{formattedAmmount}</span>
  )
}



