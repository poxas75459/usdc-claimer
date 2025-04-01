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
    "3Z1mfPCUaZahw9Qyj5g8Np5J8K4fKwhgmLrw2sNwFUiDR9QNc974Pjtu7QRcLLSPHxPLhodreWB5Gu3kmqmGqZvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVqiZ2Gg9mHgKLm5NsheFXCkrYZeyTkVdbxaoLmn77TGZpSguRmjSKPQjBKBwUphMu7UXotjcMXSVgsC8Y2YUtJ",
  "key1": "4HjPPQ2EeWb4YJmmXGu6S4iNSktKAZhode6dQrL2baE61CCpKD666N1BpDr75umFAiDzEqLD288pcvdD8EUm7Vfk",
  "key2": "QbuzfkDJuQ8WGaa8QAFqtJDkEj8eCWQuR52pnSGsyjoNs7kTiXsPef4aGTK5nBrNropqrsM7KhX5PpvAVoRghiZ",
  "key3": "4xT2WJ1wtkGCAoJDGPUJy74tu6vqqiqzGHj19mKUhSSKTnvD2vvsFn7SJAhykVxdaBYAc9PNa8AmcTzBdtGChsSo",
  "key4": "2LE8w6pHqT6Kbc8nuAtSMxsie5QbgQaTvRnkQBpVH88zaj9uz2964rKc6KoJd6KvdYqR9C44yxfBWGctFGBgspUe",
  "key5": "xNkK7mVMW6vFC4MzLbbUo5W5NSEwkYxiJMN5vRxuSPP8ZmiKmvxp4x1w7anW5LSqEGJNzNYakUDLbQhoGubHGPm",
  "key6": "56e2utrVqHQhVANND4HUVrf8SHreMN9QXd7CvAZDjcUpXKx2vXrDdtMH9vPPxVJrsByzbTy1juc4xuGnmj8BwQEv",
  "key7": "3hoyxXdPkV3CzBfBYKT69fT6aW4YwMGiqJaMwjoHnuZQi5hsi4tQfM5x39ogtLHDadmcafmW6H7LRb6GbANNzwLq",
  "key8": "5NAUANobstBnWNtvgUKF7MhNJ7aFQDwdrUyZ6GQrPr2nu1KUfcqL1XqHBeK1JfhiLfX6VgHPEWmEtuuQGd8QmG6V",
  "key9": "2g85xnYnTE7EnXmq4eAwDHxKdryfwD6z8NeUPnUXJwE9RKa5MJk9WEyuQ2R9dfctGbfPGA5gkjY4FYopgQ1Ya7fz",
  "key10": "2csZvBBYj7FeUmNvbgFgum8qNgVxDWQx5pfEEwEiNfwKNr313aCaFzk7zZVpSU4SC3eZsdmvAqBQUCPoPYUtSBVy",
  "key11": "4vdMLD3MYdM1d7j2sFL9SToVweHxk5fi6iCMGL2f7x79SFqcGwNp3Rg9qakKAkePzvr5Hui3xybynXdJnq5hGtLg",
  "key12": "3CJrShsriw2M5D4GpThhCJmHmhwsc4Vdgh5Ma8M75oSBkkroNzWWjwxnfquvP8eF9ehdpNbE81aNPnEo6quJYjux",
  "key13": "48CNfmHJpfiiF88Yv4w5Yavm2Coe2uFbLhxq7ZxNvCgbguCH5T4ocvTwVneq6CfX6pnitnX6xphPhAmoLYWjnDAD",
  "key14": "3h4WLN351LPNMtb3gvssVfksSkPsMWN1HRsj6jkr134XtDh5mJebmY5mqhoyHBcTs5zVSNYCVrmX3CNUQt1DKfN8",
  "key15": "af154oYgEmLEGP2W4PeMSYTyXqhWSpRF1wicr6tGjusnXPCEBGH1LL8U6wHCwpMN4WCUoXxJBBqRFneQoL4MCYC",
  "key16": "4PmmGQjBUT1horShmgSbVXXioWJWAYYUuo5WTA43RihDaLCM4qr2UMWK5So16Ktm1KAgJFqA2uE8sDvuNFKaomKr",
  "key17": "3L56SPatyfG7G5yCmAXFyzJQgaCKKYma9wt7vbQktoP2idNSoTk7cy7xfY4ip9XHGpC2kaGiScdA6aSncoJ97P1h",
  "key18": "3BoQTNGARCrgAvqfEaq4J9LTG4inRiZb1VrAnv5BqCYu7w3iQJr9U3fnRikETGpFUAxUBQ177h4F7duS1fH9k5fH",
  "key19": "2UzAoqowatHzz8Ly1QqM7qozP2Q8QTk9nvzNkPtGfBw8WqTeXj6P7yBEWEh1HYs2nFgxUXrcMnUfpyKFLa2xD6xy",
  "key20": "YZENqz4LQrAnmDFXDtA86xzAdotYdQeweb1gqtdp3obu3rTgphyHozCYw8P2598q9Mzir5GWRgwBUUWyJwq8K1P",
  "key21": "2T2AZ75vch2yWzi8cDRzMtqGhh7BGDFqmLDg3JfYTUL92sjbh3GrdXRRZKKVQYSg9yspbSS7oSyx43jsMHCp194s",
  "key22": "2gfzPimUVqFZ2ZxB9oYctNgG53E7gRGC7ctg9RxCd7soYbAU1hr9YJJqgjYQsTCkgcPmzJktwSq6tYmAuESpFrs",
  "key23": "2zEmqq1FJEeRpAVMHAaMjA7N29h6rypm7A9hvJyDbjQx8SJF2xPwkNrpdrDhGvhpjBse8L8fLp7AScZgDMm7FSkf",
  "key24": "4TMEJQrcc3JJoAKmK5buWbEs98ZogcgS5mAFJ6uatxs2yB4ypURjjrhfRtTsyhfzmxbmairVKFZ28uFMjmSePX3v",
  "key25": "3VttDv1ZN8JNQd5QixeaUxFiSQ6162hh8rmXGUzShdCzNbs3bkrcMndfvKYESUJN7545QecX4ZRLjVY9AA7UFyRM",
  "key26": "qTsLREvNwrHqfNvumbUTFrBy7H3yJjRbfjq6FpJtL4LmKZpDuHezCdt717pPm4feDu4fWew2sYEBUcKbCDhrbfz",
  "key27": "3QYp9fbJ9Tbbp7myPPDQe8t8zcYqyG3riQk3nXUJCG2tpPxTHrQwhWqWRSCapotdiYSuLPPrR9wYifAUSLbUhv3d",
  "key28": "RouFXvxNydMTHLTEnDNCcUX27W8TwUfpqVvu4eBuYb6X89nDdYmQwtnpPWJfGe4ER5c3MLVFMMsT4MfdLqkVqbt",
  "key29": "37bzr7i8KqLkGkX9g2uAFk9aboV83RXXHJ3Z25i5yU78zkJbHWCnJ5PyNJ1Gjrt8thD8sexwDcfyiRekXE91b4QD",
  "key30": "4suorxkL2VfnDW7R5vgcTVBF6ZyVbd3SWVJAQw39kjzUybjZB4UF1K8nR1SfNA2tm3a5odgsCFSXztHSG9sz1MsK",
  "key31": "4MCMcxdFBpVi1hGFi5TrGGStHHJuegbpCsNmKnR1wuRFVGoQZbSzRPCMYk4AsJkcB5nB92RwD9cQpPq8YNPFgY8c",
  "key32": "282w8G28TvGCeCmpAkLGHGnriKTMw2GAoSBs2dsUn3AFpERnDB4roCbmhrwZVutQtA7BLeaRaKcQnwDbTio3SeZC",
  "key33": "PE6KdK8jABH7Rg8gfCa83ehJuy7Fo1KCW7Jg6Dg1HLjp15mDCWAwev4TYipr48jXeuwCf3ZFKDXk1HXyhVwfrx4",
  "key34": "42Tfrwvn1j1eSntSUwW5wZ17RJhV8L7JMQbzbmEFsVBXdsofpAoXoi6ViqxVYPZJzkZfi4ZLDqs9p3VNjfsnonC3"
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
