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
    "4Gcs6hoBTUyZjm1qwBdvBvccXGYWPxWiisT8zUoZNuAajyp6D5tHjH13JkWyt2xfUnviZtwi7CtLvFauEbDKGeoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkZeeC4KhiiAUP6m7wkkHCKPij2SfdAB7FpqXeCTDjLTM3g6snR6uXHjjjxJM7XL6RnwSSqSj2JT87199vh2pRS",
  "key1": "4BkkTYv6uE5qsZx2k3bjKZYdUzQnC1hFUAcJU75Jq5N5n9PUrTKWiLcy7zP811epQ8wP6AmC5ikdqf1LSjqLS4nB",
  "key2": "7vQ2kXqLY69s3srToPNUemWwyxCdevA4R9b4czfXj7fhxWjdtkUJ532FCHWtVLhMB9xu3Jd1QU4Dtws6g434gaW",
  "key3": "547z2UMuqjvddkBwo9ccdexMmuSPPimnHMrGx6X1PWhiLaZ8tuQ8ioz9ntgeFbECeb7Dz2yWUY84zAQiz712YR3k",
  "key4": "4Dj6e1ZGxMJVhFNxxCjFVCfJsmDJJC19xr7UMpPr9WqdzyxjiEhcAoHNauZcD95iV9btBxm8RmmZrXE3DmUVExSu",
  "key5": "2kD1CP2RHhZQbL3jhZLRMZjXWzxTHVyXLaVfzaiRYrFjweiZYMmUURzZDv7sQG33xDwaZJWZ2mkSmYxgrggBEpW5",
  "key6": "3JbkJRvnQijvY1NFW487GQjjexFV8CWMrExubXfLL27RuDN9Jw3DCYpqWbbKUCsE8SrdGe6htsngVQ2AqUNykwgS",
  "key7": "jyPHcufBokEHmUUwjvLMfaKnUf577pSyZ1U6dZ6LCV6mmFLRpY23rLz5iYitQmRSUY4Q1ujwxuow3KF3Lv9nqnx",
  "key8": "GVqYTmQSGVQKJZJ1pmAL2nQJKQjhPazNJMKBdVz57SazuNoWZQ8x1a1Lca8S9WTTrsmSvtjaK41pJzD3LszDcKm",
  "key9": "5hHq2jBwYYzoRRPXze87XjhoKtyJkTZ6W1FFYZyAShKHWjRAqTFmot5juSB6auPbRBcBad4eXoc49aPanp9VB8Dx",
  "key10": "5u1Wvum35gqQVpwxoR2m6F1x2tdwSQSDobiE12LX19bsR5Q6mv4ChJvAe9eisspP2yxZMMJTgVcS9wuvS3TimFbb",
  "key11": "ERRcmPKxiX3gLK8tE2UqWA5C6QhyazV7b6hJo7CTG3b7yue7bmB22LxU3V4DVP7CW7sEn7T8kybjBPrwycBATkx",
  "key12": "2jDByFC5cw4sAk5PTUUzNrUvhZ5P83XcYTkdXsk8QufEAdMKXit3KrvoHXy47AGjMrEE6Y6TdX3DE4KjTRnavFZt",
  "key13": "4iS631v7jGh3HLU53bgLNWDuzwZecWAjWdQzqcadUeaiw9NAH3MrJtMyGxrH4MiiKkaX7egcWDi6sdEZog9DC9rn",
  "key14": "5pTY2c1MQKsmr2tUxtgA4jhueKSFUcLnQuFSYcKaQvQgsrTXZzLzdbU9gdZenaNDgSx3mEUozzB8bYmpHUb9PUMU",
  "key15": "MmF6iguhMLxCnoB2cXkbEYwaydaeiHxWFEZPCUoJzaQKCMwbj5M9ZYq9Y34ESJvEmEswTjxHjr3gXLfkSsxjpyv",
  "key16": "2b6MmtneCq7CE1VUEaDkYLtxhZx3nx8SkZfyt2WawQkEAmWUDAp3pWfSXUwEbDRTJmSAB5iwqCcHvfuAhm34kfC6",
  "key17": "3egR2F4X6c7MawbfeXpAftGCDABEGW4aPurnQbtKuGZiMiyG8JtRkBJrFktwZtjQEGJy6spnkA8aWK2L41BfSyhf",
  "key18": "3QE2fDUqthnNf7QNqWc65Wo6YxeBywkdUf8Aq7aFWyf2xDhmxwX1DWMUBcK5ACjnJ4H6od12yyoodNGmuRCWd1h7",
  "key19": "26yCLbTqoYKxYKd3oUDXBCW2eB9p6kgrF2AZpyXgoDnL86VL5dXrk4puSXC6rA59iKVDTqG86c64KBAHdYmqzyFQ",
  "key20": "2AAJpvwNU2H6YuVqgsrfZyvnYUpdfiLPudZVgPQvKbBeY3dte3Qu8rbKPdyBtjRZsFGGZB4HjHM7mt6NJouqciJT",
  "key21": "5ehhRoc1zyZ1Myqi8tX6MpdsnEVovkmaAi9LRgCAgcyVLDq2Qq24J3wekB4iUJXdowk4pVt4kHt68DeFw7fHVGVY",
  "key22": "3DiKM3pr86q8pw51C9T8vnsc522GA49APt8nyAWZyFhtfw4RiT7oHRdtdbSmwRxzRpVQNWAKawM9SEAtATXd6CCc",
  "key23": "4qxE4D1GjhFsfDiQBznb9YGbmYEXudY48E9VSJMcMvT87kF5YVoDfzRVgcGCdqcnY71jRmBnaGRed76siydVCAaB",
  "key24": "59fpStbjPGvWXxovL1WfTVUL9kCcmUXnzRNrbUDAAH5o2iimemX3JLhT5FsSikd4cKqJXZNj3ByW52utpRGTZKFn",
  "key25": "3eHFVeR5Y3PtTWF6NkJ3yuyYPkfh1PGD7D3fpCeonosN6hWnzNjDjTmDTFewK3vjgRD5zmHPw7hTwCW8PmMZ7ex1",
  "key26": "64hN1qMZca96DrSqhihja9HdLr5XiDbMCavW6F8y3h6NmU5Gzeeo8AWAKdMVtJbxwWvLQpp8RACtxnYRzhKvPBvG",
  "key27": "xT87fc7L9htHNFAzxWEdCedijLzsFEGeMmf1x59t4CorZhnfjx9wRydEpyDzgtU5QRdP7WmGNeH4rRV7t1qfsGt",
  "key28": "298j7tEXByykkXtVbTpEhbLvA6ucnitxTZkPqHLrpKTNZeU1kzJ3kBm5zcu1V41mv4vBr6H92j7A3bjnLbDXXreP",
  "key29": "3kZ5gZiKANHWFM96r764rJ5pi6xMebkknuxqASMnhEK7dhsUxycudT6k8JNrrsBALGJfv6SVi2LBv7MNhoHHuoAs",
  "key30": "2bK1XtSRCW1vTmAQz6iU87FoE5G7pzgiJgSZfBvjHSPE1sRWbuB5UFxdsuRPr4tAL32GUCFG6qFdL3YhqkmYhiKg",
  "key31": "4Tbov8vUHv7d6hkjkXUGftZSJ5r8ES4ZfVrxD2AG8ovkQGmi3wMBip22Ja3iLFeDjqXqxkn7oUCK27UjSSbLagZ2",
  "key32": "3mEtjaXKddF3qCVeVpxeE2LzsPsz2C2bf9GjEz9JboWvjkKhFnhpNgJoW6FjjmLsFKV3nDqEvFVvq2soo8ebTSbo",
  "key33": "54vttQmgRLFsqSvf3HbQAKNaMs8g8fYQqo1yS9aVXNHjRwe3wWVAZmV7WvB57atW51iEztWvgSwU5pqY3mXKhCj9",
  "key34": "2UaEUBJGGYx5Mim1wmj1fLhomL65H3mJ8kPwdkxwa8VkDp7cSdi7uZgDWGsAKRd3Zd3jdM1ZT8BvkpavsXVpoYA",
  "key35": "2WgKjFzG81Hn32PKYkHAPJDaRMPq1EdqTHbKa3BwhxazQQaoUyHYjDxtFk543eksmDBKpHnGUMdFEkBZZp6wNPVX",
  "key36": "2wtk2hyHZc51T6BDYSQ9QQjpGbP7s4EE6bR71euYExUzKk8Cdm1hnrEACRz646wZJJ98wjGGCbTDSqxTkF4JkJiw",
  "key37": "2JyMax9zSoLWpakamW52QUyER3wAcA8iYnjHok71TZWqukeqVBAG2Hs7gVB3xhDidnSP66jEHkvBDk9ip7FWFG45",
  "key38": "4aHzrmc7aSMv5HNRfVjRK1PaDUodqdMKsYBkMJpWy3RzrTfEyf8FjReaVBxLRM1FCAsr7fnzCbperRenot8RBrkF",
  "key39": "2VvhBvHowEfrqWzZadMb6CAEE9vWVqFKbv3XysQ8xPKCYtKgjipYxsGK6TB2UdcuSb4YwCcD7YaVv6Yq2o2SMdu4",
  "key40": "bRyd7JWqAWfEASw4bXX72SLHGaEEubgpxYNiKbv2J2ufNJoZxerapeMsquau27P6mKgPvNkG2PYxFniSpLUV9KZ",
  "key41": "5XaciBJd5JTCCsrG7QW1jdxSck9XVE7iK7ej5ftLDkWCLbtfZeuiKwHwiVtfsGhMds7mQi6Go6gy3M65UX7vYk1p",
  "key42": "3Gcsi1FBu9DVJkwg67phLqywXCN1Cc6zZtUa752mCyAgJCyoZD1p3kquNX81tjFrstqcDCx3TEf1nEoqTtzuWeig",
  "key43": "5igbng55KkpCK3X5UD55jSJzuPxNqteuq54ZJphU7r6QLWAD7nHfzweQWapnNdWcBdx7DDA5gsW9jUP3Ubu4W5uM",
  "key44": "3tRmest7SybQTN3iV7tpGyCnqXGbKRhhJAM2JpBu98fNAUfQoKKXz1b8i9Gp1uV7CFtVcqH5NaiAavueU7ykBEp8",
  "key45": "66GVRUbz8f4tGmZPqBjsErJDkb9FP4WSed9n6C6qtQeR3eVpCM5W7NwYqSFY1YXJ88BPj86ZP2BbZv2tx8bD1th8",
  "key46": "4efC2Vb6GD3DtY7USLMQbfK99uGkWYKmykQfkHizAmc7TXNtaTsyeU1K9uGtD1tXHBZpaKmaZjgoe4tiarEagqtF"
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
