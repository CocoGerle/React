
export const Card = ({title,desc}) => {
  return (
    <div className="p-[16px] bg-slate-400 rounded-2xl shadow-xl shadow-gray-300	">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
};
