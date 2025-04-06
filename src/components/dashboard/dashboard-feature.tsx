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
    "4geKaXepPU86NTM93UnNZRJyBEEuXfuk9pVLyfhJ2zkDnf2C7TWqB4yXR7vBL3abTa2TeHYiAiALDMyfAVvJWpwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsTgwXZfC3uAHrcvHkSSd5vq6RtZseUPkMbhxh1mCT7fzkQRABHxtqrMnCZ7zvZkgWaee9DNGcqZA87PJUkpWYS",
  "key1": "2bo6kd8rz3aUZmSCQY8jmjMqTdvQej7yMQoVyYxPz4KryRTpstyyteWc3TxvzzMNxwDG5L8zjtErGkqaXP4kKpV5",
  "key2": "41s6mSnFftYgXGa7ZuTkpgSP7JzaZWf4X1YEj2ZewyznymEoMt45gJfKDoom1DUH5HPrs39RNgG2HS6GgtsobVZG",
  "key3": "GLqb9J9teE6rQ37uX7NPcZVPjfXeJiW8XhwtWM2KXGVio7ZwNX4oG4wHVJroSbRDCD8PUAEskanvPM43HYjN3ow",
  "key4": "59fETVdQnszbeJ9Yb5fcB3dG4yPhaRg1Gh9XC6R7omEhRmmcTxyY6KK7LDiFWKduDpMK7CT9gMRvb54ncTigRmiZ",
  "key5": "55gKU2KRs4aUTcpK1Jt5bqhGfZDFn9cwPFzPmCnfmiAiHubi1GcN1m14Ei6Mjy56Jn7JibLJ7CT6pzxufKZSmobv",
  "key6": "2ZLuoqoynujwYq7myhPKSTD4beZLnbHXarz1jehVsYPYKDKpBiF7xz37z8QAwsir37Gk9BtkmA5JKsLKo9oF2RmR",
  "key7": "5q3W83t6mMVVyxUxJaBDhk18CKpDdsSY699Y6qHDixT8L1uFM8q7QSYiRE4T3ZfL6Gkhmx3uPKmjtWoybvqwhuqs",
  "key8": "gdj7XY4QbHVS1iUfUuXYVSeLDuaiK7hp8bJytWFrMzV2mz18XunkeZqW8rV2tfHsPyWVqy7xpPAzE7vffFp9Wup",
  "key9": "38QTQR1t1zREdYzKSVReEzKTxDkMVLUsg1Pq9zCV9r84VFGt7hKVPuZzSHXqJCopctNiEBLaFURTRQqMyVpxZqKM",
  "key10": "4hJvn5ws6g2v2wNJRCa7hSabVQhZ4pUkTdZNq31hLbqYN1zrhLyNZ7t29FTvwJfBhbKHhHHgfHMQ1VxVjLZBcm21",
  "key11": "PSXKp6aQnwDnSBH5fqwkbYAQLmemr4EzrwPLa4CULb2y5sH6behY1mixnTDMV3VoEGgbwE2DQS9h7uiwyFzbaqP",
  "key12": "3uyK6xc1ZtY2CgRa6Q2GTu2WzkX5mgUhibqofFGvrMXQ4v8GpzcARyEhAMZ2N2z7rHXFk1ywKBwVMF2ep1ACEC86",
  "key13": "2fAkmW4LWJRVHdL4vTSsuRoGfPmLpcGnr4yKMAFWJ2oiBKZeEMvhZ22N8QEBULLyCjqAD9J7AdZcaVxqEFZWkjA5",
  "key14": "4FUpa2uWKiTv6raMGxPdLqj9pj26j2fBDktYK8m6P3F72HPw2cExKdRT7sFhUA7xtKFcpQPsTi3uFw4ZGMmPL21t",
  "key15": "4vf1YEE7phvYcx7edWyULwkXfczepfeZbWbnMKDoJbaNJ6DpZKxdByUrcuARrefv1futJmTdP7xKaXtxBgKsxrR3",
  "key16": "3V8kjaRksTt1nJzN27g2s1JWkPfdaDznF6CuahEUwyY3sQUe39R8Dwymm4JaFEF8vpVLY84b1WAgdKKKKqhkW2F9",
  "key17": "5vz9oi3K556Y7cj8tn2Z6wENFvHKdyaLWttzNR77o8dSCkGWnBjRhuXR6i8VFbLjRKfgJDe6ZAhb3Zx1SG2zwwzk",
  "key18": "233zj3cCSCJYwF7wgNTEK2thsR2EdWLqj7ZUcGgKLxs8BigmSnSwRX6WeoYW98tvgwv3uwpBw3eP8DgzRnFxRsM9",
  "key19": "28ZxvHXuiYhzW9p37rrJtXZjwZEjdQcKMTSr4cB4HjoP1GBQVPUWf1Wo3FsvBwiPPpwywR15rbyGx1AaU9nHDvMg",
  "key20": "MRMLC2KiqNzKU75wqLUhawjLmfke2N2Q55dzAxuLe6G8AXmTF8w5UZjJNV38K8TzBzDpTpHsMkZ2PutQzmFckGU",
  "key21": "p4BqTvuE4M9q4C8CY33ggR4Fc3tuM1bixpdBh8TGvkEgk6h2GqaaDpSAmYqRirXtAuhfSvWXgKyRF69TWRTf4ax",
  "key22": "2N4NK9XTcvtTtHaW83Czn9hsiy3YZgnWad1Ywqj7tKvGbvDjpukep1DJfiRes5vAQhWYPzSD92gQ8AnpuxmgTFLu",
  "key23": "3uESLdHBTccm8jEcHMwwjjuLzxfaxUUAhdWkNwchnyrHCdx564TcvwWabvK3GE6s24kc56u1Eoox3ekrNAeMptR1",
  "key24": "2PhiGLiHm7rbfPwd9bPRLqT6BNHWu5pKMUWW5vSd6HkxVaS24QUgdnxJcFxfhrUYgoTGiZPEYSRyqPcTj7bZD31t",
  "key25": "wYh2D9fTd7uNaQhmK8BHsxTaquPhx3iJtdg7Lzy5jeh3s5mhJECMX2yyUwPoRXaPG5kQkWUoi4Ypvt8z4aq2FUC",
  "key26": "5nG6cCSxAhgyTNRHtVzcq6Q3aXfKfLkeuBfs1Ly7pgJG9SsTe9661SbMV3EpXQWCCAzwgjKqWL8cEkCt8H21mdg8",
  "key27": "34trFtNEzYKWABLQE9wHaTpMcDuUiofQ34deVkjk55aVFEJ687hB1pqr91FhZZLuaEPtmPdMtxPVB7JnoQ8ikfQX"
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
