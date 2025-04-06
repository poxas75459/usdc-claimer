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
    "28g6b67gTfBEpUZ7WFvfrTzL1XgGd8N5CgHHdeWzLabdiGcPaG7m8eYPTxYxxhwuRogKBoLdqWCChCkfNopuWZ55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKL19StQWcn7Hchp2XTTC3VZETDjwRTSRjhVPokXMxiL2XLTQrYAKHgTKtiWXL6gBWrX3W1zGjVyfmPa3kBRwMe",
  "key1": "2rC1EqUukUme5S9M3TEhfiAWbANwgiGco3BU2TuX12k4A1qXF61Svk5J3mV4LhW7hwgfoB5tcJsYxWXmSe3UbtVk",
  "key2": "5TEaYch5mTNbELmW3Bp4n8PM6eSgcUYuTsCyBJbM8MVULdBxkaP4gJx7Uhk2Cek7NBhHVRCQiiX9DBg9hMZRxXJo",
  "key3": "5a8EQpaysoKGoSNryctzbUcUDG3j3hnhJ9KJUMciryL1mTw21h6NwKut2aDYyjhRpAh42w5ivmgySkwDjpbidY6q",
  "key4": "Ztt21uqTyNqJbmsV2JyzQTzc5FWinoGSVR4b52ULmp14dqRZ6ZYHn8buw1RW38k6XRXGwTJTMu5iaoZZ75WS2Ws",
  "key5": "59Cfr8NyCHoG3SWTsDU9pquE8vLcNXqTSdN42bPeZmiZ8fibFDiNRTeQiKXxC7nWsQZV5TJj2rrft6CFRNm8bi8g",
  "key6": "5fj366q7Tuoa5biSnHAkRQmYuKtFUAVoqjvNcDNor8ebsS7cBGGepLc1XQP1gDoCa6iwrFAfaHkABsQgvq8YFZxa",
  "key7": "epD9oF4qt5H75NetahWZfZivBhDxsbJP9nCw79jsmP1ZktneFykgvW9s4opQA13vWCYdQJR8vsEd1ZQtCuhUf1n",
  "key8": "hDVJjieTPGPGHDnrY5Y8pm7J1A9axzH4gaACCCrp6nNs9dmMEbEKzCxN1mjiQtdPb5JLvT1Nbq8h1VYhzX8wUZT",
  "key9": "43BNeSgZBAExt27Y7t2nzG5UCQNgRo9v7a5dkkQ2Q2xPNes4NgnZJA1tYZxYWiMFoTANtxmBohdwvm524DhR9Je4",
  "key10": "2aLXtZdgmowhHtzKZGvtnrd2Ey3JXT6sstv3FBXSTQeSWRgtKS3Lyfopwg1HgEUvYtQrKftUsSySXW6PNd5bFPmT",
  "key11": "F5NBoY6E2y4T33uicWqBkZtL4KYjqE6tUWtjckLMNqkUNkZDvUnFuvZKUKckUpdMjHtCD4ttGoVUwJBT8ibZGrb",
  "key12": "N5vwLucv2mtGSnyAznYzjZtCYPYCppx3KTyEkSpoEQSvvUoVVYZP4qXvxTa152nTye6yhvmu6kpbsj5QPtcz6pq",
  "key13": "3DKLSKjCAmAA7uhJ2hdyqqmWG8Qf4hwgJvZKRSpuopKGzZ8zFSifV9EjaRoyTWtVnHQw9AMJuFzdertFa6CqyGsK",
  "key14": "2aehqmjtELk2iVCdbdA2rSnQGQN5ZuGTYSbCZihrgChn6T2Riydi9ESHfDQprK8nYM8ibZEVcX871Cp3jhfWd7RL",
  "key15": "4kd4nbACFLS4qgMQVBLwK7gETbSKZ4H81jMbFzScb1TpnqEDrasjzWTe766HB8rmXm6GpyZoosp97q2yUEuL9QgW",
  "key16": "2LGA9xvEH8dsukswtuo3pZkH8yvuAt9MMKBb9FbJVGHYGUvtNp7VgA5nYJkmXvdGk1ae8pYeXtt5StBsv3cCQY2X",
  "key17": "3HRHzzxhNnTmYqe1DurDwcdZc4i78WbH83TFw7QvowRv21CFFrB3G7uMn3VTfyt4nYwiXMLdt73pzqHDx3yoj3A8",
  "key18": "4tfxMwoim4cofggFoBvnxb2cxVL9zhHTxRjQZtFVG7ciWRFSdkwVcKqmMsxjzx7CW6wNXQ6r9cjtGuVQ7NftzEmy",
  "key19": "Sz11td6s6csTzzR9qhqoTfFWYsuamheb5FXRYEP3KAm8oPzbTmRcsjXb6ooMb7YfaU8heWYkL8iwLpgcs23xK4X",
  "key20": "4CfRrDTw989V1tinTB8iV8zrSfvewHuRaQotNspuCQhMUPUpDMBhK8o2Lqc4q1kSvXeMYk37T82aW8AFbKZjLxGy",
  "key21": "7wp8SRJ1WGxd35niA9hzTj82A1EJD8stDfNk21J133xJ5RumWK279m73tk7WuCcL5LHzGSiJSs6ZAdNQwqghamc",
  "key22": "7jYZrCvPMGvHefBXfEjqjm23Q9Kqc7Eis8wJtVMSNXb9vZgjA4kCfdw51rkzHMSTwisQkST1PKjQtQxZUyABbkj",
  "key23": "5YgwofYbvviGfWAtc9iAgusvQ5TkFL3nyYmhuJvw1AT8mLVRSXZnfCHMkyMjttgJL1mhkY1jv2RSCYnf8gRFavL4",
  "key24": "23wgNdfHsvvsJZmaVM3vYBvqTUWkQ4PxJE7Zam6MHiviauPCNdRkZra74YEvUt6fTkJMS2dyJSH5B7KA7YDW8Xfc",
  "key25": "kCmq1gyr7ZX9gfhwGmVFCSPWy15rksowRcp1GkMUX8u2St1AFLrpwCqjyDsWNWJKB9Sy6ixwjSRntMRitEZjmwS",
  "key26": "3CdVytwCuQ2V4e96122dnq3QMgkc91Dvpu8rBYz5YjP2VNydEQdDSqhvT4nuLRE6jzH2Hkx1eTR9gZKiV1rpz4aJ",
  "key27": "62aExY3dTuic9eSfCHa77PtqKox64r85PT8atfhCinShV3CvYkfCNQX7onJncw9ZXPaeVmwVv36aEX2s1F9fDvpj",
  "key28": "5QEASb3kuUFf5idZKB97PHhFEE8ASxGev5neaWv1Msf3EMjjDxJ9xZfKzL3EaSoaL9uKr6xC3NktjtT8W4q2xHz2",
  "key29": "2ehgPP5SSD4p3x3hpKE3qbLJkGn8vRS5m5VqGuosBkTqhNJBSjcsae37QQF1YXWJfaG81bFoTwjHCHkzhQENo8gC",
  "key30": "3JU83YzDrPCvMi6hNnhu4BCAgLYE9F2PgzFUbAV7buwWoDBysUhoECzC9Ms5XJ9Wp4J4948SCs1WUExyAfkaLusJ",
  "key31": "3uxZ6nY6L6gr3z8xgGG5FPXsbJ663yMVqCZn7gjSYNJLPXqZYMGxRDEufM4UY3SXkniyDX7wL6r6VHU2Qkjx9whS",
  "key32": "3khH9bYcSrHJxc5aUuVfsZEY4J3Amuq63cVzybhPwBnKNSGnL6vQSEPSwXsgnfBTv2wprvGotdsSJbA1GRg2vb7o",
  "key33": "3oQyrEbH27MC839by8zT2pQbAY2Rw5Qw8HQxgUCrRLwiM1qF1mBrJEjP3gpwVUmH3a2xKhWy1R3vuYgc4YGPtQ3T",
  "key34": "54SXQqSYtqhKkjpapNLbG2nG9PAgKcmsrYhiKCDBh88647ruSD9rDu9xTXUHUrZhYX3amt4LKpFZhqCqdK4LeQaq",
  "key35": "5Gxi6S2FsZ7iFMGAX2KKPmHz9mLvZRQo3BgDg7uJU4GPjzcmb1okKfSdBaqLSNNRiV8wLBFhsBNZsrDpQenPTyk7",
  "key36": "26N4KaV5gwtSfbdRSCpGyLCtbnjXrN3acuZGApqnA3K1yzKy7WMg6V1DQj1B1XxoazfE1KqmTH1KKUARtb5V1N37",
  "key37": "4r89pWNUW2X1DvrSuQZmq8XX2BKqCoLbNodLAeqJNJF9fouQuiZzj9AMhmcYVZtA6U5xP4kSFiYwseTJ7hLsQkxW",
  "key38": "3VcXahqxPLQWYPrbgvpCtC3W1HURZHdbx1Kai3tHduGcqUd5QZaN5jkNcoQq32D7R9f3u4DnqvpuobTh5s3R8GsS",
  "key39": "SSbVzfSTSZSHdQSyzqX4qdFMP4UBsHwVrY2zpzGqLLUHr65q3i3tsQe4K46Wt99jZj36JJB5udvUKiNThM9Cr9X"
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
