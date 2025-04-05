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
    "4ms641GLgKppLrUK8YEAhpUA2AT9oGw6p16MLskpirnrx4ogeCSMT9Pembj7SDqKejg8SRCaPNh3Pqnaxv2BvFoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJpxu4nd2Jh9qUesCL7Qs5tJ3ja8sZ594rgXVnr4dJ4X1z2oc6ywuviSRUudVJaZTjb2Y6i9d45C6ddecb5TTyk",
  "key1": "5d6JsdMFb6AtVj25Xj2XGqNurhGCWiLXp9u9t8ukxaa5acfyhdRam47Px2iCP34QiFHksSHYW3KgFQNK3YXBXJrP",
  "key2": "3mzJevPY6kNJRAQukgGT3UmRdSGh2uwGSg1BE212LGkFTxdsqUZKkFgWCzuapyvNJGYUzZFE1JYEBV8P66uQW16v",
  "key3": "5Cvh2YJHRsni3GmTZRSCxj72MWpznrNyoAUxKEb6PFHDJ8wpEdPDxSVhksLJded8SMwdYJboZXA32HPa5CAkk9iN",
  "key4": "4gZ5ySHh73uvoHSAQYinpRJSsde9hynoMg87r4ebBGrUcqJiNmzGHRrJWDH2WhSzcRRoCNrZxQirkJRfwK2RM2Ei",
  "key5": "5cvRYuSkXTjM73usjwYUv8qbtVo24mAjxbB3CVSoWGBNGwDzHcat3CMxHx5X6NRBBcYjv9yb9M6nUMHDKD9QYmaT",
  "key6": "33NAFA8HVR3E25hH5jzuE2rQ2ugpUQQxgr7obEW5wCVovadsrySnaUi28nda715Z3g4sfWvG5R7SweGYsA7E2Up6",
  "key7": "551rowD3MrLoUKStPevyqfcwq36SiMbrBNF7EN7mcQXks9EZY3CVC5xkPkRM7hEuQfqfCZ8eQtuBgrEpdYHkgE1k",
  "key8": "64P8MgWDx8qoeKiegT7F85w6YXK32zR6w7vzR6dVHGqA3WirNvPhmkTy9hk7ZRzFdu9Ffq3uWYvikjYVkHEvrxiK",
  "key9": "2NneFPJUEem982jNCeVEGf8uVaFS2nZazcPS8QNmKjFwzUo1AQSGjuyBLtyYwyrzyz1tyui7Fr2NQ33re1U2paW",
  "key10": "3F1GcRjoU1knHXDsSBCAZLjzcBFYWrV4bPsVV6FNpJyqXbZYSVfStGYau7XDz8kDG3iudTUwAhFF8cNDrDjRfPdw",
  "key11": "5aybkCU1VcxQAwQER9zUgsxjXobA5kyckjEjeXmu5GQfKUbpEjLW1n9v8rV6Q5NhwpphL4ct28zkfrtEbQe6gjNz",
  "key12": "3KgqYgbKzKbCrAbcJHnQTPcESedtWAWcR1EfkG9rBFHhXF4Pe7i774URYoABiUYPo3NExMQynL8PGJyj3HFYP7QA",
  "key13": "wyh3GEjwxHhckf7KGEycBHb8UQxSxZ7Vj9ZHRbvfDpo2WSVA7Nd83PNWEVyBNdoLbRxxcGteAiYa9ESbyFrtYvt",
  "key14": "2a6zjrEDb2XoPzh3MCzW4Ju37YFueF7cMRnFQw1xRthjttfiQ5WhPofnES9UP3nBmxT33xo92eAWCZxnaumSPy8P",
  "key15": "28Tj5XaJSBDV2JQokjvA5hyfKSmfh98zyCASmfwrCGsj1VAwcxEsB5edeNimM53wtpDPU42X5LmYa4US5jWWMVGA",
  "key16": "4xHZRRBSL8CARjsLqMmy2dSmRpvTzmHmn6bVMy2z1mGGeGUPjx7cUixE2gdtkmMQvryd2DepffL8aRfUff2eHPUi",
  "key17": "3ik5uRTX4aYcUyrANVJgZ53gMYLWcHDPsf2XgfUm1tb2Ez9QaxQx6ywcq9abmKVkrkBShPG2YXe19F4JBaXAu3Vw",
  "key18": "YrdeuvuKe1cHtMa5swnVTYaeMe7RizjmDujgh6eonDpHXACcXqAJT3ptUgW1N8884nkdtq9NtC9Mrnzryqak5r6",
  "key19": "3GGZSvy1982wEvt4fxEDE3TRgLiEAQ7NpvPdAmAkQJ3d4BLYHwJfV2dAcwqpYkG2YQ2fFoPFAqqUY7QDpBjrpiuD",
  "key20": "4cgZuXMHhB9JRE6JvSpbMKGxo4WADitdw4zpkpsgFyrAr1nRnQpGG11XnrcCT2sn66FkuxGh4b8hUdew6mjaW9To",
  "key21": "5PNEqH8JUP7gdbETvwqujCRwgL4TRTzkStoNYF6GMLieCU7BZ4pLG8gmCMXZcMMvK6wysSvXMuCduB61oGaUhNYZ",
  "key22": "5yitzDmmEZjPLog6wKzWKp1if62esfgmkShFPAc1t73gbjyEQUvT9koDcvxzwhqZiPQZ8V13PLEs9it1KH38s9Mw",
  "key23": "UC1YwFvarmud7qyxTx2vso9z7dZ8pML6uamUaS7EXY7zkDxd8ZKPE16TbbPYypzvpMxTTjUjqXQcLG5XnFaefFF",
  "key24": "ddE8d2qn2Mm7L2rqz2EhfSiZwKhRtsr7nF78jNE63cM6GcYuyLgbpfJRa7KzSD7MvMHWM1EyWPqBvARWuBLzjqc",
  "key25": "BPTHSFc9hJsYVZPfXvvx9S4qUck5QGmnY1sDekBWJDfLLoM3UZfBhdyb3XKG16HTH2SGwV665nkk3tkcvQ84HHn",
  "key26": "2LEt2BRJ4ctfcDbHVWU6SMQmiKMfxH7AcyS53vnFadkVPacLC3jgutRKeBo3aDRzTHUmZ1EBuUUKHGYXeiGKyH29"
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
