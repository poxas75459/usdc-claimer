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
    "2Ag8oZaruC8jW3wDfWkJRmGaWY1EUi2YDLeonJEWLvkwLmfJb2A9ui8Jwx2oiKHfLPhkyk5MKSRcZY12QsgMtnK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UZMUgcuQGYGhrBKQUkdfTGqcU4Xa5xpVEcewt4QQhqrYUCr7WapwQbNMumcbUdpg8PxM8NPDiLCjX8Bk9K2RVs",
  "key1": "371EAhhQ2yiKXxbBUxhNeMpKgxcezPeuqAXeoSpCpf1G42taRRXBzPxN8EJDC53nnVVNzCth724nu7Ds63qLGsaK",
  "key2": "3XWMEGAzgd1yzqoyLs9mG5hY9tv5X7oMQZ8tz4wSvGLfKLqyHa8S21fhY4Sy6Tj3tTGYWVUzTWaFzF7crpVDMYzJ",
  "key3": "3Zy82ZQKwQHkM8ror4gnusmp2MNQ84SFebbFyt1YJZEUg8yVJi1NtSxUWAU1veYGKuZCQ8XZq9WiH9fGbiV4hEGe",
  "key4": "UZvTcftimoeAVhYdCsUoA82gCSyQVxTXM98duZxfM5C8Ts6EHunBN1gerCWmWg8TMeZ9MJJXHvJHP6aZmz99RKk",
  "key5": "46dhzRHSm3mNoCgQc7AhVH7NHWx2oCZM7Rn89fehGBphz1QDDQqznyrGcziPCBYxB8SqthNYdoyEhvjg1qD2ZLLw",
  "key6": "L3oCkMLMeCwh88r2yc3rkha2Btkaesn3TcSvHcN74y4KaPp8YS5YZnW2aj8NKYLKuF7iyvE53yWKdGywKd6iouN",
  "key7": "ZnTV1Cr9CZNZwbvKsztRkLMJm9bGV31pjQQZPZwgEgXYxCuwE2ehWu8mjGwE1p2Px1RTvqB8qEzkSbNaa56UQGm",
  "key8": "4LGmTATTRXiX6G8Lh4WfSSN4FKJMxaaZRxkgft7BBFfMrmFAyVXGudrxXiDZE97s8S6ZuJbx2NgGJC91WDgkDW4w",
  "key9": "UhmiKQLtBiwq6gM7HRqEBgZdnw68Afdq9vxnvdMTawgcTiXcrozJJvadGcFy8VBFPxPqJBrcaiWWdYYk2C39rKp",
  "key10": "3EqnKrKAfKVm1uBq6niqhVzHTxj4WyYffPVTr235SqnE85yUrGZXLzoo8xqpTHVH1jQ1joMxnkZYNPmrgSmxcqmJ",
  "key11": "267ejVQS5AcoQGMcMZ6jLLD4QtM6PewVvnURa8MBwypiyWcuPJDZScgEQ1aWFEoYvTVa3kqkVXMKyyH4LtoDSwzb",
  "key12": "46YREvBESfmUzXxuru8n3jieVdZxXYpJKzf6W26nyX7PpY83cZRydqMAGM9CRAPKUAiyvsnjnyG95ysHLd5gMVXq",
  "key13": "5uB7jtjjnSJaEevyyhALJbepSKk6o7PvV5Ys1tFDMhbakZ6csiiPrTr3aoeeeZU5URrBVvGqtEBtPUEvkJQCEXPA",
  "key14": "28CL1Maq1ATVua52vaQEC6z2zmdJFYPU5hnHZdXBW3XVtgUjpjzG8N5fb39RnvDjYWK6oz4hgFMPUq8RJQ98D5vW",
  "key15": "2eTCD1eY2971g3a3C9v1JXATwYxKFCmab1xVqojhQgn11dsR8mJz1dnHpUGPbKAtBXZYxC595ucHLbBLCBTS4ji7",
  "key16": "2D2WE3YUDUmH2EGxaxmK2d58dwiNXJgtpvC6ocXDkVsbYrCrYMUEYuYaqwHPkBkYgvLbQBUonyDZC9BrUMHHueQ3",
  "key17": "2UKfcKA4rCd84Sqb1nFqmQ3b21doNqTMT3RKFnHZqGNu22YaYHwRAWNvs3KsRNGBGRSRR7pPv3BcVrHJM8ZkvMnz",
  "key18": "3zjQqoqmYwZEkHHvr22Tks47jHeBsFoFnjdXUyEY3GddQ7yqAE4jmqacin9WtyqS4MC7PWXKe6gyQaYd5ohhoqZv",
  "key19": "4RDFxbLxifUXXxcXzrTWy3bcrDH67ZMS3AccNsPGqcjghP9DgbQBcj3XeGqNZogyahkePm3GdieCAau3iGK8sRuh",
  "key20": "5KdBUbwgmEcqbjG3qa3MqqQ2djLDef5KEiDvqgjwSzegArYgSb4gEMEwwL4zqHh5deb2mmJozWyrnZVS3S1j6ivm",
  "key21": "3VTjubEwHTU8FXd9QfBqCyTTwYonwPXMyrD84EiXSE88etismXp9dVpajXJ2ATC1rbpXS5VCevnJnLrc57vWVWCY",
  "key22": "4hdn7h9X2RdMeBT5G5zEQ424rLCgXim9dsHgKtZfDuvUWwvDzYQeiD5Q4BzmMbba5V6ctY3H8W3sGCbkDeSKdLfm",
  "key23": "3rD2yAHkF4EZSwuqXAP8K7mkxPnqHiuvBM1GEYj5NJjqxkfsA6TepKuQrLQvBSP28zyDznCit9FFNaTFaiWcBBBu",
  "key24": "3QneVdKfBpfn2dthWMh1Nv2Rvge42DKbGUbdu9fECY8uoe8SPfP2oxhBNnEGuTZrgDYoQ89CMK5VmQHhMm89Xzjv",
  "key25": "3WM6bPAsRyKAVM9BWoc6sdup9SReYCKcnmuLPgxyxT61zpx72zALBSdztQdPoMn8PzBCSLR6E12amxwzywtHLLYf",
  "key26": "3nYKeoWTxB7rFQYDKy5nFpR2ApebF6xhV95d4gXPLsYeRamnQ5ZkE2nQncPV5GvRPQHDrENqVRyNjzQZNbgnPYAT",
  "key27": "51RACjtMLtx5PMaWwEZcixCCJV7oPgBKvJPZAg2MHD927NcxZNfxJmvosbWrMmUWVFSohYb9KPZ9Q9qeNPvPSZzJ",
  "key28": "2ETM1YbWWHEVb2pbByxMupyRvUpqpdHPQrd9UGqN7xNKwevzFbQ3J8hUo51HSGmcvXN8hA1XvNRQAbE6o145MF6k",
  "key29": "4Uck6h5AdKiiCqGSZKK6CWUwTJJQw2qEoBcdzgKS334k6tJaMuqNiepvkoTyTmtWWy59FbmEmVnfnb6KUtDHRaDX",
  "key30": "37L9HC8QRR72TRC7VmmQyd9ubseCrweYc6jmHmrULmZmoidwbnusAVhMRTK8ZKU1r91xgE2TL6TSqKoYphcSym4n",
  "key31": "2eAE97LHEJ3dBBjUgwpURFLkQETSxU3Kb5bRBPKa1TfCmT45AiN69PLeJVggZx5Gp3W4uWDLxLr4NJ1TNvRMCWgF",
  "key32": "3qhQpAysDkGacqrqHQ2Kv2srNmxP76awgc2Fp138hQpwwcArVuyQ9vbXJDxuD9RzvCijVKiQt8mmwPE8wSuWSxVK",
  "key33": "67PRKHY54weTrwFdJTEva9eThvnjXKqo9jmnFmnRGsK8EkgWMZtx5cbsjJdWUbxMeWefuJQPT5ijr4q8JLevddKX",
  "key34": "TYXb49vkPchYv2JgY747oiVFGNCwRtAruajf3QK7S7iGQMhLrYShSSdyq2sqE48FBErjpsrEQaHAqvqw1gf1gxE",
  "key35": "4RttY4DcqC1F3u57mK9i93bRwRYrbdxdCRXaoNNmR2dckGrp6kQWom6UackEDQvtT5b3wPRFPijd7TSwzh5quiHJ",
  "key36": "2tEi7EYrudqY5jVChYWArq2FbPqoEJD9HqyajeMNrkuZkJXeffJXsKQjrLBtHkyHhrK48SgRUasdbsu6u2Swu5aT",
  "key37": "P47B9nJWxMFUuvA7baQbWQ8T8vWCKrtLghsnryadANa8Zmpmsm8hGzdqk2aLAwUUFYbvaiqxAKLYSSM1wtZyP1a",
  "key38": "HUGXJXL2PemDi4HSEJz3t6AxHKShB2b7XxDSwDu2vwYxZTs6oLLW2jsT6muJpLRHJUHE9Wed2wRLjKAxqCpXzZw",
  "key39": "ziWgYgfh8zJUPtyc6Qk1UFJzFsTUt9UZ7ktie2JwiuV6cZXM1fp2bP6RghRCp8BMfnzJsWZRxKaw597P6niN74t",
  "key40": "2ireK5gMBAMBQEPXCitrrwjCEU3E7edtYCFCDadXhvWzw1kjjcGoDVwRmDYrePBQ1TittLraWwezzpwv682M49nq",
  "key41": "3VLz7M2sjToQMJssxjMVPW7vaiJTCvwFFFpyi7R73bHa5Nc3tHMp5YRiDGyv8cJj7HUCCTCTYXbApwwT81RkGp8J",
  "key42": "4igEo4wniXCQxSqc3FBFJRKtwy3s9XnrxToRPGkpPp5QSjy8sFzPsW9YhpYhKjoUXXrRtHQddRTC4Tr1PAs6uMN1",
  "key43": "4xeMhsSxjFUy4SAQkm2CHSaUEG2QkDG9DGBqbejdATaEi2rqXJmAUqUcNLX8b6ZsGBbzgDuzrTkjzcrf9dvaL3jG",
  "key44": "2tuXArJSTu4AKLjkPEcE5tsdsPDZ2z3hCWjdYhwDSL697KGNmSgfobd1KMWtPL6Tgqoh5WDvKbF8wXWNRaoubApe",
  "key45": "5e2dxbvAMMB38uikQvYuBsPhXFzudjBjLrUuQhJ7yvtVK4NY7K1rAZGSEq83uBdAftFRaMAzxURkPKnCBubVwLaU"
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
