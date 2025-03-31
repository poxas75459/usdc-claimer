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
    "3vUzjo84AqFsAGGTBKy6r7QY32cukvi4XNS7mMSf1ZvZvqi69NYFBjxoqF9N4D4Q9ShfmQgiMqDGRJpkiZy3aoLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLcPC9z8qooQFyq2jDkcCJARRrnQ6ZHxyktZM34CNxzWZDy2LQCcEc2c1BkG3LP32bpf1HYqUq4ws4cJpfRfyDm",
  "key1": "5VAzzfSCtk6uzEjq2T5suGUie46eyzp7UTbrqaU2ruNEGHSwRrXC6aS4EHtoAgDTxh9tzv1Yv59ueeuFCyi3Jeku",
  "key2": "3RK7kPjd5gYb1iWQqCHKCVcSMdPTteX3rGZ8ga9iqUvALfxsx9J9d9jNJ5upbcDwnw9he5juYrE9RrqrPjMnuFmy",
  "key3": "27mtkbAws6uL9qsVH65Pixct7c18scLK4ZRByhnCJ8pwJp6VnG8dYS81bpzPDkVVxrJfiNhnrNi1GmiC4iRYFaji",
  "key4": "5SCPr5NB5Pg6bK5t2LDEgFJJ4o2abXcdGHUkBQ2a7sJTQVzWBLn4KpWnyTVbc3Y11cyyD5ai6TTC1tvKLNrdtvFm",
  "key5": "418t9KMtV3VGjkzxmCSnjnZMqu6t3PchKiiabQDiBLtc3sWyqEL8L5vcaCgrwqGq6qqKwsYVgfnUMvRQ7anQup6k",
  "key6": "5GqNeJseXYxXAup2hTYxmFugF6atqVGYu6N4TtZ1yZk8Vxggo63TfZPT4norFmr7JQVz3zmZSiPCmerp9B62kWZt",
  "key7": "5tMKDBTYvvnDComrM7Uz1GPtKbPAcWnCho6u4z6bEwrBBJMDZ4iezjMYD9xR6TFhUvg3Ubi6Aef6VCiJTMmuN5LD",
  "key8": "3f9nmoyeWrziKnJXfnsvRZunoHDzjzTxpMgjx8oFx7aJQ8VkXTLcrCudHHwpSNEhsC44ghuZjpq2XVZw9kjpSNvH",
  "key9": "4oRAX6LAnGsjsYa3jAZvxZNjGHUX3KofYgmdAZSXYET3krp8hm8GJLC34giTr4qD8V8GVyMgnhokuxHFi6VeCq9A",
  "key10": "2V2qFRReQRFNWiL7HrgprMz2dewyyTtcUPf5ik19opoUj3cQpkoV7zxu2ez4bEiogDF5QL3j8nvFK51kQAbLUrNK",
  "key11": "kGvbf56Rd6f1Zcgz5Ymf4E2ybrgjpzVpuo2ZzGdZYZigxQpUGi5wGoyJh5FphgCpvw7nEdrxXF5jdjLUCfNAv3c",
  "key12": "4RyX2qsHQNC7d1ZchCqkV1R59Pm2zjMxmfMiYg7vtewAnaqsumRT3tSQwc3TMQE5AVVwuWGCDtGeAq1VLLZchdsJ",
  "key13": "3xEZJ7SwkbSU8HBxDTSWVEZW5jsfu6j9TvGGEzTfvTycyff7VsxFWH5Vf4TWUTvj16BAofY2xnzgy3EiyfdqDbpv",
  "key14": "2hLgbHTBm7F7s3n2LnbwGwHnTVLxDBJDbqrS38hfkUeuMiB7DdSd4BZquiFzDKzA5fk83D83tUUeHTbU1uRjp2Zj",
  "key15": "2J1b5eC7iJoho8UU6DpT1ZvQEJc4TjEjD3artt6Hg8bFBNYcgvPjcjyZ3ZPLdSgDmRWV2fo4MHbAAFFaiPz9nXHA",
  "key16": "zK6KKk5FvqvdG8RkkLZn4K26eBz1gzHAd5ZgUSDqCc3ZJGJbKvnsTbZ7ZenP8JaQNhsPW7ix7sjDFxnwUXtXaaS",
  "key17": "5xDm7uaAgzQFZBR2y31rxTjPNz55ppbNiBatyiNtnmo3vtYmNuaajDpBtGjLxCyaYpzmQVfxCQ5ULRyrG7q3t3xt",
  "key18": "5nEM83iLUYC1PdVMb8PsuExczfMWLZc1hqFcAHvLqsXowJfTuGUaq6TqDhSRPUqnHWm656GBFxTyhvz1RRKe9Nmp",
  "key19": "4XZaWhnF3sH4zuimV5u76FNbAMbb94Uw58m7RJb2A5n1wDfXw5em7qcwiS7CmBsBk8BUWoQU7V4ydgtZozv8oU7A",
  "key20": "5CDodfU2v6NAH3razDWomWToPAibjzi7m8izpMLncfNHSDAZtQJLNuo9mxY6kmBMrW9iMk8kJs7bZESmChkqVAoX",
  "key21": "2368kPU3wGq2QqjPiF3sLBHrw2nrQ5rbhEh2w8KxrTRmqQyDXHhVViyKf73eaA4Zy9YGyvxdVmE58n2JPmUU9bYo",
  "key22": "DSiY3UVsjjWWwsJ4aG7MbLkojNubTtLEzsJZA4R5G2F4AFiSbgz34UzhbqmLWXTYSteV47z3jRu5dqXeG2XkWaU",
  "key23": "f5hMytfmQVDYojqd1XVSiYxy3cSq1rEm8iT7t6vaKD7aeKTPSS9CKjQP7x4ET3ryBmk1CXN7W8nauitfsFvSbir",
  "key24": "5NyCoQxLyYyo3t8VUuspFSbRZmxRGMBfjgDHFoxP2d4wPNGRKmhhMkBeZqN5fNNyrqvmHoT2Xw4gNBMQNbPU7qgC",
  "key25": "4RTXZuKgE7cZqxpJfvuMafkuhDYRjneanmWFgQyoFmpriu1tBQk3tyfe4a5UZDmAP4bQ6UnaAUoGoyHtPRXsXdrv",
  "key26": "5JjvVhZLyZZfrswMfrWw2JYyQwCGiQPGow31rC9z9pUH3MQfTcH6JtPG5AiHG5B6Qi62BMs11ftCDHo2g18AVB3o",
  "key27": "2YpHzHuW5uBtHaXmTuMHZoQFzquozqLevRs7G8Dz3zYbcFRuFqqjPoqhP6WGcQbffLnnRP7k3FYbA7e3E2zA92eS",
  "key28": "3fdZw716QPti4nb9cb7T6GME4bu27TARrGXFqkAKsywfV79p9BPEegkuCBhwsrGWUaUxMp6JmcbH9U344Fx73a3N"
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
