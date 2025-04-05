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
    "23YP8TPmDfytNxWMuEdPEe7MkNxBtVZe8RHCeszjdb3h1vj3vXMJohY4rNYPQW9ABk17TQ56qDnFfczHxUKNupD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quu8ojpSpwCGq7gq5TdDNz5cisEmCzdUUJD3kKRuaj8VoPuLyvWCHdWQfbusDLyStchmgVgVqyezWrQaAfWXVLc",
  "key1": "3gXc2T3zR6jXHos1dgUrPW2qdBeYJfF7Wg5qTw6YtpEwrEhGmUUsz7FMJxQ1ANKYMBE9eh8JmY57sy6yn6dio9Zw",
  "key2": "3ejNFxn83KxumZdD4pYKhNFEjhAaVFTfgLp9jNfMcmMAz7intKTJF4Cz2CbHDnwBdBGWktz4p5KhmzpZ9VPSUUoQ",
  "key3": "Z5eDhAQEMxgdoojHUuKg4ofqgeosPoNwo6u2ZMjgJCLCnXrhAbAgvg8iASa6SFhtAserPrnsa5p8h6C5QaF6XLf",
  "key4": "XBavBnAwXpxnEAcj76z3H5G9he7Pbguz3975r3MG3PnkDiiFvRaH1DT5FDfFq5cibvfQfgZgCzxk2asNohPARYy",
  "key5": "29VivUgTKDvgoCPrhtv6Ts9eyk5qKiG7Fcd7eUp4Xs647EtfFdRxH4o3bTapoC7q3zh3K31QEpiAshYgyGPxvUTi",
  "key6": "dTZKPmNUVgRRe3diy8JFdHhGzAowo2c6VhhNFceJMCFo9zsKnN1ugAQWNYMwPMYDUgN2mEKX7ui5AfVNUZcDmLW",
  "key7": "3UQq1r7tzaLTv92N1dN4y2DcyBgQSCnNz1XBRL6oT2VdfFmUh6cYpUviRHwCm4h9Z9Ad6JyVCmVyKK3rn4fz4JqL",
  "key8": "4F85KwtxSN6LTzQawLcWPZP1Fgq5qnZYmLKAJJJxdrRiqkezMU6BvqQjWN3GTJvkeMPNZ2yw5rsDCVtvJeN2VyTa",
  "key9": "5Gq4Sn6ZVJcUzyPx5dZqgSyfXidzZTv3pssEp3jKUMH525BJnPmfrdnEwsfyknBTudD4jYMpznyDmDXKCjurv8CW",
  "key10": "4i9bCtfEjaaAuRYUU2wDAfGrmfTjco3GhFfgGSenAxYDTTK9aY3RSJ23QZ2m6mfaZJ9Dmf7N12uGedrLJUtTkUb3",
  "key11": "4esQkUoUGoKi8Z1c8DotPgr9Fn1GJ3dQsArHm73x2DnYKMWQ1CFK5dnyECMtHuigRxBQpBevubfuKwJEALqHs7VJ",
  "key12": "3zAP84XRkBcgX9W1hTCA9sMGFLBVqDdc12pCbnx2UfAbUbzPhw9qo4KB5HBvLjyfq8XRSRNJz8QEWpouayij3DSd",
  "key13": "sqqcWKyvtiHC5xpPjhnxbbbCwrbsQD9qPV2wtPBko16JUNk7vvtHEVUX6cjoes6da6pHfV1ejwM25MBrePDjWwm",
  "key14": "41fUcxdxKvHnudqwbnB5C1BBFNjC9brLqezKYY1HMsxaZ7oo5zkEYbVNdfHFg8fidyXT4Kpiwq2WnJDr7M7qPnM6",
  "key15": "4JkmW2yGSzaFqQ2QceRJj1ojo4QAYxpovGcRaSp7t76kphgh3vwbRSfeYoeXH89EiU2PaKBK38C6FFH725skAU1U",
  "key16": "vNTDsLkwzHwoPBVfZ8bnXyDdaAsZGjgGWj5WtQqwfpR6pHLJ1PR9T6tNJBcGGdsJj4RfTitRRQFFtDnZ6Kjk9cB",
  "key17": "3C4nWK2mTJ81Qzp79Ft7DLwZqTRGVcfiPdTvM6GZ36LCRa9frW8APn1XjXJaZwzxzSjvsPBd5iUGJYf3CXneWyu1",
  "key18": "DW73F2H3JVuAjpX2sFwvmW3RYHwfAU7CM5xhLx3JDfAiNrEBhanHXvvJxpMK5J8PJtTahRGSv3a6tVewh46sJeu",
  "key19": "2fbZTBf9XqYAV8vsjWny1BUXfhMFwvDD2K5jaamCKPKV9S72tsXkrhLgMxNzaMW7wVdqwg7HUbefXdjMEi8UBikx",
  "key20": "dEWJx6e4B7pzUYa3rZkn96LvTYggedfU39fmPwNMuNP5S2ysb1693Q3SkPtA6sFHWEP4yW9WxeSwomnRALwpex4",
  "key21": "4h4cjfErWNNQgsACin6naywmMbnSFQhVxF1S7VmsNBpkBsFntfhi22atMpxEdeW4ivDUyzWFHbkpBTAAZpXbaKHM",
  "key22": "5zdvA5jqScFjY2pwVffz5ys7eMVbr4Uttzs8PznRkLKy28CwVBeicoYy38HJCrJTCc5F5ZLTFmJJaU3S9g71uYkE",
  "key23": "5SL11f1bYayHupmK2u5FmWspbFgxjFud9t4XDTn888eN2gSPJQrnyehRuEYT8V2sStqRZayXY1WQz4JqkRKuZr1",
  "key24": "pPTLtHDzzzkfcamGedcbLnyT4fQvCYee7ZWnFpVc6TjBzSnFVVaWS3RyeRz2kr4YErh4R6KcrH7PZYV593aUqdy",
  "key25": "5FxUnc1gczZq55BVyPmKD1eNoFUW42Sj4ooCdqoJf2f9NFi9oj3bmMrR3YTZUdvKP9bgUEQfKSbbepgy1EHzyq4r"
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
