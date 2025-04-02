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
    "2CU7in8347YyxgYM2U8scUhmNN1KrfpQVPBoRgQCYKgw1pWrGDx77Ka2UKc2WWWDb9HbZjprycfexQB48uSWjzHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftTtJWcUbcvb4memE57BbbZaEpNLit6Cu7Wr4QDXLphr3Zd29C9zKifZHyWuwQ6U2MhP1vLkpqk3RY5bdhLkQnn",
  "key1": "cPRNjRsikHsPm9Xfd6hDDzRSLSNDDcdZ1RGnu1KcY13T7LStTW2DPpjaURqFazz2TdFyZD4nfzoz5QE3UMws3mi",
  "key2": "4k6k46uyQSK9C4XjsZYwQSdodqdtisuEdnatbUuCjPdtjpWXsMYCzwKaT5vSPoBKi3EEHqJReazshkmv4fQ9B9y7",
  "key3": "2pcWGr61k8QqeMDadiKvBP6noS96E4ENUYZw8fWJoQhY9h1AX5wi48rrYUbjm4PBFcF3q4ETdnMVvCERHMZpsB7g",
  "key4": "3zvEYSU9FUSZbNfZrLbtC18W1gzBTz1maF9ZkMk21vPTw3PpuG7Jk2WWQHiGfBmrZk91eF4fQmLQYUhLHm7bAADz",
  "key5": "5MsGjnXqV8o4DFkRGESkLZAEQ2qyohJJmZSGtWyoZxzHFMfZNVMkTxRm6m7x1mQd5e7sVVpBg1VmRZSpRi2APr5B",
  "key6": "5BM4Y5edbrWsWabsx86nCg4oDdG6srqUwqphJHgf2xriHJvtzYYDE1BMkFUzpjc1GoGizNstBeu9zoJPpn33rbn",
  "key7": "cnuea9GrZutnv4vNPsmRqKJYuN38hAcvMriD1oWfFtjw3kfVdERpRyk3rYJd7hX6YvfJ1Vat5GQ5ff13Yqqn2zg",
  "key8": "2DbNR4FSFgDG3BqVcKkMyiB6gBL3ZL6USE5jYsqskdGGiQRcupqd9RBZ7MJ5ecAHdWbDEcpiDPCB6aYA69viULvT",
  "key9": "2h3cCDVRCFfjaDD5iSUJZaMGr4g8dvzeJKa4w1yoh9eb8ZHocKtWHHgfwoGa1fcT4hxFCoZFNqSi28AeQVD3tUrY",
  "key10": "3MarecAyEGPCMUcCe8P5oNP1pe5iNTRHQbYsmCAomHsgBzcSzfMknC2RqZ2uSPys47N4a6fpgDFNkgrq2pCJ9yV9",
  "key11": "4bRFocaXR7oa569hkwPWZMBAvzRWXhSEMT5V4DFhQ1k1wYphdtEShgL4fVyXMRkkVdXgkXyb9nTueehwWsStLdbR",
  "key12": "2tzqjqp5sRqXQJAakBiWgmdjWfnKsHDhJv8fmzHQ37ESonJ7unC7u4m5pyo5MJ5LDvmuCeTKFapHFADejiREt63L",
  "key13": "26QuikhiJb8Mq9o8PjWRd52kWQXNvev8bFeZPCDp9L4jKDuicPdqhwnBsSW49L4WZjYtZg5ARWbjm8kND4V3pjY8",
  "key14": "3eMQBmdUydUoS96c27xuPUBCAFcGK1PF9buZkutfT9WCb1aMrm6aap2cMhn93jtELPHzYmni983WTSwdjSY4NBTE",
  "key15": "4PKEZsnAAyB1pDGefu8J7Wmvr8JDVAjbfay2vc1gDvZoqrXxSuWNWozcrYPNLt47R7BAjAqD6wNeg2dDFvinpmaj",
  "key16": "4VGx5MDGHjk2WEhqEe2pttaoWiDts9KcrGaX3AQjkR3aNsGTUXkSbmWeZLVLNJPRHnuwAUijxNEMjpHavKq4xELy",
  "key17": "51DAEz3m7oLd3zgEosA5EafcUrWPpbqJwE6662GoYvsncGMamNfbQJzVnK2nywTqo6WXjcQPqmxu7i6Voq8PZoUm",
  "key18": "36h8yTMkmq7c2vRQZthVzHGpTYtYuVGS1BsyKVS497JZnbmWy6jJcAHMB3YogVXxQHk77RmgZzhMw82swBkZGGUY",
  "key19": "4JesgEBRJVedKfRr8AjSo5CgXUXxeax4aak5A7RpPw9bMUJZhED6UEQjCVtDmHXu9223YfNZUDZwC4YYkbPWxpng",
  "key20": "3JaFTjJCUtdz3Ky7Jy5QTV66rpU6ySC8vPWdRVbcvbi2AZxXTvhdpDmQdevHq7P8TmGpYKRLjXgNDAS1BfGGCLQL",
  "key21": "47tMLKZbhcqbbFGVsaJWur9RVXBHRbhyUNfJ1WoU46DCg65kBJhCU3ECvaEcK6A87dL5HcfYz3fZMf8jw9A6MgtZ",
  "key22": "52ubtriJhBS1sVhcBxQf6AxNNjxReKFeus2eCgYqEYwt6XebMwj75TueSXxnurunjicUdrGHs1C5ukKBk8Po92qy",
  "key23": "3YRAvovnipwmqq9QZjWzUxSgtsfqrFCerYhQVvoWxe8Jtm7X71FF6p3KkdjfvD9vv7cHtJWEziH7wrW5V8VxJtPo",
  "key24": "5xxpu6vkKTxz9wKkityuGtds9mk28wHZxUEPVrWyawx8cFWoDctTFZu3Hz4rY1uFdoj8m7Hu1Ab48RsBcQBokwA3",
  "key25": "5LY9FDpbmFCvs7D9KKh5CsxzKNHfhzEw97QZkkzziGWpgitdrWYUopoUviuRAh8nsdrkq3PWDmP8mq8LNxXy5GCJ",
  "key26": "4KjkkUr1cqRA3UYa6m9VpT4CGRk9DPmuGVHYCNQpWaffeNJyGYL79aZnXScZgMYzHGffhLUZHX4Cww2WM2KfQtsf",
  "key27": "2iWYYsri7TR1iLdZ3YMH2sYkb1oNU7HsiM9PwZ5S6Y27ZVh9UdnF9XHiN97YZVJXLmuNcZN3GD3xJvxMrrFBev2H",
  "key28": "54vJzm6zi4XJTE5Ec3Cn85bjgDhTH59wJUpDyk8NZkwRgxD8Fh5QPENats6VmWr9Fgs9K836WStbNH4yYthh4cXj",
  "key29": "5gRYM2wjP8T5A589QeLJ8JbMc5AAT9srcmpmjRNXL9BrYEnZgtsUYJzwZT863bwXAGELARaKjgSiyZ478zDgGnjx",
  "key30": "61YMyaZQEcqbuwUvHPxwYkAZwDH9zKdKUzUCgT1ihypFXrW9dQynbSbFvGo7vAuChGfDphKtj2wz3zXnM7EaM34D",
  "key31": "3Vi4VgSKaDFy6Ug3FzSz2JWC2hep2fmgbm497WfFqkW8PBDFPSom1Zuxm6Pd3r9PYXxVuwaAuPPLwfhmocyXqJbx",
  "key32": "4kNtd9prx2NbfHZQGTKaYcBRWnc8z9udWiFAPHK2L4zyhG97SDt2wEz5KUy2mKMHYnUZcK6RXpfyRDCbNfzJRWGY",
  "key33": "2hT8y3SUTJqvNhzeS5PSvuYh1MMMFcEYT83kgaH3uXvKf8FzkCUuVh521NbowXiFhL7HfgCSisUGSES1cXE5fH4w",
  "key34": "4FoYWHyXUSjuL3nXgQHXhZAwD9EByK5R8G5H6caHR6iVp5n8DMJnSjDKdUcR7ifxpMXGtpUkiyyNMh2HYAg1sV79",
  "key35": "3F3n2eWmqCtY1zgGxjtJMXBueGnR6242sg3iugZNRgtfoG3UUrpwk2uSvTq43LwaNPMLeZroS9yvVgBcBnbJnbNe",
  "key36": "3NYbA3K8Xfqxj4J9VkZuJUm4MMi397nomFwL1uL4Jyzboo1a6j9UV8Qk4aXRhJAGHELUHrnQWB3WrPptVrkdTQwc",
  "key37": "33V8bSua48iMboWLMe8mLjS6H616Wh6JFFLWsRYKDFCdbkAapDnkcBgXiCxehpPQmG1SKddJtAKaTskxR8bdnUpe",
  "key38": "3vrJ8Ng8KC3amLhhkNRN889T2L5UBEZvaekQyozhyvoJoGJTnYmDdxwzCqA4qmDBFWCCfCfwS5GqjxpcsCUbQRXa",
  "key39": "5uZrdPSH6j6oSk4noiCCwMhKpT6H3cg8QxdauEy2XMrkwF1wn9S72tmUMSPVYAat5ytLjHF5LBhnNLtcgHcng5sQ",
  "key40": "46MiEVigdHyKfCJLTtiLQkQJH3xJa3zVRehcaUPQ8HTfoBtth8zSGGYrgmuRo6k4Bd7v373azhUFuZx8pyrUtQ3j",
  "key41": "isRedorQXCPuizxsxp6boWwKnwR1vVGatYYN8jDZL9zconWGJFLypQgZMKiWhxPie9jRT4gAejjqGFVKXzRz5tx",
  "key42": "3iVHXXxt2ccooFuecbFGWgjQk6UQmYo46rqYCXpqCZ7D5iLCqwp9XqxxSENY766BmSabnLAtmFMxBuoPb1V23bh6",
  "key43": "5ocqw6kChXmQM7jedNEbM9eVRSVMjzeHkBe2CnsSEeKdzNe7xsRJ51orhpQ8BeaH3B2Mx3gp6u6XcjSE5zfYxd4o",
  "key44": "5fHxgmWXXoE8JYJ71eQuVmi4S3TLQ2g5tREhahkdhsF5pjx2D1Ykao1jkeam2BSMZ9RHAcqtDQ8Hq8nU7tv615JB",
  "key45": "66Kso6Q3cM5RcJT8MNHHpbAgUvDnuu7k31AkSVzndsR4UrbCAt42G441oHU6dq5YBCcfhYjkjDdiB5JNfXcckJgT",
  "key46": "4wLbiKaiSiUWpMExayJW3WYMwuizpr1sP5xAt9DJ1QwDBMpYWT1Jxrj7GGcZ2qa8DC5fuDcrheZhoZJDhbQATJWK",
  "key47": "2j1zookXHtaKBvu6BVNhicVTT7R47WJcFZhg1DqQ165Hq6RrwH9L4ig7v34tmvVrBbGtsXEXi9rAjNgEUo1Y53RW",
  "key48": "4XFTZySzUmqRJJtVa9kPx5Cg1f4q1wUk8Gx5wXMRbBRQaHk98RYgYniXXksXC3JjRY1YmVi2mPGvQQoHQtxdJHad",
  "key49": "2bAySCr82nkvhsRVijcDURKX5cehKBrNGm6toscZcFfA2MKBkMmB3CAuZ448Q82BBUMWRD8zbKaAdJebZMAajkRR"
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
