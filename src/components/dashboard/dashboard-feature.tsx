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
    "55NiXGRg2dSg5Do9J23WG7pYmDgEbvtuMspD2J5Hng7qF4ihGRvPedYm1nuDv4JXkTzVX6MH7VzY4jSSt1Na2vBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjaGC2TQGXiMxpNaubXkKDa8DnDiBtBYLA2oidmSk1DDBNxnLRhTqJVuESD1ejPbFWk43uqtMMsK5w4tbCuDjsV",
  "key1": "4zKd1wh4ssvt29qE7Tmzz6nyekGKocbAnYh3X8F36QpQWRBs8B4eMivWUuUf3RGNeoacoJ6Y5UHQojV71yZDs4oc",
  "key2": "42XyArgfoo6Vp3K5TJQqkbEPFyW7xPY13TxZ6cG3hbeWqykugHknDDKvMevL9YgiY7M9f4r8nLtfsqPuHo5UFeHA",
  "key3": "5mZ8JxVEzptJrprpUHX3HbxoK2geMRPaoQRYbCWZwAfLH4FVzMd6TeL4w9DLfT8GHuaEbZBBk8icoYTWXTuR5br",
  "key4": "2jDCJWS5pbYDSsAMnHTBGYaGRxFM7YRxcdFHEAw8c6cFvMwzy2xa1e3i3K5Tvh6dHvpycfr6mkVHMFdHD4yod6WC",
  "key5": "5EmJVXhe5VT7fgHaFGVfRbWGgZVgyx3aKXhbuHKCE6ozuheLfXJXMhNz1LGku2WknSPTzFXA1wMyjXHgBaQP6KKR",
  "key6": "3n15BGLkd1aHS8pvpPafQ4khuUexFF5VMV42D7QbYWkWHY9T9qN3g3M7szDs1DjjEEkNtbscBoUKUUKcDLzQdJLN",
  "key7": "2comGLrDWHUvjevEK7rMJgfMMLruKuGoYroyQFe2m1ZM9xLQQvyZCzQ1iF546ZuouWQkw7ZenB66Kr3ZwzWaegwr",
  "key8": "2vAKensk7VAHTLyZaxvWgoGUgPayAtQZ9D9wqKvQp21N8iVhHscm49XSmjzaLRsWck9hJJRSz6ThqZfMM6qQHD7j",
  "key9": "5ijN2PRCzx51XXzggj7jFhcuHjgYKDguk7iPNYjVJtQxGZsnpujzs8mJ91oGQroFq19saHPnyq9Qa3W5N31AM2nS",
  "key10": "5ciCiuXXjRxmbqm1Vwe6mrGTuhgqzSYadSf22p4KMgXqUiL2Xt82sEgGmFKJs1GCr6BdQisCk2hR4GaiDJQDRfrP",
  "key11": "3SPzcfHAZDG5LMhHeBLnZof8maKpyfMkhe5RN1gwfvMPRektmRKQfRBM1LBcG4NRzdPZg6NuXwiKVDYNBf91iirJ",
  "key12": "2zmJwuaQ135LF7zkATMTDTKkXTuXMCq3XcwAjKjNd1H1h62UtfmU9fRcs6J1ktfw5yXKCH5nFygT2zJTehzv4s3X",
  "key13": "2fR8AFUdiLLVTf7FPGxheaQ5KhjPTXq329sLNYxvnEruJW4nSvHq8oMGtkzXazBGTYqf2Sj9xDayLPMmWCwtP5QM",
  "key14": "4oxnTPGJGnCgCKJLcpjeLS8TPqNXrBELsN97apGy4UHvbJwrtdkGm12qh9C4DLT4iMZfyp51wEjj9ykwu3ynqMk",
  "key15": "2L1e4CcVTjqz4ce1tG2JjWTm4zqJD8tUCrE84GyN7EM7MHqLHh8Ykm1BPbkvS1y7rEJo5aWDXLjnKbHne5xLqVgD",
  "key16": "5nthmsKLsAaToY5DSPCdGCCimPnPM1HRp8MZuNPoLz4zyW3yszSv5PR914q9GkKGpzKM1mPTbj9GAYN461GtrSh8",
  "key17": "39ZHdAHFnrMEaN615UeAjV2rTV5iReyKrXC3Vwug8JHYmfiN7GMVNZjZZQpr9L2cmE2QyPTXxgeiurxjZsPFbaWS",
  "key18": "ZSuoVoG9eZ6m98U844JFDFDbZ9dW44nas6Ds9QTw4L5fiBSWTASLf99D591AJpXJGAD6Yv6AE6TaRSacSomsptm",
  "key19": "2yeKsTAyUQC9udtc9K3Gf4CixbVeMhL7tQQjC8jG8qF2AXCgdUc2CtYkx4fB97v1fV6o8YJUHh6wkDGBPsLYX5GQ",
  "key20": "4MfjL3BkefU1eMCdUoo4c823g45tCMx1DLJTym1TZNBnH2kC8ujGLBwkuAYaJTnzArFeh84ojxiUx3mkpmSUuWjU",
  "key21": "2XuojzfUuKNgqtWDGx8wzLCzQtjw4Hxr8Hc3QoZY2gGh1v1x39cVTXKxBV3x7A85DYbBhg6vAJimWjWC81AZiNhy",
  "key22": "3UBncGn1fvvs6mX5q6nZQ5kubFSUY7BZxvG2cB48UwCbi6u1SjYpGLPi2KGKVdKg2q9mNoVRLmz5Nb34b5YAPExS",
  "key23": "5DeHA2xsg9HC3ZtryhFdU6VGaHansSFUX7Gem5UpaEq1dWAznvVYpqejXcXXSAkb34XRZTwnEkCTaKQ5MPAbNHNG",
  "key24": "AZmjVZtQpntSWfFKxGw6MuC7DuMuFnmZy31XSJCCDZ84pdG7zopNCDm4gKfk8UiqyH3b1HAsL4vfybPnzVhZqVr",
  "key25": "h9mrcqjeFiN68GpqwvWm7NqXEFh1gMFKKy8yq72NQBFdERavjC8qd2uanbnQgbzzf2qm5EwBQN2rEZ2RvBP7Tjz",
  "key26": "2AP1LFP4EwgWaxd6P9JcB8R3yV4WBMijgvxJ515hYnE2AygjBEwZkUTnFjmoeQZqgMQ8vHnKHuf4RvVss9jyPrfA",
  "key27": "A6T99REbjxr3GrXe5Yf5XUXCK7t4UnDRtW5owCkeo4PpXWeZ2nTwDepZCxeL7337zLCDbASLfFHCyNtDDWft9nq",
  "key28": "5NYTeoe8PKWiLe4AZ54UbAt8TAnmzx9XrzGQSNQpjHWNAgADAZxpWPL6XMBeJebahMNZnKkG9QRqTXgDKMAW2Mej",
  "key29": "2yTzHRsirVGGn2vp9JuMXdzxUpvYNkpxffvXyLB2qVyM1tSiMiraLv7WLmEV1MNMqUPG3sWXeBKE4Xpt2vY7iGjD",
  "key30": "zboLQknT55pdjQq1dUvegKcQAawgC1JEhk3q1Au37MZr911cJRu4dmwbfwJdqpM3obEepSKEXn9sFz8xnDQUHZe",
  "key31": "2jnkxXuzAhR1oZnXN5FTgYKhkTYFhMwt5LnNfnk6YzgkBU7xNX4JEqvLwevtFFh4i9CUWjjDr6m74j9Rqy7gGzqG",
  "key32": "5EpZfZvDg7WkrCbyHDA3wQ1cpqjtLxK56jBZptVWyJDkusjGiYLDAsMFGwmhfZNz9x5RWNT9jHP4yXpBoF27WwN8",
  "key33": "3ZkM2FG2MCsMpdtMDDQ5yWb5cKjKEuBHFLc9TajNZKapLyBwrz1dFJWCR2C2ddGfgsxvud4goNJSWoK7Sy6YqdLn",
  "key34": "5PWhDbohij6ADi3iVzZsq5tiEocsqygLK5JvPv96pknS7kXGUF2iDuFgtZPt8ebtEpK3NcKdaF4vyhNZ7gWucGK2",
  "key35": "4jTtUvyAyDmS16USmbNfVK1HCEThhDr53tmZt64nG5CUdrMTzbRRPQdg5PZY45FicYevdcBCxKC89vhcKVK1rH8g",
  "key36": "2fxrMKQxczNmtZYQ3akLio3GbHz7Q3b4Q6VdS3yfeFoun5FQVQuhXGfs4jmbMh1P9EH1akwnaxienBKmowqgUBpG",
  "key37": "2Ka7n8biXMvMXGWwJnRSswsWp8GyVRdnRBvLejrmxsteAHLNg6FPwrvueasyiZqtSDeoHkns2ZTPvV2iLpZPvzkr",
  "key38": "GfZtdSQBSYMLq6EhSZX6k19cVPcU4Tn3UyoZktz3qU1owVD31gcXAR7RnrcuvUBoU7YGQZvDt9cueXcCPkqhTJ7",
  "key39": "5zLZTJpyiMbXdpyymL5K2APPyPhLmB4G7m7AYxgWu6aYQuMiDwEeEt9HANKwQQr7FKmWcHdXTcnJzXjfSoazmoH4"
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
