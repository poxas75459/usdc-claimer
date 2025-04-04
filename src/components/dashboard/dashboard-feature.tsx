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
    "3ct9NhB1FsQhMRmgKL9jmPexhS6oj6EZ56cApJAciq5mvhUmH9r9fFMWA6RCyVbNLnak9nebbT8oLax8SEoRrShN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inAu6EtJn1Sb4oPSESi3CAuyhLBuPm97cbetpA6kJppVByBMRA7b33ZVtzFxpWHEu3RCVc3kWNd1qF8LeUjWSEL",
  "key1": "66jSDttsc3H8YKpM2vMggrKp1whi1Lze2WBFyyZF63hwpfZ8x1Houaumfwycoznoa8Q2qcBo5Q9aoD76ynQrSkpe",
  "key2": "2eGqqkNdZJrsoJ4zubNdU9DHvmhoCYrRqcUG7NjnTjk22z6r7taHFKH4LyoN1y8NfTbKWCPwkAX5JvpGgz5r7vzW",
  "key3": "3uQBY3TrgHhfJ6j4iYVYQQ79sRBrUarguF6bEVuvUZUFQKsxZXQQndYJ2BZDVMWMbevRNwTFoaQ12grz3dbUbWRU",
  "key4": "21s65qK7htqZ4ZVQrRExoADPqfK1uaG3aHeCz4s4WsHro4ZSXRhM3QzWgWS4iuz7XePgEdF9pW1Eppn3uzW65Uq2",
  "key5": "KTGsnrRkF8bcciP52wG5MicKnqbZpxhD35vidQzxvpcdCgSH2ADhWYZnYARmcR4ZDxsuEfvrFt5kcCYMLii5fpT",
  "key6": "TegqNAJno7gBuXTUK7kVynSThfKdYXntHQjaPqjHcaabtdk2t5HXzANzhrEr6Et1bCPBKtJnQ6TosCHqdsUW1ox",
  "key7": "46khQDQmQoVqRvwkNxyK4vJCwQmro3VZpzK3ZtNgfmM1bwDDYUBNDfG4SkdmExUV8jB1Wa5mBLoBUCR9mfJFWLiT",
  "key8": "59kk3bTgALpMCuFeFdyhDHCEGnPs1HQnte2NYzRB4UAmMQDQvJ86XD8GnTkGQpU2Vbgb8fn6JnJ4c5886YfWA5cD",
  "key9": "2gEzfKaWb8qV5btFJQ2PzZuBnSSoBmVRp7RUPkZv9NjDraCGAEeW6a4zoRKughNfmDRoZjisAkV7TjtiwETN6z2d",
  "key10": "PgHYmGX3YYUvzUS4kmZKCkudCa5Cp9n7emG8ReRSpU9LyZfoTJNB7yojnji9hRms3Jz1fcRHVeHBzfLxtYbbERE",
  "key11": "4NMCkpA4BhkVqURzo2bZpsq8eK7toTBdKS2Y1sFjgqbo7uCr5aaejqTS6EuQRq1sjbyWEdq3XNqhdbtr2igYb5d1",
  "key12": "2YA8TM74uKQkCd8SrAZSeVfEXeACMZKTUPpqP61sajkKTaGxXgEzTaUjxYHW8E2K3eo78fjEeNZ6AA94pBSsY1f9",
  "key13": "3visZVU8e9edBrEv8ykR921JMhr6qUGt4d2uQJ1v3jJrnHypbxtHCyV4byDfkgTzPWJgz6cmRByM8q6vbyXmUjUV",
  "key14": "5vAQKVyVBi6wrJPKTV9BwGxVtxvBxLGkBZEQbfiHYufwzX7sqJCzmFXbVYRAWLGNu6BKAJqF8PLzpaMHBDKCxYdg",
  "key15": "4EzS1AE4s4hQ9T4Na3JwpUUMuobgjEuTbxPS9L11jUpqp41c8druygifwZvXg9yqCEv1ezCJ4AP6W2okazvirti5",
  "key16": "3t82eGetwQP9qGEMhi45x15gPuzRgYHexyZTQ1FN68KURgpJMcBjsHCRH5Gnsgh7tZdAQ34Vrd54ZoKS9G7xP2c4",
  "key17": "5W6hNvvkCHrsah9r2ZgwAiM2qzD54d2dhacHpgHaS1FTaWYZySaXDoBBK17aPY3SVfAkkkne1xCt52GLK4vE7U79",
  "key18": "5H4N4QH2XGyQz6uP9VgRp9fZC8iR3PydJJcBy6xNLLugF139cfxbQmtkHgkt6ZcDyrFTSriEuz2FxymgUv8YYjkz",
  "key19": "2ow5YByxmiS7xLL9xTPNpCmWuRdqDKV5VgwH9JKj3CNJ8o2njLTV3Nb9pLWVpHKpLi2Sj4KJCzBHTtEGeBYmEeLg",
  "key20": "55JDshDxybBYmvz846HTQh5sa7q6gGwntS8gH6SKVQnGerDKc4kLjypeqrgzjucxnEmTbEGbaTG8oQCnov9uugDM",
  "key21": "2GpGqKAvUbFS78X7xsnQPvjhC8qCupRoatTBPgmNe3eoYAqoS883wMYPuEPuTS5fuug8uwzBPjtcNudMnzjFc2rF",
  "key22": "5GnDbHWXCdXKPfoncCXY5UzRTfhPFETsRe4vXF9AkwonS9AcWdat6MMVhxpo7G8UwmEXEeBRCCwkdbeS2ArjSzML",
  "key23": "2HF9Ugh6LnAsHEWG66ZPXFwPWxmzLSAAqnYrmcxrg5kQ8GQyVeH8PtAGx1g5FKnWKQKj6GxoDcBHGtUSiEj2uWsu",
  "key24": "22sEW3bGS22hXr9aKQDDqkNj8Y3E4QaW6dgfDC4NMcpxhKHz6dT5jfkHfwqGiHPjRiG8B4gFcaT69LDAa7MEC9x2",
  "key25": "5kps3UZo3SdJW2rmAGLpEpcfvqG7QacdYNE41WTq6TZSwxHyD4Mjg8MPvs5BdW6Xr33pCh9kNPVhYjsLwjiGW3XY",
  "key26": "3tdxafDxXtMsz5kzzmKJnAcormybkfiGmneTPNqyGLKdDqLZw5LauE9b9BT9NStGVd8Lxz1evaT4em1AVr8inFXT",
  "key27": "4zeDmsQYWLMrRZiB9uoQRfcjQ1fyzLXAra1tVxc3U72YYjjmZZEXbv6ucYRKkZWJ9JWHMG2eH3VPMddUW41mANcq",
  "key28": "FrAnqmCM5pekeEMY9oJBGRkTsPFAP6aU8TRyDrz2SJCakNjScyKXj2ZGNgn1pMZh4uNQtKkW58wDSjTZyGCc83z",
  "key29": "2KyuRWVGEJLXizvjhrcK3ziasGUNvuo8nNrayB5NGTBekdsBHXp3AYrMvduxyLmFBnguGbngGSusYcpoYXrNySgv",
  "key30": "62DReqGeANMKBmt9UJmKUN6LFXfuDxcjV4LBAo9mSsqMaskYb8axTsUnUQXbR8cdvnoiwNbsPmzoGMv7wJsEfdbv",
  "key31": "5wQmdJT58fTgJsp9qYJ2mhaXn9ki4qeLSJUNwGJ4AyXtMg8zsn75sHyM92LyUW2QBwjScmZhmaCFVde8hVyoj7rH",
  "key32": "39cGTxZAah7KMT5BBp68BFFXqMnvDUZtp51Ko6bHnb7wiQVXGbGgnzZnhJLc5kjsriwBftMicpv8wz7cfqdBrTeR",
  "key33": "5adkp1AYJLPxkMZEenP8q3WvHX9qAN5fR4ayMiF7JZyP3RYHa7arg5EmoZc9WTXgzs7VoyQQwQwQuJAAykbeRgE",
  "key34": "6tJhQUcbQeoZLVv1fAfbuhjmgvePFqS3LrbeKE1dEhPy666xBjHM3cCckssWLzTtLRHQN6r6TWFcmdoaPNXjYPd",
  "key35": "66c9gCe3fRyQ1MSuRaWJ7qrvaTUGGkvGAuTUxAox4VDHwTt2iKXqfgxwYJ4hzAt5ZwAUX64vaBZEZzyvDWQgs5hi",
  "key36": "5cJfhoMJwQYja7axwYPA4Gz7HrMb7rh1jLqN54ohhMHBhRwihEKCiJFH1RHb2BUf4Kjpv4qigJNeYciAUEUJwZoi",
  "key37": "3vudjv1K4RnqSFr5NfekcuHuGvRVLApWfS1a3FcUo9j8JDq47vatU8UZc6MryVU2kfpWuR33hbJyvsDoZuUu4uef"
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
