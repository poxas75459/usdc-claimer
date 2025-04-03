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
    "23rcSDG181P6Adjqo7ZiVxyWTzc3yRv4jgybrqVzXQUPgeco37xNvHx7u72bnLw7nL6U95qWVmbNL5dGA39K1jT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drEtCp7jGPCKe1YtjGZgGxTJ21rNRu8z3Qcv5K9ZdLz5KZvKVZud1FAiTKSPuXVtcJwjXgib4BsEb9Vdp8eXh93",
  "key1": "1qH9YxrtRKrptKL65YXTvwhL4tWBJQJ5jUTtJxcGsnPK1J1Py9L8QNi62hUWvTAB44TcA1omqk51ARznsjdRYxc",
  "key2": "3Dczu69hudEzvqJmhRqkgZor7pxfVMqbjhf9jj4z9iWjfCMghz1qZK5Y1Rtep51bR9TBKmaaZ1vaAxzvnRp4QfvR",
  "key3": "t5mpLavXb5KR1x46ptsLrj6xtTWytCwLXn66sb8yGKNVjMyHNsRPJxsfou5UHDyUArZLcC9pVyyPgvCs96szZjE",
  "key4": "i3y69P3DM64ZyRuo71F8Le5d7J5kAVJPeUdNx53aKtENPc8XCMJCPgwi3762wdErrsLeieTwKPWqeYA7zjrF9w9",
  "key5": "3PWGJBMwYwTerkNNWVsw5moXcTqamH9BgMrTCCcPMLiyxDrLJhAopTCD3FJN3MgoGbCug2Ufnndz5DwD4Vj2cmb8",
  "key6": "QMzGMA3uovqkSLnDreGQE4W8KooKbB8Fw6j4APF1GtY2CAepRmYzmc6BEoFabceqSwx5uEe9Z2APj8itwQoSzMx",
  "key7": "4EpqvzyEryjzj5zca581Ah1aYDL8DM6yApdHKxfbLALPjuw3xcAvn9jd6zLmJdedJtHgdy8pZbYRsYTQd2eLXVVY",
  "key8": "9gCHKwpsUowXxLZijMAUfMC5xyFp9e7sF97sVMxfbUYEMMkh69fazhvGCtRDkkqAh6sNq3U5wPWajrVHXSvREtY",
  "key9": "5ehJQ755B8NZeFevT8muSek7KkKrGGNTxHWs2toJ2gxj3HCt3DxuqK5aj3RXEE54MRi7qWVDcFaUqHJJr8GKJZEJ",
  "key10": "2gSa6XVTGZHKs2RV7xBEoEMcX17KaxRbmCcWwFmBTz22XK5UrNvXc6SXARGAT2RQZc2rf7siiUxHToR1tNfyXFyc",
  "key11": "4yAvRPwGg8w7CMKb6PtRN1idq2cB1Zm1kGZrFeDwswnAqu6cUsXon2a8FdpmtGtL9MfsPMQkdkXDJeifrZ4dtNQ9",
  "key12": "668wHDjyVEcDrypjyaTnhDxx7KPoYRVHiruoieczVron8M7sDdY3m5GtctFz3aeiWZSeLdBATL7bv8Rmb4dBYNq3",
  "key13": "LJCZD7eU8fyLrW2jSNkNqSu617AGiTxTdGv98fQWUZ9Kd3SvxEFxyubfQwEgeKnb6DhyWNFvzrgPaB2yTVYrZTh",
  "key14": "3WBw8P88mQdqhwDPjimoXCcDYiKQKBEQiQkSzdFQTX8AULzJkrnG1o6ro73A1UKvZrWbzoNz5f2FXDFdsHycbGz3",
  "key15": "24rm4uNU9qkLGKodBVr1eAmSezTkwaMdNejPVBJJz6FxVX9JC1XqCduLrYifh9o39uUe3jR7tz7LxBYGz2r8aqQS",
  "key16": "VK44k6axoh3uRUQzZQpZtSNNoMULQkWxh8genwHD8xkrVqqZ9rXc4xBggDSfVz5TSrRpP86hyw6QQzBukQ7bKt4",
  "key17": "2T7rAJjuSxyvkFgWX4EawYvqWp3W8cd5PG4NpeKfuP1BgTDv4pMnyCEywR2cSF7WA1QWQTW5nQ4EyfWEyxp5CgCF",
  "key18": "41UqyDandba8sbd3vKtBfv41m73Xh9aF8Cb9ZNABr7yxjvg2q5cA7yvHsUxTR4XEXx5s3sjtWLGJ3cftmCGYPXeL",
  "key19": "5Am24ic11aCFBLLBkr4raN8pJ9X7uGywXyFTCi8qHfYPQHZuyvZ1kh9PEwbZUKuUtvwYgo6LFf5np9ebGKxBSzf8",
  "key20": "4wighuf53QniDaoFk2a6ECFwojzemAHxDREJX59V9JgMBNfgvwzezevA4eQJ5fdeEG9oTkmftwehqncxeP6iW276",
  "key21": "rAfQWajpWA6eqMgADtG3B8VbrPFeWTpU4gtxY2zF3B3LCfr3yfNqvRHXeShuzESFfd5FaDhaLzwjrVMNLwRBsyE",
  "key22": "sEk1Tt9bTWGpkLuxFoApfyReqHHPJrYYpoCYEFYFNMugL7qcJePXnDKoDgFzap7Bguy2skwZK436TmAqwCXoMgk",
  "key23": "39TKJ9zdRJtqNkdqyvVPQ248RHfGM75WWZazqPq5uGA8TJc3Zf5sdT7RQjaM4L4pPcLgoFKH8LEFtGVra88R4rmP",
  "key24": "5L1Q3ZMMxu6rY1Pqz3hPqCv9QmBEF1gWF2NGRSjfGkyVj1me3fYS6svhZUQ9tYU4imFvnHEUx9nBCHsDN6ThND2B",
  "key25": "eiBhBZrW2JYgBjvPjqB4Ai6kUDw34NUxduHwd5dnFoy48kCYKECFWRwVJPbTSgbb5CAHF9U4ttYz93pg1TjbmQT",
  "key26": "4v3XSjykYTgeigjXh1QsW34qC9hH1iK5v8WQJxAegqyaVLjDR52gGFyCYmKp4Qr8MiFgoCtyL1ZZej6iXASwK4dh",
  "key27": "5JkdZ6kp7jozkmgxD8DocXAjpR4ocVNo57e2BNbf2SgSGbRk8ebyiRjvkESgb4mMdqKUHcK31fR4vMJ6uY2oUhJq",
  "key28": "P21nHqPGMdxsq43MFYjwWggJaJzzRac9Q9BepZt9Poa4z6aZdEL1aguoBrUYB1ZQX9HBW8t64LnfNa8LDLH74kZ",
  "key29": "4WahdZ3Pwp5sQE5pRauYKq1uMA2cKUNDxuWVKRPmSCa1NXhHHjxh4e4sws6BN4Ub7gNCbQbnUNpTjFXAAhGP7KGt",
  "key30": "2D4ExFd4eyjYT8e6sqArhiV11T1qK5HGPsxZ8fbARPKPkZSjk8p2pTqWMKwzf6y5ZKPWeroa6FXsALoNKnKZTWGd",
  "key31": "4f7g7AkgF9XUu1i7sRfhVQSRJvhZ2hauZvhcRamBA6eUxCqpFYp7R8Bwo4S3LL2CJJMd2KcaqFaLPbE7wQRCGhbK",
  "key32": "4kDNJjjPc99vqU6tkmQuwK6TDaxdYVx7UFTLcLvfcsQ2m5zDHADSWY4jUVLz8t9VVNuWE5BuRcMwY28mzp57sTPy",
  "key33": "2k3tcRNpjxiykYPcg1iBp1Uo8bfM6nRUL8Eaa1ZYUf4qs6jUyRFjPRt9aw5jq7EfAVuR2JLLM5WXTFrok9oFu8a6",
  "key34": "CvmqiYUoEubTwWxqRLMK435Bn3voLX9MiBFWRS7qW4YwJgxeZm33NVB5EhwFLZNyVuQyMfnB7ZgabEFHJJyt3SP",
  "key35": "5bgHj9YerMpcAs1HGAnYFYap9q8zXvxrFiJjnPjJrWqEMosndpD3UHf2n3CnP6Fdq7qoUSVarjyZ4G9csrA2F9k3",
  "key36": "4BCsQAMrqY5BHGNkdoYtJMDCT9e92AabGMfVebFNpLtUrq3GVXBYpX5AuHYJq9i3baes4aTvn5rk6j7yLWU1Qrn",
  "key37": "3bA8FJWYCDoZrzQ4pTYTA6PcZhSkLfJJYFeBBGu6TWszm7nkPonUYLbYzodA3UcW6HDdVUwAyZfA3r9fodNGa55D",
  "key38": "4GkVMkxkjk23RW58vDeppoiDMPhB28yq9aB7cimuUJQFwQWKBMRrhNdXFAa8x4JrMgSfQdMQaFwmcUL1nZKT2mX6",
  "key39": "UxdW49RFH5uEPxWNbZY8mTP6Jvm8oywyNhyZSonLjwshHEWy3VT4k5GDJT76FZjzyqzzbs8a59QEPSsDrW7g1Yj",
  "key40": "UknKPYnXPCbNL3Xy9bY9Cqa6Mc3VnbgigVUVcLZeAj7ELJws5T34ctUiztCojG2TtomSYCM4xgwzkqtcuaeqsJN",
  "key41": "5h3PJNGwhwCMGg1YnBxepzxhY1kZXir9qj3VCS6C9n7acuQArLvPMJhptw7YjueaedaEHpUdk5fXgY11ctFGKw2h",
  "key42": "3AbdobxpdKKoSnvFGqyz6paQAFRh5GyfXxQDJi5kj2ZmLpAgCapWpHxo6gfbG2gD7AcCRnbvGqV46xa3fXZUZ3ED",
  "key43": "5zTSjJMmmkQfSFG5pGW1K3kD1KHbUztp3agcHj48wqvvZmdaeCwSoiTCq9LUgFCWDxqbRfquC3nmW5JVStELetXC",
  "key44": "3pAKdDc3kMgNUDbMapXPUfejVDqaGqXZFwfjSW4mR8foLQq17ec8uXAt3C6oTVpcfbnGFt47PhuyW7w8YxmJPc7b",
  "key45": "2KSBV5CRGCg3TbUakxVgNUhfA7uwLhLMh3myLh5FoExiLsKEX5jTCpiAQWY7ZYVxdKxSDhRXgXDNp2mrLMEaFpSR",
  "key46": "VidRJ2UHR5dLiMeodpJeVQvrdpLRDU5LNcgbksVTZ9RHyBBey42UQVJtd6s7ynDc6ZMjuW2Td3RbrtKq1z29qTX",
  "key47": "3YunAGhpU1EkHWLTS8ZAhqycSgtrcZFfUUBPHPEWAf7q3VQ5kQp3tNuL7zrCKPPw93fxHniD9kbVeVekBmJU4N4N"
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
