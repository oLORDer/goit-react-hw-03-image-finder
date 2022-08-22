import { InfinitySpin } from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={s.loader}>
      <InfinitySpin width="300" color="#7021DE" />
    </div>
  );
}
