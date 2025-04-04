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
    "RpokizdyMRZUD2zA56bR3Ui7tdE1ocv3TGNAkArBc8SX55tJXrnT9FC3vYoZ3vGW4o1FuUGTzDGQ14YvUFLbo5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQHqL7NJRhNuSrWmFeViKhT6gLz46MavKSWnoDcvLjf1ANdVaVd5LH7jmhaLUWRa3VTrU4TgEBQ7hNrcLa72y2E",
  "key1": "xVwnuBP298Gb2R1hmFHzKvA8DwnFzouuUjUXTuE4KStanZeu1ShciaejAGNzyqmGAfxUG1Q8YMpSJ5QkNSrcrsc",
  "key2": "2DqQV6B6j2ekhifYxnmbvrCCCviCaxg772kCPnDjpLK2gHrRmmKF7Dqs5tx5hdxtEFkdK65Lnwpdv4v31HVeFvNf",
  "key3": "65NJvTiWAQFzmRRbn5vg6H1GCvZ2RxBtBx7wtkmoCe1UezYLAy45gs7fPsdJMyZVa4c6ziscAYUQZsC7YAFaWP8a",
  "key4": "49mqkVNH9qZnJARHEgQRJ6P2yeKdzi9HTvE6jdeJBJawmbQRVNReXN5iKh9txvuXmtFwtoKHEddmfAZ8JQQUP5D2",
  "key5": "33sYKXN254yP9KB3NV1qMuAJUCner7qqgPteR1u3ZKDL9CF7A2PSCiFTqo4HtFFQykC2Y66gZbbFTiNwYUH86DLN",
  "key6": "51ttepURTkWRKdCys7PD2qcKidn1CFz2LvdsbQ5zMQj1k7uZ6ZLNHwankgMCvH4bzqPuMJnpMumN4BL3PSUuvYYJ",
  "key7": "67Tj9CbpVFq8zFcKeNWTUesgACbLRJQuUx9n4fKiCn8dBFSuBf9g9pSSB7GSzSqGE7gzEDyVkGAFanvo2sJF91rw",
  "key8": "38Ji9hR5cSvqxLBXwHLUATUDXdWpHpW2EtQPxuEFiLkqNWfA4Su2jVvgHRq5SgTkvSqCiibSagc9A1zcuYpoyWDm",
  "key9": "2S5ccMCd2Qp7M8qY6ZQzzQSr8pEeceWMLqDBWCvM247mmNVLMV9HoB34Ku3vcKG3PK7pV1WwvDKqd9vKTznxoypQ",
  "key10": "38A5hd3LgqYEgZBYDjyxDN6BRo2XAt7w6YVi4mhCiWYumqn4nMg4d1MK2cjVTXMMKjRcY6JrB1x5sMTZNssR7BvZ",
  "key11": "3cfK6iNb26jpsEkQYLQRqvcHacqBqRxW3qa6hrGXeYADhueAb9nE82dvffCBEfLtz9jvhmT7qBh2N4q8KeEv9qCC",
  "key12": "4VCeSuH55HZEa1L8zn1d7neBwKYHKCDkyPm2Nw4cdu4xFh6wipWd6at1SWSW65YdKXR3fhpxCKH6rfjjQnvKcPta",
  "key13": "2TAmHMoqYnviCX5VovjEgwK62YztMuE2zk7LVR1DpAzZDAN7tJ5c1KUG6UDvhHKQjpm6NnZRycsE5F97nM9PvwD6",
  "key14": "3MaBLFg4Wz258qDMGrokmtcrznnCXeH4aJy4esCcpTJQW8gsDPCxjXRiJHrKHEuCQFds5d8gDnGvqVmrscDtu7kJ",
  "key15": "2cmteTs9B2YUQFF8BkoVYyGqGNB9YwRsnuEUp8JbXcv3NCkZtLqSEPkYZGDrGdQd5aJrhzhwMKh5xtx1XhP5cqpc",
  "key16": "4DDZ3Hk9V5us5Uy9Curh5MDksNHugXD6bpmRPYDUBai4FQyWorjNxzP2JovQiZjE2iQrtH6dwTMDD5gqtjpjcuwF",
  "key17": "3WcBVRDx8Nw4ND5QUqgSTMpjyWvhNfcEj4MkLupuZHu71ndf8mv1Vr8nCGMyyfkPK5KC2uG6gLbydBwpRugaBv48",
  "key18": "3A7RWdUJB2YAETogKdPsT7mjXLL23E9rARKBrW4oCpasSKRi4fZugKNW5sKUeMPrQAGos6dssaZ62BPvm6CuUzmz",
  "key19": "28KDdoV7C8rv9VwsiRjHfpMfDjxjz9GeMUGjq1U8LtdoopbkEMUSsccaAC99dZVaA21BXNU4KsLn46P6n3DrhqHZ",
  "key20": "5AmnvZG1XY1VoA567buHUDgBvvWorM7v5mMpP3vf1JGhfdVJ4zG7bXnye8BoRVCsS6N6eGiZqhCDLwbugVAEUzHr",
  "key21": "3zEYn8eAoNc6cYAFxE5jgumRernDkGAzVQGW2Et7bCyHeK18UiXnJiap1YpswSLXdz5EGKgS3d1TEpU4DzD7agSe",
  "key22": "byxBeKiGoRYVPaRJbB1PJnizaD1BZbQ7wrUk3AZedTmd4sbqdHqKtPx4jY77jAPNdtcqimLeRnahpeemLzVWBNi",
  "key23": "5YfuEdhq1ZVf3addgs3dUqaaQRnUL5vUPEUBJxGzrtktx2Dv6Db9BftEeTf2vJtWEnL2mkwubjSkpNJBUf75dbjL",
  "key24": "5LLgAo15nXhcJtJ3wGDRgU9wthoRuRyiMqr1SYc9xjoMbzgY24xwcbzwKyBEp2tz89NJhKmgGnp3adsWXQj4Fxh6",
  "key25": "8mZ7ZP5C3cxPAvgwSkfupjbnE65qUmLmKWziwToLxvqTcaAFc55yfHYJM9KNeEFV3QLPsQe9ij7vJiCk77VWcvF",
  "key26": "4Vk6CRdErDsrZ4Pf3ENPTDNezHpL1U8eUXtMP8YmGSVXe36mgDz5EY99gDYT1saa7VRBGrqAoUgmtAnA1VW19ZxP",
  "key27": "3BKNRng2N8VtQXNj2id1i8F9TASzqytHHA5wATiZgBTKMkVnveRZsHh79mZCnXq7ri2enFyPDckbUCwkqJ7JPPqP",
  "key28": "2s7w4KgQH1kztVikcq5gTxPAVCMxY6jxRxHMR5ipL8du8UB4BpSL8bnUnch47Xw9G6YzQCaw2BH959ErWfC8qZKW",
  "key29": "8kMJqpHbshiS1CG15ZXJKdTRrtP61EmZMjg4DtuYS8bB15Ei79t3KjFGL5xPvbgcTRWXS6B7RhzVsbYsMsTPihq",
  "key30": "3nQkehn5uMWBQ7YfXXpN5aL9DJsgMFcn7kVJTvjxoYyAKwdb1igmWK4zKEkwnebpoXzcuTCbaBFtvmbh9o8CmfGo",
  "key31": "GEGSi9xfXeXJWrWZW6P8YowfeedSzE2WqagQfpwFgKVCHLHA27oXxSA7YhEbshcCzgWeP3V2CxiCfi1Kr8DJunw",
  "key32": "63pjYpXSoZQVTftPTBHAJTHg4U4SB97jSpjmfYtY8qhZiGkEk6fsfYB6SHzacMYVVKN8hxtJGgcn1TMGaBHdiMYD",
  "key33": "2EuKkW94dRsx4GmVc6XZDt35va3aqSiSpkUiUNAcEZYwRKF11ETvinnjDysXns415dcV24tj8RBs5adWSfsfBv2k",
  "key34": "DQL3Fo9wS835EMUAgkn79pz1iaETeLpX3uNjLQCMQS84ZTbMQA5dZdsBk6dseR9aCBCuWGYp3WTJmHpmUJaXdm7",
  "key35": "49obGEQyeig5mLxhVPpBUnmHbnUctKZpFaBNmFjPTktkutjjihmv6X7QpyRxvy7excQBf9TfudZh2aAncR8UYVMy",
  "key36": "4xY82kUzSYoNoWwgBhNFxnrQ25VDL5dfNeyQ9LK4hGjmKHsdD6YYVs39DTk3TCc8P4TU3BhY7gjVyH479v7yLCtH",
  "key37": "2DBPRf1R1rtxgMtuRYsChPco61oBoRtkCfLpN1DFjo2jPgAUdRudv6zxwKvcyqCSDRSRc33gh7j2eAe1HZ219Was",
  "key38": "3QwuyfvCwHBXz34tQBqZQRajkfYgDYs3DWSbcCiwm58GSo6Pk4XE2emNuwEDnszcJXgt4nTmJqkgMiejJNYU6Qwz",
  "key39": "g3pKjuSS7sMitvCDBosufEXQDk1YBSbbPCFoQ8Dk4XwL481VGHybfXZkkgD8ZuBgNeAfiAusCgzH4YhTzSYRBeG",
  "key40": "2soJWBqQtnMyZBAVZakAoKAzAQRP3MEabd4Cw4pifaViABiFMXySkRYwKn8HrsjkUhje2TX7dpoAs8HRrnnEH7iL",
  "key41": "4zGMKNvaWt8nodfZRtj2MxV5fq9xvBJ2aWRJcJhDzV3RBxYXXxQnzUx2eG1QtmHaeNpN36SjwjDbEwUZXR6X6fCy",
  "key42": "5jdyPCocFJuQcy4LSYLYCMGRKGdsnayZkcFN56duPXqJFdUz7dVFSNkFUeTKFwmhNyWv7CA7hfAA6KaoUUFX8dkH",
  "key43": "4M3XvauasvKRGRu1QLh7FrdFgrLjAuZufLe2ZsABELJ2YAr6Ywhd2C8XbfCFLJWEqy38W7sYeHkF5tFpG8CBE59B",
  "key44": "XnHTUWVuWR9kQym22MPkru6w6wJyCERrQRyUrVuF4hpqcSbVh47y9UWPBKoqQLirpu26Rv4ZbHsqiimvSkEQg7L",
  "key45": "4oQ9Lz64Z88wWKuS1uW6s9N1j4gof6xuTwqmHQAsfRyFagFfVGkNQHV5kTdNBGJjBLvGq96GAhDf1dhkicHWtTso"
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
