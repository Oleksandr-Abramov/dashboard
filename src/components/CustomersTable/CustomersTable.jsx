import s from './CustomersTable.module.css';
import customersList from '../../data/customersList';

const CustomersTable = () => {
  return (
    <div className={s.tableContainer}>
      <table className={s.greyGridTable}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customersList.map(item => (
            <tr key={item.phone}>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>
                <span
                  className={
                    item.status === 'Active' ? s.statusActive : s.statusInactive
                  }
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
