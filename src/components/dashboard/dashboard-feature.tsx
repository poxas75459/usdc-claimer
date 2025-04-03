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
    "2xajwKbuv4gvH36R38B5UPe21Cg9LGfZ5rEemeC4CWdu43Z6bEbhUP9TdiJfhsmvnu9eGjfPindvp9vLJ7ip3WSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdSQnZ2sfdgsW1ZyTC9cCmvKv2KpvxwBYYv8wFHvTw5Kv7xDjHJ6dvsHPw6W3E9uXn7CeF4GXG2jXFTJ55FggcX",
  "key1": "a1YkYkD6LLC2uYdQTMQnHpe4v71Hq582Hhb8wzKv7JeLDNMQqEewZ6a4vMww2wQbNmNeqaBBZFNjc9x16LGL5qh",
  "key2": "3UsgX2jUMRwZnW8NirULJtXGsFd3ms3ud6DVmhP5RpsHtN7XoFdWGH2UHzFCZpp16r7ah5ZUJhzQ7i2kCmEdyBZZ",
  "key3": "2nDgRAfneJy1Y5i22tym8NSpy9WcEwAiZZZSGew354iHKRb1C6Y4xrkJ8z3Ju2xQM6qX9Pf6Zt57dSEvcFzM2x6",
  "key4": "4CQc3mptXND9uSWMggpmoUWuGJm8g4Ro272xhU21YCXsnH9KN5osn3qJnd3vYDJJiKduLuinBrsganmKfeZsDV8P",
  "key5": "4DyKGgqQXxcMxM9Rjj3VGJpj9Vw2Kj3Niz73KuMomniUCFCPcQt4QxZbkjum77me8oYdcJ8YpqZdaV6uYnbCxCro",
  "key6": "4pxaFLhG63xKMF5azCKmmkxcvm29HiAvw8JcHH4PAQKGB73YL2XG4UnvDKfCogb8oUVywqH9hSP6HGceVVNCvkSA",
  "key7": "4JkQpWnVbCo4YuXJtoWWUZk37KXfubWydjhNDyd25yLSeFus82QYArieaRJZqdqxV6a9mzcjLWZjrsxbScN81AWq",
  "key8": "3vqTAvWXyJbBZ5LYdMuKhgFx8j79uawxrjMTfDbX43XEWx5B11nWbHApva9fTRvqA2iE1w2VEfm6Figiiw23HV54",
  "key9": "2uyVcBxLukouopgQe1DKrsjHSU3ccc4pVGDg11pi7rgtcML4RH3DtDQhkvysdDxy4Rv1YvwBeR6NLg6jX5nTuZAC",
  "key10": "5pRm3LWySuX3SNoeddS7wKWviBaWj21UiTXVJf56uYnCGSG49jH38wghG7S3kLz4MzNHMWEnJ18Z5uZ59uBiL36Y",
  "key11": "3hDkLu6WajrrDU83y4xc5EMGj2q6tSKoU8z87DPqMpZwHHtRmSyCYR6gPc18pSevQgnZKzcX5n9DNvQXbEcKZZPm",
  "key12": "HauvT4T9mcozKfZtD1BDFtxVXyv5dwDFuEevF9JGD7qgbCWt7VXmV6d1CBQLTWkKAn4dreDTFdkiMTRFD1giQUa",
  "key13": "64HjJHb7iWvxwadxVnD8xAKqwQfdE9FD2TdC7vurSEonpjNNeSbTUBJ8YFD1DbovPzjVX9G4GkASRfz41CSXrvGY",
  "key14": "jrM2P2eeav2dqnEJXSNprWBgznAmEtGjAgMmvrx3UfpFHqqTpjjk2UTeYffkWLgjAa1p44SdwXc638VTQwBLnmM",
  "key15": "4AfZFBdxEXXpDgJ5DztEMUgLT8wd2zbdoq2s5ztQroJqcycmYRZeAGjkBBaLr8PJni4kAQoPMoRU4C5E9Ndrcqrw",
  "key16": "3x5XMeYFjDNzmfbVLxipm2pHR4CEYM4Txu6dtQBZkwQjBfYHVDCyUgeHJHn2t8QjbstRSU3hc5ciGU5JjseS5Xry",
  "key17": "3Xs1AZWmrcNybvA8GoejzwTEbcr14E4Dy6dZjfyv2bYTMEMNRoPzy8sBArYdWqN5nHJDXCAPFgFSPmLzuaPZhwFG",
  "key18": "58suxULGA1TkF3hoJWygi5CLTU6Lk4pyQn559UtcWaYRt7iZhaiNcuEFJZNhEYzuiGMAAYv2cZ9VpLNcVhJ3SseE",
  "key19": "3wig4EqhzMwVdSzs9vYuTrDgLLqhsA53v89B6hftfReFFENZH9br49HeePfUKWUr6n83q5zSZabTwBjn6dzCLRX4",
  "key20": "2YSK6wqfEmi3z6ZjHNzh3Xb8QWcHW43a7o7uZQv3GgW4m5xkQX7W81YroCMf1GEkq9HdE9Su1QqcFDaaT27dRJL9",
  "key21": "3tbGohWCPA3pJoj3LJkwvAcctMkuPzPjcXM7eoBgStu1JvLYtG3WTJhqNKrsbDWQ9JEQzmt2U6n6YgXXF6PAM4XD",
  "key22": "2tifnTgGAYyd4b7LjQ8ueCRu3V5FnGokEdNHhjXuGmg9Hm7ywS3Sh6Qd7JZTsxRpXxVM5jkNT4JTEiDmBuDCfKz2",
  "key23": "46SjHUY3sdYcRF2xvzRR5KiA1VCFsa7VMewBe4eB1Vx5GJSq167yED9TkSZWJqDcKmXbNoHGqiqJS2tDZdsEDRKL",
  "key24": "2TN8ktagrczdNKVpP73cHhWbSN5jzZpNkyC3EXRceg6GPbsFEujwjKpZkncwHCpid9f8oH9o73rPK45vjNBWgPQB",
  "key25": "3ykL4BoGx7PDUcBJ5gBMbZNFpS25MKNwMe7dJPvYogw9CtF9TMrMDTssE9q6ufhSPXQyWmZH33pTm58hWKHkjAEm",
  "key26": "5MYreGF9hkJ6XYb6VXmy79vxtPjovcpzrQud6WyeJyk9z8NE3rLzJaCHEzRoUiL4b37viL3jb2hzuFGmfDwMayeg",
  "key27": "3GAArThbuJMMmSWhX2FyVAekEqxpjGSpLC2e7AYytYLs7mKYh5gEaaFouK8cYMxJQcoWaYtFzQt2byswUAkrZzVd",
  "key28": "3Sn9UFLkCkaeFiossXjkXkBWnRwzEUQ89ZaUkcSMyRfaiyMKiDZxdz21VSrPf7cZNQpWSfLCro7qcfijUGYpCtNV",
  "key29": "2BYFUVofsVewWVktsg1aQZdLxcsiM9Y8pwdng1tBt9GPqAy9J2XaP4UW4HFkPPydnzDuz546cxz3m2mf7P3P3MNe",
  "key30": "44956Zezqcr6AwFWPuKCZwqoeWJk9W1LnJaKRqiqGdkhDjJvo54xwv3oCxsXBXosbWNJvXoJnqTaArMnG3W82cip",
  "key31": "o2xEbeJ98ZWhY7MYJ3KCJLEiwd6KLmYqvagWG6ce4UTZ2XaztXs2a7K2s3QoPqNVYRJo1A39Y9LNLy4D4dxojwX",
  "key32": "2MT9w7VXPZjGE9vwEDtbrqSz38YJXozkfpDigQVWVsarAX52eiydRKHtQLJuvNGGvTvB6bDyqZjZayjchJ5k1aJa",
  "key33": "4rEB33jajGwP7A6tt3zcLTKDvcTQ5qtKJJqLxW8P9tV5DLhM9KeRMh87tdydJmDEKpD3bkxRtTCAgpkMtPNJ8NXv",
  "key34": "SBw8jNTiKjPHGdVNpaNhXiCGvxiQyQ9WUoLVqZPpZHMQB1y6bN16fkXhGe8mHFmjVaeLgh2K1cDSMc349psjRaq",
  "key35": "u92cResYUtEqccYGC8gZMEHEyKAYYMgrPhtcRKNTPxKDGD3QwAiLGCmwU9pJPbzBuHAWZ27ubq9VmkNKV571aXN",
  "key36": "4rw72c83bPQWbtkfA4M8Y5Eqk6PMiWgCnv5NoVpAM3nKN6gcbVynXWNnFJCeUqcBonmQdTidPnqsaexteZ6zWpeD",
  "key37": "31qPXmAy5uWnsd89SGx7q9V3mBwaj49SbLnC3gebrwwRYtVSBDnZAqcWVJnuJPo34QMs3qjQ6Hrn34nop9GfyQHm",
  "key38": "7xPZkzVRFrR55isaPdndjTMM2VNdjZENbEVW2YXWHkkozpduwoKGpJnqz2qVQsSinDBjVDXjHN84Tb42hRRku2p",
  "key39": "4fG6WhhVuZFT5sgzzTcRz8yxzAhWDtF8SkugTqSUs76rUbK7v27x1QnDiAVx5u9Ggsetba3L5TDrq9TMmVUZbPfF",
  "key40": "3YLA7RwpuypGdTfes5eFfPDW2fYApPstTqfrPsbn6UEtuJQmDTBamSUyCzT2FkLQDycqSKVsj1RATB1xD5jLUDMB",
  "key41": "2SK1HH4aLwJ5vvnaKePqu9zsWTRHMHwEHgsKE9UVWn6SRdQd5rKMJibJgocaNxJX2EZ2Jvyv95eZUB5inX9uxfpY",
  "key42": "31rxvgJuLaADScqNBc6pPFeyFwKkUMR1T2CTJ4TS6da7YdxkWV9zViQVKz4bks5YSZHw8bAkAEDZFRZJ6tSvAd4C",
  "key43": "2VQ7YYT84LVZLbE43VPbX6xJMXxGojnAiMGfS78Kk1Z4EzobtvPrs5yZUPgTU2C6Z6bmxXvxpQnPefYGrF7bYft8",
  "key44": "5BTfuM3bD9o4XseoJDChGMvLPRF6oxfSdfMbG48r33kKyuWdZaMcDpmXXSujG28TFToLPnXDLiGW1Dj446wuEi2G"
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
