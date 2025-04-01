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
    "57fHvhJRyc5mLuknHwFWcdgUBF6tPW7DWLSNXuG8xKi9BNWv3GTSmyTMBJ9kNEsZdQHFvinh91AYwnoeaUidiT5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jsrzmyToHzRuzLZHNejuSQXyWuGjmgFyvMwRDsvoTN4aSNNva6A7Z6ULsuEPBsFFG2cqJJnmNtN9XZXWPwE5Jcv",
  "key1": "29yxDkE3dUuvasQM7RHqoDgwcxwSqofAbtFNJ2UttnJ7S4CceruQ7dKZZ3rnUSRfVXnHZTsWurPhATDfy4PggLfg",
  "key2": "3sKcRYjviWnC613Br8ry9WSYQ24EvPSCR1FWCeoEhz5222nhffMxFS2pV3uwSETAMY6y4B1txvMsKHtPQqJ2SSpu",
  "key3": "54qnnyH2fkr76ttctyAntbp6y6PpJ5K5sv3RCv7ytUe4ZqsnWvHL7h8iX3kdczizemEVXfJpiFuDdtvdBLitfqkM",
  "key4": "447YuLBK45Lse3a1UdR5wewRaXDGmPjYWdD5rgnNYFGcVCb3QMXTaRiABaZiPScti5TWAj7SmUHZzmFU8ozSBRZR",
  "key5": "5gFUwWqAUQ6FXjrb6jmdsBsuX2cKUibg5zXCZBCbjAe5YsKaNXAHxTkUMmztqiutE362RqdYd89TkFaWCokRVfZv",
  "key6": "4cM32gtqeyHz8CzeTzpUieGpUqzYQoLUJA2vn4CVTvJHFG7Yg1536T3ExHvy9zef2rYZKqmh8JBk3bgqsSdma3tJ",
  "key7": "2qrD6mVa73FA8CdkY9oZfJH79yxkmTTEbQhn4GdW5EcskyLWfh5DxUeCeHQXYsxTCnaz91x7beZ6s3rAgjxSQJUQ",
  "key8": "37n489nvdcCKCJKkyd7Btm5Uk6TeBBhWRqFbKUtTiPpxa5TVb6rtG78V7iKkL4vEdfFH8YjivCJ8GA6UvZRzPrYt",
  "key9": "5TygTgnw1KwKGE4xsTaMZMFdJ7KZZYkWGRMv1Hfz3wCyqWsA4bX89fMq7kSYz3dCuiv9BajktSyFxZWhp5LxWN7p",
  "key10": "36KkUpTPBepVy4D2ciCc9WiV8FuB2D9U9zuRf7Ad1kPncZR2GPYz9dW2qACu5RmxgdYkThjQjQebPqagBygzeJuc",
  "key11": "5PYvDBfZU7Q7jWzZfK18Bxwh3B1VPvGkJB8brdnypNzgmioPUbdhWeRAYQu2JbJaRLpp3CPyT2VL96oBzhYP9GCY",
  "key12": "5wgJBrqjJNhnAm1WjZAgNNuEZHEnqS6N1sJcRSgZPpCewjxUnBW2GMMgRUpBF3ChwuT2vHFTCUztoRHfGUYSQxtv",
  "key13": "2Zp2HsHVdrjdjaHQndwxFEULTgNPfHcM3gtmMigYtsuhUygsA4ANmZD63cX7cjqfHm8MnpLWUWFFkCrCXmVQEcTu",
  "key14": "65yJVY3LXqNXNZzeR3mHEmG6QMtHgwAL6t4XpsTW6Ym2BbSg3yL4jn23a6RihscmeXabWffiv56WrhmWfDMfWV4S",
  "key15": "4yZJiSFTrK5KLhDzGm3Snm8jxfM8DbdqRCCjs4dpFLR5TXVW94desgR1mo44emr8FbK2MkwfNvfKCMgh9AHdXA2m",
  "key16": "53CgcRcL6Q4XjboTXhsRb8tDuRubrx14vStS7ZuAZfq4ADbJv8FPxyR7CqjYPqfAZtF53SHtTHiC736Myar2nTHw",
  "key17": "4spx8uG4qwCvkbunaJZHhac8supZEfgPMdRtXnkfbz8jyv4hWCqscwMSs8cSsfc2aQiuhNdT5NwErP7Mt3j3g7jt",
  "key18": "2sxnvMZu43M2w9mBsJ5XrsAaY6rT8a26whzndZZHxV7Nd7p7Y1Z6XqJ56txD8eWaGuJJvYMfKWUnLwwWXjtUEDsU",
  "key19": "62jzTFcXHrNuhvLddXy3bBBCEVsH9r6RWxJ76DNG6PamFiki66uMWYihW3Lefdgct5cPkYitTSYt2YrBxNo1VwA5",
  "key20": "5UJMMJ6ztX6N4APmYgRrDFUcE5oNKrsKLbqqjcxz5weJXuBCvNhYkTanVRMJF7K6degtC9Wr6eVLB6q5GRcp5Nte",
  "key21": "4uGezaax47HawcQMALucpyosNCT7WDzrnfbLg8vPXDjMqRKeNSwL5urpgLy7TxCTa38mphQREFj81FxhKLUptnaT",
  "key22": "4PCuco2zJ9kp6A58KZGswVqnLyU7NA26JmXtcnpqnjUveByaj424L1EZMkNcqedfSnaqzazsN617GHzrXpf9cLEP",
  "key23": "r4JGDwVSKWhbBG9BUDCryGgNtVnS9Syzr6oENbYWNeMBGWnRzSzeac3vRviqKbGtY8YHhM5NVLhReu1TvoLzef2",
  "key24": "usKGLnpRFPLnNJYLusqRG7iQxJzCSz6sxKYsriinZBHkjAzVpv5KJcB29ULKkWUXTVbrWWq4FWHbFJ6Zz14Qd77",
  "key25": "4uPxUaomgWVaofAmszehCWXNRrW6YbNFyHtYf6uM2Dhc3RtSJD4mgTSTSvJcoBQ3nyHCh2NFU3rnboAuQMxU73VN",
  "key26": "rJ9YEbf2gEF4YQZqxaG7pjVAUAo4z2e64f3kAz4AZvA7d6UPXhsHThKoZr5RUwBGx1oNW6maLmMm4DnbSScKdaA",
  "key27": "2FbVUgkqqSAei8VymC5Mjhm3W7kqkCqU4oUhMQve9TehVs1sQp82tG72Zg3K1T6PVDdA2NHaEpeyPs5zM9j1R87t",
  "key28": "2abkUxfRDGEqWTM5qfuSBYZ92cQXGahuTdTp5HfpJjRcLeoqpAF51idyAVaRSKzxfRLGzsykiwRoFttQDWfjnpQx",
  "key29": "4hak1exHrR7ZWSdYdB8ZMDwtRxWqsYYYeM3AmBmippzQ1j3AUitXZBWDAuhH9FiRXLet81DBcf1dZBKkMQ9KjAMe",
  "key30": "NmoSPH6ccXX6Sfv5GH3qPh3KzQ4Kfe4u6Vdo9ihnH7jZa9gh9VTBNrqDJnwDwYRaDs2DjyEJQSeCGhHVuFoSBPC",
  "key31": "2MZNLnkXpbnRQLs2CNaWQR6zT43Y8LaLeD5TWpy5Pqrjxq72cpbrUGHDyier3V2yU3KqptDG7ThphR1UWBtreJq8",
  "key32": "34ZBdaosvew1ThTewYt79rsAd1nsADNqSrkBiMF6VdzTFrxXE8ATcd78kJKsCTYTvyBSxi6fJWjHbi2Q96ATG9XY",
  "key33": "44eTPYWKazTfLVigBFrAmMkpNQeBeMWQ76cgg5QQgUNsb7RavgXPpfebtMMoeRNeftC89ay1LRVhArhiK9JkbRMj",
  "key34": "N2KSmU7QMgTUJbuAtnoE6oYLSuiRoDfhJUnnvBHhTzcX2C9zM9zwyrhBGMLhsPL6gDSZMzx28XX7gQxQJe1RFtG",
  "key35": "2iETJeDCYtUPoMsKDUtGyhQJc91PdzUgVB1fwyB1gmv3R7yfM7sHxJGmShr2BBPVyFT9zZ6wMiW6opXGUNEzj4Kj",
  "key36": "2mnLnacwGuBYoHPpdzAdWsqo3yok6bG38HJ7ThL6GkEUxDLk2jHwy3EMSQx4e4p6n6uGRjoCJGsx4b4uXFJ6LupT",
  "key37": "46Sek8WjP48cCR36d2A5PdDZadmBzzzVoNSQiuUtNnmX1q358e7FZoQQyevRdnTDqKGYT5Nk7w8rZ5q2najinnQ4",
  "key38": "3GMZ2CYMiSF44ndYN1S7RLDdbHYAyy57dYt5F42svFQNJ2N6Sc6xaHU47h9zowhNyeTqKAMiR1T7KxbQUQ1UcaaL",
  "key39": "onXpe6KfnPsipAoNYw5PYz2oh2iXBSE5zaWh8FyU2F716a6ApwsVMPuzdeE64SdJ7vtP9cT3Xnzm8aMHt9mSLRd",
  "key40": "61BYwPUmH4Adr4Z1GpsJgryfEqm674Aa7QEh8DyRKphfrYJe61UvQJV8cg8LsXd6viZFkAC2P2wwN92EJ4LXmy9q"
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
