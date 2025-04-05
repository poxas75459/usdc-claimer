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
    "MVGQHTUsSi7th6NtSe1csgo7rZ9rnXD2mYQoAKhTLMP3wJeLjLwPKnR82hJaRV6SZzvCUUoQVM6rXkK9fMRAxmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ub7T6Ni6DaT9qutqG8Mx7mrLVgeoQgadYmv5TT3jQGo57M831GzLh5a79yThnac1Luija8JpLXiyppL238QwiPH",
  "key1": "48JyyuGeR8UxAJ2FLqkHvhNQ2wj88KAtxC5yGKKymsJaVKGALz3QzSV5ykziDaxivb2CS1udofbfk8ayyVwtbpTN",
  "key2": "4A9QMDzo348UELKpxscmUebwWBQrABNwMuNQ1USdzBqSLMHXNip2R2MTufkEhXHwfb15Wdebs9y4Ja6V1NUbSbcU",
  "key3": "2Ey25M1RCX9Rohzk2uCEFwW2h7iwPoNSQJMX14wKSiCrmqHmLM4mY2Ze7oCS3pB5XT5fAQoiYxvMhBBWyWYHNDqz",
  "key4": "5KGPJkRkjgZhgR9juMJcWHPszCKS36vo5zPgijRWBUu94eHrQoqTZmdnqajmB5jy9RD5rKNAdhrKfT8iu57EZ8iS",
  "key5": "224vtuRtPG3pfyUPY2jYetAssfbhd2pXZwThTrKRacG4dBZ3dnJ1Zq7RT8xSNboU5cVvC9QS5cxemQUBMwDcgvYR",
  "key6": "2NmnNEsGLGc4VuxwdHGhh3WracuVDFTbJzoaeaqNzh8skCSdEhigY1HjfKtEdmudswf5FH9gxhZ8sZu7kZb2NXw7",
  "key7": "5sGrxG9ASDkHm2K53FmDxCSUnH9tv5MLWXLNuXmCtwXkEfY6MwybMeg2pmpHXot1tYvyP2RN2SpkGCuPF1x69CBM",
  "key8": "2DF3HpN4dnEaHbce1vEX5uJJiQfFxXdPXHzCBYRLsX6UDEsAq6fUQUGkPHmWCZLw2zApBzVVmGTvNBKVKAdcJa7n",
  "key9": "5HNnrgcHAmyDhSr3EQgqfjUmUKhsF7k8jkcojbocZ725BM9DG7uzzgVdH4MyAUbW7kNS6Wfbd8tiFtPU28224Hbr",
  "key10": "4LQ52qN47zrhMksA6YDBLn55BwPMpQziMvD88NK9tk8LKubZ7ZwKU23jUGVHJRfCGD2h87KLWFcXv7KtLToZ3n4Z",
  "key11": "4R3cxUfQ6vUm9uX2AT85uL4iYJZtEdbGCpBeB1RstedhRYXb69qD8nr9r1h52fFp5yPgeFV6327oUDEM3j5WBSLP",
  "key12": "nvj1PMSHMEFV5Ahw2cB4PRUEzy7sqavhgoScQqoXrD8nCdM54u1yHfjKCbaTxiSiDDmWNPCzFU2moucKRsk1YTS",
  "key13": "62ojtDJSFAU11uaDsUAZ17UmuHNttJxPhRofEKn8zRLVX7zqsP8CwwJDmtaHzuJYWPAnHGMcrYKn7pKnUFBjhxMN",
  "key14": "2iqUjFYYpPaGUVKVf28WtTPeNgdj24pL3513qbQdKmS1LvFCsErgS5wpEWcC7Uo5tgjBWC1f9gsQh7b5Mxv68tm8",
  "key15": "2yjWHpDsGCyMVQZnVPca4q3CkGdN97spmtPV11SnYtuuZ8nMdurhFGjC9yy5nMeZAF6mmVdvPVJWRTUon7rph2Gx",
  "key16": "3VbgyLUbfdVnBjCPffdoLwLAyiMPdrpdpMdyszCGNuZuMbDuyTG3qeHt9gG1WgGXgVUy9tJMF1PjfY736jP2CuXL",
  "key17": "2WAcys9EAAQmZVL175qeyZfrMqadXmtj9RactwLmLKL8qg4pvU4h29QdPnXY6LJfQCRWM6szeQYfXNyJ6tdpHxzw",
  "key18": "7kxvo31arcoQEz4b1rD3gHH1eZLYH4XF99djgiTdCq7JpSdxv4HgE8mLRtd3jpF4M8WhAtMF14XHKSs4vzkUegA",
  "key19": "2TnCvuihAqV4V8NZubBLmRvbFqDPemTpRNZCisw1pKbHgaJWSR44v9mRykQSjggkLjG8GiqQR7bmAJzc7d7Stc3U",
  "key20": "5cL6d4debpMeB5bz2E4h3dQPiyovNwkMdrSEp9H2Sv8WxuwHe4wyM3EHZ2yp27KDVcafFf7SgZ5xhbf9tjwsh5RN",
  "key21": "3a4bAGxj6W3wGZhhLiB6XbMwVGVXnTBswJtuasBtYnptrMsN83sc5gHJ9rFZ37QyETCYmcqKTE6LWM36BVrhHWeS",
  "key22": "3LZ41oruGDsc6fJJwtFmfeVLbFBg6rWQJdDVWWtC6uPY4HJn5djFF4BD5jgMxZ1WtWcMC3LzyuBjHX4QY2oFmVRw",
  "key23": "3nGXDA3q2Ru2m42uw24v9ooP5kiE4L4edBnUAEszXddknvsek6F4MVRHGYjkqhcgpVjxoVwtVnLDf2dCC5NX5UdF",
  "key24": "3KctUdEAW2WWhx5m469gcQ7nWe8VSESNojFPbdnkB3ZGKppjsvTuUxqX6X9iDjNDjJxRYG23TqPevZ8QjRff8zzR",
  "key25": "4ozAR93Jseo3K5UUNjbd6PUVzye12x8y6Gu9E4hLKWh9BNy2TbqZsak2sYNi5aBeftGEhD59YeBFwobdKjefLFvc",
  "key26": "4Ad7j2y3ZSXDfJs4zV2LmTWircPTiXDLPzCFoWMV5EEgGT7jGbZqJjkoCYBPC4mKR6QheG8LvHJR1V64owtuQXVu",
  "key27": "2ETQU5GPusGGokxGzCRUZyic5AoHMw546yqnNF3324yUmKBFzGXsDJmsPmJDcB1fdPN93d8EyCV8y8Cp4Fiv5J6T",
  "key28": "4cVXzQjt2gPRGVK2X3wfbu2W2MZMJ5mypueT3aUEf8vxhjiZqfoEcjpuY3k5FRtDWeh2gZ6PQK2YnjmqCx8sU7kb",
  "key29": "32JeZjstuyV97P1gBtZzwkTVbFByadsKLT9VN3245Z9kU95uwx1B2zVHamWa6wiqwi2LPqdXMNhGfNqkDH74MXRf",
  "key30": "tJNGyTzyvLLsLUmv21Ls2w8Vgf78TfEcTNmKmyx1sUudvCGTacKpBZ9SCJUZbssny1X5pC248bphmJCq3SeBVK2",
  "key31": "tJX2d1cH3rrWj9ZwnbqZtftJ4Jyos4V3gn2fTcucBBpE8TCsojWpYjwLYgcuu3BJt9sVVveJJXviF1G9vN3kfZ4",
  "key32": "o7qEMtJZheamqHojAWuFUpZMmCRoiVX7ek7xHs9VG4dELPCec7Na4PyRgKeCQEzNhB2RLTxzGCxeNcupSyCvgQY",
  "key33": "4MxZu7vDrseWvwBQCZF1DgxNstDhw81vQriuNDmrhJujktnnonQPaTSdyNMihhJKUg8WG5LkMdujmyHhHKUFumwa",
  "key34": "58J4vGiGr6RZKiHfMN7gWVpyQjcedviZd4nrL1uZCzuCw9DXPjEbpGquAHRzNxrjt9qSUnXUXUbH2ZbuHw7JBfNs",
  "key35": "59YWxdAhRpfPtQsmgX7cdTfAkWyKYNMp4aVS8GNbbNtLQJLqk6WEWE4F84FBHQw6hozZK3KvSQrY7tu6mtdbsnUi",
  "key36": "5XkpVk1fxjF2mAwP31vZ3zKebDxP7SBmn32VE694qU7Z1rHQEvo1Pd8oFUnnzknZWPpYKTQmQRmWxfXz6EGaBaoA",
  "key37": "2gcdZUXq9GrmnTnoAQpRWvfBucrwg5tc2qFjF9uxr7PiYDvFNpUVzSUDrU8YMH95XXSwVCVPoCSvUMaBAB4u2gJv",
  "key38": "4hNwbwhEbnvbxaTXD6T2KxweeCtvzFw935WEqrvPMo714md5oENYyRafW8W7rVLp4AnRWKmJ1s9bnVEkhXm3mfQJ",
  "key39": "5GTnohS5v5KyuCnepmRjhQHkxXMNpsBvKcHUtn2RG1Z11L5b45YpMZQteZMaoCQSMHfiX36JAf29khrbjXwXuAkt",
  "key40": "SLABqYwdbfeBxAsgMDbAkVreTA6kZAds93MnQ8rY3YWiURzUoxw6y2TcWCJQguM7RxJdtE9ZdEy9N2sKoDcPTY9"
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
