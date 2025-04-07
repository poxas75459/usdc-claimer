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
    "3CYHQ6KdmjSfNXzNtShdoteUFbKNpvyqw1yQoxanxcxRRanAe2emYLwquJRMgGYJcUpePqkzY6PVwRYFauaZQf1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMRcHQy8D8qqC9h4epQpCgNHXsz1wfRrmj8SZcQvk8Fvqv739SgdJKMixhdPb4GnzhpKp4MA3ver66dVPTEzLGW",
  "key1": "65211k3ZMhMmBM7QMW4hWYcv9hWrkrskHnnn5kv96o2HgXpZ25PduihXaQ4ZHtbX1gf4j29fW2FRLCjSYh7vNjmc",
  "key2": "pBRv54AyN2qDLf6QeTj1S6mwCw9PckDfzY3Z1pKHRnY834tbAcZpGNrkdj71zYkkWF3qCMaHqmTdSwxq5zF8s3x",
  "key3": "5UCRQHbZ9oPYdf2HZjPz6gRVdkgojYYg75fNmc9TyZsvHTYhALu9s1X8Gj7WzZk8N67rBs6moU4XqNaUsYhTWkwk",
  "key4": "4LSjGYKdrJPKSt52nBBvZFBV5WeCfRXQ4kybwhpRKaJNUp694SuwH4jYPJLr5ffDtb7KVf5GS96Q1VM4kcpiuxCE",
  "key5": "2urr2dG3g9mVjTiwr5E7HS9h9yMaqc3EVTeFtzGFHUebCCwi47nQkudkPmYX1vW7mByEw5geFE8SD6jHo7kqrsTm",
  "key6": "4GUjy5tQ7a9TtHeUCKQDKoBciEvxUz2jQq6DVt7jmCauzyoQz1h2iLXgeq6o4cdKPcgMJC2ioynrjrQJdEfnvdzo",
  "key7": "ErH3oEectkSQALJySqPjxNhiyYe8KzMhfErEWjEhXkXvBdgXCXF6Brtn1FxzcR8c36dRqi6J64Bn7v5EKJEf976",
  "key8": "4YZcJy6QgyhRqRrXU65os68A6Bkyjt9rJpJjPtiWpWWTbzUbr3Ym7oWjWM6b2aw28D1WGrekhpgX9dD6fBg4LygQ",
  "key9": "4w6MRyG8apQy3HW28tutShxjvwfpt7zLrAehQVJzs12WmEKQPfrLtnHM58H2WqrkTMBuKZBuXEGDVnT6k6SGXzGp",
  "key10": "38AuEM8yp96ScvHmitDFy6D3bMVT9TmBmc5pdMkSTvJqwfFmoRGCuSF7dnp6bQ4UMr4yw6cHVD3Yi6mEzZ7V5AiY",
  "key11": "3X7vzj3ge2vuxo9nXZKAs8BkkMbq2jwDZ484j1wf9TiL5DKiXjeKDXWgQE2ZxBnGvaGVZhgEnKSj5KzMYxMW8tKk",
  "key12": "2cG4YhsWKzZJ3JiYZFF6Mz7KUE53b8HRRhDWZRosMxcQP2YET7HYkNijHi9RBbgm2FxPugaumSQDMMuZsR5q4jki",
  "key13": "3C3vLf8zpiA7DudeTyK3e7zw15rehMfKPkfgvFCpbMCL4kJjyFbhgBp4vdsL8nhB4qzxt7V3DZMh11dnGPrjqCig",
  "key14": "63wuqFsAW4xdioZBy48Y1UGK4w6ZQtNEX1s6qZRG7YRY4fZc8vJtuqMe1wtCNYKgLfNPQAg8cJoALYrCxWS5xy9R",
  "key15": "5qffWq4haUfNMDvZsAC4ZARwcR4CMrcNdAZJUmSJkhGdE8kNpy4rUq4wkQMC6mfmm73YeLvJNKWcMWERjsRU9AmU",
  "key16": "5moDcgtPQ3Y6CXY153b4QiQGfBv52yRXSAttBGWXW3HwjMrPX1JrPLwtHYZaLQtrhL7a21gBSsoYB1U4UjFpRQsv",
  "key17": "3oSVaQYQ8Ff4w3gAdnnKa5tpL6E4XL4GtAUm5FK6WYNrDdWz6d6WStWUSDcX2Qsjspr1VzGJNhMWpmAGQe5Lo5Jg",
  "key18": "6DXEmf88gUYPyEPQ7ecbK6ok53ikjN8z5bGJXDJYDkytV4TUck3Wo1ZL3rRsYqfcufwJ2La5jWSHGWSivvgkeH3",
  "key19": "3RJTtt6zrM1YryUeVx5hJk6pii9ppH3C7mci2kSzmY43U8hG11faRmBTiVGztZE1XwGXhZbinX6NyZNA7YeoApBc",
  "key20": "CU3xa2TAjafNwmD28FStDXoZsBbbdBhMXwhzCuEuUHJcGYt5MQks8vP9kufAGN1HX6o2PNjWpSmXPCAcC7N7hwF",
  "key21": "44fagrJdDiWYBHkptGZKE5GXzyHZhaTHFm3hdtLo674T7Cp2myJTDZQDhXRAL8WaJajGUQ7185qegEZtRg5t8JKE",
  "key22": "kc6g3k2VvuXdkkNHT8LpVVtVDpTGZNaTJSkfet65972UwDvyQ4knA1otZTAypNs8MxoiaA6BecaCV2pdVi5tMm2",
  "key23": "wbGiikuAYkgmnZxV3RQjdXE2SYU2KqKtausc6xLVsuYQcoTb3fng9xXn3WwyA7oaFYWYnpZxBYzxX3e4qmniKZv",
  "key24": "vpbuLVrBjD3f83LqzazRXgoRLoywu7RGj6f1HRtynTGZmk6tpK2TDYiyNRsrye8raqzk1ynt1pxpSyP1AfJxsEv",
  "key25": "2nNzzcZJFxXhTMkUJKC1KrQGenmHDfVGGjqtgeheYQMagXQ7YfRZvWihANZfXvzbkYKcD1HJ5j2xfEob1vmTo3ks",
  "key26": "41kWyxNfuzf1uMhvZuWYQnDstAepaXgRdHVLpqxMGDZvexMCcDH33hDrbT3B1b5cbME6Xgmj3orm98zF8pSXeWsC",
  "key27": "U3ZTrQ7TMdQbEimq7vnoaKEh2GYsGWhfgfzNRD2GgYDsuaHNE8yLtXojyzcWmYEpTVvRXDasAyRnxYRiv1joKBz",
  "key28": "2TVkGMfK28CnZA7jait655tFnG2CH5awWb4oBdNjy2BUbR4uzUQQqqDhik2SS57Y6g9SbNDifntQX6QLPD8R8MhK",
  "key29": "5YLWTroiGAiETV9Pv1D6eaegL7jhd5eD3pq8VUt99pynyykSsQMc5BZ1L22DwDi12ibg1ZyTrG7wjzMsZxiDm2St",
  "key30": "3DNp1ivrMnkdky9qi7gPWt11NBRTvnwtrdGxnJ8ExRKo7n7RYtx7tDmeTwwA4eBjMPNoqv1Zcy2Vh16FeLdg76Vp",
  "key31": "249wFj2bSehXhCPpk85pbzke1dRzn3sjpDHeQiZKxAzVD7sy87fv2ti7So9cYoPzabhNZxTfwRPytCvPrYupL4nB",
  "key32": "4ozsTez18Lr5fF7W4SEFgfGGgkb9uTfYTZVdbTYG6SDS3kRU1HL9CAfERoQ3rtCFCMU7r9rGruqKXpQe2nQ6Va1"
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
