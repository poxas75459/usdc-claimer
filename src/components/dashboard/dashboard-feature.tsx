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
    "3L5ysgwR4ZacbCidPfUjxbwEXuznEDKZxTXs5EGQXA39okGXxE9KNRjAJsbseXpsMrz6fdhkvhEWxJV5aMJE1QVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXZzLixoGgcZWnfqZPZQ6tbRSD8T5QAYtwWfKnvC9QecdDYSnK4tmrKiMcZtVQP6tSpa4MGfKf6pUp5WicYzJxS",
  "key1": "37wMWxnkwdXunuYN6A34rNRyqgsAbT5qzGUqkoS3RC6u8PiVu7PGVovyhK5Q4HBxBhkVHBLwdEjxGMosu1GsC9XJ",
  "key2": "35vsDQ28pHky1BqtgVeiv8DEJbG7rLnT5jZ58dAJXsiEoc8BG35U5k6vB4mAdDaYUn4S3f6caUboXo9cscgHuFQy",
  "key3": "4tUPwUMrxzPFrJ2yznz4eeAeko4m4bz3JjY9AScaRGRiWsJdQtJA3HJWnr8KXU4NSaWiR9NchGbJZH1oqdHkShLV",
  "key4": "2XqKLY3C7YcMCiDD2Yei5TmiFkNAiS9QfJohw3zQFDW42PZiCU66C9okM7sViVURP4XFRqHxGxH4vKbdrjhKKGzG",
  "key5": "5H7abw7uoLV5Z5YK2nfifW8TRCfa1877aB6FcFSXvYW3UHU2n25WdQXGJR56RdGtgRTWmb8c3ZMCj83ULK26qUhx",
  "key6": "5iGbNFtNmWhMSLnh3jBNXygUXS29jpH7zzZJX5fqaLWgw8kTo2KF255Snr2m9Jj4EDBAWToFB9esBWNhfY2BsjU8",
  "key7": "5PmvT1mK7J2HUh93ycXbB6FueufcAjrqNnbG484xQQ9KSWawcG7KMgzdqwMaEdns1aDjb9Aee3gZy1smSWWm5eZ7",
  "key8": "5HEPdPP9ANeCUFrAuWjvcSTiLmawqc7VVtk8DB2yZqgDMvXc7LDUAzewiaGXNnkn5EVqAKEkR5z7rpz1SLbxdwv1",
  "key9": "3SN1tnVdzgZ1opjtgZnyW6rNoBV8C2fsCXrF4KEZBZTs4Gmn13yXHR2SX4EFktdPExq7NgJheDm3GMRQ4XrMjhcr",
  "key10": "2Y5gUzRBF8yYcaMXFrGd8LJUyQ3icNFoEC2D6nDFteAazckAY9VwKVsftHgyuqoFEb9YkJ4WvDUN4qTKZTz4zMmv",
  "key11": "3LiiydA6fY7BS23YCz8Kmq5zLt3bYwPhcaUJEEMYuzjYF5tvFjyrToBxgiC3kybT7iV54w7FLuaWoN9omviNjZBo",
  "key12": "W1pExXru6ZQgHmpcPEKXaf7am23nDWULtcDsNGXopfcAphHNeQjDM8CnaJHCMf1c5CUeoPNGTqCG5oMJfvC1qxB",
  "key13": "4mC4qJ8JKYgntmUcNLhKBsQehLMsehvQ3Bk3ECAaQ9JUrpFUaAdFJwzdNJgT3fvikBQzsJ3ee2K6WJHQ1DfJK8Pf",
  "key14": "5Z4RpF4Qy51JU6zVebi1n5qVrusNru9S652fkmJU2zf6zvRVRtETMq1v5PCiyBPL2QZ8nxVcNi5ZEJsguDrn4GH3",
  "key15": "2tRZMXRqGvh6Uv8wAs2zgp3M57eNkTaCXHDqQPJrPhKV6tEZUkwEBvQ88ES6Ao9abVNohpanp7jNgZTvLBHjJU6i",
  "key16": "2Z6VnYZWpqbg66k4ch3MioKCuEHWB8HtxjtLLmnCdNDBJcZcBN7bBYfM8BWUtFhaAAK3xu2mjUgaZLgaicSsqULm",
  "key17": "2AU8cj3VneSDDQpf58eP6mn3RSTy5fpp4wJTeiZzQcDqy2offQnM4gaHBCzonibYPe6KrwBoPSQVsU8ZTQ8uoAxM",
  "key18": "3FFuPycd76dsuhgg7bo5xfowduCGzA5ruSMM75q7GYvCNHQWQpdf7GNPDdz7x8oZxP9s2Xzhv2Ko5KW4VGF2uDgG",
  "key19": "4H9EeadxrTQTh6jUyQbdGQSqGSHMjPZQCnAn2KRRCEdNYVps2knYdT6T53xkXvquCTuBhbWvM2FR3NmEU55Sqn2A",
  "key20": "5X8SWRc2uUaDvgXc1swud1NDz6Cjp21u17cdrCPJe2n5rEnYRZ4LXrjYFYm54c9jqzXqe3Pqw6psieBR2GtrfSyr",
  "key21": "3yGEnCrC95Swun5PoagEXABt4h38bouFg96U1h6ALXwcbS4kUEJ8V2RJNDzaQFAsz9AUZpc2aZFVZYDFqwFejLN",
  "key22": "53F6PsgkkimYQtAAokxvrfse6SiKKw5attZjY6EKucgd3k4vetnEiQcMFr9QPV6Q8JmtJvfqLdiY4uVx21qHyQxK",
  "key23": "5Ch58YCNNdpqcbosYHbqUty5BZo4uEX9kDp1AvkRv7Zcio17SKbt23UxHvJsoF9ytyWEvQvGKbGibeADzsGARBXs",
  "key24": "5nafCKd8rP99gFwu9G5Upjvc6PdHSxkYAeApjHSDmcFNpfkMmGeXgrULzrxDfNLP9Ja8peor5Hn6Nr1vppqpzY4R",
  "key25": "5TUMN3DyRSrbSM4CaEkAGFQaHzgcKN4osDmFD8tyyMGaJcA1WbWX7xRMJuZtfdpt59QvQefS5qFvykoo2q5c98eM"
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
