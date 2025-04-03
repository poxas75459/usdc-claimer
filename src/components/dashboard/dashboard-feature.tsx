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
    "2oH1YfjzECXK7Nq8qU2cUTzynZTufLSE74wn4tkwUc9VSRizRPziN1zwe8pz18WvZgXQVyL2MQU4G4GSjNs2wC36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2X7dZtRXHtx4B3BYze6vsuNuWaB99NKxZfhLL385LG5QqJnPqG9ipg2j3PdUMLYSGSiR3AkwYQ9Jw9YDU2E7hX",
  "key1": "4Cc2YckPAHisSXj3U4faJYnSRsWE8XAyJjD6PoLZ5WjJpTwkWjkqx6vTCAB972K3GUzucUWg8h1rYkAJtJMMmECM",
  "key2": "4eEAKe2t2rYkAmb7ryKiBCQHmjuE9SEJZvh55AbgEx6kKT8nimHAH18sMLe4gMznZecM9Z21sgBpZ6LvMT9wGR1r",
  "key3": "2Y9AaxhxDSojBD37cibzrwDLj8SUZxaDk3YebpZHB96BriAKmqZcFwq66LeiLe8io9k1e7z1Wgr1yDcbiPsBdU3s",
  "key4": "4PTvah11JzRketagcr1RMAZeGSwdFepway8GrC9T311q259U3YAU9tDcbSMDuPhUA2qCG57YeJvGtKVdS78Bh9Qv",
  "key5": "5dseaBGQXKpcyJyxFCGiduAVZ63MrfJiGhkgAvMwVjfM6xgCfAjjgArrFrv8kfcyJNfaTThWcARVQYGNa6B7UNQp",
  "key6": "53LtVG6JjYZ3iBWNS1U393LNCR1ewjHqrvPH7SL2MthqqaqFiJJDNZ7B5p7h23PxBDFMeesZdQ5KWwaGT8GCDNxy",
  "key7": "BY4kTnQLo5Crp6RLQZ45u2QxKGoY86rsShkp4V9gxyx3pSzHtyqaf1eNF6QZtyPMhk8WuDhfS1P7aWDNttLqGBo",
  "key8": "26WpcmYpsJsVxCZH8XMGbfbR6yFXQykvYxZhXeS3i3ct3tkWi3RmTiM6UtiCGFSF7QURi6Hks6qAXcbHD9dj6jqt",
  "key9": "5jqt4Fux9EPraVxanWxqi8X5jx1rBtZioY6LafjPvaDu2cTE9XLMxcrPWU6F7ZXz7Ju8nasR8szMrrhNmM4AnXQv",
  "key10": "3Bw97gH9BddSDMmKyeSgqF5gFgr6Go14uf7A9xN6TMG7EHfGhFF34Cy6n3J3fY1zgPsM1jQ7dsenJApQoyhw5Pj",
  "key11": "9ds1fCwKWzqxj4zpHZdqKf9UoEZ4cGnW5iQ2mBuHPLwJ9HzXktsXiVeAgsjBgoAPEu1yuQrJdoEe84qmnAvTCEw",
  "key12": "2wWhqdb8cE6yHPXKkjjNW3L6o5jXXWwE8bzwd7tWzmcxkSRRLSrXDVoQQ1Vbkq63s52rafXmjQZEjVUajo1sv2tj",
  "key13": "2EMHikxoXKLvnRCBpmwJtDQ4ahk6Q3vUkf7quh552v7gADrH4M9cQJYVEWYzYhRsue5tzaUCKBk4cGXBxiDV3Ef5",
  "key14": "5BxtJr8j4MEuXk9phLB5TQC5BoCquoJNQVG689wvKRqJ7db8D8hFxWHLVMxSp5SwronJJvAfuddHnsMpETWZgUBY",
  "key15": "PAVWd5BJcMoUK93huBhWK8J9vyo2WpGNQbERWWPywWHPNCKzjLEGszwcVu8boxQMPd5xb95GLLck1bxDG4vfYAV",
  "key16": "2GVwKSKLEt6s7x1PbrBzjsVyTMBQgpE7A3JtuazqZDkyERLE4FWyQL6nXuQHm7gJbDVghCev9d7UW4vT7K7aCdL2",
  "key17": "4NwAnGBtUjXo4xCYntoLU96HiND4dRW9VJbxXTR2n73PrbEVv7GpM6ARAh4QuLBmTeacmBsQYsSHFpuHENBq9NwF",
  "key18": "31DySZFAZmUtzC2fDCYN5CDSjnape7VVzXLoeDxoxtRCa5gfAk5aLR2gzeb1tto7YbmLExzFW8LruJtZwyBSe63k",
  "key19": "2fzdcpMHa1QeYHu7ds5XGCJNpVHm2xvSDjtPuQAanvLRVGJ6iAv8JvgPKSGYsvwNcPytmHE3haAhAEhQxH5fs95c",
  "key20": "3Gc1Ztc87KGJKnSRAuVk3zF5Ld5FL7q3revhdY4ks5WRoH8Gbd89xRXmLVVVb1RwFEALBNvuiKcjGTR15iBpTbxA",
  "key21": "5AvYnWxFg6qbermKskLbE4RpLxgN3SUmmxNxdr1qiTDoiVXUJuY2mrDAryziCUopyVpo1MapPQf4JzAziMNdPFtG",
  "key22": "uHt2ReXcaYDu5B6kXAUS8HVczmg1dskkY1EyAGrpu3jhBpWdjpxyyCXp5ZBLw3YKhsjYjEo7fxzNHg9zhYSFQfn",
  "key23": "66diPKcp2kNRTWzoRAtCc9QzC9K8wrPynDa5oVJH1PfkK2BYAto7f6bPCdX721r3XepQjRPcaGw1iX6xqLKy1Jra",
  "key24": "A9h9eh15PDMpdfz3Nfo4RVdrpwetbyN21xQL29VF41wSMbCkrJknmaVAbEMqzLUjJ9ePRBnyjsNp9PC9bs6PvdK",
  "key25": "5aho3s7AaSZ1HtKR8CiYhdvpvXNwqThyxqZxUPUc8ujtPQyzHrT6u78XWqVDCp3EHG6cC7XyNsshJFssQGuRFNqN",
  "key26": "3ZtSpA32hi2W4AhbyrUWDcXjN5AUadtTjpZ3SBTrM3QbZdzEW75M8bTMfH7rmEi9Qyaa5wba4Hj4UVE9Y9CW4stj",
  "key27": "5jRzhPyJahJxkmyBc35Ec4WgMrHcQ23LpK43P4nGr1TMRVQg2RHz6xF3crtz45jbHx6mXhSDWzq617zs2xLFxsLe",
  "key28": "5iKACJ2xJCeqKNMsAjq9LGEsC3QPX3oZBU3sPWxQFx3kwyy63AwVaxnnP6DASkt1rQGZbvQXwiAgeTydos3YCTZ9",
  "key29": "EqRuSbQjmeGVJmrtFXaNJrtFZ8R2QaNawrh9CYUAdph5i2mkpJabRrDia4Xgx9hGth2QqdcDKXyric3XvoWa4Lj",
  "key30": "2eGDqWQmpNWcSx3NJ9nUWYShz9K4K5XTQrn6qh4QNNkxtHprh6vLWVEGWuWpxPRiXGbMMkK3Cz7AmbdiP2JscTfa",
  "key31": "5zwSqgu4kfXR6acrAQY9XoHACxPvFRNk1d6JVjPuJytYuR9csu7yLAFc9oyiqj9n8oL7VxzKUDZRXvcRaVx2Ug6T",
  "key32": "4K1pzWKZT3CpzqkNGf2tQFBnqxQQeqDAYAnMm2anzFpLUB6a4aCw1L1DJDTfduRvaXr7y7yhHGhVtREZV6SFujWH",
  "key33": "tNkZ8LLjcx9B11ydygBys3pu9NynKHGJq66ok9nEFvmKyk4qrPBnRaDzSETewcpWxQwbCpUEXszhu81co8Vj39M",
  "key34": "3PSYfEdUua8L6kKAg6hoY9WQ4fcm2TdF87fmHqgPccjaUzsLE4QrPSNfoNf6niewMAeeGRJ2qb8pPqwz4jnMjpgj",
  "key35": "4VuYUf5WxEgLRkeN7hBgxsVjCJfD9f1NdyJkrdFZVtxcYQDVE9wzvfLDEKLhiNzZetuShWvsnbZH9HqQrAdd3MEa",
  "key36": "RS6AGnQL7hPrzYtHZMFK3g9dN4bZCmakrdQRjzzh51r8iCXd7RjQjcYqbQ4jakVHCp1bzc4qMJteq5FYWpp8rq8",
  "key37": "4dhWgDwhyuzjbna4yos6T2ETxhBZZusvCbuTBvefFLTsm3A1RE9APToDLRcCSkvJKpQo1C5gFHELpNBAqXCcB5Tj",
  "key38": "49CNCRiHeQpHZuR7Mn8e3PKCae4FxYe7p7eWqRbptb83HuJD2EyEBuUQxjfcRbby23juCzhx2KNLgw7nHeLWkBjC",
  "key39": "2RnD2gQGSDGE4792gDUFxcc1jPXWH3Wvz84fJaLFakgUfSApy7YaBEek8NAdzTk1jJzdQj59wai6ZkNeRAa8Sg77",
  "key40": "48iwaPhBcMHXFp6GUdpncya5nqY7wYGiLdR7ki2s3RTMebPtnTMa6dt1Dc8yY4HjQkhVYP1kTwB4qJByQqN9B1gg",
  "key41": "3ro7EuoTkdSUq754MrvgUzTPq9mEnwrESgJyLFXfR27CKcDWTW1qZRdf7eM212Muz6hkPATYxh3NXrqLxyZhNyB7",
  "key42": "2cr4q6SD4SU3eYwr8oTYAh8oQQGYjs1Vbu4wGmFMo6GyMABxSFgCaJDtFT61DsTB91G9zDJTAkkFcAHTKCs78Zfw",
  "key43": "5ysak2PXHXBgeTev6VDnATbsmohSuWLSqgexqod9L1gPkukEHVG8mfnK8Vsn5oXvP7v8UEzYzUw8FMy24jiJX9A6",
  "key44": "2XyRPdpJqXxiXNSxsJKSNufzSNzQLUUErM2PRettELP8yLQNfxukWsHQLWSeeDtLWK4oYtc2HDHTq2UE8VHrivsV",
  "key45": "5JDyoJh7P8earVZsYWtFp5fX2ZGTdNyNKu4Aa2ZsbCmUcQ9NErrC71P8bA4YbSQwLoz9RYgvkgFD7ksL5VDyxipX",
  "key46": "2UMfgnzy7YFjP3fosxTfAuXjgN1GVUSxmZy4wpykXeavGKZh9s7TdJ2ABV7Rx7j7JYDZ3a7DQKPADtJkmsu2ixcp",
  "key47": "ym3Z4CVbJwVFomiVkVf6XqEhbTXbNURrDH4qQvxRUVpgcqP5jHLA4cwrvYun9YisLc27enfncoHCKXsBbDYGnHE"
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
