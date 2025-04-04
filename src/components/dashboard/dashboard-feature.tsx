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
    "2XHkeiEV3ckSoSjS859MAhgJDkCbZChWFMNWymkTJMQiUKKwZUu2UrHyFXuZZFejz9vjyd6gd2uikuC8W438wibZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxEKTZLwuS8jBBAtd8HdrTTztgBdekJvM5hWpMKkdfpL5kXsC2PzCctYzYHJFXtyHoworfm3aKEGBYCRhRa3wiG",
  "key1": "3h6GXC2WRgsMEfCDXpHkL37vWiSTDkGjWKspbShi5XUuWU7ytHaZGvXaKTnMB7z28uuKCfMQGGSQ6s5BwutESLf9",
  "key2": "4C4G3HTQRqq1HKNe5ZQs3NRfaANV6zrQVegQS7d3sK3pxEXq3np5zqvsc6vdCURf1gfExAsFePMaBWYRyLEn4ttB",
  "key3": "3FPFJ53jFWtvKDZVLdmcaKtUGsi4KFiGXcvfii3BZ3Ymfjp1PM138Q6nGiZ34QEycdG7x9FtMVTtvhmYSGbPaswX",
  "key4": "N2oSRYycxBkD2oBijCVXhyqyRZimZPvinF68uS5XZsBcDoQe38JbJSPZMowNfyDdegzeYKtoWvjh36CjGQ59B7E",
  "key5": "2pdJsn9t2J6yjdYNxo9AMe67umHqXojZNYDpoRxLqi8Ps9VKY9RU7GHcHMg5TGMqPaGkCSpuVRTX4TsZRQviKc2B",
  "key6": "2qRiMN2wC3p7TXfjFVPHYo7dnLkNsCvXrRGQjBN6EwXU24XNKyGZZ2J6fG64jweaMLHVcMDbnN7RXgChe4eBqUWx",
  "key7": "4Rzeb9Hcc4CUSe9LAKg9YoMQsMk9Di8sRP2jA5gzprLB4wXFRHjHyuxQbwc4kcbvfzqcL6DDQaicrrFeFbedcK65",
  "key8": "4R1GxuWs3fwo1mvt15H5B88MppDzs4bt7n9yByJFF7btRfCXcDCyQRHB11n3X7dgjatKakEjBwnQeMHcqiE6qqMe",
  "key9": "3MAHy8VJRXzWG7sHVSudXPztuiH7CmNTykzpVUCKFzfvpVNAMhtNBf2t7XvG9DqfzHsMBVz6xVYrmUtdp3dRpiFM",
  "key10": "3sWN4yrZKtJyB5iLwhzDuwBHxWjVU8EFWn7FPASS7mDDQ9RPuXy7wTCEZ1ReXVn4WbQJ3xKpPbNrrins61xB6A69",
  "key11": "jWsGpHy23Ss4CGK6X5qhDSkK7oMGUX5gXWhXsyPpqFiBCBZTK1HwyKKZwHWV7jdSEeghhe9KC81Det61c8aq3GJ",
  "key12": "4EFTEVeryZYcwke8u2DGuyWTLvusictb1JG33xcF4ChBfpKftzSm8NJVbc1oT3TF3wdhjutvE8rxVoNTjvRyWqo5",
  "key13": "42MPiHbre2V9aM27Udp9zrco933UFRCX7RMaTiAMGWYHo7utzWC5BAbWaJGFY2XyCyybbA8ifVSKqkj9TKguq8UW",
  "key14": "4dy3LTjMB63KPRLBXfN4hnCgisuKZ5xK5CqhM9tb9vPQtDk1x37CGThYxVG6t2nTzsNUrBuBgDdqDmmRmNgP6qX6",
  "key15": "24tY5mAg1kQgQdR4bTj6WpXRcLZQ2wHH7AtMRd1iCUBFz3wTJHaHUQmUaWenQ7L3T2hMVadeXwpq63ckBwSuspz1",
  "key16": "3BrV52B7Rc4yC81RCSKaPPZhUSDyiphbqtXfXcwWoDLFZL92qJzmewiyQvG3nbdCATGt85rLup4QJzHozzHMJWkf",
  "key17": "4L5G32CMXDMfr4nh4pZZxM4eUB7qAYXzTzDLPhqw1Cu7P48ybdioDyRAUMRfjNeGhBTdQ1myGfuYYMWt9uX2mZJM",
  "key18": "4ttnmDUdnLoZkVEsGGaspekyH4AGBWfak5LSGQTzddHiKbjdTWbUp5J8fAwBi8e1hU5MTUsZQRfGp1C9CHTnDUsg",
  "key19": "2LrNjZrw99WheSqMtmwcygsEYLNYj18gLnGhQ7Z9Gj7HA1tfhjj4XcXUEh9CeoGMXV1ZSQWjBYRLuTD1MPTeS6jM",
  "key20": "nDwE52HiCsM4PumdXpjbUCjHdzujngU1jzJDcKKam21QJWD3ksC5RVcX329EsWy93iaeAZYB4uEAFdaooovGAtS",
  "key21": "5ApqoF4sqgbgGeK3zp1afyFU9srVw8agvqNBzLUykFWJkdjgHgCVksbx5DAPXcMpqiqbgvp94Bw7B43wuk3nrMAm",
  "key22": "4hZvgMaWjDbwPH8BUinhgE9JmiMezobFoNvNanRyestTiHnfb4JkEimQHELjTc6qpgMERhrvq6yaUgmqkizWHaiu",
  "key23": "2awf7pNVmhKseKLzoyFUYYuansPHxzJG22Q1LtG2AKqD3CPP8vWeE5GVVjwoEEDLnqENTPVXkJgyachNetbCnwva",
  "key24": "3urhMMztNT8PKyMQ6xVmSAmCdpC524FQJ1jkcLbzujX4yZbDwMg5q2uxsv8soehG63XKtb4bD3nb5k9NFbBtvpPi",
  "key25": "49KrWQm78LSr8GRnCiva4CFpAfuzENmZU2XzXVXi83C1m2Lz16ogRsuUM2XJgRwPZFPuB6wkZ8nSSNmEGgJuLXNL",
  "key26": "3oB7Z5PwTi7doLdTqUTsm3sfUEF4EwJ95JqNPgXtuUnmvFRxgx7zw345RyeEwjPSfef2DtbWTgY8G7g7xDEMjed5",
  "key27": "5NJXzvXorsPQT6vvbRB5xfyrapkUqaXbQ8nucxHqQxrsrtYoC2hHfUtsKvkFok7aENkVUSrMzmZcn9yEAkUpR2hy",
  "key28": "2NM4iYv9eezZUVSZWandGy8eG8iZscxTcehnW3AHwamVCgSNUff2PTFUDuZqCEZxWaZgJBTyocY6DvDC4W7PoK5e",
  "key29": "2JeKBxchJBArc2P1dsK7okLdv3koUrqLgEo24QCUFdciVLhVzxVPHssd56Yk6hZifN1n1B7jCNeBGC585WirqBhA",
  "key30": "2noeSGcUQuvDW4m8yXzDsVzn4KLWZyQ6ghuV9fEcp9GQGx7sVnXCExrDvAm8ugPoEqi96FLBaZpAtVpPdZBkqJMZ",
  "key31": "2F339L1zTAwMpFGVufehG9BqrLL1Mdr9Ndhb71dSgZBygktxdtz1NWZJcnbxqfRADgW3V2RdNVbAVNG6Qkh7a9CU",
  "key32": "5QBQPEirDsAjU3UAnMAPKysqBawqNHdjiyvDxz4MvfUpxAkGRpjh5DQXUNubFMt7nHArMQjCP7m5PCL1va6b4k8P",
  "key33": "5E8DvqVa7UKNt1BtPrdBZE7cLcxgQiurk4F9Z3FzL2dHnriXps1uof18Pgwo4HujTfaSYuN5URCu1n1TwcBJuh5V",
  "key34": "2j9E3ypkqDxqXmozrkCnif5fKUqVUL2uMQtD1KkfkxpoSET3knUabZ52s3TVfZv7XTTyTWEaAncqy1b36ACQyt54",
  "key35": "5cXdCyJdH2oxoNwvVPTysb7YmTm9tMfrV2eyF6xwxhrNoWzDyPacNqR5Bhbn2UNwTjSfhxWs7Z6pUA1ir2TRDCNS",
  "key36": "4YzFZWRbGyME6QcfRzrHd9C8EGzkgqErW5cnM842hqjWtfq6k6RWezAvYeBAieoWHKZpBuAsrqAtsU1HVeKwEvne",
  "key37": "5xer47RLPz1VqVAgHKUiu8jc8TLrzr7faQ8kyc3hjaJCdnt7EqchPHs9R9Hu7qKoJb1vZvvsa9MCNEmCeCii4rFg",
  "key38": "569q5h18JXUpHpDHheYrjM1JnuM5wb8bvcR2im8tWHfPrSkBgphPzmcADnkzoRPcaz1EQitTWbL64jmEwxboKwM2",
  "key39": "C7ZMs8QDNvLEtkPTWyQgbWreKMKbuBPmYCkqk2XBCKMW3jHa74NJpjJgAS5C1qoLwCBomu1nHXRAt9VNqrMjUeg",
  "key40": "4Ad6F6quSaSTFdUSfJNLbWVsbvpAgDpTcpdBXx9Pn1AJbM4xM54zNN42twsZY1Xk6KkGszch9xu9RttLkPJf3t4k",
  "key41": "4bWWakY26zuamuco2fA3UKf9e9wKDUYecx1vWk3qt45bGzqktKyYiAwh1Mnh24KqsseJbPYSuKdW58acnkuzYTzm",
  "key42": "3achCysMMs1A2jqKyzdLpqt1QHkPhTMJAzVU1oBmmovxeEkmijTC31adJ8DPNjQvaSmpE1aHpxDXyRydLq6uQ86J"
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
