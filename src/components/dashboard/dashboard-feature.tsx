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
    "3m4zxhbVp7w73yiZ1M1FU1fqMb7aTh7YTW8FepgWT4WhTH4tS5ALWeGHJaifsan2LdHPGiXQarScnEDuW8WXgEKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPMYDfi2W3zMtbNhaHzMYvQeB15G5BPruUYKptpDt8evMwCiuftVcUyuQcPm5ZJowNrQM6pRobMHXyLuMSHoUq4",
  "key1": "5S6PJFoaTgSmsE591kGBYzP7fCveJraHwZZpHDVBKRx4tNkFnB6EK54xKXntjYioT59A6UBRmBi8kfa5z8uy91iq",
  "key2": "3zraeQunLwVNDCAiK34oZboobNnaa7nJxV7JmR4pH8NSkrdWhz2WLeB6PpbyYEaBkoBrF72oJZ5zw5bg7H3hTXUf",
  "key3": "27Uo4geDwtKmisZS1MjhhXq8oJFoksyB31ZRSv5usSy4bFCPvp9HXtWerS7ZNDFZhSYLuTmZ5T6oB1hDLMyWg68H",
  "key4": "3DPwNnZVRmTj5HEC9h9kztsnft6LXpUBCkwDPTYgRhMznRS8kmu8PyTP9ZBRp2ENiXky63h26DkTttSuzmmZCTpH",
  "key5": "3BKkqDgVsr4ciAXYRaEppKTsd6oMr2iSca847ZpcBJJiz4wF9iggVT6CB5697UKa3UxU2kyqiqHwo167YHg2UPrk",
  "key6": "26ATyLrw3PvJP3YHn9xPTP4huzsTRLuGoo5EWPH7zwSQfVhtRKZ3MMmjcZGkCCD8n5yWuEsTTaknQvShw8Cd2C3V",
  "key7": "4imGQ3f6PCaHQMK7ZT9eZ5mdLy7ryPZFTgqCoZKUKT8VjVhL8n1X6wECAQsNoMVVPksjyXo3pGSeofLPHchAFXw4",
  "key8": "5YhDA7KYspNVa4CTLCnW2qM6K8xLmvX6nEe4d8VkWyR87ueRKQ7feoDJNbCiKsfqMxGeh3K2852hsmFwWHzFpmEN",
  "key9": "52BbejvQBkoERm7NfeLGgKJZADkCDopWQXTJ4LStdmHMzJdjKe1e9P83GhF7TmREcnHcQLDW94X3tHdzEQeybRXK",
  "key10": "5ZKn9TT3DEaySgRcBcwodoEvVD5bGQ3F92oFLs7xd3AyeyJFFoqkX1oYuMNnLHABkrUcCk2wrrgkjeF3c2NKVtLN",
  "key11": "5EfzXoErnvExXNPYG92vu3txwM3GHm8hGU3Po5u259ZCjQox8rxvx3w7WKJz9LTgej4JSZUxiJWV27yNPFhBcs7X",
  "key12": "4Mx718awp2KvSPYC3aCGs37UPkt99te68qw2oo5xDwQ5pt7e3tJe9eyrtpgcuhRouMRaBMafRkSRpasdwP1Djc9d",
  "key13": "3sh8nyTtJzSXWLhRRHoR22tmW3R5epAY4Y1D8MvU72vKxS1FhLdNZ3StTFewmghjdV55xHZdZD1387KHXAXb46sr",
  "key14": "5xwzwr9m1noE81TtrQfH91w5UPQamrczgk3Q2bsSSFyvAJ2v4y5dD6YKQrRrzTxEWW2to5o1k8BKQYZyapZ5hJf2",
  "key15": "XGWCESAF1U5KoqXMk1bewJ7BoSX3w3ujdgRdg9zk2PPpcbRzRt7Bj7AEw6v2NfcAt8TyMu49AWctzvZjjHJbPJk",
  "key16": "2ipkYDzVRZJMCSvKpkspd4Doh1aRMW3ZAXhXUUWKMRNAYtND8SwxxAHR5fYyhXKkh3fbnYT1MRvnVcSfRAXC5BEP",
  "key17": "2RvGLY6YotGo3ZghGtBiaiN8CWNLPDASQKpd5aYP3yqpuJonqKU8iUs8gp2KBvmwiABAYa3SqaFruHvDLKL5DrHj",
  "key18": "4R2sFzbtenoiGmYW328Nwkq6ZXSP64cn6eL56nCRKbb7sYjwyyUeZYzjAHLBdT7GNvFAL3MSyFZb1UM1nRTgSVij",
  "key19": "3qmRunBzoyrij27cBSPjR571FrGRW1o1aHSg6rAj8khiR1oYowim4qGgkcgjh1sYcXJT8auc6n2d2wKorEhEinup",
  "key20": "2YNjJguBVzxRShhT3L4LFtXMpGvte4NBBHj7cbMzoHeHaUU794u4GEu9yZcyVwPwxeYdMv7hTrmKjZz6oThDFEUJ",
  "key21": "34pmCiMLbmQGFLWR8xcAVhMGy1viEG2LyFvTHc6fnQWETThRtQcTWTmZ4NVZsPXtggwEktoSBhB9DwbzdLFvaPQT",
  "key22": "jbAKR7uWAyLYPVi3YrcwUWM927G7jLHHXwZKgbpcCRdwuP9KJA5tJCJHFTe5krXcMuA1ro8yteYvQVCVrq4yRR7",
  "key23": "3Er9bpVc226MvPVD8jCSRvbWFcHZTQC2iVojg7Vd2qfbt7kHymG6kyD9jaM8vpZqXG1D3prse2Q6pVXu9yT7YhBx",
  "key24": "3AKmJRLDGySN3qB38qNv6VCj5TDAD4W3GcLYXfskXu7PsWnsv64mXQAmvC1cPUgDM4UuSV9Wc8YeSr9y7nnqNp8N",
  "key25": "27BAkZKTgF1E8KNVuKsfYUtvpa7vJV4dib1dkwhzjh1yoTy9XeTx1f8EZeLKrPXYFeVjBVWU76paRUSFstTbVvsa",
  "key26": "65N382u7Zecc2X6zLUwqJN1VMh8PvcbrFKaCC3KayKc3EdmRJjE6zVX6MnFc3QUe8ffzQ3peViASvSBcyLceSvVx",
  "key27": "4SSEQbF9JgVZdqod2yEqhtkMGNGZsjV6QZU2bEXYqBWhVcqXiXhefJZKbBExYLjgE4MHx9akJziCPsMNZxoBAELp",
  "key28": "AvJwSRkK3FsrxcHy1TY5AUHFKbihVNXZDYBrunk2uu7Q24UiBvqE4P3eEF6Y9CfbMeKSEoM8ZSPmDCvmsKzpTUz",
  "key29": "22pHBX2PRqnMRQWELcU4nhzDx2QGebJgHwJrfFvDTRUnUEZ3W8SB5d4NxdRVNFyqmfzc9zxAk8fdTfioqfciMniC",
  "key30": "LBVHagzwroTqqfxbPj5S39aBZ9cgXaZ8RhxURbmZR3hgQWBdDJUSJgHiq1ocFAabA6N8bQaRYW49cmBcxqKYX3j",
  "key31": "3KpEDH5M5UcGcLe76tKnrUjtSoQuhBX65fh1WDW6neGsG3hUpXWP8RPfs7QJrmApX5CV7jNJVahfx54PwPe6v9q2",
  "key32": "5YeQUzuN7REktAXCfnhJ1CHGvDB5jcZqGYVHoqX5CNKLjPFgLpASs1tsWkVgbQhG6gYciT38Jcg6eGHt2Hta9jou",
  "key33": "5JAFTcYQuz9n9Z1vKfRaDFMdxRnfzhomVh3GueZbQsbC1dxMm3e2SwMgyjUuwFaxCUrZRaaLZyyNNLmwY4LE5fdM",
  "key34": "3MY42BxtkvWp2hF9fUBuVZhrmx5oVKGw4s2TvJ4mJjTm1Az34LoLWbLp7hdZqqBEeQtxch6DynPKBtoEaWKv1Lkp",
  "key35": "4S2Hx3AosLoqGwwqzXnYyQYarTF2LBVkK9YvyLnqL47tHBPobK3cgELqeuABJJVaLoGzrKjoMQPyBtbA4fMG5Nfj",
  "key36": "5Bxn2wd5NCegGTJdAMraPNpnhC5tfrqZHW4VruzHQzkSgqTb7VszLsJQJKPsZh1oG9jCoh425imTsEv3qCE61you",
  "key37": "2xxUzNUs5Egu4J2jBAs8PRVY34vJZt685s45D2zQzJaHrdr9AFc4yX6Dph6uUe9RdHbTmo1mgiWwQwkbgqAdNKuB"
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
