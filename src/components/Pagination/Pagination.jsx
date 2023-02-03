import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>&#10094;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>40</li>
        <li>&#10095;</li>
      </ul>
    </div>
  );
};

export default Pagination;
