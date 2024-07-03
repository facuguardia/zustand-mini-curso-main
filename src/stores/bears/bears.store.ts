import { create } from "zustand";

interface BearState {
  bears: {
    black: number;
    polar: number;
    panda: number;
  };
  incrementBears: (type: "black" | "polar" | "panda", value: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: {
    black: 10,
    polar: 5,
    panda: 1,
  },
  incrementBears: (type, value) =>
    set((state) => ({
      bears: {
        ...state.bears,
        [type]: state.bears[type] + value,
      },
    })),
}));
