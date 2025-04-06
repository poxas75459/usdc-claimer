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
    "2zZFMioAjX31vodmbu1LpuuZwNX17p1k1pLjJVPVVbSFAzb2S7PXLwpk4FoVyGX8gYCHuCex3KXANFatgoH8L4zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xf2Xx8iqyPF53mUE1QeKcS2N4fddyGmKxAQqjyMec6JDRkpUh8Vbig4v1TuLjhBVBsUfQN8TFTcxaoJMdFQ5tSK",
  "key1": "s86ZhaxHrpuZsTg3JEPu8eVaFoVxxAgS5mH3B1rrqPwLgG3ruc5k6QQnXUrmhuHWKRWYHS8AizpZcVuNG9QHmyG",
  "key2": "5kWQuwFe1sG42kxRyBBqYwJggTAW9X3uEDhFfJVoGsrspbG2Y4N4VnwpTHmxtZ7F4kLnooSPcf6khe5KxdytWL5B",
  "key3": "N78pxmzjRQLWq2cDErS3q4JGjxgzRuFUnX3GdEV3y8VqvqLmrJkUtAewhscgSR4vTiRQd8AvkBKJaNDfVNw9vys",
  "key4": "vrS1tejJYmZ9gdsviPqWSMxbG7f4afPFPj5YwuCS6Ery3S6Qav8QLWvK1hsiFvjtayrsMpT4qriNzrzn7jejtQ1",
  "key5": "35x7C7gJzxAbm9TUr7WMuaXmCTwMsTPhmbqjoXwH4BvSJ8bNNF3k4ZiG9z4sP6Ha5RZ4xpoXbrNdkbuu1Q7bnH6i",
  "key6": "4G7UyJa5GLCaHuBKCJ3BEbFGU64EUA1zMZwe9HrN7BmdNtdNPCu4cao2xRaiGcxAcF7pjoDJZRGbd14Zd5PMt1XZ",
  "key7": "3rkdKKPVqodVeEkTEVvW5oc5QrQ4NewXZi2mss11x3MfNQNrddq6VBbzLZ2Xdgu6zYEzdmKeHVtttqca1Z95QSTk",
  "key8": "2XZwG3Mo794n8vESZWGoWzpzYzUV5LrLDBERLPf1Yy3DMFikG6BEYb2XBeEpqTmn8NxtNV7P9tbpyMkt9SVMzYL1",
  "key9": "XiGEpUHCY18YQATgJEYvgCRjPX6pPU6bk9Y6AK5JVrX3cG7xthdhK7AmFaJcebfm294itRm6jmZmJFk6umA2RVx",
  "key10": "7kvU4UwL1Tr4BWeft4duLYve6JRoaANAVVBBC6AVz2zeksiSstVTTqKWA6W6bwgVqpRppiX8MxdoArbeVbbauEm",
  "key11": "4yHZHAJCyVo7ztmDVHpYMbQXGQn5TR2JoiJ2AKyarK5YnBH3GY8k5JJeJZPiHqcuWzSwAF5soB2egqAEn5GM9XCN",
  "key12": "5Vy31Lg99dxwHXRtV5zvV8FB1HaUaVUrynxBKP9p1dN5UyBPcgh8sgfupnL9vqB72oXZ61j8pCovWd6vDef67GvV",
  "key13": "59Bs4yKnPnJHaY2iH549jcV9HYvpoFbG22qPma4MniT7Zrw8SUVzVRWgjJVLbcZDWhc4TtGAsu8bqtoemT6mTuMU",
  "key14": "3LyuD6izZ6raqndhfhbTM3Rn8NxnMX8CALsP84sdJFST4Tmwxwy8MyKqD17Zb9WuuAqVuT6oWq3rRGijgs25uZgv",
  "key15": "SAopg5PWzg2GVYr9CqyqQQt9uwKMkfeXWR51bxB8dA1fEPhMLmuf6sK7kqUjYyDeM2SrzHmkp5Pr7r8PqHVpwyh",
  "key16": "2uiipKjFXHcngtUqzbQSpAdCS58g955cJvQ89EERpDVPUtsVM7AbqEqG9ydNd9suMLVUpfAyVnSbcDpuSGT7YyKE",
  "key17": "2ojQJE7jGAyGXfUaA8mP5s1emyb7vzXW7qjHMwhuvY6JefAMyfYVieuH7Mcv82DdCYF3mDYGbcQY1uiQuy2gmt9F",
  "key18": "2u8vGHAVTQsNSh1F4zoCCQ4BusLuQ3uTRHUHvn2cJexmQuCyoFTbeHrdxMTFXPkHNdY3YToDqbhCp7kRPmJ77vQC",
  "key19": "4HXAZbi6qUibDvzG1kQtVMJov9WpZ2G9o6TKYqbpiupqUXDVmUXcvoN1EdMyKwFrbEBzc9nzGkETqgeCMTCxbb2x",
  "key20": "3hpXmBLDZb3FQpep4MVz4KXe8xQ1bFTcSjFaVdLSL1w3DbvUHDp4ireWhQgeukCyDAKPRk2ScQDHP4QT3SMLNJwj",
  "key21": "4wSaZqPRuPgnHup6YwRMcJcXFrxgxBWaZmTKRZU1AqLoCk3sbAJzTfiF7mgnkmB9HnH3RigVzNWk5jMdudvv4T4F",
  "key22": "4Mp7DqebeVH36Sq3ZPVYkatWARyXaBGtvPGXMdoVwzMmr2Q8o1NdJ3TU87Px6P4oq5ShfSwCtnNQwZ9tV7b6yQ1f",
  "key23": "e2RcfTHibFfTXN11C7hLL2Wkvm3djUfWUfgqnFfkq47RgoDhf2egoXdDwcfHtsiVPXpmdHfFrGc4j8LkwU3GWph",
  "key24": "45uvpet46ZLykQZrdiwfcMzJuUBNy6kLqcEKMnUiYZPpnCZaL4MdHFd4Ffi2MApWfPaiXUjmSXaSkVs6SjqQ3ZYh",
  "key25": "966juSyhu4Bvv7tMXQaEn9FPjKb12wTH7RdoW6q928dzmXgp5aE5WoUQabUbsJ3XC1WBkFJsrVwBbX59n44tNiD",
  "key26": "33APgVyF82LHNVtnSiy91M2rxSj21VMNZJxEj97URNat7n8XDCRKf3xUNBCpSQkrBpRcD58X97gsJpEjkEqwgsY6",
  "key27": "33vjxRNreT54j68Qcv66qzvVxdeiHS7qJLfpjhmUKE7UJ4GKnqsETimt21XxQecybVmBN2zBfs5Y7wm6MnvvMr9q",
  "key28": "4gDQZNN6CtMnLirDhhqns68ryaEtmPatcehm1azpH4c1SK2g5tj9zdH6q37X2Cik6u6Gi6x4H5W7VnNQM8dMj2sk",
  "key29": "3Ed54J1k4eDhmsvNNQN9iUdZNTapm6p6whJ1cYcN8eUG7Ak71fUG8msoRNdMmUX4nFLEDjjafj21cH5pruyBKyBL",
  "key30": "4PGw9uwv2Z84SojwYB5DmjqSsP915UHo2fA3cXcu8DATj8YnV4f3JzHMteFpj78vCeYUTiwo5Gp63kQf8ygFhMtN",
  "key31": "5uX5cC91Q6ZJ5AEDPQ8PMVqxk9jH5KPqsDova29ds9EGZrhq6Jhxwfx8KWBeNAKSZgZ5KCmMfPbbfrukyaXmrjxt",
  "key32": "3fSazFK4qVAg8Dk1CsoWKGv6y6f9uWZDbvEwZXftaQGnS8jKmQGyJn2uRycqtPDEvLtmH4LfMNndkT32WUGJK6eC",
  "key33": "QpawHRcSkP2nmhFzJdhGUHeqYJwPiCLKaNMwcZQPhYPfS3sRLr92uDApPD3rZSPKdvBL9J9R5cJvtZ7ZPWPwCXQ",
  "key34": "4TFGb9NeiUBAEjjVWhof2GgYCg8HZGpmrK9Tvd3Cwb3BiM5CNRWTmXxCC46RnYS9iEY8aGeS8TDtWUxNVSNgobPE",
  "key35": "5FfjuhcZhPrBEBFqa5cfqqqESsjhoysdyCpU5wEVmUn3ADPHhU7kDuduVRNmwgfEnXWy483Mi1GH3dgvYQwBRG5s",
  "key36": "4MXKnoaze1gBdYoAY88wSMj8uRmydiHqxDXQaSjJgT1hYhR1BeRGSTm9z816Wv6NgQFLJPUAEZCt2vrXqhMLnAMK",
  "key37": "jpeuvyAkXqL9fePqoPNSWUqRXs4foHELrqbdDebZB23qMk5RshPWSUTVa9HeoTiPbPEutAxTRicwrN4AFHaPSQ4",
  "key38": "5R7XfBBcnynyVxtN6LowxPPV577CiMeXjWfeKRgkp8kAeCc6tUkgYEJy1HpeW6UNyn3shxoc6exyH9oWM2iPBZPC",
  "key39": "5euXwXBjTW2YRLAgH1WyHpwqnT3gawfkNZibMUJy33aCUcYnW25KaQwJg6WWPnWwJhyv55oQfvyiBPzPHceJMnSQ"
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
