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
    "2er5RJrLMxKVaaEKWG6Yk82vLTmi7Kf7mZNnus65FJJD5kUSnwA1pgkpXktyLxZdB6p5hxMC6KA1EmTvrg7ymY1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oJ13X8eGBs9HMNxVeQtFp1BiQijWaKLsNzbDchGn87kzAdiug5U8hp4a9qM4yUXBbR5q19CigeqeUYRsXU2T2w",
  "key1": "5HeYTdyVXMPtFXPAZboRVGDFnduu7joQweDXEaXBtiHZmWAkTcC3eKyf4jMh8cN9pfpqdZmFjVN8dQEP1Teajdaz",
  "key2": "45KiG4oF73hGFqtBRP6fCnoqCej6hvqUWWxVhg3vH8wxbBePQqs54UJ4Z5qG65zgWEQFWtSHbrXLTL8WzgeXtdSH",
  "key3": "3A4sdxnggpAr6XkK4fXZv4aQqN9rTW1Da2QTEpKymyMSqTwjaVEitEtkma1A8jNicqToD5NhLyB8VNWcXqgayGqf",
  "key4": "2eZRynPW3tDL4sLVfVJHFpsDiZC1T7a7bAVtketk5Bi1GjeV5Faf4MG258Jabq6usqMF36sUciA6tCaDJakhMBtJ",
  "key5": "2qJGPxK7tXRNiRFELSNKPCh8xKofHdEdVq5XqX5NDHxXjp4xtPXQuqE2cTP2j7Ay9QoNFp2jeTUfiWpsrmAm48Q5",
  "key6": "3s2Rrb2LyafCwKaV1xg1Hju1mQ49UHFf5w56v4MXioi486tDS5Qu5VH28tp2zrbmia1Nmhx2b8wrcHu2YGLdL8kt",
  "key7": "5XohMT5opkmw4tVz58AeJHg31dU2yjQZ29maGGpZLsq6YYiPP3Rux8GYoQjdZCS2HRhi8yN4czv7x1qbzWDBNTML",
  "key8": "4jyGqGrqo2RiTvtpeSsStQ3d5qRVjVbUubc4TXkRznahimY4TK1LE6mv5jGc2qpXqg9tsPmtA7ZzsH6VkHgDnxqY",
  "key9": "4c2hSg1UbYt1afxoxU3hxN8RJ63oR13n2yACGS6F88tcN2Rhr1VJfhfsDquJBJitjQK3SSGxA128V4uX7jGShUpk",
  "key10": "5cLMPbQ6YeTSBeheL1Wa1T3WqYC86eVm47EKTPnoFbdqkMgXanZw9rkmaEifJyXj9WJKA93aRiBBQrNZ2hWfNkVo",
  "key11": "4n1Dq2hxp4D94Z4cFCrQCKmreHv4Qv76v1NMtmMoHHyEFYbcRAyHyWQoH23XzL9RPb1tkWusyXitTG7PNoqZYG7x",
  "key12": "5235VYqFWKJfNjLJhNnjVweQTYGHHiichLmJ7bNeGjn8VKqkhvokitEiqZyL2XQmMcmmWULRKm3pY4M5B3cWycaM",
  "key13": "3aC7tn7SqBFiMEjaj2kefK9xA6hTwDxFkuHcLHUWmZrCtKjb7Z3sWYwbaq1nPPVK6DJBMo9SwPCNKo9GirFDsVJb",
  "key14": "3WZefEV2MiKbPCTrXSvwdizC3VsM9GEdAU27A9gZSb6YY6s3BPJUggZub7ZAztyHmDrrvuxMwVpwBafTmHDb59qc",
  "key15": "4Thb4GofUbUB21s85ZSkXUXJoLfj8UAcGGwQ6skNEZr1wHEReH7BgAioTStjRuWLgLiYxBD7Pn7pf6trE3mxT3XC",
  "key16": "2LXseMMY1G3dbUCvk57Bn7qAgjv2bJkfMygdzkx6uJvexMoQzHx5h3c3VmYkxVY4VYobacy4E4QskVm72RmLL8xP",
  "key17": "QD9LtRLKnEMgxsbuxAMg1dvworaZbgZD9cxqhHYWVR7PwymEAvLH2L6o2T4fqwkPq2VKfNutRbqAGSsrv6o6wvt",
  "key18": "36VsCAzJBVrpajCKf43pfSkPnNbeXCy6f7j83a3PKTie9XB9hg8CSV2GCHBqY6v9eZr16jNwBtAdLNfNaZ92FsR4",
  "key19": "5x2BaHMnbfo6oFLWmoQFwNyuTo2PAuYwosUBJn8GR3t7XgG5QcoNVZn19iMSYhJKHT7TxHrdsUSNZZma3TASqkad",
  "key20": "48bfK7NwsYkKaZ35CvyL5pDKGXCEacUuHDwcQzt73Fri6yYUntETdQJLryT44dZnbUgUE2zw8JAKPrQ7aHqUwUgE",
  "key21": "25xB5ezsoEEb93VbvKfGKayZvyvE6P5ypDzm9HYDFmHYm1uPhUFEucrJnSLxPPagbM47RL3J146jxtGv1dkebenK",
  "key22": "ZamUo7sTGwJKAWbTpCmisJ6fTgn6Lgz9pzcY65GGy7cZFkfDdUE2E5vRhseKwUPtSLx2QqwMp65j3aJgpeCWFNt",
  "key23": "5cNvXwBugbJx9ZtD3AcZfBMtLUCEQ9DfBXujsh5Gqv73xSDM1eDwYWSnkMWM1WJpunFudNFDKbzD5nQAyxqNVa3J",
  "key24": "QYdwRW7SP2cxPLS6jscAKhBEmsSCYyDYfuCLmK9DJcgCqUxoVVUURE2XvKc7yL2C4gcvq6tXPip5hUeF9mmPc9S",
  "key25": "336U644VUtUWYS8bRfjeJZB9K2xz5Rae2ezTm5PV8cFFvAKqfdS1WA82BRZGVTuQ3bUhdhfgrZgFmfmTMX19FARe",
  "key26": "58FBzBJ3wJLekyon6SnaJMEtt4KFW4s8W4qQZJiEnoAcrKMVQcNnxaEM42NCspaYoQZUuDdrU5Ejsje7jHLiy241",
  "key27": "3V9RzVAUcP1aZx7bMJ7wdBRVz8tT5zAte318k2jfAPzFedzF6WLZFC3QjJNb2dcYv9wFYvJ4ZiEiAQzbBDLZD6GC",
  "key28": "4YjLP4bK8ik5cfRqcqAtrTNPHtxyQXQHNtB2M4d46G4of1ZjQHJU6ivr17U6AAb1jCdzxkWYi4TVxR12zDX8Rokc",
  "key29": "2cavoVfx1uTkx2mAwgBpsSW8d2rwkkvVA8SfvNa6mazuC4ps3XBGK5ZEjWLe4xGz84gSt1fUf74pnRxMxsWCMcXR",
  "key30": "3ECYs1LbFQzEhrvBDN6f9k2HQEZTZhba9tJeGoxwbjEC22cofBgGau2bstGjX7WJcv6dRvcvBWKFgu4U58mM5vDm",
  "key31": "2H7HrcLH7ugRRdN2wiT5FfLsN5tdBXVGDrhQHSxt6udMBi76ELXnKi3CMU2Ndwr7SnAVdmCDHrWDWhAxhVBSFgh2",
  "key32": "2fL27HdeM8u4PEU8YqKcTDGWJYnvzRN8BTapmoYtoRPFCokYPERWTmZdj59QZjBQPsgmjBbct9kwLVNwdq6Mw2A7",
  "key33": "4XCUeYToq7vGbFHPWiLwDALrxU3e8QLL8MVVA9h4pqjDCLEwbA8m2TLb9Adwt2mGVpzs37qmjfjynxHemnjAWgcD",
  "key34": "3cekv68TRR1Es8itGEfVjyYv84CdtCtXtY8eHXwMoskpgvvC2JWdh8XBzETMiQmxbhAEakde5JNjreyks1Vn6ZvK",
  "key35": "41diPVvkbUkU9R7dLEL1E7ChBW7iMyCqwcGgSpMK6wfjb8cD8GsZtjJxqb8wYpyB45225gRYPPHkUh8TwDFrWRrq",
  "key36": "2B5dW6Gh3ajooA3of72bFnRaeSpiBQSKYJHisSAHm8votLrUShT6tMrcPA3bDcHDD2jFARRBg155fKurN5fs7Sth",
  "key37": "2SAoq2oJgMRXscjMfMo6SYdAgqGNauf29Q1zrTSk9h6ec4sjpachsryaJMU8bMhNncTNDVpbJrUu8RdDh6brVgSo",
  "key38": "35jkMqn34yh88xUzxuPh4T6ypEdkkfiA8AnYUpKWTeamHeYmFZdYH2ZTPCksjrrypjRUsj9AtwHYSX8fun7VNFiV",
  "key39": "3fkgrjtKagiRqJMg3mogmTEP6seVgiNLEa6QPufHN2w7sfo8HDFYG3ZE2gbYKEjcGRVxEvMPnjKiBYFGvRmzEhsK",
  "key40": "4Dq86YCG3hbRfgjDdAbrBRS5HrVncuPi86napHrHbgEbPwa5pc78JVQvndkPreoER4euBzpjpua6kQTiPd89L8tN",
  "key41": "3qsGiXWr4Cv4AKZD69YvbLP7T4DGeQZkdt6hn9HUBGCjvkvHsuus5HYUuHxPTNimXaN4tQbj5eEhk49mKMK4HXAw"
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
