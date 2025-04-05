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
    "2L6uC8EomCAzti4WBx3MVpRzsRxUhRfRFMtiiZvzmnNZeFXbwYzC7yYTrFd76wCGVZh5zjMgtkJ4cKLpYzJCmRkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdY1RBULWcEbdQqHwwdkRVv2V94r6j7pUTDURLwK3rPhd8mBzzhiZ9PEgs9oWSuVLR73VzZ6G1Byx3tzrHzrpDW",
  "key1": "3cb117qWEaMbcAYQ6BVDXnd455c9NT5ETWoQb1ndAVT1tKDPsdW8hZ6cfwTks3ivPFFK53K8XKd2wMam9x4pndqz",
  "key2": "58CXkHMmBnXQcp7jWLmqZV1Lf1GuchN41ZeMTVDf6n3TvJTqfAubnqrzRyvGzgbdWNp78NAuKmwDfN69SQ2dQXDD",
  "key3": "FE9zbpsgzPVqFxkXaydp1e8aq8AuiiwsUqAqa8LXXv2icBMKJpp9iDPasjpZJyQyDHKny2vpipYNCM8P4nuagdK",
  "key4": "2cGcRnXFoozAMPjc9p5uRR9ijazA9DMnX5oyhiU7h5P6aw36uBMYJZ9b16XHXBXVFSodfWB8k1DvdeyxHtKMKgsp",
  "key5": "5cUby6X3Xud5y3gVjoSWEFQDiq2jebkAYFobgKGDZk92YC8YjWo2ZM3qUGd4WXmNxbF9nrQDYEn5YyAeWPoJXjET",
  "key6": "3qRpEbyXjXaB93VuoVE42p7ZaEurN83P3v43hT259BHq9jsDDSFQokSPDyD5GQgQ7swFLQo5nhph8TV5fcaNvDFU",
  "key7": "252Y3owHZpz8uXZLz6o6GYNEyYYsy6cEz2gUs6U5UL3TiznkNeq4E6iuPZywuqKhUiYsHPSkRFnTn3PVroQSgJkt",
  "key8": "34QthtpAEjGPHKVy21DTVKSMxMr8qw97dXmxoWCoU9c53HHzi9d9MJtcbNti8ygcnWpiVekgLY6763PivmZYXcJw",
  "key9": "iV5rivn5h5bHEx46J9ifcR6mhRU2cNbUUtBh8v9CPKAiWJRKV5y5wdUba4EcnjknNdCp19QHeM7udxWc9zHNywM",
  "key10": "3Co3raDt8fBGQLQvi5spo2AooonGqNfqVzL6zVdvFMLbxY7ZTYLjJj3py16Ewwjmw44LNpgNMJAQ8jrRgoiGMtzX",
  "key11": "2EcqFQf1xj2XifawLQNSrd6QYUe2RhwMzRsx3WeT427u9PiDeeVd4nujcjsKpCjUwCLdRu2Y82S3uz7JbGSggMd8",
  "key12": "zuYTqxWFvi92DoiP7Y7VacewJZGsCusKCALMqe9YiZrwULTU74e9trvtUKDHK1QpUfmXg3nDfJWwoBLkMTjQQvm",
  "key13": "2ghynAc3btpAGwtf1zDLzJSFfHhQsaZK2T8pCzPkVH5M2rhCBfZxABPtnoRtYvviAkdQJoKfNVe9AV67fPocDW5E",
  "key14": "2SddZcA2KnF4UCBoK85rojHn1tWuQuSXeQt1Hm1zHPDXs7iWRfkDtinhHe7X1PdbaM5P4dVF2wewCSRnZGnRpFkx",
  "key15": "2cJfZP5BwpoRdw3bbJfyhr2bBUAUsyYCC2Bb1VB37zxEQWxDMvKdSJ4hWFKXys3tScyax4P6Tx9UojhYdWHjVTRX",
  "key16": "5TgZxHUiCRdqPM5TDzvrPp6VNCqeVVtJcZQ8axhvGZndPz7kgNironf3ZvGEECvkfbheTMuFu5LbUSVCvpujhEh5",
  "key17": "4g8mkzMMJ4WqMVcPBvmrWAq9RjZWVYJGAkr4CF4pHYcgcvH7MXtrmwqnwz4xUiDuZRaCXC188JvzvYPFgWEo967Y",
  "key18": "3LgsjpTCVaGuMw89xFz8LnFWqyRqTTryHCZwEAGxYFsq8PKjoBoDGSTHkfczbbBB3HVmvpMxYS47fneXmk62GcSS",
  "key19": "UL3D9CU72dd7Hjm7i32tDe1DNaHzitjXCkrZghvPfKX7VVwru2KGVmHvDYxWrZ9KeQUeMXHyGSVUbgnPwB5xuMP",
  "key20": "2rxVTjENAUJVqZs9Zt9Ju2TUE6xG7XWMjE3b4QyydXC4KVsbDuDYGUkK1QXQrDfd84q3gZQdhpWVDKUrFPJfqAo7",
  "key21": "hgyjDLj93PUv8htGMsa7NdrEVbLrZYxWneGqmnFCDGdV8UKr9wbq3NFHuHtteEq1ottjJTtfE31wrSHJVCKtZgV",
  "key22": "2QXtqq9L4T1jtLoLGeoJTekKWJcivWj9zooPA9x6Kv4rEtfuQXxzKYabRC4pvAGRmBRqY8NfTpk5f3idPxMZsn3J",
  "key23": "epAY6uCfwpnMTHCacvtUL2AERALJCHiCxoaUgAS8Zo1MtF3pXmFbtnDL2kMULuS94PrFkecipUyXzXAdHvgoEAY",
  "key24": "32pweyfBfDMyC2o2hQfb3Q1bMShZN5tJuvb9AJLKuRnvd6hhrwkwNH1sQUeRE1obo6CtQGG6V9nGj65fvorYFNac",
  "key25": "5tu6pPEeH4WPxdxJHHbrZEPYrZuXKzo3P676r2PAuNJU9sqUz7ePr8toLQhRtov7TNaLYQFaRZpNbH3BVTxUkvyS",
  "key26": "2SpCXnZUndF6v9nhWZ5wFCdxJyuhGHMioAKW4AyYqgqACxb1fR7hhogvH8euy1SeQD85MQJbHjNccB9GycoRZfw4",
  "key27": "2Yi1LbS9EFoz8c3aMUvtTLWtTnk3gzVy9EoPY9R7cTht2YP2wtj8zys6mgR6sBkAjrh4EfU8tLd2ufVxXYTYMM8T",
  "key28": "5BiJJGgBV4M8uJQALrLYEUW4KwWpAyJZ15mUzayjvj3T6aLo8dL5VXFPNJN9hfMztNv611GrSqWuEHh6hSiywZn8",
  "key29": "62N6WEJ7udkT5NBCFzd4ctHEyzcn2f9tNXqiZDoffbYxf4SgzdpsN7Y7aYYwrbgPf3AWYNx5AmcA4ofx8paedBLb",
  "key30": "4dqFHmxvXQvmyDyQ7Zi1KjzX3q2bNdeDb46TMw8CzEXTKKUVqN4RthDgW56h1Gct2wuShT3NsVn2h2a4ecBJRVg4",
  "key31": "4DtHD6ZFJ8seEvmPmQERs3MxJ74nkAdZ7oHcpaxdicKtDbAT6kcnidWnykLs6aUCx3rfAhFJL6UtEBgWomrajAro",
  "key32": "39GQCLHmyrcejVFQ2p69gBLrkfrcg9mPWnEpBb93JApqi8RgCyjWGcNZKqM4TuPM6aayNUjL4aCMR2ZMx6m4uj3k",
  "key33": "3DwYDn6wub8jZHGZK85qPh22GT75fo75rVNKtr1ceSun9FMWdu682R5vYGSraSE6Y5syK4Ah8DckAS7VY2LmHWJE",
  "key34": "3kF3qf3XDwusxFrfNgzititmvGzjVBAzgZgHa3LiWNMLvmYaiqWBJmrZKHEQimjeFi1SrKjRbDypsjgqyCu4b4aR",
  "key35": "4Dfj4DFfPj8cwMGRFk91NFYvGmYyrrDAkLBGBRryVUE9MeHdcWSr7u3Eyv1SBjf62Qjn8d1RxB5ooJSBnf11hjrp",
  "key36": "3c69TRhJfa6cbRkGXcqkWeG1X9LgTCV1E4kSQbfswA1qYHG5Swzfs2ZRw6rqVGCAGyP5qHcQsvX9FVV3iCKnrsbM",
  "key37": "5zbyE6qukAgKgeUgtDrcXWYhc7bXTye8sX3E9sRgnetbo2vqCWVSqGajzMmPCdjiq7QQ9zr5PSkw1URCKFmCTALa",
  "key38": "55PaHKzjLdFf5nEreznxefkugkWyrMH13DH7TRHCz4t14PmFJeUyMv1FwJWrvhgh6wKr4K7HAGqoXQdEQQuCXGBu"
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
