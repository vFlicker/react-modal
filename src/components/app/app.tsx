import { useState } from 'react';

import { Modal } from '../modal';

export function App(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <button onClick={() => setShowModal(true)}>Click to Open Modal</button>

        <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
          This is Modal Content!
        </Modal>
      </header>
    </div>
  );
}
