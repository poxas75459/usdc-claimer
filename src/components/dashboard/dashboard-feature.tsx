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
    "2XhW7aEFj2EDYjzFmc7PZpYCPoLHC1FiYUs7Eftr3Cdg8VEYFDMMVFQ2yAdhMutbiP4yD6apBLCfrkADmKAVFAkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z58FjTzvnUUuqzo6wvkhkjFBw92aGHf9dH3Rm5HNHeU2J4gbh1RgYgvvPzYdkde7oZXjmp4xM2UuYSsH9HArVAG",
  "key1": "3V5hx7aVTXhaoWFLzHhhuwrBkiseJZDzPPSzc57ifs7JS88UAt1YfUSKXadAak3fvhzDMtfzEe7pSxVPSWr4WDDX",
  "key2": "3au1PKkFTg14G8EBXw7gtvEfSn6yc4TkPB5upwacDu78TB2mk5TADrSwbLrRJwADpn5hCT8W9ykh4jjVty881mB",
  "key3": "MfS5QMjyZp1rbcrG6cuKhRfxWGTzPCABYrwc6Jv6RXDan3KQ5aqKDsZK62iwxdj11zMR86R79ULpdC39gCioVA9",
  "key4": "2VjBVB2sH1dy7NQZNVzAF7zd8GXtWQfwu8X3rTkmdP2579NwKa8eAvd2WC5L5NXJz7AjZNcWoEhyFEnmUQoqJ89q",
  "key5": "27XrXzZXVUchinHHUHGUsgLsagiF8v1k1DLp1VB33h5XDFw57N6Kmx5YPKxqhZFek9WG39UKtnU16ZmGPb2LEnQq",
  "key6": "JZqnD1i7LVwXNeDBKD7eiK2eWQvDP1KKXxjb2YNyVgEEJmxtCGkB87ANHhDVYsunpiaZEX9L2RomuMGCLymmJZA",
  "key7": "5x6rN1A6mieN5MkKfkF37p2WyybxuvWuSQAr9n5XcXwNyK2o2Hx94mmvbQQcnJZF3bQg6eJDoiU32w1KLZ39Jvrh",
  "key8": "P8ZKmg7Nth9HamY5znSnDNZQteYAHxJY1wrk7g35gtUbyzjMcqgxQJXukbVjRC5aAV7qi1uuaVCHNcFEwNajURo",
  "key9": "37gyc8t5VButSvX8MxcTUiejWJrzbWRdWBZMk65Wz4fMR64j6cS86fUbybovAXFfyzrdNRXBHrs24f8Yp9PuwFrx",
  "key10": "3K14q7BWk2RKfchfWEhH5DzQWsd5taNDk7qrJougEpVvN3yaKxyJrbTEiZjTT1UzgTnqEgaUeWCt1Ezswj38PmWC",
  "key11": "4WoNQa7mp2D7Qa81HHesbSHqqJQ1X7JHyysmn9duspWNBks5NtiiPyYPZxZWkLwBcAjfMe1FYFnkbcHKPdfdHWH5",
  "key12": "3TfDWtxFNaFdHby9FbvrsyHdeAJTzdQ6GYJAcXhACJSHQygjDwpSotVTeXp27TkRCQWPpdopg6aaP63eahXbdtzE",
  "key13": "25YR57wn8EbYVHDUB8hsdg81h78bNP9RPoYgRFz5CinbikJsF16TSPAnvTUctoT6VHE7CjXM26YGuWcDGaQ7mv53",
  "key14": "67d5tcVCeXJ1Qua77NJLyWWPMV2FfR1UAKxk3hkvRg9FjrFPLHYm5F283aacJ2w6hq6opCSF7Cx4tXkDuTTxnnWF",
  "key15": "339g2a2sVLU5V1QsvhVP6ESVYLQvtxw4m3bRZ5oVGBh7cyAHiq78fFjh6LHziMSZdfwf1u4kNkQsTkHhBzcqXV8u",
  "key16": "4Lue7xeBLzSkxF8aaqPFUAcVtddztkumqohNEodnZJzhpJFmQXCjNfLt5LnBg4WJTf9Sa4eoR9a1jVSdbrvQP26x",
  "key17": "39K76a7ZJgKGtr4T9mvZBrcoFZqDQJn3CFQuQAdwdZJXtexEydhWGU9XDdiytFTWGXpPkWBiDJ5EgdABpZzPc6rv",
  "key18": "2eM7ikhVEQHotTi2S49TaDKvRcvLUb9QvU6oEob9XdvcSZykhDY6CRNcS4UBhHVattdLre1cc9kFaAo7urJCnwka",
  "key19": "62E2bC6WqkWAvamgpUfZ5vEeANA4zL4PoaC8vpDFTKsdEdt892SZYuLESa3s7gQ3uggNvT7fXUyCXijYXXAjePfQ",
  "key20": "WXH9QeyYFTrGybpaJGsnA5L6ac1cRS5yP89VaviG5HwGwgc7fEw6YAPt8ny9YYTYrJVrvjK7bGTaWjCveerqSso",
  "key21": "4RvQnSwd8r2575EfyquCDrtexaAvvsNn6Tk7XVqriaUaGFpAcieFrUSdxV4eX79YZLKEt85zkzp8gNrT3xyzzL7z",
  "key22": "28HsnmE8VHNc4fJ4ZopWBcB3Jj7fUPipcrzSfwWExFxHSgawuB7ML6cgbjbaT9TbSB7kTiTryWU3SZ5m6aZ8HgoR",
  "key23": "5ajXQXQHgTqGBs2krckBjKADTVZRnETEW5initJJeW7eKQPfXNtAtK3akqFxdEMrJPjGUHi4ThMptaw8KNzCghwb",
  "key24": "5GmYs9bAqCu975wgiSuNoVR6CMryCrM6gDjM13RHmbNJAuiMFteT6ATTuzLWE8FjoxZTKqafCpTA5dTxyzhwpWF9",
  "key25": "5qAHKkhh2bX5qnhhaqR9fyKXEGX85ryEhxz1oAu9GFE9FnqL23XFHm61VyGp1gbCwpjA4n3hcRTwk8mPDg6UXTXE",
  "key26": "YJF9eswAuBvAUgduupHuWzB9RwmPZUWHJssamgg4tK9BhUT6Y4BgpAYuy7KEJjqtcYCJjWcikUGBEHrCbHjQLSF",
  "key27": "3jz2BU6v3NgsMvbWvEtEVdnA5YrvtQfmbCNALHrBFdRmyhQUkU1k5HfspqTirt2fSxuHurXVKCZXq9TGX1UzWT4G",
  "key28": "5zwdqxsDPWaBruYNF4v3xkHoJqoDBCHZyjoeN8TTgKvLrgkRJtUYAAQwDqgFKeWViZdgEriE2ym7hYr4dh5Brwej",
  "key29": "4nnW2LWkvrYL6dCZWA2YAvuG5KRUQSmTTps3iy8ZT9Y5Mokf4P7bD9J1cqpaZUkBFGpgygApvjQc5UJJuo8UNniD",
  "key30": "2WdYVy1E4pStqmDqom6bCxEFT7CV86Cxtz1KfEZ7Efc18QijTs3EUeEgGCHVn6Y5nM1tUQ9SrUFwxuPqThezVvgw",
  "key31": "4Zo5D4AqV9WCPu4qts6q7aVzJfY86CZHFrTFh6N7s8e1TkaQuFwn5C1zgk59SgtdqjY9cHUVf3crkoGcjLAmNwip",
  "key32": "5i6rFpwG76adYcX9etYZUhoxpbYmf93rgRUxLKA2HWVCJnpqf2m4U2UwUKFt9THE8Qouj7ZT7enRCeUt9NLLkLWL",
  "key33": "kFJRLiiht3HwJht1XiuRhPHZQqsNhZm8K78yRYPuFQTS1bUKRSdRDYatAqHoU7WqCtuHgXC4tM8j7ko5QHNe2W8",
  "key34": "22d6rsJBesDgP7XcxRpR6k8nHxayZLTPY2fW85WtCxkWKPZE78kofwy5QXpgHYRSWQmnnzyDzfTWUucCrgU5rvyE",
  "key35": "53Wsq1VmXYj57QArke6uSA8UYF3cp53H6m2wWUhtyrCWdHucZ9LKKHzugpGZBpGBBkCLAKpcDHYdBwFfRQutPtwQ",
  "key36": "3BVvCMpQgRBsV9nq7ArpdbspwUQts5BjRFHsRnSEMZKfUacNEbXtyZhsbddpBTDkBfJsmXYPj5PtGPfr1s9DcnV8",
  "key37": "5WQjEuLzXwXChC1VDVL9iG2ePFWkRH8smjW1AKkRfm2V7M7nuHBKZmaBDNB6vdPRAGYT2FWxai3CM57yTgXMALYZ",
  "key38": "3z7KWKdmkLPxcctpBqjTgYcJJnUE4KrBZGJ4KbN4rWsZ5D6viau78UpLetBsKVgSuDwRfbYwQ8EWFCfrCJLzfhYN",
  "key39": "4Ybx8dMFRWmwLrCUUgDsYxYW61LzgCGJvvv1YBVL7bDFueRFuvzyvZpRDgaa2XxMQddKd1CGuZtW2fom5XRCKkfS",
  "key40": "4ndAX34sAzXiRVZUS66TaPZ7SuqquT4iB8ipkJQvG3okbHoxwbUCmDzspF4W7ZzGdQpbupKVd1gxaj9JdC1mypT6",
  "key41": "4bMPGkHAaQinNcDCvMCJfNt1axFCSMbMmDGpqt6LnevHsdWdF7pzLaDgshGsK1YsZRJBTRnx98hvzdbQcyp5gtg7",
  "key42": "67nXuoW8HSKVEXdmyyFKmnJ9bQhEmsvYZT97heCAK7e44JqywdacF7n3zhcYziNnhcyZRuBQdeeYo1ieacM6sFmt"
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
