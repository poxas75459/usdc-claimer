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
    "59HaftdPaJDPDAoYymgLL8T8rUoo5JgerCyoo85ySfRtfVJfN6c2JJdpvWtDrvBH5ggPU1wGNWrXZvV3nLtKrPUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdzFoGfK9GYTTW3ok1XLBQoGDnjzBH9WqF9ng9HGj7VMsUe8vFypY2oEDN1Qa3UuTkpMZXEnwDJrA57GzgNeXLA",
  "key1": "25hfMFtuW5bwyf6qy1Yw21efodFe5YKqb4CNGZRHtB1nxb24v5jdg2ugYMp3yPTibfpW33txJojzG2UA3c7HkdgE",
  "key2": "nwTJS5nfh9zoUjbiaPNt72x8uECFMZwygnEphPtJZDTjk5k5mhfrg2d9K69Kf4sPyZD5Fycf9ZxK87DHsYyhoNL",
  "key3": "3QaH5JVYUqwX4wVhekJ5HrMrzh8FdCer89CnsX6EmAbtgogT9HKETVDM3C29NfMjTR7zSCcLe97oMeKyWaYoFJNT",
  "key4": "4sA3A5dXVNAfK6NNbxPqP9Lgchr2zuA9R5QEsHtDjRV8f6cVXJjD1YYFRw1hSwS6hKnc7rxq3kRGqwR9pkSSdYNz",
  "key5": "uLzvQjXCv1th8RMH8MwuzQEiy7e5329S51XCKJnp3zF18Y7Dbr1n85NJetRgHWHGQxbo44VVxBMviC4xv5tccyg",
  "key6": "5wtBpiL2A1gRmYKAFqiPjoL6cSokjZD6LqvkJekBQhvQKCV7GSuJJM4RxTgBtrMNLyTEAAc6e4gbkfQt7Qsg71yi",
  "key7": "zNrrpf6dh2T3exHxc4mxywScRacYpQWmXDXazq2rMGRoGkTnGj39Bx7h7QDUPagHyshKgR9guuXfFUcP4cAkwXS",
  "key8": "2E2rWpzA9iGXtBcA5ydxfL37jf3qJnEvqdxwG2na33SZEJWnqDWyrSiTgk81dCcnZ4VDAtjdEBFAHPsDBvGj316u",
  "key9": "2PgZc3VtvmfpCbdcgyU53xHuVHJ4UQXqKnBxA2sVTas4pkDYMuFU5cD2YWADbZZdtmBvRuLSkbt36MWFuYMTiCos",
  "key10": "5768G1SXNW75Gk8og4jgikww4eQNtYrh5enKcRjNw3gVYvaaT97mSqc2efHLDJ4hZXmacTyUZ4nt6FzZi4A3gG8u",
  "key11": "FuvHpDb2YZwvZ5YSrexaMqNcfb2re6hPrquyo3S32h6bbNnUSsgewqjKBvrsos14ND7jeXZWUBomCUDWbTH9SJJ",
  "key12": "2CDHrpdd5QWwFgHUh53EJAFrC6812sW88iU2V5sm89iFf23vvQ1DcpyT4v4vLqbWFLdFYaU1Esw1GfuHcb4i5DYV",
  "key13": "zxiGstKTDfHG6q1CwaMqZbkqeihWNPipdh3bAwJ1ydSX5Qn6iQTh6WUjysoeffGbjSGisES5fZUBFxTPKFGSHZL",
  "key14": "62Vq3CAcJrE1J92NARX2LsopDSfybNs4yG4UFyQmPpbNGYpFW2eYC2j3MWB63kfd4uTDVELRctc2qgz4wnstpjZN",
  "key15": "4kTJ6ug7wDkSJU6KCisNFKk2cByz3mPPAUFWvsUrPJpKFEQh9tQRCsRGC1hDekNZA4JsB4yvQHuNmhUzc5V66cnR",
  "key16": "5JqeDB3Y3Fi52D3Sfy7Cy1VkpQuP8Ny81yJYrw6JoTLzY4TieCbvhRx6Lm8rKrCcPGWQFQ6NMJ5Qywk6zcQeX6vu",
  "key17": "2cMNHQhfPJVQJtot5BXhLkE2mfYk6oM1xaxwNBbKnb8fzTWAjuCqr3SiypYSCMVUbEBYSWmpWAY9rm2k5uXV2tzW",
  "key18": "4Fryk78QNdH9dWyjBQXRMMo6hgiVrYDw4oo4dSxg1fHsQuBndBoheidBCB2Ui1XuvcjPnzYyjqEHmPDquFCXQPfF",
  "key19": "4iuXvns5esNPxDSEzaz5jLFoMMq3sMQdUntSfh5hWXV67rvDsjSG6S4KoUxQXs8qUxaj9vgwGCQ8JREsoEhYnUQ1",
  "key20": "4a9UYaF5L8exwxx5Qb6ZU44Dif6rDPe2HtaStD13NecgYTFqPwvM7GGHKN21i5U3RfA8tvFzppzyWrpVAHY1BMLA",
  "key21": "4og37VFvJhDavHaoLcaPthjDhMu4orFRbj5r3izs3HwtXr52HvxerbNHMpCcNwkZwzuRLzsdso6jeUdKpGZdv8yH",
  "key22": "gnTTMrwRanXbvLXdhf6pEBnVFv8AqxjGp6vwrfNqCW21K2Q2xtaMX71offyJ81xj7716wW8EVSVBMoYfGKum3u4",
  "key23": "46fbs43TJ1ZMpNLnBAQ1ezLX6TxUcRCgvkJfcrJKoQi6poU9Rum72tgRoNqEuCwjXYoxDknwwvqNgU6ef6LNELkS",
  "key24": "44xkaZf35VxwcarDf84XPbZ4zv8f8ZWdMohmFH4A3fiZe2oi6daFRxGpXm32hxP5S9kktfsT5tPdEsaegvQWvpbh",
  "key25": "4cHqSkCT9wjN9RhKwzw5fWKwEvfzRnzaJSx8ZyqZzsfbnFaVpHp9rnuFJCtBLwHBswFToTrFyFGtbjVEv1vq21mM",
  "key26": "5a4dUEhw3GNSMAzTFdpSkVrcDsfq72a1HPDKaU9pR7Q96YM3AHUYJYVGasn5UjDRJ9E9RqJ2msfsZFnHquTyUDAn",
  "key27": "5pPKNsokKWTm8q5TgfbpyKbS3ZGFYQ3bhCKNZWowsanmKWo85GAX2S75VTkjMZZrLT8u7LCFXVp84D8twDZr3AKY",
  "key28": "Kd4U2qoewrbzBtoyEVdscS7hdh1wVC57BiskcMBngbfLBLL2FnnjrDcpoGXowfr7DE46kHd2Gd1Bt4oLFE32CVk",
  "key29": "5hFmaDfgVJ5uwMAFvjBn3nBwr9wz9RdxdzTtSiFMUAucbSqbTCUn4y1HUcPQkBKGdegs6StRa3KzoqAE6uJ7aqxt",
  "key30": "2x3FggStfa8ThAvVJW5JpyGqNMJ7fjTXi1xrmExfMiLLaDRHGuG4HSPwEw7TdDaGW92ohJ1mTtgxQPjuAqQNJiA6",
  "key31": "3sdHXZFkHVxT3TkFjSZSsdTE28inDsh2Sb93AFCdaXbRpXULs4pSQsAY1QFTCEAFSrE3foDoJqGtoqJhidD39Qyw",
  "key32": "3r3gFEiME25aYhG4JVJfC5KoeVqfqcYc4agqxmpieeoPXSAkcXjhjpJRgTx2gGZDTyEC1y77LMRfHEMBAwsyYnhQ",
  "key33": "2x7X3JVZSBn68VKAEFudbsHKvE1eKJXEefVFGex1HYxgi2Dkv6Cc4jxGnUn6VxJPR7WZV5YzEgnUKLbYCHxqPvQm",
  "key34": "3QUuQHsWWp8b1KmBHxaVrTxdAFZ166GAuZ51yifzesEM7vbAm8mi4CUWjXM3atNjyVPezC11juXSf2rEuiCRE1YV",
  "key35": "5Pdj268pAGnbdewy7PdHLdc8MKPS3tesWF9ztvyw2zSqZxinSz1kVLJmvD1fNhzsSyVXB56JdzWebtTR12i9URz1",
  "key36": "4MS2dPrbTFaZa2DR5VjGekXNgXZyVdgsMJhXCKrQtWeikJtuNeisRhQh5p1EcsFKDYBYXCSVrkRhjXJjwmTZJeSt",
  "key37": "3cEPXpYeM1YGVCserFsf1MmocrmhbJN5mi4pE3T3KBh3rpgk7AC7QNEmchpBvg1WaTG9mCMQwo6M6CNiRWyDNTey",
  "key38": "5LCbKX6jL4ZvKQeWBeKtY7cDLALVSSMwxGHUqzyRwdja4evfU1SMR3AXEAGSRo8tehE134rYCwF367yVXimDvoFJ",
  "key39": "3T2bjvd7qFEHz8jokLFz1Wzb1ZRGxqStLRVvEy3GJhP4bKRMzo6Mu325ADa8iqScurvRdSQAUueRDrP8MjCML5WW",
  "key40": "N4nrzqvFCJ5ch9kUSjHh6MFZdUKvCCoMjLzaDEqJMLyJWegNg34jpfv8QArZik5ZBLS6263YujkhKRRPAML3oaR",
  "key41": "4xe6amd4vsLNXQSdxfLCzwqhwgQx5SY6dyVdurKu3jfoZFFJV5HuXv3n9foToqtWPpabSr6Nrojrajj28rZQUmZP",
  "key42": "4QEz8fDw3p8vhXWmeHp1qMwRpfua6dcFy4v32VUAbx75DEATffm3K96Kj8FuZppNEStjpfusnr9mq1ND8PRoGCBC",
  "key43": "3M6NGYKE9wJTMrQXcuZWW9ATYMFBaHXj5yGzGo12f9cZeAc7yvkmMXMwo2hAzTTyZPCg5GkfDd3DHjEUzGETqcyd",
  "key44": "5yXMfQv9TKpam1MSQGnX2mxdeRy8fQqaa2AEpXWN7QbumPsE3Sj5RN7E9PHMKLWbGJr67L9H3yvcjJ5ZCdDVCY7a",
  "key45": "4n1sUTGTfLwVLVn9i6W1equ6bAo1Q1QyKZbvx24PKYtbMtTeT1416dM1xVfzZh4QVvaZrpHSgVNbw5nwstY86kKL"
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
