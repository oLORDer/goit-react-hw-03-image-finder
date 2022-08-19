import s from './button.module.scss';

export default function Button({ value, type = 'button' }) {
  return (
    <div className={s.wrap}>
      <button className={s.btn} type={type}>
        {value}
      </button>
    </div>
  );
}
