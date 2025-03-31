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
    "56qNux9SuUUH6nRASUyzetEFM8Q17aub19yQf5RjS7yHMAF6zuZCQuAom7FUVWqjNGW7XyLhMzhNsfKxrvApGejr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDcvMw8Mm7awEKiYM7HzkLGuwzzrZSZNgjuACrwbrN8hxcQa7Us8y9n34SF3u5WFfcwmRyxKsPogs5HEqvRPzqh",
  "key1": "1TZ5EYuJHrRQXpvZf53hvxTPhWw3Yv6z3RbRHw38V5hL3gtqR2a95H7g2WUdaEUy1Mce73T3nSEP6A87KcpGHaR",
  "key2": "5Fdc4biGbeUF2Ld4vdTtBNzMMvdRhKTzoAK4WAYrGssvpcqAQ4sqqCVtjMwYgXKo7S8DLDURrAisCR2wTp4eNww",
  "key3": "4YMqt5FVJNvkLUJhkcEMHWASEz9oUUksZLDee21GbBcBqGXZJXuAbVyUiCkDgH7hYkW2fXtM99odeB7Qgi82zYXd",
  "key4": "HozaSZrsRZ22JeMq3chmwhmQ6kgssrYkWVNbA6TCyxSJ3TiZx12Brq5QqWQ18JjteNHkjYgFqjH4F3tUtgagb9U",
  "key5": "Q82jjtcigQxKDfndR6fa1pS2vrmk6CNSMVMkN778ptBRV4L8M5w38Lg5C6QZ66nEWLCnWWz2eaH5vqWCh9tz1pN",
  "key6": "vozrBBzKTHLQutZu7f7KNuoorLTfeeEec68pHNcBmbfh1M69RRT749uuKj9N1Fhe1qYSozL29DjHujGqMLKFWJc",
  "key7": "64XPUY7hSaQPi9fAdtyXLGXjmJ5ctaMRyx9NNFD2VcFG9TPGGnVSHM3YAWVvLwY4S35LDg8mTA89wTqVPZsCaQBp",
  "key8": "399TQVDBeGjNHuLNKz6shGwTMYtzaP4u9PGFoPYHSiLmNVxzvUik5x6s89yMMWSz9YoHwsu5YjpfETrisRVTVv5Z",
  "key9": "5F2QVH9b2PYoJp1aDKwxPBtZDKty9j6uB3etqZdQmBCNKsAbt7oPeb2Qz7mrvtgB6Xqu2gAM86ekkxpbug1hRL8k",
  "key10": "MLi4heYWLuty9uH9Z2Q93c4vLjrkE6dM5yiiydXS2JhVGdMLQvZN2gnAALK5PhyMGp3uswANyC9tpZzTFPPBHd1",
  "key11": "eETGcuqUuuAUhTnDK8xx1M2AKg3xR1SXTfL6fhVwFFsAqzwb9Ho66TtHTKHm9xQs4C5UCtwcgjWeE3TFzV7PcNo",
  "key12": "2REgMnDZVAaXmedpJLkP94NorfACSMw9dkbvy1mZvv1g8mzwU4zagiYNWPdM8iFe9Ge85uMEHmakB9bHU4QxtH7Z",
  "key13": "3xZy9mya9Hmy2PMP6W1niXkMRBsDMy3ZZHrmKTn9RuYtY4PFZpGLV5a4TjiDtjG2a9CxxwMBmaBusREQq5ecqvmU",
  "key14": "2pzY7iqT8JbeHkAVhKFF1SVa2dLgSG1rHXqau4Rxt1ULwhYYk97gYDpvXF1qjp5fjVhJW3i2TZe8jtJfVy9EqYU6",
  "key15": "4EKJqTbd1153wzyauZYHRG2rBnS8kBjpGcRiCSrHPjdUzMEu9DDxzqXCLSvHGMmqJvRPDSrTLfAr1NvyV317vuf",
  "key16": "4F5swjVJxYyRAJday78FiB86MzNRxSbRFYiGhBuWyAzekhgL2bpNNjeYRjPvG3af8P1p7MdKPn3s2yWSMLPdnjED",
  "key17": "5uGudoCk4KgJBpGkuEsqBPfzHkHjZrqTaHAcXgrDPpSjMf9XGL7Tbz5yPBiYZjhVuYFidk8VHMTC4gbvR7F7Pq7k",
  "key18": "4wLYe4wfrqe4uwLE99UQc2F34Gn7RHj9ZKhW5iaE8vfrMkrXvnuhHn1xU2FKwGiGfEyJFhWpqp62Yatz6UHoCRCt",
  "key19": "2ZntwrZge9smn2sWztrD49iR4MigrL7xcEnXWonrbz2CwPUobDegLtSNfC2UQJZy3sQMzXSUFG5EvS8axnQX35Da",
  "key20": "2MNkN4894kCWQr369VvZJ5khkfRi54yc2wZqffWCPw8opcowKfxR38TYCC8svzARSH4efStJrasP5qi3ZtjmQBQ5",
  "key21": "Y4xyFJycv9NBm34MbHYLm7Q7nXbDS6qV1vB6ScwF3DCjijH9aLH7Eyi5M6nbxfokwnCbgTSUPVMfCKF23vV8bXR",
  "key22": "4uzczgF8Mqty5bVVYEmaigqMH5dM8McrPB1MVAKbcdbprxfjmyzR9aAi6YbgFArYyMvkTF7Xv72gxisyHRaLpVHb",
  "key23": "3pUihigj45wXfFjTmAa8Pah3Zknran2tTeZhpMZDM77qCbDpbEc5QNLgWze4LkoaWTAjuZFycoy8PxmhwZJuKz6C",
  "key24": "39Q5Q9t9ThKBbN4U6rPGbyrTotcpxL17u71wegWM4QgQfSnaPA3SjwB6XePK9vUJ6Jf8fXrskBwEq3TNdWGfbTrq",
  "key25": "2t9hvBuUvK4HV8AQdz6ADnY3nZ93NeGJmizzVkaDa65oeWvjHZ1UrhswFe1oP4tx3Vwj2rrEkmkEaQYFYpbrPE4Z",
  "key26": "bmGm3Zgr9D4dCXhy1aep5ECNXRjvTd8HqDqRLRzNWxPUCxbGR33cj6VZqkDjNGJTGX2QuQ5ToM9XRRNzhLfYFhh",
  "key27": "2imQxBpx9DzT6vtaeKRNWCxWnLxW3UDEiVBVrVqNt55HAk6p5Kz4naAfnrCn6pi73NQVJj64F8g3wHrYnH85Tpg1",
  "key28": "3s9LYYLPvKfeZqsY7bPuRBEF4r6dpsXWB1tXjY8bcq1TdN6nUB2cyKFffgjkRfBt1MBPE9MU5wiFt3Lz8RPody1x",
  "key29": "66HVieaf5mgTh7t5N8KKmL9AT2BQfERyii7aNMTv4JryGbHWFgk3pQoQte1uPcWDPuk5KEmhKXHJS2383SiKGzYV",
  "key30": "4sLtL9NrLQYbNw2p2Vu7x2SFE5UF9hB4KBhKFzRdB89gDCDxmSgNxj66F4mZ5dQBj7HKjM8tmnCNbM6Do7CCVY33"
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
