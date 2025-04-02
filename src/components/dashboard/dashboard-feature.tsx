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
    "4GrrA2MxkFTHbaD59GVcYpMGsrAUJR3nMR44K1UVytCRzvq4z5cQZZDBG2GbdcWQMFBhzJxEVZCmrdbsTuCsvwdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpgAmqUXa3UFrtpQuf1Qk63xywFRGo28CfGN29f31A6eZue8NDN7a3ac2mPeEyySCXJuGu8QF2xHLT3apLGPVFW",
  "key1": "3CryiF4TL4ycDhYK5oA7qRjafZ7Sq1pY1B2mnXoeL7iQA7F3rviaDMAerx1g3Gno26pJNgWwYPQya1vBupGv828K",
  "key2": "5SFxPMPm4hL3odmRxhUT5Lnipb8wRGzVekXfBUaMCn1rYHRL38a7KA557LUF9uTDCKTF1PPdXwFPkpKRNteDF8u9",
  "key3": "2DF1NnfjCPxP8RzeuD8ApEHFRFbbZfswD9XtApFWbsm8pa2yTwnxxPWBBGWo7whrVpXDLFiWZPgR1hb4Aa7XGdWX",
  "key4": "5aw7Rx6EEmCpU5qeGFkk61wHz1sAkC2BZWoyDyBJb9XLFdEkPJbgybF9RJRU5tinLK32uCybT8p7aMHFbpLsibzr",
  "key5": "2sSGfaFyvdpDVcz8FmkHdbCrsrhyjn9SP5Nqx9hXf67RCtUJWUEDGSTvVSFBSmM7cqA58S8qEWnB6JbAJPRooYP4",
  "key6": "3Q1UQin6BsQrt8r8xVqzewkvLabWVjLKkXo7zSvLP8UsmaQGTVRHRj36uJ3b4ousdPBsydc9iQSK6CyERUhohQZT",
  "key7": "5bwnV3h3EZE6aDbgr7feJyzVjVtJBmpkuvB5up19yEgnM9KhtBRdePuoL1MEMuePsD391R5priKh5mToMfnrM1z1",
  "key8": "6Dtu6pLtn3P82pUsjhkQmB9uC8GdGp1kHaGhpBHR6bqYo6on7m6YdgoJ7r4LsXDfe13FH2YbVVHqkofW2wVp3MR",
  "key9": "249Mh7Tx7vzWZtxiN7NV7TtjS3bFEPG7ecV4ABGLVHUAh5HScTdFSUnRYt5GsoofjqFwgges238ryLXoEU6HEwEa",
  "key10": "4LeRi4DDQQFkQ6beG7cdsKRqCZYJVY7ucYKecdZ1g9AwaazhzUM4DLYFYW1tg3V1CTjfvr6HzhMedyyaWh3gssiX",
  "key11": "4Ea4iGAENvB7c1xzDCzHr24YMeQu81jDDmVwy5tLzntgxMTRBXWUi9ce7nJjmvtDJg3EZF6FAjioGz9bLxRWwRsR",
  "key12": "3oxRETo4Jo6k3h47Qij3eXeH3mqrWBH8HJA79v8AC7UNMshfUFjtdA96X8trNHUTAcSkcpmpJu1MhJgEgZT4dRpe",
  "key13": "gzyin2xmBaisfJXXE6e9s3i6RJiFgvTqUJSBzPYBxtBjdh9rrwiVfFkRYfFPb8oAycPwq2gGEQYSLDEPcmhvTmY",
  "key14": "JB3nDQwAKrPn7Z1zexQ5JUHyGcwjJMEYFZFWaJakhYepja6ZvBiB6tbTgCzTVKvbauavcmu7N4SCefXw1phpu9x",
  "key15": "318cznMQbtQR5TNwrRbCx5wxwgHxkgrUN9Aydkd8CZuon1RZaWwZs6eytAgG1GjkBNatgTz1vcvDoN65P3kubMnG",
  "key16": "3yoB7C7i16ViD9kVXn2acSHBLfjhEXMwWoLvMrAQmjUmsyaLWuUo1KvrFR5TtFTWQXic1CGtTVKdc3wsiCTW9AWN",
  "key17": "2SNnU3x8pJgejzy7Rwgf5QB6QJqaYfENvX9Pqk4WLnmPoVQFCKyRUygweEo1TCpipe95pCezN6LarH7yH5mRXsuu",
  "key18": "5gF3cHZwVAHdoRyeqJTGeNvDAdeRVzRSHRZMQ79PVnoEDTCJ6KmNvXt8ktgipT3UcTQA8nvDUw8hixvnqnZbsSv7",
  "key19": "P4n3zmKFxEq4nG2dvusNb3z3a3oHE7isrWsm5oZ2ApMBBTc177pJJfaMh35vwGZ1QnaoxGQJtAUzALqsTqcxfGr",
  "key20": "2YQHpmeAwojmwJq57yRPZmxFYvw6BJaA6AUfstyJPWBZNvPUueFo443KtEURiEpDmaqfDyL8kC3CHmBmniYDK1P1",
  "key21": "5Gzf26qTxf2VJX5mUkw6Mi7X4SRUAV5FyhoJedCRHU58TnZZLoyDCCdbYLXLZCy2DFH9MQ3pBZwcaekN7CajipSw",
  "key22": "td2ERvJaDUtX2tYXKC4u1gmQmJWSXE27YcLASaCX82yptqH4DwyKZ2LJk83y2MEPZ7WJVAA6NnC1U1a18sUGF5d",
  "key23": "2bJsJbD9MT8P3k2aALFyg3GUYafsj7piHfBwTK5KPUAmuJ2Lw351iikUb7HTsrUTJhPE7HucYDxbtMgKfNHnCAWB",
  "key24": "VVBwZV7DiErLxA6Ekr528ivCnkvq1RTgpc5DmoGJZZNkC4Vp9FvJ4PpW6Lp3wzEU2YqTxEHpMVEzUGe4MiYyMY8",
  "key25": "NW3oxSLojWaLu98i6v4pmSM6r91FqHA5N2CPbpAbkh9okTqbi452p4zf34W6kMmZY4atqbaEevVrDpg7TTzw2FR",
  "key26": "3waVMTgCnyY72XCK82qhwYHxfeMJacKWfa7SaKbz3YjP4pPhA2nAKdR8e7bRgxVDSn1i28qJEVQtvX62jd47G3sr",
  "key27": "5ZFctoxTkW2snA82BJavJKsNpJRAoyJZNraSsPmbfsest6NEUp3hCHAJEQFNCPfRGrvddxXpUUUNpcXFpcKHfVHE",
  "key28": "4MjBvp2TbJnf8f2ujQu4DwTHFZurFMTUzqkW8bYa5NiQSE3Z8rxVf1D84VjyTXAPieVZcNmQT9Jdf6TzWe8PVTa3",
  "key29": "3gjMKfryeyFSDFJ6fG4eR97sGhDZhR4N6hqPWDWmwPaeYWbA6Z4ztBpu9LBnhJs5msrM8HSYKw96JdY49UykYq6z",
  "key30": "2DQg5e8bqT56oayL9n9Qp3v389EtfnG8UBB4qU2DUQaQXLwEAGTbrWrRXEbSNNJcBGke3Qe1ycijgasiVnQCuAef",
  "key31": "EFUsavaBUuUvjL5quFjyFT7RhVgrU4h24q3WaW11m1P9fPoxr9n6HU57Vgf8k6YiEMg1TcTBFtmdbYCYHTnYWyi",
  "key32": "5gXiLPcnwtUcG9a9rj7maWnxAGM3dW4A2wQ4ga6NzXWuMtxUWywCp2ixy8aAQbSHF9hsK4wdMpuBubWmud6t5MS5",
  "key33": "g2cYr9KKqhemChvfERoGBnA4QEYGJrg6247uPirjcUFYNyxAPHGoLWYV6nt6BXU54af4wepPk6dfScQSni9ASAY",
  "key34": "37AeYVxGoH8x45LC4JfZnCRxn4L71Dc1aeSQFLadne7zLSEBbbiQy75ha9h3pRmrBCEBxX29aniE9AHGzic8ocuD",
  "key35": "4Awa26pfzwrajzEumLKMZbb7K9fjkwBJxDmF6DUp31J5Gyi7ZZMPSGnNZ2PgjzvPYBEAxUYV3ZqBp2cYLWqUWAgb",
  "key36": "Ejb7En3brJ9V44Hxzu3593ic28QhGQypxxK52XcH9YRfzfzgZMdpz2DTrzq2mfBEebjjxHpg1bzUcTMBv5JCx74",
  "key37": "ZGxjY5JF7u6aCBC5XXGLGBLnq7Z8gF2vjHb44mTcBjZCBndqmyb2xqMLfSpczQw3e69QJ6qbvURnwsakDNp5Pe6",
  "key38": "N53BXoc1S4bq12KhqvqpdFAoG3YeLhDP2ZZknTdXRjx82yGStzAxYFDHNJYtVjxxk2iHYcunCY5rmMiod1aPoSz",
  "key39": "4izDzedE8pDmDjQMYKEGVMLqB2VsrED4pjMi3jMPuTRA2piGMLFzQrm2NdLFrbyBJzztETjVdynBk2gMpqaNGpFs",
  "key40": "2ttEBUZjvZK6AWDf1ZJGzjwuArgnVy5WM78afPC2YT2P3i5GYJqxYhYx3fbNtTnnCbM29kQmtLeYgzavBB1uxHZB",
  "key41": "2AcPmGU4Yf1nVRnaVn6UkDsbkts6EyZsuxtE6vR1d4Ko4stSRmEhaxKwGD3UJELdrxRsesxdQ3wtdjZDChooNYCw",
  "key42": "JZeAYL6u3KjfGQ4XZmMBcgVbwQws5jBKUcYzhvQ2XMJHTCU7LfCduaCmKMyWqXyCKXLsi11cxtJj3j4Hvoy6aSq"
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
