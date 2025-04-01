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
    "2TNj4zHKJa4T83sR8F4uGo39H1KNTnSu9iZvjum5aqGtDJxDEGLG1as7paBBKmdakQGJT6DEdX6LAeYHyaG5xJeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmocRCU8LrcTht79pyCpETHRus9s68de4M7SoGcS6v2jmkQKMQFmxXihALJu2mSmZTxRCpbQcFJV1Uq6VzQ9qD",
  "key1": "2T9xU4X9LTrCKdyxMj4NqeahxDnP1xQtitbMXDsqyApmoiofutRGDksrrXQ1NNQZofKzhrwEcDENBLenTgcQgD2A",
  "key2": "3PDwWbwXU9Qc6NrMsoj54GnE4byHfiA1GcV4s9kNwjfgjcS1nWLyA9CaFNZncvr7nmbA8E3gdPZnufdk91wgwvnW",
  "key3": "3mHE8ZvcPiULpgLR2TQtP1iAHwdnCkEh7bLVWcJDKEVCK6WU4QHibCoAz8iPrmJfKC8jJjJshkFbLZfRS5dp5ZaV",
  "key4": "2u4KdhNczVsshQnu6nT28oZJgqKZLSm5jhni5oJ3StDndGfjtCnKM4s9zYAw323v9RTNqkxKV17R9YGDHwK5zqz4",
  "key5": "2G3iPihME8H2WirKxQFGLT1YQkFfBGKaBbE6Z23cAq4uTTcVCM839Fajpjb7it85wCR675LnqLf4LEWW3zeHWNb5",
  "key6": "4LWy8ELH2JZR9PHjZazdcz9sYeNu5XcPaV2Bhsmoiz9wnqzSVsibjwZdBEnhNCG6UkkPLaJDovkbFBb7huQQYwcq",
  "key7": "9D6jnPJhxmtLiYwK5sRvkKL6oLefwEE28HbGuB6RVNjqoAVQ9m1pkdHVa2o7ao1rsuX5kHyuK2wCXt99brEQ1z9",
  "key8": "2B88R3DqjF9gKsQJ8bc3GtLit2inCrceE79D9iLhoLbhshxSKiyid6dyddo4xLZwzv88b8Mve6HynVT1tGQHUN3X",
  "key9": "3ALyiyrnEPTv93X88VoqvPWkqMXR5zt1uLrY9ohCPs9iTAMUePXBPXPCg6Y1oFUrs5bxGygvR4tGVxp3ctVxgXLE",
  "key10": "35nbdxY2vQZdhzegNfoJjF5yAWmTKuGTtxVha7DR2XWYMKRW2Q826pQxqiSkw7cQJYmWMuPQgdsrZW1StZTu73sH",
  "key11": "aYKDXvbzBDGckb4Y6EyhqdhGy3dUNXZVeajwCZGMHnfmvEqwE97MeRjsJYcjgXVfT7tF1Zoe13CfwjG7igH44Pt",
  "key12": "3nzxywFbM5oZh2vNmbi8WYr8kwEQnNoBPLpx82Jg35i59YTJj1DNZqTEzUXQccbd45VLhzLtt4qPBbfrBVBVZGxJ",
  "key13": "31DQS5CNNzcr2S5XjGBpfczvSUxPekLepCKM3kdX5kudUEvEFDw1E3X4XdUc42w2LXvYcGGa4mALGqyc3Uvith6A",
  "key14": "4sxAJ1tiAFmXm7yKovquFDjJdy4rYax9HbcQtotYBjCi7nHgs9fcCfXL5XE6XwRvJmrDKFUGnRADUpxrm65xnYcx",
  "key15": "3LYzxEjFgGTi5NM6QvAm8XsMgcKCKSoHrRJ79y2ctzB6ZC5vJCAYRPJtKUB4qGRhhjJ5vbrDqdMw9j8XfN263pD2",
  "key16": "4dVSxHyXs4zk7yZMmsTdaijzmoQeBFSBK8CjhDPzK6GMP5Wymbw99WMpyofqqpgBjmnv6M5cgdwN3Cu1ydvuRQdP",
  "key17": "4Gm6wCmnSQrbo4d3yLggXDJ2RoyGd4UGEi5dzC6LUAEgMDfV1rJ72N5oUUBZU5YGddMVHQPhnyNTQvLGjDd7xYd5",
  "key18": "2ZXyN2sXSXagRarQRP5gQbC1JMxQqVRVfFfcMM6rzMrc3vBDVLL5dMuW5gCRzeZQpRwMife2mVYzgYUk9mMykM82",
  "key19": "4SZ9JiruxUyYJJiK6JxsdnYF9jqF3mZbwAtpy5zPDjdCP3YmkvFsvjKaMNh2a1GfzhR764bNxh2hbV1y7wSk54Ae",
  "key20": "58ps2D9G2aP284MGHmqiMTD48bGcVhtB7teNyqwqHhzwxMfB1yet1LGCgNDMvqXSLsJ9Ds6jCZYSvZgzoVHqv6Mp",
  "key21": "5kistEEMjz8hpw2uPFzYqNQqHvHfo2MJk6YzWwoJmatVxbHcex5RaFtHLejqYTbHMkAQ5o1aYbkfWKJunQGZYRvB",
  "key22": "C8PKZa3EiEZPGEWyQ6RP33y7UJA6zcoSt2AY8qox14t7E9f4SdKeEN1LDM6jLL8Lhyo1Q7uu3W5XLqf8zVR8b6J",
  "key23": "5RLXo6UymMNdMFvbGwfy2Dd9a5Hs6BZEycdo5mzApjTQgqdRVZkAes19MfiH8DWF2x4yG6zXC8diwoHwkmcoWMQe",
  "key24": "SV2HLMiCmhgMLWrtgnaHTSNpRWxYYmBhhHgenSWTPsNNki6cnPqnwKzu2oo7Pj1MWpos2UZmjSLfaqJ94HpgD1r",
  "key25": "kXDrrXCGAiixXUHRVkPZMaYA1d4ZHK3zTj1PAaAvgV3KFA9VAXdFWTUZ9qbcejsvC986p8FLcaxwsLGexz5dUhK",
  "key26": "YjQQGjj7w1AZPCfUe1wgAZy7cFLn3DeoxQ5wcL3LdaMkshxq3Lf3aXeeWpTx5mDE1T3e2ntYyWaZQdczF9PBka7",
  "key27": "4iJiNHLifdkpEvqAtKeCdJYqaYxy8vrm8AKhndCi46hWA8xzQL1i3Xpd1PDhWKjhSvMV89EJ1fLR9L6R6hgCnoLf",
  "key28": "4RcLyaA3wWms9ZN6rrim5DXPAKgkt5jYuD9Gs4y5WLxJny67AcJyLVdLoFZ3LG4LQQfg5EZ35Y511vfG7C3orCKj",
  "key29": "3KUfRpGHyze9W66AvCjSuWg7T4UJ6yKmwcDHBKcgSRhqP6hrpvB7DCrbBTcKdy4GPwosziAJasyAUMV32gEsSNdU",
  "key30": "5BZ6nrtZzuenR8FPV5whfn8EMaNMH9q3YQhUj5Edckr6g7dN8d6ZGEHJpeUdNWVYdCJS3hoyrnp2Lh3eDMZBeaNx",
  "key31": "5FUiD5j4tZPxEgeR3qKAMRYQJsh4VZpWKEfW1FjpHKfU5b9rCZr3g6WCgn1G8QFQDJLS8bcrqzySipGZ5fNiwL51",
  "key32": "FyRkHsZVLYkhxgMaDAGHBN3HWuHuFXQct3mEVUk64JfDa3ZQtbPAjfZpjWv89eHmjYrDgx5X44AJcvFuLYogRfj",
  "key33": "4ja54zQiUoVANwt52kAcPzcyKdcgejHXWKmmQmuMF44vpjEXTA59Gr6JufS3XzLFm6vHmYud9vJtEzRNTMuLHznP",
  "key34": "64jCMjmUUeGwEkJ9t1rJaeXrGwnBuEti2ALaDbm5onoeqCLXvb8Cf4qgczYtTAv3B7huA8T8N5Dbej4uta9sa7h9",
  "key35": "48rb1CgdeT5gpo5qKqGs9UPbugaWp9qhmXB9Ryq4ZMmtR13VLEMDBSqVM7SGohgewTdu7EX6xLocBcDb54Mk4mMN",
  "key36": "5EtdCFWxeGEpXAeZnxWpk5sBwz2zR93DmgJrSBF3xRqi4XXWQR6VfnUKUpWcEjmW3tnxadYQLVWDUz3P3zgkZgSE",
  "key37": "3jNGzJXaCvJbB1E3L6YTzTq3xu7YgswF3DbqMBKFFwF7RostJ4iL2rPCkix7dDCLUF2EyhjArKPKAnNWkpCJdrN",
  "key38": "3kmoY1yEUkq1AfCdhekDZTMwQye17WZPn7kMHciimoEbuYqzcKFyoSnYFqaP3zQ6LdiSuwsJK3VuuWHTdTsDCCni",
  "key39": "5W59S6HiT6VZuRNWQtqn7ZpE6HLt1CzTuYHkKBpXfg9J99umuyoasmdhtbikfDZp2dLXMzZUwK53wx7YYV2dBLGg",
  "key40": "3NthSh3YpxiZtC1UQN7tq3CATE8uoTCctXcfwMEjfjKjww3R9LjcgVu3ypJWVJ8ZrdVMbxpKd2STn6LztCEVBXKK",
  "key41": "5h94EjMoiajCUbqmzuE1o1g4cXQqogcCKkK3E9XqcsXHTsXfCiCrM4a7KHEiJj9L4DoDLyCAowuQxsrnzKoisePg"
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
