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
    "5SVknhAHgjjBDYDUyiabH4bBLYNkrj2E56M9vB7Z9cYMcc94j5q5KtjcZvgKJExerPiYAp4aQRmA33pdoYGrgfUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzTd9YHKPwVertihvqfjkZZkCwrAbx3oJoRkDGUT1o4f8mxMZdDCgcPSeuRK3L13rbQ43HdR2uXoCwTLZpCykP4",
  "key1": "5WVaPqCbEPugybnaUkffchSx6vbbdodiRcYFLnX3yo6sk1LVAxWNYB9yNaYraBJHTDQTbaT5oL7CXZxP4sMgwMF",
  "key2": "Pi63M7x3XNb5jNNfYtfegXqUhcBr1gDkDqQxqLQhHsw71chuWhWWuyn4dNLQj7wdEcZiDDKMWuJXgyoFDuu4egx",
  "key3": "iV48E93oKUUuR3mj6BHCCeGi5qiUjqgAU9fB11vp3hE5Qz5pvU3iZFwzozHh1WEFYA7YxqBwJuGdNdCQzdnXX51",
  "key4": "3pB2nXhvHi1yy4M4uwhDxNr1zqD16yGRWC5RsNrXGiRe3obS4AVEmysStpYXaLu8Vb4xKMt9sNc9AZAAVg7MuXWq",
  "key5": "3ofJfPEwoP2XYoGuKGARLaFnFH64JdniZ2QiLDREaEEMCaEi3geT7Ufuj6YCgTs2wZk9yd2cWGMwGv5576fPKRJp",
  "key6": "5iN669KBH9ebSSaNMUSgWhkKCWyxjVjNKAWXEXAG2rvfUxwWf16K5TyYc7QdYDmbhViiHxPvRkNCA9KDU3FjyeHC",
  "key7": "3KjzkJeCc6QpKPzJY8SvFVJnUq4iPwgFYynFf3B2cTYgVrMzGzNeX8THCS46j57JFsdW1BZ5DEhBQMmwzENL9xoE",
  "key8": "6VURRyCxP2BndcFiQYV8DL9dwFVhgxVKM5jMztvERFqoKS2NgMaz3DZH3m6YUwTANVzAeERHcda5ySWe8XUAtYc",
  "key9": "61DEYg5kyPTe7ZCpc7ytiCBAjWcdSwWFyF43N1jGk1ASumueUVFtaizRANgvkP5fwidugdXuig2sqQYvWAVXYWzE",
  "key10": "3PRtSJNvNKS1aXTo6g9ggV5prncXdn4rDAsCCrkib8cFszLQmG8NcL6dezk3QtgpWrzCU9T8NFPG4fg3VJteDAYe",
  "key11": "3RVv1FmRt1YefM9CLmkKyusq59AVwyshJHNZ8Vmr8wCPa9V4vRHdjpESagHGsuCekfqiz1s12KGdA8yqwHsCBac9",
  "key12": "5ZscVRDoz9GPGb1ESts1FQj7bymxnyncE7k7mShVzJUXSXHeYeMVYQfb8tM9eoB8ib13ZYSrLrn3VKDxgbScNwwZ",
  "key13": "3DANdjYc79MdE5wKUPvvQGyRso7rWM2epVPDubToUFkQBC4C4gzxJwfitAyagTCAFDjiaw7ZLj3x855xptZuVoDF",
  "key14": "4M7V2joVbTmqgR1eU4eMK4RwbCrzYoNFPBS6cpGi1ULiQn2wU8cucXvJje96HhQ71jLKG1VjJWHJaD4kbA6WkuKn",
  "key15": "4gp22TAmqCXCkDiacXHCYi6dr7GzEpVTjRnJcRThBgKnciz5P4bbDQWfnsZqsxDMTSTmCbtB4KvCWYg1TYsgQ74m",
  "key16": "4T9gbhhxNEsqHYFjVN88Tqq5MDh8g3RPZQ6tAU7sv4FDLSG1c9NHBCx2yRPvEzr8biJPJBH3LZ6vv7iYoLmoE7YM",
  "key17": "3ewKFt5hcXoCPktugz4ys4Edro7EigRNkQzYBoPD48R39VLxXe1aEeDXwG9vy7ahrX7TNUAjutkzz8zU4TD6mwJb",
  "key18": "PAn1sgGvCgHBox5UPSdpxKPS391G2NQiPRKXxkeawYSwHEgrt1rFdBSpJFRYaWw8qowExHANUQ9ZdKSVrEXafJP",
  "key19": "4d5fJpYQQdSa1cZfKrtqGSRGZs8ru2VX5z9Fw7w62ny9ZYAdVoWAo7dmY56yGonykDfQopeqqbniD1Bdcjk4Aho6",
  "key20": "3Q8mkurJy5NBCVJWmuupsbbxo2RqVXo1aLYsMqicTgaKaoGLXrAm9odhsQEeNAmEgv7iLrGTivX8aCzTxPKdogWr",
  "key21": "3XvcMomQTECj56deWPjAu1EobhWPrLWcSSdAa2yy2RF3kzZ8KsNoHr3Hz8hryh654j53x4WPGYW3EJNEgrGGUnkF",
  "key22": "qgN3DGDEBTepjrUFVxA4XcR3rLwGEp9XyTHEuF6BGAMdDP9LYztU6NW7JBL7eYj8Urn5zzgXCqH71YqmQ8oEC2q",
  "key23": "QWXUXtER37iigSoYSi3eaVx9puL6LfuYbFXGmjWxsmSu93JkfSUo76gYXV8NhPSZYzGBcguTa7NNzJ5Rm1GJush",
  "key24": "2B9c3JdS1bsjh2hvtzUGpRNGSviZy488e1kimUMkRa3o2CnC4ozRBGfnHR9QLGNTH8kCeSG8KZ6QDxizXNEy7Evv",
  "key25": "3pLGUGGn3XU9fV77cRk6AWJstaqwnAU1DS8DG52P1TaNARnBNZmjR7WcfoezACvhw5YHnkXvbCradj3Wtf9rAhgb",
  "key26": "3xuwHKiMm7k9TAAJeEnNpU6tWcsachdLWX7XMJZ99hLjec58ipBSX9p185g5QCjfH8s5koExzQyaqkzTu3chWCDJ",
  "key27": "3CtdXw6izfsteCaPfDfTAzJPB9PyUQBf6WcnjJPYkLRwQjDvRMVg37ZJEo5aB1JSn6weAibwF1uD6v6dXnX2yNSv",
  "key28": "VR9yRDu9A5vXaJNwnpdTBGnp3rnegKm8ccM2SUP573zxtSU9sMgj3pZhjxoRhcA57racxSs2PEgAkxHtJWpotj6",
  "key29": "4HpKK8dqMKQbeK4nWgZ7bbCMdfNF4cp28TPoDft8juw14dmUFRqureVSV3dpWBtn6NEAccRHTyQ1c1qW4Cq776Kc",
  "key30": "2bAFDzoJ3KgJEiucu98VD5fhnK8ozZzL9JznsTPBPDscDCi5BbXPQ4TYHVC3KV4HPRuVYMd57miYKDXsd9Rn7sv2",
  "key31": "5Y4kqLRGRjgLnAx6UGWHxfdXvG8aDPHD9HDDzguvGo5295eHrJ4yTivuPGtoYPz882MdgSuriwAzfNY8KHcpxFg9",
  "key32": "4jrhuTrNUuqRNt6uwgCKQcYRFdZgjpacHizPJqhUJY2WGJTGavWpPqwHf6w9CTZMeiCZQFLuUi6cfGieScPrgsYB",
  "key33": "6525mxX116uSjnjFxofXN5DCCWJxjEo7BiVhXKDPfo2hXMCp1iRDSXAmLyhUST8g7HUGem4CW4Cwnndr6LEVDwbQ",
  "key34": "2LQMiiA2RRnfkFJr1E5Nk8mRTW6M6mwBbQdKXL7vPic8kAJM2KpPNxLTdDa5hbvT2jYaVdgDq9dN48tEnvPXNimm",
  "key35": "51TTAcD1P3gzr39d6iXdLEGbvbcRYytBKyeku4713tAZQkbhihGNRPbF3zEqvUn5K24y6e7uYdvpziVCStck8VP6",
  "key36": "5JDjo5XxbpHwi5LYuwY46VStt4nycBNKCmBLSmezcUSXtCAQ3KX6vrAMg6bCQWWvayvoLFNDcsdthvXfwjoC8Fxb",
  "key37": "5NhuQ2NTkxtxghUS3J7nRk9WpGxaLHk3ik9Mft1GzRaCWVNo9Dc6HsMetADk99wJbPjKcyJcVWwwG4yrg713nBWf",
  "key38": "4WBELEabnd2hk94dFu15PcGNYBmzyNdKFcNaMRTPJwSGuamF9ETtZNns1kSyitkuTW3jSaVjoE5GRrEdARZc19Qy",
  "key39": "2kc96whZoX4YCGb5hZ6tEnKDH6tdHU5gRzHnzDYMuziG5ZsXU2LKVwaVt8t8bBZ2ZvSgAK9qwyNL3HJpfXYkgSha",
  "key40": "2qKHQhYbQAebbaaJ6boyoDHC67rQ3xUvfkcsidCGrxdd8H9zznUdGEH11Y9Mmn3mS3VWrc51YG7yfoaZyu6A2bKD",
  "key41": "VTtJ2df4X9xPgwWxAF8MqSWXGQ7MpSpbEtxuur5N1mAKs2zi5Uwv8UNhfYaFVjh1kiTejTQZywdkvnF8HFNoLcv",
  "key42": "5Hb1N1DCh8KJVNDddSVz5c2fLUkpPFGCb13iViFEy2YnmpHSZkMMiD1WtYTuGPZENRwnMbNjreqmTwbjffE2cEz5",
  "key43": "41Fn8ZB5nndPmcdbg83Qkt3aUwJ6nvMQhhzRR9TPbMZkcWqRqDSRVSRamNrJjvahgefHdfzufZE3XGgCXxZ2VRk1",
  "key44": "4mWiYkNbjY6DvWB3At4iG7djdmqbyAggYDDimPdjFzoWCeWwqbo6cErdnjgKYRnxpHpjaRESwtYTgXXD9pxvPwjY"
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
