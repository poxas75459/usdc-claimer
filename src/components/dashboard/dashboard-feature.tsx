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
    "5jqvBHsAtpmVZiHN7zHo2WA6vDN8fLxAGRNjm7omJYKmuhKxvLXHEnayv2gPdv1MKD7JE3rN4Yu7augsedYACTMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DoLYZxPyjEgrAyCDFvf3w1WHxXAVJxwJFN7pUgUddfnLhyqSme9MLyxd65DHfP3jadD2nyBhe7dsbJ2B3o3Q8TE",
  "key1": "2QdBFk1XqWJQWyyxyP4Pb4UU6tMqNdn3q4N98NN5DyugrX3q9Li4djfEhHB1RUBRgeUqQQXo6YpokmhZK1TMxQyY",
  "key2": "fpU2K35e1g1V2Z8JSMgPo37qwDr9KvHBp81PDLddxrLojCxm4tNNeMVRk5ZNpgfDD3N4XncB9QBJSvoXL2Fja2c",
  "key3": "3v7YEkxVct9hkjJcHhgVHdVcueFYDcgPRJNjyw3MpV84yStpkNHzmxRDkUbCw1ZDbfjrYHNpstKsjrLyHGqAddta",
  "key4": "qJjeZcjRtivvagSKj6DEKbgs9zcmdUacdkfN4nk8t4zxrnqZZuaKXtYP3jccS5N93DP32eXJysQ8vShegTqsXWB",
  "key5": "5JqMTKNhbUVbp18dMdnwTDwr2eGtLiSANU9MkZgLNAtKhR14Wk3yGvWtactX8btUWzsq2QATvfNyYR6u2AtC8txb",
  "key6": "3MTpFGRxhDUsfThRmhcKpbH6HdtNvKa8nnN1hzxDCSBq3E3cpxAu9UW7mv62MigKb6XzTXF6Z6QW8EsLFbAns5Kw",
  "key7": "3MU8SBijSxkfXPgja3w37eP3qoJSxS4NiRvcwCGbERcoreLHqXf2HivBnRKgJ7kbpwyheudpRcZLAsyQeYcwHx1z",
  "key8": "5xaKdh8LqKETk5mzuFLHpqLwkzai6ChBVbn1mKC7bVSYCVMD7YtxoE2Z4nH128sjnWg8TBaTr5iCLAA9Zo6vFMqS",
  "key9": "CghpoC8QqYmLw5Nu4HA5Gw6FJkJEjXvyo1ECzJBJorB6fbs3REQSeuEZjAAr6gXE6ibaUPJ1Rwi3LGCx5bxDaXH",
  "key10": "325HadEqCQ1w1mcQfAdjFhYDPtc3xELRp1Krr6kdKbVBy9DwXuH4GsFpKpAyVbjJHcJ7TqDiPwubyVEruJQnFS69",
  "key11": "nwVV7WchfEjvqRTX6CoidwBUrWdwSCKSo57BntKuuPgjPkz314LnZwSap6Z6VcfLMwBzibGxDhZUBgj6dnz3s8R",
  "key12": "2vavfUND1TLa5DpJdUFftDzzx7kr4R5ypKrgwNkxD2khSx7BKLaLY9hn5rc6Jx8QUQ9Q55WcaZ11qPktbFsPxU5K",
  "key13": "2s3s1PzJBPQPd9zA7tubq1kYNDWUcBpJh6tXEa8wJjDAha99kfkMttYyaupGUm1FDxD8i4UX5n9exZ7ytb9Mseyd",
  "key14": "2JxFcgz3XLQFW4PdyTE7kT4ryBCMAtEXCT8JTp5PrNRGRzBkjCnr5RqUxspSvPTAMrw7ZxTycx9q4zYRE3eQrcqj",
  "key15": "4pLQAbSpLNpBmGehhsGX9jc1DNci7iHr1TdmJDuMgDHtTGuvvKmeREYx83JGQ9zGhpXiiggk5kcUzUmuH4AFwdk7",
  "key16": "HVWKNxoZKZyTsmzXsUf5Xn8mqfsKB9bp1QhQWxeVLSRxDtYf6bpMv162EBVbxCAgkjksqPTzEBrUac4kANKW9Gh",
  "key17": "2w5BoyRURWDvrDMDoCHVBWMttuPAoJChP8GjujJTxrMBGeJ6PvSnoEQDxUpUdgSJnxPAj9FNkCC8FqjEKAgTS9au",
  "key18": "3SxWvaTSqBpt6f3h7snXMwbbC9dKvPcyTDg6fko6QkzEHZtceXJe9NQ8mcYH1KyY8yJGdVngGLJAyatYLRV4vJmV",
  "key19": "oUawzGMw8VC5HkgjsEiSZaY5VmV1t2kiJRS1DeapQHDJZuPsV5MLtWgEJnXxAM6ZEqotqHwiwErmMpfJ4agoqpy",
  "key20": "5mo4oDiV8ccbekM5qNi2SR5x4UyVRMPx7cHWznfWoUorHxQPGFerfvbqDg6ZBrXRyQSqGUUDQTmTNJHRBiTAiCCK",
  "key21": "5rQAvkbqQQgxwqYbKMSj7Q9RC5x71eNbx4mqibo5cfyTeXnqDYHhoPtuYG5q1hXCBkcNjEvooBtHQZgcRtVW6Qk5",
  "key22": "2SCFsZKsSdYxp2UFtSNY1enn7LBuG3UZNauD8gR61SWpHjoeW1KdJ7QiscubzDyuHMpF7G7bAeaiHWa1w2YZrc7e",
  "key23": "5hRGCchtcp2HbFyENyYhSDZoh34V3HsxZywfWWkDi9SnViBeBQDtDeqzgY2mTJTpgP81DzEmHJnVxmSKnMX3c7JZ",
  "key24": "2Lc8EFjrrr8TNKxSPQnR2Gu692z9eiPmxNEYQJq4MxX7Rhh8akyYPiJwdKc3U5VASD3Lpxei6HYZzGNPPZzLR4KR",
  "key25": "4s48y7SdDt3AKgRbooLUuo1gYcayHAYGYX1LfMFRoYDgxNdzNZpBo9TjMLNQ5cSX6icTScXxbvYqw6TW3ySkxs9A",
  "key26": "4VKUMYGRbk7YFmCmp4Ty3aF48XUwUCsuinRMtsuxEmFd9xfvxQgVX1VNXFSpM9gULWcgBWU9YH9j1Xasuvjzx1Mr",
  "key27": "4FHhFWJur1DwHXKyiL3dTQtcMTYs4X23veFg76tu3w5zhPMHpHNx5jiTgvk3CCK2pqEBhjXV54ZJu8ZT2P72U3kc",
  "key28": "62YPLTrk5PnogznCWyVmuzh6MvqxGLmBRneeR8rnJU8xZTKbcYyarBPsVqworKysSYEVn4FUB7yntXYonjuW7n4k",
  "key29": "3N8GzCjGzsv4rCYoiQxJwwvi8i8buNEqLKNotQb9qrF4HXQv8Nrbr1ieJSagYeami3WGLYD961FsEAF4jQKHZybA",
  "key30": "4Ceb1BVys1brPXm9nKWF8w7AfzXXexu2RDAwyf1HpsGc7XYmEKJywW4G62jMF4iN8uDaiE9DpGN8wPj2kqxKvJuh"
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
