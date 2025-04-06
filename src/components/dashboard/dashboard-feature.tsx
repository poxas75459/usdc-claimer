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
    "4apqpoc2J33fy2XnKKpXMdw91K22H9rJaFwLLFWHM7zCuv5vSUGPzDsCgNvNpV1RXGRJCnJh6ekZs2j9Wo1V9RQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tkJwWdUb4CPcbbSXCvXguHRDFcyMUxmnowTPEpT8vtxtTmR3hPaepYc1emjYq8gemUphvkTeXi92Fs1V5mxyieQ",
  "key1": "3NK3z5QTU12wJuR5c262pztjwk1ywaqGohJE92EXdUEDPyP61ueiyxwgAPsEziibUusWqb2zYZgjdgpc39SqctGS",
  "key2": "44p1XeJm9g3x7tXKDZKuDyxxgqjKThUrAkkRJaPAdqQjBX2kyaURdNfdjt1qHs9mCbkyUbb2LFuycoz1Rk4eLizp",
  "key3": "5xoV2iy7po7g1MdGL1z4kffz6UR1MMdvwgLLgtmzJALckZN9dfWWSku1Ca1xHMPbS58jPoUvGMAmi2sS6zz7ygUj",
  "key4": "3oZ6x4SYdXEB6goUyM5wsXbK24RHKh9rPuVkBaqvtBDsdjCLm1oXGswFHasQ2xeuhebe98L62LCSWKGkBWU3tSbd",
  "key5": "5R4CixSQ7xeYnKmxWfTe2PrSGnkf46gwxcbCTnYcukCsvMPzqxdkhpQfNczac5Zb1115mX9j89BDgdBVqUacLEz3",
  "key6": "6RK921gN777nCMYi5Y7ZjCG1Wb5tBbcuCXrwYHmm7Tmezb6mYh2Nh7Vi8d8LYfU4yZAWCtwGCuysLStUtQ2M7x6",
  "key7": "3pqHdTcvbUrPzTcV6iKKRnr3riFX5BLsd75yY24dMPnL7793spT6xmXHrEjZCSzBYCo5X24TDNqZqEM5AkRcQVNi",
  "key8": "4XktKUrH9L27zxUJqnYnt7WUKhdzHrBKBp6fK4juyeKiTLM2SgkkZDWdWxPWvavEKpa8PaiBWCvnVQBunovteXKB",
  "key9": "5whTxhqe8wToM6dumhvj3FMV3MDcJ6AjFbtSgtV22qbzTu4btJKwehsPDW5wMm8p41JcGZzwhc1FPxMkjMJ6BExS",
  "key10": "4LFqycnSyckvnPoiuTSrFNYbhshXwh5GTEqEg4kA3vWyCpTMyNMbQFBCqiGERvKe1VwszigZ268Z6cHpptYHq2Cs",
  "key11": "26EbcrtyaN7QnqavvhtBgjCmWN2MspcRRKKJPtwqw8Z8YVBcv2rDLWhjjMvNaREzRsNN3Pt5ZXpyuPG1a5LrAReR",
  "key12": "4gKgeiWHTuwWuFkJXWXB1XjSzAJGV1Jo7f95dbQCUr5fTTHTBa123XMHEQWBxPAMT52VDKVS8RhgYgKTCzb3YwpY",
  "key13": "5SW3sLVuHdEdxmxtjGm577Ec2bFi9jUG5nNAJdPxrfW2mZfnDnbuajwUb4AAYdyFkeBSeRe5hwe996CVKzpYF2Cv",
  "key14": "5T3DmAEaSQs86cFPSYY9KMNmLStrNj92NN3ZwdY2nyzhsgCX5JHdMT8fTSpfWBMjQjaRpWY2czZgcp1CJgPUJPP4",
  "key15": "4Tv64E1SEZaGUz8NmuQSXrJZdSKJ51C7BEsLnTqnGEYrt2me6dGFeVPbxFWpWxR9Tft4qyMC6fGiTmX7VXXvrC1c",
  "key16": "3RiKmCVpFwMvccuEVqmeuGnXGbjXUuNAD3iDyTrJbvFrKaPZ7PhnjCCvxTjxPnKzcNdbEiCiFnioLsMcSqszqdAF",
  "key17": "3J9Y9YRSZaUogJBbXk7zuaUvt92tiqn1LTPkudmtW4fwJ3ii8RvCZc4VEWkcEhsLtSXgfEjyVB4iYMbRL8n2io3t",
  "key18": "4Sa3DEyWjbz4mRDeAbMiMBL5GcVxZM3xfQmv3BtAswntg8wATEQ7uSUDdqGvLyRviLNmDk4r2u9W888jXr8kNQSd",
  "key19": "RSBWY8jMk6wNLojWPo3hCstaFWfu4XREN9Hkpa79fxSQ1S73DspiXy4BtRz8rPeuus8Q6sVtVR17LaqgkhcLxUa",
  "key20": "5yXJM7NVGZBTxS1eYJ5nWMwTpBeYr9BcN6NGmQ4VqUf9nakQsFcQCWhnjcA1Et3GkSmAZCEurM7y2ziXexEUznnD",
  "key21": "5Fv5q9QTo8mW8TuQsEMQo8wqSh4g2bdUg1QWYTevdTmy4acqKcpz4tYwUh7QT9nnwXFhe4qTDURLmzXvpD74Leru",
  "key22": "4XsLPyXjyB4MiDmRZLo4CxB9b8ZiNdTbGMNagSnNp22s8FJDY9nNFqzss96jeCEZvCw7agnEf7kkH73ymVX7tV5P",
  "key23": "4RuAPxckaq5WZtoDvBi7rR2NsSxM15SwHPKBeQENQjkkyh3c6xMTbGqc6sS12CKfWawYEpH9V4BJ9ae31AxEw4Q6",
  "key24": "3eadUCHfwJ81c5XCw8Smo3M3fnwd8P492FQqXCsXNVaueSxiRgoepaS6XdB1kU6gYZozp8S9bxHi8YH4K9tMtTZ3",
  "key25": "5RgH2gicctjKtyus9gjvbnqC14BU98uziieq723hQyh46YuN9mrMshNZU73zzQX92rjDyK4T6uHF3LBc2Sh978au",
  "key26": "3smZHmVQgSJiAZxi6c5eMEi3J7t5s3vaXXzJfV2nUhrwkJRmm9qoBPWcYMg34KFeRPoMmUoar97TZBGty6WjQes8",
  "key27": "L6bR5S5gswRwd1SK5yPpXkKbrpZztjeU8MGeUncDwqcFFN46xUJq27S3xGikeVKaSSytJxHJfUgGLJj4GfQth8A",
  "key28": "KQrrqzFaLGCJwFzdUxco3rdCLCs3maWpBBrFvi7AGfFm4M6WC41rNVp6sWegoaBfWx2aRFV99rb8MpFscxifx1E",
  "key29": "4nHJa8HoE9xY9DvdYzHAqCDptCeoLb794iaz8NK4XiMXyHjWmT4oPUDvZ9REYq6x5nyJv4XTMKDpLMtENpSjLout",
  "key30": "gF1z5AFYV1jqoqdfaBbbxCnrkYREtuRvH4Yr2MWu5NZuu9onYeRE7Vff3426hb78bov2svpRNw5CSfgxTwo8dUc",
  "key31": "2zNX5fPM6hxhLfFXWXCPxmLBDdmXHC75o8xnrGGgcjXVkKkbafaTbsMe6SaKqpMzX6ZG2ZDhUuADcpBqzVc872ni",
  "key32": "k33xjU6tihaMfNqXiEmf9LohjVA6oqCLgYymBVgg4pSuW2YHRqn7VtM5Ukuoro9hEe7mweWqsMapMNPCsa4ihSe",
  "key33": "4N5ZqbKaqZcu8PnS3jy77HycuJ9YU8i4GQJJX7v36vQ8Nw9Z6EoxHreBLz5LzbP4TgJjeoJvhsMvWcvpgXzHqudn",
  "key34": "5m3EmF7BKy5ZcAWnYr76ctYAxTy878zrRwg5UNnJfMvzJ3yMdEaPvBsxD4sSJAsztMGRcrRZrsDUBPyzKzjJxX3n",
  "key35": "aG31hDdcoUsGRmWdTiUnfaPowEpnB17ZhD9HpZ86TL6FyXwNuaeDgrwRHiJ3UTbxfwDhbqyVJSNXQLwburQbzap",
  "key36": "3a6RBKgiBj5xXMp7YumGLZ5heQdtrR8HhbqzDmv175wmWv7XPvk2QHuq86bYCip4XnZM5U1gVK4nKzXCyakFDmKB",
  "key37": "9JkxgHLem7EKMVwMfqkSTGeLZSXmrz3jhQAGeMGju9RaTpCfUiHT8wdCffDk7xfE7LfrFKM9ATnSX1B9gugnrsq",
  "key38": "5pJ59W3mzeQY3ebJJx664W5smP2smTunPu42jWHzNfmsgwjUsFVmosHNjSR9UYPsMwBrn3Tty3QWHZVBwJXcaLw2",
  "key39": "4t2B82Wrf4prDVH8WEo6sPFwRhW9R6zR9yjjWz97wJyvh2qT6hhDdik5gQVsyq7Jhfxfk1bAWAHYyqm4e5bzRHcC",
  "key40": "3ZAeLFicWaDPZiYAq2Qf76xFdhekJEmV6M7CmXoifTFnjDiUajptdXJqrxEWJZwkohi5pn74ukAxmvnLPwUK3yFo",
  "key41": "NaBowpC1fQBwzmqX5V1UDRJoWEWGUTBETKcedAjdRqitB9gy2YxQnFFTAsQR5H1VWU2EdbdUfUZXiE99BZDuovX",
  "key42": "2NShK9gPDQURhxhod1HDkA4DFqf2WySWXvyUGwtS3nDVJFD8Giz6va6nFvCfVXpHeYGUmJXairhZVmJuH99fqUmT"
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
