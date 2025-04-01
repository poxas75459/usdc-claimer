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
    "3XZKB9vWo8hzvm9RyFmLmgJqv2ZePbZ5wZfQRooGfbcbfQiEbxVRxNndWydT2HLfW32vnjwFnLykjCGmiGsAyiAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUhPvTVRZV7bSxRnq5XfwQhuTvYMWQDXY8Xa7CaiNUFbXQGchawVvsPBnNYJ62tPN2WjDZY6uTHWWReusdfiZ8r",
  "key1": "RoCh52R5XFp7bKTmRA1stv4v7ZorjXr4wnRfKJswBWCXyXqLAN3mC6A2DtyZzEz5PvmMw7fCUjNSAaDBaF6vqqu",
  "key2": "5946gcdwRVHM2jMBt5QPsXRfQj9z6pGK4JxPwEi3Quw9PFKUJF4vsWhUtC7B5RDpqBbxaK4mrg5NPnNuyLSpKr6u",
  "key3": "3GjP9M9UsuEA4iL12BvRsEQHTzGFD4BTJPBwRFwDqrskcpKg9vG3nrSwWUb6PVwVERpdwCZU5NsWfajwa7LnxAa6",
  "key4": "1KxJVdM8LH2F2w7iTKqeKEJwmrL7PYkvyPm7qKw3BGH2F2XJPaM7mgJDhWxHXfaMKuCt9kbrZBz2KQvLQi7hV6M",
  "key5": "5rpiCzn988Qoo1QgjnXjjMvNBQmeqAGpSrr19jKJm4UWM2DkBszansVi8nZM6YZ4WrfriyGuTvKyU9kaQcqQWfh5",
  "key6": "55JG6Pr4wBQoZLYFaYkiwQNY8KBVB4EsveKQ2k7HginNXbSaypj72mpfkzCUz26sF9bqCYXQXDDMAhETadU4RpJR",
  "key7": "5i954iWePxZr2n6RVWRxDANu21KzorV6uTbXLPHJHT8cnSLQQmmyim9mTtV8xoLVD4BDfaRc3YERcAvqxg1V3j19",
  "key8": "MHNfjdgPCSZLtWsfrZnBbVaPP4xi7be5E9frvmX6EHRHHU3Tw4K72bT1DD3vTvDV6m53RTqy7JDD6sEtbgrS6RE",
  "key9": "5J5dfGE2PrrzFv5SJegv19hoCMgX9SKConTfM8fo7ZKoLXWEsuwjSQG48UXpKU7bUor8c9dnEJyWAfbsR2f4nEoY",
  "key10": "4epmRBr9CiT9Jk1Qas7RAu7iEyMmSs9QgUdBNhqSaJ9yqKa5879BCgcqC6NBsDYNS32j3eX2UT8ihoUYzKtYJrqn",
  "key11": "4fUvoxWEyJHpPhznUqXJ45KHVrPqgHkkHVV9EvtBPEx4HywRwy45ZscU3tsC4SretWQWFLSGLLnJULBcuGCPxbVM",
  "key12": "35SCZsQb3LWroyjd12M1QP3emxYNDrtHZ2W2pLzXDYfLazhfaGne9B54QtXxE21EKhnR2XFAptFmmNPRrVUArCS7",
  "key13": "2pK6n3Ha2BDr8phdSR7eGBcnvuo1HECodUzExvA65tuqWYf7CD3t2cdYcjCrNxFj4xByTabCTBcnaptNk6gzb9g4",
  "key14": "rBAegyx2KLF22gfHNqGVUekAcKqvvnnhggZ8gqDrvv2poCo3M18j9dF9AJQcpTd3YtnhsiPHrB6YhrcQtkmJanK",
  "key15": "3aFLqr27xpTyk2qt4A3T5kaqAtWm4W4vhn5oXWXJN4qt4VsG3k5NpQu2yRyX9LnxstaKRK3FmFdGMGUJhBmp6AFb",
  "key16": "5exc9AcMB3TK3ho5AsfqyzeoWhjh9fFXUCPcaGT1v8F3jKarpqiaE1oZD95h2R1Kgu8hFpaevb1cuxFA8yGAn8Qb",
  "key17": "2i5N4N5k3Zv8yuj8vTdyAuUaeVj6Cd14FcE3ZkuivgkqcTA4ogzY68Z8h5bgVxN4hFXgBi7pPxvcE7b5ajQ94hMj",
  "key18": "3mH2aptF5kXuMLpBXDWqMeCeeZPR3BR6z2RYYb7FLPr7E9vNsG43koumxeyUWWipduFrZKJgPANbxNSWJUShjar",
  "key19": "2dM6GfiEKx2UomuKy7D9QW3r3UPJMmpF8d9AwTuqbg4vGNTH7E4ce4ENuVWvSPxZa1PWxgbyyfZSTNfT5XCMc6QN",
  "key20": "5znBFRHDGHpoL9x3ggCpYMRGwSQMNQn5ccL3sKHSKb5xc651FuGCoj9g9j976ufSAA9yoYkjF2kwU9pgNwENYgZn",
  "key21": "4tXgVQAYa2Ph6Pwcx9mXZXYuzKLRLqTSAxJSUYiYDCBe3bGSJ4VWnGY238J9Lmezk27caTXY68HJSfiTVQxXMnrJ",
  "key22": "52Z9ZQP7rgJ3PrdskjCxdfjCo8KRzcSPSjEG8PzXzsrMEfhWS2cBpyqMh3PtkuZWwQUJyF1Er311PRFnbay7z8ts",
  "key23": "5F5A65Ee44UmwRTLrkukN6KMiLfmLhwGmz7x9aiaCKwSf8CKh6Pmpxfj3vfjhysbZB2dpXrPyvCCbaznEpW7C1Yf",
  "key24": "XHL2ktDQriKbHzAtEEHdDp8K51H9VkfHTahntmUCDttrAat2NReZdkKUaWFytJN6bg4trigMs8BesVMgxGMR3c3",
  "key25": "qcJiJUa5ifTQ64qfXw2MM4gTPX1f1HzxV7pAY7Sfr769vmsp7Y7QaMBxNxgDJZqMMK1uEDayq5CSRwh22LpGrcW",
  "key26": "gJvh7Wardu3uZHHEV6XRjo6pS7JGZTAU3NKNGJw3TY4gt8VHAtEfUoDugimyD8j6ZKMNjmD3g434YgBurDtJKsH",
  "key27": "4Lm9zKmimCgGznQagv8r7YZBPQwQ1ZshDbbTwvTxud3i7PsVCe89zNngC3jUEyYV3WuUNvUtoiwK2KFGsaMzuNM3",
  "key28": "XZRd3mAeK37EFCZnHRNU4MQgnxY4TzhZcsyvKMfxdsb5ATTRnbAkvJXWsqzRDwJDWy9c6Z5YL6wGYVHHUkRnMbJ",
  "key29": "SxfrDcv2JJmNSTugHVZytQi7QJ75sxtbQ4o8kzbZqneMxXhZABwZpetgVZapcq1juHKutiLvngpGmnBcxYFAP4s",
  "key30": "2GpQF8UKJULY7riEy4U1WBhTmNMhbs7SGVVhWS7h5etNHJkFWGo3PDpuk2hbUDUUgARP6P1ez8aXPgoqwqgy5nSU",
  "key31": "cihVmZccQgr7xNQTNPqeEVZxZPGByv6t4FZH6UyRGzsYed8Pt9At74URwf96RTpxyrTCMonmfkHjCK89Z8stbfE"
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
