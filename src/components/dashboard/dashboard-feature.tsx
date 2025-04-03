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
    "2hyrr8THLQw1pfGZTzM7APfhix8jwC8UzF78sT1GGBjTgfWPVvH8dBYwLpcSus2NscfbsC4sBBtBSUqABMFTBsBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBz2yQbpuxsc1r6dcWzKKy6rrhX8DmhS5Tt5AxsaGQQRsbHLK7pWgqkkFDwZ4CtRFcCRMbFLkVZUiqRgaQ75TrJ",
  "key1": "4TmFZ6zHTQtnA2u54grpHtBeBQYuoYR8GzxKA13rtxFhZWL4MjYpqWzxapsJ7pGZd9i1rxfxGGm4fTk1qPUnTC4r",
  "key2": "HeYFrF1a86APL4L8LZrDE9Rht3koLFBrvWRn5PG8HXST2x8xaQM7wiufbGETYW8SkVATmKAfSqoXdyVU4DKq9Mp",
  "key3": "4S3wJzUQRj4jyCkXa4J2nAfuodsg92Cwt9iXN8EJLvswkK7acSuVB5Rn3KCeZ8tFMq6ophkxpeLn1xBGxkS1tJW",
  "key4": "3JGAzFp2UjUzDyqG1xjPhVBPq94uZ4eMb5ZMWVf46o21KDka3xbMkaARxiWMtAsGtVozwLswo75NLwr36awMjpXP",
  "key5": "4DMt1zhySmPkCUPm87zKQU6xXNhiw1MVQcxS8xmYT6gadu4EKQfzax3bJgq8D6JFV4ZdW2dDkjeZwVMFtemsp88U",
  "key6": "fM1iij728kX1FqyYjeptga6pC6NhfxUtiNHA55GydesbNkcvh4YQnhjVSt6qTWicZ7zk6LpR8ZfLfSp279898P7",
  "key7": "2RkHUqPrCnmL6nE7qDsoaFqs42cGc8itbfojg7ecGSr5Ej1nALwfMPe1bmHuQjvK5H1g8Y3boZGcMQD62wJVGc6Z",
  "key8": "2TStvYZWJidWj9Aj8HBLXWPi1HaX3DB1ju1iPZhCNQZYB57YQJ4mbfUrD8CbdRFqdrAtyiVRa9HMxx2ro4rSo6Yc",
  "key9": "3xgmUjTevCd1XVyyzXbEJkvxq1e9Hhh8DjJFgVbGNJvSq1RAuSoueet2pJ9qD87RFsZr4ZF735uhUszC42rVD2Qg",
  "key10": "yaQUgKC2TsYhEqiD7DjN3S7SsZ7y1j7g9FehgUWenEA1w9f6bVweaQjc12DQhcZyGLhvUnn4BzRqucn2r4KiA6m",
  "key11": "2on3RuDdTo81N2FHoHHJuKdNzbrMHP1Q4THd9mLsS8vm2xXXNmx8uKSf4b4co8UoAPst8QQPz4MvByctk82jZ7sD",
  "key12": "317Yj3Uqd8Peqym6VK8ps4Fze4pFyqKh6vDQaMiPJi1au2Qz5D41pjxJ8aU2g4H1HzQtrHcx8LfqhJfcfJJAXU9s",
  "key13": "5UMyFoShg514TBmYDHc5gQN4e2yk9ztYpyW1GwfyPPiR3Ts18EXf4ZPAMCq8rDw9En54vcGgtFsrmimg2g9YYayg",
  "key14": "5E3V9LBN3tzr8H2vTiQyfCy84SRLSfERq6VJwjWHkjHESkGARnr3nFCPLPLrZP1jkaDjXXymv5cqDuApBec7Lew2",
  "key15": "32xDm8XuPZF2bvYLJUfncuVudwH2M6LCvqAWavtURuZ75h167AFcE5mtszcG8zzBtyc65YCcuQrKwgDqsvqxMa1T",
  "key16": "5WThixQdVDPsw6mKszc6GYKocbW7xfbtbC5mrTh1mwnXuKzkVhAAXicmjTQgh33fycVGfR4P95thoJ6rqyQk4XJV",
  "key17": "cCPLsB4WLMYTfE7NpwkqbHrVaFHC9NKHek4pfWFd4LV6LK2FsDfJfGhXa1SGSdax43vdfwn3AD18q8RewHMwztN",
  "key18": "cWM7zVxhqQRDL4yeft6eF8pj26g5J2zqEcVbZEAttPQvEwCZTFJarAYrP4kCcPGRm4AHgYFFfKvM7FDk5To5mmV",
  "key19": "5QFGW8HoCWsHTbcjbpA5Bmtzmdu892ZnZH2JYcWzbfAHadYAHTJ3zHBT2XihBL6Xi75vUE1jCcuz46WXSg9zPAjP",
  "key20": "1zhBAQmDNBKNfksiRxa1bdbJsfxejcVHPpQHwzYzc4gWpmW1PRcLbU9Rn7tbUYUCdBBhQDeJA6WSVMm3URYf2CL",
  "key21": "4dwmAWjTWhhEppEh7LGRDcpHT8mDtfdHhvGAJVHruJ5tvtiL5Zdte47KgToqAnPYT1HhAhetpRVG2Tww2kfrTtUk",
  "key22": "r4hRHeFW7LSZScXUztMmZqAZDhB9BmCmBhFFw6zTjYgx9zzXq1kF7wmyR3UXzPRoixd5AwKiG8ETUYXonHNGqDV",
  "key23": "NfSdjkx9DmgvFaCfDzeFqstvELsjNMKnPkVzJB4wddVZcyVJwSXMKarw8m6bPPitZv1gvjbt1HRuL4p1Pw5ZDz6",
  "key24": "K6bSG8pv3bvWHGD1XUxTEEgRdPvb5MVTvEAVw8nvaSuUaa3rFRu9rnDQHVcgQJrv4cvk52eyuWT4vkCSF5ByY4h",
  "key25": "31fsY1NiV71FQZktMrLZXMPiZdJeJkTCHAaUvSRH6grAEXUgXkrB889zYxA7ros2DJV7pW5zXPY6VzTsT7ynoWeU",
  "key26": "3sQcf1sNvi6TjVFEYFApLKF7WDiNFUfQzApcN9eemfRxZmT1e4Crj1xzVPhakztSvmKra19vPqnqYzkzv91KiVKv",
  "key27": "54RZYCpLSznYaMEtGTEUggSkj56WBVPK52xJsojqpXDD6o8PxhiSXLMUJJJDyckJRQxnAQDneFMcUt9byeuw7kQo",
  "key28": "4xHcYdcTHngr3psWV9jceAWyKzNpGyTdGS2BTSUNJSG6oEweqVuiQCnJrFQ1MWJe9nyhEnBNnSnnS58X2P6KHVbA",
  "key29": "38VMtAJsrezj92nuFGcGFzbu21JLC2jFqRMGbi1fqqnfhLuQWsgVgnq8Cy7wZsYYoifFvF8kdoZ9JQHtkRjEDXgd"
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
