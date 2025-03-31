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
    "4qeMvtLasarD3ALQAKdi9HEgW5dC4XnsveqtA5iTPXPj3smvoRKfMguErY2156jprTWYPqvjAeL72f8kkN38qWRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SA9tTdKciE3gB5KBPcTMwQGWz15UKnbLxhzTLE9PJzfmmffPTjjKc5nc8kpLa242dMduBqpd2ihzE7FbcEc268",
  "key1": "PZHJZy2vtKXUmAbUM5RJj9uLqRvz7bTxgpVAkmj7Cc7eEvzXc16btEbw1yUNtBKU8jpHY14sAd6yoiSPVbX9mWU",
  "key2": "4iTsumTjg1PrkhLLmg4JKpFW15RdWr7yBjqTpgCJHXtkM3MhgQBxMiMY4bobyknGpkav9k1SweW1dUh3a7ASX2AL",
  "key3": "4zrvsEdDoh44F91MFTb4dDisAiTFKSTaSo7p1E1dbtt2s5WwpthLPCPNApppNGHQ8rzoNc6K8ob3kBwPT8DEhua7",
  "key4": "52mBxS3TdGoYFFbXWoP8KBm1N6Sv7iG6qdHC8uKxZpZrGcYxTZqPuJZ9ZYL4hjGDbfCuASNZVn5hPTAWcc699vsg",
  "key5": "3VZGz7Na8sftbdeNjFdZJz6e2PwiNCGtXQJcc9ih12ZNghHWrTSCLqgfW1AQS3np8LFHCmE6Q29YgYjvqCRMq6bP",
  "key6": "2T89Q6pRtafvhPRMg9aAdWqR5KEm5ar8H7ogVEvoM9ue1BC1eYDY7BHC1jy16mReB8q9dG3CAUsvojB5Zo6EBsrN",
  "key7": "LFKv2QJtFMHmZjTGYdDz7NHaZzxjaueN3ZKWP2vjrhaS6LDZXbTHfGebsxc58q1PUEbhS7soFsYKcGef475eaHo",
  "key8": "54UkUdeuXoLELBoi6fL1TXUYxNKzsGxoTp4kgTeaiinnF2YkLrSwDa59A387DwkPKhEAQomc42Zh4BRKu2wanxYf",
  "key9": "5mfjawiFbzNN6L5inNeyz2JaD6FUBNhsZNP4pwhV6CW2mmZ36G8BscgQYaV4R6s18RhvamjnCzz6GkSkmvh3sx7u",
  "key10": "5241YyknX3cvAxzYBiySocT5L6GmSjwTetn1Vh69mdYBNz91MSMj3HdjJdwjL7FRwVu5gyitetGpKmPTw1qqvmJf",
  "key11": "4513vyWsf4GiJczBnDxUajQ2JM81UWjK1gsGqpRruCquptfm96u8JUQndxcsxV3qLU3Sq1K1i6DvnURGHgxP2XGV",
  "key12": "5Y6oBHSGpEntRcvR1QXWeBy8XVus35NuzBShGeTge91wk6vd9bNScqW9B2qWqcMkLjxbkhYeTKRUqzQkKSUotvcH",
  "key13": "5xWEUF7W9HTbDG9RxVJiunJtu1Ezicq83FrGfaTbpbtdNVAPYaB1m7Vuxyr1T5L6qKNSFxd5g41htWFQPccQH8Jx",
  "key14": "2kYBNsQMKG6pXz8xkm4YAe4zSjypC9zhLW5hj65pbf2oMGwzmyyaXqEra6druSg9Z4u83Q3WAHeN6dYGtNuteM6H",
  "key15": "2SbZAjNi9D41ztonZx4JVdvDwBZeTFejN4mkLGtoPoJ9RLUVfgUTpCTUkDS34amMjbroXtj8cSXwLwD1zE3oxwMj",
  "key16": "5Uzs2JEcq47cs5Z2tDETk818FfvZqKZVh5Ud2bD3sYqeCiV5xitdgq5NKiLo3h9esWLEgJoT4VaxvDnWuAHrKYWo",
  "key17": "5BfyR2grXk86oG9zy4P2x4qexetDd7LJ31EKRgpum93u2ap1CVvsqZs9yNWAB28keaqTNW2aNkPYDQNReeH8hZUk",
  "key18": "4xkVPVKEaLjSVv48ZCAm82SGf6ppPJ9NxfuKs4NAj1rffjvrwNwgNSrp1B1V75hG5synnBTK2NuxKYBigF4guAFt",
  "key19": "5p9CHW79P9hxPKdT3fyTt9xDcBFWPQdGPJQw7JCP18MFQ9KkWkNa6TehhcBoJNwAXzWAuhkwwmYMm33UJyZfWtL1",
  "key20": "LgMEesiWrdXN1KvRKeKNDAKd1D7fA8Jffn8Lc1CM1Yp5jFAD6hAvH16Tzk1MupZ3Eoh4tvW2cg8rh61GdX9MDMm",
  "key21": "vJwWL8cGCL6U5vwJE9smRH8JcF7tifakCb3ZH8bSpxWcun8N23AXWsPudGsXi6eGTvbasqGK6Ub5xCfS8FqJEi9",
  "key22": "2ebDXextUnxKPKAdGxq7bHukv3xTsERiSWQvQjGpqibqcPnzHEGPqGLAJ75NP75WTA6DQXbWFBEkvk1YoR9gF3dD",
  "key23": "5wCLGXVm8MS97XrjyRKM78Sxob6q69Mc6VytmVqxhchXHKSUsL4GShVx6sHziHH9KLWNegCPGMHov72hJ1wadcFm",
  "key24": "5Xkgr8Ca7Y5LVZcFrP9Yf51nWiHWQVMGAXTFihcz4dPoaG1zwDz4TgkexRHhQdLFBTaWUwpijqhCyWCbcEzLzr2V",
  "key25": "57fXSLTUctqg9N4UkUwCRfjLzAPNDZucJdDY9bqycmtnbyfQRccJ3wowuwpS9V6kvYqaapYLtoii2anVWh2JQZ3p",
  "key26": "2ct6NMjerRJRFhw1BDe364mPgfWWLUaHobp5rsXZTzWVdHDS4mmDCum8gc6PM8MjWp5cACzPwpzTFPwwRDCdocXf",
  "key27": "49SnYmbuCsnJvmbfWXg6WA9nxbj5f14SZJryLoQJPQoqNNTuwhZFZvK93LKPybXw9Yd25yoxGu2kZBauZXnHhRPX",
  "key28": "3MP4XqscH14fKbMV9EQ2bdLL8LNtPQdS86SPscsaSA5Z6qKhLNtUPSndht7LSHHxFiJYccZk2WGTR7AEuhGUdg96",
  "key29": "4v45Nq4X5eY3AcHgeNAMKhUTfF5u1QeZ6mgzD6v655K5o4Nfs4JRT5iDUfeEcij52A8ndFMB8mBEKiffQykhCywd",
  "key30": "ssgz36emt73M4EyxxMPrzBztyxvEigyThbg6JgQ8hXW3w1RkzDDJKYwfDqomq4gEavWr5oFaJWQ77R4iMyGqdfz",
  "key31": "grbwj51FaUhwe1Phyt5TqqBpTfpFr88Lc2ufeHdf3jbdUoNt8HonDJG5N3k114eTbAMoiuqKiShkwxGN7nkQ5mT",
  "key32": "4QAPbuVJ1BFsjisUwzgmHxRXp2XmuEE6HZASgK3mhDgKLidPoAj5zz5L7yxsYdDgPRfmjEfxrxTqhSrHErcVDS4c",
  "key33": "3uAVS2Z43EjYixgXNz3QkU5KJrm7bJd74FgVWafF4Y7o6o74pzaHdPT9cHbGSAye7YzXVrUDZV4eEBwT6dduJoNK",
  "key34": "4UweBRKMkCwZxuRpBfBN97bpexbGxxPSzPQdWW2vZQg9obu7ozi6dbspK33KPHqaxJK342dYzkW275ixGm67cPLU",
  "key35": "5s7iC4fWPqfANQrnnKicxkDki8kFFx4sKeTy1cDT9KkZBZrfDsAUbhZbSEQKS4TY9NRD8TspWv3hK3RRVr7j4J9q",
  "key36": "3xeCEQ4hkcivxr9rHtzLFe7sAs1eqMiBwZu66VHH7tbqDyoYKhemnvQA7d28ytKaDkPAWD6JVQNko8kHePEAMwKu",
  "key37": "yUYjLbTkYerhg9fJ5sk26d5dzYW6PcQzGVubaxxZZhMa3hsd2yYoehWrTbsWYjpmcBumbbDU5A7GgzWsusQG15i",
  "key38": "yobrW5FqpVbJeqbp5dFswewF7my9mrX7XmZGkSh5kedYQ1Kn7wwPKXDfp4NtzhkVaBskDFVC7QFwHvGm4jWGsMq",
  "key39": "5ZybBpKvBC7EqF1RmX7knotiVkykrLunjBDUAi6mrvrrVAH1DYdbSzScHTg8L1e9NmGZJY8L5HBEV7WQTrnvdPdx"
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
