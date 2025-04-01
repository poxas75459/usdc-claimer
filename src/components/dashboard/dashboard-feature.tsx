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
    "3xS2a5EqMd4A8U9X91D9JkBgG6NCa35JUW3gZkHJTtk2KCszgDSVEAWXPSLhLSS9Ux7Dugc6Db7QRfaLqjzRP5zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64c9iHCByz4ngPRZeK1nChCGcTQRfd9CcmLte4zZJ3YD6icSGMWKEAzBFA2JRa92YTDzNV1FKkFpK4WsM7dE2BKM",
  "key1": "4ncEcNo5NkrZgJph528TALCQScsTuHeejvgxSpCqK96eR5Z1CqY9WFepWL5nu4M5Q5Ht4o1cGwDvfdhxifwqq2pB",
  "key2": "2FShqzJFHPewX2otknmCzE9BYkPsQ2Pgcdkt8h8P3144NbATHa2g3pFY2zWi9kNMesM2K9CqfMme3eRdvmkYmwrB",
  "key3": "4zNRuSH3gD7u6ZAbGFDUwE1iopDMwN3MMp6J6b7raBN8HaQLYi2ZfjGvFshx3jxVK9V3U39S52d2fJMb1KjveXUU",
  "key4": "5qmSoQipbgMX5ZQ8QBKMHFWBhHeuxEPrnLwfV6pYEv2ATDx7vvpyQmmue83VavLx76o6it7Mo78UVEgzwfR4dTH4",
  "key5": "5L4XDfMz1R8kNXxGYFvp6pzPcWsDowDhM5oNJw9wkir1wMHo8L37DdtLHhbNABYQdD1zGwxY8iFJaAGS9y5n6xRK",
  "key6": "4WsZjjvTKqySjcXns7HWjw4wMyTQZvhKXFb2CpZa2ijY4Gbnv6jSa7Dch3cnv4QvcfpvpNawV5uTBD3v99r1Se2e",
  "key7": "2wMYFGGeeRZm51qPfRRSyWbdDWcBeSdBuJnWBxw1rCJN4auKvmPRSuxFHxeMWZ5Qs3ZYAvnMKVbi6Xh9pBmreuEU",
  "key8": "4PXc7tJSEuwU3BD77CY2LLrUJzhnxtgRmHsXsbz66HejCkyh5ka5JHJjjZHXQxuZUj13zCifsUt8tuMkYujiPoeA",
  "key9": "5siMt4w6d2rdRX9PUwNVob8HV3gt6ZtUMAbJbf3mLPx9nuvdgYxUmKEW8WMi2u2GHxZ9V1YjUeunAjfVoK8KFdzJ",
  "key10": "33EgLBkGxYqcmLJaFrLmjmvYCvmz5BBr5txnK3eMjH9z3iiJJhfWKeHFogSeJu3fvyBXNkdjhZmscLu2vtxeNgBe",
  "key11": "3UBod44y2i1fBoe1AP9WuoorWgyJkuRPBEZmcCXpQ8rTzRVvNwrFQZKjAv8tRzMAFmKcAHFEtVcaeVVKSkywjuea",
  "key12": "5pX1LiGMbHHJ3G29h2J9bjav2PHtnVDDhsmA7BHHY2KqZLBdNgohbXi9g5Y1HBy3P7XAAxZ17xv223mewB9kbEUj",
  "key13": "2dwsdRF4T7hKQUGukuxkzXcsCLDphjZAUpgVo77TzArj9BUBeBViV4ENXSMJsn7qGxU4k1ZDHy1V5VLTFd5qKiAs",
  "key14": "2Ch5LwHwmebhioXd5AjYwWzHfPDoVtNM43nfXWAp6jtJdvQdSgFktD2CsHoTuYLJRazt33ro6yLByVM5LM4jLmkz",
  "key15": "5EVGmnCYvhXqgh2fWAEwyiurphHMSYhRs1zfZN762TpCqJXt5S1tMw3QQtqqsop8hxZLZuoW2HYJw4EDRbCghpzn",
  "key16": "5kkauzvNQfCwEJ2TNwm133qzSPwbsDC9jNyUPigbSn5JiJjW8CFdQ31XCZ9GGa6FDpiaFJo5cueL2JG4VNjHvtJ7",
  "key17": "GLLh8XySTT7ANnGwuKCWechRRABMdj5tj1rwAzUJKshkYg4beYMyCe1AFFYQ9Cf97AtKP49t1txeZnJYhkvA7Ce",
  "key18": "4hD3h3m5bQNTPcXm3Z8GGPWdQCckhvqFzbEDYosPaqEFsSiGpxX5V851RVt6pBZLAgVWmmn8UZ4n5UVqHdfSqkMW",
  "key19": "F1MQCyBGQKUGC2EXrBt6j3A9WV2cF4LqSBXiWPp14wWhQNJhWw2wgXsQeEikpr8RJra2gbsAbQLgLmPLbJE8ci4",
  "key20": "2cDHk4k4RATyuasM1wAPzHkQ6th9CqjyFuHAtHqHwM4k4ohudwa6jex4jzafAwuovFwRaxvzW7TGhoRe59emfrk4",
  "key21": "3J7KxQCR4CUnoN6VNJACBScRGu7xJjVyuZFLLbkR65tjdsh1hofZmRCBL9x71DGcwiGQBVkyNebNe9kZWuV66z3J",
  "key22": "3oxnZsFHHSzgNVHEqMzM7sMQm2YpgFGZFZPxrvUSEiJ3Enrm1gjGr4uWdiX2CRQwRPSKvV3KeaZTJMhD3YDtR2pY",
  "key23": "2R5wUKShQhCnvcMvBBhiSeUug8xEu4SYf5vqJxGc5LyhwT5AjVEcfARwvzEjb499mo2f1Jmy8KXDHx4wWVh7m5AH",
  "key24": "MEvnofFUZsfXp3xgEkdVcL13S33USngQ1o4AbYqUfc6Uwg83Mw2NNif25vuF19fTW3aBd7HnWMRqzThA6SfDbDb",
  "key25": "2hX3EPVxdmjgG79YhS4KcefQ3yJKpNCcP4m6ukumjKLawpJaP6DK7q5wthYMiaXLmE815TaYz6b4vbQB8RKeBfSt",
  "key26": "382AhTXKFE4aGqpxFtoKgPxQqNH8vD1zpa3gjQr4KTyaFFZ86hY2jzeA26jGCpMdkmZc5ZgpXfziLcW66jYPDhKM",
  "key27": "23fk4nz6VfmGZD1TsWV5QV6aNgQ4tALKTMrxvS1bJhYjVCDNcQZBPBQ4jvd4VimsA8NW2cgJS3FR6ihLzDCFPjtG",
  "key28": "4ENVRjyi2ncWm4C6uB7BNvsnKH6HgPCBgH44evxh31piJQy3nip7Dh9raA3cpAWj6S6G2b9FXUM5Nizzmn3cS7qE",
  "key29": "MgftADZVMC4rBXAGnA7qXiaWdsVozyZ7nqKo2YsCSonNyW1eB44VqS3F8SnHXLEXvG163UgWYUUofSyV7vFzuir",
  "key30": "61xiMsfAwBJctTu6vzpuQCSAoeR8vyDNTWUZ7e59s1uYUP6n6BDhmoxDj5pYXxpu4bQ6WapfirKJXmAq1WaxWB1W",
  "key31": "4tUa2arqFb3Y5gQqMdJxjZ9nT9wHv1pZmJz4m71sTrcXdwCQCJ2QoZWahMVT2w3NRrDm1y2Bby4SkKZCLfUz4uki",
  "key32": "7bG1cBm78Pe2yz2ZA8xMnAdgfdtvCTcsobwUTg35P2EeD6SswYKXTSPcEacUcPG8DynEF3Zd2hVs1bKL3ZUvCZW",
  "key33": "5z5UcNDFpcYkQQD5xBQcmLKiNeoEcALZ7D6upQwLwgorb18Jx7YJ2u5R3oW5Yvqzh9A3rzbw4VLqmRUGbVaTkQmk",
  "key34": "3ANz4j8xKPS7XBcE8ZWbQoKRpEddC2rMxkGSeDzPMsEeHFXrLKvRwJjDAYCagYqUiCCChshTc2u7QFXVLgn1JmGt",
  "key35": "frBCfWzSbLFPogncfsKDXxTNnZZcfAJ5yA9BRefMCUXf6Q5qK28wjK6LcKQdgLZ5ijNrchkQy1vi1VTTAZBCpPD",
  "key36": "4m5b4oiy7xG3pMvWXUXscYUPhWXkjNBeT2RZAw91FW2rN9SJ2tt8jr2EsPQyhYk2ad8TBqKEvcyfB1tUbM5QKEXz",
  "key37": "4aNqbNNk6zR5Pro4YP5VUre6wEeWy1TvuEtUPMmR1mGymdTqvZPJgPVrPSe6Shadmiid5qLRmqGmDwsJcVfRD8TY"
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
