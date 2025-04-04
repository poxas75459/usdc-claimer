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
    "bEs3aSEeoUKN4zzHXHh2uK9uhWVnQfhk2RRTL6LtzUXXJ5tUukKD1n3Ueh1iVSnv6aFFv7HpQyrdiWMrkeQtSUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGmmLdk7YtqLoJ47bbd4mM2mDMndWY8a2LcYExZf26FirqPX9otNVcgDAUPexms3piK39kjUe4jFhNstASohb6M",
  "key1": "39kEmUzHNtAHH8pXnTLWy4CTe4PZc81pnHVYVSZUasQdR7CvhsqJtbMZkdPSrBVNynZCATp6pYKisZBtsehHgp6R",
  "key2": "BJxisBbhc3QcxPciJvSeLic6Wxy9oKxGQytdYemFfDLaUC6F3KmyE8xNAMzqMoiNMcfpFo1f9UNBs3PH3QRxUvm",
  "key3": "6mJTJeNs1wQthSodYWbn7PXFbdn73v42Bx5xZJnuJVXXAPZzwRwQxqwjbCauj5wVpasffX1CAhC12UHuNDh8Qk7",
  "key4": "5QytVxAp9wfwEGCGvDsKVwpxjyig4vWqTDPWXMjV2Nesn43ZQXfXxzViPK4mgdEGUNQv9hYX73xZPYcyRxZr1o5G",
  "key5": "5CC3k4kEMXxVPLw896Jek9ofX2KKYT7KtTxkJqseCg92UpWbPVkbnpN8JyTFFKHPb6yFjyggfcdopijhF8kJTFVB",
  "key6": "hmXrxKG6bMEEYdHvagqn22m5DiFGzhJywXYSwyafFN7yUPBNjW87z7CxxYDcqGhbEVhziWNo2SLxddMiCmAzn3K",
  "key7": "3oxozbv18NJ1qVZdJrnVu6PxNcYZQdkgLqJeTSZVJ9uFJ2UhMm8pk4PWZcLvqMmhak8tYjPYXuyDnQq62HSRupt9",
  "key8": "4eSJUkuPJtCEiKbYNjpX4sFN5X7uGaje5eurNeM91gKP6cj6QHUhaUf4HKjuLGYxiRQ9LbKYzLbFisZyDqGjS3iX",
  "key9": "2HwR98nmeBke3NXDTrcGgWWPEsWbNnCwJkF83To5tStjnb4z4dDvWiKJVw8yQB3Yv3tZSP6UENdCUGXico1EQA3Q",
  "key10": "3ddERNoBKMiDpLz4j7T8ZfpAjk3az25qrw7sQV6bRLEZ3gqwV4b5GgSz3ajkqWoYnmTspM8Wy1Gp4sFWiSie55uj",
  "key11": "47fzGveA2JnUoJESnSKo3KnbdbKYV32CmApZWuqr8a7EXwTp5ZXAh9dDZdTpEpoxE7M4KDWJd19yH8WanpAhpYta",
  "key12": "4Mp55aTjEApf4KLzFzy4JJkLCz18nHY2GBFJKoGabihi3ignZY5zySL3RJk6P3TSFcu1qNJtLUMuPBVLD68ayTux",
  "key13": "4hDPE13DNvU6Qh2gU3nR92giHEhwk4R4acREwCUE5aRo7m36XRKbfFFsDSj2vMMYQjBBm4Z9kFjC8kmL6mXgQF38",
  "key14": "3yLrW49jXhGym8KUwGeYVs9kv1XuuznFgDDLxSja3A4soKtjFSqj68Vx99FTgNNhGsutoqgRdxssgF5ykjzWuHWK",
  "key15": "4oH3EQ5sLp5qth5XE5HKj8LXe2xM3wMnMLSFGVZE2HXRLK33vFx69Gip2sFzeL4jAyzCVmpCtk4BeeCRzYpUXTeL",
  "key16": "34A6UVk8kULgh6iMZnBuTcvc3FpP1iedx1Woy4gywEcHw83mwt9QnMMpmXyrqfBH1qiLKGfq6ZSs1Ps2F6AXo4yH",
  "key17": "4dNNzAEnZmdEBsnfBcKUgRGG4zTDEmQmoFATZrhweuotpYj9Uv2bad3HE9jcbB5j7Be8JYaSieT4PTyQnxF1y6oc",
  "key18": "4eSt9CSi9hJupSJAw7ZhHoJHLjrWTHycwRaGMZCxnhWZWKGmMFfruENWnTAFE5ZKZWTF1bxgP3HCCPtcVqiWUNWj",
  "key19": "3Ray8FG1PwB4Xrwe3fdYoAurii3u8g5UF5avr8ArPoDnjWwTrmBJpS93BNVDm98XUvtBjG6GYiM6T3Enz9439dXh",
  "key20": "56NDoFqbFFjSzpw3egLu12aEVg4o8TYgErr1VMPHAoszbCZoDKwwRZfUwTNKwh1B1M2ar3aZ1hCnNGAzLCBrrQtt",
  "key21": "NptqtczEsWcPqGDKLe3LWWFMcb2z5EDHpizsYRopyQc5HfZMRRwxdXutNhPUAAXViic8rqCZA9jCoQLn6ebMDrs",
  "key22": "5hCEwSSyyh1xQ8RbHfWUBcdUnVf2RCjMCps7bzXvSu7rGCJ99sogyAynCQM1imJp6Q61uoRTnGicVjds9bfRcCWF",
  "key23": "46j3Ff9Eir1gstsZszm4CVecTHyqBCfnL6sQPA3y6JSMujw3fdM8y6h13oFMdaCn3ZRYXuWs4frzUMZtTSVLxd5b",
  "key24": "2S1W2b6pwfccbG1w9pmezAn4WAdCkobeaLTNDqyByvh2fggc8fRfccXmvxDLmC1VnGLKedo8M5NApB7EznXbcKvh",
  "key25": "24ftfse7XJV87QgMUHdivCXgx7tLMr8hD1zK5SQENghHeVxLJhrG9PbF3qeMzM2NBbbbnXRrbGZWKBfJDUPuuxLh",
  "key26": "45qU5jZGwq13hkd2GdNF5RNNMkiX5aaTGNoruVyKZgp4hNGLXsKJJQC47VjLPN7348MmyhWhk9bx5pty317SVwGy",
  "key27": "4AiqiU9REtZoaxr8x2cvPYnuETrAyDDeRFYFTEDBcWzdTaQ6oxakc2TdeJ5Y6ZqsRPvbkDPbddpZCwtNrgijEE1Z",
  "key28": "LeMtd3PJLfXcTQ2iE3DN2Y4UbQdAVMwCMbLBhRqmwwoy3Pi5h915iKWk12J3LzyyFk8nEaQ4SqkYjfdgVsXxZBP",
  "key29": "4QJe9N6yacWnUENg6eE3WHMGP7kJe6qgunJcRhfN6vam6xQFvd72dnebBxGW5BTr7mas1FsiesScwNs87D5DduQB",
  "key30": "3mvKgohQFhKL7rSe4c6zezynHamFtkHXKM3iyjpRNB7zanW9Aad2Mvc3oX7riLSKVCkVdzkyAAMfBDWScgdZXg9V",
  "key31": "aiy2oySpz5QDqdYs7qHSk6XSXHRkfhSyv2sez3L594WoHmmWzhunEoyPxrB1uGq5oho16EjJvbMcBmRN8u4BKLG",
  "key32": "2fNLQX39rfswtsVyPAhPCcZwt1qDsvBGbCyeEKKsSU8zHrY7iJ1rX6dVsofYWk58vDdF7XHupDa85FngCcx29R4E",
  "key33": "679ZoMBwTg1sxAtJUEWikT1br4S1QdVtYUQW7oeETQA2o3wFCMcSPYKwyuPgiE9HdrXsmBjbQKnihkCfZy2DvuGU",
  "key34": "4sGNN1HJuvJTvB3r2oEvVaBk3N1wjCPyCmuxQB34Hm5wm3Y9MiPRRZ8HXzbQ8sqN12BvEJuHmgsRWYWpEDKt7ErY",
  "key35": "5BsaQQb7unHqw5x6zQv5KKcKvbTupi6L6Kt23yBb6iAb7h4LJsFqzYdnBjQ6UKaXAximhxXTygoqs2GG2ipkxVVY"
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
