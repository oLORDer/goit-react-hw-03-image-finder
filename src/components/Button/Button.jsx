import PropTypes from 'prop-types';
import s from './button.module.scss';

export default function Button({ value, type = 'button', onBtnClick }) {
  return (
    <div className={s.wrap}>
      <button className={s.btn} type={type} onClick={() => onBtnClick()}>
        {value}
      </button>
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onBtnClick: PropTypes.func,
};
