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
    "3cLRCKXsZFs6qJrR7zCqrHwT4LzsGyKmUJL8CFFjFs5ZrzuoCE9yjen6cAvbMqeUKEtxQWGBNdHRfBc9YpUzXowx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Y7AJqKWJJUGBhTCiuQ4p3JpEPTHhwoUiWi4FmiZxTnYqSCBewrrac9T4d59whk6ugPSKX8vS18Q3ZrMJ7zoPFT",
  "key1": "iEovQhxFBBgP2WhfHu49B9LqwS2vmdbBVXroFvLxJpJrzqG5crPv4LtDJcQXrD9QQaaXAyxb7ukGZe6JKwVkwaQ",
  "key2": "58YKgM27Cpi9C7aDtPqRxqCVESyUBtgn57dDPbE8fnNycXoGTKWqtkmJEppBbUYcZt5uzA5bNbSLT2U4rMpn8d45",
  "key3": "RQvnfP2FtCjcEsEihi9FGixdhDS2S6ASQBbdgY3HRw7jCc9DbkGknYJLA73xVb8p6rKcvGAJkSPpUDiQCdXWuJp",
  "key4": "2CqFdwMtkz4zeBaLuiUYjaD7Wmm2rEWsQva92af18RPFJWt4yA1uk8tZ484Htu9bkKAALC24PxxqQtP6baV1wuzZ",
  "key5": "pekeKK551SPhyKBsq6GchHuyZTKKj4R8qqCgRGkKosujc4U5SwJvoyZvCdevdLBNfd5iZFjZd7P9KkiyjM7ChSg",
  "key6": "3ud8Ea1WxBVAat2ityyTe1QWd9KGQpwj9mcPDPwkhToFBv6YvBTTcyjvYv2rg3ZRUqMTzxWwwa1uqGwJmAfeWcyL",
  "key7": "4rtMxbNcZowzt4wjbxkuSoV3bQwZ2wFBi2ktMJvtEE9g66XyFarqT7rzCkWUTpEoFr1W776puchDuGUfdjUV7jxT",
  "key8": "4Gq3uDKeJMdByJFz3WUditG6Misf8DvPL6pjjWzjC4jinQgtUvXewLDHsN4XBohE41HbKY7a2kW1zERsZDUVD1P1",
  "key9": "5ZgZb1vUHyjJ2NfXMWMGjeM7serxhRtMmXSEs2YphuBq2BfDEizP2pKBUK8uTdhsJZ7aB6uKFuirNF2drNLKDAd1",
  "key10": "mabXMP2YyJJDgRR1PkzEzvrSGnfoonyBkzhep42WXAY5igur3NK51c3Xkr2gsyyPtwKTDKmrcLvhbrsZeopv64p",
  "key11": "3b9T6iQRcnjM2qkwwmJQPqq3RWQxC2989FWW5Jyk16jjfjJN5bvbPMEFvkLEYpwSg7haZz8XgJP3wt3mv4gQpPmo",
  "key12": "4DcsQMSBvEc7srYP3hwtn7fnZpB4VKT6msSoqxhkJYVWMGhbT6nDBpQewdpgg1TJXVfTbfSQZm6aSzBwozxtYZun",
  "key13": "2SZ42wSMsDKHNadG75M6Nh9wwcmxbjo8Jx55qH41q74QiDuVrh8dvpAMTCoHKnHq8bzoagikaXvqDGoFS5Kh6b4g",
  "key14": "24tQkA2yikFzdJRodm4u5uKNJJ8Zv4McMoD8tMn9WVKgumxG5TbyuyDDpuZuq8VxEfxSKsXv6fyz4HQEkA4whakk",
  "key15": "5mo8ZjmXuMxPctdpRWwvbzMib9RANmYmjCSeQuyVAEeiegQGwsKtMJsSdY1YZWQku5riG2ueFyfvyCwk1UYWXEFu",
  "key16": "5dVHHXpe93cj71co2tGVT3v4C4scnH98kYgMpfAbXoVUYSVHxU9qZfBcAxvt79RJzvQFp3DaA2yV2N7Xk5zyTzvx",
  "key17": "3ytn8fxs3UNuLRNfN1SWha4ppuQ5XyzM1UBgBvzpxjTLgS1ZKGrYz4zoNT5B3q2rbG9hCEfHXwCKcA26vqZvDpcp",
  "key18": "yGkmM6P533U5tsURvcnzjxprtx9cz1p2KWRUrHsYF1R8Udtnrmm3y8deqL4aej1w923GYVxcEacdgkR3qh4FyKU",
  "key19": "2HiKqdLEcxJ7RVTSztwDJLxoEsZy4z1sbovU2wasufWWaJSDPyTbZVCVWYmMKhGZ5hr6QinA1fuP2D2hFgQSgDUg",
  "key20": "45BACNCYgH7AVSi5boiNfWNSKpC5tu13aCCwnAUVaVSSzahYU15Q88kADWF23q2on3Bsq8svkAwzBrqtkpUjqiEF",
  "key21": "CEfBtyRaLumd8yN63Z4fscAVw2MfeMC6SGurPLd5MXR4wigp9KZmGu4L4Hc1dKTnPmhHaVtfu1XgnZCHAonNj6C",
  "key22": "3x8TDmTvJwTxySHaspJ2YoMi3koDbBek9fAHMZLamJ37X41XBfyGpT9finTqDieaMnkCf1mC6TDwdXwzDb5wcydF",
  "key23": "hQi33e9sspiuJagLB7NuM69u7fxM6tGTYHmGxEp8mKJY89vZfveiQwXbXpHVZskUwWbiRhdJ5LNwibutMiRhzwK",
  "key24": "3aEsARwgjC7yJmpQYAfQcBYhvqPC38jUx9saT2VSE4TqRRvApjxrahWYqav9QNTFev8guFin5eWPJVg7RgkvAZds",
  "key25": "53B5iGgPGnXcAoX2Xax8vHYazT4pNV7ZGazZXsKrNREdNcrW4FyQuipvRWUiirbXmqHjzc9kVnGEgMJpV2VutpKA",
  "key26": "hiqYZwQB4BqZKgi8pCh4MumqLGYGQZpRC7aRdEJ2rb5woZTkYAndm6T3bErNBMzsXHu7EqU7PgPhTs4XK38bBFC",
  "key27": "38jQtwMzm4ZWWZRmMLSSoku57vs1Yj6tUX9HGs9EJaxZazcfHhopHpojvVYJs4eEN3d9ocqBHYFLc4AGG3fzCai6",
  "key28": "snqcS9RakAbyjJv7fUHLjYwMw2GbtDoBwoiT7A67nAfBKdPeS63W6JB4oa2yXEr4TvqCN4jiT7f6of51eHPZdb9",
  "key29": "3SQmmWJSz5aMenMy9HhCqvCb4mFLCF8JqRFAez9u2gK5ayzucmEQ94CKnBu7czDGa1cynBf2Xg31UaePQFDKFaaF",
  "key30": "3rS3gNxLJ3F9YVZW1CRUq6WMDNh4wRHY92wC3rDC2JQvnRqfABywbHQCXhaw5USM9nUZwGkSp9QgtjsSSWJ9ewC"
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
