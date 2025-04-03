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
    "GTrhSrk8qNTgCqKF7oRzrbHGdW9gUWnQ2wcbzULo2mcGqc4nnK2wqiJsBbdAmYMz4DaRi85mHSJuvnGxHTQCoH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516RQzZg6KvuDKGmZpVZdc62YQTScdcnC3h87Ejao1ASJVDUeDqYU86K3ckh5U1RjGGakW155ZXruKbBfhCb1m8L",
  "key1": "2sFGTArDYSb1mY6iYnhmeeQNazfgbyjCV9usdVYCaNpDjx7YfkdHMoiZ48tv3jc8BuiHu89VUokac5EKRYxD8i1v",
  "key2": "5JYBWJ2jJm9dhpzge1CYXTjBfuSXaxFPnBoi9ZycGiunkTEzVWhxRrp9aWoNvdWoaKQR4c9e3pUznwhFGTvYrw94",
  "key3": "4WaUew1mUAY2BuebD36MMTTwPy3dA1u4GbdmTut8j3sqpwp24MasLSEERLCxw1TBFa9p2uJSzhDNuZRD2Jdr8xnB",
  "key4": "56mr4GREw5w1LYxtgnaVianKPPQ4X9ZgGkfdGosJX5sJtitCxR97Ec6gWyBf3KP7Y7UK7heeRRZS9dNxyxLkYpY3",
  "key5": "3rX55TWHPpicbgFAdQvFNesUHJsPjQ26NPLxHiUp3cFBMpTbZoa5fkVZEbnyG1GMyLGxok71EfvHCoBJsenfhXTV",
  "key6": "3eLHpBJ21FLUGjHRHrctiHPgPwsSniP4VjQwP4yR5cScH6Vz9JUvwBCBc4FNUwFPuChhdqFFeWuZXm9EyS5JCS3F",
  "key7": "4bcBUmsniix9zmtmnfWidu9LuiCj96k3NA7J2axBr368NdBQvPjqZRm9s7oMah9qSrn8kFCNBHSgDbYHFatyvKA7",
  "key8": "2HkwVs443nWWEUjtbWM67si1AQD1JyDu7EBmdCdKpeYK4vkbhAN8Qo5WkQawKfeMYC1M8KJy5z7RLGsYJWBwjDN6",
  "key9": "2yvJWA15DadgYSa7wBshvANovJxoiqi7WYkDtMgae4HRqk9nJdaVQ78de4WNhH4RNnpEfPM3PAvrZT6J4zjYoEWT",
  "key10": "3cx5pymR1VuUmKoM8M4sjFYuYksdoB5WFu2AGS3e5j6k9bFV2k5fUB8TjdkHKGushb2gnHj7CJsopU2mbtH3qFER",
  "key11": "2xUVnjAA96XcwVG8B1sHp6WvWMHbXpt4oWCdcQ5w1zguMXhEEY54TAdqGT6HGKABL6PrcTwbV8yh1z3bGvxNdsqx",
  "key12": "s612jaiZ6Kv3XksecP6WApndfqBnQmFK1zRvKcMnSco4m718guTWyK7kAZ4v7eCQmLXQNNtE9HB7Lze9g77Ls6c",
  "key13": "5NEjDertEz516nkC6Piqo4GsvH1t7ALUgH8npdmnaDERqJBWZoCRWZFK5HiQAftFxWhXreusaJ6p54CBK3V3ChFN",
  "key14": "2zPSR91YCbw4LShq4FcC7ajHvFARTv1Q6Qd327b55DcnxRYzdtQBJxSVFbsyGqMZQkNc1ZhNjVBKQjnaDy7rXnva",
  "key15": "3heodKC34dqWXzGrKoZVe58nQiqrtXiYZB7wEftZN7Z3pFJ7eQCGMG2ACENt4vkNCxGmcEB6NhtgkZww5JnSdugw",
  "key16": "2X7Cn5GgmYR2QrFGBsPGdmq8VGyYdMzqcpGMmJvguqdi43FzjdE3VPmpYkfZ4E6sX8hTyqBnTc2kRjjnBJmoQCJV",
  "key17": "4svvcYccq7NKs1LkyX8Byor3Liw9Z9Mt3m4aDb1avfvXVv8dAJpZpmaGQp3h9FBNaC2SC7KYWyUaV1pWb5htoYgB",
  "key18": "xGNFJEeYL33yDVMCkpYXzxgFeNoSL1DTFAM7MGLyYC5Cqi3Mo6yi589rF4oQNf11RFxpiYyS82ST4MHERnsGKRd",
  "key19": "5xoZ4dKjyopfSCigEx2fBU2mFHAQmmtUK3AuLZSYQfejXvmMVcX5ebbvyq12fzTeMZTyvoxvMf6A8rQQ74xdjdHR",
  "key20": "26dgHVehQiETKcxtCXYRptFoz6xToA5gyGf46CpryrzEzQKNHseE8awuh4mCAVitrsRwJQRxEmHpDwY6wdoQvxG8",
  "key21": "3WCCiCbMviEpJMDEe9i97xVHH8zV2VmknvFtwcnR8eMqHQYAHUNfKzaSfZg2qP2WuAh6NTdDaq5PBFZa3ybkTEi9",
  "key22": "oxVHCjpph4k37ZdkCfiWZsazci6syZyELnS1TnLqmXchqmqBeYjmGo6DVFexy2qzvFyzjBirKihk9Nsj1X3v8wt",
  "key23": "2eYizRpkBufhhRVJts6iL3ZSjSkTX6rTprqMRneMqgjJZzQuZsXHKgVmjxQq7zBacX2zH2KugMCk9a8ZqNbNm6EN",
  "key24": "Y492pAhgqhjQhgb93QyRDwvscvMDJhVBA1kh6DmH4eHJkUrdJvGDdUAETQZsJJydo2tsRCppWNP24Xz4D2Y6hm3",
  "key25": "5eB84Gd8QZzcNBvoewTYkTiZjQwLX8eVxKG3Aszoata4DEea1UStE5GM8okJPTZHTFC7LMxyoHJSk6nAtfVzTu4g",
  "key26": "5Vk6ybm1umZDRo2ZNaRikwt3QXpgbHPEQ7egyhpZKFeXNKpKrPNE9ufv5BoEASoSy51BNL8E9s32qTehiq2zriqa",
  "key27": "u3nqKBaTKvqk4QDTWxxu9AhKRNY4GFweYbPzFBVxbJZSXkJhcYgJvepPQPw4ra8zYFWe6tNGdMgfg3R1DDH77nv",
  "key28": "47FPtyYnjMt1hddDRCGwiXK8Cc5F1YMMaXgoH7cHAUXbemEBo45vQkH9QQTcqsk8PLW4zyMGqWuv2vuHDVhM5eFK",
  "key29": "ofndUvXjJE3jXuyd1ZebJ468uKrc5N4orQ8iZ8fmWJUZrddLpA7CLNfhhhV9KTbX4X8ZLgPQcHVykwJGWdFZtFG",
  "key30": "3pQTSE7kD2kLgTr1LwYoCKffok9429A2xzyJiX6rnwczAWuphDk9rfmbrMPt63zjUiX96b5iBBN3YnATBGvDJioJ",
  "key31": "4DKXs7tVaqQ1NPrvKccQNmxoiYKvSP6fyxhu8sjLy9k4LBQRTsYinR6TsvsLhqGYbjMRBXrjFqayuuwf3wi1fHKN",
  "key32": "5rXrXtzVLiB4AAR7kSsnJ5Cz6zoJTATp4Lxs8pRGetGkjrdXx4vGADM6B8KVbPwAFHqL5mL8Wt1GipV9VzxMoe6",
  "key33": "4ECX7oBAcfFd2FZkEnyBag4Cx4V85h7Puqe7FvjpFVyToZAvkKHEKZVWwJBrkAYUFrvpdZ56JE6DvkhTVdPZ3iRz",
  "key34": "2S7TP3fq9t859GFQe2Y9vdD7reAvD9xycEcuWMq133f6JszTXEQ83XPrshyz3k1idqf4bNbrEF2YZ12944gsD7fh",
  "key35": "3NzUFQFeBTNZm9GYpxpTfez6vtffnKFN8jVJxQ7UGCbMyFGH57xAhbqHMbqmEYXtBuxYXkwMAADoUkfowgGFrXAC",
  "key36": "4L6sVij9tpYayKXPoarUqc2zEowUC3bEWKAB4WfY7JudYY1Byb7Wiqu8zPS5ryo39h8TsQ5ewJYt2E9Q6pUtQKz3",
  "key37": "2h9GMchoNcK4rXDS4QhRkczsRKzGThL7rG9gAKX4a8cPxwvN7QkZApg2oA1vr8wmbpxGj9KpkUs93U67tzubnoFS",
  "key38": "2zQJH4UUTwodgCZ4ZAQHNi7ysn4hnDUCyFQNVZ6hJGBfkpV65gA9USjc2xJTJBWbZyLb588TcvNAx6fXLivavK3b",
  "key39": "3MxLUmSDrHhV3N19YLNLB7AfgpUTx5sjCyRzfbaaFPKfZJCmn8HarNQGP9vE8pSbaWZzfTfDtGr2pNEZZjAYqGpa",
  "key40": "XvDDidGVXPBUFXggW8EGTaKyNW1Fr5iwPZuy3gAKdwnTqxA6e8ksxnCJbn59v11MnMHeZ8um6a2n8YodvEvQKiy",
  "key41": "UohQoAMJQSn5QvpSrFw9mPU7jFdPtVr8XNN2R9JADXjWhbxm3NPyQAYsXAWQjwDLtupfB3k4rS8PfGvcKneDqN5",
  "key42": "4Vo2XSS2vGNibNpTj91po94jGdkFAhTUt76cFs9HxpkY4zNzvZsndjPXG5RjJQbiVpwiVt2B3czmVCnQjGSeptgT",
  "key43": "5gbQiUB7RMAraddMsUEp4i766dT5vm5iJMj5ajwqNDsQw2Ym8AeDg8AEbPdHFap7FAMg1miDbYtBaXDj5hpfx3J5",
  "key44": "3c5oAfQdxUbzWPEgJJC8j3it2LC9ELFYsPuCCXrNWJtXVc2QvFS1bcDLLd1WXcwkwRRQ2Ttq1irqYL4cSsWzerpA",
  "key45": "3t1r97TeTf3fMCgFJyPqoNwDSRP9PrMXyYu4TL5YazJBptSNUquEsuUGtDdNJUm9MSWbfE17NKGNzWi6JV1Sja11",
  "key46": "2ar8EPQt9QmFQXH8L4JzX5pnyrCAnU3j4jZkn7aH5FJyzkyBhdVrX9fspvEbqrWZ3iWsJYVEHyMcdhVSjVUhQjdD"
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
