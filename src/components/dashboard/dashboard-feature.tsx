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
    "31PjeEdwPH743mEaifjayXDF29HY5pQt7ix181Nun4zAbEuvFPT2wmvangTk5JW7SiSXXZDXGB5c2FKawb2hhsub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8uzqGv5Pbd4FH5Dr7KuU63mJMR5X7jvsKK6pxkYj2VvEdNZTtNWaxQ4LFCTVdTnFv6mmPEGEao6bfaxJjTHhfZ",
  "key1": "5WuG2H1E1EcCesvbjQZtrXdd1Xcomdk9ZfMNiTL1zWPZPXbfDcC4RSeV6gXR3JuDk46MSd8G7CtZKWSYveQbnve1",
  "key2": "3cnVmJACtbeGGE4e8nmZtV8Mf1QcnT9mVyZRmRjpnKvfrakZnBHXzrAQLwH1X7gFvxDRqdz3JtpX8PuFDXrnFXB9",
  "key3": "44MkMivbZTAQ2tSQCvp2KMr7f9tkthwgYKfwjUf4CYurhdhvgeBsCFd5Ca8aonUMDFkMatubQubvG8cwi7j5LwAZ",
  "key4": "pDUSm3UkoJvzcpP96x219vz8NAgzKyf7LSfBtN6biBkfGsTSPP3p1kKt4pv1gVEg1UTSffVStTtXqEasHnL8CPx",
  "key5": "3SusrYEV5chtvpwMg5KV2zWtfbCXNENRebw9SrzN5Gk5MCCNbU5fSUJMmpqNHJdgEDK1QcJo6aYUiBrX7MQzD8S9",
  "key6": "5HJbsWWf6afycacbX6ExRfoFSuUobuZCkyQ4ofaPY41mYNfUdTZojuFLwXyBSgScm9eoCyRxyBG24THxTgJRQKHH",
  "key7": "3Ygqwyb1tsoSHuCEQvjYMKqV7HCTXwCEoSbJY8fMupQDYg12LQzeKdwQtKqJh95zZc3acxoYM9xuTa1JkitzPma3",
  "key8": "5WSLQYc3E851Lu2pSjqcJrLNAjvLCEUKAXhNhJvjkvV2hc2MzC8JrSTtTX6UwPbYSQLZ2uhWYCvLDbGhDbTRfrwR",
  "key9": "5JjktF336G5QtpwiMgkBtp7fVdYnFXg1BGdNzSkAvgBic5gFpnwnCi8vKyrB6jKpsn16Cn2brKcbjr7qfysFKoUr",
  "key10": "4YBnUPvQc1nvPm4hMeVVXLU26m5YjigqChPkZX4vpPXM4sfXJtAxZnt8odSebGHrqBJpBdLkL5HzpcgfhhhyMjQe",
  "key11": "3WDwUtTmYFsk9caXCUrShA7QQS8db3BtVRt6Rx9qUtrZbiwoGpWXMsYescQ4Wz8cyrKCTniH5mwgEHm9yzJ5bJsq",
  "key12": "2qemGhQaEtYFRfUcQHgEoL72bNwznarZKomqQJqgZpFyxj4dKLWc5Vd4YZZAC1RJwkHcSY8qYJkzYCjL6SLz5kmr",
  "key13": "5zuujZFSUvu87TRcLTUrmaF23iGdt1Su9mWm2CJv2LdsnqJfaJFCGgQXpbzeodhhJivYXoN5nqjNQguqxi4nCLtV",
  "key14": "3r5UA5qGiRii8E5bavhFFGVxxBK64ZddzVS3DRsJWcDCSXCCDJcUF9GZcAqSj7bpDrjhwQ8f4QZfQ1PV74cAWFhJ",
  "key15": "4US2WeLyWTUgVdzSCjsKJv51cqiVdxtvzBKk2o4qdthRsz8vVHJVG6MJ8rUsHQr53dFMSNgP72HoHBAQRn2LVFYP",
  "key16": "3nRzeW4qeHyzqBVffzDpr5TYzQTggJGTJacGGkkoDqaFvsoYEd6EVu9n5BkuWneRa1Gy7c9wkdYvqmo2VsbCcbvt",
  "key17": "3VGWqwPMn6SSSkDxjngE5sVzVETCwRZrdFxLLmYfQUKaZwQYjAPz1QeXjmj8n9Bo3mzfcnAMcaEgDWmZYQUVRDX9",
  "key18": "4G8ckoPzHZ3GKXMsyqmhR5kUC1Kwo66YJCsCL1jg9pXzJUBhcwh6ZwuUXgj4vhvLBacuMoiyPAGMgc2R358J8fvg",
  "key19": "o3HCcGLzL6nFbLZ8RNgaY9A8fkGnzY8f25ZLihgtF1CV65MjXhKNc8KvfCuQLe87Nhj8zcqgXNogNBc9kYFDZ7D",
  "key20": "4316DmurMU9GtbtarjJdA4mEMSmVt65QNwsQL3VnZRsL1evXtAgLjcgzpBqvo1FuR81jeYrmVtqEsrjVYUq7aqW9",
  "key21": "4ApYCniHcSaeYyL92v76FqxxY3YEK5JujVs313FF5ST8MZp6fWLK7YPmCFhVj26RtkCrN3zMhdZtAi3bXpQq61kH",
  "key22": "5ufTy8Zf1LSNq7YjL28wkstCBqb8MCvVpBYcrvkKqxru6uJ6JnzDYnELb63tdSrg6QdD8fp8Ag2NhvVzLSkUJnbU",
  "key23": "4FdmgnKxJYAKAKSBZFPguKauQquR6HntQeQDcJKwZiwa1nXFmoj14RGtVDivBqr6c3978z4X4nBnYN4fXawXEXLZ",
  "key24": "2AgYhr5VAZyur4h1QoK33mqbMXqvebmD8ehgK4LUkN8NEEDr9iU2mvfPnj285yc7MQs3X14nen5Q7721jREjXEvk",
  "key25": "5jneZAX9dSDxVxWLRjTnFmstbPX29sJsxG2GLBAk6mg1V8ejDa5eMVxi3s4BkPnsPvNMiKa6EvKVFsyLA6PzJJr2",
  "key26": "27Vy3vUScBeYE6qcfxaRr1HuTtrvMx3qX1tftjNoiq1uoBTqKXE6yEyXcCWaQ23nC4q5uxtwL2PtBRBGXDc3v9J3",
  "key27": "epnigeG4RM4ZtG3U9NRDJDqbGoGPeg5aFbYBoFBA521DoMPkdXLxMqC1Q3eyAiZuGRD1xqF89DFu5HxiQkxvX1X",
  "key28": "4CXKbW8U6niqAGtLVh9rqNJGhjr135jN6G3iYdnZVwDVUGBFuaN5iUJcSDoLSiqcNV2HGbE5vgVQDrTi8dXoPgYH",
  "key29": "3QpXQ2LhNk1n8WesYemN2Eoic4P45gpkDKnSNw9NaBtc9WFgAPyKgFG7FvS2tMAcKpUWdQK18tnr8Eog96VPreZf",
  "key30": "3xHZrqNk5R2ekGzkyNFgzw6QyovgHK4MWNH7eZywSfKCmwAg7vvzLTh8izJH6879UxjwRDVkKeb6yQuTU8whqm3Y",
  "key31": "4vhiQ86aG4uoze5BDf5yfjR2LZKtggy3yRkygVZyN4MhUqX2byJJNsPms4NjpthLoXE7bPYoLzeEUc3GckPvcXSo",
  "key32": "4ZWc8nHRjTYziq2Q7uWevUB9P3oWiW8cVUoJeA3H1zniT8Pm8LpPJS746D4tnuURaRNdJpzMPNfKU5YVr8vZnZF",
  "key33": "3dR1XwbS6w3ALsZWahF33LL5J4YAfFRujQdgdT9S7qRu9SVj8K3ZVWmB1kLguukb6PqdGrQFvZ1DpumT4m9QQEcT",
  "key34": "mDbpLo62Bfq7rAEHVqLWGiek76D5DqMgLrmqea3YwtmfLk751FJWHvR429Qwp8Sdi3NahTwP7i7ToQBEdQDyNMf",
  "key35": "5LnfW4cjgdgH8EkAxs7YSXYF4zdZgzoeNMHKm6L3Rs19eh9RmbtZGPSw37wahscWifihvG5MrHJ4YgbCUNVuagyh",
  "key36": "5x1zJpKqv5zCMHiV6k65n8bgKEkXSwLQrkcwGFhj5WS2JWfEKbZMA4gNGqxuRaPfHn3kVz9fhzsfJfWmU63yRvuP",
  "key37": "qv4qg1WrMixoWKjbScRNUGjrnf6VYbJW3qyvSWEzXoSqe8kaN27k79ew97s9LzjZ4HpdF65aSNDhswgMX4bThtW",
  "key38": "3ZUg7sZpamLuBu2BXSnSdevYwBHVc98kXL2Wr6ZBC6eL6ZSjN5h8zPZjqasv4ZWj2etkYkN66vy6tAY1FBXym14h",
  "key39": "5RTEQEfYpmoVgXx1iAvpFroFdUiawChT8VfSVjdXn7AEdzTWyJ5HqWcw5oxArn5La2r5mzG93VFSRm9qxuNMpji4",
  "key40": "2QMAaKbeMXRseXtfha87yHJ1iN6h2XFnJSQZznB3dftb8nkZtUBxts6wqKrpEDSVy8LkgA9pXj7QRoFmQzYFwk3h",
  "key41": "3fuZ83vYqtdFNPDzHbSyuVckkmP5JpXQuydcYyd7gENTYD2tJPkEHgaQrBhcTmCc5NthuyiuXZc5B6wBQtjpiZFr",
  "key42": "4TbYSjHAsBzR9oR254JupBkinhFg5wtV6pLddXQUyLymghAN7VHB7TmZ3iMfhzccYwQi2xWXmBEjJdZ7wx41mrgp",
  "key43": "VQypwqrWbQ5HSo2XsBCHsBRssXniHtz4qDNqmJmpYYzWWpgjSGduRFZzdUnAiGuLy5NTUxNcVovuZFQnmwYr4Pq",
  "key44": "ZkWBPjidPHUuMyaVLSQmzMXeTyB47Y4SxJizPPhSVunKJVxLtzL35Ztu2CkzDEsmnp622ydbJWstsJYQpA6248A",
  "key45": "22s973b331pHf8RvBSbWmYnMjHXqPuMzwirFTVRRBRL8van1ahjKd58LoF7WwBeWcJ4yBg2bhKb52osbWeakpTSs",
  "key46": "3Mt8Mz21nTpiS712Rgdo8yWUjYw3168WWYJyWRg3PjvyGUMvKyrmUZ2T2z1QJaY4GMaAHRoEUMTiCKPvEj6cncEU",
  "key47": "2RvUvJAXgqKz1DwyJSgsjFDVC3aefB37RCbzcQQKXhdT2nSniHUmnwNRyoXaTJr5JNqCq1rJwsuZ8WUpuJwCTqxs",
  "key48": "2BTHXPSWyyRbnGJNkC8gK4RyCkaphfpXwrHqQzsgaC4zgYiXrvakAvDEkRPyqGNKZeHW2H9oT96NnsohjQXqTtV"
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
