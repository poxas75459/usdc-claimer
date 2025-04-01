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
    "3qiKcjkiyaS7Pq349Pc8dddDmbzM9kq7bTKdn2uGHeSx2L68zWvBCeuDFQbVxiMZB4yV8SoKpG9pyFH6GptFY9QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4sBgYCDmjjgkB3BN7LsGbpczUm1KiG72M5YSzH5ymRbHjYqB3iK1qwC9ZY6Uk3wjxFTMxRTfeRUDx3yGbafgT1",
  "key1": "4yeLDR3QE5Ddm3NYt72PurgP9nZacU6vJzFw138jwuoySXtcm8ZBH8aX2SyjjdDkkMGEc5fNau4ZMY9NjFzix8oW",
  "key2": "4TyPLUwpgMVXtPbfBCDVv39F3VAMWDWWxHBgB415nu68dMMusC9HbF7VLadixaELGsnzPZFHNXhRkDQ1hLxeRzN8",
  "key3": "4S4Y6Fybdqh8F8Jkijj5WhZJGT1au4tgjn5QLbr8d1rPHQxLyNCHtpL5kypQ5dXVWYeizuGV72TtuhsAZTn7jW9K",
  "key4": "244oKWPmxPDFqA8fQvE2chh89Yf5ybpbbKjFCeaEe2Q6tJj5R6NVeg3vePvq6tsYMQwGdjSaipsj6aC6RRMyCnSZ",
  "key5": "3u47NpQ6Be1cQ415266nubr1VntHdyA4qqQyML6TN4DNZ6tz7gTQSqHgncyfX5VfZE49pm12FdSacVEAW8iiANGg",
  "key6": "5GQPoMtsvz6Z3JdwmXEW8C6VDyCHh1RYfjjF5vDT5R8BkosevhHVufVQQwB3DiwLez85xBqnvdDDP1ssEWJvbTFN",
  "key7": "23XG7pjF7qUh3LJdtLz1vCvFRWqDyHXuDtubveLqShbSDQuJq16uxwssrNkEQ4N2m4zxfDzvBDNJiBXtbQwBisjU",
  "key8": "24Fz77rzeAfNJXJJ8iTzn7F9aEvWfLm5PbTfFhxUhaN9dRFNvvTvMwvxUC2g52o6B2tW5EaTEESy4pxrDWRgJfdz",
  "key9": "KKwknYtggYAnF6HhqkFGozwQGFMzCFkV9XWaipSpHfMoQJPF3BPoPsQL4EBp4FM8FhmP5khVYUGPPjX5MUA5HCb",
  "key10": "2Y9PnbMsJ39GzHsde17EyqRx3hirhybtcNCvuz4WpaQvnFEYURkUEWM4m7MndzMwsC8n3YqkYvpTaMvGsBj5ma8r",
  "key11": "2igPTesc2HKMTZ445psPr63bbP6mv9snmWoCd48EQs9pSQtbWqtyw8YZC23t5KUcoY5QsqrDaxhmBPK7aARYsTHF",
  "key12": "21UPb8vZnN6bgBn1H43Hm2cRMXgVDfY4GyGhzwda2HcxLZg2QsRtpRMgcaZ65pbhWMzPZ7Akt8cmBXZEmAmH5EJe",
  "key13": "5FTe18JU8NW6jDo9A6m4RyncSxZrrvFpwNYeAy1avUmA7yjxuaZHaZSJ69RSNeSxAkQHjM5mJfeSLKrAco5Y5qco",
  "key14": "Sug7KWADW2E67W2pXsdj6FQhj5tWWg5HgYgCXsBLmR4taZ7T33v6XA2bYRdm5XYM3Mf22N8dqXJXxw7zE67qfLS",
  "key15": "4uaf1rj8XpomeFd1WBsiW8eCKZhCkfeiU1RqaXkAJtatMpW4zg3pnvhWird5zqSpmhc9fLKsfNjFTVRZS5dpe7fJ",
  "key16": "EhwNK51eXjQWyLeQTp7etTR12ZB6A4VTCcria2e9hsDGdiGkdFswrCdxnDKTC7HqGvENvJm5zMBkPR26qoYfchh",
  "key17": "5hH6CsNiovgg6CZmGP7cvguDXnG1ZNF7ynHnZj9xaLsJSPPsZxSR1nPnoRC9KNdpEhzRPJ2sUYpbqsJerxEb9LDc",
  "key18": "5Q9UKApDEmvW4W5CQqv2Tqe8AF8KevqtmhNhV9PyfB1Xgyud74KhytxQiArXV6QYhJVh86G9D47yVwsfnXQ8br7B",
  "key19": "4VQ3t3PuAavYBxxwgRbju8LrmfFgnsEUg3vfMGS9jzr956vGRoWw6jMgj3MGuAiPHyKDH4VGBU9pryYDciKXueXF",
  "key20": "fBVyRFAUQNrk8LkkBpyXtR9pX5UVL7MYkRFgkYYmWBPnUXDZ73xyAy6NudxFc3tFtUkAHirsNx3vzoQtqu1Cj56",
  "key21": "26Sb7swpgySkpxGKk6KCWYCb8oLcYAtbFxJmhgoXVDeg4eRWKTPDhcr5ojvwB8QA7D5nhRXkinrPYmRAt8WtngmU",
  "key22": "3RFad9B6Gve2X4QE5Y1F3sirbZdNWeNUZqNG6RT7hs9fBaz7RVRT97ZhVWmE89dPTAwUStzRerdDuv1PG1P4Kcqx",
  "key23": "37oYXBPU2fdeDoM3QpuuLdoC7oz5erzEfzwjzr2JiUdFghKixYKEjrcsxKPXaXjXr5uv3LoqstuNmuhhmsHBTv6J",
  "key24": "56Ght5aFyPBcpEcARaGzjx8psWM1tHLFtLieaKDbu7MYZhuJSQpNQAX6noGaXQ5q9h6nJiwXfA3A51ejc1S8AVj3",
  "key25": "2MTCrxcpAGodAerHp5Jrd2gxqXazEWGGQBB6QP8vv5D3Ri3eHtLzpF2dZg8aAfWiLfzK66J67jcbC5uxuaPRuRMR",
  "key26": "3AJRaMV1pozmiJmXL43griLHVLEkAcPn57rJkeASNtqfSmxRJ1bFtvhVVrJbNdusG53XVV111gZ5jR8oLRBQG1kc",
  "key27": "3TDQ7zaE7wdGUEZP5hLhkJtTN2Hhu6yKCvfV4PCVtQCWHAFYwDaoHR8zH61o9wd2g77J8V9s1fuvxPmLGduJXRUu",
  "key28": "2eiC85syxt2dDqYA6uKVWfiAQHiT8znRcsQvwASwXK5vwm9e9FU6wJubRKczTqkyMtQuJkS77JdQYV2hxpBDWTCr",
  "key29": "3oizm85syLgYYR5qHXbx4kric4JoNEfAzoY6Ymdmz8s4tqqvVpX9cpBLp9jE3Sq7dXjaFn7bFh4C8KifMQTbSoDk",
  "key30": "5NMJYemXSnnGpoPDhsu9rL7auwH2bZnTS2LPcfouUotLA7eo1nr6g1HUSomDoQS3xrA6VRtDjsjyyTfPuXgDyvXT",
  "key31": "4G4gAhsqMgDmtXutf8oS6gQjohRbWJEZuQbxcmX2irRffq8Gds7wdZQsm4G1T5jYgbs7XGZi3hcZDpS8aV5YV3k1",
  "key32": "2D3gez4SpfS1wVMFFdfSSZfMzLtNrJye2mnKgzr9rP792spQ1xmkaTRx2xmWwbvkLQp7tXVGgKYRck3cfsNBBNgY",
  "key33": "59PbfX9pxhRABgf4kZATDiV5xJVuxRCHsvaokd4btfDFnyjo2i1hEiqcscP8Hc8cmFAXnz1NFeiqmrHTacRq1Mrg",
  "key34": "2y5F8jh7RK27Cn6RY4mYLKLFYrTptWhFRzwEymkod5Ka1i4LNvJvNwswG7vXSTTWFe4yDeatjrAcod2vfdKiqxv5",
  "key35": "5ZNonzbsqhRsPjhrFrYxBHtR63qk1YW5ST7L55ptg8sA9njyAtFFvwAsBFJkcfDiGkd1LDcKcdXvzBrBxC8tXPqp",
  "key36": "3xurA3nh7UhPi6f6ocuRMg9uzxjMKMa2xjwt4mPGacENghidi1tZppP71uqAcc7pqU5bLM5nfFtJ4t4pqXLzrZB9",
  "key37": "24hafyWwZbqHF4fQabkh7v8fadZNDZC3pY44o4mY3vNFFT4TTyRrfa7kpt1aNMFDvhDpposV9Ea9WafPCYa81BsV",
  "key38": "SePyCxtwgLdeX7tNNJLoHdrUDkESuzEHUYwhYcg6mEcrDGoi8sK7WoX2Xxsjqoe3HgPRthPW3ikYF29mMJAGmeX",
  "key39": "3bbSJWP1arc7HzLm8we8xvsUBdccmKtifhSkkQBFfJ2Kmat24h9KTXgCSWjPYkLa2iEn5cqTBQgkS1ae9nrqURjA",
  "key40": "5tTVR35xZQz28B2pk4sxj2kFzHA5cxQSEpbvoMAMjpnSYxdqqtSqVY6gAmNqHKQnKBLfgRRbLDKXWsVxLaoRh3Z6"
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
