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
    "uGWESoHCKy5BhxxGG5UKcv1VqpJjmiRtTvEiJxrSHSdSBNcAg34o893zhT6Paw6kv4wcrie4BdHRpjaUnjuAA9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7ZXyTAQZro3R3rNng7hSQUg71P7SJofAZqdinth4y6xeydyPkXvQwnVYfaSjnk537btVMSYMXwKE5oYaRavDvU",
  "key1": "3Kj8L7rtVWvQnvMggMGKwKTfCHcL9b6xPEoDM5Fr2BgDTJWtrND5bph49zqKfFDS6H4qfVQKPbuHTJc4PzRmDjmR",
  "key2": "4inPLCpa5s4Pt52MZ9NiyhockzFWBbw6x5fwrfscb9H1L4gQ5UnaNocmDhy3XJ8UnghpfiFTTnqxMRx46WtaaNoh",
  "key3": "33kYYJDkGXgogndTyAZzcZhFSxDfKRn4kq1KprhyugcT4GiDAMfbdxeLP3djxDEWsgt83uNzaKBFFYhmLtpcpsxd",
  "key4": "4VAsXYo6HbT9sWqthaP5xpfBRjjTYTrztEVcK8xXJKPrLEAe818PghvN5SVUJw73p8gchtLYDqnQYc4Y4hRvRoye",
  "key5": "4udAa1BFAE6z5xxxzwrb3Jmv8ycBinrhKVCq2gK11bNWLzwjmBM4WAa2jLWPET8LsY5Ps75xqWqsjiQ5AiQYoyrf",
  "key6": "5MJEZSpH7FoPa2sTLs4aPFgE3CA8zqRCiciGvJT4haZEdhkp4NRb9xAUYhnHm2AmLsPUvCZzFCmam1LxzzhQbLDR",
  "key7": "2dVj4FoK1UoUD1QrEAi9Qf3EP2Fi1tDxggjZXEE8ZS7X64oe73PPQGEUt6fp3o62EURUbkdRR5m2wZCemuW12DCv",
  "key8": "2DfLWtxD3AmoyUiHtNs8uhHWWmgTZCwoxM8Wx8zdjk9eJ2FSPczqXuNaGkQTLz8j8oXy7Bd1LMpyESNeffguCqwr",
  "key9": "66FgCum1atBeBUczCtMKEzwqstRJRpoujtDvywxrEk3a2jcriwiLGujWS3RatEhU9MTqvsJ5mbHAkWWoTUvYmQow",
  "key10": "4Wcu5K5DUf3WtmK51ANJAkKDRa45iu86VvLxm4RBE9wFKWz6qGuhuHfp4CP8sRe2anrxssht7H7BmH2fmCJ4hqmm",
  "key11": "vRoF8qVbzeMqMTGJqi1kMcbL8TuqGjWFdHkQGwwJw9RYvZdqRU5mdhNGQmMzXDZgTuEfx3xrgFABgP1Gj3ZEJkp",
  "key12": "5ikDtvFVhbcfSeK8PbsBogtZLmbh6WJ6mNRLM25Z5jZ9umnPbVZ6oiQCCVHhTAcB3DYK53ig9zwS6NJXkdGihjpa",
  "key13": "4T1AxhLdZ1BUSBPBoe7pVGc7cyTfEy8vnen4ykhordDedGwvy5qoxXsq7YvjGAkF5RPTb83vRA1NYb6ZeYNdwya4",
  "key14": "5zWqB49qabMN55SMCpJB5fyyTDtUkYz9AK6A4WNL8wV1jXk8VQ6rx7fFbfYVxUPvBGt13fGT6uR4DnbHWpUDNFaX",
  "key15": "2zmGWfpTAdqE3sjaYJozruvxiBdJf42AbEp2xx3T5TGqsM4R91SnVK4zJR1bVLjAMHgHbEqcvVvomSj41hYNsYiX",
  "key16": "26atHKgLKAxWRLGznaTtZTL6vABm7FmzhSZrC3E9h6qZFwkLSFnUPdgsQmsDJu14v8MEvEzf7hNcvAqQawACqc6j",
  "key17": "iyaJfHbzbQQNyUUxzWVo94ebJA4A3e28H31TwQ8cZ1AFPiFcnA8MbJ9zdyRJij7vc5zZj8PSPCEV4PpgVxedf4y",
  "key18": "mzvkGd1KFoikV82iT88FzbouH6wzithhs4GjRE1XUwwwhzmSnrWs4nE2bBSr9GcNdtVyobSxNUJKCQBmALJgwm4",
  "key19": "2gduGcXqq6LVwn7XuqpFYqwmadc3oU8cCioscGVnSQ6p29pnY7QPb2CzAPgTVinQNeLdBBqSuu7j2XR3zmLF3m1D",
  "key20": "5fDUmDKo7xuiRYWdSrQDwRHLSB4hQRBfvHgyw8oxr8v85fQZTKXTMUMt3vmUYvak4eLnwNvyw7n262KPGz4pYWQf",
  "key21": "sNp742wopWujo8XZNtS8DBGTQGRbskq8uda8cU8rm5q5L2zYj13LPTcqEGPoRP2G1SAQ5wz8cbJStrcwtLav7B7",
  "key22": "5xnZ1urR7VC57oZL4KFBms8PW7JCF98XsJEmoNwr2xphe3ZuewpLJX1iJJ3t8v9zsTocW4gJHZenMszuSbmabC9H",
  "key23": "4HQL9yDeZ6an4zTaDaQzZjBAgpJKTz6TomgM732gtnzBBwTad9FPx9T82BJPKJ1ADbLUrrVBV3J8oXXSj11oFzUr",
  "key24": "2GDZerogipRtdcKRnfiVsgmo5zunN7gLNh6uLiVzed9GQnNHHPVfn9Sc3ADTJaP2FJFbLihDu8thEW5ASmrr27GH",
  "key25": "5c9z6GeWorLS5aXGYLLCSozfhosExuoeW8hYcNUnmYtPnaUWcfLyp3Zwgb62yor3BXkzJaCoBEGEm8qhGr14E6GQ",
  "key26": "61nKFuxk1LdkHYCiU1qh1KW6oHptdzsnohcaGYqsR9sRvM86QNUiVWx4dnTb7kfjhjjbPfQoEx5M675XQGQtMqyX",
  "key27": "WBnin1FnkuZukv2cXUVtgkhWMWm9SZyFGtpvYbpSWENGAyGPkvnzpMTRafo7fyk97UPZYFZBdHUoEYmQQLUVVGD",
  "key28": "51GwUWZ2mRNGpxLgTngi7pHHafUH8g2zkB6M8CYKWqRCetfTKAvKehQW9ySQPb6Q9SCS8oejas3cuNKzouZqZ1CC",
  "key29": "5P8CUg6HSnaWVaG2k49vCSk2eEpyywZHMJupMdzXQ561tD8W4Jeqz7n7LF68PWtfCsSBRNdCDeA6nXnxvuh43fKW",
  "key30": "zj3nQXMrrDuJiPifvm3VWyg7jpq8ajt7fijuMnpfcoHaGmtfsrv8d1Te7ag3zuQPukGSZNEHoTr9nDJhZ3c52Pt",
  "key31": "hXjRF3B9YjLLhiWhuGTcEY7fNtAW1Cibz6r645TMZWcSUFgh2o5YBjyosS5kPkyKSUELXQ64qj9kZF6MBAwjAnk",
  "key32": "2qFZUmpXviiY7jGztwS3cFJih51eESiYUyA3XmjkY8AHHdzccsgH2T1vcigCL8s75p6ar82Y4bX54JK159Txpcto",
  "key33": "5uAmmAWiU5bnmYXidShfzGyj2GDCoLRQ7wNacVHUSEXM9bWopZXGoC9SwaRz2EEm5shTgxkoHnkr2tbfp5LWUzYP",
  "key34": "5kkJxRCQMyJvXgMFXRmCUPgsn8TJaka7cYkgLHh65UNy88kA6omW7dcZRiAMnGY8SSs6QLUbQyVtD95tRrpGFkaz",
  "key35": "KWBX6tnfshTqiyb93TqFnVkNWEdYouqWbgqCzGCWnEK2nqVWUbCjWLpJmJdWRVAQHVuYCUzrJgaizTTdLfhQykR",
  "key36": "2c8Lv7NzprEn2nAwat94FuRkWxticFiTZDQK1G9BpzHAxZFW7qCz4Nu5gnQdsVRYWB2KFoGfAUTsewt3QnGp4eVW",
  "key37": "2PdD9xUvteaiP4qmaKUuEcGaDWEB6sR5KtpWM6NgGDsZ8W7RQD9JipgwUvz2itUMF3owM7YC2K5w6QDdkMsxVqXS",
  "key38": "n2AVoiQzWnvqS6MECvYzLbHEfaTV5S8Sid6F9vSJRBfbFCDVY4rhZumDDjtYCLhxiggrzGoNoTzKT6nknhnQzeB",
  "key39": "5N6kwTy6Ahg9GRCH9tpuWMUw7M5WuUB1NTV3KQYT235AngkcFCW3Vxt1V1NGCY3QuKZLiN3hHAGDrxPeUDgTU2Xi",
  "key40": "5gqh6WJGymGS92oozShXiLPkDSnXyfBYGwZnzGv1H9roX5JqPGGqQzDJ68KwbaR1QqrgaGipm4g7mLvMVR1NYVqx",
  "key41": "3khhywsV7o3HmxJc5z9wkQuyKAVpFB2DeaGp8fgyLnvHTGsjwicVpqkzcG2eoWcFjRSQtTsfAvt9xJLnLFaVzKsi",
  "key42": "4sGrTDqm2LxYTebCsN61TyKHHDoYRg3ej2dxtRqGpqcBYUxBAQZQoUm49dME6JnKQJooZdEM1bHEDWtECpTPUBfA",
  "key43": "4SFF6pb9ekR7i7nTXgzwdiw9JGGU8WCrwckrs51KA7pBbeMYY7TYSyZR4osqoysWhCyn2f6fgh9YTECD3YXWHKGc",
  "key44": "3gRDUKYzXSVcFbrHE1oxp9UmJFL1ejeoife1pjgh4Fh1UexJ2nNMCid4QqvLe85eUBrRkMt8vA8HBvxn464Exqdp",
  "key45": "2sy1JTvwxUxcVCHxSDFtvtC7mmddTdj6YN1BCiT8eHyKr8w15NrZr49wPHrqxB4EBFqz85Db5DYVpTYMzHgYBW3a",
  "key46": "59VZegirm8wnJoinKqWC3Q6p4APap4zEdscSVQ4jGMXEe3h2M6MeCjakgD5vZKD7xx5B4MpaRFmXgs9vJcFNCxbp",
  "key47": "RueTXAy3G38UcntKJ464TDTGd94Vi3wYiN7xgXiPSUJVcMesBDecWoqpaqbGzCoZ9KXEbJwawZfVc85reJykTje"
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
