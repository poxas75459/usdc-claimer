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
    "4Ew4qaLYNaCY796dahVH7iMxDqQUpdrZMvB81KyEv1UDekpYSFC9o2eGQ41DhrwsmxWhtQd9jZJikrgyiUdp2ipQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2DgqTHUMhq3RWD8nsKNWNJ4SnSK5wbw4L2zreL3zNvCayzaqg68CtWikxktDXnRucNvziXiSswwJ3DPyphzVck",
  "key1": "46v2y8q3F36kJAN8XeuLTrpg8F7y2KUhThvePYFxgDG41w3jF25sV9ZCqcWwf5ufTTTWt5DgRVWmuohRXcdxqmvP",
  "key2": "4jnmueDLEGFyLUcZDnBxoHMENzV3B949D4rj94DttGbUtQTkGeA56bYt3fjTpQGuqJLBSdHgJkt1ncQzgGShVzVU",
  "key3": "3mmCL6BZQuf5dfpWiybNK9ssD95M9sYhM52UwPN9nMfFy7iX7FDhChwUhM9W4oj77nvCEcKHCW3sh9bx29GDDNoD",
  "key4": "5tkGVAeJPhe319bNjCuM8UHyGF6aFkBTQkCJYbE4YsZWqQGL8H79HMRdP9icjDfTvJMSf5JAcXxLzTGiWenoiosF",
  "key5": "39vWG8Rt99Aq1aFxCkqho697n58y9XiGn7RsbnRDkZEb9KqZyeqNPDbRBcosiU1gGgQcACu1DswZTacmhuWR1YnF",
  "key6": "3Z7BErHvjjsnS53vX7J4sLmwszpCPb6cuc5HgL2yFi83AycFRs9N2Y91QkjxwgFwrsNEaiPE9411RsQ4miSDQ3vT",
  "key7": "48MdD5YC8ywghB8HPb6GdLP6aCFybQmi5XXnsRUBNjnsAwQj7PjGHRej91Stx5nxveC5Y7Pm89A8mipLCTvXQcgf",
  "key8": "3mJaxH1siNM1zwQzi2bDsPbcmDHLAXrWtLDBp2xyQ1JcPEqr8bAtWSqEzTzQrnKsgcUjnastETJTzcoM2uet8ZQs",
  "key9": "3hxXFtupsyv2F3iggubFk159iADa9y57KPrFk92H9u6m8G2iTqc7uiN8RVYwkrycDy4JY1VoenJrcd7t7MJLLuiK",
  "key10": "2WpsuNcSxHuAaToPP1FhYLQaTcZXVbVWYJcqkK81QBTkvnJaTjskS5JFuCGpDzLna9EEdYZsvSvyBuZFykktZy65",
  "key11": "33E6gngbGWGCTEucqPymggQEu3ArNChZkSkeeHk694WhpcTZ5kdDejBPyPGebnj5ut4DDLQwRUFGkCGbqJhyMsEk",
  "key12": "2YSgyeD6VW3PXDurU4zWuEjKDogFxTHTJCNnZAEgYd3KELHb9QKCUGDSaPgphgwtzmVe9yR4evs7iw7xFbhpwhir",
  "key13": "4Xi8Jem7Y7ZQw68rLXmER3EtaxN1oKgfHBVx5AZfmJRj6EEWjdPvPFu6L5yEGjNhVHYsxvkXEmK3HuUQNSWxUpr6",
  "key14": "25Tos4x9WRwjEdigJdQdwPq1V7BihqZfMMAo5g1yb8bWyyaMPWGV8f1UyCZjSocwzJyMsquxaQbsuR6BvGCMf7qW",
  "key15": "4kyn925UzXqWS6Qm9YPyWcnzmPZkXK4LbZd5J3yjLhvZC1C5YgRNG8XxE6dUXfrXXguvt38cjtqQYxU6zoQWo76G",
  "key16": "3NVTwdqek4sAoWNhGwRNh6Aj58K6N2dnPsuuXFVh6FcKPSZkm5p7W9vNYkA3b8ewpSkKPRsJ4yDaUJ1eBMEZgWXt",
  "key17": "GqzSdun3wtpM7tBeNjHCop27NGsoHv85HvUytaDXXH5akeTSSMMpihcJTK7Pgcw3JBEgGbVSzVSy1oDLkr7UxYW",
  "key18": "5kk5JRAWnKSv7LtbeQhUqB8a1adwgpckDRuRYobMjArpqFgGWYcewsJS8GnK4gD5whAL6AxQk8vFH7wgm9dbJwQe",
  "key19": "4iPeGnzmU4we5crGR9SUaiPf5Jo4SuM6t19B6oTKeczWL26iBTCTRxBfMszPKNunWBo2J2yQmAsQH4nhqWWvaL42",
  "key20": "4FSLzRvxM8N6jugBKMLNWFiLQdmNhAEbaNUdsohBoHV3gPJaPWeewtsWHNCctwAyfGPUQ6NpKqBE9Yumync6QT3P",
  "key21": "3SA68HWRY2C4mnwX1TjXfDbQScKKqEaZevkkgmUKwTPaoosR9zXyiER1BBXco9wAjppsozHvFRwDgevn2XfC8uN4",
  "key22": "5ykK2DtFTCCrd8GKWSJPhcxs6oGTSMNeMK88M7vcFEsRcJAakSzKuv21dEsc4DwfZE75yFmCEk3rezHFHGwnad8q",
  "key23": "2hE2ojjzxCLG6FKHm6HoaxfmJ9zbrnrnGWTjkLxddNKrwmipkdnmaxsP7fMr6AsneF8zZRoD9T6knQsxSg62eLHE",
  "key24": "5Xk17XsfPJPxY5T3g7Bx3U7LSSwBMu8sG5L2u5eCTixHuQ8NcZfLiXUupPzKZpoC85HUxTck6E4Sv3z41KzmWhVf",
  "key25": "kcyi6uxW3GPRoeYgwWR4JMqC1UEYQ7M5PfgwrTRwg6PqjoxdYQ8NK5tcWa1kzXcfJR8MzVRN8e6w45n2jfE3HGS",
  "key26": "XmUV7BMFGFjwechskKfb6cZXwngJ5vz9N94jrYLbHo9KcPZXKhq7U3a5b2XSV7thm2R5Xf3iT9Ah9Sth9tiRLtd",
  "key27": "4Hv4esbqoe8mRzsqsGqzeyV4AVip1r2LTRyHCUELTnpnrWoWU9CMJyEMno1fj7uKHmwMjtcXjYBRs8DkihGkS9Lh",
  "key28": "2zL13qE9bH69SjJuA3xHPFppMRqnSQmSHDibeipRGvA2RzBncEn2crHsKaUTerrnsFpTN4G98hGMnV3Fd5nT8qLk",
  "key29": "TCHu5ZERNeDkGuU68yqa22iR8BZJNyrvk5iDdkZJVySs7WLSVfWKRCPnX3S7bZ7PeRS4vGroLxE2A6GWxRkstNg",
  "key30": "2pF2MpKcNpSryscG8VKBj81ggpyd8WKzh2wsd4Dh6ChKf9y95BPLmXgxpaHxcubXCr2zM6rFw2sWYWuYqtujYrdG",
  "key31": "4vaLuRw5rEGLr5LocXifT6CLdZfUbEWzt6Jhe8AKeJRPRxnoQVvMxJ6y8Q22aNN4UvMEfvkPCDtyYea1Too8oY8f",
  "key32": "4HmBxVvBZFQbEsWrPHVPMtvar1Vyr4cXVMvLaAAFdGrp56PF4wreRBG83aWXA75MNEmKZXEbL4WzJtoesZQn56S3",
  "key33": "3nqfFDVMdHGerddbr7sF46WAZgoAVkZ2V4yFpu6WJyxaJDCMYK3LbA6Z1JqEGq5KnLQdbiuY4jzPAvPxk4pQiVL7",
  "key34": "2ZuNoM6aWhUG4dkkKy1Ek9qewH8zD2HD3CQqGzJDAekRZ8hEUEBg6YMRu82dADere7KbiFEYptNL1SURJzKjFvWM",
  "key35": "xJUhY2CR6v2QWHKduT9qVxi9Gt1JzuWwhsN7v5nxW9i2PedUmRpWRKPb8sEHZyVRtncdxgXNqVPvRm94y6V3Git",
  "key36": "skPm2MECw7sfHFTnuGKf2XrFher6szfYsizsPBjXvZW5owcqES9YVPpYCmobEAR5JNNpM9u8BKspR5bZP43nAJH"
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
