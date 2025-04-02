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
    "5y1n43aPKK4quAcEDGdCr4KDCbsX1MfmSXRteotRaW7P8smT1x8ToxXn49ftioCZ6rGqPsdaaK9QK6JdJKGjn3Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xPdpYvRJWVxk2STrq4ca3zRN2xukB3RVjPNRDHsJ3mwHMfjfgdxQ9Zt1BLV4BTLE3TMueDZDDZUKSmxZ8aVBSG",
  "key1": "3dGLVbEEF8Vtp7EDx2obBkFtAddtFJYGHPuqkahKYgMEA4jJWwCd8Jx4GVXCaTMwW5v6TVGBTritCxt1sQs4FL2r",
  "key2": "85ATiFXEYcJjnCUkLCUdjp44cucRaEJB13CeWhEeaD8Y2WkgDF2sj4xt87pL4JVWXNadrWyX6iM7GVXETGdJPrx",
  "key3": "5BnCu4qrjEMGzbSPnAVyPgCQetii5pUv7qoaYAwwgb5QgMdUPer8H99j5pSm6pBFGW6qCoB5vXkyLK5igTqVGRL7",
  "key4": "3P4X5EdM8bNFwy2YCdfpQbx9pHAtJg6EaiNu8LxhHBrDPUexR6GL1HFMUfPdMcBFJ9xs4dFZKRH6LDqpu9j9BuTs",
  "key5": "2BDddQe34VmFsVscVQRbSXaghUAXTL7mqREWHeNnFjphM2beWE5cgqiDEDYvu3XX6oKBHuH8AVFfcwryuKitfnof",
  "key6": "4qbZF2GmFHG4Wa5sLsqtkQ4ztz7mQhkapQ5gyse8C8ULcnM4PVv2CjswYfbtqYWLUJGyjFEjb4cQsL6Nx4hGwxtF",
  "key7": "5YYB7s7sqZHYR9Sv1ABfXqC7EaT48Up5xLSRZpdzYdpemffWhQLvF32YnYvkkKeGJNPyeMPNp3oTu4W48vLEQg7F",
  "key8": "38XwNjytPc2doLHCKeZDuHj6dx99QdoBZ2GPy1Tk7Mi4Hyzo64XQoaovznqim5iABouFqJEThnz8To4ERiZyDWwu",
  "key9": "2DGQwYJvGd1AyYTAqgjgHnzxgt9R5PQwJCyyAz8HB9xQWe5UBvvGs9fPJwJcxgrwXumfhvpZGfWcnFqZHbBMd7y1",
  "key10": "3FeGT8FiUh9QV38pSQL2Jdww1xEBf5Pfga1MxC9GzSifYfXj78r3bzC6sYSavUFZC7cDF1Tuva4eZwWgDSDvJhZr",
  "key11": "3RKEVpMaF1YPJZ7cGvPfAvHrapJCGZagRu37zT2ZpYCMurK5ZQ7K31hj5XWxpKNwdvQHhJcbU2gmWZ2p3MJoHaSo",
  "key12": "2tagc17TtCgDczS3xcF34inC5ghQyi7fLfVWztuyzQpccwzpcYUH4dKAjPgBBBZ7KCPkgmEgv9h1Mewfpdmzm6H",
  "key13": "4wEBSKxtkmUNDEumjaNb1kC6WkrWsQodMf1P1aur54HCyAh8mzxXv3zJexfCfDjU2EFVRaR8vjVWNmqx8mBZuTQd",
  "key14": "2NXicCHbjsKPLVGPNVssrvmAPDTG9J33f6bdeYpuGJsDCM4fj392k4PRPhHGA1Y8DT4hsoVfBB1wEhTXg6wiKjdC",
  "key15": "DEreQfJFc4byDoSYGKUPPDrFBNNJpTgAUYDKzayKXWRNhradBhAVuQmmbYDWFkjsqCwpe8YhQTXqJkHx1HzmYxS",
  "key16": "2nQHocYG6UTt7jQ8quDHm1jP9Bvg9qxx6jJdWnThtnmnKY4oMenChp54o1Vv3UoWhyqscis23PXH68Q8dnJiLKE5",
  "key17": "23nmRNzGrvvDRrWQbczT6eWEiJjKdHUmU3NSz7R8AJ8cddsEDoFNEpyXgCfZRNGUwXeuyYc3FMUzhr4svboE5t3k",
  "key18": "3aCqpGq4tsrFgrviQ46qnFoCUtL8xoKXkS2W7LkRxJAbGLko7U5dYPWaedwVxYDYrBBEwXDY3sZMKQqVodz9bypo",
  "key19": "2E6ewF5kiEzhNPzEby9MYBjrodtZhgLMvb6mh7TH85iBJRjDGM2fuhtr8vpTNttkPSdUK92CCGDsFQ5K6V9NiELf",
  "key20": "4mNfSpYqUGG7r9zAJpJRQqd5wHCY7EEotzDceD7owVFzuqosEDZBBY195uYhs7fV3pao2xDjdhq3m6hAMCwEM2KM",
  "key21": "5QCE9tUdxbXVNoJxQRCpa1a5r2N67825JbxgucFpa6SJqEeR2XF4HWmD6zwy5yopCFo3Uo2SK6NJfpBBb7dDvkXK",
  "key22": "3GMwx5KzA3akkoWfhNFQ1egvzKnsT9wLtPR47vsAtgTNRnDCjYwZ4dMp3wfwbFTo4sThLLe53RwQ3b7fRzrV6dyf",
  "key23": "4KxngykXPHJtUJo51WeRcpR6CbzdJ3qwNaG8njnoJxzZjLrN3g7uDewSyYW8pSvqVUAETjCSDbSKnahomjVfvihv",
  "key24": "3QkSMQYEB5cwxRrfeVg6KwmUXoGQeDUWxrXg4GTEqEmcnSHXwJJoyuXMHHqRDSVyyXANqvHaNaipinwnZ9UJ3EaL",
  "key25": "4cvcNkKJumbGnfAFHR3Dx9Z5SWEGLjgQqKmjdHNV1dacsENKsDM1RbgVX543HL2jhbNbXBJcmT3iRTDakwNE16F",
  "key26": "3PvhwJ5LcHLGsro4KMqj33R4c23fJbNsu8y16pGuTYF654tq8HcKAApEUdZxdeNmUAeSN3GhMp3dwSySGostcjh7",
  "key27": "x5aZAVwSLdhBPKFYcJXgpChWyFbxRgpGHBbty4NfYJNrJNkq7Zx5KRGy7ApP8GsQAfk7EzxB5kJaiokXvk3LyCq",
  "key28": "3SVEqi3BU6VC2r4d3xefCKUFVgskzc8WuBSy51G3Q3q8JvnWoKWVM985QJK1ZKz1CPZg4QrzFtfq2PH71WyAXRim",
  "key29": "3RbFCFXML45Re7gUftdnWTNwZLjZruJFeSjmMEasgep2PMhoqkb7SvZvLVjTYh55n7KBqR6Uf8y4qycEGLDTrtnD",
  "key30": "64t2QYVxi1PrgBHrj5JtujGfgAkTaCYDSCygs5R8Ljn9eyP8iFFqu41DFKkSWJhQYLqJSSHVBzHC2NQjHvucyhoN",
  "key31": "63oBrQquqsWkikGLBwfKbaGpAdHkqPJTzhU6ce1FzKhH8pWs9VJCcns8hGy9xtUh5G5FbhXpnrvjf7pxzLs3Zpj2",
  "key32": "5UThcVP6USp6Y17Km2NoYqd8iQSyDfGP4PJx7BZn2MjYprs1v5P2t2y96ef4Ls1rQ8TVkbkji7dgroLnbNma8oah",
  "key33": "5Dm4JD6mYoNAELREjssJE5GKJzpZ2BgpHSNQGY7y3ouUytX2A6A3HNhDors8nrYgWy61X5ehzAT1BxZMJNTmjz1B",
  "key34": "D5nUU62QjaNvC8kDbVBnBJwYuH4pYqu2vmoCKAEeRf5GjjxRcUS5pkkVWnMmMdJaCVx45Lj1XmpDqiyNESK6pGn"
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
