import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  value: number;
  unit: string;
  texts: string[];
}

export function Card({ title, icon, value, unit, texts }: CardProps) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full rounded-xl p-3  bg-gradient-to-tl from-[#0e1426] from-1% to-70% to-[#1d2b53] min-h-52 transform transition-transform ">
        <div className="flex justify-between h-1/4 ">
          <h3 className="text-xl roboto">{title}</h3>
          <div className="w-[30px] h-[30px] rounded-full bg-[#0e1426] p-1">
            {icon}
          </div>
        </div>
        <div className="flex h-full justify-center items-center">
          <div className="flex items-start">
            <h1 className="text-6xl">{value}</h1>
            <p className="ordinal">{unit}</p>
          </div>
        </div>
        <div className="flex flex-col h-1/4">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#344378] to-transparent"></div>
          <div className="flex justify-between items-center mt-2">
            {texts.map((text, index) => (
              <p key={index} className="text-[#5a678c]">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
