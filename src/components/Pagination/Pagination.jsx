import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>{'<'}</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>40</li>
        <li>{'>'}</li>
      </ul>
    </div>
  );
};

export default Pagination;
