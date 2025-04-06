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
    "5zpbLLg2bk74FjwWVnQPJkrAVjQunzhH96jbpH6k3D6CXAaXHWARmfwoa66C5AANXC7ZZNKcXxbUg9mExvmPw3N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528uWKREkfskmwg6YGBDyb5j8wNHPjQz5FEKrVkE9FXeeFu4nXuhx9f3tUjgXwKxuAdyVUC9wnCNBXpyyroZ1rHS",
  "key1": "52uVL2PckpqUqkT1DTNrCckaBkPwzadeHpmdrgQKMCAdBK8yZVzvhwy6GGGWLmTTnDZf8vDLNrsScg3shjoo8fiJ",
  "key2": "4RNcJ1yZ9jHEA1TpZCxZEaWZpf9hFsAsxyxg8ySSzGWkwfHMzn9QwJEycphqwRbNPjKnCNnmw8ZunSEnTAnZWrQs",
  "key3": "27JhhYjEj6xXuXG9VgNfgPtbpgxkRp7FgYHFPocJLGucTYYcFa8rDr2CydpEEjSJvdmQKpUTQmWSmGyXzwiXi2tu",
  "key4": "kEf9x3JmxCjoTFKB293Q4yc5GsvfgTQQf5uTNDKrjjHpTqo5pTmkLYvykUzJteSALTtNQer4RMnGNAjXTHnUkcH",
  "key5": "48De8vQmsGKd4NmisifizanZ9PY7LEG9sLH1ZsNcvxdXZUoH5FZK7anaHqE6U7jTcA859ayFSWyBJ7HDwt42BDZz",
  "key6": "4sn8NSmp7kP1hvMrFGAorR8CyGtGKJVfNn9ARQwH2hFmMJSwtPsGA2uDVwfciGJKEkXUgfFvoCyYvkemKMpbRJ6u",
  "key7": "3AxmGLrvAukA6wAyEAkoHaozq5MZHhmcoUGCCUtWB8RggvXDAAMfSi3pDr4hw3mSbRKmxiYpJ3UAxrv6wRPfDiAd",
  "key8": "61PifVoygTd2CcMrD8g7QwGsywJcQ3ieKWskQHS6LqBHmYyNdLyAZnFxpc16dYE6q5f6a3Hk2WJ8j1MkQ5nSTbtD",
  "key9": "Sp6f8LNwQkWEzyn3emd8pmN4wAvgWA2fEyZsSoSf5BViZXo33g43PkWzF2TDME17D6cw58XK2K3Hq9cHY1eLCSG",
  "key10": "UXE3haUuGZvLwKsDu5xdhLyR4BpWFsrsQmUuLD5jvbWrajVn7vq7BjhwQ2e2HnV82K28FNczf7dMzo7R6TwFVzK",
  "key11": "34n6UcHb9QfuREpBmrr8q4FRMVjVftw2YwWWz3Bgr92HMV2b2aaf97zZY6KfP8pGST1kPuYqH93mdbjKaqtWHtv1",
  "key12": "2zKSiBhnLddPGF8Y42QRADRzrnEUDtELqzToJVFMjPAB5PWbBt6cesAFLvTCihQLzXsDUcDYeDyBzUY5KM7sw3vi",
  "key13": "2jfpfGDVbFh4PDZX7QTwiajxww2xjYwehdcdZbrACCnvmxVmp1sqahZ7WA6ATUPr2osXbFzNMQThsPyyVy69dEDN",
  "key14": "2TdKAnrWxcXvBUrV5dsaueeriKnKDAt5s4yztgG4bpvFaqzTwpxd3W19T46oFwLvwJqPA6wJZYXdcwFbheuE2ape",
  "key15": "3YCinrAYtajAmXHPoFTytjqwwztzqvDkWHNd87joPZYz6nVoxUPBTMrsXBL4Zq518opW6fdsJYTGiMCtU4V3HcAp",
  "key16": "5bfm5Rymzc24SNPSAwuL65qxoEgM3LXqDvdwixmFz36zdBB4bpBC2S7Tvb4fCmg78DZp6YvfgzTq1j8BcBD1ZY8J",
  "key17": "2skLCbC4AEnCwgZ1iKeCAVVejuPi6iDx4SJEEt5nmRmZ12hSZN4cgc8bHZwJQ4hd922QP1rthHdxXMpYoC12HRcN",
  "key18": "4e65AkKk34Zm5PJoMuhgo4BaCNNMixUoze75wfnDf2GisFzBz8jGzbaKYENZwfwKX3ZWjsG2scsQNpkhaCYLNk42",
  "key19": "4Y29qjWjT2E5ejeyY6BN7SzmGGRLfheEKnSErfXWYNo2fQRHXXgx9pAP8NKQRk3XPw1XukU6gNcSQjQwiRmULZYN",
  "key20": "3LVhz1xhm4fWzutYwPGcbNK25YpXZhxYNHpR2UJbhMgGr9xCwSNjVqyPfNUEfG4p2jnexJDc6mqJZNJ3gE67Su2a",
  "key21": "pii4xymJxc4Q57oYCQXsSjy4tgAnH97pXBS1UAbhmJKkR8RkenVFiq5TXwbBAcM64JSEcoWzaZPCP37UQDHFmUY",
  "key22": "3YmwbXhr5E8mqMY7po6aapj2Qu8AXqvQ1YBr3DHiUhKLPis6h78RNSaiqadssaHmgAcwExD6Lqmr4tJkNHtz5cdF",
  "key23": "3o3AkVFWsbu7UqHVBSNp8geNuMLqGmttibPHZ3u5TwHpfJW3T5gszk1PkDcgVZQeR967ouYJvAra3vkCzTkTi3ui",
  "key24": "2px9Yg5jiNBGYyWMQ2bZ2k3vTC6N35it91arM8CE7nzRYdA2NcXBRYFuCFuYi93xYQ6uYgthcYgAncFxF7iyQqUf",
  "key25": "8muPjEiUBLQ8tuUzth5qsXGa8MbG16hCbuAyhcoKBj1ubRk3BaABui4yYAtPiZouFxJZ4M9NCQuUVfGZLixPEpT",
  "key26": "LUA6xtwMqxFcLEasdkW3mBZ3QgQ8d7LFdHzLaAwnDSLo4fJWDJBCPUikXo7f6NcToaPhhJiGRhYr8W9gT44Tbit",
  "key27": "axMZmUWaqJuCz47Fz1fdEX2FNSvpoFibDUJzoH8Dehu8tfy3oN3vLD2ScVnzddAMs3DYByUSXTToeE8tAMPYhP1",
  "key28": "3jcqApETtLTjckLUf838rd3ccshVNJMysf9z3qw4AkAPndawEkmTx3LDkgrrfQgzUCWTiNeLnBKva7bZxkwAvG2B",
  "key29": "3ZTWtAfmrcW2Kqo7kqgLqadL2PR2ohP3fPALJrFTFK3mwmwjqQbUZweSkkhzNbrbbHZPRN3TbztkLL5HiveD2e7Q",
  "key30": "3duAWFcKEw9qWUoUhP23GPjhw2ZBJJxXkEZGSBVJvsrgyixcT6kWz7PehJMZPk2b7P6MwkYUUaBGnm6Cf7URLQC7",
  "key31": "41kKnDEomKnXvBgTzSppKNFrtBqDA7rVQQf3zWzHKwBifhj95uVj73G5VF5uvSrbT9jjSEkDka18jpEFPriXEEk1",
  "key32": "562VNMBHiKtXLVxkuLFrjUbv3kPxhsGpjh4hz9hGyrggB6yYgiFS4qt4tZ3Yd395bYvMtf7vPStz2WJF3s5nPxYM",
  "key33": "LynNLKURRd6bg6LduMBxVZXUEKg3uGaMgmSYRVaRoqaz2zZ7ckR1qXUgpard6umFGApBgw1am6zxyGcNcKdqKiG",
  "key34": "3sDJZUZtAu6yLVX3Te5VcYZJt3gUEjs9sgDkbBHcbpqthASDw3Xn1e9BiRXAaktyvPYzaiigJ4SyLe6fVoCUJyrV",
  "key35": "5RNuobzjtCSeMsX2ajeFN6bUFBCFkMLfDiQbuCCJp8X7vp3Cf69qVXS9n693ZFaGLthGXbheaeX6DB2wn7oqt2GU",
  "key36": "31J2QPMPwjzkJHdLbsDq1pBguU5bwgbkNTj2V8dcE9uXQL33Hv11oHWqBQ5xTDXFF8ChpJsxvdeduKYP6PCuMAX6",
  "key37": "3fBqdMGfZbPMGrjtXKjZc8cptJRCoiLGbusrQjzaqqmfyCTTppfpcUBjAefhCRSWKRDo76FYkfzfUC8pLfeRKi72",
  "key38": "4isCcrkzK2uypz4WymCHNiDGESqb2nzPyMqyp1CgPzTeQyyUBFNvv2XBdS52Yrnzp1LenFpPdF2uZ5P4BmnfxXPD"
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
