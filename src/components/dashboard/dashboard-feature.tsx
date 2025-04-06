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
    "5JZkdfzdXZEafTyjZqtJEa69C9onpbYfbdaKPckhPLtqqCDnG64Wf7mUNQLUdcFrJjmZ9GJZkKoWfqk3yZXP2ztn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MnuU3Jv5KBjJnwzkJ6A5VeQSyR9rfo4Z8syL2cHVm419XkLAwKSqeZawcuDUiZE2JwKJT612hcpY4u7c3fCd1zv",
  "key1": "4kf1MZ8dLeRE1P7b3gD6bDj6dkvoAoez7MBRbqM3v98r6ztTYQcGjjMNpLnoVwkGkLV1gWWpAdtAtpd9unVnkrLF",
  "key2": "uDgkvXuetu9EqVPCL6Np3YyTiYZMfYfhHuc241FKTX24yjX6GS7eE1dTJVaDYzYpP53khpbZsWQrgnn5Zi2LFL1",
  "key3": "4ssATp8hx5EhxoVDtT8b4a8b2ccMaSkfJae8ydSqWGqqcDGomoigivZ9iBGfi4ceoeuFBncf9UhQih77tyucBYdR",
  "key4": "udyBrouGF9dwC3pq6cvW3vqLNTwjKKAPRz1aCukagsSH7erGNSTbY7fkEvDYg3LDms6DiJzfhwLMZB9qMVoYmva",
  "key5": "2XX7ka76bTTKW14s4PjWq8o12QWaqdPocwaaq4ns3DrDr8M5EupozdXY8yktCtrF7k1MHt7F31y5zS33qnL5okik",
  "key6": "4y3Ct1fCg41ZWD1fCeWYXTrM7A9a9WrepmruNq7bLXFcRNG8nZb3RgQ8LzuFzLRL5ihAZfVNB7ZCnCWZfh6MJDVE",
  "key7": "4gB1Ur9Vuk361P6EV8JDD5a7JimgoFwctRsN78r9Feuhd4RrUQBcQPFss8S41qnRLbKGwzjicouTTiZEpQYb8543",
  "key8": "4FrRvBRpWK7DPvKz751VJCRshWydUuLdXdmkevqLV1g7QybG66ryGyaNsfsKfW3WY9mu6HhHvh9knoVTxWsH1eYK",
  "key9": "561wPdfmML3yTZWB6wwypxf7MDSTxtYRqobcezQsh1pF2G52g8MfsGSELZGZmk4c56z5JY3TNGPeBdYZpqJGj1q2",
  "key10": "5NizFx7AnuFqnC77RDvW1c58AMUhQpttmdJWHgyVp69yfQb2ptS5LC4y5ujQMQwM2ASoDLhXAueLFUtFjcyMhB1C",
  "key11": "Hjw4xLTRo65rFqSpvK4rdBzMDQMQJYpyYN7Hjjsika5YpT9zriV4CzZxiEuqxVTbuUdR5ZNccExEzJtp2hji9rt",
  "key12": "4UQETYXw6Q9y6Bfqt9vhqvd28YzesXj468eJev3vqhkwzSn15xkMZzC95xEyoVpRjT9ypEsB2fQwPmkCk4Hkj4NF",
  "key13": "3ucYWZyXbyv61Zq9ZhrxiU3kSh7UHG1x8CUsN58kAaCoBfH52t2F95VjuocCx5bqejPw2wrsvVTSCjUETErvYuax",
  "key14": "4hhFw3VYJoh9qk9aoEqexEtyX5bqZooyZTbUtRzxvPDrDgobTruE6MBNxes7NZz3Y7mACnxsBYvd5zjqhMBSrPwX",
  "key15": "5c2VFD4gZJUNfgeDSs7JPBFx1bj6LmUwRsCG2WX9bdJTMk1MEVecDaUxQuLXQXWSNAwK1d42MaUiFeMRbZGR838z",
  "key16": "K69wRsGeNZdrsoVaLvGzyLmFNpdqTRizmt6g1HLD41EeQAbxgBWpDKwAmsDMJjSkj2juxuwTJ7R8VuoBqHZTxD1",
  "key17": "BYNs7SJMRKZ1txtVuGmUCWbG95WGh3pPsL5rvQW6JFFGDqgHE8JLHyqbPPJLjDrV11RXo9bxgBbzMaJS5dhoi3D",
  "key18": "3CoHrwMFubkxL9ckAaYiok5gjGFASTFbNgwUGFCyyGDZtJtfyyupcH6K9HLZUDr3XZHZ9DDa7AYUFns6Av72zZGw",
  "key19": "3MR9KZ7gKiJGhbt5JybgGgPLMzzFBtn3uC4YYTGJkwFCqJFA3cpHiqXZWj2A4xEAwZTvenqfjYuvfCtLkkYhk75u",
  "key20": "2BJvM2rEHCqnbrFnjjW3HXfUqjBxeuXrf23WFiiczTQb5cAqGePZinRSmoaKni5Z3HYNntnMofnXdGFjeohysTpP",
  "key21": "4zAPp9T9sa2cmMNp66PFaP1eVKnS9kKD13Lqk2zjzcyMroEipLNHhjjmcSAcXQRfyKdrviG4VEM9NBgstfSYYZ3u",
  "key22": "5c5jMv5h9WC71fMR1T4m6aLZvhKRnuSFyzUFCm5Y4b1yFZSWNeSSBHoNvpfYfHpU4E2e4Udwd5D1g62zafZT9avK",
  "key23": "r8EgkJ4hqoM65kTq1FseiXEzYSPdkAUnVZPtSfdfnxXDgNfMdV7m5DxEkjcTspkYxbQvN7m4bNxku6SGvcuJs6A",
  "key24": "Kb8CjqMjENoVWVTWFd4rXbGxGtet82mMJySN61m9EPbY5VMYJu88oazagz4LJUMwWRRwLDhMTovyFiz9RJXjUJc",
  "key25": "5kc7QY66W86BhaQbrLzBS3cQsZ1LDtRyhdUxJfDCQL3iqWiY5hKDSQwzprZtkWTWreDYfFN5XMbSEAVZQhRhdPGS",
  "key26": "47kKP751V1qLRy6WwxL6HZ48nugKMQyReHmwUTw8gJo8JyoshBDJDsHYZZ3RLyywFZN8ePGJgXo36FT5YRdsn3k3",
  "key27": "4Cqto2teLbUmb8e8YFKyWnsPwd431BcFwsUq1pJEAQqKg892pEvNED7dsvk3v8APMbSBnuWoTYJRkUpBNST93pxp",
  "key28": "JGFWz1F8xWDoT9ypR41nfq2HDm4YMvFffP6KkAvkj2WpBsaAyPwufctTHLcoczUi2buP1EythTQWW5HkmqMnR93",
  "key29": "4YXkGv1owqY7cByw3d1eQxfJmHojmPFPHBZJnRUyWXb55NkkmFeCkU26eDm93URhDnuuJsd23LyKYacun9YnZhvm",
  "key30": "2joaLqyrg3zZJE2veEN6QiH4y5kGf2iw6UnRCqoyJVYzqP79P6ozDFjcpAK3Y86tEN6guUJoZ5Z5Jf3uH9NSa17S",
  "key31": "4SwfpJWAXG1Vm1HdH74xYY1M2oqCegPmno3UQTsFCHXtd9fYzCfU6fMaCuyxdZbpeyxacpp7vfSVR8gvbsTVskXW",
  "key32": "2LNz2aeFqcvhGWDMXap9xjTEPy8sW1DaiNg8GJjgrNY7ndN7mwhSnKiTfe2vVMQ2L7jN5T5KeGgncFsEuyQp3Kq1",
  "key33": "51FQ4DQaHZAWPhGevGcMSWXsAV14oB4n1XhiSNbePt2z36dGKWKadVfxmYCE7XnAuECQT3vFuJdGDDFpWuECZgSG"
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
