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
    "5b5kz3s7r2nMS6HbMSikegDKSWsu9MwnPVxbEWdSU6Xe6apPMR8Ec7QgWvBM4MhuYfYFcS5i94KSo8iRtChWMjBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Lj37hafocDU8M6yyAJhXe6gJCk9ByHbmAzjUTz6XWUrEcZmvXXfN9XbLpgYNbVZmgcCtHpwchhKbzxqHnkara8",
  "key1": "5Zs4qP24LzLbUJvNfakK4fv1xH2uRTZzgWpv9SWmjHykemQ2QKDtKJnRFzkzv2p2QTJyUjMeVci2q5re8T3gXYsd",
  "key2": "4kKQwkJQLA8b5HY8hgfrm1wcXucX534PwrKv14ryamYWZFJ5xg7bH8DYUjWgegAkKquwvzdL2o6bFzbpr3hbrbXM",
  "key3": "p5V8QenPM9CmHKvFEGTB7JmL38penARmqWN7ZRCEKuWs6rhBWwSH8RdbMu2PbgfCBB5rBdVz3wr1gE6kuddTu8Q",
  "key4": "35x2xUwT7dKbnS2rr9v2XdL3whJXwcDuonA6Px2uVSPuFuiZyEuxMVrXVJ1i5Pc9Hj5JA4ruBjGtRswxEoGr6Pq7",
  "key5": "5zszRHLMLZchEzZyHpgFdjbFvEcVS1xWZFkEQTDpn1Y7c2a2AjAULce9cmrNeX1VvaXrEwqABy2s4b9qnczCKW5r",
  "key6": "5XkN6CMs9fa5rhcViNhXep12YYfeJVbJmF5RebT5rn4hNJYi6gWxrB1coaePviZURix6ATrKEc5VU162KJeB1jKx",
  "key7": "5h4fNANJ3m2BEqApkMquueAk8MLba8rPmRGixDGvsrFV9tQ578U82ieMrq6BgBTzTrmnJMp7KR6Xhfq5bwahWCga",
  "key8": "3FK6N9GPgzQ1xzde3dyq4Pkqc1fP15yLijfpt6U8V6nKjUSE1WohVM4aoWwvt56XCA1MBKjjca6BMneS2VnJWvw4",
  "key9": "DMsz5YEaxqczjoKYYWQMSM8KkA8xZsCeU9xxM8bbHRmxUebkDze98dPsetdEJ8HFAu8ayo7dvbmH7jQwmEdWqTo",
  "key10": "5XNoG1GFHva7DnU1zRujBE8sCqCtDfNz9qwHJZfVZeirEQ7LAZhAiJfW1GGwsGcqgA4PmNM9W57qTY3kx63HR2bc",
  "key11": "52MLdTMB8dQ65fhDBZSJxQgKAAUGSKQhQg2xeLeabJJd3VAzMTeEQezXehV8MJdKiHz4fj61GrLqsfdy3iwRnhkV",
  "key12": "4KausXx9yMBP6drdyEFA6gLfWi8znxkKZbba1BzfR6JB4n4Giqi5VhGo7bMpWMxwJLyGH3qD6HEYAxK8iFWcyUKA",
  "key13": "4vNWst9sGFhWKAAyU43ddbw1TxsSxw35sW5EbfxoaDcRKqxFH4SV9eqEJ2t357ASFRTa2ZTB8jFUmNE9RJznhwu6",
  "key14": "2YpMVdGZoWHFKUJjRwraT9BxnRZrS5Qhh2RZBXpULb9gVPR14SpgvtW7rGDRtYepZmpKFz9Nby4HwMazvVXMgkGB",
  "key15": "3cAA37bAhbagn3Kti5LT8x6a4i6bnubPcQEVo5EZQcP5XYSNryVuU4Etf6HmE4W3FbcAXvnZdKHZdJVcRPEuEtTH",
  "key16": "46HSqvL8ZaG5VCv7VbzBhemdqWjs19wTfYXRRiXKDTtxpa5Ar7nfsurzQVWFVqXKMKp9NaPgxeWEWm2r8MmFczr7",
  "key17": "7MR7GVUe8esfA2zqKo4m5LwaXDCGbYtQdMtYstLauag6AiqqagUCJDZ94uWNVg1sVgnx3Ap3JZVntbEFML4EV3E",
  "key18": "3ZRxYG7ZXMfxUwe8gANvzUYMH8hG1tS2EXKaxEyJwqPT5wS2mHjsxt61cqfCFa3RPH6VHTiM1L1RREfMHDPa7hcF",
  "key19": "5iihfj4ncTzz3grzkJZGX4vP72YFnW5JhF4ugK397rvMF3tE35qLSZCFudfevyDL68WqqNhHDWUdC5H1DToWTpxe",
  "key20": "2ceZEpcZMFi3zFov2pQg5JWFBaWurimWprrhiS2fTChqrZiC9H4UsmCsWSbigJ98VAP58oQNi9H3VmbDyGNf8sbV",
  "key21": "2aeLfWnT3s4S2ZYYeargEszeFH8425AaSCUPet2WF7sY4zC3hKm493VsoyzxhGV8Bc6aQQzqo6CfMUCxugY2YA5Y",
  "key22": "Y5tzGCZjBi5cyMTEXS6HkNS4KRggSjpyyLYapM9s5ssGujVXgJfNgRHbVA7qwGptkCTpy6EuKAAhu6rfcXS47kW",
  "key23": "t6SfpscAe1sVLH5NFNkQ859FC29QDLsmAaiJcpbx84iAP6rSXWGBexr5aNBAxuxteadsqx3j1E4u76XCKJujsYm",
  "key24": "2Dh96cKfhVELm6Q2757cQ4pw3XCh1h7gjXqukNNQFTVFoFbqn5gREwMVuwnvAms1B5eYBAxCj9fupEEYsrtdamaF",
  "key25": "2eCJWDmHSsCoQaApgDi7asWcAorXvBV4HqWcefcvBMciw81xTfooAHEAuouCX7Z15ch9zXUUxRoXnXcPB6VXxDJB",
  "key26": "3vPptaYg7WsMoXjLgKrdfS5Gjf6yk5upahEdv36eX6VJyrF9qVNU8PeVwtWyxGsRGPNukJ4D6P1fNKqC96nQnxM1",
  "key27": "LTfDX4J2WaBwxqUSLv7yawMK63gsrAs4WP2GTSjAEiNidEmYBAqcC89etQNEiQ39boRGF4SraugHyjCeWRvjaBc",
  "key28": "5jURKdQo3zpwVPiMp6nSCQUecsnkrdnRESjpAxw1bsSNSxFCB2ViuM23EzwcPi2jZcZ7XCzFJKs4aix7xjVdmXU4",
  "key29": "2wz4wHcaQYaFa7fDadhH6Donj1pmvjgjdY9zHQoxi1hXfJXMGgMjvoNnQFSkZdkUKtfF2xVBVqU11cCyFU6NTVf7",
  "key30": "2rcZmwF6egBUdDNx8c5wDxJp9tjGNd2f7VUu2ys3uPmMDjPHWv7WRWajRFPiqJxffJEtUZmz1zdUW8eRA9LRGtCN",
  "key31": "29LHPiyyM1gM7fgXBTdLUcG4Ty2zJsLziWb9mdFyNyeiNgZdsL5EzFzBCtF8VLdjZjGMEbFnqdj5LxQ2KPgws1Lb",
  "key32": "4wEbJ7GHiF4roZ8Quuod8S9S3BVR5S6dmJZd5nCmcXDUAdibh2y4bafQGYVsrMQgtJtLywcdrMU2ZCdA7vxH13yR",
  "key33": "48adfxFWdsj7qm4X4CtAxnxeomBoPMoGrUGW2YGN1gGqwRNqV5Vh7voobNRJTmJkAqAHPa25sNQd1YbDhgtE8szF",
  "key34": "47vRWp4h8NVWpWSpfqMxJ4AxCrdJemJHmjeV6ueki1Hkrihpzr4Svq5RYpMwcWeZ1ZVbniVqcamAb54pG5VBsvgZ",
  "key35": "57fH9F5PUQt2c4Ho5y5ekq3zUjTr2xqr38xVQnhK3tiYCHE3md4JJBjo1rUDPhqTe1aHgjcq83fYLxBXKuH3bWzr",
  "key36": "5drooSsGwbT1zPzf6XZ3jz7DYGnXZgj8Fp1bJz3fjapg5eVtDhX516tZ9mj9iq9VamwDtE4fYv1Q5F9fCYnMH3mM",
  "key37": "zshBEiGfdDMaBa7HbSjkCa3TGNcRaq6vh7i3KKvn4hTpdT5Y1Jtcno5e7NAxCaiEHhAUKcdQZ6koHGJUUNPU8kK",
  "key38": "2uNpZ8RtsW9p82L49yQgbgrFLr62MGHUSzcoHPyFBYgvxxH4ydFStNLzkE8Yvf1ZGsQdxA4rSkULFhNGgnXxxk6Y",
  "key39": "2e949K9M7qy464QYw1X1EZEpSVwz8LHTVs1fanVznQe9ozvuGkyggThY2sZV6UiqVzW94ENWc4m14E65pQ7sjyPc",
  "key40": "jiS3CBBMve8evsAyCsdCdnqQrxdxvGEz3b7rQGrB2ZWoDVUHkP2oArE2g4NodbyDCsYGmxFz8qG5japwmhimMur",
  "key41": "2B9zWmjrViCuveTGjdTPJXs1QJhLrbtJC1s1qtkaEGeBe27XQFQQB3PbtgDx9BEfrVEobckcajQzxawPf74VpZi8",
  "key42": "5PpJHxbCaA8GpXW8xnzY88kxj9bSeBgskWwrrsNwsi48ANMdfkSi49NJtYQmYrvwkXMp7j6q1upwmUtJNfSgXAdP",
  "key43": "2nMSbVW2mJiVNgBHqBjpmBzcxfweFJoJce9gpWaaQ8mCafrKT3mTisinGBVCh6XzJATLaEPUfDkuHgjc88cJHZ6r",
  "key44": "5rGBBavC85Ez4sMEQNN2gN1UmUWTDthx5d6vyJBd6sXEt5FMEWysmU6HZ21feH2HJ6aTUFkQsbBUVH6nfsuNM5Sh",
  "key45": "5j9SAA3gMuJG7eYwveJgAkqBYEaSKMcztum2RBNFi9P8UYdGWpqExQiVnnDV674gLRe1WpycqaJGv5wKYV8f83Kr",
  "key46": "21yt2zjok1cbjVCgJhERFZimKsSdWxmSJK2HnQLwWXcmUhr5uzF5DcBQcL6ZSap7v9SWqmAXbRxCcwhXG1Q9yyJH",
  "key47": "44GSFoEqGCJURnTKcMdtmc6AuAGgF2Tbe3gKpJaELaFqJFWeUX8uDFXv5XiitVBpbsXjLF3EoAvVvmTu7zrGYCVy",
  "key48": "2SYwUztLLRKtwcdu5pu7GporcmuKDidEXyXf4npkrFHqKc2HEiziQ5NdQ73qRZkW6zGjdptyV8i3A2tnbDDwGkUy"
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
