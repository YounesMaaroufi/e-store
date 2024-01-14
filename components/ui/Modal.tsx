"use client";

// the global modal

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./IconButton";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full overflow-hidden max-w-3xl rounded-lg text-left align-middle">
                <div className="relative bg-white items-center flex overflow-hidden w-full pt-14 pb-8 px-4 shadow-2xl sm:px-6 smpt-8 md:p-6 lg:p-8">
                  <div className="absolute right-4 top-4">
                    <IconButton icon={<X />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
