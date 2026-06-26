import React, { useState } from "react";

interface IProps {
  open?: boolean;
  title: string;
  children?: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ open = false, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="p-3 border-bottom d-flex justify-content-between">
        <h6 className="font-weight-bold">{title}</h6>

        <button type="button" className="btn" onClick={handleFilterOpening}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {isOpen && <div className="p-3 border-bottom">{children}</div>}
    </div>
  );
};

export default Collapsible;