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
    "xpCY17tJp7ueoqbh6JaALSoeMFnVTgaa8YKHkadc6StX69uDLBGMNgz7Yn7HV5m5LyrecpxUmm3pHTntJdq8FPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LKzxEgXsvnY8zV9YEMfBTkPNQ8S3cufApHMMYLeNtjvY4EJgV6hC7uHWHwzjPPXaKMpBq91X1PYZcDySo9m4BFM",
  "key1": "4se8Qam9XQASaJWQ4KMQ8euYqmkwQVZNbg9TjcgtvxgGNqwyQZUMC6e14U7oGaDvKt3z3DycmTGZiwz5LEBkSkcG",
  "key2": "41f46kiEm1QtLNfUqkvmkTbWMY9QXTP3mGwBRhLDsbm5XirzcYybmwzG5nvySD12fkifxyNXZzycRPRNLQADonDk",
  "key3": "2BcSrd1nPqUBtmTZwTssjVTCK24zUHRV29m7hopvcLZfuVSzoKjyD9MqdXV4wPXfR5NyhUTWmT9hcVpxLqiYbdvN",
  "key4": "2FM8yj4XMwHzw8P4QPVEYagf9C3ndvzbooTRaSSXVtzL9G6eyPsVhhy2m3WHGLGkEk5BSGtmtf1CFMN7eqf45hte",
  "key5": "2oTA9BcC98Zkjxx1peiQeD5o56a9XfBeCXT1NVeUzTNEuSJU4EbrxQpAD6UZcE3qNd5GReLC7CmxLcPNVuqfDpvL",
  "key6": "AjgWkZjxqLSFg6kai3Bp9KEUDZZ4MWtxe6a1o2yhtdYwBM7sEpdeeCUZMda1SoNAi63x3UKhjYdySgopDa754J8",
  "key7": "3vEE8KqNdK7WyVEgL8g9uW6fVBp2XEfVM8oSpWn5tNb4uyR6yb4L3mYCgugn8jMiYtvRS5dhUmKp4Nsa47kCtw8X",
  "key8": "2oxdjdwvRmbTTjseq7QQf2zQNfJbGrUUhWwfWDXPhxHucqCCrYUn5uSmeoczUhsuQtQqi5wwvtCzeAxefZvRtnfa",
  "key9": "gUt55uT9RcVFVQKz2jf6GXuHeL5pPoExJTCTAY1v7H6oVyb6hwRHUP85tu12tbbxzHgPuCGesjqxq5Zegi1xNX6",
  "key10": "qXHFqXKszHhUbncqZxmBAF6U13fa9M9kaNHMhVZocYut7oRRkh7ZbtktP4B6cRZDFzX4oFuQMJJMauFCuw9UD5M",
  "key11": "4sA315gzWXykXCPySkAJae6JF9PBuZB1uFjYhsva5ieTM8wGSygSqsTKWf2dpfrZi19oooFe3nhwohPhgQb1DTJM",
  "key12": "mKcEvKonP19y33cv8cMVGzGNCe1455mDJ63ASY4XisbkUnUtfUs1rpQnWVB3cQeXqggyJLCEB4cwhyxMHFY6Tgr",
  "key13": "2MSQjyE1DLb5pQNcKyxiStZzmJKUKnDXM4FLHU4NRz6wGgcjozX5EzsX9LN43FoRCKeDXgikRxuYBJ7pHphMRuXq",
  "key14": "28eaauphK6sbgEj3KMHzBzjKa2nFXG9TPZRWe6BX9vTPe4QfabcggMs8w9eQSCepPezurbrQ7KDwJwdcyEGAaK9h",
  "key15": "36BVibFdaWsdbLCfAGkjB2Y4hsxgJk8y3DmfNYYnhRQA3SSYHtRNeioq9ziXT4M6wKW8yzUbd2DMZz9dkzDQMoQm",
  "key16": "26HPsCNYGDLrXH8uw5prUcrL5pVADCtQJkQzR7tYJjujsaMCtxovxLkXHYwTgP7D3x2XDZLWc8qr7fZdioA2xUxN",
  "key17": "5hYs8QcPpgwQCy1w7eeDwfkfwasKo2af8p8L5vaRcyVhG6p46PfrWxdx13WVRtTzBFcoRCY7jf1gbXwQ8MwtVc6N",
  "key18": "48zKLYpMUJNdgmdymnBGERxd9jbkfJ6YudFVFNLF9GqENqfL786SjWcUdFpQDCQL5kBF21rGV7cnc1urf3yz2xyn",
  "key19": "41Jtphv8xo8NL4QR6CWCsQVbsXuNWSQw32ZgzTyNzRiycj6LNhGP3tzTJML9GUAxXRPTnfgkCCR1GpNeYCHxU7wr",
  "key20": "4cQp5PTUNUWw98QhHdFhovUWqwd1HLmy1y3tRyksAbKfAKLwK3Lt1jPMnsdk3kZD6t28ivjbJ32auNJfc1kxSDPD",
  "key21": "2nhUpPXt6tDKkwRTsBBkgsmy8pCd3tmD2NHjCWWvE66ZXQ7r2JNFtgpqNm6D7gnpmSuSLWAjreZHbyjAMvqbL2fR",
  "key22": "4dSpkCbwU7HaNgZnxt758Kvvq5eybmNzuUZU4EbGUZaphFEJwRZjBXbzrDKGDT7rLKschQrhZYxbx1M2YUiM3TZM",
  "key23": "LoCXA5u2GyHkuy32jTgJzy2jYfNKFKAXFwBPXhHGr22rijcBA335hHeVESMcF7ZEHwqzXypfoB8LP3td5FN9HZJ",
  "key24": "2Yusb2ctukr77tqkce6G4d144sqBsKbwcA2g5J9FJgKyvqtoMXsg3stt36ZJKaLTayf31vZDvjyEGwx13uGmjt4o",
  "key25": "2mY8yzFnQPRwqrj6WjC8wSpsPaCDt9rsJ1akkp8tFcr2Z4UciiSxNii7ViF7mv6qRVooxNSShUqrgYASb966m1qy",
  "key26": "4muyubSAXYrpDKVKnmSkmCqtLxFbaHpAkfsoMWY2EAx6WGNzFtEVwsX3FMsKhrPE7ayXUefAWhG98mW5oPRzqLTu",
  "key27": "38Kb452qYYu5HBSHRXmfkHQH6xGKncDeVfTu6gf1TqGRksDCoNV29grUFWwLa5vqDHuzNhPRKiSU4QVtU5YVEHam",
  "key28": "vM6w1qU58YnZTQ2JWMWkiwnevM42uvFtANsTRbeNXebqQxA4YoEP2LCcqhKBqa8rD2f8W261wNb66Cg5u8aq1yF",
  "key29": "2C8cQd1oXL6N3iSUqDUNjFj8d1Aj8DVEt6ax3rsy3dvP73jriBihsL5joRCjpVadVW1n7GEGMJqVodxncrdxTrug",
  "key30": "2DzLT9NvszJmBufop8bXhg1WiDdMR2AQ7d3H3NougUztQ2MJh4Tfaq434hJyxYatQztVS4Fhhoxh6uvP4se5znaL",
  "key31": "4RM33u8i8oGRX7PgGDcyt2NcgXUUoCAruUhTdspQRaRG87zM3KzYWC4QJPSfHF6hjMpe6XQP7JtbJtzMNgQeFWjs"
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
