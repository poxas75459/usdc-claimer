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
    "5eYx91u5ZhQEZtKem2yYZNnHtAkGV7uabsvhnpfShRdGZe9TNuW9D2Lq4cVmB1rQ5X6enQcjSA638fgTWyx5w2R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Ud1rMnvTmPxYngvsEi6HFZygHCU9s8nqeFBb4tcmDnZYUioXJJ7HXxPHrxPYZRPKE8ZEs6qw6oKjMTgDjJU7XD",
  "key1": "5tJyhBNwKPvHbmts1ZSKCVtiY1bxMXf2yfAMzzHaVtEb7xQ3hVgEH7WjrKVkV7uv915SX4obB96hV1JfNdnicnpM",
  "key2": "4X3uBuGbzpKirCs8XChVM6VAygtnfCiM7t5QU4RNafuvL1izkzCKnWppvE4BXKxL2ASLbBFrcGXRwzdp8fJTJ52C",
  "key3": "2fBpwAfVFL9ARADdHzNSFXWg4YybAnSPeC9DeoD7ENMfd6r2FSZNAYfYW8iEpMkk1T2CuFJhwCYBY2oWfdx1192P",
  "key4": "19okVz1gUF5KgDZvMvvPbnw5UkewRdRVA1jQqdXzk3LhQqskuJfd1LVH7rk1JfeZTuUDZf7UxM4uoFpQoVa3Rid",
  "key5": "3SqieqSVBR9U1cqUj79brnh9qncDKMQ8MZdfrdrsPQXpVKKJwve2n9WKZXEtgacF72ay1jRqcY58NFgKqK8PAx3J",
  "key6": "2UndTWqPQhk2zvQ4YATva3u9Lk4y9JBiBo98EHoH3zsexJbqJwViFBEBa4HNp4fLCFtt8nPcFbcJZGEPwaaPCbSF",
  "key7": "3ZHFzq691RCwye3bQAkpo4nddtQA8VGFQpXF5Z3MJDUPuKoUKi1Pqzxn8rDTK7yPcTRAoRAZnrQNFUG8Dqoa9Hqi",
  "key8": "THqGdqARfMcs1XAQeLPkDvRfQC1J9zYn2QjPq7Jy7MveBV1KeYxN2o3SUVp6C26QFV2gYNyZFcSkNYgzPUe4AG9",
  "key9": "62DSQipVoRNDMSoB3uddDbLsXG63xG5Nu2yxpb8QA4CUg6QrycitKfMLkjy7zoSgnfbCpBWTcQwdTs6ygkAKwBHf",
  "key10": "58RDiLo5iyD5QGm6Q5LbgTN8ygnRQ4T4StXG3UX7zGk61MWsaMRDa8hXMHt6gVkSfzUGsKjQep8V2nJTFsa8NTaw",
  "key11": "62Lm9M3jwZcAiTJpN99qSrZHzkacV9EGQgVAK871hTi86qaMzC4pYoVgxXzVsg88AWrH9Cu4afJjk1Retzv9fiub",
  "key12": "5Pc27YeDJ6jjAYHk9YoaYnTJ3XdYtn8KPuQWkHTWsCfNg2mmrJJmj8ezxVuVwUcL1R8r9i9MEj94WwPKcReZ9h8z",
  "key13": "3Au1LL37KBPQGcVhFDgvuhW1KZv5xTK6ZS6s4m2BMPsNzwWDi77MPnhUneuVxhz1Xp7oHuh8yxXGCcBsxz1XR4b4",
  "key14": "4BttveGqjWrEgUSQW7zctEity9cf79tHSzkPvWyV6rr7LSKdLhiFBUnzMXHQLoegb6GTSemZvf4H2jdjyDhtokgt",
  "key15": "4cWeh5Tr67TLMrWU9BekHZMmhVJPcNmumvrorozkFVt28bVokbXDmpb8UgLEmbZPiwYbBojpEsPy6fNiJJ3ixbTd",
  "key16": "5z8zmJJZfciMFgKzEjukRrdzPBcVh58EKPjpYNAqopTBxJDBwwxon45qnucQYoFgeTWFYBeS4vUUxXwgQHTzy7uR",
  "key17": "5bwNDYbktfbScZaBBQnh87pJVoKsd2XUQL6GWLWitMy8Av8gjApgRz4NbHGheQ6VEVNGimgieNjAbu8BQ6oJne7J",
  "key18": "2gxR4aWfqm6RwregFXqwoY1VXC3zMX5vXnuNX7xGaQ2osaKwPMTKpAG7HKqavDNun1YfQgVzLAYw2SvMkAtSoNbb",
  "key19": "EwqggdZKQurLXEWhdMYQwEVLr7mUtZVkRaTF3R4JgrTNvYMQSdkX3qLqRLHHpXS9MaSqmMB7LTrAujsjY59poUZ",
  "key20": "62aWSL1U4bDDWHWFJpkUXRmW798viJ9ABQL73MTZVuW5RUB7Q41JE4CJwrevV4TtG5KWimWH88xdG8AxQ7DxcUYP",
  "key21": "4uiLrShQcXHjBjWtWWE6etnijYP733RQ5FeCxVBPko4JgE4EXAWjAJhihZpPdoq655rGXEC3AMSNnUBC6yU1Zf4u",
  "key22": "4e21aFKuTqPE6FVirwWi4pEDsBSpyh765sd4mzXSo1oF4meu8nnHuSaBdYCtMyK74kqWp6xd48dy4betjo3wqRfw",
  "key23": "2RmKGHBfsw6VuMmBnRyUFT43ssvFAyvYyGfvFb8o3ofgHozAqyuJH4PsJPXyYdD8QFcpu7bkfcDyTJU3ErXbKFP",
  "key24": "2k27X3iwu3gFtxNkLBy9Veam8ja2RhUakyY2u8Kck16NPQ4fdAXcDWvjS4KaNNK2FxaDjm4zUcJ98qRVvV59X8RD",
  "key25": "4VS9ac5a1K1UHxRM3UhBQ1wZoq5WhFrXWKNgN26C1Q7tJZ6A1mipJsLFherpmio5UWg9oDVBB7Ha9JbKqV5M7Sw3",
  "key26": "27GMbYV9SS9CAs6J4E8ozJFSqJKGrV28vBPoHsPbPUc6gLe9ahVwvbXHVQ5EbPdXN5EAGeHJJAK2UcekEz9Avmx4",
  "key27": "48iKnHQD2Bsz28QttFgNMmmJALpgtTgAqQsmoWZTZxpxzu7JMjrTipDJkmKziVeJnvnnScYsFuYjxrswHgxv4NgD"
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
