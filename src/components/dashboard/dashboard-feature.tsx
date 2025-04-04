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
    "42cNomZgUs7MvisudVMJNW1sUQMerzayWkbae9UJHxVSUwgmw8i63N3ZgjWAnmeRCqncWAwjEyNHfVdUGz47oWRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFUfVZWtKuybGEJqjVAnjCA1dUe2BiCv4BPZN4cDuGZbhZESqM5pMNAjNXfwEov8t79eqN3U5Gv1AJroxvsXxj6",
  "key1": "4NNGMK8QXxnnC5trpE9E4vrCvLdFxHC6rcEzh1qipiXjgFBtEKHgCqcbqffTgQtJpSJ28jdYR7PdgZYY3197sp1v",
  "key2": "2m363nV69vZmMNK53jf4e6FnLP4mTag4wv3hBaNsbQUxuQszBtTBT1dFa4adqMJBQXK3bJuWJUeuWJDAp7kgK9yQ",
  "key3": "4574RmMYTK69wCnpBc7AALH2Ra3WP9a5e2aNMJDMkw6MRC1Ex6hBBh6gRCgF9ifJpFX5wADokKzRmqYLtr5iFtzY",
  "key4": "2kymJQriNieN9WCamGoonYZjbBmM665SCJZXBT3vBkaVGM3QeB1ZpvJ2gkTTMNnJA68gNa3itMGt4426NYhJqxhR",
  "key5": "4TPzbDuBu2eYBLdk3uHP2JigeNNheHsKogYQ99c8zR55jvWBoYw4QrN2VcfnmoeUem8sg7jNjnDEytViuMJ68frA",
  "key6": "2iznsDZiNjUDACqq6GZU7SUyJmK3eWaoeX12qo6fBrxBye6q1kzepDJVGd4Rw2BZbimwwozLr8xtBcp5WtVGsZcE",
  "key7": "5jn47UPpVoiSwGoC6JK7EdLWzfKyaw9mYob3dQ1f5Nzz9qgMbtswRpUwYAzmgHBgz7YLyHoFzd9BUFdCUUiNBsuU",
  "key8": "eTTk6Sqh6HdkEW6HP5393zzKYR91sXB6tJFBqSkx6jPxhvdfwjDrBQwn1fbkJppEBjzsTFQViXLWSNNhoqb1Yda",
  "key9": "3BK2Qs74efrL8wLiww3Ta82fA4TokBH2QSMYYnMVHfcrEADD8Suqh8AzxVzQcWmP9vsdD6b7nDaCuix2RJzFFq1H",
  "key10": "3ieExzCRtTiC67S4xgz2sfQQjYHoGZABQNxX2JLdSLxRRgHZQ6PzzWSRs5mUCjUbcVTetbYNbyahLruMeYEz3PzD",
  "key11": "4oUvHjfAd2yHujfWAEh7f5oVwUqLPYY4cP5WhxEWRzhYubMDPmLLxioxEn6R5auyvtGqnze6ZLBr7e68Q71N3RkK",
  "key12": "gHyjeAY4dXAhgotD9rEk54QFpvjdQSXvpv5qjS3WL41R2wMrGsLdnbMpBrhBXMK5FFkdRAxnUCTfhv6Sgmrxnxu",
  "key13": "5XovXBx6To7C8q8jSBaen5WTceDFpv2h8gJrGVRFYiXG6tXdh6Ht557FqChbEhZTaoE4h965AJJZ34bGrDAHyrJo",
  "key14": "3JKWKPWTjAvUCmz1oYrk3YHtHs3gYbPvM8zd7p5BovfXc1WLr1ojPERbHer9MzPHStUC1A7ic9Ri4wHxEDnDPwQt",
  "key15": "2P4ojnZe3hguRcashyQA8fn9n7uHb9biJUWn66BRCnM74rVmNk9UED6Ktd3FUfR2aKa5z1TMK9MLznLEyJPn5L68",
  "key16": "2UyhqjZ5XTdQex2fQ5J1WUnaWDPpSSphcQoApbnQmK7ZhkmRsMKhAcePJLPozjqALrXjpmHtDC76kiiSvw3e2ixf",
  "key17": "382AbRjmda2Y42gxWJFDL9nHQy3rpTC8hkgBKtGdM2PWjvtRYRa5zLVLdJJhwqtu36H5uBmEyTStBKSJG65Rps2y",
  "key18": "5AT3uKvhBHkWX6K4kT7cqK8SRzkhQja4VdzVmphKT2Zkjuk9A52Hos1xFLzd1gzzmSKZwytrFyDZbhzNo5b8HTig",
  "key19": "mM6YdC73TipoumruCvXRUKURLmnTRxfmdjnhpwVrEMDwg6ZJCQiAyRQ51MX6v1kt1DgT7ydB77zRe5y8JaTsC9f",
  "key20": "4QA3zesmhFtKYqUBQ2wtGnM1tV6qNBrrTa6Xn5PneoNcU9tMmpu5JvkRsZp84sH44GCQs61er5UTEAGNyxDkPLAB",
  "key21": "61sb8oxn4qamE9ScSDQG69u9SQvkQcbG2aTiosCoZKFocVszrtUabHT2G1KKLvDSrZuhzYdwSjJ69z67gtu21LVJ",
  "key22": "5qLVcCohBtMM24oc5GskrMGfjzXfJjypuHoo9nJ6HZtM7oJxvyqEWyvJi4dBrqkq3iBJSaZEdEJT7et7H7AGj3JB",
  "key23": "4c4mjGRHdzFDa5s7dweQ8PcDTJtkcCG6bvUCwn9uB7RqhWLQehD6tEWuEgs3TngZFEKD46fHB2yCFWJrZhP5axdt",
  "key24": "2acnue4DG3MLiPVzAxL7MbYLHBEJydw7EL6NqQguzMzBmZYx3pNoEV4u6B9xbDcFN97pZKPUrtFSKgTmyiAPT4QL",
  "key25": "5nWHpuGBp1KBXjcB2btfbAXvEdywYXBZvwxR3znx5nbvrBaKmBPpaM486Y8TcBnnTDBTnidsaJC2m5rRVdx7THqe",
  "key26": "5Nus2vanhkSTmV5JgHmub9nJGdZpTwGtwRyQesKCDNahfUe17wu4KLWH21WZDhc6A5W4ezmsVBYBPoRSSPnNvY45",
  "key27": "5qksFicVYDb9Ans1XmkjPe1WbSer8hdzkRW4yyzXs9LF7cnWkEQThMj7rM4ynjTUvYLPZx6X9WLQfuC77LUF2Eui",
  "key28": "24C5BzzsCmRw7wC3GmmetQmGeyv7LNQ1BnwXtwqkyj5aDKQ72He16do4nW2BkFbqif9mj6xcXMerWPESBB3mGkBN",
  "key29": "4DU1KeDc4DP95X8KxEdBrf7ea4gwDDNuvqBMqGRFW5GrX7Teymd45KQ7j82Fgau7RLKyHCkjZnaaYVTEJPENiut2"
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
