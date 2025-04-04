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
    "4cS18cXdpbLiNzpTntTyKFeL5eouyLf8VrxKsVcEs7RFvJxAvUkJLUzNEjiPKcqZGi64ZeeE3KfUYsDUoNQxcMTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WrN4qoKPMrYPHFT8UbU26YYM7VzMckHpXo9oA9bnifhaSw1p1mTEae29iWXvkT3wp9bCxM75b6UwdVZ1cNY1kXf",
  "key1": "5GCcR1spycZ4CiTedkhcMZoQ3HdfvLbWE324LwXUm65RtdDvLXgNXCeViHvUo8v6mRi93GZD2UZUBznMjcftL8zf",
  "key2": "FNHZhtJcpT59rgPo4nYLMcP3XiXs4RNJ2DLrGa9UUXJkhaypq61GHFwBoWx4qksprbXSxH1MMWsWw2fNnYXgepo",
  "key3": "5N2YRnecyyk5kV4R29dx9zygdbqH35dtRge25xFb88M8ic2HAbqFSq8AmXdRbNe7dRvZobPQJx7VJMmw4uVgAFs3",
  "key4": "4QnvYthLVDVwNs49znTX9vvV6qhgRXnC27ZcudEGfHYkmtuDSWsfF5rA3cagrx8aZ7Cr5y85EBiKrrnMJT91zEh2",
  "key5": "668NCLoJJ3CUb1MGpF9ziWAYTJmRHZ94mDtEYU3YmYM1V6GhyDZxi6r3FA14j9TU6i6uNqMDrcDPaZcH5Ls7aEXs",
  "key6": "5wGmSTUNHqx19R8bJWhLdKcTBuhxtHJjTKtbY1XdoAWKk95PXgTGV3TRkRbdLMhGidd7FZRx2r8WBAk4MZmSCktM",
  "key7": "4p1wRW5FQMvE2wMDZVhK7kkgUKu4R62rD7ejhSvQzHP4Zu6Xy9jZK8uxmD8iwZyQyyiTt9cwVYNQPU7FTJhJwkwb",
  "key8": "5ifthKt7Wf3Q6zyg5vq1QbkYDLw4DJsN6sfHResuZ1Vwzm2S7Jy6nTYvWV3FX9rLnJ1r76hQvxY8jwmWuEjwoKBw",
  "key9": "2SnUTYMhtg6H572ZkwKVH6qxYULrJ1qKX14M4v7ZTFF6VDRD3SKj8dKqyUvizLsMqc6X6k9r1f7LbNUJgerg9ZEK",
  "key10": "3tYY4crqfJMzgXWt4vfzmjMriwPQyYxf3FaoFBVVU7LUo2N95urMzFsZ5fvYyf45X1RCkzkRRw1TWeDcKSgPrLHn",
  "key11": "4kjRvPuXNfik4ZNsY4w51f2vBpmypdjDgRLMoXzhqGgMTB1RoBJEEHkVNCR215rAxoFBaa7N8RgXCtPGhYoKWXB6",
  "key12": "m1zDnK1xv1H8xub9ff4Dk3S1Pbn5VvrMnXjAboTzRqp92oDSx7SUy5g5tbLFoxSYS6VhetVhsfmJViG4z2Tjrpz",
  "key13": "3Mbk2Q5uNc55rKPsqip3zm9qWkM2Zm1NS2zzcSKn1TnP9p425Ad72qtKVziyZ6hgVMjeimuvyzySj6dS2rRVxniT",
  "key14": "4H5iAafSrcG9oXmrxFumqqPgXLCbUFATTzYnWoyM8BiQKcEYzGykwhrQVtPanWdf9LXJ56vPEcQKZzC1G6KM6YxE",
  "key15": "3ZKYM6bjo6rnigvCFkJz7LxmWEg27jmvxaYjXy8k5EeEsbjZsHduGvBD86JpEmdQJid2t7UmvZKknxqNuFVMbwWm",
  "key16": "5n3S9dWxNrYX4BbmiMB5Xn9LJzjBhUn97QT2c4aMANxukPwwppSEn6o7w5hg7YRfvS7rjrQPgZ4Q53HsUtwAQBmQ",
  "key17": "d5Crxkc2RebiFyQjBKXSxipGExthiJAPooYHjAcmoYYPqwRDn1RnyYY3tNstZdbheocwsdfhY9HZrMPT8uChezz",
  "key18": "5NuU3vLGD53kfJwvAMhL5RatSJ6j3rdKrzjso2EWYGwbATR3NBxYeM2bsPkt4DUni1rKBudtf4UQRwAStzE7CtGx",
  "key19": "M6N4jrwBUXDsH3iAFH7BG8tUcfSgssE3QMXJo5UKwasK6tpTavBNeuZH7tqua7gKTDaaFa6SA68UGUPJGCP7efz",
  "key20": "4kerPFf4y4sWmRioDgut9DujzA8RybL7pKTesD1WMqrzij5xrX5V28aBoBA6en5RjUesLnJ8cLFvkLU8VcoYnNV4",
  "key21": "ZAVmAZFaHCTbVdVH1wiWvEBdJ6P1PavartjiWDTc6CuCfTGJDseYrk57vy4gVwR5SGFGgp6oDUZYwPY7zDFVxZ3",
  "key22": "4scJNkTRbaFkaMB3hqLqgCukV39tPv7Q7cGVmheub6Vi2FWFQb4smcdscthScthBbzTKPVHQgHQkTjGCR345tj24",
  "key23": "5ymXvRGMHb7DBXvMC3yydLuMHZ3tbBUr3YZQxk7PZd5ScDc8GopNnf1NaAX7VXhULNqgREWnahP8xqLF8V5MAvMi",
  "key24": "5XdG5yvFUxf8g5XSybuHA11mW4vc6RsmQ9gtwbtWjnZm8d6WWsHCBYKmuAp2YjTNSRMY1zDmNRFmzVcZA9cmjNLo",
  "key25": "ZQStWRpSgLLoPAo63JDRfTKNNLpDHfAstwjCN1jCeLr2GWPC9jSS2X313DrFoeQ92m6TsofTd4vYyJppazSSeaH",
  "key26": "4onDQmfyskRPegM6PXwXan4N6Dm9E6GxB3kVQnnzvLpPFLQLLpYTzgJEePdGRn6S3pApSUAo181uqgkDyBVJ7kK",
  "key27": "4EW8ad6f9jEoh3DjpiG5RdExpcb8LtqVEwoDt8cmxztWqDy8Sq1CPwYy6oX39wh3ShRM4XVxUW9xh14zEgeD1rkE",
  "key28": "3cfpgfmk8PMTo8kpFgRkaavdPpS9NeNVB49WV4EApLHfrhLBrN6YEoMxwZFPfDt9ChSatBDaN563ZbMmFLCWCCCH"
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
