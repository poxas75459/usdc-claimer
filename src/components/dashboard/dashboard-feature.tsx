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
    "4UhwLpTnuhvuh3kRraGupAj2Ho5R6PSRoVJscWYycSUX6W5xUxrJJBssmgUF2Pku7o8Wu3PFqxoao18LNH2JNJ1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUdGjmJegDs7JvYQ7YB6B3QiQM63XQQPdfV75DCZyWDaZBgsK6cSpB1F3Nm1hAAbdrw6GgzrTEv9VhTFXN25xrR",
  "key1": "352G6dkrqtDd7H6pVczWVU9xN5UoSwQMebLehFES7VQxWQ7ixjzcE9Mx9pyaGknd9mDwpVQMhR3L6HZR7QZgSncw",
  "key2": "3CEpE7dbau4xKi6MaDLJV3rSUnHss63vDuk8ZEq9x7dGfXsfwMzxjLC82TQPPu7do7eUh2nThfczhgT7fXy16FDx",
  "key3": "2Qd7kirxt3KwqCy6a15ZH4Gpu5H5MvPdkbSMo86wpqFFtY3thCjxt6TpLfGBjzWPFZ1ye4yswuWFetTTu1hrrGST",
  "key4": "34gLoNTHUceuoB9DU6yWw6A4qD9ZDh38TTcHYY9zcTYQyhF3vcaatVT3mwhR95t2PaR73qPxHTbu5CJVg4jFYmfy",
  "key5": "2Jx9SGMn9CbCvqDRnmF7xwNa8dtXyJBmagy2742aFSiv422TQoAVnfg6cChm1WDKK3PcZfcVv2tyeb6pwnSFmr9f",
  "key6": "8TeT3sq7s5SNWyx59V9aKjwA8S5VusVZ2gKTWSkve1haUW7ciHuKfdy4v11VoULBRfziLSSMyJo3eAMc7GPor7x",
  "key7": "49vVLykaQHCGajcoNjfcsvxKnjZah4Nt9dPLX8BV4iuYzqX454piB32U3FsDVfLKi6U44BfV5Rq7JVxswX6Z1DiB",
  "key8": "2K9ynsMJkvPR5Pf5uwLJ6JrX67JhGUKQbhuLL4zeMCka7GHunyKwp22Vtkfv2sVbjSGs7kArYdCNjdi3Le3uAyqc",
  "key9": "ucbiKLDXanZXj4uykgh5bTzQHtUiYsV4JkMnt5cmXtLo9aNqucG77HPo4cYkT6M9NExERBkLoKZaRe2f9Vj24SF",
  "key10": "K5bTaoBYudLLhq5Dx4sDJN581ScgXDs5rKZ622qsBVdLYaQ1MY4YAB89Xifh24VRvHVHZa8uPex8c6CFxEQGVt1",
  "key11": "3zaajLpNCr4rGHaf5SG4Vob89KnLT6g2DBNfFrJkfwFvLqyX1bwUBJPtc6yAj1HgJEumakvmuhKa7iRUDQX3ANnz",
  "key12": "4YpT2eDTHDMjnV4DATE89gUAthr44GVnYADe4LcSc28QBKCZ8SV63Ji4KYxPFPAosMqsCNvTP9RxGqXk8ioPvW8F",
  "key13": "4MvPuBZ5zEgMzCa117Ltyo2qrUyxYGm6hJ8bbA9bkxdvAQ4d6KsuRFNyPTtSvxY1pudtkeqGfmsAaL1f9yRkdnv2",
  "key14": "m4aPahp7cjqNFBkFPgNm9frFYc8nfzDxuj4XCnKLwh2V1AnGcVpVBxjYZz5xqMxKzYmoywGpsxUTWd3br9qSMaU",
  "key15": "4DAsPpvxc4XrtrBFFsg4zoXGsXgDtvEcjAcq2d1zo7huqPqhQcACnhxPJeJiXbkSRqn47AXVGPotZizRb9gg19Rh",
  "key16": "hZe1NQE3mK2JmmootfBZ8BAsqjitNaEgvbwuU9qh9MbJNwqW6UugrgexiDZF6sJwJcYN3m9HxiKE3yA5rrmCQSa",
  "key17": "61aTcDdtHvQazjJdHzCd5J7zqyavKjzSoiFHHqVWkBfMRKdvrmKxpcUwDUEWermTuS4oRXQscLT2xacwn4dVoBXc",
  "key18": "4xhVDQ9wztcjQcdr1jDmhF1v5CvyeRK5gA5rxx7SogQtrUgc81iy7HNMJuDqt7gZMweDBxg8yZ1JWyRd5zzfjnsH",
  "key19": "5xk6m2T7Pgg9H8v8NAsnSDpTf8p4piTMgU1pWQvpXPya6a5xJRfxhByNGWZkCNjPeyTkforjRenfCqpykMNjZUxv",
  "key20": "3JEwpRosFijBRKQZy3AeZsiv8kbQXKDSBn6yRLqvr5eToRjj7ve8QX67Bq42bPs2sikb39AeFe3PvWvdHA4pBuD5",
  "key21": "2FJLnM94j2VrqQ9Yf7DePQeuQ1k4ucVJ8ZLyLZtY8K71SzVe6A3ajGyjr26MymwU52eUFAsfLJ8dJbpLaA4kcv9U",
  "key22": "4q4AHizpxocU4BiYv9vGmBjfWNXwN1NGdGTuDyfcWD9d74hCdPrFKHm6kQZ94p5KoKVRYrbCVBeU7uyf66WQBhwV",
  "key23": "5WtHBaMvZJK1mhXqUaxtKT5JQ7J619DH38vdjbkUhgN4pSn2vGFqwBUjj1HQLnNHdLW2p7jiMWXq4d7Z9UFxkNa3",
  "key24": "5KMwTvq2Jo52oiY2cst3rQou8x9x3Y5mzq5qmq9km6jaSHe7bHEeDnZ4MSotuLifjAR6dohq7hCHzTp27XJTqRpN",
  "key25": "2chkiAqWWV5Q7DF2vjjS5ABLsaaGqhHgUQtMMUSuH67b7P1TZKFPxoeo5RQaoRmX8duxvvEha9JNExUMryDfLRxF",
  "key26": "hvg5SdKM4G31qGxgP5hm1GxjgPJPPYM6ZE2UDDPmiU9Lxo1CL1kKWxyQHzUHASMApUoBe1jhf7c3wf8iZsBwnXh",
  "key27": "akheDT4CZyH23Zii85zJV1snAgY711of9bvp911muwi9pQNGyYCcvwM1AHbWqwJEqpJXRfax5GqAqrXXnHjzRBw",
  "key28": "36N7rMBxXRTyS8XmHF7iH8k7nZYnnxE5dUGyXGNujUjiWttNpmjf4zFh5c9mjDfLdAy9iAZv6SXqUnuCUPyhUYmk",
  "key29": "5dGsQRyiXSBx8zazpLqmzGNnXVJ8ytpz4iv3JAsrdjzuo9uQVoRGEJaDLTv2dw25zEYXhvrQyS87ULPDHidEsr2E",
  "key30": "5gj3FJkBB9XBUxEozLjRqeX5gc7sBSPGn7GFrzj4jDZcRaR2YF8K68GVsci8BU9pxBX47Fgrfk8WYwxeMY6c3AqL",
  "key31": "39iiTbN8iJkFH8H8UoZMesnCqVVNGM47oiDBT57LoQfieUXXVqMFuYBdrJnW8WBg49xVNq4PCJq1bbewCDTd7gsy",
  "key32": "B4XcVUa4UBwMtW7MKZtJuyBfGseg7yeQyHEu9sSrzeGhXnL6EakzZGqFzci1fjX4dGZjYr4HMZiyosGJA6P84Kd",
  "key33": "5QGigw6ba9DA9Aqx6HDpxCt1mTcsP37rj3id8sBS76bkVC7Ma9huhpgWs4A4WjC9X8g1hP3inby7gTanu5hpUCfE",
  "key34": "3rWsG3F3TFjs6WsArE1K6MeEukCXgVcD8A8aY5oFMrX3ZYQMmZNfmR9UZFqr8Kf2srQoZ6fXfoqHpsx5Gj6dUqUS",
  "key35": "5HySuw5P1r3yQzcc3J4gPVrh8YTjMCC6yxcgzGkLLEAfbeDMZQ8arGTTcEhWsmB8VyPC39XWhSiE3KyYBEpxWDU8",
  "key36": "3GQUAn9Fq9SG8AfMenJF39uueBsVygoTx7eimVDBiwYzvUgM5Q99pLojkf46VcBxkq8j6JukmKVsWPEeonNV92BM",
  "key37": "3YVeHYSGuxm7WNMSdJ3gmKtve8Hj8XKFUpKuFdHk9psgtWpmHtXW5sku9B7XhsiF15wTnB8F8LvEx2fDUeXZRBxp",
  "key38": "9jC1fDZGs5sF2LARYbFqaYmAG1Ja165MMKjaithphCiCUVwuDRMXa1EKsR3TJfsEWDcgUhhJjuzmScFk6frrU9H",
  "key39": "4tprcvz9LqmdRZ4ppvreP7wrGktwfWY8QWnaYZ2VcbzR9o9KdPVcvzHVhBXkdL35aJgjkMJbfch6VWt11qxmgba7",
  "key40": "5rYo3qUWEqFfoYz9LccC7aoGSBB1ToFwwRqtsqs7BYuV651EwUGDVBsWVHQUBGni9n5hVM54XKNhzysRzKc8vq9P",
  "key41": "4bkMntyShc5UHGcM3Tf8NAn2CmLygHju7vt22F1GKqRVaZzFgWSD3Cw7oQS8KkNLS8bLuzMJSNK5ABBUXxgZCsg2"
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
