import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

function SobreDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SobreDialog