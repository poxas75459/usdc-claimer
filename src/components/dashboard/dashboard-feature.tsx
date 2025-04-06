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
    "5DHDt4uZtd4VGi4WDRhR9v6MmSvGVpYc1WcpBJ4ekQWK329wuWSPvQqB121QVZNHEC8bv5QPKv6hhtFqSAW6tiqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJbYoLG9QbFWVDCtt15bvSDnK7PUxZGUe45zVxSKeSSCT3qgZiHAFTUGN12uDAagciXyHWTVa7qX27tDP3GvnRZ",
  "key1": "2Kx9XzXyQ8rpdwYG1niFkmeeFy7MKHouTGgLFEuYgdd22WP165p7wodwYG5ZLUqjpqVgXZHuhLrgt7uAR7e8JgsQ",
  "key2": "4zxma6vpFRZZteuRWHz28sNx6cx5LHhSRVbvn8TuRq3qKV7hmQv4HXMZvc3UvUz6KdqibLkNWrZXUZbqMzpiDgwP",
  "key3": "3MMJsEyfeZ7Qb7KoiBSD8Xa1cQsYqCnhCi59JUAKWbZgtmqs7FT6jxdL19QTY2LMRH57oFeQTdFeyQf4d8NutR6f",
  "key4": "29dFHP4FxZPHggJMsK2592iTfWajm5R3dkuzU3siynAXvUorFyJgLpdHJzNAQ1Tc5gAiZTnSPa4gi49WrNaL72BR",
  "key5": "3FYh8ugVNXYd2N4TWNqHFeru9FkjRrfHpWAeVPH18GHYCW3gPgEQPbPMQJR6J6w1WNBwyeQNWCAqYR19zprsL1dR",
  "key6": "rHrDDvbW849R78gVKBcB7J9Bekq3b1wxK6Ggr7vbcxWLRpJCUBsVHpPRcnuj4LhnEAWYfhGxZyQo858rUSBbcRY",
  "key7": "3nmB3TJzSZ8diLNMKjdS4VoVR54va46VRToQJWunnMQ2quiywTffekj7xGZx59HRemLcKkyrtX4YZM6agTWK4c9u",
  "key8": "5LxWyHk13oA5PTBrVeY9uwGb7BAtQMVEd7mPNvPhNxnD1wdxmxu1sfvmyrB6LPBmADjEvfAouFcRXjXBd38aCseq",
  "key9": "4JaVnHsQRiKKLQ9dH45Fx9RjSutt7woMaNcRrVCLTKLD9NBL17AkkfWRkEfz4xtB6TATbGPYV8Dp8MGgjptYuTmW",
  "key10": "2aaybNf1CjfqmUY24DB7YX8WFHrCHXhjkndQqn2vvVqZ8mraYRUAqLvVSy6pYsdDfbDaQy6qRJFa7PtrYmVLms3B",
  "key11": "5EhWYMph3dnkt7Y53q4vG2QFUVTN41fwjBUmXN9KJV9hhzUG5bi2oXb3i9hXBRgYHkvCpZ3WzSnCN87o35fbab2s",
  "key12": "QxPJEAmxtnERrqNY6t7yNj4T4o7HjDuqqgEzQJ55g4z2G1RXJdA5LpqQ2bWiEY35eGMsagqk6RX4JJQTjb6Mmmk",
  "key13": "3zNwcKH7T71eAR8Jj256Zk36TX9AG4tFicQG89FhoTBFgFr6pPzZARp5dVHzJ5DgM9Hw7jbwHP3TcrR6aYTeF3PG",
  "key14": "5khNYs73GCyYJqWtZPP3xxkG8KKDYQiaWiG15KgEyjmhmD2U4fgDDhxmpH1KdFHic1TtzdK22XQwCzviRh5e3zb6",
  "key15": "3yVqBWuTyQC4ECYHR72223mt66KzXcF5VJefav3iAsY7u32Nq7MeWkneeAv65zSrcEqnAtL7THh4gpXeckvNu8vp",
  "key16": "5khn2QC5Bgr8ujgTdPbYchtSwF3prbqyXwYXf6XT8SBEyxjxhzC5z3h8YZ4wvxnDWCtkoPvhCoZw8bwnLYr9osPj",
  "key17": "3LuoA6Fwrxnyq7KVHgFf4vwrqv7FFqepLuQXiBEeB9pBNUhBc4PZwVdrcHogfz83Tf2THpLShM4jU3Sb1XjMGqCa",
  "key18": "2T6e8GXRUmFiY6uWp3wVufcorwfL9UCip5YYnNN1gwcLHUQq6xqvXfxfcmuSjU7UJArzJy21iu8opLPZi2TKWVZE",
  "key19": "4MN8mv7if3oJbuZA9kWTFBtH9apWg6WPx5oTuxuTNyYBmU4mggRLqpZTggiUC4fvyXfzvhMKyDemS5KU2LpbjTxr",
  "key20": "3iqiFAYoMdJ4kZ7EgkK5vVRXBSfp7oTHU3T36TaN3XDYyWgcLtbjyQosDnq9EHqzTxbM46txkot3JLpN19eX4BGP",
  "key21": "468ZzuY4tP4osiQnKQn1uFiyxydL9gCjRg4ZeQxHka2jWQVVoBSZo8qTN8jcpPHkXvaMDdiJh1HxWdgigMPetKcm",
  "key22": "B6tK9cHvKtm543bxJJyToUA3nre2duqEgND3fJZmNTeWaGm9VTLDjmTwVFYMb7HaR8HvECab37zw6ZDBaou4wZ6",
  "key23": "8jjv5X28EUr5kFyHKoHob9kGfD5gzRgxUQe4v9vk7NEQPyMyhBYuXi15LAAGUszK7AFjB4BGvcq69smYNut4nsy",
  "key24": "3djXb79ji1j89vh6EzKhLocDJ2ny89q1ua9HKjHsPbfsBKD7xyQQZC8ViY1pSPR1stCXyHbMkvWeJgvqYpXWbERk",
  "key25": "63bUYAxnyGeyGc6XbrPJRiFzLnwhBVbRKdvUqTpyWNMVJCwSkQDJjfFJUdjdmkUaZVkwxjNR6sN7fHmDNyi5EGCU",
  "key26": "5qs72aAH1Y5Sa5iow47D65DziBnEQsJ8BmUwnfsac2EQGTnUAiPQ1tXeE1C6CTPtz93DRTRU5oXbpc6UpHLs1iCE",
  "key27": "bjafs2xpQ6smGC6G3DcDxgRW2o8SjToDx6QpKFpWnQX97WQD9jUMeYFbpRsHX58qG5y5f4S6tCzziD6yAM85SMq",
  "key28": "5ekyNTgigaQGAnoB2tjE9JNsuNgZMZCK6wx5v6kmhhZ2XrMmt1bwBQjUK5jzKk8LE2BqG7arFN86zD5B32WpoP67",
  "key29": "5LxzTcUEWncGYSQ31dWBw3Uu9jPgiyBLD1t1nvwvVyHwxyVyEhLzAPrDr7qFj6EERFV78KdXoe18D1A4rXsYkeAc",
  "key30": "4BCyELkXhxWuWhjPJUUy48MLvZVYqpNyc21rVZVs5nZTJN5NdP8qyGoCBETBtTmgMBDGBEiW3rU1RWJjrGS48aw7",
  "key31": "2WitaQacZDxbJ6UszYGhbCNf1yVbmPNSdoAt6XwKnXyShh4j3kmzCQ2igf4Yi5K1Tfcnasz56aVzXz23eQT5dUp2",
  "key32": "56E8ZA43RBaP4a3P2jxz3VXBqMqy25DLmzT5HRXA5dBVzbkxRa2D6guaCwRJdwNduPgFnRdEJZvLRU8vgvcKH9w",
  "key33": "oXHeCwNExkuJxKYPaJUTnEU1ZjAsMgymxWB8QDzZotgG5CQySDhZCZRBMDDrDkHCsnkGnxewbpM5F1YLo83scCZ"
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
