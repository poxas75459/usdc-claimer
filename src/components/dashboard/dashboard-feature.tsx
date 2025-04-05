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
    "3dULYe6Vb7Y5vEK1dQ4jpgUpGwoTwuVFAi4zNmopWNNc97y78UJpL36UcjBTVJZQYoJXB3WdKfF9pp8L9fUUiBEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qB1feyYF65bFeMnANNxqrovycRKj9gfUVUBWnvHuSFDeCVHpg3J9LgvEEMjj87CFnwgv4PAvHnztQ5SQQ1Zu32G",
  "key1": "4DYbVe67NceRU1oL2dJKrM5LgcNnoXsMVXwkJ32akDdQjudWZ4Zv9hybgTUZC29rJsArhhTAuybrMfCzCQ6ZZjcP",
  "key2": "3Ax7NTwSFfJMPZNNTCBZxQW4Cj6a6p4RkDuh1yLU2etCfRtenLwcNDYR36bM4cpNE1T2TZyuzWmDuCrcnDRwtW6D",
  "key3": "5rAQDXbhrrVapgwchN5wKqgmqfes8qSgbMnp8VjokMZ3WJVUv1TcW9Xs8qSZcV3pGQ7pR9kfKau2kT2X39E4UUuh",
  "key4": "3mTPCLcT6RNX6kYhNBKntoqFhTuwcjYHbJvmoN4sRwxo8sddmdox7khgdfxvqvPGdGCHokWTuiQwYiCW98QUDjVG",
  "key5": "57EW7r4dkFppCD9Tu8qbErwEViUon2hyiKGYGQzbW22Gvd3UgWpvpeQkeaHDq4E6HcRpgDLhWXHbPyRuS4R6UdF3",
  "key6": "5SytUhpaYfevcPuACeKCGtFtd5tr4xTzjAqSZCAr7S9N5yNDb3FdwrGYk3G7KK4ME9QzhsrVq4CUmTBQKmL9GmVq",
  "key7": "33NGKEws3JcYLhKT9xKsxTy2nB79dKsrUJqEW2GVCafwtVkgRTrivSETbKUdiWA69C7pDSgJdnfJBCUDGzYq3dmA",
  "key8": "5HjMEkDuM6Konz9kZNs8nW6Ex3ChdD3Ceob6u62qqa9bF14hGXx7ZLD7EMRHxTbHWVnB2XvCyMFLK4HVhCoChKtB",
  "key9": "4bgqFd3MTpCmmjjzLpochK6HH9bPuny6hcjxDm6evGrxFgHNfNykoCg8kZgmi76LTxFZKKdWXvV4jKgVU1KbXJwr",
  "key10": "Yc5CfgBPZ4Str9f93kZCB1MXhwH9zx4am3EpsdhfkFM68d68qpXAVFqVUzxPvXfb8MkEdm8svjWbWd6gQ6DTnkQ",
  "key11": "56hRE7bXaQKTvRicrqCm3ffuyYp4dkmQhRi3XSuNFgHvY16qbiQSCKXuDVTfFG6EbE1PJD99svCumEP7h2tf8TNF",
  "key12": "Gjn4fG3MxP8xgpvFLcTNq52H4ktYgL2Jv5hXgQaxq4j8ghcg1r33A4hzscWv66ogqZcHkZiiU2yQqLYiwmwQQpm",
  "key13": "3rkTtu2xL2JNgki8ZAdyq9HdbpmEEDicmFAjo6sMCXn9A35NF4PY8qU4NFyrDxzvfMzSYEYiXXg2p6mMxXLYGWve",
  "key14": "2grm3Dv9jKCAHhC3oafcfzsL33SLjr7hSnRzytimQxcy3qFwErLzq3Pv4WSFCs7N55qMRo8Q5F2Uro4y65pEq72z",
  "key15": "3LkDYK3u1ByptE1pc6bJG8NpoiqVNdzG82yxi7YPBoQBtNKKaotShz3YR5Fu77gZRQDocP9RxDzMQGz4hpPvzR8P",
  "key16": "2sVMo9g1L4FLUDre3QsrhPHKu8RXteH8E3FpmC4gxkFy4AMHU5xaeiKCARgT5rZFFXrWbKq9GKpMuKp22ytznMUW",
  "key17": "4Lbv2kxKqbqXNgJ3eSTMx3SZpdqfydi4iqWfQzAL1wkUs8gft2DwExEg3Z2s8DvKgHw5JaJMrDTRX6GbkXbiqpTG",
  "key18": "2cafJ8xaN4a5ZN477sHcvbJSJWkA3uhUwL6siAAXNCSKY2Q3a14NdDiy5shgNH4sukVzaniWW21JTCoyfSwapPiN",
  "key19": "bsKgKaEGBgT69jtd9jVkyJgL8PbYTpKXEdxXQgnypmS7d7ABnn3RhmTGBEjWzB5a1uCDdez6z38aHv7g4NmqcyR",
  "key20": "4iPPREAvyw4ZxpeomBDBFi4n4YVcK8fzAfVZLVB1wQCqt8aDdZe25R5vwTt1JdZ5fzqbWyNh1K7bSkt4Ai2EfUii",
  "key21": "24nQe7Ci8AHUp1WzEW1L2RVAEgYYYuS3Z2cubFXZ11wwYGN8LvvBmCzmXkmGvB6XS9LHtpshxZ6MArNzKVtnV4Rs",
  "key22": "5jZkqDSyoACMAv9MrodWN8iBW9eJhHpRCibty1rDX8pyogY9HbJmanJeGAkRqfYJQtMgfhM6eoweFS9N73pqyFYz",
  "key23": "3eneKMtazUtrMR2eXYpzRFhYy6VEiwbcde6jJnTzTwQY475HsrpqDoXenWTyMMyP3QevsBzr1y7EHECivib9SgBM",
  "key24": "2scCQHgKzVhnYDNrUDTtPqnrRMm3Vu2aAkUeGAJcZenjSDCZa6YYFNusdq2SsyUPoSJnkxvsqhr7QQKoW1metHJg",
  "key25": "5pf6akes2FFvawgY4jaRKKF5zfh33yZxmKqaVPTFQichi29eJ7F6Sf3tbqKqBpLdonrEnikuzhY8MChjTM2mSEi3",
  "key26": "SXzcQXVSJk31vWehfHYwZJGeFqJdarJKRSp1t2Za9AYsTYZdHYcYZYqu9mMEiPwKd7B676L7RUSnivSjZMF1LTB",
  "key27": "5tqb4GAY4nALM4CgxDk46hk9QJvh5skuvz6GXd9Z75iCAfcu36DBG546jdaJsp9BrHQHTug5p7L3DMHBQkKdeRDK",
  "key28": "4NaW7E9Gew7Wofx8ZhyeXPMxBtLuYjBoj47Z6N7u2VBSfXK35UNj5wmCLT93td3WsUfvhesKSKvCCKc3VyLwuyoN",
  "key29": "USmX3EdnL4vbiDRWiFidgG1o3PEQhquWEFBJZFozCeGwsfGjQLvZjPNEoZqUMKp8CQG33QUunKHW3NZnawnMXag",
  "key30": "2skzvEsUXxBcVCqUospJ8uYdhk2wq1JQcS97Rx2igQ3osHMaAqrs25SgCGQi83BjFGKTavQCW7JiDT3PDj1e49rQ",
  "key31": "GC8e3kzLWRuBahc6pSKMfqdnCe5e7dLrDACF5UgRo2T4k5FBHJkVdoms2MRkU1r343dibN1NWhT4poxZdS8XgD9",
  "key32": "xXay6SbkX1uaBHoEQCM2hHvJn5wEuB3daqn8vhyf3apvBCpkf2u23GE4gWq6oCXXiAzLDFfuEAcpZ1iRwC2WXAt",
  "key33": "GjrH5fM9JDjThQaKPVkENG5tW7uGobvR6sNczYA7EyRq6DGrMF7AactPPK537PMMruNcUjkN9UqUSS7NaH6QeNY",
  "key34": "3CjzVwYFNQKBAQsTt85Hh2ZcpUSeMu99P6CDibycF3KLz8xAXhXuUB4M7Fepf2cZCznPaw2LBniLZZ36w76ajzik",
  "key35": "5Yexb7DGFU7BFqJ2kj7UZgK5YWWTobkwufsiGirks1BfvyeWVnFE2QVtLHM7BJnae7MbnJvXWFKAAF7wzfCwmWYn",
  "key36": "E4zUyuQm858LG67WyGnFcbZicKSiKd4ZTMtwSRGBgrdhQWS6ErjyPDEnsdxfp4EwYTG7USufrnGr2UxgiMrjGbp",
  "key37": "53iTrbyteePcYSCNXoRZZuceXBA96Y1gzAb18RrTWqcb7X8w968NMaD1B83Eam49srgc6ApoAZanm8kWEeXiJShQ",
  "key38": "2QfqfMGHNFUvwBtDKhCgpyFCGyqssG4UbNF4eUhzPRReHncUsAnpM7y9vcnYbFZEX7Kd1ZGEbRqS8FW2bZjFnaqE",
  "key39": "4J756UUkunUbQmsgJeE237QEa4r1FXkjXHtoNkmoAxMZ3C7w9UFG69retUuqUP72Spi8Bh9bMX34A66bF8NuaXrU",
  "key40": "4t3NjWJDHsQwP7jPMyRdoU6U8cEsp3wRMmK75aP5PLVLcYEFbidvZHU7geS3unvwYndeWccgLcMJvM4odknZMH59",
  "key41": "2BFbYFyHmET8mizY3UZZggtvfdyFn2CmoUaGFVKem7EF4rVgd75MaZ1VxwZAhiUVtgZeUFuEt3soBudux77vX96f",
  "key42": "2BLimNdN1CaBuByMwJFd4UcN381kcb713w9jL2vy7XHcUNYWLoFsTVhshoAEmEfvDV3tnfyms5sMEMn6QaLYhEhD",
  "key43": "2T4t3uw9KpU9mFDCWP3CREvM5kSwLPBfQqKCAMp9yQm2cncvjE3KBGghUUFKPkzmJb88zjb3ZNNqAYV4eJqVtsGe",
  "key44": "2xnAwFHSYXsG8CQ8Y44izH9uJGtEfwdYxdrioM98k8phMdrjEgRmbXPRef3uDWn36xg5ppuFnsUzeZCmckbwkcwa",
  "key45": "3qfghRHtEAnhoRcJx55JjKqgTSXsratHZMWE74A6LZ8fxoXE6riF8EeLX1uFwM7Rrt9cfuwtYumZ6nYFTZmEVKSh",
  "key46": "5Cw98mEUvZmVpQfeKcuGdPhYNihkQiGF9f9NnpCkhbKNN4Rsw5oqdShJBaWYuPe1vpvbEMZLFMEAhF5D5naXiQor",
  "key47": "3Q8E7HfCXm7HajFmx51FY3TE9KE7SW4HRxXNfTrqeQEwRcS6UjVpf7gkS8pjuZs4exAr5TXcRuHZGfJmmo4Gruqe",
  "key48": "56uzKQMcnSk144Dc7L7K9DdL3c7k54ny9i3abDREyKZz89d1kMYtoXBtSAcPS8VQ4u1JUxSUB8Rhf6dWQN5SXok7",
  "key49": "3yovrXggCv8bGTkUq7nG5sqbHDc2QG19JsFRmAERLUwuC5rjhFL34zRBjszNc8QwxfFGta7t1BWRonVFFyePZ1z1"
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
