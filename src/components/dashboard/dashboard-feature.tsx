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
    "4ELmtrsxkBNhbh2EQsQQxH3NHj5MSKryGBf6pUSmdrFv7SaAzXMzaBqeBax8cveVXhzQ37CbWHun6Ew4j3RW3M56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFTE9Vi9xbBJoCboiUsJcqp2NLy3Ms1Hf2WBG7C5AkLzwCz3Hc6dgY2R9udEXiEL2sFPjgsDkSasa3uED9hF3PZ",
  "key1": "5Pq1HfMU1AdYWmYYcr3VLFPJz2TSPS5B3q3M3KMN11976QvzammNQd6U1deAeisVPjXNCyJuJVtMaer6CUFELQwC",
  "key2": "5EUwnqZAR7B8ahSUA1VkjVqonAUZ7gnoHyHCBwjoQxJYKZ3XfaUqs2LmvM1voAcVUiMszreUKF27Tt5XYrCvoRPP",
  "key3": "kukaARdi67LpqPp7vCEjNSJgZ85bQTHfuntxkUwncx513J8BY3WJTh1QjFm1KohGzRZ6FpPaRgN7b2h2P4YQUYM",
  "key4": "4A6H5r4cMnDzXbo3kvytvvnshwAjL9PCsXLAfSKdS6QDndBX1PGFW66bvsiFeRwD4Xo273qvYXAB4JD61VhnvjUJ",
  "key5": "phLozps157nR4xPsgGrh2H6QcER1mAhx4q3zw3uY1YkXJfsdtY2pLzxaAzjRXaZkAt8WK4zUWWY7YwG5F7acACG",
  "key6": "5VqFWP31MzXr7HLcnKV7ZdAkwXzXrVWWmgShWX8Fncjrpz87LzLW1nJtbdjM7x8u6mJQv1C8xNDzxQ9vpHRJ7WzZ",
  "key7": "2FTyCSjfMZ95etPR1F8RHmFnHV4kuYBLAih4SUsRuvAZm6j38hR8VVgiKGYyrActVjJ1JWAoMTPZSFc22GgCJdVT",
  "key8": "3e5FfEuGM8MuHNBc79m1BeXf82mNpJ2E62XvHy1KSgYz8Do3GeaGpsKEfnhaBcmasfy6WEmiQatbKVRUxaqzcSts",
  "key9": "5Nn9miMN9GYP4q6E3CfWXJBbySdr7zQsJpzmZoHEw3b7ybXy3YcEcBLPgxTUpueXZoYKHVNN5aMsdBskaTZe1FZ1",
  "key10": "BtvtCj4osLZj293pqbEFyVw2iPeR3k1C5TNzvzSiVuWnUnDpttF4Ynz2Xr1ZrXeyFbt3CnLxGkw7hkbj9kVMzoE",
  "key11": "d1653MiyA96dTHSWo8k4eRypUxtyymW3HMGhK9owoPzPNR1cwjSTbHzDFqY7eETwUBKqaajxjfDYXtG6AAnax6a",
  "key12": "X13X2pUb3ubPGrTRohrEU8Dm2dgzdnhotCouEQm8XExcyDeQGPYPASjhzfiE9zMkKTMUm293ecRkrgdxbDodoqw",
  "key13": "63mEvjwoYoE6WCQ7Q9JCXNQDay97agXa2X4PxoyGVGijqmmXquPf4sdksSD6opJCHpZmBCz1ySHn5yUMSahrHmM",
  "key14": "44dUuJnAW8arKGf1d9bHRQxqfvEcrta53YyLhEM5sabUGwLvnV6jwmsyRaSUiMxaWPqiXrT6ZWUUDxoJdG2GsYFY",
  "key15": "5qMBwEG7m5mR4rfvueSiaeJfqXZgjc5yy1NtkYM9PNY6TR28KVCscg5GWoVVgZmM3i6gwNQvCX96jZsMShoHxrra",
  "key16": "3Q1U5CRi51Q9Wj7hRBbSvBmGKtveDhcKaZXxBb7eaLV7x1drjEUYa8vGUYFiBh1WGx1ywfNySCpMtwC4j4xCz53t",
  "key17": "2RtS2CfhxJrXZUNeEn6Wyxh8MSF5TqkueWj4wuUnjHJjCf9duEok77mK2xApn7u5cwcapygdJqxSDrsnBvhF2TmR",
  "key18": "4C1BV763miTvYXneukp14uAfSBTjEYtkgm2YxELZNDWHjb3FS7qE1c1sWXYfhCxLpTdD93Enm6TBQi2kJhLYE6fn",
  "key19": "2sbdthD7Th8X2e4v9aZNbpzZBBjmJrubjrrWf64Zf7XS9H7eDZPwpfdbpZKvt8qKdwvU45jLrFsydaf8nQYgJRLA",
  "key20": "4A9jRd2Vyk5ey66TuD4cPWEgFi657kQ4B26kmH2Uao2Xk9j6Vw8e8wB7AMvN4RDYdgaBKbuswDFdf5b5QWM9F5Vf",
  "key21": "3Rf68gTYNbKQ5WpxTaZMqnx1b43BHoXFqwUVFNbjiJeVUGCpjuqrsVPrku7NQBEqwNKjMJErekeyfdyKUk7z7y6x",
  "key22": "36qjEwNyZMFwFARPR66zH8h4shhdZ5TtxFnuxhtScRJYPmnjDB2A6nb4G9T3WBrbGojHgc3aYiCaEe4rc5RVCffs",
  "key23": "2K2boBn3R26ATe7szBaLssQ6GP2vCNw3EEAVwQS6CPAmd7ntWrzPQigSv6Fg4k89ULhzZ1v7TT8Ac9cwJn8WPRra",
  "key24": "2WN14DLLFx3mZi4ZPhCehhWYqExmvkVoxRuncUjHERoyD46tnRBvxMzdE4rQEpfMaAwQFbqt7XZVQG3QQWqpqzwf",
  "key25": "632vAw4z6Gc5r6Rz2rAdNMg28Cbofp3x5RoLv54mxNkBq33Qct8cdSZ1rZpoRCdHuXbcUR67xoprWyH6Rjh1Szi8",
  "key26": "DCeqE1PKajymWHFuDfZgqLhUVDXZzweugFhiQabHdKYjjrh8nbDhT7zA1uz358WrADFA57U9L9Yy2NPcRP5uik8",
  "key27": "3x6XPJymn5GmfbG8x29U9M7efjbRFLk5oeakRi59sGX1vMUEG6qR2HPpP5p6HnC4B5Z6tV52XKoKLt8bXcjddRjw",
  "key28": "2qsBFb8YxsJYFvYpVYYh6JcbS4ZCFzbyzzTsM9tckgGTfpSMPvYEkUejHT56ixj4dfgJUPW4rL1oraPdgT7Vn1q3",
  "key29": "JapFusvVatETz4BQwFWEp6b7fAcKfL6Kw7XTsqDZEZiNWMbrahybgKWCKeXXh9vPefEP4NtEcAdwR4iZAZTGWu5",
  "key30": "489xqfcKaKBi5oW4zgjyRvSMjCePzLC2MgnofZ4Y2CJY7GbDLgvvzAFrKFuLyMuywS3VXHyJag84P5xcTmxwRz7Q",
  "key31": "n9s7YmZYaJWuZaVF8LAuS5q1Z1JKXqXi3URwvLdqyaGroajMDjYBCyZwv8kX64oiDBJSWCKD53sGbnaXpCfEqyQ",
  "key32": "5ohZboWyaPF24q7FoauyJmJAjJ4dXdngZPBjhNDAYoQeJZkMxoFT72jw7ehCn7z7SD96aBtPTEWqpanvrWwLHmmJ",
  "key33": "jFH5G2CVkfcPgGqUXCBvBpKc8e9Q67W96sF3a2YcV5CpCvX5XY5H1gnSbdujtm1ojNA6UBwsEULRErgUGnRMKwm",
  "key34": "4oLkqjdk4P6tFKxGhNfimzTeAP71XiBCiHk6Wrq9F8HiCG2EtGy8fGE1Wbfrrd3VwTwB8mMQD4p1d8ybfFdpa2vK",
  "key35": "5ToQ88HoH8ANFih2GtzrgZt3Jcii65zYCaD2vvrUJr9AQNzY1Wz944CptmjpJvoBLDrsXFP7aJHfnYBBvnwbTXfp",
  "key36": "2TcKQUyWLnWbaiqfAX7jPip6tpk4GPAwuGcSRng8ZFgxXztCCYJXbvav6CECiUrFUCpkG48UoCzYis5TWkoDfuFB",
  "key37": "5QCCUKs94U82WqkTrUBY3hpN7coph8928KjhivQQGNuvLJgRDQYmxRjHSuoXjUYxNL8RLCFoo2kcNUZe3fkBABHp",
  "key38": "xuQnJr4oY5D2fSAwtFceUELTLbzpeWb1sbqVqX3kDFYd7oyL2mX3suwFzfXXdewWNiLrBP17bRtgecJG5Xzssnb",
  "key39": "2oPVWAaXxgcQzSDecPhmtrUbgNH1trmLdhrNbgvAtzL8xB1LAb1EwuKD2tg5dyDWzdJz2AdtDbH5VyLTeBmfRbwF",
  "key40": "615k1d8kFMNvAgdxQnrPkDavnhBMHNFEBtvuArSZS175fdQiW9wj7oqLdWT3skwtsuLGhL6FYMKL4XcLrrtgM9HE"
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
