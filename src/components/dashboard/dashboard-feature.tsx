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
    "37m1mPsp4NVCrhwy6VZgH6syHn6GKFf6ZWs23gNmvWJNqmz2i1fPBbukdEWCbxsDw515qDJ5rdbdoPDByw4pavnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZU9a6MWW1D6aTdJCnPythakRimJF6DdBz1wASPr9YUZS1vtWLqcQ6yiUKJS2D9Uw5cAa6jR1R6qNufxUBwq3XLE",
  "key1": "4q3D3Weq2vL3q3sFPFbiX4nisWnj64KNvjnmpPuun29PEdKXhVFVTe5o8zfSF85NrRn6pTTZaMzuEVYTYkhUr5xu",
  "key2": "2VQqdMZbL8g4NmK7EhdJ5V5BAwe8AkCJfkcXYFa1S6XkU5Lv1SYSJkUJmyhCZABpyuHDEFKgf3MFKxej5e3QEDaw",
  "key3": "3aWNP5qfyKqFwRtoVgVRaQtTEdVVkuAXWQihsE5H3NXiNLyP9uH1eQ1pjyQpLxTzRT8EcTDXZ7fzyYtf44SP4qhE",
  "key4": "DaPmMCUcVTvjgjiT3gUG2b996aTBugzekYjzE6rfaNcJRU62U6kyCCU3pCMc49ih26qsT4KfkaEE43Syu5CtnEd",
  "key5": "2TfqCCsfZYF94qN6b8kAfJAzHD6w7icvre6ZvacySCGs1gJkLBFsSztfH1AmT4jhEVBdMk5C2JRnNWBZz3aZSPw9",
  "key6": "6B2xrdn1Hw94VHE6Sosvi2PiwPVuGeF9iXix7zBC9bjvrpB7h7sNoPMe22fbUYX2zfreN6hkmEEShniJaxc9orm",
  "key7": "345r3DgZjNcMSgadZhLfEwRaKGPFgXMcLPVd8kKS5qquRZnydFsLuiCVyofyH1sAATpFvh5kcgrcLxAvt7rDnfZs",
  "key8": "344GTEoZouJmnByt8CbCBZNqZm6rrWxmPAyrwwJM5xNtamUwTYvtpQuNuY8gdVauJRYA8QP4UyAxqvpParQuhj3k",
  "key9": "odoKLi9AJ9kYx87tzwcEGeohzs3HSpey36mmN3Jff6bf5DBvVyWRNGSixz1cGidWmK5Gc1oPN1is2Lyv7P8RADD",
  "key10": "2Uuw1duY85T4PeSxduidHffrZEb7xjhzdfTMLoqVuiNwQVuASiPQ7cfVQm2p1cwagwi8WWie6JkH1qijnaaYDGHa",
  "key11": "nVAzdGKg5MvbpRPA5jKpjSvAV7U5eJQQBJmopm4LUaVPEqmJocRF7KyPATumXKNNiGj4yL5XCgVs7o99tHjcNnr",
  "key12": "4cHy6QPc8R6LNJdFqwaEYENL4zxs4dFwcbcZd1KbbykrdsHA1siuFPkJztrGjyQWNDfUH21Bhwyf2jrumXdUSzwt",
  "key13": "4Pg1tKxhq8VsuxSuhje7HFKPtfFCmaGfd4Jz3HqoTbs4ETRD6HUuNFVZxgja6dAQXfkFWB88or5XxKFBRqnC2FNp",
  "key14": "4xxVJMdSqAEbzuo4SLAM4zLcW3r4ZfZc84C3aNE3z27hizmA2ux48KAFfCmmzTQo8LyRQHyhcwqWLN1tHBq63Mk4",
  "key15": "26AuwdDQgpKngGr6zhddXVK9ZZ8kQ53igxQUvTyYV9PQ2XRX3GPYiQcbfoT4KnLXE8N1BjifbniQxakFESH5fYck",
  "key16": "3GEFY8VLv88TDkkjk9TEe5BLfJYMomhSTt97QKdMijVRkCjiZhtTaEF1EF7KvMF452CnUxZLoSzPVtyMM9tPHsmX",
  "key17": "33R3xBocTj67vRNuNUnzerwqyDPT6Fh5W9jPbg47SDriop8YzprMjbcef48UEtZ1MvKiUe4kTa1iRFZq1byyBnEN",
  "key18": "3rBJ4dKRAU2Enb7qzX7LvY1YPispmXgPonzzwchjzX9q1Dg2rnUpnzsKb2RWDBBULtWGHN5MNGyVvUTaKcxFQi1z",
  "key19": "aAChJBVHAGemS2F9ikJGfFNeeXE5mrfWnPT9DGw4dr87Xd3n9qSfKhcSiWNVUbYSQKp4CmD9RJzcsY5qRbv3LHG",
  "key20": "YdkK3dr6LuxX4ztdUWQ18sk112QU1HNXVt46PPSAZGXxgE5hBhsEdMZ6Z1GfoWuVdzbsTZKV7d4MkFkkdyq3vxs",
  "key21": "mqnRAxr5C2KEy33eBvrGRGfQ2WddcsBgc23Ymrir1Qe4x7SSntNJzBYQYKu7K1vNhwXEd6J2aTPUqiLvW2ay3qx",
  "key22": "2ZUsDzbyP1CTKFzKShxT15Bvi3nftAzLqsuqYmSMDM2z6Jf5YxqVGKcdrwRHv4AyKuoMjHjMFxaDCq3sjC8FUsNQ",
  "key23": "4zS8fES6gPwu65KrBZCfqR6nfHSf7KAwTLdHJvoSYXm9sBbz2ktbRT3X6SHKnJsuAufzqhE6CdgeBUZot285DaDq",
  "key24": "4GMkoDm82F8CuyP6xmHpTBiAgth1m531CDcJyVwWRLvaniYDuJPQsXKd9hmmGLxBCqqgfVz4yHsuoUYjWaB9H7qX",
  "key25": "4vtMhwJZiHEJDi59XWdRBwPjBfS43hkzAXViYeAvjb6v2GK2tmrM5xf8CiLCA2iFXQoWKj1hXK3q2jnvGCtZW8ta",
  "key26": "4ggKi1NmQimDmw4v9ymU5Q9fg3kpJcbr7iA8XYpofq3krMJ2sKMFRRrjvJXkLpYp49fmUjfrvk6VbNKkV1Hdaw9k",
  "key27": "xgygYJrqbyTVQyGxmSakWfQKJCT3X9LxavVfLmQSfm1V5J9CVigjoshQmpWAG8RtjXi2J2hAD6Dqhs82Bm1og2S",
  "key28": "3jso7tEsd2YYoEbeaoo7ZaPYhw16H8Ln6uxZzEobusDKBh6BXCczTtzVVK6xyLCWw4hSzvzsnqVHJiLMvhYFQBpm",
  "key29": "5LBW6pUFw7XVUc62MNauSxcWKSQygb9fBEdWYcYQ6uNHCzMqQ3CdDJyi8dXAQWcFJ3crBZT4LaRFJTXQYXcxTcGT",
  "key30": "58F5oZK3saWmo9wzpFVDTgAequNpEk7HvFn95oaxAAh7a1NTgWSAoRPcnsXK7ak5ukref4NTic3TcFUe3vJfiLUC",
  "key31": "55A8AXMRxkm6XJ2j33kET22Mwa3UbwvhhyZLMPD2W2D5enfbYVFVjPnTAWC6By91Ur9XBGmz5M296VXgiLU4hyyG",
  "key32": "2xNiTdwYoxe7meyJYGEC2YY6iqbghXrntszFHgLYicJ6KPUBk6Nyzyqk5j2EvjQj9FzaAhL7vc6aXArvu6Ew5778",
  "key33": "5c3xoY7dedXL6WsE9f8ZdMA17P9svZZtFC9xHvdT9hCjH8cMTEQVKmhpBYaYbuscYf3U946Y9CczTDhwE264XPF5",
  "key34": "4rHQJzNahCmvpT5jYEd9DZGb5sRb4Y8HEpHf89hsD8wBWoni4GGxJeCzSFfFE8hy7PjutJtM3YcAFoY8gnyzgAT1",
  "key35": "bmwZnGs4Fk1bN9Lz9MG3tAPGFwLqdX3hJzZVoQ7FegtuY1vPWcGnN15mSmnU3ama4MdfdVdqGoqVSit4fc9igfD",
  "key36": "2U1niKsfwLacJZTVwkbpLpzfZ4EGd6SbNPuzYSubM7XSCrNoNXsdePGXsKDZYrrLn6pt5obN9Gs8hHXCbLbQCf1",
  "key37": "pqdnf1Qo7u8ZqwtpESXheenztY7RfMCkQELXYY6LoicDzCos2xPkAt82FHHzy83TDeWsSaBVKBui4NNqCs3wp5F",
  "key38": "42TjNEreMLKdiPuq2nE8yxR2EuuY55Wv93KXYce9QEngu2xNpGBje33EKf67sf5XgoR8oa7TpprJv4qkwn5osM2x",
  "key39": "4rYAbi92DbwfRGSfUBqhVWx8iiLvEZG2rqRqHsUqdyo7WjHWbk2uSF5uEjMxtqPyuKNcJS4uSTeT1SkCjnE2SDeQ",
  "key40": "2VY2NWpDTrijWuCckUBuPPByvsUQBTZPob6tULB3de3zdxUWEPUNP3bhtNLZDgCEKjNYznmCcFnEi5qqwciHWMvQ",
  "key41": "3B5rx6xpZBkSxNpAqSAzPJHTYHSPGCXapDZ9cSwWxexvWmQLKPJU16vWzoZBxF3FkyVWrRqabztcGSuDU9GZs6vh",
  "key42": "4N9sQBHYqdd15MMgoAfm6b492GFwqpK7oxypGy3SVWTKd9GsoZRKZboN3hb3jNfndCDa8iz353an2gtrFV48yHGM",
  "key43": "4ThQd5tyCuZci2WS8RQEFL7cqvc5VRstwMW5J4Y6Jw9gUoCG5eorDeuQf3RABd6nDu8819iG5foLt9eTsEYD8USZ",
  "key44": "3tJptHaheEtreYuQNi97r9WBjSa3RVKs8ELAxYtk3s5uugSd22AJHc4AycWQqLPM8Rv8MoWKEjGhvXHdMvepQP2P"
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
