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
    "3WU8o97JrGNzd1LpfeaL2qo8Q15gfJ8UukxofjZZ6zGSmpQp42x6qNABYdur2KFffTUAYnKuz7RqXtJ7WSLRkpXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8ykPtEyQ9KYirf7Phs63tDr3RNTMWZktpFBs1GxQzMJ3Ei2PgkpxJg9AfQ8Q1jzCrovfoo1H3og9shAdRdSMnM",
  "key1": "5mZeVDXr9hTeVfi6keD9UCuvxo5jfGoU4NuVquEFcjQwUUessGhu7CZVkpaURfGN86njqKKqGSpeWhRYaHmcTC69",
  "key2": "2oYvdZu4zi1yqot1fBkubaPyYdB8MtYSfoGkipKoJVNgesqEqZ8gwdFTUV1ThV18r1PEJmTyzA4p1HntxzZykcA8",
  "key3": "5UqJi3HEARzL2HHRCQMJvUyM7vN3xhWpsvrDwGuNNfYCEr2wq5bdsCRbts7M5QySCGY4KzMF7F3GaqCvtoznpRW9",
  "key4": "2KvPQRWRR1CL2cJx9NyHLteCUEBEjM7rqMrrJDdMr6MNxeXWiN47ua7i7TCCwcb33Bxic1oakKB85BA48M3V3QQ6",
  "key5": "3YK1LG77htujK2xrZzHUiE8t3Yqr8Y2hVCJq5wSmNn6U58PBBsWDtAzJvLnJiViY38tfuW2dcnrujFLTk153CnEM",
  "key6": "MSitGHzz2rmdG2Aoe7qg6NbecV1YgSiHhwh9qF8g2P2rqvpyDmUHC1gxwEcK9TPiM4GyKfWWhGKoPKyUhVPAt6B",
  "key7": "3bATtKKe5AfN3Fs4gd5Ffgi8N9YdRjgCyv95ZVVs6aipmzwzSnhP1Ws2RBoxMbFfVUAyZ9D2GsC85HJWjur1yYQK",
  "key8": "2wPmRVafv7Xx92sYr7WJ1jahahNwioyNPkfTPK3CZYXeYS4LJpWewGZj8sNN74oy6dj8rhP318T3qf7r8v89NoyB",
  "key9": "3kJLXYPry9umksYoTsNdW3EBytusjRsEiVbjxu2TWX8PDqsgP8gTVZuA4RSqdzjJHqzjjH1aiMhFReLkwpLBjYVx",
  "key10": "5Ub4cbQeBM3CrXUjBxD8nkfJPKLr6zoFuxDs7sTNkiqP348RmyAmHUSWGXao9z5UEouRmFihPX3BhRM6iSmcGzbp",
  "key11": "2Vczg1WvPfxrfStS82AndMy3P9B19qrDMR1Wrm3YxYw9Mkd4bpFJH29DMoUGU2UY7HvJP1zRoyqAHBpiukNyyrai",
  "key12": "APENmnBWB1WMBNoJPQKYZKy7hxn5fm7WeEznY5rd7WX93CMuZBPydzD5KR3nup3UHzTCkFrDXFkgwPYdBRDPBNv",
  "key13": "2kkuXaqZGf7ZGvqvxWAhwJBcgnzGLME8rZ2MPL4vPtDqE7K2wn3rU9YdrdBYvs9uArqWGcnN9zVzM4ivQesm3T8v",
  "key14": "5D2B76AWkSJ45GSpccK1YxfJRiEuSYyMDHZZyRoQ22FqFxqMBpBRFigqzXY1qmUSzAF24YdAZtkRnuS3FYySJfZW",
  "key15": "633ALKx9KDeieEctvsyiWQxcsK7sBFkRCJv5pxBp2pCxayrBmPR8FLTUPVpuJDdhguKXji7PMnWHSe1y2DbmnQC8",
  "key16": "i4MpscVw9K6RSnnRWQZpRGTw7Mjtte4C8jZxTCkz127AgYYEj88197aqRBvryJttuChLpUBJY1s9bDZYw4tJLqN",
  "key17": "2rsLgT4tzH9RpQ9v7qjdSeNCGKbTWC1TQLxSUxccXp7ykpjkw9SCZ4WRb8CLbtXdh1CEHmfwTquKFtorQ2tVyiYv",
  "key18": "5kdHhkEvZu13mPbwFdK4xcr3fTh1QkAVzFsFVpDS3Zq4sfCE1SdC8uLPkgMVysSuVNZzvYo13e7dFJLmHdG6gHS9",
  "key19": "JDaqcrTsGTpkdz8xivUPtVuEphoyKBuLeEj4mVxxEy3fUvSLSS5PGTA9wDKkExiKXYB915yf3VzCHkDQSqorjy8",
  "key20": "5C1ec2g8E6FF7pFtMU9534P5YFMsa1HuC4DDE7hwYU19CVE6Rbc5KSgPiNA4y24PSCSAQ81UiM1xf68dBge8kJNJ",
  "key21": "3YcPVUrpr5zRn1NkchSNwhiHZNUXrxyRF5p5ki7SnTmfQKe8gMqSSAG837kmNzjGMwbGM2A7C39kyU2QsXNuN2Es",
  "key22": "7rtECqvJajhJQHcXLbwdsMPJsLNhtL7ouqRrbRMdWvnDDrEziufh4Dmw2Sc5pdyDQCNXC6LcS7uRMc1nWX4BqhH",
  "key23": "5WkmCA8vwNQCkrf43viaBG6nn6Mn3Hu86hTJGTATY1EW17BTyf2rdRBgWEwvJwucicfh8SZqjq7DQDdtdFTkX3Qo",
  "key24": "4n4mLpsvrKMJNBifTgAMcrMdqjNowmw461W94TYa4fyJQjc6aVFiLix6G5UGBfL3hnuVp8zpsLzPLy13HNSoSJhd",
  "key25": "2JsRaM2nHSYLmtZ9FGzE5ZEeqgWTMNnNiQowK13H2f99CRDbAuogtDNEVh6zZKrZpZ2yP1B1Vb1UgV7r1xayiM9o",
  "key26": "3EJyS2LeuCkgABvFmkEDVAbZ9a99wtHBLfCJY5WHS3DZ7vzQoDykZdravBq4mo5B6vJX8zrMJEtjZzFQsHkFzB7E",
  "key27": "gPmhvWfM8tx4HwGfTWJhhxZzHfNGGr2SWZDCdJgrgU3kQR17s1posMtnL3B3TXbmMS4bKd6vrecg3dAS1viyaZm",
  "key28": "24gSpJVy6eZ8J4bTht4wCLJmRqPh5kG7tnN2Jx1fqBS8Smacizskgu4r2jNm1yqcZ3F3qfMECujdUb3qvW15ABiL",
  "key29": "4bnTVtqGW8TXeG355nScnfPer1U65LMjBZTnx95zPZ6CUoxnxE3W2go7JrTqSaC7PeUfMBih6YKsHLbc1igi5tJk",
  "key30": "26C57fpGCzNyFnXV3wsXFHRWE5Rr2sta727niS3ngPL73uj8qMR5jWkAGTcn9P7S8AcwRXUWRACHH3mZ3cCDXUJp",
  "key31": "z1Yd9UwSxrhtvWKPRgjH2HQ2rCfDzd5MV8ySGrNCAH4wehm8FsgRLGKTHkTPNjjhTBNPX9EWTXLaq9DKCZoCLro",
  "key32": "64ADqxJTA8CCvZP74YS7GpCaozvNmRkTSgTn5A7471Fw64xPh4UxQBmjYrkqc8fAoYpSVwe7msBpYEJY5Gk1atnH",
  "key33": "4cXdNz4pDQskaEtyeBbSvfbQxCgYFXoB6Baqgh2SUwykFB5UZapu6praqCJKds6E8yfDyMxP3S59E8CnxStN9pjd"
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
