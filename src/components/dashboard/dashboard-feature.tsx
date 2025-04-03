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
    "2JPZZXRjxwAn8embA5XhKiyESnrLAusR2RUXVitBE3VF8HTBT88sjoTWNtwHuSXtU618QHG8sk71oYQCEytHFsiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47imPpv5Pp4U9hWF4zDmqJArPLociP6a4vZnhZuTJMAneGD6RqbAsn2nkheLCteF45j9Lj535xhiMR9pemRqr68F",
  "key1": "UmnZX4VBAL7i4DPStSoKAAnHncvZDusc47qk46vTrdh8K9pYtUs8yBed2311vQ2woibJba3CSoeaPwXuTr55vQx",
  "key2": "4RBXmmpUr8d8qmAvzyZktgHnwvYoaXsafxoGws9dMxrCCZVfifjzYmpULrmV6uxzP7SAyBNmtHheWTwcFFu3rLiK",
  "key3": "zTajnzfC16wPACutBuGcba8av6ctxFnGPsKGZtbgPg8WLUH2dqCJjEAVN791D6emp7yLVvwEM64FL5ArrVoNdQ4",
  "key4": "4WZoRUTA3UXZLx36VBRe9RpuJA5SPfnoz83QPm1EW3jfeskHBMmT5yMXxZ41u9Ug222SHX5rq5zQvUk3vwBiFeKs",
  "key5": "4NcBMK495VdQfRJ6hnc6uTUqbaq6QdLxpDRx9JsoJYYA9c2VSZn1rkgpgWSRF5BfEs5P5LofJXA33xGmv1XkT2h7",
  "key6": "3t99mUu6K56EYve94Y66xxjunyEuxXKLTL2khAZbjMakzvVfDNeux66qfn3imF6WnGu4X5tbhCicpQYeMGD72ERz",
  "key7": "5dbUoPYJvQEset4PGnkM7rXZmtfASpPF6Rrmb8XroHb42NW4Pt7zzVGDDhi9ppZ1a5cG24xWjB5t1Q5wB1vckpVL",
  "key8": "38XVJr8qvAPiH4uQW5zFbhjsJYBsnKtmWjjFSxa4awHPXYUxXbkBXQtv26gcRTM6kSVH6jBn8PgjqPsYNR6FHfST",
  "key9": "5EUkaBKJUePhBgCRspDAakTR5AZBwnrJ8wYsDs3bjTfERk3RUSU1xwgNeLM7gTZnxG5jLpDhNt7d4podiu5y84F2",
  "key10": "4aSknoUAiJpXNQgu7t8QHgkxY5KPebbfJGptRooKJ2PceDXEvR7cJVuBRBbqCrUCvqcMP8eBN1gEjHfHrjkXZ7Qp",
  "key11": "2m2KvsL5f2DKJxN1cTHUXFFLkUWYEmhpgnHB5co4sMykuhmyey7o83MD9qxfsQrtowt2V75xicgvo2MALyJ8hbVw",
  "key12": "58xFKkNo3eQMmmyKzWfQpw9jDQ2B18ics9dnbKFU7cnNrPrBPwyshkRjLfQKFsKJRuNRoVLmJqesW2DBZQobuCfC",
  "key13": "321Fs8CHW7zmt6Y3XkA1y1wjWtwZZvtyRYNWaD262y8zJ8v5R5uMRZxtYTsFukMXGQYaLTuGV7K8cixAKXSBrLiL",
  "key14": "2hcZFbTWRg2TtxUtYEt8Q3YsekNxybWD5xm5Q7bqy7UrqczKxFNwch4tPisKxBvzbEo6zzrtQYqm5Hsh3sbaTKW1",
  "key15": "4cmmHFm6d1MPvCFABN1EY6DqFVymx5fQd4mnBQyNwuL2awBT5xH3VC3GQ65kjdVg8LVi1NKz2Vz7xnwdDzyPU53v",
  "key16": "9iEd5DvCteYzjnowstVrBSJmZpeWjkLK5oH1vTRmbzbeeuR9GNCXqjySufZ427ih8XSRPykrBmV1SZPaJutPxa2",
  "key17": "3X792da6djir2aUbfdrHMxLcVpbQATiVBXJpo2dfAtNi99FDQ1XRW2Pum33de9sZm59XUSRq6nTymVzRfyPJLHm1",
  "key18": "7R4BYDqJ6F9A5fQrEB2bfCRT6fampvTgfL44SkyEjFqkzdcWT6wh6F19G2CFJLqGdETpD9RAfLULunUw1WWmyHj",
  "key19": "otdLZKMc1tnncWSNvHhkfG2C4DnLmQsQ8PkNYfhHhWpMcxWg9vnAVm749MpLmjuWGrRpUiX9k793wYqGFVHbMXd",
  "key20": "32fjQM3YXh8Ug9w97zwca4bKJy4uhFduxYzVfHXsQoSTqSxWuamPijxVvWV2h176sHh8GSE8JMWuZYMTKZMbL76f",
  "key21": "4r6Np929vdDgDmonJq8jrK4GRe21bXCZ9H5A1jevcehwUJGcHyu6qbLTT9PumKZ5hqu6pSDRNuDJUMW2w4eCP2yU",
  "key22": "5HpBwGzhYoxw6opMmphqp29zTj5vMKxJY3Ahn7p6a3inrQEKzmbecRUbVEEs3TFxUCHFjdWnoAZ4hyqxJ6p77P6e",
  "key23": "1TfJtRWiPhfHWfvEVA9KzmmM1Yyx4tEXPHWYmAKGweQ3KmZ9Lc94doiTLnNTTatYxxsKXgpLaNEBQWfFB5MMEmQ",
  "key24": "4BJRqn46fbv4zkPRDyHbogH7kpnAkZge37zQu9q2r77mH8ARuHZDFFNLHtFYrWznJYvrKtVe2kkJCujE27NXmm2E",
  "key25": "5yR1w1xxtiaSWncU5ZNe8qzPG42Pg4rDcs3SFbTKuzSQyghWyMNLC2Jsihi48EnR1uCzKx2hDXqizJ2HMqsVrpYG",
  "key26": "5ZHrzy7bamdcons2o1dK8tgZJWUwKcwvSksiYVg2w83ggfLb58KGUcze7FMgb5h2jQkxSnoKC5cdoyg74KjGyFdT",
  "key27": "5vyeV5yiybWDC1ExGp7sC9Vp5SA21SXDh94CnbPGvuADmv9mZNVVX1n9M3SmAZddiCwDPQBnsUbA6gXGn57UhAXz",
  "key28": "3ch7M2q1VERcCee2s8mRUckRBc6yzhNiBVaFbcnyc4JMkXV2MPoitqJRVt7hEGHB1T54EpG1skYzwQKxtp5uTmAy",
  "key29": "31LLrkh2YGXL6FhKdRRwQezSn5oEsgjQRT1gkoBzgkEHoosD5YTHfX3kGxp3Cy4Yh8NeCwVvB4m1fBt9fzbLDKHt",
  "key30": "4DGepceRNQ3qPQ5iCxJhK9tdxWAPMvjEBaJwAFPGX8gPVYmXuMLTi4nW6ePnid7KzxVh2oDekzwR4xbqdZBGqhCi",
  "key31": "4YVj5YDT4xPMsM19YquGubqspjJwipQC78kUDXApU5ARMf5vqXjLYHNY5xmoYD1nCc38UQwGpTjGafVUdyqFnfr2",
  "key32": "3XGDGWrRmABgzFSBkgeSZx661vNMGXVecGzXxaTCyKMjU311WQuFcJte7bNVmmnE6cEWW9CEMYLySFR4jzkFBviR",
  "key33": "kHpRrJtC1ZFyoPTivkXNBg2K9M227RSkrpr4qcpMJcw8pKi77xMvJrXXx6KSZmFeCMDsxbj2kqzdRvWZ6YLfkdg",
  "key34": "5ENKps6hgkzRi5mYdDai8kQD22C6TsZ5EaJfGr1q5H4tXYDGuioAxxPfANBSLo3ez9ecnN482kQHHpUsixkbinnX",
  "key35": "3i7x1QdgboD62ziYUUvPtrbvopWdNWohkpq4o7R3Zr2bFJj6Z6wvAtWHyJ27C51Ayb3Gt7SgzikWuzNnSgCRN2vg",
  "key36": "HhKDiqFpxT1nmdVkHDSq7N22k37WMS3xHqppiXJjVyJKZuAkJTUCwJ4YZVAHmz15EpitacavwG1SCGDrnapDXuV",
  "key37": "58qPwqAUnmSFFL8FXgFNCSWqfjMJvZR2ErQ6gH3H6FM1GrSEHbYPhiF1KQkXnFtVBGt15oytCXrJKFrj4jAuZ3ad",
  "key38": "3kZyE2YCLmksZWGQfmFqmDo1U46HrAVno2ksSjYiMN35hzs8TkZmeYFcV5HHPV3ZVb9Nk9keqx946RV3hWg4pcdN",
  "key39": "61ujKzPUCGPzsrDmcS4Ls8b53UmgaPhmLVZ2JbWQBGusphL8YZYoV6MHcftYQbUgErd5EeuBiN4SZqUmZKLbhUB4",
  "key40": "4DDx14vdDPkoD3ZcBbWrtKvHybhBjqdHdLBr5PdmpshwXHgpm26SnWTiiwhuTQYRBiSCKTNGRrGRGmWhkdfyhNPC",
  "key41": "51KhyMvKgMu8yJWR2oZqfedJEyX4MJ75Ag5BrqHpcDCHdHpmUSinsJS4f9pe4RZhBryepHVtW4x2J98BZoSSFRNa",
  "key42": "4QXmtvuh9q1GTnUqiBHv71gfeVJ7RgKHS1Y4khZnXLR3tTey7USjZ1pGYF7YbNxLamevv8Wz3Los4cw2MC3VTSqy"
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
