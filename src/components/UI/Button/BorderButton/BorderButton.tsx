import { ReactNode } from 'react';
import './BorderButton.scss'

interface IBorderButtonProps {
  handleClick: () => void;
  children: ReactNode;
}

const BorderButton = ({handleClick, children}: IBorderButtonProps) => {
  return (
    <button type="button" onClick={handleClick} className="button">{children}</button>
  );
};

export default BorderButton;
