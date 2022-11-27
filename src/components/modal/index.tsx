import { PropsWithChildren, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { EscKeyEvent } from '../../const';
import { ReactPortal } from '../react-portal';

import './styles.css';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  handleClose: () => void;
}>;

export function Modal({
  children,
  isOpen,
  handleClose,
}: ModalProps): JSX.Element | null {
  const modalRef = useRef(null);

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

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className="modal" ref={modalRef}>
          <div className="modal-inner">
            <button onClick={handleClose} className="modal__btn close-btn">
              Close
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
