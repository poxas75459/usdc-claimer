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
    "2LyQ5FGjvHeCpe3edG6HjeD2iYq6Na4PgnLMi3ZXdhzLuKGbHjUBK5RhDmSPxeDsdA5Se5BvMCj2CAXc6TjsHNp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGSunMMNgnzDJbqN2Wnj39fuoaxe3pjDNgQ4ubKjuRfFhszKHM4RT39RZEYsPxSrPmTNhz8PBTfT1DYP1effBNM",
  "key1": "4xf92ynv2JUM6vXLsweapewkEkKZZmmzzNbhusyejaQChcFBNu1EwR1vbB5NTVNCiLnyREu6miNNRjYw53JEWprG",
  "key2": "tzuAbWPvWworCQd4DqjiHg4k6mLg57VXjxN84CLiEpdvJyhp2wtNJgQAJRy3CAYzLYHNyd5cu1Y5BVuy6e2sLE5",
  "key3": "ShoJgFvW8GKJy6cCCYGBg91dUdFJ8kkFSzA41FXFqZxNXs8kvnGTZqHMTbd8dQUC9vHFQhR9gY3riqASERPsKUK",
  "key4": "5ZMaZysM6fhJYDr82Z8M9HMyMj3jufzUWH8mFbHQmNF8X9JyD4wGEyRV5R3aZaGBk2UQYvneBiH91Q132j9HtaLt",
  "key5": "CjJPTCPaJYdLV7YW6eTs8SbznrLmBsUfPWAMxbgyDxEHYXVLf8psjUyjp4BxHC8SVv1nQRA8nz95TbwSu1vuYeT",
  "key6": "4CNPP5RpGBYjMW1NLsuJrvnA61Xg5CCWxdjHhEDNZZyq5J619uAsLwtTx8Mkj47WrmNjvT5M9sYddbGhij5xRUWx",
  "key7": "5HsrfcPDSdF91KYpBch1bNRa4r5EYviVNHH6w6CVL6ioczXXGsevHdvRCutTwpFckpUefRxZ3GGw5P7fRD9dYHLM",
  "key8": "3ZZbrGmJo7aPtFHzjUTGqbungbkgCphDMRUGqLXPX3zFBe5uwSjiEAwnX4i3g5SLfQKJ32Hr1objhWsuoMPnHtNm",
  "key9": "5j9h6qa7UzFG4P4g65b5N9RpJcYtuTMMWoDzYsHDJeJhGAu5j8yPwcDjRU1HjGabNJBLdJeFMv1E6Pfe9LJV1ruB",
  "key10": "3f6Uw99BSRZ1M4ZRjtDarhxhjec6c8GBmouBdHnjV4zAdXCHspBiX8sycctSKdegmfPwAH6GJhAiU7Te8jDo6NYH",
  "key11": "5ZB8q5Jqtt6RT6UDDUz28ZbhXYqVf3cmMVP5dUHYtDhQnHodaAEMW2hWFXz7dQxHH97XurxFxQ2Xv4BjgoCWnM4e",
  "key12": "5MZdJYSFfH6jP6TUdEwitcabsx425B46QthC1hFR68wbM34MhE3snQgr3iK6CynvG9LGyShhQmcDiDRHT3gFw6Wf",
  "key13": "3atasDeN9Gy8RZnYcfzEKikEavZr1V9ALbpx8iXnTHEpLySA6ApGGwb8mepJKdW52oW2513RovNh9NDPNEEdhy3Z",
  "key14": "2pastehdTt1AEXiMuivXQvbPHbRrHiUFszicfpswUcvtEH55YXsPe39PxxHHVUajyTVsKd1KSdHFvzvXi9cVNL2B",
  "key15": "24bLKNPpCm12RFzAMVLJRj3V237M75xbXd4Gm6R8j5qZhugAXn5JVFK4zVmMvWETZ6aw5s1BVrV5cU87z3cnykNk",
  "key16": "4iMtBk7Mafe73M46nPQfuzhhF3fDMpAaWyBn38L9vhK2AkHTFaQenmBS3pr4SfhMKrzd95s64pidBKynS6gG4FYj",
  "key17": "2KCrZ4jyUoygvwCd5DpfJdz5yLJR7cT7DhgtTqfFZQy6idU74YtbZwAbAdB4ncyR7TgzQfoWnxB8Pm8jMApJFhJQ",
  "key18": "5owFjfRvbBnkjjxbWwJvTPiNfskV8G7F9cANKfUVKZbsBcSvne99y88yrH6BiKmnQxZR8yttMqeU2SBVrDkiHyUP",
  "key19": "2hiNgebHzs9LV3RZnGfuB58G7VZQEg1qbnsvdQFVfpqDsn2qRD8sDQFVvQ774woTfoqZy5Tb4iRvkDGhAYxWvrt",
  "key20": "3byFVuyQwG5mU7GQHjauWkoFb1jgYzjwaCVd6zBx83tLctTxEM4Rg3BJkioVvCKQEpDAyHV6cyhPeyrZ9SJH8KAf",
  "key21": "4vF8gfenHf9z8STcBZhUREm7JrrdaGTKDEiVU18H1vv327YfCruCvKB1x4ycSnHepRPzeqiH4LXekunpk2aJz6Xm",
  "key22": "P1bD9F3S5h2ary2W3bUhuyh3GSU3NRbXTKNiPikQkiDB1w4VCipfJBXUUGYU3CSAB4UsaVcfpZcHEeBJk98N2JS",
  "key23": "D2aXiPKtfStfZmMpdJK9XSqnZoSzDM3iMygtmFAgyiVKVFzmXVN1uys4ZQ8WwEkUfuJc3nhBRMh63QToAxhz4Dz",
  "key24": "3KYSFi5ymZ3HEFfb4vP8GJcyxG6m7RpbqPGc7e1JPcPoR7MJjo2UFdUKSAbnvavzjuwrKM6Yn7djDYyTr8ZDCg8X",
  "key25": "4tokwLzC9MN6mnu5aTjmerKXq1AMEBbEBFLteVpbt61w6Y9iJrmUYa9z4Go6y7CfVizLyysYdp4Xw4P7Phv6RC1H",
  "key26": "3wYjD3X4Ls4Uexv5t6wutHxuuUPQnPpBmKeu8xTUuu71WDEjuEmSQbs5bZHYUMfqUACGkQpHwq9fsNMtkNwmGhUx",
  "key27": "2Kid1CLjZKxzuLsfEaXL8RdNkd71PTvz3kUErTqAViKNk4BkumhMCgdBsKXSmKf8t12f5rZTEotLqrVfM8iUQ9GW",
  "key28": "42sHERpBxArSCAphEGJ3byhaH7dWoGgDbHA25ybxBXmYxR4tmcDTZyye4efetjf1wVzAW2hu7o2ggspUpto7TBqo",
  "key29": "2uCzdLRPoxwyw6qTrXWFcXmWjqbANDgRp2Pm7t2ENqzEfuvBD2BfBxjSBw3hAz8sYSmXrouXgiiCPxWrs4PrhkZx",
  "key30": "3Ghyzk2M2ba1SJyvSrRDFYxkng7mUz27WkUmRvrs7Xfjris4redjYo9n6wh7b54j3XhGv8Q1QwBgsiNWuDVG1HfX",
  "key31": "4GQvqSWFm4hHAXKcnmW9H4oSSgZ1tN1ecT3bwb2zpsyM3NT2uBUm5pCYLUWY8mtwiwB9ySNuYmKM4Zd9u4YYWt66",
  "key32": "2jbd8ojyaz8nXhS5EVNJZarBLyTfnALrEcaxxnaeYqWBcV1X55U1TfvxQA2PCkBotKCZfRLNKnMrwW3WMFP3ckA2",
  "key33": "2bQ6863cvZqf56ytkJMn7aSYVpmdcgFxW5piDzjVk3WihxPh8UwVtXCuivBAPALg9habbkd2YFu6N8fVmMwBt5yP",
  "key34": "5TTjt6beJVkmeHgsmc2fLZa5HDinxZsr6Q4FEKwGZzRRuCN6XxUxSKyaZfN2BFuANgARuxL41HktAQCRdudms1d8",
  "key35": "27farUx21DPEBHwxtJEdNahQng3H9dueStuwycoGtmJgTz13a9HcMBBYgAhM2DgFwyR9ZKJ7LjEGNT72YG5BFN2N",
  "key36": "5CrgXKFNom8j6kLgjQJtCPLCqHNBXpGqaiH6SmdKuqYj6zJfaPreBjK4S8NQpHxqM3KqtsPvWssJ1P3kHs2L4Wzv",
  "key37": "29wBxg626FHtchhYgRj6rmf2K4F4UY3xiP1a4gK76ejZK4gnusZd8XWuAo9Mcke4Pc33cF3RNnumqgQbmrKnDeH4",
  "key38": "m5T36ywcdFSTwnnzmyrwFfdRxBWUgtE6Y6bDqaBfvRjWwDhGG7SeTRYfEf2mYENEMgN2hoBk3hsEuZajgMYvuZR",
  "key39": "43n8BiGSaWfL5pRfrJxuU2avvESTjfwbWgKrZ5PZNM9R1kksCppMNn8NLkdCnSADvG2mDLUVvkj65RZmgZPoBrUd",
  "key40": "shuAJsKJEJUfaEBqv9Xb2fLGZxPHnUV9QUUcvogTEEjZcHHEc9fH78qphPKUXPKhBh4rtsepUuhikc3MEm6PPiG",
  "key41": "3zagkMre8kqVCsqRTbiGfwp3L6LUSAbMRsEJs8B96hX9tnVPq5jtAiUYW24A7ncz2qsfW9nZGNgTkLHXQNt1QgDd",
  "key42": "35hB2ZH4mHnwX3zLJeC9SE2q7x6UScYHjvmoe6sTzAqG826hmEvzM798pXbgntsVas3BfM2NY2iY9u1fejHhsfSH",
  "key43": "44x8RxUyKPoKRcBsox8hHdUAfUFX3Fsn2pSbyXaZQSn4cCzZ25KqcCAsKeBusfUnbEbHER3skkGk3FN6Q3zEbkKx",
  "key44": "613zd912iDseYC3Ui5mQkzEH59satWEXZWStLXH4n8Z2xGwvABYYDDFh1aaprtq3UwESULPvEGRViEVkZ96MPJKk"
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
