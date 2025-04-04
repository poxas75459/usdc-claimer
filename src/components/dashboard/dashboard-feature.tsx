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
    "7P3jfTFyQZmxuvWkA2DHHEURAQqdHxbYHDWhg4sbRGuHAVUCs1C7Yd2BxNLzNqLsx6Z31HnVLLcHBXw5UPwzgBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exNKCJgkGFXWhdCzMNae2g5yHvtbmKqBurMtNNpGGPboK7eU2E4bg1DeGsKMCc6mvqA2xgk8tFrai2WDZL6vJP2",
  "key1": "3mxiq3UmAGzWugmKTkPFtzhMLz7sZMGyMtA8SMyMC4ThuewCghwaR8938PNKKsa2siTxSTkFSaxmoiJ8NkWSoSpW",
  "key2": "21m1bPRyyW6PfNrKgXSamSEEyBBrsB2VwycCEbhgwv5Kzm62FfmvxdSAXhV2BkGxwy3gjPXVLGYCmQqSTLRbHjJb",
  "key3": "4bW6Uqviz82DEdEsFiH17tRjrwoVkJF9a5goLSbiajrqMy3Q7qs5EZmPtHeiZ6NKTuP8iZpshYmHpCsigeVmS5th",
  "key4": "2Zv2rVPjvo7qB2yYU9pzm33mHBU9xs5owiGXUBEKULrDF36Q7F3Z8daC3srRjFjWrv1bYoFV2STfGsyvWiNghdF8",
  "key5": "5KP9XkPU3vzydbhpwGEmkwLgynBaGXnrkXc2vsG8xsW5HFNFrpybpro1N4wvAvZHvZtGBYs3eF5GWtEkWUt6sMuC",
  "key6": "4qTi5xUvLCtCaUQyrCAitouwCZYPuvkQjQE6Mtbgmqy9D8WUuhwYSNgzeH6jWSoRiBVJSs4ouwhGE33Y1kgwGJv6",
  "key7": "4Uj55Zmt8LhMsF9qDC8DLnLPBL7iDgcrCDVWUc8VBaM2299HRHLDTtiPt7TakrZswcDmQ3at3muF7XNqubrtpqzP",
  "key8": "5P5sP8hCQWvT8Fs13mVm9Qg7PkPBvi3WAsSq1zDsUrgRKBq9ASiGhytj6FktCh3YoBGscP58mDvD6aD9wFQdqs69",
  "key9": "E96EsuCST8A8vvh7DD4mXiEyeMZ2gGaEdGRWAmQiXEbyh4sCFbN8DVhf3Dw9vHfePi9BnCQN9cecc2kYUabMhfM",
  "key10": "2vCsMvAGmW9Q57hajKjqzYdTVCSCWdAuC17BcuQkkHDuZviazfEPvo5PtMTbyFaoPifnMXLYFRgrQ7QbTKfk4HTx",
  "key11": "5oAgZHmLoXBgtRmmJQDLa9LUweFxh6WPzvR4tk2BKj69nJvvtabh9jEKmF32wLoiEFNL27GwLB4ULAimwZ27B2By",
  "key12": "44zdWQHLFpUBjbvCupq16pUqqzmoC2XGAbAFSU1tCC1A7oW6R4QfRiWNtiz3rV3dMYHMwjRePzYAS7Uky2wnWzy",
  "key13": "2e2w4mTGzCbqLMNZWvge8veYeXU1yYUojHewMdkVbptNiq1QgVTxcBrex76Rh74TgdBocg8oYPb1xmYTAiQjgmFk",
  "key14": "2SXxqkM35ZgLvFSNxoRRuNy7t4sm3ZLhPguHVgf46U4NxXThit4vYREac3qwciMcjKEXbfCLdD5c3ZGSt1K1XtQU",
  "key15": "3AiwKfgNGZGRjEM4mx3BpRgQn7uP19NK3FHbyYYgWznQz8isPTMzChz1qZGhmiCjQvV3Z7iKrPkoSX6aAARX53c",
  "key16": "4cAKmyrRUTzd3WGy5HMzfjfUi9rvUivCwMsNpmUb1Yo9pfawbp9YxiYYiKV9NCbjsaR2KaiyWkfrZVsjsPiN7XBS",
  "key17": "46jkBvUTYCHVGZdKkuWhbdz3M8Up2AS85WLT9gWL1ow7A4WmdtBtZc87kuYHew5ML87B4agfBRCzbDjAXhPKBqwX",
  "key18": "2ZBtborWgLEGiKNZ6t1X4cVg2dEXLoNpZPLNMeNuHVsdXtogBS3naqPExCkTdLiFbd43s1UBjbfXYDwc7LzvBX5y",
  "key19": "5YhxbahcM8e25MBTm2y5Pq2RPkddBkpvya3JCozzFNmCzneGtvuXX8ix5PxwWB7jcwSaTRPe8jHYugMSe3Vzghge",
  "key20": "5MM3R5juXjcSSbh3jVTVqnAF7ZdERfnbUSPesgHgwLURHEJcJidjzzmaFQHFyAi4AkuGmNhWW3cwRkLCFuuwjNKu",
  "key21": "5MqrbpbrejwfaEpfoiBhKT3WhfG7Lbosneu52n7ZsinZ9a8ZGwgweabqJdXyhneEXo36Jy1EvpENigN893zXrfbj",
  "key22": "3KrmsELQfjiHZuGYu2ntFf8aeFQrcfzRW6EwB5V7MFFKha3nZNmMmpH6arRjYdwLi3NBPCTaVMkNfCfxutiUjfZ3",
  "key23": "4ouWoXv5uvPonj4qPkQUjPZdq7vwGCqFrkkMdemD8Bq8HxdGwyGP57rXMJDrv6R2EW5oGrXH69hPTaujt8EtKLSC",
  "key24": "4X4mryMqFfUniBDnA8K2vmxxgRjFVzVfkEpC4ViDvMQX61m9EmH4i7EhmVf7ZHbkc93KrdYEedPqyQFis2bwGDev",
  "key25": "2V2Q1Y71MCMBZeB6PPBnXcgLf1G6DC51XV14uFgYD6WM6PYfUjg28kH4nVFM1iLgAqbyQnyqhuUyUiHtFAhqwYQJ",
  "key26": "231TCn8pajn3S58UgdGxYTjuWZW647CpZQzjXWwu2cM3mpb2sVg43RTRwks1Hmv8kHGGyT5AwRjU1m9pJVKdmYop",
  "key27": "4sexq5xtrZx3QmEnYM2yP8H2LQAYofjAHNiXsfdhSMFHnH4sDU5HZiVUs81Hdm8pEJwxkm3shYMjBQvpYo1EqNCt",
  "key28": "5UGZenLAGNg9FUaWtpSmNq9rBsQv6zsApVKcrtFENcMFjdwUk7Fh6Z8dVoLrs8ShCWKxmvrccQCp5qSSCYe1fBwf",
  "key29": "638fdwi2e2rh2pavEeVd3VK4DcFNiogXZD1JrrVBfz93ECFfy11QprLfDr55TBPLE99XABYRqeg83Y2ZRXQ31Lon",
  "key30": "3gTYcTkfbCYyEdDRufWkJhfo56tGfXd5hSzq1Na9YsRwMWPhKSjyd4ooRYAhpZjo5Qgb3GNSuLBDFZxvK4XWTdVq",
  "key31": "4dawoBV3r5gCLPbTrDR4MU1PaT1AS6gXtrTLKJ87Ev6jhNy66UxqBS2LEtWaBKKcM52JKC4CXsHv6rwb8mMpUbup",
  "key32": "2fRmZtwZGy1dgx1MaPDy86R4xatK9EuHcLCGEGLeWgax298XgDvq44FoQnjR9d2EGEjkmgyNSytyA9wCkpZdZUUM",
  "key33": "4QHjmpfqSxYkGa58YLfT4JNGyP47a2p4uJrHaMv4V4o1fuDYjo3qZKJu35fus6LShRw6to8MvmweZCZZgnF4xA16",
  "key34": "34eoHVUVqrzUnRXyd39xiZbCs2ahKbcBpEdMb3EiNKovWdkJMZDRUYJdpuLsicaSSATUW94WJ8EfLSu72s12QYC7",
  "key35": "5Rpv3K8PE5cL9bxann3ZQ6jpc2wtNDFXKSdtrUyaMb9fJDkr3zVTxNjYcDeCezXSiNCU9EZ4iZPQ8U1KScMm48p3",
  "key36": "2iSYKuVMFb7tVG9BrwY97XmnCspdw7tBS77QrYsHR5ymqRBYQcQg63TYbgLDj2BYQobDon4ogm93b2Cz7W5VJCus",
  "key37": "4rdFc7xy2kGyPsMrJdJk8xTBX6YvRkQMbqaP7WX3Ss6pDhCahL5NfWYZuySZrYh12DL2NPRhUQ5MomiZ4UYFWg16",
  "key38": "5JAQBPQ1vEK5u8DQb8Jc7SGzjERfgh5UvUv3h3GYd1tnLLFX5kJSX7fWpejfvMbiSoF3mPjbGutXqLnb8Ma9GK9n",
  "key39": "4NvEr7PKTWgq5jhsTPu5eFx39yDsupeuDvv9Ma1ayPQFsyEgfdf71PxeDF1BBetRLnJyuH8re78UtkgdWm81Rtzy",
  "key40": "4sRBqWCvhHiHwUDawMakECSWSBYLSfhAoPs55VKGHfJE1qiQq8CDFfP9u8rjeSf8VcAQCb1nsCYYqbebsGbHY7Gy",
  "key41": "2eUJr9u4M911RYcceWTeDu46otifkWX9zgR6WTb3uBYsZPbfnMXsNZwmhsu54RzUdAFWkXhwq8pAXQXSyPCSsBHS",
  "key42": "2c1ksCrowMunBfCVd6x6gup8n4E56y7m7z7D1eigzsC6zoUpVgqgVYu1nbRRgSyGgJZqRQ9YgivG2DeTfdqAVBNi",
  "key43": "2UkrQLyheXSpeorRyvkxnxCk9BDMuDDKF4k8jthpscwQnhkq6RSLDRnT6ZBpNUuUAmmF9pihZpWCANfdoEK6Udwv",
  "key44": "471wpSTXLiQXxHrMeSPfErrmHwatiHRycSKUwRqZhVM5Rp8JPGpeQ9KddDD9JaxVHeeRTawK4xzQUYd5A5Gc17ih",
  "key45": "3JAjiZxHPKAk8FdDtgZ8ma75eveiNCZMnJGL9P2sCeEWbiJkvCfmuScNFeKZzoDNpZSqSQ8tkgdNmNGeZYdCme6n",
  "key46": "4yWe3xp6kdzQRhrtdV9jfcUXuSPSfZWjU3919QrZEoDkhJ9ZNhMR1GfUu7vQWxmd5DxSn4CU4PQV4qDZ7AjrtPcQ",
  "key47": "t9KH3KF8U8tRSp1yYQuGkNddGgBSJu389xDKQguNTK3iC7LwWqvHYAFqATgq972rh2qxgwNN9sukMVm6ToZsogV",
  "key48": "2sqKFgwxGcrEXo9qLfJyKJvNQmaexwZR7mPiaQih2V6E6QghBinYHmYxjb3z6XH59MifFoG8Ff2BgwMtN1r7Xc6Y"
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
