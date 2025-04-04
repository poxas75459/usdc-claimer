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
    "4WcjTenXgCZZab3vqUgdarnnncaT6naQgZYrgvWWsGYqAz81cqX7FjB1DWiwiF6RmxBGzj2GhBQnuEoJGX9bq2YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EczyViBaxoYnG7uhmFCuV2Mj13rL4X1XBtLY3RQU5QNaxUGVB2icVSE8osq4F2ADqj5T2hjv3xWv6oPbfLL5vL9",
  "key1": "bKrirBkeKoSYk1p3USxEKCsbyR4536UNLfsieMn55814TQAiHumjY5Lou9bQE1etkypGDT8J1yUw7XG9vYXbH46",
  "key2": "2db1xcP9FfkJknZTmkJVmmAGerygFsjN1GMAWGmMrE261Bgma58UdWytog9Ei3FeBqy8kQo3BBC9NxbryQNpVZLe",
  "key3": "5nHaSxLmCGSKShRo3Rs1QAHZZMBqQc7HjSdTBsqUk1BJZtXbDve7EfTFivJVE7PTPrTK1LRRtFruMUTZk3pHgDti",
  "key4": "2RQoRGF84hTgb2cqHhBkUEctRjojoqEpvDqoiknQcjgUL7JnBTpdiJWjC9JFfsZxWrSkLgwNYU53eYzDiwPfVDCN",
  "key5": "4KFHj8SsqKPqGS7LA3Snv2kPgFvMZJVD31pTnxDE5Fm62HNYq9ejQuzC5ETAQug8bHYpVzjj7m9Khujduq92SsqN",
  "key6": "3t1BdKgAsyrFwypmFkXrbGVvF1Yy5XyoZeuqa3RN4g4goR2jKtcg61TaT2jydRiZh141g2gshLjFw87hTx7GfSXV",
  "key7": "4AeG6CPFiybX6bboqvVW8DMidcqiwqn15DH34HAcoHLMF3BS6sxe1CZLaQivTct8J5j7Mu8jgbLaHLyNQFTvh167",
  "key8": "46asVP5hgv3rYikHUprGG6KDHNr348ze3ZMThny7ZeEirKexXSp3ZdyK65NXJfY8sFnJjt3FiZezneg3PswvMivX",
  "key9": "U3uTSTokWyyx27UTdEv1ogjKqx38TLXWZAhV1VqY5ccxKMfR6YAaB9g3tVZEg4Hfki8CniGcfFCJGFV6sf2BLBe",
  "key10": "4A2uvXq32gh8V7RLqisTP7mtSmfJ6fBdHtCjqrY6QkkngzSB34pXoJJvgyTkCJkdYpLRa9mcFqfdbwgM8o6YHV6W",
  "key11": "5cFoh3b3mg7VFXucCpfq3kvQe15WVEKTME5xp8YTu8CgwPeM6Tey5VLsb1jyVDUCiehadYX52URoKPwgF3kdV3UE",
  "key12": "6489drFayQFPVm3mnQd9M2kzYnL4orJj5FyUFCerKLpcUsds47PKiptTxm5wfmW6HtVMmbgQcvtLXeToudHxUQRi",
  "key13": "3vr9LxtQKGZwvkp3udgfDAHjubpyzKNSVfnahNJD1wmzcPUCKKkXoeni4iPbxeiX2KzQecAqZjq2qWige8hr6Upa",
  "key14": "5mGTXiKQodfNP8myaQnBJKS9hYBt9EMY1YCV2Pj2vDCzeUkFoC6p6bbBKECtjxfbvviY5eewnxUXeUpL8SdC1EkJ",
  "key15": "5eFucmAbxhg32z2fFmZyAX8oe6mRcsNhUvGNZ95oWmVfM7C79z8PxSpd9DaHnJvRijKSUbJpcFiTVJUcgAYuc62V",
  "key16": "voJdCznPHdDR1aSEiKvq15zUjsZKP4QzcPdQFQEBEDiy1fZ4XsHCdFvNWhqWrGAARCJqcSxjAsiPxhpZFmnJ9G9",
  "key17": "2Eh73FdvokDa5yu6DJRYjCVUuutDUGu54bQzpq4erStcRzEokWhDsxoUe2tjWhhXTwMvkCzA3RCrKHsKdmH9YqXb",
  "key18": "3teuaCZ8BaZGTm5ir1VxyuBAQyna1RWVpEuuqa9WJesf7Qs5yDvmDtkMeXcfZG1UHmfvHj2ZAHz78zuSheJEuLvu",
  "key19": "2KMJM5HvJJLBdchbLu6FcDLFaDw5VaTCQR7G74YW7Sasjv8EQhDKyCstcLyKTWnB7u8GRmeFKBWrNNuN4uLo4Loz",
  "key20": "zWcyMENeAiqUAfHxwiSVP1yetCR9SzLq1baTvapf3GKiFuVxEB1YVTcYDNam4X3BHGd3fe23q5GqGC4BqBmKcdg",
  "key21": "ddP2SEQbF2DM8XEWBHVBFLFUuca76KBLjYSFVA3fyDXBv3BgvScP6FqMUJwfQCnpYP4ra6vH89mVYjnysNnnr7S",
  "key22": "UHtom2F42ijwNZwM3kTG5BvH8LfnbxoGdkdZ46p8PdmiJGoXh6S26C2dL9MPAEfhLQ8fjJcMrzq92obmFsjykyx",
  "key23": "5CqvYyP3PUVbDRmoJYq7d11jgx5nSE9QU88UEyVft5JmBmKErqnkqNEh4CstBgcai6JY6Bz35C7eTK3j8m6cC5Du",
  "key24": "5ALDRhg4Bcv7AJ2oQayRLRgz3yU38xydtvThsmicPy5kAQNCVox3dzjshg7nmUkVi182wjDFSziRT8AKKaBKNziM",
  "key25": "5uvDnsUurcjizvaBYVxMbfpGkypFwxGjKBC54tGyu3YfyWhQZ9TQuAKGa37s4wEpDxxzjWvpSWuEUv8wvMG73ui2",
  "key26": "3W4y8Cp52TGVWFj4VeaHJwwGXzFRzKf2k8RPKhpgGA65Q8wnJstZuSS52qaZGrtCvCcMwF4HdbN1jCJYk4UvFUom",
  "key27": "5Hwnxt2RiMHn5ADcdJb8HNW9F6jDa9YFKxJKHkbLmfh965wHEuRXpDv7Npx6khPv8ekAwtQdD5PL49rWa1NURny8",
  "key28": "4Jo88i34cMYN7hNp5ufhR1zqu1Wmgd4fdcwwr2C5rxew422HYv3XrJHwZWUQenBaK5AHZyo82xGpzQzk8o5D8Y9z",
  "key29": "3qJ9yqsPAMr767ikc96H5iynBUgtNf3m8UxUrdv5c5cTPtURaFXuZJ1ZmoDUGercn2UCrGvFN2maMMikZHrDYf3E",
  "key30": "3QNGkW9bB8AdQtomqWLvajjUhnDEVj4Gpo8HcNJbXToqFf1q13RWz4Ajs7MdSX1pjn7tdenxU1tAJTcAKqmqPDhL",
  "key31": "2o3zzy1ocVTkmifU5AQNZeK9ADWSWxCJDqVgvW3kRqjKJGESGwokRtVucKtRNRac8aZLmzG1W69HeGGcteaGWkS7",
  "key32": "3s9wJNoGXMDNSP68Datd6T7b1iuQzQocK5tyR1gtyH2UuGJ4pm9nzAL7L7PvBEqHMuJbJRqpvNFBoE5UH8xepsRX",
  "key33": "2zgaMG6Ag1wBuzBxmfxYziCyB38N3fmgQTuAe2ofy9gkwTk7HEN1MizodH6XXuSTT3jy6qwXf8y9XjP9EqtGjRK1",
  "key34": "4DXXwVM6ku6edXoY3kW56ybBSFFVbR7D2Wugsrfp9ZdRqMng3t7cPi4a8GdwDxzMWF4pgE9M8U9A1jQbcBJYpZpe",
  "key35": "42qstm19vriMEsXmbNUEpXzaLgVbnyLnUZdnJ6bQeaTHriq1WgYdbPP9Z8EqHVX25zBAWJi7vLpQC6B4MohfnfVV",
  "key36": "4ZGrTXCwfgoaXPuarpSEoCthPr1a3EQD7UFowFy8LcGiio1wUbBSeJRRtYygwmsYVJTkuiP9atAfbk2tczx1hjkH",
  "key37": "5kFxJ6sNUNLj6RrsYB7NxSttTxRwmmuP2kLDbozgQF5kCu6kTkYigmHudVDNn71wXapRPBgz63PTiGuC3gKurrfB",
  "key38": "4HvnytLVyYrjjDTjZa8qxTwSh5mdweMC4GCk7Bu32DWo57WVAJDwwV1kh3sMqkpZtP87iVMPPG7jpwees7HQjw11",
  "key39": "2F941Uoc1gMW9HxUUuViDRLQtZHpsXVaAbQABCbJUcX6rRYkujA3gHW93p2iLGYEgxuTGehHogBMrab8acbQzVyr",
  "key40": "4NthFtfuNQNsixyCYuVa76atPXfT8ioi54wjfNKKEsaXfxWFEMhfHhgpQw3f4qqQvyd9kV1q1NVUqzwvSxvwhpsJ",
  "key41": "2rFtdyxXH5RH9eCNMygdvhFDKQFfsaZVNRznejTB7EbjcSMDr7tUWd9JDiaQZPqGyMkhhiaoUQjiM3wf46DVStPY",
  "key42": "5dq56QAgh2PuhRAeTBZnC7i5b1Dv4H6yjYNMJbcPkyCDQ94wBuGgJJ7Mz6Lsu8aDMUGRxsKgV9CnEpM2yw9hnBHw",
  "key43": "4Y3dcsZArnHMW4mHq55WqBFQxmjEqEa74KorjwVwTw1tJSf6wRpDEVSBC3oAQ2FeNfV7jvXYMCQdT9Mkuetin42J",
  "key44": "oFc3LerzodfC9VZJWHMm4chtK6uGhRo1aVNYiSfNAzDViY1GTauoBH8iqVN1hdp3e4aobq3f8AXHqWWUPe1r57n",
  "key45": "2D4ukndMPNPwMFyvwyC45D1GwX6NKL82b4g8Kg9yixN1xgMDZWoe5g2NjMMrSf2cPhN3JAC4qqXqm8FzJwxEjSt2",
  "key46": "3Jozadkn51xw7ZXwpMmFfRuvroJP9Fgu6jCmnAWHbhqoSMMC79x95GtF5aXRDPSe3ipGtHnNTWbFWNN9PjZ27Fze",
  "key47": "4FHqRF5ApKyWRvZxFak7HD6BYyjbCGKAeDSHbGUoegioqTrworndBj188wNTMUHD37r4KT4T82MhmdWN41SXFyc5",
  "key48": "2QrZExna5LtUWe1NnFY8mKWUZ8vrKWuZBrBcXNTvaJFy5UBaNMt61ttXunLofSv8U5p9dnVNG1n64JFyNWYMNYcx"
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
