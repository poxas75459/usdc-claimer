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
    "2g5aw5rYE2YJChmAcCEgDdt33q3w1bkB2yzHZ9B8MZxfMX4PUChhDGQ7oUNranDTfeHxb36SMBqSPrm5UuM6JZxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbK1Q22yjrDmpvjpDRtmkkznQFmsq48HqekpFX41Y2GDneZB6Bzc3HbQiB7nVf2XUMxhKfEJEwtVg52Z2VkopH6",
  "key1": "21HaZZGqgHbwkf69yqMxhTgCk4ZgUZ1b968pn7fWf4vzDKbzHmdcTaezZiserFDLS4tmLXLAJ9W853yfXKFi9C3h",
  "key2": "3iqi7PvdcJh6mdCxkTuKTj2cAZnMHyzxwEwSrSZmj4AAJQqBt1EB4N1aTmtZAV2aobBZwrV5qzTW6B6U4ykWe6jy",
  "key3": "2ZS1b5cZFgeZjxySWP1CbjQaDPz45cBUB2awVCteF8NQ4jwqNpkZK7cZr5hDmPYUYdq9QKEruqpCiLaSac8wTsu5",
  "key4": "4gCSne8DNfAH43cEWXkVkwukGX5BFVyMQmzV8ALMq1nrFZewvrFLkMEgZ1TdJQzU6AG8ESfdsnqfX3J1poupgLGS",
  "key5": "5jA2wbkizogZjToH4SptdADqxXsebd1dMLrrTsGwhYdSeFqUJWDNEpdc3NpE7hDSgB9vpdHAypSxsX1oamVuL8SZ",
  "key6": "dTgeN9W8KqSmMoz1rb2Yh5pnrwHcChx1KbzTgUZgJ2A3Sj4RFPrEGKRgssiyaD3hcUjoqyhwtnqgafMuhjU5TnR",
  "key7": "2JUx3rKnQLRHrRCUQQE5oQLx2WsPCUgkZjrQY1StcZViJz49QGH2MQMgHwDLHb2cfuYs5Nb4a5AAtVz2jqDkf7Ft",
  "key8": "31vrGy81PKxmxpzAezG58Jwz7cGa1zxiF52qMXDpjdW3G9smtCuMixUufKj5wdNjFnkMjRZWnaB4poBLKjwVg2wg",
  "key9": "2KVd9jvG2mPBXR53PVWkDDwK2TSk5tjXR6T1yke5wZqNgshvcxgAavCBFKeeKtHpW5tSvFffhJU8WeZEU16d6W1W",
  "key10": "YA4CZfg3jrQCVKg6G2mfcXhP6S7Udduo5MMdfXWJc57QNwnogDzKbeaQsv8SqcfqdPohAiK2pYNcGprzsJXjExP",
  "key11": "kfuvYWuuixbuUcVB5S6nNujjjKjoAUkefiMWBWBt8eKQrPwWmHaeCTS8bPjPg2vkae9QE6Wn1x9FoT9qpfimgVo",
  "key12": "44e74AmAT3xNLpo6Tv3SBWGVC4WbD6MHzPfumRLMx2dBmnwGpUBSTYWD5Tt2p14moSbnYp6PYQzE9QA4eRXyEGgj",
  "key13": "58rmHGcZnraD4sjJsfD2d8BAap5mNbKiBcnV8zmwh8PmrnKXAVg5iGYnb6B6VRt63siGyHet1aL1tY2GciBMwTs5",
  "key14": "5n7L5RyLuCyjf1eaHYFn1GUdkEjYFVwFgSTPxNtM5zPRg43LHK1V6H5AR4fwkKCtXmno7WRvkEyVvWkQAMYPXwj",
  "key15": "3jRJ8nVniGxKjYG9ymQjTwgaAvLBGVxGz4jEfLBhCiFRJekFqrUPvA1ZqcXD48UxN52s6YBMEQe2Xqzz8cXQ1iky",
  "key16": "U123WAhcEwAGkgTHWehUiJBsKDDXUgmUCbShgnWLvAgroQZ53pu5k6LWyyNY5b7dirpttMsWsqafjjE6taU8CYs",
  "key17": "26hMPXTtEW6g4GScHBny4ZYECqect9pLJndhKyKtrWjEnCDkVmawBCdWQmqhuzPXtZvsa7vxrnDmoY7jRfBSFetP",
  "key18": "4t7pDjrAHBFWS9yw447e2nWsqvBWohs7z5rCgcbHrzARYdrRJ2zG4BvS2qFJAEvAC18rssb2YNrdXaRfA9CG9J57",
  "key19": "38fijx6JcVXJgiiKyKhVq4CH2VCKbSJt9NqvxtEKcr8N28b4bvaXZpSMkrDbeLLTJKYZ3ZKQPbTCHpUnkU6tvhqj",
  "key20": "8QTfch7okjpzsrHSiGba1vyisxqYtKWc4NViW4JTFUnou2VVYTucKuGx1WpPvZyq46ph5upzvm4fvPGEUBzHgyy",
  "key21": "7th5StGd4jrVYFrcYP5dHWV1Y9vnjjMST2aSUaNyW5SHhQyGqtTsafip41jG8BJxtpeHdeEYE3bC7KhxRSqJMJg",
  "key22": "kcjU2cWFmz632fPM4Wv6N2wPccRuSVNAuXsuj7ddFCUu2ta33dKx43uoVQ1SCSyZ26hvdhBgwfLzG6a2Xm9opct",
  "key23": "2uTft81eZBMV9UYNUJxsBupa8H8rN7kSTENCKQVpqt6WLA7qFzzDknqsvq5xM2ep2j9AKqVs4s9hS9yQiG8HQjd7",
  "key24": "5c5XkXdi2so41p8NgEhHWgAn1CR82GQKPFZWSAQz7yj1csShwNtRUW463mYYvhLGqdJS56ALuVn5d7tgfJJPcFkj",
  "key25": "3Naip3R4ap2m4hvY8fmrovgheCMYfydZvk7V85DHz5fnUUKzxU7fQmoVp1e6WjrJx5qZCfbZykYhuzcd7a1F5Sxc",
  "key26": "wEBL3LVEvi9yG1DzTQWgmDSdwd83MUP4X4TqK6hvKz1oGptVpMS5ugUpBgiDeCm7Qcz8tCDSvWiQXAkD8AmSzUB",
  "key27": "Vt8Gz9Wf3XqM98jNXSg8bZzK5dnbJJJrZpzXwWWCDJ9qjE2hcdN4WUNewsiFiUKe5w3PsTLh5jWMWpqPm1bTE4n",
  "key28": "4FTDBkxZAEeNhyLyYahShxF2FpGvihPfsXoUSpnr7wYT1xtfZHucmyTbSo4CftmXqJ5Wy4HooPVLPSyFNMNzpvej",
  "key29": "4NorDY2FEwMCJWBkVTLDmwVgomNPSEDbjZywBrK9trzmjJbMKZ31dmbvJDhP5BsRUtf9Crcqm7J5aDi85cTLoQcc",
  "key30": "2KgWfLjZyfVNoiyhxQzqxpyU69ipgyziPstUeaq3uYNrxUQCGHFAY6pVVLsri8mo3UXwcXtZY3yC7iHxNomqw8CX"
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
