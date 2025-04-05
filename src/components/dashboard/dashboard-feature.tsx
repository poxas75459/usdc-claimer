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
    "5xRVcizpHH9AX55okxnsJzzzVCcexr2GD9gy2cD4upmN8Z4p4Mh9afy6oKSLNFhozHnFfQBRU6MgZRUTzH1djfmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U64jUyjLx6Mis58GYUGM5py6mBHZ6C3Yw7UuFVgEgXC2XD67PMUkp9y43AbasfAihST21KRmEroPe3BR5puvY7w",
  "key1": "xSHPm9EmBBo8jWqkKrJevLC7mfznFpHQnEc6PS3wdFzkdGa9hWpjj3vogZA893Q5sZc8VhMxiTpv4pB9opXP7Jf",
  "key2": "2tBVWGrRLgu8yuXC419vVZDVRKGqwGtZuSGfnf3bwqHxVd2QRBFb7X6SRiZ7ZprXVSQSAoWe1kukgXd95iLTCTFC",
  "key3": "5ftcn95F7NLhozujnLk5QJfeEdPbm8iFTA265HRUQ1dJLJHj9XzZd64mHV5PNdiWkWC7vZikxLyc6dE8QPB1CNKg",
  "key4": "4L2dn1oWfx2e9VjKAmgmjsMMpKuD5eUYTZoHJ4YAVLRCYMyP28RHHvhsbNcwarKWcDhoJBxis95HJ2zSgRpBve2Y",
  "key5": "UsiYvixErrKc4QbVfGEny7Cqs31F1Y9vMJqHBh63AhHTymQ44VTh3zTX2SViSQ5d3x2sgUYRaGVH6CPTE7jAdKM",
  "key6": "2CXRu9SqpiSZyouH2uhEViUPCtBk8vj2Vyw9s7GAqU5jJo53s7E5LPmH5UVb74qgUwzmXQzkjkZ3DFQuEaj7evru",
  "key7": "2yncjVcwNpGpnb32Nm1yRHF4Y7RsfBz2yXSb2NF5DgZpSAZnRcdhNRe9AyhG4sRXHSgeimUWZhoPUxkYG8f4fsTk",
  "key8": "62QkRAu1sh8QYqnNyLvXo4CYJdnMXbBoTfQJW3fgExeexXgTzmEPWPnte48ahGgcDazrw82KbQ1tv8UziU2VS5Kv",
  "key9": "K3cPXL7vUmJKiiwQRc3z2TchbVbiQVKnwXFRP6UFZ2GCetUSKzzuqLMVnoDFf6PdBBDUdvUHKNyY8NJ1Jv5r9gE",
  "key10": "5kr2oVXwwgz4WgdxDBnw8Zn1xc3DXNGVW4k4c218YDuHvUNuD11D9R6iWAbXMAGtUYBEuTKCWfaeeKg1CXBNJUzN",
  "key11": "4jBqNiVt7xWXuAgVjTXiLtDSEgfcTsZtdoUrsXSzWjAJwNYmvtYpX7CVhETsfgJM3VwrGMPcvdk4dmBDVYNGYwS5",
  "key12": "4F4iPxoM4Edkb27H9ZniUzuvUy2u4ZDn4kPoMcUKoSmgykaU328Gkyu1bo7fhk8Q4U4gUNobjDxzdZ93G676ko4C",
  "key13": "5oKfn9gD7expWcq9DoGLB2CyJZbTmA6wsRAKGMp8U8KpWYPqsT6gVBQ3Dk7uK7rHZd5uPqUb9pgKvKsTzVs2gNSt",
  "key14": "2TvZqYAdmVYEWBiqHrTmCzdJPpP5rzyrUnNPgD9U1F4xHzwZYvgb5MQkXveCFA6zCZwXdaZpmaRZJVoF4VsspKm8",
  "key15": "3VeEe6TefHyNg8Ppw5gQGJeTh48gczZPKgh5Naa5Sy2kzgyAAspwn5TJLEfviyQuhNxMDMeAzje1sqcWoCBgrK2g",
  "key16": "4Cab9pvc48NyXn4Gze9PqnKnFDr2RSBUkeG4S4zT7yPzjMYSNKKJRf9GLWS4SuTtSs3BTd6UvSmcXs7MWs5mTHwh",
  "key17": "4a4qCQ4zVS8gLVxAxCR3t9AxukbpY3bEUhQAK6vCnmPMcXEf62ZGJpYXgTmH5izeEXsvjYFdPEYPsrZp7WtiW1s6",
  "key18": "3f5bPLH4Anzsi9q7VenaiFBmCXkm3nbj4EqkrDfwCSZ719X6G9vLZcn3YvjKpr9VwG8X1tmkaowuio4zoetve3RG",
  "key19": "4SsossjJoZpF6ay83YjT8JKEQFNSYhqjJoHa95TXbALWPegQqEtdxPif879b49Bz3YcCe2ZJ12i5JUNZ1yoE4eUa",
  "key20": "45gAExBvcPjmQhDqCoXZeaAUK3w6muN3iHsDkKyATVEaqzpxEEAeoDpxiyT4mDzTYjPiRkNkkmLoWWP9xZPXeM2m",
  "key21": "3Mg93qMD8CX4nmbCeiG7WF6FFAnWFYVjtEQLJb4gGjFnSmzv4EcQfiW2eKR8LkAx1WbHtTDRN7EaNXXMzvbYswGY",
  "key22": "5D1u7yYgYVAQE3A7ncaJhBFEDVEogS5wFi7k1mwn2kKBMf9y25xHoqhC1eovFga8p7oQ5Ay9V1T2BnfGZEoC8tYT",
  "key23": "3i8Nu4imLkxJzBVWkg4cnJW4QpLwcKuAJQKV3a5dSKBuALjML4AQYVnWNL2sfvZBRUjtNArKZM1vTqGPaKL4h6C8",
  "key24": "58Q5VEeyqGZQ5xLNURvGZP1x5BTmPg57qkVTEp7MKh6dTw6zz3hAu2j526e94ZpRG8LMAVZmV2TcghAT1DZiayAV",
  "key25": "5hk9LonTMVpHjue9xyzXLEqDgHR7gYnJs5eYM5RNPuM9xSnRGBkYNjZeRFm7Bp9et2nYWYgBLhPUP3Givh2XfLrZ",
  "key26": "3Wd2qkJZaGifH94FyXNnzBATcjv9HZvK4PHSMihQfCA4S3UapJfqpdTbecZoMqJyEocrcpWX6EjakzbFshJgisHn",
  "key27": "25CTtJoSrjLCTyhX9PwyahZ2CH4aDAVZc2xnvzz43m9sfahofZqfdmEZEgxM8oeFUASodghjQh2DzSiuqNVLLX2w",
  "key28": "5z2QGzhXz1QdA2v9iW25YEbxQs7MRVqFkndREedmFc78sRVBbK1GjJC4XRQ9JnQ189dtvHBcSCtCTbGdzj85F1Ht",
  "key29": "2BWxNY9Yb6ii1VVewaNW2ksvLh8UJX3gYYF3xx8JKgnV6JC7TXQk29rmKTMBa6svVoQocNcZnfNMhYUGpd5fGCKH",
  "key30": "sjvgbfSUabH1NoeDUXnKriHrjHNwDjsVAGizTs8oDPvdvRzebVbTkZoW6FTVy632WXwyvVg8hDVXtRzi2zA8LgB",
  "key31": "4tFDSkhgsQwQTZxhFXh1vxhibAifC9eNCmpyQGkRLm72KvHzPKSin9CuULfBvtSnf5Gv1qrHsUXmsQnpgo8hNFNt",
  "key32": "3D3hSBp6pHKebAX1pLaHgpLqVqJSfEwqi12sUTE2MA976Eynnh7idRd1df9B7ZBzFso84k6bQzgwDmAC4t8FeH27",
  "key33": "2rTc3rrdswv4pzoShu1mJi3zEMEN8YNGGZpvs2jMLkSVJRJUwWRSnzBp2JtugBcVjCiCnGtzNsZykte9NLdFFGa4",
  "key34": "4UwCwr6sm7gXNTnsHfHuEtBo7MVwKgfE3BgkS4EeTzioUz6nt7fRMeJAwYCAp76nvbWKtCKbaZrMNPycSEuz51r7",
  "key35": "3x4PU3GZU3Dn2eCR4FPECLnxsKiDSCRFMDZZRPAAiHg4NwXn8tRyiY73q3E4ecZtMjY6Uei56uquav5q76yKQXFu",
  "key36": "4vSMYcv5SBPp6F3HbRc9fjwdiZEbjcY8fXgr9AfZ81cnXGJ2geyhU9NZCw6tRTjwDDCxV9qfZbbpWEwq2x9tTt4w",
  "key37": "3GehBxXP6WvB3Q6ymqTr7LDQ5XY49mgfGGCPZSXuWhykMYGcxpuiNK1dvqiQqnLncmwK5yGgDkLcKYeQLCSniuNQ",
  "key38": "vSHiRkY6tTDPCt4sGrmLjNwqa7tqpy3tSerwWgs8KuYsww7ZVYSHBwgsSxrccroRZcidS2HtkBkq2nnZceNJC57",
  "key39": "4bPXrq8t19bnrCJiuwEQ17riYPugiwEmyvjoHGCq7VidvFTHbeEGBPBhtwykP2dzpraYdwNfYS5wTcbdJYJ6Rnu8",
  "key40": "39vDVyiuSAJnh79fC89SQnTSXbHVLcYDa6N729Mineb6vjvgqUycwsLcWUEeaXr33j7iGHbATx7RzCXsW4SFogK1",
  "key41": "4syCeohx4UdQX1hEYmL2n8j9SGTj5SEtgejBkdGnHuK1RV5vL5KaGNmUgxhWs4Tjmc2P44WKBPQtrAFjFbBBy1Rg",
  "key42": "9hPhqDxLpzBLMNVcty56CfNfSUV1iq3f269ocXWrkps9pq1pXY5rJVCirJxEPzHyqvZhhP3pvEgCAurAJM9NjaV",
  "key43": "CnTdVinszoMZ5vqMPQgZ3ZZSDLCeACsFc8cT86ziChp8dbmtNSUiPyJ5ftakAYvTnngwRcgzFvYUBTbGC9L79ET"
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
