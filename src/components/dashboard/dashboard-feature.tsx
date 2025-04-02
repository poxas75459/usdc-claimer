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
    "51t44iVRaA3jgSYdKMQ3GqUvzuWt1rxtLWjxouoULauGM8x7aTYzUCGDo2RZfEGY4uu6BZz5WoAvgGLfpTkzs8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpUVXuvkeJhvUWeK886zb7VZ11PzvpbMTTXf8sVZmGBu1vtuu2UsVYFksyXqWuQRN5cG8t88bqzy7WqXWE62NJk",
  "key1": "jcfsBjnY7FMp37frUndMa9DovBnb4AnMNfF9cU5uT63xhxtqV2nGQWtM3n9N3mHP4YWy7tiVxWEs2JNXVtYJcfw",
  "key2": "5uuKfF48mteg5D9mKrTqd6zF4DZ88f7F3fAUEmrNELejBQmtLg49tAeM3uLMNPuncxygSpgaZ9GZ9vrrCk7YjjDq",
  "key3": "2TJ3Je1sKwV4CpatWtaLCFqS9WcUPFM7PTzPqxgMhrakB6EbHgRDRSLHXFh7EH6eQ6ZBmebPDbN8QMf2parRf1DW",
  "key4": "4odXTxPU45gJrsRGStP6mrkegHoLBn47c8vJPAEWTS9ci4oYvnVW8HZ2mNT7vitbtkTNjgD64yWH7vfKd3BQ96EM",
  "key5": "39D2uXucnadZj6CpMSzoQwxT6reLcng97HuMoQU9LbAotXZ6bWU7YmWvkgyMUKHoNxpZRZvVuUDyfj9feJwDSXBQ",
  "key6": "nneTYD2Z2Cwta7LcohBBMueprtc3hm5UogmwHrC44UzkWsAEanHDULV3XniDSZjX3wgoRFUx3ef1qKnA8DrFfVT",
  "key7": "SWossUSneHhKpF8GVtmVejhVsQdq9heBQPaxpWMJTNgpzmBw16F9G5pK4Sbz8wFXxe6qnRs5Vjiumima6yUB6Kp",
  "key8": "4bKbpZ3UQrv7qXdakhPX48s5xqpL7maUo4LmFb9di8qoiLCS2cUhgBcz5wdnKmg91SPCnRdvP9F1W5XuCbX7avG6",
  "key9": "37E2CcrMbeK8pHcX9vpRR2eaoEYhg9PaPKRsF35pLBtFd6h83CTRA26gSNL85D6uc4d4oNLUfeF5JPQ6mmfFc6AX",
  "key10": "3zzdFHqn7vo9UnoHEpZwRAuX6VyWJ6mD5EhveFLPbHhzhLBNMvQiS2LyaDg8vL2qJdZiQKcaYNMRWaVww73RnTC4",
  "key11": "FqrBG6YHbjaqJJ8eoRAceaB5fNv1WXmMXSuKC3dauqajiVv5UQNTFzka43DphCGoFkNgLaHDDwyeBu6kfKDUwQD",
  "key12": "655mvoQQ7H1gr4Z7vZxSTHpeL4Efixkq8MNjSwvwk3owXqWAFV9QBFMKTpgXCKDjopwXEvgty2SrU3iUXvwhwPZs",
  "key13": "52aFVtrequtGumitQacz2qb6jkEo2yZ2nZbMgQUMtWkR5tzvwAwy4ghWiByWTQfc3fEdg9cbetgZjKeQmsjVCZyB",
  "key14": "5FY21xJ7gj5DwdNexqyHrEnonF2zd8Cg3r3X4uLjwv8JtHnib4Uf7zgJUE7cff47wgL3A7reDvpQX7CeJZTvC3WJ",
  "key15": "2nBkQDpJ5NpwsAx8PmED364yh81vcyu3zpEhgBsbCandVT4ZazDyUFyXs8TDQth9yKL8dw4474UyD3sbPR2u1R9j",
  "key16": "3WJU9ssTnRoWzfGkpro1BfFxHaTekmvPNjuufdadDhvdQ1dhi93VNErYZoJhMBdRocMjPuFSdoCapuqBW3gAfc5o",
  "key17": "eQavsEHojS1EvcH4GBadYS3qLt453v1K4vuRtDG21Mf6ZQAjpMzPjSgsMzFKbWxCyTnwKyAh3ygcEAfKGafLZJn",
  "key18": "2dxTuhgH1JV1WbCgHoTnhipMqAtqkvuKnJHESzv1BmxxdgSwVgUhquK7S4Gsxji2yhMn8FMxMNR6jpWu17KJtFpK",
  "key19": "1DwMAZnCEHpHiZ4ju8yper1gPHyn1Lwf6x1xDrboVeQvmg2ts9o5ByBo35MjBeVZUhJA3Fo9heaV9XJAdZaG1Tv",
  "key20": "44PUnU6s6qtCQp76edgneh4nH5QnZxo37z5DDQ22FJ8yPYTSvHjJfzdkF2q67XQFHDLayz8HVjzeZ5kyD1N9BerC",
  "key21": "5YdF3T8cypYVUe1Ys1N7zLbwbweWn5kS85gw47MR55p7pBi4zN6w7KfDZbY8i6qAdTYeDbRKpbpfRfeq5AXzTD1a",
  "key22": "22M1a7JBhcJSN5aS5zgVwU9X2SL6rCDnYjvcfhiKXWehShRuziL4Nq9DbwSWaFCnBJkrXzwkeu72UWHsMivPYPhm",
  "key23": "4o2FYh4DKgusiLpJvv3jfYJDsxseCgVSv7HiXrEu45JmVDQe21bjMZPyHNBayHz8SV9KmrZgNigtw5ZMmdpcSvQC",
  "key24": "43gB91pmJQVDZ682jEKi62fkFApLgeoxC2XfbWkqZKEnoyuJzJ2PH2KkF2fXUY5aXcvrco2PJxwJuvL8UfPsCPw4",
  "key25": "4xC99cUk1F3oFoZRKw6wQneMYuPPVDP2zjW3etGFbX4Y7vBLXeochGkecXDg5DPbY6KrSuFBzbpo83S6e7UKEfJZ",
  "key26": "2VHqwoytBwoLWgT492JppEYBXnVMvExLm8vzPB6gjrvFK4wniophBzMsAESRtVTeRUkFRUUN3pQPpLfcuqFHtWRj",
  "key27": "ANvH6k1ucj7maQTbERn16Fkbzw4bqj8ysUybgq6hYTyK43KSZJchH1QSERNGS6WKegkz52JtgcwznRCk4ApU1MQ",
  "key28": "3aSZEZuP9xCPGTaeEpCvULTBDXHcq4kR4HKyFJRwpsMLBEXjdx52wktesRdnYRnHx7BiXtkQqj7CoZzphkgFxZEH",
  "key29": "57U9ioLCK3oE4tGEnZjW61864sCzgHHS3be2rEe6wvezFr29SfMuEtF6RY35AafVNRb6zTkMB2aDFQ6n4zroJJ9Z",
  "key30": "2yqTPHPtj84Duy9TnrEKm98WGevSR3m2SayNBn7bvwaBRSviEYT3VTr1zNbZWMECFw9indmGrXHkUYSCtRKWRdfY",
  "key31": "5gZLopMvM1YuwzjTeQjDVQAgYwX2WSSnGweKSDDg7Enyp3yLprvKPFsYKNwRTk8RJkBqyYv3JxJVz9QUgWxRe54f"
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
