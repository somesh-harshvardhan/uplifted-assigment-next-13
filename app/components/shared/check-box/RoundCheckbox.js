"use client";
import { useEffect, useState } from "react";

function RoundCheckbox({
  id,
  isChecked = false,
  onChange = () => {},
  handleOwnState = false,
}) {
  const [checked, setChecked] = useState(isChecked);
  const handleCheckbox = () => {
    if (handleOwnState) {
      setChecked(!checked);
      onChange(!checked);
    }
  };
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <div className="h-[24px] w-[24px]">
      <div className=" relative">
        <input
          type="checkbox"
          id={id}
          hidden
          className="peer"
          checked={checked}
          onChange={() => {}}
        />
        <label
          onClick={handleCheckbox}
          className=" bg-white border-[#ccc] rounded-full cursor-pointer h-[24px] w-[24px] top-0 left-0 absolute after:border-[2px] after:border-[#fff] after:border-t-0 after:border-r-0 after:content-[''] after:h-[6px] after:w-[12px] after:opacity-0  after:absolute after:top-[8px] after:left-[7px] -rotate-[45deg] peer-checked:after:opacity-100 peer-checked:bg-[#66bb6a] peer-checked:border-[#66bb6a]"
        ></label>
      </div>
    </div>
  );
}
export default RoundCheckbox;
