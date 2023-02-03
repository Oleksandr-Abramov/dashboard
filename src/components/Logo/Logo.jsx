import s from './Logo.module.css';
import { LogoImg } from '../../images';

const Logo = () => {
  return (
    <div className={s.container}>
      <LogoImg />
      <p className={s.logo}>
        Dashboard <span>v.01</span>
      </p>
    </div>
  );
};

export default Logo;
