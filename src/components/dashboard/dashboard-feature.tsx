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
    "4mRUKtPTGbwU6c2ZRFHSDZrqWBupkJj4CUtMcoyk5iq1W1zpRnrqBvNu1XBzNW1xp7nHF6ZogzkZE45HRFYd76M1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7zW4dXU7TdH2WPPKfu92yBQbHRwSP9Dhu5c49eLiEqX2KGHyMk3CCyFGGDASaUpBVm3HBxob83m59cz5ouzeHH",
  "key1": "5YLJJFbLz2nKGeiAXG6iLsBNQuKSVwSaVZtnLvEaqpN1ecuxkES3jnCL2o14Y1rgFTywYnYs6QAtzwpFkSRjucWi",
  "key2": "ZAWg8kYZ9j4uXagKWXxhhzUrXMNRnFLtH1u5hFvwu842ANxH6gntY4rxpMqLYSBH5L79KQphsTqHAR23731huUK",
  "key3": "5D98vdGJFyUfmDJFGPTNJHu11kDo4SZ3AgoWN4XCLK1Y4wq1t5ZpiX851Ny4Xh9VunUBrty5JLRpVCSRL4fXxtzD",
  "key4": "2vSaiaSMgPcqwvFEe7embNHezqWacMeVcZY7McS6nX1HYNoW8QgpHNbAUyp2cvT6UjAQvapLSCzHN4dNMdAaDSiS",
  "key5": "3vS7rVc4wHxuVYzLcpeBEx4RUouokb5JBSFq3p3FNjtbqgpeJyoBWPQint37oo2DNmAuBmfgVe2RmGjSv1N4NsYw",
  "key6": "3sBX1ez8n6iER73XjXVgVSkbvuztbFqCvTycewb2ubMUmFzw5HFThNCp4bt8rKqferGSj8hk6p6DFp5SvArfuSwg",
  "key7": "3LNXvxq8wFGTf5Vg2VKZMErd2fPZubSjqqCnZXAPLpLVUHZRd4saUnShaAiwSuPEp9oXJtWXWArUeQZNkHS7banT",
  "key8": "3uQoVsKRVi1sKbz4muXNKAYuKQpg9nvd2d1EPT6ypovzgVRARvpQh2FmLe1XK1NQH2ceh7mSfP5aZfJQaCp7Lcbp",
  "key9": "ZhbNdEBcdA3bJVTLQx4wTJYTSS87Z7xFQBZKpioDfGBxNjw5EBnV874hqe6DibmrmP82iuWh1m8Ah1Bw5uKPiuf",
  "key10": "3BasXgH9rv4n8o7xyFVghwkY6RS9nwSfUTx2aDATaiUumdMkVbNkHYH2c3dYM2JBGgP9s3w2cWv4Q2MmrT8bBu8C",
  "key11": "3w3ckgq5PtofcyzQJq33s2KkLEssN73RMyjemgcoPXhGJ6fPf6peSQZYqP7GJXx8sYw9pYCtLWEpUM4rHvYcx6dD",
  "key12": "2CGPDJDaYBgWyArvPDJxdrieqTVzWh3aWFd6e5AfMVHsTyP52Hp66iWcP6cSmTusHCnWQhN34nkHkuY6z2o1o39d",
  "key13": "4TKeCWbYG3QzfYN4pcF1DDdsstfsmzeTguo8yHE9zrpKwLkTmTnfj5SXBHZ7boPFjv4GDa8hTfkH3WhxrnLsTc1W",
  "key14": "3UQdEmonK76836kZFRGmKroi39fD5PLDmu56Ni2hUHZQcL4CoE8idxsPkgt9xdFXZdBLq3vKUM1MpxKBBRbzAXud",
  "key15": "n9KyLHBrrt7XdL1a9CWD9L5wCw5eMUQtABFErBksS3S5ozueCJzL8jSfg8hz1h1hhTgBnHq6uD88R7finXvGYyh",
  "key16": "2MghRVr7QGtC8HL74f3Wu449CRMYorz4fWZSu8ZhRphPNXQWhTjf6WgxGMHLEDesnAv42RbZZPJ5QrGtmnMJiSnC",
  "key17": "qVCS2xhdNefb6znKD7xP4om5yDFN4eZD2xHUcZZhG2JxrRZEsXWZ2HiWFSZ1SnJFJhpnaWXVb4N3gy2ep7uvkdq",
  "key18": "21qnV1M6p9bLhM3jUmUVdQZztD2uz7prxYz19Hdz4WXH7MiP1LRUmtmvS1mS1TPZFnTH1o7jxytaSuc5XH7RmRWV",
  "key19": "LpnGrQQ8aoesgpKpgJB6Y2ra27syEDa6Kc9D1xKHuZVis23UMgxVBrSQDwGkpuZ2r8EfZzUMZrrsQQVwYVYTRPo",
  "key20": "CZwvYza4mn3B69Vh8MeeBNHEXjNQGejxHq6H5XrWRx7gjbWLuk8xHioVLLeNyEQaZcZ9HUSNN3EYXKy4sLuzpjY",
  "key21": "4jHDEVwNYgyGAacVtARPvjs5bdAxy7rZFYgRzf5uCk4rHXW1FMyzjeZwZCydPf8A8ogUF31aGp7dxTkjNPeEPbHx",
  "key22": "3KBvtnunx1jbayPVRo1LY7peC5KtRoSGkjSwSY1rKfq5DSmjbdzPU819yowUpdyficGRdbVtNkzWX4sU3YrfDFLR",
  "key23": "4ZpZwBXtPJxQbZ6oZcyBQAk3g7xu2uvJ2CLKaKGAqbxAvs9cTazM91zes8NsGqviEyubiGRBdq7RVxJabmfpxBaX",
  "key24": "4YbemE8L9E1mHenDfMkfw12Z8T28VknQqfyjvmLXXeLzrvHyDmFzpRJsf614y9484XRPRDYY37jRBAS2yRDmAgYN",
  "key25": "2Vg6YPs41oaetGsvgKqyJ9irMJvYtLKbqPXKkCupwjmCt3LiFx8jAijKSQzKM5xeWQZhBnp4Z4VGnS9shpcmX4WX",
  "key26": "5TuTB71G2Wong3Z9U2qKoUBmJW83qj3YWsjKV6uFEirTMe41L4v6J7jJCzYEdwDszR9hWdtyZxzLacLEyYacit8D",
  "key27": "2h3AaXe3p3waEzpuavJhDPBXhd9QgJRVAL1Gyxwk21Y3xZPS38LmiQVhNtCXotxjZo1bSWg1NShAaoPbpErTtTUu",
  "key28": "qS5aYVHX3vZKqUU3jhRcztZqES696FGgs7iBHB5isFtaCR6QdBAenqFegMohYY8W741zAbbXY3XpAsabZfYcFo2",
  "key29": "5mfp8M2ytXH4L5VBWNw6GcEi1gsX9pi3VSM49XiwWyrFEzNY3k1X1XqzhVngdfJ2vTEuaqDoCyBzQsPu4A4BLiVW",
  "key30": "2YTxuH6uDK49sfSayJcf2qQqk2BSTsyJBiTUHLZ4yoBVJVtoSRMqrni8KtRV3taRi7WLbZdnGqrF7fvwjr7RpKLP",
  "key31": "393XwcdXVYyLLMHfgUEaqGqySNW6WojYEzN9ta5Y1T9uNRnBAHPeEhEqeotTSjcMw8sTcfytmbEaitcT76PcwX3",
  "key32": "61XHahhrAGKEqNfai8dd7yMx4GsakaRtpjZzZYJbN3XhgGSvh16oKxj4B7K7Vawr5WEaqE1DHQUc9cyzk85TwFDw",
  "key33": "4tquwbLFHz2k1ArjkwC5uU2jXSUzyybEmdGQZNs6Nzuuz994RKtw7of1LoZwMBGXpen2s7uJamPAaqJwdbPQ2Rto",
  "key34": "9Rc6VjhCbhGJvCUS1bxMAA5HHANiSdDrvPhGG6nbMQGzaJQ9khtsEthbbL44TAk9WkfUATdbWH7yXijT7v3Y2js",
  "key35": "2VbVBxqWuJXFqSVRhyX42Ed3yZM6YiV6i5d3WDWV2QSxAJVhMoUuQKonrq1Hy6Qr27uj4wW1ZY5L5MnsMY7X1BjG"
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
