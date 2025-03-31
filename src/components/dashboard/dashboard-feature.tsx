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
    "2KuFNdKZr8Ab6wYgPnEe2NfSBUGqFXbd4nFek3A6xpxyXEcY3dNRM1jGhUeWZxv5PvLdYXuAPctM5KBc4Ar18Yzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMV9P8M7o61JXzoTssQ57Y6MuKpfCX9EYYNPU319o7FmTFp2Fmmkm6FcceXpDnbiHo5qpwYBXQ29qsDg9dGQ3CK",
  "key1": "2n17EziGW3qP7V9s4SNdQ2EK821rwWXy9SAbTojXMyfU4xSgrvpKmQ3fYwhELXBHcugG3W4xknZwu7ChbPpSmmop",
  "key2": "5mbwQndma6kt1KwidwnHwczZcMEZKvw9WmEmPpPhysBv26jqRW94F19N8SLiebmFCMbmxCC6nZGnA9T3CVW2MNtm",
  "key3": "2ZsN78SXvPfNJtQyngbFD4W1HZju2HyUP6P82YeYac76GpmGm5XyV74uiWLfSN7XBjW6NoCL4wTSYjCjNpEuDQR2",
  "key4": "539N6yUnUD3UoDYPnNnCkvk3AB1B8ExEj5H8Fhz8429CmJA4oU1EtuShnfk1VMN2acttJTyTqb1Ro54ARr9z7oCr",
  "key5": "47PLN3au6suHXhMqxsx4aQXMy6o8hnkKNh9MjGuoaAsS6X2bSG2GVWFoAYtVuKxGdRNRncDxwqof4C3chLzZpYGK",
  "key6": "4RQvSarNeq4QtG2gAWXRVq7iWbPQqYTm9a7VurDLAe6Gk7f8vdj9WnXwUkCUM6PBXcjM87smRUsqPNdgCvUMggfn",
  "key7": "5Aees12SbtZS6h6PAPcHnWjco8DiLY9pkJ3CKLU5JvJuJYxnRzqKtWrS7b8oTcYn8S2aTcBcvXGXnHdq1cn7MGFc",
  "key8": "22HBas9dpSzxBNGBnBrVrGV4mXnG7M28z8uz2AKFWv1sYT3KqXEVeYQMEbtmzBLZ3Vw6HnzoSwz1HPisGYcnXU2W",
  "key9": "5aTuwxHnrFhXnnF6kmBbonywNz4CmNqGAJzdoG7iogZwFbftmWva7bt28Cy7TaSkmy9oE33aHYhZ6N54JC7xdQkJ",
  "key10": "21e8TYax5ChBGhaVFgmJ8933MJnWnaD5EjfdZaLXp1p868hhpTHV7DSK8ygBj2QctjCrA2GbrAKG338zcFvLdqQ8",
  "key11": "RUUgaD7irRjHL8kKUThtsis9XcYn23D96XvTppHXPk8jceQbPQymZZaAAkoUXipCUw2gXQKqJ2rEMU6uzG48M1p",
  "key12": "4ftegPLDDK7PouSXZL2m5WWTuoEfAo3F3dz7qWAdiAt6Ev3xqz5TY4hk2SqpTJnQWvzXcYpHDrv9GwoZNV5pJGPE",
  "key13": "5gbWjNUGs7PcT357E9JMcBsiHYARif12r9a3Gd4FgK7yur7vS1FAbiemhi3hAuU9BQ3zhuaMrSrr4w15mY7UYKDU",
  "key14": "LRSiaytRBdxed8MRcL9SrALwP9d7m5fiM5iMmESMcRC8kuSKDJypEM5d2MKhh3fD288mXSeb2Cvs4nvXr2t222E",
  "key15": "3JKM2QvVyR9s5vEf3PywXF3FHfeUaCx9cgTEGAfoenNnRHUBmA188QneqbGhAEzqmA4pxJX2qRCjP3mdBB9Z3EhS",
  "key16": "5zAQmHPDCzo7v5SAcEH9qfV9a1zZrh7HJ2AfcGy2tinRAruuUJ2xcqu9HW4Hr1QyHwp36MsXXhf2JUyBT19qSFtf",
  "key17": "3fHXWmALUwAMwCH25HeLHj276Y2rC3EzHjjukPo41mSWaXHfDJY53u9CcgLwEBXSQj8MMshg98xrQSZ3PS2XK2WH",
  "key18": "23ejEeJeRHri3KpYAE5AZht24fUzHSHd7uG8x4CVmrvMrUTFuDYPv74Tx28tHGsXeKWP98NRoPQ5Lw1JqCiRKJ8L",
  "key19": "34ruFnEtrQuuSfJSngQdawAKSqHWZJMu3QzUn7QrQDQhDdKbmsFxprJZE5gaRToDEqnexy5LsNrcj3W2LN4MqpJ1",
  "key20": "5eZTNUEcM84EGFNKCfQa1R3WYSkszdYKouHmerM9BA6FH8jcVtK8UTfGeB8kM7aNUFFcVDNwuusJq32m4xN1Uq9G",
  "key21": "3i8K5icpVHta4iNRKY8Rb8YT2nXgvEd8KjvU6X9tRhV52j6Gy52C1BkWDKzk2K5XoAj2LuKrzF59CpxZhHPaKucK",
  "key22": "5ydjFudWKV7FdyrzbGGRPc8WFc4fNbL1ccWomm1pgUFhz3dceYgsr1Z45pXYEfrtVkdd7QSGwCksJeW3qtYJaWoY",
  "key23": "W4jLogs5kihNhHuqBoFSktBuLdfvaCdMAtvBrqVUBes8aPypMgDhweZoe47jgwmCAfnzK9ab8P6EK7ttKMygL95",
  "key24": "4rgYkGtDYBqKmtPGw4btPo6F6bseWEz2vrW3FiVa4MbiNzQRux7ANNQQov6jrKPqgZCV4k4ZtCcCHG5Y8pw64ThK",
  "key25": "3WY6PPaWwLYvUJJWPZ2VQapFtVd93nJEwKbKktPc196tDdV2qmz7aQSwbVSrV3DDUxThUe9fX4GWud5AceJfrPLL",
  "key26": "2D4mfViR5TehnnX67Exa2mH9EFjYajWm22Me8CUYDAxiwmyY6yynVyV17bVQhbbZRJsoYkNu8cdVyKxuNz74TwEy",
  "key27": "23d3YCyEWqzWGZ6aV3rXXTuo9VGfSoKrcYVgmznczpBefGroKeXBXm8vb8MbHDHBmvU3P9aPQMUxqFDp5RERDfoK",
  "key28": "ETcht5vVxRvFCByiCPfvygGN3UC9YCBRsYc9S1T9swyTVYUXYCNgSsMyLfHT9mEDcK8tYeSBGk68nU5Cc1BXRyL",
  "key29": "3oTbPYXetu96othnbLBTGyruKqUvZsRb64Xr4ibBfYQiDg9vBJb9rPLEKYQsqdefmCKYw5Uzhw6XFAimTNAHuNiU",
  "key30": "3HtAmM7iV3Sm8hUYiZVVekhVMbYn46ADdnF1ZYxoXd4agsBiZQFgy3y1wFBJTW3usqFfGCB7DDoeBZyg6U1eWAKv",
  "key31": "5L8cT4hf163UFQfH2HzAUyM6wRAA5jFnw5BN8Q2nddkRwmDefnqNh9a5HJZchWB6TaXaZ4pBE2EBnhApZ5cdqL4e",
  "key32": "2MaDuMh94mWx4r7k2pZV45GovCDruFQj2VqvmdLauekHYuDZzBEUTjQkbvaEhaoo3ybp6ot5Yt41zFnVKbfeKMcv",
  "key33": "5qvgjAf59nE6DxYodzLJsVxWmdjHuoKxS8d7FZMRscZdKJ8xrbEY21SVuUAvD2PRFsmovoryKMQd3YX9NX8HdMXk",
  "key34": "4Ufv4JXWQXkgFzEFDE5gQPUjhUakN6evw8zdZ89yiouZXBL6x9HCvqf6JZer5DScY2cw4Gv6jpGV3ncCbCQjFpQU",
  "key35": "4XdYWDD4amtv5N3n4tWcPNK8g57QezEAC6wHdHPf7XKYaWtX9M3Ai8dQcftSkxubbCqzYVRZrM5ARgyoGtCnVJiB",
  "key36": "4kUakvpjdFtRFSEnz8XzauvasUYSoZUR6DjdHFqB2DAEqaHTq6ZG7GamNYWgGwpVNqJNCtkPVm6vSnJ6sEPSaJoH",
  "key37": "37Adfb93Y8Rm7JXHHN9aBAYh7E13nxQaJT7iDQUMB3xuWby7HGgc2Z6GnvzT5yCUvPsnne99KwSyoK174nbx64kf",
  "key38": "4WLRz7g5DqRocJ8wFXzdk7cDyu5cgZUWR6Sk5TCt7CefG3YkWvPk8buAdiHSbVcgSiPUmomoY9a4pSuhQzYWgFeC",
  "key39": "5hxSozXDmJrLJ7CbdDaL82s7k8CSLNrRATK9r7piDaqkmUtGdbPX8e2BJ8TikXLM6jErUrFQnY8u7sXHG9eUtWyL",
  "key40": "4J7URQJXHS74qGx2adEboenyUXMPKvYg4JsR3QeLYLQv8rBj24htipoSiymAa1f3DSLXZQ8p8pnRcxruf3cZUQF1",
  "key41": "2yiVcQ2hMXCWkuu9gQB2XpLEUyJWZqvmciR2zv3y2FmxKbB2zD1yNaopJNvtU6Sv6Bb3PoT3xJnhkpfLSBbtbSyY",
  "key42": "2XbRbs7FaFfJLz7h3E9iVQbA79g8WvmkHA79QiBypoivtxc7kQiGtGLY3rVdXmyEyo7HfopyMLgCkfBmzx65Uxwp",
  "key43": "22Gk68TApZ596DhZk9Uf5bMdU5aiNUtTA2yxCToFY6qQmfyJQb26MenUgTopN2t3a7hNEobrCMWeJW57UvUtencv",
  "key44": "31mtaQmgoHoripTHKnpyQJ8rSWCkyZb4oTa8o5U5521HmF4GR5Z7ZSJRDC6yytKTzLYzWzvNeZwhgG27ndpmi2zV",
  "key45": "48Ebc3dB99RFXUzNxzA4kfMHzC5jXPduaXEHJUNfc1BKkjpgreaNga1DUu7RESgMLXgBuZ9uVWA3RbPFX7mDRPfq",
  "key46": "2fZmgoagWMbmETkrScf3vc3Dam9XWaoa4QAauhtT8h6mvwkGEfCYQqEQVuce5LZUmM4MX2PEaiPuiTx6PQRbmwgv"
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
