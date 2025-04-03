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
    "2Hx31frqEaWvnciazpShPSiuXKDJ5S6vQef4qnzhHghDzC32VzwgpzzfiocCEguiXSKeyYj1ZbbkznbBaMHKvCDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piK5ZEBbwNgMHrnvMUeKRvNkS3FqrcG9m84GdgZzRhPRG1LiiaxraFFqxhA38T76JjfBTa6BXxhWeWVNQpMQbsD",
  "key1": "2nhF2jFcX65DfWU7xt6AeV3LxZY1JPxP8s5dyzYt9WgtjfUhvepMprzSZ6TkRKbbqDEzqNJBso2dHnfFp8ic85Jy",
  "key2": "2r8vzSmBJXb7m8gRKXpVjHxxQcsxVXgymCeLwyH2CuTaNzkaKeEKmYo57H8DzAfUz9dbbqVa5pZgVXh7zoNCGEJJ",
  "key3": "5V1fkraWByydQN9UTrV4Ye52N3hiWta8rVw2beMZQcgWFU3qV4KmZFwghQY9iye6od2dj72gYzcJQUKprhsyoZkK",
  "key4": "43n8miPPxaPNEfKMzMSU7H4Vk2cxLExn24Td3GfqEcPs5hh4rvRDHKcQPgUMqEn9nyrKcZvTanH6kuSSJXDDtce6",
  "key5": "4SrtjZapQkWcCU7bjiHrgFT2jUvBemBtrXonco512b7W3ydb3LGD3CEwoC93HracbjtRii4x77fiX36bKryqEtBo",
  "key6": "4jMZbxtWn47e2bRZDazkxefoSRU5d77KaxwmQrPSAaaoiUvDfYJjvJWPsjV1d8H5rNdqxPac99SfE3AMZBrKMDtn",
  "key7": "3xAuWzhiFhR1UUmuWRjJdkViuSm8kkVJQP5sXUpKd2g6jy9u9zSqcg9hKzfD1ezschBw9MDwPkNbYy6uMYLWxMPs",
  "key8": "2Y9WFBXdEY47bpMUD8TjduEnCDPws5SZsdBSgG13dyrMT5ThxemTKXSxdTqgKVbV2yekxGmEkrGusJActuqzEx6m",
  "key9": "2PiMtuGajBT3N1yH2FCjsZYz9gNiN66KBEq99zLBpxoxiu362eheVR5bcnQmr8Ye8bmzbesdHanb379zrKLdrvZ3",
  "key10": "49rH6E8hhZLqXg1eThweMmnM4NH9S7JxRnNXVGvx3JKh829NFUzRqTAhoGny4dZ9f2g2MGa5Fwtjfuqyoo9TNFmU",
  "key11": "3qbDvgARNWyZmzadgT8wyhD6DGBAsegb1xQ4GcaYJca4WaCphsXTdtBGbMT1WVRs7AFReZoL6WVhbgAsyFhH8kW1",
  "key12": "5E2Z2WFvBheczxXQSX6tNgfEGGKtRSXvZKr51zFHGR1PxexPyUsukW9gKALfxanAy6bqeH48G7Xh9dKRxtJV3QAT",
  "key13": "4u8DjjQEwnSwrJ4tBnwowKgb6ko8Mdwuq6g8u5kB3yw869uNs7ze16jezFFVG5VZ2vLJUEY8KrjS282yvsTut6sJ",
  "key14": "TpwZZqh6267TRqQX4btqzfPm5GgFbhRT3opVqzAHbXpHpe9kMk8LgiknNxRKQ6wpLnk7cCnTxpYsBB5jTbST1N1",
  "key15": "4Jj4Dgh5mh5k2BjcyX2LVHtqNh9k2kqDJqV3yFohUaMob6WEGNpVvBawP5GTrgPwQhuAWtFdYbx8ksY7bbiANRV3",
  "key16": "4NQt2MBCsageKHdHyeSGZVHTcey2VvEDak8mUhaDef1unj2KaCiKHwmLCVXArwfdJ8U2t1f215571nuZLC12xnKA",
  "key17": "3GveWr9nyq3YVzwNamFrYxMc5Q9udfK4DEncAM2yyCjHhwx8BDSZx2mXhibutfy1J3hAGm9NNs9wQTRWd4Q82dH4",
  "key18": "4kQAethqmpHgzjNUgQez7zbCWr4ZXzdxGxwLLowpsp12zaC8Khz7YSoSUvYVpvtWJtpYj9M2cPUSy6oHsnixGCyF",
  "key19": "2JnsmWiHjbdgCe36dMTAEyCtW4ZDLYhtatY92djdDFuXL4vUf6uc16J5PTi3NSv3ZqA87tqp8fPv9KgdKYuVMuB7",
  "key20": "2pEacn9P5H9pvMViA5cagbtwM5nu5j9KhGtES4GZ7N1TsPh1JtThQDQXhYxpFGHvSgwKBm9kVcVQKczAXpseDz7X",
  "key21": "4JphLg8c4otUMjKwegD2NYMZQwZMPm5w5MfNvZQATQbSjer3QNxYEg2oLHaB5nBhHiN7anBUXWqPA84Rgo5rLxtH",
  "key22": "CSYPBnndGBGr5RU1hnpWSCgrtLp8ddm6wNg2DDd632fMkuMbDSE67h9g9EBmJmhAoJejrHNw9z8X36yvQX87vy3",
  "key23": "2X4zUwMmoyr2PJWGuufGN3yGw2AoTpv2w1VMu6U3Nu1W3yPPQT3DXx92U9V4Ss6B9ahWWRCof55t3atxb5yCPDGK",
  "key24": "4eQCSX2Eb4XK3dEgK36wAx5Qb11EQoduHPctoumu5zdCjjLi1CmwURq3xUQrLv77aq2SMZ1TS4KSyBZVFNAZ5rp5",
  "key25": "3s3o5HFP7BwFd9v2CdxtKWfRjEt8pi9yRK4A6EXGJdTqLXtRX99Cvdng2QLUcBkrPWwwrS1MWewa3eXFfHeGwdro",
  "key26": "46dXjFhaSVsMDZVeMuhavJJWem8n1wi3e1SZyNgAgbw6DrzRWz2BPcFR2DT1j2w9L7mocsB5FiWWsrYzQ4TWsr35",
  "key27": "42KssYLNCNLQSZU8bBkENAfAFwWQ2Tb1FuTb6HrHZbxSCtD3XoiKdqpFvU3qDhMZABy9dg9W3nhF1tzvhCrpjjim",
  "key28": "3TvZzdCZy9jbaTPxWcexGqdponmDxM8wLe3nqvczBxESvpnPtgTTJsCTycf94bW4M1j4xWJ3CokpRgRsmYB6Qrvg",
  "key29": "5ZAEEJxbY2bDGBNndkHW9mrYkTVBcRUpCBPMaSFd43BPhfQxxzcDzZT5ofhav8UeGohKth7pSzXMAG3ByMmQppX",
  "key30": "XvXxSQTksHEk3bEwnQmTfUTKDsaxbhAmdM3EyaxAHUAPG4B4pu5WdpTt5BQDB4azpTTq8cmTLqtnnK4qtrEUb1n",
  "key31": "66Q9uf6YbS1KBqeyTiLzSTaWZtzKToZP8xTv3XWBfr3m57rW24DBuBRGMkxm8tCoKrGf5XazYCYoQsFgun1jsydJ",
  "key32": "3DSWDpTgdStowsiDX332RvDRgscopwjMiLmWQr5nc5afFjnrC2BjR5y685W7r5eSFHFqza9xd1cmQm1XhXZy7agD",
  "key33": "SFyZyz58VQjvwAhAA6hGGpQQUmc8RXuccr6tQWq2FQfiXSSk3CFHGVpr3QKA7uQLBx8R3cg5wRus5QZRCsv4vNK",
  "key34": "4R9F7cFJ1dBXFGPACWzm7hk8vxaC1oeDsgRyexRY8WJ7obHAsoaEfXwsrdY5mYttioE1V91a4wNEvZ2jqe87snLs",
  "key35": "5cigGWFy9uNed3T9kZDLwyBfHkDJTaXkW13ejkkm313zwYWMyHXpFusLPDZLDnvEtipVCRcvjaKW9ostFwdhAMGi",
  "key36": "RQFNXaiivtZGserCEY1dmZjrK32rhdcNhoEGKoMf8wxWmxhMnZjbRSyvJpk4LGGBptcN9pLwxhpbWfbCrozdDHg",
  "key37": "4TtLYE5Bdi9vDcdLu4wafif8QDEioRe3DDs9KDCKR1WTBQ1nnZQqLkDUkALbDYxFFyZ4i5LVomKtrk99Cxm6qU5Z",
  "key38": "embg1iDw66U8vEvKNiiQ1cLjv2qafwfvX8pwEBTi7eRRqppQYPbFoBdTKtoqVsEQr7MrNZLYC45hvuJ5vshBshw",
  "key39": "4KaYq8RRjGmjHHak4woN8x2FumK6iKLye8sw6gTxFHtHic4fePAnQKoCKQ7Bcj88KJPVUEHedn1jWzca2kyMoD9",
  "key40": "4Rp7Vr7AeXzkPiNGEfedjQMs5mZDPkrNFyy5Jar9VA4U32bFY6nxStv6h8msEAP7z4q9LKAFpvEoXZGTHykyVwdz",
  "key41": "3ZipVQ3TkmuPj5j1jRqeVAgCy9Lf6RzzJFzorGQuGYEZTJqoX2nVDSVnHLwUzGCfT8YDHwzPa442h8P929LgWRtg"
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
