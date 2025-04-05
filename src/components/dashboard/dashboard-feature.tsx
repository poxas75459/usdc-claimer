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
    "4AmEhZ4fHEuySKYRpSkfkgFf3xygu8YYxB95gyp1TVg7Casse7xxrNH2Nt4j2q1op5rbqJW95nvXy61KNyzdXubs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41y4gJd2sHQJ85aPxRdtbdRN7Yvshcr6VouGNaJjZoup34WtNv95LxdHWvThjimvJQpCm2R7XYE3etNeY62A1Kni",
  "key1": "5LYuezKMULAgqeSGnJD6xmcBS2wdr9a5YqsrmWNgyjyWKF49F3X8vTACkFbZEARJW3ZzBdboYzmPfwtasyBV3Kps",
  "key2": "2NutHwHj6RMJ8a8jyK3qc46QvU3zQQuutLk4KH5SYrC58dVC7AdNrQh3ekrCH6VtmEKdLyuCvCJ5Q6zYPd7AP2vc",
  "key3": "25M2LWprN8pGbzXNw7eEPHREgh3gD2qT91Jb254i8zrBBy4Hk5poZiEbNgAXaxkcGHaTcdCf7j1H1r3c35zHoHSz",
  "key4": "4FosuXTSDT1mmQ3jaF5zyHjLM5UyUPZ9z6UKzj7yJMceUKFvFEU69vo7yqRbgYe1UiqYGyJ4WWGMpVzdjhkf3jue",
  "key5": "59qvTALzsf8bGrb9eBSjDBiK167Ez3NSCfhNfTnxRGmWjukXtFg9aSWWVgy4svAYdXjCa8QcFEr14wGZAtiTXTLk",
  "key6": "2N3B43XyBYmbGQw84qUruJzECuWfdumENP6RaYTNKdhMLmb6tuS9kq7kdfiJpyjNbWiTwbg1QaVDraSo6LzWoYuS",
  "key7": "8gMEhwYVfBDm8m2fG3dcviXH4xwJsfCidm4oWWGCCBW8tDXgyuAZ5G86zA9jwcsMzaJoEBoZJ3U4m8bjoPWFnb3",
  "key8": "36buTV3gxK6PFk4QoYferAbtN2nVawvKrNFshKCakcJcHapmTAhrSNpohSC3XFYmtWfAqr9XgfTsmH1jBDLHMcBN",
  "key9": "5hQBcEbRonsh7QgnR4pG2qccAc1yudVnx1XiArYWNaEnK1FYCS5oLGu9G1hzziSbUTk4gghzVhzkrG195AQQ9fN9",
  "key10": "2Fuyot4xJjw3fzSP1C2sGdDFCDx9vakFMQb4tn75GJcjTcttFns2pdicDMw36JdnzFkSe3TKquMk5fofBNmQxAJn",
  "key11": "5Lpw6PeuZPnTSR9mYHEzJx1eFQBW1zTcjTq1pc1bgmJpi6nPvVKzri1fYA6rk4ESDopTKQbHC9uvNLF9zDhgqgMd",
  "key12": "5YwCH61Z8Fw6h9XfhnGcvDNqgrcpDxZYTWTCxAVFKiNkLNGFHQXrPwMVzvi6FK6NbBtez1NBeK48n5kh3qWvjTbW",
  "key13": "4W9dxmepN5ocBGV1o9Zkqax7fFqMG48Bvej4rwNz5v6tCUfB6NWC7a56XZZiYj13ZaLDQ5yBNK5kszhMwd9ERQEv",
  "key14": "Evbjvr4E6w3rBzNyjrKVnD2iWdubh2zcj6bPiNd6QApTVpLfNHLjBJWTGUAutNMZiQ3DbrJX9eJEQLd66DxyxvL",
  "key15": "5G7tFuf8Y687kvJ2ksrHLe5oowhLeJ8m4MT6e7eai7sR419jTT3LQbwfhnEgfRsV1EvGXvqQsJ2Cap4bbzjUodjc",
  "key16": "2sxeMJZkLsYRSjuAmSp95HzRPTaLoKW8WL9SsLjzPZW4cMH6qh7NEw52d3cgk2WGbKXJR5qBaoXT96WJC8s5gcqX",
  "key17": "6MTDfxFWf3m7QvEFHwR3qscG7dZYavwhGwFyRZxnbC6EjrXwUNag3sEnwhjsL9gUBNr7hwM2juEutK9V5rtrJ2s",
  "key18": "2Cpro2Vr2Wyg1WverQf6xAhSuP58SPtEUbHQj9reT7eKGDzVxXt3yFPZ3iGBx4g2gXHweJ4eYhtYTSJ6T5gyFUKe",
  "key19": "KrzZjL8BVPzP9Gg6Es4QnBkho63cE9GVmCABZZh7WcipdoPr9KMCcCSFboiR71RAYpLQNFLYsmN2o5eKwcYMtTy",
  "key20": "3SyZCABTAF6LuDrNJr3M1PMenXVbPFFxbBLVNtjr7DEWu5w9pDuqzDZiYEpQGw4SUABaBHuommvEeMJKXZj5DPRy",
  "key21": "qcGrA1HpLd5nwgBNWhn4wohSgNH1dYNnAwNUnGHRJiyBsyt5e2Pz9V5Es7UHhURhYxbLHVv5oVkAm4VSNw8kGfE",
  "key22": "53JR6ZG5hFFzwWAouxQwg1gswoRZRb8tL3e6NBq1CQ2FWUMt6vJXXd5Ut6gdfTMX3XYS7tYa5cxa4bM53sjkgKWt",
  "key23": "4nbN9bJnEBn1Adp3Bwwhrs3MmPT6ByQqNvHXXFfDicNropTdmkpLWAG9NAx1fH1DQR5HXyc4Cm5Sv9479J6Yh3GM",
  "key24": "raF4EK82cp1T79mjrmQRjHCP9Gziw3m2trjsa2XgKCpaQzKjcCR81DWSsNqPNLPqhGCjhJVBvdnMdSwZzsJk6oV",
  "key25": "2VnyU7YFVL25P6xe8KnianhhJD1rUfvXhrx6QvTnVL6Xro7WszWLjCVWwK33XLNgDZjgTD66kPVRhGt4WZkytVpo",
  "key26": "2Labw21vf8Uici5BRkL8PQigUJtAbuqFtrH6hqZT94awdhuCQRAjJC2EgkQJNFPtYEjwUE5F4kzj487qNap2FmBB",
  "key27": "2WzBwndvfYfzhMAXuVGpYdg7ngp7g7njEiz2zFTcJ5bfjhUu2AqnctiXgS6oJePyKN7JwzhEmP7faophDgNQmL2S",
  "key28": "3Eg9hUcmrTwSBYbqJHPMGovpA8bpxPwqCDyXr8BN3Kp9Ggvy9sq7jxPcbQ39MDhzUNB6oN2Dn5oHAbjibQEdr1Bc",
  "key29": "5VHmkAUtLQHW6ctCMCqEHXMUpCfxjNG8FAuSPP6j1pm5eXJvVtYVEidSrJYCdm69hUpefQfyWdYi7S3UZppzcvsm",
  "key30": "5UpTgGPmAPyw29XSjoPnaVXPkHxgnbsRaEtWUoustD62EGobqbavvSvscFQobVqeyFM1vr5d3fxaLtLjnFnxQaSS",
  "key31": "5xs1a6xPJgwT2URakJoo1NvChGz5fktZ7QruV7kDzM8HxeXMdhZQjNht34ejQPfdi8sbX2nCXACYKoftCK7aKr3H",
  "key32": "4WTw6d5zze6jiL2btbzvJeMuTtEaUGJ4tWpmEdXT9QpERWCdsQo2SDpGphwdnP4QQjvyHx2L7wCgszSJx4CHH1vj",
  "key33": "Do2WPFXdeo1NAxWw9jg8Lsy8fggn6SPyJsQmW2MChsCuegXbtERD17TZzo8iaS4VDEjxDEEtTjN6GSmH2RbHeB3",
  "key34": "3BKqdASu5Ce1dpB2HZXDQtirdAy2H44PE7bRavFdhSoFVMyyQZweij5rHf4x2diTMywtZr59e9ratTsZDLL6X37n",
  "key35": "3SyPVwDWGJRCL1KDtTYY5vJ7rxG8ksHnDo2XpaNRbUdGWjMfPsnxTQ1Jh9VPrVYKbSYV4HCzQPbKi4qZuM9k4CjX",
  "key36": "55Hb6gDWEfyzb9h8wPcKyzfXCbPXw65ZW1CC6uUjdEMBNUzME3q9epFhrpsaXCSBQG3PbXRwp5z9rJTVyaSDDife",
  "key37": "6oJbCCxu2xhvbxkQU7ZVVvXn3Z7uYHxVL8y789vWtHXDEoYXVr8L33cwkpLsGrKeHQei4JQ4G7GQEWUmopafASL",
  "key38": "hV8Vs9kHHnParyG1z3h2BREiMzCDSqQLzp7ipfwJgF8EYsRVjTwi9Ey6WWTUBxrysDGqZdZjguFK8N25iaMueYm",
  "key39": "oBQJ6UgSjpBVLpcETuCWWhzNJw54udNoPGYVwEpXsKRk5s8gLUF5yGK4NJeo897FNY2ycGH1sNuUUymaATJe4Kt"
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
