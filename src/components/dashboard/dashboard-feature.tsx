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
    "3mfVUopKk6ksTYfqhsEmw2XuArBNCzHQzwHAHdanBBUDu7EgFLs3cE2MKSeJgfNi1bWxV13NpAomxS9kawrz1ZWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZYnyF8dvYQnUVk27zKtd5WnxiHxnJp9HVcTQPXtdMzCudLNdEvqUb5rZ9kiU3wGp45exG72xmwhTfd3yVHKX6H",
  "key1": "bEXK4XbNvUn4kpiaDguUVzw6ktVFHwCjdZvsRVcPc8iCcFMsfCi34YBTDRzKFUDrLiKAjtkGSo5P3hvq2xBKfTQ",
  "key2": "4XG6XLT6hbW1SkmTcMtgsJSYJaisuaGh3RPSr4RPcKJ8FdcnjR7b1QorfXbGzs4WUDEpbhbezjKYqP62qWFZtsq4",
  "key3": "5ogz2VuPejWg1SRDTrYgRSNUm3b5DhBMfWKyUbASu5YZ7WFCqRsD4z31TM5XLHZMF1XP1Qi9BRGnTy8CST1sdWk9",
  "key4": "3uQKigx1G7cywAGXn7n66pDBbK3DeFzguFxByxjagWqsdWLUWdjbLWFmvGQKjSr7sPyDo91MEywcrtHbTr2qe2Kd",
  "key5": "2oayTg7SL5Fp5rrJHn8FgD9nze23BGwyqsHqwv28ho8yZgVTVH1hiq6KHqNBme3xSA655M3ugYSexTMaYaAqxWCg",
  "key6": "4BYg2HAZcsoksCVxQcrwDBj3mHg4RwJ4jb5CQiZdXVb6qkZm3Vu47YySvj5yuc7pKvLEB4koDWVKJumTGMcsjN88",
  "key7": "s1Mohq1anCSA4HesVeTNknvFssJQnBVyFF2KuzwQLuZsETEiVxfp6gRRe9J46QeRMgHyaZbFn8iQZKKi4t3VZKt",
  "key8": "Pk4oHVB4PnkwesshZNUtkYDaFTtE8NBLZ838H6iUfygyGnix6Sh7vtXbRenb8jiUC3QmDjmCXey5nTCDp2g1AhZ",
  "key9": "3TJzevmn3KjQR1z5yKRyjSR3uW7h2VCHCJ5bkn2P6Bx96ZkSBW9aUX3ep3Li58xoGAUJCMSSk6zEg2MXJLhbEe5S",
  "key10": "62CFVzgT2ZbiQEqFrSvELgXMUwbKL4XgAVJz4DEQ3z9r5HhLTdVhteqy1iuXCK6oR7e7pCs8heLvewvL8URcSMRd",
  "key11": "3Kv7TD8UeT8ywcXFeeorUBDiyyidkBVotQ2gMkDsRSfpkRjMwCPbYABhsnrKS1sDZm58S2qX3JefvE9udhEw3xfY",
  "key12": "2nKui1VtcAtTtT3oF7ovyrsLnpCf6zPP8Y99JF3G4NXy5QpmFwYcBauk4VN1SssREV8FbnNY6zoygGFLkjd2XBxV",
  "key13": "3sLJyyeB5mLeTC2TBCRvAT52ebmH7PnfBJmPzmCJsvMkvtEnKhLKKqQjJeFLskMS7oN9p1dHKfZPGekm4gdBEShf",
  "key14": "4f994gHRKEz8J93oUk3SZ1gpRpcRZqSRtvuux5GPah4c1KdHhp2v5GsQHZUEGqKZpyaJYgBTuEbDoSw66sVFYiws",
  "key15": "2PdsBemn3WkEQU3WNpzghd3QHeWLrTmxkUQ2VuUAM7BRt8W3PdzT2Ha2gRRWae7Pp8ewLFuzKNgkKL84YeCQnyuR",
  "key16": "GxuQ1ADqk82w7hFpkD8FJQmN1RhaWxsDa9tEhsqdbbn8MDSsox1cqHBhrce6TiqHeDiWN1U1nkZMRVYGZwtW9HY",
  "key17": "3Pq1rXRuyDGa5xXzJLxerCKCrPZwhtJfGQbaihYZo8ctHQPY6nnZid3KSYyjLnKNk8wTgDuoiqxKvMZ1xnArGY6c",
  "key18": "3R5YyGWRJGLo6rjdrfW5KjmH68gvzexEjSpQvvjwqeZA6xFVCDj8t7LNEVYAcG3W66JsJeHZNmqJYv7JQTqZXpiZ",
  "key19": "34UT2oBgYT92Ew4oNDJSxYqCa8aYLh3i99Jp4GdiynmrY7Qp9ewV9Wg4rfRVNt2ReYnzT6gfWj4dYnFEjbMaZ4Lf",
  "key20": "9ojUiQF6DWhwsoNJz4uURHDQaHCHSg6WhvsB4tRMnjZRcG8BKEEjNUPVEsW3x2eZEp6QyUPcYGBLEfW4QfzuMzY",
  "key21": "wfDRCJmxo5RhBNBR7LdJQvHhwqxzWhYGiMPG9ccB7hL4krmCR2ZDYo7nymCg3RG7PzBDC5AGBQHW4tNunJafxGm",
  "key22": "3iatdyehapUp2zHS7D4mpJCuKtLRyNiZjEw4r6UThHtMMVaggcdYxrXCER1T89iSZuHioESVfw25PaJCTcREY9M1",
  "key23": "5NoXRkn5RzT419xTnejqB7VHQAucAGbAVi1HKd52wd52b5b4DEn88MDAk4akWRmcHzdMpjJ6khNiRZWizzz98TbD",
  "key24": "4VK3ukZqRDpJeu9hNPxASuXG7RBhKeWnJnosvmjuusJndYTbFzS8MH4uMp7D4V8pT7tyzwMEaAEiZK6WyhwYB2TS",
  "key25": "21nFrkTQnG8F9WeR7rqpwj7JU3zSzsQQQXxtWNo5J7TjBMJ74F2tFBq8fzFfgDoh3dQBF2b6wBtqDpXVTzDXKBu1",
  "key26": "3FHF8EAoY84jZV7q1rYW4b32u8sbCUGsqVJZ1UAMis9rbwExCsmY8ydgSAwF3eaMkSk1xZMcT5dSgmL68YD9KiCi",
  "key27": "5Dc5rjCPEdv12ruqhZipScYoEnuDebDDvop4DvKuh7FXqnFBU7DbSQ45GhApmLesHeWKD8wJWKkLr9FbfWdv4Lc9",
  "key28": "4NeWNiW4vDdbUz4YkeYGYHFaQDy2LwCTuFYxKcwZn6V11DoYLMkHYx1VgeUPYqpsGGybMCLMnPxHhk9jDiXN5EJn",
  "key29": "3kzJDwGbdPM75WdH4jd7TkhJkk1on8oCaYHXSsogCE78xCdvsuW4Ta7p2sB9TdsmoixBzubFPZEEuc4bktsQcmsx",
  "key30": "59EVrbSHFfTfUTzhjC6qmjApkdCNvUPHQ9eYebVrcPvEDheTQYT3cwrVUZqUKbv51FwgZz6zy7uPZhyZSo4hRxUp",
  "key31": "51cm2qTKxTAQ11NAAxNL52PdyCrDF4jTThqBU9uaGBjDEPZT8swcrYQtxxUq5ic2XzXZnDpS4F19CNiDW4YscNmN",
  "key32": "ZLrTNk7dgCHjhutejhypW5n2pEq7UDmMSUJKWv38ULgmq9TB2sQzMcrcrbg7GzDjPrPbQf48X8roXBjcFKmFUSq",
  "key33": "5yozPvsSFevPjqVRVtKgLwyHFNCRDGh3izjbW1tjSxm3Ptivtasni6hqCBNuowTwAtYoD4YafLMUiJHgnQYMDWCZ",
  "key34": "2Yv1ze6A6xGLMZP9zt6RDBVnvK9UUr9fspWBF8BUXakA92mZzfgESQ7ALnsr5caace32E9DwXDUr3zE5GsefJCAi",
  "key35": "QAQLVhNvXreAdwoxv3cJAo65sLoSLQ1iN6uDn1D34Duc7A7CkDwQL5VwbJWHrhN4KtZGE2LzoC5qREf7JUMwgng",
  "key36": "2KKGkp9cNRTD7XjFbbNz68uRXHtDNZ876GBBF9e1CdzgwXCDTW1uhyvgwyCwUT35vWXfaJarZs5rCXPR8i9SuxhQ",
  "key37": "4Fqhfi347SkHxzwmsbsStvodHJFG3VHrqpzPoXeHoNyvRiZhGXzKesqFMVjNYH2TamWStikzLxWhJBgHtYYrdqxG",
  "key38": "EvScLgzJ91uxUhGi6RDMYA3CcxQnJwpF2GXxueoUNSvavVmWtoVmhRUuzk9t6B6aiSbVUT4YUy5et7ZnCpZGB2b",
  "key39": "7X7skcZmDafyAWiypfySePrsgWwoptCVSDgdPsy2WczKRSgkSScuCfuS9ryWjbnLr7aDqXWh6GB3S87qMh9fDYp",
  "key40": "466JXYFLwqbXeW4NLBofd935CQJYxbS5xBMSQbUwMK2kGCDLtDg5qWpDGuXi7FH4rDnHwerTThNqn7ZRQQ7aCFp6",
  "key41": "3ADxaRKMzNzz39qEmYuMAfAHMhyJAvS8jBnpkMw1PUfN5ReayWtYyNNj5Z9DMzvWbLxYnuEr8E8ojgNKmFRyMx6o",
  "key42": "4hPKmJrdVGde6srQ5LqK6iWX3jboPPXhpNhCRmP4PVDSui2298KsLwGFt9jFeLCe9jZfq85BeAHpWviReT4bGkHT",
  "key43": "4cxagtYjPVieygNPwYuqPgF2eJ9YBRKAfvHVsBrqQB69BmKVY4bmcNaZcQgrxoUEsRWmXmuyuH8rQ7Lk2XRD32qV",
  "key44": "4HRkDhK3poWDXPvEMkvdjKg1yDPp3637FGo96aAgE777fDuMFJZZ2cX3WGpCt8kjfRWwTJFRp9jibQ8cq4TnRSQi",
  "key45": "3hxUbGJLAY6fP1FFveHjsaNxEqfMzhDMc1crohsUfAbnA4dVuYTv7pNGJajvy9hfB2EPJatMc41G6DRpHDrJ5Kwf",
  "key46": "3fbo6yxJUe6QPVg7ZM8x3S1WK92ADNBnVCfV3cy5919iSYL2vPmd6u1ZicGd4Yiy8uribfNdRLnxDVdq7LuA7N4q",
  "key47": "659HoEHRQoEyMr3xQJ8fLxrRvtEaJDoqfmpC6Ucd3VupHaEt1QXo4DJxuStRpaD6QyUJBGqA86yShKNCMKUaX1HX"
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
