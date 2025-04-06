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
    "4rYXfrWsSehb78mNM4tZq1ZjmaDhofgaCxZpD4ss8kfMumjH6YiuS8WdVpj5xRGqK2M5sts6gn7bdoYXGYGgDf7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDtUcLL3FeV6RemtrBcbfJSGQG8q3t5we96csU2SZS2gcBvA5MJjJ5wg6Z4iHvRPAygeKD2x2CKCerCPbk6WicV",
  "key1": "36bxfd3N18hA7bKLQJXZ49goBQ8jTAgHQvt3kcrVCAwsgEwCFPohdpjn7wm32ZuvbTjMQHaEMD6f1ZH55niNugEH",
  "key2": "3kbcXB4SeRskXM7j9Qao9QMB6LivEWdDf9PSGjr1WhVvr1WUJT16tqkd9BAThHN4aFa8UZruBFMx74iM1Aqi5Szt",
  "key3": "3zKUM5A32EqmwU4AWNF3UeGkcPfmNfPqrMRRpYbkFtLkb5LD7X9vLg8aLsxweu8JHNvVkAMoU8qBUnEsKmL3T6g4",
  "key4": "4nRWHjF8PxMT2crGPbr1yy7oNMesUwcMT4SbyuLnLCsq1T6Q5rh89di93gsSx6AYxwmgwjcr5XKz811VQ7Mjtn5V",
  "key5": "4jvfABKWc4y8a7VncLcgDpcbpFYV6FBH6GPdKkh9T4U46jcQvWdoZoq9oJQPpdkdnL792ZHyLjFAgmEGdWsZXGZ1",
  "key6": "s4GebPWGxvp3SKT9N34ezsffjZiorjotKTfSWcC6FgSUBMsbYGCbcxj4SRSLxzJ36mghNAJWw17NBmpGPmKm8UV",
  "key7": "5sWWoLbbwTpmoVCW6QjCemWEqUwsAApUpW4ZoM3jeGucm8YYeyYMwSfXpBwFQ4Lpqvq7jfD6dfcBUvRThYNVTEns",
  "key8": "5N5WKemxGJsgsSrmwQPPQ2Lm7ToUyKh2qL1N25zoCCAsQcB56A6D6c6C8XowSft16jsXwnq59mzWMK2uXWgYJjT7",
  "key9": "339T7RsgnFaViLizc3gvoPEhshEnXCykFYwGChZKiYpjGH2EUdZwDEkZnMwaWZEsByHAf7uEi8QK3mARxix9z11q",
  "key10": "4rbBVxTgpaWEsJwKCDYpypz5BYuVE4Xxf8RHY4xyF31yFNEukYVp7SHfg4v4ZnxmfAq6wNi7z7adiyRMzzZXLMo4",
  "key11": "3ji1CNrr8jy2JwbkZmAc215J3fLqDCer5qzZdct96pimWEMHVw6JoHTr2sWFiAUiKDcJGTgDoz2cqwSPnKJ8i1XR",
  "key12": "63Nv8dSzBiKUprwfQrQVANXAux76ahHNNmA4bKEtrff16NLf26SQxDm8m1ysV9xpiLe7ER2ByNNgXFtQjiVZQADB",
  "key13": "2cvqscCPZtKgHLJGER3dna5yJyYthMMGtf8SXrm5vqUd6aZrsBXWhy8qorDiLJQR3v3zqA5ia4wBzpBEveB7WepE",
  "key14": "AfKw1KGviyS4bQnExg5GvPPEeZPRxSNi3FKstNxt3foqdrYqEThpztN5u9j7tbXQmcH95SZHtwr6SzSbcHkMcXT",
  "key15": "8uKtuszbbq6kq32YKHPw5MBHbGvG67vJVzFvv4p9mjHzEWBCTUzdquBrxXN93ZWahwr1Nm3Fj6yaRcw4ABzTncd",
  "key16": "4tiGuh86uvn5rZUWDM97wUA375HcCsFZpQwabYXYwRvRtB8gvPKicucpTfUrcTz9Jojk3gaB781tPgxJHYgYD9Tx",
  "key17": "j6SCw9GqHcHxYrqSXMkPet3EYSmRpbmmaDEQs8pK7MPyxLASw5JGxoPqSBT9xEPJeBQDMyiGiktE1Pnrn1jvwBm",
  "key18": "3JLGDv9fVWtayBJeu2f9wW493DUbFX9zQcmFnZNv7T3N5dtPk6HHXSFwwR2UMujeWw1YbQbWfoRB9shBdm2peeJq",
  "key19": "5PR4mLNbxDMheCrSWnrjbJdxgNVkmRNQo122iXcdW2tDCyequMtha9hg8oLFNMqYs5noNsR4YTRCrg1maCJJZFPW",
  "key20": "xsMRKHEPKEESSsQi49FMF2rvfUmKvtosHDi4rwrRxKTWLdsDBg1URr2DjTZdJ6pWhrApxGW6UzmCaGfN2XcAzfe",
  "key21": "3XB8TJxrJVjSQQiqsocVwd3NNXf5XhtJQHQFtuWvmFks8NSWUmxoHbE6QcesJNY7vQ2PBXwrvVtz5PoyU5VxCjF1",
  "key22": "2aoPykoFBwkeX9fjHsuAX9X4Ji9y5wYp3gu6Vf2C5WrUXhM1HTtrNqpdVJoQe1hjvbHLtk4pfCH7KfqutgE2WVH8",
  "key23": "5rjLdmkEnvuydg5q2d4rEEUgf9D8ctkS5sV9tvDzR7YGKz5eh47cSiAXy8ndhn78pG6XWLtsPdJupxqFC7q59rKS",
  "key24": "2Amv6LesAdMFSG3cqmBk3THE2JDaGE3CEoP1kyfAt3qhetdPyLiGdwNrzNN8upnNEbSSjFVvgiUPd9wRzkzQ57eM",
  "key25": "2VyexxvVLgp59fPDGm3ZZfnV4Jray5i1cYoddq5fDkeghJ77jApQfvvJU9Po1fJVvygU9VK1JhVL5F2ccf8LhzNg",
  "key26": "2w4AXFVyjUAKbrapogtvfRYR2MQrw6SYkXDZHt1h716m3EVCMK7L2hH1YTTLjV5PqVMCw9eKzX3PK6rDAR5cSkWu",
  "key27": "XDrtLnSqZbvehMMZTGd5AeXZVrW3DXobDFwV7Z1yuDqNaWb7XsBy5Tw8QgeTZTZDekZLgDoL87dyV41qWhwoP7Z",
  "key28": "3vqdnDWR9J2yUE9dgkHpp7jWrRnKx2ihKwn8MmEqrPThsg4jN2PWnFq6juL93hKB4DsdLx5ArS1hYzFPDa3HF4rG",
  "key29": "36kHao3P7LtUW9d3d5UAudC9Y5yUpGdSDUUjRNP5sUYpqw9diMXWPrAiZPvjSBJL3q1QjuWbc7LfZeNh5yV2bcUW",
  "key30": "4xspPmZmq8vGTxCopatmR9LRmU5qsQhKjYQgYqGpXDuYmEmVJCP36N5uu7PF45E6vdimXjewxGgv1FgPuJ5daG4P",
  "key31": "5F3uB2Py6V6SGgSG7hbALQax7v3HWKqspnyQsryjDuyyjzpD254SeqiGrLwXbaQkUZz5bgktatu8TWPsKw8AESTa",
  "key32": "GTZGBp128Wp4rz2vNPPHngZ9buAUNjNKdySsrCDiLBSvSFtjdY7tWv99ufeB96iApVGoocZi3rXN2FAASdNyVYW",
  "key33": "3T8e5FhiXDvy6qm7Znu36fLQmeMWSBDiWjg4XmmQk3w7WaPE3qSkzcFHKdPSvpFAtLJxqTbSedhXwhrNDYKnVNkZ",
  "key34": "2RT5WHxZDFQnq1WWJgVTYNPCQGvAFNbVWN3LLKSiPrzsXJmGgiJ7guLa7SGe8Sf9KWPGCyzsv319z1uKyEKjYcHy",
  "key35": "2qnPaEHNzGWHDyx3L8zkdWrrovLCegBMDdBQHL3mLJmFfRjs6bHjaLJtF8N8rnktihiQW51ESubNwusQs1pXXQmG",
  "key36": "2kPRD8bCDQsYbkBz5K8VT2VL37pwxkS42LU5b9Fxrs6tWxsZewNfBERh3zNmExNSRiRFBvsbMxN3xFWJptfPWCXj",
  "key37": "34C6H49vsgXgFBy9G6E1YiXEHh636CMYeAQokESjQaqRzCkjkLgcLafMrfkVbLsHoNiuDtHCvnCheBAShfoM2Rbq",
  "key38": "31FXyNMJL9aumj2YGMb5xCeWH8PAdvwthkdqpY8rtJhPonJRjMKMD4ymZnkvwm9x6i8aVAyetMX8GrsEkCQ3VGJd",
  "key39": "vGtaReyBbcRRs8qqjubkTb5GxZNZ9Mj5sdwccEuHr75tPNZg4ZPhqQNmJ6QRm7A11ihF7oKuARtyRDLST5fnprv",
  "key40": "5TwsTciSFp8yd5w2Sir8dWGW43jjJB5iLKbN7hU6mSkqgdyTWyKPZBaseX1LhaVqGopTw8NPDiiy51RYc8v1BdcC"
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
