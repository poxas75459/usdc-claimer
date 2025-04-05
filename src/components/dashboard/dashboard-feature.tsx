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
    "95siG1Me89xD5dNX8LfQXznpbpPtJJY1gHviLKYrByjKitH9ixVdptDgMsEpAob8qtEvaPcgAZharqtaCHFu1XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QbLJ78fLoV5SAQkp5oYqXT1m7rM9gppg2ybVBbpwbcvGkeJQeLBmh9wXNK3SDfxRbL83JjP2CCwhXNBaF1VXmE",
  "key1": "4HGko7aewFJtX9oo1qNpPk4TABKqkvj6v3KVam4xk9BW8fTUDjqVuYkcLicmYzffq5uhn3nHhR3c8AKcGSw9wYk1",
  "key2": "2EfxUkjP6xW27gRUFveghNupQjEAD5jeHCUnkNzR94QJDEt1qz8GQFspZxHGT1GtMH5Un8CpxK8AuAgo1zurWdjG",
  "key3": "5aj6oDGQJE1inagX7qB1oNUkhYW3Ze7GTFNmCxShLtwNBY4yi5VDogsPeHUASrcbrZwPewz7Xq3UK6839QCq7vvD",
  "key4": "EjmZcXdNg8NBoWiwXSVpaPPZT2zWncayEDkEf4syQzjhDULB7jstaB21wZpdEkzRhvELr2NKvTAhFD1EdxMPwRz",
  "key5": "2MpHDtwcCnKLwUyJsqgQ8urVVjqJGT7SDEK9R89x6Rmh1mkguqr8M4YETPAqfTFgTPXv7PX14BuBHSjUwK8QV2Hd",
  "key6": "hkS4VXzTDCvCsLwHRsw84A4WanV5ycKeFn2sxJD1h9vw52facdnoFj8uJzKm7a8Wviw24nTFhhUQbvzFBTHghXr",
  "key7": "kHDdxEJMaBh3UDqjcBCvLw1hhKCDQX759J5rYBoWbJgqSkboQApM3LCu6tDob62hUmUNQtsC6cNE8uLrCL2WJG1",
  "key8": "49nwhYHKzCenB2svoKqqKj44AUz12vuQTiVDDJzRiP9X3h8NwVpnfLwaRJWy7KvzEkXuzsSefyVpudjN6sPdmVq5",
  "key9": "5iMSnEmbCe1ckTAuCvXrHN2NyAuwekhPmtGKdgvk2gQXv3w4tNkHyaVLd4jNsCZE3LjD3QLuUc6mYwJec6kLHXFU",
  "key10": "RYAwwTzbg9eCdrVjvCES3W7ykMG5frXJ51kwUUzZ7HcNUXwkjsoz3yZEcFRaCq9jc38QQGuGQNUYi34oVsYYRzF",
  "key11": "CYebAkGAJsn4NHqtb7VUH3NpMrJ2Cns7MdT9ZDE64sK6BmitKr4gQvmbJzavWeuFk6X1aFUuYZQ45WnmFxL4ZED",
  "key12": "5jCi2cRCXx4dvoqKFJngT3diCYyupz3JKHGPWkPFiD2CybPyHdLQn9LMcxBsPrTUwCWz9qXtQ1EWxtiEVR1yNdFT",
  "key13": "WzH33MuEAb9PKXUJbTAKPbcYdQeP6WvbcBJWtDaAXqT6dQti3gYkb54LTURv1swK5tXTE8sGwo9qfvGtQPFVWWT",
  "key14": "67BTArT5mqCsytDBcWJYXhhKzEiho7QZCiXVEKjP5U9DFiH7PnrkzH3V4Vj543cnAtHkA1gWit3rWXoGtRY3Le6X",
  "key15": "5djGm1uS4oieEDwUSAFjpdBL7syTsxVGpxohqX2GreLfnfAHiKBmEsrpbf6dX7jTQKfqmFgoAq2tckJyBizm54LX",
  "key16": "2EZwUpHEmBtPHTiVG3omCfuXe6nRQBUs1fNk46gpeqHWQyNF6tHGP9JUqGgy6qn5RgPtqEq7LpqCtUvtX6Qa4mXF",
  "key17": "3M17CFuLgGZqqCCTbW3NiauvUnfCBAmv1FBmXW98a1hDzktggbyydxbQs6DWho2Kt1SajdJHqWPZCZBx3wpcJ9dv",
  "key18": "xk1gi4PVebWneyXLbtjYPqej6mZ6aMLo8PRqZiVhycG4zVPFuyK2WQBQKkG8o3gDHV2kdnk5pVP9G525BMHxEKn",
  "key19": "pGgqSLJw5HXZUfRxh1cLuYGUQu99qmciVv9nPNPDEHVqKaDL2uM84irhmfVJPcZTQNs3R3gUdiKzbYQkZCk9owx",
  "key20": "gdZ9bhUSwYLxsF7K4teS2NWL2P6YUPF1PfnATmdbbNCpTx8Km6Y7bB7bbTm51XXMNt9Bb7fkV3w9SaSHk7gDVGR",
  "key21": "2CVrUuc9hq29AvNtAXAzynRPpTWyFe8akgW7WnXxQ68eM47eaoCTNrdMYHQStwhz7Kesf4bud4b93DdQEuWPekDg",
  "key22": "5shjHnrVRxtoYxZ1hqfwxsxNKcR7MPsrfKK1sb7h4UeXdS36C2ZJP98fiV2TN4VAVDkJR1DHpa8Q1MEMc4icbaGK",
  "key23": "2KjGBB2cDbsqeALw4vzujdgnxZAD9WkFTc6rmCzqPoTHLK74vxMDdegsN1bN38fGPY74iNaMzK5qUWf1SBBzQ52k",
  "key24": "58Us54vNSJ6wdcbBi6JzDuzADdCrfuYPWoDi37E6N8w1Q9oSw3RBpHt7UwBmMbA3kX7GxuYGcMV3rRoah4sukNKP",
  "key25": "4wXHSwLtpY9VYLQYbGj67DUgzKcUKsDSm3DNFZr5BJo429P3d7vJ8wVXU4GQczqfTLASNy7PV6BU9WuDhH5Jd3HC",
  "key26": "3SsUoUVmuAWDiMRCoXG2SHv7Wx241mdFHYkn6f9HH5QS6fZBkuDXkYGecKuJcXSPKCdcpFrQFprbhXdL1YmGQA6W",
  "key27": "UyNJPFsXoUKZppGopVwoYWBm7pnaCYtLaoTarGawLmy5nSettYo4QMEbUrDNHycZoG5EEEmfnYVLbaCnohiUCjt",
  "key28": "4Z9ieusXsGnUMYpUA5tNkWocxwhRAwt4PGUGqCBxLFt271sXxoE2W4BVn3Dza47z4Wmrd297hmJx4R5kQRUAKRMa",
  "key29": "4LRUtEV1N6e3bvvtvjoc4ZB62zPZdcZBKVVfUc4jwQhzidYxrDNuNuin2s1tVBeeWUAgDXDM2TXCoMhBGZ9nh5hN",
  "key30": "qNHdUZc4TumEFz7RDRAcytM17U7c9xhP2CNmWhfQNEDunCNk6X7uJ9NYNGLERD7otsisCSjs415BgV9yiZsywk7",
  "key31": "2dUKb4LKxPHnCQMS5EXefpmskmU6HwdBoJ6cWTccTtCUVbCbfPTfgT8GDCMstamKn3sbaU2vHJruhuDar6ghCFNX",
  "key32": "362HrvHumiG7Yfw276uCKskhW8JjN28hRUpYZKdMKa6kNwT8BLGk8vBpu5kPvs3T4FohrkDnnArSS9eXGfNr6yeR",
  "key33": "FTwap81DY5VYQP5NnrcynpRLiNpvkGMjYk69zgcK1oiDiqe9Gztek25pJ7tZHvP4F5e2axesFXYkMWQX3XinMDs",
  "key34": "239xnjUGiBmcfbuCeqZe5RVU3TAhFYc45FcBizi3i4pSqbKC5xP8Ghypt1QLFmaVAk1gCzTPVc2DfeSENnJX3FKT",
  "key35": "4FUzLN2tEKN4if2UKeUVtzqarSNDnVxUnoYtQCFgZCVyHVHcESLmJtRKsD8c2TsFhbsA2sinqWP8LosgGFqCyv7R",
  "key36": "3awNdoLZcuG33PePx11GFKvAfWM4pqr283gPDnHd8nAEyTs8KZHMjH1KViEk9MQXzgETpFgitKctLX5d8gVWKDLg",
  "key37": "2b9Ufk9HeFqbgQDb75K7PUutUCvi4qdMN3hKF7dfU2eUuNNWzCBSAbE2VR8Bk2R36nm9boazcpmLNrdjfrwXvEoL",
  "key38": "3VcoTPuZcckSDXWk2s3yYYSkSYgXCoMCeRaf1uq18hWgby7jXi3f9efiaqmVhZn7VDjgc1yWQNm7q3WfcFdA1JXz",
  "key39": "3WsRyPrJrkNxryxnuuFrbeqVK9jYDPZtQWGGkuad2u97PkPFyAWpsWDinonHMkEQi7K7EhPgynETwZ1Fg85VrZZL",
  "key40": "3KMK1irK62n3UPnyfjpXx2C2oVaCvg6bxfDBcxNeKfjmN82HD9QGMmjZUqAivvZDFsSo9hpGPL4i9fKMpFiHgN8q",
  "key41": "2G8bjBQL6qhzkYRPnqYJMTgn5RWB14bmfXvAMNEf8W1G7D4ScMB9RdgqR3gy8X1tQBgqp8oXFtr1NbVPKEdWvNs2",
  "key42": "2tmDx46FkLvvaDUw1yAFxX4qKyVbvH6cA6M5E3vjvFkSZFLintKBLZww8Nyp4mTdJqSKrUpF6cg6Thzyjyd5UpTB",
  "key43": "2YWHgskmxLyYcgUBaVXpGCUJfmPSkT2pEa7TqH8ZpNZMT1oe2iAzN4L52P4mrTzEBqV21ynjFyj8AQhnuWjWJyxh",
  "key44": "kSGbJQuscQJ3E6XHmJFX7TZew5uN2iNkBF1shK56p7T2RcbvmrsT3MQCzmKMfrAxqN1U5qbdmB9oY2Wi6Rv5xWQ"
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
