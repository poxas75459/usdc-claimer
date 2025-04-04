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
    "2VzzEsXh1GgmFYJYorM1KHwursC8LMFdJ1LVDyG9k3MpRfKHbZf1vSn2uV7BkVfUVJ3tqXCVqB9PPV1SBJDab4Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7PFuuvKjPZZGqxPxZoT5zg4WdvzhDycpqUYPMhNjYoJnmGhspSTaeZ8T7fxJErTLSVyqj5iYMFhFese5U2Lnyk",
  "key1": "3a1aWbGPuYLpU2bkxFULyMTy83kV4sn6EsRaTvmeAqRiTHHHgK6ZK8MLwDB7aRvpLPFH2wcuoAHgGCqv55o8TwUP",
  "key2": "kcS8GdZEWYM3PMPDbHfJQ4aFbpgMpqdQZgmHWgp5q9Q73vakKRReCyZwwt4Tu6dVZyzHdfqXHp8Yy8YauUKTLeZ",
  "key3": "3iWvPpGAykPrMsRPNJxhvrjSGUiKbgEHyD8oBBqPPfNYU8vVDRZ7WMTydEGj7hXxsjDHhMUFPnvCM8qvRuGPbG6N",
  "key4": "3kLk6GYENCPi3pg5gAqX2LHjPXm2MR8PFgxWBDpddmrJ2cYeGWcjwFUrokriuTJ8WiTT8yYVG6r8Fs3qxDuZ1A9N",
  "key5": "4Fshv4WZNLKTARAv2Exx3NXU3tHqX3JSwQYhkT7KpHYpm9eUNFYAbq1fW592kkrj3oaNsfcSGNZ5X9hRGbdp62ow",
  "key6": "24fXVxugrSt5KFmrVDKigcVpZ83oAZ4EbHDpMM9oFqYLtHoTd1psCPxmzjgdkW8XLwHPDgASVywC7xWoTKqNNLs7",
  "key7": "4fbHxUeJm94XyhUNmGep6w26TJ9Xhw3sXSp7jgB6yRzYFqosXu1wm633NpSoERerc3bSPfq24nCSpSWdzJHDzKHq",
  "key8": "3dg3g4uzawNaqTgKNgEia8egH8scAQBFVRXgW8uNLUtsWWWeWFzwjybB13DWahzzYXHbtY6Sha8eDgAu2mauaRqJ",
  "key9": "3M6h8DpBc68C2HdjyUUTEbVHrvVijMq9wMNHgPZzMyty5zHAnWxLiQRjXxgFbFxyQgmvjJ52RoMqvkCsj4yCEr9y",
  "key10": "5yDMkfd9g7LRf7yLMWvnYKdGLfAdfo1kt9SDUUTEZQ9hH24btH9a6crULNDCkihyvZNX23nupvNdB6rmivam2WRu",
  "key11": "22tJ6iWZbucaaZ6pe9Xq4YxyjSnKmSHGmqCNdVjxrG7R31wR2ZgX5gNSCFW8XTwj7XtR5A79BqfEN16gpv9ZXY72",
  "key12": "4DhssSFYPfYkiZKFPaFDdAcUcKqnbfccV1VjBA3Wt8Hk13wctctPBAJdhG7YHjKkn9qczKkLZHfJfQuNnRXYMT3V",
  "key13": "PxrrZVanr5sthNCgv8H2qtim6s8wJVfF2pdE1ACGvNDxuxMVggpfHsVV7Ui5DMa5ASR9MucvVXpUagAnR239Rwm",
  "key14": "2Xsd1spBGYAY3BntM7a5Q1rBiWkLcTyRVEQhWgSRfZ8S53qzkoP126umWpbRFmA7SgnEutTHSzrvggMVU2uzfZF8",
  "key15": "2tWm3JUEeUz42MwJdc2pPGJ2qQ5jW3VmHe9XfE3UbjEwgQQKr4BH97EMF1iKKkoDCmFQ9hmffggRbqb8GcVrW5do",
  "key16": "2C2u95wjppCaCVEFHB8PtLruWmgkyWtVGkrMRAJSxBmDResV81L39zPpJ2Dmdic1qgAU15cL4u9dkLdsMWbpzxq7",
  "key17": "2Ao8C3pk85sFvkvUKgsVqVwbbyiJAYHeE4tR63u9WoDeXDcp6gBc9rknomDX2MQZyhYRGYkppcg3T5y1aDhq3Mh1",
  "key18": "3jnDJovZnwgXGRuCAkWgEyHodAVzVXDYkmPBZg6pk8ERMcvmGfM3X9ERkJpTXqXeLjXxD2F7Ku9xpZDmYtHgNDPa",
  "key19": "5TJhTPkG1G1wSC1GXX1kM8Ruzcw2uvQdFhDYuL5H254UNzexLNARrPE1e5rpWHAPuL2jNfWbr7rbkdzDH6oc2dU8",
  "key20": "2kAALdiVDB1AxBUvPM4V63Z1Z37EXH51n5Xe8di4L6F5cXZ72K17dw2eGvABCGzJrDTv6F7xrjpWCp7HwYf9NY6i",
  "key21": "29q3EFsqi6mkoiM1NGLJeCRa4gBrbBqg67qnFAYSWrYnX5fMqLooFvswy8fQUzpQb5vguLV8qMxBCZmEmZtnt6AN",
  "key22": "5AH8aEqD5oWkMDsoftLmSaY32b2mKHRegUMbikB6qwdFk4ux4MgNHeU1R4KZ7WQ7FbjyqwPR3USRe7rytfoqv7JN",
  "key23": "mSVSHu2wF6MvYeTS3kNq7CpLdYBFSDa2KyctGGfZopdB7S8cuKc7GnsxhVAR5cRd9rHpn1vHWoGpbQ3RBkU1775",
  "key24": "5vZYwQEqaidRm6oLLWhrMwqDNZxErYb41PoXtRmozjH5FRZmgkeyRmsrkQ7KRoCLBH1kFPrJSTsqJvQwT7tL113o",
  "key25": "UT8kspw6oxzDK3HQdEsuzWug3EM1NHy7P7FhxLq2V2YtBRyWdymVQp6cgLX5kfhZoDBNvZtwsNrAapdGKZijngj",
  "key26": "56cUNbC2C1hechCYdCHCSzqUqe1aV9f4YHkVrVTy8jzDirMpAMom5p4jBUZy452unrsdcNd21kQUsQYdBiMvgGsi",
  "key27": "4AQ4F7aVgseLbdrGAcXCVsv6FKbxthCMaAe3212qZb6e5y5X6Tnu1vuBPmiisjav8gCsEThkECBe1XxTMz3pHrKr",
  "key28": "LXTeDfQj6Kykt2qMwWNj4GFBxTeDG7Dx9jMMDh7RUwsPgJrZiRj27jvfNJoLdph3z2Hn7haRbGqSA54X8HbvvQx",
  "key29": "3SaieEejG96sKBeSzUBDDSFZDixfd89x4HAjKX4hdV8c3NfBPB5x2xDQBXgx1UUowVAxNRgfxLRWyAev6h8M5BWJ",
  "key30": "8JnKsc3DwvYYN4RMH3SELcGqTbeEFX4BQ6ay89iaW7Q7M4oq2Uk7huYcCEkTZR6h9eyL2UwsZqCvANiw7RMhb1B",
  "key31": "ZSqeS1cnLCjaCKzZN5w3vHsZJxLrFcKHd1TnEXeQJ6pBUkkUVdEjwVfHitj5ZjuJrFAxhhU89txFY74f6w4T9Lz",
  "key32": "vTzpfxjZdjBADDh1iQvSJ8Qt9sSd8ngTy4eEzC31Qdtd56prU1twaaq3Pq6RbSSRrmh2maLET4jfydakWgJGTuJ",
  "key33": "2XgY68Pf1CZyztfu6WvjDkL16h12QDRDnjBQesv6TcxSG1pj8q1x36uvL46qQLC5YEh8Lr1Yf9tXqR5PU2NpRhhS",
  "key34": "5scMj46iu3gYGw9yULnWCpYhMRs1qHKZCg4HrYF5CfDFdhAK74JNSyR3SMRx5D6qvFWDA3GQufW6UXFbam4CvrJt",
  "key35": "5FEe3TFhdDGyWzMoeP9PLdA29zwp6TMVmVHtTWUjWaxjw8KMbHWZ6HTnyDX8hRPR8ZRpjh8PWU3Sxg66B9gKog9",
  "key36": "39KsKrjgW8eZydQC64cYTgzTZhqetoKKVrBHTgJ5NG19ADatDibEbnPHwx7eM3srm4XWj8K9h5if5NSfXFSPeENG",
  "key37": "4iS1m5aqmSDCx1cRhfCDR44aRFbNc9bGxCixpCPw7w9H4RrVQx2Sux4QH4KRrKb2L8HtuUSM2c8WzLikCCbAGUKa",
  "key38": "2AqX9pm59mF3hi96yWEbTMDRgUVxAFSxohVB9k7iqeahGGiYaLurK9UXWfMJ8Ud7MNeHXUi7YT9QHKEUqrSV1BLU",
  "key39": "LLg2rNTpy8JMa3zYc6nzig2iP6JXAxLMdXcNJdBHpaLC9kZLJkryuLmw8fJNrVUtRhvz7zg98c4C33FCJXG4SVN",
  "key40": "JAtgVap5bYAJ6bSATqHwswM89RwXCiPSYLEsTX3yxzC6nw3tdvogQVSE4yJJh21qT6tYPG1ejmomv6GAudWR59S",
  "key41": "3z3mXWsrovjxccNoL9UTpUtRBrEAWRcs7nWdbuazFfYKWHx14PVRShMF9rMZDghnesDLv8q9pp9FKqeb78XewRct",
  "key42": "4faNUmhLmHCnqqi157U1SU6GSHcTM7WTvDLdKL5zcB3YScxgKL99gnZmSZQHjFbEBdcnej2Gzmr87W8EVPsciLAT",
  "key43": "21btxkAbuM4JFuSovNUmfXbim6zisUzGvugA5Wx4P344CsCStHgh3eyjMmhgMtHYFvjv1HiWPkrDVcD2Haz95k7z",
  "key44": "6sYZku9mBV637Hd4Lvrtd4pWqVMKKzJBQJEkoTCLCpL6zdX3RetKbzfMvFwDg8UdYXDPP6vaYqE4fQ3GfT64z5z",
  "key45": "3NR5xdPaxaLevJFJgqnJLq5Fpchs1SQy6Bmnt3Y6YhA2NQ4BvxAa82QvHi1PfKyhaZBW5geqEwqCAt8JU7pynEsX",
  "key46": "aospKh72US2m614vhH8cgvf5pzoMBv3LuZZzCRgksswCPwogorMVBVbCVgJ3nqN2xuumFN7UWUhQQJ25xvBivde"
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
