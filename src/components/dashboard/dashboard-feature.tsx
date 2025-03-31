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
    "3X9t1dVR3EGiVaTwE37uu6cETFU6SLYHBjxZkEuWLorU6V2wZnUJkpd9Cm3E8gaJ4J4yHLCPiy6Vwe1WTRomeKQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XPE7jsHgAZgUJKXxjhaLBvmGBfBqg9GjBeX1wAkQoyoUtSShjBrnYCfkag8STwy92jcLmmKcZQWqjtRycFvTD4P",
  "key1": "5Jx16Bj2kMEzFJz6EprzX4WnYSdnsvNrpNnyKhVC3FstswR74K3tJGFT46ZvdrAMuWFoasWs1ka5txqPY9gDRyLG",
  "key2": "1aRrsnRTNuxEhHFPV87XeCpt7dnmGiUfMQznu75fod8kjSJrkjgQBqDnfprait7qgU36AnGGNpK32iBNEoVYhi4",
  "key3": "5hbgQsnpoaaHhm3endRe5mTfyyFc4x5upGQxHqL2Siu2ZLHkTgJjpgsEmmgPXkP8CvtrzcwJyHTRZK1edB9JfoCo",
  "key4": "5omNsvDk7xa2shhMdAjRfzhQXUhpBwXrhpa1qr2mKZHzcmg1nnSupfF4hMMVqXjiDwHeRdUuwwfcTVPrjM1v9ZLq",
  "key5": "3mAPffFutF5xufJsEH1zEjp3N4k6PT6MeaqVvdTjwuwZzLcrBuPTKPqi3G1Nt8yd5H2yeVkR8FgiFpk85d3D2a6x",
  "key6": "3rDLiT6nUEa86Hh8dWFt61V5dTwtWRLFcquQwy5NvJkK5wxbJhG5iH412oZFYRHawx9sxPvB6PeXwxsbvXidCKsd",
  "key7": "rSKgiZdWLXX2qSjkVknkax6CtBhTM5deJr6Ke52d2JkjsxAW87SjoSPMApCW6NnK1pWnpYab8M6MAkGsQzcfH3T",
  "key8": "4r7U6RF4DsYvZA2hSYbU2DhKCYi3Tm8sbZAAVJHQqhpxwoXSXEt1sgTzfZVJDdkBM2JUNqrHN4jsdU7Wr7KAdMKh",
  "key9": "4UvmCzYAjqoQXJGPTrETjcrYy3CBrxURKEFJ1bkKFjpspZXQcqE5xshiV4D4QnW2gmiW9NAZETBPsrN9XAxCwvaM",
  "key10": "42MLMLtibrAGdC9T15F9HHf7wcyQ63DC9q2xR6SLqrobrySsWoFTwUyBw16W8B4hcUPitXacLYRERaMsPqs2a5kW",
  "key11": "6jZuwUbtDPhT4g5x7LUkwEJemAA63QEFdbXSy98Hv725E2Tf9AiZ1xRBmW5g35YDXSgRhz5rZUxpdiZBKGfXEUY",
  "key12": "DyoDTqPHMyGu3o1zKhxfjCF27BhGg2KdKiZ2AT88ZBTRpfZQCEhgFu3KDx7hEKhWiMBmoCeCtUFhcLaPTdL94cA",
  "key13": "23exqsLW3msfpHzawBgFyqQbF6qRLDp9TyaPMpMGotjoySjymLv5ZbEE33tUH1wdz31YKXRHHk7pH23rBRDrCeBT",
  "key14": "2LQuNCfW4Vztz5n8LNXLDeUYfDjgXYsrYjLgK7dPiSvxP6PDnQtibY4pWwiunbxmpbmQ94ADuKQ3GiGacA5vf3FE",
  "key15": "4V9QqC2gs2GdxYXJT9J1J6FpWfs34Dwga6n4bSMXJM781dUysemhvEPgcNqC2zsYz9rdXVc1WbHbc38oNn7Kd5Bi",
  "key16": "5x585y8JbDTb3gGFuypczWghXzdh4HVKqv5Guwv9N7dvw71EfNCJyokpofzKtEy7n3SQxdPSrDF6xLDrG3rpNAiV",
  "key17": "5XXaMxtjGHPyguwhbm9zPKeKoVavXRECysfmXvCshUD9FJpkskbe8rEohc5NtpSp8nbTbHmo1YM5vwnYfAXsHiXE",
  "key18": "4LfVLL5vdKq7VhP1LnondK7dzmvfwxrmnhsE5wMKS1Px34Dk22khFPLkXu4G13fX2qiE57tPjz5JSxTCAL2NbKNF",
  "key19": "5psA7RWgcHaJ4rNg6BUE33FWfAbpRkqME3gLYg5i1PRHCFVexKuuZTBU6uJRgZNnu7zoBkhWNVYsZoY8GuaPWtke",
  "key20": "5ft6mqGYWd4C3HJTdET6rsnD86jorEHCW8R1FvNmyKMCppqpzxJvZv571njQgdnZ3v4xLscEWSQxUtdN3QnnWbSQ",
  "key21": "eRscVJRHqqzS8TwsySExueeyYmStcj73JM5DGaqD1Pa531bCM3K2YHYUmg8SLKbbYtQgPHzD2uRLMuTDV1fGvyy",
  "key22": "2846Xiu4VY3BkuESroi69or6bXCsEVBkfHGgnn5RrwapNUZMPh3zd13y1kd6nRuzkeG1quAXA9S7R9WZG4LX6MLm",
  "key23": "4D2LGRAasQmcHp2chYFuu4DrQhyJDBfWboHNL3nvpxPk15U5LtGZN3pzXykXKqhXjGfLeX4ekUBc8hSSKCHf3f6P",
  "key24": "56F7iouYJtZ1fEwwGq8Z4tErBd8u653wEXvsnQd1KawVLgVXYDHhHW9nvPV4RmUWhaLa6W2j1eKhthj8WPrGRDUS",
  "key25": "Xugo6A6J7Z67DEj5EwfQ7ZtJ9ofzm677nPN327ia2Zpo2eBY3J9KJSV7dD7M66yXNgxrCNh3tEf7zSgfdCR35zC",
  "key26": "3FTzTsGfdbi8e4ATzLCBVHWwXRED1CpTBeiYj2YMoH7xQ1JFfNuho9TPJho4n6N1kYCBQjBowD8vUKL35qy4YWBZ",
  "key27": "5Cn4rJtFMPTx89ajhkTi1n3bBDF4mHepdXXExWCEwtB1DbmxgDQkQSbNeP8watkKKjYGhMp6gSrrUB9RzvhKV1mf",
  "key28": "5Y4eAosoqD3KgTFvrs7Ndr3MgpfzF2uwU6MEM9XPVSUBVqUKAdevFGMtHu3bk8yoaucXGEACTTncEuJmfSm9HpY8",
  "key29": "2igWwRsoR2MCtingFt1oPbf8wMQRbxbDxyEy3TFP3DBvVjgcaFys3CkQyd3k2eQJsN5Lne28yeBwWniwn5szo2K5",
  "key30": "2HGyYVxM8f7Roe3ivi99ptCfbo5tg9KQKNxPbZn7KR8PUewd6YBVsb54uqQng29zkRzB9Yw1NjmuZ8cB5xcqJDXj",
  "key31": "2vHQi124seYVqgzAjJo12TVVt5yCv5c6piZWcybyPxokXwJi6NKQrfuU66CbSwuNzG6wTq3A7iH4Xxd5j76qSMn7",
  "key32": "5TgAAiEu48W1DJGapBvtnw6vJqpDEoQr6uJfdXo5oGLRdDDaKpTpXrgVmMKgXU41QZUshf4apnK7bjLRtAGPTzdW",
  "key33": "5sSH1XxNK5oqgtM9pStkNHmT49T4S6HqAzgFcwpSaYTY3VnWu6ixEuzrCsfqnoQ6Q7sXeK4oKYTskfLmBhH3hhFW",
  "key34": "vFQDNGDHoSCC1qva7D4SRQ4Q8D6nWAWZVg1WoXbuLesZ7CvbjDbqyag5QrQdjHW7w77CevXezkQiEyZNBa7YWgd",
  "key35": "2GFmQKj84PrLEPHkAzCDQEizjjDcMSvwDrhfQvecJzqD4JX3Jx32jRGRNYhZ9edtfhUSwS5tHxbyujDtLEBjawJD",
  "key36": "3tBdjgEn8Xk7roPfbzJyFFES9M3d4Ef92fDkrYm2rdi6TWgDo9ZELHiQVBHWJmigbm8VgLj4aKXGxGPpibPq3WFf",
  "key37": "22xza8F2uLhuVuU96WNfijG56Fc28uGoLruc5kpVeLuVq7Uaaei5oQoXurag43hRD6M5V4cGsHeoSfMAKcQ2wMvy",
  "key38": "2aVkKUHHrW3taJzU5Yexnwa3fdepU8PdZ5jVtabyNT828YUc9QjVXWSzSmm7KLkHrcgFVnkbjaYRTRJywg9xtec2",
  "key39": "2MwNwWSdHBw9zuh2ebgGKZXhBBsBssvnAdu5ErofvtzqrL9pFSrKkPN4K8t1dTXT7JdpUrcTY4q2kRayqGiuTGq5",
  "key40": "4LpJ8s4QJ8b83M5LebbKiriSqieaXaoxXXkJhX3abXQdrpS2nG44KpyB35631ffyfktz7MbaP2MBg2GxNWW4aNQg",
  "key41": "3GEdYhewxsXT7NCKFh6hhhP5QrNCCJkhaaHdoiHYTgPzxk9dSo7tRfQdooeK53ZvZGWz61ems13z9xdM1ge2fjFN",
  "key42": "2zu7b7v6prM2ET76wmuwBzBDEWsLHhZBYFHTcgQHTNzhpcw5QxoL2zQd4QYvYrAnuurvyy3PS9kRT4h3zjeyz8bE",
  "key43": "67qRSyJHPC6771QT5vNN9pLS8eGux9eETC7qMUVvsFasus9W8XGSrcbUkX7w895pNxJ2FvBXm3PhWMsSzxGQMR3F",
  "key44": "4Dsm6Vfvm8nXEC5uxhqbh8tvfhNYKdK6xMD3keJCwx4us1LwSqD12f8TXFQEX1mDC28HoDcnYWEq3KJRPMuHdCnc",
  "key45": "2G7nJ1e6upD87v22NEbZkSouWMU1tsHgw5Sex6SxX8nTZtSvYURKCXDSszmTuB56yADy3SAiUQi1ox71RJ5i1rFN"
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
