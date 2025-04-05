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
    "4LMQT1VChfu8yVJnqcSLMMCETio15DmS14Gg5Ggypk2e6GHzbXDbnBML8iC5mvPFpgYYABUofaU9x4xM4DmGczvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXe3Cn9cgzz4ybJEjSu73G4zjFuv3TnwYeXBkf3dctpA92m16uHp9dh4Hb3YtqiJC6xpzP1BxJcn5p4wNfgzds7",
  "key1": "2gzaBaDjtKFqVJHexV1cFRbBApp8p22JWWU4aWLGuhim3em9URQjzU6Zqm6ZJYfA9DwK1M2HBBrp2QRNnuaYwAGk",
  "key2": "5LLKt5z92hckJ3QBvTNFCA8595rBmFpE7d1XKhoyFwFmKy43do2ecMggS5oaSvhdamfrMm5unztDhM1hv13PdW2U",
  "key3": "3gxFsUy1fyjx4T7qJrXta5qLkvkr6rfAYn5QsmZkuq2KSydc3CgB58gCNiMv5V6Wt9JUxfPr3iTeF5MTpR4TXyKN",
  "key4": "2BnoFvNjSjHNzCaG9jmuwsNVn4KsFMxuNm27EEGumiwRWAdkkA72d98FJeo1TkQ5JhqgEw5moYtEbjSPbBibJs6Y",
  "key5": "5dVDQsJgtKSTu6NLk1e6648JYcVQqSNL24T53sMSUKyDfpp23iKbPhfeiHyGAvmgesfbuWhVdP5rgcfAwaRP4mBE",
  "key6": "2xiHNJpJHzgntAEDmu2v7TvahDLUj8RJKxds34MrQNqzndQww89pqK6ayo7To3w234wHijovpRtCjEUJTz8KMWPH",
  "key7": "McndhYjwDYdcvXmCcZ5EnMcqGnG5ye4gngRu1Khify92ri5t55jFEeQRwWUaZQcjS4zaGhsoBeqXwgu2fqiiDfy",
  "key8": "M4froJiWd15mVxP1oQLnccPA1ubpS9VjTtJtX87WsEAUJjwYKRc8m7kAuud64fqtDziwhBPNXoYvPRmRxaY9kwc",
  "key9": "5WanHnbFihbmXA5NEry5yUmj58tDdbz7VtA4pp2KWsAF5g6vGu6x2erpvkLtBbaopXBFqodmFpiEdWYNbWLa5jHR",
  "key10": "5PG9kzYZcnEtuDAh37dUYZVLFzBfCD7KsKEwLsjrHka3nuqXPvCix9Kmirp2ugkZgiyunEGGVSQpHuYi3DLg3PeL",
  "key11": "2qcJqEYnYR3W9rMxau7pTHxFwRJ6bjQ7A8hMTRrFFYXZGGzLWDMxodm2uqxVvQ73KpjrCjAeudXc7t7WmL9CVc8",
  "key12": "2MgWx5CUtH1DPkPaDG6eFJyzPGuPCk31KHNnsKkCGvN9fyirt8NXaCqm98BggC6CXrvNrWx4TTJ1kFtcPAhSVGrY",
  "key13": "5kNK95dW8HKT7XnGwkdog4KpfCMgNd8sJhPsZj3MYjAcJdXgCyfqsNAXbvXLuh3zuXWbnLj1DPhKJpzigFZhVGbG",
  "key14": "HvxDwWFuYP4Vu9QhLyyTLQgerjx6yqppCJED46pKJZLoTuVZn5RYwqMY1RdCGpFP6oZb12ERPGXcxBmgKVicCXw",
  "key15": "4XYvWJGkooNH1uzScWsXiKAwnpUvhpdZ5NMoUzzjZCBQsLYHSM7XYkQey3QzFE8DaiU7AUGwWBk1DCLuCDckdgAW",
  "key16": "5PfTXdvdcWuGkaFroxwjqrVDsgJEH7FTByt9Zt1RoHgBduz257Aqd9vB3TvV53NVE9cyLs6xB3bYRioqwQHXNQdA",
  "key17": "2FL6imXzmPokPfiJQkBQRkhZD9RBueagHVkJ9FNqd6oiMxnLoQufb4VbHBoZ4ToftoShT6nhTUZmBAtChEdKwNG7",
  "key18": "rGP5EKBZoYQRAFeGVJA3W1JTDpvTCwDhBF62J3F2Y9XvLjTN9Poc5ZbmfV73HcZpwyT1xQ5QP5PTF6uFCMdy5sL",
  "key19": "5ZXiUny7jM9prf7SjyUKddjuK26UKBjjNnZYbEJvqCQ7K1LQ9HqDKakHX1zBboCWhydS4zXikYTZYPtru9RF7kgD",
  "key20": "2iTGfvzvgvYorBX2YTubJHNUg5pJJ4APsuAzD7xGWFexKxab5c5pp5rQaTJKMpoB1iZfystzWMptuAsFNKfVReDE",
  "key21": "qujZsfpkeF7vPTf1hz1qo4qgWWG54qw5MRUgRLTJP5qoMgXd2UKKpjw4eSxwCxZ2Suid91Vfoqt9yXo6dTXp8Ab",
  "key22": "3AaAGNwFyqzLXZrfLjhZtYAqZHoKP19qEYxJ2c1grBtcP9hNwSq1YTp8dnLkfZd7DDsV1o3DzAknHqV5zzFEC6Zh",
  "key23": "AuJZTH8j3EVyXuVcRh3fZaccSJoa91Fde5XFU6TyLr9bNKW38aeV7J9gHtgNwiLGMH2eoiqEbBTNVeDKd88vjXN",
  "key24": "4DSwQZswbXmSMWxWqVYmVvTgMHjQ6xAA6YmugLtkwRLJnVTvZpC3p8T41KJ17F3utUMWpVJwsbuNVNZVR9DriVB3",
  "key25": "3NN6xRyaYUn2kzD2LYMZs93YxV2dXpKgRwMwB61X6DS1aidsXKE1H1ZygTEJciSFCR4kxoxb3f1mQHRfoJk7NkzC",
  "key26": "uC57RUHuzf4HHy4mXv67M9Er2GVxVVsJq8F8gGxz266zriy1o7sXZRHPb24WZcn9tSeY5PgDwGR8LgfrWrorY9S",
  "key27": "46JnUMr9hzokootbwi9coDC2DCBjixZ6TZk1orKMFMHqSE8yByJarGHPNoSMjzSxiZGScYMmDxkKYjZwEzMgv56g",
  "key28": "5kxGA519mLdDn54q1cFYBMGaaVzsoftByhJWpdG2bqnfPki3TJDXmxazTLcGvy4C2WoXQLf2XvrV8LXSJhM79uNF",
  "key29": "3jtz11CQ9p5Y4v2LGwyZ44mYEXTGzikp7PE9Bw5xXwtv4bdnpzbABEiWqDaA2sUKDua3bgne3DLMsBdJYfhxTr61",
  "key30": "5zrKfGo9xiCEXnsibZTveAr7sEc6meRCPoNUiUx4YxeDhSLz63qTQqP8v5buKePeXKkzhTSAvDAoviRZbZJarBF8",
  "key31": "5wu83VrBAKwFMrWEvGq2NCTh2WpZYcoHw3FHcdGsUqHoqqAUoywYAoLfMzSAf3aJpw13gypDNtFANsamJkJpqGxe",
  "key32": "2oKJEtuuEf4xME7B6bhPTyZWkGKPi7wGvjvsnd3k4mww26rEbv8pnVjC6XpPNteCqnkFY2XEucS5Hmxr5aCkBcEG",
  "key33": "2LHiuQrbRqPSoNFaKKwbPAtjdPHXALSnXVu42Enkr8qjAC9HDWQpoUtsDjjhdbXT3eXxQYxa4dsqSqUc1aAjDHrS",
  "key34": "5pcFgNpFRXs67ibtAUXnwrah6SC8swrpsqnxyZxQM13Pnmt6xgNDwdbwGrNjZnj8CusgESgf3HKDLTsMQsxPVkmW",
  "key35": "4cvE1Eqyk9ye3QkhtURfCvVN9bioQYsGTaRyWPNNs6XkkaXGispMeVJiZ7NsGSGkPvZaT3LdXTnXaTZiC2Qqi5EN",
  "key36": "3ThNyyavPAT5LHuDnnzGNnMVEwskZJitYF8z3a5CryMwzSYsnj8B8LcTn8G5nKM5RtZMgHJTtjLvKqxHHrRoK7jX",
  "key37": "3bHaVX8DAkFHGhv4k2PcWCwqWfmH2cwHVvwy91W7jXgELTagFuvHQjvF15dmtdnL91uEXFPniVtVNwTUU8oRFMYr",
  "key38": "5X85rNvd7ehBjureS3Xkx2pdscWg9Su7CQtVN8UrrdFPpjMaL1Wzuv5ucnYnReXPGgb4FT3UMihpL4L1HDqrD182",
  "key39": "5hLzN1JDJX7n2GMdiMZgMWpwYF9Drg8Ceq69JGmh7MN94aJVMjSBZDQZEB7xGsXUHNJP34NUf3QcuQvddLb7aJK6",
  "key40": "iU4BNcuVvEzT1ZQvqEcU3pZcw4dS5N7RjR2PARvfSzE6D5uQz5EYsTGVT4GAkrUYU9eUPWFq2YJ8zLas4sMmKd2",
  "key41": "3FGyPC8YhF2qtvQXJmy1QbUhqePekAZsWmhrYhBVexATVv9ucopMyqsMmLPSYWYLyfHHtNr8ycNKKYYEfmUQA8w2",
  "key42": "2s4Ps8KHmKoKRwAPjhD7nx2ARZz8DRE4j7FX3CbnJXtSFVcVjcwoM9yyD18tX8BbhB3z74RHGQY1vkn7tLSzbsVj",
  "key43": "54r7zAcSjRvJAp4WkPMwPfEsRKnskxAum1FfpzSgxnz6nvpcMCtvNpUt7mCBRchkmMWE15KLu6ecJaa5d1ZmWd3M",
  "key44": "5xEZj85wiSm6cKvAYf3AjWtj5n6gpyoMP7TeTxvwEuMedRVWr91dCSyzGpHRUjYAGLYXZcT5tBK6Cu8ao3bALwFi",
  "key45": "5B4BKwmmMj9D8ZcrpiVNKVZ9EZs7jVmbqJ8gxDsa2FW58GhBiQq1VH6QGazsJC4QY6Nnem3NZQfCYKidCPKwHvUC",
  "key46": "4NEHuPuZpdmcxhTraqDzFRXhdPw6qwGr6zMAftvGskXWCWgDYVDMLcKKqW623xRGKWGbF9U1okrq6FuE2yevdnVj",
  "key47": "4Nyj9xdqm1YeY7aTQNoTq5V1ENXnguMeXJxvJUsg4iAeKKpJLAxgiwHxgTjhsqt8qxDoWwrc6tkKWw1pdLiXrjPW"
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
