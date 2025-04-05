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
    "3tK3v5aUBdqTTdR9L2w6sfGu7MCmd2objfXR5jHMkWvM69k84pUXePFttsYxcMxEa6BBfDYYbZYx744Kf66SjJHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCXwrmwJwHzHcTY1DhEBwNzxSRkVwu2aJHW2Lo8GNa9XDqeaanRxEB8RFsWqQ43AVkTx5GKi5RQksnHLmaBLzuz",
  "key1": "5uv45TAaZAqLYawNd74YkDQFDTp6uL4QHxE2bsNzYvwu993QgEPpqujQ8vLDrhJD2ZCtZQUznP9Jq1d7FbF4Ukvo",
  "key2": "3XXBgW5jqZBdn23eByF3HfQrFhi7CbnPvanhusNhKeNSuz6U5yzBSEeixoiaAiRpuBBSePuvanzMDmmq5fHF8UfN",
  "key3": "4QHB8oDXVAQNEb52ru28hAkyXQhT8XcjqZyvY9vDT88EGLq67ycQnUUBVaTmD85tKh1SN87R35HtHG5oAdeDQnuj",
  "key4": "2xSLd14mdcdFrBRuwe22zFq1cSiqfUAiZNX8JwZbNdBpjmZrWJyYiAaXU8GbJHUvjDPp7BYJLm4xikJ4HoxVZYCK",
  "key5": "5kMJBzgVktzqtXywCmgT3PK5WVUEmM9TQmyxn2CoJ2zozEsaozEwfE3WJigvYjqDZxefodHaFDmMNDRsf1nzzF33",
  "key6": "ew8od1bBntHxnmAQDk8eMmUAuwgPRgKzy66NftbqqmwfyzijSyARD2jmpCb8BZbFeNTvHqB7cs9MHT86s8B4nuG",
  "key7": "41Zn7efsNpv8PF9UNGsx48eF3h4yBhKbVMYvGtSSauiYijjWViiPBJKEiCbiPuJQMFQFFZvnWQZBDiJGrajMQfS3",
  "key8": "5vBbvTDBr22JnuFVD2nZHRmmUsxZarr1GYmgJDVHgY5NGTdkuHaHTKgmxfFGse2uAkkxS8ZMu8e3dLubtXVm9ucd",
  "key9": "5qaavNWGvzEruX9QBZMVNkVXU6VkPFmxGxaf28c77gZiHuzkj3u9fo1BwJCySFsrgmwHRiH3uS5ZMzFNtAmUqEdN",
  "key10": "5ZN2exQ67cxV77tVgt8daUAC6KiC8TXfrUgnrpZW27MdkYw1FbhmfiVRHhyCDWEVUZqLSNYULJZhMmijkSo121rK",
  "key11": "usk7wpdxRZ8on3ncW89VgYMRCa3GD5jnAt2HEgZU94FEALtsAEYw15jjurEMhHFJj8cuMV9c3p8DKxYuHdiiSpY",
  "key12": "5LtaCEQLShxgY421aPqz3KG7cYVJaUdvk2Jo8QVVvPGA6qKfzzTQjVTCGrvMLUNEjJxx9i8EmhETpEoyBdAG9i5R",
  "key13": "46VWJi7i9wXYqyx7jwyEfCvyLpkRi7zTAHDTHd1PLtXu5dtbZF1crwVybAqY1aGWztiUjCpHHeCcFxSC6pvBxbZ3",
  "key14": "5yUzRKvaJqQTf1C1SRX98HPfviPvVnKJx1KCM778ob2K8C7M2tA7YPAX5uwpuToFWAytoCcpNNp3mVE7w44ADHPK",
  "key15": "4sA6EfCZuk4PWeMSmp4sKWsvfYP2Hk5YWYb4aR4awA8MomXo2cNiEzmAB6KVRicxX3PucgYaVzVByGDVtzevfNSu",
  "key16": "5ndMaV4kWyTCBYvWPAsxDwmgCPebygN6KYKCcWtzgzMKjxoVYKiwKDT8jwLsdTebAvpvKQMtX8V3FmoLQ1k3MUoh",
  "key17": "3BALdNb4gv7PS7oBvePRQY4YsWY5CmDqmGpLyYijF8pAkNHdwGZZyAk2yzDEvHWTD83HY4CvRAneAFt3pqFpwXHN",
  "key18": "2Kba1CqBfoSwJdArDX13GTwreKthpmhAv6NgF71gcxHaHZzgKWMyrT6KSi6Vreyx7szNKjaRyXQVAnG2HvGn6rzH",
  "key19": "5yzBNdYzeCwo8tvQ25Rt8HgSxo17BApF3LButJztSMjZpN8kwWkH99dH8yGNdDgqdwc32aDdRh289aVKpoYmSuAH",
  "key20": "oinQKaCf7vHKTYxw3ymXQQ5frECTr83aLdJQxTphGeJzVSJDd5yf4S1CJjunL6a6pincmTG9iu2zrKCAuV7D9et",
  "key21": "88PM5YAivxJixZq7w7ZpcaJmqPFgUpmUpkkVobEwPcgsGTENRnKgxZCTyNr9rqp5XGAs4D4GXskqwhQKgNpNeJA",
  "key22": "4QV1R5oQnEXtAmxskwweKtZS3KkG7YepUq3gQH96frDA3JYSdvpnm9BZSbUsdjR7nJQnBY3rvSfHdu2Ps5Ec1esX",
  "key23": "5cQyiVbrWeSVG16ML96Tm3pfa7pZR4AL8vof5JAWVcoEUAqZePu66P1DSXDBrxuAgjvxsvkv2uwh54pE3jKofU9x",
  "key24": "E6WjnL6EQWNGFpjrNvXynRG6tQWwQLWLygKf5aoYJPQi3N4L9299EqdrGhYQfHMSjTWJnh5ZQNQSzZXhKw7TSDv",
  "key25": "58kBKVsRPH2dRCg5x4uuX1v33CqJczTPeXfhe2ErGghd2daUgz8AwXeALQhQB4T6zNsHGFvqm1yVz6bFGqng7azJ",
  "key26": "3fZ2gwyhYjDVLrExsbnsK5aabNiJnHwbWaHMtQwYuD4XCziiQqoYYaCon7R96fDmxGPRxo5mUfGtnow1dnELywk1",
  "key27": "2p6dhuhmSXpEpR3qhCBKuQb4QcVBzHfU1wyNguC6gea3ssyTSp9atcu6mZ9TX6Y5n1RbJoaJwF1anFnzzxQTEvbR",
  "key28": "2DXzpgyjpaWbaSA2DCVbQb3YKwBtjuo3XYWc1zEQQpMm5VcjyXi5X2HsK66Tz7NYamBkCgGfkVmN4csrZcAd1LDd",
  "key29": "5CuqVh2HK3xbBAZMmyFodseKUmoZKCUDsf1AL3TaiN7LybCuHwhAqq6y6M27Yxk3e1m24wcfSsRer7esaJestELZ",
  "key30": "47UiqdWqw5CsHjMqyZTS3sakFbhUkD9MvVSdWTDhB9jd7WZSATY7tHMUPzi8f1u7DTTbNbFcauKyKm3fRin9kQ7v",
  "key31": "3ijojLrNukip1M2QWoDZNhYSyiRtexJsGg3Gvwx5r179MYofQF76HohhjdqPe44gAywWfmZvJWokRtESV9FsbTGc",
  "key32": "3fxyPU7b9UevAFrFFFCqaAiw9UTagky8UJ2aoo5jD98MK5Wr89nqg26mTpwUfmQoAu53tZ53T4A7MiMnXgm2q5Tu",
  "key33": "2nW23KgCPoyHmfjwZSEagNEM6RuN8JsiQEgXs3GBDuZ8uHbxVeAQCyTKrK1Tr7EtP4DC5YShysPX5GUcd54aMVyv",
  "key34": "5Ze1WqaY88p4purbXoDvrsw4TAerTnfX2WedJ56yakjYgvPjRkgjyqH9k4SzAqoywxTb6QYwat9DrM3tGmrwULiK",
  "key35": "yKtTK2ibyLRJv9K1Vikx55mSySpum6y2nhvqQC5jz7kcZisQWwCBnDrtV34DqLssboBs5mBsqFv7MmprNDbQn1i",
  "key36": "3sx2t5aHkeBeytGWAhABnAcWW6eN4jdsih4JYxUW9Y8NG2VsDJmYbjVrdt4jdXQkxGfUsKbJaN3NweLeeQLsYuc9",
  "key37": "TLiJ1VRy8G1u9SdEdQxLpVCKrVkQSrnYeNkY2RWwbHBqWsdcnYMQVtoGonEXqJDPYk4QQjfabaCABr8XwNE9QcB",
  "key38": "3EoNeo7K7NNViJEs7fBNrHNtAAVLr5uHcSesmwx6DK3TiUNQuVqL1Zn5WcnMZwfibqVev6uGDsodrMwF5JhdgmyR",
  "key39": "43umBuHVf1CgdkGrdCRXhaAxBVx2xEhUoxzoQmJC9C7ipUK8ryj31KYzfUyV3RMKFDb6q6nXFVELvPPnSfEDMsPC",
  "key40": "5zdncNFYoxjTViKzL9fHNb87aYt3i4fqgr6J9TB5kTkjuT4RbxP4Vunt58ZQMPNBws4PKLRi2BuYGicKZCVXq42P",
  "key41": "4LgHkeT9MP99BcHTrjeUKohz43shTu3N8ArgkRpNyVVewpL1pcS3HWzUvB6xVB3pDLAp84LqhjN8e5RixgDh8C2M",
  "key42": "4NvaFRRQyUyAZrDtBjGkGa9DEfcwG7SGPcDsKPraQPJRuBfm4aah5qFNNHZbvvcu1YeYA1btsdSSeLsRpcF6QASV",
  "key43": "35YFYR95wRiQEYpgdSA1FFfghbPAT9ZFFovaSBJwBkcvvNnTRgHLwGnRp3mZPcXFmAxH6jZ4MQYV5Zea55zZ9HLa"
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
