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
    "3AjYngFK7e3vyoo4rQasvU5p55YnpVx3K6y3NHHYFYvLAV6ZnZrBtw984mupJvKjGqsS6gKSXyE2qispLqWc16o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjU3SpjgwPvzZxPidZV5V7fkEpU5kX8Q6YvUMuusZ5Nv99Lt9CxyyUH1PFdmUm5UmWqVziugmMjj1HgziHv8MBb",
  "key1": "4Sc5jgtB5vJHUadogJkhCYX1ymu6cX6UYYTEWbw6zqVLhokLQV1KAZnwBnJ8b6wZPLj6hPY1qmKGuWu3yhrTk43D",
  "key2": "47bPJnvvD2ccci67s4exdW3KBsWitPokQj7W2L2VstNLaoZov7UeACYAfvHsF2YDvBSwoVbmby1c61qcGB64Jfid",
  "key3": "2XfVrAcVnMLd6TqLW2fXovangRhWBch5Gd6B8ToCpjuMT4X4kdcNiHgyfcbgM46KYHT4Ueh5v8u3JQBdtpSH7K5w",
  "key4": "6Zo3BQW6AN6ZF5ysuWuW3tugKx3M6oZXbjJKDnpkKbK9VFaLr5GB1bRvk7rk57VXBYR8F6EBu8Hm2CBeYcH8zH5",
  "key5": "jzoha9vJ9rHTFZtx4Vfk92asW8NZLMcPug3oiocYAwwdtUHQftrXC6rUM4DhdcMPVzSPkzc51ektZNeAkjNzPxA",
  "key6": "B3WpVeNh1s1ycrQ1DrshHok1bzsv3amaZTE9hgQaVwmEaRZtHQGNo8EdfaBCu877EPMa1UhGuTqPLMJgyYjuCw1",
  "key7": "oYhnWKEZkC2DFE6Cc4sbfEV9wYs9BqFewPnakw6K3hxz7QMsPgabChQCde5Qfhi9TVdY3HtancffhHW5L7TkGHR",
  "key8": "6571AqHUj1Zpzy4cNf5LHXJ8c8bYr5CVRKVED8kUsfbHhDyDutyu5WJRi7hmyb7QvmKkewATdtusHZV1owMEkCaq",
  "key9": "2ztLcsiM7wkYV92rWDUfmuQKGUJpFVq5BgQWoRyt314nQaMatFpVSUbNBEzP2ABXpMcUCgkjGdchEjU7sq6DEXai",
  "key10": "4SVzJh1kCNj86nMeKH5EoVwLpbitiM7icecvxyyEKS7k14s2VessCJQNQtcdRzDCYm9xpY26Arwvcsjs3CULgtyN",
  "key11": "454WBuswtsgMB55zikvLBBNbUyEmxy9BRFyv83MrpSbLpqE8wCSgzXQQTdFXC83hZr6VbhXF5qZzqahVgqyUqCX9",
  "key12": "DmexQgU7QJYzx2sH5RX4hrUx2ro4owUazfGhyKEySrehNJxmMqLR7v6dg3MLApqnnD9ndcqPobRgPzLZDLnB3nY",
  "key13": "ik57Jb9PCPxMxLNz8jgZLMNXx5DWagMFezLMyhgLevppxXLnnJuAx3hwoMr6A8ZCTcpwWaxkFXrsHzsRkFYTaQW",
  "key14": "5tPgq1zYNzXFjqYYyXEPK3PAjDM9EePxyXQvVCTvXxsiKitpGuVnyATfhWq4iBLhe98nAowQPF2SANfWcZjk4csj",
  "key15": "4wi4pJeAJxN3yEU8chfKsBwF6BifZCcnSB7cDDNmXpvjuNGpTJxgeLzXRdL3RASXTCP73kRXt8c6Au3SogJ69Ttw",
  "key16": "5d2t4Ea7X2VzSPCU3uSaxmuRgbQkSpwai9sKn9jMHH4FB167Z46G8hSTmRVaVw1sH3wccfmWebUCDLFFAe1gjeG9",
  "key17": "2kcWHjMwYhQ2got6GPLhYv1DCmRq21A2CpxBuSfvT5oNFX66iyVEDNe7uKY2nkLW87LNSyab3hNrKeaYDtuYPAvf",
  "key18": "7kgNmXYbtLF2SutENYqgSFGwsGWSmCtikGnjXGAhZwftCFymLoFVuVinxkRiMAabLpEZKmCttCqVPcmWYV9joLF",
  "key19": "3id5AMW87VVRf1RDABWGJmEsNpYbvn5X7i96wLiQjcvUhpQraqUUxpybhSrq3cGt6Gah5oLrn7qkxWEE9DVvFkvx",
  "key20": "43rvizybkuJhnCrNhTHZj1Jcmv39S3GJ2jCZyw9xkMja1DMi31fDmDHcGsG8r4PUGUAVMrmKt6V6TfzFYN5M88Ft",
  "key21": "5h5D72beStyKwi73uVnXFpMejAdniRcSY3QYYYFwXm6zZFYo7edBtaoYadmnzuV2D9hJ9LEqaQRkGpUrCutEdQ7D",
  "key22": "59E6kfWCMUEDKSWtFBiEKSa9FvnTe6bFhDM6GBgYrzeqpkBGeLyMN7DZT67Y8zW4qCe3qvQrktqYhGrAKk5XEMiP",
  "key23": "3NXDkwtU9hrVBSfq72G6ZK4SyyQCGA2FD8TkYrEKw7A2zYQ3FZGcaPXAREx1P2HGCxT3goaZvRo2cTScmcd1Z1eW",
  "key24": "4jWA7usK56gvVwWsJXuXZJWrpDUSAS944ZLDpCFTwBDvjJQXgnRxbDdbxwXMwF8nBUWHoLiGPQUDA1MmazRahdh2",
  "key25": "5fKJekt1PynR4EpK3C5yrF9suGK6uwxw7TEKcCe3FY7BT33oXCPUZvdGo3hpAY7zidqtjNtUWbiVs3cquwh847dH",
  "key26": "5AepsRBLpdG63tnA5sKh9FpUYMGrij4CXhgp1eRXgKRK5GTBH8a1B6usR6tiEsaT485t8TLHgDVJHgQHLNEs49sg",
  "key27": "2JcXZ82g9Sf9eQusAkxrmho89C1Rnd1sGXFZ6PrGE5dCjb6og2Q8TTASVcyZVK7gFpiSV8fZ8jFNEUXTa1mbXdtQ",
  "key28": "3hTm1smuHMVnuAyps7KBTW8eT2s3Mpqpo5L7t1SFhCdCR7aD7WqqAR5QbZbHtCP6b1F17EsuwNbUz1h51KikiR9X",
  "key29": "4gP1Qx1xhVaQ4WS5kUsVZMcHo7xgzoC2amPhwT15Fhq5xSH1G418svpvfmTMQfciFs5CTnw2nmk5d4ToDjZRyb94",
  "key30": "4dyZJi7844DDdzKnn7zYz3TDCtk6XfLhXhWF4qLuu5nXmq7egBZRhgGq1h4FZXaPohgAbGVqoMeXYj4b7Qoyoa3Y",
  "key31": "33N6CdGc74Xp5PCug6CdELWFux3hwL4UcxKoKzQgNPC7TZycvVRm6pRySfHnugXPiDp7NrJvJhFKm7BdwJtNGSc8",
  "key32": "5YwrwKbuunoLZjkEtpqouwkyxvLXyKrtKaBpWy4UKrkCMe8kckpmKvaaQ9ZmbFLfc2UQVwsTcc4u4mqwLYeW8woJ",
  "key33": "3ijqcfsFCnLLL4zoBX2oyNtDK3J12wukjzZmuNKiKBWQTp716tUgKzYxVLKvneB2wuT1dtcbhHH9pRErYBE6XJpc",
  "key34": "2wG9ZH2VTffk5tULZYBmdCFBG7XaNTfyfVrcwhe4akUxhWwNMfP4UdjMVjTYUF9cSBmWFuKMMg4x4NPWdALLWBkA"
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
