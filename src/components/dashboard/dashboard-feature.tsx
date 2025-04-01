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
    "3Z5LeRS1vhNRHWzZAE92AT7srrFGQCD1aY8rurRJ5Q49PZmcxMGqHdCny2dG5aDfiwajmujjjpxnpcrbAaMivk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kewudv3NhBps2ytA6i8TGSdinH9rPPYNzAuAYdfewf2GPDYYpBSJ7n3RuaFBBP97eGbBH3gFB1c9nNDf94JGLi7",
  "key1": "3wfCCQYUsJogo2GRmE8zbeB5feYrps7CQmx9WXRWpbXsDqBLBJNGPmTKiu82coUhpNtgQ17g1GR7Rxzuyr4LewMp",
  "key2": "5V9ckU8pgqxYPNN2L2WYYpAzj7w4hrxewRKJ2YaMsbRLfnnBLqJyDYeELQC4zRpUE6yrDYZH6qomG7KTZwiBRUCu",
  "key3": "4B9xnLYrLqq3a1NhAdTzE91hANQeqf5wm1EcUGo48xTeEye4anAr1imuWQqtCgjWd4fWuagEVfXBYok8RnBJTtuX",
  "key4": "2s3Dr9qoiB2NLQAkfkM9Z8K5QWtn7VYVxkCscf1ywh8JG7TXZ1SfyVYd4VwaFMPnz1HpLhMdEUw3P2AtbbQvqr38",
  "key5": "5VmhgCXA5df1QbLr8aSWBJ2o1vHra1qpQLsEsrMqWiFBoj4S7ayhCbyQEzDYFyPNduSyWzwL5LTNPLxCXrDZP4VC",
  "key6": "5Cy2ZprGNowVvZmJbprpKdbDCVRL4qFnRJAh63v5aaj49wtRq3kvt7vrVD4jRTpLUaYz65sQHGz47e5UaTVVAX3t",
  "key7": "4PoA7uGNBsVKMqvFBuqAHtpkF1utjmgC24xXkqwfNXEXHcin2LkQ7hfJjkxFqav2AqVgqtkw5oKZEmXEKrJav22U",
  "key8": "5ALPM8FKGZi4FSVG881NnpvbRa8EGn9PvaZKb19iHFiCxA1tQtQXHwp3WuDmGCWFfRjPvQFx4bBHbj25SJkdZ19g",
  "key9": "3r9LuJuWZMEn4RKZTeHe7nCr1B7JqHQvdjVrUqZHUZtYi2hxTHn6LaXS7VwJwaVh3dv3Ye4C679N3Zt1Eetnm3J5",
  "key10": "3d3JQegdYeaL78gTtpDqJRkxaQwfj7BEhS9QFycukKpggvFqiTigqEKUDM5jd4azkRqP4qVEsL4UFuwXv8YwGgHW",
  "key11": "4r6b6kDBiAML5XuhoebFVcMjnHFcCHSdhC1XVPKVDQfj7KDDh9JnEc6YYceiw4XQYMCz4rPHbMXHhm9mSmou2yNH",
  "key12": "5pSo7XPHUzzgjfZLLvWKD6GjV6khGFd6LrSRUQXt1f3tnTRpvaCdC3XVsHPq5VpeRnARzaCszvZRqCDSJrwQ46ih",
  "key13": "2KH4VTaZ9yzgPgUqcANvB8EUpZfXFgU4bdNBEoLUec66w4yhAY4YCZH6fgWEEPYdNjbESnXfZXeYNYbCaoAdQijn",
  "key14": "4tux2wikR7M1C2x53jPdTz3UsatCAtUkr6WbXg2ysEG2BZh3sAXc7CkrSLuHW4LU1b8gAE1mwvCHR5ta2TpXkJr4",
  "key15": "2j3ixd681ipqL5mh1NUGULsFwTVKbgjsXwsYyYCow4bZkt3ZdE7iZX489NNwf7xsbhbPJi2LuDsAbfPY84ucZXg3",
  "key16": "4t1BJD5wk7jDZ81Crh5eYhJygAyKek2qWkCQBCqVEHSrATJcB1omWvRwNEVKPcmjv8xwmjF6AiRej6tnq85ypQzT",
  "key17": "3CUuo3s7YtHsmfbTGLoyCgsfHsAYV31febdNMZQRuyBegd3oobgJ36PpaC76HaFgXhERbaeswrqBgWeYM3rXeSyw",
  "key18": "1DBGckn9C5vPWdNR1uY8MsWHToUy5dZfgFDaWE9ZNmahYMk2cezwVVtsR3WNzyeA4jbmvn1WPpZABv7fMzKcxPP",
  "key19": "V124UJ26rCX1nPMzigAeWwsS7YCeyDB9g4GunA6Eawi3epGBVs7cNwMHbihswro5e58iepySuVKU9XPwBHNKZtR",
  "key20": "3BQdNwLg1YXQbbjerAJMguUz44yXnppvAHTzCMNTnENPzk3twkCZptF86hRYAPRiYs8JX7YT16eQQAe4cRPx7ujX",
  "key21": "2hwC38bnfrMj2bDCE8nn6XXyw8Mijheb5RyBVh9NxxegnqqQ67dJxAAq9fwYjogm43K2TWdmEujJSKdvgtJSpnQk",
  "key22": "1CRYAKSaxTDdxLTcKPoeDgok7t64nwxtpWrANCCYfCWndP2L37bZWhM81jjRZRacy4ycmUpaveNPx4ayYQBen9E",
  "key23": "2t3cgCgJuLGvceH4uZYR9DTjz5pGkjUFy2q3xZZXvCPnUyF8LYjipm32B2RWUkiFpU1Ctn8GDGEiWRU9AuizUnXW",
  "key24": "2G4D6E6kDVnHBDCYUnhWzFQe9ALNEAmV6EttCVThEaHLwQXSW6Vopaidqxncy1vMe3nc164EAQtpiCQxuLGUE8NJ",
  "key25": "4QrvyWi25nT9uYhh769wSw4zm362RUw3v4Hr9nKGHn7FaQ1aJH47hxsW4jVKmDMhhy3xxe9MytXdUTDA1YnvSabY",
  "key26": "5UUYtJzZcyzX5UagWDpQ9VGTnN5Smrmw7AJdyjfVzXNihmVia18eSWHveGKayLtC9phYkqVniPMWpndmoKRuW7yd",
  "key27": "3MVSteqjSMHL3xHaTdm1MQchs5w96XVXdZ3MUas9eLYHRsErXyiBAuyycZ3RQn8ps1eZKoxUv2NgEMpTM46K3Czx",
  "key28": "5vTohJFxGhBeWvSjEebBZ9a278TNCpEPVifgkDrbPnvGUgZr3F4wtt4aJ66rxx1NCHAz4CZZyHc3TAwkU2KLJ3q5",
  "key29": "2HKeHg7TJiLJQETZwzopaE5GXjAgKKmZDGUz93HFSbFQLm6cBR1FqR8kYv4kNHBBK1bWDJAxWmRjWZD5toQFxqU5",
  "key30": "4ixQqeNaPiW6c4sbmpWCBU6TYiQk1RHJMYbVWcEEJyJkE6btA7y2Sxqf8mNrW9W9JxLGqa2mFc4dxSYNws2wedmP",
  "key31": "4PymxhZCJFjLKCsXWNQWLDKtQTmnswMHkTdgWkjy26YwZdoq7M6DPwBxSP2a5frYHwutycK2Cw1r72gRXPh6NDLe",
  "key32": "2Grqwuufiy1noewEnYsnGnZFY8BjmdNwAuVCXSu8tDDNDydcTfpYkfLvPDDZBmJyRxiPNFJDVuCVZkXzN5nwmEmh",
  "key33": "36b5guVqhBJUmBEBeyUyQcRWVWr53rXy7Si1J7jXdBBTAzGFF2NFzZdsP8w5RKdgMBSQU2KgVB8Rr7GiBUJdt3sN"
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
