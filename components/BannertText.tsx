
interface Props{
    title: string;
    desc:string;
    btnText:string;
    className:string;
}

export default function BannertText({title,desc,btnText,className}:Props) {
  return (
    <div className={className}>
    <h1 className="font-bold text-2xl">{title}</h1>
    <p className="text-sm leading-5">{desc}</p>
    <button className="bg-white text-sm outline-1 outline  text-black rounded-full font-semibold w-24 h-8">{btnText}</button>
</div>
  )
}
