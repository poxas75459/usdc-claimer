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
    "2vyWrvSvooKG6Gt4d2YL3tmN4HFacMFSPG5sLdXvunqxsCnMEu5xTBPj7WnYreo7dbuevme77c2K1aTx6qQvdD86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkGfjyz2xaMDsN6VH23MAB96fg2Fu2BUwUA9eyxMAaYnszVNzecZu469X9mFz9FZnqwYkAm4GNz6jBSU23JMmi1",
  "key1": "3dGV2rq7QLp8ueoCfXFP2Q3wNgtMHQjzr3AU8qLf3eZUWRq4xivwgzmVxGciG7q5stEW5Ti4jmUmiRdS3QJdup8j",
  "key2": "51hFdcRyhGbcHBRwgizp1qmcWrCDeWwvT5rsikSscYAgtGRayt15ZkDVsqiKzEw8iKX3izXXVrAk9R3N2eycfYd2",
  "key3": "28Zr8zBdqrVs1V9daKJDp7eP7ygkrzaQkEqDajA92GDcDT93mwf76oeuCx3otudtjmqtMiqxMa5q3nrkysij7RhS",
  "key4": "5ZewsxHcp6EY11zGkSBXJwLxBtu8aJKJtBFxT8dss2e99VsZ4VXdHcH8BSprBwtGKUukEeQxHuxayc1MUxnThmgY",
  "key5": "5icHfFQ1uuRt7ShjJpYL2jnKToxVL8oypE3pKsLYcXeRbZ4mgfvBn3eY89iESi7F56uuweeEpCJyiNKwXrCjW3kj",
  "key6": "3N1NvXdat8E7BFEwjiEdXAUvpGB7q4Du8zxBxeiVzBeu76gbpdFtWC4Qi12y8is9uFNYVfXp2f1ofXRYkUQd7oeA",
  "key7": "4w51AU6sxYFqXE31koinvtFY4TYjmwECxAxeWoM8CMZhR1VXFpsWdb4dMWKMH88LAHsA7AkaELb8rh9VkrGc7JLo",
  "key8": "4DWBsBt6HpM7DWb4S3rH7Qi7qwm8KuUCrSGpCJCtNtbQTqpCU5qykX2tWhNKHuNp88Kk7LeG3aSbrgtrzr3EDttc",
  "key9": "PLdB9pnQzay9f8ASnzPyAKgJGPhkNBqkvtnuW6kqQjWuHxobFgEkKNJ2K2LAnUxMuNB7wr3TzvWQeHuuafJUgYn",
  "key10": "5G4qUEhGfm9XGNAsx8B4A4Q1oxe2nSc3HF4C4KzJEG8rW26NWwC4ihQ5X2vBbWYqLotJbs8wFZmce6QpsXYNrV9S",
  "key11": "4JQd6UuzM9QzsK7xscGAVnVC7VYLHVq5V6xYzgmcWmFVk7G1zR1jxxTp5ADH3VgZ8CyCcaqztTMZKqMqKUQixFg6",
  "key12": "4e9kMzcWoZjUJunBYZBdFMbi5SJ1nosogfXjjjzE11Ts3mmnZfUDZFE5i2RmFjFeuJMBQUaVVUyG5Cn4d7VXAn5K",
  "key13": "5VxQnpAegBFPWayravJtbUk1U1PsBS5RWz4VKE72TLJVrwHyjhmfncEDvLYBsDtQB9URqa4cgcxZdJ9yx7msw52d",
  "key14": "iCLoHCPrJQdM8rfh9fedtyqfHTPBJvV5PT79XzRxqUug44ECRo1xAK4RaxzK8YAAdyUyLtLGqjMLbQ9y9n6kVh2",
  "key15": "66Z3NxLrdyUdtewE4Ryt7yMFnF9xrRo9kHuMprLCFJq4SyvGbZ5c9KD1TLAPtxjxVozQXe11sQ9nhihJQdNByLbz",
  "key16": "26VvbkiubX9aSdAzpJ98avRQrHxTmRkYdC3QE19RCW7TSqHfSX6XRbYsQv3JVwBmqxzMajF3CePC7mq35oExwChc",
  "key17": "4o8di7RWqgciFuoekhBx7dTEhB7ihvjGpUUAXPfiyARpLZEJAYVkpApBCRwEyfYVhRBEskF55ZjL8sYwDPzRSP7r",
  "key18": "2FbhnG9nKZurwQLP6R9sSaBTQmHzHY6wY25kimWuFf1Y8TxHUB1raTj6umC4UgkRNZM7w8oYgPV9gCfPUbGnmtMV",
  "key19": "5iouRLM6AFde8PVonYsnDQgCkk662WUNY6uj728djrryeJguUfCTt7ER5tZUAiYLKcNxbjdBjikvdgPWmYd6H6nR",
  "key20": "56vm58AxJ66jU7qwncfv4978fqSATzLekwyL9DmEDoyiZRFczfvPGQcbzPAb5xLkie4noEMR8wENYp9UoPcCS3Ff",
  "key21": "feK6emYz5EvgBJLJa2s8Ltdrojj1po2jxExvkuwhataTJ1Q9Vrb23nVfhTMHwGZNDjyQ8k7AL6fFyniSDp7ogHN",
  "key22": "3jvfpMRSkV2qgCt3bvyfGLs1LQdmmhCrSsgs6eP6Vf6MexSvZk5baD2i4jDcGoKCUTL5jLAJudmQQp55SBAbWh6W",
  "key23": "BtbjhY2FkQag71127AtvPeFERFB3WXS9xr3Zq7Ug9DzxJt9VMr69PAzcQ2RDkv4UGMdMasWui7myKKj3ajwf5Dm",
  "key24": "QsAUXz7BRTaZo96ug6fJFEcg9nv9ZqZqr2urGnG85t4KMJpccsErnraUwForwuYgeZ1JDUQCcHwYcwBpYhQzpka",
  "key25": "4v3BJDf4xW1MoEd7wZQghN1XuVuZjR8NCqWnUegSiUJ5cCCNbgq6nYKqAY2AHUNpZKHkd7z6FEpSrdKy8UJcau2c",
  "key26": "41pskxs7Da4pzx6Eh9jh5xmrDYHUasKaZdrQYjzqNdRgFUNa3pSnks1cgemtMLVFJv7KJj7xuPkpBpuL4uczTAFQ",
  "key27": "2eYa3xiv11GFTnfgCRam4LZSMocCZthpJV4TP2VL9dPBcNFfC9ucv3eSMbP4CxKLB7R8XBYttwkE7bn2tdVErxvm",
  "key28": "2mRbZ21y1E2WcdSYP4NARRGVBq1p1M8LcPj61x5LbA8edEsdNeCq5ZMAVYixtgnuJExpBeJU9EHw5wzxS8wHXG8s",
  "key29": "3Yv48bhmdkvkee9DMASFHEXjYwPg5e23S5DVwKspZPt61zW3S6P2TZ6wyEq5o6cF8NWzjygTU6ZPJnVomf5yUDwP",
  "key30": "xuTBxxVykDXQsZTSWNg9HZe627ekbBAi8j3jjxhQ1BXhmmcjUQkqAgumyJ1HnxQpX8VwBJWPHfthd54VggqEV43",
  "key31": "61Umox25NyuYc1KY7N9McQrwbymvkz3sRXmayRPNDrcK6Gg4qKb9TQXfoCgJ6xJCtoaKdqenexmbCHjcSmVZRnRo",
  "key32": "48xBjw2KKnqPLgcNaLuYJYErdfhF82epCXCuEG19xVEeSUS6Qy8LM8CcmVu52KdTJaUF7E68R5ueoPS9beNCHgLz",
  "key33": "4TxJrfu2j4nE6Koq1jXTEqxzMspzUxxXD1wtqn77D1kBxJhnCLW1Lpv6w1sVEaJBPQ95dZ7vZ8xVjAt8RWebQi3d",
  "key34": "ZwmeaTHCvZtTXNAZqE1PF2hsEf9HyoYW8Av7LyD9etnqMxhNXAQ5fQ9mKyYeS4dfZwje3xAgN9XZepyabG9A8zm",
  "key35": "zT2wotrW7vUwjyiGhh5qqjinDbRzHMaAC7qkyVw4FE4FQsHzSHj9be1GoMJoSSdiLwkM5QTb2T6k9tAee4cfPsY",
  "key36": "32fF6n1FSb7QvKCMzfBG4swcr6rYLZhzBz3nbyGdbBq46c74dFVbu8dgajmQ96Bxtqr7VbrFZ3caNRwC8UV9WZ1C",
  "key37": "5jhdqfXzjQ6iZZVo7iUYBGWoh2SWajrAVAVJb5USj55p9FUwXL6PvdvZspKBD7nchUKb9CwQaNHh54SgAtmxL2d7",
  "key38": "2krhprd8RoEDMm2XZq83rNRQGvceetptqebpnsXE7F3GCFf5x1AZbHa3E6kY8ARFijzVeoSX1Hq2UcLTtgCwPJ2X",
  "key39": "bLjeifYm4jR8hBdGHFdVZgvs4D3z5dRf82vUiugTnRxmAYpqK2YbKxe63EQmqKc7wcaJQsUnD3Aq8YhVN2epHCu",
  "key40": "yB5MxUXYixuSZXn115MwTKVeDgP7LNqPjJ9V5PhvYKz9LoUsH1BhoxrhhQM6vzaymoWgmZAKftNA1eStrmvdRJq",
  "key41": "5y7A7FYHZHPPKgk21jniLFvc1y7ThzSACtEWtudVnynm3Hr91hmScemWgQGxHee4pQDnyuJfTuXj827LWoXWG5vW",
  "key42": "4Ecox1JMGVg9wqxfzakUnw8orPF28HoAAWdtqRRR84nT7RVMtsq1cDQ2Y6QCucNLQwCoPXkDLyA3zuDA7wnzbeAy",
  "key43": "4F8bUAFuTeCBCZxuH7tiaQhrcfXLjq8yc6xx1EszQEkUxqV8Z5c5KMQhppD7QEwWwq7NgRhRkgEnsU8Muw7APywV",
  "key44": "4KiWaEmg5Gwx73MY62HGi5LTryonWm4uNXT6RE43xfjQJYynZhq8PmcMnBtsWJMTVt7mKdGLZRtLPaCs2piHNJix",
  "key45": "2ZosEv4ArGe6E3LZmsGmFzbJxCPfh4HkNMaNqYDG8JP3xGk8H7XyWfegoXW9SitRR5nbxkmCdvFQFuseL6JahwLB",
  "key46": "3CxaJ9abg7bB4DZibz11FSSeMCf1JFBhypkJtWMW5SY6rt5NtGNyMDJNJWb8nz3TWPoQQtBVu2UY9Jz8T35zB3Bh",
  "key47": "21kqGtKdg7pJUNdX4RC6zY2yGk6fymuJ8LVRptQyFbdEMVQwsFF9LvQteS4b1wrD3E7GHhsLepN9J5CkV994J3Hi",
  "key48": "2kfe7GjR9oxAvm267mFEoqydniyVUtTPaxb8yjivxRgW6LYzi1QhQ69PMT2Li6gFrHohAF9onxvoswougENeUC7P"
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
