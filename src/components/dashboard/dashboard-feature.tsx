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
    "3P5t3SuZ6PZiFKqwUdbA4aVacv5rnxHzUAEKNsAiUyh7GpQFD1tF2VJ24kUm9AAj1aLJxGJLJXSQJVLQyiub7Lih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9g6ekEmQDXsvtvFxY4CtcWYWh1XLcu9TnCoZVyS6pFVHxoorEfKBDFK3uUMhTspHeXaC4mSdZTwiAbnZijr83N",
  "key1": "AS3f6fDKsdSxn88RDJmvyAthCazAE6Hyb58FqoEfVzyMuoKKQURZLaNM8Nkpz1rTitY6rWfyVRdqv7gKnGPmi2s",
  "key2": "2H9prZUhB2yHDLDJc975ZUzuvXHpJj7wgJHWQk6nMcBH8T5V3MHEGMLYDu5YjDUGyJP26UrzmEJx66ZLfnbEzMuf",
  "key3": "65TwdPCx8vdpyKQ4mVrnQnJtpQJrmJ1aWhU6xm2SCcPrnK6vG3eETvBEbRjWHCLCBLZguL86JR2viuBfEwNtVz3k",
  "key4": "3HWhUoiGq62Z9A8H3aJqHjcTSxXTCUAzh3BNoTjCE1Z4ZTgUFpePBHZuK5cZzG2j7v1QcuR9Z53z7AnM6W75bH9d",
  "key5": "zP2kYsRoDgXMEbQfcZgCxKBKYxujDcTfY9sRxy6L1XHX5m4MncGcENvEeMmRQSXyff7at3uEQDbwGcWp4LQvU6s",
  "key6": "1XPtzj7jRXFB8LMXjzVLBV5M6csVA7unZL3apjeu9tmeaRngfqZzR66Pd8RijioAj1b8xciviDYuoE7triWXjRr",
  "key7": "4iP97cbf8z812MYf2999J2aij6fH6VyV7oK1dJVc4zsSPQ1HLgnSi5ojJRBMpkUNZkUDxk7kqHtJ5MkW6qU5vEHq",
  "key8": "5uiw9qptutUQ9qn12ZKFwgQNmEpAWGjkiSa71c8qGArmjpd1Nw9wDiCjkcGdjXxXCafSs9Hs7iEc5KqkGsRHjVWa",
  "key9": "3yLYYDWpngG8t4c7WH7P2Wr6qUU8FbMZQbye5g1HFSu7bLvgTyc27vhzkfSYit4gNJtNsLxVX3VUvRUawfKKXLHX",
  "key10": "ZQ44g9Ns7q73TuAyqR2Ces3n8eG4rbLfomyz15xM6JmZtz1apT8WkUa7PoqtkuUrtUaCZ4EWArdRKHrZPCDoRdV",
  "key11": "3pqYkCn9cFoMeRVZsHQGr4cMHG8gh5z9FsbMXdfA6KWsJ2mYAVugx2aKVCZJriuWXVnxruEuUFA3cK8dEdsnoSwT",
  "key12": "LErSoHM1TuiwV4YSqQUjrVCwUuyUHck2CvbGyuZgLzPMVY5QTEBnB8CJFsLfCtbvRi6kNU3rPwQ8FAvGMNmwwC4",
  "key13": "2w77PkPJThVKXpR3VRDtxybVQdK1t8XE8HDeZCcefxGFuFNXFboBWpbVnnVuaQnfB494ceV37VxU4H8YiaxYLJo2",
  "key14": "2n3tVKqwLKkRrB3qvJZZbwM4gNpyuMRjw7QvmFB88n2R9ejFtFmWJeYKJkLw9M2ooxdQAJMc7HGi8F8DqYCLzsKQ",
  "key15": "5F8Hj7XL9RFxnwRuFbLnvdT4ZCnSnwjyWFCRk3A2fyub8QqPvf48ovL1HEdpbvNT27Kh92JbttKpsLVa8B1meLLh",
  "key16": "41VHhgoYSEVNY4nRz84i8vGCdNGsCLe7MTCbgPwt4ZMPuqvRuWANMUUhbu1krxF5b1jCzoeaGBBgJfk11PsN2af9",
  "key17": "2fAdVjJrbeZa1KZBEXxDWQpVHpH3aUwNp3E23dMYCRMhFyzsKDvtKjNU7avbetyTLMWCErXR8zyUtRvtADA3yJAf",
  "key18": "3JJP4qyS7rcME3j4wyibr3Urem8zr5MziDNv48YM1ZDRSkyGm5gwoDWGvCto5ujikKttfLUGijwQoqZsazwt7HBd",
  "key19": "41BJ5QxwMPdgRjjPn9qL7HjWVhnkrmcdFBiSbtq8EK4ziu4y984SiZaNcctpgNhvVjjTtXseioa6kb5ohTGRKXVP",
  "key20": "5KHT9RuoUsq2Zjq4UFeRu94BEJtYfNVqsjhih17AdzzTXbUY43FzJnr7mLnaTvsaFZWj94vayfzR6bFn77dPjoUC",
  "key21": "4H9NUYHHGUKQLULsaxXniJFzdcPycteHYDUBeqAPEtmhPSr7c7MBxTB2Uy2rspXgUJTxgqsz5g4ooyBD8DQVTGs2",
  "key22": "2WEKZhCa5hebhhcNEe46nFhwzhKDgvf4ZxgXQfG4psDy19LS2f2wF4Ub1gw58hdnGTJq3vVEuE6PpQm68akw1CR",
  "key23": "LyzFaP8NoNC6ddyYEJDQTLxbyUZzoT51kBe2tBEcf51xqogkMNgmokGSyKMQVkdMn5BswTqw4ZkC3K2dDyi6QqR",
  "key24": "3iWAW8wXFYhaQezVrMk1uHhG5F1Ffry5w9wiwCE55gTPAiQHVHtM18uu86jUJq7gEVC7JPSc1RSBdDhMea6Rx7GV",
  "key25": "SoDV4tm4vBneVgjTFsCMpVMd9VQMc7W98VNLiMcyexvCZZSDkLPYJu52wNDMSV1hpEPLzMd3Qock4mRcAYvuHaf",
  "key26": "ubcSw4EQzjZgTcqC6ee46eCKeXiyrpr4qqumGi45GcU7RoUMdkT1hFi775sXdSiBS2wHkRasmoVVvqV7b1i8ckB",
  "key27": "3RGqfNjwWLLEUhyd2zxjNxBgQerrGcFGYGidYo2iFvPNjLJA2wLaowD4XoTYJbf3SF2eU6ESH9H7ToHUMcrCWW6M",
  "key28": "3ALVyEP3bwVhjsSabRagzfs6YFSdUpcia7qNwyWFiEYZA9E8K44XmhRTCNVaS1dYnLcFu89x7eK7M9CjEmvTXxFG",
  "key29": "3nNfFfYvUJ2t4KPMJecn3eyc36S4DwyY2RBiv1ev9AC73AdwB59MNEgWvXvyGsqLJNeFNLjCQwa9F3diabxp7t1u",
  "key30": "D2fNrjoFCoxH4Da2hQysfnfH8fsrr9rb6NsJgVt4tAut4tuso1ocxT98uD1qFp4kP4TNqwT83eNYC5jRGahx7oa",
  "key31": "3RCgiZo2fHDKXVJaN52UYyZndxhDonMTX3ttMAJvC9XFhh9f7PJgfZfnA9HUPg2Uatr2Dz27siRc3RKu9RuFphuX",
  "key32": "5myixGkP8zPn7cainW5DicncTvxQhVSmKvVbLraihwZbvxopd2DBJjjogJcHe1GN7UKvY7pgUycAsgoarzhDfC74",
  "key33": "5huoyocWAZVhS8LvhHWWtGz6xCLbYb75UxT3WLYrscK3eimfogyAEVr41Z2LvoJPrPefj54maMbFwTottqwx3pfS",
  "key34": "3HBVTcjxGPAqbnySNXmVVFPdTWsz8ZYgmaoESMhrzZfwkzBAcuc5bsmwk4BRcS29WN3z1rfFhs9zKX8NeVnDAhvJ",
  "key35": "2LFaUEcsHHQfp8pghFrrRLpNihaU8iBVfGbqEejsQP2hyFG2qvvviWH9PNmjNKiMMAUDXw9RVNDJt4KVFCYqQ8Qx",
  "key36": "3omGC39FYgmT6ZCiB9R5LMTrEsQrHeZunfGiHtC3xgmMFioQmFMSG6HXZCM4TETKzsCUkYyuPDPH8yeXMuQcHFRn",
  "key37": "2H4mb96z4oXCEmkTm7VamKoSg8EotFpq4EX1UYLP1vJcDKZ3ERCF2wZE86b7apnkHJY13KBtzGh3aHkm52hP4WTQ",
  "key38": "5QNpnNxDoZS25MeSQh9tvpKzwJzCuES8qYHKe98wZgkSzNtNRBuf5fufGp2cBHYP8SBnz5grqvyvaabJWEoTBZse",
  "key39": "zCznuf3hhAXLZxTtLm8L53AbHorgK14sQfQAAEd4GJnjzgzNfdWobaAveauk5tdkxwBBWtcNSz2KWS1gUDVHRsk",
  "key40": "2vui6sgFYy6xTMFZAtpYiAspBB79trP4Kc5Ajp1QqBBoe9SW139RCi5X6G27mGM4Ab9oS238PwnUwtCT3bEaAVbV",
  "key41": "nUxqHNRmYfqXco8ZGkbjxbUxDp5Q637TvezNEhS5zhEQ4UGCTqzb8KdDS6ebPbxm32mgpJ7BGn3dDdfF55jcVjQ",
  "key42": "LfRY39BacH846hvmnznnFME615Ew1x5Q8crjMHxsALrxufMi3ikzEYnhxbjsW2bitYK1VnCw4vJfc9XquqrqVhM",
  "key43": "4oXB1uWynx8PGFech2YpP2z9zbQNJkDtFiD8caV6nuHBhcjpuMqCRYdr5VtdMEh9tkcwPBkg4raykFnM85Wiw9Fc",
  "key44": "q4SbMeQ5h71MfK8jK7xEAs2oHYA3nzTxEQXTNR1qEa7dcSYbQ9ZrbZjbBATCNpjUGmLDn81ypmcb5Kx3BuZKTKP",
  "key45": "4gxbgrYV9qQPciPN3McZp7XBqs6eDt1bSbueJuGAWs5ruG8myFk7LAMM5nz7BHdWtpggkb56uKL9zD2FDt3Dvtdq",
  "key46": "3yzKbVVyjcRs8FzbsigKhxy6cRbP4AdZ7d6yieBkQqCCeYwvKbdzAYiL3GW459exVvXNKKG2573tzWsWSWYWbgii",
  "key47": "33BKfZq261HQs5air9oUyP3peSXWfSoFXXmNrg1hwMmJrAVk4foKB2Yd3nATUu6RbjiufnFjWuKG5Bqa9j1PkUk5",
  "key48": "5moxXh6YKMzg8Cv9B85DWByucqrc8q4pznf7po7urMCwHXTC2pHjsnPFvwTjRynDFbe2ttW4B7behTHKxJfLAd4v",
  "key49": "33JhG6v8B51wLdwezk9At5g32XbewAe9qBqnv6KYAwDeq5QuGfxAfYApSwBJp2LBNBf8skbNe8b4aV1ume84TZBe"
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
