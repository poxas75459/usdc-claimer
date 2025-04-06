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
    "36cwMjYbVaxu4XhYa4dWzQwBfrZjXg9P4UVdVGtdPmHruVzbmx63Q8AGHLXDsBPGP5h4uJW4ae2xSUPBkEQTetT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mC7eRwu5CdbuQKRJaTfS2srF6DzVxXUhdjVAzhwQQbZzSsdQxw7N1y6WkmBDutPkBGET2nQ6q87Y6tkBkxnhX1i",
  "key1": "2ffZTh2XHBjR5Vbc8nndn9pi6S51hxFXhRCo4GUzRQtBwV42SqrisJMEiPmmbfCbB2d56MMrY2CxS6ptaBzK7XcX",
  "key2": "2kfrkjgUp82WpeV455vtdymfZPogQFjimnXxAhshovdCHbQPpXRe3NNNVCBEakMTLSjp2PwJC8wNFd8SW9FhYTe6",
  "key3": "e2NaYga71rXwYd4Rw43fyp5cHNCGSRzhLEdyirXDnhBCiDWiidNqjNvFhRhMk8ShrDuSLMP9w9BnKaNxX7X2kmC",
  "key4": "47JuHqSxpzugiRG5ZE97pw6anoB2y3LVBKnZJM4f2J6ZRUBRyuzNQbMbjAgLAyCQBuY55JZWm4Lm72e7rkK7z5hP",
  "key5": "5M1qyTzbmLvzecH7FjoBKVmdTGEB4Uq7KCNX69Crg5KAf35Pc9apPDoEG41zKrHck8kVA393Xk3WHZXWzn9Ua1EY",
  "key6": "3V8MtPoz1tsBhQmjYsfdJbFwaH6aN7T7dYDzRHpv5Wxvrk5ZKjEyrosmVGPdscUFztjrwVXYY2Lx3bBJoF5jmWRQ",
  "key7": "2cWSJK57kx59WWbjZ9hZxpyLhifb9my6xMjaZk2hQMZ3aZEDwZb1JnUYkxbRwMwApKk6xwa8gBTwwey8PL49RKwH",
  "key8": "2m7E2C228ubY4ub9XWvXDgisVQZ3UoBAFKtFFXootyXi5CGp9NkQdE1LiPjsnvrNiNXGYHRQLJ8QVW7KJi5ZXTuD",
  "key9": "3EcP42RzztrG2XbT2pwNWCMtncX9KUYy9GzwWYb7HfceW4zjKqDssxPaWv9QGzSXAj8DinVk3ysTHBDqhhzvjNcB",
  "key10": "5xURpPrU3XyUY9kHCmKWecppNJ8YBbo2Edefgzb5bezwS6T83fJEr7jkpqTfNhA84KXNjRn6C4zrpNvSNeMRwWJG",
  "key11": "48pzHDeJJEW4r5mCEV6VWfoHYfVvjEkXy7Zp6qGtgWaFFsTkGuqCjraxgmVowUMWrDsUda6GWHhtyGAYuVGavGDH",
  "key12": "3Jastc8MA44PbbFb3BWxK1Ugtm57tKqdB3N2DoRu8yyHXs7cG6xeB3WTRUPd8tvro5MSkJDM36KmA8ynV9Ab2jsh",
  "key13": "RoA8a6hwm5wutNjJK8duZm89qf5c4VwJDyFcJ1eGBVC1VcsjFQ5WnwyMsbJLkvLcVCKik9USTyuKmTEG2WfzbGu",
  "key14": "3bjEAJ5LQ28UQ5gPQwekWuP8Dr7nhYCAget24nxRMkoqyDAJTGiBdGQQ8dX3QifmzojXFHGE2rLgR1pXL3aayXmL",
  "key15": "42dedhpDGMDLm41bRyVqG2dh9tj1sWZvZeomG4NVp2tCniRAG46EHt6rjo7tAYZun733DJtHJHeGcEVrACWxus4H",
  "key16": "5ygJ3bPXRFhJDjrbJQmV6jRAZT675UGxyAFTmiiYJk9sCLDhYSzZ82RbLfm4xa8NbihE7rqsZn6DSw6httsr2hUp",
  "key17": "5frmypQx8K5cHD9grnh2r2gHVEWMY6JcpWc62dVK5A5U9Y3uzDB6icXZvD7wrfeySU339Mmq73y3zsonMnFEBpku",
  "key18": "3tVoXZ8AMGhW8m1vXcNCSx61t9CTQUMsXcxQ2d4GsKmfFaDEbjMycbQ2pnrSFGEBnet6tWfQJGh8VzKBug4rk7uD",
  "key19": "2UKrd3Qqx7Qxpg1ZyRrWGxNzyuehKyRkzWMNZZjm7rpLWEaRMukmSvGsukb5ngkhQq56NmGkCrVcjbfuiueqJnak",
  "key20": "34EJjFRCNhMhq7q5ZBaxWT5DF3PyFzaZvtS4u6PmkxXi3whoUMWBg21wYvi24oPVUM2qauY5w17ZRBtADBNNvRB6",
  "key21": "5LNZeBavbZbNhgVxvoLH7u4tTXw1nSDLX5F17QoD4YXnJtuhJZJtqFWTKuSFDtCuhrVR1gTn9PtY9LCU2Fkb56sB",
  "key22": "4o6WhzJfvhDBnZuMFy2E7MGP5Fcu1qJFzpMfAtqxuEHyP3rKDKG84wFKmE25FMtWyJxJ46LeGcDbPKWJEfLR8WNS",
  "key23": "26pcggDsBRtr5X536cWTPBA7DRyon7QsAwuvCBWSVQ8gUm8jgAQv2C8wktEpnMiteACSoMxbuar3GzftwHZT1JNG",
  "key24": "Ez6GUVxG7q4r8tovU2X3PubSTJw9qgeV2ZxRmQC47uxLJdayE3gJLnBvoE5TmNU7Em46KmiwJaoGwZ5m6Gccf8f",
  "key25": "5v2Dyf85N7soYwHMHeCuThHd9fWvrcm9caeHjLkYPZcZm83EHtNKem4EeEnjBLJLfMG56sPe6dqdMouckn5rFJ4R",
  "key26": "4JTE9dCwWTGdyS3ykncDQr4jMfquGtatCeBKuwKp69fbm2g17yC81NHLpbEa8XHhmBwKWHwCxJpMegbmBAW3focg",
  "key27": "57r9hwWqirYbhqpmvuz9YFLyE1qxPrjWmxcDVMtrJk2EzbZDyCQgPt2iv94F42rKEbE3eCTfCz2MNYKfm9JksGUp",
  "key28": "4Xraur5BRgiAYUeYAPjmzxV1E8nr8tGegYT47qUZj9F3gnGpXFknJCSUVsB3iHQtZJBqoYRTmmbbXyRJZnasjTq5",
  "key29": "2YQsB6TbAEow2FQJG4Phjrg9poDEpy2qV9JE19ScuPRyzWovAFeargdVDWLDMNfBgaysNRCUZdbG1yRzRtvvgceu",
  "key30": "7NXynDbPVmZNYcwDhBiNSZhtXdQwhfFaoE8SYhX8csuvdfZnihTVr8KqngkfuXB8NqShZ92dCE1sKvuipYkTtiP",
  "key31": "43N6gwyYt1SQLyqCCgQULL8mnEZY2Kbx6hYtJgRkKQMjJNjxLqdNSh6WF2HV9TZ2x8VC8mLbXjTN9fXFdDqCoMje",
  "key32": "66QwjueqmSc9REevK6zHMC2Sv42GGgPBocZ92V5pUdYjCqY5Fjo5DSWZS5hLA6JH3hUKV2hTvQg68J1BP7jdzBqF",
  "key33": "4sNa1ZihUuaYnvVAE7baYPVbadj39i6HgQMg9Ec8LUZHvVpauSYUptDhmTEfsr5N1S3XjKuGgKDr4cwNb65AGDsE",
  "key34": "2KEYabzJZo9ouqpruc7b8T2moo8zxtK1FWWtGMnj4UotXPaY9KnnXozogPsRSPfCo74a6p1B6NAyPkFLzqCZZB2Z",
  "key35": "2fwrkSCtAKvdPwETkBEA61H3TrsFX8AziResisjLSNGzGeYYqfPoc8sCZoSqafFRz1iMVKhGhTaUhrE2JxnxX9jY",
  "key36": "3nE5MoQurfqxbj1S6TZtK7jRzAkHNZWTz3n4f5PWxR6uS1PiWCMHkqmUXUjQAjRo2xrcjvPMBwE44ULQoXWfR36J",
  "key37": "2DLKebayD6GdwCdTrgu7hEDrRikpETAbQt8Ft2anSS663FbpHbRpMG2rAWToUvaAuDcy49rT3qEKrWQYuDZK8hGR",
  "key38": "Cgv6VVkD7pe5LTVUja9ihRb7rVDM985j1Mq4VKdFHDm9QwF27DGjmYZCCjSEkxGjPfYqh3o4hbmzCMEWkRbwYGa",
  "key39": "429wmnbEEqcMy7ZxrhCULu948cXX1u7sLjE2vALaDQxxuQ2uobBRz1MaXBW8xtaB4xUzke2bBhEwJeJNA3f3xUYM",
  "key40": "52xxThjPfVBjUQpFNo4PXp1ALwvzPGF8n3PJMsYrQm6hWKcL4qKP9Fkh9RdGt2o2KxAtTzK52i1iLASxDwkL1587",
  "key41": "nyeqyd2QTMFAyMVSLRSDMsD5oefCtLKB2LtLiNd4QaXngKbKkER15xuv48QJQsjYU2eudt4356bBxKKijq4Sxr4",
  "key42": "2JmBKuveReqHtT7JXejTpnuc86o7ZZjzWjQy9kohH6qn2VRhEHYvuTVahnXWLVEZoo4uwFEkijAUcxvMMh3MV5Pb",
  "key43": "58v8QZk4MFnvU7e8dqNXBLSHixF3cqG326bPpCPnf9ZRwieP84SLYohuFd2G8tjkxkCLv65fmMnAgdrnbFDdBgEX",
  "key44": "4ng94HzRhCEYD6T7K8CLherr1gmMmNMWjZMsCSkgQsso3VJCex9empeFq453S7LeSAkR3xcewWAVwvzYusTpHjvm",
  "key45": "4RXhnT4Kjac8pJ1LrVWVoXpcFJuVFFt6FXw6iTQ9CrW9uBkAtkzkKnXd7ADVZPhy3zNUtP15YA6JtCcjVLfsSMnZ",
  "key46": "2NG4pLSRVfi5xzyNzSd93zDZhqpTKsynGHXziabdnxBzeeWrjEnGzxaUFFhvNu4H3UhcV2iQSqEuaLshGQJJGbdS"
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
