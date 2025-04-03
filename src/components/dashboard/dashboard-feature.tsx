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
    "4D3k3DgZS1icRvrvANfStvGCNyjQQeE1aNxWrtmrdBzHscLYPD1Zn4GSHomy6ZfvFjfNJ6AhZYtjVhiUUtwQRaMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4yTCaRCmLwsz33W7y7DHLLgBKaHJ64iWZ8jjNrXJan5bNoAJg6CDd8RJ5osdEfK5KNxCuv8Kf5Z1SULPHTddgn",
  "key1": "pwAjHCi6tJvEbZhXoRwGqrcovhmDatAD8jJmqs9WUXTx1UPj9eWNnGYBCx5eeC8VLH1PQWPX4JnYzQUeRMQFmrU",
  "key2": "5ZCvVnpQUUauJr8xduNAGgk8MJ1HdfYXhVwMpxHT7ax1kXimdxxPy4hExfSG7Sihet7gNxWj2y1wTKXW1chR9EjB",
  "key3": "2Qt7bVewcb6dxz4G6W86SbYhQFxAi2jDE2ZMi8fKYtisxtLkdA7qdGPQ3BYcF6EV4V99W8Eou9FvtfKMooc6eSq7",
  "key4": "qyUmqioK4aebghHZdk2bZeWAy4mJZ5kFz2FQVq2gNQXn53UCiQwx3KHBGyZsMmTKuTCjW1ZShrGeEgQ16rBYgzt",
  "key5": "5RG3iwSzGtChWi27Jws4mmXFUSHRc6xF3dm7ezcMkx2W8fNTTtrfHeYhombiPu6KEiXSATk4nfbAhETVrXaKwSDK",
  "key6": "2iz3Nvj7Rx6hTPFPd5U5aRvxX8i33RRzrKPp2tA7Y2cjueavgbyjCrJSjLfZAk563tYgDUQvj8RfLjjEcZop7JNr",
  "key7": "2UHju56EGCAfwGZvsx5aRVbUfKN6icz99dRfvgoKL9gJ2UcRLA1xBvNrhvrRciMqKe7WRU9rBdbxhu7C8gXPHeWo",
  "key8": "3rX9o3C3upz7YVxAr5g1MjymUiGo8ZdFW4PZu5SBBaPCbraqaWEGAvEVvMtofP51Ht1NPjoFSdva7Lt8o3NnPsiz",
  "key9": "5pyaLG7mE48SGeLUwi51LrdZoX2oaDiUULo443VEsg6NPmV3V7GrhwQDLnirDrbWCxeMrw55v9Nhn96n7B1Q6Y3G",
  "key10": "2UcMGEviwsMa5jkQEafJi57eCneaTmgCFMjeSXbmHaWSkGK7QLPVfZVUVFGZFJT5Yj7owjDnF3qx4p5MSy5X5Eu6",
  "key11": "66GQoz21XDBp6UhU28B8SpHNanQY3uH4kD4zwy4xCj5842Qy9GkQP4zDz6PjSAi1aB3nhsHzSPGVsFuEoDq1xVmJ",
  "key12": "2hL47e6iXJKTuQwAeVyj3V1J7Mint21Z1kSGReEAVCVvzScoHb1EbLtcoME7ySXJ9izLst1WAwLnaMCUtoxtueZK",
  "key13": "WmwaDfjBzUagi7dbZc78gNLMEvhrXbkfPGUUiKuQLa29a4SYtrHpEGrLwwrXwqvoqFZdmzXEVMko5KsskqpPQUF",
  "key14": "3kdAB2DE41R3mXt2jd1sdXt9dsfRxABPjajx6mziGhwoyAGNTSVnM2pHQy2MMkmhonRwARMVUaUozF9rmn9brNQz",
  "key15": "3M5h5kVde3dmM4ZGJMHCZijt4UQdvLAHFSeTzHV9GPFwUNRveYzPgQNh8UPeVTaXXSWb6CTKZkhzqDkfweFUUmkJ",
  "key16": "5W2L6TjznQpByMuwxoTRp96AyT643VQbv3zsQTRzcTocG4aTHa6WTFVGMFx93VkvFxKLvLw6QoqEbBifCjtL8MK9",
  "key17": "4PLM3mX2LsDb6nWYWzWiykU1scPf7Yve5vLrCuQDf9ABk5cNkkXNzXjaKZzyqH433SynUB8i8dnnnaCRWwYjm8rv",
  "key18": "4X7wEbdcqcjsXV7ocqiarDQJNKLY2vhWioCeqCUdPFncEWuPSdwzoC7nquTbw1tL9HH3zuX32DsAyvWjSPnxiCbm",
  "key19": "3gaPb8h8Ybae7J1RfUJcHqG7YZetwEGMVaKhWeKY9ZLsPLd6hAjsk651Q9CHy7o7QSMH7129bjE5PPySrpPFaVvh",
  "key20": "64E5fYpBsqrCbQn1wHXvHw4WecJ2JqyLNUoq9Wjf8dEfDmnzPdo4rxv9R3cX3MozPWRoZ26xVaZ9HvMaY7H5CHPS",
  "key21": "38oHC6fykY2MCaBhcBkhfFFxr85KP8nQQsfufNDCempvwEe8J6qDyDK2krGfPDAGC4hSWwP514CbCPoERvyrvzGr",
  "key22": "7ioUJ4c3VZqwt8vyfxT1N9Pibeiwrt33aEXfJYYywbW1KfRFjhnmsdPU4AXBNFUoZtvgtS48acm1fwR5P3qub6w",
  "key23": "2Bv6vHtBRh2KBLRZ46A8TuY84ARRSUiaqBZ7MaTJuApFgCbQDK2mCkYvtKBNmFPtn91GygsCEyptVHJ18LsmnB4b",
  "key24": "4h5FcMwwSSP5ntStzrogZwWSASR5ZL5AC87kDfGapPCYmL5HK8YJVniDNsyb4tBLgdWHwSEPR9gmmjrx4C9KUzV4",
  "key25": "4gxSRNfAiBfPUdhCsvKz6s6NMJP7x4WjoPXYa79oD8tJdBmNtXNZbeA1y6hHhHRtALfTBsxBAAfcJ2h6q42Kmwx8",
  "key26": "3aYcEV1z4XgEaKtXB1m4DzqEEjnxbe3VFhoR3bN89pqTnm6fkSVhpqiCApUi1Dp3nvcNVM85LLdrwYLXXaNrmvKs",
  "key27": "5eKP3we1eXvrNBy2U4gJ9Nb42nawmfpzyfGYFwPEj87wx3hFCR2PYwinZxVDoYK8raHBymywdH5g659pdTUsmRwX",
  "key28": "48jBdcdwmtcmxMTAfLkq4378FFbVbsb2xEFGW4eTadKtJhRypbCPvuPpe4r5oddxstZqKac9QMfQ4LxGJ3WLH8mn",
  "key29": "3L6bKcfGdjx8R6K5oY5QJ2ete5yYRykyR2i197MccyncGgimER9KHtV8gEDk4hhF1QdpTBBswTPWNBqBNKC88e4K",
  "key30": "4NGtHqLu3AFi4G8QmN5kRjbPyscGvcXwR5N98UT6rAm1Nit9jt6348uxXCi8qqSkD4Fc9YNUtf1pSm74zZ3cLbXq",
  "key31": "45KuSMcwF37Y4oXwrNwXG7b5RxBJDW8Fz3ynHqZEPoYA897XVXRs11eDpZH17x5hAFYLLmgUL9ABDTAT23opRpMA",
  "key32": "4YdVvFRLPuq6EiFVRPyDBV6mbfcVSbH1VRjhjV9MkFJiVdRK7FezChi2YPTSoQvAV5JSD9qWyVe5VmKp2tJLa74a",
  "key33": "kNFzC2cGPuLwYJ8jrYdQL4YsE1buMM4kfqXViFvXzzLgQkjgrXeUhsoBDpqThKPpHZ1HWexouDi7877NexHd88h",
  "key34": "5mvQX9S3TtEJEyDgzoRQdc5PM9VHaTU5ERQUUHyyVV6T4KvqhwJePJMu2t6r4rYesgxVvSK8VBzJGAKABmaQzcwR",
  "key35": "4zq8cHVphiSUG1ssDhvN12Y7oKLLP59BkYTkz3yoeLB1DNA62CA8vL32g5WcXjnva2orGGuopxG4SZBi8Tn6u2GT",
  "key36": "2vgKzXFVQWtnH9JRoeK7uLby3Y47GLhAfhxJJFqfxgg6QrcsShBWJ3YXoWguN7wVqpb56UQu3vC9XGhRwr3t5B19",
  "key37": "4eqwLHKwG95oNYM9xVm8PcbuH3dL9ABKCtFgDoXqBsBLWJKvb1ZKuKR6s3oWaKGKyeYqyMFUQspLXAzYh8NyCY5S",
  "key38": "4mVorgA9Reteqdi4tWKMQ6mZLYDNuoWRPHBoyukUE75mAe3sJpvfMsedASdWwP4xoy2225Z7C1u9E2pHaBjmsVfR",
  "key39": "5jh3VXZVRVzvYySHSqZuWznNA2dz1vFQpYMX9VH5UY5Qj8AUCtifGmpLgv1S7v7PSdUM2zbQr82Y2vmPqLnA3KTJ",
  "key40": "DeioXSoX3KyfZ8Q6FxQsQmHSF49twn7z6ZTkQGec9PrAA7rdwmfnU7LPg42QWsWhALdfzkrqjY6yzwuLAJ83Zvn",
  "key41": "5Wsvx4pqEetActJ9nRzLVy9wqCAYa435wDDScKsgCFCNjSfmY5B4nX9UhXtstwGWBrdvRsuHE8XVyYKE8FXSQqER",
  "key42": "22C1DzQmUtnG7mJKVSmsjuzw2kjBYY6Pni5xZrGfTPFRVDqDzrh2CQMcc3y4vFqWuwAMbToVy6u7TLvEcqHfT53N",
  "key43": "2yQttsr1tmAX27c1XruKdv9pbm8WmV9kD8LUuHper48inNtxVwBmPSAzWSNby7FLYKVUppARU3gAMqjnSybYycEn",
  "key44": "5cLnNiE6JGbr41GmeRooek9R9mBne1GYeFEjWUss2WuRJWBcuZD5MeUTZiytFnASeKLfvKmMc2wxwmMvpxeisQ5i",
  "key45": "U1NgoD3GGf1aDsKd1NhPYiA1H5j4oaQi4CNSRUbAFrzhmYF2XziFPzThHEiuVBrcqTYeqftZ73WNLU9DW69qfTM",
  "key46": "WcuGEvnzLZ7LEAaNxdfprePSY4SY2aoXt3f7fV67zaAvDomisEMEnYWjMkA6geoFQ4zVFyr2QJxbTwYf9vSwRmK",
  "key47": "35TrjEwdAHuLYpwmU5GnH2NPad92vDWXDF3joAf3DGDvfoJiJ8AzeaERjk5VWDYdQWg4BZ37qJQY7sWfNoJdHSVh",
  "key48": "4on4yTW3fsAFok8jJChbcxoG6PUXKvUW4PPMSLM15v6E6Nyc7L4dj6XHcWf7bM3VLNFXnjnGPirPukv46n8WdQsx"
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
