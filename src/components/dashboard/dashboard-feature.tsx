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
    "2vUMfrgcTy3Uo3UmS2w7JcxnA4aw9sUzeK2fL2RSdnDWfH3CgGYfL4pBjkj9zpY18TPhNnp2ndA7xxwt5jzVMeC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Hqdb8puTVgXvsXYXzDDtLQM9UDdCReoqAL6fDBGjZjAu4nwesnMdHBVwfsaB9c2rk5RFNfLT998CLQcbMMFvtc",
  "key1": "2ZeGcsFL6JetsseVrjFgbU5M6rRNFjBEPcdQ6dqUWK6E3UodJyQW5QVxBuyutPjBTPw74iP6RpM49XRs7bTyB2M2",
  "key2": "4UnrkW5hmRziMhBSsWHHk47n8j3ywLKTxBESRxNHZiPF2uyU2tGVsC4jeF4KwLJGV7YXfC4Grf3QWgDBwre2fLMN",
  "key3": "2Hps1Lp4XDbSNyyG4YSiVEorgkSC6NrwYtUkQySfcEYdBTQNSbmEVicd83wuegDtUTkfJdQCJNxxARNX54UEqt6G",
  "key4": "57Fwh2LL69gHN8xZsDCdQgx4J7WbJn158RFKRHWCHFgCZVU5zZiXMM9EQxkH4o6uBdDuVX1fyGSwHMqao8adbQfY",
  "key5": "65zVYSpVwzgHsGthzwZPi1bGguoVr6pmWN1wbjNxwqYqi5RkfKjJUG9resXyMJtor8cH7ppGdMp6WuAnw8SNn8c3",
  "key6": "4ph2v81QZUg2eLCBnkG8ciGcLVtYgPbT6miKqTCjAKtdBGicBCYa2ZVFYQaqax26rfXBgHn3spw28TJermKgZfFS",
  "key7": "2xsZwgJ7c5ZL7UAh4rpWxhNUoc64xSYX3t1BDznNp2RjHXx68Vmy741B8DFEn3MaGXLtfCusKWqiLezyM5KgnKSm",
  "key8": "4y64C32BhuDS8XrV3Gnhk1kH5j3RBrFm7wJAcEaTWrrkk3MWJD4cAzXqRYRfjN7KbpVfS1SMr6qABAowTrU6M7kS",
  "key9": "4k5R1HpNfox4m9aEvgJASKg9Msb8Z19gbQyuqAxowu8novi4fUg4tZ99gE2yanXtvjYwQeW9qbniyMU2yNhUQuh7",
  "key10": "34ELwkpvUxihGrckj2iJbyqEDK2pBEzo6M2a1LTfngQushBaVuoAz1JFeYAWDgpEYfdM72yzwh1GfdSuJydpdcNs",
  "key11": "5GBshvaFVeNvi7yQQTeiVjTurUeox2u6Eg7f8kJT273qsqEA2ypvSAgPrc6KcsSSDAxgnpkbWFJB7xpJWStQLrAz",
  "key12": "62Zh1mqAXn36NPPmjTMfzwtVvPN21QZr9sjSLZajwPGYXNZDB5qErz4YvAoRMxBvGBYS9hVTyx2xcXe5WEqyewYx",
  "key13": "5RRHYusG1stZGqWayFFrH4pcx1yHQpZCoVc7VeHAQhibfTjyVpT3uAVLafuEGEp9WBYZuMk5d1qRXvSYo3rP2V8V",
  "key14": "5FTZfLFxxQ8jxAZTh2pznMKL5XDBQkG3sbQaLJFzC4Fo4ozGdPFQ9BMS6uCE5AJp4QqXtprwajkjVCDpFqqKH8wy",
  "key15": "4EZoVq5PMsC3u6gwshcCnjX2KE5WVjHdxShrgfzXe7RBRWWV3KEHtuqHU2M1tDT22FmDdK7LiYbcdaWBTL57jj15",
  "key16": "4mEH7NtUtJnYwgsSLD6itbkpS9EhkBb6yejyqKQ7NHg55NYWWFRJDSpnQv44m4MPL9C685emzxRJJJPJcnjiq8kG",
  "key17": "2qEvjdobnhYz693Y3LSHYvCVfGH4rTe2dLiqyYrAogbjYf28LJN5ftoCFfu3p3nuuqB14JaTnSeWNPJqXNwk1p8s",
  "key18": "2kMgcK33kJXcnxYSfkTiSxLEchHSVby1W1y93z3K2avprcCuTnAv2UGpm2Mxm3PBbTHjNUPZixpwhJa83AZMaXVv",
  "key19": "n3Ux5GLgTufotyTi1kkTauPsraiTgWEeXQntuf7HRpEvF7wyGupaezeGij5jkd6PidLLZvmv8wpvswdSeA1MgUa",
  "key20": "gH4CfacSqH3SxCD4Cp9uEuGui9wNkYHmCcVC1QgvCyZb94TY7PyGutYfHnzSUm9FyNvHak9AP5q6xVUy9tiSg61",
  "key21": "UUZzgUinQbJiHM495siiYzLSM1pjmqBGoF3D13ykgG3uu4hpdLEg8Zgdtu1MNkwGyP1aEUPgraXnYgcWPxW1eJF",
  "key22": "5z2b8yUj8ax1ULBxwHo5CfZbbxJF7CPMRDd7z7X3b3HYWUDeZCdPH8uJrBfUkALN3yJqCRnu44cuwQ37F5iWcPXM",
  "key23": "2m7KyRxLoDrZXFRaeaAjR4h8rx3jHWkw3Wv3wWWhEiWbfEvwkPsoCeqhRww6DgGghn1TTifNRpBs4dTEgBcxdvCR",
  "key24": "5WHBdGg3izxc5B9k37hBWHHfmumvKAP63kRTjL9QNLMVjWZF6qAuFihh5PNmrPkHjJTJgRTYLzCYdE57cJSK4uC2",
  "key25": "3jdjhNBJuvhRKab5fqgQj7HSRJXdR3Mh1beJNyW6UvCfeTy95atu6VwZdYWCnR39KMuXJQqgzk5DgtqzYJLp7fJH",
  "key26": "3WeaAK7rWVDECbzs1B2PaFshyhyipubHAjR9mUmECdkeyuCUq8CaMQUjwC1nfTxhRFaAsaJH3DEofCuvp9Tu4yNe",
  "key27": "2erFBvQmGgb9c7TtDH4RwzSKeCTJH3miVYhkbW6JiTWZYJ8MM4UfrSPLi6fQqzBwh9nWiJeMKUUhzHtLY56NeB8J",
  "key28": "5Fq6JCb6KwhP5GCetP2ZCz8FLj8DfGp8kv2FoWhwPwKPZ4dBoGuYBtHjv1JoxPytjdAYdS9Sw7zwuMWR3jegNYy5",
  "key29": "4Y2DpdyNsjZtFwpuXQz9ShnXJ9xPjA8RgXnmcYEALNkUp9N8cqwq918LXgQrPjCVexC3utwAejBg6dwFzQj8eBC9",
  "key30": "4wTqYKJfmeSvs9ZMjrnoKSLDsDyQUDRpw2uZVTqWYL3n9WBMUAV3SZ3s7RMt3NnjgvSt2wsBtEHbUHqmXsTGPCC3",
  "key31": "5ynfNFmzjNzRDEf89iMPi9WmWsVhi4UYzP9EYwCbkvkyQpJqMhQtcPMyd8iYLZDUTeZTG8mxcYfXurFoWif6ct45",
  "key32": "2ocSe6SZMs4Eh3ANtpfumyLb4Hea2hp4VbuRtfrpzAcAvD77rTBmokq6QWXw2w8MZNFgv9z8q9QVLMWJDoGzXp6v",
  "key33": "53W2EMvmyocegPMzhnJwG93MxkNaVpGJRnUVidg1eZBz7KLfdhMzrqsZokRBFYm1asP6DJQx48zY54LCTtAg3d8m",
  "key34": "cdFPAraTX6Fzk73jPHkAd3KV2KbqKzF7PBa7gXoHkP8xxtbtuskM3KCEJKynQvtxQ7D5E1MPi8brRfyi3DJwTvC",
  "key35": "z9z1vtcHiZ2bw12T5T9YpCwPCEBdNLL68MxvWkexZ9dd8QUFVGi7iayVdXBPWzZG6Gj6obob3Si4QZShZG4c35L",
  "key36": "5w37zF6LAowKsryzS9ePaUTpz917PSjMN1xsV49dHSe2skUbyEERyubLY981JiuiMFb2o4ooGvhTc7uRFMUXAA6P",
  "key37": "5mr4Mq7amC54o5xL4SzApbY1C1m9Ny8dRSWXU7FaJ1oMTjKFecfQvKYFTMbWfrHug16DSSXgn6eearVTxE6tpa5D",
  "key38": "5q4D3rpxaG9CPKENZntdXGCDbxGuTUeQwzakd6wpfSgtpG7Xidnt74aAecSP8jUMwofwKxM1HGwRFJqvwAefnPZ5",
  "key39": "4gMwvCKBSBpeGHhrGxxpLcfXkHMeSiNd3iUX4YroL7vo4nWXKZngFCVJJdszRS5crmDjSd6arzUg8qVJ3TSJxYKy",
  "key40": "44sKPVabhNQcJ8Tn2LPUxVLLqw52SN85u5EqyU17B4FqcRE9SMeYPmqGdBn8NN1DswPLjRMEw61R5T6xJJHBQAhm",
  "key41": "2tVXZHSZjLNtTfFnN6CvaFqHaQsRwZQKEudX1m5dt1kSXKn3hdfmiPft9T8ZXmamB1cUxszBBwZC6Nv8pZApESoa",
  "key42": "3yoxhmSqdwsjo7MLQ8RUxBY5gn4oFouNzezfftrgLLDqSwwMdJC8exGC75Nh6jh9rqUTdQRKpqwvvdWYLAdKtiUN",
  "key43": "3fpSavQdLbv2Sy95NuaXkHM4UUhrBJgvadneZPJejBCbWW4TCZ14Fts52zcHet8YmgDDsKnSx6xcEh3JTb1sXxRL",
  "key44": "4UKijaAPrMus4RgStBBQc6v4psHQq8E8juxP6Sxc2VgJBTcKxuKubn6VoXWh5mbDPjr8EDjV21hiTZvSbzTcG9d5"
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
