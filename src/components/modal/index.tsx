import { PropsWithChildren, useEffect } from 'react';
import { EscKeyEvent } from '../../const';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  handleClose: () => void;
}>;

export function Modal({
  children,
  isOpen,
  handleClose,
}: ModalProps): JSX.Element | null {
  useEffect(() => {
    const closeOnEscapeKey = (evt: KeyboardEvent) => {
      if (evt.key === EscKeyEvent.Escape || evt.key === EscKeyEvent.Esc) {
        handleClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </div>
  );
}
