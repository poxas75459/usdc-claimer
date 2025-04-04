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
    "3SHDb2cgKUKYzDvxBtac1VUgbCUwVFuKNrPhPA6osvzZuLWrCnHuvWp9joLer7tf5FFfne8i3dTe9q4mqqSvbrZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3saT4MzWfMt3r4uEojnB2xop89XWitsgTTcoLbPqVuAgxwqPNBmyaxFpWBXo9qCMm1XBxLgBBs72daduJbJUyPu7",
  "key1": "28qjZsGZdVTqfcccu7DVJkj8wPvmaJgTqdyrSE54vjRDHDQpnpdehhywq5RhugHnEMh6KzmvQw4HDyBULZadTEES",
  "key2": "43imJ9SYx7R8xzNFBVHjkVmJw86W3h84C8qfsAV58qLFxGUFkajzY6phoT18c8VUy6tJ2zRwkCFQSkYHs3jZ8Kxy",
  "key3": "3R9BGZBiHQni5fc1jZVx2i73pY3QbHbr5E6WEFZgtGjg1eZV5VDuV3sbcFuwmznHZygxq9j8FPmL5nc5ZPDNaUNi",
  "key4": "5suob9jBquV454BuKWPmZvm571FgoeFxeZnzqfyWPiKb12TZiih3448ucBpnf1wkKVoxoBbfWb64DQn6kMhFUVYT",
  "key5": "5KZdHJdNwWFVUWWuyE92oRCSPT4NoS4wAGCbCJy3jeRFvwMsNFGKBCGhtZwK25NHUgT7GxivyFhPkih4C7BuMTPN",
  "key6": "4bckPP8oyLZUbHCpfQAtbRM7qHFqNWPuHyZbosrFDNuM1REiFprjEgUcKG2uJ2FaT2Q8qtSLmBiUYHSk1ksGEWac",
  "key7": "35h7CcqYRMzqr5f2RRM7k8YA3yzfiBNaGBpzJNKwsomNE9gfLNe2sCDTLSQSTjepekniqQaHcjovRxcC5iTMFRAT",
  "key8": "2MUcGSffe3HatnseBT9KQD3UNR9aCS4N9KgCumAyrjMQKbkuDXkPAwDcQ2ZYtaKCeAbSmtxr9agKxP6iFHx4EXip",
  "key9": "4AJkw85Rir88sVt5RdHXysD7FCbfjnGAQkCWGSQa8k7YKzSqnoFF32poMPgT1anUJpRd94cqEsZ2TqyEcjjkAKU7",
  "key10": "4dKKbqufjzs6gJJGo48TXxSeFTSMg7qCFfTds9hFStssRETZuU25sHBQpw1MoJRY8bWgkeRoCUV43bbHuDRPUZVo",
  "key11": "2dcce5y3QUxJTn9U1jkhztbY4zjuwmNtRPBrn5rZnBm7SBbq7JYDRHXTVR8M6qHESMbJtWMA3F3jXm5UEBi1hcmo",
  "key12": "5fDwd9iVNM7SZq8Sq5mbWgLgfBLXKNLW7butuViVayy9EkYCS7A8EgUdxkm2z6nwtMLeR7bBxztrYGKBXyyi5dzv",
  "key13": "27bbhCjaTeujeBhEu7tunVFiUvJ85EoEtgkFAptZVZ6XEoV9HdEbywf5YTCNLbyDuVPzRYybC3aMaFBD8BsQaQxo",
  "key14": "4fZDLy1x4fK1X78g4mtbFQV7XhEq321rQkrUnwWUgpD3C6N1HjqRsiq1ZvoemtwgG5tygimVJ7hiXzTYAs2svcLm",
  "key15": "31bgwRwmJs5Uk8uGVG43moBRT48gimVYopjVwzbgjSPcSFXkfWsjT2LT3YgXA7NmgrXF7kXNkearDjNgLD4EpT7e",
  "key16": "4e7x3xG1JN4EEpApPNGr8smqoFYJ5vPFTtkg7764k94aHHCjcL5fLw9KL9SPAVV6iUiuHBkmNLG32LLwfMxxhyB8",
  "key17": "64Um5gh24PbkDzsg9ksq17J9f75De62Bswjx2VzwScK7oENVYKrQsfevoaNTByKZYpSiV4zPePDdx1yrBygVNiju",
  "key18": "5Xm8HicDa8Bo8tR4DQdZH72ph1Ffzqf1xi7AjhTyEdJPZDjZZV9eXyt7kkMKmjamvkMGUNNujxUho1YL8mUBKYbP",
  "key19": "4YKMF8HJYWkBDfeqm2qLgHPpH9hnLRDNuUyKT355BMB5gaftxQLKkDDTYWFCVnFkpo42YWtLA4F1jxmjiEcM5J52",
  "key20": "2RBjHXPXYoikdzQMQ8y6fsi1FKYyXgHxkNJvYy6h8P2FSgFLcRazhRAWMEiWm9jkShEo1HRdpp5uR8M6S2goZ3A8",
  "key21": "VEqdn4ZjKHZMXk3YVtJEZuGJGDea3zvZRpgfzVixKhb9JoEbcMDReDY9p4TNPv5iDgH4kkQuD3Swg1sbDmRRv8P",
  "key22": "4xqjLPCwGy3Um6YzeQRBb37EN5EVm9M7fuYSgU5BkVpduhnnTQcNzNcEuuKAwSJime6NcLY9kut6BXhucXbc9n9A",
  "key23": "Mr4LyuBHRrqnRqJmwT5xRF15RqCrxjkTk63EeMKbA3KVhDBdvH4AbhDVWYfvPokQGmoLqxgNqihaNUb8XzzwEkw",
  "key24": "3U8eWzKj2NR29QAPN3YKABJgQtJs9EFWr9iJRssBqFUAK8Vy73cqixLziehWCJQ5teoq6q9adevQe6z5TzD3pyda",
  "key25": "4ktXoixnC5cVcX12xqD9hMLkBxLrVTFDRkdzGKHpeeCNVkfY458VRgfBBCjDhFwHUNnXcNeqmcxrDguBLcrEnvPv",
  "key26": "5vDBgvZsY3GmHsE4iSvCTMku6GnPBjMyqHrhbmTSrgVALkNE2pnA2vnfh2MRFRfiebFaUmrfeBdmcSGZ5UqY2gpH",
  "key27": "63Unqn3cjGdd6qh1oz2MWQeYq8HVbaJ2TM3W19cvf3BezNcdb7is14aaqTpEazFvyRZ2p68dm9SbYDUMZfUeJLWd",
  "key28": "6fb2gzPqr2teS4KuPmCXvg7Z8w2P9qgMHFCeRckXyzxu6tsynSqxjWdDtZMCMsXJ15wXpu5VwrQebyWL439VAip",
  "key29": "4NmMHvNvATeH9jSq8RJMtwcMqYNMBFV2XAPQqkibg3BQDGSWWtPuhUMACEmjqxqtnpXXhmer8XYGvvdnfdF7AAys",
  "key30": "5XwmkSSFrTymN6x6makhtdLDNZ1JocnLSwASGVq52UHLUhb2scqb4QbNDokw8AaUEVmqR8MyzNYPsEHKa4HZUYpw",
  "key31": "23FL8fr6wY86iQBA5bqRpfJBMCWq2MLDUQt5boxNbQNdEZgPxHPfAXu63dF3nb5GBf1yozYTdb5voESbS4QG1ipL",
  "key32": "JZm3Sra1asSaeuV78uDRhN66xSBJNqayofopMvMLnb8drCusCJFKQimExKrMxhF21Tm56DG21sKPU282R3ZgGj5",
  "key33": "3NC5KjstXii8799pnPk4RHWz4pqaDn7HrbVqUoodNDbACY7uQbE5hC3VBjb2HRnAb6nBekY8Ao9gNtLQs1jCp4bb",
  "key34": "3rcgCRYjMsj3UGeXM3umSjQBAaMXfUDZbKjA8MFBV11Aw3wd6RAA5Q5FAmN1sgjVR9k1JD8os9ont9sx4FncF5Br",
  "key35": "31PqVC3iVTW7rredgbmBCqDj4sbudVGFkp8Djmso9jVXZfVVkPPYnSi1HY9MEvx6D4dbujFgZzcq5CFaYQDDW7Cs",
  "key36": "2icytH6oLFcEdBrLjPWdV4qViw74AkJjnT5JbMbZycnd6SvPsAHVcjpu6EkKc1BvUkn8fAmCpAot9peA9yCCptZA",
  "key37": "ofHXr1ifbDEbrW3hyGCKoL17V6AMrFnqio2ZufohatXiGh76v8JP2nF7pEJsPgN8ZzJGy4ijWShccYLUZTokvfR",
  "key38": "5Lbf2poPtqvW4hmLb13p6zaUSymJw6jtz16ksh64vmxSN6ZQw57uWCwVTMq1qbkNiGo3cYNwRF5xAPqwtwuuaDTN",
  "key39": "32g1FBHot4RqL9uozCzKgLFXXfiJfVnHEhsjQwDBcZSCjPrS6GKb3YH7PNNQjv6AtNsVC2SoCxPpqdMUU8GuT75d",
  "key40": "45vXNfm5ARXi1P7Fdhwx99P9BmB367QKXwvY31crXB7FntQsGYh9D1tQjDH5bWHECmCtFQhP7WrX2gCVfxuyk6j2"
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
