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
    "4W8EtpjzwbmDq3FAgqqqfi2fgVzA2wyNmkLdTzPZzZVLiHPkVoBmE762vgcHUCiLRhXC8gWmp8B8mTPcMviTFWJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhdCVkRvA8JJ4iJtvGcjz1FsKMQwamfhnj9R8xebZ1zXFXFbor25pk4BNMcM8Bhs5iKFQgzLWCBixaWaVwy9QAu",
  "key1": "3Xcv9RcLebvueUmT5v2ZsCYqvAuqa7rCTUPaeHwDw6yca8uh31p8GewdAagUyd1oYSHvUuMTq5JvSzkQvg4sbPzU",
  "key2": "25HdDyFUj3DgzCyKTk4FiwLLC57LcKsMbsw85Nn24HqYmJBJsiAYxs6piuLsH5T5CETH25tJ6tj7GebH9i9zo71f",
  "key3": "Da7UKaCZrJc228m3j2rKxsPynGkKP6P5KQtRWDAgckVowkK5ZMXrFSiW4em2da9nqJojdBZvayVoVRFQLgjdz7i",
  "key4": "t4rLU17vdfL6wRvDbThweP9mKa7sP1WRMzkzhJP6dW5y6yjvLxZkxNEXV1QkHEexMLzFD84EtsbJECarMekpnM1",
  "key5": "2JZzbfd8rrK4RZLqZMps6yj72gfQYttyDr3xqTzsREoMf7GuA8LZ9ZC58S3i5c9NwbzFq46oSDgYwCSCnGay8xT4",
  "key6": "2hjcGHgh5Jfe1SWHRzfB3Jm6QtGUTV15RNuadAKmrgCMQcqBtVLokXBQQx8euF8Ygjy3mEdYTD9fDZSPyE8mKp3C",
  "key7": "5jfkRSGHDi8BBzUFEAmUTeyzmdB2B3bnPfv6Lt8m4nEtJM7HVLtjtzW9NVVeCQUNHJmqbeUwWUFTSgbhTxMEpa8r",
  "key8": "5HtY9y5N3kdCK9BZnXqHaAXn8n7ntqv1WXfc4gntQiy7REhBnZx1nnpK6kF9SnD3BugJrm9w3XYSLd17wJc3fsbm",
  "key9": "2m3nKZxqgnY1Jb8hZc7z5Rv6yHdxhTXThqqXsfGp9xbBfcaFAz6jB6GLcawo1BCDNAaEDY9oKHKw8LEVJNbX9vHr",
  "key10": "5U7A17yP7wxGu5bZmm8wJ6tYB7we7PC8jbadSh8WQnXFRHBrgZ1teUqXwinCwp8Sd1GtvwFYCjtALA6tz5kDZx2f",
  "key11": "3FuvZF8nU4qy5oq7nRomj4823Yz1i1WNexgMqgXm1sQJhZXRaUBQX5wuvKEYzd2YhVeLKcSFZjZHzCEq8JnuDq8L",
  "key12": "5bRu4Qy7rgdrbdkSWWCe3vABtrwyLo9NTQpTPsnm4pLeEyffbUVRQ5Pu8gvpaE2xpXaSvth51QBMqagc16TSzxbY",
  "key13": "4JJGpEmfRCEu916YEW26REih6Sw39nJfRA1RbefZyfpBt6vvAtkVkRJ2m18HcECkrNThmwT9wkGEDTxc3BpbHTmU",
  "key14": "vRN3g4q6d3FyMbfpHtuYi8vV9egyeSHKkH65J7uxBQDoXM5Bw3czGcAatjhBtTED5jgZ6KsFZt4eo4n2qWDZgtv",
  "key15": "26KxaUjvN2aGrkUUE7PrCE4HEGeUfZR5cTSLG73MSCV8EiieJNSQ8sANZi7HgMDgfUneWTrhhAEWfZvEngKpQzVK",
  "key16": "3LrqDp4YhqARVdpDXu1PNEK3quuZ9TFUAyvMosHWCESoEwMLXaMv8FrCo4BxoHK7V9bjN5X4Md1jhApjYWAkz9gr",
  "key17": "5UyATMDyiKTUS34edD3TLGd1Dj9jV2wZJNHpTzpAYjRrojmg6t5vf3CPChBHrPsXVr16UDP44NXvLwusQsts3X9E",
  "key18": "2zuh8iGdYJBRJXqqBaGiDYq5BBQuKNL614VvJp8Pzn9wtAbB77XGA3PGs52DpC6kfvp9C4L4syY6Jorx1W94V4wp",
  "key19": "5erLqPdTLRWvPfYDG1ABxA8cZqHaH8UffESuxy3VqEo8nNzLbndAX5x1awRubyNBJ3vLkcZ3bU6DjNAH5Tud9grR",
  "key20": "2ANdZsnGb4Hr8hkHUXzrc69rpJ48RQX8LaMBS5DB7goQFWZY6edJpcB92una41hT7c9Uj4CznsTS1uWs7wRoY5H5",
  "key21": "5p4G7xk6UnUK5urHrsoXiW5X8xbYq9jjPbXVVHHXuZiW776ZncyfFCCRaDBF8yYnkRbZY4o7FvoNvSN9Nc2vh9mF",
  "key22": "5Yedg14yjZw1H5WV8xwUXfSTZZdP3YNtUvA4fJ9A1FeFhraLyvQ5rpG5ubvSTEPiDeS7XQJWyHc16gLvu4Hn7zE5",
  "key23": "4PSx5i5bn9GYgw8waPv7AW92e29WEtFKmhiv1f1mtnLJKm2SSKHu3fsT3PHbQVaM1NejAEUnDfydqQUXZEB4CdwW",
  "key24": "PNHv1mAr1NA2Y5ZVJwps48cnNyt9QpVij1MvRNnup2c576M8mMz2FCck8n1znF9kT5ngVHoPzxhm3F3hu9xgG3a",
  "key25": "4zdXqyeeqH9jXi3qLHT5twyHfWAaybZEizrjv1FZNdPG1mX2pFGb4wpGhGJaaogMRoK3UWc1LAWoDJHjNrgdtn3k",
  "key26": "53RtWfcee1PSwZMMpP2yMZH11Fiw1Wo55Xrckh5LnmvoRHHzCUrYQRRNXpUGSH3q84dzovmp822mUfLtGCTAWgB9",
  "key27": "2HeTLAYJNJCP2NfKf9sETyY4hmfe9JGfvndq94wUb5Szs5CVo4oB28YzLS6wPQkUmuvEJY88s5mtDdHn4DUdELWT",
  "key28": "4ws1yWrGvkXkGeXRsQKH6tqXdXs5hVWJEAxWqJyz3zyJdqxxRhuSTPpHA7ewUtbT3c1tVxqCydxZvHvpuezxQqh2"
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
