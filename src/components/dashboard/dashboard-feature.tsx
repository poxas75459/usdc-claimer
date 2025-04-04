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
    "2KMXQFENcWNUjaYa2r7pnaGMTugGn3hr81wLqCYZuN5JbQo6Lv916AwGuzsN1Efu1vLx6Ni3HXKCm7JxqyKKZAHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvJAYauVrWtQVyqRXRrGgxWBnT9RKbKrDGrHY3oHrevKjE75T1NfLaHiH6qcjgeZYxrwL3MujarFE1csEd8iAcx",
  "key1": "4ApMJoC7WvczUKjwXQheGd2bj2cMWThthC4gudKcBQ45eGJXAbkMU5k77bqnq4z2A6e12Xw3pih1z4U9CXPE6S5w",
  "key2": "5aTvuGSpHGjxMMmoLwHpDfp1SsA6dFjV9HLaYhRTPVggS8VHKQ8MvADtQ4MpGVh4NHdr5FnhrVivFMApExqrGUW2",
  "key3": "3NDhtB367BfLbyqt1ZxdHzWV4Udamu7LSR9ceeYrdQ98miNbfVxxEsht91GtBfia1npR3AaorgQ6oa6FJieLugnh",
  "key4": "4MWcEx1UZLmP7Kei933pGErSEjs4aFh9kfgG39eqaXRhC5V62VjY8nJgGHEHpaP19iGPaXsxKqWDwiVJfjP2v2d9",
  "key5": "3xjncuUrfpapbYRa4j1XmGPCuttdDhny3bpAEVFbWabunEDHNgy2ms2oNSP6JUSDdLsnGvspasgafTkePLgcpAAB",
  "key6": "51kVfN1zAwtN4YRf8Fnhk3MyMEXWPjPfsXu22yYMu8pv5rxWRPZsWPQMX4JPYbDDAjxrm7gdsk1WDxx26PF7iDnh",
  "key7": "4AdvusV4yUXN7GaMxVsiYNb4XheFiHBthVtEEDGATkGSKhSk94fC9sNzWiQhJxABP5kcRKdYdqiwaXomzmdbXkyG",
  "key8": "3yJP8nUWGffCprXYGUj9xRReCk5c2p4vz2rpsdFZS93bfv2FKVCinSvRNpqDV71VwXMZoSCvChoaMRVaox2zt7BY",
  "key9": "4p1cCfa7EQJv6ES3hgt91o1eZ83GhztoD1Uo8ozPQ9w1VyLxP5YT5Z1A6xKcmqkGdaWu2s3uaMX8P86MHwosrGuA",
  "key10": "2nKPauAHvGANzTwwP51CvxAVtEYwRNFfQqg6985Go62cpd77NZJuAbLgteTrY2VzHAxo6CLRwSYXg9tS33LiSRPD",
  "key11": "5McqmzN3mZT3y6nXGz7sj4ThqsBsm7XJ1mFaaPcYESvqvxkgGZM2KAV1nsmsY326WKX3w2a3W4J2QsVeMJ9pKVgA",
  "key12": "2p7gMpx8hLxAro8UfDW7Ek49sfCSiqfccznvVewSRo3zJsKFqfWgeda3QvQfqSVpiZ7kLARqYr2NLUGJbxcCyJLz",
  "key13": "5dDYZwU56aMxCWC3qMS413ekj6ixx166NAvgbNF3NqbuGKYxAs6coHBJhesc5KgF4uMNWeDqypyTwNWjzqZiuvc7",
  "key14": "36XspVPpdP3ShknoQeJiTN5VDdj1WZzbBMPbLjgyySBnVpwduNPZG5wuWS97EFvouvmtg1L49fLJJDFnfTyg8shr",
  "key15": "knWjGN7jamwnPJNBtazHa19jro1Jy6m4BhFfQNvm47gsqaBKA9omvVbSSVPX4jrPAJMrGZH1pZgxybK1LeesGjV",
  "key16": "ZUQRNYTs6NuWYFqq3y14Pic6xYvpjSLYf1iNuj3B3N95xPYcBaxVRovWy4F7Ukgqn1ozr3LtZVBxcn6D693Q9fA",
  "key17": "4SY5iNNxrvNNoQxi9A5W4BNgAFPJNvqVm4DN793yEZYimFHVviHSFipKnKSchhVuAhNKj9cpG4qbppyZLLTm44or",
  "key18": "47tMeXXoWJ7bvV4KMWazYtG65WPfJA8cA44RTePX28g9RuvDMYfUCwFWWNW9YyLva6wMLbUwmut4oWiU3AURfR4Z",
  "key19": "2VVKfTjsqz4HBbviwfXtmEmYmUtRxgXHehLrdnQzTyQszruqDAzQjTnGSGG6rzDx55TtyV66y6Xj1TjehuxJxr6v",
  "key20": "4tMXnydaLoA9t8BaMi9yeG9Yqmd3ihMouzWwurTgkjYdgKFreS6bWe76T8rhsp2pMzTKDPp8RXBikki3yq3xYnwi",
  "key21": "66WqqkWLpjCSKDo4HW6PowYQrDwKGcLtnfddQuDnYvDmNPiKuaBcXiceyxoPsvLUjqHfPsSRqhYj5c5p3NuNU3ai",
  "key22": "5BCYTGEKPmcjTX5Q9ZY87vPER886S7RV9UfS7n9PQDptPMPqMqfr16GnovWufB3oyNa394dU5N6Xn4HRCSXpxqDs",
  "key23": "5K2Zbs5UAwVu5B6WJbHxU5rKDfZDgebdMPmV1Umv9gscWfq2PJ7YUYprcT27SGtDr6LbzPVQXRyTaBBzyQjNv3f6",
  "key24": "3TBumg97FutmadMFsgDcXe7trp5KF5jWMkUfWXRogjhW43svGR58HMFpXDbC65hKZEYPyP81R4sbSkrxMUMucz46",
  "key25": "62fJ2qnEoUCT1pMEyGvCsyivvtfnHeeW2Z35c6Jz6LL8HkiQavg3BCLTdWYXGmgnY9QVGVi4BXvTEuceNpoFLsFY",
  "key26": "2gFc6EMiWKUnimhGRHUBWAbTDz4s38ufWATCQmCxF1W5L54dR8Rb6ibUM5z4BUBszBFwAwWLtrzmVyYDmdchn2W1",
  "key27": "5HNAuGabj51GcjnX4DmfVd1WEbUKNDrjRxrnFujCvY9NhWDGi2Xs2JBLFhwfv2ihQFB8uj81Nxa7WTEuErDRAj6W",
  "key28": "4RY2YEW2eDwEJKJR2QW9xUHVoc2xosJ8ZfJPMUWPytYhHX4ptYMm3E3uUdeXZ2m4g4DMaEjwtfBtQYfVkxvGhLc9",
  "key29": "4Q4SwuooY8LYcLzXmHLQjUCRWaSUmRiQ84RPe5QuaJj19qK9sneUyi917fuGNAzLBSU3YNaxky7n1zBaDEiHUbHz",
  "key30": "aTSegxaNRjvPQb1HxDbGPhK9p9LGeGUD6DMTjuNUm9ynbUbTu8Y8WusUxYLKBjQgdPyyQ2Uv2o6nQ2Dgh6wdtv4",
  "key31": "2gywLatFmLD7Mfs5v9rSTqiKwackiJ36RoHP89Vy3tpwHAq2sXxnyQHj2m2FD1fsbfT6hjXgSqfYDHEf1guzdrGy",
  "key32": "3VsHACDQCdhtDcSTkvWNXtrjvPihVZDc5aXCsaWwXK22SHCUQGLpkmBJGEpW741qnivh7b7kXVFP4YwV2eHb4WEX",
  "key33": "2mAAJNNxBJmwCxqNVreNFKrTEZDGoZgYr7s8wbZvYNpA5gHTdZSQLzoN9tNGbo8HcuoUbQVFNDLyCb7V39ZiRX44",
  "key34": "25ciYgXojCxKRRDNkLZMYJb6mKevdS8NAYws9g6PDVL1UJtxWbqFou9SYaac9qZHpLDiPbsDPNKGT1sxkJFqS1DZ",
  "key35": "2tSAnQJHxpZdmrescusvDqdB6zoE3acaGKExZaSqVCYAw5YgCc8R6pimgUAj32T3ReRud9RrNTatAsYfb7ySLq5n",
  "key36": "3Q4YpaMa5H9KGASmr54AGfE3tQu5wk8fzFdhyvMuqr2HBZkpvA53CpKk4zUxp5z6bhm82BLU35r4wn2FKy2BFZMR",
  "key37": "njg8SrCqi5QKS1rLUcmKH4BQsHS14c7i6jrnH2Vhn2sxywitq7w52rQgaHTEhHzhE95yWdVNXn3Hqi6rkZDwDqS",
  "key38": "4FkeAph9z8nmbW2QmxMAhJmimtEVfVtEyPPkPgPbk7heBAshuP8oqMRDvnnZKRrBRVUpHTJTzn8Sg9f45o6Rj1VZ",
  "key39": "3CpsrTLCNGP3UKytL4EJAz7nmSwTQpHGHzPH7GFditNU6FSsGz5V8ApSg49VjDsWSWBya19btQzuYootWyN9JEm5",
  "key40": "8FZ5iGbFscrsupaCfy3n6VJAMoeS1P94247H14hwMbeSfkdvr1QYDDkuHSwBzA8uFCTj6xVJhuFTLeiB6qgrYBV",
  "key41": "bahT4LDZcaA1EmKDSQ5ujvomjbRMmtPboP6BNX6inrGha4c6xTGBsTj76rANjrn7jksqmxjpWzbxXZc1KU8VDmq"
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
