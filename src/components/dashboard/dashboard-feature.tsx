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
    "5KMK3kApw1dZfYU6Qp1r5EXPuLKhQNBQEPgkKd3soyu5eBTCjTDskDFxGmANir3CJPbHeYXTAndt5Jo554cUHYcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232LG685GGv12mAZL5h9Zbh2yEZcqKnEd5isodz2aLxbx4xBMPpBRfD8BgpRTxRz5B2u9BQaHkpuZkkaJrThWjFu",
  "key1": "4pVzax1wxmFXWvbNRy4b64aFoQNURkfcoojcHPU7nPBzdwrPei3FiQfEAiorGEnbVrjxHbUYkFbaWvmuZ7ySJtSH",
  "key2": "3z2WwuYuw1Ljxmknudu7xdLj7yguV9zsCTcuiohmjVGxX5zSQwmMLf6zj1wA1KMjQVnvZSAjJYNvkmVZ7srKTVvi",
  "key3": "5RQFMvxDfNZ6qWDKj2rkDYoZv9WCi6McNkQGHX9qwWnFoSBatmDp9WPKweX3FL356T1nbn5PDuvJFEDovFmkjqky",
  "key4": "3oiSYFnmSJExhtcZZ62fAq1M169RbkSc3WK9Khu7H8kEeRL1x32cdtkYXK66sgSRd61ngbqVQ25fraMduEWaybcy",
  "key5": "4wZqVjXceCPAR2DAmMotVocm7fBdc3BbEynjeuS11TXdjCtDUZfmm24PFSeBoJqn4eDfkmAdfYzp9X3wHwuTmoiL",
  "key6": "32WMZTMUH1id2DBMvoZUkw3a2i56u7zmJoFo5b7uQJ73RiFdEzewoBfwdspPa1MGNxwoEQBkfZ41iFtQQ67jTXoT",
  "key7": "5KAHjoas2dhznHgAWbgABV7adiyzR9Z5dDrVw9eKem658PUBc9SiuHwysGnM3pC9Py7UQm9ELHcmDAv9go7qus89",
  "key8": "58Ren2LDLZwX3R6uB4zMGdnTAmCGrqvVd1NZLd92fyDHaWT6KhC3fGV35RPiA9wryQdEPk1dLHFYozgCruDnxueD",
  "key9": "4aasfy5CpzVLPRBwdZuPRvYxLth6a5KxEG9c86JqHQGBKCHgeJb8T4uaLAgqLockAiy4oMRvXzNm7wuxX6srgAz4",
  "key10": "3QmUULFSMj4XGfmzdP3cURAVy3sNVwCaYHgJR2AmvodPk4KnU97edE73nLrVaEriV7BTMHkVgMuxpd4Jk9iho7bq",
  "key11": "4mPnwkMtL1SaGyYA4e8Z8b6sam7EhqdJKEPA2x8jxYA38a6UVFD8GkjnDkTX8UwfjFXB5RXG92Q5nhQnUW2reeEd",
  "key12": "4tsB4ESFCcGsvDRaZZbe1cQcFcUmY8vGnDiRZ5hihj5nYk14mAv3UoehRoVmSuh29nN8kaGyFZQ4MC74rMBg7HoN",
  "key13": "4mdXJwByu5ooPe9mazbokdf2zFmFR4WeDieLUL6tLQ8Xp1SajpQeWHUB3xTMRgjsD1pvE8q7TJNKua24UYLHFrLJ",
  "key14": "4vgYgMxor4wpp6Y3pTrPRX9Krxqk2tnohj9Loytj8xZVMsaVA2MjX13dmRFA45fEpgosAzZeapqHNHLtU1f1GUYi",
  "key15": "B5LLRnXnVjE1LECAL1PoPSAsub8V2svUgZy8PYHDdFvgxfaQgYaxtz9GYSrXbqkWaHRKptCmzbQYi7PxXnXpYVv",
  "key16": "5Jy6NGxwdB9HfF4GvxmQz6zVpQfnYT8a1b4UDrxRmkZEG8MMXh62W1D8Jrx3cdGF3AF2yLxh7xtxrV9hACcvPxSu",
  "key17": "474yXYzrARLYMSrzWtniDAfreAteE9nysmMGaPrq9BtifoMRH8Zrd7PgqchBVB4cxiyeYPoqkbZR5HUR6wESpsxT",
  "key18": "32fqDf64QKw3S5KryDaCUzjUTN2bJLTBZgbiP2b8UujuTxnkWwDiF7HTW8MgP1zkyZXah7tEtpEmj6BiqMnuQYwj",
  "key19": "4jkNLiSXcW2qakE3YpbfW493PCXmFCtnqroffF6dL3KJHZN4vX8ygbDkdUVaEeKrdpSEnx3J2we9kTBrYHWVHpWE",
  "key20": "2XzVyBYGKuye14myfHpQL1kWXBeMqVQGEmJahYP8AY76aELkRhxVJFh2biTQQLytUnVok2bo7XPo3ZXgc21rJfPH",
  "key21": "42RituTMFUGiCDJsRzmYGvgCM7ZYBRsNxWutAYNPHyrcxJRV29ke3pCPwZZDxZsTJdEgPs5SWQgkcJZg7egNgmRr",
  "key22": "44yQNqrEE5XedwHh7sKdngm2zaWjy2g3Q5Df7HDsiXjs51HFV7Kmbw6Fy4gc1ZBBKJsbhwrZB9Cn9gcxnnvo5xzT",
  "key23": "H9vEP3k8vrPjzrUChTmhR2RbTtSji8mYp55kRVvj4G2wHQZBpovvez25DkMVVZ4uKEcciDBcj8HR9cVjMBUSpkY",
  "key24": "3Ws7B2SsvKed91bRTboB2E7fq7BvgQAYwyNBNBFhhSifh7FdCCaDk3c8BTCwzE5asYGLDx5NhbACxfD8rZ8iNawo",
  "key25": "3YYBdjfXLt1GaL9d6FYuzkEohSaajzMGJXVfQZ3XLeXkVwQ5tZR5ywppvaoCJvd8gU39vqBWAsg9xJEHScuEVAkv",
  "key26": "48Fn8PDBVjAs1C7anYfXAAFCD4VTYdSqhKbrxc8PfJaV8pm4JML3t4UuivZNskgxMM9isFLePaoweWufyrLB7xY6",
  "key27": "5QiFFeg46CQDRK4bdWUEJovB6dFGsRPkVtUCa9SG85Y6DLYcRzRnsVrzErDUoKhQHJ6kg8icVjUgV3wtjZnXrjw4",
  "key28": "ZtQQjeTpqvpK6vvoJkpQYzXyBE4M24mjkCxNWNXiZAWJ7FwsGiYCdwoWUWB3kYW9FRQQNdRjswrzjQV3W3Gv8EB",
  "key29": "2EniqkvD3AhD5gfGZsK6Vx99bETNfeA9vH3HxTF4S3sKEvyZrAdbBwRPwyqwRLFMESUaA7ieBx5wBq4WkUXAoRTM",
  "key30": "2n6k8thrQBLFPnkiiw8uM7Z4aFjkL5hptwhAdgHXAzZmRqLPNSC6VWpyUHy6BqNtKBfdqzuVTA6YCZ8hPNjD2pPK"
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
