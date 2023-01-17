import { getClient } from '@usedapp/core/utils/client';

export const getActivePublicKey = async (): Promise<string | undefined> => {
  const connector = getClient()?.connector;

  try {
    const activeKey = await connector?.getActivePublicKey();

    return activeKey;
  } catch (error) {
    console.log(error);
  }
};