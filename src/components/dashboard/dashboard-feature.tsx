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
    "472x4rbQK9unH859yeoyaxgLfzsZbTWG2ZCG2Jd3XiK8E1g6KREpPjVKfDmo4YuQkQwToKL3aBs6Ab8QVZtPqwXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1xocUsMTHbD3bFDpKB88ZYW8ggbmaimHSubh4EE6bd44GpkGd9eVz8a6et7fasv2bixUdyo25n78RGB6e9xt3b",
  "key1": "2SCWggFj3nYYTcPcbFqD7wLxKTQDXKwvC5sQZko9WVVnqwXBSudrSRqa2Vmcvx14oW6vh6fRcwcqKSnF2VCNbeBo",
  "key2": "2cBKyvamcky2RuB264TSgSfq5CdZR29mtVrFyZ21vvpiBwEpvZCBmkDxh9e4hpCK1huqPSzNiR34EzR2yAxQXJvy",
  "key3": "4QHpWNRJ2ztvk4iDLAvs1U4JaBzNPdukc1UavQrxcZ1pMot4vMDBVPDUhq91a33VJNZ5pE3cSSvDmGi8UdWi5DqM",
  "key4": "2RHE6ciDr85ZXN2VTvdfZJioi93EbCAqc9uNZwbTJLxjB2pHjkst5SLQTwZ1n16beK9cyAHhQCkBpHCxP7ZWPjbR",
  "key5": "2TFbzWEdcD4cwDsbYbKC6o7vTHmT33P5ENzscQu1oTMj91qWjS3gAg64AnQGwuDsJU5mLC6j1Jnxzf21BCHT8dGF",
  "key6": "495mKJJ9soY5cE9P5hmByVyijJsAKmp2sNhReHWn6Xft6yX1xDvHrWYVioPB1fiBG2fQqtjeR6hbdZmh8Zp7svb8",
  "key7": "4rQTwBv4GXMxMT1KoyMZi7S92JaoEC1k9kvqpeghZwVqVCTnSwqXym359cJrYvkZ9JBq3LQC9yENWM4tHYY8DqS7",
  "key8": "2ZefZ9eRN1MWuxhth2xmLpkAJJsQFwWJXgpyDLfP9U3PSNjVNB5TCbvGQBoqRPU45RpGsDAJt4kYtWD8faZrNSXv",
  "key9": "5uSiYc4Z58UzKuiLH2634qHYakJbqhsBeeRvzHSc2zxASxUpGWk3Ba9jsiYb3B3h21QbEr8da17GXzC6c2CCd8kW",
  "key10": "5m14Y3SVr3sSQHTzquXUN2DsjwzsbaeKsgoTwN3rwkjzZKbzi7hUbc7X1QH4gksJE3i4sVUDCFCNJN95b1oB5SaJ",
  "key11": "59rshxL9dRaTnZ5CbTtJ61cKMuadRWss3428seHXq36oJLscoeSM6avGUDRkDQUmCZDGvSscQMMAcn91Y9ghGeVR",
  "key12": "4Pc8KpyFHmHiyiitHtEKRxZF3JKA9WitnAdVF5AULrCJ4A5Ctnh1uahm8fBEuMCU7mT91dt4iHHCanipiSon5zrb",
  "key13": "2MM6thjNgiMGpYDXTyqhBWxxgEi1JAbPY1ujtu1cxchgrntCDYhotxmSHoSZTJtwihHGHfid4MP1QUHWsfKu8vvu",
  "key14": "5pAJxBAB6oRvTsRVXdFQfYiZQvhK1qmcuzqK13P5HLMQCqbYrN4pEWQShHYBFgVn4fUCZgDQTDSX1UPZmyiij7b7",
  "key15": "356io3cUzuJMHPUu3oyZx3uCsHxniPFCsbvFDzbfdsiek7n3YvciqYqQi7ru4muEbUVYV3GP2hDARb6LiZbvMHQX",
  "key16": "2yN5sRoec4P3JjP8d8ma6BHTjwvQjSQg6P5H88bCNoDVSNGRnCVMdJ41XoXtYpBypiAYUz3ENJZnJByctFNesxUy",
  "key17": "39f38u2AE8F5pz3eZc4aiYeaoHkR7KQ5aoJpZ8MzhHBXFKdZdXd6YCydwtKUoepC3woUduYtnF9CbgwsT6voc2Uo",
  "key18": "4xq8ykQ3Y8XP8QCnWH5gV9xAgxmVLH3utEWqp9tsNh4n6JgxoJXjmRJciDBxqRV1ZpMWzarQ69pH8Wc99E1wqQES",
  "key19": "2G1Vu4pvRRNDjcQmBwpYCWzensYEQLNfghrdc9KZAxRq6e5zgYyq4DKPMsv1KtGb3ZT4799CLtYdrLaJ5bRftKae",
  "key20": "4xVGw882r6tNXrWzwsG46WE4Pb9zkbxsJtYcxCGCRzvo38A2tHZ2XxsaNMNMG1kEnexN48DJ6qoEgVVKu9yDztaX",
  "key21": "kQ6jd3SYXYc5XawRa8Qar7A9wFUXivNpVesGZuwbW4hxmM7zU2sK4yittcS75bU6zgvHjismNnehAAy5vUnoLHD",
  "key22": "29Tj7oaBVhKvUg4qP8h1WhhKfo8EGpwn1d9JWgqYtzgHpCeasfAnMuUbzXu1q9KkvfJdEzKuEFWhYoVgzrg7CAta",
  "key23": "4qmAEqd8RivJigPygdTbKEC9FYT7yvoUkaJo9VnVcFmXcYjP1LiWC2h7KzSQLcyQWdQe6q6EQE6TKc1LzTACskCD",
  "key24": "5D6NuWQBzxHzEeWTtnJoHQcCvvBQUGRFNoeRCBS61cdmnZKE8S9BPAVYMzrDQpQCT5vwKjPF93yZQBTWwxYR7TiA",
  "key25": "2bSoLEzyCfmJb5kVhGy5bpEuVZKMikVx1nKFqyeCvp9bCUYp3qNJTHVZ1oi6m6SL8bTeJNevxViwiincwCDVDuyN",
  "key26": "MbNyewykczzH6TFKYsGqXQYseEJMrpQ77WY6PfRu4VPfZJuzXV5NpraS3v4KDQKBwHQaR2xYQL7ugubvjPukjZU",
  "key27": "5Du4hQPLJBoB9sSLZsHQDwfnryS1s5iM4xPcG3i9ujgM9QoZQtdsKqYKn9HtbBfnSmU2GKWxDQnXEWw8oqEtdnrb",
  "key28": "3YJgxqk2Cpcgfq6YmUMXTJZ2XLdPZ2eR6FJds8TYbGQHfQgJ6KgpedHRaQTSp4zs2FeqXqs9gqnT4r9a4mdcY46b",
  "key29": "5z1A43tJUwfqXE4GkZFdAwXE6N36J4bRQ38R6uEzyUXjt94u881ubKn65XcVearH37vTdCfthkfXKhFrW2HUmpmL",
  "key30": "2DTxPyYEAenYh3HaZG3ThaBF9rdupsaAYB8AMMHzhTJnJTXQaxjtKHGqEiKEC9zvC61Tp3PRqxqnaCCjPHz3vNT9",
  "key31": "SRtisA7FLYfF145JZhCE62fNdV7zC9wqtAVh68qs7T1DWHwCLkznQ24uzVinzhUq2oPsjynqWCgQwa5kXPJYmuk",
  "key32": "3vNiNtFQe1ZCsZVqn7qPC4UNbqXvmGYfKr4MZa3RK6JzEW4Jp6cnhkRS8ZxRNHJUD4QaTYSpmXE1UANkPWubexv",
  "key33": "31FPxrYD44TsziSsYuHGVwEGLpdN12zpXnaN6bdyeUDGe6ar4vGmn5bEHSGqG72PkfduCRURUDnurd8z3WzPvkCM",
  "key34": "3F6Djsss3K6g5SDimUo5whzP19Q24iMngUYscJ8kosZQECUu1RLNsYMXjEWnc3GsHci7kvEzWK3RVaARXv5HiZXx",
  "key35": "vYECd9ZKYgs7MnVHZLutYz54EZLLQKcpu5HFmALsmjARqhZgpMwufcRZCkt7gSL7TrNQzksmrqQQ9osg28B4fbr",
  "key36": "3fFXzkj4WpdJHi3vprvTC363VXhMKS4j8eD31RjZMENxJvWKSs4eHeq9QtYebsVgu6uixS2pXJ29A5Skpx589B8p",
  "key37": "2jQF7PYd1FmvTgTaZ4NX9SwrP8ovZjVwYECciyRuBG7djnPcURVdNyxcquZJWjne3e9TrcsvSe5VfuqYNhYKewAT",
  "key38": "4NCj7QuXWs7pPFkkVe7vG8mR2tQGfHkUCqeuyocbTMVP6E7qNsXH4sykGQXCkHQwQ3KBPUkeEr7ixPqcnPSYDTrn",
  "key39": "5zT8goZbjDUuVohfjZ4q6NRoettSF77Vq6XjzunvaZUFahHvGMsBjntddhy1XPi2xPcNBGegEshgxRredbeGj5fq",
  "key40": "vMQZaA2EJEZapHhQeN82f4SWVPHUo3kXjryCXbQ7RfSco5JyBoqhGH2te7TbHffXnxTSE5f2rS62Atwyydj1ZGv",
  "key41": "hVLFmtTCjZaFPKcdmCmLxCcLaqo6ooN64jKA8J8nguZxKz1KMF1vyNxkToPSnTcm2LrM82ypUSKF7VYfWCnRTvE",
  "key42": "2V8Ej8tQcjn4PC5jraoAsUJEVH7dEdMkGYTSN6rU3ysxJqxADFxGWhFh2Cdy5ZznosdAr8circvS21U1enwiBZF4",
  "key43": "36FJ8ThcFyxtm8qAGpPPf3Ljpq1HcGp1kpRJXVXDCBv6DkQ3xDkYN1oDHE2aCKzr3yPDsKH1FZbnaxtVGjb7Qk7G",
  "key44": "5AHbMooxXTPaYveysPEfxaksn9FZH7qaHXrXsHab3gWHHgNKddhpFc6n5YTwBoeZFswvUG5iq7tjDzi3FkC4sRom",
  "key45": "2wEyqfPSTYcNGz2dqUb4i9Wn7a8BJgqmuFMHGc2QX4FdZxkz6VtuEdME5jJE1VeWQaASFuCetLDpwViqMDkXkYXK",
  "key46": "3Pnynw1TYRL61CyLPEUYSv85d5Kj2eBDiG39aWr7RqV6rfcnLe96tFY1ATdToHKnT9p6WYjoNhy8zAKrD13Aoxp",
  "key47": "51DzxZUu3JkmXYwf6UFD1FBSMfP1ZrqckL1wjXTeFvWzJ3Z3mk1Mms9ebaTKXCyTxoGVQYXMy1Q4xi3GorKPruFJ",
  "key48": "58iY2P4FnYJY9r2kjQr4nAFdkXNsKZjMYq4yizLfFMxdmZ64utc8jLZZVNC9WeXnT5fAPd4Es2gUjdGksZk59YCz",
  "key49": "2bvdbfTtLu3hAFBv8UgpxXP9poGgvZkD1gxD6vUMTY1D8V9qPf1XiWZ4bJafygNgvZLzDcf1jLY5geqtvZmP9XGf"
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
