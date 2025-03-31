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
    "2G2GEHr1mwGz9WZwzvFKhKyb4gBjA1iKPx9utgKr8AK6CUZbcMkpQoYdAWqi2mfCdkFPc9XqtY3Cvv85ij7N8eT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t39WeMtNcdwZ2NZnHxAvyyTcqF9quKUL8RQ8WqGxUAoXU8kjZj3XjZqSQjq8zWHDRmWi5AZaHc7bzypAdB2YnqU",
  "key1": "3E9VuxR9Yqv3Ly3GjdnpTLXqEra8DEj9qkWJh1E8Xh1tT3bke2ahkXw6rCEb9dpxWiu8jye7wP4VnK2N9GqLfjWB",
  "key2": "S4xs4qR1GJW7EMFCPVEk3JNEJJNowz8YmrMjRm9Ua1M2a2nsYy5uvkyxKojc6KBneHFZ1xJDmCjc49eWavfEiLh",
  "key3": "2rpizbcFKypTYQxE4JkW1d5Ld2gyuyEHf1vSySpjpTEddDpkize7nPUM5VUQcn2gfVofFKc2WuYxs5BCnBghPcPm",
  "key4": "38s5RKxnDhTkQTgsEq1JhTkNJsam8YnHUgDbDCAF62QkWUip4SEwovSPXZ6XFZkFsce83v9vKVvk6ZQfnuyq5v9a",
  "key5": "4DD7VheAXZe22UC4bmgJYu5jEqhsFPWrwG1KphrYez2a8s5dU6uvZcTqgV4ZNvwoBMiRY4y4udQ9Y3E6B2jzuZkU",
  "key6": "GScE5TSynapTGFKxTumX3eCPMgr6BD8G2jwmLUEKQaha83ytUST6E5jcVQTQmWdWrAGamJYtMd5MkEfrkM6bkhh",
  "key7": "59kC8sxXu7UCcqfAHhMwvRZuoMCZoaheZnxLB3fzB98NydWaL16drSJgDRPRdJkKaKpxEs71xQEyAyjyTJvQroL9",
  "key8": "3ewgTvPsXmuRdfAjeETCqRvzGtbsZqH1zLgJFpqYrKtPH5BXYX2955hfLfHWuzwZUBJZGWcE7STanUk2ZKwAWxRr",
  "key9": "3742E64zj2zhzhFMVTva5Y6H9rQV9DACN8PJgj1R9HdEuG69ssEoN7mRykddakqS9Ad5j9WJ3rs87kGJcG4CBy4u",
  "key10": "cfwyopx1YfV7jUBeubdbDQEZQocdpYpFHTEd5CY2R3TC2AT3MUZJkoH4gqdbkWcE7WHXa8QPe9ndi6eEP38unxp",
  "key11": "48nko3tj7xTXQQP3qJiF4jsdAHEY1KQZXMfA7Xjc9FPSzMZCgdncuogWq5z7ijm2dUKQE4wqy9ZKo9SLCUo8e7WT",
  "key12": "2ZvH13A5ibGD6Kir1yZN1FsW1LzmJovvyTo32h5qGykWeusRf6GRjJL7kuaAyTpkn2jkpztXssr5Er7VT7Sd51yY",
  "key13": "3yaJw8Ak5roahrRQDqtSa3EXoR987FLKWe5626kWtD3nyzkFqCfWuQb6XAP5fU5Zh71WwHTZy3Ls22iDjtrRsVPD",
  "key14": "56nfHmrbsy4J2bptBJxXv5MeZA3EcSCEpCSiTWXoGbDok4gUrZthn2buLLs62GTSvoKNcgR7NUdcEGLraYMov2iX",
  "key15": "3JHSc6G65aJt6tQuDsnTvdjztpEsaoKKESnWKuwGruZG4TDkVdYyqm3sf2pPYzQZAMuvdSj5sRegiW4qCmXGL9di",
  "key16": "5MwjQcP8uV3zjQbxPREk2ekqmYrY1sK5wRk4XKeKd99ka83LGLjnx534suBZHP2dsQqL9vqq2CT2Gubz2FdCpH45",
  "key17": "3dmWAXbf3nGe72pBFMF8Bc3hHwSokB6DPzBf8GANJ9F8cT8tX9dUSQKqJM4VAhTvsK7T5g5jfx6yKu9EHuAWABkQ",
  "key18": "51Kt9xKQMsM5fomrHQR5U71c5dFjjRgJhovzVgqL2GD1oHAz956G2aBteeLmY6N2zXrvwBCiD9AQTiQprxxCZ9Bt",
  "key19": "5CFHt6ZKPdeoXEZeVWHj8TDgJABiVp19ytuLPBC53x3PxS6kobPYcF1wyD71Z72uZx9538Tv3JY4vmBzw4xKK43V",
  "key20": "2mU2ivskRNxmgexDuKon93Pm5EeNbsudPEC9LLJF8B1woDGvm98izgNzRGXRDUQ1hSZUbUpdQRTVNXymfFBESSKT",
  "key21": "2bSVnqKY71bMME2VDr7g6AtTaUMhzUJac5mVXGQZfUZcWWbcDjKzEDmVB7Aw9SnqkRiFPDGNHg9FdRqYnGJkE3iG",
  "key22": "3jowbLqStHPVN2yo16HqJmqEqsYaeQePUDbPV6FdntmvwuMiusk9PxWTGuXmEFFHuUYHMesX1c346GtEgJygkb8R",
  "key23": "3hkyWtajxyBSYyikTX9pPmt3ZP5JzvaMQuEdM8b2SSK38KpdDQ5i749C7YyzYRcExukNZgGkTKDViDZnUsYPaQCQ",
  "key24": "3sYZoc6k1SQzyUs2E5vGuDCeFYnEyuUuDq1u6jBcpQTmvne7xSuM3hRY76FM1FsyqjWqLJ5Ybzrb4Bm9FCAAJWH4",
  "key25": "5KcysCfhTFtPzuEf9dbEL5YRrXqXvuoAb5qeDJaZMVhzSE7nJ4zHCmkpHG1xy4QzR5TBYuwvHVQjb5mEFULrXwdK",
  "key26": "2kbjPfszhzHqGR8psEqnkeALHSJBo5QXR5BhG8eR5tB2rVx2qEzG9xDQmVfF5TFgNDAcc5nARLhfWayXMCUTsmCs",
  "key27": "4aZdya3vCX8PFu32KJQA13zCjgSZ6Zb5VwtAA6hGwpN55qTe1RAFpBhQ5dK81grP25HxmND85WEkzR4qQ3Zz3NUU",
  "key28": "5PKWDJ9Qk8PGkVwEjSKxVCpAJTjiAFi7wQzUGCeEVLUmhqiADkjByXYaPhDH7TaD9s4QNVynWH6cButS1xTN8Umk",
  "key29": "5sAtixRZcRtEooKMY11urLu61JMjHEgUaaHJybsNAT6TFg82kJ3Zkx3CEFWVVEYtwQWuVT7N81Bvehb44e9egudU",
  "key30": "26SKx9nTTXXHKETRdqcUgiKdpbHRYAoWoQZfTmb6zRtggSEX69iBMdJmDCbDfGKs57Wb76p8LFMFHtvxnjERGTsH",
  "key31": "5JjBJnMYgB6pctjGghNPSaMu3JJuG64rYM7ZagR4Ffa6oBC1wsiekSUQRsMjkdEH6TQu5L2jwzxfgPbGvbyRLEC4",
  "key32": "49B658xKPzcWBYX7gRKHYUQ8wE1HSkm31ig38FMxJrjibKuwH3peSz5dKpdRTUJCE7uNivjcPBgGurRxRTpJ2KH7",
  "key33": "581XBzCYf1RR5jdMhKz7VyoN9hx53rKBt6ehSxcDwKDNJ6vN4RyhLz8QSPRWv45W1HjdGs6DJGLt6S4BH3CTse7r",
  "key34": "5EYVBgXKWe7ym646XgjLnXNyvEW3eP3rixXAkn3ER68sEEMXVFnXVwjkKGXCqdQo6qthw2ffP5mNubLXAQT1Ane9"
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
