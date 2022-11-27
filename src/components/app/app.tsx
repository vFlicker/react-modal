import { useState } from 'react';

import { Modal } from '../modal';

export function App(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      This div has overflow: hidden.
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        <>
          <div>
            With a portal, we can render content into a different part of the
            DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
        </>
      </Modal>
    </div>
  );
}
