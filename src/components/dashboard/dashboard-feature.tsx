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
    "4xD84AC8HTWppCbdJckNzp8fgq2HgwH2VAPWSQ6RChN5pPTbR1XZj2g8rsqxj3wbUp5dDgw6nzjyvYVCbpExMw5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWMc3zLX3sZjq9KoxVVzb4NypJzGPyaCsctcKTknT7SkVeCHhsPPNMDGitqvZ72BkH9uAjW2jzM2u5oPK7nGMMW",
  "key1": "3MPYXC6qssJgJjGiVoiFShkSKLe1gJztCBrd2uQArTcUSbgN5vgsGnaGDHtpsN4ry4MT8LP7GBjLs6LyyBmypcDZ",
  "key2": "2zRcYUYcLWqQdte1RUfQTuAZr47QXs7uHT6sbPVLKBUCMG3zLeYJAiChDia2xjsPW43THBoWYECYGC3AGW7hsKJQ",
  "key3": "33A8UhJnqkPUTKSLoU1hgPMM8szV15gMncgDEJZd1cWCo86gkkNR4u4kQhKbxQionyiKGkqHfvGwZeFAbREjEDEG",
  "key4": "3f6JVmJM2vRZQ9AGYwjX47J4eq9TtmeopUPCTs7Nq5G6AjXKg13cbuorCY7iuqWgcBkohniMf6ChwCiUvFVD8nm9",
  "key5": "43B1VhT8AxgeCDMUGGcEPjUDveb3K1CJ7pyGTZrBovdNxFEvUgd2nHc7w8kbKQW8TQRcScfHwZGrvvMhJP3sCj9m",
  "key6": "2DKzKiUhMpD8UcfQF2WRxuaoB97mWSPW9gz9JUMmBsmX9CVJaRRKRekZoomB7746hhcMAcXrdEuAuZh6Arut8NCK",
  "key7": "5TVuLaywPdCjrP9jJ46LPE9rkbM7xyV3B6Dr8f6FpJmJouWFCK5PQnixscL1nnaj5KzPesvW2vf2Wj63oRyXipD2",
  "key8": "4Rbz72x9ryrA4wN8fTxM8PW3XxhBB1PWuUK4TAa8x3rWnHD6xqL46i1y3Y54pUdVt9m4VbEb8WtQTxn382cSTHXU",
  "key9": "3JQdCN2J9zYSPVHrghbnDZHFpDwccCfTmHr82fYXEFaLKUgmR7A6SdASdd6zLrX6aqxQix5Gm6Sxf3mMfRJmkAVb",
  "key10": "3cj424HHLWY2VpLVyoztB7KJu1HFrCqU2q4R1wTWZ8mV3F79zwwmP3NmFd4b6WLG7Sxzmdd9HhzASixf6AjxQ49n",
  "key11": "5xu4Z1CHHJTM3bLwA8fqD1QADJ3ENMfhDdDrjUzCRdrpfhTUiqVwdkhTUKut8QzwaGNxaB6SEYg9vjdLzGB9NQpk",
  "key12": "4ZgmGKJD6xKVhbYQetWnCtujwBA7ByUEEd66hmZAG9HCyCchQ1SaCqRN3fD7K47mpfQLeK3qMebTRrN66zyuxP3q",
  "key13": "3BRcYPHL451nr7NzczCitfZ945Yo3VCpHZvvTYsoFbRHF9g8JtpwA5jKoeswbNW7Yb6WMmq5nee2KkRwQHFPc6Jv",
  "key14": "2Ninb3Nu5ARFjUyXZTk1QJa3vz5jS4C3cQdH4D4nBDwb6LVVEGmLnG7NtL57Unrz3GtkCTkkkqmDhGwUak8iftpk",
  "key15": "4Bc1ADBNmSj1dAe7X7bgfncEP1LBL6SCSBcjohUuAXEUeQg51YuQNq5YpRYGyNATFCJp8RfUywZG5nDQyBhFHpqb",
  "key16": "3kRxs5XtrSbpqRZ13fCVjEKtr7aXKJ7c4iAJqm1VZtnedfxb8Kx7LDQqKL8f56BUVJumRwgNkZWLtiyNna29RwTw",
  "key17": "ikFfZUgYqdsFwFXvqu8EPPeEyBesvqPe8tLRBdLaRGVWQ7vT57qLJVftgp6zxc48ecTCWqQDxa8TUbV7YM8am8Q",
  "key18": "4bgwsczxVBA8yXcAXzNakAzF64PPEiqHzdygKEc6AfGUx7kRqC6VyD8YwAX8xoxLAzQ12oMnZRR3Qa3qXoggAUq3",
  "key19": "2rj7LTtoXU5wfShZ3EaWz8RG1KTTm1qMqbyXtQB9UmX6XDt5oLk8LbPTEsMVH3xMaHNAMxSbk9TB5TPMqmmwmbY6",
  "key20": "4K4W2UyB4qK3BkDS1e3Nn1Whjx36ShkApniTVeGoSb5xSDSPfLk3GC8bfwVEWixTaWa8JWhLk11AzW1o8vqJVUsZ",
  "key21": "5oMDYeEGjPhJPVpLJ4MDoHFKJtg9iVBj8LuK27mio9AhU6ipoJqzRW9w6Bv1fS6t5b4cZ1voFbAJ3bH5CcHroqWX",
  "key22": "xmxk6myCignUUbLprCmNuK387bhyzU4zW7gJtUg2PYzuwgyo3tyvbsu1wPGMEBa5noY31MVj7zUwX8dkL1uJNL8",
  "key23": "3StNUBF3E2qwVcoU6c4V3UJ84op5JRE3uD3UbBeUmGLeedhw89sFQuPzG83CoQWDwB3SS2fz7GKFVh4oijmSsQdD",
  "key24": "3bTCNPSvtq9cAqfeHNJ3fPQPvxVHqq4pbMVzJdinmHvPkkdMzWV4514LZetaGmCHyfK84UZhNwshDBDTa7LNKrgu",
  "key25": "2DAiW6YhnSUkVJ6DmvoVfvzUqrsyRL8BXL5tUWBPD4SM8u8MxsxdxQ3eqc6Uf1ivrjzZd5YJeb4gH6v3JxaZtq2o",
  "key26": "62D5ZjY3nbLVQWKHsJMyDw2P6wQfPxuKfbgVWr1TVbmfNmvRRHUXiSJgynnGodGuiSRcjVjwbRtX57PtJcpyFv4h",
  "key27": "3xkAVTYE5xdgCgTv62uomW71Ltvj8WvPpiJpZ4tqxXTyyBLT796pk7jcuiC56v7R5LpKWHwJMyvNfp5Uio6Cc5L4",
  "key28": "3u2zCdQ3R3tqaMHNu7x2WjTiPv1Aekyfp42U3YpUZhWyKhgAtpA28eqeq58chg22JdjyYL4agro8WvMSEZvaXqDK",
  "key29": "3W8MLUhaXv8HVvbxAVtKyiNwEtv8GZuxBznG6fsE9XhhZ1d8j6nYYKpqGMyw2AY3LyHN6fbMEoniDMNyenkERard",
  "key30": "4Bon1ykPG5vFR2repBuf331e5Qe5s8LE3KtBoFyiMPx21WXsDFRrnpEeEZLUDoNDH3fA9mNtdb4wJfJJCYrBA1yU",
  "key31": "2qAwumZGwYCNVBiibc9y4pt5bhkEcScM4cVktGguXTGTZNYdLqgWiq4NzTmuB6cqeyLDcwsxkNiGkJTcKoVC57sP",
  "key32": "4u7PjxsjcHSDcHGyTUTWZqEihnZUKKdv6mQQKZr6txGYrQDdfVqx1jkBQkYnhD7dHbrtA8ehrQM7XiZXzD3aeUEP",
  "key33": "9tHm54xbGNvNcxFEUEK32BvPTuV8hJyktQ6JMcdCfLEgV5mHAqJEbiSueSANXtN3mTEUKeZepVtN92DdQfvuhgs",
  "key34": "5F2JK3Jm3UiqyvyLEs5FEopuCxJ7p26MQ4cyntsncUDWMYRgEZRkgULgLGcHXb7RQzdd2coz1Z9x9Ezxwsn6WPJg",
  "key35": "2MxXDa2mTVUqNoXMJ1ErXUDgosA3BYtksvhYuzYaEZ5UaHUbYCozusCiBd2u1wSa8TbWtNXXSiNMJvMDimfLisxR",
  "key36": "3wdX9WKeL5R9mtBx3BT2XTQrMQGXZc4YCgCwaarhkBMPTE1mu5e4TqETzWHcaYiQZvdWUmUAR95YHH1XGPRmEbut",
  "key37": "58PH8okC7pgJwTAMTsp6bsDbAKfj7tT6oj9HAy3usfjsYrHA3DAgCKthiX1JhpJAPHyXXRx7nNnXLtZFYN1GBBaR",
  "key38": "4Fpr6KWNN69hvnVmDL75E1wdkAn1x1EiQ9jLmd9efqk6hCzLjwHtAw3u6ApdiH1G9CvwtSPq1FigopXgccZLdsaU",
  "key39": "KeA68jUpEPHEkthnaL2UaQsbz18cTMVLaUvrPr827Dx59tKhs22kgbHQAyZ3CnG8yQ7oSPQdS8v5T84XSPKYGUS",
  "key40": "3DAjudbtMLWnPA8kW8pGndUz4HLgmsRiQDtsiZ3Qj15sE4kxuVFwSFndJqnfh1xbxKR52wU1qFpTWoGqrJbzHSvp",
  "key41": "3LW1jCV5brTiK2WRfsTE7xbzDB6hLAbkJXDLuca3kACCSDSN77EwuoVZEbAo2eXcsh5F9oM9wEhvGz2LRzn3tUFZ",
  "key42": "45qw2iysXHPEFxjLNpMMZeY1CmcjoFrTR5Vf2rYNWfrMswn4eMAHL49S9pRASFPLPkuX4867tkNbwKHd46URa6ZB",
  "key43": "525UtRibduYdGEYgupKzACb7Rr7X7H65XqFmZRjLQFLX83mVuNngChgR6RHJ2dfmf1vEoYFZYHtFyWq2CGCxfNRV",
  "key44": "dPBpbDX9brHYQqGVCV6qbfPAs2vumEg4GJB2Sa1Q1J7WUTysVGPgcvopMXcaUoG6bq78ynv7KPEUp1biHEEeD1P",
  "key45": "5uzWGeiUyiSd7PFzbWWfbRNz6eJ76PcZuE79Dm5KtfR3GqTsXjQ5XfcNNyV1JH5c5P8CZE5XtdRhvghbH5iLD4zs",
  "key46": "5N4hUfwENX9Y7sSsVF6ro6Wdag1PST16iFY7Y8RTSSFNem8zx7vtYp2hTpDnzkur1YDDhhHZ9nqhfDNe6CGpwfWW",
  "key47": "35hxNjZViSxuX7vcQtNkgYaHfMKy2aHbjVjGxwiPBchdZGMxSz2y7zmAS4AZdPKq5cD1grEYG3DkdT7bpz6GUANV",
  "key48": "5Nopzt8ubz6ZoPWLgqstHtGVuuYBZsmjqkHrnm1SuVGyPCiSZdgBCnxc6fpET7cjSExk424erBfB7KLRbuNzeA5k",
  "key49": "5Pj4jqGCtCA1ZG32Dv6JmJEtyoaEAhhsU9deid6tSkLSGC8PCm5KFvAvXc4GXWaaNHVcxbdi6KxCBXJTvhYYQ12D"
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
