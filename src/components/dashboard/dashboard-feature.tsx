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
    "3HKGLYC2WebrJnEMuxXLdh1C6Tgn6NAR6zovaXsQjNcsHdcvg4RYE6668jXW8RcvGn4A4bmCsCUV6adFPgkB1Vyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iANXd6ewkJAmycRDe3Udyjm2Q4srRpRML37uPed4RsWaKM4Hnx3x9Y7usmPKk4vhoH5XmqygYSmQTgjM9TwBoiG",
  "key1": "5FjLJDX2bi82yHW5X5mDJ3nmj4JghL1CMriWmVhK4yA7QFn5iHXMrhoHqsigHkwa5jLoLVMprjRrW1vy1wMmaNts",
  "key2": "MvGWKQnJQJR8oTPewokZhYTFoDUpwnfKAAr1m7S7UKJfuVHshLfkRTrAiMjpnzDK4kZwrydhARd4b8JDKWJNv5Z",
  "key3": "5St7J9q5L5Cb4HH9jMijqjwBwnXDH1Mp8mwWnoZhWnp6p61V1pBtMXRCniSPRf3DCbdhzdVmJjAyGyvTjKZfKjtv",
  "key4": "2UYfsLvNP1CGBEBvzL4Jcb1gudjmP4Q6nebZejjZbcJ1NrwohuyCxMdJgWJTwUioycs5fwKkxpwSbProeuBExCW1",
  "key5": "23g2M4RiU39xhu3BSVDMkqj3RdJQuZy7GeCzq8axZDQiQ7xJnTjaij9KcmgC96uq7Hx1d3hqHLiMnhraktyWS1AH",
  "key6": "57814cibnunMewivibyPvwYwAvLd18QBwuJoun4n9aAnWvXQWKLY97wBqyx6DEgj9jbrdoSF2Q9D9i5tx9BCvayf",
  "key7": "2RAHvvjULDhcSLPLuL6wuna2pgdyKWwrPNMG9ESmcUoexjUJHykxprhCgYMhNYJLnMhPt7pzPQPdP1TGLhJn4hi3",
  "key8": "SFNPqABFivmVE4p9XmXZo65s92hpRSWeH4eMrk6aiyzGGWpVMmsioY4GHrDg1YzFTRtqKrkk3FKNCwhkHXM2fnD",
  "key9": "32ZVcX9zKAvBU1L3FXSn8QXAPZfMU4U6yTBtTx2LMonqMgmoFnaX7WxhCrLbe1j9PTSL9wxnmvPXrxPtQjKFEKnB",
  "key10": "5xGjLxKTW1Wxdkbtogw35MUo8fYZwWeSmGWraqkMB6EaKhxoSvSazFuDZoJQMjyoMVRuFjgCkmDQ24QKjTqt2GQg",
  "key11": "2jsLPy39rqc8uaQzf7XWPwDt5BymVW94aJbobaWQNtH9hb8T4c6LHumsHbNq3g4gfLjTqDKY6rnXHCmbLrCzW4Mh",
  "key12": "3ksUv3tzyctPGqrHsA1BebEEhy5JmY9iKwxQV2y9HNH8bv8fscbNJ2N5FrhC9EpPawz92q5xb1LZL1NVEeEP2EL5",
  "key13": "YMwFpDUrn3uikozMwQFef4BUvQop1gFuQiFf5DPE4n89fLTSJp1rWGwtvx4FdpWgKr3oJ51SS7x9N7rGbSLyDKn",
  "key14": "4S9Pst8RqpZDwvA2ZAACCTEHJtCz6NBkL1KxHggaVnXPzM9HG3wggvhH7WAfKKJHDtX9aiZjYMtqBoGjPDrUBFj8",
  "key15": "25hGDZ56JuQqc5PzCQVbaLvFg1vwfvk8sJJi4yBA4q3K3BDjJ9xQ8SDoccaxHTEAhEYxTa6tkp5AQ45s3qWYrMow",
  "key16": "3oDA1mUbgpF4bBMUQehtBJceqj3Grm43fBEBXK6wompetXq5H8Ajj6DcGwHghg2b4Z5HqAkNjK2AeT4inUYY8ANj",
  "key17": "44LzVZphEN3kzBAfFDeNF7HjmsbWcCXTonoHwo2HzTPrwVAof24F6jHCBsvVrfSE78VKoDjykzQk1aBFiLMgxLXm",
  "key18": "3DoHKJo8efccfWGNttW8kuryzfdpNquzyni7nfvVFs9o7tB7hT5smWV4MhGarTtt17wLUFyHzsQ5qahZjvKcNrvW",
  "key19": "4Ns7AAHEA5QLnPojNsEJzA2B74nB3PNHze8DucJK53h3FbuH1kao2hYeEkRYhyhYpVxqkGVB1pMkTSjSVaMVy1ku",
  "key20": "WjrNEGKduWn2jkNrH2GeR5pCaDag9fYUh6JkiKVqqw69RprL1fZro8K4H2dbgSxAmYnnRJe1BThfs9SBSc2kuPw",
  "key21": "1EheDecDGGspWNGjCL88wTLJX5u7h1EvB28tXAxLicvWrCE6J34oD2UGXrGoFr4gTEwyMts7tcBeHxng1y4SJnK",
  "key22": "5uuMk6wfUAZFucciCPmpJ1T6uPNN1LPj8QDkAwmZxHBRTvS5oyujorXcJJaegn8X14UWQULrLAsZKm1GcduU7Crb",
  "key23": "2uBxbfGjzKbz515LFmzUfzLgVGYGr6FauupM8s9MfjmpJGebEKXyf5jUbUSkz6KCz9exguQbRpKhUpn7FgBKvvMS",
  "key24": "55w4pq9sExnFxn4arQ2eR1sTYtF8kB3DuRsE3NP6V55ERpXWMoQoF41VV4uTHjiyKTJ44UAj5QfeQPx7ifUUKPiT",
  "key25": "5VEiJxBrdgm5GpexrNQkHQ16Tr2aoCjnR7eC76TqLcV531tv2TwR7P7RYh6DMk2yqhQr7xiSbzXz8XtRUvKWPVPm",
  "key26": "3hY37s3oE6kvi8w75bGu8wmfoNheCRgNHkDxBq89ptNQJRr6xbH6UV9my3h3yqCd9qrxqFXPBMX4dyTDmjfnKK9m",
  "key27": "7KJgYG512AQ4RQEXyYFmzvvSbEd9Pzgk2BTHS2LuLBTVnU9HTMpvpRytTUTQ7CkPdXTyUxsCmqHrfAcHxxGjVpN",
  "key28": "3aU3eGnUe4fBQxzd88a1Krq4WThdJXYkYPB6uccUNF5r8LXh3QwWZdvjkSe6ERiGdSN4QtCY9N2cyR5eBqPK1WRs",
  "key29": "B5mJqduYS2VR6oEhfnkFVGSCC2zcH2FzghoJYVJ9MqLhUqaqKjriAPLRfMsdDRJ1tXBGZMr1fPx4YxLjP3q2pjE",
  "key30": "2E4aFAiDFVL6tVykkXF4MkwWnVFMJPmuNFugjYU4UjXmuytDaPZfyXmHjrwsvPSQHw4kckoCaFxZB3oXHgws6WG8",
  "key31": "5jhbSSt53zwtHarLnwixxaPKavicMuWi5DqCYWSdUKJeWLUF1eQr6Ye82dLoCfmtKg3cDN9zesNVuYz9TAey5aWS",
  "key32": "5SCCw4cMngDxn1scau2JpGeRx1VdNCu8xztu7WP72AGXKsBuDC3YvhHm2tZh2V7NZFou6UHpxE8TWtwk163bR3gM",
  "key33": "5vNU2zoHc4qq5AKmRUanZNtAjFKNfNsoiwxNfcAQtVpyJqfFsgMGfrVBZkRbt2c7VKt7GTNWm7aLPQhsxzeHnSk",
  "key34": "2FTsHu9aW39iFR3dDwxf5mm8r2bYEPKaBFgEZDuLSyTzUvwHke6h6EnR4zHPaEN4qu1iXyFwDxAkzRuNTc4Yeh5i",
  "key35": "21zeYk13FB2xFzyNaYkS5ktymbhGUfpmi93nxX9uXmbAxWzxpbzXxT9TNsvWc8aocFyv6M7gKsZqX98CmRJbS6eQ",
  "key36": "2m8pRgzDTtSDb2FrmX5xdXvFPo5LoxzGhDFgefSXwTGgqUncgCqwJWrhPpViw8op2a4cqCunAxaDGff2EAc5xG9a",
  "key37": "ooi5RgVJiEe9XMdWf8HcRerm1qnXKhXEWw8hTrqqAwpfoPjqqpkswAmZK422pZuex6cbTx3P1bNyCk9HGYMgj9j",
  "key38": "2ykKDS1G7rF5q9RgMhuAkzFn3iJuDPjQAhZsVpaN4agr316vofBfvzpsUJeTJmnixZJX1n1umkmsRwrJZWfUa7Wi",
  "key39": "28hCg79HRpmxDjD33jUTDa6aszusqgq8JF4SKxyb6KeJq7FMxtSoPwySua5UvchscK5nkDCqQuL1xoytPHC9fwqj",
  "key40": "2ufCqakuvCv41fy93q5rBWuZvBtVCu8sZJRV3eHgNZXvr5Y7r4NbSEkYWqLkaoFGqSLDXeR3MgapBH8WgfTyb9z3",
  "key41": "5y6nyfZogyXYWCKfCw7L9UngMSKMe6NaNvEfBHvThYaS6X1xL3WfWKBaNiqRyLRm76xAu7TtdgYGQD87yeaX5EEz",
  "key42": "2pcw87qd4gLfrfMPRxGycuUGvc2juwwiQWqRtym458BLZUirhXtzyh5rq7dHGuZHvFkFu4PrwNGvQ684gAabJqWG",
  "key43": "2N1FHKBeNxke4b68Vcnn8DnMP4TY5mxCSvUMiyaE8uFkFUeHroKKEDc1tAhJ2AVgPgd9VendhoynZPmZV6RYj5Rr",
  "key44": "4mTMXCTmTitVu6KBh4KkQSdbStktg87GLDgEJfmrUmyyyPeyi2dqrRAt5dqQvkRnFJjEQSpMKfSyE5qJry9qujnR",
  "key45": "5EyBRs7dEBTC3S6A3XBAhNbTdQ2RidY5TWFy9ohT5btXTTCmJXCSMi4HfPrq3BgGzHrYrF9MxV534zT9WRyPKvGD",
  "key46": "463jhft8aAB8vzj4o1qGTJ84F7WaJEXF32Vz6k2DqWnJpeMTETcoVGEvuZjnry1YpE4E31UFLE8PYf4YDqVSsWen",
  "key47": "4JqDyeMHKeJBdZmSebdhBgHuxxExS4jy6tQyjXTv6V3dFKVwe3PPXrtC4eEsh9zMSMyWmRkBtvJ4ftY92MjbPqCd",
  "key48": "4tQwkW3NvVuM9cD5tMozoSnaePEkZLAhh45Tg2Dkkj9poz5XAJC7dDp319RdfUcHGcbMNNnDhpe3uLY6vHwYGCCz"
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
