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
    "2xxchpgQysiaycjYBNKWhWnk5imSDuDaUbHs8yxC2DV8YpT7GCdh3ywGtMXCCbUtbmg9mSWqttVL9eGDpT5FgrGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFTt37icDQVoN4YQKnov8oNciewZ9xvdQsSA58KzWxMgaW5rCgFuwfELoyKyMGu6Jj4Px7xbuVdCysM1cZR6fSJ",
  "key1": "4QFRtPSmhJwf1BbnVgBUmGffX7C9PHRH41UJuVYrdETqUYgMWLMpBX4cv2ehQz77eiJPqCx2yqKak6Tfg6zuMmF3",
  "key2": "25xGuRG5L9NYEvx3maRGq7t5J8GbnyFFt2441iGGNY9mjeM97c7pip6F2MtPoHhmQ7ZC9gHTgigPBHPBbUwdx8bt",
  "key3": "U5tutoLUsrcTFW9AEVF8c1RPNm13kgLFx95txJLvYJd6HuV7N4LL54Bm5xUQ8SgJ5RhZ3G4S6Wx3dj7179FTdq2",
  "key4": "2kmEbtSiqUH6KtBeuXJbyAogxXApWqCYfLVcoa2fF37VBf4QNDr1SdUpYPioR989MSWqv5UhVRUx7FQpLXwVcmbr",
  "key5": "5tS2rHJEDBQTFpi9e716VrfHy98F4L7ygGKbuH2ijNhRBFPVyTmTjVbk3ccJGK1miV7TZ7kcsKTwjLk6jqzNsu3B",
  "key6": "2vuWMqfsZgeXmFzssaZHLf5ouq16cfHPKFu1pzk8KVfNk9irAyMB6NAYpQQZr7vyinAiNH4oev8tHyGZeSEDVSP3",
  "key7": "4JmUgQZNUEAvC29NodxqHddCcDJ4zDPT3ic2nyhmX1vGF2eRGhmwrnjBjrGogRNCCL6qALV6d9CPWKJmWL4PAkEA",
  "key8": "2dX9xyAn1ZZnyc3vJTEGas1oCergoYzLHRP6kSApeuWW8vZMLm3pLFFCFm7kMyK2yx8EjPcaSt4sjmHHVCAbNbEj",
  "key9": "5bHuuqk37rXeNvGyCpfGKmETteFyWpNtvL7mS4BqxKMbmD9sjCC58FrowcKZNqD2S4zHiKnrrqCpRvBmrDKX3jTK",
  "key10": "5oVPsTtL49ED68cNYUV2ZKVf95ENLWwTbEy1hu3wViJX2Mh5SnJayvpeeg7PUUTF4XjmPGLw1CYNNRFFDUgkz7gD",
  "key11": "2MVvi1TtVSaeYLepG8KgwsPQx8FvkRwjmnPmw3Eag9gF5u725CnMantoGRpJR9BAohnrqVVwsCfirMQTcFmLcDSV",
  "key12": "34SyYXhDn37KULfPho1rvCKLnvfGEZtie3BpfqaqRfG7HteUj7W98cN6dNE67rxYr2NopMMKJhgD8x493M44QLQV",
  "key13": "2iTWvxpTSkxw9cx93dJk3sVxLiCzQUAX41QyJPKCgB4foN8qz7YFmG8yhGLjyx8dPG68Xqo5KfdPePK416FJyB2r",
  "key14": "2EmR2y4e14bDXdvp2KK4mYPJXNcVAggYa9MQXYidgNMmFdvPYTfBkVZreJwjyRoBzUKiBf8piee13amj2w5mRsi8",
  "key15": "3YY3mmQRvvjK6zCkjZXfx2e77aKzfarmALcUFKEzc9JF999XHUF9j6NQmXR4YqjsaU28NaAwcnukhphRm7bhQWek",
  "key16": "twWxmCpgcZ6ESEd2sdEtQ7NwAgEh8rjvSu3EbCdJtDamG1Rbu3Hy15euB7xFfo8WspCZ8VWUhgmB7MvrLiPkjdL",
  "key17": "36EHjLP6HbPM4veJp5ikLH5vW2NCAWGuvk3jdxVEoR8fjKKiGyjgWrJ5tNDijDMNMC7UsjAtyt243G3nF4ttp3NY",
  "key18": "3L2XRyNHzmzhV9zPVvYAQ2fG5BS7cznGG1fTHbk84Poc3jTFEZdmRT7GKQnj7WoHPVmAYpzVVEyYiWPvm74jTnuN",
  "key19": "2uqWGDSUXAbB7yJJybwH6fLCAGP6YUcWemfskRKJZRmMsjiUSf64TzVXpMn5fqFy9UMPpFni4eZB9cfDzfzMMaqK",
  "key20": "FKag9XYZZ9m5BWJxgvEC1DqvKqgvsvCrXqfTdk9D47JpWiezdvovw93QA2qxGovrefjHDaJXZc71w3y1zNuXad9",
  "key21": "PoRW4yhHSo7LWdr4D628LTbLqygUgC5epBuHw45wnA8Z8eMzZcdPNEfitF5B1uhi1kQocwHNc7hJ85E3ukqo4uH",
  "key22": "abtq6YbFbBGweCq5TuG5PvKVk4cQKPVhUkTnbDFPCULgs2jGnjh5vtxBW1X6ypBhBF3GtKt8CJ7qDVZEANE7h9U",
  "key23": "2xnviQj1yc3CFLg2HMTFRXSDdzh9sWZZZohXhce24dZkD8m9ZDaxZh9w9Eee3KCThQRJCZUmL74HUFR1mmGKpS9s",
  "key24": "2GJpYhB9vJzdMmKJ7P92zaaJWFwbYHxDqyP4p24RoSxFpFJL9u5FSok5VsXGfQqLzYVvLrXTLJRztsaGpRpvd5Bp",
  "key25": "59sEsMQgU7NYuWtH8oWKimtn3YwRA9PDDW98aMh59eJNjXvPN54zg88FEf3Wm2uHDj8bkBZhicmDzKCph3EVVrqe",
  "key26": "ZCJ2dpeNB76cEb6M3x4GD1hV2veEkja1rfgqqu8yqhnFcZox1hwiGTCvu8kcshvij2b9ThvyrvLQyohx1PxVd22",
  "key27": "H6YDDdG5Q6CP39b3EhJ1pSz4a6F7M5A96hZL48KWCTG3UacnXTQJSbiNfkeKSxKw1Uf5uVQutWy1vqYzh2EUzjP",
  "key28": "5hxJnzTBRk6biR3Kx3DjUKkTScrWEivgSBU3NWkuP5fEr3xFju8u9fGEYDPnjrb7ir3UeCtc3b4ATvfH2vyw3DQ",
  "key29": "7g8owxx47ZPMg8hPUqAEw6uoR5J9DxuHGopvqqvwxpQmkxcZicHiTxVJHR9vTxq9FMXVse7388Q5u6fHFYbqQ4L",
  "key30": "28dAx9aercTpvsx5s2fGo7fHyVNVM3wjDpjGPeEbwnCZe6SUeorT4zdqLc88MtR1MxbdoiHGcxZYZavF8QSwwRhg",
  "key31": "4wFgWeBpRp6WRkCc4e61n8Wxa9Ap6RJ6NoYUhEGJaSvTp39JXuBcAM6jrDMCgEsn9idcRUxTKvGEfnLfiSh1zzim",
  "key32": "5WKtCUPoNk8sbtXTYzRYV5rBLHTtGCEhzi8HebuXCNtLF6PTzwo4QMpguqLQWQk4fn8FLWVbdTwB1Wkr15dWtGpK",
  "key33": "4wHW9z2tuECwRQBTofzr9KRckw1Mts6AqTbjbmPCCnET5kz5bkCYQArwqVUR1wY21mewLrt45Jox4oADgYEcnmAU",
  "key34": "3BPJQsoQNLyzHWaF6MtUY8jCFDqn8aMg6t3eXY2t3V39E2DNDfV5TTxqAqYqB9javU1bgRKLHNXtPMAruEue6U5n",
  "key35": "4sqzN48vGwZrFRNfZ9xkfrYo65VXqk855BVAz2BPnTKXFFc5wPycs84vQ7nvPBXZswa55JWQzBf2H3qwjJr7eDgK",
  "key36": "2qUwA7M7rmG5kzvfw9qaE7AGTMaWwPDgh3FyENHnMzeXNuE41nTPj8s2a62xGfHfsKPfnHenJUjX5d2XRgRtPnQz",
  "key37": "3w92cZr9M4RMAVg8NWawfm4ttz8dQkCdAHkvBQTpFiZTCszhrjwxQfB5w1MVY1NxiwWvrdae4Vs352S4fp6BZmn3",
  "key38": "QSTv6gNGBiSdKAiRoZjUpu76nyrZirxgmjfdPQduApJ2aeRBhtvkdAAr3mVC4zkD6W5GVRstnPn9XdrV8WRbjyp",
  "key39": "5NRiexRnbquixPdmxzzMJ2pWWbZ6TfcB72fAQxCTgGsaDxsgikzrLTcgsJAqsUyzhMMyWtXL1kKgWnbTzTByKeTw"
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
