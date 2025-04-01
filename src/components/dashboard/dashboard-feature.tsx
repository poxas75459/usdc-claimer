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
    "37cZuPsxTbdgaoUCMdUBQdZyLdXKH4rUfgt5DoEHjiFzbe14CL7m4bZMr8W6k47Lb6tbofbGcesxq1kPo8k2oVmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLp4oKP3Bj58HruoDxsNrrcCpkGsYWhbqmUxHVQkAnzqDembz9Vs7gDAg41r111rgyKG543tHa6udcjgscrWRSC",
  "key1": "iCsXeoJJybRxx37PSF3D6bU8zDzojP6VHjQmom4CkYMphhyJr7WaVV6gw2NiE6HkAiYae62ht1jNQifx8pi55rg",
  "key2": "Usr3UKRZoHhm929uh8Tp74x19vByk81j5Qb2BypXwJ1r9Xuih7XxdbE43AsbtzEDYPJ6hk8ZuTUP846m9v4yVEZ",
  "key3": "5UKmzvXg1sdwPAKz5iUNG3dpwFgssqcAvJbdLU6mBxEJAaAhKQXWowmyFKERBQgT1Q4p16BmjjrKT9up5nMqvqvf",
  "key4": "2948DYTFGEojTVatAtXo4eUV7yTzjV9BLBHAiaKj1Pa5PXPoZR5zZDLoDh9Ae3iYiY8ryVXAsDpXMVGen765qbT7",
  "key5": "3zDooaLYEExpZVdXpLXGpY4TiJmUevZxw4G5ast3JX2dW7tztjc7oMLd5NXJJKtAt8aG3MuGrubJprUbHAXNEexq",
  "key6": "2rUiMBzGfk3wpoCpzwfq35Z4TWrZc3hErUAGrM7FeVcfsU5bU4Tn33kkHwrvW4EFViZygvbUVeZA36nhwLngs56L",
  "key7": "4E5RV1MSaYQ9TztQfFFDBvJNZmyDkwGYMweG61bVx3u3oyd5Z9hKisD1dHHNdQ65Abr7vXz3tWAaXrzKbsxeURZb",
  "key8": "28YadtvWXxxiaEUUxzUp6ty2gHyGJbgvGkwn6nbTrKHbgbC3q8GvNNPqHCzosTak2aBQ8DyFERXXGF1uULzhU6sv",
  "key9": "2J3GitJwDPQTiLDzpF2Lb1ga1pQTqmVoCZsMN4m86KCC1QU9k4WvmTQnw7Rs2x3oYNkRgF8ACGjNSFB48ZSRbdRB",
  "key10": "4ZRHqmehy1uxdqNBfr7TnctYo9RT55ztiW8xHRieW1cBrWfATZ9um1291ay1PTPoh64fA9h6yZo8iy22y1MejkNS",
  "key11": "2zEFWbsW23R4sBra6TzrEYZvH2dZzXzf4UJYdf8aur7bg9bCaGLSBAyrucHBNB4AmLyopmFEMJxhrAQHWT2Eh9FH",
  "key12": "tUidR4ctsMmLr3B6Rk5s4BxPWLucGWZzYb7x9xN5wnPHzXrLXsYLPdJZeqwqXewV1U1UDWTZVZxPMRyA1hf2RQ7",
  "key13": "47Gh5QAqqazWnVTLwx24qsM5GXcWXRoAfU4HT4vRaqPYUTpNCgbHZx9ppzePEpZWY34vKqgTgh5RCdPazLdfr96M",
  "key14": "5UjLDznpVPMjvAPY1EzVfdU4DctD2WW2hBxNQiv2LZ9t6vv2miQdKRBHiA4S4ugBzYWaSw2d1Dce5STkxGnakTae",
  "key15": "hvJtV8YP9B6Wb37vhqrk41agmkjdzNAqw1GQbB61HHYJZPFuTuZtcSw3Q2NDpsBgtVa8sm3H7boGf9s5MWJGHzw",
  "key16": "3GsSui6zMZpoJgUXkvRpEU4MeQkHiYQVWmZtpghnjmbWRFG2m9nyPpvhVFgrnzE7xvSV3YGwVNLRtwwbPj4z2xQF",
  "key17": "g57hxZKySsJejCbXUiyS7tFVxVcphzrkstSxdBzBRyFGBY9Z8A7BK9cLBaPNtiVUSEM9sEWgzpEcfpNSJAz9atR",
  "key18": "3ZfD8cL9LmMZvMmGn6F34frgZvJieuCCdg69vLAyEdYPoLGufauZqTK2MpCpKY8LYbU75n3557KdarwfyxESmtFZ",
  "key19": "4nAH3Ym9Acb8KeHVrtyPCZw1aafjmszuyaeWynAarDur8nTiGYKqXeoCDWBDQrq2EdRT8kkb9GLHP2ssaK2sJ1mC",
  "key20": "2sZHTdYh1Y4gHXNDhc8v77b5K2F3tAZsaqedASCrHKUsyYuxvWzoMBxK6gpZX5Ek8oY3DACUR3BRUxBCUN3ci5eF",
  "key21": "5WZMy2jh3f4vbR7RP2V7t4SBoJ854YAbhUw3ip8bQSi6fKAiFtSGrce6KaWSC553KGCupQCdTFT6kuW4QhMgDbx8",
  "key22": "3iH9rRGZSemvW52HUwoh441GmuNsM5oHBGV78daw1N9KD7rBH94YWtLSUZp7NSbaVSkhNqrFKwUdMDfRSqMSZgNn",
  "key23": "4qM9CQrSUyF3HF783mf99g8V1c8FynETEyTLaLpKzGKyjmzwXg1QRZ2jSzTjrbzZDWEPeWgYuxGpsYBh2QWoAVdF",
  "key24": "5csQm5VdUAw4pkEfjstCzX8WWUJL9sdcatQZogLZAYUR8VCQxTDt2Mnw1t5JmmzhP8erfzXp2cMhhcUBhfHvMGr8",
  "key25": "5nXYjRSRrmSB6oJxMSKe1B9quPwUUxwAQ2AsmxXnqC93D2bijFtoFdwAR8oW2Mh2x1sffMm1A34PCHDT7ghURLwJ",
  "key26": "4MK7USMPV7qJPuFcvNKc7TBqPVyFU8dZ11Vi9hdv7vjVakAZn878gdf4xa2o9RZjCqiBy32ihbuGpkvMTL6MRuQK",
  "key27": "5LshWGXMQvTagoQXS14NZe1ojudqGxsaxWezYt1P4HhChM5c2qgxWgvZiajAvHShuZyjbnUL2KZq1aJF8bXYT5ua",
  "key28": "bvEP681ddfdypoHueggph6vYoX1pWArCXPyBA1X2uPSNNdJ9QkGPUvPRHbVU9ZLJgNenFwF3kyiFVmvaYdDg8YX",
  "key29": "3sCRb6xX6ZBxaGSshFUHhHuQSqvhxPBWaRuYpJKwJRB1YWa7JvFwKsZJ5tHjANvtEZzFjqjkcUbERPRs2jK3S1nh",
  "key30": "5ecCJywSeBq4nm3zLSZkNrxg6EemM2qLtA3nr8K7gVzPpJj8C83gDjdQJ2mMH62URrE1c9e1PxdmPWG4yQtwZCc3",
  "key31": "5a21nWvTQRrHgEJsTCbXrxeXUVQhS1Y6xXFvwANyQxAKPWWYMhduB3SVbLPYwebpqrwiGTdsop7hu6c5PC6jXr3X",
  "key32": "5hogYQ65mo9L38VGVMpipFCpMHkHqJV5QHQPoh1frg2v29CqCCwvwNShuAjwrMfGCK2REE64rafZRuaPjJ9hWced"
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
