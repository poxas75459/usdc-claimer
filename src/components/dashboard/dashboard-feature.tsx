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
    "3hhy9H4G84oQm1PHDnuegWerBNVW4oeZTLon2UVGbQZLrSbsfoLb5ZsHVEeaynUUqCQSk9c3D1eSM4kJeZAYbX9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22eC3jr317HjDsJx1FPVKrAoTp5fFZfgdx8AD48xkD8QKJyWin4WsGA3iED16d7Fh4vqpN1neagKe7jVWH6DKgcK",
  "key1": "5NgaoEofhp7qxQFQM9g4wUA9zLaCBbwv5MjWXgupWwrRE2P8SmWu7YXtKoGD9KQWhMJe7NxK4b3CNJnjgZ8vJzuv",
  "key2": "4FyLu8MLbKS31wBkNS59fDwJdCju6d1ABNRc1jPCT9rKhKs2HAuPZiak2muBPPeDsc13u7VKazczTQP15C5SK66M",
  "key3": "3rpiwowPGMkAtP7jX3RKeLVPD1ipkWD8QPxJSgkXn8defp5VD8mbP5rixN5NwfLyQ9AXCb5nHFW3HwtC2es38azQ",
  "key4": "mLevpBfiLMk2fc579jRgKXQBTRCEKBLMjFL4uzmLQGbiq8keVJ3V5cQUDAY6TMEjv1K3UQ97pajDYi5NBwQNdxW",
  "key5": "5rtnb5m8AdXNQS4cQq9qw6kpnK8LpeFcXGevevc55SmYFAGhLKDW2Bso1D5qF74B16eSvpjHeYkGxrWrRmVuhPtr",
  "key6": "4WEUD8d7sJjh5ttgRPj9uLWh6BGKghJoDi6TQxV7PiirqeaVcLPZahe3rC9CTeATzqxvZsTpjfxR37zmmajgWBFC",
  "key7": "3sZ8YqkHQoebZfcBFubiCMPpv3LfisSWFstkRS6xMvuw4oSYXoxivH7YixNL7Cfc9d6Dx8zpsvCsi4eA2h193mbz",
  "key8": "ucSKF74Riaf6Bo9D6itz7rqapkN2ZVY3HoRBjooDNF2nyMafDC3H2fWkVjaExP3EMDZM49i4nHkp1WRhJUPPTWH",
  "key9": "3tikUhQ4WKUGhFWAYczLEgvKrrLioYvUy4829121EeMNCdLMKTjhEkhAspUygSJLJKTAZtZgCeyvnB7gk6S2FqsW",
  "key10": "3nuwxgd7u4S8jr5FB3TAKbCHZwdxydnwJKf2JnZjoGXmQ1hqw9CwT22UfVCsbGWa5guGKqUtv8JaNatAZhKUTZUK",
  "key11": "4TYxrCRQWYgM9EvkWVVnA3Gqhhn5SJZT4edju9jkNCiiuPnkG733AfhhvqyUKbbvxijinUxbghcBrthAhyUEKKv4",
  "key12": "61qaaNvf5aZooqp5MPpxjf95gYjeSRdKyvErTaHKHVvhccrgHdLPz3sjZ27BorksoUYFbWDe7LNYbDMb6WhmpFoS",
  "key13": "4NXVAsgKenRRWkUZSKhx3kDeXs6yZRgzDNnJT386YN4rZJXGfdCsRmt5sJwBNPwwtrW1ACHzrVdfJZHvxnrAfzB4",
  "key14": "5dfCLeisfRzfc7oHvW3k4zBFammhNXeSUo8uctpPPicdtQRx9ctvsRkFRWguNAQ6VMWsZKsmXUrhbDh4hmpCtBQ",
  "key15": "6QMXgcCp9xcaeB1XkWGkbwMzRe7Zte4NwiHMVb8v3gJXKEh4sKCnRMqkbY32QYYuFnX2aDwA61atBTWDFjnDKPM",
  "key16": "Cg8twrqHFmFVykpi1sZD9KtZNw48Vkouip9wPLn2HQfkHHdn4ZwpX6oo17sck5vAYbhHxQuziizcZ4mnRQCpaE7",
  "key17": "5rcJtSoqinaELYpqWkyzBxGY1KanBgC49wx1t5aRTqj5x2iq6TKti2V4RhcQRq1rrdGrHPvxVghxiCgNVSPpxjsV",
  "key18": "58fT6WHjNHw9MQWj1in63Y4zexyGhHJRarEhBqUP2qySzfjjrH6NCnq1M2YUqecwPyFd5tyCbCu9xhmJyMZtenHm",
  "key19": "UnwUWdLJAKEuhntiQAhuzd6FR4YQ8nwo6RzwvHmLh6cj125YxDvHYbqGqcSitZkqKWe6VyVtBATjA7QCHSEjQXq",
  "key20": "47yarD7wQY8rEoFDqkG6LBT3oswbaxqY5LFUNmKGe3JJFJxkn2sEUA9VrtCsAwYdd5McDHHU5wjVEyYZq3vErNQZ",
  "key21": "5h54DoPZ71fgdjsjtYr1rMmcVmRniMSJDtWB5f3Vz88UoUC5UbgRzJbGnj3evqcGeAZvqp7zZmFoeRDecpSJxXfg",
  "key22": "3zR2eGWk7ELvtjuLdHdT8tuBLWBxvMXo7djR32T55pTVeacrA143v3czpbJNr6dZuUTb4Xuk6rJog8Yny6KPPH7a",
  "key23": "3ZR3yy8o3MeuKsNy8zVdt1HQwXhsuFY1CSp8ypnpEV87sMtcm6NZFrCtApwUaUHQJD5Dcfa5Smp6TMSgfzFULZXN",
  "key24": "5guwAtTZHkkWMu1y78P8N18aKjQURc6tCv2jSsvHkVCrzaNiktHNSxAhFauBXVfZD7F5hfVzDPYdBvhgRVHgWjb6",
  "key25": "4LovBmDTXieJHtGUibifHQD6diUiAQDJgZRuuepbLNEL8VeLFbAUvTP97pwThLCfYrxaa5fvecKvoq6zRZU3cwBP",
  "key26": "653Gr7XwBAjBuRa9HaJG5Ndjb1dGeNesAMJ2nB53NYuEWgTniUWk2bueQ1bJraJ9q79URHCDF4ZKwxGPkGk4fnG9",
  "key27": "5jy396B4WduhtDsB1mKGJjsY4VftYxhWKhJ6ihujqyiDe34KsrVSnPtC7RYUBd1cydXy6uZFqB1yEGSd8zhvLf4J",
  "key28": "3HGVZRH1eYUh5ZeihZVgUGW7w9x4Lqj7MqQ8kp3rUq4kPJPAJxnVsEpsQLdNBpRb9jHxLoeJ3JtaQA3hShwPX3Xw",
  "key29": "5JMJsvkJM1NDp9G4ok99wBe9xMkzw7gp99KmKgixu3fu6exYKX79ASnc5w3Kv1KJAksYsC5Y4GccjnuutYXWeeLw",
  "key30": "4yeY6GLVAJpjHtJcHiDQyDcNpfJyueWG4Juuy2ACuhqo9Y6t96yBXU7Vnf88Pwn7DE8HcEoMpYcqvggJS5vhFbkY",
  "key31": "4Js6Sdp78BXZMDH4Mcq5UXrd3ps8Es4a54A3RZWouwFYaacGNVg7XCkRU6tvrsvKXm419JCHjkgmcdPKdsN7Xpp7",
  "key32": "2djjm6Sr3iZmTRCnwgonCWhhAHKrVAAnTp4dLpkW293c7rNuCaa756knJJyVmDd2j7Pkc5c4STuzqDp58VkG2hg2",
  "key33": "4UJUaAAAwu5rRqdjiFCBHAyfmgjG3xnMHMZNLGXkrKZuh1g8omX5UYQyyHHYsB8qgCszK3EMbSQvBzysqSLDKRqJ",
  "key34": "13X3nfSsqdE2kPo7KoRs6sKXrgMa5xvTthQaAKgxPn2gZGSXNiCQoxyUGaUQQszK8eEw2AjJDdfTafpqy4jcgoR",
  "key35": "2cf6Qw5nBW8Vt5vRgh7o5cmpa7ZxKmshsC5uYycPL92KpAPi9SB9wniEfbx6RDNSZQFUQaeQWW1CUEDc4j1e2yrA",
  "key36": "FS25RaMLtmXurf1W7hfm3DJ5pomGEseEsGKziPqBaD8CKGaZEghsqJsQ2NCbfDfGb73nbnrpEVZtXUgcM73jWLM",
  "key37": "64ETN6z5NxPT2Y8DcrEyu71h6R4b2Ag64jNfjyRE949yqzzzvbcQd9HR1JQceh4apeiQZqfLZnhS2A2h4r52qFAd",
  "key38": "5CqptPZpookEWYXxeooxonaxW5N7iLzNmYTbjYfRkRGHB2NEmRjQ2f6oH3fDsKeUbjUxAG2REEMVGFyfprFaHVpN",
  "key39": "5ZT5HeQgHyuaoAf2MNKwM31jh4iCD3a4W8mutWHC2oRzyQDs9Cd3tvN6bNC3CG6jUyKaVPUJT4hS77FwAKJ7Pj7d",
  "key40": "5NQMPnnQSZuZEDgnUTTvz9BxmyCNPH513v5Xb2qp1gFmBMUnD7h8K4ChgEc68JsxBJhRLn63ePTkeAQk7oBStxxu",
  "key41": "3u1q3Pa2jfVDQEj6K66hXuV1KEghsohHDRzrqqtuUax3QqN2Tsp3amD8uGhHVK2SBFLuv1Swm63wcKmUymAnz9ny",
  "key42": "4QFbhiPvbk9fVtRqqJNhwxVB6QVHW8M97vAFaSNR4o72FLCzDMMmfYj1zENpHbrwNau2RNAmYmzEvGEUjFw23KKZ",
  "key43": "4LodJRiZ4DKjocEPNXJKdYCG7bN3V8stvTKBTFNRjbMwrKfvyCSeAYCbfAKYxpV5SCc4r3eyQ5BJphEbCJo7VuM3",
  "key44": "yCkvRqsBe8wHm5zjJb6B3YnoH8QqgknN9sC8YuRkmbcTq7rWpU1WT1HoiaVg9aFvho1LePjH6S8CgaPqnduTzYT",
  "key45": "3YmHUAAews4XCfg2i8TdCZHPcxrUtnqBNYBS6eFqy6QLvfh4qk9LPUF1Db15boAHedncWxBYLPyTdfSDS8Q3yJHH"
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
