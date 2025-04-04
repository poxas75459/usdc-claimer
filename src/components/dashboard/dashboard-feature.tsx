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
    "3RNKsaJQBKcr46A7hXyYfLsm3txNCyTcmLe15WG2jYcVaXj8x3LdyKEd7nJoETz26wmNVUc43pks4YiJC5KuSjpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UY1KouNhKCnRJxKcXV99fm7FBoQe9vyKQ5hXR22bmUq4XCsDnWqtK3YCBjcbhudsNTohggaRBxgfYJx9C51v7y2",
  "key1": "3Cmh1PzAHrL3qhvxALzgRFs8orTpEbb3Zm3RvSjkBJs12AjePhNo1QBemEG1WdX4gJXFijNL9iBmRPqmnoW2cQwc",
  "key2": "PW2QM26yfDSNVvYzfKzCQMdmLPibR54zvdKbcgNtymWNSXFQAsxishPhZcp7BjHzfC2LNCQsGVcVXffAHcHS7Hm",
  "key3": "3LCChdu6G5N3C94j5Qackr2637GC9fRehf5QqfyJVxaoUE7SgATGcNinx1SqCPHzrTQmAf7SUJwVU3FwqXwsQMws",
  "key4": "5d4iLpfNKHdjDEey5wUq6drEzdi3s8Rjhz7jzFwxH7oXmdteQeDKdpzpeqRC77YJBSg5tmqimuGuD7T7SYWTdFbG",
  "key5": "51zwQ9Rh59cDBAFu2C3md9dKEbGNhesYp8R1RoYszpevB9PB7aFfCgZqxCgGt3QsgyfEyyargLUF21qob9KvoBfg",
  "key6": "2YnCnkiUifCWKswQshX9J6ZGfQ5afRzSHkyQkbnTFUYsHygC8q1587J7MHuqkDsUXbyDefFTyeyn1P1KFS3qzh5L",
  "key7": "41RyBKFWRjX5SXP7xCndHEiBqWYsLBgB98ujfVugnptUbpMEkAhtaGSsCuPsNpMNxKogCen8C3KZRwhgmXcxBF2Q",
  "key8": "2KsCZ949nHSPRqLTxSQ3UWmwvx2JaLijqqoNbScb8wuZAfVXYbjscYQg2gRVTSAVaQ9rt5o2DSmrYrWCcFbzRJnP",
  "key9": "5GXwpmpahuodHyvbXn5xEcR5ZjmMSPfVMhw7GgpvU43eFSw8CrCyDpCtnLq7myfa1BfW6Z7QCY4QUdnBYDpo9J5v",
  "key10": "3BbNBYamh9RMHQdVoU6gSST7KWMq7iZ1nUS36R3D5oEnF3jxtQpY9ZxSggDUybGS9vN9rZHXrpdBHuzPwCEHYX5H",
  "key11": "5CnkC4XJJPxDPmbWf6WVQJsbbtUTdUd4RPj5VbmB1VT59YwSBRsoWWDMiqxnCwsfqj9BKaGab5rDzzVEM4oBwoDY",
  "key12": "5b7sQr71QQ8sSpYxiZ5k8phuhn4aksaCJ4Zsxy88AfqeYrzNvrodNAScYrWS1CUYGbxym1eTzVMaBABb8dumv7CR",
  "key13": "5e9YEk78G4PE7dHU9k5fZTG6Ew7MgMgBk8UfMFSFgVAEgaPunquCfiEer7jk6zHve33A9YUYrjWgn9yoMrWmeK7Y",
  "key14": "3JXysSx9rJX8M3PTTUhpXm2iNgPT4CUHMEBumrucsP6hFvhwmMWdWuFrd6SyQQx7aJPbomfUZxSt3khKhG6Lo8S3",
  "key15": "3qci659ZQNAncCziFX2jVcEA1VTPMpF2MFtYWTFMrfYrtk5DWWyxrWg3dBBPKbkYQoYgrNEtRzn7nyuWN61zuCZU",
  "key16": "43MyuWGtjRfyX3wHH165Yt2n9DLxzdYzHntm7gDJKtrU6vUMKePz7GQj1oBGpSs8T9cXRVaDkEivVA1LvfEjC6rL",
  "key17": "28zyACp3xXeRNvX496QosbtYLXv5uvnWVZ2s8L9BkJoAE7Wng22oufN7QBgHH9mSLe5aruaRrPh5xmQQKFwKVesQ",
  "key18": "2ra94e7VQrad1FNzywdUG7WFXGtkbxzLA47K8RdFkpi79HbKK1BAmKSNM9UMpS1HVLELyFjzEcv3PTSQszzr5j7i",
  "key19": "M2z9Sn5KQhp2in4to95eCcHMHoFnEL67nqY8iqgXnSZNnwadvf5BYUZg2fA45tLZHfMvQFoGhDwm8ruCPBKEmkB",
  "key20": "2ce7NBaAGrtW7wsj5MrXxpXw89NSJSkAReoiM9eLY7G8BwYxMo6pjPmSxTrjvyUM2TG2AJ4ng1cYxu7aLxXbhu6K",
  "key21": "2TLQsW6XVaybUTridHFbr6NtCSEFvR5umHnBrkF7nkM4BdfrvzFUQX4UpPMVsk4tLymeTNSpSqggVcrRTb3XGvg5",
  "key22": "E8tqT222D6SnVF4HZt46v4BLriRceghznGfWGjeVGzWNQo8Apyh78AM2jMtQWPXNbPQkHWcx6k4XE5m3RvGzdTC",
  "key23": "64h5A1Y3QGM7kd2aQsFFKU9MeDkeSWbDu3vmB3vfDRtXQByqQidCxqPzWU6DsCGmkwrXcqN6r8puJTEPVECMaHzT",
  "key24": "2TimBtxowJ6daZYqL9WzxF679ATnTGmaQxwyEVwrA8X11Bo9RsMvifudx2DqZAzoQ6G1dk21X4ryhH7Tu49SeJR1",
  "key25": "5r57MT4rzd6f7Ehg9b4FDbU1Gx31BAFSsUbo4qHLe1nrs3XaoT6NESVfMvFkrfgp6b8rJ8nPvoNnpCoyXhrpacQb",
  "key26": "dhidYqsXF2ZVVuLVJEdJCZGKw858MUMKn4xsrCffeiQFL9qUNTLaKYRHrqq2fLiez8C9caoZodKQLQxuvgSz9Rf",
  "key27": "47EKKG3MByyazwpDSkswJayKGk42FCJbxj4s2WnSPYAdcwQcDxcUqCzKXEX9Rr95rgooibPWFfAVMWvcFuMdQKfH"
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
