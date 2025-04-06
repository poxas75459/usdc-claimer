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
    "2Ezeb5rNMTnFU1BtkPzsx93ZQYUZ9qqXxh1xwoSsaPaJFMidQX59sGbM4wH2YWoZCHLo9n8fTaCWEx2ZHXUer8uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3777XKt11gSCy1PMF4FK1vrNTiBETpNXvDoS6wSDVPrUDZFSGvQg2hve7gxrG5ND2AE38P9g6GFxtJTuxYtk4UGF",
  "key1": "5Hp73sZ6yZDGsCX9W5MSg9RnEMx72haxRq9iUAoa9fHyaTdgQmHbKe5CSWKyxFkiabBYHmobphK39Ee11pmQBpHH",
  "key2": "3ou8kAi2pNvks1b9vX36TpD9VtzDpsV6wWLk1Y2m38vbLaRSd5BJbvM9u6hjFHT1Wo78HKJ2ybaiMvCSN4XHF6Ts",
  "key3": "26sUiDVK26fRQNFTn5YSpFf4UKYWH6YW59fAzoYWPxcQabhNpqWirfmkMNqXBT5gCpg7CCtWnFBN3Q1br565dWLV",
  "key4": "CqzjWwsQPecWALbXmL3GkuynuKAeVJnrsEmDaCs7KExKqsSSqvyJE1h2h2g2dWbrqsxkZujbCpDCDwCBipfThHk",
  "key5": "17Kb8e88gbNGwbz6vb1YAvqUtcwbKMynLcMTKDUMvhSBVA84DD4eN7EX5CjgQ56gKtwb66YBM1KvZA5F7bAmsVa",
  "key6": "3WkjiWUYwgTWnT8hPbpt1xq2RLgdjdTwZPVuwuWzCSVPYoEU83isgHswYMfuGALUnfxEHMT28pMeLsjWyV9qoyTx",
  "key7": "26JDkPKQZCiBNT2SB1JEZKYYXwXq9k5nDLduS2chbTi2CYWKb2HBLEQNj4d3MvEkAaHzCLYNKjKwhHEVgYHRcdCX",
  "key8": "2r1Mavj8vtTfkmB9FwYWKX9CPmbVBfp4UzEKFA8RKE4rrrUFtU2E8YJJNR6FjWjZ6KrMQq1a1KteVK38dsYxGc5S",
  "key9": "2XmWtzVW28F3FhFiJZahMhGi4gH5rHiFmZdDxWV58azHPdT4NJ5sWgQzWZgSTd5mNc7nvSgaZZTsSRP89e4NhDvD",
  "key10": "5KJNpXXaGZdFgFXozpnn5mW4HcvaDRakyuasG8oT6yjT2C9SMXKBrMZWsBoWQvpRaQkpWUWJwH1tDSWfKR4x7gTR",
  "key11": "tM4mFZQPSe6qNXHrZJFAnnVCjgZv4YXdJsFDytQxcM9RhJ2UxSGMSEWthPari1Yc8HjPADMntkCV9EAuU7nMALh",
  "key12": "4AuPcLWEFyqMA3eoR6WVfHq8JWVpEnGQmLoV2z2VZtMxgqDzgxXB5kx9xGuBvN3PfZ8bNcmwjCLSSvoYS53CYJSa",
  "key13": "1cxueTAPT9A8BV2J4Ut6WzjsuFV4mFGmxvfHnnTG1TJVQ9E7kAQGKMByJbgmBNzBQguYTaK17MTJYFaobQC4mbZ",
  "key14": "3kbFdbsLg7mNRcmaweNPRMnSA5x178WJLcik9GS4VDPwRFx492xVP6aAdnBvgTdZSQeSrzShF7priRcHF58RjPaH",
  "key15": "uoh21MhKnxFDARVXarPtMzGTDAZmHn6fNcC6nTvsvgH87LZV5Evq3W39f1v5teWjj9UZwbobA1oV4qtYhPZ5uwY",
  "key16": "s1ytVRaWGLksfhDt9oUF6uUpj2pFKfroiKLm1pcUkx3TNLjVNtG5pvx95ZSk5QomH4gucbQJSVpqawrk8g5wCDH",
  "key17": "DTHjer99gLRUf8qvYcM8PP7CGiBDxiLBiwcUmFuzfsbXo1LkhLmzdqcttWSfzPCRVbNubFJFJxYUV2Nuy14p7La",
  "key18": "4uTXNjojP92qvDtDRuae7JyJZM5dT4kyAgY5RZ9V4MVPey24VWBUhPLznreBzpeqxLJSWmqvqj6hupdtDD5pdpWm",
  "key19": "4ZnssbHHQkbvpzzJwU9bR8UidKy3z8e1eM3qgvAcqv4VecWrMXM5uSs1YTRUFgRjFocx2gnVmtqfqCTdi5h7sGoB",
  "key20": "34sTiAMfJbYdHXSaVroPc5pwSvmohkoAUUb9iHzhfyLBDYWc2Y17LqS6yGbn7mDsoh1p3g787qhuiRvZVMDc827E",
  "key21": "4zwHYVbyrrhvgmxRPmnk2X3Tdd2BtJv3Vyg2PZCYhL9cTy9A2XXHnbmsLPg5WQc9m42oD4uCBUT6jgXNdEwYyu1R",
  "key22": "2z1yvRMXNHX5oEj1Wiky7oHPQS1trzbdfk6mUp1D9us8xXYEw327drpJnPL6CZZEKHbHdCRFv45XVdK5K8KB179P",
  "key23": "3aHQxhuk78z9MAVFDEkv2G87dh2STGfZx2Ry7KjoiVT31oREWsEg1AnqYto3G8ujn11kvmcQPXyxaThHAYP5GmsD",
  "key24": "2pUhMJpPajfdKCq2DK9CgT1fB6cP3ojL3rCc9wNNsR7hNQ4S7Sf6yQpiDVpgaW85YgfRpHjhxuD5832wxU8nDidD",
  "key25": "2JiBSFVSPUTWbZAZaa6N3DHjKYmRTWvh62ywMXCDnyHcDXxbNZP7xkFgNrxCSoYm4YTyk3LKTcF6hQQCMjWpTSbC",
  "key26": "1R6g1msixiGLsbFhCDyYKNdWzTmVBfghxC514R4jxZHNnqGd3juRbtuv9GkoL3ZNHNAXDQgzCM9PrqHeJDVtza9",
  "key27": "6U4b4cCthSXodxFJqe9wLssYvPfP27pdPu5cNdB4ivR5FvfAePMdUzmnKfxjkw8WXcadD8jLnGSeu7T1whtZZ1t",
  "key28": "32aS5UWxZ4ZFB8hQjNtWEeziMehnW8AVHZRqVeULhRGMxmDCL6XZYT8egUhgCy7dPqmshKksS5H8PeMMxC7kaQE5",
  "key29": "2YtCHAVUAMW42Gg11yuRk8RYdUSHcV5DjjmQdpx4CGfkqEx3zVPX1iq8MYwk34W6fP8sxBxbXZjZYJEn72YzBPCd",
  "key30": "3Fh6BkyFkQhDkf5hinNH8hKVBUwE7QX1xjBs1F3XTDiknfYAgSm9DFFi2D39uF65oLryijVMxJKDSRg4Zj3LCuex",
  "key31": "2r2U1b3jga5iSn6nq3fhx6HLTQjLkdyVU9fGehbPMUFak6AQBAuJv5VBCCBd9WkGqmQZB55yN2wctLX2PpsvHgdC",
  "key32": "29dhcRiT8mgrkeDZyqis7t7CSVYWu2YY2mnBvnPETSFP4asd41v5PxLhES74m2Ta9dwsomBPJzvrN9XQJdTDvYEN",
  "key33": "4zE7ieeacxEJakisur9m4ttbTpbSLaLhm3haifbkDD6aqhGAUuKg7yChz35Y95TfUJvA2Jn5cUrqfWo67nujXivb",
  "key34": "NptyqnTzf85XsJbz6qGyXNbafybTxYvtBhHoidwwCJtCkzZAqs4B8ySjRpV3c4oN5z1KfxkRCuNLZz1Szz9ouuR",
  "key35": "5jwecathjs1cAxnKmrnLBFdcTEbdFtAznV41nZrvSb6qZ2btJAAaADf2rtSf3u9mVKuiQ5b3ZuZufp5xt62LK3K",
  "key36": "5f7nZHgdbGu4a7dQ8iMdPAsiKEgJJGSMMW464z6vrc2xyP1HbmgZkSWH8PJFW1CuxWuXteApHTwPuEBVrrMDkdyP",
  "key37": "5Zxf7GQR2bqH9RBzanGixG52HFAYr15A6wJvQkEMRnwUxDxsrpLv3uZ9CNGKRoUgUMv5ZQdexh7UDcckKhf6aKGe",
  "key38": "GMwhYRrT4J9Zi94h18wFYJQefKcXMgCvCTbQXzJ5ZYwtAG9GKWgugLdbzb9ePWUisuR2oaHdNHyXQEQfkwTC1DR",
  "key39": "5NMYrPLzgNMW8gYfdhEhdLYABNkGKg5RbNqvQPjTyCxqvQmmGfsfcZjg8nNtG9HEDWVDXETh6HjpDK3rVSV22Wt8",
  "key40": "3FJEKjfaDg4cJLfz1ThyfKPyEvWsB7LzzuXL5iU57EWhV3Kdu8haSSJqB96e4CzcYJQvypC7D95T5XAsuFKdKKs3",
  "key41": "5QPnvZCCCofTs9gouvje649h1HZyqYcgH9eGhwBzEyPimRmFxwafTe72S11QrgceU5EKnnoxyz6E45TTjqutEpLD",
  "key42": "57nfwquR9wHTbcEzgDcb79q1RZbpynFkbEALsAHDLQ3LHF5qKDZZ6e8WgeYyerXorKxnbuwx1NaXiJbmt8jyjQjc",
  "key43": "wMpm7LrdtN3ipiKWdHqrP58AoauPTJTqfKmfNSCuZLPRDWcxNY8WGyyqobLz7Ve2thnjz8oHr77dKXebHwK2jGf",
  "key44": "4h9m7muNVJe3cgT7sWAxTMPmKcwq6ZccFv7QFpTsoFHkaUnmzcZfAFREnf271U7CWgidN4BzXeKUf3G8Y2FBVVjc",
  "key45": "55UBwYGpbSGoSyX9uTifmnWQGndJVTmr23BZxSfGA4Js8YmMHrn8G1zDhnj59Rco5GHE6LsnKNsvRWjYHrB6JN4o",
  "key46": "4zmZ5nXwvcW8kHRsEpTd6hxjysmKcEBu1dqHbJtmgp9m5QrwHK1BfyLvCsDgtMpkGBBfe7evu4RNu8pgSz1qy1sH",
  "key47": "AoeCZyS4nmjR26sdbnxJ8GWcqBADp5XrutpdYuDvDnNEtpvwoHBt3dyUdwQHPGQZA1hF3vyoBcZJqcy7CyNamJk",
  "key48": "LFTJ1cDfAEfG4krvYzCyQXX7VJWmfcfvHehTmy9nvRbwaCzV3GobmKYbzAgktEk3h2FgGXMf5P5iC5n5a2HwMrK"
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
