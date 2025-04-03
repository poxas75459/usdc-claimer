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
    "4sycmJgf5VmWPhnUY7vxErN6spP3UZeDgZRW65RfzW8ojDRzLrozfT7SdsWUVwdernebKtwKoyTzz5sktV29QKXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVVGPpgJ1PtMR2DPhHCzSre3piB9FeRj3wQPqguYZwANZ4FpnkH1cDXs6LgQKhaBZDjyiiWgNZV3SPWHidKd4M1",
  "key1": "3ESpZawci3Egxhw7Qkp6THwvnBsai17kXcLFJwo9svCWiLyAze85FDNa5czQET8TKHZx79VHFk1CxfjfLqqJxnzM",
  "key2": "5XWkL2WmJoxPVTEicV6iYVn1XaFLnsD7dM3rrMx8rB5cLxrmEc7kFsrXyJ12gtCdp7KSNViejz4jn2oCf5THgTiD",
  "key3": "4Ey4tDskX6jC142MaFw4fJU9P2a1rhEE2yUsW1fLviDaHk49YB3Jmi6CXAQYTSyiH4gQbn5Gi9UDzb1cYx718rpE",
  "key4": "5EyvobtxeTHSBxRBQzr9dU84iDAq2ckwxPnUkCteXgtEpMUNTTa4F5NmeA2C6RntGjhQtC9jYRmD3VpXpcBuioiy",
  "key5": "D75e5VqZBfBgWE8ey26Dnz28NX3fujAVcUsTVLuwm9RRxqyb9Uc7R31wR92rhrwjy88aiPVUSwTfJFU4n3nYCMr",
  "key6": "676sDfPKnfAmjeErzPo4BWyEUbGdUYeAZSfosLFscAoLKdXMzqyh6AxZVWYgPxxVhxRbSP3BL1BZ4u2EeRkt2aK8",
  "key7": "4Nmtj8gvmKUZyjqPiU9chcYFwbZg6XH3zrJx8CJyT4ojmNe281LBxyWNM8mUUbRD4S2m5BCK7jqgFhmkQrDdc4iR",
  "key8": "5NC4cxS1TqHWaFBFdYmUzg1FvLdmLUj7iU2FtDqY5DxfzJXJGYiaTxoAb9Zb4ujN8i4GM9cuzpYBcZbu8jjC9Sjq",
  "key9": "23qPdojgikSwu7QvdNWKQ7eMtfdgnTH4YXU95vMiNnNQZCvT4VUYzXsucBZeHjQwWe2y6gRrk9AEuYhyAmFiyooj",
  "key10": "5i4gKYUBtnS4NNKxPFuktqeGZaodZ9Hj9XKKG4gzzLvKfywbmKWXrDqMFAMATZLu5octaaQSmEok74KvYni4xr66",
  "key11": "3QjEBEEaAMc7dbHFm4EARyzaUbLC4cWtj5rio9FtwW6mmVyXe6hBvE3YgjK4ULT6vfNymof9RGXPWJiHESjSt7oT",
  "key12": "2qx5Udwa5UrgMwPPHiXa3JyudLgUQqYNKL9Kqn1ZUVRD4tskCh5aiahvYe4ByqoESPzD6dNjNud7CaCq5B6zxAAv",
  "key13": "65na6ra8aPvgSLMQW4YgsBYdm3Qh79NqDD8cJy7BurMYqwAV6awJt2oDynHQKNS8meaRwun1LFwMVv62wNtw7Wwe",
  "key14": "541Yk7FTo6S1kX8QH4UaX4TuMMhdfNsQW1aA9hHavE8qx6KctMzjuaHJaZrQZGfAT3Jf7ZAyTJByQ1vDfMESqY2q",
  "key15": "546VhEHc5BFGUnv6xcDNkAtdwFZUGQNSWS92w6ZkxrM3hxtoqJuv1sffWA7uRYv6jiL55RJGRJ4KA4xn8f2NyRVo",
  "key16": "3DKFFfZcn43michW66F5w3bHnwYqJggUyvKCfYL2D6n1PSem3E9magnAF2Ljhnj69v9gsTcdCDkTuwhDbKmHGEU3",
  "key17": "4jZmt5UpkG46NbmHFBZZFER5HCV3diB7GemGeLUxTwCqway25LhuYAJYcq4NjFreX44RBFtmg1VgR5eTAfJvMC7a",
  "key18": "yn8zP1LS6ZHe7RFt296yywa8D6pXhVapmEqi52rnKT8Qu5h56HjDhmHaBHyQZ1LVWNCxcjgFDLMnp58MpGGr6Yy",
  "key19": "42YpxxqDrVtwD7NrkiY7uusgAioxZmx5JFAABKXsYBpnyfZznGpS8esKtRBWmtMfPtggHNNkjtnyMy3imCjVAF97",
  "key20": "4VUjJ5tW4ngxPSgMvsqp1h72pArqbseHkoCW71izXKmVjfgRdkKd48g3jC2GmYine28e2DLvq9wSzbw8DrQcapeB",
  "key21": "3ESwKzwTf5HZxpuQ6zGCsdbAXSuL9CkEbgMpQ8V2gAw4xQtgrXRbsPyPY4d9bXFn6ah4328JFCWWK1mba2WCkvQB",
  "key22": "2xJPYQhvZjG4K9bebHxJTQoYPdYTG8KdyYwZyq94npSH8ovL8m8m6mowsuihiZ4sMjAnxCZngfzRRjK5EoQJa2QF",
  "key23": "542Xofw5L78nQUNwGJb57oCmFAj3XKXktKBNqCdSfbLwEru7FnpyNN77TKPNDtpdW2XGE5bd8b4Sfu2Zu1pt31bv",
  "key24": "3xtaJLXgyyLDZ81JhDDwiWzxptLg2mHghdY48Jhif43MG9vvJWBHVJyqwFKRpQUThaVVKkrbUSt75VymxUjrTqBV",
  "key25": "Ur5g57eHEjQ9yjDwCc8RHdkna6KFuphDcGh7nxj6XZ4GJzUyvFNgmmQYHfXBFhhMhfVwyBrbijWhQGE6puCykM3",
  "key26": "LruPcu2VvmzpRmMq4hvMwTCR7Fyth9MsrDh2NbUshL7kjzMWufUwPFPgNsCerPkUknDgiiz6x784DQcYn23LPsU",
  "key27": "3HzBDmkmZ8RzPm5ovH6A272QGGgcmnvdBMeVWDP2pG9osin39KDQaFYWx6due5hRgckMxRpX82ZVRX8VKg2AmbPE",
  "key28": "57ZdM9sDaFrHgYxvv3ZDYAVvRHeahwHGFpnQSVgcq2rCnkAcAfHvq149i1kEEJSYxn9nUr5LFdCTyMAijoyTuwzz",
  "key29": "n37BaJv9hxbCjgZuyy6vm78k3d8QCy8wqNdvetLsEkYz9V6kJep5ss9Tqh1e56PKjecHpfuJQL92T5oUEiCFv1M",
  "key30": "4AnHBxGDuXzWf1iRQBDoS4jwdMK1ThCM2Bd1etfSQBC2K6ag47XxKcYDTzqaugWM14bZB1G9JdjPUrCkcGVcqpUk",
  "key31": "E3r9yRERDb1ETZ2cc9YtpxyTMr3u41unLbgREJpnFNkWcNNkZrUky4ioDTMwMGwMCGvBvSaUpYCUaSwUfJ9Aweb",
  "key32": "4WPjAKsCu4ZxVn4KWihbV6dVq6zrqWW7GhkYK3XM8q4RLzpKAFr7UrzbofzvqedrXfzARLS2HRW1GaAEajzYawXj",
  "key33": "3YuFjMbD2mKYuVFzGPpZoSU8kwJ1dFVWxxBFDxQQ9YbcGSc7kvwCUJQjLmhURpf8oZxsSzfied4NyHdwHdBXsodC",
  "key34": "5dR7A1DHt4wwfeewUPdckTK44XXNJnGwPNnnUb9T2PQGdueA94jw3PPuLPAfNEg1ub6DCGF8sQFWKUQ8mnehHWVe",
  "key35": "3BhztV655NQ4fCmjBg21PgJp65sGCELTd8UBGiWp3RQ5mUFeBJ6UZ4qQnbA87XPXKa4Nnrx68TzuVDK8FLmrfigZ",
  "key36": "4zzA78USbCiVuqgAqL7afDuz7sea9Yh7cB3DBWvUo2BficBjpT7xHgUFRWWKkPMyTXXnddX5mzRgqZUXJncpxAow",
  "key37": "4xynVu8o9eYYxFsHqP1uHU6y2CS8bJ64L3MuDaSdVrkBnahbKy8aUkaAiW95P846xCLN1BkFf9UqLhDBn2viM7FJ",
  "key38": "5UrvinW5t5DwYBw6ciEgtR3wyTEQdPjD9XU1a4Fi5sZt8oWkbDv6H9PzyeS8xMXy9Ad3HFYRHY6MuGLAyyq98JHc",
  "key39": "4rMzeLFkPP4cQV3rqrPzrJu7stdWfZvVHdAeAGj7VeVRq5zFkp88FCrzKgtaADZkd51KmcpWaUBGGmsUhJ7LDzmR",
  "key40": "2RCfGQ471kqgHnYPzhsnPJvbfuPs4ZmFPjGWjoMsGN4abL8AxJiLaBUYo2i2D1mYcb6DQzHjb26iyYERHGruw2pq",
  "key41": "23HR8WytvFuCfRvVmnXg8GmyRwbcVkff7XSWNHptKNdaUH6bDKF4K3NUyB895xYkhRcwmKfVaTGeLbkEqvhWjTkG",
  "key42": "5mkZhF9uBVh7DgyoHQjm3EaPTxV3wAxTnYTyZsgfHG8wZB4Y5kcK9XwjrnJKd7RNcnXM9NEfNAgBDVUzotozZCH5",
  "key43": "44VxJXEahTaYimASQnL8jMyv2kwmKbYWoQ2NyUoXiUoxr3rg47CVmq1pvcoHMvftgca8aSLBwQ91EDydYf6GUobw",
  "key44": "4bkhKxDg7KNFt2YnPhzgRetZ1sHNyps9beT6RNfL62cBVbjjj8B8yo5dLaDFLmmc1LtACdjcWtLUAwAMmLbMusik"
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
