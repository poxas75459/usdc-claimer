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
    "4eY5d4KncPvhbLkLbJ4NsECVPKYsVEkMMpmVHCMP3LvVgeWs7eSthHcU675Mta7i3kWaY7BCvVzWEJWnNHvzMBuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eF3wgxopVdL9uUXaA4L9e4EhJVVecDiKWKeA69RfDo6wxPc42S7YXxHRnDcRQd459GVbPxaBHDnSgVq8jWwfFy",
  "key1": "2TTnpVTKx5SEuXCj1FupCi8c7eKoFKEJ8XJAAEBUToEME2dAY82dmWYGb2MjqnWzEDJcEf4J6gD9k2WY5QxFLJ5z",
  "key2": "2dvgjiHFZZASK7RG8mQhZBLfYRwei7hZ2oRJJRkse5gKaydqMMPT7FicY8DbV1vsUV4hvU3tWYe6qhnEzWTSoLJG",
  "key3": "4DZoFV5X6nnVWDkq7kqTjnCZjMQA6G91N2vaqiBDqcmw5S1RnZHhc5xkSSq3Lcs1U3vuUDqfnMKeroPGzZ1kSABV",
  "key4": "3uyZ691nFLLCRdq41whB6iEk6eENcHBQmU7rPDL77rxMCj1A5gSWSY5bMRVtHtMYd6KpU2qBEdfhKkvzGJeJyc2E",
  "key5": "v5iAGPhu8Mg8FUSXDtUzrQPGP5kBb9pEu4seZEgv2TskgtRGV74uhABQhNKucBXRyVYMrZzMrvJBVHkrvf3UJFx",
  "key6": "5HK1Shj3P9VenFi1mvRWNcUPqDJkqwjzhU9Jy5taRuvoHbHTC48FdCANHBkP7veRYARdKLSPo1CrGWb9dBPQrhwd",
  "key7": "L8DFQi44D3ytcaEX7QAPw4feH4eTSBod7rSkgxcjzdA7B1mPvNisJjmMzanDNiucocDmiLsY5P5UkYcbZEaQmpi",
  "key8": "2p4AhHmHNW93tiagB43aQ3dGoYuHeFWq4zT6FJg7uCRSuenTapVgeMXBzwpKd5cSQEu2amUv67PTweA5L32vPQW1",
  "key9": "4nz2zp3yyqKdAiokRDRFAC6on9LntPE6QXC6Jb1TE9t3YTwM6SMZAutdfpsQje3oKea3q8WK53goK3BBJNhPp67S",
  "key10": "4SAGXcYc7Hp6JXsPMAmZ87zehyjPNVyB5rUbkUc8ZaiE4LtfmjZHHF6BjtYtTj1JGNwFyWrTPQxsGart3XPeMRHP",
  "key11": "62gsUGJMGxzHpzp2j1HxniFnBEAFgf5tgxm3MzUwjz4YvbH23YryXVNgkCYbjzZuwit43avFm4rXtpXQMoqVsUwR",
  "key12": "4ukvqZRik9fPcHnbFaeU5jpYij7nkJhtNY4SJjxgmXR22NDThhfkiFWwrJLF5otbbbSej6MYhPfdEVZ3MrqJZ46",
  "key13": "ncSYZ8fBwPSsvjsN6Upw9GGH2gLMZKK5rr8fnbeABmFTPdYxAik8Chap8SZDvnydUwiRnAwjEQpGqVtZoKv7Akm",
  "key14": "3DefWPDR8JfCzifWf7vciUTizcvo2xGzKjjJB4DKtFBhUeUiu2zpajMRb5a7hZMdZmsQhUgFCTwQbwXnJU9kc8Fs",
  "key15": "2CiMwWHBwMTxWHo8T9GVA56pDHDzQbe1aNb1NJZ52oo7RU6sAiqVNbE9rwjvkR1fttwiyzuzYtUecf3vQeKJEoug",
  "key16": "Cp3cwBE2y6imekkbdwBbRS1itiWZ8DQDgYv6Ktn5W65PLYpogCZu7w88kNANLKwaqFiK4yxfk4dDG3hXpy3xsVP",
  "key17": "3ufnucZKCisDuHK5YMRHyvHo7yMopMc4ot2AFuMQsr1yvkKD9qhxzTD1DnameLEtUDDQxpYYcuELcWTTF9VfnZrx",
  "key18": "cbDyGwLnA734KZVGBy66VvtDXJu7GuGAQGPjUyJvajr8JFBuTXd4D44iPy9FiPhvgbL94xXsCA5XEX2ayLXBgrz",
  "key19": "3eK3RvpHX5WcFjH4BErCUtHtY97gbwz5p2iJksYXToA46JFh3yAvbvUJjZCbYdKzAUfWMAQAb7KnAr77d9G1fd5f",
  "key20": "5RHwjnhf3uCWW86sEddZoc8Q4ktU2vmKjJEjhtDcjFqVZjVHdFC9Sj3FhmyUm51PyvJNz4NG9Ry6yZhsq83iJ4sy",
  "key21": "3wbMhppbwmYy1xTUFJ8T4MP2dmdHqPcSXFM3Es7bBSKCZPfgVEcdE7ptPCaaKZT9DFHdemMc41c8FtHsERTF3xJW",
  "key22": "DF2WN3kQ8DZS8mKmrzXzLUfBfrCnzKd4z1Ga1J749KXwTxX5oRp3Sv4Q6pSJXzJ5577yzjZcGcvya5rtn1L6oM9",
  "key23": "4tPmPPFMLf7g9zL1trFrDWJT86yNmJyxEbRAGZjNGwZmqejxPiAHtuNysgjL2Hnw5GJ3ZGym343fJH4eB5FCnQmz",
  "key24": "2X4drN7RDShwSSowS9CgiuwZVSZJKNu8q8JqsrP9VXQoWxsr7H2UVZpb3YaMEp132hHLuBPGSdkKkt7ZVYBGkBqH",
  "key25": "4fQUnfyUZ3k8QxLNRSUBihr6mBRwaVms5jWetTsDa1nsnj5GVCaENCQNKL2M4Fytvzn7nUKdepDpDcnfLmtFte2g",
  "key26": "4hFPj1DjztQcYRVLwN2TbaFdW3viEgXkE7C56rSsxwoG8ArgXGJCrCFKr3tsy8rNK7jhMRBNjJ4QcvwbAryh1TLq"
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
