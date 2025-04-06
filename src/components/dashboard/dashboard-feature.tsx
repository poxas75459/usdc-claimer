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
    "53hqozGpLYwY3AbeH52JpVgJud6zaFSmEwRAB7sVgSCqVtbQFSgnXQpX3ySwMZvtBubRKfYuuHiGbK42vYiVQeFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrfAcpTVTrgdG9iUkwXSPpJpU73h4v9wrNjP5ist4V3hDi8rGRhDTgbZbKWo7W3Tu3PeGY5w9M7Fffp1HQgToAT",
  "key1": "4JcYNnSz3AgicFBYTK2Qke3cK5EoC1XrnQAcmcNw5bJjTbtiQr23v3gFn3wq4rEjtnPbnVC3XhNjjBNfosG1JCiN",
  "key2": "3gr8Y3od4AP6EB5zsY65KZxrAGJihh5MTrj98ff1AxmPdWncaQVp3HDhp8f2cYxBHCVVFLoT6NLQ6P7bR9H7FDyQ",
  "key3": "6EpHCH8X1zNCrFkPRjYUZNDAXenUXr6iWqoDdT8V5ZhYUUyqqEewixZVM4pj5WRSA7NNz78gwLxwqdWy776ByJ6",
  "key4": "5yYupd62mxTieQNZm6jiNAeaVAYoXTH28HfAJ59JKNwwJKxFU4hYtjJrAc91DEtFivC6ZaeCkez6FoaGrThkaaQN",
  "key5": "b8yTySaZQSMbVXaR8X8fKdP9bi35PYRNwrgNtAXBaZHuaAcgATXn6en8t4Pi5Mo1YiuepWhhuDTZAj7wVF8kcAv",
  "key6": "2cUaEuYvRcVRFpAhNM7zh2fAemfMifh5yzTQ82FjMQ2NFNX4Mdj3xcUx8njL3jqLS3mW1MqvdtCtL9QvNA9aiEDW",
  "key7": "2Eufoimmo1QP4nERhDLCDoUKxfxGf2g4T3cqA2aepNUHhpQA3VASdesXQvVRzcJnqP5mf867DHuTsjzocKx6Pk4T",
  "key8": "24nMiGE2Ja9sL1NjkWa7tB6eevNgtbyUCa4e4pozCf2HDYfPYatwuyiXxx6PDex3V3nLcdJ7ynt8em5iKkc8GT2Q",
  "key9": "5LZHohWusRWirc2a3ea9rZcBeqCR6LkaPDFEaSCHsXGAbqqigUhqH4oFewd2jfoPwv1cuFtT9P1q6VHTWmWvMQER",
  "key10": "4LivzE8SxsUTxaRYAPa3dNRP4miyvVTNzNrMoxrT91tBQVNQN5geTgwnYEUze9oVjU1W7sa9xVhpeEqbxC9pesuX",
  "key11": "26Q3hc9ieA5QvWKW99LsXSo4KJeqLzsbi1e6KnXQtniEzNjmD5VeiW74Zaymz8eQRbYBMLReEF4NRDWWvBtfVBFi",
  "key12": "2n8ggodQFioHHqQJ4hyNCcBkXqEWimz44Qgj1GEoogJ2P2Su22RaDL59iFgA6P1Ghi61aaBNgtA8wKFmZLAVEakx",
  "key13": "4ci7ZxjNc1P8vSNNgb4YvmozJntde749CJu8XaxzLvayQW3efgH5cVsthfNGJwVt9hTnChYkPmA6s1Y2MTg53grM",
  "key14": "UNrjhtaQX1Upt8q3VmkrsLKixVXedHSa7sQaernPYZCS3iPmRkq7srMtYMs8Gnshi8o1wLySNJn9H6nkoBPVePq",
  "key15": "3vWjxV9wLHZVnYuydBdEm9ViDYreRgRSh58B1JqYkKHGWwZG6hXLHBH3prhDMQNKjNLpLBMcwvZjRvBQTvhwqjEd",
  "key16": "3yKL8wp29kiehEfcLVJBaSc1u9mipyFpz5YW7nTgAd1vNBG6eSvHFWRXFdKPeuC86tpZrt639hGFEVYvTh7T3Y1L",
  "key17": "5qzmMjMWUoheNBxZ7cR6CRCADhFh2k63hE1o4iCegpq6zyPGVxzBe8c7SRwrcDJSUJn5Z2qa976KeBSF8pNE8MKR",
  "key18": "4AfsJXLTimn4kHrEMKUw5XNuDwikpXZdq2idb1DddxfyDKLHcd3YQi9mqc1V87dXsWi9enoVQGmnh6rdwT8h3vwS",
  "key19": "5MTnSn7hEjzbgRBrotMyTXPFtSQdS3ugyuk9KhJqDyhziLT4vjtDfXZbbuowv5anvweCBKX94j3rpb8t7B1FxL4R",
  "key20": "1XXDyHKwHbY3pu2b9MDHVqCHgCC7CvVubnhACDN2PkrZ7etUS7wABzzBazSodhmj1pGbWZmacZ34mGGfggnPhsw",
  "key21": "4hLif4EdFQaaZt2apdVdi9pGUHLRagTf52f4xCf49dAHufqLaE3eWKfPspVZx3HzkEW5Js9fi48Cht5Zkpo1NZjV",
  "key22": "4cqLcxczP2Ebi4H2Ns2ouMnYSPR4XAQ75bGvbpoRStACfYv6krErUtoeaP1Bzm7BNiYpWw52AkYEFxDqR58XgQGh",
  "key23": "2dq2Um5tXJgwBTrjFTDhz9RaJrLjsZag7RimHouvu7FRfsGCApBodNwiSJznfAZ3WCS1XnLXbjofacU81DsuStms",
  "key24": "3gLrzwKBSt6XnZbAuZkhfuPPeFsh9ypBgLtzUzJj3Xen77j5gWJKM2mPe1AFandjzACxigTrBFwfZCgxe2qxKFTJ",
  "key25": "4KUiFuUfzHUbMk1MNQraYBT65ccEZLVMvFFbP12hN7h9NgWmXU3oxr3nhq1QiCV56TJ2DEsZxLWz4kjMJQ4mgUhn",
  "key26": "5ExFoaQCMrThKxN1zcgyZJso3z4DHTzhcira6F6SHnTQu7HKmXKhbx5hDRicESqTXAMc1sSoSPWHqZA75a58apdp",
  "key27": "3CVhn6LcFhmGuUNcKgtCaovreTWk3HA1P5tGm9AEyooWWYLRhykC28ujRijv3KM67skoC3XCtdg4VZd3173DCZqa",
  "key28": "3mFX1AmqN9Ti6sxVncrUKTF3w1yZAuDYfMrVNeBfU5hzRqbT6Qms9Fr3dYuPuHXvBbXkTLJ4ATVNNYwjWQEgtzQs",
  "key29": "5Havi5GxAmiVajU6j3HbnDMb8eCF2ptbxELsN4MkYTGnPZo14fwa8HGg4RGoNrKdRUnLd4Lj26wPhBGdr9L11pP",
  "key30": "2cu9LxuKcg7J7WKb9E2c3Ws8Xd72frUfecAjZ84r7EhKz77VBErCdHn6nMUn8jCGcq3XBNHbQ3wjTyRBrhLfDskz",
  "key31": "3VCaQfLKymeAcu4LyDhx4Gi51KLGxaMaADoC82DbJGaZ8mxqYJRtwjKpCZcX6eYLKqThZu4xbTFhQmnGuX1ViBpJ",
  "key32": "4CJZAw7RNVUpJaJ9aYydmJzpYxYBCNm8vkZgqrwPMHMad8DZY4LT3pA2WDZZuC8vZDrdtMhWYVf1g2iRFrZosaYN",
  "key33": "SGts51A8hhLLMYw1T5tu5g7d5VieYh77K8uHQMUboXViU9NtSYezyGX8H7C4ttucfX3td8vk3mhCTb1jEQwsj49",
  "key34": "2rx3oycXmWn6sHMNW87FGE3XPgNLYvzvJNWs67wqQbFBBUd5N8VHo5r9G54SjYZ3GraroKnYrASUNgwJU3eciWWC",
  "key35": "5abQqpYCBTcoF4Jxgao6RfdsSrKNQj33KF9EiYrx9t8Ze2d2DkEdkDC7mq3e3Zw13o7Ya14ijo5NcFr3BzmM5cDf",
  "key36": "HNnU12uandTY6bhZeNy97B57yJaTpmRtQPesH15Ht4N6FoY5Y5ETRxsUwK79udRZTwwuM851MtGYcL9afgNj5dx",
  "key37": "3HwaPqdniJt5B9kcDhSR5Pq1rMkyiU5jsshVaLpFwRDz7CYZT4vXs7VGBzfAEjgDrHCbrNxjaya1LCJycQPJCKrM",
  "key38": "2rbidWt8V3Nj52Ui2SjTER6jVJMhvjTDwQjuGrfPVHoNU3zVnfim6MsY35kYw2LdLPs1ASZpihex4HS5o4xgSMra"
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
