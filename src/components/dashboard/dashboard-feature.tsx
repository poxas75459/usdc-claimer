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
    "3nDEYZAvYbUDDJGJ45QxP988WbA2Lu55fy8cSVanPHT3zhRRo8zMSB4Wj3NRBLg788ZCswGuvEgMtSSrE4vb3pGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5stpPsY874YEYsKGAcDFE9BzDJhHNCyRniXJY8g3PseUKYLCq2FL2M6kk3sU1GNmpNqeUbExfB9W8m36yDyQnEH1",
  "key1": "2tw2UV1FimdGvqUTkQarwLDB8BaXMNSHtDZnqmah15pXChGfqxz2g9daKqa3fK7BiaBMwdqCFSSadicevVsQUhVV",
  "key2": "4UXaDX5sroVJUi89uWuHNSmaeSLpHEXTPHPPYbM2bbuXNTU84XpiYLnr86j8bBpUrF1ZM8xk7VnxbXtqKqfwNeMR",
  "key3": "35JVWe21LT41MNsJDtFEcgA1Wge5VHrtQxGXE2kCSVKJMDs1Nvv6UWvuc8jyouHXV4LjHtxoXiJD5rmn6s2SLsNB",
  "key4": "3KVScFjWDkqEsFUK8g12Pir7TifHr75Nu5Zs9keUbxzto8E3uUugCH6EfsfrYd287dBgN5ZF5zZSUL4amcYcDbiv",
  "key5": "2JUdVJgemtZv13LN6fJHHWQFXEGfmKV352yR1PWFgiYJzgrYMKRCjaMenXoSoYUKNp4jM29pvHtgnWRuxp9uZ92S",
  "key6": "58mEpcPWm2yYYa9BLNtHV9wAqwMvWa1c4KgNZwrQS586YkKQiAYb2U87NWeVFqFxQxTogz1HMCjb2n4C6GdjkWpT",
  "key7": "xkjyLL7vk6AAaWdb27SRFSETKAyrZ2AYYe4gDCkZ3tpZYGJKpewd8QzU9FDeS6yiaQ2QfWCfKrw1AFtuG9pD6qY",
  "key8": "5ySWQrXyamTmKE1hzcJrKFaMLFpSSjRi1ny7bJbkQRm73XUTycSbgzEuAoFzyxG17R2yHqE6TP3xV3giZS8oLVPe",
  "key9": "5CiexAHjMWCznGXCoNyyMS9dQKBG4Qgq1v3B1AXAopXDsCRk9WPcryRVKWTayVQ3AKnMeTvHFhtGibqcnekZxzbx",
  "key10": "3HTDboMddVYU3YHuQXRRZNtfwAqKrSWEJDrktPZwhjXW1Fy9E2w77QmnpQSSKeXPsKyHTnTEVePT6MzpGNp2Y4Mf",
  "key11": "26yjeqnnGN1LsMPzov1rq6XoQ6WSCvyVi2brEmgGScbNmNxF3B7gJo8jZS3fAmQCB1CvAKTNLcCqAHqrsP3wgdZX",
  "key12": "3rJYHMznPCQz9L4aLR2wdknSbGBMz8f9TAcDJYd9PygJYGoTyAFgioe7T8Me2iTFwVHGkkHXnrnJVuKx58WsavJa",
  "key13": "8nTQWwHdHDvrPvfZJcV7Zc5AFA8UfDB78sXSx4BqkJp9Kkqf64yDHqSeDc1L8UYmq9ZfyyTm8fHjHZYd9H8xyeG",
  "key14": "3bF9wHv1Nf1LvRA6GFGHDMgA4qDupNRcpaHyXWCXzrJidYjZQQAahV3r5U8WL6VXoYjzspXf1yDYJTe3fSYPCAPm",
  "key15": "42Z4F3JayC6qnntrC1iSq4LfgwjMoojcrGBQc5jSGX4wey3MhdqjXivXhcpBB9F5EfWg4GbkSJBSJKwTZj6Ay4Fe",
  "key16": "3td6dvCPAC52WNHXUtMQZXs5WgN7ubSuo6QrTAkVocALshKr6rJLZQRUeYkezGGJdfZw3w5T8UHKXT2bCneDso46",
  "key17": "2ubFG8ALv34nCXUufg7FVuXwWxdbCgRcokgru3Kygzdjgvbe7j4yVzGzs51UHhJiek1VtUcMUbBbrfCjKMgFd6UX",
  "key18": "56ncK6Ej33VZo2RvDu8ktS3QiwDJZhqSNQPd1hWh3vSyrarM9mXovtXNBeh1pn8eJsjDq5kUXiGxJJQt6att51R7",
  "key19": "5dEuitV8ZRF7LD8NYnxAVSkshEw7LqQLcvvEgW39aZZ2ke94Tiresp4Miz5kdfSAeSiK1HKbHEkxuCEdL7VbeYBJ",
  "key20": "52hBvvLTVKoBQCZTB3TUj9JU9SsfQ5SfccYwn9Mp6ceAAHcCfZ5gooPXzBNDtbXCLYXZySvAMi7RmuvXLcq2ouzy",
  "key21": "rM7tyZzZuX2SbYYHSqnHpQEAHwPG8mVQiLkcBckFQALhw4vAtibvCh8v1H1M6UvxBRxM9rpJhwEEqSmDGCUi7Pb",
  "key22": "CAJLvZv4oJmyErc2thPdipxVwuKh1yXBbmC5ZPEFBfVto3Uv8aykVdELqqCGv31wQzpWkK5VSh4NS4FJcLBcrbC",
  "key23": "JqNAuXJHvk85gzRkr66zWNh4rV7sBHWADvYbFY1exyBRXW4mWQxRV7ATHvtKhkezAqt9n6SJD74VMMY8G7CnriZ",
  "key24": "36QxgecTDmzaZBb2vEBPdtiZPNzc5vjQcjp5KP2zyzvqpmKdJ2HV7SU5ijpWXUZ8Dq9peEqpcxzVtCAeQGhZitBy",
  "key25": "4a6H8nJ7dgja4T2E2PVh4C7Ysv2HpTFLwCB7iCKPXNVh3YtvMfZEVoPKbtnrEF6fmLJNUZQeLk69GDKrc9i4yv13"
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
