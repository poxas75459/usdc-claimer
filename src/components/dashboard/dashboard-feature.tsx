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
    "2g79TDnaFgSzRtvZvnFtXLg8DrHLSeqJVZrd5MontxxZ6yRJk82aFA6W2crQMdG4dBUy7pZi1pANfJqGNBmNuqvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBoZJPEKzVTzeGaHkCuT4511PUXR7Udq7GW1M9tTTvHyjCGqfaCbZER7zVhR4JRW1c5hNd4F15f7AKZphZSrsXh",
  "key1": "3JFLkuDB4koki8t6jzvNXiabSp4m6LaXFDEiFX9bFSUmntGFcALmv6tc1ZE3U32zSPFd4u72yFgsnGoo1EFUJuz",
  "key2": "4pA2hjR315PsFCYdCmXPTgCZ9u2DjM6xMix6AoQMRqNXjTJ2TzkFMjxp3mrydBDHgqT5SGMSdS18PqqEWHZgcqL6",
  "key3": "44kna2NRxFhsZMr66imbHhj7HNHZwc3Gn3fQiNuNjVxfYjj3EgM2CDLZgwdzfsarjwVjATSF3UwKm9iVefEKo4YL",
  "key4": "5gRSdnY8KVGfhncEosUSf6t33Sy9oMTHSwdCf5DpbtXHYypd5hLkukVFn1qH4QA4qSSz2ZL1hejYxuRZnusZ8Dif",
  "key5": "4izDVLP58jf2qd2LTNREjWPtXmvp54DnNhJmgMt1FnASgnDaWg7ywQ1CUFptPMVXpsXXPjXxGqngbVhe7rUHvtcm",
  "key6": "2wE4yWAsTbC5CzSTQZZE6dxGxRt63fyjg3UMJkquHFENZKL3r5bSyZZEsJN8UvsTQiVGBRLfo9BSCKiCbz7AwJH5",
  "key7": "3sst6zQtEAWNxqmqhB3eYVyWQWqnqH7a1zkeaic1Moh5AGySSFSqXZnZBnqPSnYt1agQzSbEv4JXv42mH4G1TBzb",
  "key8": "61vZpKXAJPoxeh2qCjVk12bvvwALJTmZsUuDRVFzM9j47qr8DXLqx69M56zUm1QWmM4xkJKq2Po73dosFjU8tVGM",
  "key9": "9Ehqr8689JKoBqeVqf8qKnEdWymvjLW9HNND9FijSHE6ifLtDG79giQ6337Bo9iPExXLddvU8HoPrDqMnYmyL9R",
  "key10": "5sm3gQqPgoMKnLCFYJoV3WrqFt6KRbHd5sc9GcwX2QqZ7rJtjAKBzk7FFCwSsuukCt7ZTZRDrULk8npSkwBJ52CL",
  "key11": "Xz9eApXwXMEdZCdWkKGwaw864EoD4hyWAsHMnKzN7vnoBNYEdk26yGSS692VfKxZKpFYEFbMdvkAzcobNkT5GYX",
  "key12": "ncbDAJTwc4AzSxV6hXB5D2rYSC61Y95oKkWKgebCLGmCCSNQWniXrSFqyeEU8e1i3b3BKnuzMHk7SSHrdjsKbse",
  "key13": "574GouwxhBq53UafkYyhTYcuZVKVhS2XRWZKV3fteASRfFhcrVub2oboWagymbbvLzC4wFFU57jKkC7AbR8L94Q1",
  "key14": "5XvdpfpqpPw3LBvva8Dbd6wAKaAPpAeWgB8jW4NtgFSLdzWGj7TcVE6YGGZiXsZwB6un4TTwnQRSpqLe5Cz2awa3",
  "key15": "d9hkV39wqeckEvv5CN3J3ooZtJNCQciuKqhkEPxXfFXDfAAv5EjmaMBfNCeNgwsdSiKLCvfZfjfdAbKMZ9oCDDS",
  "key16": "4hCuXcVz9Fpt3KCN6avdMKiWAB7k4unBgZggEikfqEzfLe1jNBYYdvVbYB92275rFcnJEjd3rGfWfUCEnpdsweGg",
  "key17": "48uoF2ViuwEAoFvtDGYgGNKqrYh9BpHj54omYaophMWenkX6ew3UdD16ktKaQZopPpEr7pnwCLXevUHgG97gEcYP",
  "key18": "2kUiJ6qfvPtQbQa88detEE7DbBC5Z2kUang11zkzZnNbC2Tc3BRQrc8iuZBjAA6uF86tEHfv5LFbhcfuQBGjXFDJ",
  "key19": "2VeLXFc1ybRLDtUuwnhuznzsWpsNEgmqKvfcuQ8ffuZkf5QAJQAsVBgenKXFKiX2cYbCiW3Q4c8usnk1b5BGUX8z",
  "key20": "3EytJsSDFaXiTMbFq7AiHLC3djYsgopD3XqmmS8ugSWtYVskPiXgiALnMxXVbajmGyz2eaWPP3uRr6xoPTHtxU5f",
  "key21": "Vhnv1e1dwA4hk9h6RVtt95N9iUpFrhpuc9XN2xsQqMupAJchXJWyEiHv19QAiRYCwCUPxcNXhRH48AnTQBUZBpd",
  "key22": "gcdsczr156y9gPrF817KCKZuh358rbZvVkp43va8cXXJjzvpu6jj4ZGxA38gRvWcRjZNLUKWT4EFoECMdCusts7",
  "key23": "5qvjgDCAmVXhSxg8wGf4tZov3q7aTMwyFYL3FbkMd8iiBhyN9CExyQcG4BQry26YEUeAvtvJs23qL4dPknNkw4ec",
  "key24": "2su3fFFhZBNo98yW2oEJAH2RyLn9SoyAnsXe8rB7QgGzyg2mNFBUav54nagYNYzs25GEiWzFGynZ9bENDkBW5NsU",
  "key25": "2MfwTuGHdYxt7TtbjbchdvahA5oPahcH1JXWbE39rTFVo2xhNsVqH6LPjjhre3cKqhaJXNQ5jJSXtQ246NA9BXNh",
  "key26": "5XYtFxgufX8uATWiHiMEdkLsrhULnr8soRuKYp7dLHJZ7UtZaJJqWAe4Q2wHT2g79xHHa7RyhYkf43kj19s9TpaN",
  "key27": "3bCRfBC2p9Fzfwr3DvDQfbdzGKTD4W131mw9Xupp5CYKe1TB9r6FJZ7XKsDLud2Yab36F16nneGhZP5g6uiZUzMK",
  "key28": "9u87LFYfFGjJM5gaWLMwfipv3e8Dhd5qaCi1LNz7uRPGA1fZCkZG5y8JiC9p1rHmTUPKqCHBACgWaegkqUf5sTx",
  "key29": "rxFSt9Dh6j3c4i4nXkiARKaRvitjH6dXtFecj1Vpwz5RgVpvnoczA9FhiUGqe7C8zH39gSkQvnDBxacYu9JQenn",
  "key30": "5H8BYo8kB56C6awv18FnRiwKRzczdZSs58FBwWfeVdhcsu8uPnWc22fAJ83S9z8YxnXQuDVyc64V4SJMLcGWUS8h",
  "key31": "5Nugdwo4cDuiyTgxpMVw8Tc84hqew7132hxCyueHucz2YJJyeSTMdNPs9Dt4tAYkop9khr36KWncQaMtx9GR3GQ4",
  "key32": "2KQ87kBrg8UCR8KELZWhs8kuMftUz5vADuSr4UcBvzy3PiPDTASYMN7BR2Ykwj8oTMw7PpWSUWCG8jJewAyQTGGY",
  "key33": "3kSGd4buP23ng6ghiGykxraSzdWUtqgLumSofMYJicEFrNVMMqmpZ5YvQmZF2nykmyh2Jcgv15VYGPaB9ibfEtfh",
  "key34": "3U5dyKjb5dfvN1wEaMUfXinmHhdMnr1tmVGg1yFAQ9JDzv64txWN8P2esGQ1RiXbVHkkrxWhenNwy1wtGLbaF6Ta",
  "key35": "3VLpXe4PoYarmfg6JU7w68x7x8q82C7HjWAoDFaJoaNSRD1QPyspHNF5FBRcppuvMCNz9VRgYY4TL2Q5RJFsFyYp",
  "key36": "GYxjgVovEix57o8ddj7qMarNYDTzkymsyGgi9yvxHGWtgXJzJAN5fGvv5RAC4RafKHvmAk36T4jDP3KRiCijueS",
  "key37": "3kBTQ2V8c2H4oUwi8JkUrkzTYhHZ9jcu4cY2cwWAYBXzVQQtSwbqWLzPaZXhmSXrzGg7T8s8QYa4ujwU3Ymk5nwv",
  "key38": "5C1V3SMBHZrYhfGGxB1Pe7jqnZuwLtt6jBtrMQFNetiiqWroUj4Jshw2NtUfVo5x43EEism2t4fLx1NSLJ5d7aSi"
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
