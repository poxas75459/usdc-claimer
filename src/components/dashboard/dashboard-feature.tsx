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
    "4x9uGQyzB29izTzDyrBKWLD9hbPbx1zEsJ8oYbEdYvMWvFZ36dhFMCrcFJGNDVUSTkt5UMY6rnJXSbew41xrjZnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbMwA4C6jkeBgamN7z3pCZTLeK9H3NevorJTUf3Bwipnid7wYPrZSkRPwkxjz6ua9CVjuAreLeEiLTCbJRTkwhK",
  "key1": "wnnNbPuvJ1oFmjY5322ZpK1MQzHBDmoGk6LeqeopnNBUKvZ34JzBybsH7PvniAKbnm3vqR9r4mVEusaBk1TfYqV",
  "key2": "49QN1Ht2pD8FxahadJ9DBktYquYydTN3hbjJ37jmP2tj2vorpfAHtdTj67GbJ27tbnF85KUXTy5S2KiiKrQvpHRe",
  "key3": "5CvL6F1uSXm7vwjgh5X8ay23293Me3ixjBty3cNcypNBGVz3AEgfEpoQWVQrhnmLMVLHUg12a7SmuYwdBZSnPVgX",
  "key4": "4F7L6JfAMYwQkQKHLwAfvcCyLhK1n5ohdfSkcNURHrsLLpg4Nb5gpLoZ4KMWhhjDgsQGrPDdq6KRc4E7cs6hRZBx",
  "key5": "2bfKJ1pfpoLkfDnA5cm4AVSKVWt8QWXjD3EegJMRRnWrQTARJLeGsSzmWppQqu1xfR45MPj2s3W1GhwfwJtMz5cF",
  "key6": "4L7UH3GVU1uYBoL8G7PU3iEpW9FhNDxQGNpqLaczzj1gz6S22R6V1h1ABcda4nAb8fT5HibnAKsD2KggEUqnDRkt",
  "key7": "56Td243mF4xkc7hEfeyjqQAsg5FmfsTpLuwXYJX7JmJznG6RFGKCjgV3mXwUy3eLz5k7nBeiGbtyXcD4BaA4QTdL",
  "key8": "34Su1X5QP5JEdaioDwGJ8zVEFwWiLRXyZhL8CZjqDV4YLfcnTZ8AXV1dvQF913ju8MQ1qPzZDjQZUeZxh58JTfgY",
  "key9": "dWUFZjPkhA4APeaHDJGJd9T4Nx9YPZA9EFFo3EQbG7QjJEBNPt2eVx1kdcaUKsjHScs6783WdVnaebCyHaWcyL6",
  "key10": "4M4dkr7GSLsevPe1fVVjWLiJqFzZiG4EQEXj7GFTJRXXR48MgJTA6WWNQyTw1Ei6ohfts1bLuo1Cv1cJvrVD1Sxb",
  "key11": "5GBHMNFsCmF4s5WyH9LMUFdmv97eewm98mX6dUdrnAWKPkafg6SDp2ZyuDC3SUyXD2ef5y9MFFeFAHjrCfQw9HCQ",
  "key12": "4iVsKcoDJjDmgT3ZRGGWPHZ2VuE4wCMejM7WhNA82LHGM9SE262ASkGTXqShZPoaRhBeJn26yrB9KrowNFyFAe19",
  "key13": "bRrquqhDABM21Nh4g7XS4xAWtAjehSyFCjqerJkDXzxEmWZHe2sBLTqssRzMDMHJvednLTsqnrw3ELzBgUrUjSo",
  "key14": "5mT828AfUR2rnPfeHWyoYGDFdmh8YASBuX6ofhDtEbzosDUFmE7npJh3JqHemQueRRx3yfbU5YBSmKwQ6xbfHv5N",
  "key15": "4Us1cxCZH4ZebDP7JyzVLP2MEmvapnJCyibmpc1LYTTCsDmns2o9nj77P4d1RVPE3YstuUMbxaGB1xMeXiagGJq",
  "key16": "44z9aR4tAZjKqjVLWViyVKknhStFpq3UR3QKPiwK1SVFuuKrtLHEtmJFCZhx3bfDuvHwifKCn6gWUfZqb9YY6z2X",
  "key17": "3P9inrivsCCehJA9PX1GzVWkEudRb2sRrSRA9A6q7zmMuiDisMQ6hmg1rYcHCraiuhXbBVKRjPksRLjp3Kvg3hxV",
  "key18": "VLDLoEZbh4wkcCz3pYAeEAtxWnKTWb4egTD1ATjbijDA6ym7gpQwefVwF5yRKV4ip9jabrsmki3vH76QVqDz9cs",
  "key19": "4z3bTS383ZaqEgKgqsYE8EKxYHz2yBzgwnKHQgsBysMF5CcERMM38jN7wFKvQtafa5BT4of9z12V1J4QVxYg6vE8",
  "key20": "4MAcSNDqY3zPeiD9o3JPK7QsTNqUpitpYSH3oDvaDAoz3U4pkAyutBJSMKVjoWRyn5KiRVydafecttT9TWGcQPTd",
  "key21": "2D1ZaUHFQt1aV4Mu6nzr23zaGCg12JdkWjafZMjqRJxEFmhypZTRQAsbdQQ6M4fdYVftA2MLXLWdorwWTS93SfcJ",
  "key22": "3DVnDrtGmSgwD6e6jnZirfuN1o4pXdzzo2ArbX2YF22aQ8fWHGyDRhD8MmrJ9ZQqrEfaQw2HT8rWYF9WELZAsUQj",
  "key23": "2K6ZemJeAkbqzjbqf8xArXgbqDVT3vTe5UgxYbuHuNqx78SJQENDbRCWCGAK9Nsegjpck5mJ3AMikNmBKdJwDNDP",
  "key24": "52wmkDvWCwQSevpYPNQCcDGQyxe2iRqQ1fXAPQyKJDM2Ji3MUTozqms3jtT8vaBaTex1wP9VMuMqNPSxszAnCJBs",
  "key25": "x2oqfrurTi6DcwgJoRhmjsL3qQcXMBN3dZjMfTScTDsXbwpSG1LMPEyWTvyXQ4GrqeEgLrYjTBnFZrmFbk8BkLY",
  "key26": "3hrh7reMqqLDVdm5Ft3TRHHUmnATt9jW8hSsq9EmrSMDpzzcuZJyVZKtXfmRuU4kABkMQuy8XRjTLhJSe3bErg4h",
  "key27": "4hE1iUH2tw6yMZAH8139ud81o8gZSxd7p61DsKFCDHKz6mZjNa9sb693WeWQFnhFdtWzjq9HsFBADu9cNpy7cYSS",
  "key28": "EdbYbMqfATz9zUTfYoT8FhiHQg7seJAbSCsWBTDZLmZ7YDeizMKJFPr55hdbaykUigZjg1B8T9DrHZTCNDyn9ZT",
  "key29": "2yZ3dZEg4pzKXgpWKVvMUTPpnKycDzY4suxEnVGdP4LmZCGLh8u7D1F9yz37kDKTj5NauCV7DspiybGe2J7nkeB4",
  "key30": "63dtVCconj86yQEfXvMgDKVwcbTd2P4czx5kWHVDXqD5W6b7nzsaNk3dQA2A1tgjHa5BpCtinozHzqp4mgfsfSNP",
  "key31": "2h4W9FgRb3de2cYgaYJZuWeTxa1FmSnoNoPfNPt6v1LhknyaGEPQBsfnGTipbDLphgqCrR8Z56zMEBRKKRugeAnF",
  "key32": "5j1cwhHCe7iixuBwksn5QYaDFva9DLUjtqv3BTGZ9nQRJHqEyJ3kx6xzyexc84E3L7EfNRRQ6Jy8qT4cRwhr4fgX",
  "key33": "5wAF9P8LWn4teH8CekscQHZyn2T5SE3mBGE8yMZRjCcYSimNmuV9ZijTahmRdFvLREGsZsk4LmVHj5EstCf3Rp16",
  "key34": "27mLXYZtThVjnBXjRJCdTwJ8jb1V2WrKEWcHvXU4jaQ19XX2RQJPxncoLg3gviAW9rD3vTu99trvzf8zM1nH5Zww",
  "key35": "4mPFCpsyxNTaeUao52rMZXgzqPChg6mp3FCAjD6VU3Jg6MGvySw7f4wfZZPUamrq9uaWT3tGyxvz5Um93iuNZDzF",
  "key36": "3sV5Qqepe13rXswyaNNfcH7TZ6wjkmMRzF19vGtgk3RAfnfZhZHbMhHK8zMWyKrPgZGArJMGhiSawqvvBMaku6SB",
  "key37": "rGrGHgLMSaD4xKGt26tphW4m9yNn33ybLQCpq8iBTArofEsiYKSXPRvjBSjYDx3hqEJ8cmExd9Fg8NDokFAhGc7",
  "key38": "5Mu1ftBzEJYh6gc3fBYZJmwB318adkgj2hk7xqYS8H3fRYQqA4hYYofrs6GpWNKaxbR4Xigx6mggTaCDB38AfZ2c",
  "key39": "26gjo4hmx2nbNvJfcj5APVpPrNsj8DAEVQDj9npMvzoZNfsWeSh5ssX3CpSB4okZE1R82WTwSxEyEMZwWj982dcC",
  "key40": "s93H1hoK1wn6uvLCWx7WaNg9fPDicK24Su1PT8GKUozWtK7vyskCHEokjbsm4K5XrBBXUxnBZSCVXdxcH9gq2mt",
  "key41": "2uEC1wzL1aSwLP7B5PWxdCM5mnx7iYvGUw8EgmB24VuBNUrjZEWGj8qhp187EifUGbNCqtVUpk3m3vfBJVAkv2Fi",
  "key42": "5hj56zmQBHGmUgbQraqvp31rHBfiaSSpR9sCaMxPnYVEJson6Gqc3XUT1c3zGHoenQcvp4KHByRmuAyQn9Wb6rJ6",
  "key43": "4WbSvQn4EjJKeKfof5LMvwrXFYRJg7yFvkUGbQC3cEUCqwkvYpp83HvRE6aKvPEQP24eDxNniiUPczMCVVcH9E6v",
  "key44": "4Cff6F3qzPo5izcUbysYw3VApKV75bdNTTMkKMSbYZrLywXcWq9D11o89uuhYK1QqD1kjJ6SJaALmWMbKyQwwSTJ",
  "key45": "5b2GpLJZb3TVZXF5VY1hCj7aYW46zZ8CTSALQYdwdqofDHLeRjUKpDSg91T3sd4aj3FVR7xFUQj3e2roTTHaWegB",
  "key46": "2qUnoVY7xx7Biy99SJB3pFR3zW7jxbfYNmwV3Y3oKqPTumCt1LXezYjpd8FTPupAdTi8PZYDXrL6HSoAmW7NiuyB",
  "key47": "5Krvn6SEWPYa5wZJDguTP9UK6bgNrzFCXZydbeKChQy2vHoHqKUUF7atKvFa2y9C8QLbUsrHEzk7Tx1kxHC6RVjZ"
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
