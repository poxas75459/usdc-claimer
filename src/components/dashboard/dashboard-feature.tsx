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
    "4xbRELeNmeyuhZAAaDGetv8xr4VnkMVCsTJDEwDTzp9E7Ygx6e4jxMrDnTZB6m5ai9coyKeJYqjDTYwH1QUnr4tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYr1y4twiv6VYKSBLrVexPZbeqDmHuj9XnY1Ke9MHNy6dGs1UF7PHE1dSKtE64XJyZZLPLygrnqSZe3A5M1kEW6",
  "key1": "3U5hXo4rHUMR1v5gvb6PbxwomzDxsSWAGA5exg4Xm6zV9NtHhDeXN4gEE4iLkccARahu6yxUm7FDXcKmPXTyY1Sc",
  "key2": "4DPtduuHevioECCgMdZo3JGjEWTCZCQdhDBYkakiUxAiJBfMaMEMb8Ze4uxjNE6LWGK5aSvyefHQxt74eeYb6vtL",
  "key3": "4bJyhy3nzM8N9TXce4uxjawiDVJFu2f8aiw8RxNqncJuBrXF85ux4TTxeoLNFC2EPXEAguU6ax6MB6jkhXVCHhc6",
  "key4": "354fCwur55kRvvgJdoMs242Q7CVvmNNDBw5LEx5KREaLAxWLqKPSUba5cyVU1aL5HcuC2u7EA53EkygkBaEUkTg4",
  "key5": "2NoUjQhoZYAsxxHStRvQfqQddkSyhvytPsARd5YZN5s4gKTvaLTWH49ofCWhxb3iAuj1GDR6oWbzDiMx1sh75oVx",
  "key6": "4QnCR5PNqCzwcCuuujLvBNu6UKausbPWvroDfszJxXjXhYCq9NU6N9zCBaNBAxMSb5fRTCjZNMXGoEJLYxsjSC1i",
  "key7": "3J5YFagTaHbPLFpdgBXja6rjkNi2Br8Rw1cryWQdCpehpAgzAKnKP5Uwu8u9uTy8qei7VA7G3gHuTUGu6Ar7C9Ef",
  "key8": "2DxEkWgFc9oZJFrA9UDp5gnenQLkv81W5tfLmqCo5ZDRghZGT3ZvFFzRnZAZJLobaGbbVLa5LNBATAQkmJrgeXMN",
  "key9": "VAEGvzGZtyZ6c2LoCCsUVztfk1b9wtb2D1U8kADKssZJVyzLmwQwJWJNdGeCLXfP1MVmroA8eDhEovy4VaUBPWX",
  "key10": "3RtaZVjysjX7ozgEbGudAbYZxCUVdz9KQqXZpE5AxZnp8sEi8zFNkNMgbNoRJGQNXfT3V6DGaASJaECJEtEBnJXL",
  "key11": "66g6zmf4ZEHj4REaa1vprqRHsHFP3P7vzsUAhCgXjAWxxwtHfiYXji5WZMsjuCpvWiuZo91Ptwwoq4k2xodXfyCH",
  "key12": "3ZEoi1Qp83WbgeqFJ2MUKtADDgkTkZyHP9wjH9trrfC8taH39XCA72XLDd1wv1GxA7MYxUoUX8uskW9TXmA68DNE",
  "key13": "TPC7G2ZrJZcJ2uQnhDkQYV1n3ibSbjXk6XMt7MXJm4axBC6G2W3G8DSJPFuep1PRBQQqaqueByiBUJZZzjna1ii",
  "key14": "4xCrfdkKnMjLBcrz8jWEQMRG8mJtePVpvyQegLcuWpb7XRjGmW5HwWuA5jTNtLULxychpbzJVqwYsdfkLxF3T65R",
  "key15": "2zH9K3AW3WS8KhAb9FRwQifQYcfCS58AyifeQWCFXx7Nh4ZXQdm4wSrEM3ticiuoSje7EPJ37hQnQGAuxeZ95L2g",
  "key16": "1KnuHcGtcWPnZyBGMW2bXasNQyfv6Z2BZJ6HTUtUeLMk7JwkSiFW77qZRiW7woSzS9TeenNEHxDgPqufb5jJyeA",
  "key17": "5uhNGjVqDbBqCG2FqWEUQQ8w1Tnk6kpxoJxUUQqAqJLoT5ez3vdKaGwVV82vCv18jeFE5y4RDqNVfZYjZm9Podvr",
  "key18": "5SNbejVpc9MTGFSkRd8jNRu8gsPejpJPBkGy7yhWrgTCZuGuUn9MDoYcEAdrBGcQ7nzu74itZZWD4tUbdKtbcpfV",
  "key19": "5WyQW4iUw9FU2U3ptJucpD2ojuQrLeJb2NosJQmozgVen1xG6kssdZabJwUJf7GSDGpgmd6N4ruo84Wk9xH1UEC9",
  "key20": "3F38f1ry4gpdLE9KjmucvmrnPBXdZZQhPwNU7Zxj7QXVn2gmcSwpBcviDoCJYKEUqDmmGnnprkuScorxLmz8V1Jq",
  "key21": "5CUn6HgWEVTE7FSjKqRwTZcjJ6s9CXGqpnYkWrMCmKQq6jfnzLd87fPabSTpQMKsgFrzP9BubjL8mqDoWLB8Baz4",
  "key22": "2chrAioNVk5bRrJLyigLViJETjvqQ9XLhq7w4KH4N4y1PTU2KYG4QA4xGsTLnUYMYQAtDyAgJUE3xCrxUJ6ZvwuV",
  "key23": "3QECbbXio8DiVyXsfTsN5qfngzDQvJWx5EbXtmwrBDWFchcnbCaAdEwoo4G1JEXRBEFwidqLCabRAG9ZCBn4266F",
  "key24": "2NedwJckqwfR4JwHJEY12NPnp1KJCPSs4asMLXg9xCNxrDva1S8jVoEkED6nDf37QMuyEsMVXvSmjww3VZ26x36c",
  "key25": "2Zos5VB4jfr8VQ6VavFoMb6rixfJgiEJU1LXzJaqaerfcyukexmX4YVUxc6CTi56qFu8rNNgtxatbPsAHNTrt5Pn",
  "key26": "2P1usWLC3KFipwrHziEvRqEgZrahRfUBTvM1pbBoVk8U5bbg6LvpAvexS82uXoH9gyhRiQjNFYbgKq68TumPps8o",
  "key27": "5HkoqBEjofH9qqHdvB7wApqQCv6h7PzsFPN41TJPJxXpRMAqhAZwgzowiriUXSiaZQDpL6mfgk5xpKSbD56DgdtT",
  "key28": "4cz2G3RtJn7YcWvUmpey7YHGQjXYmxLf3YEBXiFDq1kf5u1DBCULPK4wdzABRw8uRqtQeKBqwoCmZrP2RibooxoL",
  "key29": "4ryJVKGogwudzgpcb57YBooTG69YgnGXzCR7feckicEahHv6bprd1vg4ot9ZCg7Ka32JEpNkkR3ZHmnsDztTosdo",
  "key30": "3r6rd8QKMshUSKaXhEg61KvyvidbwNytsDxW4Tf95BbCX55CYhTbj5mueAUo34eSNEc15APT1bq3MD3PTXPA5EjG",
  "key31": "Exmr2rDGEgMYiAfvg6bNEWFMwd5q1YGkHaWgxDDjTbfKG6sJSj7QTvRq9BgCXLTtq4WmTFHg2KUoXiBKHojjhSA",
  "key32": "5b2aWBoX7RzRUpvurKuA8zQgcsNdsuoZFB9g5dz9nEdhdmaPPpEoHbi5M9kKfg5JDMfghRW9dP8sZZa19swqhkQM",
  "key33": "jQf4BwAGyBUZBuMPCPJS1AdGVaEknQEmUkTtWu7KTs6c63WK6yZW5Sh1yhx1t7gqXz6Y9XjiX7Tu7pFm9XUkbyT",
  "key34": "2DU2EHzQDo3Vv1hAgfJCBcArNRC77fZHEadDWeU3oSL7dcAT6GydzGz9AFyp1AgrEXvZ3SU7UDqn8MYifiAsBCLj",
  "key35": "4UXWArfyr6tNwGVxhopsraL3HA8Rh9dbqA935vPJdjjqmjLR6XnhsRzEQFtGQ7MZu8v4SA8KWGyiEFFRsqcRCPxH",
  "key36": "5zMhoPbKUV9CFsGnRXMaDVG1ExDhrY6Fg6xJoJsUAbjJkc8BdxLy7jnHFhZ7BBDEWY1XodccUq4ezfEpmo2KndDK"
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
