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
    "5Bg9wYM1MMaDvfr6rsyfdq7AsQA2KRMFfcBhbwKSMNtLQtjGVLbUn2ST44UQLnTPUVtK1WFqTNRtqtTyWtvyEcRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMJ34MfBA99bHQQw4PNaC6ftxBs7cYUx8se61D7yPRABTrRqmcUNarZw4BZrjVffmtduRJSChKLhFRmDyuEZEBe",
  "key1": "265qzFXHxtQMLuXbocyNW8uCnkd7Skw7r3PD2vwQyeBpYdqXVbxRVNpBbmZF4HwJ8wtkrzMEYgxietLhKJKQzbE5",
  "key2": "J9esLRN9vCXDxpvAwaKtP5padTSsn6NMxKsdgeJzdj5ZCSrAYUZV9uYRET3snKYHSi2Yw3dk8cTCacVy1LuNQit",
  "key3": "64ppWrdgWf4HJvV4f24GvdEbgEwRWS4NGW7YDcJQUF7gbsF1zydrY3xgWwwUxgrri8MLXgyre6hcB2aFPo9PxhpJ",
  "key4": "3MXSezH5eMcqMKWB2rFMyFD4GwXpu3sQK8P7asnsycKD8VN55DaFpMMaUbYKSgvLL8AT1U3hy8EYaif25EVoDwVH",
  "key5": "67n96tZRhj7x8hdMgaNo1sTn1cfDuE1VH9ytPxfE9WhCXM5A1YrVKX9how73yziNDcq2AERUsUSGQACAQXRs8RB9",
  "key6": "XQehWWfErSwy65bX48NL4CLZZtakFoeX8axP5igGd9rZDYVaH2SiY1xzSHwSqdA1Wmh2mf14pJJsv3XGgZ9Lin6",
  "key7": "5V9RdJL95QL1ifTWUchRFt25qn2kf4T8nRgMnLNB5Zh2WAVRWvqTRu6KJJ95CzZ3aDarhnvqWsPZdqTsQY426enn",
  "key8": "3XgfSKLzriaxsyaGY4Qkq2W7oY5wq3N9zdtMMAMY7a68qnzT7TpnD24Fak1E3kLrZ78tvLWsPPo4nAEumoerm1gA",
  "key9": "5t3S4iiTie286aYt8QuGXxNG366Qz9kEsJQkbJnctkUuXVrvJ4Lk48Ntuui3pvLhbmCwDhKxmJTSbeiasrNYR3zx",
  "key10": "3YgTm5NFKUgz5G5pNPPFoxcjPmYF4PAe4n422QbFmcuJPq3mULekFzdq7PM48UJAv8288YrH3JGQyJqicd5kMBAb",
  "key11": "4rtXfHwdNZ7YcvgPXu2eZhP3dCUjRgsWvmcAf2ZeZgqtkNi36JBzPvrEJtVXgJUKzkNuBHRSnw66fX1LfKgtPEo3",
  "key12": "3pRC2CeYSzZiJdFYzFVaf6vbsSJTbFR13sExebkdqTKgWSecRsKG8bxgPC6GndLG2FMqHJgaNNQZMUjrzRFveapD",
  "key13": "27rnEZq7FVKtxKq9sqpzyPUAe53cxcMZbsnCBkepD4f96hwxQF7uebxuNncBt63ybohAk4o7P1UuRGU9f4RrTVv8",
  "key14": "4qxZP2zgNmzCcKTQJUxFkbBHHXMSkK1Dn3xYDovrFxqBs5N11n3ckmVBVAtuhkiebixMNEGJqw4MgJ6MnwvDwrJf",
  "key15": "3qmLHhETaz5vQp5vrAtBUjD2329jLQhiQyxjmzwW51rdri9zwiT3D6yzEf9Ld8D4tV9FuAHYkRE9kfSWCKgTwWTn",
  "key16": "5kvBj8Y42wCVxv2VPHzTsAAHVkBcj3jj5ToNEu7UfWcjyueicvVdiCxM9BkcgeMZpGF1e1yKqZYSMpJHz3rB42r1",
  "key17": "5cEf2irVX4f9VgiPWjYKeEHB4dkngqu2fXfCVgrPwCRKAfe5vEzmqFEd4hHtUA69XdKMvGx8z5Q9gaXk43DUPq2R",
  "key18": "4vSZJHYyf2XNfpSNpmAryNa8Q2YbbhiKxPZCLQwugLto68WT8v5asmTjfwDFfhSUBaHd5rsA7pa9aqJ1Ze1HuNLJ",
  "key19": "4AqxwTTpXbpm7bHwnCetuPzq3ySAp8JA11CJL495BzTdZx6guAh8GxfPfNCmSENUVcTYidCLHFS3S9c29YC99aWq",
  "key20": "4XZTapQYJosCEEuHie9gvrPGQRn5kMAz4Yv2QwnGNjf1pEs4KdaB8ebeKgG4TEKBGUZfRzyZKoukGcDVXjz5FRx1",
  "key21": "4KdiyWgisMZt4nsgs3Hc7qqj9Wrqc533RuoKGBeCv6iERRvjnv56yrmDzBkSWeD8wC3PPnwzu112XX9Uw2yqwRuY",
  "key22": "4R42vTGkdcXGyv6bRCZkybwzK3miwiTH135uyVqVRHdkgEs97FNGMGvkyxortEjtYwXvEb9QxqCaUZReKZzDxWP9",
  "key23": "3Q4CCSnSTV2839zHewZEjhGwRuC2Kd5pzfcg9BfKwn2bJ1PCdtPNNhz7XB1J59F6ndbQarJKtqs7ngnbrHaDZ5cN",
  "key24": "4z73inmQQtoSSaw1RDsvgtzahQ1efKhSGXL9VQzUdDd87UjXNY6XMnaAbhqnKcNJvjwwCt3xRFWSTyiZVp7oFQ3L",
  "key25": "3BL4ZJM5iTJfkLvRxcbrQ7GZFRFJMuSpBrnvfoz4B81b4mRkjtaNN5zL65baC8kkBXdgRzH9NqGgT8eVHmCT5aHT",
  "key26": "3bcYfQvdxDvGpn3V9uBHwZ587rfRssEBxq7W8ozRoZ7DwjYhtQXpn4TaqNrTYfHrtKCChk49q3UcDxuHeBPMrwjQ",
  "key27": "5aVCMAAcjb3SzYbK6yryfXLEHp1Bvoiq265fmeGprZZr2nzMLtYb21FDaeyhRt5GNu9Wdns7SvZmV7qht9oY6CW7",
  "key28": "2eM6YzX5v9ZSxUJoJneGcoNEh4BNboDdSWEej3UWr63sg5fL2N9ztuXvk2wz39JfqXvgmXChGAXYJ9szbShKbwFo",
  "key29": "2T4VXLLSu9uqnAWj1drTj1A5W3MSYRk28mA3Yi1hTnVrmm56xfeJrnyFptUWrnF5EJx4N46c58ozhsj4MC8Smfj2",
  "key30": "3rzjKy64brTKWJZPQztADjg2zWrAnz9rd5a1sTSXjb3tnz64y61f2mL1hr6bzfAsLGXRNrdtGqYuVVPEQJGWMsNU",
  "key31": "2ayhpkgTaVsrT9CaoqhQmkarmZit3KtsooLgFwBobV3RJeM6L1nLZhyEKjXmaL5VR3aB6Awsyh4oTvjmZwBQcFGE",
  "key32": "2yUjoQsd7hrY5JRuSm85A27W2293hmbdvqyFJngbycFvymumsy7eWntH7RpJQWHiJYbxa3qPheVjeuU3i8CEywcu",
  "key33": "gqo17UFFVNsxvEXAsLnQCXAmX9Tz4RzNGq4m4huG9EfXi5N2YGG4ihNLVtD6sa2Ksz3zx7w36GBVE7B6vkAfx7e",
  "key34": "ioTZXdAJkRUasQHv9mLmzML8qvipo4URgtKPHXUxcCn7vCyDDswi6uG1sk1fDaPM6p2wvuzTdmF8RrjGqQ9Z8Wx",
  "key35": "pYQFgBRLNij97cA1tadjX8hvAZFnYnXfrmXvfY2nRS2GUgh65zMkGjp7qXnohrnQ5owHikdAXfUXWp8SrSrNEjY",
  "key36": "34ByaQpRSR92vph2xcA32miFLo7geZQEfeJmzABc6SXGkkJiboqSyvVC6g6ifAGzDDwhTsPhziFq8ZZFCEmDo67u",
  "key37": "ikhvfWoCytJNyVXsyKnX6z2PDXEwjkoucJDP3xMKfeNRV74vUbqSWxGRkod2DMgN9BotgR2tyUiGJKMQRA4HMGr",
  "key38": "5jueUygM8fmYwU1jVRxg3ho44eFRcWMc37CiD3sVqbA4AXhnEyYYkheibGQSNTZ21Ld6vrgRoVXeFswjmLkC2qNc",
  "key39": "4BWvsrLuUQDQRuL4UpjzDZnipL9uNkxkCjrtUPUZbB3EKH6uDZ88RFtP5M1Kd17uVaZvHw8duRvfMraJDhYK4vzy",
  "key40": "3dR2nKSDBjMkvd4op3n1UXN6Q6teVBRj2nbDeKBCwpYDstFMjZygZ93KAWtumQARxpvbpZ4PrkaAPRd9edAEiSWY",
  "key41": "5773Wr38iy79Btim5pA2kmi2AhMCKSnR7vPH4i7S3Ls3VhHCA2kPiFGgpTTem6YLKpU9AwSeHKkGUyDdH2Zz2xtM",
  "key42": "5jbdmvQShYtVzo6jQKuPRZtqxnUph65bDn25j58fH5wF4aec4yja14R8f3jhCwEPvtRrDVyswUWiYYenF7Kwh39E",
  "key43": "4kLnnayd1KxKJdcqTpn2kMQiDhVn5ftos69BLtmWTzYP349uESHQFM4LQW8AZeGkQD1Ukn9sap8mr9auayDQ6Sko",
  "key44": "4HPgyiQSU3BDcyr9QQpwtwPmpyTJchgdSZTe4eh7wnWtg3QdsZ7xbG5aCErZvuNSssKhbLd9A9sUVYc1gMc6MyBe",
  "key45": "3Ghr8x8Yfrctp5G3ngbGt1YexJD1g8gYdxVWW8hEHDoXy8fgq8Pg3EXwo7jMj3C9cbMwqGz1ukhZsR6G4mSjmFyV",
  "key46": "21qfZX6gh4m5Xd8d5NeY2zobAkPm5ubDtY8kVFLs4sr8wNAwU7sWovq1TEFJ8CG3eagvpW7xPKofdUdVCg1Q4KWF",
  "key47": "c3oXZjjbM8yHYLNwV9iJPVtnxcveDTxTfjoNx3GWfaa5LAwjt97K27mqnvKSEszXTcfkniZePxrnEphxGphf4zc"
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
