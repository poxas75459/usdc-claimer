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
    "oq3y2YMqSynPvFzZi9Vqb2cCL7GaeyrBFsLYEbThhxNvQxafrNoxE8jhzRPDWYtX2LKC84iHeptiJmPowa5XsWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618y2rHbYpdqxWYGuJsbA3Ji82pP9ddDvFstgTYhZuFZ9KbFfhp6G6edVGQqfUCrmu4QbRihJBFmMKo4RYDskzHS",
  "key1": "3296gLc5NZKL6TNRi7PMNTxS5miH9XsMTrh6rPYA8WTgDvk37UXAPRvYs8bfkKoh3q2j5Q8N593MLy5U6J6Mdapk",
  "key2": "2R6dz4ndgQ9g47xA5P3oyzsxDPMpNXJf8zkV4CxR4y2TzxQo2m7J1F7Pz5uiesygX4T7n39tde1yLJad93cFxixy",
  "key3": "3TTKEtz1W4keQBjUJNoQZxBZPz6R3tZVkBZdjtvff6PUZkNhP9CbrZj6GfiGRFrcHS8SCsPmMUb27wnygjcLkVn7",
  "key4": "BHrUgcjHoZPU51jMfXyUk144G1onS82skQZ4FKBWkuez1CedgaKCTEH1W3LKaVpeA4DVB7LpPJM7Jf9k8kBESAM",
  "key5": "4tMNBdCuUpYoq3Lku6AZ2utkTjdamfyye54B6c3Hc2SexmEbRNe2EiCaYqZZfBq5jsuX4yjGp1rYgVuqKz7vRoGx",
  "key6": "4yLDMKiz2K9W9psRaUPq2KWsVxRMAe1PAqzpqEY7SrwHrFTy2snSdSe5ZAT8Ubdxf1AM868zyadsZyn51L4xXink",
  "key7": "4bq9ZzzC1g42b3CB14cS7d34BS9tDLhdpg4ZDyd6Bm75GawyuWZMcUrd1yetWSUCTQpWLtrWt7n89DDjmfsdNSr3",
  "key8": "3hcmgDpTtXkdkMuR9sRxJgYTNvBKpw2GRGJ8nbs9i5m9JYCYbkNkViWavgXkHWXvMsogjP29UvDZV9QNijAL9x73",
  "key9": "5kQz2iCCq1on3CkqwXf1nrkh9N1aBGHQv8TDR62khPzgdxubpzVbac3gcpd9MT2nAwSXZ5AdDb6LBQfn3wMR1yfD",
  "key10": "4BXurLrwrdunV5gMbMzEyDviYcDeb9Ej8fPQ9mQmVusbRGwJDE8ee7WgJzNYwKGZn2bgJBY7TBAEJJE65bbrPzWj",
  "key11": "5BCyW14igw44j7xisYnhJEUHm7qaVbeig5J1ppQixYxiU1kJEvLnbksjca24eGGJHxjTyJacXJfTbcAw6eDkq41d",
  "key12": "3gvZbHSL5eh8KPRfpQFU6oiMeb8hWy3V4mjikqp2XzYT9QJsvBY4qC8bZ9mVdhmSnpFNCN52wd5Py66UirhLDMML",
  "key13": "2z8ucc4FWVitbnvtacXvmBcLPduDRDFja5iNPHRVYM5MF9QX7NdxjLpVJvEPWRsbGNDs3Wkr39w3tJwpU1N2BdDP",
  "key14": "3uf9fgzKSRRz1vTdLMBtpC554CHLn8oHVi9ud1TtdW2J6dCt4r14SRRRHVbXh7dKVtesb2D5h6n9JyLf6P7oV9px",
  "key15": "uKsGGyDEAf86874A3oVFBnEFPSp8oDgfGW299X4gRMy15kZPbxTH2J9kCmgzpNHnjAh8b5UnANmrVMybojcWGhK",
  "key16": "264CvAHoM8XgbZV5UYLBSXqH6dV9npG5MNTwPuYFtcvgkhCU3yioq19QoQmQoHEQVXybw9BvfQcVLzSytXVLSeVG",
  "key17": "hmVsVaC9WECJFU4sjvird43MXyQY2ETaroxZti2eTw8hdKMgbhBt34oHMx9mV9w3cTyQJJErsVGQuEqxEFNXmRi",
  "key18": "3JzHmCuS89FdUNu4ZMixhLFbsvrpupAZS5ik6e11nwTLaJ1WUgMb1GGsFZQeouyFtdYwE9tBRvkGUC8knqvXMijP",
  "key19": "2n9z1Gs2QKCx4ZfQyj8KKfBPHvQFLjZRaCGRFbFTBVGgrR9cxpRsuL58qm2CXPMHphXZMK6QwNPYt5azuit3DQe6",
  "key20": "4YnsoUArVshqLmqhwHMwL11xL5nQadG7TxhYTop6QzDToj4zxXJLNxKYGK9cRiFkeoCw5ZfHr3bfkyL7GGrtbBVh",
  "key21": "3nTwQ7d1yP2fZDX4XASFcvPFWfkiRwEYEhDKvzqZ6VK4SPzrYGxZGUfnA2VAdE6pEHEWzcPmnCuJLtCoDZTWEn1a",
  "key22": "5HZjF6GiX4kYvnBJaFosrtR9RreN1Cps9i3aCWvNJXdp6nJGYi56ysAaCveruW1gWuzpXsJF6QDwKb1NdR9B74ti",
  "key23": "5RSVdHbbQvq8hq9siQN2qtX4wwjpMM1Z93Da28ZX6xrLu6ARVdzRLCYbeTjFxTHbPhyFYC4moqokDNn5tSYdqqGy",
  "key24": "5xs1NaioiAoEhx9EgdsUz7n8gncbmM4GzXCtkNg1LCHwFpe5ZVHRR5xQC1A5e8SA4meJyToQojGkbwjo1yrKUEiP",
  "key25": "nx7sUSwQ6gYW8STzmL138zMvFFYiyGTMhsjfSoP1e162u8wvFcHsRF2YK6LkXL55qMcFZkF1rsSo7pqzm7ykNsh",
  "key26": "5PT4kFp3EitXneGbibRZZ46bxqrgexq1yVQ2vswsuH8BhBnm5CYLVZfm3xEMj2Zjj7zfEjUQJpYZTHuLM2usJJZk",
  "key27": "62snmGAQqo84GRtmJZhCwm5AAXNJofmLbeT1pMY7mrdyUr2kASt3tYpUtATTzeyXb7Ee5GRtvwKetHT4NF9CCQur",
  "key28": "27G3X2Cw8JDMcq36heuiH8Fptt2Kmmncck3rc463QjyVYCSi97Cm1Cc5PzvJ2N7C7t3j9fhhKrkjt4dcbYWZLukH",
  "key29": "3WA4jXXGDU3rbyiPqnsqWwoUwLMfUWCoD28K1t8vjJr5obKxMDiuWMuhWdefisjAiSxWjZ4vS5yHEGdSj8WUiB5S",
  "key30": "3qsaJpnhhNgiWMtzWz7XBVXcenFnQL8X3A3JgPGa2n5ZCouTABCnnnajjcyfgYqkFoziJd8JqE5aigE2EEzLzj8D",
  "key31": "2j4rrTxtBo7GFx4XmMKBUMWk9MQXTDmXWhDTGmR1TXkvWi7L3mhDR4G4kC5XTfNzfE93V2Cwh8UvCqLqLh12SKZL",
  "key32": "2uv6xrQ2SXrLWUBTn1zJDDtuF1P9G3TVyn8t2aN4BHhcRHugKozEeqGGQ7GhcJ1oitKdgs9V45HTU6pp9eNcab1r",
  "key33": "fG6ed2hSMJ7dyXdbQ7nkfhTro8zaPdgdfk8bcAErmCYG8uZwaHxefLfAjmEJTWwXrqD41dWhSJZqszcW3QxU94t"
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
