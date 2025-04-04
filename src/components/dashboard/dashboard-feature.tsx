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
    "2LEAEx3RSDZuqaK4cm7ENxs4AD9kjUUSkdJaoGNAo5mLf5N7DdwyTnFCF5btqx2DzAXVNKFkhHtF5hzCheMceTF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byneMpWhtN3nEn69VgxYfBoeNZGSqnUPsWtcSS9QP2MT3qwBZKY7Xv7NxEVD3ycGZLTVjPiYM5TvjBGYwQbcaPP",
  "key1": "B8L2DEfGEB5BKoowptsPhh49KXZ1xWTZZS6BaJttZvERaATgifvx2nYMA426LJJc3C1ow7KAm6mGES7F51hvMCK",
  "key2": "zYhSuFjREBzwi4v97XBSg16F22sbENqk2mbWBzSRkrNsmMMdkV5gbwJ5bTt7ARfon6EWfeKUqsZ1PrHFGMb5Xuf",
  "key3": "2w1E7hpZ185uTn7SwN1bbbKc8kXnDytBUGPEnrgs6MVQ44TSDoKGzPhDwUgorkVopamdqyPLJZ2qXdUHksaj52k1",
  "key4": "4UQqA5gfekpCxroa9ceETXaU41w2H9h8F5zhLX6eJf7xrtmxa9WBvDDC2aucyHjFwgUyqyL3Hv78ASpEfFZnB6NZ",
  "key5": "mhD2FvJgE8278btAfuHRJDEUdAQJHhT8ejJvs4koWuYsg3Fyy7tBsX36Ndk7skUMe8B3xvUUXP75TMysZKjgrt2",
  "key6": "4peNtNuFky5CCgjFJYPAir1bHNSS9R2Qa7XLEoxqMVYNMBWqxi2SVnH45P4RYTNSp7UTwud7biDrxbSBvWEVsLs7",
  "key7": "3CDrAZoXREcPBHKNLszAQgY5tHVq9SV8u2PQ7JfSdtsmupUCLdzGaJqpJ7wVh8nULb1YynDCFCrcTAupzE45hRKb",
  "key8": "pWCbtPi5WEVLsqwh6hVHmnJu5mXzUWyQMDtPwrUTA9BHUNzDS8TQ8oqAMD2AD3KuyLo7AGVJafsWYYKCEjNwX9T",
  "key9": "4Hw7uyPXiaxkqFDf2N74rThTduQx4HJ293TToHGuGRNt59HVxsLCevARWXQEZFP7Y7kqbXia91xtzKgak5gfSkQ5",
  "key10": "5xyamvrHd6Ah83SxZ7xnbZP8Mibb3jPy1dSYrMfB7zBgxCba2c2wLpPAQG9xTQeAM5mDE5a9M8duXdkE1RokofcU",
  "key11": "FfmTYrcpHVtkssyvP7Avkr3bDxBFqsKPKkbmgqtsgBCAHwzZjxDZ4udoSzU2MGArCJzMxRDx6NsK7w96x4YGbrJ",
  "key12": "3on69a1B6QUaJAsgafULiE5K17u15ZT4Wo9oa5gv5KFS9c9nRZQW5msDWnT2pCDu5BssFWpmxNCRQtBry5WXzqeY",
  "key13": "5RuxErMvrhB1tREiy5mG9Cm4VDjJEZncV1tPbEkjowgLVWFGteKJ3awYk1JFyNVnnJEDR72bwJqpJtuYNNEvsWuZ",
  "key14": "2R8wgt76oTXE4ydAXmRxNEB9DX1Bu8nxgeRTfqaxr4CrZWTigxS6gUEY4hUzWhwmyYM5fcffKYQXmKc5ceHfRYDL",
  "key15": "32ydR8yWzfcg8x5VcCGTA5stMoUhYcrGMZeQ8Vr1aNexXqFmbEpk3jQkqwLhniMS38YdrRFkX5XBWD4zM3nZjhS3",
  "key16": "2gAM5jwGFoMR3gHbWx47HrwReWS4G3KUT3CfzB7VdTFbkoBQ6aPeRqf8xccPt9yXWP8U1onDLzKR6V7d1vxXYMhL",
  "key17": "3WDK6yJtnrFvfinBnomwHRwyrAH6qENGEu5v1yWdcdW4LbmpEjCqsYA2ZS5Mxdkt5q513oKTzQTCUMsSTRVitJKW",
  "key18": "2MgYx7Lkz48im6Eo3AvQh2Jn7DhKwS5MKGvez3A1e1nbbYB7yz9gpAQdwg6yVPQbLdNeRCfgkV111k2vyq1kbefL",
  "key19": "4AK3gMcwniaxZoVV1X1xKk4xia2uTEYesAMatiwUMvysEvTmhNgpXy7zsXN6wFRBzAAwW2cgffLqtBoXHKXpRnXb",
  "key20": "5XHm3xDz1oiDua5LrY6r3sXQGgBz78bjEVZpjFRgB1EmKsy1Ui4EFxG9jD6fXCKSWNCyQSb86wSEpUSzzGP6AZML",
  "key21": "q85JZy21WFTdGXps3RffpF5P3JTda3unUQhqSX2pg6u7kJoi7nxg5YhwWRnsoZ77Mk8dFvST7VvUkijgPDgGzwf",
  "key22": "3nucxjJ7g7JZZSyFm51mzpyEwd5trFzAVNpTsk8U6rdBEFPPmQAe6pzbisNVEn6HEXH4iL2pDBzhXVLWh5pECkmu",
  "key23": "UANrqMiGMeiEYiUMvVSvzJoX3U65tGLws5KtCTnfUCqC6nLnzC4oybHY9zQ94rN42WnNBaME1uMpsULy2exnX12",
  "key24": "f7mCbJpH712Fcr54DqaQ5gQkhMmWUVZdxmg7nysSRe7PcwuhuajyUvUK1w82z9D6Kh9PqmSnAnJai9UBFmXWU9N",
  "key25": "SiR936mXefm7ZFQ5ZjjCGNC5i2oTnnJqx1TNiEBox8HWhnWW4v3V3qgLaXbyEpznix5vFSHrWZcZ7PDACgmLHC7",
  "key26": "2smUftL8FVud9pNbjCQDL2NW2G52TnWcFwmL5fe9PvL5AF2RateUdpRSXcBxoF4PoPXsV92tz4Z2j16WbFT1ZyRe",
  "key27": "2Y3EVdepmJEzXTeuZmjjLZQVvr6HsB1GwWzXEFAfUuJJ5XWj8z81hMj5RVehMSkhd3hMzr8CWjUMP7VLkALThBjZ",
  "key28": "43ioh28qTWvdsUZg2BbcqR3VMw3itKi8adVQ6wiNq7UDyqo9QJUKicUBAQBPe1YxngeUw55iphEnG3qy7cF1S8t1",
  "key29": "5o2kFLUnjqD52SQzHYykY8P8RAbD3rwstfKcgZfNGNjEPrNSU9hs8XSzzAA2kraxGwj51GfSaPkqPpCvo3XGgRcn",
  "key30": "DQyTSGTzH2NNEXfTa3VYXnG5BPaic8P5QKdP9svvDzEUMceJDH6jccPTeydczy92vtWY98CMuHS2Yb24J3FTynm",
  "key31": "4ztFf7tsp2WPu4gVoFT2vFNzgg8xKyjUzRYRbMEzqAFvTbmnkw3r3MtPjBzxjG4edka1wEfFkmmhkWd72f9jbMEX",
  "key32": "5kta52ALVto1aZ4jtpNxnzJWicg7dddrsvPHVRbuXMEgR3Yoe2jLCiKuHx1pRjK2SzHbqgcxpHfPfqzDEbM1GyBJ",
  "key33": "36KQukjHyyx4hKhFw78mHmNKukv3eMBqroRZwwJbE8z7bfiQaEnbrgpYKQrisJWakokzmmkk8FM3SebMxXCSmFKv",
  "key34": "n5xUjb6jyke7mhbQvpwT6KDMdWKQnViaLgXGp21JJzMTwADrGBNMKoHAvZncL1zmqVoRA4EwXiRjUNs56ZMdXas",
  "key35": "o6sq9cx3Yzov8KGE1GxxK7JE55rX54wYv5S6NiHQ8C6CJm9whWdXiLQ5Ddz51Bdf6jujpj8uFY1FRWGxBgdJ3hb",
  "key36": "2qspPCPs2jchVBeCByHNQvWeG6YW6pbuoQXecc59pLsogQUq7iGw7XkyhGnuACsKhYtYTNLJ3jJxsZ13eLBBDGb3",
  "key37": "CpkAAnJ339WD9Gj1S1mf13YKKxoVmho6FNsiSs8bR3yKthRXJg1QsmUSe1xkZ4JTiGkepjW1ipuVVzht5h7TboV",
  "key38": "3k8i1ALW7mDeZTF2MECpSqcFs2GTnhx4dfop62RijFMBMrfwBKdzj2Qc7AeRgNLcWDuM4S7tTQQaRhxp2oWfhiqG",
  "key39": "5pBKr25KmQrDPDFwwFNZwNeqQdEJYzhQg2kSqL7qW5UCbDhBetqHqviCz44hS48R9x8v1adz4ruXr9ipyYemENAE",
  "key40": "4vZoQJ8pYLxwmVFghaKiB7C4GGw99bttHFFWqipwHhiPsgwN4TEfaqT38tFv4fW4m7D7G7nYx4ciFhzBsgAVax2y",
  "key41": "CcEV3zs6hvfpmTT5wpMXVUjJT2DbwsTqEwKoHbr5R1xfqcy6zRSHSMruKMSj2oHXjiL3HTGEPcmx9689p4Q5abp",
  "key42": "4rX17Kn9Fb6nC2UoDX8icfFbvPv1CDT2YhrL4T1x6qb57H5vGhG1CkPGZ8ieuKiCUvoPbfagCNnbsK2QMrSSYnLf"
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
