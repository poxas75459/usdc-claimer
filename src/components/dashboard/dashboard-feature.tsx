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
    "5ZbVDxXvqh7UiwJ8D8ZGXLiVfQNxfBnvwhtuPe4uNJdiXAc4o8RTa1x1QnDWDMrs9uh2ZpyAo198v2ruWz6yVbGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjJCGgA53xJHgSZ4Z978pU7r6LoUtNHFopGj43RKmS54HsBX4Ym1L1HzYV2rQBsi4JqCpg5fauxNWwVSq8JVq6R",
  "key1": "2bQ9QxT8qVj1qsYL9d6G8fDjhNh4pF83qPESzY4Tgpwf4LTtDZpMes9bRmYjgjh3vTy6eMCC4QVLRCCCmyR3MtsS",
  "key2": "4p2NQCQURei7vsPfNaUduaR5uYP4rD2ALC34yPFbcq4aYpvCkcbgHLDEmYbqyRuTrwbrQzkxVqbxS3WxFGDbWvqb",
  "key3": "3RCbGtQxTMXczLRJyHtfiZmrYr6QkQFUaTxuukjsUAeorQwhqGcApEpyiZRaEdzF5yD2DT6pSGzTkhPMMrEryx7H",
  "key4": "3F6XytKcxg6wxY2PD3MPQBwgy5JStz56dtUZt5sGbUVunxPV1cBWMskTbNki6HYTAuvhhEstd4Se68orhenYT3Gk",
  "key5": "48TNwtcW8buFnSULDNFKAf2szb2n91ig6nN3MVzybXZEq2Mywsvzxjzc4X8tiQNozJMrFGKhCJEHMAzEfLpuUtsL",
  "key6": "3P34LtsPsT5DD878SJcN3EikcPyxfn53CurNeq2kH2MZxqYsPGX3GsYzuEUxDuPNGQeggM2v1dpKB5ZsahgRE9PH",
  "key7": "3GToCQhvAmU3kH7n6z27vppZRx6XWJQYaWuRNRcPVVgkS5M3wTtsho5et94mQQT1fc2jJb6oA7o1yGNpUd77QLAH",
  "key8": "92tnHqHBsrTWoEUJr2T5F5a1tvthQcqfoLDmVvHYaBgjscg2jQjouQ9mLVU8V45mufw7wkqy5B7dV84EjSoBzb8",
  "key9": "21nsCpH624EsarLkUgen5mzmpGSQQ7hJ56RSCB1Rn5RUAAt6ufyV2VrnnuNurjcQJk3jRPmFrkCTUhTnxjR1U7hu",
  "key10": "673U3kH15rGv95BNas3T7AbxhnsiSwD6DjiAAF4XFp3SCcgsunD3Y5Ct1drNbaUch7e8sb2aYbiPdarxxKzcxoV",
  "key11": "3Rhb4FjHh8A3qiJe5UYVw9Gt5mQfcwUqijNM8g2rbSKQXqD6qtEUmLHZVdXkrhGZ1GKbR7qUpazWzShW2oGwChZE",
  "key12": "5WbN2XmtFErvfFN1xyzMMbSPMQQNtnr9APCkyvGZidBTb4yFcjV7eiGEr6zSj1V4RtNqjuqPmtJxnMW8FzZbwWJf",
  "key13": "tSgBotHNk2Cf1ZEu4MWd7yqrtCBHg4ZvhzdWmKFUBXjpXVxtd5QKq6AxLhpurQsa9LjS2sGahr3zRUuRiS1k2jE",
  "key14": "62Z1iA4yKn1zMZvFbw95MvvCNu4rJL1qgWiCEFck14nB7Xypwa3EwUWk1gS9NPpmRBJPrymbFRnrfDW3pFEvxiiS",
  "key15": "2yhsc1BJNCfbCggNmZ4M5uLJZ7i33XqhrfPcPKwkLYKBZWZqnD5t32oU46cdRbv7FjY2hd6tEXGhzdZHTY31t3fj",
  "key16": "3pNVGHBmM48fkYTVk4ks1euc1XpXLWWXRmX1ye2CQ2bqVwCpEZF7K2ppXhm41Zmkwa5NZpd6gN6VNURFiHZ9Ukec",
  "key17": "3MmbNFq6CKET2QHs7ZNeThzXzRwA4oR79U2mAQEabzSLmXs4dMMUKPzwAJex8995YDKZivXn5wC5pjWj8wCbzJKq",
  "key18": "49tU7rQXnV7Zy9GSjjqmaHCeMKtRk7VCJuMvHutm9Hr3Ztsi8Rzbo5cHfpjCpn3tdPrywMpdYxnFmMppd4fr8VUb",
  "key19": "2agWB4ZUGJ8d1i3eSzNNMn129myQNNRiJiaTcdjWi4CJR3t7RmWcckLVXWBca3sRt3dv13GNcoLzhNG6jqMJ1qLn",
  "key20": "3MoBig8FBTEdBnPmyB1JeLrBFZC7byDQUtsWQ6V4MgkPN6jeMCHzrQLoHtb3FzKJ6RePhfRJLdmv8c9WxhDuyUyi",
  "key21": "4yCcFaUD81LUmvuDp4nrZosJkjExr2TqQcEHtaivtUQQwvjaNfqDXxEM2kvax3MraBiCBprtNPGmPPm9e6BBnkLL",
  "key22": "5kTDhEp2HbF4trRHuPKvt4bKBBhaq9WXofHiGcZFxjvanNVSPLFdrgSLU12CVDZLgG6trAb9gfx43iS62Z8V9bT3",
  "key23": "2ghnyZjfnLxhhexTCvv7d6KsuDszGj4UWUSUtBEZBPRxNYKjUy48PMPSQcXP7wi7skgmd3KNC7ucQ4QgERQkgjEZ",
  "key24": "3V8MnkxaR2XPYsteK4y12o2FVvsC8dLzaq1xfcnLd4CDUJb3wmUNR1mMgX6FpDgjbaMJt6ZJrhYsJjGo1QyBqoT",
  "key25": "44UHYH38BPBJGoMnEvA1Nfdnmo3aQW22iCwNSkT9jgFnjE24ESebs7dJZBQ5N2FXuybC9zAGSwUEMS5yM9Bx9WCQ",
  "key26": "3Agf8EUGiNehZZBkvyFgvpvSA1crpExdFjGyjPyYi4soepn4gxNZJCzUq9gXfUuc3owWAAkQiTp2E6cwvBzsjNfd",
  "key27": "63bLWZ68WMoR4jMhWeCKX1fjn2E8FaWPX3HaXCb2kgHoJgpjtPo9h2pNycYcomuThpJcaGWE8mBBh6DNN2dpc2EE",
  "key28": "5yB2wNdXUA5sCYx4LDfmW3UuqiMYiiDRmRz51K4aTSkKz1Z1TKTuf1rX6ugkgTtZ2gvgZQ4utxiDJknaDr6ymAfx",
  "key29": "5bfDFfyQfinztrkiDC6gHzWjCoKhkrAYhTpRTD3F3vcbZtNggMbkp8tUMVUBi5Z1xuz2KSm6D37bF6LZKUWEo95H",
  "key30": "4nuDnpKjK4ioFU9zEqtUibygL4sUqNiaEH8ETLYjZnaGDwnR6A3BUAtYab6CU7u6iNd8ZWecdBmTj1YE6CRPTmnj",
  "key31": "5VEQrWsWx5JcT69DnQTXKJ7dhBvmk3YUsksgf1MYiYFLx62q29QYwsYGYeNXUWkoEz1N6q4LEpYJ2ERP8vUuTjhU",
  "key32": "4dX3EvNFwirRf212T4opwhVp5s85qH1c9xsHyBPMFmVf2bnBb4pjrAkxxDK1Uy758ZWhpUTjdtwt41SBEZUFFj5K",
  "key33": "2jhGQi3RK3dbfm58VcmE1fHGzF3EwcWDi1XASQVUE1aj4vFQ9cFb9VncRkXAiVmA44ji7ZVyW8rsCQSQNC2Aj2oh",
  "key34": "2UqcUdAWAi8WW41DBDQnaQZt9ru8bC8kZhPPwfYWkTMrtAFk8qvCfM6NAnHKYZVkaGFqPxN6ZpXuxv65dkXqH7FS",
  "key35": "DyG9mQZBoVahqsyUDZPUHEDAhXqNAV8Z42D4VwovpwjfV7uBdpsfgnbfD2mrZs6jxfpLCe2APdicWX8VFMhiDVx",
  "key36": "3b1CiTxtKxpWZ8ZmeoDsm5d4Zyt4SBkd72HFbDrLx2mNxd7ZfXC56QKQp6DqZnCy6RU58G5fqDUoPxzfSdjVBMhn",
  "key37": "5VKuGMwvSwCebgZRSSKQecsLPwixMYvK5aiXKLdxPkogdjrkLzeivCTHXw98xvJECKBT86Nu9MmEeUbD2Pf4NhD7",
  "key38": "3GB6bfT9PKSjt62RbhpoF6zejNdSR554mizoYZkZsTVNkoAsLx8oMhvKZz3WfPXB6TDKE2ZhAqPytH9jDoVN4m7m",
  "key39": "31dXiK8kTBRxc48eZKdqg2fzXFk4eUCkBMokeYNPBm8YG6QHVKdzREsr1WADYBX4f2UUc9xntubmyRFbwwQhjWxm"
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
