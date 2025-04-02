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
    "63qbdorEokBiVxfNiyM8Z2XHoHEvKRRxXDhJrYXXxELaABFFmkW8Yqe2McUN2mKB9FkGbbfTk6iv8GCt3JWZv7Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1pdbzvs6UWCy9ZhP2vhT55cZMpQY7DEUiiGkNGBN1doUHra7mm26edoaVu7nNt996QdgXe97jM4xT83Giitcf",
  "key1": "Tmb9Ms8eBn4Nwh1SRnr1ah61Y1RoSyxrNoFAXyP1obeLVe2aBqtnuzbbQJXNVPSqn2254aCS4VbeUt39bEnJafg",
  "key2": "51eADra7VsBvXu9ADRszAHhA8mAe24mF3tt3GqHEbmjZRwXbChpwkKZBSggLLkYgvkSwhDEeCRpRukH4UeNENrEj",
  "key3": "2GcxEbvPMuzjcmiCKsBP894iJPh2yxtBxQpyqSyyJBMaVABo4WLk1nj2Bifu4cAK46KL45X6WXij5PJ5vJKt1snh",
  "key4": "4isiiiGs9JGd4n7etBx2bbPDUE7bTMGgpEHLrhvrYEyLQvfPiEWNLCn3aXaD88r5NiC6YaTdC4eDZHX7fqqiEfNJ",
  "key5": "2imzWZprpDSMP95tJpUYte2YHuidBLAGr1byAtnwycbapi2a1kfddiHemfgJbewdjFc34APwKNQHe2pXMZJzdwia",
  "key6": "3yAGujVKHok5Q6cZZ9jbxsFyyCYBzUDQpLArbydZ4wDMNr2UVvB91qsTCmmS195FZbjRagCMvmjTvdyeDTmJvgEK",
  "key7": "3MSABQAUt2Xmw1CrrWTXYxV9jBKt6sobotWbYqayJtE2snp4XpfiTGroyykzEASDRAyD5gcv4v6cv5WxEKTTjhUb",
  "key8": "2CdKR1SSdrPPbY5cQcWJNhKJ8fmN9jJ9akC8hT8BH5XxF4uVChURW55iF599wXEG3ScVC7i4JN6HLEfvUErKsCRx",
  "key9": "57G7tj2juqSaqXYpwQnFeQSpK2x9QCUBf7XWyfGn4NwcPjRQL6safLdsHcyhNuzvbj3TvsphcriPaM7e1WoFSFtQ",
  "key10": "2LiQyHTDoWfmbGHkvqtni6CSUhNt8xFoajjn6ayzR8HfcoiKZR1FXk7ijCmrjNSS1MPkgRLRbZaBRjBkmJxxRLsZ",
  "key11": "Kh2fXfH3KqxcmYRcovTQwbUVTjahKcaSxqnHs2CRHrktjzngPBAUkBfxxyvLBr1vjGV42U757vmhNGooZSbcZyy",
  "key12": "2CrKcmgsK1W5RoZJ3hKrX6pgyZ5k1vPqJDpEQacdoFgbqrXwU9U9sKPZqyAp9ekq3RPTvMi286RCi1koj9MsWzyY",
  "key13": "3JhaUgHLjfE2yNsed4Gvyf7XHrfbF3dcrRZbHe1UomUqdLKd1WkVEazJF8nPJLuv4By5id9FjGyxKtfrUazp4jxQ",
  "key14": "5jZmbsKL6aMG9yJ4incY9xWXGvX6bT3kGsMNt6d8ukJNGTkSCz3oV5ekQY6rDyhZGEzkNGkuLBXwX3jXVGHfxchn",
  "key15": "4AmDx3QzArfJssRabbA13wKB6L9HAXxyCKCKotssqsNZR14S4aored5eHLkBQVFVikyfpe6W6xEpT35aiw5oXn5i",
  "key16": "4oAw4B2sE34sPL9nxbzb6qHcpLetCEEUrz7YyvsRPGe8f5hxmNfmcwvjscsQsnzBWbL3YmvTsVUhvEBMfkFAZvtf",
  "key17": "5eppo6TPTWh1aDnvtCQp7fe9puhEjziE6ey8vHzdG5ZKfcbcgiY5UuVqoLrR9UwExo8Rhe6i7FB2hk1mJUsGdxJm",
  "key18": "2fHkX5uvo53Lz7oGtFtFPJ6maeuFVmVoYhanPig8mFLmg1FjRhh1eoyEPEN2u3XjYWY2gByVjb5UWptheticF8CM",
  "key19": "6633R3gzB5LbqRU5VLaE5CC7yieK2kQ8Ukw5MoFrAM8PNDaXbJ9dUjfMMDc17G5PJfD6YGkFZHLKVS91wQqonKTH",
  "key20": "8ZttN1jNBw3rp4MdJamCu6rA3nRR5924aTArLTUi8WoL2kP2CqAkfWCucAqHMzwdvGBGMeAYmxmc1KvSutcBVa8",
  "key21": "hRPDZEwCCthc8YqpTUvi44QxdMfxzby7ZGaKCBvWWo5VSYqCQHSRRyyT8QPnC7bPLXvfA1YSm5skFJd7Xa1p8g8",
  "key22": "5Yoy3hYUQAyyTCr4xQBxB8xG2LcTXaQxRQgLjSKfaHXTLJwzG5ram26yd8AweLeNki7mS9pHEKLFicQz4fmccH4V",
  "key23": "3xYqWAxAjW1cSH28mZdd4wqYcN5PbneTn1Q9gDGpq5DJimZjdtdV5Jz3HU6571rqeS8PdM2QJqh6aAdHH16XWrj2",
  "key24": "4VNgmZrkcg7bPemLhhVdLnZL35mADddetKqoCRTiZnio4EqeRdxcHuw6p7dFxFzCmUjfL8kgkpeVY28Hj1cs55xM",
  "key25": "5eSJCnbf8VpMquNZ7zAkd9f9dYXrjVi5vHibMnQP3Joh3kWZucz4sFarwzxfkCxsKxCquFo1G7VhhP97Z8pzQfnD",
  "key26": "4GWfiw65sP75NgZJbA6iXWuGa7zNuZLm3Dee2EXxihBa63E9E48Y9pNRZQ2iXYoRGfoaeydaALj4uM2rZB2tvXci",
  "key27": "2ZV7PY8Z6iZTC7rseGqBNaCcfnubBx1kKXXfK8xoeXb1HFY5SST93uT8iGbqJfZxKve2XR1naeWJeSSix4Z1JhZ3",
  "key28": "31fy8ammWQBACu86eGZenq3zHxUpda7dRaY8jvpjS1Zqs7it5M7yGSKBkjGgQFxSz8YD92MV1st7tZVSpjTb6t5y",
  "key29": "2CX6HPLSJ3wWb5m5dT3eka2yMbJGBoqhmYZwV5B1CqgWYE5tYzBpHU89weVyZSKmvSRa4r55exwBWRDV5E1MXS4E",
  "key30": "2jaimaRv4cd26mkrvYh1htaSU7xLUSaGyAU4hwip8Bq9JCyCuvG6ZJhh3R77jL7jiQgXJ8cskMzeUA5e9MTv9EfQ",
  "key31": "3cq2knxBfeJxp3NFsFCkMmGuYBpHwy95SpA1WaaNBf1ttC4w4F1qASfHgSevi2ZzRfv7B9LbdBtJv5kSbYumgbpL",
  "key32": "2XwjuEUmytkT7QiGSv9JZME5Njrv6BNVJuQMtPKbEWdCRs7kErkAjB3YvLCaFFk38Nizn6xFGgtu2arsJpmVGFFX",
  "key33": "4224hGBWiSfWuWzjGDaK4B3f6mHsanyXYZ2khRig2VMP5w7rSSrLupXeSZjveTodo9Zmg2CpJJYSam4LVEc9UKWL",
  "key34": "1YTD9gqNkGhNqTPCyMk1gZyoK9KSijXg9siaf9UN2SJtesnH2Vm5u2sLJPUFHvsUy4AXqmLjEWSpxe143hVXjSH",
  "key35": "29xcQLxTxHnsnEZyJbaNmLBomc3SrU9vV1mfaL4KkBkuCC5ispApaFMjMdpZjVvwUWBPbW8EAGuqsLKD7vehfxr3",
  "key36": "AZFChan5KurkCySKSp1Syzc3LgW49QALZWj8CGVSPtrXkpm3BByU4quQyH1UWSBf6i6XZoa82CeJoCyBqWwAavj",
  "key37": "59M7H1zdaWncUgJMtCYtTnTj6f1LEpajpsC6Hvz3tEPCYCdREXor9JKu7KGnZ3es8FVYs83PjB96uouNiSQ5fULC",
  "key38": "JRnjHAVbzJfVN1PaN1Voz7aVr8kPhfZc4GzT5t35cafahdn1Z2snYwAP5tzJBCxmJumcrNDMG7dqpRnB2bUXNyo",
  "key39": "3VtaxLq6G72M7dzTtc5EA2macLWXyE2mR56muGNBLD1mBZFi1GoFguqSRA1zawJpY6aYVFwx5ypu5XnbrjjDg23g",
  "key40": "3P42QFTAkCrWCNce524xH2UxMLKCVoD67gK6jRkjcyFyfXs3kyM2LNypySNYtkpobTEj4sEseAa5Vo2rFeAArcf4",
  "key41": "5sbpcWiZC93aaNBeMCH6ktxuhRTfvBq8Uc2xVhcnx4ZZLJ4BncvNuyQQRQxaGamgSHmuARa12X4TuDh8G8Xc7esu",
  "key42": "23UVN53q1Yo5XnMJT4VD8SX9uvj154XvbG1Laa57hvuGS9VBRr6fZnYjDSYr5jm8MozhyNanv7HrrjYKPnUzXUvk",
  "key43": "2zfQKETCZYD8k7F1mBa8ZLVxMBPrxiQBLD69jVB59mhYBD7jMJhNdhACHhFYgqdfWtpeCCod69SCGew7BYCZ4zmA",
  "key44": "4NbK9ePkB6h3afMT8LiqopU1sGrXjCoKpBuSJvUHzJSSfoLwjn7EJ637Vho2v2fX5S11Nbn9DvcQFrtdmtbuTmu5",
  "key45": "2aHwuQUQkJ9rX9HaJEaAJfd2GvSMvMyBEntuA3u8P8zX7FRG3RMRvHtmejB2ECbsPo6EWKgX1BsqQJQMq7d2yGz3",
  "key46": "6GtwQcaB9oZu4AFx5neZxW1Dsh4jNas4jrPryeybsafm5DJEs5BBbhxutaeaZAa23zg2f5fVNiihMJEFSfPZMRY",
  "key47": "56c4qp8BaBuGKdE926vSU2W3qbWVuTMsuDRL5hP1tNqgfzoSRPvbWFtC1qWpwHmknzRZ4Znteke82rJ5UNwjHNce",
  "key48": "8DYPBemTPd3bPErPoZ4cmLpATEXzohZmXgyePLHKrvrc31w1fMGMEGZPircjowTUVx7fLEyGUtwTD49VgE1VsoQ",
  "key49": "4KwZ7Qqp3wY8MW52rMcV4X3qA4fHXX1FauteWVNdy3YnEMS4prU2D4P1ffjddvQekUvc81JrzfepH55RMmwDFAkX"
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
