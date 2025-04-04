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
    "43SzN2kRzhxfg26BYZAMcrkGQtvXWKa1zjfJ7yz7F1gvnz3PuKHpwiZgi88yvVF51kEqCdEGjH7kBLSK1fxhRQz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNWqE8Djt1tcqaMwBWKQdjWWNCgEiJSUTBRXcUJN99nMkSJaMrXJkjUYYUbUG4WBtBAMBurX6dGeT6sxJD1j5X2",
  "key1": "3G115TzsH1SAVEZv4MTQ9zzYG6vGJtZTTHPfMsWuQ8ycqvjR8yGHzTqN6BWUGsVeYVVPFXHyaG87uQNmKexKkzEE",
  "key2": "6zaWJUawwFR8ZEYGzCG5ZC3sWxGoNPpd9iYkvWmJou538ZRsKZvXFNeEvWQfhUqM6znWwxEp9vLQViRBcQ6sAHR",
  "key3": "25adWi1Z6Cnu1QVrVKJQ6J1bTfnqrqEJpuQ7L4KbVugUz7g1cPFf7s1AvbvXv7SvKxee73Qr3Yy9CsHPQ94bTNRb",
  "key4": "2ceQBvTYt6fMxpqNGxe4yggAbS4efNCXY4RAsrKJw5kyeDdrGzqmfUg9KCFfXGpsL8Y3Sgnctv9KsbFJJ4eZoexJ",
  "key5": "59gSeh4wFydro2Xqka6j3zcdeeZnDeHQkQKmi5EcqJP9ZpmMbyCD8RkahTNwbWiWvLxRCxwR4Q2YUwq83uPikXiJ",
  "key6": "2g6XF1UGNxv9GZDW3R8ujZtEEBwJ6FMkzsJ3RoFKvYikQFaB9U9mMbZD66hVpRamjrTtLWwUfUSARrHAMRAU3sAR",
  "key7": "5z4HVDGfWUUUMrjCzHHjJmKrkW5chq6HpDMFQkwLCG3JxCrQov35HyafoCaBP34CTa8cjfasaxZhdDy3S8ATC4fq",
  "key8": "4K5ifASafYuRPNGrVjueYkoTjFEowX5GyQURN14iVs4164we1ggZ6q6G8x6SQJhStoKh5gwr2jMMYqC4VqnaGyb6",
  "key9": "UaDRkFPjnXM7ACPoib9iiMm1oiLo8rgGqF6Ra7ibDgYn1Wx1rLko8ggjckGj5qpAgBp6f5BkkS3XRubinA7c4WV",
  "key10": "3ZQcDgukSzGoTsF9CZuEhmQRaVTVS91WcNrDTuwAJszHjwQUToB1JmfsjoWHi21GjhSCho6TkgwGXwbrTfp4eRZK",
  "key11": "5mRk12hqNzu3GYW596RCGz3VDX6qBe4Jewa85KRWS1WbT22u6p85zVWaL7oqkSaN7fduqtogPrZ79a8TH3SWEwmg",
  "key12": "2oFQ5Tj4NY3neAE5dKzLDejApuPHjuk265dF8ZSfqcrpAbvWHSbiCPTC3NtXQ7ayUaMVB3T6G78AHpLdAPYu9FBb",
  "key13": "4xebmYdVBg8ZR9Dyx334rgf5aRuTkyoZBsvyA6xHCBJhBTnaNmM9iLoLBi8RRtocXCToFuc4Xfquecm91VLEKeo6",
  "key14": "ZstfqMnAfupwat1ZvMNwtW1tMHsH4izxhAbbL73sMs7NbHEbiaabFye8DeVhXAvPMevQCWA5eUg1dcdKvpq8QXE",
  "key15": "wGydHk8c4DgPFYbD6AoaNc9naxLbURn7SqHxYJBeb3BKxHVoEBqABUqiYENpoeXjKzJm69GwfejB2G1ve6dDz7d",
  "key16": "27p7rWcJ4Kugu2mcXUSs4ezUzdzXn6kCnuAvpvKDvdhqFV3J2q9K77FFKHhpUfQoqyJF5E2DYZAcCBYs9ARRgT14",
  "key17": "2nvgeGuCv6sqN3C6br1gsj2a92kJ7U4gnQpDRbRKzpR87EnvNLpnfvo4EDJEZgAx4dqUVXbpq9dCnaYPX3nvT92x",
  "key18": "5pdpzSjUvwEcqh3zwL5SUpw6cXB4uKkYqZyfYiqBBmFhRtGmHWF5knLP8RuAAu9vCSX4brMbYuPe7R7xyKRKzCUu",
  "key19": "2aHBe1neK4FiE6ML5wZUj7TrJ5Lb6Qa1raSMVKDxyRUegzRbNio2kEsYsHz9ioRqYxtyQQhp1TPDRjuMMG33imLE",
  "key20": "3j9u8EiL7s8jA28cn2ff4FWncHZBM1NisRxQicwvsfypN4ZoEpwbaJdifErBQWAZmi3vE2pU4q6pH1tCcf3ixWki",
  "key21": "5U53fhaM5pY4chu5XYrxMwJyu4s8cN8SVZvtPmdbAFqTCx7aoT4ubC3SirRzmAzYJH9u3Bbdu2Vtgfh2vKhqvkqj",
  "key22": "3oj6VfWjcX5mn5dt64Xd3FKFUu541ZeJKi3J5fVedzQUEcgLSBh2z8ZNUDUbD7etJAA1CJjsiQCSZ76i8gFC1krh",
  "key23": "3DrP4YM7YMEJpUzm79ayZ6qsRnz8hJ2sJ9p3PQ9Rx7mQ4V77daFuhumjoiSLyT9fE8L9KvLD8gyfpp3F19BgCCuD",
  "key24": "2eHxJ8U9vU7Vv8zvddvh4n94yWziFRQzZxSzGSe612onCcXZLUt3zN6GgfrLoSKbfHS6iqrByCLVS8hcPSLnpTyj",
  "key25": "4bsS4b9a46xpiRHWDsUoHqECXuuMaMxSeYLeZqeMHnm6frJo5hceoiaATJJBJQ3pbbCJXZc92ZCh6cijiPUZdaDh"
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
