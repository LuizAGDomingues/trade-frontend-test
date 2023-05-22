import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

function SobreDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='font-bold text-lg text-white uppercase hover:text-[#EFD117] transition-all'>Sobre</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SobreDialog