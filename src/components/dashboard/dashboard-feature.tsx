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
    "2Umyz8nVZc3VHVSusbbdDL8B5MTWG3vKo5kKfgkUJz2qaZyB4aSQktxEyPmS2v95PV7qBNGQyvYtEpG53jmy45RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRPKg6NaS1NrjDbqFp2N4M1toGnrTJ5Payn7zfiLiyaFitok1QbG6oXwkqMVYFDLZekgtUKj8ZjDcUobVKkugNT",
  "key1": "9AWWLFyE1xVFjMh1gD39LfxdV8j919E7JXdCSN9hLhri3F2zyHTHnfjGaS6K3XRtqttD2F9Z72DhUoMnUJoueh5",
  "key2": "2qjWZTdkUUrLHG4GRGwiX8veryJQhdzG1fJDfCNogP3dJWECm7FJPAHfT2ujcxtdhnMGBigWigo2Xq8faJuWgcSJ",
  "key3": "5ifpAHLXvTDVmUGU73ZtNYLPvbDPNagjZgrkX7GtNDju8dwkGwjz1bumxwai2enLaqdw1Q9bm3XaiSjhsfkcxZDb",
  "key4": "4MTomsxzQxmGjrreETyHEFJgAR3hDidMtdZtwtrmqaMqCGqnr824zBqsvGdRP3h3Qd4ktQ3uFT9RZ2HWXwHL9Yhu",
  "key5": "3DV1WTJSvK4bYWXa5mBRvfRwdRRDDRNdGXG7sxFQqVix4C9aV3jNWK8B3BS7NnNhdQACm3E8SydAzCKAn3Lu1YoE",
  "key6": "22UFJhw3VFcin1XHFc6vxhY16XFeFut5GRFzhj5bXBpxCwLmQ9xMWnGZ9kEG2iddcPVLymbVfUueSbAP5G5PkSFF",
  "key7": "2eMBvzKdfcJ5maLrXHudw31AMWiWCqcVhrK9NtRyDiJKVudQXspDMKND2cRbD7A9nc6fzxTKjvGARR3PciwmDLxh",
  "key8": "5HYLffqoNeAcR6wCUuiEg2BWUiNnedDJYcrVxB9cuMQpLZoVzKCVBhNsvfnKccxCDKXwPJYDHboUm1PoKEuUmGYj",
  "key9": "2PdeMboMFSfpFGAip4FwnvZP1QU5abXn6EnvRAnXFAfbZbtihsnEuR6sQKoWzk8r25bQesnmXyRPhzAMAGTAghCj",
  "key10": "3qm4tF3z8o4tmEyH1ejQbXUwf6zBTzoY5GQoxjDDDXg5Fakwf9FRnfxeDpqfJCQWZ2nS47K74WJmRbxUTwhJNGdp",
  "key11": "5cPvJAu8STyzfPqhkp2SeYw1fCnqtBK53wFhsiv6RfU51jVwq4EA5ot7naWHbuZ1atW4secKEDkWbWP62fVyqk1X",
  "key12": "4xo3tV8L1gVnvRt39mumBxh1pvN5swF4QUHQDAV4gt8cnpQ2z8xoUf76haPn4rThaVC73kuydWdS852RZRL5nimT",
  "key13": "26fNp3XuvNYL7BwZu45fDfqw2HikqSTYYq2qoc7Vr3mBVMByegXsgAHVp1QWvJgXFJaCF2tZZUShgab7ntvd8fmW",
  "key14": "2xTho6HfBw9kjgtNAXdoScZ4FP81wRtcYh7tvoDMExytT8cj9hiMgzNy2DtNcbQHmWvNRiYbJGcGM9Ukkis3v3M1",
  "key15": "4YxeWpnnRzfk82zsDeK6f1WV23fKsAqemst4YXAKFosAtYg2P7nbLXswk9LBSeKoNSQAdGoFC97iWHwTgiRMBzwA",
  "key16": "5EhKJ3ugMwyuwrYo5umKQqHcJRT7mb7fLfv2xu2hVsWHKTmVwkre5rt4pKi7oVg184LMwkJXhp8X7ccgaki9kqqM",
  "key17": "5JPUKvBYNJzHN3AdmoxVPnZgfWQBhYvEHJCykrZswbMUisxTXhRn9mnjyduGZHmWDeMEqwsvSi491nYr1DFXipRJ",
  "key18": "nBbGWzYjkgCCtW1xx4dY7pFqjXJTUecdppa24t4C76GhA1bkoG4QHbKB4XJNuFW5ybeZik2LrgnF2kjkexeBvji",
  "key19": "4frFEgVhaQjFBrCqVES4pooQyDRWjpChQk4dugizZwWa2CqiKMzKo9Nn6uhm3RpUkeVZ6ShjXkGjmUX1whThctsu",
  "key20": "4P3FNAaZJMvfbSqEcFsLmtdG5Ddbu26HLjSp6kFMhr7azANvp2ASWsjY77vyAbZ9SnLCNuyiiZxYEL5sUHwGmfUR",
  "key21": "pjmZ6pGPxRmtVnsCaJSiDu9B7Sw62r4D2yWYFuSgiG9hncN7GfJV6Ex5EeWTVj9hcQjoT5VwXKB1r1UvKDjTALh",
  "key22": "59c2MULQmC8kWxRBZs3kZPEFhXSNqgSmcFZ2vTequQsJcFDQZa7uSLjzyFR4ycRYZsTR4ZrGLuoSjRZg7XDkxXAm",
  "key23": "2YB1Zmj9r4EZZHYKDvT1dv76MyaSuuncWznhD54SrXnNfGfx4zGBRAS9Jo5fJ3YR7sJfn3E6NVmnnJFxvZ1cXfKo",
  "key24": "3J815fMVifENxVB6tXFPgD889SKKpkPudnzEPQ8AKPZoBxZopGBMMQyFEocCJzp6xJeMw5ec7k3m8oGdaqFu3oRK",
  "key25": "T5pKCYPctjKCnKeEqvug29MpcQmNKVGyUtGh6tHdgxnyHNCdLj8doqJph3XShsokjGcKQJVbhMgwchZxnvU91Mh",
  "key26": "3dnwj5aLxeAGRRtyaLMXq4n1Q72PD1aU8XgkDQ5VJtkcYYGko6CUNNvxShxFLVo1MfkjUBnX9tHBUMceQxtKznj5",
  "key27": "64muXv5K4EUL8wTERfu1zx92gei6zLeLmBKRywyQhNDtSuxrUNtASqR3WNVXpzALMcejxnsNRAeAVEfLy16QRXyQ",
  "key28": "5i7A2vSaRCJeYYwCQpgyxuEcmwT5ufbKXGXDGuhMGLgi3B5RP7En5RQEAkiBDgjeUy6jv9f63ahm334ZXPWAcMNR",
  "key29": "hMnZ7mGikWaBMyvY9VUnRJW71dsacvwPyokNyjsvwGn3LAPc7E9TATyNb9TCmYPA8Xg8Fd6iHVBaTPyJ5Lh3vYf",
  "key30": "25G64FTAA6GyL94N7uzM9w9a8iU6X68tsKD9fLFMu4F8HHbU1YmwkzEC2dDaDBxHPvwWdcarHfPPQZ3cxfrMsp7E",
  "key31": "4H4HTXbKL62vEbuJwkc8baYhZ2j9hN9Lco7kTDf6jjgMqPSe3zuuW8bSNycxd3d1vMxr4FG1H8kg6e9y7Hkn5368",
  "key32": "2B14VBbbDC7cS22mRwFYCFiam2zS11nLCimEGbXCJDZWCNDFk4sP6RhYpZjNDdD3SSYWNFzXDUCMp9nKx3136WFX"
};
// KEYS_END
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
