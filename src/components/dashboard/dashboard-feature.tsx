/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "52ur5XgaxZ7HNUdCfJ5fv5rFTh6yua5i7Ptv7L8ycYHz4SsT8rD1d9VpHbqgbBsSE4rLK5SDPEkMt1xJJswQQxSt"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "riFJ6dcRg7uKeew9BbUMhJfRtshCrQ5WUfuZsgC6wGLbzWpvrtqhsjp1JK2nJzi3xsVqXWHU5cWcS9c8VXXvLXL",
  "decoyKey1": "44fUHtg5oeWn2TMBhcqZo19GUk1LsFp8mV4fUzdQDiY3LQeg32wshTBUWkqPFGTNdNhFnU6rYncnL8VdZkb5WJJz",
  "decoyKey2": "5CdaKKxgAQYkPKBJw1o3eyS5gtMW9WCMqQX7Gj1nMshyijDdWQ5aJj2UqXEwPy35fyP1w8nKLvpszoRqDE6vJpT4",
  "decoyKey3": "5bkkCzQhWmgQ1mzkfoe1CQnvSgCKMRQEYZVQ9HurBwfwfvocwtNGUjS7GBRu2X2YAgm7dsHKWVBuY5iLbzqPsU59",
  "decoyKey4": "5BcZU7Bn9gCjMPpBKYgHwGZ2Ka8xs5vEPmi6ENGWwKja7kLtxDgFpTXMqWpG9DmpwS3zKtgHVzcgaRzhhi2mMsH1",
  "decoyKey5": "3KuZNcNKdDpH8nS995aCuE62Rma4NaFpjBzVVg8MybeP9XHQ48Fb9pTwdzjDMPysi1zaZKRSvueEFqD9t6pS7D4t",
  "decoyKey6": "958UaF5g58i6mJzZon6V8ziij1gUfnHRKpXEXjz1s9R5i4fzDBWgAjPLBUPWZ2wytnMJEC598ugXaRGoMm9236q",
  "decoyKey7": "5G6wuQJduN8isogdsvqHrfSsagfeq7TG8NuoDB1AeGeBdXEgUndEbCaTmucN2fGZQn5pW1fdjZaF8NfcQfh2E4sr",
  "decoyKey8": "5pmuWshoJyoXt7385ENBBnkB8JiJQGq1EA22XYz2GULFY8WQUdpCygkqvUBdJQyBdJ1jnkRmY6hsWrFozHdUt1G2",
  "decoyKey9": "2mV8XvGeTsLib8No7TKGUwG4ENoLsvu9ZojT5ED4XQtfMHs1BTMUF3Qx5t13ukefbRkU5A1NCuRbQR5iuoYKA3Ba",
  "decoyKey10": "hFXwwd9As5YkqUZ6yqJJfLzkEgcSxXQnG29w9CuKvjiZDEpDgJ8ew2dbipmcEDWtQrBjcf9kEn4oajjUxG5aP94",
  "decoyKey11": "4w7fVQad6A7T9b5Qt1gCukxnTaDzofG5mTeFRenyjBndrTtsovMZEpq4ziP2JSF648HcMMAe3tFw79JWTpvU4eRr",
  "decoyKey12": "XFowKFSj1d3x8hTavDnNfzgoL7GniwaLmKYSsTnWvjNsDAoFDvYCupRYWPkQLukTJrQymNa2UiqBN9PQnFP33br",
  "decoyKey13": "5UkVmgHST1W6rPmBzZaNx3NBAjXjUg9ty6qAvj3Ag7mXNYCpmKJ47SyPf8v5U7xEqpuzsgM6udgjw7VEotsatiu1",
  "decoyKey14": "54tNHXtr3GkZKYUWd1w3jGTHAjVWByE8oiJTQtDFJeLgSx6jVWrdZczo3NtCodUa56LzWJ8sSW2zXa4dpQVozzia",
  "decoyKey15": "5hW8NJ9onmdQB8FfswZAZf8Esk6JoQukyWMyHVaL7wuwJJQ12LxjXznV4STr3XTti1VPeBsY5UhapdaWia8pAvwg",
  "decoyKey16": "2XK8evWHUCYfrsXq2CNBc3jSECoz9yQMULe6q19jqf4EMRwmJUorSTMeo9MDCtenzEzMfujm8Qo4wKYUVcjd612g",
  "decoyKey17": "37yhoqQ4rn8nTEPLsbLDFpcPrwSZE9egeydhEUyf1Qu9HjhTLr4e4NdPTJpE2JGpj5L9fMEjBJPYjUZh24TwmY18",
  "decoyKey18": "XJpQ3ghEaykCYjFCg15pV1fWzy8iVbRKFp8ShLgKWWxweQ2Fm5L9BSWjJgBBTjXWwxYDTXshtoCaR25LhDAVK2G",
  "decoyKey19": "4vz8k8y4rsHuHPrajatP3qQWdw2QnruBKhi6hhWG4wrJ9CRMwDX5RR1PEjQUCCYRoUiMqdAH5iaEC317VbzD7Uvg",
  "decoyKey20": "451cdfdSuDxDR7FrkAh9Cb8CSQzNSj5b92RxjHkhtY9FsuFA1S5QAsPDDHUf6eoNazxqL5VMnaKtYiy6xz3UngEU",
  "decoyKey21": "43iyeSjjPMTZsJ4ajVSudaWMgq58Nsz8fv8dSE81MCsX5GWB6AyjDdN8oERqkDdiKttBWVWHASx7icaj4uMXSURM",
  "decoyKey22": "4u8NjmqnKLGYa1cCKMEkP8S3ZWEq763qWKq3LLrPe71zx2q6Gtx6X6Hw17tvVAmK1GYSzL2ve36P6vpbWhrqvGMD",
  "decoyKey23": "5JmLJ4EWvyCYwEpLWRZjC8EjSLQzBbe8MbgNBKsop2CbzUNhQPFBEe1bftWEkAnFDwwRivU2JMboDmY2a2zTfWNR",
  "decoyKey24": "3CroH9EhypK3D3Bpfjtjg51ApEDaHdPi6738BJDBkNQDKhJvCARR8uCkpxgZddpkbm3ffSnrNKVWS68gpoWwXv7V",
  "decoyKey25": "KgFQFeZscqcEd1TDKpHGPVy3cUpkum3vNx8xbuewkRCegmwXPNjymDhFrepLXpAQ9JMmszFXtWqYSCy9cdHx2YN",
  "decoyKey26": "4ghyPJqmPzR5VFXkmHMHP3mFMLSparcD7g9fwU1adzc11dqEWEoAeEUY9hcub7LRAq9NpV85LmeC3jSBonk4nh3R",
  "decoyKey27": "58KztXZnzPZ19qniu8F4QQrpYMZsyoRDNgLYDVb2wn5SZFr28KYD9inqdrKuCAaDCcjQCwQDSGz93Bw4GsRnVcCs",
  "decoyKey28": "3EshA7P8QfGjUPvV4qKH5S7cfpuAmoJsCkY8wMZyE5es7vDc7MWuB1wWTLxahnXVvVfbybvyvqqtrtPqNNiTbRuE",
  "decoyKey29": "33Jnvk5ccowcdAMuWFNr2WSGeqYV6sznJHXrHBMazGYJREKursFS8PP8ngopfaCRvuNjGPMddrugFU3B7HRvJ6ZG",
  "decoyKey30": "4wn85Fi5ddncgYBDKGoZezqRmPGCAKc3wzdbZ5wVoct8hAa8w15AirEww3t3S5USsaghoGGWbPueFoHHgRDwHGdx",
  "decoyKey31": "3e8vtRLKUgKxrLQiqA11K2tGRYJHsn19heQ16g4S56ErL9oW1y6nhwgpCuf153PHRVupjHuG5Jpcye54gEc35Uhi"
};
// DECOY_KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};