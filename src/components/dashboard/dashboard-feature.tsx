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
    "2RCKoaFq78Zstfb6TFJmnknQrSnBbB3ygusyMb8HdHFxBqdFn1uWraRNDWnx9nLamgxiBuJG93z46B2K4Hf3FFqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WntqV41T7SLwXpLQwu3b2pkAXgvyRBTj2jhep6xj5S2hTcbWbt3Vf1trtDqTGBoFdxfwWrEpipN2oznzEQJQNUs",
  "key1": "3Zn1ifj2FfmYdfAknoAnEaQnFbNaEbCf6yz45igDgXQAFG3YDwezCKxT8mkYX4sfeCJAPS6ptKB3PrfDPZdC13i4",
  "key2": "3Y9toMkaUQdWT4CRCfTqbzgNwvwsuVc6a1oTLYinU3Lm5cvGLR6eWgauB11VSQkznRqRswGUhG3xrdk3cDsKWFb8",
  "key3": "4AByStkAr6K5j2n486LGCH3nQo7w6YN1WvB6XQzRXWTUHYSA7LehooQFf86t4M1fSbE8Tpt7WGgELqhoLFw8Zpxp",
  "key4": "sEyyEQ4zhGS23kqGBhuQGTrBjjjUJMu7veHwVq5cMXMnFoh3ECQqSRYGFF2YL8eDhGPwswzrzb6MZ6b8RNaE1b3",
  "key5": "4jjuemdGv6qJAdapp2RkfnuBqcZmw5Vtq5dQChD5tuEYG4FbfRT9qJvTUfdTejLSavfdnwFTQiYAtQKsN8gbXdoZ",
  "key6": "3SJxXzDLsj2teLTmaamJmRKt22d3Mq8ma6iB9L4S7LgPNeH54HLc1ZQemYAe4CZCWYkvTNUj7bTgtUqZHt726tJ9",
  "key7": "2fXgcwLTrr1gk5uNTb29KcLS2CJwzyYnravrEkrYCWnzJv6sNZjf5CxQFZgA2hb2cdiRtn8qVrWVyQZGQJdJJNx2",
  "key8": "9JKy8i6tnmDZsta6K35caqGpQ57fcWU4KDgwrA4NYJGEoHEgDn8irj8un8GTUHw56zAvSdp1wC1YtjkNYiMKWww",
  "key9": "5xdtjwJqZqibnw7GxtgBmbpduHhGeGMVADtyUbMjuXYXygnRCZvFEb9YNC1YaMYrNcX7gFHo45FQgGjhirHAvAEW",
  "key10": "5BvikiSESGiRhrHZVtegdocz49Z2Zag3xTEvQjGeAApVXAYTt4xc2MPxdx58exzyfC3bGyAHQpamMNaC4mJxQXsw",
  "key11": "5Cs33yQ3HAz2y2J2Rw1DbDrmYt7td3jfcw7i3QHrzG26BUbYiH4wPgcnRPxGFwD2pcVvGnFb4mw1qV2RRiRV1CjM",
  "key12": "4mk7HR2guDmpKi2ENZzMREfxxP4P9KVkXCapkpqMXxxEQMGpNiGx8KLkhVSPyBSQWUEc43qjEGWjJV1u13jEW68A",
  "key13": "5x2U6jdc8cewWUMiuFayZY4V7cwHJYznYSgocB5dbXMzdd8ekWBU2dGLKnVE7QgFnrLFteFzMaw3iSVXc7RjvxzL",
  "key14": "5uiejHYXWB5YLKrxjHcctrspxzWvckkmGTcKfwjUwgmvXJFWpgkyQsEtCZUWjDLz3b1GAVZmSYwtgtmwZ1NbvPLq",
  "key15": "5qg99vZRrU1AuvXbqwBMWr4ShgX4XtW1uaibGqvj1eXAtX34QbnTi7ZPbP8xmmMufBE8BvAWZwJ7QNiYsQKYQ1zk",
  "key16": "2ps7TXoitfckyCFK9nrzufPqsr7os3RgQeNpq9ZYjJF9eFZ9wAjZTNi34gFNHbJ9f7zP5ftct7bbqcTY1QtqH8mH",
  "key17": "5yu3wWWNypq6XohmyGXyiWiowjWdNyFLXmnmVQG5KK2tMJ39rnQGEQjL1W7Pmr3xyjmJhVU39bCa66E7dh6ZAiY6",
  "key18": "3eSHqvgajZCExV9bdXA5XnNjRjCoa5DGQrCFfDxrWdneC2DDqugyzZjqdmjnKX8eHRJ7mLoq3mJDk5R5W6qsdXGK",
  "key19": "3qzL2d59nHhP4jrHo1ghHt8yz2aGLkVUyo1u6yk1B7ip25u2VVnrRcYLwydd7pkakVe9pF9pbqxotGDi12t7tppM",
  "key20": "aYSJWiF3kmKrBmcY998Rfo9jdkdyKengYjtKjgXMynbSc2B5bosfZBfyL79e3Q3VQMEznsmTPju1CEzCrfZ74yc",
  "key21": "3d9TH4NMTZrZpynhsTQsoq6Pm18sFNkQ2XTuAs6aRg2vqvtyxUgL1Q6QLGMtPyCGCcbx77yKccGEvVG3fKHS3BYb",
  "key22": "4c54GP9mem9bgFK6K4y599QbmY6Fow7MPmg4ZEerxoruKg1pDXVxiZz5ebGaewMQsREQ2wDPPQ3U6z7KuhAncK2K",
  "key23": "4HqRevUexBQxu2BqbJnx1JRV2ZXV4jhvaAUgVDwcjEWYr2fmK6CW3QZgv9e7anK3tPe8PSvvAFD3FyfW7Mc2ZE3H",
  "key24": "4rDtXSdDDYBxmevG4ZXN57cuLe11SHjnTvVAVMvQgPjW52wpWX44ssZChsWN6JLb2by7s8bF6drMhfbHPDf1c3Hw",
  "key25": "2UpqM4L3ocogqBHYusyPZwYiFvpEPJTAFrA6tDxuoesuvwugzBark9Wy4DSLTimmwhWZc2hyC5GYHZe4yLEh6u6Z",
  "key26": "2pzak4uSQjXbMfBDobsURUn6UZtM1Am4zuK55CEx6vL9eR7mkkPwn6fsTyTxMdQL41dSqk5DepJK8CpNEcL5my7R",
  "key27": "5fLdRd3jkYByMaDEdTTBpe1j4hGWqM6Scv6VRkMncmbYXH8CoyzENTB3gm6nmTEvUHnH6rbU6wLB3i9YKtorfHix",
  "key28": "3c2UNa4qKfXVBNnyTqw8vq8sJmUbmSLCaLryBCVk8x839e7cPKnuh7kgamQpKJzc7BidrV1gzPyKbdU3Xjm3EJ8H",
  "key29": "2AWBXHkb4sxXU9V926WPK4UqhKYcSwro4rrQSAsvDkfCiRrDgaCquYEBix551Nh1wCP7AQTJ45NzLaVz47mobiW5",
  "key30": "8WPXf4E2gnew6bb7spGDexiRLgiAt7xcEvwNcbynJPLM8JLKiQCo8ii59H1kBvBL8mHwFqi1USoMx81Jb6pwiqp",
  "key31": "35GFnvdNqU6LvXibojGTcB6agcwjC3PoJgi9E8iJa1SkpawEH8uYB8oUMjtLhRTaBVRnsV6567uAygtBkn5WBLDX",
  "key32": "5LPHMQX6ssueBHRkLTdDhsdCw1F3EiQcr32hn4LKhy7JxUZifk99umAttuzBCTzbn3rN9o5ZeT1Res7RidZnZEsU",
  "key33": "39w4CZVJR3WHdP5jbNQXtEPnYUUK3gxGSWQ75thUuWRYCU2amfrqbZBH9LCnRiJAFGYPTZXmUB8neoeBNdENg7Rm",
  "key34": "5Jk4qGvQ64B6KBx1F5sDPc89xium8GDPHvRxeeaqBu3K9Gz3UusCXRhvsgmbrDFN4eUmX7HN3guBMFoqoy7nWhLg",
  "key35": "2zdFNEPU3Ug81P1x2Yh4zrFFFauWPwWTBfdfHKaS2jP5iqXpRxy6F4jXLn7JQetgA5KSpdoPmc7iDoPys9Le58pu",
  "key36": "gasMmed3CnocPqwXRj2qendusEqVwej6pwogtAPuRxdCyD9Zi5v3NZ2aLAw7LRdCvgy3eSZJ3YCbkWLnsnYTrbF",
  "key37": "5NZDwn4R2KPmuRmhXw9WC2jVZT3vfP9Pzsp6b7u1KKGLSAAhtDPgfrZ3AmcVArJ2k1u4jMFK5RcWL2rCw4Kszyh1",
  "key38": "3yK3cmjV4hESU998Nbn3r7mubF9xbeVgPh4wzNprW3L3rnVApMbZDWaxDdWd2gSz1MDY5ZFdDsdpKfByiphgwpeD"
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
