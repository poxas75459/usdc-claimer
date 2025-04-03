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
    "5BTsSNBPJMsc5ZEG8nDtWoBBVo2ek6MakyqLRBinjvWXPcXLjYKmHYMfqFMisXfEsGkViqHgFyMzhRLnBSRteETA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pGi768Bb2WMM6Vz5ojPVm6gzRGjtdGtB2uFYLGS9PeMQxdzcpymcAGEKCykxwmVwQe2b2XZouPydSHknX2jNPb",
  "key1": "65fdHRBPLExUwxTrohGWqGfdhYCWopV7dSTUHbtF4aY4f241R7hQsMhabcnJFxL74sbZV5oX3PF3GRELhRwj9Awk",
  "key2": "5yyVwUAtTHGxtjBNrgrt2TsUnvLUhgvtL9y2Qvit7dMuguMUWzVJS8obXv11fKqfojbzfq5AkiLNA9dF2Np7iWLp",
  "key3": "26ahSPyZKhAQthJPAn9ZFYhQnafn7ceFq6v1KkpYyHoQjrxYe8dLNYY36y4max8LPjrvtHt73cK1ZZiPujgspBtq",
  "key4": "HntMboVexUXi7wyUUnkAnLVwoi4wfBsSRbzt4kLMwE246NJKiXULrnTbZFFZbKCvoMPYUeUBdj4VTRc6r7FNBcP",
  "key5": "3z7rGEQ86sdpnBpHjKhyihjWhDfbasagejoMZxLwa3jDHbiDFvyMKh44dWE1R7S2ERPEdMYXAbk2jaH3zUFtvJjJ",
  "key6": "5MJT8tYWpKbppayCiDAo2fS18AtnjhkwgUzSKfZk8jKV5TQhm5mah4nSEESxDNHhT13igpfHrZdLeX2YZr8C4K29",
  "key7": "5cnbMXyEteBYUA8CH6jN9SFcb2zsCHFWhjdUPXjL4Y5SHhnPR7RhwUXYLzVAjkk79Ufs8a6ZpzZZxP4H7qySvnyf",
  "key8": "53Dy8sv7savusEUyCnjAVQy1kwf1ZecUswg2LWRdNkPxKVySasRRgp2HYTTKhi7qxFiTJa1e8jtpZ2uKVWC4hSgP",
  "key9": "5dsXmrZXZyaPrXSj6UTbxwucLhMrwW8Tcz3M8uJTmkkXd7EyaorSEFunS4DR3zPxwFmMwxNYvbJEKeSKCgXLFT1f",
  "key10": "2kp2YHUtNnqyzqMGshTUcUWQt2RHfECg82357LADSxchcYymJVaTTWavKMd1Y51EcH8e14c8dmtPaJXjQWrM7sY7",
  "key11": "3e3VjEJ8mJwTuZKZEhXqHYwrptq3ECUW4UvuyFkfm428JJY83ewv6bDZbMHx3KghhKxRnXCoWXHj2a8w9Fj6kgq5",
  "key12": "2r62TJfyToX4hXLRj5YZRZvrDNnAw7foiqARd5tAnF8i5LuXwwbaoMLECEWvND15mGvAxYgUY3eysHZvZu2qtC76",
  "key13": "2EtEDUijzvLUbfJX6VPV5WQz1gN74CUvcKiovmHBgbCJuMbfvyu5tG7hWFwVJGPphTBkjGQxNuY5cddPc3sPCHdk",
  "key14": "1QZUfHX7VRYhVJMmsDwtzn2qtTWG2kEvLxWbHhQcKVr6kLE6avRqtjJ5rEFSPUGx2rG43ynA33nGXBCYHiG2i1S",
  "key15": "4T8UsSFsXQGxoA6zgGLytzbvdB5ZLpC6nBVVuxCXzEvDKG6G3Y3pnd9CFTMTZmucHuzHoPshJaNf72YPLoB7aps9",
  "key16": "4J6FLCb9nHf3mTuWpVDcozsKHJKMk4dJ8YmVUzqq6e4xAwqaA2tz5dAM6KqHpV73PSyksvuiRzkYegXreW1yT5LA",
  "key17": "4QZQS3Hap6Dvf6kk5m2nbmacdKF7Bxu7poGgLBQHEg1hu2ii63TJX8STXZ3rvtxGiDoGWGvZemfg7LLbvoinsY44",
  "key18": "5LV7fBHD3rnCJdRUdgQv7GY923GiqcC17715rdgmvD6jiLZT4vkPesSBuwa3AyebosVS9ZAotAtCQ93bYA97DLeb",
  "key19": "26VakyJ91Lp8geUjXUmYRFpAAtZw9Wk9M8coMB9X5V2YkaA3SLrbghiMQUotTa2qRLrkYr8tv9Vku34Yu7a3CwdN",
  "key20": "5u8c5Ekzoz557AAVUFQEXt1pnfFE4QirpmYS7ci8SwiY9jWAyTg2Nwb9e3hc1GzvgZKLDvqHFZGikjeE1WJtAfaM",
  "key21": "63vrjiB4JVVBvMfdh9V83zFA9JG1WBPJ5KfoQmAjAcHtDzqfEaxbPKby9xpv7QKBdMVkbScwi98QWZEzK8eAfz9E",
  "key22": "4JUxSJ7M4vHYeKCjc84CZnD7pKdMeCFCmXsiuLS9RTiZh3D5e9EBcccCHkqqS6ofvtiSCjUQVQAM2ZWkT5X7cuAU",
  "key23": "4qgGwxU5ekL5Rg63wkGAfSLw5RtVASZEhn2LCvr5hM1Mdczcj52YwPKaupEKDvkf436aFUNusKkb8vrMbXuyVC9z",
  "key24": "453unkyb94FiGXJnjRc7nDDtb8h3G2GXhUmMjtkcD75yCGDdt7JnuFiY3rqqMVusekdHfRmRvxBDrLugKUVLBNKA",
  "key25": "2Wj7KUGdrbCF7D8iDjy7G47N1ZcGmeLrmY6cEpiGL9zUpCEz2EVfgU85oVNwwoeYhrRgprqhgGJjNew6YnC5iuj1",
  "key26": "5obL8RXT6QpYmmsBtRY8p2D7KBjG3Y9inB7fhi5WLrufVh1PHBWtoLHXA7FV2URLQut6gEnZDqqCteEc3269HkcC",
  "key27": "4TM9uQSbXTqSiNYGo9Z48LtnyMQLLKGHNL7vJqp4hZQc5Jerm5T3sXKtbmMeVsbDmD3PGNJWY6oHU4wseYfe3Dgi",
  "key28": "2ymqSmC2ge2L7BrEg4TCFQ55jsYbVVhbNkUdEHhsGfSWbKQtu1fbpTRC9Fe5Epcky7kyDRTQM9j2TXQzeHmFd27x"
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
