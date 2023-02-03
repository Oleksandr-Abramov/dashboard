import s from './Logo.module.css';
import { LogoImg } from '../../images';
import { BurgerImg } from '../../images';
import Navigation from 'components/Navigation/Navigation';
import { useState } from 'react';

const Logo = () => {
  const [isMenuOn, setIsMenuOn] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOn(!isMenuOn);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.logoWrapper}>
          <LogoImg />
          <p className={s.logo}>
            Dashboard <span>v.01</span>
          </p>
        </div>
        <BurgerImg className={s.burger} onClick={handleToggleMenu} />
      </div>
      <div className={s.nav}>{isMenuOn && <Navigation />}</div>
    </>
  );
};

export default Logo;
