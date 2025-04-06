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
    "4Nwnh2xYRwCcicigLQzdtu4KbbGP6P3LdkxvoPTjTKEr5252yh1XL8JMaRsXdvQDygvb11489LgR4xrnkR5cr9aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "thAV9gQTyWBJce9tHRaMEU2ogMNunDRZFJ9zQbwk5jrHiPVzN8W1V6vPAuUuFAzDtf4o8Gs2rv3sr1bXNCT7e5s",
  "key1": "5GAHAqhC155eup9b2WrsuXqSBfwhgVBTvd4gB4nidePZBfiKVHm5uECsLqNu3QUUif117Z9Y99dUvb6MWrUJqLVM",
  "key2": "zgyPjEicQPcmW1rRLEz8etFzBQtVuUZgRDNfcuBPSBsrw8y1XhKwox95ZEbrPLrUVLFgwLMKULdJnx5AErQgqFi",
  "key3": "4iJU13vzRnZ3nJzZ3FkL76As8qG3w6vxgMQpVj34C9G2Ta1V8jLwHMY8vcGPvwLrbqe3Ty9CRdTfKReJ3tAqqBTc",
  "key4": "3bQ5gcV27hZ14RC6xx9vL3aqq7jRJPHPSXQ4252AhhjP89rqvKvjpy8EA3TX7uuREiR9H771zHnhb8McSKTTQvHq",
  "key5": "5xNSqvAg2QjUV7fao9ShkmuKsv7D1zuz6VToMRosJQic2pscKSSZcn1BbMUFSVzqP6VHAFNxPQRs4VAjhvWfbGu2",
  "key6": "4Wc44KP3ZAtPn3XG1cZjKhYwD5VxUHb2tXZ7PQBwB2bgVBGb5VzMCXJjcSbfetm6BJsBiRwi5qpDqsUn1tV3Bs2x",
  "key7": "4aFZANK8LhGx7p5rBDmYqxxmw5Ab1QpsksKAK7LFEtuoeXwB4n1jKXbLFngmazWm9kvCGJJtRLbmd49fyFoSG271",
  "key8": "SnQKETiQZqh8WLKc8GMEBkgK5PFuHxTZq3tL4zGa3RhewxfhhVHZ62kUqya6CQjsN5PQjc4QttDxZ7EvUH1SGKk",
  "key9": "5D1Hnqd3iw7JHCgbvcxGsUA81xFgXJFgccDnTneujMDgmWWgFgWm6wkzMQx1M9qQ6cBQGUctMhjw1fGEGQ4xb94v",
  "key10": "5rxJEjWPgckjRnHtD8VaRt6FssfKnhnz2cpKUBSDv7d1hJYN4EMnvLWtTxbztPZm1bUyo3N4RDKfQ8WGCFo4FaNX",
  "key11": "4Rkp5TCvS424KZaBHarYc4aAY4YHg7ojiffcUzkcju3reeQgmsGpykJHrvpABGsFdGSHoXgAib85PzznuaCVCNmF",
  "key12": "2dbY7tLXT3qG8eK8uCipJRoPiwrrxz4shkemoCQv47qMPscp6k8vmFkjtioeVFNtoSykPsyXW62oDRBbtTsjwKNQ",
  "key13": "ya6TV652aRwTspp9UisBr7afccbqcHkjuexfRPuaJgRzJ6XCZGjjMbZLJCGLVnNbGQZrd93deEEukm1jw5MHfaH",
  "key14": "44maVeWcygqMot4g1257ndxwxmZwDKV4HCFhGEiuaY76T4ERSGUHE3RDUzyzqnDu9DeozsTrgCCfwX8i3agvryUZ",
  "key15": "ZvimpfLVteHWDWhLbyqCYYZimUkCF51JLjMq4dVAkfuDc3tFAFyDhoLVYtjmSc9dP5KdQ2uwD3JzAnYwsynfL9Z",
  "key16": "4Thr7o8dQjiWeqJayjo5gymD37nanVSPWXFDghZvhoLMmiBhVMNPjhwo9vchWriKyHn7x28nVXQxkhuNMSvLoyt4",
  "key17": "2dduxZf6wPH2mUAtPkpb3yvJ1TJkpGkw6tZoj3z9xg4tMrSe9MfgoqUBWSwFV7TiwVxCMhrFXu9sA3c4VDz3EzQh",
  "key18": "2KTNBJrRBasax8A2gWKT5UsocQWaNbk6Ek6LkpQnTyEwm3t7pJfoegorZYozF5JC51sqxQW66F75p6H4Gbhrx1Er",
  "key19": "TY1BLGsS1tF5wPC9SqEjLDRVfBuQa28zRyMRTghvD9qk7MJBvUZaa1TDFv3aPxuQ5DEHCnxUMgFbeQBdM98SRPP",
  "key20": "2EiqSQmTbgmNL3BquGS5wwwmBpT5xwJG2sMchHs9V2sTLYULi4EaPCn6rQJpPfzD66Qhc81KnroEbeL5W28zd1vK",
  "key21": "2Fre59fa4yHGgoptMGsHPPeCZs12eweDJgYYmLD6tXeSR9a91mpizMgfXsZ8ZSew7aaYt7BDf3kPfX3JZWmEUggd",
  "key22": "377469jJFuvUXDZDftBHBTWuuek5jajiWqnVk5VFokZYdCPMRHngrp87HNtEYAnr7qrnU6JszEQUejSGoXXuggU",
  "key23": "2DQwe4dLvsPMZDSjgTJFJXJTCfKSTsY5Gf1GoAatUwvcdqhD9Xtq3PRdq5rsMbWUq5grZ16zyGABXV5B5PqxTnue",
  "key24": "aosN7jysRDG4mefrsYov8WjVV2Svk4yJ91CuMaCB7sR7hdU9EyYZHYG54hYvxuxbtfMD3pnz3j4WuLfuAt8AFVs",
  "key25": "1kSMUdTxrpCf8XVTtdYQ3d2KvARUTXeaYEub8LBGY47HhyGmeWW6qaGSyZQjedJmZMaLxXNo94vhJoot6r3Pxmh",
  "key26": "45afhj1uUtCV5TX8jWLPCBXRi8noBCB9BQJZdHKYuUKhErnG8ir2Ny9VBXBTk1kCquHwAa5jPuUCTYXEX2QtC2PC"
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
