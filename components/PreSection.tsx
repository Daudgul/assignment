import React from "react";
type ItemProps = {
  title: string;
  details: string;
};

const PreSection = ({ title, details }: ItemProps) => {
  return (
    <div className="bg-white w-1/2 shadow-md rounded-t-lg ml-4 p-1 pb-4 -mb-2 text-xs">
      <h5 className=" font-bold">{title}</h5>
      <h6>{details}</h6>
    </div>
  );
};

export default PreSection;
