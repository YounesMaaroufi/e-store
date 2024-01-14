import { create } from "zustand";

import { Product } from "@/type";

interface PreviewModalStoreProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStoreProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ data: undefined, isOpen: false }),
}));

export default usePreviewModal;
