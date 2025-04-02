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
    "3h1DAWT1mfPMeAdrUMJ39UkZdcwnr639suVvzYCh1V1KcCHkwvCUVPrtUm4ofGTc1rREbzZJW7EHHYgWnwL56gJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24f4kuSprTffcWZZW4Ncg3AM2SZR8XTSUMqDEaQb4An6hXcnpJavg9Q4WQuwZ9Ap3nSAATie8BPg7xA2mSarCoAA",
  "key1": "3TmHaouogPyzHsS8m9yp94iTk9gdaCoJapLKdfNsmpMouE39FMMVUFiK6kArqxvcYXaCb6SUGbWVUhxMNCQsmLP6",
  "key2": "5d4JLVUSDgJWSdKVaL4bArHpXBBQoC112cuKqRQ4KCc3RzYha52vTxy3prpxmWwmWB5p1PaXEY8ezyaQAiRdmAge",
  "key3": "2wi814iQcpFHtAA59YJsKENPN2y58DxiAvZSVdz7eiZH8M297hfkShChobYL9e6K4TbxaBKWLUHxmjXmHPPTJZkJ",
  "key4": "3FwvckgtAtPgu2N5Z7gwdjTcxzW7dkK9u8d1wgGirtirLFGxvgUhVgq76pLHVEWNA7VGAP6Vab2wiwPTAZBqiVhz",
  "key5": "CwiAxBxjDBzj4w7prdWEZgNyPwugEe7UsMFmg42xU8nC6JN3B9NDmuTsargkrHyBpyGvwJewi8Y6mJp1V8mvfQw",
  "key6": "2LQ75BjcjkBvq523Q4v94WCZqAFj9KUfwd29XkSeTd7QaoQPLMXzecpWcMg1o5M8LE4GfyHvYkEm6BPCX27y6qHZ",
  "key7": "3bdGxhWrd3xbn5q1uvPhjTUCMu73m1eZAFgxpuLWtfaKDhq8vPUZQ1AywhAnwcr294X2XjvYwujFNjeTmTRLzY6q",
  "key8": "3YVRGdjQ68HH3VMcFvXF8NFiiqNnTucBTK4qMMpWLejn2GhCPS1fffoY3c1gejhPd3ZiJtKazWMqGZrQkmRYnxP6",
  "key9": "3yPqj33XBZMMvzdHdVrd1zj6kVbtWEpv1vDajTVXzBFPhpMDzzrPy4cEsubZwLCTjFdf4kLk8XKMDcEkhx8xCZAs",
  "key10": "fC2AUFoXHzMzXyqzq6Vd2JYjiXhZJrtGPbPs18QxQEQQRtCsKRXcfFP8zS3ZXtguSZY7nrKwQ92apVpowxsrnz3",
  "key11": "613ShvFV4qW3HWcZWRqH7T8jAkTHMm4isPnnHGWvbxvUReU9gJTVyZtKWgAcCYrBWFGBGTrdFhd3itC9ZmnV9jSR",
  "key12": "22kYQebhmGc1pvaH8pEqxX639s41uD5foWGMtqyKpsG3YA4kgJQzYPzHtBtSyDdzJLgYw7uphzc99WpC5xfd3apU",
  "key13": "5RdPruZHbaGwresghcDtHLKhem2Zykzyi7aPjpUg3fReWM12ShgK3JrrF74QCUWNiNVCQui3vj1MMj2Yerwa6qGN",
  "key14": "27PPAV1ex1ahHH8tpJGGQ4egzwCGouW8u7RiLzbJRWP2ipRQpNQdAUxm9XUvyRJCNcRej2prt5p9au4XX9MZP3pS",
  "key15": "2h2DynHuRxjTkkJVgd4YhQmqVZABqZKTkzRqH4jC5QDrKiqeVG2SKPzc7VqbzNydXDAJLQRZ7cgSVmhFPgXE3s6m",
  "key16": "4q463XEUW2Z3aKyw1e3S1TTMPCRu8rmZKPNxWaXabQvN673n79NJoHrzJ7opHNWWq5rPvH2vnpQqABVrTW4hBAVx",
  "key17": "1HPQSJasdZjx37LwUWSBSgj4e9N2MaqKazpd5kU1eyJvDtMSxhx2TSBRUFYrYYhWc2iHRSfMTEAfzViTM9r5zQH",
  "key18": "2u4YNGY8S6ibZqLVN1BWidXVeaqLfowujqGm8iQL4QHYfCbA9aKTW8F66JNFERUXFKtKzCrn9UCrCfBVUxPymkLT",
  "key19": "zriVrbfUY4Hbd8oJ7sbjFUwVA2oPV69J93vjwsyuh7UnQQBAgRmBTq7Zp6LhLejUwjmuRNMnmhCMr3AzLmpAhyH",
  "key20": "5QWRKBamUZVdQm6wZ7Z3BmjgNGNPyUDuPbswJ36K43FNW7m8g4ap56JSvjBhu1G8vrPBcvbxbYAgQWnDydCgZ2gS",
  "key21": "51TrscW36HtdZHjz4XXx2PgE1Le1y2VLG7TfeigDpTutQmAgk6AVimHunm5hnQq2C3WuY99W146Y5n6QAgQhmU4z",
  "key22": "44cUWxhUjpRUucrUH8r7SpJwHHHyL964GVTGjWHzJKUtmfsaBNSj2qRgTrRdJr5krbPEMZMYKwDjnv8871ZmpF3Q",
  "key23": "8Y9udXzWgtE6Nvtg5kVLwDAAbaxXykuU7xTk4hme7NxqwzmsqP41WgHB1HzVgGQqbiZKGtLemQNrvaGRnHaqnf5",
  "key24": "5YLqsYjQmyw51bB7gDJk3ZR9Wwe5FRW9MpVHuD5N4PmaTRdDgW8BpxJ9QspiB4WBvE2PZacB2bvoenKkB6jxRSYB",
  "key25": "23neGz1WvNVGHEshyzkLy7Y2tri5dF4XHdQWGDrvrDTnMDcRk522tG8UccMQR1oVTdcV7tfeKJG8znZruJTc9tDg",
  "key26": "4Ye5HT5havGLL1jrHZL4FPpdmz4iY3tLUgZqxjfeZPTWivWGDiS1oLGTbj4FvP2byyEUan54z3QB5fKzzvLABA8k",
  "key27": "5SJWvQkn2RqWLKEkbhdXa1nTamUwkJv22GSqRmiUPz2WsrA8nf74K9ynGNgqsxLHTKNqTx9eFKxnjYXWdF7KEpds",
  "key28": "2uzsCDV6fv7L8Zqrs9TrEUCrrbHyGp7s7N7H4a76FkR6ruK8sGMvJnvdfu4oq5FTm57sHgDwwX1KYsSJbRp25vji",
  "key29": "2k3v8LtdukVDyMsqHsQcMmrQtJUQT6Kj3XfczfCjxWjbycZn6TRow88GF1oeAMARMJpW4rqV5EmqfwJ8aKUCkEAH",
  "key30": "48NMefS7fQbMJyXmwr1VBrBPXgJZXf2ftMsbj3538UDJVNZo5iuZKQoVbgHFtDuWHVYda6TA5J1My13AoRosgyP1",
  "key31": "5QbccPYCoBBxEefEJsBrzuinGCxsrp5N3gncChnkT8F9NAC9Gsbf8PQG9ycMj6nkRLVYbntXHNHAyi2mDpbVvHjF",
  "key32": "3Su5BPDa6biPggckyGJgSgsYaKGJpARLzKnhNdg4ZUaX7oBzrWUS7qwZJUpHRgY25z7gxGAa9cRsefjFS49bLT3y",
  "key33": "5LYSLPM3kEPtN3SwFfMTuZhwuAjBtXqdH9L2NU7oK57g1p37QwoswB1JaGeNRPr3VhSa24MbMdNoJawobUqqtowy",
  "key34": "5UJe5kXPVzymrcsWoxBUGyjNDGksZnWeKq6kbJmqRscuWCBabdt1iCxqPo61pLp5HjrRb9xXrQjLdapAuFYE3L6Z",
  "key35": "5zJ13SvZ86wPzFfycTF4BLzwiB28iwb67ttWXkhGgjhDC3bQ5PvmwP74WwTWgYM1jCrfPZSNn4RacjwXXVhGoHAT",
  "key36": "32ktovFMtbfb2gnf2j7hbxZKyfRPgAY7HvaiRMWG2QNNqdbUMzxRR6XRKY6t5arT6FYRD5zNNuTJBGqaECPXgvhY",
  "key37": "vn52GzKp6RGmPjbMY6jgjtiPRzksztEoddA7iFJh966R2P2aPzZox3uNzmdFD1kDkv9tC6ZnJ5dzRwtTi7tHtpS",
  "key38": "vg67JVq6PQVe5REY3U5jGZH4cStXvdQfJQArDHXRwbmGk7P8QqhenxZ92UnZyuzH7bLGozGWy3Ps25SCN4DCKVx"
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
