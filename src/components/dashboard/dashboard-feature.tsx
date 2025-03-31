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
    "3LathnsfGdwupjEYGsneQ5QPRGjZd8wKbDrNmSw9BJEdmCf8psUc3Fn9wL38k2nyDrftNtX2XyBx7oP6Sth2AwCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ye6Qj8PUfzqwoq3dwavqnNFrHtDoar6uXz4ZB5skPkGZpb7mL7bF69o2XtrQFRiDKDKDx4CRTQ6cBhNkXcE9TdB",
  "key1": "5Vm2L8777qBe2jYosF4HuPLui39zrJ3TRDb2E9hBZkzrgATzHnBf1uvV9tF3gVTCke2bTsucMBT7TPBUkknSexq7",
  "key2": "2fwep5idgRWyUJnVTdWjsiyWABJpuK4QYmGECB5cteWrJuYQG2gH2E5vCVRAyrd15LWHerkpNhdFWnVhr7iJmbeo",
  "key3": "4aytSDB4DmK9u1y2MmS1peHWKM4YXATvkrWasyDrDZJVANLr7M1hCDrPjPLMh3bxPvq6uLavHfKgC7kiczXRdLKb",
  "key4": "3D18UQML6A5yDXPiNxWr2CJhd4wJXGTKbsTc4XZPE98fmyn31Aq9uGRXtEzgCKFoFzbKQhZ1JtPc859C3fZ69tqB",
  "key5": "VQC94iPKkeLcAnUxSeaShd2ANTgWQZbW3fSkd9KKkjctXY7Y2YMpqTqWooSU5oXef2gVaQV9QA3HchC1kM9wfXG",
  "key6": "4FQv37GncGyCNWiG2NfFDknK6RnrfYHBRrdrTYzctL4XUznYQJJoYDB8WQDfPGonnWJf6ZSku2kkB8fvrWU1jvEF",
  "key7": "2SufFjP8nSuPd6PV4oEPREAAZLSjxwGHYc1BZULjNnF7awN9BxP8MENi9KRtHnwPHTSuCXLZsQstpYFCUvHjrAtf",
  "key8": "2KUkyFDB3ch61yM3n91UJdNY1WMYorFnVU5WxDNA1ceDb43zRTr2zzUtMQu8DV1wiunfzhsLN4CGnRLMnh29VAFz",
  "key9": "4BeUi9JXyTnynbo6AKndcNEM6kvVKpm24oCQ7ns5ZYKpJfSmoWwsZFWYXYMmCKeCjYj9S3SjTK7Z8N2U2Fqt6nqL",
  "key10": "jJNAGKVhSTD2N2q7LD5SHfaX5SsomwWrGQzVNNgfcAW3JYy8uiAyzHt1jAA2P1EfBAiaxEC8XbphY1LgDo6ko2v",
  "key11": "2gFwYQ8NuBXu3nNGubfM5QHFZBvoLTkfX4whCU5b4oEL2DRxQinrFZyM1AyFMX7GvndYt6UPKrHWMNjnwPCueDci",
  "key12": "4pXyTLkf1KSoYpe8YZsGbCAVkZLGvWavYz4m7wNY8ZgASF9u6KWVr4pb2fmpCVsSXgHdmwxdFemrc4K6gwmz79x8",
  "key13": "2bFQdMxHZ5cFe2DXAX87NAiFhJa5LMwwYycjKwJ1mBFnvYDp9xtPcbNTkvs6y6vv3gCzuKiP4MYMdHvfHrJsorUB",
  "key14": "4bXS9T8Jb1mz5iYCxnXWYdDmeFYzKv2NbhHKR8otJXvHAR5u7cKCAJzPyF29Mibszxofd3MJmcm6wX2X8n5FqxHM",
  "key15": "434WMCpNdZtj2YMaJUpGRu81YedPJQho7oLuCd6FHaNBNL2XfB9QWvyJcUhpURYzGCLwSGPge1sYVvsF9WWKp47D",
  "key16": "4DNHU5LJzQb44wdyC9JmqPHmANRc1aLTpK9eNpygN9DLjxCno7LhnupgTH51s4iyY9EjQQ5BQphudKZGRBxHad8X",
  "key17": "p3BLFahqhYRUqZhHf4vMQJkrHSpjNpL2CBNqxVUoepnqbCVh3Fe38Evdr54cn8QZ7W7iMtde9RWTMhNdAJbZ64T",
  "key18": "4KKVRfftfbi37wM5DsovzMttReTNAPVPWpQ9wRAYwF8XUNpSFCPSGUq4FPG1ArjB3xCVUyfYjEmvsZX3XhvB3j8H",
  "key19": "3omKDrJ5bqfoihQXvVyAV45b5difQXYuTAQjVJjJ94DnVnPLNy4avf9ePJNEWaPKuvzP8DquzmUDaw8eKTjoziot",
  "key20": "5JP9J6fTDHvcDwRN4MposiMrJyEsmLQKJCYVCAei2cmc6zF8J92fhKKANDc7zDezkY1EXn5J9stv5peeDUzenuYJ",
  "key21": "2A4mmh2a5rLh8sn7PnTfqCg7AskpXjASRNmgBam85YKs2x9vPDzbxranayaYsiWCT8csJ1UJAfFE5FVUjffbzQH6",
  "key22": "3GAcP8ct2SktdsHNgzkshZ5hGPAL4qB6UxFssfdxnVmoPUQ3zcNPvTz2U187gSQgUHLggWbdDVKr45q9KQSyPX6u",
  "key23": "4Snz7ViMcj8fEv8Mixn5D5DzpFdyGBHJSzktzwz9zD6xzuUuDYSyeoLPY7fcAQqcdty1majEZn5N3pfgF2isMR9q",
  "key24": "4Sqt3wovdDcebQfQ5cFodantdJxC4F2u5HhY5oT8fEPYyUWdRU2vGCCB8M4JK6MzcLJPmFcFBsbJhbVTi7cC5hF6",
  "key25": "3mC6xnLa2jm7abpfiKcZY55nwmLihTo66FR9LuKJaUYC6nM85iiqevPm2sy6WvECEZzVCtBFNRtpnL2bMY4gj1Pq",
  "key26": "DyeYuXWrpjbT87h5iaj6KaV9ToHY3G7qSByRm98jTnKWz7BMDicbP6oKNGDVUhoZFJDJQXRmDYFuUobaLbeX2bv",
  "key27": "2e2JctMjX9hk11GF5YZV94jfiwCJDEGvZdCjRkcvsvV6WXW8RRqjgJ27nQHPtBTtJs19GErpn5iT2jxb53gqc9Qq",
  "key28": "36JKWCMrdUCKpJzBi4Kj9TbsMrwN2xgfofmRgvtqDrSPVWBNv84bjYZFcZ9XyZ4sFk36315t9WWbRfS7fSpK718k",
  "key29": "5uNZKabSY7x6WRsTSmRdnRDPcK8MUcuhtN2w5BQLKugqrmtruJ5YZn7aKWU5FcwwdihNjHvYqWs7mEwRm9zmUCvq",
  "key30": "4fU1cKZ42pjh2SqEbfV6BwR3KR45UWzufCvhfDpTCtAjK2SkgxH3HnLJ52xD2XRS39v6HqLbHxyKZAzLdU72QKSV",
  "key31": "5WDa8UixKMdBwia4M94j8erdE6cezFhUS3sNvNkH8UgcLzo89Y6iMb1SFMRhjkefDzwXDpTofwjBZaLN1FbJZs4x",
  "key32": "577NNtZewcuWcmbWhzFNnTn8MFqdEYUacPkxsXJyWWdrThbPDMrAFLMcuCpCo2xa88kKqhVjhQj7bX6ryjXHuFUm",
  "key33": "2ni9m24HpvJUExsKAEs68J434zLnHo1bJLyLZzceY9gdNbJ6k3mRHFdkxvwURw3jGheueJkezV3FquRZpqCBf4Zd",
  "key34": "53uenb7GzphkUSjLWbkGLdWdjRpWXwMyEeJDK7gQsBqJvh8RmKoiZTTFJf5EAJghYEC2jbzuRo4WsQbVEQzXtf3W",
  "key35": "4s6CA8NFWhHMRTLKMxQfeb9182rTWf5GPMM2JuvqeZMvqJJvWCbEC7DGQK8LXYBWx5ZPxS2Mx3AqkFr5UH2QSiy",
  "key36": "2qjk8ZVneCbiEiH4q8JL3p1HNHVzAsa6ys6fQpeZDxYkH6CDmYN4AU4rwyq3LoNW7L1FZRUYrZVpz1MVCqLbc5G3",
  "key37": "3fc338TwfZdgjhteZcyiL94gBvTYDcHvy95jdB28RAKZ8wiw3Z86k5JaLnaoCiXEVNmrxjuXFFsJsjybgMqn7UYJ",
  "key38": "36Mi7qYTDNwLRyzerKkFqbv4RvKVRhVk3HYP21J6Mcj5cW1YvowBqD4qC8NCyG6jeSQGSTRgcSop6E3LJ9kjAerL",
  "key39": "YPJzuFmEio4GtnVkNae23HDUP79XmzEGUvFBF9FMG55PCRHppdEc8LXzgiGotFQNi3eYzBUP22GN1vXaLXeFLRr",
  "key40": "5scUkiwmPxymFRfWHkQdQueu54PJA5BhvQUSCKV5kekv6zeaD7LuZU2XQLCJr7ZxadvXUzVgGVNqojtDj8fz4Yc9",
  "key41": "4HtvfLbpv4xdujHSidM7ACe6DpPetTcsHUhgxuM38jY4fy9uz5jkoshPTjsSGXEWkHWH5xBQdv4UcPTVXh7gVYtu",
  "key42": "55isTkyrnFcFxCJcqSBSonqCwXeJEudFdG8gxwn9BTh88Y5SLafUTb1wfnvFqZdU9zjWZ7w7kuoZqskVnsgNMdAp"
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
