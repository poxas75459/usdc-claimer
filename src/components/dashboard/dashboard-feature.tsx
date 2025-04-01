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
    "2FYuT2V3BrQ7Q9oqamXeHnrVtW9Z8RnyqzPupbLmRkubmzYVz1J6JL158BWspAU6Xx1BjsVNT1DMMk8bsmUntnSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dosg3xdcGvGHW8uDjV9gZAkNFnAMLKwTyFZf8NuPi1eRVyKSdfpVu5koet6f9GNCD95jbxazoEehC8j6LPtk61E",
  "key1": "2bVgXBD5ENYfYw3CzvoNb5zMtwboYSxdV6QyzbWxDZrft7xRsS6ZxXBwbAisrWDFKQcubwgd78qyMPFpCMqQXMS",
  "key2": "264JKNuXJLGydzewka4y6rt7pioKJwgasUx88KigfW1bzg7LJKkHrwKf77YLiR7Se27LnVNcoQDPMJ3x2D6BZ5WJ",
  "key3": "2cspKXXdArfSbuAbWfzXkMxSyPQhouc2E5AE8C4uexBJgUyNWyqhFwZmTFW5wtC1vjEeksT6z1ZSiBP4sWo2fGyu",
  "key4": "44Dp4SphiXvdtbzAMgfp4EzNnKM9nqcQX2yXxNwuqi5mpnq7E9wkcapVUs51BdPSCozkxt9bxELEkbGxGtbjEWhk",
  "key5": "4Ek41vCtVUVSqgpFaHYp363fmiVztU6eQuG9CdutuutfQ5dQudHzMYD4Wcd3H4SDDadLGZfHKJAPW6efEQ3b2som",
  "key6": "M1P3pFbYJtG8uF7ZPDgjsVzcsDd9LSZSmrwJPADWm7EJwk1VXREXbrwGPMeM79qYbjvKzbmVEoBsMEqUNG1vnFB",
  "key7": "2SBP2S4Txj6QL8ddyAqBrmzkgDd7fEMCsUDFbuxNBbbqqjqTtf2Uqa5Tf2KXcYZRBR9c4Rc6VnafprxhsZ4Lz7uF",
  "key8": "5gZtofpvN3ySmbtJirnXS84j9j98NPUhC3U87bnzj8878u6VYkk2AiWcZ6n29Xmxpz1tn1QU5dSRcKyTb4xn66qU",
  "key9": "krqLvuKzFaPprBc62qA6iebVXNEi9VyVDQyjVUuh5swHzHaLSZBXL2ZuX6Hr2CeW6mQFnwfrS5bPAzFakwPzjT9",
  "key10": "3RPfu3myEPJ2HvuxJWMUo7ZqD8unWn1FWugnxbry3n8ZMPuWEKVtCMnSXDN8zbFPkQYv2SCcgMmy93PkVrJ4VZSi",
  "key11": "2ykw9gbm3tPDfKuYp1pZksmGbkk31raujmVqachTEGB759PmaPBYB4EjjWK56Qx2DfaWGV5bCAxDQu8PJbuAU9XH",
  "key12": "3JNcCDbVuygn81TRcraxvE1Sp27E4sQUb5CC16BDXFMgxV5e2TgxNCRmtAme14CToykmRgmD5RwBwLGGKt9v5Xps",
  "key13": "4bbApuNukKbvzHSu9mBF6mSh5nMJuR5kNoWbqJBCRGfGNhhCqn8BaxhGLnYLbwE5Q9R9myZENPE6CAdnqJyW8sNQ",
  "key14": "jrPykekcXjbNgN7EdG5A2pzULWatt6nEVNFDmQnr1AGnpfVsPbPfWMtmxM3v6iwRw4ApVcZGG6THNb6Z6zLTbLa",
  "key15": "hPS4sWcM8xAoE3CgwbLDQwa5barfBigWVqMXWn9yBEfaqiV6Feuu2zuV1DmgoZZNeEQmty45SJ6Mhiia2mXCF8w",
  "key16": "mTrcHm9AxJ8ETLac9KFuKChDybf2e4dc5aHi8GhKW93PczDX6kUNiB5A4tZUgScA13Ga9vu2hNAhMsT22oe2k6u",
  "key17": "48afxov2W54ppxJvhtivjCPJ1p1KLUdXWWTfZdkb37mFWPis7DnPU83KctbMuASpPCsnqtMk5FKwGdAKLk1R8upf",
  "key18": "59gcstpD9wA4kammSdAcWfe7txcRpt65pDuVfyWnLDgUyGWicNSdnarFC9wSDgkKSM189bvnio6pSxHe9UFp6kj6",
  "key19": "2SDp9HJiEb5WxARKZ9pKNgnSdyWTu2fGUTyXBnF5Uj2TbxUNHiyeC5yDGuYD7iub2W1URwuEkfJ2FQQBYKNDvJ9x",
  "key20": "63S8WqZ4nX9dUuFi4h2i3LiyKvipFeEYkWT74Bewzp9Hcb67jnQ36B98EEHduRLHnUoacdhydkGBcuf54W9jUeMH",
  "key21": "2ZyBhtv9FF7LkHC8FKBs6Mm4JpdLnEeY3kHJWhaeiJxW5TQyujrLzuwJ5J4tMF7DodhWu3bmcqXfNSnbJv6qbosh",
  "key22": "7Cv8yaJEWVCNcKM7TSZ3qJyWMjvbNX33RUjpkN9PKjrYJbUzGaYpHeN8xcHDPNEGBLviUJ8a6eoDGBsy5koc2JL",
  "key23": "yMVxyWTrjCuas5rZV7E2qr4FYjF1QcVyH9URqx9gAN1jZfGNY2eecft3531GmWrneHNTv79Q7NiHnfu34ow1i7q",
  "key24": "2BdURVoEX2USNKnkHbBt3ZPS4PN989SPEXWMqiHqCNWjLTHDT2tPdkZAWnYJG2RgMykfcm1kmF8KgbAKcdmwsBiM",
  "key25": "5FnFXfsJibzxrmnQNvX461QtoMVtSuDdd8bhvC1XVHtojo31jQE1E8z5NhUW6D8YCXwM8FRWNNfSkHeNJyDdLszj",
  "key26": "eU7ZE4QUYtryZY6uZTifUGdGwC51FNDeNQeHDMjwm3H4MCxQvfNfuAuHn6wN1e8wxaqNgGHLysZyaEnTG7CQeQm",
  "key27": "2Vheb9uVCisv2Kp9kCBe2k232WPyvwZ6YbExecWTWAstE19yttmPJMd4DBaYVsiEck1Fy8wzhyvLnyYXSnsyrsjE",
  "key28": "2Uz6imMnkKcUj4G1JyhQKqWepyZyEK9cMfQqVsqMrmTjHcEiCJEv8sKmCXexL3Lz7RyqZ9PPLgUogHQBTmqavoCP",
  "key29": "7ENCLHepm91KrKDZwjQWCzfyLmNedBYWYm3ydDD2wDc4hQEnBMwJQZxAvbLqUSthRhw11WwpK9zMyAVdYZUzgAx",
  "key30": "2sNjmULn8cReTn5DyEFWYHL6PtxyTdwWwymig6FUHTfeio46bLP16THHYqQhiZ1p8k3YW7m6JiCHFJHgqeDbwRSh",
  "key31": "5w61YBrM3gATT2SRZYXy8z3Xp34iPUAuyDjboxw7WjiHKf7gxTiSNi26CmMVbj9ZFHjKqDkpN57BimyKgYtNu13d",
  "key32": "4heuJTHYkWKLmUDGi1q3JwRcHZxj1foJbiHe3bDt28rnWGVfbkVuLs7SZma6baTsDMfASqLMXixgEZjGyaBtWQo5",
  "key33": "5q8jNDg1wf7VrGyYkPuUWG92NHUALpQJhXW8TJ6PgVAxn3pLU16R4EtwhF8cT675jB4rHdHwCQKWeYFNHAKuy7Cc",
  "key34": "4sfkzJ9immx9Fuam4ZPciM1EECCKXvjqtsnLCRyXdQrB1pv6h5gmv2Ep4cz3EyTjsRXZQAsRKFjgb3fc8yYCXd5U",
  "key35": "4nxRP5NGsqDgDj4ATsUezh2qM35eEFuLgXHb5yo5FQioYwruoz4gBu31Lmmo8asV3uHVcmr3xPzjiWRC9v2BUFfx",
  "key36": "2u1JgFpXWp2FbiJKLsL8UuCB13UDwuQL9E5tuQXjuBzqrvpYwFppYVBmUcQR2HPQsogdVdM7M7zvT2X5sUYEtdxo",
  "key37": "5YkXqh5QWupSSd7hRg4jGSyUF8iZVeGGn1LRCEn28CTbWuqNYeFoce6LimGCPQNdrKqfP9TVqAMhVXDP6Gk7bZCG",
  "key38": "8vCuBUHBNysFbW6t62YyxMUE5xXQhASkJcPfGCjiomtoazPLZ5sSvHAWA3kEjgYDsfRuEK9P4ZP3fNz4mYWEH9P",
  "key39": "5zUajfdZejVh3LehUNfNxJdAkhcua8gqEqZy8sc5GxqZskj3NU6T3zN4da9LvGQR6rAQhqnHtvhM6wsGh9yFawdS",
  "key40": "2LXaVayu6k3jVvZAWrZUJ9BDYdDr7Cb6uEf3u3cmw4SXfLXigxmViFHLLjrjmsCZX2KB2wM1w3XJn1KbkdpmRptZ",
  "key41": "5877EiNLHTBmbsV6oPfoBg1MuXAWxuZZbSscpGKoBhoMELm8bcV7siCMzVHHRm3X7rr3e5L9NP8hwVfuZDs2VjW4",
  "key42": "4NLJXtidJqQENGGzsqUwuhdostMomzwXKS7CnnpgMRJ6h6VdonbUPQPn57WkqWgfoGNhGKgGsDzJAQP7KDcqe6vb",
  "key43": "5fz27YVvXM6tKvfAU8kzGRA7bKsQnGTpwAoXVAo26L3bCG4FmLVgd8HaezT2cp2jeeN45gSJqSAiSJfRxjfDD5ZF",
  "key44": "2oJyQVkPjKHSCZDWxYEVurv3zRZTkA5UomAXLtJTgiJEZSge2PtBpdzxkHeYbbXTrqaR2uC9RmoGsuWyoXY8gT1t"
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
