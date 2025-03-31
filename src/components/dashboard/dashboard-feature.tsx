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
    "5z7wtfPHf1LLFPR7Agnw3dsBXwmfwqM4b7e8HRjH4tvn6Kow7EiTwUXNws17ysZ2SZQAFyPYSCyepMnsRvQy8RNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPJzoZ6qc2LEW6R7kmBsTZjP3CSHeDjTueoPGAPgxiqTANmo9LMc3q3TDMsq4P5v81XVYY5nYfn6FpyokDMEYAV",
  "key1": "jrbdtETMCNsmAh6DaiBnSoZWEGrjzGZAGwBx8rDkCAVYA4eZho7DyQPcD9SCo8jvBWkBJzEHP444TAJtidXjXMx",
  "key2": "4wXgaZPaB9Nhy7AgxStHULo2PaCp2BtdS3tE3sJkJtvmrg1JfAL66nvbggVeoTJnErBeh2pxTLztQY2dMuzUpZNr",
  "key3": "3mgExkEoFuaT39EeEt6xXueW7BXj1mvWiJK7tuTRjN6gcbaP7ERmCQSh8cXQBfP1VsGfM9SDsN6L9MJxyUXq7oAW",
  "key4": "2rnj7FNvGzmrMkLxNNvjYHY5F3kGRgWYBUALMpP2VoaxS3eQm8GL8xqe9t5FP58tctDB6XBCK8z51YhSDwtdEDLj",
  "key5": "43P8i6oE7QoFUp2sHGMF5Rd74zuuj7iW2rjgeBxDUBC83NMHBmd6mSec9yrQmnHfmK72SpM7HGDwn3QeuW5NAp4R",
  "key6": "39Qh44fnfV14mYYG7v7Ag9BghvxLycK5BDzG7zK3HBDop1WoBojjMhFZCYMKmc4tg1gBkY2rJchumdwz4B9WjYfz",
  "key7": "5pT9WdotypFLrMdzQ8T1tpFquRnWzMis1EPVadWoP6MeW3sdpDAm7J5SCSvmiJzzBDEUevjUKRT1yeHemRZCrw2g",
  "key8": "3SJkkhZfX2NPnCXa9LemGCuRQTX9Wfg5iig7dV3rW4c1QqrHDFF8Le9UnGhXEwKxGZBkSXA8wCShZL3CuTA579Ep",
  "key9": "2pYv5Wr3CuJjoe2bVugxGWc27vR3ZDibztzrjbygB5ttTDnRo1bNjRa3CBrs7SzFq9kte73i6Y4LttAdUb94hBJ5",
  "key10": "aEmJFrgWydHNie4xmLAMDf6FKFibiTDK2DtZ1rz4mNHJoVjTkmzm8wEXrjdxXpg938AJ7Eg4LjJaEoQx1oQ4cd9",
  "key11": "R633YpCfLbpVUCBozbFkvBQvyLbRufxFFyynRtjTnstGisPesJvjnRhXnALVwpTFeKD72MhFiDM9uqPxe5ktwR9",
  "key12": "HMosJz915uhPjVsU2oeAZi99sSwUZkv1yEAok8PqtWX2SkDPRpaDT3jrkRWyYoZ19jwE7yyMwYxxL7yK8PiKy1u",
  "key13": "5mazweKUrZvqMW2yZ2jWFDcyanp6ezH7ZHzSfVvfZnErVTKepN4vKr8SNMLAoZ9j6J6uygkUqmKVxfNhFQiLoDtC",
  "key14": "3oZWUZDnBgSM2EgxktukVJiWH9sbw5YnTW2kge74Uao6KAJC3PNMYYRvPkkz39kqZK2Tx3mrZZ9zZj7772nbU4FV",
  "key15": "48E8PxwtKkXMtgFn4kp83qmhVMnUC9vRHWyupY1yva8U2h4fugeYYcbB3MGn9WzyxbqVkbnqfT4FrYGahBQdHpXm",
  "key16": "Z5GegYG1G9vYBqiS44Q6297QmnA6eLVK2s5HH8Htoop3h8KAtH8213g8ALBxJbsv7M4X5enCV61AYbiKGn6ZEPP",
  "key17": "3wcaG5SeLcc8FvK4RCE8LCZJYyKmBP5EVTGDsEPFRezAjcYe63gbSMUBkTeh6zktpV9qQamEzQ4Pz7qibZuSbMjV",
  "key18": "3SRuCu8tK5tCwryWHE9J18cUCcpVWCwD7JXcYVNQtjzrHBhWxvBiLTTzwgRt98u4LNCXgX3W7Eq9pVYngGQkmDpo",
  "key19": "5e5aGKTs86xdZqcERAgwhBEBF5BxJB3wajnrvCTVHi61pJYqLX2vEhXwiTg8jApQQjWv8NTPPrT5LJsQHtCQBCcV",
  "key20": "5c9PMtoKLwAibAG4VJ9bEZxSnyVJvHuZ2K83tUV2483JeMLoJhuLZQRX35yUxEzUtrbaKgLb3mqyNVEKt12FVzBK",
  "key21": "dhwNfF7JgixUhuYTZxWPYsDDeqUTrcxNCR6jATeifDcYWLgbnRkRW9MW4bDLEWcR4R6aTcDtjoN3Ei8rWtUEMfU",
  "key22": "64efCT8k594NXdcbEonf3H8KdRpL69aCtMLhmZJmabvQqcZr6NyfitSFzudyDmnYMVrZEPNnzfwXxAjq56UPAFZR",
  "key23": "DBu9cWaNZbczW2wQfFtzVZkUAYeYP66ak4VVBHg8EMyXhDqqxc8LfR8xnZqcMnP3YpqE6Lj1FbydRTL9xArsVk5",
  "key24": "QpUNW3uEiVZchMoa6XhhcNRCDuq8gPLuMaCjHqPqZgcF2wZjQg8wfe8sJpU2KJDUaa9JZfVS7Md8whtBdtN8PQo",
  "key25": "5zHdSk62bS1VzymWEMtBkLHP6Zd7p6jyZYHm5iBHcxNFAMZAzA29jZGt5tvbAwRL2TcJ35bZzpFvJb9jM9V3MAFF",
  "key26": "A2CPhy7K2uFwpqZ5sTYVRpQg6rM2qBYrxtpW5HXDtaJYvdjoNKpYs7ypH3asn86k39AykNo9VU8xRQ83pAL3gGJ",
  "key27": "63Vrv8uWtXwp6pfavq4ZXqBzYZzRsSnw5uQfUEZXr64FU5SEyFKzss4z8BpfBGLYSzVQUSvWc1M5rvcq23QLz1A3",
  "key28": "4yvnpeRK6Mb6XHBN1wWoQRsKiXUwPbJ5VUHzYihsRrFz7cbHJM4FHJ2N19sX1qDL4HT2jdaQosScABSmuWDQdWVz",
  "key29": "3tidzTbjdqcHFNGDFDHHwbtw5UF8pbtiB3vi2K71cmk5xY3utmPiJED1r3Z7n31RXBv6YbXSiqZ2fqF1ZxUT27YT",
  "key30": "zuQky7HiF1nTXkYups9vYt3WTQ31oDFSo94XYZYFKW2WFdpSJ5CZfrgVcPBE8o8dbZzKkd5vQvCDXXCNQfH4cWQ",
  "key31": "26TXfU8zZBpfGNjtaEpZFSNLw8Tjuavy6DFdWVjyLBnHv2uDYid9Aw2f1RnU8Uee6b4mrryvYBztAAWn9DvkUnn9",
  "key32": "4axFZSvCJXBA3w5P4QTg6VHaoHmT81PQb3SBMCcrX9aunvdj78z7QPsPSbLXA6Xpo8J2kfa8wHgrHQBzxvV15TyC",
  "key33": "3vTffqi1rWxKqJYUXmVhEMXJiNrPqTHbMLYcMDGEEV3ssB2RE1ACtBexmd8UP8Kny3WXHZ9vspdC7p8UmtxzRBzq",
  "key34": "4NE86cA7Bzb2XewoFsX5UF6TB95zMjujiSoJT6eVNEiR3CmWXN6PDrh5cptmy3PfBsPr9n5GozxCYiuCdrGREkiy",
  "key35": "3y2rV8qXKPE2MqmwJSfB8YejJxM7N3Zx6ikFsqHFDKNqda1zXDgvQsGA6nonNGzFxqTDvGwQnQ5RPrLUCGEJkznw",
  "key36": "3hQepGAavWdE7KwzGh7dvqEnTNuSYZWKdCniDFjWPtyEB8AshTBA1XD1WSyNExDpaevXJButvSChJywST2Psz8Ar",
  "key37": "BJy411Qb3qCa2NUK2gvyWZtgsvtPU5LbXwPHKVU9nQcxhsyLB9mNkr79JatiNMvzmEi1FNjd43Gy1sDCXBCEaEw",
  "key38": "5T3ZCPWpAEuHkdjyoQEYPpXxoSAqRMyPWVrQ4aqzbHiF4QE7izuYTgTpzcx4Nk7o2fvWRoezJx8eBRMqgjpDfckL",
  "key39": "sKLnhG9RexNbKjxcgjFbAYFoyMxAjzWpPT4NK2FfgQfLhWcjQ4LibsBNyLeJgwvZKtVX57gqcNFj5xZtNJnTpAt",
  "key40": "3JEKWFfor6uAtyM8WZMicgci6z6uTfTnUhC5BRhNsfGdWiDA7q75XbDiaVF78ZsWwF3wEBTEpWpXw5u4XrX3pqq8",
  "key41": "4VoFBiTuihDm1SM9jWNEfmePbUSH1fp4k2fsV1bDYnXTFSzgB3T8vQbJ9E5JWbmkxFnhLeyb58ozQWk2v67MB6xM",
  "key42": "5BLJhLSJh6gKpGw8ULY6qTo6NYNwHyjNyBdQ5QyxiidWtzBsbFBnotSW6g1e71QmqqU84ga9Nmu2fSi7LppoYqDw",
  "key43": "51pHme2CtHZr1wVWh8Xuw7pPGBaFMvPg76UzTVtRnpk5CbxTQPChwSKGjL8ZLZSavWgroW4k6WuUbFMtmWXQEDKJ",
  "key44": "ieMmMYc1YUnj7NYtwJSct41pE1fcEH5srB7w9vbjBpahNaZGAkxFRm3m8mm8a18jfkNWbj8HPgY5p9GC2bjHvyF"
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
