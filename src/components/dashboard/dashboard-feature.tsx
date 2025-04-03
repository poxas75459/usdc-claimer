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
    "3mWkLarDRnbfNxDBXGq42xGmwLc6ojNHzopkfYyBnqkedsm4n3Zj4bvWJj7uSnnpeMQABdd9jL4YkGjZaPpXRpBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awVqaP8sUsM4HNaTsWwLsAoFaat6UixhsLD2GJqPyFRHRBXUW18cZMBWR3Qm2wnDR7TtZ4XNKwSZ79vNeDMBtzJ",
  "key1": "4vPVrZhJhmXW651EoXcznoKq91X5VwxWJ3ogUQsRYUY4mZWijQp6mGMbG6pjhJQrAm7ibCsyk65Wo27XDi2DUSyV",
  "key2": "2CoXpWf5BaELAHZcDHsSwhrhQgdWAiCHt2oQWV9EzJFgBQPumkC354efD3ebUzrc5xSUpgLFKUYzQRSfEvHdfuCD",
  "key3": "4y7iWRAnZDGg1ojNSKHA9aHe5L83opsRh6ps2EG6KChUsrdhi94xUfpuNa6uk8EyoPqWzN7GRo45NCDHSj17ujpk",
  "key4": "21fSHc16TsDcaE8brs4A55gsGuNMFtxpULP7LWndtnfYoqqaLE1nBuPnGcwkS6fGHGk9ueZ7z12V8LFwaSNLZ3Gz",
  "key5": "3GkjZCXH6kVFK5BfRjqK9WAxQyDBLrsRvu1YEbKhWrnEZvL1nT8Vx1CqQic9AYRsypk6t541zFzghwHPzhzfnJiu",
  "key6": "2QcRy6WBsmeiUjr1hrZm6o2pByCQXELgZpXVTxavvaNW7p3Pwvdy8VvCaLQpjBz4vRsT5vPHs7Mf3KAY2jXsHbfW",
  "key7": "4T3KCbcgFJbS6bdCt4L6YQ5CXkqKRyRMWXx77BF8gXBrSRQYrWiDp7UyL6rcC5b13wS2LWuYPZdP2EqKJ1fzcEv9",
  "key8": "5e1XA1K4jz45mokei1srasY1QgGK2mdYFcG4ZfwB6zPUFY7yvBgzTgrB7k6b6QHWKaDrSoq9AZA4qFfTTa7jFY3b",
  "key9": "4cpyj1fg3f6HvbffFxkfSHjR9SX8g3SWPdnzipao8D8RWuY7jyCDHUdhJ2Y1aHS57BLKc2p8mNUC4Sg7ivCGxZTf",
  "key10": "4PE4UMYh56XiThjvxQ9mESi45dsp7G4c9FxKAPxaui5svBqty6wjmtJpcPLiZ6eo3LyEQB8ZHqP4RQjLkk2BzmFF",
  "key11": "32y6gU9nQneSqa7uBciy2aqWzMMCZHGjnm2uaQNpxPxyCscebAeZMGsRF8vinnpAASQvREeUXAHy4L2mESpm715P",
  "key12": "z2tAJWGwWHL57hGPKGprJAyMzFMD4ZrYMNBS1ABd6aHKwNc2MFEmnLfrtfBff73rZ5udLzfWWyE5KjcuHrcztSv",
  "key13": "5tceZuJDyrBZkAcdJtb69Fics7q1qUAJrE6XUdhYnFV3uJp7DzRyUVC7gkzP6W4e7r3iwMhbGX6uZCKdd1PFEHU7",
  "key14": "2WzCj7ignWSFKZvQpRSCFb4kPxx9BQ3XBDWTzmR6GQAs6PP7udfmt1nAtQjQdoivgz43N7YPZ5PFAdsczr8QapBF",
  "key15": "4iRxVZ1mhAU6MP4Ce3kh6UPCoFwwJb63W6nZtfpNkBKVPKZyYabhxdMNJ6NoQKhHfedK8d3GtMQ35YWqjTEHuLT1",
  "key16": "4PWeUT7Yd9MLyXmARjLAEHonPCdT62NyzZ4HRD3WXvzcd7ga7b1LGsXNMcmhSm2e6R2vmy1Uzezpx5NQitWbyH6d",
  "key17": "2d8ityGTuo7rJ2YgZhzvoLy4DCwvEAnvkrXQVbCjyzbpvYjbtTGRXLEHvPfDn5cRFEUkB8r26U3UR46PY4RYauQ3",
  "key18": "4opuMej2Rns3JQ1tdJFqcpKRkwvhB4i4sP71wvDcaJWT8hsA651QZFkd99cWxxrnoqoacRty473dirgK46BGSQeu",
  "key19": "2xALxhMwDnKFPBp92TYT8gmNmN3rPQyKDBe6Q998ug6PpnEKtfuwSxKT5U49Zj9BtFwYSgA3jdYB9hLJk138ZBDq",
  "key20": "2oje8VuExdzrEF1WFpnuLTURHRkWueTmHR3xruUqpmqfEXmyd7eGH4qan66TrAF3YazqmcoTxj8vKDgJ9bFkSRzX",
  "key21": "eJJ2jeWqhGbGSBpWAyqjDvFN7o8cBjSzaW21SSkroQXEoKhC9NNP6wHU2YChC5s6gxQt5QtXfUbLv79ps73yrQM",
  "key22": "5QiDnqAFDUrkfA8Ay67qjNxsiFYGEra1F7DqP8awsjKz1giCYVLMKptLGyJGjVFtETgN1Cp4AhasB6dBDKGPQ57k",
  "key23": "2K9ZaSk1hpaGvgeJH3xu8ykwz6qsP963sLQZbHcqL8eMLcekLygGkUyNxwdHzD4gPvJBTQ8W5hR6bkauBDcTTSuv",
  "key24": "Hq7iXb3YNbfuvZg7ZdBigMoT6rgD3nyi89CHXkpsMtvBAC5ZvDzHGbV45RJU6pjwbV28NfDJQYTWEbMw1fpAjNY",
  "key25": "4hXqLM6aYojsqRekC9XjRggL9FqS7uTu9YErSfkyP24BynMDMPdaEpZnp68LrMTkRsYL1w2GQTALpVkmgi2FJJm7",
  "key26": "3RHkaNypRXWQWWHHXHUpyVtz3pXz6hGLLdEQwtoE9uv4eWxe3vcscWZTXWfcaN9gf665exuxL1QBbFm6fjhcWkKc",
  "key27": "66SzryvpcBwHJxRrNaRPj3vyoojK7hznBwa1KLevu82VHoJHdFzDuesFwDB1dJxK8A6NuPpFwk4xKnrdg8njzSyx",
  "key28": "2uDcZ1w2aFAmAKTr73ZmzMP1zrCYdNqbveLtuE2HxanV3r4dtoChrvzBGkzZpX82LBXudBCCiC6Pe22p8ThxxrUS",
  "key29": "36FizuJ77mMuonECw1B2N1CRvAQZZhUvNRWfjCj1q7dfc91R8RbdCGPbQkivecfcWFQhrEicHYsde1SYDVNGtKDN",
  "key30": "2zs2aPveHz4HjMB8oUd3A5cVegVm5BaqkpnL8FKVUQH526o3h2GQvBXaeC5hQe1uz7n774BaR6HL8fHeyLiiJABK",
  "key31": "57SD8jxVw3vXq4X2F8x6kAtTLMgrLSw3cKaGcXWNQtA3sWAr3botNdxme2QpqznP9gmd3iCYrb5zzU47gNjU5UD1",
  "key32": "5rXczLLVczCYSS7QMCKvzgFSEQyx12RRMZu3hLcE2ZokGuSsXnykhNpvRwbBCH15xsaJKR1r3LiifVa5WQGryv2a",
  "key33": "tLDz8x6YmSvdtPiQXq5vJj7TgHAVk19wxzMdf8yNkvwkjkzJeT2TsxvApmBU7vQmVmyhPGeuGsDAbpWt4pQJcTL",
  "key34": "4BN96XwDHv5g96mZt575AZ5NZe3wkxhkvznuxvFAHx96znvN5aLyPCqPKYrPXvW4PTS5NXStBpYbS5ANmhuafjdu",
  "key35": "3njCrQtBBz3uTRawXVxLyeH1xbrPcUHHU15fLd6K3KnsTFXAU5PseQquRGf3rAsnVEvsuhY5gxpX4KdvtHF79nqz",
  "key36": "2w5bhP1rLXKgVpmM1jtv8RYhKorHTKRq7vCmUKuR7eeVaMwQ3omBxkXT49GxaUXk5bGPmvQQzNYRzbXS3VDdsxT1",
  "key37": "3yTnHKq1vAwA7uX4JPHVzFRZYn2nCSRqdQtBZDupSCkaZC5wX6rHDp1u1H8Jr4g1pbRGR4DPVynL65eyUb4FKxtE",
  "key38": "3eEFSFzYJTUSnExMrNZJ3kusEUVB2DtjMpwNVY7CKhyfDWimaYkp2rYUzFCDtNnY3C3qQBmqTtRAP2FBXZ8s6e61",
  "key39": "56MF7y3x6PUR7WAjSGUwGauaSen69FvpN3d1JDmHbx945skDho2KjqzoFrY2jhqHjwkwTcwXXq5dqevjuwikaK2V"
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
