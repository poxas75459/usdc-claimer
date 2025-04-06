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
    "5LGWvJbB4ndvdnnbGe2Cc5KuyUU9zhozwSSeHuwnWCrcUKvkCUK4TwUt4Q7bgRMuxf2nNTEXEAqKy32wCZwwJXby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AghJvNHZuB34iecGtV35yfhH9aBF14NxorXNwbGPeSpeDUcfzULQAYkZ7ZDfWM9qKdgRt9krmQ7gd9PWB5zx3gP",
  "key1": "4qwWfFvbVkgXLTtoCFkTrU2MAQrLqjVRgGTZrrreDWVdnYtyFaTxQnci3wuT4UrKgm2asJxS822zXzmsKmc22DD6",
  "key2": "5156BQx9WRUVxagVZQzJzx1VNVCAJ5cUnfUKNwYpsqc1kriy2JGKJXFdjJWTMRJvyra84742piykWeCCXL6cZNzK",
  "key3": "gosBaHGU1bKZauH3hEB6nCRzLFiqUJqttPnkisNepusv5WLsNzXprb3wTcon8k2ABjfLwxTtb8stNqkPc3Sb8gH",
  "key4": "2p46KTRv4ToRY3LHRL29kbeauLRXxqmbDaaHXhjaJjfSvGwDxtRcdoLLSamxuxbDCZSAVjTWVT8m1iUtLf5nekXH",
  "key5": "cSTrzrdUMzAiJpJwcdAg8GJ1LKwTDQCgWgf3p5W3RcUZRXztyHK2BuPP5dugdchoaeWJehAgrETwEbsKzDmNesW",
  "key6": "3YhbgTzyYwR6x1oLXnsoqSULdvLh4FsMk27cXjuyq8U6GUHw2Ej4ewPMSVptNxAvuJncw1ZbjyqS1GDSxWkoQS6u",
  "key7": "34BGwUaRmstC4hgBtcsNumgnXXDZcw4ZLBw2anGsxeEDaBjTgV4gE8u1r6VCixper7LmkMNA1nUeucwQ8vE8BtCs",
  "key8": "5KwMjPAVWPKGtcHw3NFGLR4dTvPbRYVgCZmivG7XU7Wwwdme85ehkRrfSzk7j8CTKgNkgDh8Axke6MnvskdajAa6",
  "key9": "3oCjFmmTuuEKWDRB2cAtyX7br1cGyP3NXfyLupv75wiuj5eA1AfQHNa1HoQ2XfjfzFnPsdf8rWzZwyEGFiG2s5wz",
  "key10": "3jn4T7HVT59PfhRURuf6F2xshmQQC9463xkJXENgqM1pX9fmVDZ4oZdrcfUSmGUm1VgF5BhY34Vtqa1oYYczfL59",
  "key11": "xjH4JMCSup9HBJcg6TSbCAbBFBgWNiid7kjY4Lt91iGzvCRRTJemr4eRQ43SNiMxNyS2tex9zSLpkAEBdrcQC1Q",
  "key12": "3EngVJ4Z2rUoXvpmCuqXy7GeNYJ99pKXB4fn9zYiYNHnQBhwLQHX2LgUX6vFNCMkcuw1UU1PR29sEstppdyDvAUb",
  "key13": "DQ8q66f3JHf2uF52UVmVDkowUrViFTnRVQJfuirXayoSRWD1UNrn6BQQgGkv7EHAyb7nQ6Gz61Lhh4z4ZGr1cK2",
  "key14": "2f9TqTiyfVqp44EUpmkFKPeM6xJ47ZwGGexcaZuLqgA4kXgfyQv9aEEuxKUMfpV67px8aqu6FKdfcnky3SHQd3Y7",
  "key15": "5Rvy7jJ7XFDebdgUxSSdVPiJRVtnAn8sLbYq2fNv3ss6k8nJHgLYR3Fm1gAJPR1ZABo6ngUQGkthFLxnwkh8NjS4",
  "key16": "2hto23Ngy6UDTPwQC8QPsiN8hbC1n8CYAUNXZtkAvwtQArzDYk8j7HgUFTUYrasbUCdRcCiSFrtXqJQaqD5AdpcA",
  "key17": "eavLRVc1oKD9piBdC4dJ8XuMgQtqJnfsDxPM4eJuw9kgnGXgFLi7oMMUx19fjaZksbjx8Dn3ny1C27YKJrwjE7Z",
  "key18": "3ocsPn9Kt5YsWVBpZGx84RDV6GxdHJd3bku8fu22V83QyRK1uMo355hHTSSAhUU693jCh6Efz68JSd5fZGZqUAvQ",
  "key19": "5HdFypuGBpFYfZFNztUbYGHM8ZtL7jHeWpphDeLtHcDW449YkacjagFz3TxXo8GiBrB1wLr8Pqt9Qv2tYgLXdAya",
  "key20": "2PRc8y6A8W2bU4F16uS38acBa9ZtXro9uQrxFWffTezVtfDRuwzC3jiEYxR88vjpq7Pa9zN7aQm5ocBu4BGDtXHe",
  "key21": "yDuxBqfHGm7w5aAV5pbJhnGrEPVSQhj6h2wTtLuQ7csKmiKxZdjjHaDurbRzE5sX9mAF2NrtafakYbdM3UxB9Lx",
  "key22": "5JAVouzYfJEezpWPU7Wc751una3zSawm6WrS6GfdwzNmkX2JPxbyJQnUQNqxbvMLxHsAFu4TQgP2jsMMASCKXBVM",
  "key23": "4TG4bzCaHPDiywGJysH1Lmn4CEomUw1wN7tSgmcFruUAMrcEfWK5gMnLRGMpVgdjRUW9tbMHfJe55mjXnQc1HSws",
  "key24": "3W75KNemGGUkTYguAjNLJM2Kfd9nrKbm7A51YTExeFkcuSR9jJRMGbUdz659o9qxPotwYUpASXbon5S2E5oDoC8o",
  "key25": "5z7gtk9yJ8GEg3wYDqJhRMyixUwSSxGztfMo9p86ppgbT3k1z5si9fnTAoQ4Ky6VBoPfuJ4VsYw9QAZHJ75p48L3",
  "key26": "28LvVzHwavwqAnMfXtEjsvwfnFzf9EnodAV8stVkEjTtJD3J2wLTJY965Fy2UmmMo62FH7fgAdnk5s2X7AY4yRoV",
  "key27": "3qrm3DgJAtamjyuxjbJpNZMgUYuTtZRRiTXqvXkPqmrPBpM1y3KMMNEdcLXyFYC5ZJRyAXjRgJ2vRVo7HjDEMqXc",
  "key28": "46KeE3CWxFtThhLk5UDsBzNChNzuSQVX1djcTq6bv3J3fGY8vXP6pNG1WBepup42tEfC5F2iGbEGYXwC7QgXJjAD",
  "key29": "2BdZ5tR5n41gPpWPf1RjqVS9dYq4sAAnVYgTsk2zKfwMpRfqRcuTZWDaWZoH3GscM3VfCBYiUMfAkd3Q55Sjb1aB",
  "key30": "5FJ3kZJXqmiikZ6xe8Gi1xcgVTBcTzSdbjM4cYTHmfWhjy36i46jHyetrisi7ebhoancvXNVWvHddkypLFrkKs6j",
  "key31": "5UxEU86sc15QNWYG47Yr9kx1Sjrzsx3b9erJH9WA6cn3s55XtHLiA9LFji3jgQHcHuneHAbvP1wAH4L7Gsdd6W9",
  "key32": "4Ay4HxmeUiSnWQmEbi3wjqzeEdkdkr7vNEo2vdF2bnLfZk7GiGfPo97dGxFA9BcHbdhBv8VKUt6oTb1hEJpMiiBq",
  "key33": "3ZMBybt7pu3u8dsD4BkjotoDCoQqNAtm9BpfAvX2FespaX4ksZbLyXRWyrC5wDBKaLi3hCByw2FL5jPuwwcsN8dq"
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
