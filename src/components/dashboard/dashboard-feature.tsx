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
    "2skiwP83sQ8vGVyK13isuV94oEzUW5DZexHyQqzPa6xkpC7hXdvD81H2itRASdNZUdGffXqzNXtMVwMSz59V4iVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bK3odyV4B9exGHYhCnikZ8zDmHEeP3P68iJHdrZpwDZxAn9aygtj52CSbRYHhDUDsVyCDdFm9tz4dNms21kDVmF",
  "key1": "2kLBVhEg5iYuE7cM4kTt3C8CJYxKtMjWaVHDfYFyKs3QpyQK2doRA5qosw2CsVJmZsfi7JVsD93kYsBVik39prKp",
  "key2": "G4MyWHpqamRqengR6AwcWAmFx9G47NLU2q7F4P526jiU1F9XVG4p2ZJ5nihRPm32WQceVWiy8utnLFSdhooiJss",
  "key3": "bnuFVVEHSAaxfRfvo8pVqF83jNSqbrrNNpJEa4FSzKkQK25JsELBh3sGmdutQhtpqDxeqcjWLjSYDZ5k5Vbovyn",
  "key4": "47pPyE7tK94q6c8U3XocFgUoL5QB4FLWzgZmcwm7eM7xpKB5wcz7ALwsTth8zJSYwG3MmU68aqPG5T78r1PzhNXu",
  "key5": "3fhX9TF9Ca1rm8viJpUrtAej67d9QNzyPPx7TNisGYR94r7hMKmGhMQVudqNrs925eA7YB2xTKFigsgy9ZgznqtT",
  "key6": "2V3xbtSQHBKRs7CEafcATFUXqFKAUo1p7wgo1u4XxWFDFwdvaTNe1QGo32emRVvUDvTXLY8bEN7CSW4rgTMb8Ghx",
  "key7": "26fpnxcucFtPKppvsQiLWuaGLzp37Qv811Pa1NQdgMfYcmU3CXfkPuvCnXH527haMUdEUC6PBiDJjHukQ7DwSdKS",
  "key8": "66q7XEJ8ur9HhikpVr8i4NoSWtWdfePPDDfv41KGpLcknAEGyMMwGpSDH1SbqDRRo8tsc5xs3VX2rLRoZu71s8yu",
  "key9": "2UgTGWinusH3DJp2sxTxnHvKq2NYBJTUEY8ec1sVQaWKdUHxKBQQJxtcQ4w6avNS6z6c83nHhs7QirhHZ7vSLr9w",
  "key10": "5bB2PG5WdxLiRyoRtrB6pgY77spTdPzYPJ2LoExpmzQrvmCLbHzhVQRoB2NrhDCwG48VNbs5bCEr8eqPwWfKobMx",
  "key11": "3fvc9nw3Y66afqJP9r7qbjWRm85ENfSVQYxVyjHBw3zyqEy3RSUE2BChjTwuAzCaGQzYo4JL9vvmPsmSQJtWnj1c",
  "key12": "5b5v1HwkhtaDZYjev9aXVUBXHrbA6d3xHVpBvYK13c9ixWN6Bh2sEbqE2TYEEHU1My9ZtpmxT8t83Gj8ujJGDqQR",
  "key13": "2JF3z6Uxk7N61UNHbXMw6pPDKLuuC8eMpbvtoyqEVhpos3wNVoFrgBXsNBnvAckLHXVpD1oUj7J2YCKPdXaYcQDP",
  "key14": "33XYLc98YTrD38WRSdDMscykXj7b4LN8pCVPdmYGaQno92tz9kpD4grEZZH86r6Je3GJ1phqn5etEuw9hqH2pM8i",
  "key15": "22J98ufknDYLeGTc27JisjjnwScKGjgPKmzzn7HgAv8i2nKX9JpkmwHvdViPbpJwP7qAfH1tqcue48svXCJL3ww2",
  "key16": "4YL4tXn8sRmmm3ThNdgqzEfHugTYKE22895CMdDcLxz2Ng6jFkhXQdCX9qjhRvExCrE8eem8qqCi49mfEco5kxGh",
  "key17": "1Xje3nDf4pAQpyE2tvPk9T8W2PUfWoLn8kvfRybmiZzCkSiuSYZ6ZW7x9QmJFPKMPMoBXbuxGw4UrBm2Egy6n73",
  "key18": "5HwEMqLTmHnFhcKVLbLmB5p3T57GumuEQCgFENzgF5AyVzSvBHQNpmm7Pj1FnFA4NUT8QZkwacbSXUj5Y11nW46H",
  "key19": "331ivbL1GPjtpt1FpuWwLPWt8QUZpVeD36T2GYLErfLEwXsJ5dP85zqqsVmo1LvFdQz2GgZcToWd9N5GSjd7avqj",
  "key20": "UBm9iY68JgQ46mEuJbwEUCNGoNpUDxfFnBRS5YVV67naUYBZ4whjtkPUT6jWheDMj5GedoaJ2JfchDyLqoEvhoB",
  "key21": "4VcVZvcVgpBrWaXN7Dsx4M72xnyUfPSQBobKQQWfrW57BzyTDABJsAyqtFsdRTMv5iHaDLvAiGA6CJgX4CtjXtky",
  "key22": "xCcY4zb2TkJTpbcjUj9A75jUPh9ngsMdEQf3qJh1Z1xnJJg1EfYSXsfrAU87m9jAAnQWGg3ExPb4VnUzYjyf7L5",
  "key23": "36Xrmwa1uXNqDHdCRc5ssGSkCz7VQFXrTVxhKtJbBccKF3oKRer1dxcijqtsacPeKU2s3jJJjNfvaigKt95cnfgM",
  "key24": "2V3WEqZrzy5Jya8kGLUy3nXY3pwFoDtxA2FTRFtWLZdaMTGc1Vcotb1wbnDgHguvByZr2WtqCrQbKMC1dRGn9EZq",
  "key25": "5pRJVz52Aax2JMmjPqtCZYrinuSWycnhsseN7SH9KpnHR47K6gugJb6AqHkyfsw1frrP7voUCjPoeSjmxLiGLAq2",
  "key26": "1WsfWNqK6YhzX2o5zay7ay7vYAkLvZbWHJVguxFocLDiuzqnzpaJiR1uC21nHR5oxkgeAon59gYGemES8hWiRqF",
  "key27": "2dwJskB9pcvLzvW5oY4FHB6yfAWtb5585oiYbpt7VHbJviYFoeFJQYgycmR3W7VH4DFHtVBm5nMSW7E6mDdfc4A7",
  "key28": "3rkkZhQi474UmQC9DuMFerfax33U29yq3qA6fp753bpGcBVzKisA8NPxQaXnGcvXyz7VhqFtjmr4VVSs9tzeRvgv",
  "key29": "4QsjACmcjwEKiXz9C8SjKcPs1fchkmNQ4HaRpNfoiBA8qhr6YmzLrWXmQFKQUQRrR1RcpCDFVnKL1PZ8LGRiRpfg",
  "key30": "2G6u442D7vUnuYwxYyguA9z62TNDSod8itX5REMEnv6cLjKSnMayZBwiiKWK6sotgwpfMEMjecgSXYjaKh7Ew9Fi"
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
