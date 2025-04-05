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
    "4K377umdREnzjX4Dh6pgHPjNR9QCWz33BMqmCmRewpvUnUMKaH8VYUL3KjPoJn8fTY3KhsqfQUq7VxdgtEdrf9Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272ar1pv1SkrmxbUFj3Ns6xNiVX7eCQ2ZwLEWasVQRS5Wh7bFfWkjDRNmZhFVhwKjbhf615X58DLVo3gP5RXLhpq",
  "key1": "4UnU16Jv6xPmwfcMqw8Xd5DYg9xxhhQ6b6uG9aJhTcoH117RRcFKGSF8FBvNJcFa8dH2PPRmZhDkeU36fWBcEYLG",
  "key2": "4ijHwJNyGdstaZqXjKDETLw7ygYaW4MRdVrXFCr8TxdUVoK1PbLX9Yssb554X6yEYXmczHeajhXRM2KqxqzS6wki",
  "key3": "4nzoB7f2a7ZfbJcXrgHpp1iysbxa7F1GXWWwphpTRWUNJTAz6q78JsZhcFkykCNDWX41RU4yGHfUfckaufnecPyG",
  "key4": "cN27DkuGURjJwQPZLMLUancv1vwRReKTQoF5jATEqyJEtsk8YMasZVadYSNbgwwy1m81kMRKX3nNzgLzytEuU4Y",
  "key5": "2NyBcWztoQhfrfodmX1PetKjHt3JRWp5uz9tVAMsMpFLfg9zxummsxtvN1wTQYAm2dkUQyLELcNzXyWE5eGfvwAq",
  "key6": "2gcwZC1ND5nDhLJAXfgR8E5NvACuTyzEprY5a4XsUpNmRVKEH1QZka4ekijPMvsTpV9sQs4Q4kmDpedKuzMJoevB",
  "key7": "2pSgpVwmN76u1NDD7isZedJuNfmAFTLgFhxXbinMDxR7L3WtTxLrwje8t7RGgbXyR6V3WDHUsRU7jRpS1EKuicmm",
  "key8": "4vwBLdm7JRhfm5NooAePVEpPsqTdkMfguWTGFnR54gxFnbZsJJrs2qc4gBNeMnV6on5obZvRScHk9dPf4WCD1z1u",
  "key9": "Yb5U7nq6fQNNdoAp7i1uH4Es5mecUSuXq5xP2T9J9cRxMBnfTk52vFbcCdSLBEvCpJgwqWcVTbtHKqgv2koZUfV",
  "key10": "4DPXW7XgK3LBBFJABr8R1iYF9oseWYzEVvwwd4yGWpZnKu27Yxt4N9ngQr4buwTF1NUe61zXz9mYzXRTUkqTfTcN",
  "key11": "5FthgmRVZ3iaesf5oTYGWtr2GSrj1rrP1xVZxNm2GPaeiN6T2xZFXFGVBhUGhYALwTPRe6HqEaCszdN1RJyPwt65",
  "key12": "YyAFw2v7ZXCt1jk1iGWKqnvoZcDgiFhbQcUH3cynYesxJgxxsUTwmhB51d19H2Wcs43wgz65NgLybXuCraByPzv",
  "key13": "3RiBriSsmr4Gy4TmBYVhLr89EARL4RwbBXiXUwPofmpWXVQdNtGpST8WxoUxyUyMT8umrjBACW9nZHqi1tB6iYrS",
  "key14": "27rZ4HYktoB5wgYb1rrE6W9RPeXUAugwPcktXZ44zWdesrRvfTBVqTH3MtLKBRJcr2BrAjCUxAioVaUouraBq7Jn",
  "key15": "3gVt8oize3MFwq1yTd3VFj57bupJBiYK4PjEtk9CyYS3Hiv6PvhQSTizpC3c6qak5ySeNgJb6QxxvkzTDEsgvKpd",
  "key16": "3hzSU1sgwCkAdwjWiJi3cDYJtAHThFgb455Tq1qz7qqGzPgvHMMBaGN8mTYtdrjcdX7UZYcKnNVKE25UAfg6Sz1A",
  "key17": "JNwbSVkxLq4BWPbyP9XAmDXrWKUQNYdMvYACWTPkTwFJbKcd66XYxXyipVCHNNtq4P3YFzFPytQzddSze4FK4uH",
  "key18": "49eYpGZwv6kCh2gTLbX8AivE8JhgcWvbWZzZMuKwv5yzK3GV5xiG3nuETZQJwPDT2qmiScR1whjmS4AGJtrNakjH",
  "key19": "37KnNSy5uEYRBQEHnGKRwrKcVaArSq77gQRN7QUGCUSDk7Ad4j4BRWBqnYzk7QQeeLQbwqNXKjQyeawhGXEWrGSx",
  "key20": "3Ft37McCnQLzbxiQVnDjabbWie8RCjZaP2nkHR3QefDK2i44LN2Jue3Js6tWJJMc2c9uJUcC5CqCLrLmDnXKctXj",
  "key21": "4862Q5EtJCmrW6GZnRmtqU14QoQYScpKB4nvsiitwXHZo6gCwS67TuKYRUBa9FpTtxvVXuqf4HGysDCRFChyVJwR",
  "key22": "4bKZkYtVf28X3GR1FEZsFEM2a6UTxJP6j6RrG71QUGuymMjVbArTJNyahP6wJCSgdSo7QPZtLAndwWD1N5J6iwo2",
  "key23": "2cS2BSiUwwa6sLx6Lfaccd5rZMpckWvhHQ1YPkKMtYsbdtaRce5a76B4rxGacKRaeXtnctT9fUdvtYrvcsiEfABN",
  "key24": "4APk9LJq9DmpuQz7wF4oWJLbmatx9uvyezRMV5AmaziqSfTCdkYNtQdq7HPhyDw3fo1ZZembAtHENaN96gynyMYs",
  "key25": "4qWkA9LqwDMJJFa6tCqFBpvpy8kUnrN9hG9dffPAi2dFi5oGTNncQVsfQHRxrHR9MyHnBVqxs3PygGgLJ5isd1sj",
  "key26": "65XZ2Yt5rECpGfdQMbHWW2ZeABaKBQ9xyRUR2W8T4XLL5obr6MRqCpn3hUymgXa75FAR3z88g7NLYaYhDLXGZctM",
  "key27": "21uPMCRFzhUbxnv2y2duNJxPBu3EzFYPZtFbQS2ra8afjenydqaCzsBF1EsuBzk3qZviHQ8sQZkf1tcgRrrVPvZJ",
  "key28": "2va1Kfumvc3NkbqgBjPBy59CXooNDhdiyc7fsnWtZgmAzX8dQydhMXNWuB6SpgQ3mTc2jeZXCLe5yAoJEW2L1LPH",
  "key29": "77CJfzZEzy5c9WYKdqM9UKUiCSKsLJLXJVW8aacu4xcXmeuFbQozKbqBL3GkTYzJ8ULPnrctPfFGWuNQ1k7d8uQ",
  "key30": "3z88yAq2TyESF2NkjgcrN4MHMhMjqFYHpHyqumWxB1EBxsPK42VdTnwJpdyezvtzeguL6xK5SwNcLzLEoWLNL9st",
  "key31": "3bsPT8zkTYjuuWtpqukLKD4dZgGAbnSnRaZFdKisxhcN8aP6dKbvprfWXi9AA2oGZgycgo3NExoi3wwSGbtfx1eU",
  "key32": "3kkDAGyheisZr36TP4FgjgwHMLYejryq2BhPfKWELVRETgpVLhvjb54Nmz7sWZKkLfZpK5ApSzBr78YtnrSGa8CC",
  "key33": "54ahFV3CCrQDtr2b5TGzk2eHTX2fqvRYt3y5QHxq41E2do68zxhSN9Mm1tKfqDLsSRp4UC79E9rY2mz1DtiXrg6D",
  "key34": "7yXXK7LwxMRzrPd5UEZzqLqFJm7AQXyFvHjyQd2B5D2AGMpTVmbv6rdFKqGgM87fmR11kGG4CrWnMGjbtQZ8ahb",
  "key35": "f1jmYoTG8rzXNKR2ZUUkYWQKRqxHiQFGQPAGyLTj25hz71XBvbbK2YFg6vn9x1PGgJQWAx9EyWCip9jM14sbzv9",
  "key36": "23rhQTJj46C63RYrrvk5zPAZ8Abq25rLJ6e6x8SbvZ34JDZSSMesTwpnCLGUskGatFFjh72eC9YxbsyFKPE5B69n",
  "key37": "5kVST1QKeNvG3JvA5LrmcHmunaQPryuUuHy3j76DegMm7WL83KUecmDh1GyBXrFzmSGNpjA1XbqUbFqAkAxkcgxh",
  "key38": "2kL6vkyeT5u6xSnWqiAjbrwjuWPNQ8Wrt7Yvv5777FdNH8MaUaFZqxK6oChBPe4LoV6AXmXqciEmJxM8YrqVS75E",
  "key39": "55GK1WVPanwYjt5up7uKFtxAV36dL773Fe4FUZ3vuBCrim6apKF7iseM3pWgnh93Ch5AtGq39qxZsYgCQc3qFL68",
  "key40": "N9NDPsinqUS6ETgwbHhb2HaJhtxRbCy8HaAuWFgps5MFbbSvxXRLuYopfpsrrmJMkVUawPvptSb6dRLr1ArxVCe",
  "key41": "3D1ANsqWDtBgv6tMkFCNX8QH6rSLXDfJ2Dv86DRHazmdkcTCiFjiRe82FZ1FrN3nxwYoy9DAZJiNg6X51H3WynyD",
  "key42": "2i3nS2czzAaqfZPNBbixuvWBs3W1nCzH76kg6isxSh4k24TCPDD4aRoLUSDknet51cPNhTd3B9f9eYEPn5NSn6vP",
  "key43": "5XW541AH5xosA7A22vu7xFRZ22v1oJo7GPSG5uxnbGeStvdJMQ8nHZqhhnTzys12doiAr5Gf44B7trSJRdfZ85CU"
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
