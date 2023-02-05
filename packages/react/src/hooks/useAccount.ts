import {
  Account,
  watchAccount,
  StatusEnum,
  getActivePublicKey,
} from '@usedapp/core';
import { useEffect, useState } from 'react';

export const useAccount = () => {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.DISCONNECTED);

  useEffect(() => {
    const initAccount = async (): Promise<void> => {
      const fetchedPublicKey = await getActivePublicKey();

      if (fetchedPublicKey) {
        setPublicKey(fetchedPublicKey);
      }
    };

    void initAccount();

    watchAccount((account: Account | null) => {
      if (!account) {
        return;
      }

      setPublicKey(account.publicKey ? account.publicKey : null);
      setStatus(account.status ? account.status : StatusEnum.DISCONNECTED);
    });
  }, []);

  return {
    status,
    publicKey,
  };
};