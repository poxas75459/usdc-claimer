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
    "2C8d8ne7zxDa5Sm846U7eGU7VGbhnkrGFFX2nsdYmPj69AowBDpAo1kmFBHNArBdFDRvcxYcBarGqvT96rDywoQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXdve7w39c6ZKq3sJ678BXRxYEj8wqHb8RjzEC3R1PcbyQjQUX81BcZwddbZF9zyHsQhqopN4DqgfgoA3a8bKLe",
  "key1": "3FcEt3s2XKzTKGBAkjdhYxgzAqXpbko7hT8pJYoY9Cxun92bqECHYjuRkLussDX9Reh5FTP1HxtAeDEwWrnSNSaF",
  "key2": "3DCjuYPV4D4TrvYajeZcxjQq5zQHUv7NvwitqiJKCwScULHmU2ZoxG4dXWCpgHKVuPM7QpLs3xQZZvhu96MXWaAy",
  "key3": "5hPhdDRJ9UYyF4KDQnQMVMtWNbCpRhnZsJVngRqyeiqxJ6yuKQVSFkrkKVT3VLkAU92C63aBTf2JcCb2VHAgALMd",
  "key4": "45c6NupR3oyrADEaJt4bMXNwKWTjcVPMxUUCt2ZX9dapZJ3RLkEntF5cAtn5QCWf4rTRckXJSLwL4JbxvCSVdA9f",
  "key5": "357B8QQ4NA6eKHwysyrMMq3o8A95qZpjKHNfXX3Kb7bqBSgv1eaVFyTtjT3X9bEa8KLoganCV61v7CCSXUvCLyLG",
  "key6": "3rxheF3Cb8zvZ7wuuadgTA7DLiALjvdmY9byWsZfwhY7JudTogCCsDzUBYSunLH8KAyiyJSH7kjZMQeQCNk1T7xR",
  "key7": "BcZbHDAbzLCsArnre3XNTXyrE8zoaLk6WLEMkdnHgzkhu2Z1k8i7Z1HQfp3EPdBQzKTpFSsw5hLZYt2nPCedCR6",
  "key8": "58Lz24MPCsKhggMBDAKLZazLJzkvN4qBmkyU2TgawBwkNqQwBnkPHfuntE2SmbZQnc1bcHgpmQTeYzrMQJDno5Bn",
  "key9": "15iL5S4nK5ZsYmePXBnbQRnBHQH5ZK9V1F3ASCF47SZqc8sfKAJjWZ1vfw1XwoksZUPnrHevmEEVKxiEktTZZ7T",
  "key10": "4CCSgq6oNmMuD6RWaK1oDUdcjWUWoqMpBYPW7zJy8hnW4T3Lxufo6f6xmnVqCGsZWZjjYjA1XmE2MsYcbzRn9cs1",
  "key11": "hBJJyUv5CmWYwRMFxt6CpNMQaPUgiEQcQ84c9vvi3x7z2bQcVMBJkLqYZZCyBpSbrLR3y999mpk2P7hVkAyrDcC",
  "key12": "4gu2wQ4wcZQqkSdmnf7imneXUpZCHiN4j9NFcDSfwvijK6ePm8c9UcVanUSeAmryLkjpFA5axWQ6YyTCC99TzsS2",
  "key13": "uKHt4yarS4hrEmGLMHoghERAgbv1fvg6JnbT5YRV5jCcLX5mUv6JnRpUr1jqgPWYio3q19sDYp85S1wWJ3kY9vs",
  "key14": "2VPqUBUf8iakxr8CEQFYyFkvB7XTjG9piEfALpc379uVuniBtgkt2cWdKrJx8mPMLcrbqA5fFMLyWR5Xj7gBFS58",
  "key15": "51xgidSNmrhv6Bi5dwmf1vjoa4Ew4uiKgnJss9FZingjELFxHxwE2buULX15hUCTDHS3mpWm6LLNd5saEk66j11y",
  "key16": "2HLNm9ZbtUTjvcFzTi41g9bk3fxGU4gnELsLX41XYEnmiWTE1jgryyQ6CY1sLPLaXuTNcYGkvXp5bMaVnxuGuYSA",
  "key17": "tb76boQ1Y2Fto1X3qpXegXBKFJsitNYDXmw9fNmYmwsqd1oppTyVULi7wbZuGai1EiTCo9sJTvdTQVVFZoYqmEa",
  "key18": "3ESkYTjP3kVPXab22QdCJo8kA1t9nXWxez4HNLzViztzs5Ckq3vtmzHbYuKJo15BhZ2DYr8uT3iYiXrRfyRBmiGi",
  "key19": "55cB64NxdvjBDojUX6ChGB4W6Lqu91LpLeLu5k9vg5dCrq76DYiFqjJpod8Lr8wDGEsirCKLzruNNxXK6ZwZXXpD",
  "key20": "E8qUMYXbD5wWoVUQouAubuXvCqmhz237bn3P3zaDRbsujNpPY4TWjeNioTtVj2JhN3DqVamoXEQBC22R4YnuxJL",
  "key21": "2EK77szEcvARJEEat1AGomaiE5MppbFfVVYjVoeLRrtXtmVYrnnc73ExvShLbV44Z1tzo19i2NkuDX5VSAS4hsJR",
  "key22": "47LrvxNdXFnmGypnohEh3Cwd6dYdqshuRSLFQ4BMtnHrLpfKqTihDDiCQaU1Vf91EiKtHkRZ58kbH4vmaZvFFERo",
  "key23": "3GWgJtX9whPvo5whF479PC2wJiZgKixSYmj3WwZh5YvdDCqa9YfDmoKbZXNU1ScamnX9zLqba5rJLgK4DWwiDmEw",
  "key24": "2JC8u4wvDXgKzvThDdJGdG4NVbKMi14k6GdqsVn6Ui2ZQ8ih57Wfs6boyd6ML2uPyLxygRAqtLWjcST1grQ8bivu",
  "key25": "31eyJccPfJqt8mTxPwSafFj1EffXHwV9ZpVyx9BXddj6d1iQnuzTzuE1vhnuRT4Xarpq31LqNxNePopRGawRDiWM",
  "key26": "2TSuRSqwQXAmSaZTRxVi5JKuvFKWxf8yLCoGm2HR2khvjZdRfxtzp46XvmtVNU6THgNJo1QRKKiq5gT2yXs7Eva2",
  "key27": "2Z72AGa2XcqWWG2Ucapy98S4sAButqV5HeNuTbPPCu8LMa6K2AGjUo1xf2MVCChNEdtd8Q2Snj1CQFqvWQPPak1H",
  "key28": "3pD7HETmRQUAduZKdQWq376xDxPVPvHdkcV3YXo4YKxBTFFbUqb8R8dVNnek6PD6h3jPBeFKfygVHeLb8iQhRZcQ",
  "key29": "oEuhmrRLv9BNLUb7yBH7gMCurxgurC9nW8zg1R22vBgBjgN7nmKRgzG3EwVY49mjj5FDmwYQQVgNNX8AGQTixCT",
  "key30": "62aspmc7kaPfRy6w1MYvZ3xVGHg1qbyzvEfBJRfRALhEdZwY4YEUWi7hRoQSEhDtktw6sjMxBjgb9dWuHdZiGztQ",
  "key31": "2mfd3fnqxR2jA9yyYbEFPRYWXkUwPw6Pav8QoNExnKmv2myy4AGSNywqcD7TELnn3jx5pf3F3ZALGHGJVzkCHACW",
  "key32": "4mrmZeqdHT19wCmDZ7gw1t8gbpU1unUibEW315wRe1hDJSAEorJaRrLk6f8EGKoNHN5Q2BqJs4W68CUMyxyM2oTv",
  "key33": "5DHAJYtsdd7f2eAvgChpcmaAGmY6zDLgk4d91rNBxRotkTLj2v2kLnqUv47qFkUkgG41PF8F69UwboQqXxebVDie",
  "key34": "46Jakgo3WrrBewsGjYoXRjGTVjwydWfmBhRqUUSdiog4azZEaunxq3nj52q32d4xATBpqCWTtCzYsyzy1KqHYpbq",
  "key35": "7geSV8Gu8gbFNXkbW3YsoC2bdbE2McwRrhGkiSPZTgY57upPfY5nKFQxYtYupfZTSEXnq1aw3SBwiYbPtAJsR3v",
  "key36": "59n6pMJjwbumssn8YcEa8b3ZzPSJWvPfLvdZNMTDdqKRRCPzu7CrKhVD1AXYYXLj6PZJGd8ZEu4XLMcJY8f5F3hA",
  "key37": "2mfJuvUkMwoVDA654iP6xps58X58YNpvjqcB3mYLkLGbdgfgkCZjyf8Mg5fK5mBauHQ7YbFvkd8UrRyS5rMrr3JF",
  "key38": "5vwKzG7mg4GUNYKSGwd3FnWzKtmGRM7ky1ysk4qwuPtdJquFwjKSb5amJvJBFtezg2mzZfZCK7Xo5DSSPAD1Jz1h",
  "key39": "3nGJCyfjGx4SvaQdZ4TojXsdQbqpyK9SKoM5jLGHLnTAnyLx8D4qVvXcZRnTgmvsS1yQnPa1RSc6eXkiLTV4Mjn1",
  "key40": "2dBFAGxDVTYoxQTErhFrhPenPxUDFay1mv6twHdoGXLc3b1RizFsbWgx3hkPXLs4nVpHnk1Z6Bw37RZBX9tHLpb7",
  "key41": "2a8d47SUUcGrWMtn8UWYrKYR3ddJJLzJ3MJ8VjqGnCsuSKjopaLy8Y7Kw8Zski15Ueadse2XPG17eZm3RroLu4Nk",
  "key42": "tucArN1JG2XKK6AvS2Bo8PkrNSLuT4H5CscwPQLBtNWzGtfzoyXkyMb1X1FtK7kxJbW9HW7RgbahYENwwnF2nEm",
  "key43": "24qUSbkbn9qB1FZYN5Wtqc4kVgHZnGA1GvhM63x8Qgfznt7aUrcrBVU1SeV9fabCgGqUztR3KqBqSrpEjp3goqJv",
  "key44": "4BHmzWhUFxfZ2BkFbShFSeUAMkrm55zcCgXusS311BFCnoAGHCD6bJbxupFVqqPiY2Ad7EZdUa6fRGqR9ufnvpa5",
  "key45": "45Q5KiugxUEc46dBwKeZA5F4X8neqV7ftmfV3LUnJv77t7YciQtzzAKAEMDTj1mAkCTLBwxmHLgzKJzV46FC4tQ8"
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
