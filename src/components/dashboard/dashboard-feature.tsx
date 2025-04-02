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
    "Edr1eaM79mVRi63PRxoCRjRqHDUyn8RmN36iXFBuRuDJ15nJe8CtZqoLnwVxBvCNpK8yRJiD3rv178UQs3uaJr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nyQienS578ozZfo1zJitjY8MAAg73ESR7QVvh3b8NBBZoBdmAFi8hPfvnwUCxAMDf4uhLQUBBYx9gpJG7pGbm8",
  "key1": "erspqRq7YbzLF6phLFAXukse8LKW9yim189XNzNrtZcurgCCPigVhgbbDtaBGyA5VcU68Wtr255s72Ak8JZAVZL",
  "key2": "653HAb8PvoGxqWiWt9CbmwexQEKnikNrymkBxenmCN9gYsskSf16SvPJYnN74tNfekC2Z14HRUxxFuFoWW5CUW7L",
  "key3": "2Q58Gcg3mgZeY93WYTMdedxUmficsrU29KisPfTrdqTnhxgcbXKk7J8ABde7UF6Tasrxhd7i7Wuf5DxW2hdqTis7",
  "key4": "67GBjpLJrV3fgGViKPEj6sNN5MgRR4HHEDoF1N9vyzYkYpdmwFY9X1C7627pK4tGdYR4hDGFcC4yWFMemcrZcmjG",
  "key5": "3JcdBS6isnFRL7wTMUK7eEgQWwKi7bDumdTWAFpqZjDnGAyTumprDbomjsxQ36pMarf4BDoZLrCWeW8qGwymmi35",
  "key6": "5Hya67fbkjusvT7BCLPgdXBNsaqMi5LdXuWx5Ktxhr8McqACtinmqmFyUAkxaXxwubSCxZhii6mnCRrU8ojJX71f",
  "key7": "17hbr2vgUxi9tBaTqdtW9VyeNzTDHE1YZb4qdrMGTKAALwVwdWi5a4HTdZN8wvi2714cNBuegYepu6JF78fEpK4",
  "key8": "4ZnFiuTwAqfCRbA7ZkMmFUXyMRXpptagpZbLuyNpL5XzZxfTLbjDEwVhDHLjEKYEHdfHeBDFjT3ZeyRQfevx4BXm",
  "key9": "xoi2KkoiZH9rEMSEuGiL3U9TCkfhvQ3JKf25go2PCWQAMdWMQoBj7tAb3V3ahtqpPchBPgDsRY3MQQ4qYaH3mAA",
  "key10": "4KM1m3WGdgfgs2EBgiqo8JeYR9m9eYyQqutT6CsoyTqDMoeUxHqnQKFmfPAgNZRFpP4eXohyqC5t6NN1B5ZzKD97",
  "key11": "5tkGVY9bCXqE5PF5XJrq7H5H8w45vTaL98t4kqPrjVwHfbN6MFL9EiB3W469t6nRaxssymJL1dTHJbFYB395P5UL",
  "key12": "kJxajVKa1fekTAL4FKKUD3eCGQHJvDLC17UapZm1vHt5HjM51CfjYCrQqKHfD1B6Y4QsKjGhxW1EMbLkw6Vn4qu",
  "key13": "XoeWsCSpJpPRXnU7M5xUooeaQneG3uNqj2AtKQCsQH5FsW2f7t4GB2MyN7vFjxsAPMUojhD9MHi6QvqVomzVbiN",
  "key14": "3TtNEgGELy4ECwwtspPaoNCyos9H2LVTLpuP6agoHUgEGc2xi3btZdKgt8fNaNUViRUuNWtqLzAQ3LukHWSuM4DD",
  "key15": "B1fL4mpZrbpwqNugKxs2H8ZyscA78CbvmnxRvxdmiomxQx23aX3Jt4M9oYCSsREibdEudzrBtXx42gqLUyitcHY",
  "key16": "4fdbY2Vnmiq9tfB5HadCyCpmZVfZ9s47jmWt4M1PYxtqc5uQWdrQmWf8iMhFZnxK5Lmcio3p3Y2zCBGr5Awb6GFH",
  "key17": "3QeJykZrBn9Z76q8onoXSTJG1wzDjKBeLW7P3xnBvmGBH5FFZmtgMiitspXvmVwtiVnVuvxwsiuhtyYyTc2bdfQu",
  "key18": "3p2iDi3UbE67EznWF8aeX2oHtBJf39nX4UYexNbjryxsGMPbe2JRJzra7N2axutJBNo1U9cZsLtcjevv1Nmuqnb3",
  "key19": "2SJk25pGejCVXvEqJq31eyuTQYwJ5CpwKKmMneqCeans7zi4tPzwvjFVWUopfbw1aojnzGBvsShLpSVeaW9cNG2h",
  "key20": "3ukfdPu8iZbAWZs9DbKGLLJfoCkWDdoJMvRDMgDFKHJ18BCQ7if1CMfR1rWYnU6do8BwMmfy58kcdvVP3PjHcmqe",
  "key21": "5ncFywiZE5bVza8E53TgZYQMU89UmVyFdDSHHcYNVoAjZjjj2EvJsAgLBr5vg1A8BvczMXzyuFXNT4s3zaZezS4K",
  "key22": "2R7qQT8Jr6iLeZMHJdJKG799hQFdhrRwkT4eJnXXN7W1Fe3h7f4QYbUTCMJm2aB12guQ59p8rXfRhuL3hQ7oQnxj",
  "key23": "J5YBZHsoaBfecJpWoCU1ibUpyr7en6WnNNs38iVk5VxGQtN58HGBagEmddBrZj9x5CZYSSYhXBMZVdQKZmGG4g5",
  "key24": "28LMS1mJME7YZwj6kfEB4X8277gXoyQyamQNpbu8H4QxkjuPg1EqajB4zjUQh35UuYJSCp3t2pmzLVPtPavG3VFE",
  "key25": "3KYpkS5jMMtj9GSVTbh6u2ozBKKJ5GQZpLncnst44khQeTzbJuxmhfWo4sr6UaiMWsAoMJ9sSsTLbzgqoW2oMUET",
  "key26": "42841rcwSC41yd8EHpynL1MKsJEhpPteM4eNpM1yNXyg4Rk4XNWjzY4bUVXPtxwfYGPCLJpeyVqvXN7AvWRgxXkb",
  "key27": "22VhW87zYTVFJXJ5AU2iEy7raY8uwnt9UCYgn3rHRUw2FVrjrb3TiM3aDGfr2osS49A1Hj3RXjKtzTgAapc5hjKh",
  "key28": "vaJNjpDZq5GESNQUGzZvA7RCovuo6jSfTBpBxk9daxZ48JTjnXd1LuZif7p9sG7ZzM7vxuSqSGhPD5JgSs9vS5G",
  "key29": "5QkKgeknJjLUhyARETNd62TMo2ytvG2FWctWQ1dn7JtJP5t25Jxb5xEizK3pKeoT2oQvvoDQp4wwvUgfj6n1UmbX",
  "key30": "6zgfHkXChafGeAtbz1zUVkybdzWK8xqsXEhPKsn5ZmGDuyr7R57aR9wMcwwW5mr44pcWatBxKszstPXQPsnb2t5",
  "key31": "3CcsQNLYdCnfgq15dm8V31u77FJv688V78VTWfA7hjKN72GadodRWAnfFptZDkmr7VeK4cygzqLRZ1MSJPF3cNvu",
  "key32": "5DWATaHH4yRsa9hJGt1hjLvxCVzcEaUqVPLHLpA7gn6aX5vULXrUX2uGs4Q8qaYL2asRf2apSBmd9N1vjo5ffxMu",
  "key33": "3WiU8FPeHac3mcVyghUxPczMdQhDFByRkjzEFzHy7yE3XAqMBLd8C6CZHi5w4WpwujPtpaZhPYm8qzEHfoivDFNN",
  "key34": "3K4iuiro2ae3FbpTEg1ebv1iH4w5H6FXd8M9h1UUS3pEmZ82t5Y6qUw5hqpqgJ6ra9VsWCfSgi8AVEhvrvJAm2sg",
  "key35": "47Z7JiuRgnPUWSCxx7H133qJ2drCozTCjq77Xc2NMcncr3rLkBPxDaXZ4q9AAtzHmHXDHfFVFxUb6EeewMdojWmV",
  "key36": "3JaxGnzUJ5Q1AoatTKwFouiepSx5XGMzuMt8Bj6s1MfEVi1Zy6WVfifi9Y2bdMhTT2LWfvCesjTFxHkxmzDKUmG4",
  "key37": "2NZULBdq8f1xAaKZDv22Npjd2qFu6xGypmuJ2gc9UZ8cdmMVbCNzfijPkeJmMbjdA7MNNybBWsWUtRpCCSjsjTBn",
  "key38": "4LQg6WnjwCpPtCrw5E4stmNHXu7hD68FLDiYPPkfrvG1EivjSUMC9m4jvFLqxAdoBB47Fi2UyhEeEt5sE2QC1swM",
  "key39": "5aBqyTbXbBPmrZjfJMYqzpsFvp2dC1Ms7M6UFVAwQ2HF6o8qPAGaS9HG8uN1U1wq4nFESEvjXwSDc5HV1bAzsMe8",
  "key40": "3YHTS9ShZ9HKyufvv8ajfvk6eJcnXd9RvdhqcParSquWEn33Vjp1tsTts7yETGFyoUUuLz2ZAtnHENBjbMUBAJ7n"
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
