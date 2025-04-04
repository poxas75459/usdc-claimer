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
    "5hFBn2wUXxtRSpZU6VqHusY5uwqt6XC6QutnSReDCkKw76QvftwatsXVDZKsj6AzVNw2wSubH6gjMEHhMLNSmrbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xo7kzmhDgWdr3ACfy3MqKSGrFK8W7e7DrHezWDQzVw9s971e182wDuUwc7QMpzivrJj4QuSRydNVWmJSrD19vWS",
  "key1": "znLU4t8AGxi2D8SYPLVs1P5DDNFJoHPfBPkS3kQLqhhdVCzT32tm1jMhWeRNcbfBwiDiTJwByJkC6gy2NRjEABe",
  "key2": "5Cr9ohxZciQiifVXG9gJ8MEGxQ7LdkfUFYetvVcbo1Ht1ru4aLESRAU4R23yVHT8KYEu21Ns4UpZY2KkYKZ2SzFW",
  "key3": "5DX2pTpPjvKX99W5pRdCKJtHjkSHHBG7xstVTj8pxjg2v5mhfCkgKPqqdFucwQ9pRiAkPLREdR1Xecq2x91XwjaS",
  "key4": "3z2UXFprALxuCiz2zDHKYscwXJwzGuz9Z8T5SiwELnqFscrpoG34ryknzNWZDFW9bGENMZEe7DTxVwqyqJEbBwfz",
  "key5": "6KKJ6KRzhJmyVxNCh7aZ49TZbMwLL5EBDeBzSdYBdvA31hXQ4jFcNpuJUAFCDomhzvwMvnugEf9pMKquraam9fm",
  "key6": "cv1u6LvuMbXP4E7pmtDoycSxLBVMcX48oK48N9YzBPNYFYP3hWu8Mn1DYofXdDMsHSuHfQsgJnsNV36QXwrr7Mz",
  "key7": "3jED2bLCDTLpSZqafNaEDrM8Fjt6SVud3CJ7hdhcHLF3dc5UULhRPXNF71YTjq64uAiDQ16GYVRJpZYTB8gkRDUB",
  "key8": "3dr7fjm1tQbzuKp1SaKHcwDLshMjAj9ogjaEZ4V4yJs6eftKvSa9bZVTwqS6Sntk7YF2SWL5ubqNN4fpRdYqrE6X",
  "key9": "5b3nnr6jTWBWubpfuHftkuTusJc1xkX8eLjFJFRpkeWzQp26hqgpohKxPhyBZq8MHSsG3pJcNbgC3gjV7ZzVa8kP",
  "key10": "5zU5HQLnjXJM6ZUdV5dh7YUgsiXYzmicJMMRtNHPyRQuUsdRGPu5JG8CU7744RaeRpW9jPkE8HE8LdaHBAshMy1s",
  "key11": "4UnaA3m3vkHpfDmfF43sVgmuamPQ2tW536bL2ahoJzHPgqRQ93Ecq1yaNic6T6mzNmDr6FR8ASB28tkVWCgqDTAQ",
  "key12": "26DgoAmq1oJJvyni2pmvUg717qaYS6cKTnKuXKz424hZ7QcJtczWSuQYJEzrQgYkEyAvWZ1sJEqEEk6SVjQjYU8r",
  "key13": "3USXrfuwTjqrU7aU3Xtwo1iPeYnB1Bo2hNQETJUpdRQMieVWa4BrAm1DmcwJYckfhcHMZvQSjmqQUPGCsHKQ6Exs",
  "key14": "5xr2bNE6KiwX2PjJMZX1xzb7pL3LJsnBorrFhsFMCUrXtCXE4gi6fUWLuePtEJWzGm7FTydJf1EcLcVaQCfdYAPM",
  "key15": "5GdEqtkvka4m5xxGJZKhNZxQdxiFCw6A9kedDbhWd86ogoVGcFR9wDxxtV5qNdmR23TTEQbRNibuDFx3FeJsNK7P",
  "key16": "zXp6jKmGVCxg9qSbfEHF7GvSXcLaB3e5fKWHZJGEBWWFZK458b1Cbger3jDUSGdHTGMjqtPmkd51Z4drepEBfzf",
  "key17": "3whA5LbLAM1rLeW8qBUjyzU5Zk65mPqYkcT612QgAeyrWt1ZxHq7pertVnEuHNbhyxUFmzKg1wrFtAbo5mGX9aKu",
  "key18": "66PvdJeAZkC6wRguG6QttpBocnsg1Twon8sbX9SBivhaeVER8BM8c2PsuiCupqhKmN3x2NHGtRSCut9nhMgy27jc",
  "key19": "5uumRwUrSCA1Xv2xQYvHgEitf12LtHjT7EbFVvBz5gfo6m5CDxoAxVYDJqd29jV9YkcaHNWCth7wcHnfFyzyqd8s",
  "key20": "4pPoGjAvFfg1DYLKScxA6YAst9wnGmnmPhQe55KnbgDALtziF3kpp3cAVUyWcn4tf2cDJMMQRwGzk8W5o1k2sXLv",
  "key21": "39otRPeBKo66UCzvsokh8nHBCLFVpoVcBcsVJoTsq4qjvzkSNJ5EUkyWcwjZTj7sLZXF2FTeiCvzgnXWMkMaL6NN",
  "key22": "3qjPkg3e9kFjBsyMUZ6HouRWczqs8Jm5PcyHpgSqthWw3JKpBk3U9LsWg7PAz2aHT2vR7CCNR8orJMgpuG69XbgR",
  "key23": "gieBGHVNTx4PSiRRvEsvVYNsqnLXcGQ5kjdPJsv3d22GUETdAUgnM8gEyHpfNpeurSwhYft6xp9TMHHobm6tco5",
  "key24": "4L8QAqgUadp4JESDxoqSRSbxUG7v6au2GrzxwTJhA51MhqHJX4tpbihRdiVxeH5Yr6VF4nMHj5CHs3LxqoykuL9N",
  "key25": "aEqJjRCjAMpJKD727eidyapGYY7AHwDgDaKw9opSbH7dAvWnjhuKEbnmxZ9mDqkdLzxUp8scmLCwikp9ktJpLAq",
  "key26": "4AGfBh9wPyrouz62NjLPiHZaRyAtzvqQ3ZB2zhpkxZ1YMsahgkdGaihGHskBKwAB9m3xorNKMtn6BbtvnZWqQ6Bn",
  "key27": "4REngdoy7jfW1Nv51xaQ7M8dQ2N42zq6tDM3irc9ziBiDvgMLctwwk2Q6YorvCZ2pcNbuwBu2tUH9nh8z8VMKCmD",
  "key28": "5sBAfwh46XfwcDcMrEz3Go7Mo15yset33XHXeg5n4JapqJ9MEZxrT2jy43nd26qSwBNbYNN2dGQphVzR5gyRPFjV",
  "key29": "2dda2d5L5wecfXVxR4z9Q6vSt9wXM4in4kbWYYRHhCtAx2sGsKjL5t3qXuCQiFoCV2FJoaZ44JcQA5gzCqwHyqp8",
  "key30": "RPfwUrZUyF6Qi4seG9Nmxa6ksTrNxWohHU1nd71M4WhwkpsX3Kwhu1B9o1KaykxaobH94ZrTZvRgcUWzVeQSVHY",
  "key31": "26wsfoqmMo1tX5jAJLmqRaYYzkv8AJx9j5swz7a3NtrEBfWWwycQ5Mey3u9Zin812E28mwbchWJonuSLNYGXaC7Y",
  "key32": "X7ACRovfxY5Di8qu2gdfmDdMqQNNzEhDGPNdbfJhRfPg65yqsTK7oMKfmaxXYp8MicxJZcCSrehFR1qz42vpKVL",
  "key33": "5ybx2BQZ6ZhYTYHs7GB4uegeLQaUfkmarxjAsY7z64CLJ6B1rARfqk22ob8DciK8ZGexfY7PrJmuEZ4dy8RDGTEU",
  "key34": "4BdowTQptiiwygV4nc7B9b6NozuBbYFowwrJu4hiUW2gR2pHb6KTFJ9tFSK2wzyGfHwSWMGEEgDSaankfYWjct74",
  "key35": "2tavEARnE8UR5goQoGJ1sVKo58gqnWzUHHind7q7qRnEgLnZfy4mzU9u8pEBMKsbQTKiBCJP5uAiZcJVCviAhNCu",
  "key36": "4vb3MrRLFspE3iVR8FgY4tc6cAYKrCS7BsXHqRBbzXoNJeEuQEAKZwU9VNjkhUcPrvwQYdzXvnBFpZ6nCfEUeWVb",
  "key37": "4h1LZHxhYJJSvpejiPhQS422HepZzupEJZR7FQQRYb8FCB93HHaGapKFBQ8wx5XWccFwvQq8xZ7DzcvHjvZTumyc",
  "key38": "4H1nfnnsHUq7a5dxB7HoUaCozu178d4vMRU8KUuLMjs5QLajmEncF1qCXMgt5f8mwEa5zcUKujMed53uA8qcboEQ",
  "key39": "3RMh8hqx2S59gzzBmTm6YnzP5aPd65g7t7SGzkzDmufp9eiCwSctsFpGhmCcfkZExbysH8GbXUUBNnsY6wZjrWo6",
  "key40": "4KqbrFeU6Y4RmS8GeRTctrJ7JS6esTvTNQTCUU1K4ERY1pSDVTDyh7Eh4tsqPmKgqTjmrD8YmQWoJ7ch7idC55vV",
  "key41": "nBnqb9LJT1aaUDjAToPjw7GKUkwQ2bPgeicNQcTNiwCvLHsfHhcq4HYapTh64kPZVgWvLku3UUxWTZoPV3GWFCX",
  "key42": "5HcC3GxgAJSJEr6KyabYZsWW8DjnKa6JnUJ6KQqRApMUe1skV5qRKUcj712E2t1brkHmwphb8ox3H3nAc7rC4Zij",
  "key43": "7ehQUSPaBcVe3cKMngr7HSry8SiGaeLwCdqEXB47m35GU69V3E6dsPuoktTz6jiDsL9tEg5zGHptcYVFqkBCoMr"
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
