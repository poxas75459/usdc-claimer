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
    "a1YJuEtcAjjkQ9tqygDsiUFPBPAacGD3deM63357Xx6yWejzWM4MxYznj5m6eTfmuXACSStPnacGVoaFGjqUZmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZpxisNz25hE6gbvLQ8uWXDdW9wQ5nhZyX1HsgStKd7n5JKDjREhRkqTdqqZYLPBCuDtsK691sbkTRN5mnQfcG3k",
  "key1": "4jPGBXdEGg9Puv895cuf6UvyqQ1HXPPmCNQz6GaHRW5dy1QGML9DANxvkXzbunHYaq6YS9reQHCYYqsiTCYzGqCc",
  "key2": "3ktytfmhheyVdc7PrRmKwn3E35ao2ZX7jFVgEtwf4DasDcDLaJowcVCxwEPf9BtAMzUzL2aExF37kGnpH5QJwash",
  "key3": "3SEXBVTNLC3zQLtKLRqYVWyPP7cDHkCpWYrTjWjWfFzTHAKJ8o29jZSXTVumPmo5G1xAeQERe6uJdqwSR9dZPLXM",
  "key4": "47bJg5spMKRwnnNiGUc5sktrFF5why8MZkm3P8sHjWtwTKCNyQxLnAdW7UdJuphuxo2cvX6NDd6gfhQY8aMiTTZE",
  "key5": "43bPUPws7swq8VWVPTyzBBpbdgdRrN6gqFkbFuvrFAWFmyVZbG2SsgpySK7gWGjhf6M6LPnxY1nAcQL5t9REFzcM",
  "key6": "VtGs5dmsi4wxCQJQxhpvGFwZc37t6rRdZ12dFdkGGAfhDKRCsZKgBMsXgnrqtsgvSzsPPy5jvWb53APPj37rin7",
  "key7": "74s9dSJYtfiddi2WUCftWR1u8Xu2r7UBbjdJ2cY3hnBKnHBjJCam7Wmvv4chGN8Y3AUWziacgCM6k2EqNn2VTQH",
  "key8": "41aVQjv37t7tVRCLcDCZmgTAV8R6SaQkY3R2hHRggW1PYZmYpL64Y9yyzMFbAgx8n1ekq8itevdsXdMK3d3qVJiY",
  "key9": "4K8DzcRVQ8yRTCi6McGV6j2XY3RY4HaMQnuWoLdNREdNuX7qBEXKQV8FNKAiiUXnybHt13cmFPVJWaXtJCkQrbtB",
  "key10": "4tXUto7npCmeVNPTE8Toy1n2bdSRHf9afcyiJ653gygTod9f153TA855SkBbB19D7HuWvbaEuehQGn2BTbzJj85m",
  "key11": "4VRyVwY9oNFeUjRzRrgU3Yv3MabzH3fJDAfiRsjEA6samjjreHSQX8M5dqsFk77PCf8M6QhEusR2qbBs23gtQvqH",
  "key12": "KGi2iHoj4dRuc3aZrdiJ89B53E9kiRyUQk6L4g62cqRMaxYERHhRN5BiqvCXKEsm7y7VqX62863GRa8bJBEoTf7",
  "key13": "2C2i9wUNq6TLZ3KtfQftsZKrQ6hnWECdK42SCaxWXStNkQvNmuuQuG2zQtV6QPRpFuJA94cZA5gitFEkmpkf7TaE",
  "key14": "4wfY8oZMrGRMzKwARuXqTxDhjKxPjQSAgsTU91wYyNkgk3L1twgMgvF8fmJYZt9qWWj3rWFsafprZ6NSA7zknmew",
  "key15": "4nKRNzPpXjLQKJvc3p4iHHgy1SzZkpTFoSyWigBGsxVyBXZCPFRas4oSJ5b9PxV3JLnaxA3PsKdnyBu4oTtzrXfb",
  "key16": "4bT6kmV44b4jfpeFo9Lg98VMQaTeohVf8rbk7DdBEGm5CSZE4DDKTUuRJfDEWLL6kQjusY398cHuidUFq4VyCz52",
  "key17": "23QTrC71en3yNhF2mU4gy2eoZomJXNUUB97ZLonpdfghPcnMdXLFvXFDQ1gT1MzAoWswYfFKvPqxEqWCiBUrQ8Mf",
  "key18": "67SVs6USUNUDwvpMGiSY8kdhYhAAkTbtGYn1uMXiCWrUeM66nEQ9J8pQiAnB2kFhYjACpqNT7nq3WkGQNuQXbD7Z",
  "key19": "2vxeBKc8ghpgxSFe7dAGc1fyF9t6KFkkkv5wfSWkBLxyV8xzp4HEFFCPN4CiZG1QcMhZWoK1itHpvrMFadUKvtED",
  "key20": "5RK5upDEwfAtMNaZmSnSjVjgvoHYKphHtGS6e62ANhFvxRzMu9b8XvhZ74Diz37yd495tVhXS9RwCpRhq89S8tiX",
  "key21": "2vPvKGKE1VWxFNcrArbP4DHpMT3MhTijK5LcRrnXCwn1WK3g1bwzxS9PV2nywSx8r5ERSoxM9UxDvjYsQHNiDX3M",
  "key22": "5fMGNNXDC6dfpLkq2b43eaxmWUY9Ui73UUe55B43NZnmYmBD613f18C6dM921RQu9wjrxU7BPPqbHAxFcnCcebB3",
  "key23": "4EaDLswK3owWUVqgf5Y4MWsMM7gcnp9sjqzcQei1mWAEvUpXwpBWJ628VFJG3sfBTw3Wi7erDL9VHsueCv6XNZiB",
  "key24": "5RtogsdRkZ18vc4j5dpRjtfw5vMuw3pVS3YGWQoASMPUfSUKQNCBquU9nDrNcwTB7d5aFrJgtcQdaKafQWFCcsGX",
  "key25": "4Pu8UPuszRepFsfLsPfmHq7C29inMVSPLXVdmRzQPG4q5stoAji1Ki5DnYpNsQSpTCV6m4dDVKuz3GZrJpH5s3Mk",
  "key26": "5ytNqptMddSAqPtm73cw3bb6npJUTnVWmQ76JWzmCvSWnKCteqU4Gso72gJGc9ESiPuZ8XXipRvTdU8HkFnpzcFv",
  "key27": "3hQsx4LkZKgtW7DzBTGze4KZHWZhijg7PzUZ8f9wniJ3zVk6h7mV7ZwV66mUvuBckBEyanemZXjooTT973FJhHLG",
  "key28": "2h1aWwBcyguCtARdd71ywYPeL5NmYQKbsttUC1hX4WUGofjTjiCVZTvewjQwANjW3CLrqATSEqLmcqecP1KCuZtv",
  "key29": "5nQLojRfeGPRHG7jkayV8D2T9CAVnZwNyE4tUMbcCePJghqgz2AH8MKFqV5jt9vx87w7SoSwpo9oSaWNUjTMhG47",
  "key30": "41Ryp6giiwJ6HTKZjrpozRhgu8pPt3jYAo9dFVPtXQYLVYwSGwj7yZyanzsyV4g6PUAbCjccum3bRSY2a9LPnQBo",
  "key31": "3S3vbLkBFJwjqygANJGMC2qt3aeYRq3xSwHYcorEnjL4ksGTDwzdGNjhtFPYTgobPYTjz12r8dh1q5FECqNscyge",
  "key32": "4Ce9AxdfXXvT55RkUMAVZLFnJZ34aH8uTgwcPn2JGeLfD8zqCB5Unw19fED7eEGX3haEjuBE96RNQ1uEvSPDsAsC",
  "key33": "3XTaSTujB5fQMbv4rAckmaSjCLQZgqMEWzA6ttsEoifMpU1J6uUFh1JpESvBTsVeVhkXHJmD1frx532Mrt6agv5R",
  "key34": "34oCFh6UBNKPqL26rT6SWU1tEutDpjL5MYnHSXKx18BLRaSKEegMJ38xHMZCFX5XhDNix8YqrsuXZWM1CxGNwG9y",
  "key35": "5AGiAmR8CsdL98VaxcJo7Yp1PPPybVojNfmTQ6jdqYWJpFNWKcYyXXtYyG1SGuXCtgt1K2qY13HvPf3pvUNrUWkb",
  "key36": "4xtEmLhgunuhVmB5cqprgPUCPVq59x9Ao2hznrzcBFNFbeNfg1jV4resCz7GWKZ9DzjNPJ6VobAWkVyc38HyzzXV",
  "key37": "43ixNJfQ7fy8BQdZuu9hWQaLKtFk65WHAap9NaD31jfRnnM1ipv7FhpeKsJTMEi34AqcPTU7dKfYKpViA7zwmhkk",
  "key38": "2JqRumomShfdyB9dMiKmFrjdwb8FrUZk9QGq9eGxnbZBKz9EYF6A9HH3V3vVsDfHKiz1DULdHvo3JiLRVjxoich9",
  "key39": "3uKQpdqkywrsEtfM9VgVgupFwYGAc2MnP9hWzFuL2XC9ZYHyfdb9HErmcryVhQdNcjBXx1X9cNy4wpYnwKihyJwZ",
  "key40": "4aPUEP4y31rSXt6CixFv99dav6CB48c12e7Tp98eNSa4ZEo663F2V26onEEweYaVkpzuaiQtWRUFtXt2y5YiPHfX",
  "key41": "46Vx7drjkULPMesUDAZ3AMtApaf7zNvRWuE2cuGYDeEmdSDC1QL5aueNkab18fcHAVj4ctjReuYLeMVLqdAi2t46",
  "key42": "5Ufcmi2Drsb5KRdDJukSY7uDWNk5TvsJbwwaGx3oAyFMmswsHsoeCFBrEkfi69FVfFAWyErt95T1rQuAsUZRTwrw"
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
