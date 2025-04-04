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
    "2LvkCnM6GBeeW2RStjZv4XGGg9o1T2MW3dVCdfNm6HwpK1BKNbPqcDNhzUPcuvF65LpgrGpsN8wQ675R94fnLjzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awLkAFQkresG4QR3YAcGSEQkpeZXcF2eNJFKT72zYmjLqKLaK2xsb3AFu7RKQSeY7aeDfvkusvaWWCaoMALVhfQ",
  "key1": "4NRw28n673nMeowAAaikmApvomAQj7wYd9keVmeJKWkXBTAZ1FrSk9xohsZY2qGbqZEzxpx5AmPCeGsocRew7cEt",
  "key2": "3pS68PhqeVYiBs5VDEHTgX8fHzjXQdoDFCwCFiVBsh2YzWzLwmFZcZauRUCaP1jRq8gL8jeFzLUSTE54RRV95MAE",
  "key3": "4shcSkLEbukNpSTf5UpuP165VHLhNE4YczBW8sWDeHK44D9pgTF8rwBJTQX9UEPJGBBUHoC4ENHApCcZtj1qe674",
  "key4": "41GsBd7sapV93Tqu8BSRgr743jCawAiwXeM34tyFcwZ1XXqYi2LMrmLafmV1E8yXiML4B3hvMS2Bzu8DDwbKfwWs",
  "key5": "tuGYi5iXpmb7AWP8tUcz1UyXUKZZyALmvobo1EpdLR2cS5VFQ5MjS5syRmEoWqw2T2Wi2CBmWquAysaN4kVcRte",
  "key6": "4vwEakDdDrsyFfg2hcfLuBWuaobYYc1wg8c8YKBGrynqQdntvB5fENqd6ZBQjMAifj2DTdUKP323fwNWrX1HWyNZ",
  "key7": "4mBKa2QfatcvBMdyZ6wfEgqy8EU1WWkmKDm1XuNfPyzQ8hFaJHD4chNuwL7wUWLQZR3woV7y8NAxuPUrEZtuxZw1",
  "key8": "Bno2RHfNzkA3JPrJp3LPVe5Mj1PZjbU86NM8n4ZiWbvVzWaHxvKGokF2iRgXSQJR5vbSB3jHvWRpqtUqj5MqgpY",
  "key9": "4qdzLG924W5xrURUm2bgeBvebcvnr6hgT3ngpbzLKt4LxcFsNG7KH3nj7BKcvLWMnhFkRAjdx7QFKVTxPXetxER7",
  "key10": "4gByZGSqYoBf85rXoSr8dZvisyTWEFy1MCSFLYp7ueDxEHEg7odXgsHkFTdkRqwRHJnUgjHrKoANDfMie8rY2JmV",
  "key11": "2a15TM1nM7yr8cXVCFwQER4PnWokk7bmujLrQgLQevfw8PwugAANzNjHQ4PrRZQYn8MLLCghsHhFfz7jeCtkWJRh",
  "key12": "3oLcjCZSa49aYx7ABhSrJRCq1kqi8zVaj3HXB23DD4pRmLnoaGqrZaikNqV4zaxMcUEHzDwbqvmq2SjTefwFrPMP",
  "key13": "3dDAFGuVBTDLjrNjivZnuqsbsPRGb387HeNWpUQ42syhH73uaorATD9TpdiCasvYC9zmD5WGDjZGGbZf9jmMCGa",
  "key14": "46cj66G56qLWzhdFURQNXjimva33BZpPi1VLBbcRyRX2f7XNCv4E5TnRYq3wGM1BUKu565vJYBmgBLcVEx7TF9CD",
  "key15": "3j2WMhEYb688QGLD394NNimQcLXfKFHYyrdVBakbfW9cdDFX1JxtFWvPCQCJ9CnEsAv2bYL3We6av4vUpMjPkFQH",
  "key16": "2Hc82gLZsxQybK8nSJi8KdKD61M6YGNScPMaN6e3vTDpgE9rRZmPXACpfrMU6vBJsomcMFNx9wgNzCRhKAk1pTpJ",
  "key17": "49rikTGUQcL9LnEwXmLP1e2LRBU6E8kYgpBFN5DBCMbRkZTn1NxB1zS8rZWMYhXzUywT4k4gSyz3nUm4sJBzUpHr",
  "key18": "5icXcas41bN6cVLMatPViLrEZQWtpA7Uh3k3TopYQvoeFvXHy2xJTCjs3tnx9YiiBFXP6of4ifuDsV55wuqT9ChR",
  "key19": "3Wk5b13x4S4VtK6R5t4q1MqAPGdu1eppcu1txPaiBVf21HaZjXnHobjrQDktPsVAKvQ5RbBRU2HQNakjbqUUTer3",
  "key20": "4bBUKyNZSd2Rpv34mHystg8EgdeFv1dCz5ykxMP8uUEjivdYLtHbbDVirhVZ2Ewvq3K1S3kyXd3gJk9yxrhajtv5",
  "key21": "513qnX49cKWJ6ToQMrYQfwciNQFcqid4M7ioe1ZmoJf6JKa8TLXChbjsJasifzX8mA63mrHFzYmX7FBnknqgii8a",
  "key22": "4HmNdbMmwsAJssx1CktLZrLSUAFWZETywwonasYabN7sAUnoUtyZLKwBiSWbpR8gp5BFfrrcFXVySxZuyxxDgwH",
  "key23": "2xzPjEeW5vCXVit9gHa4P4589MWC55RSsUuSQhDUEBcqUHSn1D5G8Wqv9HNqN4QUnnEQQ6Pc1GHzePHVwiGWgZCH",
  "key24": "51uFRRvZP9WPxSw9cKR3mbDcoN1QAMGtJ7M2wc8DyEABynirfZGU2gzNZU3psYkxHEaoJutRMBfizcs2PcqwwmDF",
  "key25": "ULxADfSxcfWGz4JRDJQ71hFTBwM2dDRwmwCGmdqa8kCHnAQTAQ1jgEGwPrigHWiAatTAy2ZYjPdep6xaUGDhgyQ",
  "key26": "xSWWrjf3UZ7zYNHAoPGZGMXSbbM9TiGouBsYaQhXyrZg49Za5cUx724PRxzUfd9kvxW1EVMruPUmcxtwYbBM67e",
  "key27": "4EffmzheYAvMLxkTUMoMPwfJM9nbzb1D6bMWXkpdfcveWiEiAcu32KyNYtUpZyfLhJPmAH447ku7ZkJXrny9ajko",
  "key28": "2JgECNP5stDQZGJ2xsJkpetcCSDCaBCgAEbha29cogeodDgDe1qxpG7aTz3EiUR1X3kJFvnRRg8PFqwwRLTiziCr",
  "key29": "5icZn1x5XZNJ6Q991T1Gn3zdp8cyWMTMnMhnExbRvEnLV4DSB2GcZA4tgdWVB5ZodsG157MpKcnjrHGeWku3gSUF",
  "key30": "21F1BT8HqhMHyi4bCGrLBZRxXF31Nc9MMazGrUPiQJ74W9cBCbUR9srtaJ85d22g6uto8qmCPN4VJrDB7ME9aXCm",
  "key31": "2YWGzAAPdviMYsFmbGvAgtnkBXZX6dVoB8Y2Y696fvV1cEuv7vRZc4FD5UXuSZevbKC6eN1MPc69ezxKoFWD7ZDc"
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
