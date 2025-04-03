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
    "g8F5TCzYeY61pooLbGthJnA2Vn8JkguonhhxzkkpfxULjCRpV5dChXbwB4D84Fkdm3WvF3KZStdLBK2zPfGqYZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aL3M8etFQuJv2PNygHEVxkwD98vXWiN4A9mr2ZBwLpPAyNgUfrofDfZipRLuK8UfjVeNJkwoA1mo4tLBpu6DN95",
  "key1": "5rdiPYyd1XxRCsdB35H7c8YRzZkWitusW1vba9DcNc98xaqCtkkFbuCR4xCRz8avjQVyERiwh79J3iyueLRSt6fC",
  "key2": "3FH2R7ySbwj3ihvzbTjn34feieEbfYZsKKmnyMFwUH7LHMyChxycBBhv2QYbBH4brZThi7bjNE2cUuYSyrn2Qxz3",
  "key3": "4t2TYC12U4uzTC2FgCMtSqsAQ9N4V2zv52wGHF6u2JNBiXj56Bxbg2We2HJKABd8WKevhmyLoX6GCiHMSBmUWiEn",
  "key4": "3gdWVcLmfEHYYKXR5P41j3ModuSuyNQ4N2dJhngN27HcX9TNtGQRk1jR4cLXBRrVFAKXryfUb4FDf5t5yUT1Nehy",
  "key5": "5BkbiCrzpsVKBx9DN8JZ1muiYwdFPJdSn2tWtfKAe7zWJchJDvNN2JdgyasuH29EjRt64mMHaKPCLu9ihvBz573Z",
  "key6": "2jDv6pffTeKThN8gtRvzdQAe5qrXmQnNzV5mSP7ZQTDiPHDrDr4zDdUsKsRUSQx4Av6GsXVPD9M4qK1CUHQJZNjJ",
  "key7": "3VuxLxrMbaDpHTqQUWxkZwrNGSpFQEEnz8XhSC26HsnmhG7QRCsP5cNKEdwhvtLfYE8HkEF31KLXBiNRjJCceHur",
  "key8": "2rQbgA1MQU9UTgmN4ASowBdbpVy6jiZAWpn4e2MxYtNKDGd4HLQ4sgNtcbGxHPcqQYTzeBbdzwLJCuiedXndjRkW",
  "key9": "3NGXD2tnag3wR6k8e7DB1dwmAR88GNivU7nmPXTDL3bb44nY4Xm9J5Jvy4prAdkL2JwQd9otGjhbJvEq96HbvabK",
  "key10": "5XuA6BUDoCwwLFXAHcwqGmrR8uKYjJUPfSBpVAzSia5tp64MsmxQm37GuQWHe5wLxjJAFhprpJxak4VNbY2g7KB7",
  "key11": "4gDAhbxVH7PZmkAdWqG8w7igs2V91RkhFvv9hMSsDTrBBKsRwvYp5oLuSPaT8GoWgVtPXZ34omYGNiJz5zUSp1h2",
  "key12": "2j6giaGJgbRb7CWBajP4Gpdr2q3zvhDnJyp2zwG3m5oCwYaPK9x9DCGWC7nwrdLLzFJ9nL44CKz5Xc3DTr4TC9qj",
  "key13": "sMeGxkUuYKGwtsRKc8HPMAcvXbLvtyTpkS8UUKxHGARbYVTpcfNfkV3ESEr2ofFKC4APfAYL7QeCMSMkcvvkvSY",
  "key14": "3jiSsQPzWYHPZkkLkdsyCri22QMMTEn3us1Dgj2taoxJMTQ8TDEcKKQuTXoCysrmUQJBHGjk8ckaTmm95nbf1ihq",
  "key15": "3jHABbzDS1ttdRGdVcakQ18SrcivCwMCGkHcVV8QRV5JXoDCLCeodmHgCMQjsKcFGFjxgRMLBZc6Hzdi7yVjumSk",
  "key16": "4hL5cawqHiQdLS9yH2f6apAS91adHov1jQ3q2sHqvMs8tuj1Kq2wJKvRmHyRkXaU3jrSRAzUGwccy894UqK356Ld",
  "key17": "3jRujYvQcU21gqshKPQFy3tYfkjw15x5q1A6RcfTrLJyDD6wYRXryxXH9tdkuubUAZSZE1zSs4mSC22i8wgNWpCG",
  "key18": "32tZEs2V9nKHQ1RVWgaq2tdMPD9ma93nijuW35eBeyRkxptzP7cZpRbpSnLvu6txHNsjXC8EjsHxzgV4sWKoxgk9",
  "key19": "39Bo6r5gBQoxzBHQakHMpNVZfzs6WprjphKwbSQEniNsdUpfP3RL88BEvXg2sRAVXvR2wRLMQBm1AJbmy9YvRpUs",
  "key20": "2isPwAGyLkuVJbSUFw56ivvqpxmYThFh8CHrs7iMphePh6ZfGE7H2ffSAzpPQMtsVPaLVWUV3pyqZDM3oq56EUqk",
  "key21": "641oWawRTndJbvhQcxawCt6w5YzLuhMds6vUEDCycrdmWACF4pi6GsZZF2JzojEgGDPRD2Y1yskH6zqtxMduBio3",
  "key22": "24pVTZDc8HNYNz98DT3vr7ZkJzC7mZXTCW3qR7bEi2KZ1wcGGvijuySRA9LEagcKFerqUia361N2oFgNAppQ57oc",
  "key23": "4bBBakd9Kh23WZsGq9MgRbUtUQmfe9QgcmwZ5PQza2kKYGNXDpRiHeAWG9D7fdJkvhMs11CqhpPhg59bfBnkCJhs",
  "key24": "6253rQLa9qDTcmRPBGGiuYopPLDKorDMSmCroYfUbmMo1purG671szisFgYBfFHoCv25aQ6HiXrstQnhZPrtj6uu",
  "key25": "2R9DqbRCQUDrfWWmzUzgbqsUy1QEm6DaGZdjnMF4rXPwrf7YAWE3AaMhnEiDiGFJMMCbHMWyFxDSRGDE1CF5U6D6",
  "key26": "5SuHrArG4X5VsKZNp7avAuqL4GHWwPWNS2rfJ6DXrc4CCN7VA4A5S9MuRMQLfL75fEMwR2vsofepMBw5U4GFwqyr",
  "key27": "39HEtrAdR6cdA6v7Uhmby3WPpC9AzqcmpSzr9PdyF6rhoku46V7J5fqixZg3J59sr7QqpCzQdF44BMDncsMNxs6t",
  "key28": "2LM9jBRaDTsojPcoRjxGF78e8A7uDizT4VsnquGkJHbABP5vwHe8xasQA87WpXc5dxnL7f9ddFnFnCuf2ctsYeQy",
  "key29": "3owJeFDAXuzdkis25JKigVWGp4Nu75QaQagp37LcWbHNwHFwZzmsbA2X5hZzubrPcRBbY1fv69NkTLKg5Wf6msvj",
  "key30": "3eGW1eyTb1TDoQub84fBgy4BWLkFNUrFmKrKWzhbeavYhQxTVTe2dUqYBwA2YuhrJwu3VDQUg2cLwVzKJZYRhUVR",
  "key31": "9fHUSi5144fYzKMaXmfZk7j1chAFi6aGufZaP3xDCWSZ8QXduKxzLb1TshhNqGWDR4LrLGURp4Dw8go21CDfD9n",
  "key32": "37YwkVNod4X7d26FWGmkURqJ7pAPepHKuJfwNFbBHNauccX9AXBSrQn4geVxy8pjGr96rEmK7S5g5hk7GuzQSB2p",
  "key33": "3RKpnfpod86UaWCJd2HTKFDnFFGG2UJsHi2Txowj9WAwDYrit9zQRExv1iGTg1qXnVMojmj1PFEZoQSFCyWFEWHH",
  "key34": "3Vg36eHgD6wGa7r6DG7pvhk8PdGWrNkA6D3bGj6MZPmasnhW1S41pd8qNKumUqYwoAZHA5Rf7YVRyTYV6i92K8KQ"
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
