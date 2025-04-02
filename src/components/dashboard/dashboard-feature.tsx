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
    "3BHCtkoUScMNeBmFk3M2Y7ZUb1YfYh6qsgCUT6aSBHbiuMCLcqgkGAcQafhSKrntfRPkJiXKH6QFVkfxrdbjWJDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33TiXXYvtuqPvzWb6MBJyADwV8zdx3SBVJEKNtxm5j9LnxjDwK25jjjqpzdp4bkYpKBfqrPG7aSynNgHGFj7SttC",
  "key1": "4CdEP7F8pY5sU7gZYghCVMJcRRRqwnxboji96TFo2u9kwhEW8txQPV1tWZux13V4uknQeoEkQxXeWxwZDnu581kS",
  "key2": "5Lp9QJhPrpdP1WLWrEqbN9RaV1oLdVxJFNVCjuqEC5QSWhXLboWUGhJGSQZN514pchUdvQyjBeoShc49wzL4XQWy",
  "key3": "5XcHmWYcRaC9MKJ2jo3X8GBX6GBJtfLTwCfjzGUggbWBhZMJGWxGWTevD5ZTakLK7r7qi9dauLtsBwL6EQG4EgW7",
  "key4": "5iKToCWP9zAHEToGn4W8zrA3UJgMhxBccsPFX9oD9P8xPUDigPWYJ3ksQs2Nj8PTiYonUjVh5r7rjaNNiqJpn7PU",
  "key5": "4Ye3ouqN6HyFhkUdUjBTyfkEQTQnFoT11LouhRNRL7ovfV7vuSRM1kpLjt4ZHrxLvQL24piqCi4BqPqMWJa7aLZW",
  "key6": "5DtLhJPW2mHGD1KVaUC4LQcYjvWtwC684BsC6XbRb3rmvoAEWRAeJcSpU1tLd1toPM1epCE9Q7vUTzmN3eRpUXkJ",
  "key7": "3eYZacxqnKSEZN5fwNY8cKhksDUbCzFaKA4bopGoSWxSHiDDtTdqLgFygxjARcLDJnpfknjTxJZb8iwC22A75Zhi",
  "key8": "58LM1Ju8zbqMk2J1cb2qTnQbM6dNqPZfcLxKAKvK9YZdgUrAWbSADPuEJs6RVKgjo5bP7MjRdYjWU7QBVNr6PxAk",
  "key9": "49YmSMKTX4GiY6UAKWzbzaF5G8ZFwdjN5JjExMMJ1FsV49M91zhBvncQWC3x8nCj9B4QMYqeEpXXCzgkJtcwwLwP",
  "key10": "2w1yiezsQv3yLnsJuFAj4szosrmSMXEQLVLL7WpqBUm8uzG1UdYNPHAo8zDws7NXH9AMsgbmdzfpAnrQeet4AAP9",
  "key11": "h8CNTEJkRyxrhroxamU1zibRikjGif7ZVorsWGdXAZcYYefe9HzUTizzEq2LadF8QjiQXDLXRTn977ektsJHSgf",
  "key12": "3aboTFRgBFZhNXhCUgukwpTWUkem1354JZiZcBWv6aiAVbt8X54Q6WrpYjpvyYMLynpFFZ3odnJ5FoMJhS4TptTp",
  "key13": "2HgBzRHS3cVtvnU5K7aQmHFiPgpTuaL55Cm54dTWT339JWL9X5YErmwSQqi71KWEvZKYHtjLrsEo3M7MwAZEQcZ5",
  "key14": "4QiSQTMfCRQBbvFuGDfA2Bssymn56NXyQiarT4HfBxU6VCmzvXDyrivNn1npwcKRa7Zw6c9yNeYMoqi5EfyN4xES",
  "key15": "2TgG1bZPcGVLeTcAXkAUX1RtM7JuzUxof1yxbGaUnX3e1nZk8ZFp7fTEPonMQuDWYom44pvtJjGmgP5uawWPhTLP",
  "key16": "4XK2m954cKZucBQNSQoXfgzVsAFgjuQxV5se5HuQzorDNLa1sgrSGmBu1gouy3uBSrr6rFwMzRiHwbtc4LEqKgg9",
  "key17": "3i46xD8zNzZu3TUukYecG4mCmfFXUA6ZP8L64fGnp6HpkQFBMJeqjKkHSK4itxxNAW1FkASSyBQkRc6VRek7AszM",
  "key18": "5UQauwyMNuqKWyCU4VmYZ7yWPXJ5ruF1jRVFW8S1iA6CEiySa1rD6CokZ9h7HN9NbX3BMRULjicUXKLUrYnF3yZw",
  "key19": "2KmqW4RUqUMiTEzru22aHnniHs8Fup55DwpmPi616cxxw75WfdX9m4hHkNJUpE9JBRtmVATMyAAjGkBWfjwPjJs9",
  "key20": "5GRsc9wXFFwYajg3oxQFu8recSHaKC8xae2bCsmvdfxAWg2P1bjSK2cQwfBMU81oYXBuDKTARgsgMLeFTu6oYeNm",
  "key21": "3n6pHEpihMenAq3nLqVTtjwrG7NVVXgeaFKmtWUrC8uydZQE6ckNmM8b2S8SATKomU9bRZHK6A5VGqZgZAo5Bjve",
  "key22": "4pEEXit32tmViiHmFjx8XbKLfbgoq4YSYM21CJWX7d2JvndwL7uVsiE8o5dRTJeWFByAXu6MajH8HJcQCfzJHFxj",
  "key23": "4zTgWKFGCUww9EhKRvv2enU2pqANYLhAgFCWqLzEoLppjiMXcWPSbnVaadsvep6sQHXSbd4UqgQgYDJrnuWZiWub",
  "key24": "2QYCVqEs5EAikMv736zjEzSFFKSoPfSi2nLtR55fzJtEiLryXoyhPtnDriXDU4DJdAAzU26D1YhFc9xNk5KtECwX",
  "key25": "49UnaoQTjTZoeLDGeXemgUaaRuTGGdUZiPm27KQxMKxZBG6mw6LaF57etG12uybxNC9sAhZdqxw8CESMpvuHNJ7n",
  "key26": "4TcMx39ryZEyWmYmPdLmW7TYNDcVFeeHdvx2jJLgwA8Ju1VdKGZFXFgvSkcURoJJfsCNYNeQEZbpiLFCEaYigdqb",
  "key27": "2htDdfVZoGvw4YsM1PyiPE3wkzP4UwTTwDkkXZVBb9znbggd1dSQkpTQyf3wc9fFLPpF9VnWubQ4oob9o9SaNAvL",
  "key28": "3nzvxWuSUthPWJxzQVZgqKjNbLj2VsogqBdbpmrbohhtHxdXTxn4ADaQ67AB8CmUsi2WEvbcezTuJ347bcHa3h1R",
  "key29": "58SwhtY9ZntgSBj1fQEChCQeLFPM1XBeMDVSxjafkLJPQRq8TBoc2w1sW7MRfUw5XRgmpePG11zChVjybyg85gq2",
  "key30": "4bruhgeF2yoDcdiBqT4FLt8sjVuFbSva3Eg181P7w7yNJdaYKiDm7XWRRtT6NB13LaqD7Y3yAphs96HcRdB5Y4aC",
  "key31": "3aA78QYW2CZwYEXWTmEFELDLgra7GHQmXmAM38yma4nA5JbvTAWcWg59mfqRcuQnkDY91MZpgpiYntQaJz84cyPp",
  "key32": "MgXxuMSDTWpoco8kJyGVFKzuq6wnXF3PnpS6vGRQv97AWjgjNhQ3PYvf76D3xahdMqQZtgtxy8RDBUznePPDBAr",
  "key33": "5AJtrst8Qw53sNKq2AohrmSU7VhMDZBhenwPRJwVoKSs4fYd84b5Qz1GTij8UJni9vPLE3bptJmsE6ASN6tCKQuN",
  "key34": "59WtL2LJxwhZKMA161XsdYG1fYamNRnvR4ubJyZ3ixC17vfGMJqBz5MwKBro1Qg6xF1DRRTf3KEF7h2PBCKa3opv",
  "key35": "2L7j9t7w9En7PYU1ifegyMAaCxQrTiGrsQ4zdwZ7PPMLxedFYJ1BcuaRima85BVJT9hDZZFeqfEUDYas4ZJW581s",
  "key36": "3sJA9HUQLjw6GuV2nJpLKfVSpddSc2go1TcnYEdBtmK55zNiBziey8qYaewv4jW91Q4XfxdDmcHx2D2PRcneogqh",
  "key37": "2vwhjecBWVCv2ySWFfJh3UVyuS746o4hi9STYmvW5Ha9wwiQkWirRwWg2T3HARZyYMBRmV9q4tr6Dw27JFCMSFRb",
  "key38": "2EeL18Qndxchw9x9utkds18cGWq3nAWZru8XjQ3rgEPueHdHwW2RgsE96nLBoaTDWUsvq7Jc9zLruiCpay5UAGjK"
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
