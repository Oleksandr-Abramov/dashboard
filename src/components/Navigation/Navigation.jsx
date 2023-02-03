import s from './Navigation.module.css';
import {
  Dashboard,
  Product,
  Customers,
  Help,
  Income,
  Promote,
  ArrLarge,
} from '../../images';

const Navigation = () => {
  return (
    <nav className={s.container}>
      <ul className={s.list}>
        <li className={s.itemDashboard}>
          <div className={s.text}>
            <Dashboard className={s.iconDashboard} />
            <p>Dashboard</p>
          </div>
        </li>
        <li className={s.itemProduct}>
          <div className={s.text}>
            <Product className={s.iconProduct} />
            <p>Product</p>
          </div>
          <ArrLarge className={s.iconArr} />
        </li>
        <li className={s.itemCustomers}>
          <div className={s.text}>
            <Customers className={s.iconCustomers} />
            <p>Customers</p>
          </div>
          <ArrLarge className={s.iconArr} />
        </li>
        <li className={s.itemIncome}>
          <div className={s.text}>
            <Income className={s.iconIncome} />
            <p>Product</p>
          </div>
          <ArrLarge className={s.iconArr} />
        </li>
        <li className={s.itemPromote}>
          <div className={s.text}>
            <Promote className={s.iconPromote} />
            <p>Product</p>
          </div>
          <ArrLarge className={s.iconArr} />
        </li>
        <li className={s.itemHelp}>
          <div className={s.text}>
            <Help className={s.iconHelp} />
            <p>Product</p>
          </div>
          <ArrLarge className={s.iconArr} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
