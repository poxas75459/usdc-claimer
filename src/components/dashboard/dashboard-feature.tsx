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
    "2ijAeerqg3tpotgTXXQt6J1dsYF93ekpTpdMis2Gxw8DvoBqynfQgMCjZvxMJtwvMm99tPe6ScbLbKQeLi6WbWW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bEww1uNwD2fL85rGVD8ZgCPJgGwX5ZFt4tYJ9FHfsJv1waNDMFRkFxGUNrjgRhrQDcdZWx15ZJk7wkjTnLGBsLG",
  "key1": "3y6kW2e6UwVNcW49uG3KkLwLAifB9hHYmMXfPfHYvKTe5EV6WSo7JFfLKTF47yuc2wLx1AM7SFQfWRN2uwVDLCFG",
  "key2": "2xnUmZVpfTfnrW8wd74kWMeP6rASvDgpSZ8dCBbVDz6YKgiCRgXr7wJnLWqsEPF25Qhhu4gg4kNbnApVMB1yncwo",
  "key3": "57FFjfWReHq5LXxsR2TR8Pw5Z1hFVWYjqcTjymYLECvkv8x6nBTeq83PxdmFvhHorubVWn6GeRMngqCLb4Q6RpC6",
  "key4": "3Cb5JyAgXmzsZiDNQBazsDN7jGf5Nac9XnrNRPn33iKQr3wCnHbYPvLWogH4mM85kM3MhHNLzz5WH7fSZprhE5yD",
  "key5": "2vpYC1fC2jBzJmEFMBmPufQKZo3PKFm9CvHJNSHEqvPiUxLNvxFgzDK3mFfAttRQEJDeeeFMKGsUcxgBE71DmTYQ",
  "key6": "3EonTJx9Y9kpoYXqCu3YDB9drUb3dCWmXNbEupFMcPEXxkSv3PdG2oqL8geK2qN3WdRRwAWZC287DdvUiNrsGjM4",
  "key7": "42jFsKiYThDN6K8zffhmXcsVfdtZHUkMky4DLJtbZ84pS7r2D9N2Qxz4NqSFm8fPAmFkSFBavzpWiH3MwQm5EBza",
  "key8": "3TF71J4ioZ8EAWViHb6P9TQMPSmpdHyDvKeD5TG9aGpoeqC3D2Uxqjiw8f2k7GbqzCTLGJTzgWvNtBA5AtTTiqDA",
  "key9": "5L2pFjHPD3WmtiYnKfk7RCQSn7smN16hfDwRL9vsvaee6RGjgZAmFyc5MqKLzk5QidqvvhhjYQaDCB2GxXPXHYjd",
  "key10": "2ckJY2kEcnAETtbV4F8D9JqKUAjxGWjZioDC9Bh6E3ERLmiKBDFRSj5zCitHHWvbEtn9ojZ9jvSpiuqDncdXMTJ5",
  "key11": "33DwNMge2172eP2m6PQqFYA1NVVhc7iiew7Z1nsKkqyNL3J2Cx1VYD2yFhmdFKZSxe4QdjbWFTj62KCeNfV9UT52",
  "key12": "4ZDiobDsk2j1bH1JcWbZSCi16hSMNkausaqN2aaKqM3m1VkvFnTAUujDL9Cbk3DpybVfTWRcqYnDEjQv3mTxDo4",
  "key13": "5GRsgVWhWGQKDqCbYJwb6kYpYCoUMUmKfwYgh3fgbwCxZhSN7yUwmztkxPXmXY8ostZAdi8g3EVrQNpEJrBz293g",
  "key14": "2DWvKvxJN6RnbVNxgQo7vYX91MsKSwRJjWVKJfPYhNsTqv5F26J61SXThhVFVENEU19eyjwBRnDz1FXcvPzQzMZx",
  "key15": "5E9ZpCh8ZY3Ck1GvLNVKs9sKLSqpA7Wo66ESoUGbUrSwVYh5BhSepUK9x2dbXYdKb4pjMTKDSrtggTwooEqZzvdF",
  "key16": "4MDQd6dRW4Pe1gWhu9DpCStwJ6kY2a3nkfAmfsJtPXkUiD1rrVASMujQ4xytxBW85TE9wjD6N82wRjZ8y3RrZ9Mk",
  "key17": "4LNFe81axiAUBRJrkQgn7veqeVJKKkfrhVGKmZj5NmWB3RmeMgpY87wh5Lpf6F3MeVqss8m9iCEos1kSKPznTeYL",
  "key18": "djW9LWiSSk7Ek9Beb4DSXYRZsbj13NRBQCH8fsG2E4wRaksYnuKL4pfGVw2HugyVcWuK9hvn6Jrvz3gyzkswnJW",
  "key19": "671taf6GSctMHikGQGG1KeuiJsV2nTeo55hfyFgXF4NHXxwsRJcs8SZHsi9sXLrzv2CTfsN61yj5AmkX8VpQHfdM",
  "key20": "5DXbzyKyCSaarSXgnE3Fj1xVsNgaRc9Y6KUoYUt2mTSM3H8HKbzE4Dt2nmbXX2o9ZJQyugGYBjBiWxzUyN9oFDiz",
  "key21": "254GLywyu8dZxZw3WNv49D3n3FQzpVkumS5MmA1ZR6HNoQr1ZiJvHyYF8VVLt7ahhTZPU7YbT1JhtAMih2ycBLyx",
  "key22": "54QoRSBsCJ2puNX3DqJxsCRShrpU9ZUxJg9NRwDbJX4TV5UiLZbaEppNM2Q84wFFiJRpXtikeBierutV6Hi3nQV3",
  "key23": "3PJXGzQMaC6dA12kjPfhCmBN6ggxk76aSWTT8e2rqEuPxsbnTwAyWcU1SsLbf8prCwKtSAhjeBmojQx6EFkFQdJY",
  "key24": "5fsgJfiKavPxqW9Cw3kyW9k5mtFsnyBM81wciVY2QM3PSyHmJu8g2pkrtePgTKCCiikuSvZXivVV6AQAnyS73C14",
  "key25": "4HWUKthDoX5z7Hb2v5zFUtj5TzU7DUjveFhvY2ENdRT3xmKh5dS3uHNqNEq6sfwARRmgPA2vZe3P3M7HMfWxX1BR",
  "key26": "29euqp7E6bxuxTLTrpciWZ8VKbBthXTSwSpiNbKbtK1vmMeZv3B8368KzVg4uzJb4Z9qgQDaR6A5gXQTE729sZyS",
  "key27": "4CpNvtoAihoLEgUtxidgHfKuWKLh7gxRyTMxUhnYffnyTxtSgjmGcmZuvK8KpbDTtz3vAJin1Skx5usv2y8YjLVN",
  "key28": "542JbUSG9rQmVY8ATGnDaSmqZsyhxkfWaqchrnDC5qE5FWED7rXWCXc7ZvmCmt3iLdQnxKgx7sR8UEFZ3Rg47PBD",
  "key29": "JTYPF1kubEbyrctw8HRt7f8StBmat2tyxhhP1GEjZs811RQSjNW1m4S4p6sxzwabn8utUNCgrEy4ug1AQayUgq6",
  "key30": "3F4SYYhxgXX6vmvPL2aJFFsvyidjA4iy6dHuycnf9sduHUjVeNcwR8ktTtmcixFZzS8mw7PS9GWDVq7hrpeynH5c",
  "key31": "3Rf1Z4dzLcrBoYU3AgrX4xkjfjpviioazUyp4jYyuJwMjC8V7xDBeYdkv1eSbouyYsGDSCGPJ77p6dACwGqT3XRn",
  "key32": "48szk8PSjuNF6N3aCdL9CoheNjgh5rJyZUfBeuPKAcEV49WWsTwrQ6Bck1X82YrAuk6vUwCAT7jwTjXz4BBp2zqA",
  "key33": "3ZV3bow7tCEdBrTjqPooBaNvZXzv6eMC8rxztdhoqXU7ZHJ2WY64WdXYVuzpCEx1vPUcNTJcHQjqNck84j4T2RN4",
  "key34": "2Vk61Z8VPaN6W7sAWyrENjnx4j8o6F9DYPFZtx9hMM85vXJTzqLzpJTe8kEAXLyiYo65DdSYM78aznxyBRMsQsBJ",
  "key35": "59emn3jTWYsYn7txK65M8DkUq3xArEvbQNn4TFSkXz1dRseXuSbJ5Cq3XcRMBaZt5tfyWVufe1KYJTwU6TPrcqEM",
  "key36": "63FjBrbEtToeBenTtaypuzqypjrZEPgRU335wraaHq93NNxY3QvT7LicZGwhsxKeCQRDEkcG9fwomeQPJ89snfup",
  "key37": "128dviLcKzrqFnA1F6ZmivMpn5edqrTqyo7cNUitgFF9MMS48UXZ2mBhoXmaKEM83TRZhEPm1qiVki8YpQTtrvp4",
  "key38": "5r4LFN1a7oSo8QQGvkdHN4x6QpHGz5nP2fCYAqT1FzycjtFALE1sg3ekFy3GkeZvm3zpfjMX1DA9hNDXW6aB14AB",
  "key39": "41bsBPBCne77QwmBsz3TEvxwiwAtEUnurVxV1BJddx3PBpuofM8rnbNGTBzKCUWZN4nzYhfVjo5ju4xgQRsUPF1e",
  "key40": "3jy8ZZxA3hayNsJXdKqh43HwR9Zu5yZYbj4guCXG3Z8QMMAyVSfxGzb3qCbPtNQ6swLTXxABFocyUJy8k3ZTuL5e",
  "key41": "5n1Ek8yYT37FbseNxoxggn7MoN2ah68qJ5brWTPJCTjssr8Xx1cwngbaX5eLoVK6kCXV97W2dN1oYhwt8UCHq2EK",
  "key42": "47y3fu1VwZVdeGZB5kzmK6nVSaskGZnGvrxGgVZr9pivAmnsWhveNBhRqTNrosWzVkEuRTffi64AF8burEtLZve4",
  "key43": "2UqKZQRAHwiYSxd2MHmJQ8J9ZnJKYrub13zCub5ETvsNe31gxCW2CybcjNcGrTAenFrWs7qLzq7XXg7KWUBf1LQT",
  "key44": "66JZvF5cNwfiMqR54cPrg34Lg5unpptaNuBUyTnSZzvw57xu57sfAmUMcUzLutPc6q7BTVT6YtWuHLkPufvvWga5",
  "key45": "3C8eFLDans55wbDWb6FjN7fVMf7uuyXZXUGVsohzqNzzeTRrEUt75FXh5p2X44F8acdysRiTnx7rGnw4LPj7gMjw",
  "key46": "5WkxHmQGtZyXTVthGE9MEH8NPUJLFx2QWcxAqKqdaRWmtv1u2PD3JEQZjtiLe99D6cJfGhAuxHqKnGezUZDv6Zp2",
  "key47": "2brTkmS2XsiRTE1tPwi2r2GLPmNv8FbUabMXZVCCHpoDwoUyLh9tNEJg2hLXTJgcJTPYgEGSrnsHihM7hNW7ZZMt",
  "key48": "4YoPZoh7J2KMaJVGvJneWtHFg3TFaKSiHXEETqaLhVo6NMZaDAHKer3cM6CSzUcX9SSUsf59jHcN9doJ52AWZmxJ",
  "key49": "5ixkUW6Uj3hsvBBQA6BWtxHX734qjmqiUw79hH99iocqA3q931teV7QJzxu16VUyVU3nEkE3SsHQGY7BvHxr1Qwq"
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
