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
    "2JTirx8cgxz5huzsNkN8UaLSffeViwnYqxBTPsTLULt4K3zKQkGfuLYMfnhL4qmRVZbkLjj8XjrghtAwsrfFYhwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpHT6rEzFV2mNQDLJg2BE9JhmP49grjes4erwyWmCeG1Y3L5NcMsso3dVf9Z4UukUhx6ZzPpBmWf26gwwJFfJau",
  "key1": "5dvC75jqsRC2N71c3iVCx8Bm9bdJB7T3J6QcEJ7DsLwdEQQj8MX2nzb8e1xQMvGbathm8eySkEbCLN1n77UjzRa5",
  "key2": "5CbQvVbTNYBLyNiXNkNWMABnHvS5YBzzreDGZiFB7zaU99VyDVnKuXAc9Tf2QFWaZPceBHA5y8ThnuNr4tWMBhj3",
  "key3": "oKq2coVGUe4intGKFJ3BNNL56BTJX8g8AozTWqmCQJhbzvaHWBcAQKaFuGH4g6MuLmGeAZQAeFPq7Es9DLwBVmo",
  "key4": "4TJirHsunC4MF3evtiMQETfUSCQRtUJsZXREAL9biQmZesczLNnYGeag6ffA2MLYrnBAC7NHL61ncsVcxDjoCas2",
  "key5": "3dWrM4fVYNMFfrVJ5q4ot5MPq43Sknm4zuwMcp7CHdNPViLubNY2Jm2DoPgjKFfVBuYWEpqMAVeS9TRKTQUKEaWW",
  "key6": "61ve63A9am5z6m6pRRqHGDJ7HpM5Uncac5hjhjQQnihSrZbtYKeZsPctdveDwnSifNMkJjeDuLxHWNKszPyM3HZb",
  "key7": "5ycT5J6aHz1zqwYW93PqBNwm9kQypXsRouHg6pPJA8cLoKTz5erEbVo7mGUBFVAhbqpAjGQfco17Qo5jv9NAFxNT",
  "key8": "E1EKtJN5eALXMfzDq75QFabTctdqzLCuEKiBRmzpNySG2A7z87mbxNQQTSZQe6rXBtU4UkcMgunmXf1mBLWpT3B",
  "key9": "3r8hh4tELGhj2a4xPu5nhGXa8prhsN5EGUi9dmPQff6ZGeKFpdyLi7RVoC3QA2mf1gQyGL1wSpnJeBR1BQqNwoMr",
  "key10": "FbpdGgEbXUMCvAX45hiDMRVx9EzuBVC7v3385cAmc2kyTosgAma2XycW9AsADj9gDtcCFfRTqM7YKjPRzckQooi",
  "key11": "5zQ1jwvk8Mo2pfQRoszsmbuFDFfpnTj2dFec6ewGq2db1HBrUhqwQEJWHbxFZjuu1jqgX22nKboEYsGMcurriTyX",
  "key12": "5rDSVe5ND8tkNCW86mxwXN4wqvBLiTwfvdD8Sv6uQvckr175muPu7siWhDsAXorsbCzwMN7mET9w6q4EkipLwJbt",
  "key13": "4vJGsCpHHa2DDTxZB6j5mJF2Fqg4TJtCBaNZwdqZctgBMyue7poZFkWt6wcwhbFoevbkFYtKAYqE4sKj6kBorc53",
  "key14": "53n7W6VwKWCsMTWdEXPQ8ojf7hJVRUhhe5NLdr6HPu7MqXqaXAB84o37UjWXhZPMfFDVUPZd75FxfeSvtueEXEdL",
  "key15": "3dBbtWc5jpEtPUWjwWnQKEmv9E2FqLCrXuYkzi4qHJqWg2jnUB5seKFxbkzENu4AxTtnSeZ8jexAnmStRNwtV8Gs",
  "key16": "5esTzQbu4J2oRe7qoU6GUJxq8czkvhMGuEpq5zvABW3u6bt6FkQ5rhXnkimJ4FFnagG3mgKGycwnE6njkhjgx1hh",
  "key17": "3t999YkmddCcMNpeiBmvEe7vhDbuRXicKpFb4211cpDBfBMq38cjv2qmu3DNUkhWceZbUeox3VWrdkPgp7dVAC6h",
  "key18": "2pKyKDNZfJ4AvZta4E9VE5poPC9Pa9VM1dzakDda4sQhYhabnS5GXwwLG1KTCYg8ucMgRVPpEpUhq6jKR1vFrfHZ",
  "key19": "3Rb5WCVTNguTgaX3A3XXHBubwUTCvh3ZfDh4Ykz9nL4tYJPPXedoFy1GeG5wuFuwMc1LBGDdN8sXXkmV2XLyY1nU",
  "key20": "2a37kq2puz31RsGNxusPmphhLkSRB5Nq24zynBWdc5soCAAiW1VWi68xa6zDDZPeJ3iaN68c36YWihECuWFcCApX",
  "key21": "2AfJZpPsGUwNZxW7UfLRBg3jmyQKD1CXM2eo3uboByRbFF5Rrs5RXwPaAqK6WksJ1QgfSCiWbvmFX6WMAG6C63Ga",
  "key22": "xdmUUQXWpuGLvXFRPPfh8jQa9L5kgGF9j5yJP22XSkS899sSh619FDnR2rcR27GWfLbrj9uP8WKb81jcP9jFGXo",
  "key23": "4kpCbewxbZZX4X61Bm7GN9KAFb1qK3VdZpthPaZTxMvPxvS4pyF2KHgM69Q2b29MnMmVmqESvJwG1HYvHjCwUo8i",
  "key24": "3jQ6i4AJKHZH5pSRCg9tQTcAc17SAWuStY7GKLNimJTzn63mAg4GrgPhsvT2zee2gvpLEhZm5UZWEcHqirS5uVFk",
  "key25": "59maQwfUhEhRzHZqTDs8ykqKP2SPPpDKsVth5uggbh96E9a7hSNnTCDq2aWaWAq5AQpqg8bsiEgF6a8hvFdQ1Dk5",
  "key26": "58K4MLV7LnuSTdM2sMb2Aer7wesh77XxgSuSSqM8oyziR15gamianK2z5iaJj5tpcsz69nZiJsksXLANxizpkEVL",
  "key27": "5nQXqXA9eMKuKWUGMLntSCewEC6d4wHM3fW2YtqoU99jrYs3A4863AoDPrsxXzpXvQvNtrno5ivnSRsvEhs1Cgbz",
  "key28": "53FwAtAe4dULUoQctZfhszKupqdncSk96wdo8DYFVMKeiKG8KtFonV4MGXd1duoEHeE6QWfg8Y3LLcfEQhWSgCAa",
  "key29": "2WekM7vctXpJTtmEvBHyN5Zf5qZrqpKt5vcnsBDEQQUi7AWgvbzgLQBVAr2DY89PzoYz7LBTEnwBinEjRFwNViPZ",
  "key30": "4yA2By7Gi4FeeXiwB13DAkwrgxeEy8KsgtWnRomj4oNKUAMoF3j3cWua41n8iGmX9CvAvW97H9tPZQNp5CpieaAB",
  "key31": "4cbrnnDFk9tywuDYcXUHC9d4Upn5etbK2V9NA3RjB4x2bbaqSZiLFnBrsjKF3wQ2uqEPkgDxhJy9f4sbKDokiM9s",
  "key32": "29UiUdhakHyi6qHtRrrSDwNTNJv6JfnKNqvTBFzCuo5tzpy1MpKb4kV2RbRuaiuXYN4ci4gnDUKDMM4B2zGU6h2M",
  "key33": "5uJStXZEmnzqxvTsLELbNnJaFNiBV9CGiwHKPLyrDJqXqjf2zh6dbuG6KSzDPwjQX1RNWksNDG6YBwmeSG84Cg3f",
  "key34": "4Wy6PfYjRCrLEiMPg2EsS7MBqZCsSgxL5RtcHcqML1u7HdJpver7b8TjGRGjgEL1db6jD1zC9gkvHb1V2oTNPDR1",
  "key35": "65tPuiYGBYKBEEPb8CnML4gjJnqautXcYVCWK6JNTmn7tKZsgCCT41xfbZc1xcMjdnvv6LjA3g9hFTpyWN47m8zg",
  "key36": "4YYXq1s3soAwiLHwuRisvtzMRMvhExH6eGZx48ZN4KWHippHtPBsV5mZxGhY8D2ywtThEgV7UCMqzPaCyjciVDHe",
  "key37": "YMuQngT5hhQc5XJ1YzEzFesUfXXxB8XJKfqzu69Gd5sFWaTPWB1WDriXPjZVpszjmLJgc6aLssenRBRrkUxtgB5",
  "key38": "3a3hDSUTHYb2FRXRxWngT4wepyh7qzZECTaoRVGfj2JyeDKvPAcHyM2vL7tLTiJa58fa7CZAgc5ZwHdX7a96fWpJ",
  "key39": "4b2izsxEKr4Unzhzh9fUmDsAzCMmfTT3wXVr6kiLwroW7oFw6QeUrN4ndvbk9uZLcMG9MMcYyHoyTN4SkxuJXuWL"
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
