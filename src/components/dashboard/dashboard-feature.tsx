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
    "3JTX7X4oxwnWiae4mDWRxCL8aYTJimx2MPDaYFpykhUHw2GgsHBTNCiW6FjYNuyNnXcNajLJQKEf3UQMFcvEWtjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcAjtAsX9X9jZEmznPJVFpf75NRMVjhMjVEN4rG6RKGzjychXp1J75VwrDYaZUxUZL7596jAthPxdvGmJNBDi93",
  "key1": "2WoSfSoBG8GZ25TZAJz6t1t8jnoe5jxWGPSWQbkqXJh9hk4M3J2hkQJJNxezdbnUBtfTkVB6BvHrxgDBnwSYdDpe",
  "key2": "4zabu9SgHP9kTzy4Vg56ktRy65JVPu7wDKGME6jyY4ReRkeE9Y5ALxp1CtSTe4mecDevRCGSzDJgqAWMmTRyzAk8",
  "key3": "2e9iY8EW4qFKJe75iJQXRYrBzpKnRrVXmHM9QDcMWfDhYhahHJkKcjPc6s63MvaUo3DqNbwN8hybSV9E3bkLESLZ",
  "key4": "37LGd7bvQkjVUesEv2YTrSdEBvcu4Bp1enDRgTyP6rjTRbC3mmyHLmDsPQBHmxccEWL69gBb8bZkn31ZiQg1bJwk",
  "key5": "4p5ttMtKUeid8v8qwzubENafKvaMrxiTxeVGTApwyiHM2UhcQoABw7cHt4iRxbnhhC3VzWAzM1m7uzKHnvd1m2eX",
  "key6": "4knk7yGJ74wATAT7f37jj6nDC7SLYFfnY3VL1NvwmVyXun4jWV3afxFUMKcKRZRqFTSr82sppw2WmsTxAiGeQWqP",
  "key7": "4FwEapu7xiKwXagbLGgr5hq8N8yTyDY1Au5qQypn6c9tV5v2Et6hCHePsox2w5mqwN1R8nBqzSChgbR8GMvddXuQ",
  "key8": "5dSrzqdeYWf73GwY2XuxYQqM3jzdcCRbxCaX8CSKLLuqBr7aAfwJYdsUZYKUWbJrEthbJJfhsVWdjMEJLLiE3wUk",
  "key9": "3jb9FQmBHtwdXcCmZNNDQ8h61raUAFKK1jbEGC17a2CDxsxWoSBmEmyFLiPZVp34HQE1RYVetjZg1KcN4PVrG6X1",
  "key10": "5NTzXQWZaezegF9MGmdjBoN4YNLXGbpPSnPj4MiokieRzbAgpEQ21V31ev7XWfMMGJt9BsW5qXfGH1DzxiVGiwSU",
  "key11": "PqkzxkpTzg1TfQbCFEjAYkhCkbUz5pwD3dNqUFExehhDyJPv6Z3ogXppog1agSLwXVjDWpKQcDR2Qsfum8KvoFi",
  "key12": "67Em93bPKBKApeba4LDcbCmxZw4a7ezAB3AnnaZ8PYAu9m35ngoPKh4RRbGHJEsPsoivhcWLrnuFwzEpfszAodtu",
  "key13": "2PTC61anmZPM515sGSoibAYrwYtiwgCYzYCz3RVK6vtwFMCxMNsw5Jja6nhHLcV65EPSEJLtjGjjM2xyRWBLcMvN",
  "key14": "fnjDRhYrU7fxdXXmnGd4ioHuaKyiXAEmuWFPzucyUrGvswojHk1SpLPzoBaTQwUq7usxbYh3AZjcuUpnWnjGemj",
  "key15": "4RnP2X7mAKo8qNpYihBSFS5ADvZPTSGtB9ggRLib9pprSSC87ECe6xt2NwVC79Xc194LBmV8jXoCSi7g1evKiVJh",
  "key16": "24YHA8vS8976TuphAYwAG2jCSRyJ1Mbts1rb2y2KQs6UjiY9gqMxQTit1Nv24EYuyjB1aEJkWT9MmaNTEDXDdVTM",
  "key17": "82Qyx8fJcNQkDH1FgD6ssmcjNyYfDZRQvbDFh76XJaQjupTMFuf43FRsuznRnMQzfU2nGEZcHVPykxHYa3DicXX",
  "key18": "3WxdY9QvbGLv3yVtkNvpAcFVBftb5AqkLyGBGtHbr1dhbGqmiZLYq3yVe3U4tJ91ukVXabRy1cWYghUdJkYiRM7r",
  "key19": "Feg7mgtdeEQQahKjEXazbqEskm7nUYxJkN9NMQRHm6MXxB8XYbEavH7kcnWwh8DE8BgxVDv35TugvTMgobVjTkp",
  "key20": "4zGDnbvnkVUa1utH3os9m9nrnUyXsENJRBicbm216j25WCMxDXBBJbMe5aGx3p6KjtreZ4RKab5DLTwYi97GEGXv",
  "key21": "5R4CzSBKytJmR9kJVFLPZYDCWkzyN47W7X9RmSU94Xc8rSg7bR8z5Kx1TVUZfkZ2qVdnuUYnJBFd7Zz8iashLJj9",
  "key22": "3oCqaXr6QMZXQpE2QPMBoBb1UVyw7m58JryWVvvyU94wvArPz4tjgLxKXB4zeaQKGL9A4H3aKrDFxJJ695R1717r",
  "key23": "2FLabbWQQCehN9JTDaUcCW52Kg8jpagSiNc9ADfbafPnALc2XboaEJEmECrwxbBGvSG4igKje7aPJMYzKUWuTare",
  "key24": "4w8jEYRSsydqiSTnTrAtCq54pLMAf6WCF1jQLzaTgMsLKTvfzzXStCEj6kcNie7VYDhg8q8Je9jibewZvy9ygfvf",
  "key25": "4SiwJBY1DxCSXkuMef1Ba7LSypPryB4x5u1eDxgrnZxqc4kVSkAbxr6YX6tSqjF9zD1zp4Ck48qojR2jUiC6PcFf",
  "key26": "2ZF7mSLV9qVQAFUmR2K54JRniS7jgTmMWPSVT8fzHGRAouaZdhenm9px6mUiWz7mjf3fWVaCJ2ccjFfqRdbZU8Nk",
  "key27": "2oieZT3ZvdPNVWPd6q2FkjQWd2kWCHDALUhu4oZ29gvoxs4VAbkbCUakXYC86gUJ2Fs23gzYFbxCLwBZKTA7Wb5r",
  "key28": "5GFBnLExJxkzqUqunLYqvWSFx685Qk6pKTK5uiAkdKdVhJtafrL2zdB6FBkWU5JEVSoarfMD8u2kwhupiTkVhc74",
  "key29": "5tHFt1LwsB26xxtBtxcbFGkXwjBgQ1PUPkaiLYponb8P7xG34RkPKwFL2tdnBjVq9MhaWPMEZmWu7DPYRbzSuVZ",
  "key30": "2hooJRp9RGLDFt1xBbqaWCUkYSVJGQxtqgCxtSi5REtj5Qki2YzQ5Cg6QeiZ4Fd3DjZ7dH6uKZCZPTRJnkQhh39T",
  "key31": "HvR4jqxmeiBrwwJMqg4BMyHVAqEmvqi515Hhdc4wAE17T3Z4hEJ2Z3zu9JRj8jXcodCSqCn41hxsttYpwkLKMFz",
  "key32": "2HktT3aZA5hhU6W5MVBZFgZTEZfmBFrNMcm3GaQqs92WiRfENc9Kup3bfsVHQ3qCgsMDnzNAP54rWvpu6JXmWN19",
  "key33": "Ns8eDV1uBpTDKoEPecFVcG8aaiKvPiKGQ9YndeJ874Bg96twSTTVs5HiDEcVBJM6jq285TA7Ja7p8vG4qwFozvd",
  "key34": "Uw5gKn6YuTvVArDzh7X4TqcTztKtPqWFf9Qn8i9py833h2bzHyfx3zDpJS4XjkRHbESHRBn6QCA6NezgChhkdeC"
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
