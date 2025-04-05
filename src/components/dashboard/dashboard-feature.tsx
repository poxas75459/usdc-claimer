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
    "5JhyxNwgMbbZV1YyogutDRNVNfhUy4zZi4aLnhjFYTy4cVHn5iurLrPdJt2xoXWhTzeE6sWG4TWkj3dM4XdEZavq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDzSQRG3KJ2NSvELhZ7rDumDeb2D8c8pwweGqTgT7MFZ8AUPZJ46XkyxiZJKnc3c6gQmhejfBH8tBZZfnAJTC19",
  "key1": "4iJ3aCZw5BThAuTazj5ZMqfQ5x975aZSdKuJDkFNKZyHFbaAqFaJrKXdYj8R9FzadrR1XugDJxTWmSP112vMvcfh",
  "key2": "2TDoPVLhamTx7avoknCjfzzVrveayZJHNED5Ddti8fbvHcghmDtekM83BJei5jaQssi4aK1vud8eqJbt3ghvGFR3",
  "key3": "5JiQw7kpFV6BargpNeLUxjqMZ8JyGqH6w7Rzfq8HTxreEJmpGwcyxcYqXGfHciuEzYbXEjn56ATnnYirHtBaVm2h",
  "key4": "2CfHRuvVBo7D131b3B84MCWdkDAu7Mo2M8Uxt5x6aFzQ7D6sVey8pLYbKNgUd4Q7JqbCegHdQmbgc3ufWsodL3W",
  "key5": "3J6dHQMJB62y6UuRNoaR7Mw7e2Sticrz89LuS313AbiF1khoH5UHccAr5avCdAeEezjGpapFmxCbT4GGALCfghy2",
  "key6": "2v3K83bzPeu1tNuVc1niNpxh1JyaT5Y2EjxSAV6nWh1xJTJUMdhLDijRh3n9ro7GgZ7pWtnrLFLMZ7Xh6yxymHSp",
  "key7": "4yfHyi8Dj1b7P5fMteLgMTUZdVdWBhyWCTCXiG3umTYBuq7dA4YSW6z1HuUaXVxFvHTuc9DiPb1W4yW12VmCWskE",
  "key8": "29kkcqMvtapE9qkfB2uedkbyHkaSJwsA1JjC34WeVgQ6GRgNoSZNeVLjeaQmBpMWTZaTfMwm6HnxyUtq4iUf39Ec",
  "key9": "58YUDLtXH9JZkWGxoXmTUbSTeyC53c9rDfeWpxr6KbMB9PEeCRNt6m1FBEz5jhmH5oGthQymNVDmngbHkprUcmJC",
  "key10": "5KtDgC6UFrK9us5gqYYLA66F4FBwrN7gSDhP5b1DDASGyFpqbdCsf2wUUEw7uFMMRXagJUUJaFKguJmo1THhUfHT",
  "key11": "366thqcbEzYWRxLAhCJK5r3efpKvUeU4HcwvQk5CPRVWLHQXWhe8uz7p7UGYxYaQzZub7quLPuxxQTojmnYf3jxK",
  "key12": "3jLh6gHvfwngT1XQpPZBGAYMa8bFyUT4QLkcPLe3ePv97RyKWhSySXNbDNirPd3sccEqyKxF2xUoxNapXpVSJgEC",
  "key13": "2qSj7CcyUoqP8XTTuuCbn77297q4r8nbqq9k6Wy2x8CVg3dYxCf2pa78Ua5yqDRFy5b5A1VUA6KKfhn7v7SvYMtj",
  "key14": "3ca7RbthAgYBpVCk9eqkV5LcCu9wmtduhb58aUXaba5tGyJ4ZxJKsWLHvsdnCCrDtwJTfuCStWnCJ8BKZeyHH9SW",
  "key15": "45FeERmUe2TzNyV1gGC237KTs95UmKzqyCXsZc8amhk67TLLgEinRtUWCw6WBzLcDzGSiiqJYYTZUD59qNXF3PPx",
  "key16": "yjyb64WgwjFFK6uAcvK8Rf5hjTFUk6rcbFMV5wtKWQWnwDMAHTFZPtc9qfZREgatr2MwyqocZtPpf33Z7s1ZCmU",
  "key17": "5U12Z8HxqR39KbPXGjnDg38x8XQ4L5xXVB1L3JG1FrbjRZqfCCkLtho3cUerSp5aaBH12GdhFdC48RixKdXKuhpY",
  "key18": "2Vwr5meurZxTAgCEtLupk5mEmZqYWThdLcDyUG4fByefzeEFQpSEXZNbHowJESpX5KW6b8FuYFL62LzBVbUfGk6U",
  "key19": "5AQ1KJFeeanbsyR5Z7dk93Wa9MJkxvHMr4E3MxJpUyoSQQDNwLYLdeKHoeVYDzDCKYjh1tj5vN53KAvZJJue782G",
  "key20": "2qdKmbRFW5pyvHgqDm6ft1pTpsJmpwbTUiRmVigrszUEwA2SpK2DpGsxaGCNEoLVk9SAsPGVcrBKNes8ZBWC8Cpj",
  "key21": "tvXCyQua1XyWDq25D9sNpKVYtK8s2dpU4W9sRwj3AZG7seqj6Y5nDPALVGaMDjkDk3Z6MYSNbZQDHn5Dw5eSwWV",
  "key22": "2XfqWhLYE94Pb9QgCiUQ6txAgyHMfq3BKt74xeoLfuyJnF2nCPGaFvztHZTLBnCNFAk5NWtfK6BgLGxPaueDobqg",
  "key23": "Y446Za3seUrjWxq6LEH4w6x4AKbcN9ceTnSTjwL4npgDHKftXb6HSwqyGK4bmwWj3UFwArphrv8gurrFpvn4m7A",
  "key24": "56QCBM9CVCXsHBGxTc4jhUbHzPn6JbH6QjrRrheYZmGZXXZBQn35V3osNHnSb6igFm3537f9Eo5epTFtkCEEfZnw",
  "key25": "5A1Gg2xkoRCo9iEk1pRAszXxMYCxw19uAsua7RvitLW4sE3Y33g2Egibk5m3SKD3M1NyXyNQzc43WvmQbKnKgLes",
  "key26": "44NmAH6pU6kToSxVtK3pBnufiAZCZjeT4xwxN9ANFFdinJMjEJpoBLeGmPL9WP47ShE2xTaQZWidXyYPDiwm4sHh",
  "key27": "3Hw4KVACkpUYsCVWZ4ihBPsHdhWfwsvCrUYLmeeYsvp9vJ1KPnKxhZ3B8KBM86zLsaPgJuWXLiwbLDrzout9vDSp",
  "key28": "4NzL2bgquy5AiF1fPUWQ1TVAeUf1wkN3UNbackYMB9N7rTyp5TKG6WbZSv1ke5aavH3gMP1pDdVvCiXQUDK1TtyU",
  "key29": "3AMw6v29rJRnPoQ4bka7bU7y8dkfihp7sTo1VTSS3L9HhCv77FTNJ41rhyVGFLw4qJbT57CUya9wrD9m52LACngM",
  "key30": "33z3G1ocdicc2FiAZMf5HWGfrz3r7z6XTkzpFuuitT8XgTN655H7J8jU7UpqTjA3ReXWCb5BDEvb1n5eqDSZoN5f",
  "key31": "E7Db6KLZEGkh6JvW4mj4J1EaVSG4jvhcYZDGvqVb3t1N9RPBJkzcmHdKDaS2duuvvEPYrEosh3mEPXvvAVrHbz9",
  "key32": "32925kJkRnPkjNUkfauFtLkgT9z2iyPESfgYayFKr6u5JPGkqy4TMj9572fz3Hg314K77LRRbZcgwNCEfzoaZzV6",
  "key33": "3wBKatqk5CbyAm3KoPgRKu6uLiUBxHqExJAAs5TaspKh1Jth5xDZd1DYdq9fP8mfMK8cQbxarDtevSdZk3LMLiBW",
  "key34": "2Fd6CqSEz5cmnDAUHs4acszQodLhAYZTAkVHrRcwyLtqRz3zKkYwmRP1oWNcMJDJ6HcZAxyXdZam4KoFAij5VkgL",
  "key35": "5YfKJ6fauHPxHJRo4BMTwGYPmDwggQGgT83PFX1NWEiDXsgxPFWYcZh9ejMyWLdXfurdyUU44tvGxNRQTQWd8cyQ",
  "key36": "4cFjH4wcevZESC7iNWbYj55tgwps7srBi5hQYhXkEEqpkufw3rVVw4nXMcusmS6L1GVNeormTdN94WtBJvtycEc4",
  "key37": "2WWh713Qt8MFUUdHH3BuZcBPpfnH7Pzs8Nh8BdCqkTGSNyc2apovj8Hdox2qMx7Epny6gEmWpJFWR3nVKFVZyZvu",
  "key38": "4h4zTCWUcGAVYQRzG9GjFyk2ZowG2HCZjFEFixjLbEHdstUS6QDUCLm1yxLbpVvT9Vx6rvbWvwZq9qz65TxxPVMg"
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
