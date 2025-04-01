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
    "4K9pZhRMX3Ln8MiGpVr5axPc92E6orYiMp6okzJCH48sou89hbe6HxNwiefVdRmqhZavP6A1EgBXS7iVEPmoL6sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ki7MoQQ5HC7qXDwo9GoJytSyReButKDKiyCcq4hAtqvxKsgbyBoGHNTvvnVU7Qks6RkK4EiwWuUro2LVp96h9x",
  "key1": "3PwyucrKHJNZzCjbGCjE4fmnzK2QmdUmhPDCVVs2bQhuNn4bTJd2tQP3jkMjoBfL58WEME9geGbQdy76jbcm89tj",
  "key2": "5RRUsRa3fXWiLpqkSfpZc4j6vdjtCWF8vgZSpU38q3GNiZSxxyUZJSkJxUmP8nC4turtvbdTvf6NMGQLJiKYcoLA",
  "key3": "2QnDSkLnnhLDGiimc21iczjqFQmLLiHmfooYiX7QKaY1ucY7XZjmLzFMD2ifHXqymXhdqsTjExbiKujcWuYTQH3d",
  "key4": "4JeDXd7NY6Y23R7XQwdXhprsfPJ2KXjRbkTJWrBQkw2suPAphguMensccX3Ds9nb1zk4ZNiugU9PPi14rHmpeZ5y",
  "key5": "R6L9YqjTciN2SXWyNdkkQNcs7hD7SfWELwYFUCk1mbaTkPNvzF34zgDQY5sEuCSbu4fac4NvGAy7E1EToSj8ztk",
  "key6": "319Fo64sT6Z1Vg7Yowta3YtPN9WY9LqdDVKqFFbwnkopKC2ZmqYKou41kmTuarUBEhTBWd33pbKZoBrHQChbi3D2",
  "key7": "2jYoNcza9v8isU8PXHnNKEXhwZRyeET41V6eoTgn6dEizQdzCuhfCZPQoypwoPWfxBoorpYtoywZLbyBS24KBAir",
  "key8": "4MBPzPjdrYLbGQFvkJkA4vL9fCY6Kw9uQqKLkXhZ5TVivik5qHdV3fc67Qu6vRBrtUCeAA3qksHtm96NrHhbgNaG",
  "key9": "3QAVzJmgZHVVaRtEjV2xaEUm8D2K9tAvzVLtB6DzHaBQroqsVgtb2E3ecovBjTm4YbDVnHt8LF3SZ2Zd3436BeZ1",
  "key10": "2dvGt2RyVGyUKv1Kbhp4JnLxMrigXajF5Uf7KVG2Vmx8Tiw7EEgMQ8kHypjKB1g4VMsgM8FHgYwgwAAvonXfCaYZ",
  "key11": "5sx7eoPZmDex5PYEDGJcoF1dKiMUra4BFsYExG1uejXqNWudAMCLe1CxqA65R94FWEd1kdBwqsbC4SnXfqcZ8nGr",
  "key12": "3KG9EH9JsPvwm5Hfk5zRd37o8iCkjCn7gMGDxn2aWS2yzqNtw1Bu5KXVyP6NkDV8pS5tRsFpofoN4AEFym4pgPw9",
  "key13": "4GWmdvCcs3cZNfjSDzLqpLpBttbdN6KKRt5sDqsWeYUkVf67HjZpKbiJXY7PmoLEWtDfK9YLTh9NQDLVjhAHFkKk",
  "key14": "2dFJcrPrKVSxjSqveqeKd5jpU193kZFqCpu9BLiGoLzTR1E2bcnKEDtkMCdoJeLcpYPJFC2SXvvPZUZjd1QqSpia",
  "key15": "63jF9t7XzNixwJ9Qig17jrESEMt2ioq4w2QNY4CaqEPCZ9Ed4YbN1sfAjcRT4KSUwmwDtLTqXPHaZSkLuGbEbH7f",
  "key16": "SqM5x9YEM1dyXMjTrgdHnVM69TNHrWnKSjWdqpih43LBLVPdZ1nzK4fgwYqewnbKGgCF7eW7TS2HxY7C4arZxo4",
  "key17": "54zmFVzznNesTip2WwZZTKHHecWmxMwoF3fRVdwnwKZiEW9w18JyfsUejLjGUZCsXdsURK5dkJ68AZY5DwvsfkC2",
  "key18": "5mFgtHL5WJ4Ajni7xb5SLoJh8aH7a5XX8qScRZhRkqebbWCzA1hqEYeR6E3xojfjmXnFoQ5Bpu9KGwbfF6jL5rG7",
  "key19": "4A56Ye8zXf6UusLtNYR6JCu9TNUhQwHGmXj4Eh5AwY1ov1Wz3rNsrpFyBKgh1Lr1F2a2wrR4dU6D2PgPXG8Dgn7o",
  "key20": "5JgnNLtbLNLUBaBWexvdDjPRWT4Hi1CKws6bpT6x4ysZoNGy6ghd2MzuyuM6GEmG4R4Kjdb1sjpVy5eVxQWuTnRm",
  "key21": "44WipgQsv8StUJp2LDjb9WMwhCWJJ8Ui8swnT26PBsyLCTaCCnwKYRWkfxJnqLu1s1YNkKjMk3CDn6objf7j8gxC",
  "key22": "3WKpGUAL9XckQeDzzhvX4VWVxLvsD7C1umYzyAw7rS1DVsiwXJTnW1KDjVx3M5eSGetKjpZuz22zCBu97kdzGDVt",
  "key23": "5Ye6tDKazXCQ4HRYwqPD4LDU1GDJ85PgTvaExyEDmperdYRWJ8a4dYSUjinC24HgbUGJacN6zAqqjE8RkKPoCk85",
  "key24": "z2cx5aXEZ1QkVvQ1Yq1oW7CjbXFKitBUVLtF9W3xB7wtWxoymMGrigsPSJrYP8WFuJE2U4rezziQfMLgnD7GQqH",
  "key25": "4gKs3Dk27ZEeXoKJDdCo2QtKbmYfLK6gKNyLx77zUyJr2amGzYB6ojpus5JVyBbsqr9Xke5i1z72xrUXNgMtHTWE",
  "key26": "4fTNHfbLAbM6eswyznGoPc1ueaJyNt3E8NeX9vL9T55pBkYanuA258PdwgA2j3KHzHwfh8D8368hxPXLE3VSY1qw",
  "key27": "42MXrFAWapDApFJgRPeZo1b2eSLfWWdRUUow9mC4P3jW2e2ffQqSnoDkZYgaQ3mhQf1sc8AHw3C769htSAq4wpgX",
  "key28": "678Lbk1qxjdSbWyyPjrYcAJ8QsMJJkr9ghyc4z625TQuT9sze3acktvhAHsKFnsdzTDmoVCShN3oTVVt78TcdGHq",
  "key29": "D3he3ER4oYSckYfWcp1gzX92VQhVnbBk1SWMBjpJdAokJkXVyYS51HxZfvp6TB4S36K4gEsxmRiPorKpYcpSVCK",
  "key30": "27iwsKFwPGg9kFXBVUfB97oi2ThZPmLAZomZr2CSi3jw3mBt7u7EerrVxvZhreEgWdmw7yvrCQdXiBykoVcNe2s6",
  "key31": "5gdqHK7zM8t4Qi9CFgBcq76HmTZAVQp9eeGZLzKiG4XePoDGnAJrWgiwMimEW3VAr7aYXTxVhMXzXn8NCX9eHPG1",
  "key32": "3Zrp73MmNYcRgScRrnYn3a9iBzMA3XU75EpwpjEnGTbPSXv68Rt1imgJKPj4BkcDriu3rrq7LCuxBtLNvAWGS7VY",
  "key33": "283qqgADKWm8rYMPm7L3Pu7fRhc7oYbgGnvpUTiqha5YyZYR4D72h3GpT5sY8GpDAw78tBaAwDqyTwnkyXfeSKVs",
  "key34": "2bT9UR9Zf8N5Zum62LzJrPamdCMS8nRncyH8WthJra1xwkNvbHnyPLR7nREDshoa3U8wAHgpZaKDfp6zjLZwRz4H",
  "key35": "4gGygXKwgHsB7q2KQePLdWwuki9RdoME4xeEnNmPGmfzcsoRLYnKhQ8H36f7svC3L3w8wUoqHrKVeDUY86MCR17y",
  "key36": "2174CGCBsW1DkN1abNXULRWhrZp9f6jb86jZGn2fujujPEqy2KjFzErrVHFo68NtV4fpdHX62zYjg76weL85gogp",
  "key37": "3hGx7Wmq3Tie1s1uCWkQFP2P2hJA7Xnbkp56ghvGAFgAKJBLzkood9nqTSyeQkcSkTx5DJtLbGM7WE2cHa9EqQcC",
  "key38": "4yhMPENZbTk2Q9nfbfJz42SPJKKmYvGF4aA74VuohM6qDrG4oZx9WnLboUyKGkpza7saW1uzgQHZ5GvU6gAL4J9n",
  "key39": "2u9yMMiDoeL8rU9T4Y4VGbLiz96sMqNMhWmVnC8F3Gtw7vhyFc19uXPSVpwFjaoXxbhZdUHxikUpZWohSwxmzsyQ",
  "key40": "4MWpTJjX3occ6uUYXtPDfRXbFeTN1Fdbf25m5Yw7xuYP24rWidCxA8YwykT8xnmNHzN5sggHpmsPb2sQUVHN7RdM",
  "key41": "2eFPnGoi9dzAkAXNdN5KferELZ2pZDMiBPGifnpE8JSjLvoieWgQLtYjDAYxqW3PPv41Unyvj9nkxLr5tf6hvbKU",
  "key42": "2QGWzT5Y5hwM6MtxhwraXrUGxviVUkrTp7c5DNX5ydfRs8egjRij89LDQtMaLHbRm3j7a8Jkcb5UKxRnYsF1e9MG",
  "key43": "2h15de6xHvWZkZuFbzu5ui9t7N3JhgxV6DcgTnRF2PW1Ax5rmBTAGKEi9tUeGaVBXaML2gpxwW4JsjbP8cMc4BF7",
  "key44": "24RF3kMrbWarCkhsURhqFBfXiMCEf2PShXzL2BNG2xEVyc82DNUrnvjDLZqSq8YZ4zYiQrMcNeFq67yS4KABV2qR",
  "key45": "4sohaHReMzCq2M91zBjf1foprac6ohTEhZ7H4cz7KZR8Ss5YTVKiqk3Wmrw8XxksgnMDYPMRb8Zg2yqev97bfTd",
  "key46": "3dvcJcYeNEUY2RxCu5Tzheocv38ktTAW6KRcPXXUz1xxeUF75Njqdmufx9R2HWJTgseM2QSbTaS7tYKJk2Ubow4o",
  "key47": "2PgxcPmtfKwms9de8USL1kDdXopnRQoUBn9LeymiWnc8qCzmTfc7EfwGKJpEVYhLrLtUomSyap6uux9k4FSMwxgK",
  "key48": "52sbSf3XCSTGv9dw57to4wMBMDGE5hB6Bwi9YfDnLEBx3qFQcNbPELftgWsq3NJY8YSHLWgpmXp69tHEgD8w4bgA"
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
