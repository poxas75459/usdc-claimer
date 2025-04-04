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
    "2ZSrkDpduHzcE2wWjuPzgw72kHYrujMNzmWLGQYizi3x48zCoQ4ESaEQTLkPVdFPxorpkTzn6zZbKsLWNyQEYxSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgDpBg3pTWesmfwyaTMwGo6qNJAys8KEfjj2jkDWLRQwiNFGSxWxn9yC7LiBKd9QJMYJocPY7BHBXa9H8HTQWgW",
  "key1": "2xUcFTjcAoXnYFZndpvQ5VDc4USQKyM2MVFTerfjgoyGet1kDhQRPyZmLEyczTGeDacEjGc6viAvKtz4vgEwnt76",
  "key2": "hreBMU5gqgWhHaHc5PtaMCMjK7WQka3GqXW2xJ67L4yT3Buq41ree5v5dMCYjTp1UnXXwHFhE7cTAdmXbfmUt9d",
  "key3": "3qTwrFh59ZrcGgcS9ije4n4GH9FAGxgyUShy3Vu9NA63DJ2tJdjpvtsdzxxvgTuHUox9AEVfvoH3iZADuoQS5ifi",
  "key4": "44ZeKSAHevKhEQZYVdzSfpKBgY9WR7J1KKAkBjwvWCLKMEYSNeVqph2hqFgds6PLZivoeweVqkPqejVJSj9GYKqh",
  "key5": "3rmAjQCi77QPWmbsBhD8hZmDaats7fVkRtKm6oWRmQWVoVgcWm7UkXzJsb671movkc2jB53BFuyCNbsQajGanPa6",
  "key6": "3GCBmG7MzADThcrKvSTwPLMr4YWtZwtPMcyp9tpkzLSESgm9scfpmxMxLD8hTDK3jo2fz6k8DWAPaoAmYixwU1Ks",
  "key7": "44DtVpY5prnNr4PPSHmYNQjDpah7EeQRviqE9XN8icCYRbk4NmSpe2vagzbGik9cCSxgpUeTDu9GJFxrDZHAyChi",
  "key8": "2i39dzzbxVyebVS3VQcQQv3ttgFHf51jXVekMNSmHQG8SK857nqNatF5L5zkedsWQiwz4sBMAkywnc8MvEWdah7L",
  "key9": "5FoyvHZRRzf7KZPEtThMTtbfn38tvRC1QMkd4xb3Vn3ny5eaB8uqB2iuu5VkgSXeYgyNxmxvc8yZFrWYFyN62t4U",
  "key10": "4duswj4YCpV4tona7ZtabDNTDaUg1DhNZQHvDnunu7F3q62TEM2GPRVSqaY43mnu8df4pB4GTxiBdqdPdwvtNCE",
  "key11": "52FveLZnPb3NARA9F8oWerbTHAx52PJibjyhDSdJ3szUwRzuWSiG6JWpxSL2MKXdXkxucag3N9mEze2BPR4aduJT",
  "key12": "FoaumjNRaf2GFKdWvwJsY8VWFBvYrThaTNTWqQGpRDSVTLUJtJMJhaLsvAVWKzmzgcwXAYmAkf16sHbdZcBpuDJ",
  "key13": "27PfpgJuGhZU1Lf9Ye9VjUnAi3k79njFdMv7mumo7EGMjahr8TdcY2gW268qt1BKc9tAe69hBoVz7PnHTRrr9Xc4",
  "key14": "5aP4Kec7z41xzC3Hw3p5xaZy4R98gK1k5Sx1QVHpK7tdLJmtmDVMYmozUaiXCViRHncjHQEduefLCmjdUAtYXrDX",
  "key15": "5vhH3HsXebBr8qZFGAHeHSHK5jKFgbvAcrtGmt1yVtp5qjvpD7AnZdcjT1PCVaxsumVNUidDfGmj7VpNUn9vKEyf",
  "key16": "5UtQ8NHC6NpJkaMEWVfhet8kDpSTvyTVLJNSRxA2VippFmL8dz3k5RgkgVpAoirX28TkbQxjTn9eqnCuMzsb6nYD",
  "key17": "3bWWZpvGhVVVsiXx8c5oyASftduHEgGHaFNHFSGspM2EJySgUAtJBds9Xjvehvk6uHETY8yrAo9hhpkut8tEUgaZ",
  "key18": "639Xg6VvWK5HPCooVKWWuPgDoozyhPrBH3oeZrw7ThbLsHgStKQYjDtpui8vtRJuNAY7vXJ3WP2gTYapoSPc8kpe",
  "key19": "4TMgQY9sFP9ixGLYgEwGLuxMjnn54N1ko7p4fq64E93PbuRoeaPs3HnYbcXZt9AiN27uSnvStgjF3LXxFcPYjJTz",
  "key20": "3pYZvsy5iqp6TfYjDNJReiQRKBRzs1M86RhjKYjbiQcd8jwbkBqGx5vnSvP74PBiBEjPFvyzmwVWhofJHvvvsXV4",
  "key21": "2mwy4UEW1Rpjt62tdt1V5wzwhq55VSjqCbQLKd3ge5c8sigQc4Udjs4Mz1WN8F1KJcTomd4rLLQBg9joCm3e71C9",
  "key22": "3DCP5MvadtPXdZj73nqNXnwmN9XGMrmfo8cVicza6KfsUytRSxhTJRGsdFqiGHSkhN7ZVLuxLvD4K3kQ8Ftxw8ps",
  "key23": "2HaQMvY38VN4xCJK5w1b32bRCtdpRfbDrtEvd8oSUnY5kvEnYdpcKHzjbgZZZjsbxjWaZZY7cY3EuTqHqK6vN6Ua",
  "key24": "3uw1choz8SaLbJhvLMGd2wh9dMPyY9KnsfjcSxt1VcJgXeMUDi66vXkzBMwFn7iCRXM2yFa7FD4VF8GksyDzLtZu",
  "key25": "r56jC1LxB7A6JogLpjDaFU6wBJJWyAFALy3GbBLvg5nK5ZpkWZiMnb2eDwF2EKWPuif9rFYhpoMUbG1vMqYTdNx",
  "key26": "5d34dB7xN2ohVfCm2Tv8J3qod8xBDXgGMvP6EtG71ceaqDQpKwTT8zbe1qTXqdJ9Nk8wRTHXhF8umevvDSgXWHWA",
  "key27": "3F45AyJyYHKhHhcjsCgiBLwDwTxfJXgAbdGaH59tYFrivVtuti4Lj1SrhMFxVJQiMYNVhAskjXMMRXP9VzKjmDWS",
  "key28": "4aRwHoxN91vEnxRDLvrHW9aW6q7hn7jWYxy1s3XD6t95K6uQKX2SGapKRBUKy2AvuXa9sabPvjTawkLVp3viL4on",
  "key29": "5jdcri1caT99EsAP3tmc42byxAcPuMmMuXTiRdw7CimaJNNx7QyiX84Y3PAxyVpspckq5DKFbCUpPhJH5BYHvzBN",
  "key30": "4g6FN4vrta6CPkZnzTkNwFrrB8EPVq7QaE8iNpcvfMiNaXcmtbe19ThQUo4gRdVTeDLXLAMRd9SWhTWsmdunE9u7",
  "key31": "5usw7TDn9BHQwnhWSeidzcNNeaCu2PHtwMJRZjHShouFTfWQNPNgZ3JdujkwxtrKpNiV28RYnZenU4cSqzQQ2dWb",
  "key32": "64NwijWDZmaKUrPka6CBxnWjVd6v3AQng5ZMo84LRxB6KaNmzCDNzFFt8Fz7zf6FspEtZ1cjJT7b9Ln75WSG2yP6",
  "key33": "4Lk8cijh9VzGSXKqrxTmQfc1X2Fe7Gm2yJG8hwj8dtj7FwEGQqjAGJUgcAUtiXFRPAEnjd5LUiVxjLXQrgjN2WLZ",
  "key34": "CZCrMgg8cA3UGHEAT9DsPf3PYgv4gXn8kWwqySwQx1VuykX49bE6dti2ugKx5BiVgPxtGTMtE5QgKrzAfvoGQgW",
  "key35": "5EUShF56sH4ZimqsHsTcNcgdPTqoNxGiFTAsR6QJ7osbXPMmtz2QiVSpVHPREvcoHa37n6kjgmkSCDT9cJG4SgeS",
  "key36": "4d3iJ8tEkRiJJR6zY1v9bGjWBDSpUr9DTF3A5A2PLHnPyEWUb2mTY6LgAUqpHoQxCeK4jfNSP9fbVWfBqAWc7kfA",
  "key37": "5qkF2DLrMN15hDioeWnj7zfwmW27WJq3BQRLZ6noCckSERRAYvCHi8aiW5evxqFjJ6WRDVtaVo56UE2cZYs7xeQi",
  "key38": "2Npwp8EZdrM7rPkgJvQHj9Wk4TDtYfXHNCMH3waKsrG59joJ2k4PNhvoYenDUe5GALHoEE8v3PEgFVQVHU9sWDbF",
  "key39": "4N9Hweo6WD1NzpGiY8yHvqgSCZv68AMzCrShQKzhjRwi3PX1v4YhnmjYcTDfuvtbFUe34zxDhS5S6QfiFwkdBLhp",
  "key40": "4pQgrQSKQVNPmeZbjTHcf7ppRmTaM9JFTuqHA5rHYNria2LkmPZvp5arBardHFrufMfPRFsoa5Y3Sm8ejMw26HAb",
  "key41": "3AHzMHpqhpy8mGPAFggZPEiRFXFt32pxtzSVoMNycP2w2bF8zaMo5MLquJvYUy6gAmZoX8xUPTNMN6QugdCCKEew",
  "key42": "5TYY5WxK8f15jgA5oeTP7L2kio4BB4S8Jj1oAueGQo2TdCEE7n35Ba63N8iEiT3wMe5mzKgh8vgEizPtNf7Mcdf8",
  "key43": "44dCpAvBemCgsXcvonSRAh1DFveRgm8Tfi1MhkyRUC745sDvt4FHsism2BgzgqRARDBEa5mksufNpV6qmnhfa9hJ",
  "key44": "3FXJMtNAZv96eqn8mrcb6trixXjSh1XoqiTVXE76egqstknMj5E82VYwyte5uhkQJw6KkJ1FKiAzm8tSoz8cT3Mu",
  "key45": "295T9u231CDR982Ld8yQ3qWgobB4cLjG2C1EwrgV53kxRETKZWcyfj5gq2NXuacVYycUYk4GjqmJkjfG1sohikqt",
  "key46": "5mpgNGUwy9gTcFnJ5MDbdB4F4WBrYwbAQYYQLAGqJsDjeAmqqosaqjwmQa5Z9GPFRkr4JfZ81fQCeSsRo6Qq82CE"
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
