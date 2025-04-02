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
    "5SDjvZjZ2Qy2navUtYjdc6txEE1Fz7QpQUdXpAtfYtuazHcRbJ7uKeYxi1PXgUQ9LPiQKiKgVaLkBBw4hobwmz9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZjCeQniz771bY7xyiNccefBdnf9SkG4Uc2aLdE6N66gJ5p9DfKbSMA8r4mk2SHDofK8kc6ocn4qn3kuK1YKA5x",
  "key1": "3JDyYNevec7wL1F2GJ36JFVLYioCSNssJ6La5d1AHSgSVjqkoG9UpxdNFShjLfJGn6okTFazEWx2JmB8s2FeakHJ",
  "key2": "2aximeCE6sogMYeK2NizVWq3ggfSrpRvRRFVBGjQptCZaoiC2zNT5t7oBsnokPqpCfZyrE5wf3hwgWYjYQwUnYjv",
  "key3": "2Vk63SxzfPhFPbgDETQYWZpUk3eWbE5ZXAZhSpsGLbMTpALshQDi36svqV4zN4t2mn1GXX6frw9y1SCvbkdYfkV4",
  "key4": "P1Qy5dbCPcbyryQgVchRTyRDGrJNVtE92YZCEYr1Wp9LQg2wG7NwoFTUuCWjFXCrtQkPuyvX1JeJQU3hvttkvkf",
  "key5": "4jaMvxmQ38aN2s8g9mR7YVp6VYfVjcTFDeJVRpTzmNn6Ux84FJHVmzpDNZB4HJmnbBPbEGoYSB4bSN82JdJnBJto",
  "key6": "3XkHvXjrNQ2rSGSGbZP4KJ1TzTwAyoaDumyJjDUMzGGX3xgefKxNuYLTRKLEx6MJ6HBGEwkKnRvn5WjSe4iT7rRc",
  "key7": "3nRmmeoEi7uQpGYibobG6d43bzgnTpd4baU3WAv4cpLLTTFzUgM7QGwoPZWbXowLWWBaYattkNQPbNv3uZsgaN3q",
  "key8": "2CpporANPvHMNnBuUao5HsghEnn7yRV9Sus73dbwqWQKKPdGBXb8HKiTbhFbc9xcNwC6spe9WCizBnyXf3zWgu9H",
  "key9": "3T4CYwh3tR4uZ5w92oadmCC3ZsyYbHPYtkm18zg7WPCBUc3pUEGK1LAaHpxqMaotkgaW6T5cm4zVwiNCNu4hmFsq",
  "key10": "6W56gkFuh4ZWnHA8NVDKAGipFxJFqofDXrF5hnzGB6MBTZoPttZUGW7JN6uVyTUuBZewvpQEdSFpUgJNBVsQvSo",
  "key11": "6475vsj2dmeKe3QZMee25Z4eXjpTEzyfsoZ2syvUaDfcj9d2nz1bwM9CYeMBHa5qhh2pLGfY5tKSNbK9kWLaqfxq",
  "key12": "3CkS3MYmjUEL5nWbUP7J7AQzWfUb3Jik11betKC4fk44Q7RhXx2rsMQuhk7waqiKya5fKfXZtKqTDhXnb8JWpgGn",
  "key13": "bg8D1r3uPj9f5cMAp4TxEjKqeBVnvLK7NEGkjgZN8rwK9sjJSNdCZZ8RWjtR94YXjaLZUFf9ivifER4SZs12PDY",
  "key14": "2DQdqPyAB6JtUuHZVGfPgkojhWuDuqbsQVrD8njuh5BQdy6qcaUHB9fxjF8XjHqp3TheSes8x7m7dPg97e4LZQtr",
  "key15": "PJVzxqT76NYv4hpGrDcp62nQtzX5veouxWsTMSqEr4euGSv6sTcwojAZp3wHmDtBxjjmg9fy96JP4iMZnEg8oQz",
  "key16": "4nkQMPqHkTj2RhhTGcGChoK5ZyXkMJCr79zdNRfRqzqVjhdTeMyioV6MULd97wqPSpCG47zf9CcxypaDGxdqnd1t",
  "key17": "2BLULAuKnG8fSWFDY9ZMHjM1G5P2xieYGoVMuHThDjuWPvA3XvFjXyz4j8ke9YjqoiMM6Kmx8jSKE7oM1K5wR9R5",
  "key18": "2m5TWWMgy9HvLnRPQwg3NCJ5kk9xAHkkvpX8QquevgCCHCCgP2TzurpkrFYjQaxkwEgnfGgyh1T1bF1mAUbmLRPr",
  "key19": "3ogxJrv1TvJhy7RcF8msvkCqPxqVwK99DE2AUAasALJWzAmf8utevocGe1MShQFUGQrX3bhWzLwPe33UrhE2pwwH",
  "key20": "4gYeoVpa5KsgpaqiFJyTbEiGyhmYaz18p2wSpLFqqG5Ug6UFLVLVBD9U83emhtwRfhEYgDNBZjinbUL285EEk2KZ",
  "key21": "4LVQ7GazXTQ19Mm5dNXLvK2D8Fc4vNDRdGEeYQs6aT7zDYdresgngq4d6j7RpzpmWUK9LtJXNeHKsQ1h2YBBeMYL",
  "key22": "3FTaFo7uB9QfnX2ruToNhNLg6MvMkasvNHPxg14A1ABoxDD3XvjhhDF483yHNwKdJg39DJFgb4fW85Na2RjPsRrA",
  "key23": "4hsbPt8g3pkV5337kVkR4KFBqX9WSFiPtiuQzVJCLqoAsDgCPdgwtn7ZwrZSWwi6VVeNUEvYaijwGeGXyCnyqMQd",
  "key24": "1TAjjQC1Xs4ScNSZj2AtsdpSpSZZBsmQ9qGVKTVvgJ8RQUJ55vEojmE28ALF7n2FHafPBK8JwGtBPf22Fna5ZMM",
  "key25": "5TtqEHBUGbpFBHiyAVXbhpLj3tA5ZwAXRvPabe86DiZ4j3ZMzH1HpiZESkpWe3NZEhD33h8dpwQvdCgucciLT3ya",
  "key26": "2WLHz9GwiMHggM4x5n8CbCh8aC6KJQM4V2LuK56R53Ss22Cj7Ctp94T2qXZKptqBk3foLjBPsRLMvqrNvF54Si1S",
  "key27": "oTMyW916GnAE3KcqY3AQ9tKXTbGcDbVKh18HfaQmKEWYcFCBgJpbRWg8ojKCwFemLshLBAxZZgv4KbRzEWuERpc",
  "key28": "4ffCGj3soEbVztQH7ixscRgdesthrCrG3XP7Vwo3Bx8162dkjAM39G2AKargvQpVZuUERiw6iYYKifPyLEqqKjW7",
  "key29": "2otWPzRd5R47PfagfM3tVAhHGimmVCH1PoEKXPRCMsmLzhgHgFcE5nZ2DMtU3XsYuV8zSZU2AaatrspZt2vpT8GC",
  "key30": "2Xi27bSrQ1611cgRVYAkQYtSfMWtx8aZ8XDTKocKxR8wkfhpXEih8ohwTDgp3yNJ2NpNxhCk9F3snAhEmVnqCSZi",
  "key31": "zLvWVD4Yv1N3JdbiYEv4kHYCapjU7harNg5Yv6Jd4Ky433o3XenCbQUZYFqqCEZZc3TinsZU5AmzAEjhRcrv1Uc",
  "key32": "2gRAvU9dAGdsmkgn7oAcEYbXkxuGnREwYDMstZu2QtZ6r8k6ZdpS81CG2u84RemiDUvaRJi1hHaNiVX6MAnfE4cg",
  "key33": "9UBW19ktDQ71ZGDMPoGdohagQE8f86zd1DSYSQPagXsDDuEgmGAakBwjrrL9bRDDiAp9BwoSyBYKkoAnAesX3oX",
  "key34": "5p7io8JhbNhWWjsmpWREXMtaentvSoW7gFHuEnnn84hxM3fUxHA5kBzR8gjVgJzzZZmeeienPfGQmKmorKo6AmMw",
  "key35": "2ozKbhgG5zD5MG8msGjmGbjunm3W6jQb3xFCL49B3qVUMecaadMMVw3m6CoRQamjF7PJKFsDZDuemXivzb2hhMaz",
  "key36": "3jbyiAJMVNVUnvPxuCrRdmn5CYXD5kVFPMuRAsBnNa6phC6pADzj6M1ARYQc3o11FFgMX31M52GSrbCQcTMCGpWF",
  "key37": "4KwqdugwnhtDMT4AaCfe9HwxSXzB2wqLLBeNiDKFHCuK2dzALtaszzEoB6C9YTyCEDEynzese474LqSvD15CUE1N",
  "key38": "w3MiTeuo8JFsSeFn2xPGZuT6LQciUkPSH93qNcg93mNWuf9bvdSQyfDHcMqM6hTwByr6ErfNLcTZhdaas4eMNhE",
  "key39": "5UAquUYiCABxm5YCjHqA8ZQ8wbaVxmyXRrGtMypEZom7ajVgQ1DehhKLwZ4AqvmjDPFcAYKxByFEUwNV3H1DRapn",
  "key40": "irp4b1aQeAj6AC3jFG3newedqUK3zDCjDPphQNmQaKBQWePJSEiCku265DHKwHdzvEHkLVgiBi6imQxzvEuArCk",
  "key41": "3HXRkhXDzuvpKN1X4ZZyHRFkcpfSJfH65v9ySxcW1Twi4SHNsW4Rrg6PnTPH9PshRRqFPUdaj4uTFuZHSHArRm71",
  "key42": "3G1AsYm4b56Mrkb1Rt46qpxFm12dunz5TYzzLtV1YeaaqemM5Eo4LruY7qGQgAZg5JbUUdCU3ck6vzUWdJCmTgB4",
  "key43": "wGYJyZpK2uJ4DiToHntBfCMkTQbeoZZY9NgG3UuYQD3FkkUHwTcbCBHq2ay6wR1sqyDmJKMMtCSZewKgo5ypQFg",
  "key44": "2zqAAkAWegwbU8SG9UXjp7GcCt6cU6gAWr8E8LboH33Nu8xouvKszCFsTnEULthoj8hUiGizsD1tgWHZs4peL6G5"
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
