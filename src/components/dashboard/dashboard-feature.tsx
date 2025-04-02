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
    "22hEtL1eFCHn89fVhEpK5XZrwYurA7ii1dHzQwjrGaVuv7U1nuJtCTsob5XUCUzisaH6SUyrEtyDyJzVv1Xrm3ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhrGC14Wf5GTnChvMfb4HYzAi69DXPYkTUazoiNZpEf8FuZ9nzUYwJaiWtiSZ1ZAFi37icSpC92wuEKJBK6WLX1",
  "key1": "2LBTCYjT9CjdpHBCLWezzt1eAocFRT3XMjNk763Rnz3tStvxHi7FXT5R674echD4xr4CoZpGi6vAM7gtGXRBRwP2",
  "key2": "3eHm63X3UKcvuHF3x2ZfPoodRngKz8fT1ot93yjGPLaXw7AdfcJF1am8seN14s8HAzU8bdgaKbfv6cAiwy6AFRB2",
  "key3": "5efDmsFwQwPDUzqECTs7vPjFhHnv2J5SLEnV6JooyE1XwGPtPpNZDKQ3YePCMYvN9yNFSyyR2Wu7dDJ6hqRNyg8R",
  "key4": "3BR14YqTYHbpRTcSd9JzPwr4hEywSBwcVo1f5psGhdfr2EGLVQXFJKTCZH8aB3Rkq2bdd8K5dZCDfQiCZn4tzUVC",
  "key5": "5ioBTWWFHZkweh6vxGLGmaeHxLq2UB4b8dYWq2bh11A2YQ3SoDzhvnVaQVKXpwCSBbVRFLzAKg2yixwAYuFFkGsh",
  "key6": "3wC3wyzDrNmzg82dUb486KNoJbfigmGcZoLZfMSBCuibGSD94wCbbATBUe3hGHmqyH2n6sEXPPWQq8aeQymWLaZG",
  "key7": "5xUD3dL1uFLc3BsqtWV6HnSrjAvbNyX76Gcff6LNA31R51RdHHZXUktGRAn9jchfoXajaBtNHMPfMKKvwiHoYvTL",
  "key8": "5Mdmh2mLUQKzkVeD1cZFYhSCnXuMzufM3PV1DUNXZvuXQiqLrVZiwSBwQsKksZgJiHWJxmcYLEAKC9rPDYmteLP4",
  "key9": "t5G1XQ8DBNj5jAiaUmmGMUTf7KNbRjVXMEFB56qRKTxyczMiNwRCvC9C6TornDwsfajPqGESqQDzYrWAN2ds1Hi",
  "key10": "3jGW6kT3972RtAZYpPQwhyDHXmPJxmfdY3S5Y3CPfeVWMdo87NuttKpcm5CtQNmzrst29NppTz8wh6sWSLL8kKZe",
  "key11": "2jBoYX4wRrzXC8wBowo3fA1KczGKBU6JnJCRTSZLijsaKubZ2857Ap4UvwNksQ94aEWAHFjrSvsQ1UKEdH4rLe9r",
  "key12": "nLQ4k3uXFTUQFLbDZnxeNVYJ9kUqgQrS9pwgSQCSWZGQr5fmN4285cnVnd3Y2o4K8EeVa9xvBMg3G1Pg74wGsC3",
  "key13": "r7TfeynB1h71b4f5WQQBzGpN7ovHy44k3ZB9ytqdbiHihgY3PFTVa7gYDWSuKkTK6WdCbnLvQ1ntCnYrJ9bJhLr",
  "key14": "VN56xtnzpyeePZ35ouiR7XR8fZRwoeYSw7k2yBeP3oSn7ikEzG3RE2cvHsbGYKC9tnYfCB2N7U4Zeqa5pvVQGPZ",
  "key15": "4Mks7CL7N1HjvLZCHA4j3YoKSNse3zRWFTtqLeUP1JosbiFUWLw9KChsUxyw54321U59RPwki9ZSkdDbsDtrRWja",
  "key16": "4mJiojF29frXnMtVxhXYypjhC5KkrfZDCtUn1bm7PX3gYw9t5u3vBtQAJ7WVEzUfrSTfDjjbYYncyVdDb2xY5drP",
  "key17": "7QEisicpwJpRA8io5ttvytu2XM6VKodLikGzFeBspWZHJeq511PYS6owT1Pdd6jFnNxnBoNeR9qk8hYGAehwdBh",
  "key18": "52xfNAw6ab8cbh5iJKjLx8G9eDAx1YRcd1iN7UDCtV7nvouDy6L7Pp4yPwzfbYvFHNdSoDjNBQfRDRD7jyGhVJWN",
  "key19": "3sxcDxjbqbzqp9MvJ1BLNJ9PTMLMzUigkH6vUZCwcWHY5yKfzzHvjHa7Wq6wp19Vjvko4ATu1p386kDaitxLccNN",
  "key20": "4Y7YpcW63pvECUeyfEnnWsZRW9Enfsku1kJcgd5VCCVtepnAgeEDxiYa5oEhXRNNcieiWFjkAZw3oB5BsWhxg2gj",
  "key21": "3H6gwRNDKHZ1xoEcSn2NExoF5TQ5XZghuDFJXzJyXeL96p6noQbaD9sK7TnDJiECtJf2VGY7VpdcKdr44SYbfsza",
  "key22": "5GRS2vfkjUZeCUSHfgitjGAXDqfJVv9qbRY9EDm6SGmbdfw2864p9fLs6kw65kSd9xiKvkTwPRahbKR8ce8ToC69",
  "key23": "2oksaH5s3VgUycxNjwgfMJ9TQxbMfjFUC31uJH6KK9t1iiNVqZX9JsAcA55S22Zqw6HHX7mdba3EpkvfEJiqysPT",
  "key24": "27tPTEFAAG2Q4SBF9hKavxC7BjAVtE6D2YKvBSXaTbPzrWw4Efj56CdAwd7xdddkwwsdHsMRYNhnFC57Tgk5Scxv",
  "key25": "2dkvciatBKj7Bqx7UxPBJKQxNEdk5XzCmVbEPtVM8dr6XyMr3f7kSp5Lq4UeRN1Abyw5PT66DErfX15mrs8fbuFE",
  "key26": "3wj19KBDcPUsM8W3eBUjULWh9zmHZeAdkAt6BUWJ9tn1j4pjYjR4Yrdmwp48eyTFu1Uzo6XcrqQtYSeLbA4oyXaD",
  "key27": "63tygD2vD86F7LzLhJi5K6r6ZGppM83rM8jpLPGZrdjWAt43zy2nZqqX4AGUBCbALYR1UL3v9v32qymG58RXp9g4",
  "key28": "53TkAFPJAEQPYkGpYP2hW4nUU7G3ZBsAmsLw5XaQzotc39SJiU9eB2rvY7kghBCUufR9LFAd21jJchzh8MiJrYCz",
  "key29": "2Nn1GDd187mhVSP659RGn8FBjBZrE38f9tmjcbTUEuuhUGbf8S4cf9t5Xgw1VsuNhWXA2BeZA5f7FigDRsx3agZW",
  "key30": "5cupUf7xgkLxFzR91s9sCELcGsu4tXRP8xwUdywFgXhjXA1Ami2LYFK98gYDGo9EpwVB6jJ1FekekMn84E2rGxoR",
  "key31": "AxFJe3AemwSYTK36ZJ9A3ADagV5Byyr2gdiCNikQBDuE5bacXvoESavMMmNwRGiSBTZXEKGHUKGVKyC5ZaDF96u",
  "key32": "HPMiqcUJmyFPjY8NTkFWx4KrP283Eu6SQzxba3ruEjND1wUpDjJT7jmiMw4oHw4XNFdKjp8W6xC2eqDqzKLw2bB",
  "key33": "C2droRmVfLeoCn8MQQy2DM7svCyu8b5zMY5Xq27J4o3u1SuLQZNmgMD1vSsnDyM4vrBXBvYshMfU7zsEqTTYJpe",
  "key34": "4HR5fx9dND864YWEsKa9LsZ5QKjvdrCAsZmvJgYNhuRMsu1SAs5tHtUjtjWzyStDDx2aaiXhKGRJ5aHDdWd5Sj5K",
  "key35": "v5WZPMnt5vxb8n6rnnfJ6n5QNGKAPZLAYAhw39BBq6Mn3A8k9y4w2dR5ykSKonaMQWFSdb8WoP9h1wiEX2Tasqm",
  "key36": "3NEkpGTGESYdiTQ4fpdzqgK1KMD24Mgpvy6d1HtWcze2sqiHZGdDUNypsjsnXu4in3DnEaMEMdGiLTp914DcugEB",
  "key37": "3PMpm66boVefszGH1ihVZ6wYS33n6FCnMZCi4fAw6pheNNvKSyNS9iJwbEhmJcCbJutd26bUyf1pGGrJDBfNBRPB",
  "key38": "4PmTejX6WER4pT7rdHQfy8eUacgAr4dtX8CWKD3wF2NSpYmCmtCiSRh2p4yNchDK5sPK7CS3bzeEk3k5pLWrgycR",
  "key39": "2dgTxFi6UQit2WC5oLwL6jwPPCpnCXwPweENdZ7bT87M1kVAWRStpiCskT9SvCB9NJcaQL8NLtwxHrMkoJoyQbxE",
  "key40": "1B4LDpizbXyBuZH92hwcQ1ZfUHMDhyGRk1wn5tFKJKTdzZHxLrQ7fyrCv6DitQ9ucAT1spa8FZj1V7sK13G4XkE",
  "key41": "3F5or7PYTzCZZbB3d3EHsbpPHVfdFPbN77dGvifH6CGrbjUmWWN7QUUyvsJ9JBP5hcCT1UAcEXoyUr57iMdKGXs4",
  "key42": "4SpCDCEYYsXRRfVMdqCfuSNGqSc1rDU5QPqHj5R8xUxfF5h64KDe2GCeyVbqspV3qVUFkdo8dFnoSX6KKPJk6hyL",
  "key43": "4DSKRdBJpn6KRUGZKzeQ32G1jWX4LGhyxpWaAtW49ra39r4jG7DeWW5XaSbBy6R9keXR9QzcRpUarjRZGoQticSb",
  "key44": "SxvnYCLq3jzzDkwfum7Y1jzzqAtV7auu3GzRMCeKev41vpADM6y2Mxc8MASksy7bb2L1MPFm7WQ7T7AHzKQEo29",
  "key45": "3Pz8fxg7fAoRJwzVhJxbA8icXj1cfYyTTo2vqigjEMpgGuYJGZQMDJCd7uZLqTR4oo4366yDNPRtFdPpKoZviAaA",
  "key46": "4pJdSihXQ6Pd737GY2AmRoHbtGpuN9SyHrVzoXeDBrRxysMyrse6biJDSM6tA1oRmTYbjiQsCMNE32aCiZMKskhQ",
  "key47": "34nxucgGeQhWrnb6Hb3b8YTGsmRwE8vPoZo3bUfFv5FXJYRJFd5ALxUUUXwrGGN82Kj9gCaf1pm42ErsnRAZ39bm",
  "key48": "4WZa4RuTUDtDPKb5GsnSZDh7tkAkRJbWNpGPCQxwpNyhVbfFJAf1c1UgwJUEFsYUoaq1wpjJpAFupdEfDhKMwT59"
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
