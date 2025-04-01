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
    "52AEiaxWD6miiPiY6kcAzxDMa3R82r9hVWHz6vak4TwNkHknDHSLtvqX8dY1vCXzqcYgskkSicxcKKzvLMFXBJWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u72chWLj3TNUnVeVAh7rAobRRY3hLTPcFpYngjdz3Z3oQGofHxFmHaazz3F2rDcXLpPDb4rd9aQbyGWe5Ss24uz",
  "key1": "2cDeGFHnjkzM6Ee36YGm4BdSt9VYQKMTsXtPLoT9LcEtnk3L39PMXq5fJpGzW7MVtJBbbxsezHgfV7vdnJQ9Rwoq",
  "key2": "26moG8hW7pMzWYheohqQoLnkHusirtEoF22oqLaf114Dz224zdEr29cojsU3BKDP7xzKCaFWTYmsjyLSX7GKPhe6",
  "key3": "4o97PPwfFm2D77Tbj4BXUmU7GC7hec1ZwPnk4DzhjALoESETeNkwRfCwguAMfRf5cH9tgqhwJRVy7gT2vZvqpctJ",
  "key4": "2bVSRSFLfj6qWDM4JveWK4daEGnAewgqG38n4oXi6c9SZYxdYmeePkdGZFeq7ag7Ap3ytj148ZY5EhFMK2oz8HVw",
  "key5": "2meUCydJ5B85Bt2ZtcCA986tETcAfWFyVKhJqzfnp3UDZhZU6pf6yyzSgt7tEsm32JU46AUL69V4E9xDufUfnaSj",
  "key6": "8NTPRhbKHzAkbnDsFRupBX2BdK4sg8NSkcXRn21VHws1ZZenu13wdnzxFSUGtSTL2E7RZUHAdZ5A3rDJF9LTn4A",
  "key7": "L1vGdSPr4NQ1GZhvrEzzoaTHM35AZqxhG11RbNtGwAD94mFswEBPL2Tv6G5pFWCxCm6afKv5HGuoE55HUpJA6QA",
  "key8": "4TuUfGMJEpK1JkuFv5hdZuzJ7p5qvYbXymyBnAxoWNoVWiEiBNtUKWzTniu8ZW5uCmnHD8wT2qkFLj2rH1UgUWzr",
  "key9": "2dvNNyi2tEGChz7S9Kao3DNXfCWyRsbFME9kD4qQ3WNnF8uRjwABQqRbQZ66naW6XjnPj6wQ4M61fMfy4BU9yd99",
  "key10": "Grv8TbrPZSeEoHwzUx9KFHprtnEwLCJKKsnKQb1z6HraaEo9FKXL3MyuvVpkXvMvTfXbqDkwTuCWyby7kS4aXzW",
  "key11": "EvjF9DFRoCsNf7w2AUq4arD85dCuXfvWxwQscxQZX2EMACCHNqS164bJqvCL86cqStirMcTBP44i2a9vYRzk5Wb",
  "key12": "4A5iBRyNHsbzneWdBBy4ywtUhWStoDf22Rjz5Qxp4ps61FYdpTymcX2amgzz88GmT3xwo78kzxr47X22qAqget1N",
  "key13": "5FpDxSYGhzZPyMKri6mhvFJqmWnHXAkgsUhbYwB5988bx3oXYTeDg3z1c2fEVDrdNqdh4rCcm4h4cUFezRFXnMVD",
  "key14": "4L1srxctR3vVUMdFQhFpqXZp4TJvwLsfj8ZYViC6vC9vknMR16CKbPf4Lt34DNp4xaFkJAaruEsKEcmDC3m3EYiw",
  "key15": "5rpuWNBrYgqetzL4ptV5V8mUr9XsXYvyo6iJFr3dvn2U5V7gKHcLsAyRT3HCQvDhY9fuBDMKBgigsJi4TBAwEpJq",
  "key16": "35Qt8kQA1G8eAjaawkCGNpJuxLJ7Kb1oKLDaLozpH1yUPSh2Lxa3Q4wQZWWoy9U4A7t7CBAP3uPm2n7pEux3BMc4",
  "key17": "4Tippec6GesAWsigzGxBZDjxHVjRYooVkaJ39bqNZzcdKqyBVHS5gJe8xzDs3v7x9P5RT2HVDBKWdb8M8tsjaGvg",
  "key18": "rNumjDVpZyqgTEFvEmaFH7L7jJdAwWzJ5QNGFAZFHc2aV5gKZBcYpazA51BntkKZaW5ynEnTPHkfPkHS6uNHnWE",
  "key19": "4xWCUHPEt1D6h4M7zh25zy6UTCcmRkmRia59qYFvkTfiDJgnryQGYnxn7Twu6ayYsZndj7CG7AAuPYFUnHVDapoB",
  "key20": "222BRnqgniy5kionkiydHhNj3rwfC91YwN4dq5Xm5wRvNfuEaa8SZejLZTMkQb4FM2XLiWiwSeMaZ8nN22erTomw",
  "key21": "42SiWrkF7ivVRn4rAR2JzS9Wof6uZPnvoPmBS9KSWnAs6SPQ6NMGRKW84LMwKaduSFzacCVa6Yrb1vAcL3RtfPEh",
  "key22": "5BzFZrnXWrXRBFfGQfmsWS7NMrfZ3tC857Dc5N7CdCWvWmRqHb45aVNZu8g8JkJ9A4qRWZUK13y7JWKJZCUnduNU",
  "key23": "2ytshdtUNMahTDrgSKpjkbHQNoDYLF9CvpemtVuY1Uk223AhVt73DPRPQrkHshNgMWbYqWm3rTpttpYnxyP1WVyo",
  "key24": "2HGAahBEajPKD8mynLyFM7jDnN8NmfYsmVpYuBjhgbPPT46963RjCCZesdbuTTWJ7NHp7eVF2Hmxhjwyxr1uTsSf",
  "key25": "4UnrTMvhShL2ca9zot9uvRQKptor1eP9hdC4ygYJnQSh5UfYu4QAc91dLWvvqdG6N8e4hnbgZTrdCM6tKwDsQDmM",
  "key26": "49zFrDQoRRuE2hwfh22qY7KqBxGxjeQ4fPmmyGdgRiENF9xWNiPmvB4SXs4r44MTttHJxG2dEpSennQiL29fgem",
  "key27": "26hKRNVwL5AWi5ynG9BU6BDBSUNwew7iUEK4mrMJ5zs1pGkrRqRPcP3X4F3DSwMEgnaYqk6xH5ip2xkd5gbhi9DC",
  "key28": "geNapqg4obcDErEVjRXxjHAuVJ5wxXzH2dLfDgfqoV2Q6SUoaPJPTwZrhQH3rXSj8nV2TxicoqUm5J9tZpMGeEm",
  "key29": "1cgZHYmoYUkX4jRZgv6LnxAfC5doyV4qCUCuHv3Vt3bNRMsJRCPfWX4diy68Xr6vWC2fAt7uPNHYYRWfNXmQHAs",
  "key30": "3cyRCNdQhEfDr7Vvr2CEr9xbdssidp6x8bHjM4cY1JbLSq9DLBQqL445z2HYBkETmrtYCeF8W6qnT8ST4c3ZXc4y",
  "key31": "5uhN3Pu1pDSQDpySQLadiAsRPrzhjzAtr958Fg5AkwhBRRwDG5hSRFb9CH2g9Zgxb9gfiFPSwyp3pvSTvJ3QuWUT",
  "key32": "4EhGstxbprXjEzynDgogdKh7RwhQ5bWanQbv4F3jBUrrv8cD5eG5reAMqeqZwQwTsMz1AKKzV83F3rPRpz7UMiej",
  "key33": "5HJ2MBJ4X6RNPL4Kka8Jcc3y3e9Ao7pypos21DEpeoeiDJCLXiYcuiGUDoqCn132Jq651qLEAuHAaEjm8FKykSXm",
  "key34": "5aSrpgNvZaANiPQUdZqEEtB6C5bF1mwVqPfKXN4dtWeSxzMf4mN2w1tFNMMY7e4mLLJg2YWp6Tbi3inqSRbnoqqA"
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
