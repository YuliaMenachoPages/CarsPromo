import { useNavigate } from 'react-router-dom';
import './Logo.scss';
const Logo = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/', {replace: true})
  }
  return (
    <div className="logo">
      <button onClick={goToMain} className="logo__button"></button>
    </div>
  );
};

export default Logo;
