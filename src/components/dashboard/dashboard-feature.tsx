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
    "48zBorR412XejyxsXyduEU1gbMjnDbg8drzSvFoNNmDfk25QiGniGyAbYkzx2Y6XbPUFJPQ8jz4U8arTbUcwjLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yRW1CeZiGAb4iJfrX5DKBESSNFUsxiPgYxNvWs3e6Fw4qHKZjEHAjkwsc8FeWf1mEBvbeX4tfQ2eZ2ePf85xvk",
  "key1": "6GPwF8hzYAy2XzS5bog8ueSBwQDFBcd1xfo4B7f5EkvVQvV6C1JSad15SCXrpF7RWPbhXgFDu1yhUiLz6eKWtmf",
  "key2": "qUR7LwEPRPAiCustaJ79X2preRVUjCMzBGbfcQEe7k3qBXmHBm8S9iQxXgyVsRzJLVg9L3c1o7MEjvGQxYK7eY1",
  "key3": "5WXHEDZ2SyD3pJ9Fbd1WrYmGwBPhYZRm6MKk3WrF6RXMMgkLWuzrvqpMiLcYa8jqv5GCVuLp8P8UcJoGc5Dv12uF",
  "key4": "5VxyXc5soKfsFEdifjhDNy2owVMZKP5NiqNqiKejxt6v1LUaRVqtZy7tVhJ4A4CKFMi8sP63NeFnstapsseCYA1h",
  "key5": "4JS9oEqVeuRAawDAJj6uwzVYQj55qgCmU1mz9zn4tNBAwEN2WfTttAFVvLEEPNRewRitooU25me6j2w2Eiy7eUTJ",
  "key6": "2JQUnrHLX4Ta5bKuFjwsRGswXKkyRPJeCTnXyig4u3J1pbfuY2xBbDxZUjTD7FgEo3ZXWfqbhN4SaucHjL5ujtLe",
  "key7": "oT4xkNNbanj28K1MwdgEkK9cqgUxWk2QVmJdY4buzGGXo9Zg2V9aowAnDquoZHHywA9XcWm3hj4LJhTVv5Jt4ur",
  "key8": "35wqt4fFcM2mHW3RZwjuSUzMYrwQcp9ebKbLHgXCLYjT6P4b9gufFm6gP2ZPad5zQUs8Hmjrwwrgr9hJt9ZrifbY",
  "key9": "4e9KzHZLDYQfm6EDTsuYzosFHqujDzMJAdYwmcFXySq2B3rWEN8QexiX31wF7dhfrqqmcYDDxAusgtDY72qyEPmF",
  "key10": "Wwf3qC4iLnApvq1dQBJcRMev83Wi81YPnHHy32cnemNtGr5r4ArsCbxdZxu4ExDXx2JLYZRPVmjhW9MD9dpkLEj",
  "key11": "3HWZEMoUXeJ2ZQfFsqhxQhxv3Qo8VnpgpDzF5yCUp4a9MeSrvDq8sLYwjuNLAFtH1kFaWgqok9JCXQau76dcqtZ1",
  "key12": "4WrpCoijSuHVXhbR2kfxKtMMtX5iEQ5QHVfT9Hy8u6N6QHyoKVV7dWBMcNCz2PnmtJ1pnKuNtJSLj5TDzNRvGGdQ",
  "key13": "6wi3hcpge4h4gax7iAyVbD8HnjgZL1nNofZfCZgDWHwA7JqRyvbMHhjyacjkVPqnDnY53TRwku688GaMsQqfhtm",
  "key14": "22rjvjZRdyGWEbPcnnEQZM6zTkRLJQTEQLyBWfYbWdBTxq9dQhX6sZ7Jv8h9mBtsoxqtY7xPboDZpMumpoBoUcor",
  "key15": "4a3eaTYi8ALaAZo1w1mVL4d5iL5cFqnpHVcTtx4ytUeXEBRabFckrA54QW8GSEErbWrNNXJv4JuLPL9T7xzg6aQr",
  "key16": "4TXKnQ6iFtBvhAzsFMmA9j67wfiDpre3cFEapmMbvChDs118icLguQ14vWcnVMHHujkhtVtxKB9VehG2pqWbVmS2",
  "key17": "4XNPqzCN72sty3wu8BCz8XXHuZacVG8u4tGm2YS2yFAnPXuV7ofz68VtS2YdTfhK1ri61gnWC7jeyLtJh4VKazBs",
  "key18": "5bzM8aQ5R18gqYq6T8q6ztaCodqCie6ss1KmFyhYXBzYdzuJ6XDp4PykCnXsKXmUXyXwxNxfvdz52GFBwAxF6cvj",
  "key19": "3VAQafCiC31SCCDzAGuVCT1MCubcFpGHwyvyVauwE4Lp3aMUAXSSnAcbLT4i4KYB8x3S1k9zdgs5towfzEi1fjPR",
  "key20": "4nh6HZJVMqmjTkDTBcAmNxJakQrneSZVADongXvH1NTwo6u4wmNsD8HoVYm33RFrfEwWj6CysBQptaTBG73rpGT3",
  "key21": "5HbNzKsYD3FJBREyG1gJdX162DYc9u4kg1TjaNy85LbyHnjTXxzwXJuQZrfFgkd7kMP29Rde9wYah3SeNzAmmbuR",
  "key22": "2GGjd2vhVPknyVm8ZBSMBdszHYmFegY7sMR5R8K67iMBvU5pMyLZFXzdfVfU5765KnPLAV5Wfae8E5XFyKAHj8Xv",
  "key23": "2ej5vCvNmDjiuny5JRQDSZ77WDLgP9DiR3Qsa4Q1qyT4tLR3JNMwDY83vmjAsHYBb2i7zcQbV3UNibs4K3NwmyUK",
  "key24": "gzawSt3gQkLpqXRcgg42nGeVrpZLJxVMQrjRmahEbUAegp4cwVnmmAgVJrbF1WfTsF55pqtVCLnfcxT2pZAeZHN",
  "key25": "4JHWL9kjvETux7s98FGSyPXSzZKQqX8bLj3XxGwVcdwvb1LmoVXGQYTiHAAk9VQnKE1f8ZLbrAGmq2t8rzodsWUw",
  "key26": "42Zd2pCXvnEbcG5JvFMmMkKDCxXWuutDYQvhXsSvEwA4ZYnXVnaR9dN3bkhVpjx4XLVnvvaXtVpZLyEAbMaQsKRV",
  "key27": "3CYnc24tweUKxeezh58ioRDqGXukpj3yFDczvHQEdridsqaYBfgEn4okohmF8ar8JW9nujY436gyX3zMNF74zKhT",
  "key28": "sS2GY92JDkHbFxAzRsRUGinB6D5JwKDoeqbNjYDxknuhH7QqqZyGMa9ZseTQyfGnSUwMPm3zGvVUy5kApF8V2sa",
  "key29": "5UPrqvKzcpARQPdCCLyTHHk7yLxpp3X5RsFDzDwshNWkRL4dHCEEmmuauzSDZSoT5y1EgzDpk4Xhpp33Md5G8Qp",
  "key30": "2vLuJ4yMEkVHSnzEACV7od41Ss1FxJSqbTJsfXdgDDyLPozaBtivQVZXoWaxmfCTW6uhgkawPpsALEr3KFwQDbNz",
  "key31": "4z5Mg2SSGKZkGapcbLZ1E2qe3J1TtkDfv14HBerDHKWYfuHxuqYQmqbgkXm7q7eUBCCRTMSNRFtbQTY24MjbnfTb",
  "key32": "4YnzTUULpAYL9EAqc68saqvheTWgyETGe9Yh24vAzzkFQQdfwA6UYPfGib1ogM8QRdnxkbnQKA3aNWJS7dFWt4rz",
  "key33": "5NHopFk9iFSmh1y84kLjwkUvTWY7jXRGDt8gvc8NW7ZQy7XCAQg6V3VeqSm82VApaNwWvqLk8JcoGfpkmvLMFpcD",
  "key34": "3CYUQtWpLrfR2eWWQFauNZphsYkUvAhcPvUwD6FRxhnesMKTZ1Pz7atRf29HQrsbfx1upgbmCnWZ8ng1yr39Yhgy",
  "key35": "5aPdDReGCTfqPz4CMHZwq2JeP2tugzFHV7W5X7HPiXs9i1wBT75mxWTAhXdCXWcqRjsrmNMybSY8T2pFoaX1Zv5N",
  "key36": "21JVJSMkL5FEG4husJhvU569ERjfktfkkXetiyPodmaMwuuDcp8XegGVAsbaVJfScHNNZZwmxRvAK56q9K7rkz48"
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
