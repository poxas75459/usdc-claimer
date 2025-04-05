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
    "4Qk1B8ApzyhhwNJFEy4nnrci2bkJEkcX8HvCnUaoaMSNo8bECEjuoeNfrj8iBvjtAWnA3rG6bGM3bLgXRKb3bdri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9vo7Le7ScUJnBYs6NeHzehvutmmEKRRA2bBnJtfdEdpedo7w1MQGBeTQWbb1LU15swJqiqtFP9ohjewtd4M3rV",
  "key1": "5gDJCo1cfAkrdbvSVw1JxHMUbjop98pSCAXyLf3VkxSb3HhGnRn64teymv6cHVZGPGbMxSVNG14JLUGD9yedUHev",
  "key2": "3coWeoeK7qydLrndf5x6RHeCzGh87fEvaWRvpvqNSYeGQRPxXdQaCbbtzNzDCyeUG7BNagfuUC1fJBsdo8Yw1Sfg",
  "key3": "2kFeiBkRdvUgoFzvdgkDNgXrDGZ4DWXJrBzuf8xivPwrnKzmhBtsK43nAxHfzKaum7kBCJaSaSJGeJuJwNjmD2mU",
  "key4": "5QvtamGqw4dXvwZVMQSsXefybfVnQtqzLYmsF2GDCssJ4YzeRMAvSEAzGJbq48rPKZdaJ1d7r8CmhzefA8bnK5Re",
  "key5": "4civZiDxbnQwWJsqJjgJSLisZ6qcc99EPmNbBDG8F2WANjq1UBMx5noYNPFVi875tugMRLhFh7JQobkmPAZLy3Ju",
  "key6": "2r5P9U2Pk1goKHQtmGwD83mnLehRnuXYsuaBGVcnnYrCsB69qyDGkjhWHuigAciD48ukLu7HdHvUffH6A7vscb7c",
  "key7": "2MApwhqqH1eSsBagWxe2aj8hjvP7VmWT5xzEq8g4pw7MzAM4pA8sihyLhwKPFJqJvz6CSWp6oj6uqxK8zh4EBoAD",
  "key8": "41ZjcUyQtXfj9ANTcmeBGhyTEC5ofbL8qWckAXiVxUXxgxop28YdtLWdsmS7NS6658ZjWKZiHqUGdovALsJAmv9v",
  "key9": "2zm2zLu9spQiJfrH3F4wcQ6W4buyWnr9n48ZV4BHgmhpujoGox5bHCaX9jLAu7GUDYyxkk2Wh2CzUX7Z4FvSzH5q",
  "key10": "3HNfUPYnRZbGGJQwAArSSGjZJbGearTxzAow21Tgns1157dNakt4DNwjB76FUpNYfTrJYiYPz5V91LfrR46gELA7",
  "key11": "5mjLRyLDppxrAzTASHhJv9dTJtgkrKKB3KL5Sy4UFyUV5rU1YdB4P3mtiWAidxqazWVNgnXrXzjpEZDAYFfw3qkY",
  "key12": "2YJoVaoELLmAjWNzDUXMBBqskUGqLh7L76m6Vr3eHrdMq9YMQ6AVfZzHWaB7PVJE7s7nYj9dCFvLQeeufk3VnqTW",
  "key13": "48K7KeAC4G6umexq6G9iAnX94fdod6VxjR2PqkEqw8BqhQbHLeHMwfBzKbfezxrG6vCZo6VpfFy6k8mShUBGmwQA",
  "key14": "5945GsCqNsWfw1JUDEd3xwYWFQBrXb1j7jak9o5dq6ruEuNUcrb4fkqhL2MgeNYDvYEzP1DmFx4XpdPkm2NLQcF6",
  "key15": "5zRP7UDNSF3qhQfri69gxu7f68GStSjFAZ2sTaStG3eAvLps7G3HPqDK9zrug2Ep8yBEeRNjs6V45UwoQUQ1hFjW",
  "key16": "2nTV9i47dRBgDG4BtZFyfeLQxc11qKZAoCHxbCUP6Ars1NqVMfHET24aEMWwZZm8CXYfLZmJHgUgqTfW7FZYTbFg",
  "key17": "58QF2iXJdf7VfsNSmik43qkFSoGCZUTxnSPGUoY1aJ9z8QffkJTw9NfQ9cCJHBrSPUDuDNYm66sqfCrLxiSh5yT9",
  "key18": "2JTyCXuW2rmV9gXvrv3SKoDAUmdtuuS1aanCyD8AXbroz2ZVjJ8p9txn3yuUDVV4yi3tamh7K8E7RcVz3zT8TXzg",
  "key19": "2DNshNdZZfL5ckz6EzoWU9ZUCDFZSMPq5AUnona2shVKu91eGhPiYWGHzRNQYiBnaP9w9MvsPMVhAAvng9cgxEnK",
  "key20": "4qpLs6BDdFqtZHw83RMoj1Ak8cyhok1YeyzdE3gvhNtSGSHm1m5cbeKZYESoxTesHV7pA4KDdY5bJA2MSr1iQkpR",
  "key21": "52g9S3RdRPiaZdaWnh7DPrnUeeRGHbD4FZZmjfgEiDyCixNfA8EMgf145etAat7kJJQGXDtV1FXrJUnnr5PsjLac",
  "key22": "3jZ6Jvt6ixD4D3WyKTyYamESeLgJa5s3Xv34pquvskWpaKFqYEmN1NpF1P8emeALoqXtuqcT7NNoPuw41BB4RYJo",
  "key23": "4NXexTHWToqrQUJhTyyCud2t1J92aCxxGZRpCJPQApgDJCiLPDCavPtBq86f9vewVdpf3BBLLSvGQPQu4eC4bR7y",
  "key24": "2M6A6hFPxcx8s9bp6ndu65DnjswUvNZWwvUEmekUgBGmk6toRmqtSbGu6M5Ggm2Q9EtJmu2K6nMVP33omYquBaXm",
  "key25": "26uXSdTGMjYN4ZxEqihEYGQFwzBc2fogAtmcUX4AqxJ2RmiyX4i8pNNogNPq1aYpCUn4Q4xH2F3njMGz3DiK3Hy4",
  "key26": "3KisMfaUJ2S9rUJ6GMNJ9dGyEwyd6actKUdemQRQ5c3PLxuwMTWQZqYShpH9ejZTkLNs9u2yu88WXdSi96jSTfSp",
  "key27": "4YCssDp3ySu786n7cfNjTDeyyMfP4sCUoTEeJTmkS1bi1DdZQyHoNZTRyHtydchajnHK63kCpcYje93KFiuP8Zch",
  "key28": "4ceWpHngqezvYKmMQ7wVQBhEqe6K8MgxBui757q4PaD753DGRrDbZ8mT8LW32yYx3vEsy4KwwJ91Rfa9Vuqq8Mw7",
  "key29": "VrnT9n4wmhBAgJ9gp4GmZpQEoLBYv8dWVHvusNbDzpVMLZgkATeA3FzxRKzQTcXvRLNNfr8AhpRcUDkNRmPkDUd",
  "key30": "gFKQRGwNMZEaD5rCXDTLbGLy2TBK8o41qqnLVNb6YFQwRLkcry1DKpzww6HerodZSjYUvotAtbFtvLKw5KbWcwG",
  "key31": "jQjxPFQ85EmGQSfDGLBnBfURbRDXvNuW8J87p7XML7dAGFwBAw5FedbkGRayQ39Un1b9UgFD7ePwmqaa2y8Fad3",
  "key32": "49jEjYQoCo3c9o9mCzJ3gSh8DttwfTbpNDknxv8EAWLah4KFTLYkCf9LSWMjRRS17hRDkdvyY2iGvqvcs4U9nCgL",
  "key33": "5hDf8kTmmvpV35mq23YZ2zMxJ8aXfKT1KwZ3cp3EHbZCjh6gEg2Yh11vVZGuVn2txGWj4zVaBwJRB3KjYBh8eeP4",
  "key34": "5tNY94d5PthwCiiJJndTK8znTsWeteDFdcQVwoSPfDMgBCFSeMs61Gxeb43qKW1tGDoG8pW6tGf4ott3mcYjrPa5"
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
