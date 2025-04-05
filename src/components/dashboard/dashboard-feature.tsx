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
    "4E8j1VqfT8SJaipWjrT3QMtXyMdR6PybipnYf9HXWw5xwkzP3TpzYjHs82gdVBgXtdgcMAi1HPhHRn9pEtEifKVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYnvMqttnQEi3dnwvXPNSK86vJ2XK2ozj9DH4c9gKmTMwYNEqLqytjabXkaV7QUNUrMmT4ed2bUv5R1zb3iMkhN",
  "key1": "2zfKapZ95i9FkLq6fkn6ZSRXpMaCbJjKrh9z1WgcGbFoEvVqsx1BPyMUWr45YqLZXF8ASNzrYuX6zytYqKzp7QFX",
  "key2": "23PiTSjhVacYG1Gz7K6EKHXvDtrVVexasPK64QKuR48Sn3e28RJZCdAeCNGnCGLbM6b6QE8mbeMdBMBdo9cgjzq8",
  "key3": "24efb5TFRJzHCAmnEeDeQBWKfJ5hUE7syJbT6nzw999e9Ty6GE9gobvWMJLeVPfSHhHoWgziT4Sfn5Fp8WTqeBto",
  "key4": "3L6R489XeCCJ35jBWZVXwDDbwMa9McaFUCvf1X4XBcfRwh1PZ1T93LmXTDNDKL7mAttsuGeaCcSUkfrTFADRQtBV",
  "key5": "jiG4D15VeTJbgktWDXaVvdnbThCAmwN5q8CTJJyPkiCZgCoYDnYDqTDxffBphRyUtQvUahavrwXLRYNv1NZXXNa",
  "key6": "3zJBFJFs4aTxGhmxysGAyH7z9ufNd4BMNFRou3sf8e4cyb7NX59rQeT6joi1af2awbiLftHJChkZ5vDQdN2ufNPS",
  "key7": "5kKTu93Q1a2SfdxjmEa4wQc2yMddjMAZGCKMZUzGuyKzsDbbxPgCPMfmVehWzo7UP7Bxf6FNfLikBjBEbTAq4CA9",
  "key8": "28xePbmiwwtiGe8DNz5uBaB33hhDujXWMLFLkeqKUPSepWKjRQF6kJoSTE1kPJtPWUqf4KLPzshCWp7BvF4mCvrL",
  "key9": "2GC4BfYYM3FTMux3ymJBz4J7Fxqyy8bRqPrMPdBsgtUopkt5e2pdDspYyKfnQKNxDEvwoVwXrDZx7ajbZjur3dhv",
  "key10": "5yKJyECFctiq2pWQWH522fWpfFJSjLZUPBFJprmGbVgQZtqW6jEXWFhD1utXFEn8ksAqiBETWe33hTGyuAjadw73",
  "key11": "3tVZLN182CsCXKnSWNN1MDaMw5jRKP2GJNiUZTryy1BgFQgiWomGjqsMACoJ7wzSGrnjDwTHgM6b7rKEpgCgKTaq",
  "key12": "4sC7AQ7wtKioUDGjTrivjKBpkcFqNSao5WBK2hF8YQxRewnVHCtaNxSSApUtRiCgrQ2gxPQWY92aLG4cUfgejnbK",
  "key13": "45LC3cVArwCRwLednXhipoijaN5Sb2fkpGVGKu8BpV6oXyEUxzC2GWVSJBmYQrZLExvHEJWLF8UdPJoJvFkFMTaQ",
  "key14": "mXfViSUrMA9UpcDchgpBS7nAm8K5QZuLkMbs8XEd2dsZpuDUzNXh9Qwq12tk51XpCXtfr9fT8XkDqS4GC9zcQkM",
  "key15": "bdFP9QkcFwFWTbR7SF64vnZ2n7iXWzF44zEZjVYxgXvx3LnnnmegDK1yppBFxdak2ppXPm2v2MGCaAnRyBqJmXV",
  "key16": "5vjnB7mzscaBi8FJGFnN8Y8j1hnmMQ7J38CQWHRGwP5bbdUbQsiHSQwGAZjCHKrDBDvMDe4fVAeBoKcSqyiPsyGj",
  "key17": "ArEQibxRKw5JjVHhNE27jbaWXDjtzdGzqDnXMZ8Nyi67sZBGvn4iSRSLGFC4BUQ4uBy7q4SsRYvVEU8LxCimvUo",
  "key18": "5EX8VEDscn63p6PmTwyvQKmCiKnRJyPwuAzHZeSWQyTaE5nPpBiVa7WfuqeeMDbiNdHYy3qMGNLdFkmk5GbMjTKB",
  "key19": "3pEG7veAaTjgYePnpeMxGox9KSdTKmXWe28DyM6GjAJ4QVgYskfjQ8i9NkLJyF3usK59XWCGJBLHjwbTuzbqSLyM",
  "key20": "BpBYRJkJFpiHz2N7xZXnMEMs7PSANKkfZM8sgBmJ7rdCaneUPUcrFVCYpSbM6HptbTZwXbYwHTnhCesSeMkvFgw",
  "key21": "5QxH7qskixYZCy7UnD3fTnhYs1cJVgcuXvDSKLvBXfYujnoXJjedyEKq1L3i9q4EtMTPxpMtHjt8FqMW2ZfiuXAH",
  "key22": "35SrVthCcvECArAUKmqC5GT3Uz9kfxnw344gSNvVTUEbSug8k6ftFTcyUbcU8nq1aRhCw8E4PfibTjphyhnEmhFQ",
  "key23": "2HoiQ2xZWWZt3VHbRev4bfExmA5V7yPogk3UspJcTKP5wFLhwqbtUYzaLAk6baYYhNb8hzPHnosKHpF3wPu9obVA",
  "key24": "35bJy2hgGhy44frNMtyDAAGi6zRgSEeb9KzmqQdzPreWrCGfGj1RkyAskx9r7Qa4Kmm9qe5nRy55e22FJ4zFq7wM",
  "key25": "W4SqD8vHXeQDK92V8nxNpRgSE8bvsGhZdnCruvzxNr38iX3CWGSSQJXjvZAu2gxNxRQHZj7qfHVxP9MRYmwm8uw",
  "key26": "3wAz1LTNTqFnarTbWJMX4EaMXgrksPuq2gMRGRw8aVjpq2QXTkvFGHZzNSupb9oTqYbAQ6RuEGm2jnoTZYt2Hrfj",
  "key27": "PR7uukd4ziognwrQ8Kc6koW6VBaVXKnDkiznWVncXs95DFiLk3iKQh95nHsB9ST898dcYxTZWtmWkzgjTrpBbC9",
  "key28": "4ifdJNVnoBBboiB9hqPDew8CF8F8PUBZtWULp8jAmGWcUhZ87VRbnA6o1duG7T1mVJ79z6i9pDeKriMWj2Ev7uoF",
  "key29": "Lfe8CeTDCqte772E9DmPjt8mQprrLpNTVL4Npub5DKwH3xRNdTZKFPebUCAGLFxbPHFHmk5HRQx84Xn2n3FJWor",
  "key30": "3hccFCGF68nogCBbFyYK3R6fMdXt4ZhLt4C2R5c6ofCeUJfdCN5puK5EexXi6SLs1kxwFfoyFsBgQzRwjbSsYMTF",
  "key31": "emz2uK9cs7R9V2SvomJcjEmUZus59gM3zq45hgtjMrGwSY68cYUmPuG1iC8EPyr2JzozfaNCy8S7GB8wpVgQRrf",
  "key32": "3wKSeZeKfocmbwcu3uf5ukmAvG8bLW9SKQcnSRqsJWXw41TuwvcuiMLnPZMr4kMYFQj26NP6xUSGQudDTQ5TmjSr",
  "key33": "2ExF7n7H2unjAbRmFBnr3ciMqqq6R9Q7WQH3Qfq9V642RrujdxDn1vSxkJw7gqnK5yciepydLvcALpmSBSnSzzvK",
  "key34": "YuXFBVSRM4EFfJ2TDai65C8HHeF3WfT3sSq6CNDfqGGQJ6kYiuje2UP8oxEuSq8cAsjQ6T13svqnBaXZakzQEcY",
  "key35": "xe2otM8JcZoMxTKVV1P9eMLrauQXZxdrW86E3rQtL999HKJN3KFLTD2XogAK8nq8zdSdijtc3nCAW7Q2vkmCSGK",
  "key36": "2pv3xUsPSNwgD5TXp5xmdsJNmh1T69JcqHiVPzWnfk3dFFRTyUw23u17dtRUsqxMc83RbCNjYpPNt3jhjHkT9Afd",
  "key37": "38JjmeE1u9rZfdzCGdUrXgoUZX2X3vexseCwWFSEYtNdoHfm5612Qa9sggPP7h3kuTvwxJGeWakbKzF553Ff9zGT",
  "key38": "4vB96QzL4rnaDBCRQf7EENQez8hKjxFjPGMrGbTtjWnKAeJHYpSp6s8Vyfh2Gme3yo7gZj2fXFLBPNkN7brwuMDF",
  "key39": "5w6waEtrw2DZciUG92S32nTCKmx3mHPbSgEaVbQsFcBdvFjY6JKWWQuxDV4wUssFjhDPuyAwGP5JmGEJUrhURV1u",
  "key40": "324jQ7fXWUnPP7Q8wmS7tDYEgyZrqGigYWThe1xCRfpnzUMjfJW1ww4roTJ9FRM7QwBFCuHqZkyNhuF52Sqop9bH",
  "key41": "51DqsdCBu8ELAvoAfKacg1N31cL1PGHaZj2nWaioHNzYGvztE6ew5HudqUvJpFF2S2iDTvDs6AvTkF9puxY7v1GB",
  "key42": "4EivierYAStHzFsLJXhWCjMfQ1ZVEJCCJaEJ1SMb9n1rgXgh4dgEp5vEDzMCACGyTVyNKNrk1WVhhiyfZgwTZwXU",
  "key43": "kxwc5BGht1eP3JVi1Qr2hex1WMujzFHeU6sWJfmMU7Uet335nvVzJpjTJLMggzXNPbmkQ5dQaJys6p7W9QeT6Ah",
  "key44": "3D1jeyd5VoL5nF6X6AwicFfAaUte1tJpM7LgFwKzWnwxpftiCcao8aTJvGgbPJFvAgrRarmQKQwL7rzsAQbjHx72",
  "key45": "33Yy4QFWnZfzguUaFjDPB7BoyRYbY7wk3G8GC79CMHekkJ4ucQUqVrFsWF3Y4QTzXZnAZXWmKo38u5BQYykUTpbv",
  "key46": "5ncRyzEWriUrn138i558LRmWogc99AVAQJw83DnEETDGWHGqMGStpLWoVPPMxhynseBrbQCrQDULXM4FkfAm8XwT",
  "key47": "2xSKUBjFTdecx7hCHP3Q7LhJ3HgtferFFEbGiFtd6BPxnvYCjyoTqaYTTT96PcmfwJY8NuS26DKJ1T5C33uPQvAF"
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
