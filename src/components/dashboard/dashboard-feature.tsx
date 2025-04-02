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
    "4KEF6eqDSEFj9DuzCqPQzxpd6L7q7csRx68oVs52FHMLs1qTtX9xB5CBT8iUHRt7cvrWCmh7Tv2mVvQSqQwqCHak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwQFn1Y4QSuKfJiLHu1MrDQymiqvCw9S87FfWkz9gzx1BU1VYVzfd2Y66QPKUYxwEKufdhNDwV6KqLoou1q1puk",
  "key1": "2BWx9HdpUAt8ZPbZWtxkt4qmcZHJdBe3DDKDeB7SDZQ6KwLam8iTmA8xaYqCRj5kyZXqWiahAkXuBXt8ibGvrFEL",
  "key2": "39fK6bvsPvE596GqPq4cYMi6ovTwYo5BakyRcJojG5qU65mE6d85zZnV2H3uwkgFWNtRmEVKYn3ev7h8hHrppHZQ",
  "key3": "3S1W5D5FyAMYfvhrazFt6Kv2yNxsu2JaHZJtrCP7tUobX1Pe1gFMqAYRJsFvTTmnhG4B758cuXfXKoFXhLc9qgEp",
  "key4": "5bFiX5VXjkbsGxoeoDa3EH1WwQHE3DyXaRKmZrpeQrbxpDMfgL3yzoWfheG27W3w5qrHzvyio58pp1VgyuTi9xxg",
  "key5": "3N5eNqVBgAEUGuiSrVGu5YAuqw5Ktbh8rqGFwrj3f2vqHzye4UfeEK2h5vU3RX3KBeBD5o93ZVD9kfgsAFZz8CSg",
  "key6": "5xCGRVaknmLNG3gseTimbeTwmgALor7EX5w2UCz9Sc7CBNWZZFQoSVp1ZYsJxBHT7fjGbpj3HYoLUtfPZCKBw3K6",
  "key7": "5mtkcHHpw5R69hcmGhTQmDGXesCWwC4igfQmxdJ4jDwxEFwXdq7EFp6bf5wVKqiC8z1CPyVMi2iaFaoRySUgoJxc",
  "key8": "229UdMXL5oPVHiE1jyjMUPK3dyFzPJu5QgYCKPx6nKBjYQS4m6qw3otiMjdDM14ij7egWgpFKVsMr2hE2cqpTBWR",
  "key9": "4GgshhLcvPonKVx8jATQ6kKZQs8is5LM9gmeNR5y4ScPsBCXZJipJojF9FQHgbJHjtTywy6CquD8Vkw4cHKXrVVA",
  "key10": "25MC4hQJpiWV56njUJjcRSetueDWb3FukjCmyFLRYX3KEVM72y6hmydMLiXN1oR2dUQJjiFzkKKpL8hznXGMi2fL",
  "key11": "AXYexmRJESdxKJJ51CYviraN6qHbM2Uj3aPR9rr1CKduxboSNBcsrm2ycLJrMDp7LchociVd67Z99nUZcVKadLa",
  "key12": "5u5ohGaaWveuS85wRC6qHoLyFuPycnJmqymfDGtzBH29b5KKavmJGyVUZFsHiDFVCe1wxavC3fi4Mnufsm3TKrA3",
  "key13": "23E2ApBw4LzHREWyNUffPnwmiGUmuQg7vx1PAXpMRDnwEHJbtBLiv9ZQTE4YK7Z2oxZbBQ8L4f12vawRpTpMCvL6",
  "key14": "dNEN1saAH6EwB2PfHWUrEi1GKYK35vnHAMYwgnMTWiLMbpseGg7EBAadRGfXQSTwMJKki27DKE6z5tHXUEu9W1y",
  "key15": "5bd9Nk5FZBM1jssavhZhEFAERQZvi15wb6NgZXjaBUo3ambRpsQdp53gjZy4iS5bAwdbrBkf7ueB7nnnyuM3QxHM",
  "key16": "3K3VZyDr1neZo8gdxdSXmS1fUtGQ6NtKXZDyYgZu5NLwfj73oF5cGRnGueKaBpUyQf4s3vu6NKvuBRDysVf58RDv",
  "key17": "3NT678XWaAjdJN2usq2FzociA87TvJJSL88fp4pHaZoYD77pvjAZKMyEZefLewajeQgfYGJWPuzoxCy6TkQHNmNx",
  "key18": "5jFDQTxM9o5LV3pMVUuPqpE4AZvtr52K9xSpDYgRyqhLA7ddiEjtMntvP411ERztvBo1dqwmtj7mCJCdwQTvf5jW",
  "key19": "5YBvUjLb9EGzYfgAZpdmwKonNKmi5kwh7Nd1FM1kMHFSUbHAeFhgv7earYYaiz8HoRvnbGSuHoAMw5zoZepbsh6y",
  "key20": "3KoM9B46KsVXkirjhKZ4R5YMxb2xWHZBS4kKXwBUsifMurC9ZoWsWeZeMCoXYK75BJLenubYxQoCd8QCHCqsBXtm",
  "key21": "U42oTAWLNw6J3wye4oHJ7EYpN7ZZoTLYGdVTGmpnVB1iq5SETxFcx8GFksHTurAiDD2ouTnVskKv1uhsbXU3N82",
  "key22": "62pVVSyeupw4kkvp3Vjw9z9DFLL5fz6K574y4bQuNqxxb44rH3SDKRXTfLbGHXQ3yVCYcYEViiAJYR5jeLgMxbF9",
  "key23": "2ku52XkePfAnzw4jfoNWYCDeSbYqU6zv5GZX5Sc2KQ4pcvXXHL2ayVxJeKoQL7csfq4k9ackYsX1V6qxpAsjFXq6",
  "key24": "3vLAqrrasrj9V9C1xeaPqUh376Q3EYTbhr6BTjoxYzLqn6Mwy7Ep6bEJF59u1Hcv268Ww3J19oM8JFVCrBLnfdc",
  "key25": "4yNxZMGCKzYqmYbrmrW4oTsFz13VgsHGe3TRfMTQvXLiQrCdZ5vEWoDzcen5R8K25WfgEXx8277Apimz2H37bGRR",
  "key26": "2DjDUoHkXdC1gJbmEmGxNPbUNzMnXt8929mTTfBARtWHBzRrGJ1EQmJxPD6CgtFwpZLcagSSHBHfw5v6bzPSjDyY",
  "key27": "3WJDejaNkoZ2cFXeQGUaRRSucSbKMWGJ12SALMovMp3sQiPz2fpNcqMMQ8DNDZHh6GJp7eEsE1xSP8WB1wjQwrPg",
  "key28": "2dEByChJ1tEoPxecYARh4ajk7UAYDquxuNU4U2z3aLo8ZkwVBCZGyTfqxGg1Ldi7ZXqeVQ4GVhHNDq1WAZsqYkFg",
  "key29": "53Pwim3mX71RtPX3frGQKbAf4cWG9xtouH9MWiy94feM33ypKjVPoRCkeHMfSuPuEUmvDnv2WBbryYh6N75LLVbY",
  "key30": "4nqhPJGAVXUdVBYGwQfr3fpwkkWmVDfG5XG4VNcgbjcp9Dbd9PBr3UL2VQcXdA3PkQTZjtvSNyZ1mak61xdXUpSZ",
  "key31": "2TWUrcM1XmwR7rXhRLXj5vZVxMoj73w1xNnscQ1ztpbSKKYYh27pGRCwt8bP2e5wGaACwH16spMW2aJHrbrWpxbi",
  "key32": "3vKUk61njDyMUWU73etavHkQ9sJvcazhtJ2U2gRxug5wAroTkwYvefSr91JG3GxkvdzkWmU8FvSW2Znv2HyQsxW9",
  "key33": "5y2zQY6N9oVNYDtrYQu6MiZtYXysmwBMWUDXwVLU6fP5Lh3kqHVkcQ7P2pC42mxxywHHS9sXCxKL77R6qXVcRQvR",
  "key34": "3TBGT9BJMMv3sHHxBjv9371bE7vbVDE1smxfKoGHEdvreHXpxCGsUuQKf3hUocWJBFEkjN8vuezUdKgj1mW8VicF",
  "key35": "2NKYWbYWsJanX7asfeXgBA4txcfUTt9eRd8mXZpoVH8pwa9Tnaszd3fNAKkALFVwEf82E1aa1aFbjSW68gwkjhEV",
  "key36": "3ZFJGCdLHQKPH3q6j1pxMFhxUZjhszXVQpKSjAi2C4vt9dr8ztsGFUPucZ7D8LYU8TdTc6yXtVmW3yfQNNnFbfii",
  "key37": "22QAw6FTi5ZPVF2zdYDy1FeSiCDDye3nycg7zDYzGJ9hEuynU4MS9Wz4B9e5vWXgUCkwXt3RtwkpoVcyShE64qzy",
  "key38": "5j1ou1L2wJT4VhxgbEPpc2ACpQWr8PTdBE7kANmr9V7bJPc5UQVYhEus96ptLQtG7k21dzDhGw5zwbV8ec4gbQfB",
  "key39": "3Y192mJrYdsviZfnqEN589d6NxXNGStyizqRptJg2mC39NbuoCS5hMrSRDAs4jgMoT92WUF63omXgQesGh9mz3bD",
  "key40": "64Vr9P9AWRGGEAgxA4nMW69P6dHYnx4ssXZ9tjRo5XgUMhb9p12wSznZaNLjJFZ7w1pHj3GnTD9MtPjVsKPScokn",
  "key41": "2HACPmCqxDRttA3Cjup2w5HmqwVz2FLqaHMNgcjjsikkeXd7zByP6EDfQSJ3gyHxRgLmGvBmrRGebZzhA4bxNNxD",
  "key42": "4xCNyAr2EMeLkHyyUkyFJd1awVGYTy7J1J3d3GuJGjPksc3Tvd9rXjLqd1d3i2eGKMvFNZEmESk12AHsM3KseAmP",
  "key43": "3Ue8JZdW5VR5PEp9het8rMjXACz4ir7jgoqr9Giwx8GCdvQXBdo6mLctCfx7bLEp7ZYLSbzMJdrTU5rC3CqtH86B",
  "key44": "4X1jBXPtQ9yc4bg9kJkzSmGHqnXM3ptvAN9quCSSw3N2Waob8wqzbyrh9JcwokknF6RY627McpBxqBG9ZvD4SmQt",
  "key45": "3WCorh9NAZJYKioFHgQFygVDvi975LCQnLZrwc7LyJbGPNYJ53qhWxQJH8XhhomrYkekWb43CeQAfeYDzuyJJGSt",
  "key46": "5QXcGkqs8FsSdBa1gvD3GC6Bhc5e96ozXnYx3qq6Hh27agv4j6mFxnsicWkRyfXubjqhwAkMUf68GawRT4Vfgxb",
  "key47": "nDVbSh3v76orQ9Wxe588BBzQbKsHzmKTN1g3hJthBYxt6Gz2cxcTGbxpyZE6yNNSfZNbNkqEjAWwKkivJussAEz",
  "key48": "4EtvC48ppReVwk5C2XAx1JWVBUw184vcjEtBdkyL8vkCZxi8ieBZn9fcFcFumQiJErzYfWLo2JGLbJNi6P9FQJuP"
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
