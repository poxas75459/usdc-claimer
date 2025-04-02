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
    "3MDJRDUBdNWDvaupNK4KxFK8ENqf4Tq9EKduaUK9ykTtXejGUn5YQcBUKp6NqmFFotzG84bseQf5TK1SbeU5vDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPEJKSrepMj3Jbg9SqC9os98ACZhvFP21rAakY5tn1quZk8EXTEvjnUcQJuYZYWsi27qGCAmyYXcsmdynAqjHTP",
  "key1": "2QH6qrswiCJyQccf4UAuir77vM5yP4j1oWdTDvbx5wkeF29h8cR5mXu7c9Z68oUfG83W7NLhMtahghkD4iJPYmdT",
  "key2": "53QD4kb1ipsoDxN6cAeCwLz9McqATMSsAe4QcAbPZhChBJkWUSqq6ZbtHd5z1aA1DeS8FmfwDi4ZikvDfpXsmCML",
  "key3": "5hSP6vYBYmAMDnbvTRvdfUA3Gp7yZKVKVtXRr9uUARy7AQgTNmNtbkEoE6Qs3Enm4d8AnyEwsvuk83C4RygUWVDL",
  "key4": "5GC2TbtgDKQxRv8C23NYvJBMM7gmB2JpaWi37K58mxzXLeE9Nrp91jkTmuzgMSdkC3wEk4NbPEbGoNsH8Sjfyd1X",
  "key5": "5T58isWje7a54P9VtdzRNsEroJNuHapRquGAt8bfnQHJHnvg63dbxwN51z2gYQAu2mtMvTvStkbkNLzV6mUxTiLx",
  "key6": "MKJygZ2av1Qmd2GSoG65WHX7akhUKxetiWr9Z3FwBg7b2Eci686xq3JXkzwVVMmQgQULzzthctkVg2uu8uqTMue",
  "key7": "5HuA6uUKFveqS7aNYvd7sARQoBvpXjKtkF45jW6F9MG2B7wzUTB8V9FwFVFKnRtNsUbcNB2GrXBDMSAEKZegha6q",
  "key8": "5B9FzKooyEYuZKpQxSioxME59Nxo7hkKYZkPYDgeXCE9AzP5CwMpCrcL4KfzQRUmjG5xhVoepxmNZkvvgQNzL2rv",
  "key9": "3Vfsbb5T6CCipdtPKVKSqfcEpVbeLgDkBJ1k624zUQuatQgyTzhfAjyuXMXAzSNjxqWtniHutwmqUrp2LxYMWwz5",
  "key10": "2p9ach1LwcDWo2MVTBFAdWSXbA9ttHfjBHhUqXDvZrSQKPAiGNgB8jHqLU1X7Fb9Dzgu6gf8N9JLeE3VhN4qubkg",
  "key11": "3SD1aDg9bxBifsocRkvJ7FQkcYZdER6CFozcWvaG5KtfCXTaJCaXCCzHvhUjeWCEmGqtu6SYg8jmbcZ34y4493ax",
  "key12": "5RrbeiM6xyzSpXcg8MyDWBdUvgai7Q3anHDNhpNtgYrrYoP7nM5UPLa3V7M6KmkhhFb7hFtRthCbBCbG4Bv9ExuM",
  "key13": "3amXaMbGvYj1PjGwWksnhC6nqLbH6L2CadP1Y4rJcQRYhU3uRsYz5PJjURXEbcMddMHoYkh6W2LBSt4omZQWPSUV",
  "key14": "5S1gHPZrAa3GBD7wJEcVymR8AokoRvj6b9HtV2LJCVHgpxaMpFB4unz5yBVrqj351SFpynJLxr3Fcfvd99kSHTgi",
  "key15": "2w3LereJwrYdGGcVnBhmWYEHfh6DDGNDGwZ8ErN18E2MeQXYMN6DVtGNBjPR8tYGnPqSWDvx22zW4v5xnajH96Hg",
  "key16": "54aJEGrV4rztGkKsrXMVo86Ho6ZuqxVJp9XH3Pmc9Nubh7PbfkL9yJatqCyVe1rQ51PwhHPKD26jkPy8pEzMj85R",
  "key17": "2yF44ep4z9ianjSjFDBFDDPLti5orx6CBAf8jMquCcLYvWAnjmSZJiXUVPHpaCzaSBJ7SBxELZDcRvrQ2yGaRhnd",
  "key18": "33tRrZzUuc4e26rVXdBz5GnGGLHJtKjxdquNvWUyyGzfL1mHrk7Vgy12c3ek6fs4KDsobqMHAMziPv15rzyHvZH7",
  "key19": "3okMMGAK8buXNUUSwiNGxiPqNfeWeGoc4qEbniWfAKFnvXdDkK7AS4WJDiuYXuezVWRCtDfdFNvoMXThEyX9dt19",
  "key20": "3JVzTxUYM7yrDjJ9fKxg3yr7Xoh6GGYLwPv1MgkEpNV5UeaEi5t2nqfun5W4BjhsxesGNXBc4xy2pfso49RS868j",
  "key21": "Ttuvm5nFwftEqhY7rJbup1VBLJkRaAvPFxhiFMfvy1fyHLy5xYSzPGhMf6v4hjua6zLTYH1wnXqRxrbC2eZwTAF",
  "key22": "641FQwuJQdtTVFLAKNhVANR29FzkndeBRNg22YW7DQQ4bbGGoBeh3dC43mUE5CoQ2x1duFV93gAKMzPP6H4cgHmH",
  "key23": "i6NmRKFe53efpKvt3zJUsFDZm4AXRQehjKGRXKoB9q8u2Kze62HKSRhNvBN1YQdhXeAWMDwxaLvFKPkXc6nuZHU",
  "key24": "5TDjeMJNoh4GyMoorNB7ZfLXhzND5KD5jscRJbqGAQLL7PMYLxRwSHXLJdAQEuqZjrLTHd6r9UuMzSHgGaAhBBGe",
  "key25": "5GmEkZu44JrnEVUqxqK6jXRca9TBUDd2tZizQND8AjPLk1LsxktcmQjC19DrTHny4MPfiqHhaxopydMz1baYFSEe",
  "key26": "4XBjoCRsLUcaXUJMxuDEq8sk4dN3tAQqfUGbPuhSUZjvu27n3Sa9KyqwvmeTVsaFmqacGEopPd2G1biNx93DeLdD"
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
