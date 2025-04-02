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
    "5yvZShan9Pgt2oTBtLi9NzWJSWB9JPRF6fyiPnD77NNXEaTRcwsWHmntAioJztGCNLkM9B3cKCZkm3TGugCpVTaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJtYr9nTfLFmWQcn1uFr2mQk1TGyjadw9nnqZD1QK751Ayq8LN14LYyPDD3ibv1nHqGXEyq3CvW9CbjkxFZkiY6",
  "key1": "5HLiiPj2zJEhgDuwHu1frsEgVrE1YvVhnvbtH661RXGHRQtV5SPyCBkt3athJTF3JAskGWDvBksF9Zn1bpH64L6s",
  "key2": "gDomKkyuCjpjD8kGJfMUsTC8AdfzB2ePp57PLLqgsJJas1yfjo1Tek6298pYt3ThwDZaUZV3q3P7PEpVPdmAPyp",
  "key3": "3Be1F5aJE21exnRJEQMudgiSSxsjBo9UA9QM8N6CxH8MQwniUeA8RxAuCdiN6DPi8jRkG5AYBwnmBPYkB8L3wXco",
  "key4": "utJS8nMxAbyGJG94bKdNhbHikeus9nQ4WtYJ82f3T9f4t5EVACvQD4q1BdCybryCenoabh4WyA7bStemogRq3ef",
  "key5": "327s8Niw3LE4F5SZKwczqjghyuJxFBNJc8m3inTD6gkisqKshQHsHW5KA5RWMgdLxEiaGm93QEj4LqXNK5p23RXb",
  "key6": "4W7Ee5W6U7U3QXZAVU788u4cVoebp5zNLEtNEnmddwbGgGnM9kRan4KLooQM1nhZYdaDhYgQqnR2GRzGWGdTCkgy",
  "key7": "4gVUsHtikctisNAUEJLbAqLRYAjPsWjZkwyfXL1kZj5VpWop35fjoU43XpuoxRN53ki5c5fv9t6CznYUgUNeiqbX",
  "key8": "3cSxHeo2UQ8SqdMrEAv7RqmCddthJDXmcCL5pgfBN7MCLkGodZvX2XvJ9Hhc1xFzfSU431VY3PbQGGKoECFapsRp",
  "key9": "5jCSwK3NHT492jZHgUYsTFsoTTcqUQRZnAzub1tWr1R7pAd8ZWvPrgGoRPh63NYVwbxn31cxcNERhCjTrtgn5sjM",
  "key10": "5UnhCC2xdVNaw8xm99MNTPc2Lv8HE1dxp3fBZVKk3qvGhA7KXJTcWbiF2r7wfAGNLJbCMPdPSYhVas14Jw4gYExo",
  "key11": "2XzJ6zSrJ7ABQ3tFfup187NxcVJZ7Zyc8q1CJRK6uviB4w243UwQ6ZAvao5kQVUguvQ5kVpr9n3Rc8XtFby8XFo6",
  "key12": "5BKx7jjngeDxco5gL6mDFpp5RajDC7noXgGnhrZTua2tH3gYyC7bjEUjb9RjJiU91ahs5LgF5PrEBooJDJ4FFecU",
  "key13": "38E1EP99mmQdTQVzwjsLiSQMBtNC7bvuh2kHRZQvVB89zYPLv5H7T4wpDmnM4Ap615NgSgp6dKgxEJVx88cLKyoT",
  "key14": "4wCRLfXxw91bqb6kkFyBJgBMUXzrAZWH1xdSRBqDq9ntQ4yAUwXviXePnvyxYCuoNuQCn3jCP61PV1ibXd3jyaSb",
  "key15": "2ZiNqMsa9YpaZujFUGikKAFJDLu5uyDw8Ny8XEw35aHGvU2QvLaNoj2YyZxCZGbqN3zmKUBJJXCbyTQbAfHPB77u",
  "key16": "5L3EX1nHPew5kGqeh3X3H3oQTcUzXphC9xrHGHaxsJbXc8pf7E7Xrc5Qwjj1HM5Y8puJkCfdKmfS2RUmgtii1Azo",
  "key17": "4PMCkGhVtWWtLDoepRpet1cjZupSUmMywWS17WLm34ceXQqHTxqx5nBWTronswp38nv6AENrgxH1pj5u7YUFpBj",
  "key18": "3yJi3XKdBuJSTzAz653MKck1DtkfHNc84PyX1MyxJwWjoUWzpHVBY12jVR9d6MZdwnCm2FEn6peFGaLrfD4CrkUd",
  "key19": "2ZYt1Mg64bm54LJRozKcY5tAQtrDihFeWGvkSA2ekVKnxnzsaDtjYTKRvMY5kcEEo8safbbSbiGrBZJhqjB9TAG2",
  "key20": "4xkj6CBJsiHtWDkVNmeQDwGATe8p4WRQ6Qh84rbnRScXxDa6LQ4q4pdeRKKrk9eXGudy2W397WSy6Uhvx9aWW9Gh",
  "key21": "2adGrfMDtKbYdvDPNTRodGQVCv9t3kGAWdSsVMiSyBBgwG3JgPWotcoGKmaKFMPzJPRd4yvpAMKA65u1ofRR2bbn",
  "key22": "53Si276Cda1MsEjadGNW4LbGLg3cpL6RdG3VddFgs7X14cDJyyx2WnjH1jQUYbpqKNPhx9ABZFrZSRrWXGEcYkah",
  "key23": "4enZifLcDNRWho9a41PNKawTiNvRnTsdi3nSM3cwwQ1kce9dQqVxpj57ZedUwzHBYSgPuRKCEMScs35ddEjxHdJU",
  "key24": "Tz2ykUcAHsrVf6c2YuTDcSC8nSnQ7KKxctcjNTVfG55eRMqdoC4dW7tcMr7Kf5HfcPjSsQeuH534nL7PVJywUnk",
  "key25": "3LypZBVCuj3SMn18TtQA3psKgaz2qHjhDkEQWN4u7iYkABerGTbn33Rrf6TVjL3aupssLpbnZNRaMrPqoUnmgVvw",
  "key26": "4TYA5HQ9UYPksWpB6yB4rjg6TBwtR4dPDTkHsE2JrkuFoxcLezEsJTTUDQXf3nDfs67FKyhyvyeTUQY8N87KUFwK",
  "key27": "S9a6eigMBox3Hwp4pZDfwQogBtLPdGq4LR4Ns7RNTQNEANEw8YdDb63sr9ivfPRW9jnCB2KDRxzi7bLoKf8a9ii",
  "key28": "2VbXD8wSc9BwQnLciYB34jzvtVkCGp2AsgZLg3USmChoA844VWSZWNonzZHJFV2bWBkvJicQ5CSyyvnEy6AbAdwC",
  "key29": "5xrER2JraiZ5zVxfLt1yp8Tr3AfvaPATbn9tFAYzkHHnQCqkzqGqe3h1hWVDftESa6edYDyRaFYtcSPEBe1NcTAk",
  "key30": "2P2WbDvdntzGCgaRrYwRGhooHWWMunsVabztNM3Px3Jo7QuMwRsHPM6qvCDPSt6S5kNJP3x41PPFGgMS3LbUmCr9",
  "key31": "2m742TjBF5MyD9kwbDkJp8rWeyxSiX5swebo4biYXGkjetttJ25mJieSLveKVHgedu94LtyXprFzFg73uhLPgxTk",
  "key32": "hUYh3f6PXELkAaxy2q58zybC52Km9uFgMQ2WomCQaxsn64G3ywYYQuCzYBpj5s32KnAuqVDJ7EZirWpEStXyC3d",
  "key33": "2yvE4zMij9UaX9Aa3zgUsz2ZgSQMFVLoSBqMAoQNGjykifn9BqZA8ArJk2MWEoaSXABsJPYASebYt3Awp7M8UC16",
  "key34": "TH1srmoztMiVeDaqKJwCQRb7F7SawjL5fCkgnesfZV2wcjvDrsV8Ubp6oc3TjBiCzMDCdjNXEDQXSwMHyac7QG6",
  "key35": "5v5kzGioqvcSTgPBWmp5q4aQAsm6LgdG1DyPjMJwqMr8bRu9jEAVS9iDgXB3SR6JmZ6PCEUSXiN1RJdTa9XPBAih",
  "key36": "4PLC74vfVtaqXfNHqwewX6TurVXtYhRHCNtzGqkX9EzF72Sjd5YwseDyQAkErFhLtsVgY3qKSmJc5GG9ub91Enig",
  "key37": "2xuQCdfj3xBHYpq2cJNoS3QqqpMWBeDSg7C2XePnTfQU4BChjwHYCeqEDVwhbbshzcZX368Yfh3gsZfo44wGQFGB",
  "key38": "3cNiag1yrkPtkrka42t5gdEnXYhENmeRb7qtcBBiZTGfegbmU8aHXcAf9iHG3w78WQbgcy4EgZzYpPi9TEaTJafg",
  "key39": "5Sio7QzUPtzPfBD8VwxUryAtP3xTEh2rzWhhGeFeRWU1hvzD76Xms84NSmhLjLLxpgjKF5FNtgQ1mghWcStHVyq6"
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
