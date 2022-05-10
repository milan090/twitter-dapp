import create from "zustand";

interface EthStore {
  account: string;
  loading: boolean;
  setAccount: (account: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useEthStore = create<EthStore>((set) => ({
  account: "",
  loading: true,
  setAccount: (account: string) => set({ account }),
  setLoading: (loading: boolean) => ({ loading }),
}));
