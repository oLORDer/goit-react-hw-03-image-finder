import s from './modal.module.scss';

export default function Modal({ src }) {
  return (
    <div class={s.overlay}>
      <div class={s.modal}>
        <img src={src} alt="smt" />
      </div>
    </div>
  );
}
