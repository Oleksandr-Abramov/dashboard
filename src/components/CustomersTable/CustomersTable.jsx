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

      <div className={s.mobileGridTable}>
        {customersList.map(item => (
          <table key={item.phone}>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>{item.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Company</td>
                <td>{item.company}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{item.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{item.email}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{item.country}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span
                    className={
                      item.status === 'Active'
                        ? s.statusActive
                        : s.statusInactive
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default CustomersTable;
