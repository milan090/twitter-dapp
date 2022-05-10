export const getEth = () => {
  // @ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("noMetaMask");
  }
  return eth;
};

const getAccounts = async () => {
  const eth = getEth();
  // @ts-ignore
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];

  return accounts;
};

const requestAccounts = async () => {
  const eth = getEth();
  // @ts-ignore
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts;
};

export const initializeAccounts = async () => {
  const getAccountsRes = await getAccounts();
  if (!getAccountsRes.length) {
    const reqAccountsRes = await requestAccounts();

    if (!reqAccountsRes.length) {
      throw new Error("No Accounts");
    }

    return reqAccountsRes;
  }
  return getAccountsRes;
};
