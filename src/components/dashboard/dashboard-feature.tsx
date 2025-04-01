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
    "27CpBsWVXLMFUGPvuEjqSiLbNNp2zZhRRtPTmdyBpg6t6WUxs6gLoJ1PKuk8N42SqcTPFSonQKiq5neNSPWt2bAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSrCJGw32edhKVkoEt7gj6EkxT9fDYyk4qXzX6FCqhuYNXHsascFo6dJfHPkPKdRLdfXsbuGDFUWBsdzkZhnHYM",
  "key1": "31zebrT7s2odHKs3u8uYr6bgyvKkDcaRUg5FJJmGeBmZAUgWCcJwop6MBWPgkwo6YMsqbS31RHcsvMVCxTqRSHqT",
  "key2": "irQubuqaWhJogHktd7odSFwfZCiUTeZyQVJKd7rCp9xVpN1x6cKjTaNoEjm8hQL6h2Ea9QV4TLMFMTFszvrh2QU",
  "key3": "3fnvNHzKM2BLbdeD68uz4yGEP3AuBD6Pj7nCemEtvHcYjjWV8cP8aqfSZcsCpHFQnKqqCXd8Z3HWJiWPiPupbo5",
  "key4": "HEWqUe3Q2w6gdE5qJkCoScDrD4qykYmKbUkW73tP9KpCu3CP66tS1P5tL6roPiK8mqE6skAmNaNuXaHr9YUh9A3",
  "key5": "5no8dfMt6wepRhzaQ6ewkjRFje3m6ZaUpNBnzyhKT1AXUCGiEjAfDDcUSgxa2788VSvX1pTmiWDMoWKcJZUVeM96",
  "key6": "38kqbkzGu5uCvXLVHbKbeJbj3JznMTw65CqW7iugVyDoPFXbqtWL5RNEma5zhh8XWjG182V5iQbsmSfsaPBaAFeR",
  "key7": "5r4rxczuzMgY1nQJ2go2AT7dxRwJ79Y7mEof7gjkhowXNk8uJ7kXy7ci7NyahP4hHnfqiLRpdvXg7bFjqWcosoEG",
  "key8": "3EZDbX4Q7hwKp5NcE2acEJBZHjH7RkXcwiQRbgYxFGDQVSnx6uDCJWuESMN8AQWrVnqGaAnyqhwTxDJXvQB1D8Se",
  "key9": "56EDiBgjTdJmdsGnHicqhGnfmVZ3xoXyBJvmDq3UAo7u3XZaRMbMy8FaQKDJ5u83D2LvHS8kDU8sSZZGVXEcCw4y",
  "key10": "2xZXKujELkhY6xeqZUodeYJsZfehXzU4yuEqmejBZYkCG8Kd1VMRfpoNAgFjYjb7ZPPFh8u8NzQbTvyHssVf97g4",
  "key11": "44ZLxffwaAopTDDjWUdRTmQWiS2DKg8dvaGUKjpb2omM3KDpM4uJt9RWQBT8Rw3ABwe4aY8YHhB2SmP1qzKDE3U9",
  "key12": "5mCJ4ANeYNjws7emkvLnUP9qMSWEdFQz6CvzfwL9AqtqUsRzCP8SRXmNgs6Qa3rq5ZF9YzWsFehFbDhsMTibQ451",
  "key13": "2uB5aBCMf86cRLA3BytHV3Gj5sD6BQ4B8WsxbjySWSkRfibgt4Hg9aiVuYnJ7Jyqjat6swatU4B3P3TCGRnTyG2E",
  "key14": "UAkgrUvR8861VyALPdhkPhioc4BkExEnX67yPz5yPrBjUNB26i1EB1z884XARq25xdcpfrcQuRX2UWdpZkfnZ8T",
  "key15": "3Nsxk87SAfu2cPfWm4LgeEs91mXeRrtvaFtt9ztMWoW8NRMzFdLKmBne9soyCkeiUSsPhSqzTxrLoxxJRebWeZCC",
  "key16": "3VFBHHAAqVujGi8d93PqAQsL8ew7aaNujCR8s9G8ApRsQWA718P55vYXvfMKfRTatJ7oBXdbGqsGsvRr2c77Qkjk",
  "key17": "2kMarZ6yvawu9Xxdc9Gra8F4PntR8ucuFvyc5nK8SNmDrRqkarEYsAjkDs9R44NoG2Gcbjn46mkmCpXRbw4zbRk",
  "key18": "3vRnHfzuxL85TjpWYJYMP2LyQvxnaQoY6eYipcZFrwRP6wJh1ScpnkjtQtbg5R3p1nkGUkr6X4EntKgLuJxGfNj",
  "key19": "2ZxcPUfwWGoj5ST5mo2fdjvqeJyh676LwvJv1Axqoy1jeDDwBKUzbzxHHcmuHvE1nmcPKB3CQ6E3N3kP8CQPgtuy",
  "key20": "3wgiJg92cz4oW4xDpPHzDNTDub1cdyxoRjHFJMEbGyAa1d596BMFzwnbqDG9x9gdP4Q7RwWmovqENxcQVNikchNy",
  "key21": "3HQfgmCtAkz79P9JsEhC7CeaZmqaasAYU8QM6i21Kz6RVUNFMMnuZwNK2gwerG7ipHdCX4PDFNbfvJTEdcXhQDpK",
  "key22": "2Xy1db3rqKTLEZMX9xdKj4LxgJdix6KXbdGx1h5Ps9NKmV4a3fijLEVjLeJsHf6ebuTVPccC7RS7h3RXZiaSRrVm",
  "key23": "2TXNNcwKDJ1X3EYRR3nEW2BusLFUNWpEgFW7yDrAtE4MTfHh4ihqEHrcVmVKkgqXiqudqdth2YbBmm2BmHoUrVbg",
  "key24": "52Fxg7DHvypa3cegbN4L2hi53G9iHfPt2e7ehxvW8cRrEESGUgGr8XU6xnXnusX55pYo55Z55cKiTE9yc197siLR",
  "key25": "4Fck27FwjapQCH8tqSXP4UE1aYFM43Vntb13RHgDGGonAjPJwhbb4ADV489t5ucS74HS4wQiGxfSvH7ie47p77VG",
  "key26": "5NnjJeLBC6aPyLDdxzf8xToFguaYMsmUDKUvgzXE9hSTVmxC4phNbNMEa7T8jRY9i2dK3RLUMkRgUc3rsnJy7e4q",
  "key27": "zBRvkC9UohGpGnmqDTGGB6hUxpVXGdnsme4bZ6vdHh66YXRcvUuLzX1x3DkrCZh1bh7EKv1sBtfDpjTo3B11E2w",
  "key28": "GRHepnHRcBPNxSPKXH4zbjc7mHnp6hySeM6G935Veh5fio7p6GEw17UZAGEYbTHuRMJUGKtz3o3eACyyKLp3Jb9",
  "key29": "3xRZ6Ca7FvEjs6Y1JqyjABjAThB5qb3nCYXUXRudDqgYehAW337M41SjP15CL1kQjjmMtzrSnEuqq42RxNYhh5ud",
  "key30": "3wCoLhptRDw84ZB9iAp6bV5ypq2tSy296gD6BFtEW5VmavagrmGZYptSKxuUGhy3jcB4DwfG43tPUsiuEykZHg66",
  "key31": "5opRkTBTM1h3LxcD97XdKBHemWffFcocvbWyeggBc57ugELu27cNEW7zJYoNxK3hw1XCGBoVu8mA4RJKjCtgAgdd",
  "key32": "2WCn9Ng6H1MrdgWTEMNtAvS7N9N9eAaAmre4Qs1au41tpTeLi3zXN1QcEqDfafXRQEr2RCaWkYVzffCaG8USESXs",
  "key33": "naVW7gYGkL64FnW25adHfKNC6mXW13Fq7yVokGd7YR5JckU9kTCAS5FXGuVkqk8szYejiLBvSTDNki6ppm8iJvY",
  "key34": "4d3EMd3MkWswe58T9noUSVH8mF7Uk2pyc2vC4mj24x3GQQA4ZM9nPELZ1Rwrsn9WSm4VqNTmpdNNKFtm8JKFiQMt",
  "key35": "2xcek8yqomJFjGDMTUZtgq6FfwDsfeFxMC3EP8qRTx5CbGhqeXdo87u1UmgPmqFSsfU5iJe9uhQ2rKaeGtULZKya",
  "key36": "4FiQMxbRpKQHt7C6Zj7KHLjRPZvP9N7xyMju1uARQpJFqRZ9Kdfqban7k4g6Rs5DJfz5xUjwKWzTkiCZPRVBjCFi",
  "key37": "2RXJ8ZNoAaQNnvCb1EpnRZEvUwvRfE6dNq7yjDm45YcGrYmbkHBnrN6zh8Ndqf9fniKYKFPArdWTtnXevdgDy4Nw",
  "key38": "5oyiKmR9efG3ggqfa8w66cCCokbUfTE1ju6GkawKcdoKqs4Ms5czSzGerrTUYJDanbPKTpHn8CXzVgMx8nxSNjB5",
  "key39": "2QrM7wNhvfNwjn8HvK49eCogW2Y7fajoPuGDK7mYBZpaYyouHZfKMJ1TA5yguiyKtefxvT2coBFggG2sXMWq7BPp",
  "key40": "3127gtAbGUMuAzdevXgGWtY84cogs3cRA8Dia9v7UsQEnQEYYFBgPddDiQDSzX2oSTNtj6QKYRdMHXoqMGsh4xuN",
  "key41": "2AgrJ8rxToRAYmsMcsqXaGjqfPZr88bAwfMhseATPW1AYwTevkj8TdVAxsmep15AoetE4x9ZgfK7y2KzCey7X6Cm",
  "key42": "5ByGUGy66FYHaqfNmypCizvGetJzoJLdD1FyuHumCkHuTv8zFfBNny4Buhn9jnLH39W493Z3F1c2vQLKzmNp6Hp7"
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
