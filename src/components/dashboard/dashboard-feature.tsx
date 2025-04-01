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
    "2XyUNfC6w3Qn9JXfcTGgPAt4EJvfNZx51vpbpC3RfmXpbHWoNQRsaczz4zz23mL4j8LvbV8VPnLc5Pkt2SPTkTXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rgpQ1UzZiN28kxXSUFUDejsbXsf1HP4JQ5dVPwpwDYhgK8gPfH2fwT9QMiYC7C9ZXE2v9Zw7sfNKaid1YmixWNM",
  "key1": "vsjL5tfQj6DU6PbYsN7qiMwiqnhJWh1qQZFbzmFSVVyuxYKZa2zSiMo9y9ATNbydJ9GPFfYin1iBqUx3zTasNVX",
  "key2": "3VRzgjmmumFrH2vma2hN2tFbntStXbeyc3aKm96PUyc9PFaVJke4FngQ9QiZshtr5Ce5YLLLgPTEMt3gYfL9ktKE",
  "key3": "2G5rpu2y8FQW2xDdvV1dkQPfD6NPTshLeFu4BrnZix2DtGs7jeiGLARAvWNdVhSdQZzKihU6XdRrfZ6Vtf7X2zu3",
  "key4": "3Y3AAj3RQ5Wu9WmTZ5FmwGtPHizbGUcPNoX3EH7nmNEB3cbBasMCCrn7JUw7VF9ENHuYApnJXhrrZsbK8vC6vxC",
  "key5": "5Uu4nNetc29Uy8hA4uGPvHJJFAfHhg5HXLdX7smbbQBJ6xGktHa4oDeFg3v2uQoGYP3SeEBnZRG4xK6R1LEcmhbf",
  "key6": "Vpwdpfq6CudC6RTMWHHytBsczhHN7bohRAahYiKJGrfNdxHBYk3Lqynu7VKYjGbCQymNXJ4hACNXq5eKqzD6tTa",
  "key7": "4KU688PbyhDGpq1qSuJQi755BC5rCcF1eJRmPZD7g1F8T1gPvNfVDPyjcQqZ4w7Vhnf1uaGKRLsX4wxEEetRry3V",
  "key8": "2RW6N9NdE194LTULEYBJbAWPovGYxkcaNqcwvvgn8GedkwPj81b9io59Epz7Fh8LefZkHDRZ5DUGa6277CfLFMTX",
  "key9": "2U4KytE4vhsBttuSBqxoRh75YgcbuJEaukP4H3cQ1YwSpjFE6g9awta4jp6aEoS3M8SyjdtY4tFFsJi9Ke7Gv19Z",
  "key10": "3Tf2homdLdwhzKBJyEaFRgYypQKhKvRZ4LcLXmSHuqpE7e9iExefXXyMkahYvE9bKcTBSKjbrNVg4neQojEFQKQk",
  "key11": "2Zey8GSx4TGDYxtEFjcBdBVa7ssZ1zBX2aeESLB2kCs5TsHdxoJaSL8YAFDDaCcRBPMx9SuhBmHcJuvHD1G6LGeG",
  "key12": "2rPdVcjwQp3kc2dhubiTuhegXY2VVnTUnYUT69EavNezUnfPjqwYzdtpQNdWdKZJCyqc9AUqqa2gG1kTC3rFwfHZ",
  "key13": "61NFCjbkD2PQua34fBYb3BdchS5tD4xd7TXVDhfXfpdv5DPjE1snGrqxTgiUxXnV3xojL2uLLf5bAUJSHMh2XHHu",
  "key14": "5Dy1KP6v7hP7tUgg9kqZE7WcG5TMc5Y27PgFZySrMSQDJvzdxiQXrzfyJUrZZGU8mL5FGU4AuvSYPzyB4h35bFMf",
  "key15": "5YSU4ii26c96oovtoM13FY2mXA3rwWFPRUGh9GqJniWGtPW3z3WsfVA8vtPjYipsmcfPWggCPTenjiwjFvpK22Su",
  "key16": "3oGQzz3LhJXwqvMrgz2nwR6fa1mBbDvyYxr2BLVDFvBTEELzVUejsLB9XExqaB7qdx3RZgLykcepAShnHeXZruBq",
  "key17": "2qqDsQ5xbH7VVFb6xSLLRG2u3kic9QUmihQ4QCVUoiNZFfFGRh8GXjMv2kNa2EKXpSD9Kz5wKwDiU3m3tX1tcb7A",
  "key18": "2vLsm47oKoB76nczdVi3LYqjNt15NipVh9HnahDF428V3M1JFfZrF4i1HYDHDSmp6yhyrEMf57PxLHvmcfAskwV1",
  "key19": "56MKNuV7oyToko72AYkz1BdZCpotUi1wBHtfF7LdZdkPkht37CuNjK6Nnwk3TfE7ihZcqRcVGHd35dptNwsFLujv",
  "key20": "3czb76ASBKTVjypZjh1bYCoV5upoECobEsLmMmLmdKtsih6rohKJ2YrDCNndA8BwPC9Xu7sCuz6KaRo9MK93yuWQ",
  "key21": "2rQ1HZ8QpxXeRKdmcH5eaqdJ6EpRvr2Q8PN8QAJvSQGHm7Y52UDk52uLDgMvLm3XBxBo1GoHzbUs2W5tVZHFgrjH",
  "key22": "5yn42ZF8XCEXLnN5ubygegNx5J2DyWWwuaJMLKuiwpmuLPYZYK8HBkTdCfHTjUQVVJqHQWWb6S7DQWnikkguHjMU",
  "key23": "2CAdTvD1N6Vg5W8CaKzvzCWTcAc6XtmnCqwADYKXL5sToHH9muU2cfeK97mLpnYfUgVYcvgkjHgRqj9czECXLDTa",
  "key24": "4fScu6HbxhMKJfciWHWxhSk22TrLcUgxw4W6QH9eZ2gHnk7PEQrJCvyEmS7gC5vbQHmhb8nLw6Cnag2ZvouUX5ir",
  "key25": "2HbWsevkNsmpG7a3dZPx1CXdwDiWtC1UMuVCCP61DQdwRHj7y8q7RZ3AV7kZCATm6VmPA3PvHsq84JwwcsnesgBk",
  "key26": "3w4hjZrHiSZgVaa37ebz5JbKLSwRjhxaKHGdg57MVz6ZgUDoP1AFSZwpdrGMr1P4Qqnepz7763i7TZ5ZrayRu9rJ",
  "key27": "4XYXu4JbqxHbM9PwoDn3s4WMeeghGApGha4EWsmyNurRgMbt6cxh3beHzMADVssawoFmkUQ1gzowR8A9jqipWHKK",
  "key28": "4e8BLmWVFLL2LoQvJWrz5616CKrbNYJsmJZsFre6HQmfi2jGK8zCRjW8Fz9J7yfHmRPaUcpWt8pPFJ1qDqCcUbco",
  "key29": "4oofEhdBHH8mtK1PyhiG7rFqqk44yez11MBv13DAPPT9sP2c49XrwecHpqjCdLt3byL1LcDt2UCPG3CqdnV2H4hf",
  "key30": "5Gs9xuu4KofqMC1AmG7ZE8xkuHgDEgn8jni4DS9CZCsHQrTZvqSfftHGy18ZHW84PkPYHCLH3cL2eNjUdsNLLGFS",
  "key31": "4vBWBgvqkwkWGc5UC51fkgmF19XMQRo3LAHd7WKKDrJjYyAfy3YUTrYvsYnFpoGGZ12NZ72zpfSdJaG2TQZ1YHrN",
  "key32": "33vMsqnrGeVjpqEb2iE3qxFUe772jihimkjuXkNoRuraC6p426c4rHbvkFgBgqSZ69C28AC5EU7MJ6rX1F56DWLr",
  "key33": "4wf55UXUR2dNWmX9Yg3jFHT1sjLVdWqKbveigiuJcjVXuH7ftVRbX33tu4QHduM958bk9B2PhtePqfNvb6swjy7w",
  "key34": "4MotiaoYcJ4UXDynjKMVK45JwAVxm7SD1yq8X2HUwdEtLqskoKR4VptRzw56mMCWZd4m4NWo2ZDCx7AzX5MH5TLq",
  "key35": "4xj7ZnHARFFUGdiprgzApcaoG1hp4zmynvKczuJkNF9Kyui27jMR7yZzUchTjoB5srhmXHXf3PPZgvEGM4iUBJ4m",
  "key36": "5S2GKJLruJu3sT6CFyMhYP39fxe3Dma6D2U9miREcKnskMnu8RJE9HvK2FtVAhbZc7zcysJTBhue8oEenLK5nP6R",
  "key37": "2QyusCscQjVc2wnWVweGPZsYddW6ADFHfGkJY8iUGceaGQnzc8n9Zf3JBA1o78BLQe9YuK9GnqozKwX8WhqJoX29",
  "key38": "4ayJHAi94Xi8j8ec9t4k7wSwHMHHg4s3irszvgtxJGCRPa5jY8n1o37vbov3AWJsPPkwUh6yVwFMkW3G2pGP86pF",
  "key39": "4yoFq54gJBa3NAVoPsePbMpTBSLn48bP7HY93zk9s4M4L28piNSPhW9AbiirDWuXP7G77MJvxWkoNqLPpiT585S2"
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
