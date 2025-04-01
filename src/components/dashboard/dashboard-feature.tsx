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
    "5U5LMTf3UBrZpRTJfUcagPHdMEXKD6USNaPpHsRuRNcozBLxBBCm7GVjtzeLgQPjZkf3kuCh53MVnckpWscFJYvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNA9e9PbqFPNcLQedUVzhynwUfrnXYfjm96D2h5B7DmVuqDvf1SFb9rTvmrkjAefEAvp2A8B8hRHnbs373Q63tm",
  "key1": "2aRUvPRtEfRZc18CKiv8bzaTjKSdZN49pzXf6hM3tFGpfU7rKjMz92zgkGEBVYjLVFduCAVz3vk7oGNWWoGJ3Egi",
  "key2": "2mnwN2uKx6FzgqdrrNTa3rAnG7MjP7vQtWEpDKzGtBaZiajsauGjhWwuxqMRscKi79jEsLNwBVVBTMQUt7vyYCVs",
  "key3": "J5jPkCegz8fYA1iJyZ11fWDNfB1s7eujXms5Vs5u9Ldh4p3wBfD8DQ2SLjGwf6gkYMZbRmj4TxqKZRkp6FD64qn",
  "key4": "2WjbVasuD5nU6jwuKK5mjTJKQnG2rag2ttobtpzKy73zgTihzkG6XiHM1tUD4Cnupc4kJHjNcq5PF3hJPapZw3KZ",
  "key5": "4ANUEP8p4uMyh4WerPuBvhQD553ZpRYmFYjA58Xw3DpeRuwAQ1raoMKY5GS95oeGNauKYBFAgVDF2guXh3Q634Xh",
  "key6": "2pr7DQDVGAVZPLYxsUmYPaZgTueu3DNE8Kr1xDQNDQRpUTRxpXPa6iEJpzVL5UknhEud3FmaaUaVcc8Hh9vxPRPX",
  "key7": "xMW7s9aBn1HWHsM27CFzmc5gS77qMf18rmPCY2YokQPCJYmsJMxnLBbM3FPXzjsWe3oy1AjL5RAVoZBWaNvEcBx",
  "key8": "45jumUhhoxJVuSy4xLTb1s4ycUquUYsCnqFzsKVWqksD6W8HN3iRmoYMG1dtYwX7WQTY8nrXaZLCQXGBYhzUNmoA",
  "key9": "4WWaAioxNfLd3FzAW57mNjpXNL4mS4fK5Lnob4Cc8ZgNqv2UXuN9AUmpeWKdfGXxQiYWRz9S2EbvPRDaXbN519xz",
  "key10": "4Q5zHF8H4zVmWR4TNsTciUYvi7cW5xaQnf3eDCq7kvoheBuSfU6hckPHzXbf3hbKDCK77XNn3RoZh6f6yTMEKP6d",
  "key11": "4tJphS4SFd8xcs3MwzCeVuCmYaQ8grZfTfqrH8QAGpYPR4HfDMaysVWyQA4cdCpjAiMYRwmAxfwptsZ6RgYBNTC7",
  "key12": "5bpc8sRsbN1q9t7LAodVdgF8PVQtf71mVtvrKDmFNHvM6DLgwPkj8d13GeNWWngmFeL6uMJmizrQBxhdV1vnPmAT",
  "key13": "4R7HgjcraPUy6VANgMBVbgdvKffx6KzdGv4w3aJuttdJ75MVrkZwADD1n7zfXH2UfMaMoiVyoh39DTf3eVnBm72X",
  "key14": "3qERF87Rrba1FWNpAFXCAWEUHqAcPZckKcSDofZypthoaBiamMNCvgnF9rTz1MWZYiKEexwopv5SM3afEYgg8K6m",
  "key15": "5csYtJk3TwVzuYpWowQWk5MCDCVubZihRTXtyh1jxE6nHtJBt3MmfeW1xoSVcJ7eyX3X71BvKnqK2NKfva3rfdLR",
  "key16": "4PQUQ4bpnDVQKTHq9kpwZCkGGgnxw9aJPyKQ8YXhN9i8Qe3MCxvPQ9HTfrNU3zVwduENGsFL2ftmjjL1y3V4ke7E",
  "key17": "5iACuY9Wp8GSFy9gTCgnUMnzjFLGG56HnTfu1YHbNrws4bv4xPPYYkw7jE9sapptSQnFz8qdGTEFkqe9GzE5zAsR",
  "key18": "5bHFMF1NMvZmw7zHkuEK3tHwXTFZ2BjDvpTo2yTVy2Y6zZNNvmxX7ZaPamhDXDuXYRdtDVJEK25D4DGwAjNiEgtv",
  "key19": "5csrZWTDm7yhTCKSYzfveaheaCaD7KF2SuUQJexMR5n8DkJPvfq8gm1LorzS4igHBDAiyXuSL6wZocc4jZLo6beE",
  "key20": "2AspTBzxNnBywT3BQBRAn9D1MBsLZ5v38BBguNmzEsbKdiWVqn1iyJvjb9DFw2Sify3XdX9MN35HcFYRPB56mx8C",
  "key21": "2RGfPJLE4LfjHaR6ynknZBvLmzd6Az6D6hy6fn5Nr9JLm6V3Yy216TWHx6pPYxEu24SaN2YhnLx6LacNRmENDat",
  "key22": "3dtmAp8rkq3vTgnMJXXRxW23zFqNDKAgJu7y7sd9BBUdoHBAPLKTUki1GLN81iBdSHSuZcD53yN9MdPURpTcemFZ",
  "key23": "JyLdgsoHrsJP8htwtXKS6dwDmA2GhCFRUUTkyvEHmhV5GXa5BDYjg16qgUDmcW982TXu22LtM7kmVsdvzjwG3bz",
  "key24": "4WdKssrERRaWYmUL29okdJ4tsUP1vq2HM9ecKRVZa59QXKvH5ZdgWHG1ZJnYArJeTpB6WD71MFEwu7uZtT159sgX",
  "key25": "3cC9wz6aZojWXJbC5VmRcyhZKBfRbyk7zfghBCTJGZht5YCaSvNLgnvRNgT79WJeNq57vAMr7bPzctsT8D6ZZxWw",
  "key26": "4YojXRbuFQg8SA73s6PoPsFBYK9BtkE6cPMm4NBLUcL6QHFyJZRDV2cDZz228H71t8q5rth3EgkMvanwYsw3T2yt",
  "key27": "4xtqBn1mAEV5MgimVeqRmaGt3Byk4tcuXHLHVRAKUC8J77RsLywKiGCsfMAtgeJrLgWYUrJmbZT75soHqbn4hZdW",
  "key28": "4cD3iuoRa6FQC3R5sJevwterQn6e3jMfeVtTa7FAMG3Z3buC1bs5AFChuLFrx2AfbuGZSpYHL7y5Z6mb7PPB8rkQ",
  "key29": "5f6McJGANDinRb7thLZJ96y6KB3yYqdGs4vJS9pdHNJ7oq4rqRWNqaQXi3ej2pjKq44SPvbUR4XFww35QJbZwoEq",
  "key30": "2xuZMDsZ9htZWJaWvg1dWtdzNUmPrkRKMP9F9BsbBv4fw96wNtZc1iPTfZiWqor3Q4jxgRX446KxfTyod7KksEuA",
  "key31": "48kVqWFM7qXnnu2HDMHXj3uGDidxn3JzQtsy7pZYWsoLfcYcKKV4EmaWdaobdPait9PYLVt7JP9ei1uSKicJZE3L",
  "key32": "g1FSS3kx79Qj7fcvgK7hspotGKCwkBFBXzqpyssi8vsGTKjPsutWdFsAeq3kTQrebYNGryYtsh8kRV2yuNwmtZB",
  "key33": "3oqrc66W2Hon5SNREr4FKqzxcJkWiTfb5KSzxSsz3Sx23DjASCK8fn7ntwJr5rkEFGkfQZmf4Py2yvtSmJuSmkJB",
  "key34": "2RLD7uhFYLMkDoymHWAydFgCn7G8gzd3KFpvekkcQsRUptfknvzZeceyQBTMRFcbtVgZCSkRpfBZppUCypTNGn6P",
  "key35": "5fbsYME4b1mQkYPT58JtMciuuz9ccZrhLzEAkEdWCUz75DUR8jgk6ZSL5CPjebPMBVxyc4aya5NX25CHuXmfcTna",
  "key36": "25swbM13AdPZwJ65HjAn6NhNwNckHDnmgbPZJY1bLYt51vRg1aBnsMnDjCS7XBQNLoppuSBnc33BxmL26gXxnYEQ",
  "key37": "4vsy7vhHUV31ZcVwLGuVzmXceq2BCff2PVAafAnVwT5ZsgvF5zR1MuuyFevisHMS69gmaaGLXMVC17Rgu6e4yvNW",
  "key38": "4CsBuo9vPTaDbNubevKAsyqmA4cnsFCNJHK5QVoX7bSKBQakWZo17prwZnvS9RaxyKtf61MTzgWpdXJJx6biyydR",
  "key39": "52wonvFrW14ToHPgNgJ5i9MeEWVFNPWtLKVgLKtX8cYNm8Lx7qgJbhVnD1sCVFd9hNLYSDh8zbhXZwVTUeEjn3c"
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
