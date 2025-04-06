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
    "24gQPpNYMP4eoSjmqp9taxQ3zDWQvNm5zfBdnKHu5XuMskE2A8cf7QbmXm6RGT7ktYk2AsKreQSmxLm34pSpWsDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vyyns8i4GQyrVxRSYtFRGhZcfGXi9iNvSs4h61VPqkRHB8jLYFELYdvnY9Uz8X5kxYDENFKfNcXqQeg3Twp6hcF",
  "key1": "3EZTNNnQRwYJgJvTvFJSEJmfWFNVNRxQGkHsEs9KjYATB2dRy885HzW1A9WZisFg3NWxFG657enakYLBHTPKb67U",
  "key2": "3abpZFH9DEThc8DAko8f1dmsCiXNkLMfcyxcLxcXUCJyRcjVsdWZBpwvkrBvgHfyED7F4GkSP4L1yKkoeDrfujRM",
  "key3": "wsERqkWrJj78rAsq3qHEUoHMogs5AVd9F92sBN9ghjCikSAkvecgVqQh2eDFF3CmUf9YFaQmjLf8LcZgsbojEKq",
  "key4": "3rnktbQXLGPNgwuafCr8P3wxPaYUrNMjbLQh8kHHnyvTxo1tAJkjARdS4SSjrC7zdazDyjFwTVnTw6G1eyVuRzXa",
  "key5": "wyG4iRcjoog7nU6ZTUuFDA6QR6mHr5UjKuwWMnQoBCxdbWe7EZ4wgqunSnZah7UTS9cDJMqVmte7NrUw3rHzSQF",
  "key6": "3FMavZ5r1Xn5rVaQcnuoHwsEMhyy24VyT7g7R1dvtJg9RpKKQTv2TJUeNvmsN3eBC7tsYWAc1aZpS5WCsbfQurPD",
  "key7": "222YvnVo1ZyyJ8zctyg8cYBn5pCSYKDvto2LyJ7pT8u1Z6Za5qEyUudfV13FPqdPbRJ9zY6Z839LgDmzoRcu7Uxp",
  "key8": "3kdYLnWCHzhvLMGW7L2c8Fbs8r7qxr2YRz8N5eRZykaVNaaWE44FAf3Jh4wm1dTbTZFV1HsB3h69CkNAeW1MWGCN",
  "key9": "2rN6R3qtXvbTuSTDFGPArHhCiztzZ5jaKzeHfV8TEBRDqrDXkkqE3f6T121b1VFvoiC7HmPVQhpqQi4tzLiTAfkD",
  "key10": "4rJ2iegrVcH3uRc1RL6yuseyPGcyVh54Xn5Rf4MPfbqiHTyCPHPVrUWvXMcsfAhaZe9cFfadk9Yautp8pNxvduQm",
  "key11": "3avR5C94bPtXfdDULBUEpge19fCMNLMAPLXHBkucruMxmzCeyayGwYuMZ9DX5ti1HKQJbbPNMa4nxZ36L4mfTs5N",
  "key12": "5CWoVi84UoWfcHasCd6pwamsfMeKEAvBCGYZuhCEG1WM9AyZYhHn9tFQYADrcBo4aTqQzyZf2Yt1uE7AKmT8e4w6",
  "key13": "5kjwseCDEUYNCW5K5QBFnyDpBAjd6EZ6G9uSMvBcCtez8x5GAQ9TxNtaU7cbDcc8svuVwZ1Vp9fy9SewojQSsgZT",
  "key14": "62VkPoCgn2XKrgSqucBPtKqjPVnBXgh5YE4xXdu4c3FfaVuMdGKsRc5Se3ZyQJ89TVNww1CN4EvTYAzzQEo88Lz1",
  "key15": "4fELK4yGnWzDyxSn6Dh26Sw2JVyRGazwZpB9dpATVu1x5PRYz8wDrr8zcuYUyaQea4Tx9SmKkdJo4cKb2mVPQ8MQ",
  "key16": "4VL5EqfTpGj1CbNGLefUK9LeLSsQfKEiGypCDkBBi2qHoGRyVvhaF2f7gDyY7bJ9oLXqT3hZELXpji1sUxYUomLe",
  "key17": "4ZcHQM1xBpqenCRgnuQL2sWmDCqf5mcqczDv4kHnpgrPXQy8jgv6FTivC19cfKjUumujByQ4KokoqjBKqS2CN54H",
  "key18": "3aCHitEtQEjWaDPhbqynMq1Qe2hNc4TM9m9q5KcfzcGawaj9SnRNwTiQN1M3ZQK6cF1xpddjNfuJ8hqCytL7jep4",
  "key19": "2JgXGvNEfebsdTyL8zTZ97TWvtBBGvvSDJdz3FSDGyBQWm6ZCkmoJf8RHPswVGFs8GF1TzPKpJ2zDk4g1HK5b1co",
  "key20": "4p7nTDvecS4dSrvh3adAN4YgQ4E8af6ac2BAV728is6A39xaZzMoVXiCviHYAzriYu7oXsro8qahFCc6bLcd4coR",
  "key21": "2uLHW6TSL4t5ou2sMezCSKvUtosMoi7iTFFm8sH7XFzihMoMiYQwazU91Z45adYcWD54jdCk3fprVPnsHpv9ad1K",
  "key22": "2iMbS644tr5hjLgQBMgBH54jAAXvFsTUXyqJooPKUcvpmP91UqFNJXJWqQ7jUFb5QxumFWGqvzSHPuiNacufLNik",
  "key23": "4v61cSqrNpSVrmuZT3GLyhLNPadnnAvnvtZfKmxmNQUh9arur1qfk9SWUrdRVgmpN5375kxwkH7wgjkFZP2DUYDq",
  "key24": "2dWB8WRfVfZAzaeo3F9qTyjxJxiHDKsNRn3WSndwiyb47XCQBjU3Siwpo1BPFqFsTKXppYFtZ56uvFReW4WAsLYV",
  "key25": "561fq3fgKjnkTP5BcZHgsGttZCTF1u9eEZarr6EKTBNFQJy63xUVK5Uoj7gBAjBNbcCWTD12cYAgPVmBsUQb7bb1",
  "key26": "5Gjj6hd9PCFUvk1osgBHYjsMTfudQc9CVLsFoTU2N9sQx5ETe27P83pgXuma8X8HcFBbk5RtmDYfNQuWb8Q124rq",
  "key27": "2SJgcMt7AQbxfhrHPvVyz1Wb8Fm4KpmWiX181gnw84mKLYTJCgdVeYiYMuHkf2QGdpFr5tnivguCyJ2mnXMEkiB3",
  "key28": "2J8WkCMWs86yF85KjeViXpW254bWYWa9Y7s78k4z8jCXvAmvmiW89QqrkwmDSJahf2Gyr6yypjBqLeV4ZBHoByKS",
  "key29": "nWeG5eDg8fk7bTqpHP8FDp9FNABzJZdtxYVKctQTPdjUPvX3r6Vj8LcBytrkhwmEP8zn2CJ1eFyKXjgri4iohG4",
  "key30": "4vmicKSKazsH7pCxeZRqAM5Wpn3DCKjbnVBhx6km3nTtqPhBu9qUbFhj2J9bq9wYtTbAsS9Dvhh8Rt5EiaiFUMCB",
  "key31": "33VTJMuT5R4YCP2dgWQqu1cQggByBD2BW14dpcRdQKYGEaQkyiWEAqeFg3SYooZP4zUXE9mUSWqGG6er276XcJvf",
  "key32": "5WCaEer93oJRa5mqTUwqcPDsmmt3zoVM8XRaYgUTRbXQUnuRTXKsJJE1XrcVT1N5nVrGPDgCZWeyTHaa2D9YJkrr",
  "key33": "9DSXvZWc4XEnvN6veNkAVScMBkWxBXnxFkXHvB5ZiGw3MSgpsEDEaAX4pyonzH4zCMsCxrnLdogQzyCmx4yst28",
  "key34": "2a7qekyH2X8rXa7ex6JP5at36QkUBKEFCU2NorBun4HWRoHfZokELXWzKXDQ68PPvhyhPQVmYAKtrE2GAnFrVzhg",
  "key35": "5GhZXNzesduPoxCCbhLcwYsSaLnFFL6JJMJmRzUFCC2ciyvRdC2Wjx8so3pJJTjn9nABdNDJz3wPnsHc6gy73vrp",
  "key36": "5Saj8sJiqLkRvc62DiPm7WNy6uBWYjTH4MShPn428UvPWmoqJoUjRkSMDpsYEeF9KsmYvYjd2QSjatQxqQhKb2ue",
  "key37": "5Ursw4zgFGHypU63KNCR7rg5UXQve2dbSHU2bJE4knfwzzRygAefSMygRcwhGoEE21kB6CP7bGtfmGiAHC6ukKNe",
  "key38": "3bZVmRDouCSvGZqdkCp3h6YxZgYrYXSNpcqjp4dHipwRQ2QZ5ZchHRgkoQZAtWJG71KXG1Ra69qztPZhQrFLfKS1",
  "key39": "4gPvra4wr8ncTN2vAUjFYrmxhW2FMFjWy1LJdL4vy91G9V7r5UgTMQvQ32Z9cTMnZrqj1pantMBEzwDdTxVgyGGu",
  "key40": "3ZUXuA9ux6wCUJRGyAkMrZXrctg342yFWoL5i8FpH6CHdxvgPNwxKhmiij4o4WBjuKtqBifjFsdc6CP1iQbvm4f5",
  "key41": "F94eZaLiyosXga6PSNoQKs7mqwe4Rg9AJ7uM2kU2BREiLLMeP7AQXcvHKPKVdF9WpwJ4vZHeiJD8r8wtTxtarXs",
  "key42": "4fisaXqmeVnJZ6vf9TRvs5gN2P5pgV9qgr21SB6eWzxz7McbttLWhXNp8e88i7Fboz1Ubh9AvRy9veGV91eW8wfU",
  "key43": "dZTKvSC69nXFcG8fWmbt9ggGt6NiYfxX3GUJY9uJqgaD5nnQUWjhpftWiRR1VXoHcbTRH3DXgTDRjQiRTN3XSu5",
  "key44": "3xRvSEQjD2fNwKgNoQzbpr1phu76KqVTGxpcm8aR9PT4M2bC7qFHvQmDf7LkNWpukp7xYQXJLnzrzsmorEJYsj5j"
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
