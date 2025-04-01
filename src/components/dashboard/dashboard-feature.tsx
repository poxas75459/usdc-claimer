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
    "3ybEJdcv4jBmgSjUbRFbHjZWcBS4N6rkcyNEAg7x2t6xy2HMam4ydPAExtF68nm7RKwZFJrABfiNPt629zyBHQi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfhJRiKR87wQCZr2ATRhYJYSydQ4HMgAaBVfDi2eVm5r2YrEspouJ5XK48evCR4rGhxzCRqjqKpwJH1aDgpXMvt",
  "key1": "5oAQXShmpddFUep15JtQW8DDtWbTeLH2FRb5SCwHrqDhcVVbwZZvkDyXLVjjkNAQgehVzW3c29eEnJki9XZYLdqu",
  "key2": "27ZdKsuhYKUpY3UgKi1MGjZYECDG8FV5aGYyymDxyFNt2tKdtCpK4i9sXPzexF9KEQ7mkSbnnEe5LSRTndq1NoYW",
  "key3": "4pefGzVt8jcRH48hXZobg9tgwaF48vSFDuEthyoYTxA66rZX4wmkReDpNDzF2T9Ydpo9im8Q35NnXv9uN7W2bVKT",
  "key4": "24M8zNcq7h1Z9Uid8wVa85oye3FRk3vLoaemrhbYXqZnyA8hsS8kddoUQeNvBsFKJVf7rkRmGdVaoZdhcbQJuDPu",
  "key5": "5PfNJ8MQkFYATdiX73ovLYzy7gSa3k817YtNi9GthdSs9ExLNKcddULbue8kK3F6etXbBsJfUTNSxKoLmYJXQwMx",
  "key6": "5Gsh1m6MN5iyAFLTtpzgcVrmFY2BDe99gsxrPyGhXmrTYNmTaD8XUdRTLtdjPmZ23UwRQ3jMfaDSBMeuJhLF6AwN",
  "key7": "2uxAvZnsiGH4VY3Kx9VCuNDpLN4DhN5RLfrbxdKJYycrsP9P7D7cdhaeKony3bu1fNLSNzdqCZUaQfwTRXHhTZcA",
  "key8": "Bi7NDfQGHjcUY5GtYkBXL9UwB89G8U6UgjhN3ExDPhFL7EyCqmubqA9ppf8pahZZRpYzshJnnc9w2D3yemZFjku",
  "key9": "3UGXinDTEPkZTHgn5vLdVnowqKHFmWQA2xsVdEeHZqeAswUSSkQbDY2WQJLX6xd6fmig1sQdwacop2ah5qZ7g92x",
  "key10": "3bRchMSwUoZ7XZY9PBuvD1r8jSa2BseEds6eGirWhvwwbGxdWnTyqSGwu1xm8Epnd1a6y9hKqPvnnfaQ2P6vRZgW",
  "key11": "5hHeniDsXEySKfE6SVNJD5voWSk6RCEWVExpDkd3Vjk7y3adHXMrAMLaubvBzFN7i2uA11V9RkobYaXu72L9MJr7",
  "key12": "5ezJ1ZXtSWSJ9m1KU7Zd2w3amUC4kZyPGMWNvh8e4tJyujwzkKqnpbGwoGSwQnibBYiqf8PfudLpm5A1aqH1GPW2",
  "key13": "53DRrd4nxrD1FX8sPSb6cGqVeBYPEw1FmKydJ6qkf3cYRrCvbcDvt8PujD2EpzAbRbFZQGYyC63GX9j9JHoqLMFe",
  "key14": "ZSMae8ozMBs6FHmxWy1vAf36neyhGnf4RCWeDJda8EwxWrJvtHeVWEQoYf8vuCwTyYzZ9v1oZJRe3mpHmmkoDJw",
  "key15": "41u9o1BuRhdq6jKUWK5ubJ4fFfPJnPYbYpPc6a7J7w8EMuvUwkPtLbCDwcphg35y9erSssMG3ujrsaTbFxYMYTQT",
  "key16": "4RGtYArgbmmpCBx9zTsSu7zAnRJaoniSLDYejsZdQq3iknQDCBzzeyf8VLGGtBYeUReJNc4pku4ttWh7xn8hNwLB",
  "key17": "5QKHfxepvFF7qHMYSDrdfKhWREmVMh8uwd4wUuCUqwA7aLNs7J8CV7jiwEmTymkzTsCkFoFKnonFUD8Lm9okToMn",
  "key18": "4RPtWWdsgRbRrTdHawUAHxkZD81AHXzGfjgF6fZ8BJWsE44BCkawFt7Lunkwhpyurxc5vKxfdegfErGziogWc4uB",
  "key19": "5kb17Ce8fmRM7edVEEEZiKvnwwypdNgPANwtq5h9DyAnxhjCNKjwg2QovudTNmJfYTfKMfzj7oYPxeydaudxDEL4",
  "key20": "2x2eLFvHEE3wbhFFgXNwhXDsdAbKNrcmU2tCw3Rz167uqSJNH6KYd1rjsN2W62NM7R3ENKMQhD33vjvjA9mziHZL",
  "key21": "3R5JUgF7tEXNhmTrHcHi6kBvNk4Zrr7nEn7VWYGtRJkcowDyncALga7zAZkEQBEEh5cHgX3WwgvKc8QN4fcFnfSt",
  "key22": "4kSqzcioCJmhjZAJxYwWKMbhCfSjMMbBhBgiCHrMPiayRrPUTCA9yKdJi3ZTLRwd2njuYHgVc5WeuEjTsuomcvz1",
  "key23": "VoeSfC4nw9M27nRfpxFhhEsNkFLWFN7bueho1df7mERvtNhnZir8XvRmRJgwBDiESVXjdWT7jhXpyG5yBd94ePK",
  "key24": "2a24E6oWQmR4RwRgZzDN8fbtmnpqzY66ECm49upNpEWBQANPhC29MGi2crAGtRtjVCVzyU1RmHBcyjzHkXiUXZKd",
  "key25": "5xgFhoA2T4WjLpdPxw94ZuRbQBGbSwQfYwaWrfPtDEMEkv1kt5sMvAazQQ6z2xAeWTKum97b3gM9KwpTMqqEsW4t",
  "key26": "5KctUhaekv4H1M1jyY5JpsyLgsmVM3rvXGyhwwK9MtsQYa2etdD1GT3Zo9DLMVVBmYx9ENaxMpiLqke7ymoSkP2k"
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
