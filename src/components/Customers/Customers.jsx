import CustomersTable from 'components/CustomersTable/CustomersTable';
import Pagination from 'components/Pagination/Pagination';
import s from './Customers.module.css';
import { Search } from '../../images';

const Customers = () => {
  return (
    <section className={s.sectionContainer}>
      <div className={s.headWrapper}>
        <div>
          <h1 className={s.title}>All Customers</h1>
          <p>Active Members</p>
        </div>
        <form className={s.form}>
          <Search className={s.formImg} />
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <CustomersTable />
      <div className={s.footerWrapper}>
        <p>Showing data 1 to 8 of 256K entries</p>
        <Pagination />
      </div>
    </section>
  );
};

export default Customers;
