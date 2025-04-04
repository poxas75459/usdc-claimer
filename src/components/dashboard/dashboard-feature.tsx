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
    "3EBwydQ1v8CS2CALpkH1biYghStDcEmmnNL7teBQc4d3aMbg6ZSLfWgtrrjX8H4rnE1XGR2XPxrkabPFkaamoMS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJL9PTrjwxUt2cqPgQMrYjZjK1pdebx6wGPyKgxcUGh5drqqnGePx5HZjpYmyeXQzkZa4inaBFhzS2Tbd13nvQC",
  "key1": "43eskcZ6gYwxuPiaRXewwGjLBfHCDumQRReSvN5eUeiuyDiq8dzY1DQyeQCvkagm61GrZNMSAYEcGBHejMqGce3s",
  "key2": "Ro2PRFzpjM7ALHAKUqz3q6HC8dYgXeMtBK4RkXC5RLw591PACd7VDfbPB3hVsVenfZ25xWKkQUb9tj9Goub9mj7",
  "key3": "5wtpk1EdWmDbkV56g8jigFMdLxMvDpgU8Hgeri1TncJn8paPHTGuEXcT4A6BouHXz8RQFjkuZ233QUgWqWkBzAke",
  "key4": "ZEgFvSkRtscLyT3Zxk1u64nHkDYDsQttZ6pFxWwyFLGa3GjrNCb7HsksRju8v9L6fA6yF7ZucSAUAzTtwF2R7QU",
  "key5": "2a74e5QhXenuwojPyqUQqsCs48v1JDbD2u6G21UKYLCGxWTbK5XobG4S2Huyyyd7rbmX2tAYvDcEZUzBdmFFRGKU",
  "key6": "3m95PBFnkdjtHAXgN5Dg6ab5kULBvJZxsP5VvBqzWhMi1MVkWh9cAQsf9EAW7FFeo4kr7D96kEWMJjz1q3WwrScw",
  "key7": "JJ2jyJJtnuNYHgvRrsxjK7Umm5Un2QwX3NeM5ry4HRJ9WnPjyZHan9sJN6eXjyqHh5uJgPDM6zkgMKLCrRYHXwT",
  "key8": "5YoB1xKEhqzQBuMRdWKgheUSYnAbyEhPy4PytVw6NHdBe85gLy1WPGi6VjzaBttK4UqYJFs176uFQxXBu4ZjnC47",
  "key9": "2S1GSs3dqRFYKFUYxctdS9d2ew73Edj3tk2UyM4EnDhbYvjXw1bweBwepE3g1vqTi41yzgCiGVzbMJv18wKP63Xv",
  "key10": "5NV1afJeR3uE5HxGAyeZotcVgGeNTyrnPSNkhLPB5xof7Q2htB9oFFV8W7AjWy4hC7TqyfYULAft2MikXnP8iSE2",
  "key11": "3Vi8WsEpDQmw1Vo41HfbBCStSby5oTctfE2Pv9zv7YQpwho6fx9NPJZBN3gqr6rSYmGbhdNKvGduX1JfTwN3XQUY",
  "key12": "4BTYGhhGaaQK4L92ERwqxCP1DGGUQ2dGuTf3zLMWvHKqsjwtazSiTZc9CWp4AaVokN77tYbaL5B4Gpqtr2r3LuwV",
  "key13": "66MBGfsVV8bWp9M3CWKAKanivew4wGHyhrSovSPyJ9yC2M1QMi3gYdqckpVbYWzZWzGkeSpUbzWjSaqLFCUVeKcY",
  "key14": "3Bfsb2j2B3YLXrQSGpT6uoX8jSZHx8jhRLg6YW7Y5RLkzT3fpecJYtrGhXUKmR75DcyY6zvzeDBgzvjvft7gLt2p",
  "key15": "3ASe2TFkmGVMeP2Y3Z3d2rnS9GTjyGvm6L83T4QvyeLhH96Lwh2sP8FUnu6EVVz1cBoZNuDCpPPgjZRevxCxJZPM",
  "key16": "qbf4eMgcpH1i1ZZ4Vo8bPtrWNbUicz3wd6cdNML4PkX8KVWJJF4sKcx5x3WXvG7durafvMvZ7mhT5Vtf1rZH3EN",
  "key17": "9Bsa44QzW7KScMknZPpt9kEnXewUwbMpURiXpvwgULNLjTsinMxXS6N4GQCfAemirepgqRsGTnnjHzEpEuQgZQo",
  "key18": "5vyaRsjrhXf2sz2CLdFVee86BCTCN8HRfd8vHXiCxJRSRJdaQ6aC4hkEFRZbuR2MwsyCuJTjoJQYBKUCaEJQXaTP",
  "key19": "nv6TUqZVwoGHfMLGpzayV5xEgdEVtpVUqWFFjRd7aqjps3ZXNJqZeHBYpcVFvgBpWZqxnwFcPsNeX3rA4pDScK2",
  "key20": "43PG8HzdqhbEtExZLtsV2v6BAFFfakfkzM7HrG3VrLBQiyjHP87Q5HsE4t4P1YjC7TR52EdKYu2HBTKpzB43QhQ9",
  "key21": "2QpVRPfo25GYimkB1hJa3cCje68mLayuH2FF2Ue5kqu2KaB8NHfZCp1cquYRy2TwrxyNScSGpaKToe4vHfhVR5sx",
  "key22": "2tV2rbkB199BShHFRDvFfpaPup6w4mCn9h9ij46gNoKEeU36gdyhguYjwvQfwFr2cC5HVjmD33x9sdEGe5wWGJS4",
  "key23": "2Lrz4wkSVuD5nDwbzbKxNbAkJuqTqShMc4FSHYvZyGtQ8UticdN3LD6w9ZQZFUPAifDyirj6aWUshSWRDvVMbh8p",
  "key24": "5wyhsXJTtvBrPRBRRaAfccEtMN952duyDHLsdw3HqLqBPfteCtcYugXzHEbEAwnrYH3ZioFKKn5Zy28ECEZ9ey6r",
  "key25": "4oDF5BomuGhioQuq2zfF9sXDnMYcSkDf6GYtc35YsxB9yFKf3BPQQRWJcqJbkVRwkwMVcZCwPuh4MZBoi7RHMt1",
  "key26": "7x2D48EVUV77oifGnyJevhgGX766DzDSTz96ydqfJPLHu3wAubUfrfaHUv6dJHr2Z81hoT8SxPwg93cDctNSQbM",
  "key27": "2u8cDqgbL3626LpkFpS6PBwmCcke6XK4ty58WWQ5t4aPFT9n9YyjnKaLS6tNMD6YQg4WDMHkn69ZrZEq8yFnZ9ZP",
  "key28": "4Kxi23YvxbbEwALoJp5KywKddsBQRSJMkP2zsEeHuZPWf9AqrbKLTiSNfZZLa5dKWNqF8p8ZTsFCLayWdrpW715P",
  "key29": "4datreYrmVhtCQeuRmJ5hQvkMJAPuj8h5UFsNWAtt53txmsexAyFMAjMo9QYiVf2HTziw2m7Hjff4HathWvPukkP",
  "key30": "4Vzsm6Xwxte98phTPZRuF5cXAYy5WdU2ta22CJjhM2e71kH9Zn2d9EmGaxf5L4c7CWUvNbt9fDWyxqj9sNUJdz53",
  "key31": "3uAUUib8wzaCK9LuMePUCWxTpxVBdaxRUfrrANFMeKPfngYKxgp5i46QiXMWEnYxsipHM9JyeeoJM8Fzp3LNtDsd",
  "key32": "5rgxKFQ6CBR9PR8jFL26pESC6KCiBaT6BtdAPoYFCXh7w7bPFt23DghuHCYoAT8o5JWitBeSL738e3s4uqhNnmjj",
  "key33": "5nJ9TtmLtYB3ZCGC9jNBEtwjLfBqcUG5qnYyxuHhKMq2z5wrtvouNejsPn7XhnZPY5mvnmnqYQsZSVCNpnCUfExe",
  "key34": "dAhYyGLBjK5aV5bcdsUwm9ju6xGpHQTzACzWY65TUWZ2hKiJsHCnWfDr3n2ALBYJKZTin6e9KeKTaFsPfG2sPDo",
  "key35": "3ta35J5ZmYBWkwgJEsKG4BpDhsu5dMqsUcnDvQ7iXY5vLdS5jXWKLpXP4unqdFkYHQgFc4FGeYxDnYWJaY6fXtKH",
  "key36": "5ZKe6ihm8c1FW6ExF36cypf8WvMsUZzQJRoMobArp6x472vB3hj7o2xPigH5ZvbdJm96XuWbYJchLL3SYMpgRu1f",
  "key37": "4b9Gq7vn7mDee9RW5CMwSTSuBLDa3KthmNkx7DSFaH3vs9ohGSnDcnyoxV7pDH2UkoVEUKYmM92Svwa7Ar6PT4Jb",
  "key38": "66yxisPHV6JiduDQiUwQctaQjRmJuE9EsecMJGnqHXY3EbqCXvE5e5NsRY8W1pcxUA5NKLeiRbZUSgThe26VP1Dh",
  "key39": "336UZpNYm1FnRXT3W4pttdXunx8sLDSKLqLDmCMrXPVsvQD7AAdH4uEXH9U68tXcAaCBukAuM1ZqDotsFRXcaFRQ"
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
