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
    "65iYcSkikioscjHU9dc2amWS8xqe9uMRSKtwBJogoWVimiYL7CtVkmJACXCaazxJQ2812TDNDHBw92DiaCvawRwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4Fkifqe6RXdDiFTdu1YQdwntyxEXfH54NGvYn3w8on5otpXj2zkzoh1QLZptLxae2mkdbGrzafp8bcrtuSosGr",
  "key1": "2MJPuVv2GrghQWKrEkS8QHVxVhZ2UGHryPmeG8aW5nb4oDauqL2RMCFstsZsBLqz6LyY8fXL4f9mD62X14JH2SZ2",
  "key2": "3Hnp43nsRzxbLkLYUsbJjkrF7ah5byoyceNxakLDa54brkuxorWi43c3G8YkhexSWgniDdWKV6FBSfovXMQ9tASk",
  "key3": "2es7aV52ZwtxZ6nZM4TxYvxhaBT6Zjq88Hk5dgou5aQDdAe81fiNyGWVFEPYgT4LhTqbyjrkUDkVHhNuwgkPs6Qk",
  "key4": "3X69vnBmaQKYA8xp6dvPBzcUCRzvQAGiYtiWq9iV2S73XjftTcf9sgkkLZ1VSvGezou5aYN5vi1MrfWy24Wx94Kx",
  "key5": "4eV8CW9CocLebbZhsLE9X6CgcL4tVy5cVmqKWhrq1T64fxLayut8nASXYKRAHpK9hFoBVC5m1GZx855iSCoL28b9",
  "key6": "4yD7U8NGvTUYxF4RzVMPev8oKq9Ya88ayWycibPZWJKrhfiu1dNeM5zfvB3AQMP78bQjSaFLZZFfMEyXcZavnCcB",
  "key7": "61ouBBmxyLdDhkyvQPwmXkneao3AoR691Z1hwaaq3ni2tDGy6N4sN7yZUSSHZ6kaj4AY6PqePMT8cn5hnj6XgNDm",
  "key8": "8AMXv9BYfnf4Q43h2pSxtBrLVM9gjzNpTAxJC7qRNfN4mTuXhdA5bxbUL84RNekrCevuPEJBh9vKqswkkXqpNLE",
  "key9": "2sBn7kkkZqc5VDLndzfXoF1y9kDk8aL6ms6HUb2LDLn1SgyrKLk1oXdiLQQBfyyGUuySmAVkRuyZ71JoZGpVAzTG",
  "key10": "44A36CDNA6pczYj3EqgNWeUWgQGQUhWXNRZk7faEinwjrkrGq8tZizSza22zorjoc7fqRRkTpAVFEEoDZRDTFSCt",
  "key11": "3LyB1sK9dS8EKjMP6x4YqfbihwshhSwZZYphYh2d4BgPDWbZoubp2zXmPf1jxsCuPrznQNHTMW9rJhUVn2s1umvn",
  "key12": "SnYi3AdRXvj5RtK6N276zJy1QwJcNPFjtai35etakQjxkVUGGFKiLgZSAjjXSCtb7VmEauLMfE3NQNCsyBwfGFQ",
  "key13": "4SsYb1ZiZXXrVvbXcXaADm5bYDp6D1toqXgLQ1i8aaSLgXHrSYEDcXN9XhSGzcPTP2UeRznAXKEHHqCihkzPGtAn",
  "key14": "3padpZpK9B391HEs2zQAq6bd8M4rMFSjsqZSUn4svv7rY5RoLGtnq9inpicctdzx3AE2ajuWRN9SA7cfwtySm2G3",
  "key15": "4SzQ8vNjVHdrTEnyxmYTUkSMFiUuo8kXgegkGj34wwxHarPFoH1QdDAwSvaVTMumC7Vp1yvxV1dzKz7guoUEQH55",
  "key16": "65Nc1BXK1aAnYwaw45uxpiGy6gCJdMSUvnBfeSznwacYB7M82LAdfGxR4w2KjBJ7QRATnkFHiJr2EFBaGpLi8i1M",
  "key17": "5PaYSLYxLNUqzGsXnjNwAMUALzE1XLaigjzeDSBgmASxqGcjQVqFwCFR8wwnAvyYhmtRV3YihiJZTeeJYMXj7bsg",
  "key18": "4gm5uB6kgn2FStGwzjEqC1m5J9YPGJauVN3ogwUdtP8e2KAAkDQqyJyxdkkUcwJgboLB5cd6KiofMLcf9huc4Kpu",
  "key19": "2jGqVNW7inv69WYEvtq8CpWWoqDoQpubxJ3YHnokQQ15bYacbfA6jeA6WE8LWRWuky6X4LYzK5Z3bPf4zUm6dMWq",
  "key20": "2rnqjVz3f4cHM2X2PCGhegTK8YMGrYXyWrbv94FWF2yNHiei5UxHYZhmhHJbNBNiNihDJtjPGAztNwF8LDkMx41e",
  "key21": "4KPy624fGasDeYB5rXY1QTgNMGBbKDjKZNZZR2KzRTeKV7o5a2hg1ZTaoCgyRD869U2CstGKcAaPRr9Vo2pgcP3b",
  "key22": "3zztkjtrwZ9m3DccPwaCjAxecGBkzsUPyWeQjchwJCCJehHoZ5Yv5Yp5HPFuRvBq1FBWJ4QkdARW8gVjxxWgYQyD",
  "key23": "Pi5FacAiDZZTy8VipMdk5Biej9ieeTdxHdBh2C1hmCYop3cDz4y82Ym5zigEParV7CsN46U1usZTYQuuyY6ds36",
  "key24": "31gUcxYdFdYcshHSEWyxuS3MECPt3kWwG7EtpJ3qAWzZ9AVDQakY2C1Ym7p6kgj9meQLBj7h3BWWUbTGZevKMgtq",
  "key25": "3LzeYyDiANT6ByqhcPb8a7xNbcWHAgkmGt5A5KB6qGQavCZUQ5H7LidiXAzcycBAoZnV9nHZ1dehG62htxe8mvB2",
  "key26": "57GvWRnodvDDPFRoMoLEDxv54aYs96cKtqoNjZPCJQXtJ1c5QoUfbwfAxWAdZgeNK7UgfEfdWJDdfWdVJ8g458ig",
  "key27": "Qks9msKLPAsPhesirCG63EFcD19L7yCjfyz27bbQ3koBh6hzZahoPmi6CSr7orD4J4XecrvYnKgKZB3fYLfv3xE",
  "key28": "dH96MDugqskv4bJrQgdnCic49neQMq9oqbfbfvaGGW9ieLYhmsvkqBvH4MYBxRuoYKegA47y1PjkXm5EMogWCy7",
  "key29": "5hHmz4E9RAC74m9seHBiADi2osNfe54TQvZKauyCBUkoJK9kbUoApmLZNr17Vp1HGr7nuDqLtfCeuobpQbqfhrVi",
  "key30": "CDsTQ7RKE5DY21UDKsdpcyNUnQ7jhHJTfvaC5bAp3yh2cYuoc1K3oB7xFbP9dK2DHzc9D7wRniS9s7gLkMHYvfU",
  "key31": "3Xozrqryk6EFgUGkCnAMSxtvzFDgv9VPCpzDet9gaCVrZdLBdWcd9pLfrNfUDLv592R2KA9Yp6KDwJnE4racGPo7",
  "key32": "22BDqc1dHm4AL1fTge9nasMZyKYMXdkhJ5hxWV4xciTv2U4hom8SRDMBK4UCDdfbxkAwpRBrmN2gZbnBfmK5qp1j",
  "key33": "4tshqvEkJQTe2RGzv6yonC21RjfFk696dv54eLtWTuGHk2ofPWg7k7i9qQhEn4BZiGJ1LRcSoLypjg6pAn3cx73n",
  "key34": "1ynmSyMCtLnnLFjUS47yzqoZ1EjtK868FKbWmkRLuudceFG1PucK6MMajUP8X8nbTT9sh9w77SSHt4JHyymtQcH",
  "key35": "399BaiYnvg44fEaJ6sGK6PsMeafkKBLyFZvxSNYu9bgmxAfjLLatSAAZsKLVHfqF48e1YPTUndFN4fNPRrY6jypv",
  "key36": "2zFverE3aMNXpd4X73EFFCY3bVUXtLYL4SEhiEXS7pyACv5jqMKrBubcv7HNhUGgPe2qjy9pmSyki6LVcc7Cnp4K",
  "key37": "AXNn8MeZeKUwQxENgF9N6vZ2VWUGjsyD2Xyr3Lhgk19pMwDYRVu2u8MkH8MT64WH8wSKY7y9urpcMzboaK1hR5c",
  "key38": "sXxMrnUhc9bk7FoiZbRVscGvHNd9qHfmEWJjunKghZ3V8Bbkg56W1e5h79qDKaxw9CqjXhPa5VZVpnH6ASU73Pv",
  "key39": "3Y8Z4KSmMrRxphbniWf88zAr7AhZbwhU1zWyyvHNy7Ajn27UzsGT841jFW1T5Ur8A9KxLvB2q5u6kGJ9n4My1ZWo",
  "key40": "3Sg9D1ujBrqHsEXqo9jqNTSNtYhhCDjRANK9FzoQbmvw5LbENxG87Q9bpb6ShDZxVfrBuwf627hJLNcSWrykwTEt",
  "key41": "586EP7ZyfGFyK8UFKibtqjtbMTCmRYLJTAvPRsN1cNN694oDUnQKDeRAg2iU3k4qJUnwgTfJ7CDsD5ingbN7xtoC",
  "key42": "a3Pb8cckb5RwNSTAZ5xjbGfLGCcPzpkQn32hit6tTkFkk4qV2QwQgdB3fHvevW6Ymk1yGhhuM9UyW7sc6Vfyzks",
  "key43": "PJ94oVNhG4SQi7BYyF6pW8RKxi9nVET2N4bcMK3a9hLGMDsZu22K42xMpjH1sefKEWVsofpDKT12Z1hST4BGryd",
  "key44": "3PaGA7mrGPTKijoWYbgzrxhuiYMEmUkiFRdVekSHH3LnhJfDYvVXo9YTaSBF4ENtW1Rtx6v3i5fSNUNWeSsszhqD"
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
