import s from './Avatar.module.css';
import avatarIkon from '../../images/avatar.png';

const Avatar = () => {
  return (
    <div className={s.container}>
      <img src={avatarIkon} alt="avatar" />
      <div className={s.textWrapper}>
        <p className={s.name}>Evano</p>
        <p className={s.post}>Project Manager</p>
      </div>
    </div>
  );
};

export default Avatar;
