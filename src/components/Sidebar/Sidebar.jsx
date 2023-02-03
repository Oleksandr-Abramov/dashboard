import Avatar from 'components/Avatar/Avatar';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={s.container}>
      <div>
        <Logo />
        <div className={s.nav}>
          <Navigation />
        </div>
      </div>
      <Avatar />
    </div>
  );
};

export default Sidebar;
