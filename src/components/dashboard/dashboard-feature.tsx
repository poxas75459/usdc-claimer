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
    "AvqqhDX4iLnNdwdLgqg3NzKjvJpowA1qGTaatADH3f4NyNQ7umjAThrGRUNydd2L2g3SQwHqscMQfPxsK7H3Lct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZLqVzGxxCRaasVpJ2kc4QJ5Fb5aPH24LzJ5aemL8Kd5XcBWKvngpiqmwvvQZ8tQpmdXR5vcrpWpEEgqJ73k68L",
  "key1": "4zWrgBq6QPP3oyd5Giy7zmXdw7WiQzZJEzbx68ohYYBWvjLVAzNfw5r1fXyJRG4sYhtjGUQPMK2b3k7B1mYzgwaj",
  "key2": "66daiB3P4yj1jGbUdDFpoZxosGvVHmELYK4RQCrPPt3dx5C5MqAWn9cP61PNFTXM8wZsssA88P4YEZbcYodTZfgg",
  "key3": "5n4XhpYgtTX7FBSMmzCYawEbqzhrfRD5QEnbtAqDZDfGvY15w4KR5YUD6d5wz17acKdhBWZNc5CGnWP1ztsGMXA7",
  "key4": "5YGbLdUDj7QfDL8UH2KvqecuwZpoM3qFALTkKHRrqL6aBMVq8EgsopkavNDqXVjTPnbsW2d9xNb5VtE47hX9Ccpv",
  "key5": "277M1z8vPW8PNHHMpGGAkiVgAUFmw8W8DWZRwetjFpb76fpiSUpuzEN8jM4TMSVWNYZLGvj1AEgv3wjDeokZQzCN",
  "key6": "52kzRcwzBC99yuDMDDh5q1eJLJ5mQNb8EjhW4CdwAaWVwg7HnJ93pn4xpqF3RqB7AsVQYp8jxz46fPHTEf5D2Jwu",
  "key7": "5ZDfBWCSfrHQeLdZ1rxkkYeudZ2MZ9nfqpkRDbkWbaBmzokMYciDbvq9vDzDC43RFwhavUo1YCE6UYdLzCvsgJ2i",
  "key8": "2FUZbxdiX9vLEDYgSAbxqmg6gg1EzFqhxGbaWS9LCQQR2yXALFuC9jAv44s9Sd4fgRSGFMEYxzfq9XBZCisNuwfC",
  "key9": "5XDbNviembrsiYntuaDDy4zjvhtG5AqrScfbyyeoeUEFGwEvNUPshmjWZrYTFL45AjzqKFa9EdVxjAToepHL4gJV",
  "key10": "UQz12fWVPudutXS6busXP4qoXkD3xnJQJmVETw89Mv1eiYsgYD7qyoAVEKPxmvyaY1GsdmFYhgz3e58QkC5qhrN",
  "key11": "4m6r1FygzZauzhEGyvJqWk977B5wxYxh8CNn5fNa73PREJJYJAX6juTSX1QWJhujDQthd2QR6xkSpGWpDQo4MgHb",
  "key12": "3BVe7t6yfxsrxeu3gm3daq5426krd3LLCd9ukyPcs1QdEvzSFKi6dCpXHuaVQuZZvVSEHeMsoAsQ6LbQ2nDc1v7H",
  "key13": "3WVJJBeKKMKMqGWiPP25N9AGWyD5CZ5tTJq71BWjzrbHg2J2kTipBuhjMYf8HZ8NQ6VNzX7H8cBqQhjKRvbGCdZd",
  "key14": "5dLQuJH7SKAYRFgWsXAzHboqRW3uKvfFsADK51zDXZ7bnUpCBBXarFj8dvmGRZ8pe3apgPyBuAycZ3tgkAL4Zo8p",
  "key15": "2rwPmWmvVNDR3xYGSRWiD7n6VAqdijCcnxSDgn5EbpurLZ2V3tFaQMEP1sobcenNrcmx38wK9BqrMCKwMaVawZuz",
  "key16": "4HyoG33KE4sKTSehKq64y8Qe9X6GnPERLQ7UVXfDDYb98nuVoKhADmrru1ACkstcYBrnG1njg5MJ5iN2i4NCcYQB",
  "key17": "zowkjdYHfKzuuPGi4cZmGwXeoGLCQTTvQW5xEra5P2qasTNAfbFQL9E2U5Uf1i9h8BC735428vwYoJSyT5dLif6",
  "key18": "4gxXjroPHmUxLMn8fy3PCs2GCS5U3HRxg3yzj1Xg8Wn1aWeDJDAdgVuoPNpCYRpM6zH6aeMyaxZ5TiK6WwxhKJwo",
  "key19": "5mWXoP92M8SoAkE4yPqMQhTBq8NEiMMJX2fPMsffggMspppdq53wkxzkA6KQJy53LFKstdzYyuZpGGfZKzn17yvH",
  "key20": "2eUpiTPsxLPg1SxnRxtikmDjsjeuExrNR4tBGYacQ4j3a2QQrdVVdxNGbmL6VX1sDH9FPS9BZC7LPjonED4kq9ZF",
  "key21": "49VkApj4sFPSYtd7N3eg4X7oHdW2fvVz6hrXHM3VveFZmy1792vUHktRmk6xcSuHtbcj7a1duPpeukA4QLE3Mxvo",
  "key22": "29dUZL4TGfpxn1gPhDd1Cuc8qy9ZPE9SEgKS6tXP1QtSptgaiueRmTi6485uLcpqhwqgV83r44fSW1iCFmsAPGgs",
  "key23": "311Xbhq876zf3nWWdoLGBuKao1xP1sT9siuZLtxb48yTeYMDAr5VyM6ysgNTYCRsSw18HkecQuiuwNKyJkKUPSix",
  "key24": "4Warh85kiWTR61f17Zkhw5kbesDHVig7piStpKnWa8ZgybPDDb15pi1QNzfTBDhFMpUiZKNnfwjP6GapEn9uRzQQ",
  "key25": "2L6dGeCchXPJFiymWN9KHDCosb7SJEDRmiSQsE4fRteEfGFU7nT2LHtk5Qe292JDjppiLFj2NxQwotnwHNVVHczi",
  "key26": "4puBiKDvb5BATfbrkEr9Bknakyi4YfvLs2knPh9fx7tvA4NsTGREAKhhERo2d632MBfgUtwFvig5QNZK2eeYEZJt",
  "key27": "KEoWJWBMiSrZkJXGZiczhfqBqwHFkFPFREMc8kCpj1RFg5BCaZZwUoM6KAnpRYyXD1PPdSqHUeKW7FkLbC4WKwN"
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
