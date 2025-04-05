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
    "2xARLDHisQTJDhLMt6Tdd3uozWkZSbq8XSsHEnSiFANYPrjCny9Ah5mNvE5v6uU6dVyRipZWk82Q1jxtNYKbkHah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qH9PzaUG4NxQiNBd7KTBjHrHmF6xHaCuTw5L7PhC7mWR2bSjy4MmbnAVFxTYVFM2ZYcJamR8mJCTUYyw6L7ayt",
  "key1": "5qwVmzpKBs3VGYtnC3e9VPYJAvskmgqRTnJjoVzaxYnLwURUteV7Y6s9dfGXdyLqepQ36uk7EaBq3gjkgCJAw1su",
  "key2": "4y9ChGTuw4BRwtao6vDUfpmqShBCGJDYEzMqnwmijcVoHNxsyeobmE7rekkQywG43zgtGLNNLMZM3oK76Aiog5dW",
  "key3": "24YXoDjEqFDqoagxSxbaQGu3ZaJttzsxp2ujYoh4SdfeAjNF7bdEhXNNBTvYHquuqsjLBKv8gVxdkAUQdGVBokpP",
  "key4": "4JxkQkjQTSmJxTgTQULUVzjipQ67RXbnCzRkqiMCoFEiyEKkhoojQJLC563zjjWBCG6jTQShGA8VCX2nSig8AQpo",
  "key5": "4NqyTxtu9RYUWfLfV1V67kjPt2zqZ725KrsL4UBpfug1ttWiKtozBXrQFjkKorkmRaNATZQwzDT2beuStgeatsWe",
  "key6": "31EsPrNfQLKTbVjwmFhq9r8pofPydau3pyu9o1UxXK2rA59zkC8SjCLsqaa8yXi2nUW9DjYZoixuXFWXv8ZVP4VJ",
  "key7": "5YSiW3ZJ4fQZ3FnWfCf85JvQAk5gVaNFwXej1tuEsQQTAZv4koMk9GcZ4GGYbERZFQpPjMKgqu6LBVUcMbBWX8sE",
  "key8": "jPgxL9p3pKXzKXhBJ9eFAQqDaf1dfJTdTyNbJJMNFxQMKm9BUMQRT89sZktH3QHWaRzpBPkyir6XzquvWF8hTpJ",
  "key9": "4CBecPXALv6aMajkCngpDUqGzfJknD53YdHZnjS6A8S6fB7cJuXh1XtnWG9dK1J6ej666ztBwvcxDJBFXhY1aBDV",
  "key10": "59KNNqGTBBKVbR5sdUuxfSLkEUpVb6LgYsVXAWsgUWu39cGzmuwLcU4FKTrToJQQQNsm9hNUPAADYadXTnWLzP8U",
  "key11": "4hDKvuMsNofdPQKJ2mtjgBwUnk43Hu2UMyhi44JEL7wg78mMPGYZy58aAmFkxePZa1zxRtNFbq2QzZCoFEisMnky",
  "key12": "2VtwG6uRQn4YbPczzCiq7rws5KyXAYW8D5rn2fq8X2n7mTPkMoCqkVjQjwnBY2Z9Px6TocXp5CaajUfE91fjVaZr",
  "key13": "4DxrMM2Hz4qgYfUd9wzGYnFkWYZNqNpPUUiZvBjQJDLhspfd1eZiMB22ENvXK1Xk9qVzwcEqgoUr5A8aojsUsEzP",
  "key14": "4xUvgXU5TVHYVzaLJHwWobC7YLYu6Euu6g5j2G8YLzZjLBYvHK6e7q8rsvAFHLJsvGRi6LHX4EGSk2uThvasQEZn",
  "key15": "3vpB9nqPyVe3x4JFbkWSUHPh64FDqG5vNLhPxffzJ9FHQyUrRUr9W541EaRJbGr1NA3Mz3wLEuCqaoFJKGoEb5rk",
  "key16": "2F5hcLkRZWWHXYqtodEYriMZoPg5iPCytFQQsrFbgM3mNBwN6319q6UaaL6Sgi5mmiseKYRNbrJEeqe564edJfuo",
  "key17": "5jxaJC7WVESTqsQfxqq6HCpb474qDfdUbfaPXMxn3EJ4Fy277xsHm23ns4JtJJvDsQcviQdw7yW6eu4Tkn3bF3sH",
  "key18": "2mYbDuf583jggPEs8kFEFvHNfkYx8CWWaQnHrcxtGoXmEZYoPpD2A53DhNh7CjieojXEpZENTSZcGG8bNtJ7JkUr",
  "key19": "41ktaWasaTedFm9SYhW3chWvX4FaWyrbGsAjCJV1V38mQ6z758MKvQbbkC7Ctz3dnTCYUsbfZvU4Sa4NDKsb1oDr",
  "key20": "2bv3j4f6Ef5jkydohpd9LA4tJWLBTcAKYqLqjG8e8YsG5zAGRA31jYMKKf9zkN23rL8CmKyuPbtQTbUz3BjchJB",
  "key21": "3ZAv2vBn7wwiCejrBFxmSLXbSucHkDiYThrdoQ8qPauzYLnY6V61KjojKxG8wSojTptoE9s9DXLfuCofx8NpZ1NU",
  "key22": "NPwuV5d2aoKEEFr13wC5TXpduMiWEHnrQepsTLBoPeYd1ALQdoYk9A6BnSvX5epBR1JWemEde4NJDc1LQ5Xg2UD",
  "key23": "1HDBMwnFnFygNs8MEYqmmjo128on1hZHUtzC9QEVgJNVmmKRj5VG6ttZgMRQXBJB5GCcmYZnWzwxNEgs7PuM3aV",
  "key24": "2bh8ekM7eKBPvxh3JLCaZVxBwTTXEWXRUehxniz4MWbME3L147PMFDeetShNMBpR13CzU7XkGqyUA46fYEyTXDRL",
  "key25": "5iWViAAgNwUoM5c9jpQeJqmKRBSCGUDYe8k14XkUuxFXHwW6qebusDfBJVVDzbzLbyVbjTG8GpE18sZHzioUiBQ7",
  "key26": "44xsZ55Y9K9VcfJhttU3KvhZ8HLJ8z8yYFePxrLVQXpdpgRyNNmRqX5MJLJcMXTZM2scuDJuMwv4oaftvT39tqzD",
  "key27": "58kduDfab8ZSDcXvuJmRLmfGwvygArrrPt8i4PShuekybtvi4BukcfX16vp5PvHuqPmAj35mWaS2jrdvstRYQJty",
  "key28": "5Wh4PNTNzY4B1eLkEcPhLCifxAPJLALprqFLuBDsxXziR8sSGkCZny9PLv2movt4iZzHSW5KepEmqWfmH4maMkHr",
  "key29": "4Qk1M9d4yinTFmVmZe7LxgVpkL64tS7w4TdjuToP9DTwUhBqoRTmaoR8V81sv9UvyRaT3efBHHA8XrU4556MZbQ9",
  "key30": "2gVRKLX94sZLYE1ZHTg4gVAfoz5VASBcD1LFYuiiLLea9XtCvmhY8e9dSbVHTR1L7povA6jGqEbZX7nStECSsYZ1",
  "key31": "5w7g4WEzVzo2znoZHnWyfQ6Mq13y1ymU6ERkboeAk7gVxQSTuez7aPdEHkA1NjRMbnJ6E2fYqnstYeBHBTuRDBEt",
  "key32": "5f6zK9GBkpXSpd423mzPKC2N68BUTkMtNmaRb5c87X8LzV6RLXhvZQbT9krsLKhotwB2RLikfif5ei1RkygxzkuN",
  "key33": "2FsjGfYXrezLeqRYUqShu6eKvnsoqBUtDt3K2FDa45N1QZ7QwRhoMUr9GaMk5VtnkbxKoa5c2m49fB2naPneekwu"
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
