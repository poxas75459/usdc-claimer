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
    "5MonzNcFY61ZEUBbd6cK3jZjjaaYbXcqxnqUSVeysTikSueNr59SsEiWUDdGQgeney8qhuebb23GrYBo78eb4egV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1WaQa5YaquQdeCgDCSC3LDotBHdXVm76wQ6Yf58Va6AjtntviUTsWdAVXWx7ZNCHHLdXPfK6ggCZ42DQ65CNQX",
  "key1": "2xTv9jKLAb3vSfDQuZtso6yAEWsYMXH8hKcz4CbjnjoXuB8nX4DP4xXFcKfs9qWanHvRtBCGABzfKnEmkYWDjL7Y",
  "key2": "5jsEAzbHkzarsrCDscaCnNE5SsiqvZPHfDzpFhCLxbLhwQgkH8Ahy6s36ynUwfGhjiSqZdP9atxZQUmovtHxQxUG",
  "key3": "3ELrCkmmvjJeHdM4XjF3Jgxt8Jqm74cnKX7SByCx9TkdpXctpqMpBM1PXhEnbsp5TKFR9fuUwJGm7VeGgqMQgPEf",
  "key4": "cjypo5B45CznBL2Ftms7dH636YpEekSQ42u96f6zcftK9qP4E5LxVcZEMUGNojtg8vhkT5QFvhYMWDUHzrFuzU1",
  "key5": "2LT1gJCmJ8Lj5WLcP9UPD1DK38knnpmkww2piJ3xK2njf3Xbyj7r1axqJtLRhtkR7RgkB3mQrZgcYDAn1iUrVvau",
  "key6": "4vPEL6wW3k19p3v4uaPX3L8BvXxyHjk9sUeKbDma1KAy38oTos2igrQ57JTktwyC55gdxuX8MBrnHXsnKXP149ux",
  "key7": "3JBFrMZzApCc7Lok1aZyCEbEGZnncfP6XardXi51M8iCpWHDiNTDQXFwt39sCKkYxfQbJcByNM2hxu1jRzqFAvcy",
  "key8": "3DcCq4dc3354QqfucwdqDtZ4TYq22ZvjJPArPziTgoUaBNih8gmPGSqFarjfUc4KZ4GikrdjwzK7QeDZuJzCEEB1",
  "key9": "5dT1C9B7N4uHQpsbUzZ1cYY5UVcdpV96u7uL9MLKKDakCYf3NxTHoUXhoGhHouVTib5knwtK7hQjpfo8q6joA5jX",
  "key10": "cshnLQa2sKJx7YSQ1stziU1Xd2GLAr7ArM13Hi6R33tZLM5vv7BEi6AjM35Y89UmKhtKJjwHo9nkzS2ySfzTdJ3",
  "key11": "47kBrVfrwCfBYqFuVntNVR9Wx7G1mf3EVbXvF3GeSDW4vCM5vv8qnYYRHiHM9868U2quypEw7jUSgS36YBA8tCkM",
  "key12": "2kwwxbyHQmVn5tUML2UfnKuHJRKj9a3QaKxMA9pLUZxAiuAsk8MPPcHyG3EkvRkWb3dtFTm1VYunuRWn6iSGykPi",
  "key13": "5XAcgxgrMg6acb7rnN1zXajFkeyhHmW3Y8osQw2uLmFLqMhYFc8YUb9b9sebN5dXZxxqfke5p4mUzet9kcc7jPBi",
  "key14": "nBa5JXaoNE1uS99dBM4BpHDeXw5rEMJVdxeN1o5vZjNTNpKFRw7cbTXmRkhFGZL8UkfRELErxbAP3zzoySDkBsT",
  "key15": "3apcdvtzrBetWHmbj8xKQV3Sp7Kj8Buyp14mLiieMkmY6yowGfYET4zsPxpjTRCNmWLF9okzsW2wusiKvfVhYddD",
  "key16": "5r9U2sXq4ayxBFMNe9cT9A6hpNLoHgcTLub4iFPDvhHSyqP7ySfRNwDAmqtNUsbx4SuRL2j5G8cp8Ae6pzGtAfMz",
  "key17": "34HNMkbXoGTSVv4uT8fzgtJBZXytKruhmX2BzS6JduFy68RdHsoLTDGzfgmftcMPVuQ5U2s2hGSVmMoE9fz5byg6",
  "key18": "SNaHxQtv1uuXv9gvtFqagptWyDutLNVgY684mVKAN9FBe1Uv4CVkyDNAWYYkBLfHnvyAPUGeLzzpvrTHddF5y6d",
  "key19": "31LpctBWd2NSzxasefeafZRt593BDs5YpmPXkVPHzwwDgyxiBhBSQWgmpmiESUYs8VWHMhWqmJUZT6qv1yWxGyyZ",
  "key20": "3M1VtsrJFK49wEZto7sBaPVQntLCfGs263VXZu46HM4LsxFWJPUGXRD68vqnu4ZCd6Qzy724UXA8wCAr5DrRumAg",
  "key21": "H6ccEDf1XPDai6ZqA8w3CC8wB5sjnqhZBKSf5HPbi8tA7vooqeWxFpTrs2GCuJPbWh7Qm9dL2kJwgBVXk72sT4e",
  "key22": "4oMgeXT2xef97vD6voTzxdQTwFkXEfhGZiUksrasHjr1zbebk7tw7CE7a3uhySsd2pvdLESuJJdrdeUrXAGVdcYC",
  "key23": "2w5wnNUJWPyZwNK8yConafiGvUvc6QMLV2jJvYZypoiVRtY2NhFWo5zUjXEpEY19QCBRwYGM9jqDTP8y9iUm9wCi",
  "key24": "58fJZCnM7CAtVUq9QUi3GnsR6Wyf4HEE8mJE7cQZaHr65N34VJuPsRwQMZTk4ttHoGdhQSfrTuQJH67gr3deHMMK",
  "key25": "NKDbzFuwVdaQFENPXbw5xEvA7w31JZkoJMWtXHfLBqaNdr7zxVFB48BgWCpug7aJoeDD1UhjTnGkf3b7mDoeiCM",
  "key26": "3gdYAnP2mAG6pHJsG4wAxaN1oBS4juqwYFryxeCiKQETDsbWXbBkLBJgwA6gz2LLXKnW5ggo7WJoyphZx6UMvD4U",
  "key27": "3a3VUpkZps8iq713Nfnve84BQf2mfGDr6Y7Ct4TkLjQDjP8BXG5pCF8pASo4o8kwjmkc9T5q9gTuTM4hDcyoEXAv",
  "key28": "4dYH4ewk8uXjtycbmhR93AxhvxNwx5guv5LvYWPzb8skf17gk6VVRHUpq1aM7uAmrSbh8E2o44571SP2v65wkHU7",
  "key29": "3eAAMhCw3QNQqPS7V491JeAKFn2wNEpkhkjPGaUnTJfpzd6mkcb2FpatreNv64cBPrsNb3igwRV8NY6SV5R7XFdW",
  "key30": "44WCvgGhnKMZacf17PXvx57RKYPqzo64Cb2ym7QM3LwXFNj7TtqUmBpQpdRAhEygx91NDd5Se81Gk9Db44cPzHuK",
  "key31": "4cbM2tvjAF4LoU8pjGiSGACGYRkyX94JhDqZgZizFdHmncov8VTLVdYTt11y3U51gkWLYa56MU3HSTpCKkLfhbwS",
  "key32": "m2qgXfUzYqjHHHTpySe4XVMbgEcNBuohbFpyhWRRteU6gQxmxJuUJHZCaKj2Z5T982JZe6Kx2BG8mF3yhTpuD85",
  "key33": "2xAvERQqLeRyzvTwTbmWNmzEREjHbDfz7Kt2e9nsh6euZaPSpGJmZ3fzCTD6bdYFFhLrqNMmxB3e7cgb44rcw7WH",
  "key34": "52Djj9VBLHeRXM5m6BaYndVezGs51Gyt75Zr2Go7sJrfBKVZf5Eh54LzAL5XdTMTPN3HDnNjgAJZRnYqdsNv6peo",
  "key35": "7QFeuLAE2DEqmWv1qBqL5N8sPjrNnsdYofyvtuB8d5FJg7pbNt2EPXHWZQ2SiniPcr8xqjMTVomRZeTvsHug8vh",
  "key36": "4EeKsRotKwwn8MpZf3NQ5Dkmx37xMPXnLHJW3xhctKb6X5AfpRJQFbgMpWDQJ4UV26S51C3KRKT5GDuZaFDgZqvF",
  "key37": "2yftSmoBvMkuMVDUYA2ztJjhVZK7gtBG46qFsiyHeqGzfqSJW7x6cMY9fVobnnzKRXHAmyRavw6gCrTzgqtL9AUf",
  "key38": "QtJL1EjNQTSdxhGjhD8MicznH6xABgoqzz9Pfo7XLZMrMQsKJ8NhUBe7wDz6GmRTAftm1PBnpCN8jNUkUp9xW7w",
  "key39": "4hJ1ydeQZ893F37KXjw17sfjeTHV2FtANepse4RXCSQUNDkw4JfK6bbDvNQp8SdmbkMwoufFzkq63xuGWNs9M3ta"
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
