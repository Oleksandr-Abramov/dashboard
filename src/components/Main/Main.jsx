import Customers from 'components/Customers/Customers';
import s from './Main.module.css';

const Main = () => {
  return (
    <main className={s.mainContainer}>
      <p>Hello Evano</p>
      <Customers />
    </main>
  );
};

export default Main;
