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
    "4arXgYN3kUCCYW5qkkzrAGraVT7mzX4dVsRuYZGKpX34wvz7MtCg45Zo5q73cFmbQWeSbbXwBLjGqhHLowkVUGVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1XzMeiW3X6JwbXqMcLtLPTaMU4SKtYtAA3Cid6Bsv4A2ZowYdWgbX79AkqCCe8UBVQCpNLLyWXJK9xMupQfGky",
  "key1": "2XDrCZWM6QxDAZ6EWDDnSx8PZnh5npGq694EpGfPyRv9iej9Q13c1guwcmgL1fnAYxJsSVeW3vRLesmBM9W1qE7s",
  "key2": "4BMBaDVULXqCgttn14zWUUfXeJ94kYxURTrd4nkhRHBwQ7Wkr5WqpnHs17V1QKGt7kesF8kCGvPuhYoRB7KSAVjB",
  "key3": "53sAzTNsAkN756RnVDqzy3rKXUWAwr9XUzrKR1PgyaTYgKyQ4T9ikFzFR1FbLsmuYxnsCSb7BJauxjicVHgEDSnX",
  "key4": "fVGbMapcnJdD3mP6Tg7jZZLdaC9jUAFLrvzanjVA2hG3v3FuUBYdfbzqY2aASgpMB24RCBAuqXiBR7KzoZ8WAVj",
  "key5": "5sPyVYRebeoMMxvF6nuyz1edEBvKSWXXxWKoghdzMJFbCWDc23n1mYaf7ke8MVFcWybdYZEz2JfYZBamaSB9aJyQ",
  "key6": "33aXgAJVj7vmriiVMZu1Kbk3bnPt1BQdyDGe2fZP3r8vi9GGMzpvfdZRm1JaTKJ8KpoLFvtuVKxUGfUKm99ArW2P",
  "key7": "3zG6ENymky3FnMGxeyzgHVXLpECSscm1LeNBUcgjPitapqJy8vxPQAx8dsPgK8NvMvsQP3PkCk5nFS26RK39c4Yy",
  "key8": "fjoqno7VoQEyEQYuYFV8xSZoso7vU7ie38BJyHcBN94eZaGo1zsVDsxBvMTvXie8aY6yGnYw7H8TuwxVa5h5JrY",
  "key9": "2SrKEru8VY5dKPsz2F3gNyWAw674Sa5SNebhfyu1aH5syBCnHtj1Fb4vedoUVGJeYf2AV6TywfrC1fy5tULCmZiR",
  "key10": "3NxtVEzVhDpsumaSg2g61t7EysFz5ZTBwCDfxafd91y8tdkx5vH26Cv6TAE4GDJ4YNTt1ttGArA7fLfjkGnTbMs1",
  "key11": "3N5mp8YdmXYbfMYAWK67yigtMNoVre7UNZEUhSp3o3EWfaDt2Wu9fpQJEDhT6pQ11h8adNnTrFZC1aqysyQcLXTH",
  "key12": "3nopSmHVXEoQ49WR47Vfy5qd4Yj1miEAeNEhwCNb4Gf16US1ZdwNUSJWpPG2kQJ9iLP1eSw5z4YDyZcqeZQ4pjjk",
  "key13": "2M6qqPC4eEs4BipW14ejoqDT5tjZWTJ99dVWuVT6AS4u4KQhkmRNzQECGJPWcjxegQjWY2v3DLomhSAvCpgxnMkS",
  "key14": "5WNuUNiYAKgiJk1to9suVYVhsFTVE6drRqHnuxRbaifckziJ5rWnzzKYoUDBmr4fpGFpERhRPPMzipFnHu3hguH3",
  "key15": "5dDZq6VcdJzQhpX9GnfKWXrwRanv3rR923955mfEfdYWaNgvjrRycXjmNCSBdcsJMp6pZzF135Sf1QegzHavnxUp",
  "key16": "5CgEDmzCkQom4qTgYJuySuqSJCgynyn79WJgxFMUtsZXvzpp7MLTjBwGNu6WCqv2UvXLipk5Qgg3ChVunRHP3gZA",
  "key17": "47U16WCYSEz5jrYeZESSnGoPR2kJp8PRM8ecGF9kerKCXgm7ZmdUiC5rRUvDf3VvpwYWmw5RErJGJA6nCm1nCJET",
  "key18": "pxToPmbAaxP9ksJDi6MUbcDWM6Z1zSioQtnYouiqL67BdTmRcGnCErPfVjZGqxLGx4W8sZb3GigYjdRZiFTf53W",
  "key19": "5i4X8NeXN5dyrMJnKvAktsoPAtBJDufGAUUAzBK8SGvD5o3ruiMsxj5yYZUi181k7ezjWVz3aYqWCPHRgxgoAQsP",
  "key20": "3c3LJMKZtNGvn8HfZadDZnTQqezmDcRBEmSnWBkr2gGBzrU1qwGX9LmwhRB1pVpHUFJqqmqBXh8aJre76eAwyvGS",
  "key21": "3NGTwAkMVcvo1d1ncvE7vFJngXgMZGDcUvgoP5FD9CkfBGRpUiahVMySSSrmCcNnwHWCRcX9a1Rp4reJ7BKCqimM",
  "key22": "PVJAT4GAH2ke7dpr199QREHAPTKRr26S86FSzZBiA8jQnY2H4NfAPYG9Skf8NVY8D7ygDxy55Zb4rGNc5qHzodW",
  "key23": "JR5fMRLpAYkxoETp3sPGU77Ff4b8Ux1tLXoQ2jtMq8Xo83Rw6e4sp6X18A5jpKVNL9RdvpgguMSnsV55h7gyXb3",
  "key24": "4e4RPrc2FGoa7ZztbB8mVQQroBAhY2Qequkzxwfw6tiPNxoY1uwos1YZ2tDjfCDNfRpY4ncGxZuSq8NCBPjw91ZH",
  "key25": "247WWUfEyxjKju7Kk4szFJRZgyMuufcQyMyJ8U9AZoWDiu8eu513CqahqGLj5brLh2JZ1qx6Ns5KEHzunnwSdeZn",
  "key26": "Z1NcsLjV3FxvJBwGBthD3mGR9EbFtBX8T3mYasfCyHS5RfDqtPJsr9X9ufUZQZSxZccFaS6zHfr2AYBKb7hQNns",
  "key27": "4GRotxgYDjH6V2ybqZhNZU2RmriiyAGDhTMEXQ2cU8YYy96BUHuSi7m1WvtbR4aDzATHtvavaaCu2v5L6KQmREcZ",
  "key28": "4aAEcFMdMk2wWYuwgaPaEWooQp8Z7HTCwsQQWMRwzmJTHSLBcuCxDhqeddYmCUQworWSoNbwBCnZD6ghVCphaMdH",
  "key29": "4Z6xW78SWe5JjtG8BTnwCvxRjhbbXKaDEJVGqpRiYdkBZhGwN5U579fp6ibu6b6hZGH6U4FGhWcz4VU5W5xfCwhh",
  "key30": "5gtrQPXia4JFwj4aTw4DwyYmRWcpPuAZZaKnh7bYzqytM3cBrWVz5nR762PdnizCSoiczT3777eNuvVSLXrLmUZL",
  "key31": "WnD9huu6Htq9fAYDxfLZns8hraV6DJKKhmCBuXmGFGShFi5yWvKahCy14q2mi9GHRY1z5QP93hG97NEs5u4iQLs",
  "key32": "muvFavbEcHP23KbLD6m8rGz3irk192UfATh2m6zTP1gq47x3ffRaCGRv9ocVjuXEvgt8dyELbcJScMndDAK2p2W",
  "key33": "Qj88uLz34iQrnKw8jaahF5BMnhJgoTkWRCpa1A6GH99iaDWXd9522iJiLqTSiorKTbkHPXCeW4dCrzGX7kHvk2Q",
  "key34": "5wZBjswsJhYEc821tHKHf4Ue1XgajQsELwtqFARTP4BcwP6XKiYB8cBaQUruyvvmafZE1nHKdxs2ARegvBKcGbmT",
  "key35": "3J61qMoKDPT1iwAWaYLKZgXwVKNP3v2mEDZKdtE2PYNwNW54Nt1H3xJXWdrXisSv6RsVK8tr7VHrWg8HtXFfryFS",
  "key36": "4guVBiRPzLr6Q9SLWdPMvW6fKzsxoE1SM8XhAe2TMDi3XX56C1wtpkMroDWN9X5PN4VkupSeVgD98H4oNwSfWL4s",
  "key37": "3RZPUV8Ep7b4Wg42zsk7Rx134MMaorJoM2Pd2foH6e67xh3cDCZJxyeEJViPQKPdBw49g3Et4nybs672eWsyN4Rz",
  "key38": "P7LpHYmnajfwrFhaGbD9SADieULJbhUhmzqTZuWaXgg1nTM5KFSvHJJb94Gzo1i6Y5L1zZVcSUiWGkZhpJa8dq4",
  "key39": "1jpBQ1oAxSEAQk9iw3cPpKomGKc97XaLxBCf5C2vEtGhDMsGvKRBCF1ZW6d772bA1JRHWg8tyqstcj69Vo2SAUM",
  "key40": "4NKPF8S3mk6S8fxEYjsae3AQgdBmYN3r112VaWsEhGhaxbiJk23fS812BXsp1qjS94JRrCrzbHJ5V8hVAGvWvyUw",
  "key41": "e2Aspx8RvHHjney1WNk1tE8buKx7yMyAehhtYbtUhx5owWD9nbyqu5CKmPtqHk4H1aFMftoZG5Tn1c2hGc8GNKQ",
  "key42": "BX1sX5u1k3tqCqtfLhkDDdN2md6uBPLjXryxQWQgx3d4CELKJmYy8k2JksmHz8G8ayafEAWewm264FfroMWwFVP",
  "key43": "5XEkzizfhYBJN9Ho9ei1EU1Y65dMfc6dbwtpH4XXN42BnqmqzEPaFDqDeLjBi4J3xpJ41NJj6CpYb7ogExFbiioC",
  "key44": "2NxCn35vZWVTXh63YSBgaD1t2NNcMvhCJZxTkyD1SHBXL5n2dfW5JG7vAWSNQm23FgmcrPUNhx18H2iJQ19PAiQg",
  "key45": "3CaWc5Kkq7aq1uT7PTLPh3qxFq3iz24Qf9U4czGrBQY86TjCagNFs8WAwnNScZTzxnvQRhGWPSaXKydTdzNzqx9u"
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
