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
    "62rDZTt6z73w8GH7nUXoHywg4xfG5nCaTG7a1LEqBREaEWXBfKL28oacmT681WnZtuV2KzSKavjGdVbfBd8epHLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xx46ieCA1qNvTSjLbCgY2jWBsyTKaoGpf8v8ZKgaPDxEueuEpn7Sza57k5EQNSMRMPhPidLYC9DUuB67Dpu8bAA",
  "key1": "3Yyj7VEC8Mup9XphhsmWPogChTjjVubcxLyodh6DzAWEHeguBZUsiyzSSDkAq826TRK51vRS1oduJNckvobP2iFq",
  "key2": "5HcccEwXBXycSpatkh8j4Wc6tvukFB1YvLpfEmjutdD4b2LGZGf1JsNfJ5di7VZ22VpMS68F6bUrdShNicFtpKdu",
  "key3": "49tobfwAmniExSbue1bTjNd9AKfjga6cjBnRUhuyfDLASGMqznHChXy9rNuqM4r5VRXz6YfGyWwDhwcUPiLwj4EP",
  "key4": "479vXVHP7Zt39CLaXh44DMYFRcqmAttP9v3Ku42vGizoHax5MZ8LMHXpVYUXm7RN4kGBYN4UvAwwU7wt9osX7LYC",
  "key5": "GWeifm8VmM5kL2qPLeuXKV4vmYfnGC7UuzFh1FsTeDPVf7BE7ipHsZDdy69UryLX3xJPBEe6Khab21asuDkNAgC",
  "key6": "56VQTe5QygJz7LEYxk54uk8B25kwvZ7QwCizN8z5efKfowrzaaup9UqrzaQMGJUw6cQWeU3sDMuSeEfFcroSy6qP",
  "key7": "4Zu21U196719agySpKJW6wPgYh1yhZmLBLnvC2gk5kbaj32RcMk8yUV4rLkF5HsFWDjqict878e4ypjQrtmSjzLt",
  "key8": "2yN6YFSpUot9q4HCD9mneBpZkkTuwusKygyoYgGz6NAfWH3HZ8bXVt9MYnHrk5mG77DQo8FyWiENEppWzBDuXZmE",
  "key9": "2KpGM35BBRdQ1NDLGVtL3JSVBj7eRYUPwPGtsQuVdhHW5AumtCgFxpLjsVL58NETbBt1EqnB2cRQ69wQkFF1F854",
  "key10": "z2W6CAPePG4iTmDKaDw8fZQTBDpNZwVxmt6D39unQLd5MnYDZQMw2HZipWPUPcaWXrJHr4fMKDAGJN18jq65TdZ",
  "key11": "4wpXMFgfrkVBJZ1NHzxTNkCywirxepAZqeHVbaT6me9a5h7xF93ZtHg7Kwrc2Rr3GRa1JmBGUGJfCVvA2SHgNTFF",
  "key12": "5XXMJYZNsKSgQn6ZZ7FQNYXiMSzXCACLgFRX4YpQ8HkGyparqz49vNieugH2cCqzXZG79FvbNBn6ZGtj4PLpVWyY",
  "key13": "HLPNgaRQVnUL1xSbeRG6dynqcSNST8D5Ln8y7RWq3zaT19XLxjwtUYWfdJYoDDzSZ8Nqi4XJdE1QQewrSkxhWXG",
  "key14": "2F1DgYK9BXHQ3JAcZ4Tud5mzYfbrKPKGvRXRawAtPfMNU1ut1em5MakFJPxVgtnUSGX2QyU7XoDSHDfG2MDDGLw4",
  "key15": "86xc9577aCxH7uGoohcivkHV5Pj5MN78sAR9v8nCShZ81KJ7NY2DVnKBkzBaQ1nr6zcgHLQtsNrc9bdkBPn6jK8",
  "key16": "5cFDTg5nxxrTkSyGqMLccHwP9AUjGtrAhysKjavTWxHMv16u3saHw2MJJufAtCsFSNTCMsdxfbsEMf3gKpsHPLEi",
  "key17": "5qP7v6zio1NqNhJJFVaVU9pG89ThKeSWbNB1TXUeQM2GQbNL2CKZ3w1tV59ewgat1MMmpjRGgemhLuth6ieJTijF",
  "key18": "4tGB5gEYZmXXeLPohAhAJ4kfA5HPZeSMWpPXEeuyG5bYJKsaxS8FXGLdg4a2zNz3GGaqfQ52eTQkQNoPhEwuHK17",
  "key19": "3CJBpB1FkLTfVp15w8Bf9qjY4GgXBXwWUJzSE7Uo6eEWY5skBUoyRzf7XMMqZXnGXbfiM4dhoR8335inNwDwuoQb",
  "key20": "4g6Sg29Cw8SMeTWGcPWRe86DUjbtPAypBu37APBTVRHYyTQqFqBdxdq74VCxHEg3UgCqGuXfkE4wHdEk258n4xDp",
  "key21": "3LQgMD8fhcKzoZovifiQER21oWqS9217LTgnjsapYyHwVKaSYSQJcJGZbxBrzZwbXXwTWJWHneeZyAmxLN4o4dGJ",
  "key22": "3otPjcvFPnkjTHHZGxQ4hLnAuHyKocde59mV8TGHtFti4RiGdyA7wQLq5iEPgfvfaDL8qUA96ZuS6ttqtSjPH21T",
  "key23": "3J8cx5xwW8eyTPA8De18aoJY6zoFjesQC4Z7q8JoSeYYnZdrvT8JREwQrbLQcmGGzzSn62b78oSxtyXk6nn3w5Fp",
  "key24": "3NR3qtuVpquWiU3ATVZr9qFfXRafkuHnRAPBf4bnnXrE61hAETPSJs73s4APzaccG6GxnuVP5eFyRfR9j7FUzAFN",
  "key25": "5zKxfaoz5V4LMwDjupEzqhb5Gt8axZHNqSPuzHoCjYaV49iMPEaaB9cN7thLJfn41jrTMXmfG3Dim3JJNFtiNa5E",
  "key26": "5as7CnLKBV9CKyagRxzunVSptR8BcqhtcBFBJwa9MnE4tuLzW73qoSZEeKcHwL5AcHAijHzbQVses7j6sAGiBQL7",
  "key27": "5GjrCVhrbxFjKo84L3RPWaj8usz9jjDsVZJuY1khgtVfkEz9QXE6gQ3sYESNENCM4KFq9z4YFC7MxEsePk5Lr5w4",
  "key28": "2n9UNFQvfev2jj6FkcnbRzeAcZoXb9goqdAeWkVNRy6ceDE21yvS6Fh7VSjieD6vQzppYqPqeP1qzm8NmeZoBSo6",
  "key29": "35wBrAiHc8GRnW4BJyv62im9QjLPjDFk3xTWZfnGSKdx3H4EXjF5xtWJcx7okE3KbTXPJ7YB93E3R1bypZKWb6Wj",
  "key30": "2ZFor5g7v3fV7KYLoKAr6gKdbrrVcJyiv8P81555n8Ym3CTSQ7YVr8N97BQq8dEBy2ajGbG8JL1EB2FfkdS2oXWY",
  "key31": "4yJvRKXGLiD9Len9H8YMCQ28Wn3ij1L3ncnekKDGSsEbykW3jyvLjnpLa5onDernUVC8sToXjAXxk1rTfobYQX63",
  "key32": "4wiUMnrJjWg4gS9QYJCpKqGyDNo3QHaYLKPLXucpGERCUGPAApPMmeGHU81RszF1TTzjCzYcQbFzKpnQcUhNQpj2",
  "key33": "3wqRwAEHiuB43e9SdjMCxTSWd3cEiFoMYbxm6K5D1HpTXyxHFPJ5iK2paKbfde5G983mWwWYyP9yyvg5sFNVEokJ",
  "key34": "5X4KjCkWtzUgKK8ncadVqS4CqpNja5ZGCjsC6qR26jJNC7R8uRbx9nZhBQUeKsheYBQ3VTiA3yCyKD89i3yqdtZq",
  "key35": "43qudaM4j6L66X7ajJJ6fECcv24vX9Cdni8j8rJ1hv4qjtRGmNSsvPEEGD7HmQFBH5sxgjg1H2PY18ndhjPD9s7C",
  "key36": "DgerWZ2bjZkF4K6VqoD29Cu9tYie3EtLTSDrgXbLyHDnFPRRngQ2o8D5ZWxq5qWUYUWaNhu2QaAkF5vdX7oRjcA",
  "key37": "2LCbHFUU6BGzPgNTGMd1Q2jxqdarn9N4KTVTzAGWU9CKgcxSxiu2S34zw8Sv2ixrUc1AQUK7pqoYwpS3TheBRnhw",
  "key38": "5CH8iVyaEqhVnBBRRLJo7zZHr5JLrP8Ct2vvAkczzddUyMXJyTEaqvXUGZY1PoMbzNDvGHPxn4kGVwKpkXNADASH",
  "key39": "4kzrZ5dw7ymkPuWpzQmb9LViPibH5ZugXpmihzPcn3B1NwxuYZmxcFCZWL12v97JzZzwpSeDqq9e2Hg1zZwfGRqd",
  "key40": "3NMMkmX6SbKcJ6TUSp24HCfA588vqnbda9JqvJvfuiJZtdLbAMM7b8Lxb8JqS7gUpMkXmVDz27mwTAwnyzYtkMkp",
  "key41": "2Fk1qWTn9y5KHhK7PyuadhxEqD7dtncsNJNFiaSpqbuE1SLuTCCJgLxSKT8ZFFcCdwMc87qpEcSu6c17QXCTY3br",
  "key42": "5W2U26QHLXKa94v7xDMGjBWXgxBwdaHF25w4ELhnD6mPqnbWUpwZ1EPpsRmkEt7onjatFeMuZGFcWiRn4e8wJt2c",
  "key43": "qcChaVRWdGUeJYnzwUzamKxo8sST68j21uZeJmLrqEHi2FzgEpHFdtJSVvHT1of8hiSe78Z1cZBngkL9HQSi2AV",
  "key44": "22wUgEyqAuXc7Wq8Xb6pyCnjj4UjLR24M3wqeSsTuXMHHTb1toiMRH8JDPTqNZYPNgbGpHKV9uEEo8LerVCnJwQE",
  "key45": "3Rfx7vHebCHJ31UCxUZ3khUjcDKbRGduMNva9fVrmhX1gF5bZEbMx3RbKe4KbpFi4QXcQThbY49jSCfoWR9sXMin",
  "key46": "KqKeB9ze3WBBspxAfbJknXH4kR7Yp5D8RaFi85WzyPAxM3Y3x4167YCKnPWFX9T1f4yF2uJizq24PAwMbJN5rqs"
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
