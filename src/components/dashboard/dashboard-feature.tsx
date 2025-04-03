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
    "sm3apFxkLd9kEWKoFUTAzB7TXCHgzTnunGtQ28KBNTYbhagG5cVqfL1a4QGFM4VTZg8XJFABpH2XPMb3JyJDwBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uoDbpx2bqZxY7uudypEJpVScTSKi99h1Du9bve9EhMivuLcG4XXp5nWonK6abVrqdEoFRYjmnr9CFxhoLWuT2gK",
  "key1": "3v3xuc5m72wLhJZHfT8VTaf2yZS8xSw9B2mUeBdKk4TajnKsK1iHTFceD5f9yd5NoTMXxke1t9LQU7cqvLqGb3wL",
  "key2": "4HMRTQSbt3dDMfucKFYn7dUq38XD5g5XXqcSSWUcKBjgcmcHMCV4hA77b5DoP5N4BDTomWnAyix5QPFrEHQ5pWPf",
  "key3": "2ncGPKtx7nVLQaGNKjLEW2atkBumZ2HmYY9gZrmsDy42eaQgYaisxmacvamDwEMbt7vjytckeWcMW8vfvTEjKbwe",
  "key4": "2xATegoEDeZSsktaoFJ9Y3uEAr9QGf8PPeaMpSSeAf61UY9Hz3FR32CRqZyADVAusNhXwaU98PTx4c75DjCbVVhi",
  "key5": "5poimpjjA1rGXPV2AkVZgfLpww7KMZzfrppUGTRBCDUHSRG71sYvYrEKLAAhT3JhpwkupaqjaosnwG74mzp4tFHo",
  "key6": "51fHGx8SqB8epJsXrKNaa18viaH4a9uQqCwMqgBX31H1XmNVmZrJYxZ3zjLuDRwT1T9Eqcb2GyVEYcuvtr3thS5n",
  "key7": "5k1aKQsUNPLcnyqBjuUj5tbnqCQsMbSVNxoYwjkZZkWHq4waMFMBxg7sPGLEyYoJYtcz6iC2PY1LCLAtUYkXYDEp",
  "key8": "5U5UzdYPJ1QUhAJU6SLpi5VRvdmqjFGcngs7xGP1NqULX2kzCvmUzrsgb8LrKT9FbZLX4qBqDHM8nmuka1cj3F7t",
  "key9": "48DXABbmSVvc27JepSf3FSeeLnFkH9qbb23wYtip2DfEbWk9xctExd6RuemrifGYARgEoCuGmpQGAbHRtYkHtErW",
  "key10": "4kgBzSQRg6zWRJzD6wC42GxTBz2cvUFBNTf1ky5EjytMWEwESxnUqNDysXPSVsCCnPaj4npGgP9WTj98Q1DjeUuA",
  "key11": "2usxKfbWWU6TxAou1dpJNmCiSS3vJLSV3rKBkjwDH5UYZSubh3fu3AAm6k9g4FUp2rNm1toNxGaucLFNPPAH3o4t",
  "key12": "29QDm4n2p6SZjF5PDPYGdDuzgT7KvnrVR9qKrtEwRs4svWjigStaezBxbyUa25A7PctPFLWwyarweWS8dFWD4Lhb",
  "key13": "HJRXZZze7aVo8Yipnjm9SFWaNj1cQbNmpGZyhYUqkEY8nkhNMm37b1rvsRLKeqXco4rjiknXPQzGU8cd89FsDvZ",
  "key14": "4qMP7myLHsU61U6oHMBAE5jReb1ijHgv2gWghCiYqfvA2gHZbhXN1hXcmrWYGzkutJ84MLpnjJ8BmF2QTnstLMdi",
  "key15": "5qN8FxgUx1aWVz6k2cs3zZL9oTEhmd8r43LjAbfo7vetRAAsRbeKWB9jPfzvcn2T78j82vBah2G5SKxwDws2MUC8",
  "key16": "2jAnxKcJWCU4N4SyW9VWbwqwyrmiBahpHxr6osJAwDMjUj9hgBmpToL4t65xXnW5LM6SxTrG4o2Ny7zmULqvqGdb",
  "key17": "3hoYB8EHouu61DcJDWfoxx4NMhXU4ZKCVLER6T1JVdLzCeqBXXLYb6ZGqouKHiG3UGZ56dozp67eYvujFaMSFRkA",
  "key18": "2nzqf18RxLq9UJLxn7JheVWKUpxhEsmxGA6tmNMBMRkoFfz2WMRnFchsgCASdtXUggRXMTwvrvseepg2GqCRYJhM",
  "key19": "2bPQTkDUfyCvKpGYf9xhgA2d5xCYCSoBXyYXhUS73TByyi2g6tLYWkUQy6PDTRTK2zkCkeP42CSGWkcPkZDhQdwH",
  "key20": "3MJt7gQher8o6sFi2o8uFv3A5iSDA9aQmFRcF3ogULZWwcLNx1VxnvWaQYK3SVhWVcHBUrswSvd49FVkQJ1ie4gZ",
  "key21": "21BarHbVE1mnwywkLokyaZky8Gqifd5TzDHWh4UhmEznm4LZaSsEmnakYuRyNS5AAmvAvAzJtSaXh1YwDmARGj3u",
  "key22": "4qmW8HNGL6omW27Km3YeeccfhYBnHpjjdRMmwfCdqh9CjRipXf7YEdutCUW7PSUZke1RPaWM3Mrg9Bc7vXFHq8vV",
  "key23": "3mnsBVEcdL2KPGJ95J7puFKXcrvHA1dHGsXZT1kFpKtTcBg5xMDyUALkenXVwdxAbb5jg6nj34SWjkq8mc5oG7Rn",
  "key24": "u9cWGrGrwdoDZ4hWPLNi7MqyYUp8q33sMdBnfi1KmVbqXgUTUuE5i5VhYvbVS9Qx1ceUcEhyLxFYePWUYQbqjen",
  "key25": "33RXTR9vurGCYgMLwFKdkEmW7yDpVZ2VEYZnDkfVds7ecRxSZ13oM8DjcNrNvhc5n8p3tK5S2qMHfQsJi1gD9HYG",
  "key26": "u6TXiCk5PJ1eZPqyrWCAXBfbpCzGVRCVnT5MdsGE1aQb1jD932ocK6fh7bdypAS5MW4gEQyMH3QCUxnAoMY3nCK",
  "key27": "3sSEAvsxHXZBsH8S4MX5fQbPppDe46zw249h8WToNdMN4jv48q1a4s3d2kmYHpkPVyBxordEp3z5pTnxVyBq266k",
  "key28": "5aQ86yxyyRb8am1Y6Quf6rz9gCbRyWYWS8i9YWsyYFrMYZBVAkCw4d1seME5aaeHMYtsRKRU1tKrGBwBev3PkmFD",
  "key29": "3GWGZR5dm8YeVgzg2vGDRYBziDpygHcTeFooJsDEkBDf4n6mUZjUE5rr6uZ83qstta2GhgC2qMYipB1bt5WNuL5T",
  "key30": "mbu6qhXM62eS346DSCRX2DaUjWuYHQoBjSxfVxt3GVxWa9tpcsyQTGdni4de6ha7C8QzJBPNTzNFXKbaDNmp7qd",
  "key31": "4gxRJcNh7zZX9Zg8UmMJWqJ1hRyUKvwPLqonaXNNj7P2vowKhYMqS8exZ5fh7VqYWfshTxdW1HeFqryuzRqUu7Bo",
  "key32": "4FYofgoLQuKLhspjzZ3Fu3PcKjue1VZy4cFqBVtAAFmgZrryfVDXVeSq79Wee98FtjTgTx4DmLEcpk8Dt4xodCYj",
  "key33": "3E91P3krjivouKN6FXBiCyMJhtmEhvH97e7HjN9v8ce7TMsvZWAjUuAxvfBfxqgyLMCybid7MbDcHRYzk9r1qkGS",
  "key34": "5AaE3yEBVL5ajqzYVrku7Hha6NDec9fkACDeaTQPEbSAz5jTTXBcR6FPnDrUJfZxhqL9b6y3vrvmCqqD2mBfitBN"
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
