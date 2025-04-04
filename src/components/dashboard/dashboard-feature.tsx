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
    "5rHag33mcmwSC2iw1SCcuDTc4mGn1b81YmKFT82apkCt9n4X5t4oUj2Qz7BQCc7qN345BzEnXZVcSDvFAUBkNrxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F7YLCX4myZfsHEYxs3uVEaufiLMcmAMyK3Ckaq4ZiyCUkZY8fD28VHQbncg8sLkBm57ZJJg3isuSvKi1XQy5W2K",
  "key1": "5y1BdRGuRqZ8n9tbCj5dGXQeeuYwthWhCWXqfxkiooaKtu6T6bM4KTpFG5iX6t6bZ5rC3oJivDYTyYZ9eipNCqHF",
  "key2": "4not4xuVMgFESMCxVgnaAK4qX22t1paniUF2DFY1w4v7UCvcT6AatuBQckiKxvT9vP3M8BvzibCoMd68NB9FXpqL",
  "key3": "5hWzVFJn2NabBr4BmocGjS2ogs4xHwYik1DjCJnqMVW5S7UYbm68WM3dieYxh3Nt1AdmdqqJYHyWPuynC92M6hWV",
  "key4": "53bhZFdB9VAHxDRkEbArcdQNPVXPL9f9y1p7gQK8nikXMg7hCS42rWeCNE8wptxzzTcjND6pDWhUxcLfGnncJh8t",
  "key5": "HkRTcv7KMAdCsbRXgNZJZ8VwxW3wSRY2XxaZ6izVNLvNgkuvpE4Lx3nAszKgvd7bxhxpwMvRMoUCWiSqqL2rAwT",
  "key6": "wKrxic4FxZ9hRvzudAtJ6we1gCimLvtDEFL4uphypbVrFV3vMkMKHqBA9NU7JRj8mYZTWtYW9vKKv8Panawsn7K",
  "key7": "4uX2AB4snECnJbg93zEB4iZg42FVrXVjTwfsgKs5Ru1z5EtbTFmQ85saYSS5piL95K3dxHQzLETQPjx3uzVAFeA7",
  "key8": "5JsdZZ1zkhVDvry6GUdT1jyx94QT8vyAsWaijP5S7g9JH5ssvUhP1jyohpmJ6kWNaUJHVtBVaPGAhLANo8jW8QqN",
  "key9": "4z2nMeCAUSJckuBgPUdHNeJEwwBwyF6Q1Nj22rxYV2jWojDGVgpHS9tyR9aBaDFtGQS3sVfdg9trStxdWevdHkUL",
  "key10": "3pRBL7v5nKDcLqFgRhVZsRMeXQ5tVY4z4H7jN5LvyxDgRqv1TMbK3TDEfS2VQryP8vbBAvY236K54kqEqUs5akJM",
  "key11": "QysWr38m1ofV4wEi5eQgZQjEUNmP45dW8UjdqANwV4Q8K8ACqj2gfY7MQgvf7wLdbAEnJ9FTDZdssfqs1WMktag",
  "key12": "4qQioBR1A557QMjtsp8mnn7Cco55qgNAbhvwxByp69w9j6m7ubbYGaM2H46FcxxyVoazCNhyGdSax1ee5nWwPpak",
  "key13": "5exKVRP28A4qz7uEHNLCAfxq8MNExvzDzp5jLyZKTXUWRUpMVQpsfG2H9FeNwLHp7WAqcxx6GhJMDjM8hbHD1YGq",
  "key14": "YxKdx9brZLfsiwzJaA2bstVkhFZ8izrRSZPvxprCwQWGVVzEWgFTXkAzDs7cBNBbpvmkyuxnuCc8atk9LUcLBGQ",
  "key15": "3sMHfZoZL4JfDVe56o2pa3nm7jtkRoDquXgB4ajgetbdhTiB21cR1BTtWNMFkBaxrcottbqLqNcPQhUiok3HzetZ",
  "key16": "4y6iWXfrkVicxTG1qRL6VChXR96p6spkerfkmMkWNR6BsAwXWux8yxT8Po1RB12ZXGX4BjMfoBb6ZqeuFsHRzmyT",
  "key17": "b1nZNYKYcW1KNRvkQYGCVfRuzqeZBXppZR4G4v8pBDS9kgipZNNrNs8TgygsfoafAGbF2i4mGo34c8xJKT6YwRY",
  "key18": "5vXGfSpdhyRZcy6zHj15b7mpq7SwoQZ2d3jevHS98jhJ6t7TY6pugPHV3Yogx5fjX5PK4t4AeLwhEYbvSPwcVSby",
  "key19": "5wR8UmCy1YCgRPbcxedB93oasi1secakybcbwFnQmG9e2PZFzvKKbaUfLNALKYxswRAFWd5TUCU5i2q5WFTs1UCT",
  "key20": "RGHjBXLWxyXKcwAy2nbXiL5ci31K4Atu5dJnLDQyy7NQiKEsUkJiXsZ4Sc2o5KfWGthApnvQfW96K2XMpGsXS6W",
  "key21": "dbU7QNfmMFq4kghFyi5LjavyP5v9HDFJDwuhw8qZu74aektdUN9UZUs9EHp2xzJknLbQXqXHUtjvczvkf4bPe3L",
  "key22": "4pHphvh5zGtMTojLXkRQT6FUFfrFCxrgWq29fuf27Rpbh5zoqaYjXREpajmdpAVvmFZC9XixtRNiqmC7L4SqmrJU",
  "key23": "5KM581p7SKUX7Hos2DoqGQAwayLfacMQszPsmKqPCb3hU9bpLXgZbZBt9KssczWtZJXaYEjdWeznQ7hh1bgYvYVk",
  "key24": "23i84rtSo2qPYeBCgBMpvBJGQa6KKwwqSMiHv3gkMhUgncTjmrJghKCJDZrFvVKo4r7Hx6Rt3vyqVFMttZmeMEUw",
  "key25": "5hGiCC7nCLeykJ6C81hj9WnsJ5EEWVsU9n1Mo3tahVAzXWuo6nRRfMAGgy6AXHhTn6Je7mSntiB5m32nHGuGBM6g",
  "key26": "4MmzzXpD2u2eMBdi4eqdm9QDGjDZ9XUuHNzGc38vyqy8Hv2ZvYMLXRDLF9QNS7HqtmwsWm4ibT8nHvTBr1YEAyvn",
  "key27": "3QpKcmb2yPdM9tWZSFyNw2LfNS7xLPfnvR4sRi1Pm64qUEoKKqRHca2mn6tExceDBwqfuSqJLEJkf7sjz4qTr8vq",
  "key28": "mB7HbjTruSNShgewubs1Zi8fPFMTJtBq9jwjaXt3aBatTWQek6JG4RJjxwSzBLNRzd7Enrt2Teeyxw5yapczzVu",
  "key29": "328cqefRgHyhi1pWoH7nQCq2KJ7UrLavRdKyKS2b9P1vsnvMngAyQJDQWRqfLxFDFB3ELwP778pV5XnfMW2sWKdX",
  "key30": "9PU5fW2weSkRJ7LRdd8EoK8935iKGemSWfC6MHWAD8Utsb2DRvCePt9KCB2ffbB5sMpyPYKMsAK1zkvTEZ8yFoB",
  "key31": "5NJFZLa1F2yNrr1SGE1ezXzeFPnTASoM2S8RJ9FLXNhwyhZm5RFnuCuSq1Was5AZY2Syt2j22Y72mgb5Pumg5r9N",
  "key32": "UQ5aXwMHjQ98QNGrVRWNfYABBfvZ13e7svrh7yH7Tw9Y6wC2gQWB83vhvXHGeDjsaNAGQsqT9fPF2shyJy5Jp4b",
  "key33": "348sDMKYthBdoDBozoboByvEUaceWpU3pFjFZCuKdHGz9dRyH7vhAo1b97LrD5geZAegupNEZFQEYrtybBdVNQHQ"
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
