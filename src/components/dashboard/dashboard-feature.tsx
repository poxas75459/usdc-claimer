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
    "2VGhtXTmqPzr3XjfSDVXFgx7STGJWSEtpgEpjABK8n43Lfbqp8qLSQBVS5E6nvraUg4cZqav2K1Qe1gznw5QLd1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fr3FwP2araX4qLCY4D9AcWnK9eYBerQ1vW5wmnanQi6zDyHn8usx5YB3C7GyuBRbq5FBCdqG8tQwwgDxkfvJmpn",
  "key1": "33secqUGEnAiYfY4XQ6Hd19VJRBNhfwZga9LxHeyUCZKhKPw3gcGWe5atQwbxNwPCwEkyLMgum1p3a9AzkzwkyTr",
  "key2": "a7Qbyf7wYhS5opKELtnw17aDSwjjwpbgnureheWmhowy1F4ZweeTFYh51wsN43XL1M5RjBxXjgoT3KTpEKhLE9q",
  "key3": "5hSpMz9GjwYyZ1hkqeP1N7wXE5oR8JHSCbpNNsPtXkjSVAwymRYbp9NQJxiBzgFD5aKWHACWPpJnRiev3p7nwNRD",
  "key4": "9wNr6QkTo5pcuv7Ljfnku3bqktCBjf8V4S9t57vJvKYY5v9vLrSd3ZEm2dMK4j1rHvR7c3q7VSVG2es4JTP2rzx",
  "key5": "4WLgLJTfRTs4EftwDpe2hUnbK7fxTBbCMDbKwG2xTFXm35T14xMSgqd3riRN3BMB1cGZuCUH2sHZc4CsJjrDhb52",
  "key6": "2oppbjiLYGgmYKYuxgzkbaEDSjhLR1uzPKhKj87gxPoXVFV5H2Javk1CoSsgTpyJYnYbJS9vTynEq5DfJkiYtRtK",
  "key7": "5QX6VAYuipJvgt6tq1Gb6XsEcg9Hk8FuFBUsJHNt64b21SteHFCKJLSaMJDdArPqb1CFpFeQocwnn4QYEnkAtuj7",
  "key8": "43nCirV17DGVHvEdK1mDjEUELi5pStraLjFSAKG3n67tJaCEwJdXLbCXiXPjDPzqoQS6PFrGtEPDwr6KL619Xc4a",
  "key9": "xxLL1jF7QvFTRAatneqE8Va74jM2Bygwy3gW8km3dLYXmiWhiQweSeriVGhfogT7guTsjDLkjjMV1Bfinh12oL7",
  "key10": "5BLUHfw4ZCrPtfYaRM76R1UVhKSfbZ8o6GVEdWxqF8cZbuGschjdNS58FRfj8NJM1Qnn7fRTBAeGB62LruJatJfJ",
  "key11": "QpvmsYTF66SWNvVxR3tkEgSgtaMDr5rs653byiDzVD7wGKHfZBJG3HNVA7nr8TEeJvA6vVXfDkKhyfdV9DYgUJ6",
  "key12": "d5ZJ3MSCKQFMeX4cKKcCNmwNdKE7qwxm8URSgXiYGZyoCgXFgAaJCK5tbwhpfgLvtnafiFBzUhLgHEuGzSNdg5w",
  "key13": "Uo4KFJa92kEksHPBFjDasDnFgMkik1mF6YiJB3iAu1RhD2n1A5WSngBjjYtAaGMnSfv13hpnfN9oRfRohw2zABT",
  "key14": "2bBMBZRsmS498x5fzatYVTF7DECe1aWWRCKAakmkmv1qG8pDQNzjF6Bv1bEwYLYrzL19CTGwuQRSDFUhHKMUKEtE",
  "key15": "4TD5PjWH9NzKK3TAyBLZUK8Uva2TbQASteCzVqsagfyxMZk3fpKRCh8Xjz8LfssWNVBFrCiSAQACEpN2Te3gRkXY",
  "key16": "4VKjGLPipJHYyVAwT4JSVhqNhbtdQ9jd45b4yD3uSABQFwnwPwtd3TzJhU8tLPiLSDReS9Lb1z3o2qSgKFrQ9cUf",
  "key17": "5SGpRigRxDYSh4pzXdrLUwyNt7r2FzDT2mBBGfzkinBDcsrCUsnNoSum6HaCYe8j54gByTSCsGvJJzQ4RzVyZtP1",
  "key18": "UiBjGyp89Qo5FPuuABAb4gL542NLvdBxnJ3ibe2nPezHwsr4d3jz6udmovLN1R4zV7rm73GGkv1dyBZVJyg515z",
  "key19": "5dYuYuRWBRWoNoYnAeFWGdewL5ZvYgUD6Pi3t6ebWuHDuxz1YRyC3jJxTKqm4KeQXd4bEh7qRCScUoggU9hxYU7T",
  "key20": "4PdDSPeoLXeGTz3X2Xg5QgC6Qz8DCjHgRoSwUU6P4LbiqCg5wSQmSKAmkwoaSLeqoruZ4qjrU2qcfpPkDa7VHipt",
  "key21": "3Q3rcuXARCNN3RAbyYBBKJKHncioZ7AyzhyLvthG6dkkQgsZRRXuRJEUUmuywnsoeMHZ7zBNM4c5M8QzZvMwcta6",
  "key22": "xtggPvVunf2RYQjUXpybkqvV8XrTs6MkpbWuzMBMjKQ3woCHnQPr6uoRQ2KfMmMksoNew3a5SAMmuQvRLRyQSSn",
  "key23": "3i4kqDAXaXy9ru3dtJfKufCsJGq88Ufd5mX1ZpTeyHhAKJgMjTotWTtLmtZCiZRnMdk3grHJCuRFVYe7RzuAKZEm",
  "key24": "3k4XGRcSiCEXrsvnYF9h9cV3kBAo9tub4SW3CtFBj7cQJtGpipmQcCZC93qkQY5ypy5gTGWSnqCG9pQfPLKvkeMx",
  "key25": "ED9c9DJd8KDH9HK4pzHbLqvNubWACE9izJba8VHt4v1xfNnjGPuS4JkdVs1hLNtAw1Ez9cJ5nxS9ebzZpDdCE8m",
  "key26": "1CohsxL5Lx3r37pm8G4uFfnWkoYA9uLV7bju1iiZNvG7M1Gu7Rq5EwQVsKpyGUacPrUmv7TbaY31X6DJoAE8X8Q",
  "key27": "2mbpLCBX1Qkg2QZJ7SqftgaaPj8m8aEWT3tbKkVDKAZu3knGMN58HiXeSyVfW4Qxbd763hSaFFCq6xUpPtoDhWri",
  "key28": "2DS7oS5EuakXEBnkU4TaPBUGtBJEzBhsLn3Kp3nAc6dkc4W86xuHrpVKCvAZmMp6isXyXE5bit1vTefM8EpnBoUW",
  "key29": "4R5GjsULaKipr2BQ139SgKreMuGbLcSVNQj8kQ3d57SVTFD5hbweUYWQSA1rnGvqxdkuNBisRKcFWpajVT1wcTCf",
  "key30": "454LQQukQ9RzdTVHuSWWEui1JyDF5MiCcNiJbuFVWPUh7owbHqanQpnqVHVK9xoLGYkeYc6DGBLw7Ff9rZiLvMp9",
  "key31": "b16n5oVfbutbzFssNfJqwR3RSeNpP87rouMxgnroEyf4Q1K8eyPst5LaCkdh55kSrBjZuS2a8pVYvv2ny1rN3td",
  "key32": "3Tt2e2dUYggaAfbwYSSDvTZhLehNA6R898CjBsmxjerX4RCe9z6EeaXJ2p2zESk8T5yRBjcu5YTYTfitDinDnMFY",
  "key33": "41DmjjrS3cA2o2c1ExGNCewx2hauDhat6Q7Y9YPt5HG9nm28UrBRQbkPvJnvSrpWHuKjYuph7kkP5sFEiU3cF4Ng",
  "key34": "5TEK6FGH2Esv3Zsipq2tDcsGghh62N6geyzYpNgUETjVGgDYr3CfhEidd81q6CKKNLyDhFVcMHRjQ5kP4Ar1qRGa",
  "key35": "52vu3M2DwzYKXgXyXYQpcHoso6iYSqbwDPHZPfLagsBhxbZuGS4najs9dN8p1Bqr4kptYmKb3UKMmooy88vgXu3U",
  "key36": "4rNRftcyt576g4WnxUJWt8E1ENXua3qj1oYE9gYaNafWyziqzpKdDCJtrCg1Jbyzs9gDj5kibakKDF7muxnesFNf",
  "key37": "31GkkvG9XRfhbJkayXsUTLtDzwdYc58FLdn85uRkFnbwii2zChfRSvRi6ccxEpwfA78EsjD3T2oXYHCD2EFuEwzD",
  "key38": "2vTpqNAYLjibAhXPEzoo88nX1oburNtbPdNoLi4dHZ3NPrEK9KZbmEz8ZQhfrRMUJLnV49wADDYKMKyLmfpCJBAp",
  "key39": "4ZT3qHZa4nfXUhZGPPK2DQsPpc7dbNCJTgarSt6x6JdAU4hA8bT5BLvzzSVfm4HwfsNUizAmN8UEMvHsP88LKhon",
  "key40": "5Ngaf2DVSLw25BFFTs6QbdNwKi8adcnTY7MUch2HjQE7Lqqwds5b9BQPepRJYzm6mukXaZHWVcQmFeCzWjvWRWQE",
  "key41": "Qhuv81EfGh4ytj6N8HkrT6uM3A4bzmbweKPgUDoFsJW2fAAxm2yzrefnGABVVvcts4wZY1v6PuEDPJ3j8nLwu7t",
  "key42": "ybtZHMdfm6M6cxBUcrNsze6fpT3FfXa6xR5HvquqgP5Jp2zrR4jGRMkvLoYfWLzQqnp3X79AhzjT1LajJ4T1Zqc",
  "key43": "5zh8JWnqG3DGsdCnQU5PPR8mYKCDYFL6Mhvnzz7zppcZz96uV2wP4v5MMLzMYrmmZGBVX7hsGSsvk8MjNHJxPXbR",
  "key44": "4Q8dSv7unhQGPzMYM2rqS493HHLwdnFV3Lf1f1hFo2X9sUNxhdVe1AEWQY1qS3qjbyJP4YQffyumrHpFxYZDArhS"
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
