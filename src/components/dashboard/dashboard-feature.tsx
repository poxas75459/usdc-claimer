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
    "3PDepT2X32ChTbkg6tafSYpJDHE3xVapDuiedtnHfjG9pq2GZnXePumMfbHNLgLuMEBPRHEMZVDuuAFtdM718p6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GG1RmesnnqaF7FvXsio4rubRSNMqvdhW6vnNLH8bJXxGJ2hMRD2Wuq9EQ653yieDPoZPyGpHNAfztnbKyFGraMf",
  "key1": "5Chu6EPb5HQaVoaUaKuArnBHU4Wvi1agdmTXcCM4DKBEGQ7NTxe5KR2KgLKPgQnHcQMdWoggTocysTzCsShb1Rft",
  "key2": "2mNJNwW2vZTpg5xvRc6qvPRdWhi4p39WyN7q3p2dKrqwUZuMReHYzV5vyM6EegaA54qxnmxRKAMhSoTbpM1cktfp",
  "key3": "Q7WcAKo6rprYcxUNhQnFFjYeQ1gbM3U2dWfzYWb5BQ7WpwZVjDgYnYu1zRQFWGbQT5RUqg61ubGHXkuT8wyj3Cm",
  "key4": "2Mik75A1h2i8msefx2j5uzygWZFpqTsjZuSyn3q8EFcLsWpGxj1sMDxVqaG8RAH3U2DDMHifCzAFfexyJ2zxAf6E",
  "key5": "48kKoNndCZXwGaN2p5ekLyLQ88DKJ1LeN32EsgFM83XEyE6Nvz1rmoEF6TiZRDz2uABvDF7RxSeQPbX2Kki9W4ke",
  "key6": "4zHjBWXw2vUcHTEtCPdk3gtpU3G2YPBpnSB3ZPLDg47KBFyMn1MKTmLGA9UKudsRSYMsJ4fw97ygBuMeDxjXB3w5",
  "key7": "2fn2SkC8d9h4ZkizjAEoDNDK5fUMnckWWAsnJ8dFMUhbknHSyREBJ9yrX7qvUh1FmaQKGYRLQSJ3NV3gMnmbpKaj",
  "key8": "4yvamdzPGw7ZuovwvaAR2jkpuct8D19o8957ux3KEv8GFVD6F8S4M6GpNKJqaxep51mcKayJcTsgjC9rp99utunt",
  "key9": "27zjCtdgY5qAz7C8axsXon715fUbPbUyu211AFNRDCWeYtd8BvttNnw99b6s5G34DxmUygZZUzryWFvy6GvDZaqy",
  "key10": "4nQBXxNZh9NF6hf5ZoEYBnP81Rnqs5MpEZ1rTnFdBTMkUEmTe9Z4RidrAQLPZ9maCzmX7jyGL8RJQd8WRHoXbKqQ",
  "key11": "3YgSk8DZx1T5NbaWNU1s48o78QE4KE6eimFHtTWG7hvQkQdr4vMoRMqKdLWbtvJ5SCbiQRTh8NZMok63yWURiNGc",
  "key12": "4vtaUdErqHNqShFQJXV4jLvLNwLcR5sYg5Rr5HR8nyyvKaggjAnPBqTBWRVCZXa1bdVy5kY7pANinPHYKe7EW7ar",
  "key13": "5LDgxgZaJ7AjUo2R5DpyyQuwyhe3D8y44u5WoV1hFWaCUtsYRBJn3o5yEkTV2Jt1LuJhp61Ux4Fio2ia14LMgjVX",
  "key14": "x2HwLKtJQ8NNtPaLBMACAPP2ntH2HZL9gxeB2GbjaVm6V2dBiQm4b7jEVzHwqFkZ1GyRC3SKvHo6oZMt2tbTbPW",
  "key15": "5mixXgiCYx7msVWZmmeAj89ot6nNJ9JwcstzywUqK9jDnUJJanUHuc9BMwffgUenAV518vcS4ksLasddXMb5yLsJ",
  "key16": "2vFRHXhKPsy162K7pqCz88xUywTJCqnASkfbFk1VHjJNmLZvHvBq8WyF6raC6C85qKqS8LtKhjUayZ183hRGikFS",
  "key17": "PtXFtrARxmfLWLQhHMoa1MTRuTdp6jPVEzPUF678GzyuPqZyjhWH9XYXa7k2Yt8D7CjYsX9hvdYGibp3PczXRrK",
  "key18": "2t8Za4LzxnuhKA57uyVkjYVmAB3LAtPf5AkdrCKpw5juj75r4x6fdJMZyb1jZMhfuyTh7nyaSoq3SGiQdtVYMPC4",
  "key19": "qRFq44pxUHAuqkUwdxdqzGVLJpnR4ipSVqZ6aygfe9cn73kiD5sTgTVbtSbEyTp6ieBGSti3nVmHhYpFQhHbMP7",
  "key20": "5VbD72HzkYWVi7uFisYkRJ5RvM496jWo2wCxX8CbdmPcasogPVido8uq22awtSzNttXWj5jAHAtAF2wymgR5PD7U",
  "key21": "5tTsRot3SfQRBGqeMgr9WcDuVtFYd7KLZznHunooABNsZcGHQqghCroDqeVRSEwdssXP3jivPEVuwgsduVL6xLbx",
  "key22": "5f75QP9oMuXifvLzXnr3X99v5GmJ2Akm2YiVaRruZQZNcNL2HU2eYCiLnJrL3N1yMQqs3F3JZpHn3vWcn6GTVY4j",
  "key23": "3umB8yjStoDiPFYpk6MU54QVCKn2g2XmGfNZ7pHMheyGmvGt1JK2UL5Vjt1nd6HZBwEivWue1KPhMZ9GofMBAtqV",
  "key24": "EGJq8mdgk8ow7WC7chhhzvBNcKPXKsxKX92v1tdcLiJM16rVXKZCTMGoFNH5Gzetar9dVzXc5vLajwkBv2kb3MM",
  "key25": "2w9mKgD8gvJ8R783Z325BSRvJ5EkNnvey8BLXmuFCNfemzm8zRSEdLmPm5v1wGaZMR5Cs81Bf99DjznT6RDwbGoV",
  "key26": "3dt4hRAMDpjfYqq1Gn99U6CXCPNuba1iZtqmeTd1VyM3h34sdFSB8mLwCRe8cRctBSxYK7aBNyP1oxWpAgbgk6d2",
  "key27": "4YbRswoQzsuU2rms93SS6UQz9nf8VQLcKiMVweAUNhxbTuXZe952xgLnTGkGTeJ5Wm46WFLVeQpFzx2Hs1jh2Sqd",
  "key28": "24n7E8kV7ntpPKyRkJxQWZoxsD9tqd6tfBwYDmY5NMVXqYNxTjZt7i492aURZQScJ5KJnHuHqsE8exMjZQyNZ3Pj",
  "key29": "3cM3rfgrFrUhRVCkQ1gSAGNnohHHimjuWmNpobcdFPewKF3453x7TEosDbbvfCzakZ6rHAwapCciQpaBx8vMzHTt",
  "key30": "nY2rBnaGzYYzn1RqMyqopXvJ34GJtTFrpUMDbhV4F3c6AnVS1jHHidmjQhB2fPAiH5wZqR63py8XViEQtAKdMv7",
  "key31": "4386BS7qc7WHZs9ZMhbT3f3GFxQ8kCWCjLPe1E6y34nBUtWbxAgFHjoMnon18yJndApWHDPKPfL6UrDSFaLiJ8QK",
  "key32": "3AvgiYfWzCZhAtDSuBQof9z1FQdmD9v3Y3w6SrGaYfQbm77qB71hwDRNRZXsCTK5NJajbaMiU71aKRwr6UNxUxN2",
  "key33": "2J5iuYrqVc3wUqhhkVhitWZTUyebtN9MZ3AEdnY9YM6nb8EBXmhRqYGu1ZNStd6gsLykSgyaPdi74Jd7nrPdKz8g",
  "key34": "3yGugBCAsFbNXNo2o5VbrumEbqKYH12rJmxYp8j8wzS6XCJFcHhKPhgqzKMerzgN3Hz2x47tjJKUoaVLCPcpdKHX",
  "key35": "2n8UDLdQDeTQK1hWFC1gUJtfMbKzQebmKfE8JvFFsptV8adU5GJp6ByxwEehoBeaTXzATcxDzbhqgJ8JE4Hx9mmD",
  "key36": "3auoZ7oWmRmXJDeBRqVkQxwS939YDnC962QgHt1uL7XDbDQsrTcu9y76i2tnZ2CPiLrr4B1NcxhQPwZMTPYeTc1h",
  "key37": "TpPeCZ2v5GRhqVSEpAFUKtg5PHxw33oG3UZwAGFXALfZMXcW5hBMYtqGjRcchVLCeguQZ1TpjY8TM4Q9wUtWPv5",
  "key38": "3q7ondNmnf77tft8qXKyw5xoefitxfKYJh7JykN6RXwXAkRpzbmErPxf1RMfxsEWPLVwEikGVydYd9vnK5Lbgs1a",
  "key39": "5whASL25gZcQ2eFG2nNj6NXPDgZmK44e49ZWqyCAp2Fz2a23g6ns8DSdxL4sssUEnoZek3jaoZu5U2NySQFeXbLY",
  "key40": "35afKEoUrdvzRaufgM3rbQqXipu6aiCGNcE86oWDnRpzmWyxpXtBGRsZ7anVQYjjcd4WStSDskPEq7tcSBabmWRE"
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
