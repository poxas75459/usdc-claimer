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
    "4MA5yTHtcST1zNPrYvevo8w2JrzBrZuCKsigaShEQ35eCfun32JnWvbSPTtZdWg1FcD3M5ymvJ1EXt8HJnnKWMhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rjz3sFddWQqGvAVYPMbzWp5rRrUcMRwwKni56Uj52XJnAES5xyDdUAUer7khxWMD9ZAPJm2AfnhaN5uoRcxa2t3",
  "key1": "5mXcCfEke6uj5hw6WSD28cJt3ww8fHwTxhAfwrEycM5dd5nzABahdSzYdzNNkxQvuKhxSgyWDmv7iUUbwm7yQixv",
  "key2": "fSKhjsj5AUDmhQ29uHELQPsXBpos29b1xRGqheBGVe5u5JAtt6jvGNDWeDxMocpLQLyQrwvDfz7mFq8KcaEGcKy",
  "key3": "2tVsXdoawc1YqWR5Wi3P9LmgMpbqbtxa8LNNyMB3DKVRABCXki8Pf9sCab1pdCtsj3yxgwMJuUpNKLJDktBEqmTV",
  "key4": "519sWxF6sWw7ELCzWd1Anssi3KDnHbwxvv6rckN6qHbK3R7igKPbU86h4zcAM51C2HFDL5kWgDnXHurYe5mm3VyM",
  "key5": "5hcvcmcdf54WpNXgduHssR6hsszRHFfW37JtQhAFV1Dh3fBmmcw1gyQwxJ6nH3PDdj6o6t3dePBo7Yiin6PWpCKB",
  "key6": "5XxGbwG4ShfKy6vXedbS55W4qvkAY5NSprtAhYGE4LTCie3GJ4wCGgPBb8go1u6QbtYN9YDTyy1diu2tcGQqd9dz",
  "key7": "5LkxQHc8KFUxA7Wq2sNoePwTCM3tWNsRL8HGnRF78nTJiDGeZ6Kz6X5U1Mhm3eLE2o2sn5RrNiLtCAhkJ5Xr1sGK",
  "key8": "4mRFKsYsn6r5uBWYEB9uRwxja2YTUDSi4nBdV78GK3b7vF7Ny1XC3ToVadADH56n6JFUEPQFFTLGbtB8f4vnjuwi",
  "key9": "5StPCqifHVK1npHF2TTz2Z9SMiNFCm8AS3byhFNxgfKvNXpwc5mC7yjL5nKjQKW6Ci16jmbB1uRPaKxj79i7YCuN",
  "key10": "LQBUcBkdfPwei2Rgp3NiRN93MDxRyFMXek5HyaTYVYXy59ZZsyzRuscxxHFKyhcNiv3F4tDMcYRPyScQCiSFbRx",
  "key11": "6431pNSzET8DvevyGpyYTMcUV6D5okoPY8TWDG2Fwnz2446uD6EnoWNuv6ddGWikSh7Nk1QzBFNraQbUT3irSwBH",
  "key12": "64WuDTwHYxVQwfR681FM9kf9uGpkSwVBDqQqoJbgqs3sNdNuDGk6gRCHDeKt97RJ92UC9nwSZV3QBRsjPdMS7qHA",
  "key13": "Qzdvn7EqojoYiERANwknrXhCT98YpEft55pLpePb1xC5z5xoSPixEk9dqkfjNqZqPdRnaL3dR4R4XYajs27uZa3",
  "key14": "3myBBvAxa5zKCb52oWi9dHFKodtVamAQHamt7YQvaFgbyE4rKQo9Nt5MKZKwMWPYFbLYfGHg5SYaqvLUK1qHjRAt",
  "key15": "HFU1fzeEymwjk7Zwgvpg7voy8zj3tYWXzkWqosLvvUWXrYeKMGwuqBZy3GRyEqAVnRQsRqEy6kmfFjspKKDunTB",
  "key16": "QCDk2MoVJK6KvVEgV5sjsVHa1Nnt7bf1toNLviD1R6fw1swvj5Y6RPDe2stjQ9gibRKZ6afSqfstR53j6CK5MFT",
  "key17": "4xegzvKaE3ydrK5v1h9TNTE4SaZUPvy7p7LRVLJSeY7pZxVnqGz2F5Nt5eKBZjhuSoUaL78xq6hdMjts6xgKP378",
  "key18": "omgEEHCmVTGd69A1pjjvgsfmMLZmivu2CRacRBKCiCetxCBYg9DMKNQkCpHc7JZVTipYmYv7hmS83fcE9CoWKxy",
  "key19": "WskHE9bME8Pkzqm7KFs4c5hfdWuy84PP1o7FRipovsL96wtK9ypc4Ck3eAtB1sj819KT2SojvTmYAAXToMxFDXg",
  "key20": "5XB987mwTYfyPdcMAyHx8MqFaHShfpJkTmEUdqMksQN1KJHhqNpuSTsL45v2RTbZAPUGQoVapDajE8HT4adiHm1n",
  "key21": "4ay2yB1aXZZ55bLTWnZFFvaWXwVG7rT6dH2T3qgnxRXkzgLCENymRJAWaQXuKhVFUXWrZ779Vzb6Kfhnkkec1h6b",
  "key22": "3h8LvPtUrPHJhAyvzwdg8BUeybd9ZoPfZYfVHmXavuBiWuKHCgya1zj79wkiBrHQj2zUETvbcYoVSwGCZZUmsb8h",
  "key23": "3YHwhNkSGVE7snDSydF8Eucdzcc2oFqA7hd7F7XsWCVWhZhTwULrm44yuDDCUS6Ap9UntrLY4LNdw7zQCKCCU2g2",
  "key24": "4R9nb1AXfgi9smvHPxDP3adCMCrG3csfxq4Ny3iKxVbDChjngh9kJwDZ6FURNtz8S1HPD9ZLdKUHd7XmiWM4AWaH",
  "key25": "3E5T9zK3hckoifL2SUztgRCW9rxsg8TA2nA9YsuaWnM4zD71TUca7wASuW5gM1ai2xQ4cuWjDDSZXpX5FjczjKr2",
  "key26": "49NiwZrqhRM5ccyK2TZhij8nTSKTUUg9miPzukmg58bJDojmj8YYm65DSKvjUMVCkLconigLf4eDYsgG43vPiFBL",
  "key27": "4Kn4Ym4LSXRk9fwE3SBwWWaVBTQaAq7T4zfHA8caYzubDNcQi7LGeAvuJorSGydpbH1vVeV2qa2txAMe9TUhFpZe",
  "key28": "EK8hDKHJMsEezs8z2KQAQR1E4kW38Szpcvpp2NfEGPkwcqG2DkJxcrxYX6vzbU9xhiSLrb1tgVb22w1VMeQAypa"
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
