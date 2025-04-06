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
    "2FQMT33VF5q8JF1qx3G4LgjeWW6D5zhSBB4JhWNxTEGxrNQtgyf1PZqT2Ap2ioKUoU6XLGvQvmNrhMZZnDYwJdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJ6Bb41smoyYCsWRACfZcdj6mrR6J61cCRvCCDT5H49AzGipouveLJNcF3387Wn9xm26hAedwrXYE5Cq7wQkVCz",
  "key1": "6B5nUGxqnJZeVyzzaRKWXvZTKdUg535NU2492iqB9xGMCtKxstyPS1djrsRGYwksSbuVG1PjYjQvTdkeDcq8C2z",
  "key2": "3EbQG6aeAxvbmrUZqDmMZJ9ezUBMhjoWvHoBvQRnANJGZePgu8BecSJyWpYn96gGzewrC5MU5uciezad3GRTtpzH",
  "key3": "5dZAFScxhYvxAQTHs3P1K5W51WMq1froaNLwY62ZWePz5mU6zvY7xgFSFJaouWWQ1Fdm3XTrs2yEdLp7Yk1ApevG",
  "key4": "2CWp2jq8odkUneWnHdvVKEuCqgAaBDUWTNN8VeBZzAiwNam55zjk5uWhgpHXBkaR3QuxVpH26uqQneGhxKNJ8a1z",
  "key5": "3L6iBhqBFvNGvEpKVSF7uJ9unFXd5YwfeVEnvsvn4KRboYrfnWecoSkMLucHWLYdiqLQRE4fC7ERurv2xn5HLCwm",
  "key6": "5jvKNAPGT5GFbp5UB8QZQbZSZm7pckmsGDVuZqZAmYQbBDTw9rrVBAdzzNGM47F85KEF7MM3Xete1gCgA1EXu4Kr",
  "key7": "3SMgD3FPBAqxVQ8gNzGVMjRpLUv3byKoHYpd6wktJhszckXU219TESWU1CuTjyLB1HLhkvKK8fs4KqmHbjYFHUmz",
  "key8": "2vXb2SEuz46cjgh8esbTAApGyU5bVN2CwHLYuWVnEsPdjRzGPFvKvza618ymTzbaWqj6A1D6KMd5KmhyeSnQSjHv",
  "key9": "5pMMQ56DsLJFom5rxUe5QT9RFL1BjbJSQbBdMJjF9qP7WtfKYjpKUWAtUJqyipdbzRms63fqw1Qou682BsrB3rYp",
  "key10": "5RH5HVhAkWp5yMwHRcEWpZ3zjNrBGQboSEtrLPeyxB6XA9TL2J9ofQP1aBjKLbUfJry4wTNpqsFepbqWfhsMvu39",
  "key11": "qZont4upeRv3UWnPZaEgK3fEF3KdNv6nibBgba3XJaSLZxdgA47ManUKRFkasYR1qvufd3Km44GYaqg9YDfkLAq",
  "key12": "2YNDutSo5K71W5bdHQXTyLW4bs6C4m7WgYiURUbwqKDdDsLxWtMrVNum9QNzasU4SbkTZyEgowmWtbrPaCYgDMKJ",
  "key13": "2Uuwk6C3n9F9mKPuiG9DpKzS58bHTYqPp8N9XwV741ytU9ar7xA7ZoUGJhBBkZxH8GQjLwGDjFmumCr8jPHzrjcE",
  "key14": "DfrJyxt1DtWNPuyLS3tBW2M6jUZAtrg4eiMYCG672JpDKBTrqWjTW18YwyxsrcWFXDvjQ7FFF43AM3j4zjaVAdD",
  "key15": "3QbWRVKhjGTNQp2rmuF11jaZSK9EejJidgxfyLW522a3eNt5SZ1Z4a6XnM7GmCPqpjcReG2dmpCWvdmjBMiEKLAm",
  "key16": "4xF1svPfc6abCfBQcvsK7o535aGSJBpYwqwb3YSa6a28VNxKmsp2w3pdfQwdCzGfykwwWzyAJRRS9qBmfdzAyD9f",
  "key17": "2WzfTLpykj5hwpPReGYR53ft5Y99pioMYhWCGV5eiXaSKnxU5WV5AuN47Z2oeTP9XsQGQf4TJDdtvSufwtBp2DuQ",
  "key18": "4AtCAfj4n4mEVowHMnaySRFyEgduhuUKmesAmNv32Ky9ea9yDJMLgR5DEb6SQgZCnaWLhR9Qf5syN73UD6V5ppdw",
  "key19": "4vXQXtSWugZ9VvWS9dY8F8VAQXstT5CgykptYBcuGSFFFDtyTrbhQ3rqC4AiwNuTXHdwVGR1QDH8t2XbHtgKKco7",
  "key20": "2r5dLwfw6asNt6gTJLYgT8ebYhMsuXxdMJTxUZHEAKRYtTByMgXp6e5LsvbYFNz8NGpPx6PwvZKjhZjwANGV6LvY",
  "key21": "5t13w6pDWR7HwWLf8BG4ePdW1p5xZXqG3A839eouDLbmoG8VAWAanzCZKLNWZQnyJnUJB57NzGLUXdNqXGPa7pvw",
  "key22": "61X1gCxKNEMazpAdvrN6tL2nDZFauR9S78nKkL5vkL7fMMnNQbFsmgyHprkLRshd8nLUhtTAu8XHbXSZpGoGFSps",
  "key23": "Rw3VHLDjRpTtH3brMEhdJZzXQ56jiD2qHruMz3Qn6ie3uewnw68Cp5YEezz1q5bmPPhgxWdrs5RJqYtPaxsv6nE",
  "key24": "5kSFaSBwWfYN74uSMcnMTLLQQCk37YwPYj7fzTfjBrpZAa8eBezrWRBac9z9iAJm6rsZwtqH6jshtWWdVRzZthmN",
  "key25": "4oPHJChS7HoCQGCVLs4TS7b73ViPmfrk5YqdLc2XWSvwh3r7v8ok1QzGRLM2ooAs2DsPZNbGPg8c7NrgSj94n2Ut",
  "key26": "3xEXpCBH4UwsA39JGMi1YQSvq1k5rNBxPtAF2gNEBW1KWzuDUkhAbMZtW8imoqZT2FY9fS2WLzZjx2sWuVTMVfxi",
  "key27": "5RS7BMMkYdCZRcnGQ8PTxpwPqk3zSr7eieUyYFjrrrQdBAykFP2fAy5E3v3vYeBHKzA1zo1CcM8x3ZEnUEZ7ytYt",
  "key28": "3fPNUk6oBLQvHm3MVsjrYXA5Vmr6BGo7Y5iWHDfyQreHw77VbSNRxQbuVkBHjDEJJct6Hh1egvEqAS4Dsefwemgf",
  "key29": "5vyKTbD5rLDQdJASF9LZgpGFsh7cLGsiXVd7m9NeieTgyA1rGQVBLBaGXwG325oaMnjHqXy3jZyTjmyqUputGWKH",
  "key30": "5AfkgbquwfWixRfd62Bj5GuZwc4mfir5RraHXZojeJUjLKL6NrYSkgWhhBui8bsfLkf1BJuiWj7Ac8HMz8eVLh3k",
  "key31": "QggKSNH9skVqFzyfx3rnjUt49ke6RvTGVW6czTXKiJFvbxPfgetYdGoT8Amj4jzaVSUofCMp1ddmiU1ixmTUdid",
  "key32": "4TAFn3LuXihGdundyzQZZmZeszyxbjPpdwbRFeJV2T7n8btu4uJFVsgSnGqxUHXnspUDEYCGeZqLWyEDGWEGxWL4",
  "key33": "2x4dBVnzmkfo3SVswQrQmubV5Ry2yCNBe5n2nT6BBtNBJMK3qqPYQatueZ69G3JMMYG7q6kkoDo6NiJBvjxtYQj5",
  "key34": "2aohSs4wXFKWodxHm7nVaSWJkMNKWACT12RHjbERH6riUvuVBKCMmJk8QEAKLiL656pSMD6qnQygqmYc4bHtykAJ",
  "key35": "PER5sjPGeBRo2LRVxhvyDLBfbgToyi9xnZjj5kVDoYatmBiWYctm29DtXThyN4BjpjSUUYihtG83WtryQZnexJF",
  "key36": "3g2DgytuXrauBWHGQ7G3PqDG2n42kT6p1uNE7teadMLAUuEmyM46evdZUWxdhjeTQkwBmahHkt2yKv2wSgpgMgtj",
  "key37": "2E8HpG3sMoJnYBf4jkUgmmMZLhqbg5hFHY39N4UNzP9GpvFBKTLwWdJkUpmZ3ERcwHoBYm2qwWVWip8Ef5wbQqPz",
  "key38": "5R8eYSmxiMxLxUMP2Wm8n5ov7fzHFPePqvQDGGpv5uy4JEavA5MxGPbTNH8x4jvuvRiw527112BCn93gJhhc9RNB",
  "key39": "3H5aNVZZ2euNtdQBNrq9CFxtXvLJJB9Bjbv6G4nQgF3gGMZw3qCSrFUaSuDVgdwPNSX3FjtxqoUqAW7iYR3joLAn",
  "key40": "5RAQiRLCPeCabut9zjx4cYK6CdYe8BMdm54hiLvSTnxRaQ14pdaXFd42WbJe9Xxjrq7SdcS1bWijQRWUqCGj9nwo",
  "key41": "vr42dQV4yZHYcVXD9iSRLH83RH3bH8tbRjHZt9spEh8u2mAWfm7RV1bipScPYPfPr7u4JhyvF84cXactciviXGE",
  "key42": "2daap6q1BPDid8FJdRvgwZVtkpe4JCm6RT7xuq73xECkzG7yQYgb19NZXL6dPRLHzqT51eNddZVccQ71WWVwXuck",
  "key43": "5sduA7UiEAGps2Ag1q23bmXtBHg6BMhFFm8fAScjtfzZnMXdnYxmhCWScbcFBmCETjWqanAWWfTozDQeEbTsrJuk",
  "key44": "2ead3T7kgZrgHERpoxMGHRFaXbySpSze7doZUAUnzk6j78msoQfQmGMH8rs97TVPtgk1SYa5MYbSPhgFRmzBpEu5",
  "key45": "3DAqMcLG8H2cyrsodJ9gYMXocQvfuPm5UHKWgvNXixQ68qFJYAt1SXTKgaqk8oraT4ekhjR4rAZbzzifp8zabpwC",
  "key46": "3ima9gsXRvthoAjzmFSLk48SUaMMAftCwquJJ7ANek9LhyceWuTZfLXRcJKa3C5hcncpeMaTg5zwCTnenkWg3CKU"
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
