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
    "3aW8mnG9YZLqMnhML6fLsMr4sZH2HcAF1hsXE9QVxKY8vV3fK1FJwjWmbuuhCSD49uHzh2Zu5TGvGe7pBRxGrBRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvDqX8XZEdE48RwLGNSHAf3h4Min9UX4VuQSWSLRLeZMBvaR7jpb3Z5sXafydxi2Ynyk6YE9nCUeXvDAmfhVJo",
  "key1": "zC4zKVHVzicnBptmUcddTg7uvbrz9g6P6XQuehKnkHH58pfSjHt2wzjQLiyct73T5hZSGEfrzCjiYx49AB84kWK",
  "key2": "3tgKw1vsDA1fHL415ANAFdX5U4qcYnA8zDsU4VLBJbA1MD3FEvpT7KKqkabbbuGLwaHh36u6mEhdruYQmHhvQ4Kz",
  "key3": "3k8MPysSNu6zP9TnFoJ67fxpGAotowpRKfgun4zssHp5C6TizoTJa3eZFfxxseoK2n1SKY9eZPbZJzfzAVfXLnxK",
  "key4": "5GnSXyL3SYEuXdeEko1ZaQPQfvptqMtLX3TzDqq9qK7d3K59TNHS6t5a4wkGGLwzX5oHSXUC6qhMfJhmfDmYWPJN",
  "key5": "2MJjo2uYe9TYehxtQAFZhTQLvW263FdDJNe6yRS9NSJg9MBTiMsns4mzM1cqWKD7iefcKnPgrQrpRRHJ16CukxQd",
  "key6": "2eH1mEM5TTwdyjvB1qWdAAnbHxwePbUtothiFD9faXe3PJCCAQd8DzWTw8NMMtNvZeRTcHZpvh2yUZZpcZhAMyWg",
  "key7": "669TdzubKXx6T5fmdF17y3oMdX4ECDc4sNfRK6tUimgKV9fCnPHr1rp7dPw5gxwmGFsQsj168iYWx3VqQavA26iY",
  "key8": "2G2WbV7MQ6NWxtg9nDjn342uR85gDoeZJhN8cRPJJ3NbEWzsGCdQ2ywypkxwTPE6HbvLpxCyWtXzXuVEnYursebE",
  "key9": "52xFt73VRMygKkJSXWoiyKL3GcBGBL6X5nSBFhUKogKTBugCnoDfZ6sAVfESjGq2zj9m9s3BEymEQzwDYak6kmsi",
  "key10": "2mYQdZdNa1nUcY8qfLmwSrUtJxRp9grFohUiCddW1mYAxBj2hrCQwiz3m8duUmNKnVHKTpD6x26k6HN7XbnHYv9c",
  "key11": "2poBi7WXwD8kWqi5g7h1Nds3MyU4myzRAB8mHB4v1BoTJH589U4oL5xXKDWGAevKe8DoCK8ycc8JfAJCLYowKZMw",
  "key12": "3EjZj48mFn4Jh5eLdWb2PzcK3ZHzJLH8dHnpuMuUy5Si3rE9bENm1fQHgjfUGbLzoAW3XthTzAtJMn3Pr2yETYqR",
  "key13": "4dWgr7HPDzyckge6iqXxcd8Bz9K73B6SbmiYyRQr8beTUHJSD8cKm87SXPwsYhqDJn28ZRvd1vyd9jSwBaX4dPTV",
  "key14": "5a7KfJKRkXMWpFFZwBizqv1UNUnspCvY6XDZn49HcsdhBM3MoJda2kiWaoVFCn6DmVDjewLh85y4YmMyvJSSsTnJ",
  "key15": "4E9asjjASF1vSMuKzPBF4RkVGFbtmdXYRt98RrdChd1mDDaNvVaZ68Fxw55t5JjF7bDZqRU9zDrn7povcD7e2y7v",
  "key16": "43BXFBwqkgxLe9fnDnrNFj8Uzup7PrQfQTBXEEVexivHnZptuWCp4ev7uk9GpjRAs6281Muy8eAhf5jyDfwbcMf3",
  "key17": "2D1aDUsNwr3hpAgUMzAL8rCtTor1EhyNk5RWgFAKWNppAXedu5rbGL9j6yDvxdnkSniYJ6SLRMj4SgDaupcCcc6C",
  "key18": "5CMidzjHGDFThNDEWKL9rV1zU9vMgJ4FCWQoE1UPRKKHbPhRYcHE9s83aWYBXstf7QxPiCAEou11KD7CgXaJdVmL",
  "key19": "TqYNNKWMnMidyYHcuH8jEURXrtGr1EQjZosHdGHKBjcxe4yHPzqvY33x8tx9s8RALP2V2fd5rLqUii6Vmvno4rT",
  "key20": "36UZxqJ66hB2DMA5uxwCwH4rAPYwSrvSxKBFy2w1rC35vVHgvxQywWDBgtLKfwUHsuYgY6Ski3GofBaPPRRM5ZZC",
  "key21": "uoExjtCx5UfsozDhQe4PTUCEA5F34v8pg7Q2F9Y3f9EoHGHWqqZMpz6TCbTTQ7W7wmaFcxejuCRkvhduXwQd8k2",
  "key22": "2sBbEZ4P886UPBHqJS2veEVzg6N38tXwZTX7nnEuNyX9oegw46SST1x1GaFtWHCXJqTN2pZoNU1PNiyptm7gexia",
  "key23": "3GbE2BxHwbN8hRMa1ytiqQK7ubstrJfc3LzckvPpxv3vcUdyyWWR7Xaj44h48P8S5DfaKojKqy698sQAzhNBuJbH",
  "key24": "3SjojxgP2adARxpFs9ckpBWFJvus2VAdouNjZe9FXgvPWcrMi2Sc4Nsgjer7BjB7xKqbQxKBj9qv3o7i13T5zckb",
  "key25": "4RX2tEGjJ299Qam3G7FgbjFMSXuCShSNY5CRR7JEZc3DLkAEDnNLY3amV9LyvSu7Qbhdmjsb54aAdGP9t3T6Bd1A",
  "key26": "UqUMWzxibXHMxmyhXUH29YxWtnM1m8syD8YqbAHEF8goU5WCJK4dcS3sDB2kWYQ4sQL3bbgyxzMFr1k2fXvTFgP",
  "key27": "2kcuThcDocg1bJVVuSbTEP7r74BcdsRkXjz7rmD9kqSio9qPFkydQfdbfzNzFJPhbWXVpu2RVwZN1oeUzZkgefJN",
  "key28": "4gAn3L5kd1piFRdRzaRC5becddBcVXbSu6899Jwb2Zxf5vFSLcsiZGykoqQfZQC1ViS9Lo3781uUDQEdNafBVdgx",
  "key29": "3BFwhqRtH8bwRojaSzp66jzTkLQprNx5xMUqca8QcQJ9VU5fUF6QUSiR6eEBAWGXBRqfEqRaE7qXWFYRNxMBBQ2t",
  "key30": "3B1dw6wo9d27jCKSJc3aBSiX5rjhuNrNRqXFVWzWBikZ88dm44UPsWiPNwCQszq82WWFQJoeZQ5cJWFSooyNmjVB",
  "key31": "RkcNoR9nKSrPZQG9X9RfvzYyjSDTDnxBaPdEkNAuYhbFs2tuWMYNAGQJehspAr5tEG2dcbmm2LdfM4V2ytQzwKT",
  "key32": "4NU6Xk8U9PnBNNGie8TA3JPXY1JCFvApH6vpWZN9fKw3d1ivpKupg6MG52eZyeUCsoxFRzbEer97he3GvidY2FkK",
  "key33": "3veN8xbkrzsLpALnzFNNWyLEyU4kHJ97r5UgeBR7WWXGvZmAWnYFHcwxy4cUWbTx9wsQWBojJKaLNpcVg2NhycMP",
  "key34": "5FoaMpcS3KQBSFR61LzTGAFeiaZjZWDcb9T2ugAhV5rme4qmTk1ASBxscDTGB3hpi8jJtEQxZ75CawVA2XRJD33",
  "key35": "Q2Pxfv34ms9yLJPV1ZTxFMkM5egp9J6ZBmTr6JvedSoFfkDAafGQzqadAgrMRBGDQ16pcF6oBsB4J32sL8QSwAE",
  "key36": "5VCL5DBTtjKcyvmPB7B55KLkibSTEe7tShdxW5AWchxRv69Qt6AKmw3T8g7fHq8bp5YicUPTsGrePiCM1DRijk8f",
  "key37": "4XBdTKU97YqX4g26FkWqbkf3SsgPu2mL6e3Vbz4W7vovzspfe4pQbiGbJ87f3UeNuXXMSfeCXcnHjAJofh7gBwqF",
  "key38": "4jHisSUEqtkGicPpJe1xDDoWHuZq5f4RoNEaTg1wVwRLYQvg2XLD5rdkH7Axd85ntfSaCw2aLE5LBqmcV5V5A4RC",
  "key39": "2ZC5VD5xRmjStGHCD3GxFDXU8TVps2z5cxvGmJoCDRfZsdQDhFT78jRj1RMqwQcC2aBHRZusAdDxxKBzar4Lgp2v",
  "key40": "5qvZ2PQ8r3dC3YPqh39Y7KtN7hB1FJWKfr2ivzHJATsiCWBh9YaTdANeSgTHbMP3Dbh4tj3zJK9SDcThpfZmE4CC",
  "key41": "46Xv5yJVUt5CFmPF4Mo2WNaJfcXrdTF1H4vqTmNqmQiC5tyiRATJ3bbWRW8MPu22XqHSobKcM8EFAbSStyNsYJo9",
  "key42": "fdrSemkaFwXwp7oA7vakVuRdXQE6KnAsnNaQB24hu3kNRRHt6AJYTUuNnKaoiHeg7g9hmFh2VVYr7kiN2UTw7Gu",
  "key43": "5Xb1WuRTytDDwgYuy1E9esqLx4CGrEULuhVErGUWortY36QoyTVEM5hrvDGMYGPMaLstVZeWAuJknMpKwuJ4AoAK"
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
