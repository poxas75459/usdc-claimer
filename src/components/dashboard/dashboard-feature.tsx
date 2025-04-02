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
    "2gk9QBP4fqnw83swiMpSaaXmR2ehHWta5CofL495BKG94TEAGTsnqE4kzBq4M1TRydquejkbS1F66rGdb8qR2PXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMhc4PyR4WkQVAgLWRrqdAqJ82QjaW358tnwXbqiGJxg3o4f1g2Wmb3iJUQYr6SegpAT7o5jeojXfAo2ReLPiKa",
  "key1": "4aLznZFH3JsVpTkrRpSFoAZ8PQpH16JcR8LyvMwhDJJdPR81dLkbcnegAhCSnChz4uey1FCoTnfgQi7UYKsJSxHf",
  "key2": "3jPc71n2rGVPAWU9LjFCJPHcgBfYex4mogbuVk8HKRhNp9d72Xm2RGQ2bDvCh1CPLm2U2o5p65vguk5jhr4LKcAN",
  "key3": "67S9DygGGZmcHhQWD6deU8qquanX361PPZV4M3rcL8BWdbNQt7RLVR5U7umdQfU5R5qzKYoqKYrKKt5p6NrtdABS",
  "key4": "caFUqu8NowhSaDXCEoh1Qb9QBCBW7cESFEtJmQ8XyEi5ENGNBvxwSxu9N5pqYS7kq2y8DRtj573r6KBfT7QgwxZ",
  "key5": "5MWZCCpTW2i9fyv2eUE3h7TwSgsJbVADU9DCK56kQyc28cMfbgdAZXekKpVV5tjZhbY3jk8ijLx5X1qYaATcHoXx",
  "key6": "Ej1KYvQF2HLVTf8Ry1Y8d2sanqFJGGNBEkc9uZpDrmxHrTUTvibqkk8apbT1Zavp8qgmvEZLeWHZh2PbgBMnxwr",
  "key7": "3UoJs7wGqXjECyQ1YbwEJGkVETpwqjxpJXu2UrtfQdLpJSt6SetQisDXBcdXxyzbrTMpa6yRX9z4WuNfHkmA4vF3",
  "key8": "f5Lx3Dv13kfLLxxTpxAMbQwtT6AgaNRvNatqzA1gYdcEC6n55PRJpukYVJcpZn7zkai7LeUS68q4Nm9rEzYZvAB",
  "key9": "4sWbPpVmYpVozcAH2o6jHMNdx3r5tV1bhdqhNiWaFHe5dq8eR1nRQmuPrSJiGCBfDtpgWTkARg4ZUWf7LuPDTFSj",
  "key10": "QWv77M3XQx8knED9LrCr2RBqfDA28LGnyajnYQeYokJQuVo4qGLA5mQhvfb3jSyR6LfQsS4a5DEzsJmJ2LXhmH5",
  "key11": "5cGU8Z3WyTGRoCgSX7R6XRpKCdcdXgFfWyY9g3SMZrRtzoYwmJDXg6yGhz4VKP9ukR87fQuM7dSC6YsgUvVyoeX3",
  "key12": "2S6TPeJVa7Rc4PfqoR2AiZcvB2ncNcdSUzTz8raPrM8tWSUWtvpR2DR2QX2hUqvW9am6DnbU3eUdLvzdCPspAV6p",
  "key13": "3jia6RQ5rt6u5bNbishGgqR3bXZVAPF9v6wEKa2r2pgVLr9gvMBvHtu9gTzh3x6xpa2QqvfcmnmJZjzNH4XH18VX",
  "key14": "35w3co9cNFmWd49cDFu3C2gXAh9rjAw3Uconzb2BGcjKeC1r3PtMP47sZe9kE1tnM1zKV5N62oi49hme3NFA6RGD",
  "key15": "4QaCKCFpvmsjMcpzj7gpmpfusaDDZ4oBfqwugFF1MrhCgMm5q5H1Z3YHe8egZ2nhnzEbTWPTfsDv7kNMsSUJvARV",
  "key16": "4kmTGjPBA8aJSmNkCZkw4dz7SdcMp8kbYyAih1TPq31svRo6fRTb3VgvX9r9H7KpqPyJyEepETSp9cDk28c7guJ2",
  "key17": "5i8VN3FeGFsa72KFNz7E5QA6wuE9gukNDVWGz383ppXNwe4SyBByUBR5bUzxwoTVGy6kaox6BPqiNtu615CnEEQ1",
  "key18": "323UhK5Y9UfiYbegwbEZvfiDKv4TkMPWCWvJoW9wNdzmd8c8RNWj2XRa6D2YU2FTyYSqPMrPGitFT4yDgcyYqGAc",
  "key19": "5wWa3ymSo3T3ne8JrMghVRy68e4HziK6fT5jkgzrgTiBecen54jiPjjqZbUwhmemf9x7QjtGdpL2RX1YRBPiMu59",
  "key20": "2zEVsN6ig6zehccxqCWFz2CrQS2Ds7zs7ds4ER9oWx8fsBEAyEnisVCFzFy33B1B8stEZ8mCqNFguvhbyjnLvPtJ",
  "key21": "4kiycQUX6c53s9zS1D5wQJBKpdCUUFkZRKv98RNbXMjqEFkRFqsJpo5jarFQTax1GGSNhRUXheoC49JAepbT791a",
  "key22": "LLn61uiMRwPDHt1wMQBGyb8jFThZQb7Bujkxb5gHssz2ptjEpyr76Re1fSwAQpQBhfVujUPtaB6PGrcEtajmwWf",
  "key23": "54KmvQPQTRFY1CMmS9xV9mEp2WeXznVQYFRuA984NbgibzeWi4fA18xjdaK2iFxDLT7TPNvJtmhN7NM2MumHTaPu",
  "key24": "2oVAfDwgQXGc1e14kyZtiJdr9rMxozUSiWFbGQcmuyvweksYyM4NrYXVhrnTYKJrvc2hDa4HtYcKiePYPfD1r932",
  "key25": "5QbRxpkCWHq2tc5fjUHsFGzkxrjgkdczH9Jm5WX8dCqvaKTNsZBrd3gsHpmVWxxfwwjvZVTB4w1AMBzuDvyTZK2S",
  "key26": "5k2ZKkgHLdv4aSchBLGBuP94aDdGnySLJDJtUiN95bNXtNc2QkWxSoyDdwQwfJrxfwN9mJQj4PeTckBANWnuRrod",
  "key27": "2vmpWFn75AkmRtpgiEzZRa97HW5vXfjLPsAcJND4jdKKZcQtdBTPXpnsDUNToGjpmhtagmPKY7GYrpYWGzKUtp8y",
  "key28": "4UBUVAtq4Jsj6ffFVwxPTsBpLYhhJqorSi116Ep2PumdXG7cUmx8DrvW4tKthM8imMVNeAzvAD9eP1zkhZhL5XPu",
  "key29": "31RTpQmnpiKYZAeoTgUf7ddU4jrwPEDpb1ZRhDXP7H3iRCL5EqPR5NRvav82muZiivboUdh4mwZ4rLKaombAoxSW",
  "key30": "5BGqetBupAjkyAHSVuexZP5cbtzPV2u5aeLnbsSiZ4bbkaHfdFvsfrn9FMBDeFAjRoVcqkHk8QC4TLz41Ax1aW6y",
  "key31": "2qbQ87BLF28SFZof1kwCwdNbuCZDaBJuLR6M4FextFdXmqToKwNWeLecPS2LaLKo5WrQBhhtwLtPMXRcckubqSFh",
  "key32": "C78jbwVBWoFyAGozzwXYiHhMgRrZX9K8XCq9rK5yyEYFr6sHEvncVPmtC8AGH3T7CMrWtH3QoQL9EhfhyQkmkxk",
  "key33": "3kqgTAS58HSn2WfBjzGFfkB3HG38d83qJJg28Ms6aW5AMMTmejtXwuD9AGhxcpXFRMwQm9JosdGuiqRgobaMfJPo",
  "key34": "2HoeQHxVxgN6fy4qECaTdHRjp78XaBrixvVUqQ54Q4A7F1zNyCp7HNLJmM2TCZZd3Yz42wzJ1msUhEmDzSQppNP",
  "key35": "3AEiLZdbTf4yGLgRiJ4tvke8mNwCchT2R8tGpRrWZVxhcaBTv8x17j1dLYimqSuwxtxAEqtDJA2UG8TThafiA8mi",
  "key36": "5eM7YZ317BuFG7PSfFA1usL7nASx6pxHFZ4vGw5pvQHzz7W8vvPCxWukDncqLPUW3tiCb1qSGG1iiY3Jk8vAyFq5",
  "key37": "rvVgpyMLPDGbtx8xMtMih2LbNqLFvt7YQkWcmotP9zrpfLXZn3ZHfkQRSdoZ35r7pycwvWMqsG7XZ6yUeQCwGKj",
  "key38": "5rYTWY7UTvbA5BkxyXo8Aaru5tCZ1y52GtYgWw1M5XPS8i8DmGkHswv6qsTH4usCJPyNKSVxjuYxXLkM3S6mJYTN",
  "key39": "5reghdryZ1HDPya7g89VLWRy7ZvxykdwsUvUnUT6Lk8Q9RVzFg7AbPuLUYsc8pno5trQijmrpSfHvrDDXMmeeZ2U",
  "key40": "Km7zgmcE5jSFu9k7r1HWSDhWTnV16qxA4o4cWi71wAni1SB2qWQTpU8c6aHz8MPfCzPhch3k9rShULCiKWRQWBj"
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
