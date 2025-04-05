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
    "3b4mFmsmTkLSskEyZSBQm1c6aR82VmbGE6GKYvE3tTnfcMS8FC6Z3ZcAck5VY8RonkRKc2x443TREE7b4MChK5xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241BUjv7D3BPk4JRQpfJUsQipjRcc3PfmNutH5BbpTYigNqT5auuxdPnBYNTfGiA8ixoP3aBhoCAV8291WJJFbye",
  "key1": "2f9qbB5MY5NcdWYaLRZ15dA77hkGkyj7bcN2WBgKTQ9dBcgNrzbAi8QxSZ3uHjxPu1PAXGgJFdZd92iWGh78aXiV",
  "key2": "496qwd91LAQrpsG1hVnR5qyQGdQeiYfQoU7wCeC7HZMCiiDZnXY1GCNqamvkv8QR8pTBwo5GQofStHsiKBj5e9Vs",
  "key3": "47z83u6GYQMZrUDkDbSCwdL42eU7YPU1vMnTw46aJRZmKzKGeMKU7yrZx4xDfDzR4voSem4Y9vqUcpFTC9kMN4H2",
  "key4": "26RRS4hYf9ec1wMv8V9ENHXA4pZHuupzzwNWLPktk5nBiLTN2iuafCLnXxtcf1ExhNhwL1d1kGV7saJfnz18zYAe",
  "key5": "2Q3B91Fy6pNPjMqPdE1YD86n6a9YaVNJDzc3jk1RK5NVkTiiPKFcHoHgjRN37cRSQfGnKkW56RbA9M5VSnhuYNe2",
  "key6": "5SDyQgQgrs8U9K659bWPwea3s4BCV4KxNFgkdDTrgpcuRbh1v5o18crZcoAUXAKDQWb6uqBhoJuC2AhstM4nnrHH",
  "key7": "5xW7yZYyTKvnT4uosChLfo5ZXnAVBbtaoUULjJZQfhS8gjhHXNG83ntMTEBRsGkASpbDxuTgbnrMMa5eZZyneget",
  "key8": "ToWfwF8tXfhp3xH6DzAg67mB9itNXtYJfm9KHxv3hc9euRvjMeJCcYwyuNPugjqSqB4eNtBssFnYTjpixYuRngU",
  "key9": "64MH3XbfCTWZGCooZXXvNTfsaKayKTd5LqfdjpMn1zcnvUUFng4CrFeT58QfRJPDAVvy1bFFi3Ukyr3VieinKq9R",
  "key10": "4bCMaSWVYpoijhzZFpM9iwxFhb3z4oam4fWwQyP4fsowZhdgfczx9CJLLzfHTze5ksfhihPBM5GQK8WRBWo8Bhaa",
  "key11": "58Q31WY6Gs95msB4sRtHRr45fwNqR4y1QnBzztr6P6LpJKudFvVNhrjPY88DyXHQJv68aCycu9p4VXiNYnvvFePC",
  "key12": "3xCngSS9iGmmt9o9tPoLUpq6oKV1h47GmEfA3iSzNQvZh1UV8BqqkengT633QG12btKg8BW5YeJqP9wXHWHhhmLT",
  "key13": "4XNB1aigU4XFqPdEwqv9mxgY3Z6zEmb4UPQrerWEoeECPd1H2QHzdVPqTuURJRMmLcLgyLL4MHjW8XSYmTQGW4y1",
  "key14": "5GeKgSSQ7rmp9jpCgnKtFhvHHzapyik9tGicH5jh9XLZH6KJqL3W5zi25dJ2qdzYdRkMs9uNJzQT27KAFhtVryTd",
  "key15": "ncFV1MBM5BXup8ZRPWQQtto3dVMWUgZxd2tA5txbm9eqRj2nCRJTGez2AgVXn45brMRjASQoFF4v7UQ13RLxz5g",
  "key16": "4pqbKeU7ah3EgVRtrPscFCdqCwwagKc9R6yk2xFyKv297uiGdSDymo8aKRmfmBg6pH6TNvS9Sv2Lt2RZHi4PaHGJ",
  "key17": "4tASfKxKtRon3h722zhnCat1sQxpYhVEvmw75aJnCraGsPuTtJ2uTRS31a9FZBWkczYLovLDc3sK3r7wxme7J6LS",
  "key18": "2T76uTpaWdtka4Vq45kSxqpNhvcFr5L9KYkWXyuCqsXYZBWYRUZdUsf115QFqDDBtPkeXWo5esHBwT1gSLMBGnqo",
  "key19": "4hPCLNixhk8DGahuybBPProepN6RJtyHZ5R98zNQfyD1GM3ZtTCXsYQZm2j2PMfoTpsQLmzTTngYFQE9Ym1LQNQQ",
  "key20": "32goa8KE5QCFX2ukyYR3BSTtzBzc85Luwhq2bcLAg4kFxsCGBdimLwvkWPfwDd7tN1bXiaUEPuCXfToMHJLdqdpu",
  "key21": "49PKiPSs1pdoC5X7qd6SAiLCMDoSy3nisccDLa3dg7x18LdkYB9hZ1udNA4sNG6BVFgcqFLn2d68c1pAG5tvDfMM",
  "key22": "4Ky38cmHckrYbt4fB535h1qcFAMDVTQrDbF1jekcvf3z59TGaYkcVT6cSjnutTp14JER3ZZxGLTtfe6hKWKtENo1",
  "key23": "4UbXKAXh2jSrVsSqMfDgsFZakE1znJdDTKsodKoztaPS1wWJUVSJVg2X33CzWUSbuiYYk2EStEPbZwEvvKJK8ugt",
  "key24": "VvdxrpfFnadPbCkEvMtjCqtLn4f65sNtkdx5szaVT8zxZ2SFYZiaGJ4CpFjHZxp9jxwoppTvYm8LexKgNEV94Mb",
  "key25": "3dTLY4UsCHxMGRze8ZTbYH4WmF2AdiANavNTPqDW6K6Cy3eRu5D7PNGDHgrGYP8PJGxiUDYiXWSHL8NxphwcydNa",
  "key26": "5ACBUyKRsTGdZqztB7Vz8Q7kfGS2Hrhh4EPswRmnaRAPwf9YVjqXrmnL2BZpUxfFSQVQJN898rhcWmY5nvEPqUXs",
  "key27": "4jthwwLyAA1HWwH5d6x2jimHtqcVvJpQUoaDxJCvxXFDPFPZX3o26GYMWqPf8rTVHdviFuYTTQpYZ5CBnVHAoyPG",
  "key28": "2hQYVAKStsgm7M3MpoZEYqCLoNrVRquEx3XAmqiaVuusyRKe4QjQJGnrby4ZB3seKckLB8rfv4zejpNsH6QpcRL6",
  "key29": "2jJursgGjRcU8aY52AtrszvdMQAspPpWewVhke3w2jTre4N7iE4ceDGRNzXp8reMNSnXvufsJSmf4g9XtST3JF5t",
  "key30": "2mPBTXT8AarDZ3tboLVMYoDWRhLb6EUDdv2tcc5oA3eQvZsJrzQd2o9WGTbyPd7T4yTDJEb4F5BdkzTjUcn7CFGp",
  "key31": "3FJvRCTXaPPhBbgoLPz5P9obb61mZwTrvb4vPXVj88vfQ6tWB2xQ6ayDQPCv8VaiD5frEv2CYqTsARGqLKDSERKk",
  "key32": "3tndm5gsa8557chHa3vZF8u6Ztxs6Q22Hh4EXeKyTzgSaAK9zkvjb3qtpwAMUzRKeLk1AirdzFoNkx91tscPaBFq"
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
