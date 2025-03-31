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
    "4H79n7xgjGsFkpzzSLP9okatsedmYedwTmtG51sLTh7E5UvDKKGCgDSD1MKTRWRerw7owC7bzqFeX3jdZ2t9mYbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGHfm6E85QT6v8wCidrXUb51gNaT6H3RxLZgDuhjJsksy1VBUKpaCrCP5uh6CpzAJBrkainnwUdjTSXYhi3jx4v",
  "key1": "62aYgXs2Mcnhz8RrHKZx5Ngx7ky6qSfU4YUw2DghRbmVbdP3daP76UqdLhF9zuPyTZMpYkqNitmPk8LJYnqCh9iS",
  "key2": "3s9FsidEFdSQe5xtA7rxJYtsUzDyWsZbNWazx5vjE5n9JjuLtBNmZnHYzdVNE7yqR7wyg1S76fo8ev2C85fHBMng",
  "key3": "SvX8JJjHQAETzGo6xUeX9TMsomHaJLZzM8HW9iJrYqoKTj9xjEo8YPduK4j21o7a1sXzbRqGFaLF7sonc1cGh8L",
  "key4": "2Fhcqd3Equq2XiioaP4tjeFNph1xxKVvzpNVVYxhCNhQxBdbS4nyqNdat9cWWEivrsn93Fa8a8syVV7JEpbYhEsp",
  "key5": "3e7GB5PHf92nNjNDcXkveRkPjthQtrDTVVVrGVsqwzMmypn2aHzKpNThkZsYo9vTYYbtmxbwDKTSYESn55BvgfPd",
  "key6": "2Xj85p9Jsges7upq24jgL1AgztNHyF92pHqt4jnzFvJymqyf5kzqQf2U13zH1nkJLUXbJje6WTZLaYyKAtDk3cHK",
  "key7": "33eydopgSgMTdTAyRGNKMxZXhrmUe2a8EEv7RQq4k8fPtZXwGwHkWxEhQxWqfz4YbPFEk8XRagNhX7zvWj5PQD2B",
  "key8": "2rvekqRZrXMvJZA9F4U5kAuKiJcQ3LRqURwLoEUz2e1eVbSScC5xAuWWrZhAxCqCZU426QXjozd4pBbH3qSoKaE4",
  "key9": "5B6YQQFXSB5AA2L3SN48dSQC1c2WnK3Azpr4c9DfAJ6AQ63iR69Y8u4mS2XKZGVvebzPke3J3dBvPApPEj29k596",
  "key10": "4YYemvedqxzqFjbotVLfVddtejvfEgjgZk1ujAAfMozsC31vJiJ5LeCXT429B1MfTJbikwaYHv4zdtbJeeqQ1hrK",
  "key11": "3SCBgTg5EegUTpci5mixGjdBAJtpVKiuk5h7wd2Jha4heiPnGKfYJQBgQmi5deYh3qTCkuM4GBZbRcYW3rLxTrWx",
  "key12": "rATky4oNnG8ogvZn8tQqubYnFNxvU3GQPQXz2WTEEjSZUyrRWmxcGknEPaAcbq8Q7LFsNtPkSp6PiGWwcM4XqiY",
  "key13": "4exnHMu4Czocvhu2CB9wnZu9wdw2uUwp7bd9Hfbm4KxPKFvqqzSPmySSA3FJcks1WFSvHvhVbsDYLXu81GAqyGbH",
  "key14": "3FndWh21aQzi8ZrkDGPYWmmJniJGAWiqHCGsMy6QSo44F934vh62NGhDU8EuYGyecrjyHB2tqTebyUR59dPHWkQa",
  "key15": "3ur3iSFGH5ECZZ8ps4NjiK6KfLezPaWAfNVCigec5BYRJCpRKRb6pXsmgj7dCcBwuRBjeSxS6X8k5ji8n4fsSoXv",
  "key16": "2ENC5pDAG2Pya6sB5Bsty4JBQRTCgSSF4sEWkdpSw6RipstkRqKPjCU4jNToSCk5EwQpMUvingzciVtgDNY5ymVv",
  "key17": "5Cv5Fa7ts859FQmfd63vJ4enUt51MDmBAHBF2zzNPJ4WES1qHtAcFZtD8qh3H6haw9HLid9Qnj8aLbXmtYgJKvTa",
  "key18": "44MomR1uPmmWRnUHjGUqwuDC3USoX3ESMxUGH93LZXiQ3rCX5Fn6craMroYVeLo6vwt39aPFDqbMG1Kpt7pQWgHD",
  "key19": "U6dyqx5g9spRRZkX7yYpBEreqvoY5hfDY4etm34adAGhBsnSnGFaYbJFY3oo4WS3TsbTyTTQPXc2ox8d8rW4nJb",
  "key20": "25hphqunjj6cZpgtWdhzSChNHHSep8BSdjPwSwLhMrbMFBexVCS2z9brZCZK1EdGTmqNeaZyKH1ZC1RUVDARRWSN",
  "key21": "4ZeC5yBjAQ7QZJroN7nGr5j1Hyu9MHfvUSUwVC8EUx6SnEobZZMcwgevDkTWfJY4vXEi81h62Mre2D5AzZMmqaVG",
  "key22": "RaCjH8KYJjcojBoGzC1nZLzjZMR2RzvTpTVLtHArS99HtwYCdsCSGUAxgkomJhxUpqgoV5jVpCiqEipkisGiinM",
  "key23": "35Dz4yQJ55unp7XLD34nQDm8oh5jtXWiQ4dvqnovfCAZoQwwvGmms3NzFa17iNR1AoqTVDbeAGLpPVV7kKtouH6E",
  "key24": "5iirq7qYAhfsj8Pz87xPCYfon6xZu7YZTh3cRgdrvXMAQVGptDfyikDf6WybaRp5FnSrRsraRwXxTCrQtmH9Gy9g",
  "key25": "5asVy3eYRcdPHCLKsmFJ4nveaFCok58UPykT52XxYX3DrYJJdZC1JmzCx79bCM9yuc1knqELcmjvsXPaiATcH7JC",
  "key26": "2xY1LpsxTmqxyvdwVHootfMaMB8o2dEmweYUvHc8Z6fRx5NMjDwzWmyZt5gSYhrnjxgGPiR1h56aFSDAaXr4uUhe",
  "key27": "5SWYRieGPR8Na4JWBvmrxL7gNNr18SXsZgDaZx7Ydy1g1ENQzN6djeSkKjmrMWVhTWvjzGLusNNRuPFq1NHjT5T3",
  "key28": "5EMakLmhai4eyK9Hpi6UoYg68bG1FQ4jAEu6BSmXjyD2xwoRKv7NUUELTmjHgvi6WHQkZhfJL8G4n8St9xfkzjf2",
  "key29": "4AiNqa3DdUhcrGmqTwQmjxLPX2182jVHS3SZoi5xgehLDupd53JrWtzPf5BRnUppitsGYB7dN4vcXiXvzVWqiNNs",
  "key30": "5yuuM7uvke3FyYb7UVP55L6kidRhCNYESHvJsusADGRNe3ncZsour2bRWVhnDkMGvcuv2uLVEZBMNqpeCC96f1t9",
  "key31": "2FVo7YNiCkj8taQ5K5wUzLtexhvhHtdrianFBAz9J3gDUSvtWEyzpLKV213NTwQN1gPR9Ah7MFknpUVALGsoEmER",
  "key32": "3ATwWCtTdBv256ebmE2mwBgx2NBmqUMPwW2e82itu6kc7WYeohB26eT77nnatE6dizquRcYERxpB2kubnr1kk3HK",
  "key33": "5XoZ8Twg3R7RaC5jhSedtcRDVYWPTZY43G5KMCVPJKF1BCnYtPP16sQoYQXgA3b1UbbdywEwqxh3E4b5AxHmkBLB",
  "key34": "3GQ9nryvbTynYTQBhpJkassLFBbX2Uvm6gkk2vVL2pi1RABpYq5MzmPUWo9QQdvp26q7kaAV6vnUcpmamgjkqrFt",
  "key35": "4aK1xgSZYxKzTmuYstCmPvY5YJjWFSnZysYqTKuGL7d2bxQr93r7qwqiw3M52Yb9kKCKmaSRC8yrAGcUcnXuHrza",
  "key36": "5fA4SU59P6dTzhhSMdi8jcXJzqTZqzHbCh7b7TC91L5eXN23YD9pb9kcRN78XQDorvZsyQ3NADz1qmfphNmUhr9y",
  "key37": "2exKiD1KPKEMuBj8MneEr3RXQ96jsWi1zVVFscHuWjVezSta5vwcEMU1uCQMiVY4s7enJnJHw7jWLMEQ469PLq8d",
  "key38": "4Z4L7HtTwafvKEQ5UZCLvkExnMvxybR1BejhGcofuot4PRcrpTr9C9vCY1tWj1GVAvpSeNQsTCeCh7rMG4qJcUWL"
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
