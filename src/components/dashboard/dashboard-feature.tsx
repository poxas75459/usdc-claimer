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
    "4P4J4k82h4EWncDy28qFt7kzjSYFUyj17D4wCzqxp1REF2XkoLZ9Mfp7LbcopYytG3AA6vvvmvvoL9EDYmztJVQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUGRcDdu9ctxXUkdYyAasUGXpbx7UQ9UikMzgDjomkJq3T4mETkfFKcmhxPFMKDyXFTqUELJts7bJGb4rq7nxq4",
  "key1": "2KhUCWZTA3wwa87ZaYzrk487LK84mvR1478TkvWTh8FRkNU9vBVfvHHU8EsDcycTpPnmvAjJi8B6nhcnBfiCWU6u",
  "key2": "41e6hbEX8AeRfKcPnMae6nLnvgyPNFfDWYJm7o397AGfmoAbMC31qC9gy99SZJEs84h4iEy1PFfxCmyKCjuQshBu",
  "key3": "5tXKdoRkATwsunkatq4QnqBFnXctdK4BTFYCp6bokjeeacpjmoANXzpjDc6A1EUcypiixjEEAMKXDiqJdj3aj2Sr",
  "key4": "2fiu6mfRsFzo4S5bmMQ4t7HXmhywcdZG1RkZkgbhZQF7AqoPqiYsUdb8Q5HCyvHfAqDyy7TgeKuxTHYgrDic9dPb",
  "key5": "2udKNyYGJ2nst96XATVnfBHJULp2GmADcXoBxdJvrqYMZezWw7QFf2buMqJwtLHojKjbCzYXAjk9dTv4Y18gMwyE",
  "key6": "Zs7VGNpZQorVZxgdGLLAtSn2uft4y2X5zVewHMT3mVszTuAFRqNiAzgZBF285PMfWKqAyYPR9nwk1MofVSxddut",
  "key7": "5Z4tRvQpMZL8sNGhofiV1q4hADEG7gR5PuASjxuhn6Zp6x9BUJgGbZHr1kwLQLTtXNF1zoBSrbrQRyixGjERxduX",
  "key8": "3H3jDx8h1WsKJp2JDaoejtwtjnGpyc2kndRRv2tnfmqi7NqmHoyJRKM6WodV396W6vxwd2nKBKmVA79BYghSmSy6",
  "key9": "4wnMmsTUYY8mBGykXQxRnsw7yBUYjqcfKnEM5rLrRJwwZujRPqzKT85umfuucmePesa7NaHBNcduyqfoUnQoVhoP",
  "key10": "4gbUTLxXRgWbo6nFn8JUxqGwLtNnaAhiMx6Ep6gf9JWtuLNhQGs3H7HqBDRrZG9sb7wuvERfTt8e7a5c9rFKRQcG",
  "key11": "3jCktrtjK7qKZW3BXLaVo3s8N1pJRczRNvpSu6AQeszPS5VyZLb5m7p6f4nXVjGGGEc6qcH1dUb5HxMarHn3jXJy",
  "key12": "2qHuQHkt6EnScc4MEzAp8kWuUM7d5GuaGgBgAbWPfooeTv1X13aeEEpQWV695yKXNbBwTo75KagKfvdS46uKBu1G",
  "key13": "3qZuJdBgdzLV1pMQqAtxRPRafScVWNXhKqjSvD7v8E7RfmgB1GPKBnsBQCj6ZE4PdJsLx5eYda6ttyct89T537qs",
  "key14": "5njQ2XHsjewWKVsPxENfcANhrs5LJDwGTAHmAjKjTbeCMxY9UCMrLVN6CSx7VQxSYajTm4aubLzZYr8uZWMMYGzY",
  "key15": "3PQMvdYZxEaSdVpg3xaxUgyGcusDmAGp6MWymGXYzThWfsLaYJQttqCvzKcSxP84nmLzp5GcFxmRnFJnMpi1BN3U",
  "key16": "4k4zu5UNTotD8GPZHovyjpVPy1hahBe2hKjBpCTLKFrgm8v82rTTxuScR9nLcLv2QgRVrpqiJWivXExZtZ5wBeKK",
  "key17": "gZsPhcgYHY6beGYcd9XBCfxtY6nGBntGxMs6trWa9dzDitzozFbJAiM14ScUavrcc2MhvJEjkwYt5bjw123DKLZ",
  "key18": "2HqKec9aF7nRtS49Ym2EApskV6CcTN8CmD2QcBtFVsNZcvWV5Mcwocgz3AJTAdrMXY25ahhHxde98kapLVUUwHmw",
  "key19": "2kQL2Whe51rnWuksSsepFRrmvzt9qVtYXhrr4a16UFrXPCYs4ZiJwkcNssJMT5kFGRXxL5xzfx3w9Z2VCYMBsGXQ",
  "key20": "3GQMt16FHLHzULxf15QzSC6kFpfDcU7Txfs85qWp4ZBVVYc4WBWzRPGnU1SF77e99D9nSd13BVUj4ZbhtUSGh3ss",
  "key21": "4LoLzBdQxbT4TuqaUECeFSQq5V4oywHdz5rbAgz9DHuRM3jBdaQAM7aHyPsntrGngQSEphXJF4FSroojEgS4HFyQ",
  "key22": "3cAQTFD6UjYphUbu3LDCnfMAtYoEsfVEJUFk1GJek3PitySqdB8TyDcs79j2KDHM8aBdh152xkmUYAaJnZotdeBQ",
  "key23": "5TxGVkJUCES6FWznbByLSGg18SG6psbVGbCDSVJofvaNWjivA47eFJPr4NPj8SaasVLuTC4X2FJte7zrZyiQx9Vu",
  "key24": "3WaYkJq3bpBCQmuAEGP3MwTVtKDSYFxGFW454VToLdyvf7UsDWeEsLBnscy2svF2PfA3HvTKhJadBS435cK6A2rm",
  "key25": "26Ncd1jg1m5jK2M1KDWCzSmP2shAxyNSwq7YJN8mZiNHn1MsbU9JkmmCTbfLviXzoSZYVtGVYPc1Qd4LhkXUGEcp",
  "key26": "4q8yxXw2R8ywWi2iuDCV72zgbz5GtGhgxTYk74hzPedg3UabtesgBmFsnyrQtdV1XwryjKmJ1fbjvWC6AAggUJ1i",
  "key27": "4fJeL5sV83E4ifMZxEZ5udpNpKPpg78RsQvAc9VNs6QZVN4TEk4jQ5KgN3dvs5GfRieCVr1DyNqdoHkwQEe9zQdk",
  "key28": "5Cr62VEGQQr1dXWDuHQfmcWX4iwUbPtfdxNNRWCjJEjN9uTLaAG4GSPrn52eqZZkL5mNoBdh727h1tg1WKfysHUV",
  "key29": "4DiYCGpdW2eTYFXEegCpqjuy3qdPnsx7rhdS2ytvxjZ6VKKiE36bANaNijhmi9Kdv259pUnvTwqC3BVBpBXgsvrN",
  "key30": "3cUu3BLCZ3exTf4hs9vcmsV2SBc74SahvkweJVqvTZcvPPzERSwspTxvcDT6P4Svo5sonuiyMwUZbP4fD2Bh2Z26",
  "key31": "5Htqe9MJLpobhfHJH3tMQ5JrGwjCV6SUoBjcZbWJ7xg6TAhoVGez2ndWecspRuDuNQ2LQefTcxdVeYpobDiUUnFn",
  "key32": "4r2WcPWUuJLsztHwTRogQjWAmMoB4gBqMpET3NMRcd31i9hQ4uXd2dYZCuDxCabmu9V4XfdjrxZyfnXYxuUV3vXr",
  "key33": "5rjXF27qhxCNCDYEVJZwvYDZxqG9tCzdjEMpS8vrZQmGT5bvifmRhhosMtKTFkB9PEvwVCTeX58fLnMY9r6gk9e3",
  "key34": "4fLXVfaqnHzEwAGUJzHDrxPcFy5Ja6ZU8RvfJrFcHsEbwuRwinJ4yA5ED1PCwq3gdDuuxAFfQsd64tcbZiBPbXH5",
  "key35": "626Udw6gvyeXFrz3Wc8jscpR9gF5ej86XxdcrpBLS8kQ4jeNZpBmjwre4G8W3KqEU1aRGiMHVnZBZw5mdZMAkvQv",
  "key36": "3HVwJ9yDMPg7GEnq4kZ5hieu27rj8jF2UwZHXirB1eWm8zTmQQvw35ZwXuPDfrmcHyLzk9Cxu4dWXPQPMoZzrkKY",
  "key37": "39C2sL6X7qxwyiMgHSaBF3FW1C3sa8YFpxBjsYoUvBVWqj7vJVokyDyrgkbctDVFWxQ428RYYffA8UkMD29K2Dpk"
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
