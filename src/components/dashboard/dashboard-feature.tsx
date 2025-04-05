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
    "4ZtsiAW53MAQ2Yu8hv7RMkhdaZTTQ4gyDYBd4HKXKXemouzLFhSDJd9JvGr75EsYf2v1b4r4TmvRqAm6vMA1tHi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSQCCZKtewuQVadAX22ckrikPJkiYFQpjSJidugFi22Zw68L4b6X687dgpSs95NJBCVm5vC6E5vgCiiYYCgfmaT",
  "key1": "4nQzftsuJAABEHe1S8UEerADY9BwxcxQdxRS84MbX5LXktEVF3YTW7hvSJWYFShMczKgzkXnzPWBzPNSiADvPjBc",
  "key2": "3ySVDEypi1HGfpNhzv4EniP2gcFfWtCe8cv8m714kmJqMW8kEEX8C9eCipN4zas5utnyWTHqUCtBnnYFbsJGzgS2",
  "key3": "4X3dS66gN5RB9JEyTZsWGc1FK3q7vJGs6swG2DcDvzeRVdJYn372AizRYDGKA3rEMFjyUfTjD6noat6ntoafRzRW",
  "key4": "4vv9gGhTTTncvGGTp3B2B72nvnvCNXVzJuTRmHdFZTCDBd5twkjBwkXTU8E9joWew5VzZ2cq2gEXF2vJx7L9t7xQ",
  "key5": "4N8Q1YMUTSxU3CQuyekJzwjfWoX5zJmfPmRGAU89mwQXTeTUqUb9HFue1pEGSiVrsmHv9JziYNxX921vLvcxryKk",
  "key6": "5LG9q5uguHqkAQhsEA8meth1HHzDq7Bk1pSVmPF3kQ6HaBbzTi81bc4jdkiWtkuAbcrWuhzSuYFUxdQGzkyMcjAj",
  "key7": "5GzebLkWjBPLNv3GXjy3hxgitK9RxKyu7Az8ai8sD2PonAx9bgMWWGKRVJCkmGa5yU47oerP9KXyRBfCXpZ24MeY",
  "key8": "3bCHPWRNhVyERymuGVMCwun5JnRCRcMf6i2L91uX1FF5hQbVhjYr83DzKp8ggJPKwJWADm2FVebsm77CYEgtNFcv",
  "key9": "3R2TTVXAkpWHxC3fUH6jqqGDG4pHWqYMQQrjCHe2XzvpFZjhqa8fh1ow7H5SXSHcPTT6Sc5bXW2nX7yUAGyREcWT",
  "key10": "39btzxyyophbuRJxxnM3aoUMKCoDcgbukjo5SjaiiJ6uaQDBRyCF9HGBTXBbheHudxZEWC8nJS4q5WyyChqnJ4Vx",
  "key11": "hCttrnwE5aDhkp79QwmxJUhjrzYAVy2N61s3DqTf2QHfVpy4HSygWELQugetSsBYHmLPemUV84V5ab7uJV8GFGj",
  "key12": "45QNUvYBVTppUvDme9W9gJs6ZdHCzsMvxnjQ25hq96MjQ3iY74NxG1Qfk5FTmekPbZCTZpQqrb6S9ZiEUvmVz6bq",
  "key13": "o224u2XQF6XghL4yS1jGZz9uhv83W4vXDKzwKcYKgJbQG7zAkcLL9jvrkCKYtGAHUAeaFyxJxpK1Q161U57zPy7",
  "key14": "49fxPSUw4ca5skhdDrrd727QC4MvFtdkXSAcmfNuD32gcbGxHEe5qutmn5HATj1Htge8PSURiobvB3XM3zhPpPs",
  "key15": "Jr4TnuwMUrBRiYHyik4nghLjNiXLd3rZaqM3HNYvdD9gRdopY86PXVrmxDfPmX7ksGPNG4pq7K6ccytR3xE57bG",
  "key16": "4sbtDaYiYiXKJeLQD36RnCfZd1zz1nx79nVjw9pse4kMzK156qzcZGXJhHfBFK5EyoMzr2JNUhkoEpM7bkPZFWry",
  "key17": "5aqWiVwFne6WuKyUfjctL5YDCkgSYG4cepAWLnPeErdkQbLRru7g1kn3txocsUzApdnaLYmNHCQGnwUuLxTZAKJ9",
  "key18": "DwBf3eQcCVmrTosFP5QmTkKPivKZE2chpdAfviNqyAr8YmdQdAAacCg6EuokaKkXVNUjNX5K69Us928fWkCwrFs",
  "key19": "2EcEmaZ83eJk6uawZfAC6MiZW3mLqjPnopjKG4N3zKCgmPTZit9cCCE5A9J6riPNGWriYAQbwL4yiuMDZAcTxvNb",
  "key20": "3NMFPWVzwzVZQbuddugmAZY2w245LGSU3taAvNG9NLmcL1S1awHcnB2JUEaC4LNDyRT3mf71MXYJYucNRNf3Ubv6",
  "key21": "5DTH9zpmgQGS7nGu6LDEm2nWZK62gkkiWyYaLVTsKgbRTeAN6ihrajr8zCAE8ocUTJefnnZGKUNcoba52AGvotZF",
  "key22": "56N69UCPMmws5xCwahJECECeRGYkoDKbAPJropHeG3M6ERpnEXD8D9jUUcq9soJdGr2HYvk6oUzFJRdwpKgjcoPP",
  "key23": "uVXZoQVAYrETn5QLhtuZ9b9Zna3V8BKVXBTf9btWCUZ4H7mGxtSrRgfvjgAL63Gcymd3uMdPRpZfTPXPskzv4Ld",
  "key24": "ZWnK84SmKRkR5cDdb3Neg1PGiKKUVF8xJpd3C6icuRzwtgxk2SeNKP1EXEZgy8Caq61GfuSdVTWCnct4J5nonnP",
  "key25": "zQdk5KbQTYZCS1PvFxrN5xa88LP4UX2RFbrfk2Uz1uPYRot21wJXTLVymdmjgJqrDqdz2p3uCNz8dfebgRcktfn",
  "key26": "QRbv6PCLgqj4ZUGNwkVVUCv76tJ52gbNJEtYEZG8pRMbvpd6ti1HHCcQXpGXxL7fe7QtQiKHjBX6JfYHSDZpwdm",
  "key27": "4L1muYYHk27HbmPobi5soW7o4bTCwgBDqS77UJXB3ihsvHhL7xib4KRzz2jeQ2W9KjvxFrBQhovqHhzx6C2kjbxB",
  "key28": "5ZjCcVCpqS29tt4MC4r6KeXfMX4GLFxW8RBfbxFVKUTEZJ31znY8SKQd1EbJUjYK5MAfzwMUyeN2JVcyUWUu3sWW",
  "key29": "54W4U4NbZMYheTEX1qQScGQmtpMEfZnj3gz87HrCw8kgeVmv9i6LV1Uu1a6ChFquLygYw3yx2KTvUvS1K9SeVxLM",
  "key30": "5j58p6o9XL2Aayrt8oXvVTN8kAt2yniPqM9TFu5KtCPLdurAhXzsFrFx3k5dRLfFRNZhBgN5Ve2WYqGaGMJomHnr",
  "key31": "4mqGgX5ypHvtVrAs2DnSQq8La9S81vncfRp2dPvzFPsbJoxBScHr17oe8Y3TSHaZZXMAsYWyYeo9AWS5BwWYLL3J",
  "key32": "4y5SC4MLMSScTeUnUTuqNUDwryH9BuWUuh2H1vM3HhZwMGV9PzQmTvDqdmA1bxoT2N2ut5NARrm7AkZoGV6uG71e",
  "key33": "66NNr4bGCDQjfGjWMd3bamL67bPcCuvXtNJmQ6NFGipMFGmEiA71UASprZ8erJhtoNFaU9LsbYuFcumnHWAd5bJb",
  "key34": "2Uo9zqcUukZmc588dBRjxqr3TwbXWDn99hfngGbggG9wNKSbsASWtVDYWcqHsK3K2q75g99KiJGuKX7M4zygZxJy",
  "key35": "37thoyNcFTKkesJZ6MaR3SNB5rpaYSrEFVS8fvL6Qp6RRi5UhJhxU26ZQY12Qbt9GwHqejxTfQTJUvFw2RpVhqB1",
  "key36": "2igh5yK7BMdEtHS7s5Ug5teATrtWfZw8Nx6WB3KhquwytrtN81vdiLT2rxTcrG7Rf7EqWXdTfymV1qDqMsiYVsY5",
  "key37": "3YVTEjxG8V6oxWwJvFUmmuNsUegLqBsZmNM8kpixW9G1dp67RDmMoBMhDy7fEuXWJUskV9Kp2drb7cpHYXtHF3ZM",
  "key38": "3SATU3toBv29wFfe8CtFiDD7XGVxfMxuAtsQyjdzYWyEnE1GQR9maRnnBFsrwZ7BWEkox7TWLn3RvnDrSBr7eZL3",
  "key39": "3sYiJrXe1fQb2oyPKwx6pZG7Uh9Rz9RcBzMDtfC97LAjP3wDCBvqDDAF6azDa4dD5DG6ecAMYbW474sMchM2dBmC",
  "key40": "5diEKygC4hZv6MRUfVVdhatcfFp2DJHtcLRZ9HbwxZkWHNwbBKpNtaunwZUFCQwDthueKumKbXiz4HsKjWhg4eAF",
  "key41": "383gEnNrRAHZNtuP5QZCrDmWvJuptFoxkYMriW1dsF43drCRK2A9mx2tfQH5qPaVCNWXPmsMaMorTcPgRGteCCGZ"
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
