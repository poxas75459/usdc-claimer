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
    "31ADZexNQ7CmiTwsibEMa9iaAd9tc1Pp6BQVuDdtG64xtxt3rcXVn9ztuuUgBw6mzeAB7MZ4De35bL6ocrkBzBeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkEMwSMmNras9vjw52NKhy1QkzgXUYQNCQTbxEjxf85CYv6CXadQjr8WUqT2KTDHT44pVQMt9CYARvwAw3M6vGR",
  "key1": "64nHAtPqe4LHFTvfXayWXP5wMPhjCdq3jW1YFegkX7RYPEAie4LhwrWbAHqtMxxLGpHkjuG2dsYaf5LvmGjzW9ds",
  "key2": "4wnxbuf9qCh93PkDR5nKrsUGdwF3Thepjf86ciLFcDzAwuL2pL29vzSdS3SxCsnCv2z6HJr2YcajvbRck3V6rANU",
  "key3": "5bMXMEcytSiWfQgYbeQLyykbsFDnYWYG5tAkysKXLjBVeWJf8JFpPTTv6pfkP6R8iWf3VhNgvz9U3ed8oQFjV25",
  "key4": "5jHsMZMcrEgRLbzsG5DkkMTn1zY3h9WfwHMua6YXjK6c7MC5SyAk7Dah7mYxdxqXS2jcgJwhZE7eHvnwMwT6fqDL",
  "key5": "9SSJ5H7EF8mDCYKABeQPjZJdMH1tAafCFKeh16iwQnWVGX6zREvf2Vb94xXshFBSc8MZg74nyyvHgXQeAv6qmLF",
  "key6": "DKecpqRoKjcddxoYVYQ8CwykmqMwxq6AcQEqRjCosNDXqKP2wLCA7DHpqSjpJF2M8WYFrHeGXEwky7YtdQZXRPM",
  "key7": "2KPUhjTCU8ruC2t4UKZEp3LM5GcQS3gDTJXDhTztwLhKPTPUkvGBBhuTwfqEUVB5iAtPcYhHuZ22w5Cn4AoB4mMd",
  "key8": "4BgJVHBRv6PyaLg6d6csWu6XcgDF53rQYH5ytLEuK4kDwjhZG2bFVK8Jcehp9XgxQCpXYJ9RwJeyK2oCqPFHiHkD",
  "key9": "2kBfa8Ht2cY5hpR3ae9eobV36i7zMdH7twQKBXEPfamJfo1FpydaexKNQsSstwzP79vWXkyPYxtrpKmdGL8r925P",
  "key10": "2DaQLRhV9kGJPRbqqq2NK7RpxTo1H27ei6fJfBkZVU3RoRZdwCr9Zh8K7HrDJo8BF69ATdHY3VjewcuGhhDcz1p1",
  "key11": "22FoapGe1xrmy2w92QgHfzqjKtJfB9Anmd9Sh3LfdcABPrfVAfsomhPY7NEE6hxhTuGAtTPeQF68NgEnWCBohnbF",
  "key12": "3Sx5uXJ1pW3zJ1y5ZVewxxQdhiZiPUPUc5Gc31X4NNa1DPMHw3MVm95MwvkHkyVLEiTWguqmjDmnfVrCPphSej6H",
  "key13": "5oeMME17mbgkZdSFLcaQ3Wrxq5kg7WP95oh1wcEwS59uz9ZwfN6ZUT8LgYLzJ4tKKzKbnGrYeHxSsX7iq3yVRp2S",
  "key14": "uPKYcRNW9zAkK4d6AxM75JSaAsuiv3vdPxDaKZ6oPHpF5jbpPf7JfbkdopcpiWZpLp3u4dbHsbUY6WSsHFH4XZ3",
  "key15": "3FQUppqWpqtCYJVAkBcimhxs8wg5wS6t3Bun4bBgy6uymx7cfNWY9LTuhS8oFWEBy6cyVM4ooYBddXq9tQdxVAVK",
  "key16": "icPaWXHt9V2FnCuyGpMCr1QJddVdQjgytNAi1nJ952xB1chkSBZNfsKPjnuvUuEf85wtEss1g7vH4tdLV59qRuT",
  "key17": "37crYQTbYCvbNqMsD5bouC2MpUAWJTd2ASqxK5TPe6FejEZWRwGj33Qhcw2BrAraDeRihfqe55FShcMqm9NLsfzF",
  "key18": "3ncF7TyQ9ggec5nXgfSWTYohKbXpt2nWaCK6VJh6N29CdCY8GYoNut99gfKiZ1asn5VXAwJEKdb4AmhaC7jgpBUb",
  "key19": "3ejwVjgXbg7SASAobmJQoX8vEeHy1migcfyHLENRGjPYnxRBdZdHBqGjvunAxrtArWKNSran7xbiWAvtWqonR1EZ",
  "key20": "45eUTjYprz14LsLnNgBbp952eMvEy9KST71fyKkeoVqAbUSEeTdRaRhos57P5x61UiQwsxrkkWEvyjkq9HT7mPvo",
  "key21": "42HMLzZzT74U5tEEqPsec2sBne8n3nD94ZwWCwjHxnLqfbrocZN4f8KBWiXYFy15YGZ4FzbeS9DHmKTJS9GQdmGR",
  "key22": "vn2ZUq24HGYC2j1dY9ianpQxDDVER4ymSo9M3ZRkgEBdk3eJizNx89n3FmsKg1CuNCgSBNgteKbXoGhBiXhPQHQ",
  "key23": "65Myz5dEfrfrThU9YXatDQw4mkF6LBfFQKm46a6wkXDBwE1Yn8q1eFBa7YiE3XFz5stCV7QSAcv1nBsuDY48mdxv",
  "key24": "5krN274mMtZXJt3mPvD5DriJiKUHq8uWwi3xrFMEraPgAWqU5vQWZT8bWRFoSzeWBibrfajmNQ75WxVgnRH1RrcB",
  "key25": "4stHkGhB82YyrDJUFbop1B3AsKtmZV2KSDLkAz9frEJo36hmUAmPRTm53gCGWmZqwghoZ8sgQUuNsh4m936rerZ6",
  "key26": "3ZWvhkAAwdPfJbDj8kq6WwnAj3nnfuAWiSBwgjUR5KPUdaSW6iXV1sKmrmAgUNidinPxCgM3mZwpnSjU3c2wSmkF",
  "key27": "4C8eZNBoXb1obyaSLfLr6S5nHCanQq9toCfgbuWbYvo66XL1A9WQrS9ddgDzNLBBGrSpphVB59huR9B1f8pUeTsX",
  "key28": "2UWgaJUYZyrifn7e2jBSV74pMc34zoMSFbTLSVYWYpFin8vVC9JLMqEBDbJugzuimaZFUYMfNHGAmh5xxxjkGcu",
  "key29": "58MzuM3i5a3ourN7EFkbuBs8M2iAZN9nbhsfSeBsgd91Gkrp92TScjYxbHgmj7LNexM1QVHwq1r2qNSgqaA5RoJK",
  "key30": "3fDaWQLw7JPcFyq3rHqMztyCS9H6ebgC2hcXsKSMyYn9GUZXgeVFhAusTfWhwrXx7qjvQJygXHD2sonfjzofD3d2",
  "key31": "b8U3WghcVF6JXsXFDvyaALXTNxTs35Qz6swhLu45RjbK6KHZ31QhULRUmDTzbJxLsS5r6zopUn15mSNJcE1dYGG",
  "key32": "3h2zTw1Zj3v2bZ5fLgjEPzTSYSau5VVNE6RpkJzZsom8afNMgk7d6GfytwMJ4Rd8bP5mSJTPkvUKHgFSHKP8wAwp",
  "key33": "5qX1vfq3ocx95gJ2B1fqU2BjbswPcLt8FbbotTwNhYn1WCinr5r9TKgCv1ygrkmJDyduEuwHvuepxrmTdC3kwqyT"
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
