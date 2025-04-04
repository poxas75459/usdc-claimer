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
    "3bW7U1SGh188CzkdTzTFv9QnN1MBH1JDWD6SpycFY9C1cuTv4daCYGBUXk5kSsqKKDsNndUkL1QgLqccuvM7YpSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wU81m3vUCWa8g5D9ftM1VkMtH8w2W1vbSGWTZ8W1d5faqD86h2efL87LPnFhdgD2DP55kMXDaJbmiLABMEe3ZG",
  "key1": "4mizhjvbcqp6gnKa58mmqWxsUw22fW16S6zpNYLaadrqLUs83etWef5exjPBStEwS42S9tRWV72cQmdrExZjpi7N",
  "key2": "mAWoQYxqSqDs2R8YT85fMFye2KEdQ22DJNizJbrQpTjrbgfBygbedbqri9Y1f8L5Q1gvMw56kGvsGuKW9wcsQXS",
  "key3": "4qhc2UTUDrZSjPhe5a9UFZnecG359ab1yh9mwL96GrGgSMRAvKYo3Rk94NQuN9Pm1jWZa8ZQT19Hmk8LD8HMRVvh",
  "key4": "2pDy2ruiN9ZAuCXnR2EDksakw4ZKuWyEHpr45WvmYVjgxd4AxzoyRYCFx659oGhEkwd16ybGgG7GYAhFcFMCDW9U",
  "key5": "2b5NCNnznG4ZEzv9SWZCH9d6SKDM5bDz6XUwipbGzHzGUjMJaUwsGv2ow4TDn3ftSEP91qDCp6eBPVo7dANffXFt",
  "key6": "2y83My8t8ZEgHmw6yWQcSo5GiDuaTL5ZG2quRrypWMwP2Rz1Sn5XDjF9yAcaiKk1Qg1oMKhxNWuv6dgnc4WEZykZ",
  "key7": "gVjTXQZJ6ZEpiC1VY8PHH4tGWtyDVEpaKMJSJHjS5kBNmwyKXpCJiFUqFw2GMnRrXhFkd2UvKpjS8HgKw8Ywb3a",
  "key8": "2p9zLKs6g7MhstLWkLEVvMqZJLSo8rppHzw6QQT9oDy8vE97EvXFYUkTRJUWnkKEb5rnphJpvDoHKUju4jQQjvAo",
  "key9": "44ujs6vrgZYZxk8k8gZPt1LSYZ8PnMwH1JrWNsGdzVmmYtoQtSV6vBLwdav4jVVnN5qhy2NCDXZShBMKn9VsY8UW",
  "key10": "41imLrn2e1Cq6WXkPTSFEsEXGm2dRsdb6V4Yj3mfG2ozG2gZKr1VkaXBVev2R4Td1XMnH3eVYiwNmdbZRPzp7epD",
  "key11": "4wjmjiSvLpjtFCNBdhcAWjQxFSAJu6wHTbF4JUZNy18dgDrSMNjYnrZycfprV6RHQN77YDWyx8673jYnZnBa7Srd",
  "key12": "3qiAmjpVrWfpaVDk9VjbwmW54t632X7PpFWtHxmSogAfGqBCjm7RQw4J4WEdd2CGLgC1BHtjZan2fgpHir8x4sPV",
  "key13": "5eWt1BXo7nvyHRDFg7pJefnKEhiZiKQEbXGt6WNMPmMRrEKfcV1ky1sVKQwS2vBZXpYc7uCr9JsRAz1vd8FxNrvo",
  "key14": "2X5MvrbEVhN29dd18snYnAxpaTP9yavGi7H8NMBWgS1RHUdBXeayi3Xtg7chzji1rnPkk18FnuTEKukrwB86xYqf",
  "key15": "55evqzySHLJvsAHWEU4hUSR7exeCae6c9Esj2exE7Sr7wTzSqrpLuZ4L9b8CqwyNnsLCXTo67TxjsHKEdMVLwJ5J",
  "key16": "4niCD7JXA8SeKYywuBrh6iJu1LnevEnrRgC3iLmvV1BaEmz74gPWZ4n6SEv1Uv7c9btq55tfhRGjscFLRVn2cFok",
  "key17": "27ayXtqAoX54eeUS7yzNwvdhYNaTHbERRUM3Hub9YpFRvU8XsFtAaVopAUHzc8c4uEU5Uv3hogjGXhioeMhbTpAy",
  "key18": "3kZoVoYkxHWZfpfVuDurHzeTYgpazie3FfwyfWyveK81mDDRLURSgTpDJYcCuPDfPy2UVt2Tx98tZYbRNPnJJjjb",
  "key19": "5888DtDfJ7EGwzabCFASWHkNQ9ybaN2ugTfwTQS7hfZYE3YVGb8h5NN66AxuFMyHSTutPCxSM26pStAJoXYNsSKi",
  "key20": "63H6bmHg2omBbEwsjZEkfrcttH2cLCMW674pttyegFpSQNcmjxLdKCywtLnG9GSnkUr7HDo7oy57UpwSspRLDKmJ",
  "key21": "3cjgD6bskNFZMkJnX5q8aYvXUNrYQqXAbXSxXHNLSqhnU1n8efM3UF5wTmypDFxj3pVDZbTiTe6FvvHM3y2ZsqRm",
  "key22": "PvgBAfSuD6MbcchHqVTdNVkjnSh4NCAb7HtnA4J6tBHeXGxaoCHox44j8UVfUnvd4stLH6YdJ7wmacSnjHFuJZy",
  "key23": "5ERhpSmp8i1BBHS5CFGZHiAPSQhXALxpByAZGcCv7uEmr81jFGQ68nmpvDRBedjmXG32WHx9rMvEZcfPFvFVUCxU",
  "key24": "3fwAkGdrEY4s1R3d8Fdcw3Tkmd4W2iWsgSCxNXhFpNRxjfxN8FvPDKAZj9k9ckd5VVE6Fu8veS5zUfmEXJ3LAieZ",
  "key25": "3smiKtnpSxj4gxe14PPrDeANCNoGNo61FnNS6KmFCTqf9RW3VbkvmbxTSxyJmMz84Yad8y6RMK1V8kQ6yfQ1Zp4s",
  "key26": "3KSqUF6ECQ13Tqjqth5FBeLfNsAwu4rkqfVQyjjUqQgHXtD82nYAWNxzhjD4Pq9QD1KtVByM91jKx2yTkyLTSghm",
  "key27": "AAEs1xaJy2pi2qetRXkghy3UzqDw8jio8qHTnSAfCuhwW4fjG2BsEaDxTdZjrM7HExkCC6YQ13NiMZLLjfZhfw9",
  "key28": "3rYstESJ3f75Fp8MMkh6oUUBtUJ8uUcBC9rN5cH1Q8ZvEgwqcwBsEAKGEutb3vqjgt4gxZqTeja7GmuM9R7ND987",
  "key29": "2UPQDVZDvma5kmqryVeE5wZ191291hwqiYd4DAiMXwPSDrq9M8QbP74WHnCmpTK69gTyeEFgTPnpkyqavJkvr6JL",
  "key30": "qjSdPUB1PtrmYSYfSDJMTkZRNXZE5CqMK81JtDWWF44uepPVRrw6k2EB8sEMswMQ6AaTqsEXiSL63mbhN3JVCwQ",
  "key31": "2qsmLUUernjSXEMsYJWorGdoLavvrhtYz8EaiYr89BEdcxaaJHDCZvNRv4TduRrYxnrwJVYG4aiJbnyTq5xJeDUQ",
  "key32": "2tyyGzXa3hEkN9Z8H6XA9KRSms61kHaM953e6x3MCxkMkttT8fsWPAB9JznEW4SdCv1yiDJGqN9tDXoB2mxskW32",
  "key33": "3M9Yv88dVBXnXzNNizi3e914FqgGWuYY6NWH4Md9o7sprYwUK1bbjXsjvvv6N1bwaugbyPXL2Fv9kqtLSRfzDrKC",
  "key34": "WsiU5VAtFfQ8jrbBBvEQqgtLbJzAnigmNbbrEAdwSk6XcxEzbCFqQjWYuPQuQ4rHab4E9kbfd6wr4EPCojqDtzs",
  "key35": "22yVeDj9zFqvk4rTBGdjQnHpYBbnrNUMzgrYPyygm9TJL2biBa3Q71PhAEqZYiuJFZyf8pNSydwp4T6cr3Mfak6J",
  "key36": "2MFer7KmtEvVZV32Bf1g7GjstVP5sAzQRw2zkDpnRLpCBXfBUwLSPL1xZZFe3PNScJuu6atamCnwTzft7Ymdws8f",
  "key37": "2pFU6cZ6W11JEzb79WtHfiLfXrfpsWBMTLWGXMAqbpoBYhF92oH6QCuiZfnVzGzUQQrevWxwtet1TBTQPfFWN7Kj",
  "key38": "2tX3Ybo7oS6ZLPuxD4hwvrYnkVEphmkP7aAShEK7dCGMaXEFoHC4Z2cpsKkbYakTk9cDTBxk5hGRXn5Wp6cYzSUF",
  "key39": "34pzTdUXbkVXED86NdeAHmV8MVMUfpuKQypF9r2rjDb9k5JShN4FYJcSSmPJ8YwKd3Aih5B42HZQ4WpQgiNyR6nL",
  "key40": "5hr3mVr3whfyjeXyk4hsrfgLF55jjeoK76AFEKbRJfD6pQzhh2G9Z6zyDLR3dcA4j9BYPyipsqn9ByD4YVi25vnF",
  "key41": "3kcwHHDLLGo9yHEQuGBi2EYuXbz4yhJtDHyKes4F1XEB7VdVrtYv2qZkynmt15M4bgCUyyb8U8uE7LgrYc65E8nJ",
  "key42": "5FQruumZeN2TJTWE1ttqduXo8FvNVBQjZhpHsbz38JSFCkJxaPkCgs42hxj2JSn4f33Y6zwefTiA5hHHbQeAzwX7",
  "key43": "5TBSvk8LgLFZxoZCfCeLtQycAnorx3MZq3GhNeHW9ynNHhDpABS7R2bjm93kGtU72dN578ySX5CzSyZg3HSXvMsN",
  "key44": "21DdkFB19jXWkXGrtZPjACghf9NjpYMh8YSWe4Ha7TeB2oCHaJ7gV74aQyG2e9ZsrH48G61KCJJEraynUa1Qhewj",
  "key45": "2yrFRcE67doC35qBbBRnhYgS5cZonjeBgCG79HZ5DcdobssA8SXpvXvXPMqA1VN1hrbFzK5uuTGPs5ZmqXDxqzSB",
  "key46": "1bXUZhiEyGzGpFgRHNQpmRGQ7PoujEE5QmPSmYMG3GstYDVYnmPRExUdgL2JmGEXHBNJt6GXAJ5t5Q11kBKAaj"
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
