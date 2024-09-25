import React, {useState, useEffect, useRef} from "react"
import "./Dropdown.css"

const Dropdown = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if(dropdownRef.current) {
        if (!dropdownRef.current.contains(e.target))
          setDropdownToggled(false);
      }
    }
    
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  })

  const dropdownOptions = [
    {
      id: 1,
      label: "urgent",
      value: "urgent"
    },
    {
      id: 2,
      label: "a little urgent",
      value: "a-bit-urgent"
    },
    {
      id: 3,
      label: "not urgent",
      value: "not-urgent"
    }
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button 
        className="toggle" 
        onClick={() => {
          setDropdownToggled(!dropdownToggled);
        }}>
          <span>{selectedOption ? selectedOption.label : "Priority"}</span>
          <span>{dropdownToggled ? '-' : '+'}</span>

      </button>

      
      <div className={`options ${dropdownToggled ? "visible" : ""}`}>
        {dropdownOptions.map((option, index) => {
          return <button onClick={() => {
            setSelectedOption(option);
            setDropdownToggled(false);
          }}>{option.label}</button>;
        })}

      </div>
      

    </div>
  );
};
export default Dropdown;