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
    "3tyYVM6t9KeqTSdXQa3Mhx3J8VHNoTfwbzmv2sn2YrGY2jLXWc7wqTBMo1hv8tNkmaKZuV4PWxKBYJPixDXGJo2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWhoyAnBtdA4GFNe3tTZZ63tuKUGuPYL24LsmFWCxWPrQgKxbGncz4GkFmjkZKt5qfHrbyE9RzVMMMB3toGTin3",
  "key1": "P3DnmK2GyADHXaRmYKTMZThjUZJNKmXSSRUy3B69ovnt1epfd4cSFBAfBjvaVH5KG4BGWtMr8esRQgnvDNuimG8",
  "key2": "5MaaLN8FmJ57okhfHLNT6W3jXGoJLzWi5kLbfvVhX3PjLsz1skT3JN7CKX2G6L4HiGpbmNnpc4s8VNFBqHEZJ2Ka",
  "key3": "3ikRPoT4ofqkV4Cvw6FcprCxxQ1MR4o9khRXQQauAQBw5eAVtd7MtdHCgzkGLueXGysrLi3XbepK8yrr1beTN3f3",
  "key4": "jYXbpk4orKXLjNmzZfpdvZnAZXJq9Ni7dQwHiYNZX2KfVj7diB8SpYP4iHsUaGEvVc6zwcbFFFhxBkCc8pnrgdc",
  "key5": "2t45eBGqhUbTQTZbSkPF7HmiEKbaJLHL8TVkWvd8UTzQuuo7dRqFJD63RX5JVKKnNPVJ17DpXiG3ZjqcPU3T37se",
  "key6": "3mHgEoTXukzrHf5wS7EmEGJdSbaW7xQ63uBRtiAj6gEbiynu34q8JtFirq3PKscZfjPERCFBVNZgdVvBJBezsMk2",
  "key7": "4FxhyBdRDA5Scwzpjb4N9ytF1gbSATtfuPHgm1ctv4aEwfYGm1ugA75Seyu6WjH1QMxeu1tm8WX2vSuH5UoVyieT",
  "key8": "3LbbZwa8aXzuL33MiEJdrpG2MFf1DCtd1KukTT4pv6tLy72GayzTo6iR7crYu7TZpfZKNs38awYReCqixyCJXR5c",
  "key9": "4LXgpNRaKXATDQrX8UPVFJVfyAZ115Rtev8GUVYuKS6sbgtJhroGkoQxWNawhhCrJ2cTtJ4qYK69sXkUWSabonfA",
  "key10": "AgCRjgRmVtLSJHMgxHXVbhTDjTZnumKYDbaERrdEDGXoPQMgABMWSudUGjCPy659ScJMMFpX3mwgZycqoPHYB6V",
  "key11": "533ogaR8EB5VWN8c6oCcXpG4f6fAn1pQcQ4spUgoYfLTokiQ2zLCvBgKJW4DEwzWJPMG8WqZVMVPeyHW3YTggZW",
  "key12": "4Sj7eNfyAhsM1HFWp9dwBhPPDwRyBCY3323rqZC5msNSFeAmJwBgmQ58yJqJdd8CF54BCBQ5gmvVX9fETQajRwUP",
  "key13": "3zmicBxqPTFNqEZ976G6LqHsviyTBbBuBTac77yF3oRaZZh8nCfh3xUDLkDqv1DtbknhJVvLPFnTZb5f8ZhxeSjL",
  "key14": "4FH2vQJ2GAvHQMqunKbeXhNhA8UATen6tR1ToDpVR17iwQmsBSJbRtTkbo2naNw1K8mAcknMgbrCmant7P8G7Q4u",
  "key15": "5psD3WbVciq6dhtN7iTJZmsctUdG712QXJb2JqtPv1GMzwgjGe1Q5a2YpXUpJuhNKcCCkAZPyuvgS4aHEDkRwDGM",
  "key16": "2MRSsRWGJe9ptVhAuCvoj8uZaE7n6oZckYuXSext85aWZEgNFLpog1U8eCwPKHUpmXM82oaJKgbhYowrmn2VKNwo",
  "key17": "5rVoP5G1UH9wD24mHMwRUsHLLjMQzWPFfZYFS3LUPntdv3zKnSuTLNtzwR5aecA9gyUzGpXBnVRg23dXmfddXAif",
  "key18": "2JDPJ4V7f7xh27jZcrZ1o7TYJE4dgijxyzxRXPGNRDf8QKHWut2V58nQWC5J5fCzVUPZCCZQgmAHrJodXcBJ75Cw",
  "key19": "4wGjguy1D2dC3bdjjSY8Sh3xpiSceWNasqgTQbTRfMJPvsDR3vBfFEtsAmXgYoZjvj4KuCGirHmaDvXiXnjtceFP",
  "key20": "5FTSovvpDfxXG68BfkG4yw6UNU16Qigj4z5pRqEBgMR7W7rVAKzMpNEcgx7SAYTDLSuWvRXUC816keyjuMcb3naV",
  "key21": "gjQ5hn1HDSTtdkXJyD58svLrxqBFhCxeVDQpYi8i2UstMSHijKhqu38VP1HwyPQcqHZMutJz2bKPWthv5asTeaM",
  "key22": "5LG5EYxtS5CS7YZ8JbSDRjaQ2LqRzzYP465PGwe5jYQHgQ6htfuT2xuxaARuPkdUYEJQyD9VGywWCwLmVd89Uqtu",
  "key23": "jzGjoxM6oWpjVcZUbQBWTGqw4qr7xUZYQmGBJVZKMhdyC6W2QHdQNniToDfKzT8WuLfcVEjF8mkTvVWF3jaL34j",
  "key24": "2gmCsJCEBK8ric4UrG8AKY9xPFQAMh1MqfQE2En5NLvcDTdBsazuSLM9Br8V2e4D2F7HJqSYDurqpgtxwnPgGfHx",
  "key25": "4v7Ew3594NiRkarXZCXxsQxztMT1ZBz3xtUfebMttLwBfwnE9owcaA25ukZ6c4Ts9Dss8GdS9y7G98VxjifyRTBM",
  "key26": "NGpGWiBAdCfFZXoKPRFF4xk8utb4EKSZob3ZdLGbHyPM7cpnbrDinU51xd5pq2Zvp3i9trHzgUTxuEnJJ2WKYzU",
  "key27": "4Arf3u8N1manH6tUN9MS5DAUqkf2BoYJBhpApHAdKwn9uWFB7qP2NFfNcHV4NhDpVHXgkC6UQxkPjH96YwmQJyJE",
  "key28": "3pVPyZH481VcsUxpMq7ZYiqbQ3orEh1idi5GNmnpghnZCu3CdxraHuF9X24ukGtPTXCtFiy3aFAyRHHtruHn2c6m",
  "key29": "34ctr3E8a8G6QqaihaGHLhSFV7AWVNwaGkZrH9vomWTMRitm8j7chXZZRMw9DyvPRP6S3zJ3YmuchPdCEgbFomwZ",
  "key30": "62pWa9CNQisxDGEFprPome3rvoBzkLFyeVESWHjrG2c7M9iKs4C1wrY3ZvpPXeGaBJCqfabCsemcXHMqwC4JEnUW",
  "key31": "6MLz4nAStEmvjwuQ8Xk7TYLioJ6wrXUhuCfJyLazdkDbLTdZjkpi99auqKLt83CFHyis9FfYArm4tZJRhR3wm4v",
  "key32": "3MhARUTWiSQCot6dgd5rTUs4L4kD5WsuvNfZyBEpjJnmKWaWs222v2wijwRACnRrZNgWvwSDmvLG6UGvUy8tnrwc",
  "key33": "3iyV6DVHHq1MTincb7BRZJd7X8JRAaKNyG1z7UTVGKKPX9rwJxzd9Zmfg5sMeEXNcRqdtNkLqmKBiemHC6xWAKNS",
  "key34": "2Sqz3f2EHJgvSmuEJ97t5zo1L7X3zRjw55SY6yx6mX5zfuaJqCENkYgq5eMdJ37nsJiqZgVx76E8Anefuuyq1eXr",
  "key35": "5uE8e2TsQgGoLe7yC3mx7o6ecxZVtMnYk1ErYypHoDWjVNJf9FYia6iPtvZxBj8bRBqwMJpjpbdYLKZ2TuFtrMTo",
  "key36": "21CpEswuNhRk8YRQsnp4DsKf1fdGu6nQqE3iWfti75sF6vDoow1M6jDCP71sgSRbvnetyBhpoQzbiZ5AV8mpEpTd",
  "key37": "5TBG15pH8vofSAFV5HNhDwju31E1kyAbRYGgbPkVoNobapSDZczenHV21EAq9PDZ9QiNMdDDATj2vnVCWUPM44aK",
  "key38": "4rWFjp1Hyo6gTKt8PopdJfaubz3bV16iuhb2s1P6CJU2EqSF882HFBLEBvTJJNnND79vvVJaRh8qSATSshHYv2Hk",
  "key39": "4ggASzq1HEymTYCDgGD3WwGcSxdyBnPAuBbSj6HQU3uKzJPuvJT4ECNe3EimMitKsBQNP7L9LsoUr6ADuTV9jssC",
  "key40": "51emBoms1t2ac5LtWJYXuu6UnxYpAX6FveKrQAFHc9o3aq63ngaYyaVg6AyBxNQ9vf4pJGeuSrwxZ5zTkY2YE8bZ",
  "key41": "2aGG268HLaiRAAXfqTtkzyx2v7urn67eFZP9BMP1G6BdBzv2Dj63UWLu1pzKkpJFjmaXu2AHprSAtNqVCKW5zzbh",
  "key42": "4ReFX4W9sxhU2RhqmVfQaatN3Mf1P7uwGnZELVqi6NAXdYWdswYjMLrc4ZbW2FtjugmtidJnvwZ3ix45pSUXtfF",
  "key43": "MTRpZr6wD2y6DQEBgAFHWTggPxcH8trAFtW5mVq61ibn4EEyxCkCQho9w1hjg2qq2Jk92NeC6gFqPSN274pcbWf"
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
