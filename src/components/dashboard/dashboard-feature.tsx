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
    "2nYVN8R4MfftcYsoNyydDJqqf3SNx576UFT3ePGN7HAxuBHcDWLRwrJ4bGvhCfXHVFWM6DHZ9oqYkvD47aADeGTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwqcAWZFZEUQ5JxFGV71n5QrPctWdq7ndEqbgfdaaPyk6yhZeD55RKJSVPJf4cpFG83WuJmtqLg3efH3g2mg3WF",
  "key1": "5kQGGa7WLMvNvHzavTVjDX2PZv1znrSxgd1Ahjvw8txi1cuJe9qpK5SYEhTxwMcnoLz6n2m6AxnR3CXe7a482gkG",
  "key2": "46XJgRQSQd5yuy2p8QW9U85fJFmVkLKCeAYhz9br3JkHWDiRUhsy3LdCxf8PzDA6hKCz4Gss4hCNkCivyZYq9QrM",
  "key3": "3BCs4ESLqHuMb35XEmsTvCvD1pB8zrTxQfAPj8tWYzM4JoFeN7gVcNYnMK8zguVA6eaqsoKihV2egKkWFrecMTy5",
  "key4": "4wJ9yjAz3Er1Gs3UVcvT9qUEH9LutVJ4TBgxWWu53C2nCrigd9RnES8WAW64cunJgiZE292vB8XsVjKjVPMeoWMZ",
  "key5": "3ewLpQhFLtp9zuQYuKp1vZBwmhS8wfyFRLGrHfL1tfU811owpqbQUD9uia2wWuSAXtvxnAxaHpaom4XqSDJZTJ6b",
  "key6": "36bQMYu95qhUMXfm6CzjsyohwQqR7fKxz4LGzV64egkE1qFnRJbHMKp4sC9bQaACZUPSsY8BQE1UGkEUfeznXxL1",
  "key7": "53mSQdFKg3Xbnbpo9Fyq8uUoCJToU8wiF4jd9776zahTk7f6pRswydxWk325UtABVoq4fXRbm2jEgfnw15vxpuMg",
  "key8": "35gw58S7iHxCGDpJMCA8zpR3TM5EGzeuxjTszj9KvMvKfbt9J2VuZUhFZ6hTgXnUxHL8YKJXgvTEecNxvVEffwsi",
  "key9": "mUe1iM9VRWAQVBydeM6eHAq31ANGGe3pUBJkXNvHGe4D9ZKTcyiwN87hfqHEYAByEn3WyZawuvGgT6Qtv9gJ9pm",
  "key10": "cNitto7ceqjJBYcHvrZ82jiGHyRJiYU513YC3RpiRq2Xzeh92dcBCVa8KuywLDC5ipEkcSR3tQESoCoZZstKpc9",
  "key11": "2Vj6wWFZnxse4KtTFVwSzxB8ZC3ExTg2ngbsGapfN9mxQEvz4YRGdk4udQApqk8MBznS6JHjZM9bTW4n7KZS4hcd",
  "key12": "3UzEietADFxwQi9qMGXaBKvqLp77CgYPxL158nSwSEnVqHojHjX9rJgTs17P8a1UfFscqheCgZ62ZNhVH1mFdGDD",
  "key13": "2UHWSZXpkEirhwKuDKW9CMMuD4ppkortZykCMN7TFZEKBhLE2TzsuHMvbBDxxLyWDvkQPAtJa7JKBmE4Q6yknMVn",
  "key14": "5NcHr4CeiD4LM999s961oJpwVvKdk75YAxWuvNRPofx8ysHjKWDCGoiN348R8vXbCibEn4KinJpWsHcPHGMt9Nu",
  "key15": "47dVnnKznrkEXZJLyozQgekTqhXV1WhmvddvVEaAvNqtMfvRYnn9WYU3dzvYsP3bzADwjpm9iJzyAafendc6zVod",
  "key16": "3g9R7QcxFBuq2RgHowVpMo3XsL8NGn1Ct9HeDCdJuz32uDr2eu8xBVaatRZaDR6aDWYScxbxt43AiiHvAtnSFaUz",
  "key17": "zaHUBDEe5323yq3E6QLN9ZGFjB3A7BbRHA7oB6VMixxh3ux5UFBA13RrovX5aWh7wP3uMdJYM1byZUxcDqDH8Hj",
  "key18": "UuukPnXrXaxkCQR99aFir4ixuwox8REBjW3QTe4jXMRWWQVQuesyHZKiLcjXAYUNLxgNWcQLvj38bEJBFrh1pru",
  "key19": "4H5Vvbzp2Nrh2c2pVoV7XsZN8HEBhNhdc9r4YGo1qpVUExNMDSojUq34LEdZSkfV1izSTZqMNrkg4xAoBZ8bLwQp",
  "key20": "4yEtLp6i6F6G2yX85n6K2x1YCkk5GSUiz1vesui3fMgPP5ZtSub1uzfbPygfyCMXR1nSf81wCGakcGHwGovURrco",
  "key21": "5erumcYjF99gAiFuc9sz7cjBUrY3RrpxnmhWoZ5Wdn9o1qkMJh5WfmE5Vv85rcRtVnCxwJegoEFrYnzugzMNxW9B",
  "key22": "2L7gHGa9CX7wG7NBgzDNjGXTfnMboj7KB9aHAqc1zTBYzMnb8F3WADMMVzdMxVG83YdjyCWD4TSGuh93GiuBP2Cp",
  "key23": "3AQo7ghPQD9mNfm63hAMWFNSMakbYSsMHBmM1fw8JxXrWMKD22oumf6wAfGAazbRaTmKTiW2aq8hfuaLhCWMxmNQ",
  "key24": "2mrBJJ9ut8E93cdyRHrASLFoxP7mzCF6QYwFf2ZzjdM75xCpuPvBNbYiX2rYiJnGE687mLt6SR5BkTQREL5kgS8n",
  "key25": "3ViGP48JZ4mGnDyeiVii73qKGNsFrHqc49YYRbyz8RY8vweuq4jbhkG3yTpihNAG8W5EAcFiX2h8XviXHV8MxC8k",
  "key26": "4WxukDxo1vMuTWG3MBAtNUxkZHb3c8DFCGuAbNwtznEaJGPcdWBG4hxVEkiaCHaZDRJsqAyCso3cZZirMyUHVzWs",
  "key27": "NM3j5RV7YD5z9hNw3ZmkwxS2DbqBosddpwwVmVfRhVZuFytv7JfsPwhCHcwpofsvvSQB8spFQp8makqGNjYouop",
  "key28": "54QXQ5hTNvbJ483XMzMoEDtkUgUuyctDsVQ1TXm3JvebvixE7js8ZkgDiLsiefp6hQrEPEZZzi7ad4dGWVRyYc8B",
  "key29": "2w8y7bAyJpNP5yKa3HmjDNgJnBDj3RJrnaF56NuoDNPtu7Jb8mYP9pqRSbYobV2ESM56pnspmJtzRHh8mm6rYPMY",
  "key30": "5m3DLAvthnGDTedGsquZTV7TpPvTxWhwGWBbaVd2xBpsRTFU5fHY7VLym4okj3vRoLurHBE4gygUWPxrYQqzDG4K",
  "key31": "jgTzyUzfgDziYpLLhLcvxrGawFrBdHJ3guTLjdWfw5tgnKwK5itGo3iYaz1kSfhwXxUwSjBrHD6GLn8yMMr7zPy",
  "key32": "3ryAnTzxpbdrDKVygpk9VTJwB7kpQaPjpZiDpfQZJDax8Nsu4nuNPQuLhFoBsrTPUcx6q8oKxGrWWoKSfrTdQmX7",
  "key33": "49PeZvhDWh7RaML46jZULYDF3CheekJTaw828qMGPciabNYRUVgXXFjE4uj1jN8S9SSLkbZDNLuVTEWc5wbtqhAe",
  "key34": "24DHvTyJNy9LCWJHbkSRFTGSxPW1CATnNQjNQej229inBnuMEJVKsizEw5hp8Mb18Wx55EThEyGrvSY2ythaB5D5",
  "key35": "2hFTCxEQqrnhKg5R75DpdLhPqDr6BAckqfZ7VjcoqwWsAerZ3VnVyWrb9u415sFePcwtPQXJPSytAAPZLm2r6Pb7",
  "key36": "3ZzMTvXeVLxKScYMjR33zzS6PiCMDkqs7VfGHdtKHKgmxcQiLUuv7Fc2LJBNdMDHs9ZSNHCZtZRfPNDSHmmWRj3a",
  "key37": "55nhofvLjSUTn9QEsAyjyx7cx9A54s3Dd8caKWCekfBTmHfg3protxyrFoTKNnW1fjvRMPGHnwvewXHrF6k22ndm",
  "key38": "5gMueSKcWHLCxyHWPLZab59enE5TPHADfNdBtxSN7WuMAqPuJ6oXwFKbBohmcqq965hepamnZ2jwDovXrjSnAuX1",
  "key39": "2NL7KS7WVdfwJcqhdvt84km75f4bQLa9mxaH8ktPgY3kc3Mgz3zq7kQ4KVMrZgmJTLDrJeurF8XLBsQX5hSAvx5E",
  "key40": "4MbRN3E2uGXH7euyazidwj3xFR7QYGbHbjrGynJVLUXD1vWBqX66BMPz31ZWAFU5ZvqKLA488APz76L7mkUin6xA",
  "key41": "2BjHWjubQ76HKNdr7vmfK9XX9NKJTAbveAnnxVYLtpi4SHBSinLqMyLQgozVRRcM35Erkwac7DP4HssSZVm3jpKA",
  "key42": "5JGvkqKUEaKsh6upvdNwvZGsFtAw9siFfPKLWLafpjX1wSf7tfX3LXuvyj5ksdcqMWq7PoJmgaV3aLsciiui678A",
  "key43": "2WEqrt1p5wCZaSRxHxL7iVeAyFEeDANEyoiRtTJu5ouWpeabSDmjCMYEGs7k4mqg3GvL1dAT7jSuNKNrR3J2d6GN",
  "key44": "3iecCsFHsHqt2N8Cxt54xH12oAQkkyBoXVMoLSmh5ujDQihZhW7vQkGvoE5QzuT7i5bkFQjtN87urNLgp4D2xSeK",
  "key45": "5fC8xKdjtqAqyRrjQxqyoz9SQkq4fppwsaerxKE3ubpKuUSNpAxwYMB3hxbWJiBfuBSJjpfNvXUCGxGz1vkRehRJ",
  "key46": "gnrkTzS9SRJbkBVFT4JXaADfkLY2yoMBADy7devgCRsTGFZXUJ2t9Xy9dFRYtMH8qvHF6qtdw6BF8NBZTyuDYpa",
  "key47": "d9CxXUJfZ9D32BCsPejE1c8UhHZCgS1rHHjkaVfB3vgi5HGVJmgviuBkUBwrdQKjuuZ6j2KW5JgKBvDBy9mwUjZ"
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
