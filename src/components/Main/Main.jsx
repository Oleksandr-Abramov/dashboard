import Customers from 'components/Customers/Customers';
import s from './Main.module.css';
import { Hand } from '../../images';

const Main = () => {
  return (
    <main className={s.mainContainer}>
      <p>
        Hello Evano <Hand />,
      </p>
      <Customers />
    </main>
  );
};

export default Main;
