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
    "2H3zL95ZzAKv175N6nZoLfXRRj6dU6oR265uafKJgdJ8r1Dx29xjxoEj2u9RQmJsL21JhZYwQDNQknSnBVY8Z5vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhSakkkqjh68xfUNmxxdkemtrmFQpR6zevHevRw3B8Ns2im8qxnyrEdEVkQrHCH4N1h1T1xafBtJXoVEbwFTfpg",
  "key1": "wpquuQDKakKZoG53u38LopSfUAQbcA8ikFMBPakVa1Z6ERUjH2vWk8cPN6kxyQashQMpUbq5N5AGqLvPuL1DChV",
  "key2": "651asFHrjnKgRq5qabP6bXGkPNwp34jmV5b6zY7theNMkoWs2wzSREoWd4phhYkjifrHQmoAscokvuFKnrHfu6mM",
  "key3": "4YDLKg27LUvR6WUdcnL6tDGNxgBPPB9Vtb3E1x6io8b1rjJk3a4yDb9qXNzFkySBEA81ZTu2t1jdi3ewcnk7EMSY",
  "key4": "61ytGnJovsKMietokLL33kffoasLNab1h12PTaGrCjwev5eJ7RKEp4BZJjdCmWVU2ygudZWybRyLGrchRBWApMDG",
  "key5": "LZr6C2s1aALHmaP7oqYDCG9iHvnL5i634E57zxugK3b4TPvFeGfLVePgmAM2KhR41iXmvriZdTt4EMwZ3wAm6kU",
  "key6": "3QM8SzM7tHamzNDaJsUUyeh7FyeQBeemL4ioJKuuzAcze773dosCBUs2y4qjkuSUQBmKG6CaZfLqwAhsdR5kKAGt",
  "key7": "2oR6Qs2oD6V7mJU9UtdKt8cpj8QS1ehvGwZEz5apiXve5ijJfbU95iYeLyJz1qHQABNFPm1C7BNYpJtNdqs2mNB",
  "key8": "3bffvEEwHCifCVW78yNJCsZfSB5gGdqow5hNfzWQg2wSxaFMC2QGwVwmZ664aFATt4VMDkBVct1SjuiJkAGTrWEq",
  "key9": "4xTpCsnEcx4tSbFGFrPAsDY9JoMvWEAeAnLKuDyBPhrVQTD9xUR11hS7n6YaoLC7p3L3itHtmaUZngRXRfTJbxw8",
  "key10": "55pdbwW4oz1a14VAGXEkdpCoq95FDBzdJorCfCojFb6XH8iu9UFgSURyQzDoMqryTx56s75kEdopbZWYjNntZeYv",
  "key11": "4VvYmkBEPqi2W9j5cKwz9yzhh2HUxQHQ3AeyHdDXMdxyLpz7bopTpKHJNYyGMzuwupBaDma2rcfo4cKFKNRVQBjj",
  "key12": "4YLmuw3MSaFuSnnPJ2UiUBGBYufqXUNoqBdkDUtxifzDT7qqY7s6ahXiSzShWf5VpYfqoUESbqubjnVrhk2FhXL5",
  "key13": "WkPveK5mXJzfdurtTTCs9e71aKVEyMig3H82v4qogu36Szyp9xSEhkZe2UzvfrU83fDh5Bd8Dtts71QQj6aAKXv",
  "key14": "5S4K5YJ9upphQrrbEUCHBhj4WRKNQggRbBRuaf91iuLfsPmWcJUBxKmpDHYupPyiwCmqJqxvhvWhUynBdFwGdugL",
  "key15": "2tKFybjpWhsEg2k5WXvsXfxH3mv4h4qh8E7fovS2wK5h5xWGu4PLQmfe9n41FGNz7znKhFY3ydb9LEGwdQKFT7k6",
  "key16": "3KUsRtoQkP3KGtF1wpacP1qNsUN2eqEcycpFSf9P7EgiCmCsNPTTsquaQCQ3AHMzjzqDAperY2HRhvTFbK1Li4ud",
  "key17": "2Hu2trzNEsmARfkvs8MqFjLDy4Sg2PLmn8LZiUydJp5dzpLD2EmQRcxzTpxYQ2GYrX3qSNuuqgTbtgzEJcAjbMga",
  "key18": "52DvbYQjhtBSVsciVwYxPXQEGpXXkjAe5fSq96D5xt56PV79gtSz3sZFv2fxk2tuXsJSDQADWsoomGR5oWsYXiKW",
  "key19": "2UFz7mcdgFYywXWK34SHe8uJAjNQP3xxBSWkgMJesug6P2cZLLXt2aeGyhgpVTGzqhZseyxhxbkyjs8a7VLguCWk",
  "key20": "2f4SK9SByxF3jLViMsiP4QUZzVMYvo9w7i2NCCjaHdx4hEipD9qHUUW5GmaQc2iawfiH9aaodXDtGninSYBx9pH2",
  "key21": "2fzizy452mDG8gV8evWxnx1MSFjYdbYAH6rBwTVisEMygitP9nQHpX8TWb7aSo3ywrvXr6AuDyYPWzzJiEjJ9JzT",
  "key22": "8WAg4v7qs13fGUELLZ9SrGfEFJyt39D6Ehch3DL5ynw5dZENxRJGgE2YMTFzNCKngiadT9in3J194aTrReSmT8g",
  "key23": "3L5mXxq5xY8tqau9SoHGWxwjSMi1Sjep65uPxBHScUX4bnabJpvThAAhK9HuTw5qNFTXmPb4qXCQ4uFdpZwTk6sF",
  "key24": "3S7fm7t45DLosyGvuvdwGxoBzKKjBiESQ5C3oq8iLNdGEGuCrKzCQTzX4FjcSnmCNWGri76kouMuG9jvL4Vph9pJ",
  "key25": "5nbcjUJ7SfAu9tLnGpHnWhK8xobN8QWF8rbw6iQ7zbnnght67dga22NXdp8WVNAY5rjrTLXUsjSrThuZWvVcyVfb",
  "key26": "3kgSJSzz2923boXDWadHsUxZYKDLxgnReVEZgHtbjS52YvUdntMib23FagajWQn4NDjdGP9q8eF3S6ep7CJ4iHLB",
  "key27": "5whbRQ5JkwMmhuG8D463hD3mdAsHDhwyNmVk1HEiP9jB8EAkP6RzSJmptcqJPnbzemfVq4Jz86eM1EMA31tVTLuH",
  "key28": "3tantJUdJK5G5qtFE1BUhQpsW2GZjgMxHzm1hLzc5zZ4eazkUMo6jCXbGTTuNg6ZB7AGbHGuMgAQgSi4ECNmXqPD",
  "key29": "4znBKbgkMtkc5fZop9ET1BLhanm7JbdAGs1ervUm5RCkj6GbkcEEnrJcTayn7CTqTYnrstSeUsurxE6dKv9zP8N4",
  "key30": "6of7gNLWGnUeh9EytocgNsgazkK7svVerE9nmHigc3FEvhP1DkJdkrGnugVU45HueXqJc5Rq15szyE1JAQhacvL",
  "key31": "8BSbPG7HbDuvH47bw6kTKmRnRaQMNDsQFYbqt1nSDCUKN2af4XQBHMAPcMoDqxm6GEctntdJLX1a58REqDK2bzn",
  "key32": "4wfMuUXmwXzofxQDjMKZwZYd6iZkstEGH3SR3aAEkqT8DoJQFu5VPpC1WuzWEXat3n5ttacWAvEkpv3ydhAPaRxR",
  "key33": "5UWjHrxpFPR6sqDc651zgekCCJAZqt32oc86rvTMPhZjh6m4ahVCnNZkRxQJ6USvAexSPQCzJWMXfzdJxgA7hiLT",
  "key34": "5N6yBV6s3EcWju9a5Qrkr34GqSr8QcjPp8itjq8dq1dwSC8ETPpq14X6tKmTxR2fmWFTREE9suiPitimrREwyXFT",
  "key35": "4zaRzQSSaUuAsfSqasTCVtXDDn7J8tdhDLXKCUEkAZCTvnLHm68GrD1Yok3GDW5TrRJZYcEB6sKeAE5TuybhtdDL",
  "key36": "4Q2B6VVdPrWcDGW9GfrYEuudK2qHx86118u2WswfFXxuSGVE7gL44EgbaATQFFW9KjcqDRRYojee4bLzBf3iDnhw",
  "key37": "43mPinUFbEBJQCjuAQ4JamFFAQSYcUn9BxRqPuzoVQgey81ZFwj9AR5Eb1GbnGAYFo9RFujoEQgyYuSMaHEySZAx",
  "key38": "3SPwv4noW31vDToV9QVVZ3V2sZj3W6MiXXcGT3vTpPqb33F9hH374DupYAfmZejS9FVjMpmnsKuWqkEfgEBHa2Xb",
  "key39": "YeYJSnJS22A376WCqEfuTmPARFqAymTbmxA2rVLu7J5iRn8JGae5CLfmco1jhV32Fz4tLFTzyt1oiACWyCSTSrH",
  "key40": "4zSGHvHZosDAvFbLqPKzZdB1LxmjB719pU7w3MaK1rSaKufZbxBNnd1hAgX25fj2KtFbzPNDHxfksjWhjo3Lsa6m",
  "key41": "dvbhfq7xdKnCAnPKAJVVNuViPHw1ENhuiHibj7Dth1b8h4xsdPmsWMYxUJ4xpKZ5XnQu8cZQXerwASiL3Qb3HYs",
  "key42": "4No5GZHQ3RRkJxqVddL8TQ6GXJAGmoNbGMSJ3sXBhKokDjbQT9wG81GQjUFwzrreJhvGgijNmmtxGqfttApKW1Rv",
  "key43": "4NQZsmdGASKzciZTjFCszY2g1PmvpqedUfAjLBAWaDfHKEEMypDnxsLyiqAp6vdNKx7yzL1TSzX1bQQf78RYB8if"
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
