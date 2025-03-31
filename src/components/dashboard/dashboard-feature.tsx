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
    "5RXFfvwkwxpedE8CmrtQWSkT6VVj9wMvfx2pRWJYfjuz51qVRguFurT3tvAZQs9MfheLUgXrp2JyL3Hj7HWGrfFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9Vcxqy2eJzGGY4h2sjHJp5hf9adJBAEDFAia6ZZgqK7sgvsssDCmjgJCgmubghoYpaadvmU9dRs8uc9rFiZFaU",
  "key1": "2VgWEaUkyUzPBcUivSwYiAHx4BFr4Ba8tpWn7ZcFQYzmsYaJvHvSnUok1vtaSjxfzxN9unocnwF48Pq3ukaF84XY",
  "key2": "2svf6Nig5fg167CmVWS2srjamaQnvaJxG8euYuH99MXiUEo4TNP4SSWujau1pH1EuyNhV9gqxMCcNJ8GzPHtBzYj",
  "key3": "K3Nmj6cC2ZH75x4AWuA6eDFJ8qS9JaKSq5rJrLiJK5nW1PAW65BRsYeugRuzyRTrmBUUBc68t9nepLeo2u4ar3y",
  "key4": "4fRheHVVe8mMThU7UPqF5TimvRK3EwnXPJkLPx47XbvBU13YLJ6h9b56XfSRBiu9TCZF8hCHohG185nMv7364H38",
  "key5": "2Nqr3KD2AyfKzK1jfc6hTmD9xHQ2nJ8CEa812uK25wK4tJBM3YLs34rVAxjk9V1xWFj2wMMsQmcYJXEJwNm2EebB",
  "key6": "5j5EoRoUFiRTf8pwL8TgAWuVZbyM3Zg6F1KZMo2u7QcD8v45Gum8q3c9htrBLpnfXH5E9PAkGh7KvgZPNnwMxtd1",
  "key7": "2zpqsvKQmceADQ7Ss6si815yiApzVrPKQA2mtXaHC2RRQBMXYsjun9tJf928LDkf8cR26u81CwBA7XPd2VyRoHFC",
  "key8": "2BAEPUCopQXUSyRijPKWDD8sgzkDpJBjoBRhcTAna8mDnxNz9tQtBhCYsB17isBBQwstGpHZUYvvZTwNzPPgr6GN",
  "key9": "4z3Qv6oUPzEXTeci7AhqgvodZt4AMXzVcy7XRHyZ3YfTTg7Jg7gMevwSZG74CayX9uuyS2DdoqfEsmwgdUE39moY",
  "key10": "2wkCdvBzx8ywQJmMMFc7fkLNBcMjb5WZuB5otn5TcrZFb8eZz9jnVnzR621XK6X3oBgZZsNdAjisMbfE44AJw21A",
  "key11": "2G629m4H8JrJiayGRKPYLD12zxLLEAUAjzJ1qmgADSJfDdi9bzqCyF4v3ZPHKNXSqamcvBZnphhwtGspssYa1pjJ",
  "key12": "HFLTkAwHByYJ7pcd6dpUVrHEYY8uthX2bCUzteALxVUrVbcQTirr4CRfsaCN2oWJpz3yZbbTtv9kemcz3UHo9bv",
  "key13": "gubdY8Vn6UkAnaWwjT9iNJxsZ5FcnxS4DKCafAZHUZF6jYJccz5LJyyGzp4VLxYKfgwRCRfvSovYvPFwAPskb2h",
  "key14": "48s32QcBNwK19DPTwb8JHX2WF3GQ4ibJJS9R2wYvSFNKZTHeCPcACR9oTpjre9KcpRWsAayiChZnrcDkFt8RfE2z",
  "key15": "4MCBG5maT2kyWKmpv3JpBpiJg3cerJ6TAGwVbGywsuL9HArYynjqExFU8BJpJqciq2nnfuRbEZRSfhH9mZU7AXQC",
  "key16": "3xsr88P5XUG1748b5YnpWB9hS8pWXn9bwy8r5pi1awkqkVrBPyBZh9o3jXEGmCDbw4fqePi3aViXQJdApkQDJYji",
  "key17": "2M514c6pG4eV2vTRT7eCycUgkWFieEu4EFsPZWvw5o5Bb8janXo17j1KHxRdftb95Ko8iVQHZJbFUAj1FqZhpfYA",
  "key18": "GUBXSBrdCVHLBbQfzvYgcwU97BqrAKpVcoSAyeURcH2pdRRn1H4UBqBCw7bjxQRiMR5DvBkUN5qZTKKL13QNPrc",
  "key19": "2EnqpF9Kqz5JsrUxrw4Tfnzvmp8K6vFRkrrx4zBwQFXXFAYjkB72JPkjVQvYCnUcnr1r4zLUfa2UvFmdFTJz6X89",
  "key20": "2J89WJHqfiFukd79vw3SuwrodAURA2SujyskS7f51AyDAFJBVSJbXZkfdpCZBwtG3DDq99w9BGt41utrPq2VW8Ba",
  "key21": "2nBRRzY682JU7RNonvazkHBEUsUeazZxLqD3gYWxdnPhEa8YwdFyNuVmaJeCZnL6rxr5oJPC7qrV18D4yC9XWoqV",
  "key22": "5fL7oKCAuPme76TYPwN428sDxZWfnpLEWwp4esEYTc8wJL4jWvVF1YAbubvV1C3RYP4CcaCYAxBgEKMeRPUtkQF9",
  "key23": "2cB2wrfFMsBPaq7L89nRbzimFr8r6QPBG6pUFBtAeQ5x2enRF65DgrpgRNPMVcLaAE5pxjM5kCSf3wBv7LsjyPNF",
  "key24": "vttrE35KKQAw1Uxf7DovkbHU31ewr4ZRwodNBbS4ingWJZQnDLeV36ymtrrYSr4RtTMCYXzsCN2D1ZQHGzbPcVF",
  "key25": "59z2Cq6kg9uqd5BfABi4rVgirYV872FF7R84F1Q1qTHqCEcDDuFFAYvdA3Hr9epGsBdirpTsQvR2GxddR9Qvqs1z",
  "key26": "TDAmtKbEx6DFqPAjZCKeKBjHonRcQPje1LzZPBVeMyqudDjinXiRLrr9juHbAkWbuJh4PJf17n8pruTzAswxqNe",
  "key27": "5a6e1gBjHiiPXX2d8CVzSVYyvgN4nrDjkAHYsteTJd7z5u3RripdiFNVzoMr92sERhQNNnquSkGpcEUh7byBB373",
  "key28": "3qnADqMooAfkcmx2PW1gHYeokcbR4yKeqkWuTQQvAuhtmHg967r4c1ACoaxoZU2KSjkjpgrmJtYvi2TfmFbER2sw",
  "key29": "4yjJWPxzGTHxha3V7kGVDfp8PJ8tKbmfZ44F3W8pRkZ8kGUNTf4RRt221mZtAkFcBqgf5GpFeeR91pkvHWxwJ81D",
  "key30": "122hRaxk7PnH7wbwEc5KTrhHW8r8XsvhhmCDfU61dL2cCT2CQy1Q7RDazffSaUY5XLkhfDZCuWFTBobGbDYMJfEH",
  "key31": "5K6LgUQG2H4bGWTbZu28bq9YfNUo5vQxj9xM1otzqc89pFwCy5kebK4HuKrPSG92evKALh2cE5DSzVDe6A2KSotv",
  "key32": "5BRo1UMFuwZEEiAMva1YQXLYfMWD7X5UY1bzeRFY6WsiZgXZT8ZSy8QHBfQE1q2GjiEk1HjoBKsGrQRSFYjUd9Cv",
  "key33": "2GFfhWz9MSbBpmYMJidFdYN6yCo2yENNuY5mggokR5J5xYgtrzAUF5j9awiEagQnJd6MmRQnwSziV4LiRmEh5rFQ",
  "key34": "65JiCNhCoJWa2v2khfdhgBy3duL5iUxWtKqRVVDKpjXQciYm72Jz1NgTCDixR5A59yWwb5P6abBZdHwn1hC7vDdT",
  "key35": "4b385UmRbgjmuJjkVcyANPpjof2NwTQbj3ncAY9MreTbR4Cu8ezAW1PhoAVNCzJffybQqXA6QAPt11Ucfet57neD",
  "key36": "5wCuefdr3q2eCtJjnTf3VLM1uixcZKJ5etLgEkKwUcfwcg34deerJNCoLnrkY94ch6L6msgdSqd1ooUjMbPams2c"
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
