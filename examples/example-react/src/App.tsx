import { OnConnectParams, useAccount, useDisconnect, useSignMessage } from '@casperdash/usewallet';

import './App.css';
import CasperDashButton from './component/CasperDashButton';
import CasperSignerButton from './component/CasperSignerButton';
import CasperWalletButton from './component/CasperWalletButton';
import FormSigner from './component/FormSigner';

function App() {
  const { publicKey } = useAccount({
    onConnect: async ({ publicKey: publicKeyOnConnect }: OnConnectParams) => {
      console.log('onConnect: ', publicKeyOnConnect);
    },
    onDisconnect() {
      console.log('onDisconnect Wallet');
    },
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="App">
        {publicKey ? (
          <div>
            <button style={{ marginTop: '-40px' }} onClick={() => disconnect()}>Disconnect {publicKey}</button>
            <div className="signer-form-wrapper">
              <FormSigner />
            </div>
          </div>
        ) : (
          <>
            <div>
              <a href="https://usewallet.casperdash.io/" target="_blank">
                <img
                  src="/casperdash.png"
                  className="logo"
                  alt="CasperDash logo"
                />
              </a>
            </div>
            <div className="card">
              <h1>useWallet Connector</h1>
              <CasperSignerButton />
              <br />
              <CasperDashButton />
              <br/>
              <CasperWalletButton />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
