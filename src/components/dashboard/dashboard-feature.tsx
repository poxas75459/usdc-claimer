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
    "43pTGTZwXgRYVd7KRUDYYLerDnP4sj4mD3pN8ndL1DHQ2TS3zFwB3o8WjwMkZeuuviB2du32fEn9HrHUrkEPMR94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpvD5uwz8ssb6VpJUfzDGPCkUDFkFJ96rWhqckngZhfr3LoSRMu6Uw9ezBYDtGQUeJN24CWPRmqaMXF7zhVBTun",
  "key1": "2u3QjWwWfo2UnggzXf2pUA2MWrX4JWf6j8rqsJsyHnjX2n47MXCN3yHV6RqjpViyhYenMiYZ9Fv8DWZ68XwzmVed",
  "key2": "4BggBrN5eAq7CpEfA2DitrRgq3ftnTsdtrebwZKL7pFgvtDvGTeHbncNQZnkndCUYgXih6cKobJAzAmh5BEw27VW",
  "key3": "3bWuzAvevK5yEyEm8UB6zCjK5dbuuXBHQ2fZVCHqZFqLAeWUaoz4D1UXVGDfegL2hLhXFfhLQJpxibg6iBmf9jWh",
  "key4": "2ecqSq48jVyQ6X3kBgsNBRdodShsLQRKc5Xd1SAUNL5ysE6Y3GxVtv9YHk7SDQMUGpDtATyyeVZDPVdNsvwKjkfT",
  "key5": "xPSqJ56d7uA5gpF3Gb34k5nMNrf48G2WS5xPrb8afft6A6gPPm3WZ3HyjtzYWCo5igVtG9EKAdjtzv8KqUsychm",
  "key6": "2K2QRoB7orRTTsLHHjccUVABmpaXhvxhkGCrzDijcwikdUUCfJZUVF13mPKaGFiaxNUSJtSDJdTHZNkrqsRy3QmA",
  "key7": "3kCv8st3T2t1gWFRCBSjsJdxG6p1bCfrZ4gorLYbM1n2rJcxpVByYRomNxEBYajcCf5NeCHoCguhTnPaJvHhb588",
  "key8": "5jRyPab3qeNJYVdYJswJeCumGNGxQyu72Xt4AbsPiozxGwkRbeQwmveGeYx71FrWYejGr8XJ14YuRDrzxmj4F1Dw",
  "key9": "2aXXuH77waLBJ9XEGxZuybUvFzHCL171VYdZr871fhgjuWARRGkHQ5LvVsSR4ciyBpVmw9vTvUzLs5GSk9pSvYYV",
  "key10": "2QCrnj25KjWR83dgzgju7QVU4pHhtzgbb6SnCEQzhWAWVW5Zfdw3sD9hqXvPjZoAhkNbosDXHV9tH1sxNAbavDRE",
  "key11": "a7HbJwTBS6iHhLXU23xG389ykbRbsuA6oHchYy46A4GQ8qsCfPNqqiG5G2BhXGgXiiMSy4Gq7uE4oG5SJEkkxLr",
  "key12": "yyB1ghUJfpQHT97woeME6mrizR6HGcXFJjb6wGddXh3btsbR1n29y3xr2x7r1oLnnLHmqi4XGdcwhRZGpfHGiAn",
  "key13": "w6tK7xLsWnex64fPPs3RvRq7pTDjXVSsjPehoqKUt1cWcweHDEeZsmLsqxiBTtiDZCxGBZiaSRiGLQXFdaHKN8C",
  "key14": "4ZmF38mZ1nJkcmFhBVJ6viPQipo6aAKRdncqjmJox8dPdpaqEtDighJ3VCfe34UMyr28dSvrScxMZJRj1W7ZyYZN",
  "key15": "5ATNUGRi3X79ep6We2Q4R2J4G2m9JP8NgDeW9x4WzMekywDwAbhQ78tFFdf7NBevoz5DzZLXTdwL9Wmv8aXs8or7",
  "key16": "4wiwdBQwyVCmDe5ptmuq8Z8v6w7bGcNCwExfBdSwFHj3sHdiQTSZCRK6C9Ep5xeWjjgRWLK1szdFrnYkcZDMUznQ",
  "key17": "kMWJHH4so7wLPfngRNN1SXiprEE2RxWBKG7MCr6peq1rLHhDfeqDEfz2j8kF8KvZ8brTr1ZJ6bFhpAbcU7DG5YF",
  "key18": "5GSqBJ6f9Q17QGzcnnnHGhPfEzwGz1aMD29GkgK8drqtirgjUsxMsoMSEi3M5xareH6WkZxWxK1Gzm4qNQMoPb7n",
  "key19": "2Zxnp4r35skGxqF8NdSsXwkdCnoWW7dEaJDTiaf4xvUbY344xPnc6iojo2ZenA2BCQUDQCmdXn9kypdCH1wzUKMq",
  "key20": "5qkbizeUX5RUvxyNcop9VnBBSyKPoX4SUrr9KacZCrtHNYCHVDRnPcty1Jm1s4VQaqWfnmDVRxRwH7gmWexH831J",
  "key21": "BW7h8BTGhQxhWPCWx7ww64hSGVMeUw9Kc4CX4hUmY7f4b5osr2tVYcHZKSofrVZ77m1NWYRGe2sj6dN9evPbB1t",
  "key22": "3m5USCen1xY9uoJcA72NMQ8ho2uiuKK39xti7Wd5iawWJjaQw5HvW6XkcJJopwp7RGiQWpuu8xTrrZnck9P5Kz6U",
  "key23": "3Wxd7xQoSCDoefYeLuWK3sauxTQAredWi8Xx9dMBHaWLyJ9UqYggp9ho6JNt14XGPLxEyEb5BPnMFMALfA5p3Nn3",
  "key24": "4d8Si4mHzi7JsVMiZK5Dthc53kMKP2m9iqft2si7gQGktEudXBYS4x11Hx3LQ5zmcTq2EZikYgdeXeWxZa8bwxVm",
  "key25": "NvxqVmwmep9a7ah1ghby5SLh6Y8Q1o94hXTJhTMnGjNrmWLw87X33C11cjgTcbE4tKBTfvym2wFkQFaYRT4E29k",
  "key26": "4cu44sPrK4fRn3jV438FyunxjLU7fWiDwhQ9XckbbudFNkyUg5agb35ZYme3D4jh8SfJi9ZMNjrbvZ7JaaosqC12",
  "key27": "qY24tqpqkVDVofYD7YebgiCrgwYy1YwSzjjuaxrH6EKsHZSDfdd4nTTc1x27q2zKWPow2mrPMjwoUh9XhjmbS5X"
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
