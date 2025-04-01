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
    "2EKau7sYYeF44P2QskmWUZnERucnGMXCBfpcg9k34EJdA9i9y7cSNBEPPw1mE4DHm7zijPaCFK8JmewqeziXWHUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YJ5tE36CHYbAH62uE7D426j8praQ6vdogrGr25bcRa37RRi1J3SSitHwd1HnJF3Fz5K1CHtTX9G6ARbKiP5Cb2X",
  "key1": "2WpP5eyk5mp5nKobxdBPYVNs3xoQVpaRjHb7NbHrr48Qt5frwvSx2wekLrLnxceqpyYM3dN9W8pkuy7zF3B3XQoz",
  "key2": "Rx3HiDznMpyMn9tjJyYvM54CCzFfiayHDqbss45KPPZUR5S7WtCKofWZ44YMfeZrAC6eo3GjpUgYwsyvqYHJkLQ",
  "key3": "4XpufzpS285KZWKwKJzKqLZdiB7txW6FtRGAtcRMMtZD8ozwHs4R83jkYWHbsE3hXPhxX6kcpciK8XaYwCStDX4P",
  "key4": "2pQ8cnbYc1nRsDMxmz1SpMeKPMQeZDHVJPQRYRP7pR2hcNeYNiWjtkjKUKpFq4VAghdNZcLK4Rqah3aR5E3sjpXn",
  "key5": "xF2Uo7qTrg3Vf36zC88znGBiz4h34CvZHZXD2KipsFi1Rd5gwpMUEYt46H8ACVUnKjh416YpRr9XKyQ7r4j8sTy",
  "key6": "3MumAWJSj9rKnDHt17GJFVBKpcmT5XwqRioYNtPU6k63SyqHb5H4BWXx98Gdqjspzvc6R3M9hbXCUi98JsRbZ9qg",
  "key7": "5RFhUGeAUMjTtxwGEEs78z6ZECyjxwM2TBL2SxDAGP9jH5CJrScZdAy1sCzNTYePZTYLeqCEtJFtAAGa3fKJWSNB",
  "key8": "2XKDw8xFrysdA8hUE9CCyFxG5FLBvk7cHnNUVBM3SwjvNhSa7hoQse14pHA9mNm6h6HQJVcZw6EbFyk8yTWVtkEn",
  "key9": "3FKsXLSp4B6qiYgD5amrTFTcNWZLAAqhi2EL6fkW5KKyo1gX4BAi5drGxkT6nMrmAF1Ey7CXYzeg3mhS2ZFJRb6t",
  "key10": "5rXnR6kYBwCwqa6g1z5559yxMrwph6xatGsgCDpfvVHqTqakb5wB4Fjmxsnsw9JwXEQtMUSDqUSaqZFbFZqZuz8L",
  "key11": "5xQMCtf6xQgG6DAAEhDFnoCGTVMAQenF8UCqhtxPPjt6gPNgivwgYo8ngFXv8C6d67Ak5QJU9tUJjY5rYmMWwczq",
  "key12": "33cFznEfngwKkDrTAaz99MXqcxiqLiXzuZbJ7vNUbGJvtEfan3qDREMQTzi7fE3F62GM4vcaqfaqa4rXpYrN3RXx",
  "key13": "3WFHw61agqFpode6S8E7MYoPCxwRPFKrdKw3Rchro2fsqJFgJB64t8Twpkwn7ALg6vmi7ak7WhwBY7F6mUoGfjaL",
  "key14": "2kfsnHRMMdmREH5aRkBaTSED99LRTngrehyQNQKjD4ebvY9s3WmrzCk7QnTvChvDau4NAxYotr53KBafSCoJQdzL",
  "key15": "3LxudmkhhY7AjEVFJ8dsDqisPjBfeTEheYZ6YNVeffE6jDzvZZDB5Zmy8ghw6jB9ts7hpFiHEpXuUemAzfSrvZXQ",
  "key16": "LgMmUyabyisLsVJ4pKm8PZqBFfMEogoguKmqJugr9W7ZYihS27GiQrbA9nM8YrGMyDnwJ2RmTBQ1h1ByxjKpYCy",
  "key17": "3yMHFtyf73HVSCjWUajxscmzjCTLToVRPkx1hSZwe64MiGp6PL4XrWNjubWMiWfn6Tcm7gfiVuRkAtCUmVkbwq3A",
  "key18": "627vzENJPj1CCEPz25ojDUVzi3yjvKpBYmWBjP3CMJTT235ya2ApDy4uq6dJZXGVVDvjfL7vE5cqmaTWL3RBaKBd",
  "key19": "3SjniCc6bfUc8hbNBo6jNMQVAefJSd6i1cfhDDyEtP7UuKaT33hEvZ3CbBA6owKCcJASThXr2ts9PK7dBwroahiu",
  "key20": "5CuEZZdxxixFkGgJkUqGntE1zFGHfnN3Zryoqs6c9V9ieGHwi7KUBV7Sxz7QFSgCuMBeJ5HAA1SZzMtNxD7w5fSL",
  "key21": "2F8vgH4Ryf3jDtrRLm4dX8rMvo5japYFdb28XQWzca9niZoBKUUBHF6SvTZfvKnViUapQd9zKigTfKQdaw81JpFe",
  "key22": "5B3itcXwHcwMSxpCsvGbJKPgPgTKkNWgogqgAVzuosLJedMqn5ar56HvpssEXo7Sobik2qqoRJpRdi14FPMrgbN3",
  "key23": "3xtQVqnC2Zs5UbSM2d665mtGhg15i6Wozcurn3Sh2GsA7z6KSspuKhZ2AeX7MhLk8CQmXqDHMZSkkhYewAjepD91",
  "key24": "4KhEFWGDiTTvuHMTCSpBQyv6P7dFTtdi7d3t8Mvy26SsxLtzjE19nQDNGnbFJvy1mT4LvkReH7CwF62jDXW6GuoF",
  "key25": "4opeSx2Qxj4WS6PKUvhN2FcXeaksP7dL6YnH28LyEZh2SiqHMQdZFHRpJRoLF9zsfBmvoE8aK3b6cXgMq6dULvDe",
  "key26": "5FPCgEbT2fWWFRofvWkve81V19ohmgtEU9bGSJwk7KE6xPAMGRFzZvhuCB5JwnuoFYgfpPWkAYBMRF9rKQgNqHLU",
  "key27": "DMEYyNMZRn3ZE13GijkLG2zFouVSeaggJgCug9axMQpuu8Vgr5EFwNFNBB9fy5q5WtGLZot5Yhh3YqPKYuz7Hui",
  "key28": "3KJSa4WnHJYpRgJgcuL8MhPqCXMCp2XB4x2j4CJfM2HUV1P3ArfrUFycRQbePJzrcwZUAdafWDr29MeWabonrxGd",
  "key29": "3W68jn2iMWJiibLQXXXyZXQT9XZg3eqiDxmUVNS7o1qs3RS2iKhV5WzsDANwpNZRZauzn7VPmYXiDmbEPugPit8o",
  "key30": "BMDaQCR3k9BzSzzzdwuJFY5crVUGs69cGDLHSYFBNXjszhWa3sncTySc6s38uciuUL6NtKiykEo9McEMFx9iKz7",
  "key31": "5tvdJRjKsGMtgLoMVaafHZk87BEpVAdQkfpzHBk5a4Q4v8zDSpBG66LZncxFK2Q7jKfNy23wSJ9rZebUMY2znJ6w",
  "key32": "zaUZKAToyEFVz5qua8qiXSFzrxBCvrKGPSPqczycW2PYcWr3eB7vsRHsNau56dQnhsKDPb2unwznnDx6aoQBbha"
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
