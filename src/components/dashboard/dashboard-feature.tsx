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
    "3xEC5GWqTsKnUXEQLuqAdUinAmYZZMhg5okUA4WHNHTsspvxVkxFsfdLEnT8xF1s8LLEoR335ohUW9ZSxxJQ3Syg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25o6VBfMZKvdZqZqGqsyVTuT2AXHpkSj1oihsoTTttcdn5oD9GMJeR5V6Wr3Sy8ZnnKQ4NG8m9xRPQN598gnT34D",
  "key1": "53M6P9eg3vi3kvEHAJ45Gae1siSoPTnmVghGDuESxMvMgJsUTgyBHEjWvxeeTKimHrK3eZq2eArE4DVoUQghuXK",
  "key2": "2sc47yHFJguMCKQ18etEHXM7oJQ69nbynSCkUqVu6mXGL8mHRfzMQ79oAPKeXPqqUWKcux1vwL5W8EYeesrHnqSu",
  "key3": "5ndsQ9kD5tK4GBHQPUxudvSfgJEnYUiwPfr7e1Gp5jenAzb2bF73fRfac2Pc9yt9yxK454vkzpCCMTH5ZYacenjj",
  "key4": "5sjfYd5rztjBGB49CBx5G6euvs1iPRf8kFniL8i5fYdkVEQtRvEYM6LBzPMdPUZeaMnJp3pTcchH6DCWwYGHBDwY",
  "key5": "wBQ4dsePdCRboqP55ptdYfgUNEUixRTwKQY3T3o8GtLqCNz6VLvp4fPSnLhrcGdHxYNMLthKUDDnveoiN4GHcQH",
  "key6": "3cNejstJwHQPKBkys2tGzJpc7MVpYXVkFFCXVHFXE4onsMUAToiixkr8nuCVjELSs5jvGuTnu9YHTDxrpu8A384Q",
  "key7": "3VMor6GLtLji9AsdMweZ7yMbbP5gk53z8QxG9zsUWhnG74CtQy2cfip2MEc8WWUWN1eyAKDmkHkVq3pcxrvH64XC",
  "key8": "5Ddqq6rALH4vRhiJz3PBcgaGwKzbNXpNqJPge7jVS7787tyzkELY8kvL4WWhLascE99BPTN51yspJRpe6ydFGUuD",
  "key9": "4HNcHwQWSUNS3K7pqFsN1nRX2L6f4MbxUatWvtAnTXjK1zcxc4TVzKa9e4vtaCJETXSApLhgFtQAQmPaLM8zwA1e",
  "key10": "2h9VZcehm6nFyoQpUxm61LuK9Lsymio7LeVvsKBsKWeeifitZBY4gA2qZkS8pes4ZueGjkGUJbMoP9v3fN1hZ4ip",
  "key11": "5kB1Gk6vEnEyVAqtGA24RhPS7oGDFWSYjfQq19WhF1iAcj7yZHoETqM7augu75YgTPfdcESSjQ57FsXSse1UABkz",
  "key12": "3Be5mZ3FEikrzLg247SiVNW3hgAXTFKkJcHVhYqnwwjtZWvRbCpa7CjjrS6C3GRRPjpCNSRi6MfHozqYgq9biMFF",
  "key13": "31FSVU1jpSTKtNBtG25p8siNtEAVvYMGhZec5eo6nxvj2j59HXhqf4YfGQKGiiiEkW3ujPQv8uFnbauY5yy5YKvR",
  "key14": "WrGbcmexpeAUnduH5dKsAJHn5aY9u3sA2t9us5GR7WSwE7SAQYyZsJVttaNj6tDPpFfAkoMS46mvkpr8utVmkdq",
  "key15": "3CzfNbyYbKn18c2jSLRUxanSLeSgGRqTjUyZJdVApSzDb4R6Z6pBM9itomCUWZ54YYMFw4UkXkfjx3YmHXmxwFGH",
  "key16": "4aC8xibzFkRF3NnoDM6Z4Et2XcuSEABUZCr8iNdqzBeoap2Kr3QRaAH6mhPFExGdxsRS3jR1qqN4EhrHEEZVyPAs",
  "key17": "5dWtF9ThXmKBjitRpfUWEr5RzXzbYrxFCPJbMVTEZJm9R75fhMX13HS4Nc4ERMZ4K5v32G5c5Fr37gPWn1o37RWX",
  "key18": "3DNV6u8mSj3qm1Bk9r2rpA9hSbiEtRWMp53Pyt8DQ5Th9cTw2nik15Lmr1CddNDBBhtyKKJ53UhoB1i6qJKQVe4t",
  "key19": "2FW2j6gWgT88AdkmbsiDKNS1rfg1RfgBQNbjxhQjhWcDe69saGNKdKzhnZ1sM8pkz3kYKrKfo6VTnPxjEzRZ32Ah",
  "key20": "5CXjxvAEBQMZcEgPQdMC2FDiyqB3b9CwYvH8LWYhn9HbB5zb8L8AvP8sg8VLr2W6x1MCeWVmhikA63PHrD7bdpgK",
  "key21": "3QGq5mqVpvLFbRyAb6EjNQpJb8FhtmvZbEHHwU1EpsNB9wwj5y4oxFwE4U4dZfcFVvFF2B6i5kuhbqspPfz21brd",
  "key22": "4mkCaczLncMx66AWcrgKa4suqo1Fy7g7LJkkUgYrBLauZwVQRHaU8roNASXdpVvTh8soaqYL1zJ35diq2AHNvwH8",
  "key23": "5yDZNVzyqeVWU7N56YN7fYQ6V36Cp3iFtLouQDtSLHtCS9Ctvc58KbLJ3ptiMF573bYm3ZpDorC7SQZGKDtAyjaK",
  "key24": "4eJ6TSGkTwJLu8eb37MpmnmKXtSC5xX4Ui6UTdL2J2HuoocsDA8qzMTt6TybMtBJXuA8NBba3GHEEVwaX4d835PG",
  "key25": "4BEc8UgDGkruBwz2Bqp7M7JNnjtdVLTK9LQJHHCVLH2uCuWEiQVEfUKFmkj2o7ZBT6xonY6D9kCnDYoY3z9R87Ew",
  "key26": "49hmBUn6LyqUCJ4AhHpkHqaRjspL5Fo36vHbLYRS7jVcBoZBHW3yY38uuCweAtRW5pM1XiKFi4hTMnkXA4kTwj7C",
  "key27": "5woscnZ8fhfUEcTo59UM6Mf7k7x28jM7SogBCXUTnoheuZXV2R9SVCUWXSfkk4y9NGYcUrLpkRm12ThRn2USbcrq",
  "key28": "4z5aLFnxugFXoYoDS1iUxSeKYoZX8AeH7sqBGd7iyHMbApVVqcrQjJqUwLxZiqJWXau64CiLUUdkTwKkTu5pDfT1",
  "key29": "3Jw7enKCkGkUxLoB1yAJmYCL6sVn6e12hYjXCxKmK7uS1ELMXWpjXgFfMtAySBHHXs89N3TsJ1YeYh6sa8rPtHXm",
  "key30": "rXyWNwvcqFg2aHcz3wZ8gJv393VNWCSVtTxcxY1bCPhxJKsCWyt3TrQpGEXbp4z89SKPmWeoHexBeZVhYCCiMf9",
  "key31": "5dFDJ2eyauQ3Sia5iTdGDhJYvL2gMHZxLdrXA19fKtZmJCjdYP8e88ryho7tvJdaXCEceZSCf9scX7DL1nbFaNoQ",
  "key32": "2V7ihxqRirwamsBnsVj2qSfAwzwLq6G64WehrojEELJG7rBwYdpxXa92W2i1yBYkqQFfg6RtZzs5ZjrriAgUsoi8",
  "key33": "5fFkNi279fKK8Ab1dcYPNAGyz3dTm6FwfRVjwKxVpMHnBFBUpoYRa1Du7xshN6vu3L3pFzwDaqQ15JveuQRV4Sb5",
  "key34": "2vsQ61vk6MNGJbpgdRuz7R7y1xK68KsjZ79GdTuzEdeFcnHkcamaJJNAa2ouxJQAE8RzMRBKt9Au7g26nMvEgHk7",
  "key35": "sPRiFAWG2g4Q4Tz43qy6UqzFKj7yyaKNMLy42TD8kGvqVEHsBUNVV3QwGJRMpGCZa7EFCRodKGitztngUDyNX3y"
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
