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
    "3yryFcTwkRmySuZ5mcHuW1AhRGd63MRp7yXzm9ZmLVq1toCCDZYFXhYw68uF9ndGeLCZAoxYKrm4M9KVbEyDFGhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ecdiKv3B4L8F4FToLG6S4zvAY6efGq5hVu6PH7JeQBsub5CeEsZDAESvyioHEESdH2FesSLpWQD8BowpL4HnK2",
  "key1": "648G2YfnCcYN7j1iCphANXFmrPjCJm8fA9gm1eMnFhpRJEMFGZvo7yZCdUbPuWwykfiPqoaWFR1zeHHjedMxBd5Q",
  "key2": "5L7PTGL6183SLQyXZk7uuaMN3Kgtp9AbAFFTNuZUy6vhnXGBdzEHmyQcuiYqa7BHtkvAXvY9Ei6FKX6eMbyWmDw4",
  "key3": "2psDuu7VwWgKuS3JLeCxNyC4szGMXrxiM3diS1pmieySjWN8GmmnKR13738fdksejFCqSBSz9jGDhkpB7M7TWEVG",
  "key4": "5K2cXJTosfz74DfYtPcyeGQuritGcJ1sCayPLfWhaGzaxupQwJ6uPe6sEVtDsJqBY8dtokkxuPC49iyB4T3BXRic",
  "key5": "2qavqPBBoviWFJjqCqSupwLyV1hvZquNWRyEGYyWCx2LkKyvUgHMZQyS3WTkWATrT2hVdKyGnAo4srz552WPJbB4",
  "key6": "2zAa7y96StknJYFwJ28q2UZXXQLVLrzodt73ZyirzuZvb6Jas3ASK4uQmeZJz5SSU4Q9UYdVar2BXFoFfSeurJMm",
  "key7": "w8horRSLFLvzPcvKcmBHQGv4q1TtUXFp738x4Uz3wjEARqpnnyJzbBc3jcd4DJqmZ8ctb39AHXTbswNDh2j6aHY",
  "key8": "5c6LeZaaTjvqyLbdnFYtSWjvZHiz6uCcEAXi9c2D6niWuLrAyv4nrNmermH1o2UK3AcTLhvdY3ciAgB231zDLhzv",
  "key9": "3JYwSosmXtxuSvhh54Zo53SLxMxybJVUdzXS7mdzdBo1xiKfsayX4hrDNHfsey75ZoqaxYNSMvTnCoJKh64y8wfT",
  "key10": "3qy5rk3H8pX9geR3GQ3aMgjKjSRKdJXEwa63QvvQ4baiupWbqa5xhM29HfkZWo1rdRZNc712jp9wopgzFKj7k9ZL",
  "key11": "35rQcY5TPHMKcjoQdbo3SQZiVh4ynfBLCTWbNFWNCh4krkyTVq6PQjJjK7foJKL3azsiUzRShnMB3wDQFQcF2gjE",
  "key12": "PLqfb2Lmhr7JEVw5xMf6bDNoTV4s8LCNxf9hvouJoUoz5o8fAc1YMdRVpuuMubGHqr8GeuX6fYr4sURJKH87NCU",
  "key13": "3k6oNuxx6cq39Z2Do5Eiv2LsDMv8LTYMaBUUmkWW29etrCKGh1wAubZtvtHQwjGNU86GDn8KHrjvNgzNZrR6jN7Y",
  "key14": "3xmdENBBtrGoiQ67QBaS1LEnKGQegfsqbKcYAvxrbqg28RJAuBbwB8aRov4HX4Vj37bjzuPhKpwemWzkUzXApKdQ",
  "key15": "5p65b2yCpTUuFHeGzhbLNFBQGLLGQWhBRLndBvPmxUCNAk9KBiK2kZzkuVKgaUwfZRLRfm4gNhEhkb6ZyRkciheT",
  "key16": "3PZsVK8Zcmc3dQ3uzE8RKqoWY6bAjwpLPhPzXvyAUGUfKoBifhgyjeLkoZJKR7tCaqHh8owByCH1y5XB4oJUAviS",
  "key17": "DvdoZT81MqgES482vinnHk4P93FyRLPrp63UPiZ2juTBvDoSMCuYrTuCviMTK2Q7RYxc8wSDPXk6czR4g3Jnm4M",
  "key18": "24zHLr5PWL2T2hYkvcLuTkJjvvTtoEJqgKdziL5QnZ9uuGi5xnh2JFQP4nt71tjG5QLvQgGRA67SsD3Domg7Nh2m",
  "key19": "49yCsDzsQtgfXLtHdAXrHiPKWCj6kp1wvJEQ7yx56pqB4KFZr4KUuik1MeZUVs64YPvnW51f416vhnuocukFLU6",
  "key20": "47FNJTTCAdXXtGVoLZ1zXRHohod9CF47rpDWgJctcWLiw7odxNaRvpSdRnfrTVAjATydkSorKnv3Hg3skpin3WgL",
  "key21": "2uh6oxFtGMkPjNsgGBRokPJVagtna2XRByg4P7vuVrQB7zv1zF9wQwyypbWnmqKwiZX51tzQL96GQKKTT7wKk5VJ",
  "key22": "67EzT99AUyfKVpy2b76VPZ6hAewFCSGVQ2mHe4iox19KMa2W3BifoEbPHZHWDNR1TUrYAyQhsJ9LVU71iDCCbqYM",
  "key23": "2jUfdGQeuV9iCyvLPWajbQRDmsuvd4Swmv7NiuoYcwLT7nUk2id3MnJ2Y18artKT3zYfztsaqzrgFXV2yLbXT1w1",
  "key24": "61ttS3xc1fy1aYtRa78QUMCeqy1M8wPvaMG3YQ4S7cfRWket2T89MBP4gk43Tkyw6mufK2xMKn7qmeytcn7cAqE8",
  "key25": "356JNpMsJ2qEsoSPRQU9voRakHdoFpEcE4L8sok53XxJjgnf3gAbH5XCQBoXUBv3KYddkpxwapUCSisksP5X2JYm",
  "key26": "JmNgXzLv4WtCXwfEjfmSKQww2ni6hMEMNBGnWD3KqPN7YcPAohaJ2aCAKuWYJXrBj971E1ZAe5fMGMjFPn6K5A5",
  "key27": "5yTqMvPNEDBjavpABmdR6ta5Pg9zoQPfNY6LjoCLAw6uXB3QkKvR33wyYucDJjrzyaooKS7ujuKH3UcwwCnDSDrc",
  "key28": "5WWuvPDAgV3hD1MEyMjK1y5AJEMxZy31g2vjy3H7H1tvv5eptakRgNouHJbVd49mxHUixbxBb2fxTorT7bvao1Vz",
  "key29": "TJxB1bNKPoYUoWZY6hNA9YUT5NZRReEUabHN6LaAWHwvKU1uVfdWcBrtPRWZfFHdbGWzLNuKJT67eRAcJJdJgh8",
  "key30": "3wFJT99MvwKQnxXoSu1FLaDMfhqMPJ4yZ9AWZ8PctB3gQjxWEhHfUkhPUxreHx6VRYU863eS1ygPN9ZzmaYuwkMv",
  "key31": "4ZZhkqowMvh6ii1ARcbfAosbgFVJDRBh7kDGeduSFpZq5qFXztDv5xY19GDzYWyS1gtgPQfYEH9r2RMCmSFWNHDL",
  "key32": "2QvpTpCY72j5QW6Lsd8Y8BqmEkFyGDKZ4vhvpneWA8NJuaJ5FnvRWGbMCxipWoLPRjYZC4JYZE1vVZkdLXRaRad9",
  "key33": "39gpexYVSWpSPJxpKuM5JXseirPWPfbWX6x41TMZQhWPNzfLHTSyCRTZfjqqWNDpdY46HicWwDuKiNzTTnMBPdNi",
  "key34": "jQmX3HjormtP34JTzdfVgQEqwLSRwUrxRtT5s9TqjsisPAz99F8sNLBF6gS1hyZpAHhf1twwoWRkTmZS9GNHgNx",
  "key35": "3QvXBoK2yYcdSdzWMVrc5Ht7xM1XRjtpLTis9cLHFpBWY3GqsxHcyHMWJYSL63s9sj8CTHD2Uv7iL9mDq9pe5GVQ",
  "key36": "294UJaksk9TSenKwrESC2VrkEViymq8kukK1oDBdKfkygGd37MmGc7okhpoLQv4p6ehyLrdUtN3pA4bN3VWpEgnx"
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
