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
    "4D5CkKPuYHMmMfQKfQKjZcUw3UYWkoraGhmgwV1769ELQAgWFwuwFNrpCrZLbTpTPg521F95TM4K9A5f6NWEW67k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXaLne8mtEvrLL1KCWiCZ5b693n5VJBkX1sPMSW6ibTq6UXDYuZ11VZvvH3XdVw7N9K77Fy2HzEQxR6DhhobAGd",
  "key1": "2k8vDyRCuA4Yn9WXiTxj3G58J2qWEpG6VwYBZt9Bm9eSHmgaxQf4HECA4af6ToF6K728kyQx9kkbZiSZuTbDz6jp",
  "key2": "BGPXUtsJZGHBDG4h4yYdMVXvKW9Bd5nFVhYxR8Juet7XGA1TXsLvyqxHrsg69mMuxvwmmQ5vy1VRfHZp4Zp3wRQ",
  "key3": "4hfTswwq7MizgYRoaXbQrpNWCWTywGXxmqxXcx5dvSHBapL9b8T6KLjhzF7QJ9Wv8mQiRsGUAMfftn7Pm1YwFSz8",
  "key4": "2pS3c6ph4KLBQW7DtN6nPQZ6rmw5BoXYcVUGwfRBETYedj1gEcX7eaGU84sq21xoTjC7VkcZbGcu3MyFs5r7R6za",
  "key5": "3tfx1BvDMR45jVF8AJsSGkCzBsfy9oNmWCUrWidTJE1NuuD1NYWbDVS7z2XZ5sdVuqh5RSCLV3zegUeCakb3dH35",
  "key6": "4QSeBRMwLEEU6N5aJi4qbxZCxoiKs589Pnts9eDTkbgdfp8fm8gor6HKq27KwT5jPRJRU4vMhjfDZ2znZTkRT2W",
  "key7": "9eWEAsFC6gQWkLPEwThXbCYXmtFQMcqYgW3Mu7ZYWobLmhjcQLMcWjeJ1qC7Vh7kEy5zqRZiF3orrtdJvSzebmk",
  "key8": "BcZVVBynMQUXoyDNY6xsaZemMUS2vvR6z1Ao2QvhZHXM3GhJxqn55TveLH4pdX1yAGoeDrvedyG7xGpN1HrFC54",
  "key9": "4SGQemAUwMhaNEMdqTAEwFSYz8vpzJej4e65MCX75PzZ4ik4cLw5pHqEkk5pwnMWjYtVqyMyEs2vLHUDLGEWMy8c",
  "key10": "VwmTkuVnwWqH8woAotwfzBZpgkTZWszaAht4qLtDZQhswYpraydFaTFG3bG3tNiy7MvCy1p1zQG4giUa9sZRmtL",
  "key11": "5Eq56rB2fDMnWwMQUq254gkMt6yCAE3yxYePCLDSaDMzpnbkdK6PdRhHN1vKb7HJzTARUAQghMkDGcgdx4mXRvDB",
  "key12": "EsK8tttLRgdJeJiFj3C5XcsvcRLbZmHMfQYcrw3fUZ9zpiwS9yjw8KogAkzCh15BoGkZvzKkGqW5duwox2hkoVs",
  "key13": "5uaZTBqrWYnCcXZeyos2SuPHkQYhoynqv731P5FBMNNb2unhqmva3grMTTNj31yuVf9U4X6Df3FdRv6LXNRZn7AE",
  "key14": "65kX8kH15fXW5MjX9FfoDVkCSSawb6jtfttETiKBCKT3fMk4acQcri6DaLSyM9coboNNR8kF1Joa6ssamzbD6mSG",
  "key15": "26P3WL7A9Pbw8KU2c7h4YkwYMBaEeA76DuDncYj24XcTu61s6JLFnpVstiyD18U6QfoK4ATYgUXZBjwY8u8BP8Sq",
  "key16": "5wdLXtxbw8KKadzLiD9TBfuAyLhn1hqNwa6oZAJUqyPzQ7QrVGJ3gn8dKjunUzg7M6zd5zYt8bb8qYCW34eLYenZ",
  "key17": "5AVduTSS5wAEtkunQEbw4p3t5vB8gMEbZ3TrjC5VuFajmYKge11pJ9h4APhxTSSwgTK2GoW6Xx2ePzvboxFUR6Uf",
  "key18": "32PqrJ3ENiPzVu5ghop3B1DJsckzCXXrV8XB8pcjPDPVoyT82HjBfcpHWKqWLW8foMp3ZZY8WAoKkfuFETe5GhXY",
  "key19": "3tXwxzim2KP1GkkpuVZTNKPZiA4L4HzUM7M36oaBcewFfiShqjizWM8kJSqE37wWsvP3d6apKbKAhV9BPvpjtAh2",
  "key20": "3NiyA3ZBE8URd7J2SGARV4DZsrw6xn8fPSKXr9vASMk2xWjJjqcuMyvhjJWWJ7yA3oLuvgcNeLPAikjEtEyYoWVu",
  "key21": "4Kvc6PitmvDBUcLh2w8ixBjYN12P8Vwx1kJhLpScM23agDkwuigEfgE2UhVNGm9fYxpaqbL4xRkgVUe3euidRAZP",
  "key22": "2PeEV1MRV2zkbSjeoKt9zaiESMAiaWsaBFKiVNj6UDafUk3HjTC8ZcjZoJ7ADn7jxfccXSpXe2uM6fWB2kmK2PCM",
  "key23": "2D8yZxjorUayaTUS3SKMVGYP77MxfArCTvdZ22w2QKk9psx5JQjpmMYWN3hhAWsgZCBj9SKSUjH56kUghBhrMQ4k",
  "key24": "RPKEDtWkmG7gS9LJvaPiy7UJgzm2Xk2LH8WKxs68PECSDvvXgH38hstS8iqwTY3p6HoKF5UJNnes9nkTVBRJxeo",
  "key25": "qQL6cwHh6PWHzAGNNWFKNiGZU1UfhVsBtAStx3nWM8r7h45DL5ZvYt5ADRL3MMEdkUK4wAFanYZ8mKLh9K4X7jo",
  "key26": "3qcsBdPN6yVf1hJhNcp7uzdn8NREwQC1CfZcJDrDGBk4cCBpRmNkKb95MLE8gGPBmrPUuz1xXhzNZGXhSWFvxM71",
  "key27": "31hdrjRAyNHo4zziiMtUyZAziYjuii8WUCaCoeGigKR9dBu2cJHec3U5pX8mDZzzP8PvAexfYtdpYxzjHhchkwvV",
  "key28": "5h1jCit5E69zvzrCUfH1jZDSkhqnNzk6ezc6EUgNPo68RrXVV24yQXmmKv33WPPqqinVUcVJsdFWpaRv2ddJ1rcn",
  "key29": "4G4bnRrWmWGDJ4HKvxpkcNs4Ysb6tmsmSZbqobbzpZuX4DEdrxxNo7uXzxzY4GTjpkgEfiCc9ighx7nLFhb5pzXA",
  "key30": "2q8Qm4Mg8TwxMH8xUhyWSG6hvMarDWYWoWSmTmv2vNs3Py4QrvwhBjo4mD33ixUuDg6ZMG3N8J3ZBjgYgTK8C3xD",
  "key31": "5yqGcx9kVNUzddR6HDDBym49Y9Kk65fAkAD89e54DZb7JJDyUgQFGACGSVPixsuBuJAaNTtF1NAU7X7BCytbK63X",
  "key32": "ueceH84iWCcsUPQ7LY77x6eXrt7zJduv178Ex6eGbvfP2zhywovKh9jLxpPiqDhDqSAqQua9NGSM9zdwizE1oE3",
  "key33": "hz9RMtmTsvYKdnkXXRFP6Y9ZTMaJJPuDeube5kDoND3EiiLaUD2ceHtw7MMVbHMoaoAY1JQVAqJSVnWn3wsHUcB",
  "key34": "2MBZpowR1VVbhjpiCnt2vGHRbtFJMKabgpkBEeo3KDfef96apyHZjaYhaiZpDXE66evpQjJMUUUELg2cxjBFb79j"
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
