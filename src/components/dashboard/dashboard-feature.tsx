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
    "3Eoh4BoRaJUjgHh8w6aHgJYvhBQiYJJNT2rN4yg8uyFYzWPsDT6yNzvuQazttSWeBmuGyntVnfGb4UmpAN6hHHVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vTgJUTa15w4rhjhv964F2seR9c8gBS3qzUPrCbLQEkLJZo2ereL1LZnnxTb3rSxAd6xHJeHPhKGnFdqHpRWoex",
  "key1": "2osR1way5Psvr9JXqNz2yhKRVxVLbTzV5LUnhGLwECf8ZAvC9bQck7rejVoAGXMQ3WN7mzjxPgCjVB1YMKm5cgYn",
  "key2": "3eRvsRU3gjfX3ZPT2QweC4Q7d4UY2VRuJN8nbttPStEhMz8rTDnyF8PNCHGSMV4UYvXQ7jcL9fscnxEnbpibC44C",
  "key3": "4Wk8LLEh7doCU27navEAQYZ4spM8C89wjaWRp7cGZeMuW599SUSb7iddYuGZ83a9wqStDmqmfLVBJRYufyYgDVcm",
  "key4": "PCK2fvrhxbkfi3X6mr9GkyhdJSfHYG29FvFTxQJ4MchmyZGXAMxpE7sL956XkiaWGr5N6Po84USYn2eHaSJZFWR",
  "key5": "5SNDAEykE3UkVMQs3GGvJzaM2MNBzfY2jWGD9rTavzxENeHwjEuAw7v2iKomuBXzeqeY8Asb3bH3yNbz5DnZMoVo",
  "key6": "5qJw8Gbgr5AdQefduKWWL6WBTQxcgvrw35CSLKaAdtZk6so2cujiEUkFBMvLeQkezLReSbVXx7qh9KCrquBob96A",
  "key7": "LNUqgCL7F7MZnNNYiAn2Kfbx28ZVuPjapdhSke4pDWkaC7DUK8CQcwDBUFKTp3JYJieozr9KvxL2tdvzCff7ARE",
  "key8": "5XDpD8QxtzqeURFzhWSECnu89QqoG7gf7WWXq18dYFqoMXVWeqRfyaE4cw1jTZSGGBzm98XyTF7o56Y5pP6SAjyC",
  "key9": "2TQp3722Zg87PV2piVDdYyYwrvyCCYvdYrq2WiHNeT5Htc979iZNHEFWoCmYnsT89pGKvThHNA5pdREuivehooft",
  "key10": "Scd5kHfdK2KZN8FLBuoWBftaCH89AJsPpcHqaJjVZ7RPtw9zokWVJxT6QdyAJqH2wZmqDFeDhsjSg5EnXC5vs5h",
  "key11": "5dBs3GJvZXUBQMQvUwEmJQhaszuK8toKRCUPJRNYtPr7Yhe1HC2XXR7Foa8iLp1wKgLebewKgtM3cxaykC2FWcPv",
  "key12": "45TkzZ7V2nS8dwQ5DiNuaku4xk5s3L4TCcVQh9vojxacjkjXczrNrM3xDDVqD8JrHY1n6TJSqkdtS2hkytCDds2A",
  "key13": "GoiX8EA9BNV4yjPcu9bFb6bJEt9VcDEiR9y2okS2aG5LtWKjhbrUcUi64NR9cBUXa1z2Lt7sfBNMomz64iSW5PS",
  "key14": "CwPHnsxmSsjFwDLNKBXiuCidH4bC1Ffbzc4Rj1ox9NG1KB5qVbLUtfpGFSswhmUYFLe9TeNN6jBo3xiUSBbgZSC",
  "key15": "4aq58QBttRZGng2VntkEwKJ3nFi3Pf9GUWJ7fEETdRUue9YbiToEfz1CVcczG4L5mn6SswMhPt4erfmN9T82wkdJ",
  "key16": "4Xi4ZxND5e5qiG6eH3x8uFJfRGA1gU279P5Nf9efs5RdacFK9XhGAcJ3WjrUjWdW5yU4inBLz2cdn6x3LUUuG8Jp",
  "key17": "2yUhSyGG9Dd8BhZfND5RdoRBhfTDExr6TWA7K13oWfhK9kkSBrfisXfyWpdDfuA46kaj3prWdpGvhPHNpPKR2Nsn",
  "key18": "23nws2JwJQe5znycCJXUUHHLqTPauuUv5mnhKgwx71kKW4J5NHkiApNpNn8HuN17WvVj2tKZjYEa5Ab3UkiyvxMQ",
  "key19": "2N2Y2pt4WkRVwzLPzUXF9Drhkb37j3Kbmiam7zU73Vjq7cTEpevBXRTzN17nKgLeyUhhp1kyQMU5xpyAGJE6UhFa",
  "key20": "Ct6mb2nDTjinY8kLtvzwfLRvaU414yEKby1VdPkgGh1bqEVNyXuw2aLZ4VULgS1SgBDcbkuxmtYWeD2Pf726RLL",
  "key21": "2k2MiBpS2EGHida1WDMA5TsAvJLHJxJVyykk5NP7yRDqHyTwawH7D3akW7kzZ311SsawsQdd28ML6eDTMCfQUTZ",
  "key22": "5Fxphk6nSSZoAdEwDMSKdz8MzuPPmhMzi6SkDCvXeuyzAc8gpY3t96jjvhFYembcGVEdUB5ePdrPc2ovxigBwHRv",
  "key23": "4kYHS5VFVx4jubAzvg2RCTJry52RbaxVGdtEGYVBuKh1oMeyo3VMrEuej8gSBRUXdMNSmmKa1kbUSLtsLrhJyZA4",
  "key24": "4NGD8Zcw9G4eZMNDP24meKCoMGffXKXgtzM795a1co2i8NoTayUMZNiRUGNSAnsp5rGq8gSjPh1Whb4a1bsZ7tq9",
  "key25": "5iNJdRRU3a3h65Y1CBkzTFyz3hcgwwyFbWqQrsmFKw5hHMypeqmFcxa5AbiqLWrLdtLS41EahS2BsBS5p32HviGw",
  "key26": "4EwErvSAHDWXPray25TLab3mdi83rkKGRqBcdY8K39EsV7LHiRhbsSdDCRzVaBKMh547tf7mZiB19AqGMrSp6DJx",
  "key27": "2EG9qLJ2uBCEyzZdZhbBv2aiYx8e66vQSUZMNC4Fmxggrf7ade7xbr9UGYXNxR52Ux3wZXZXoMxhDxLYHBSDAJPE",
  "key28": "5fFXNQLVZCJi1ivV89Lb2BD6dbuGU1edoUy5PcT3FkeFRKuVVt65AJjYgKjQTSsnnLr2tuZikbZqNEtchxSiMq9U",
  "key29": "2Pv6KvoEQQcLMLBWnvvqYWA7Sm7Q6RgEo2ban5RpQ99JZ8fKeoZ9xPpZtz8hLyLLdWGZBbAtHFxAErsM3jrQqXuv",
  "key30": "37F4TR9JheeTEbxCrPunNPmEBjsFgi17zzPS81UWEHfjchWqvLD5zxmFqVLvyhRfZjUpixTaM2xzYsstp3PoFzfE",
  "key31": "33QSPAdeB2Po7Nk82cbBAWafSBdQFXzfW1r32Mm226wPZ5qcHttejo1o3w4oaXUe9anWvp6WEdip2tQn6VWDNKwm",
  "key32": "2uZ4RvJC3jTLVD4LfbtcndmChkvqLtJKtQSQW6n8Z6PPFBx94kZgqjoAG7dky4S6L811nbiBREgSBmKbo7yHR91T",
  "key33": "3DNqwWQCG7Yb15KfxgUUn7gY64ymXpbeNfMfq5CzirwSsNbEY8p6fgN5RpKo4j7EPWPpg3LBfMLvm1SnCdLzm2iu",
  "key34": "5kRTmbLoeesfb9B3rKfvcyrRhQfY9AQbwv3LZD2tNKyM8ehc5m2kv8LoPo7UofLygD4bV4SwVsmCpJCr6v46Vh3w",
  "key35": "2gm7BUBM1bdvb88VKimSXz3g9sR7ffa2JbUkomMQRvMe9Ksx5cgBTfk86iKFbDtTgRdtKayWvwEyvxKCT4RdLJuD",
  "key36": "47obd21pMtLTogbjXcmvi1XawW6Yx9xS8UVLjPu3VHFKmzmuHiwfjkEriXYajzaPbGZYeRYpKC5c5vGsfq3TtoQY",
  "key37": "5KD9FwF2AEC9panH6QYDjPH4UV2wuL4PJb1feKxvXemBLF29NqdsdjecRMRvSB6MPoSqKfgyMUZYaJ3rUaq9Y9i3",
  "key38": "3iCS8SspJYAouUurFxAGj7pw5s7TAYEXNrsGRuABEdjHiwmAc1ZuATeCAihigEedT6pz9F3CRYPwev1vM3fYLhQQ",
  "key39": "ErBd3w2za59WMKVrG2b89mxcCDBDYuHvPaZRNq7raWvxevSdscUHXzeW19Lox9ZETQ4bsgyX2PJmWrWFEkyHnhr",
  "key40": "25u286vTCkRUjzHEGFC3SqLGZbEMwRAVHfxLgXxCuB9cE4tWGwatnosJ5Biq6sTd82nQCMfX2FBYYUzvGrVxEf3H"
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
