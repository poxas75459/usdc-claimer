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
    "4gtwZyJ9WG5yEnbfcJyKXvbMdUdsMVuRd6TG8kTJ7EvjhN69tVJBevp926UTyVuUCE989ud93QCqd7eDrC5Espzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4zGmhwu8rnSdqdhRzGEcioqJ8nchofo4mNL8wYLsCDLhXoHEJmPWjiLts4Mz35tCyb1swU7jvAaVa9DcHsyJ2y",
  "key1": "4ZUoS4pufjMkxTh8WrX9eWHePU3xtw78xoRaoKoeznQvoNJKZaoynqUMBHfZRmbMWvxKv1hmDK5tRhUd3ZuQe22h",
  "key2": "5AX6cyrffvwLAzAVmtUquHaw8mqc2n53dtUgmVyRKeDYTJm9g6T6nL1d5e4YFMN4yaWT5o7XSGzN6EJAz7arPXKf",
  "key3": "HKzRMaSanhFxGQckRe6jgpvKH6YCpAEMs6APwzWznPWMc8iMKXTzcKNr4oXQdMkQH7FEkGxWxnvpKGmvKwHj9ub",
  "key4": "5vSkMeYFXQvKJA5hFs1wwRoDKeD6TozuVKYzz9w5mrjvatz7KwFhwoMQdaXAjuPFMon7u4XNpkxsjQtPnW64LNSw",
  "key5": "59NJMfRiQRZ8i56DnzEgaiCVYHHM9NjstpNG8Udx7DT7kph5NMq9avzLH5FVk5LbYvBqmqBpzignBsKHLAovdBUL",
  "key6": "4w4vdf94PjtuRH7yPfJ8Q8niQBRV8eXPJparhnhguN4HYdeXZeGW4TQpASb8bmAy3TfumSZWCcnqVTuRNmB316q8",
  "key7": "3S53LtVoYhbn9swfVMFddfUxFk4LUEVwqVBEwnYFbxUSKfH1mvvyPxaHshBgbf5yJMv1DG4S6sqb91EvhBkeoM73",
  "key8": "3RkLcekNGgm6DN1pqCaEec8k2NViDY4JnAuZNj9Uiiaud2Ds1FnGCGXmRsRZosjAYBCsfeRwVLyUQxundnLji2Qk",
  "key9": "2HBTkREDCKWPDU9sUi1ofs2J3dvkRgLJy76ZidNFoNPgrnTx9xWbTAQotajbGiGVx6nHPWDWs3LTr5ePCMakSR1c",
  "key10": "2VELkxhAQasrBySMvfVrXweK5tfVj3joJEKjiKMtcaRLWofxFQqqmGZBRwJJxVHefaSqtGSyKeBL5TbrwZ2rQdi4",
  "key11": "3SJSbfq6h8yVSdwaSNx8CP6326Hdo59d26FiFhKBwMi9B7zxkfvUvp5MrdR8qy6ncy89zCUUDND5ozw2NKj6iAr9",
  "key12": "2Cha6K5cQJr9kUTMxxbHhGUrwTBgL1MdskapUfvvfM7VSs5CjygVdsMtAaGHMYDRvCmHNDDRKfpbw8BAky9uRq4q",
  "key13": "LpJ6V3aEUwdxMU5hnpiXmSZHX8YaRjCPdpJ9WK19utVRAWdeeW6fc4J8rShHE8q8dTZQyNNTSf7K3z9AFesTnSR",
  "key14": "81rbt1m2XEsbfCAZ2pWFrbtM8FTF4HzuNe9EzGpLh7jrMgnQtNUDyZaNF6bDVtH1eC71oy3VisLMCjo5LYUu3Yk",
  "key15": "yQGvHMALVq1naCJd4YTtbpfSmCZ1MEbpKoc3RgzEXZacKjbP2n23sbsXgPHW6DUFM6btam22YZtXy7nxb7iAhm9",
  "key16": "2yHKartyQnqV3NPkJjSRT11H7tqtys7oxqU5gzhrwQpmWMjhe4dMRK3BFaLbsZHSzeM88ngmqca17sMY9z1zX6Pj",
  "key17": "64A2tMQmvF9BiUQRh3txeQBGfLLX9WRAodhUqcfEyWUS7J9fdH5eUYEhbFEpQ6daU2BBaNwRCdDwjRsGxW7EdjDu",
  "key18": "bqrwqrGYj6oYjNiwc5ksMcCJYNWKAenbpvEzpC3vZyTSi2Um13zEeUkscgC8ubsJkC7e5PbQroehPwLqNQ9yvzt",
  "key19": "2F5M9ZR2JXYTiKBbpgmVtaUtQKs1V2KNtJD1UYmn4CMNhS6vDww3e3boe9qubFx9uAgDbsjUXPz97F9ESPgHmSRF",
  "key20": "3RJ7eH6Be1czcrBpouemEVMzcUpyag6VMGjTC48a71pXKtWz9cn1kFoYdF51bzhuqmCRqMHZPYjcyKjnSdDrTnwX",
  "key21": "aRYAWHnh3MEHDBaJfGME2t2Von3Rcmtcd3rpvGgs1XKWAYswzrSrJ4A5JfYZBk9a25Fm3Qo2rATawA7rNYXkh8n",
  "key22": "4nwZQeZwfkhBQcyHWu35HQSgFRKEGkpSskdxKDPmzPZh7akYS8K6v7ZjhMVB7onV1mtjJs5AvwBVYArmw7ABEuGZ",
  "key23": "5xooPc6ECbgHbQX1mR1cfjAAPiExR6hW5NjdkRbvyKNudXVSw1zfjg3FiCfKTnwmHQnjEyBoiK9sEfVesVeCdGQ1",
  "key24": "2GWimzaWXQHFxCvRNjPdtHG4CwRo3vkeT4nYTFuEWVgRpWjb63cN66KyGEQ5e45YQqZEKAjdPZPY5gHQZ6vvZC7W",
  "key25": "3ozvcvqAtFm6HkUkSHTPUqtxuKqftomf3Vt4p7qGJBhgwztZ4NBEggVTbVyzEw6XTX5Hu7kd3aH4eULoGtXUCD3c",
  "key26": "Bhj29tuQvWFwN3nQkB6HKs9UwZmEoKxb11NbvxT69cTvfBUrqiNwPwzurtKYPYUmuWr8C74KxcewmJ9KKAQcAeC",
  "key27": "2GzPcJjd79YKWXkbLt3S6J5ZJzuj6LBpH82R1wLb8KqRaHcur244wxBLmwEoemzGTK5CKPHBx3jr2ZtjtdDN8erb",
  "key28": "4Bo2zmPd95fPU9namauW9JUttF7R47FKrLKchyog8xhiEUyXkJxQAYfXx2HV9E1AjaFyA5hx8x1tyjpY4S5GHp9h",
  "key29": "51WT7r8vBVU7QZYkAQP71AbAhqnGp3tZ7WGYLvY5ZBWVS3NV6MeaKVYLUCvUfGc5jL7nnMp9suZayBbUWLDg6fgA",
  "key30": "2C4AofALpvZ3LU6GFuneknDYQ7ywQbHFazC2BDBvU9FD6v1QjvurXZvPNx67sK3dXmKN9YhAL1GSmCpemaLkg11S"
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
