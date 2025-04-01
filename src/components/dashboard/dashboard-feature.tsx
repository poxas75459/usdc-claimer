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
    "3n4UQoQ4xwwZGpaNpWPFtQh4Uwg8PKCCMA444bQizcoxCg3W1fVHd8EQ2gAyeUqMsrLaLhRtyfsMemcjWibBFmuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrH1GvGTSYc37t7aZALguMPg4m5QjAsu6GT3tKsE2R6kmjakM4wojVrsvntxqSWZrESukUHmx2rEzG1h3kyyyms",
  "key1": "64H27NDviS3a3SxUdG2hWNRdcRUEiwhA6FgfQKqmgnCcVeQFyXTeNMYV1iE7NrE1zqwd4qTo3CTWRrHZYj9a5ucC",
  "key2": "4nfgrfpv6L8Ap4rJyuYKGWBTVJbAtWYfdtJBtQvqEMJVR9wsPcDqqzWgeUveq4vbMLuVND93yPeTN8FrV98dHzRx",
  "key3": "39XUg8VfsZe6urfvn5mi7L8iFLgpq3UGghw7RcH4FZFSEziiHzEGpQjU7s9pNu9pGfVPrxvwc9h86tQtMwBvFbEB",
  "key4": "3ytjBRd183W9XQ14URE9caJey2b6BxZaLNBacbGCyxpMkFTwY4EHdsgNE5nyfJBa5C8iwUyVxujZ3W97cHo1Kfeq",
  "key5": "2ybiz153gBnmmjrb7v1QbD9VTv2gnu6BW5hFXGUBx1RB8UyxbaU4TTA2Y9tJ4gkxKf7DPbmmQHVvhetE4JNHFc7",
  "key6": "4nFuHEQ9AdT6e77Cm4e4idJ8y4SoM4KpofFea23uRx7GKa98zbGiFfQ4msuXAxz7Kg7U6D4bGXCxASshYpcvq77z",
  "key7": "4byWZrZ8jpdyowQdfKFf4Um6iDqsSz8FxMUiRFWXh83Rff53wdrMSYVEBRisut9tGbHxpKUfVdHfu9JNvNZcRPxn",
  "key8": "3ypx3ZLPoB8yC6JxrcV5t1oMgz16kMk6H5dXtkEfLemr8c96eP6tpEcJf47J1Spk4Vm8A2ii7wBiHABzG2KXMLxh",
  "key9": "49h8NvKudKs7r9wj9Bn1K1LQno5gixv2R85JgudqQEvQEo1EjANQgZgbZ8s14XEN7Cu8SKiXrjG3npK6m11Czewe",
  "key10": "7v8kxSQawZq6gWpkfYQuAsHXwTCaFAM4cgJBEZdDUfabRkFfBnca39ajutDaLnfTV2mNRcsqzG3tTxvVcsr5P2P",
  "key11": "2zcW9YDfAx8YfgyERKeByc6pCzMivJSMriSJrFPgbRpJG8mLDnsaLzAQc4GdrdgGuhjwjc1hjevTFQqEMpQavqmQ",
  "key12": "5RGPsxUrmm6rjxKFgdCAtDm2Mde1eNmGrtJpeau24rUS5MwEYA2rV18uRJFhhTsqkuMPZUhVcSTnzb88tFoeNRbC",
  "key13": "4AeqJ5A3JuQb56zMmDtahyVGzyb3c8jVnSoPdU5Rfv9TcFiyoRjfkk8UctFuBpiC9uDCuGQdpKZVmrZmBdbdnup7",
  "key14": "CGzsbeWwHaTLPhoAXjWvVaceoo3fwubvMwyHHpZ4ZpMntarTPBroQjk84rQyScD1iXQAgJ6eQv9hxuiKCSiMdZu",
  "key15": "38BBHCS7grTTRKcU3e6GEDCDM1CWn7yNXEkUvYRVrTYfHFApJZs2MBfWY8HVTNdTB9LMPW6AwQMgyoXM9v7cRFfr",
  "key16": "4yTux4j2tLeSrzgTDcoNMKHZxpvWg2hRRa5hQ3DrLM2qPnSyeJX8GH3UdYcJUJmESXLQf41grkMX19t8fBHXkYoW",
  "key17": "3VoKfkqQfSfCfJQC4RhqwJD1j6wySrWWBBuptBUgMFz6mUVd4oawhik5f353jwTTqGbZFTeCXaJMZ5Bp4ZKfBg7D",
  "key18": "5rFPA3jrkXJhNqxQD2S8AR2qmQd189zNWcvaJPSvffeh8XzBBCnVbtdRrcw2jpr5uw2QLRJp8paWVLUfVtAujx9V",
  "key19": "2iR2oVQHcxWkJnZLAMGhUBSUFx7PNRcrxFgnYGScBeiAUehFFouaj2qnVSJCqmyvduZyjSkyyZA7tz4Bh9ZsabQC",
  "key20": "5QsFZB2VHbLPpyiMPvghqY5L6sT1yuzzX3GPaQytqmyJkStZbCyjCBQPoCSWCuniYytPHe9DKkdHVemZTLRKKBnF",
  "key21": "3mtWLiwP61jigyNnjbw5y4QDTZ4urqBmUWKpM8kV1aMiMNBvKzx888sQ1vvdGS5yX7capFtyZUE6DAL8t8CWjNkF",
  "key22": "2esafgvwArVq59ao1s4Wf6PLupAw8ghB1mzBQt8HUXGF2D76bXCsWqjKexYpCzvYSjCFgWKZfymJ8ajh1N6C8a4U",
  "key23": "3NQj8AjvDWFLDZaCvY1byLXjMKQFyH5WwpPoEKebL7tTS4CfdGzRaqz4YgQiawwsjPvDiQgTCYfMFmWmtNXVW9Wy",
  "key24": "3Ttk3LKBUJp8K2CtyYVqi72J6Gu8kpLfoqQisVscx4nyDK2EcQXFrDmNAinDCRKTdwv4tZt1KDjQygchnncZSivw",
  "key25": "kCS1mkpD66M3g2Cma9zF76A9t25eoQh7ZWZqAWpo3GWucjzhzg2QigCQ6e5kcpo34YNGgmbPwVfKCYskfW4HPe4",
  "key26": "JTQJrDiaCbg2631i3nBfEftF6r2VJEUq3psjFmC8SJxBeZQUgmcsw2awUeWBpjjQ7wTdNVXawfEA1ckay92tdro",
  "key27": "5EyNcN7xBuigMmDyPjnqFDvswtiS1vVxAKzskSUAiT6Yd3pKRq7DHHbwoo2pdVaRqKrFHYFN2zrnruFFod7Hokdc",
  "key28": "2qywUQzjzBtRSuB8p2ovKd8RtW9yyV8Y8PdYkHFehWEoJViSMbfNSBBctccmV1nDuiCEVnfFfDCC4XsBVkAHc9fX",
  "key29": "4bd6j3x9Yjjme3ys7HdPJeZKmSLhshCodRmHd81XeNyu6DPwSdDi5SSALHV8vQ5jydJNLG3EDSwnye3EQBUc7u6Z",
  "key30": "ZN9541zyh5X6PiGHEsnLpxtXuUe8dHXUQZ4ghf77Eu4so7JGcoKVW2u5bH2V1X8ZAvEdzqc7jcwGKhRNHiDXEjk",
  "key31": "2erLV5bEqp32uDB5Y4Yt6BW4XtczUxyRi8YT7N4HE5JMZXr8dMxSwCEGFxJotoLuTAzcbTppyKxGK6MNPC1J1fip",
  "key32": "5KdrxjUY3wi5z9VFngJpSbkPbLqTzFrFwj8csRu2ZT7vA1XPqY3KcNjhU1oECgLntWRZxrEGqnaBgVgH3GyHVdzt",
  "key33": "3xXzccnkJtg6mHBcQ7CnA3PH3jJYkczhRDyV8QA8ybFAwPCUGMadsFeWHiCyBbnBxrCGRkW7Jm6JaxJMvXm3C7qc",
  "key34": "3gKx3C3e6kkA87eQkXVdWxL56CPqXjah7ncpEbRa9n9F2EojhoyU1iJeW5A3B2p64UeLU754fhuYDXCnGnpQbHQp"
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
