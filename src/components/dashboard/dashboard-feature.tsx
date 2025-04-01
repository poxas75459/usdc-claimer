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
    "4N7yr8QWo2utLseXJfYJ7k3mM7TyvvtqWCzNbCzFzAk46EqdJWaq9APeYhfVzyP8vAe6J8gmiLW6CcXF4A1MLTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMXPPNvLFtvaFYL7KkHkXY7GsJF3eUSvDL4ybSUMCbWqRWj71X7Mih5HsGYK4s3MyFdziFn2LiBw8wfthZfhwfM",
  "key1": "2mFerpJwt5CXW9RM6VpFsy5wsNZTsyYTSERnFKVPifKHQN3matJiv9Yco4sVpR9UYxmxWfFqdZQaPEjyYMx7kmpH",
  "key2": "4aX1Jef14hmK8vUczsJhjMGxm6wpfG6dTxCrrj2iJBgz2FMavA5nd26cqBGppdnDRnkExHwPHzjHje8DGG4Cti9V",
  "key3": "5rMNe73BnNQMfnm6JSGhUcgnbV1pKEgq9KDVMgLYEsKEXtFNTPt7L2kjmtRJsQzyQeArv6BUGGmp3mqmbDnQyDGB",
  "key4": "AF72Lz1uei87g2Eng4vhnTrboGciDcmzjn4kkKNdvd3qfVxT237DwB1CumxRVt33se1AkjweChUSyvqBmEwbuGQ",
  "key5": "5UeqTZmBxbWhQFrFtKJrSJD7hwW5gc31rpP7NHXpV2VM74xyEvg2TmiEKH66hwdPnMiscmNztod1QDfsd1r7cXWs",
  "key6": "2ivqCXV4dTQcskRHEsorgoApUQGwUjqCswoMCNQ1B2HNbYQMkovmxLnXMN8EZ7mCUqHu4psE9EyjcYTSCYucrq7o",
  "key7": "2HAbtJZZQWhLCqJX3Ybm67K337JkgQseGctL6Zh38zPvwka1VbtBDiCbU3r8E5keoE3duuDwE5KBPpXwYXunyt22",
  "key8": "Cyt3AJdMhdbCipmhTdbHzt14QTTsyAg399jxrxWj7kGhvWpCpQY4kbBmoN9EnAzPXLDzWvVH6AJSHDRJZsjenUx",
  "key9": "3fb6xACiLhGKfpKrCCF337YK8s1WVM3RhCH7SrFVCYRdjAx2tKA2qxME3uANSCePwom1tSjz8UCWWL5BQU1bBpGb",
  "key10": "4BbeyPKqU4NwVz43hwgPEwAaL4SSPE4z1V6wgrNwXWr36rtg5P6vQF8t8C5ioTRey61ZsvNTKLoWQAfs4sTj2apj",
  "key11": "3wGvWKNL2yH5gL3yQVHzsDH5anHZLsdniN4Z8ibqjGseBfuL7GREanZmVLxM81oJj8G4DECQBHedgjuVibJ2TmbS",
  "key12": "2vVbKjbu4fC5MUs5Afrxpb11SwhJ63x1y2R4BoTMPyQvtF7VcwiMSYawQNmocs9s6FkDThwRLJruHtqVM334eaWg",
  "key13": "5JVQncEsCSVHxFzgHUQLMJnhCnf215hgZKwvGEBtiHMW1U9tjKvvewGxVUjrYuqiK2UhhuadqNgEDarJBx76Sjz5",
  "key14": "2b3A6yuRvSBA56KSX7E88g7U9r6N5SmaGVxMcwP5xdtQmAiHEFDq1nZucNGJWH9BWWs8FSTRJcN4Zo1yUSzqJogs",
  "key15": "5LUw8ELEnHxz876gFH8z4Ei6uCwPSSsum123zvGVgdG8PDabnhEPZw2WCER3aKXibv9BxmptVNeC16Nek8BryhUP",
  "key16": "5bK523c9MzumM5mZ9V4ok4FEQkUjgRbpTKpLirEYHDq1bGZkgHb73KHswP2pu2ReWz7xcxSSUnpxoKUnRSuceEJX",
  "key17": "5V8QzF5LTeXTnmSHpjFuFD9Btst52Cd94qyhe775effsZZFhrGc5fRBsQupgR8dAZKfANZRYTrC1QJS9JZRqHW5a",
  "key18": "5SU23jdsBsrK8oi1LdBoN3hPwNcybH8etQAomNRCkJPMSuMAuhRGDyYprPwq3KyHvRH3kUMvmsuKyPyAioEYdNw6",
  "key19": "23aK7govsSe1YNdLRF6XhdaQNFRQZ9RwnMr6qkxpjmh6XznUt95coPHisxoDYHTj4kkhDDs3xhcfhhAabueZNrzq",
  "key20": "5gpoa4Wv3ajQEdEF9QfUC6boVYMYnPszVxS2rVBAXwtHnzcpKASVfT4Bva6c76Lx6HSMZVt9ZgM6RJ4eggUJEnoQ",
  "key21": "3amx1rHNZudnyBBurCDn6GBRUZf4XXXQNHZfvMsq4H6y91oSqTmBny4XkHCB3PdRNeJ5MZcsShhUksrbg5Nk34vH",
  "key22": "2iWxM1YBCApPom4Le77rBUu2J3TB3zAHxUhUJat2ovCK2jM8e4FTiUsaeJhAWHzzEfcxjGPCwRxymf3DVDSf3WuK",
  "key23": "28ks6DrPc9ieFG9XQB5g9PceT5zkxEfkyMi5U8QgGYxuUCGAA93dVp6VHAKoB9xD9WG7fpZ7kj9bA5wuYy4jFcvs",
  "key24": "3GsKC69snUGgpTKW8284owsEM48MX8VhLwQ8tVVUHdCfoAQQiiuNVQJYCAcwyQBk232yREaN9QX1RRYfKe3qWs89",
  "key25": "ERnJvsa73U2UbogXoxmMjrvjGmRcBNjurgfg5c4ZvyoqBmpuKEQxNZ9QrufKrQBaPVKSxeryad3FBvUH46qt1rn",
  "key26": "3GVY2GQ5PJM8j7JdUSacfprmwdhptyzmDweBNEDRrUUMRcYMtiRWvsr8NNb116HruTA4LryBJf16i7mNk29pBbBw"
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
