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
    "3Q5GANz1t2wUBPY1aURjca8nDCGYAcYprUgdTJU3ynYnQNpRWH7ScbB9hrTFeQFLqNDNgFnavxUV6gTDabeDEZ9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L39qUcRJfPrLrNXVHkLtMxWx3HeNrV1hLiAowLETA3tJt1WtHUZnXuEs3xwkXBrSKp7zcHXcCoGX3njxcUYJTEM",
  "key1": "AYtZtLaX5DdJpuydR79T8LZFEMBfPXCsjU3cRzfXBibPhVe4voVb1uw8w8TMGpL9nPcxU5KTuJqC3KdThgXgvAe",
  "key2": "5Qjz4ifc5MKi37Cmq4SWEDkwtpZ16gXxa8okaRZMUbcisiQ1Jk3oaBCPiJEs4S5CVp4hKxRbYRXRsLiMtFYSHt23",
  "key3": "4DzfEjxJ5v2LuQESzBfKvpYNAMAMTjA4aUhevbvxuumggat6T7zbV75mzqnHkG1nibjL2NnDrK6892yTC38DyhQw",
  "key4": "3Utj9xAM3KVeU5sA1uDY6ggWgwk2H5vqpmRQjZ8Rxh2SRNM4eU5fDLgpQkPtLxKWNxsZYx13mdaNrC8nyTa933Rj",
  "key5": "3G5BPV7vRHgPwvAndciXj8wvkHQBLKLfTKhsA2wsjBNs3tJ6ffrVJo8hznpmYGX1NWX9nGMHc2RGRKtTRvxbaQhX",
  "key6": "2jbBy3AB6jT2eUWvUi5JJNFgWDDvwvpJegbGVJvnpfKqRsmpNNZ1ZyNLEMmXeYymQFQgsatvUQ4mtBLFMpjeF5Rb",
  "key7": "Bswe65tA4GFPxp8JmCHra1PeJbeJD1MV1cA37tdZLTsFtq1MD8bsrfxpCGYRMDA2Ke8fJ39BgFwaGfGuZhJZX2G",
  "key8": "3R95581yBSmu41zThKxwn461TXwFK5HVLozVGEA781uDRadBTsHJ7sNXQUVAEyrnwuCy8BFgNT64HGwgMjK1cC14",
  "key9": "2MJ12W7h7G7SZt1VTfZbrC9iCbXTP8uxFrJWvEhAthCrm5bmQ7NuZEyLQM435ihLWMgq3ffFsm8ZsezdwRCTVhxy",
  "key10": "4RYnThGSxgWCvS6QioW9CdT6ZswHefa1dJAfnncd6p5kFCmKw1BCmP4jrrfCHAUYBAcghMhH754G8a2H9PbMkV7L",
  "key11": "Xmp1snXvbLmQZkLUK6EkDNJ1d1jwTBrUic9XXEUnBYU7mKh4Nw8C7cnZB91t6FpBiD8vjGqCHZebxKWYkJQy1TT",
  "key12": "mFajdyHDbNrQGvv8MH8UB7nQSL1vYxAPNirFnwp79HuRPZinEimjxZS9UfieLsYfYQkgLGNMcM92yqLeGvdhZ98",
  "key13": "4znXGD8bMWSWqfutkcv6tYemCPApofzjc9vvSTFR3NqH4Xmx8Rc6zUrcLuNogMnXbCZjGJcww14xynRL2NkqukVp",
  "key14": "2kYjKe4nyNiVzmeDa98RSCcD6gW7QGftg61tQGSihCPnCSLmTTARtiPXjTWMQt1Nq3T6tbQzSe6tvMRp91NnkZRQ",
  "key15": "5cH8fK66Wg3dd2GqKFEb2LXieJsGFvocLrowHtQh7XvJ3xdXwz8fwP9vpVsQyrU2yfuTM7AEroF6eYB3fQeQdNV6",
  "key16": "4QdxJidoNngp4JMDWRkNhUxmzFqWmrC1s81sYMydRag1UQqrX8w1SrsZ2vYLgvvo9Q5tWUxvhnn2LV9KqRuK3nMD",
  "key17": "3DZ9XyrNHKUTA7xXoF4nn6dwbJTjwHKV4NLfc7YRWpTeFHnNeu9i3GD5Ttx2JE2KG2vjoiq3UpBwL4JZFZwTtDVb",
  "key18": "5kphwcwc5s37TUR4HwQwHgM2fgpzjEiv9jt8ea9Q2KQyKirAhKyYSQs63qoF1AzAXF5wN15GnyRKGW33a5qbH3Z3",
  "key19": "4heUQijHSoTjzVCAkJR5rWZHqZ3bWNx8jbCJxQXVttUMd31SKvFeY6E1TX7zZ6RGdQEFCgTU618LNdTe2A1m1qJF",
  "key20": "3qFN1gWTxEAcyAjaMSfov84vmnyxyeoMx6JCzuxGKfNNW2dHu4jy3nQQjC7BVGzk32JEmhsFX24CJnFEL377igZD",
  "key21": "33byjnm52Db6M3uME53LZ7oRxdBekgp36TuZTzCCmCMj4UYu4uYDRGTDPV8KCMqo3vM5g1q4LX4k288bV2bfYyr3",
  "key22": "4UxQbmifmo3t2G359n5XFD7Nu7qLt1VXmnj9V4PvXhLjYobJXxixHwf8jFF1PNNhDYyAgf2bJFJc7LyLW1BWwXJv",
  "key23": "5sm7dT22TLjSwjqQuLXSvvbed6Wiup27Ah7ozyHwe1MYX3ccg9x3PEg4aQskx2NcCfUj57cUDsve3R6dggKsZ3CQ",
  "key24": "4N4Hje9VxREqsJm4nn6pX5qZ9LbqKESnAYLvJUfULtNJ9tncFMbvpxhW63fuH9c87yiUJnobpKrSbuZpH1kLymgk",
  "key25": "3GnoKtT4SVGP61FpnzoNwpLx4uinvBctPwmrCYSsVM6fZPS6Vacsvp8kCjNyzQPrLRCVJ4QE5rwcVF16fzsJdDxZ",
  "key26": "4Gijk5tPBmJThpP6uEs4Jg4jzdSUNNUWGZkM23dZPaVfGdbRGQyZxHMximZ4QbnpzrHKNY3NrkuJyjPT3FQ2zUDL",
  "key27": "2cdbVytUk71JpEtFtBDWBmcsEcmmhCBCywmBVwbcizQ8RFsuQeRrLzDj9Gpy2FNNGTpEbMyZTAFkLX9V9cS1sc1n",
  "key28": "5CePRpWRiQxirEVh1NQECmRNeGssF2UK3dCv5r3VrRkaJqjzNhBxPinzTWa5jkhALeWYRRADhu8e1gT9CD9YUe3k",
  "key29": "3jHDER1XNb95Hv6MZyLLjj1tqtvpoNUJLke9mPzLpiroX57Z7z9E1PJrS3WJVcCWZMrdYSWAi9mdv2GLBLm5G7zf",
  "key30": "29vqhH77PAwJNji2x165Q8YAVVWNvH4FGcHXNB2EyWBBXU74pMybQ56dPHaiqJTLPckZ5PkYEb2dWiqfvL2ztdks"
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
