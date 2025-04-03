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
    "4L3Ng5QDcPdKnhxUPvBqX5TBCVPtXBWjepMU2KvEFbcH2PEmhJhPWBaAcMXr7gXkwYBECRjJNXozx7t7p6YUX7As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xEApj1UakvuCFZyJkU4Q2FamGDp1kbHQ8Rj3RnwQ9NTyWXrfocjGsFDSMMgzsy1PPenRVe2k9k2dv8pBDrL2uAM",
  "key1": "5UBRS85oCRxprunTV6k1ARP6eRUgHadBTuASmZrohuBsF1x2tu7fAX685iySGJwRSzTAKXaCzQdmsGQWXLZ4brQt",
  "key2": "217owfigrwSYHhZ8PJXTkdEKtaW7zaJdS2tWvK8qd6cK8tRquQozP5XTa25KpKKRStEQtovVy3DCwEebrPhGv88n",
  "key3": "a5RJSxw1hDi48eR6r2qvC5SdAKsNfZJEiG1kJ1F3Boynzvc5htuGLRTWfPVD41rg6q2ZBvT5kiu9Rjq1U9G4TTY",
  "key4": "XfrazQRCEiSN8S982fphsLpsFE28kNnWQnNCFVrZk9CCTMMifzLDyBbhxtCwEUYR6aKYC6XUdRKxEK6SByixgEm",
  "key5": "Md2WEVqz499AbQa4g13CjSjgu8GGKrSnn8CYVZHnJmYXj2XQ1Z55mW5HAXvDkYPQXXCpL9RVvEUbRbgWN4NDQ7T",
  "key6": "2dmfWJueWSEEzqAGh6PJ7vnXJdV4wLJHX4LbCLkLX9TWmXTqSUYUHgNsSJu8EjxzcyFQXvqhe3zrHq2XBPqDVq4z",
  "key7": "2yfxhNDv9Zx8kBfYjLZvaaPNY8sUK7xwrhqgathdvRZiX3VcLervQiLWWEFvDFGS4a1PM3iuMm8S5T1FHMAnrnPm",
  "key8": "41V9a8B9h7GV1vM7SLsrXmQAQ77EDBHgDfr4SPJFoEV9BSR6PL2j4SPspHFfsYTLfGdWj835Pnmbvp4oUyTsgMiR",
  "key9": "4ocPTpYKQxUfGvrRqeNZkimqCtJexebMa9aEi5b5GRGWVr3asUiMADJEgnZqD86dDQfc4T4vfwsxyz3vFgeisBhL",
  "key10": "4eBMoRvBmSPq4MkXxvupqRFXmRoPzug2P9ECAY4dSsjsArR7naz4vW69B85AGEw9EqG3qoZ6BqcwVA4mR2d7aAmK",
  "key11": "3XsbgFi8rr1VpoTEFSHguL9Hjzbn3o28Qvf4KhuQdWXz4YCD4rksKZuRUabfZGzKaTRR1HwZdB6UoaGoi83uYbu1",
  "key12": "448YqQGa6Y4iXaBWS8uC8dTiVESNskfwgHYgxDkbbjiiiUKhBusMWK6HwojxUKDAxBwLjXQzH7vUvEv151FbJtww",
  "key13": "5k2k5zoyeNZpX7J396fzqNJrVMyXEQMGBvUy4TTUs3b9hJdJYZ7Wgxx2dky8TmsWeXZnmazcYxpw52kk8gC5nLFx",
  "key14": "3uYvRvEX433u6CPjidcv2GzQKwYDiSdcGnzgpN5C7wfsaNq7XM8N9MLqtr4Qw8fMAxtNb89PBZaf4AZ6RZeKAB9a",
  "key15": "MXwQcneht1ZNzy7bfXcpVFkVyfTBawnUtzGKGmrG5QewjgVUNzENUuLLdQFfWj6NJdtjcupAKiregK2mJamsdFm",
  "key16": "5YvS6S3f6cCtbpXJVKRufXPj9McXN24F9bMQTagbPxdtLUUMhdqVK2PL42FJPGFa9Gs1xRXy7UFxoCADVM8RZa93",
  "key17": "43b2rSVY2GNEARLvCppfzFRyDTRyfqie9VLmuX86yBmBhWCNGXWJwFKXiVKxyEDM4HrtDaoaQipBsNEfoLAh3wkR",
  "key18": "4AQ7YPJNRwYALVvtBC5tMAvnAjQbpSwEoGEweoMsD2cSJ4dCBH1QDR5SMm1G6qRBgJxkBTexRg4U6VSz1yGnjQbC",
  "key19": "2TdMfLty2GF6RsmFzdPruhsdkfsFQMt2bX2uHNZATKwaB4V7TNg8DPQKU1Z2EZt4wpNrw6Dq5gJtuQML8kx5wmo4",
  "key20": "5CEDEsBANWsWV2cnBsSTSFsZ9sXWysuJzroKS3Nn3WxMcD1VS1PzfUT2m6qjgt8YiFJeXBMn6JxMouk6EhGfZHPc",
  "key21": "SnM3fj1ygxWc8Hhpxv4fnvW8uCnaEJMNqxiGEdFb58hSffSQfDKsCjXFT4sVUTtQSJjFBLHNRVxJ1o1Ph3x6Lvc",
  "key22": "32tC71StN8gmakSWXf6Pqhd5nvKFyyseGAYpm8L3JJQfUq8iLqvMXmTtvDri8GqaFZp5bUzFJeF5Yhtw1fwBu2MT",
  "key23": "5e7bkLdGuf6NBZn3JrAPVdkaHqDsYyX1KofPGSegxHBMY474wm8Bb7cGuYBg5Jn5q7Gj3uEWHhJmCkxsJ21bB9At",
  "key24": "bpPjj7XLWSL9MEJHiyKKzu2pst6XyicphZyjHBaS3QoFVFpkwPzhkEvwEeKwm5y6oF72Eafx5RMMcTtY4yvY7v5",
  "key25": "5WwuVt5ToLnZ9GJx2FcncHxHhjsNRz7UQuNNYbU5bWn1QduMyH2V9VQCmcoVe6fxXcb6wuHqq5WmxEB1Ds1viA4A",
  "key26": "5oUeeZ9WPxY7jswq6VDmQQtyapDU2ysiwGRq2UyaA3eeASYkNfBmnt8YiXv8drdYxYwVUXY4Yw6ngpDpLWs3Loju",
  "key27": "49T77hL2Boop3W9z1tKwUFKaB64GssMwgvA2RVXFgvSybTjEC2MsJ15B8KzWALC1XEBUTmM5SEhsZ5TAw8PK515R"
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
