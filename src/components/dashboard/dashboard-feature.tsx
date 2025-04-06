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
    "5C4DW6Muuy6SLBhftpoerZ7WHbZtsyAKwqigyuhSWxAbGciH8APdMu1Lw4PWgHtfAduEEx48bQUs7SVazcLqU1sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgnEf2em8BYVwbdG1bPdQ8Kyopx5MsBDCiEJeJkfnynrFakc4gCoHQH3XSbUNGwawcwG9M5tpmuEiiTRTp7DDjw",
  "key1": "5inymYt67qBk5HdLNuFBnRo37MX182tUyr3Jr7qML9mJg28ySFw94BJ7PHfRGML2fex5G1HjihD4WfyqRVAiE2yD",
  "key2": "HbM3nzKdyTSSevR5NcFy88Qa9kvjL4P85DA7jJYqNPZH3TJ2qhdJQRpuEmwTtR2uryeMmCa5JjdtM7RQmsxmWG7",
  "key3": "4B5j4myvGYX7NgaQ1RVJdjh4u5Zvc2ao9XtEyMveRiWX4GWCTVG58FLanH6hsSFUhnTVZ6fLKq3LcHgpK2rrMWbB",
  "key4": "3BLseBsLAjV4KAv6fZRYXS7EyPXLudqtFXJH577J6h9pxJwNV7HngmR5pHeBdQHckMXRDdrENqwHcdBwYmhfuF2H",
  "key5": "5EUqprSnw2iRyPVTtGZy2PBwJgPuEGD2v97N2wPkdnNJrCRofhrii2qMEF7b2YRMA45TgkfNnZfDBnsC4BH4qVd9",
  "key6": "2a52R9d5L7zjJgXjp9ww3P4SXZakQ738L1GaHuYFwwaYHb3mZm5zFdneGNQQhzjB9ttcjTj2SEZE5dFcqM5jGQQn",
  "key7": "2G8TADhuotNpbJz9GgSHytJHkNQjmLBQtFxQV61CDPPtQVmH8vsbzryomJQf2L5HwyGgHCW6ii9BqjKdJsLningy",
  "key8": "26o9V8x4ADFBmmFPBhNc962dsELxj1HHxaJsF8iW47kU1bYKwVwKRQ6axVTSXtAgohVfdafrLq7D8ECig8a8HjJE",
  "key9": "HGZYGQowBLxFKLKQGHqVFdS7gEPKofD8H4oHGZ79sKqXGWiCgce9CGrUb3MXdqaTLLyrzUyk8ih7edjvaGM8xic",
  "key10": "34EMpDNeFmYGTU23bq1ZZXf1Ntt85fQZCgoKJjaeEDmarnHFHTrnspa79SrR5C6TaprTHfnwtZ2WCow6rpwFZ5cd",
  "key11": "4d8sasRCf7UbWCBFexTHmgyHbAF1xa26hwzSUeyuPZ9QaZHKDm8GVZkShQoBvZRNBY1NP69m32h1mUwmTU6SLLMR",
  "key12": "3XBMgt3hUsGAH3tsWc9QgU1kpPtMfdFcydVbhWJLPHbWV4r6U7n5DVfRGTYTT8ZsefaKTv5Gc4dFDzKp6ErR3UTW",
  "key13": "3a8L9Mc5MYEjc5Bqt45EynzMunuJLEpemyXu8pgjR5jvwNjuiV76gB2CN3mXQKpGznB1rPz34kJ3jCPQiGN5aw9k",
  "key14": "4MTyzZBDgy7cadEXts9u7Six9HzrPKJBnSw2sYcQuk5WK4SD34JVQQAyLEwdKz6y1kbFGMr2Qa6pPdeSUS9DvVSq",
  "key15": "5nGdDqHouSezNavsRaHAzqAyR1Fn6LHHBkWJFw5PB9VpWZex4XNRqCiCZeQLCUJKFitLeyiX2rybfdcvH98a1tC8",
  "key16": "39EppgQQuKaTYVxR9AeE1yZMYL21rvrrEeYWFJq1A45hwFfWJPyHgn6GGkQCKpH7J2sQjsYAoxx9BYknTZ7USjKA",
  "key17": "45FCQcVQG3KYb51XqFzAPGTeAa5qHxTqTcsJm37VYe5MmWQebgoc6ET21m2L1VYJ5grweXTbV4Z5V4A4NVP5pViB",
  "key18": "36dwv5RmN7HE1Dv5Tmd61wfUZuVx4aq3SmFPQUDE4aujxtD7CpatxbJHPLUxqTc6woSis5sQcboigcR4U52sCV3s",
  "key19": "49gEoc15Uw3FaTr491pn1SwCBQvSRtnXWLA7USFqpwqdjEHvthESPk8RK4o4eQqp8xUuKEhBfK5CVJMcF93jBcFm",
  "key20": "652cPeAenPstdMHfwGpL8CdWC9HyoVCBVXQifyqReshmZH9SLqBodwDJTqLDJH9GfZxLYqVa7qbQqMT1bykcnh9Z",
  "key21": "3SgHshuKiJZ9aDzea1wftGtDXnqfioQ9wkjf9iByMJAxPTTSho55utQfqphzLWcLok5jK16wjxn8a2AmjLua5xkv",
  "key22": "5Mirf1ffEELRLksoYxTeLxuR9x4HMSFyigiPXYcaTU1LsdEd6qcHV7nH9UYDSN9ibsvAtsU3dxnz24aj2dMzqX2D",
  "key23": "34Y8zJjzxMdz8suLNisfv8SFieZDTBJf1MF2W3aFhfUvQBtY1npoZAxkGoAfE7Ttmyft7Nutbif328akeUBY5x3F",
  "key24": "tLU4XNYyiByUba9RseBC1a4g9i1VeQbd3YxVqpd3w4iQ7khSQBqnnEVavnNzCCsBqm2atdmGNd4ZSSDvpTpVUjX",
  "key25": "4j1ttJK895HRNH4AjDskrB1k29FawnkVJuSTJi4BLT21bysH1hhuKjzwhtDLXzMXRbUMLiMg1E7mno6udQ9xg5Ks",
  "key26": "2ZCazsKToZLVyVbWxY7WSJayB4H1b4vgmY4RVfwayrTjboy2jQh5mG2YXku1x6ZxiyUYviCvV6R1hoXRsx4Arbcv",
  "key27": "233c5VFXviTkgCcwzcdHWMDvGVnpUyf5nGhKMNJHwood1oTvBMb8Pnpgt471XU6hGEDQiLBtd2WAJSH5Ywvt5RDB",
  "key28": "5m9gmNh7Pa8z8CfQdRbTPmRRS32qe4DkHxTZxrVM7w7CFsQr7E2CeZdxqer1r9GsLVFMcV2ZxP4f9dv9qGosWXkw",
  "key29": "hfLquKPjd61LotWMkiVHzbE7nL5CAB5iK6vKaS22UuyAX8ktaKZckkSkhqSb5MPJrwz41xxeasLAPg7ffHU7ZPs",
  "key30": "31Mywbcy5oZhAttwrUCwebvnfYDxMMJ6jD2HL5wfyKCM2fM2E2xuKduwUWhbg8xKzwzyVm8zNQzLuFWHBBWff49y",
  "key31": "5UXuGBayChXmUwxcB4GEMeK8gPTDDktzUBqS3ewFMihqKZtrQkPQNut5Um3axrtH26bP1hWAxhTG8ZTKqYrDVueW",
  "key32": "21JVnUW2TMraS2nXbFqJmBLJsqNYy111gEKpveWWTGCnJhWgFL43DuvTSFZ4essP4mGB3kFfZmkN8nCpXgKTKCZW",
  "key33": "21P1xRc2UzSRh3oGNqNLDycGcyFxTi9vsDCi7mRu6ystXJkwgAjzT4U7eX3986PiYWnob1SYeN552FvW219w7BQ9",
  "key34": "4XZ2omA3Se5WtooAT6bT2iw4vocjphqXgksLnyHmcbkSDCDJPGDHEDD9ydcpD9DY166T66344veZMsdH9sBc623T",
  "key35": "5XPkyscBAcVZCK6WiubgWbdcYaa3yFnxt4DywNv93XMWANA3NXRSE5NaJt1jkYTZfy6Pgq7DJAo3ntXHG864Egjg",
  "key36": "5a3VxaVSkfgmhUYxtoSGapaKvoAZbV6SgvM6TtweD9aHPTZfeDF75H1UUyMnqKLwgRXo1xuQwdFLyUrwhENf5z7F"
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
