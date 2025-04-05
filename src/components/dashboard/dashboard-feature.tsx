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
    "4iAh3n7StbcSqQERodLCdYtDSQRDRh52KWTQsYhgMvXoUPPG89WPmfKY8Ae8BR5YLehudhTnqXS1pwFawBaNxjVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jXMnXTVvuPhuygCUwNqVyQjZyiL7biBStc6KKa7cXSN5iU5WJb4xssTkMY6TYQmBvPPW4isMVZLNLs91zYoBns",
  "key1": "b3uaiuoM6tnnLA8b4ecSi7yX3dtnD9uk3xodNsX79VACgLcNp7K6SN7iLS83DzpeWQrQDjbH8P1umC1JLoQxPz5",
  "key2": "4SASJMBYzbjJ3bCmzcvA2PDpGcXNKWUx6ovEuUhRmE1JGr57J5EU47jhQLwJeKxcom3NR2WaVNN85haLd4bQPSex",
  "key3": "3UrQFEyp9RGtMWpmRowDgQRfbxV7we9T6NvzHndZZGPGcVHSeqbLvLLmXn9B7boQkSW1ij9NcY9QHoVEucAWdA9J",
  "key4": "k2T6nYCUJSWjKXcS378kxLTEMd1U5pZ76MCMrvuxumD9BwwMqzZAHjE16RpJ4BGDtKce7PwvgFRgdLCM7C6WrRK",
  "key5": "iW7PGcjuQ4yeMrxczjXxwdYJbwUSsigQVKAaS46LF6x94H3ioqnNadrSamHP1ANnSnqiV4Q9sJAg3d6AHmyew8p",
  "key6": "57yVXPLzd7URKdmG5jBwujJ4fqUByruXPiQKZEfAaXd51YPokVjUEimYkiGVwcZuNZc5m9pFr37kNiXYBJGzUVzb",
  "key7": "5zW2HxqypUoaKgwUiCYEYL4oPVGdRTHwFokBNu1SAGsMi1T8QXvkioydDgcdPQWJrj3wF2WDp7cX1VdiLdg7VrTU",
  "key8": "2QMQtjWZpHxsZCZX24CDK5vmpbpdo2m1NA3c6jZMavyvqRczKhqgjQXHwDfS6MNpYoSmmWCvjeGCnjEjSehjEpSZ",
  "key9": "4er4r2a4B8iHn6QTBuiTmqDAkgkcksnFVuGjmDMQrpXJmymuezwPr9VfGtSwxXWouAgqdEPAzDZ8jXBF1xP61qVc",
  "key10": "3cxvZCqAi2M9s19tqfA5dWQx9q3iP4CixqXMmTPk2yuVcvzdwDEVK3BSHzpzdDSZfM4xtmYBVicV2wTbiTzxJMfL",
  "key11": "4mLXvbEx3Z2Ffd2wNAKFWipSxwXPmueHx2KodjTYwEuyJj4iCsGucvj2HkVFJDAad3DhpHFHXu8FP2kK27PSD1Dp",
  "key12": "59XiJKFYvSJfHdwFtrt3tpnc2a2fW5TBu4ZEWXSv6xE6W7GKL9Y6u2AaEp1Bq7352yfveGhNPgepNLAHmT98E9Bf",
  "key13": "56ZmixQqSdoYZkLFV9ddgUKwoKQyFmYUt7ihA16HjtSMiYhSrsbH9B25ak3RVqMTpvoPueikHGoTAUfvTFD76mBh",
  "key14": "4sMWw6uQinkLW35cAEp69gvadFE5eGb5QKsgWWVQFqfnKi29PEzFAyvwupESnHQtG3YNhcUBr7FyGFgktrfhjf4w",
  "key15": "45Lp2QDCpqWXzToAFiRxfXgM822GX8Cnkd8aFjaRACB77tufJFNAXs2XJzV6vV8CzkrZ8DrMWx5SjTtZNkAQMsBh",
  "key16": "48Miwtz7i28DEdZUcaV45nJo2zMvEBm5TPNZjbUjgCrtz6KAsf2SoBmyUtCdnhuLSXqbN8A4QUUCDALG42KL9Uig",
  "key17": "435EETmyEjBudMkRUDF3AhCv7p2EhgmrBKg3cSoLGkMTEc89ZV8Xgmp3tCni4cRUfHD7g3TVvU32Cnqq9hgZA9hh",
  "key18": "LnMftYUKxb7oFZ64QwWfpaxAMx2Y9aqPukxD3KUMn2NSXoTmzKZ98f5btdjhQtj1ySocvKyBN3MXU2JkcNgqgZx",
  "key19": "28Ks72YZqmReEPAesDu5TZQhE9cBJ5zD53unZausgHZzATSLjfATUhxaPRHNuv8U8epjP5yinRjwWbhJGtGvNg5Q",
  "key20": "2B9sanxpE8B3yYURZZrxE5TNeeD72DWZsNQt1TW3L8Cew6fnLZr49aKNzKjSGbnJDhqFfz2km1R1Vx5e5gxsBbQK",
  "key21": "3hKek8i2CnRZvC8N9FwF3c6UGR4qyENqWQjCRqQ2LpSkSXy5ghJEV7VWQeDc34AkNJLbBi9MzGgoB7mqd8cMHooB",
  "key22": "47i7BLr1ipbckCstFLgrVdsoUs2UJYEwAmftBxjWoWNj3jofbb4kQKG8TjfpWyJNL8ZM29vyWNsgkrdEei9fAbQd",
  "key23": "2YF6eajCov3x2adyYgA17CWcBRjkvxVLeUChKjFr4QUX8NH1BLhMapEJSnCqDqPUtGrVCYXNN5X1AVCVPnKnpsnw",
  "key24": "5tC7nmSQu4aTxzqjYLEritrqp1knsxRuBRxvc1QepAWqPPPrLoNPZ16rVNFzaph5wQqQZtn6JV9mJhPRtQxY4Sd7",
  "key25": "5aLKgEShM4bGtXtxuLTz4vkmPGwwTcGbW6iJ6QkF9VuK4o3dB4g3SYKuMUdfNAWNCdghtXuBzeSiAayYodQsToo4",
  "key26": "4nfBJ18zvjU94f9pDtSBejwf4HVxuKrdefCaprgfJdUNhtECXejZTXuPFyrqhPfAZLFcpLsbpACgtHAsLa5ECsy7",
  "key27": "CbrCG1jwjP8caon5ETCPs28bDafkPLDgwd54ozHjn1VhDt9VUDSvuiUtpu6ikVyyTXEA9WvhftyqchTFEq4e9MW",
  "key28": "tec5A3ZFApE8VE5sW4ZPDMj4FRywif1FrgudBFzEvNXVUHfBMeTt5KqpWLDD3t2JWtGy6z77AyyHUiVaNqsfv8h",
  "key29": "5Zt6GFnvuLS5c7ZNu63njaAUVUzKTxH13m2KegoUZ2Q4QpWe7RNWcwwCENraaLNFJH6EUge8sWS2RsDhBabsnBAD",
  "key30": "foZ338X5PihmBkKybp4fL87icwKrddVa2GF5CSpuMhf2KnikFvuD461AVmkzYLAa2korzhMjz5CjfPPLpBPqg35",
  "key31": "2zVgkc1ZCJVdwTdRud99UTHB8XTYf4GWNkH9m2vL13EFV9LQDm9hgiFvHsBdSYRAGxQW8qLzoNyyxMugjWTAHdLb",
  "key32": "3H1yNfM3RDzuDJt5ddDoECwPmYLn6tUyEeKyFWMhSUacMPNa3pcrhAEbDugGAFUBf1HiLk3HAsGyffwxoiJZGa9M",
  "key33": "3XNMVQuY1MrAzJX7dFgHjcXhvBGF33co9sfMUYaSGP3AZZ9RBuarvnCwfFmZsymc9TDdzgTLyh7zKdduTSLSfFX9",
  "key34": "5NwGRwAan7RbWdo7J3bTkUYenYcA7FAASrbkvYWJ24SBV5HHKerAYF7zTjBidD6vqKvx9SfKVo5ErEmKEy2WjWKA",
  "key35": "CD1xMX3VNqJMshFG7nWsXn3s1rWGWhuHYf2TURQAZyDvkTXXjMuJhfwfGNK7QxWUE5NdrKGfhtCTop73tUf5rm4",
  "key36": "3xLbvGbkrC1s16VuyT41tMsYTQFWQBy8CW7eZNpWUV4jU8beaqqkGjMgHMs3GSSb3fHaPJZgRzwbhzRMWhRNDkds",
  "key37": "4bzHcP1zH8VpkRSWXu4iuGFsZVdj5VuvyDYNtgd5kUXf6pxve95rowiMj9tjA2MpB6JNaaYqNZ2rp8YVNp1NNi4g",
  "key38": "4ByfhNwCHXcyXj3FwkyY5cUfAHQUmPPNFtB4WugxfU9kxYRShd2MNvs6gD1TKGiYCJXepFAHMsDv2JfQYsgh62vT",
  "key39": "5DfuHWE5kWfmgFkKVb4LtdrgGD4KeHWgh9yKaNq56yPHdiosxYnpu6upfjCPtNQBUvEvVareSDuQwhQfDfSpg51t"
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
