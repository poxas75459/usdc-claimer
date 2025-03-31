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
    "4cVYXH5AJGEG1JHqv6CPLvXczaV5xEFv1HbMho3ehxkRUQ8oLGzmfgzrzryWhEKfNojnPoYCphxUb6UeYefhm5Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5af3BFQ4nZZ3ZY6xbxBWaF8MUF3Emn61eD4SGDQSh2tM2L6SRkCA6kE9k47TmUjtrNVv3q1oa9GoFLpDKg7pmNEp",
  "key1": "58hA4L3yfaVbcT7Gb1sEPdBJJUNgw4SZCf32tBeqdo228dAzE3ZEXxmwS4XzYEvBTrD66FxPFCU9BRg6bnnPhdW6",
  "key2": "31Gqq4PG9k6eY47Kov6Bdw4CopS5bYkGKuRXPtuRBjTQFjry18YhZqeSPeHAdNJgTy7ojqPPDegiJFZa3hag6BEE",
  "key3": "31ia8J3whpnWLZwcfK6Pge3ZXbTcLqeoeGDkeRT8MR4nSP2B5VsVkByGqM3nr4CJopMRoPpsV9JomayDKJ7Y35bM",
  "key4": "2QnndNBfQvyB2zP8J1NQLHNHz8BhmQeiPsJRXhm2aucThFh1giMHMM6xeHoAQgeKazTfDmyfiuw3H5YMjBcqNz7b",
  "key5": "5X4CXmsUadbFiyVf6kjL96dQVrEtsGuy8nyCLzTGBqeoUAgGRTwcv5DRQa9W1PxNXX6GaC1JVDuwtbFiJ3F2cpaW",
  "key6": "47WRfUiyTxwdawSBcAr6QALKuYQTs6cXJxeXhL6sd8itKAhmwdxshCAvbwx7PBoxUNgF1UWHF6Nk3WEoiUC3YvEy",
  "key7": "Rga7MMUJ2B1P7rkuFECA2rTrd7KMtQiDgfgHhDL7AXGnfqDn9AtDaijHsWGgYpmLq5Pgw5PVDPdZcDSCsvkKS1h",
  "key8": "4uZQuYY5mgSv9LJrS2iD67uakLjfgJudAZ6ESxcQ4XYmvDjPE7S1M4PANEUtcsWWUyWNQZwhs9efECHknAQ7cnYy",
  "key9": "4fHPt3T3UGXxoygGAF28CCY4tpn4xYXAc9zZCoSr4WUWH8ZX73WZJ3VJWAXH4uHBLRJ4DL7GqDTz4Akq6SBs8eAw",
  "key10": "2APk7WQSehc7Zqn47yxXhuAHbkiX5PrvCSqrPHS41YYDEqxhbBeNZBhT2Wp5DCqz44pDkCV1XQgoeiCh8K5CtTJ6",
  "key11": "35GC5mS6AL8Kvc3BxY7CqLHKDSB48KXD6GqNRp7wZigXzFxB5aMvwwB62v7EyBs44raMvn3qFWhYdZ9xxfYTa5AZ",
  "key12": "2zN3AP43euDNKx6MEYFZEv1GKJv7axahQs1TVyKakgnZyyqUjaJgfhoSrpudbzc835D4TWpv5sagsWHcEDWCQkaD",
  "key13": "3sZe7dPm7rxgNZxKDttHm4YT1u3XDTR17eBXuJWyKqbfYEU45SXu5tfxHUFgwVcf49WUnkggnhhgLsVdaM1LnhRi",
  "key14": "26C8b2RJwFMDKp2oZgdjeTVEzGfdBmXLaAynwR5NS1vUP4k4rcQ9CSxZgACdWEdVDC6Bv1s8Cys3UNeTQMPLBcd6",
  "key15": "35EnABtF7soHS3CBS7u2DDoRg6gsgLh62x91PcAEDhBTVBMJC2ajsvSByk9LZ3p4zXzHbGQPKh5fZKZ9qxFb3nH7",
  "key16": "4yCJBVvZTDEbTy4FskMj8SGwFwxE38Y1bigQ6Dji4LAeDJhHTaiHFMHpdE3TtvUAFCisvQDUzbjjpwZJZCEMbcPY",
  "key17": "5sB83ZzLp5nLgkbG4L83QU2C1Y9nRnu2sgDBj63oz3XgSxxxqCLADBiZBPcrSeyqvVXZiADi9Yyt5GWockEW5SzL",
  "key18": "44asp7xii8s1S7ejd4L4N83BVM38VpKxG88cFnvAnTAf6wekamZXTPuYzJwEmRgzWMmAv4rWjZow3oF1N4SiqcnZ",
  "key19": "4CrmFy2HFfQFhRDfk8N7MRfhWq7FciN2sMiHSgzoLLeui2ZraY2St4zyf3rg9XuCWWpFo9hvFwxcMKjHhVyZZCsA",
  "key20": "2KWwJmEAM1YTCNy4FPk8Wx24SjKyr4LtrEpx2p1LiKxQWANn3N4d9FHmR81rkbvSQXeN9C2gHaG7pvuBze4xGxYQ",
  "key21": "2zgoyjSgYK4tiRJQZvD5THsyCzUV3YL19Smft2SmAQDF3gFZVyLDk73xqNyG8DnpWM5RNaJ98BkiRSMMqxLGsqPq",
  "key22": "3TCJMfyJxaSfb6z6kUXp5zXUVEBcQHjhSndPJ6ZQDhyTqNYsiiRkd1KhohtTtQ4tPVASbuHMokwh9TrhWosT47gm",
  "key23": "h1iLm3Txx2RffuUkPMRohZ4p3CBD5LB3sm9PeEDUCDgmxLSUHPJekauAb8SfeqQ2BZaKxYEAUoFiPrSBY8bYDMj",
  "key24": "3qppMVWnFJGyGZwH6m4GFRVLmUTViuDuwmAaX6XoQECEtgHnSBRwDZYJ3yLpMpNLkcV8HuWT339qJmEhTrFbXUzq",
  "key25": "58fmWcxp68KQViM4CyWE4KMJcKxMvdwN2ubCzWwYgKBn7LR356uAWbiyK6676r6GBMxPeqrkH5Vm2vDtia1qArCT",
  "key26": "4ByW524cMYSnknGFmcFXSSJvJmYf42BX4eDPkJMqmhy3b6uXvfUhtfZPqVkDmd9Do1dTJGiCeRXqWWW8NbgbAT8R",
  "key27": "2DWWyiVwXhjHpe8HET8fzaNXaaKtqE2SxiGG5xJR9RvZAyojcwQqd7GYihTax8PQcCbiNMXvdbHFcZgV7M1QGZt5",
  "key28": "3CEforS5Anq1cgoa9aKtcx79QktYicDCzUvuPhzvQvYWGm2p9xwJk7eyksxRhARUmuL81Kipu4SrAGAQERJwUzR1",
  "key29": "5h4vTYhQ5k4z5WNZiSYCY7atAer8rNFfvic49SYqpfL2UsvGqapA5dPxkya6kDj8JeSmCDmcDjmgT9ocEgVRSZSd",
  "key30": "2pGrAPYcFVq4oQB2b8SByouj1HKagonF5QBPsKLNQoFVfPuSbTctL5yRhFkAKj91rnPrs5UPerQkw72Mm2uppE2h",
  "key31": "4CWcAyMBaYiWwpmj8gzXxPyQZ39Ttv4kdcH7p4rKHZkGj4a6wJEa1AEs9eExihUq2N5ukdzdKYPHjrWztfYZxk31",
  "key32": "2724jkDGsspgm5ZC1miTdkhirGzHB1nZSBuWiiYV5PALsPC3A3yNK9iiL2mi4gZriLmLj3emtVZrTSsep6rgrbrb",
  "key33": "4DnqikcLkSYbXPwbvZZoFfhyHk7WruAq6akKdPDzbRqaA6gEwQmnXKXFqKuxP1gthhBTfSiDeeCtpB4j63Yi3sfY",
  "key34": "2eZQpaPQsq65BbJwrMQeuoP7d7BgwUsgfSkaqzrzEn5geqiTu13FWkNtipufUAV64QhVwzFg519YJiP1MqEX6BJv",
  "key35": "4qTky1sbCDeGUWaTkJx2LARjMZe4xs93U4mtkiLQ4iGtbfcvEEXUXw6BpAcWXT8Z3R5bNpv8vyLBiQyfTxpadFd1",
  "key36": "4nm9EqSQ5nZSrtNpdDUjVixMsrtivp41b2Y19LTN2nWpY4UYCSgfL5TcisUBdNUjUevkQ8VhNYMcrzN8xNcRj5q2",
  "key37": "3rn77ZFSad6hdmiacez3iX4qa52hBSuia1vWgieRXe6nZqNByvtdHDD8hhZdd6MYY45iNhsx9kmfA4Eix6tqmyZr",
  "key38": "4UNLXAe77YHxqKFJPWEPYDYo3bcTauaLjB1mEGriVNWHJU3cqQnPyoJYat7tnUGwRrqvmSid2KbJNwcDKDRzEJv3",
  "key39": "4LB97p86dAqXZohpVRT1TkshfL2ZrvwTAFUfhg5QFCFVRwWjBwQTAFSjFjeexCU5JR8zjcxhXiHiP6wxsYygQn9c",
  "key40": "2pZE2Y88uZLZTL4uPLgemE2ypZmk3hge9YhFCKkzxFQdPiG5XftWq9qfeRwsfkEenJCaHmFJqyrRwMMA72tGHozH",
  "key41": "dYRwZWX192a1xbuPpDVHyqWQA7mN13PiWM9UDtY2jfnBkeH2YfiE6PjDfuNFTFuewGSsXVkN78aJCqbHjaRDDmi",
  "key42": "5nkHaBnyQXJaaqhHJWhVXsyydZ28iD3CYFiLWZxJZbRcJztED33ZjisXm682vx5u9ZyAn1FKWiWFcxsWWnScsMps",
  "key43": "4atWkKytqoTiS79aQoSEybMpQhSKweKngAXH4cKgiK9b9DphagEin7pXRDYbynajQaJeir445dMST6juMvA5x191",
  "key44": "5LXkzD81po5MHReSPPjNJHe3JzCojNHaosBmgyrfqgLyMzTiWoQsEzFURJ87b58mmBKwMynAXUfX7voBKxNZAjra",
  "key45": "42cjSwxh2sCYsGWndwskzMqQyPLE49oYzmApd7M2UXpGVpV3XsKCUozb6TZnG7tJvP77hyMux9Jks32BSwSnym1D",
  "key46": "3eXJDGLMAFg86NS5TsuCGcB5SL2qCKxmGVWZWTMHXexH3DEFY29UcLzwifK9DxRRTEiBvxpCpppYKpjd5ZF7PZCX"
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
