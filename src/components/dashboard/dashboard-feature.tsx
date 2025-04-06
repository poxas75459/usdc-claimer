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
    "57eUL6AtWALurD7HB1yzjnvF7kGVaWDjN3gz9bXmzbFJDEsm5eKAHzuj2h1rq6vMK6W4maKsiH8zr7CGW9rdFHyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrhjMkrhGUsdbFvSneQVzM4WjcwABuVspkGr5GVucmFRupssE9y2hATc3SDLjCD8BzirUp1fwP8seiRwHyyeSpb",
  "key1": "2uinGV5o7zXHzQrnj3fjcCqSEc5UudyRu2drk4WmNUXzGeMxHQWdy58CGt4wdMBUVwwwd3KHPCgQibHrWtvah18H",
  "key2": "3yzywyJxQffopdgxVbrFGjUUg9ccczwHi7Z7zh3iDKCpX3YCT646PoXWz9BhsVKZdKUwkoVgK794xqBSRWqH112t",
  "key3": "2LY1oANdWqwH9omBbgBb1RDSZPg9tvctLzzkX9c5tx5LZy79mLUHfuekfuhyuuCzPhhhycKzpUm7gKrVgwhGoATb",
  "key4": "3X8G1Z9Gh3B8vYU3FdqobiqiJTdtY2qyiaP6z92vq4jXmbZTBaQWrhTVshDwf7n6nuG5sMRe73kjvqV5mwgCqu1k",
  "key5": "2K5f8kzdoAZPiqiHDhqGvoYrxsEibqh4Y1B63Q2wi9DkS5wMyymsihxccK1YChwDpiHmLqbtvJZ8GB9YGevpYnQm",
  "key6": "4Jd5uVdjwQWPXMCJnJk2az1UE2uDzw7p19pmtzfHwEwhg1B4RSa14MKuf9t15Tsmm8hUjCHNKi2Dr5S2HzoxdXio",
  "key7": "27v42vzEpZrd1CRGrwCWy8Jx2hyYckL1yHP5ZrwYou3GSnsu3KVh5CmQJMciB5bkGePgJNX7oZy5YMP5udiGck16",
  "key8": "2obauWFShGqhCHgp2wDsDHxBkCWw231Pd8gfDSmKCr8QvPY3vHtCyefUUbtFywHQWRSU4aEBTrpEEQrtWxK3iDgg",
  "key9": "2W9ayipcdqSAQ3PixYsmQTZiiKxRFTz5gAS2Hrd7Xhj7RPr84XgJF4Ubdy9UxKRBY3TqNDfA6nTbUGCZrf2CfgEr",
  "key10": "3e4NrcKj67EELqpX16mW4dJgiqA2h5wnQ8P9Z2X8WWFUf3zgRuPaj43mdp2hBFZA1xbVLbXHuoNHjVdmHnjqQijM",
  "key11": "44DSYvM5cgWr4TJ3sxaoMLpZ99z9jZgQFHsxyG9XwjycPoP8p1wwyP5VY8SHD87vHr1rnEueXPMiNbHXTCWAURhL",
  "key12": "3ZoFknsGRKvPKejzT1x2mqQTiWe53nEPqAfBqSRHTpuHiNecbLFp7EEkKdnNrmvq3SBQiRKfFE25MtoYb54zsByb",
  "key13": "2Vh5xW9MJzEneiQm8w467ojKpB4A3deo1tKJ7jZngXPuq45SQ5XB3XJLjezXS9r43ptwwAGnyoVnc547YFxVSp1z",
  "key14": "1234AtVyCzyB7mvi9xYdB1XvKfBDcL9BEtYTq1CJfXLMASS233aiou12Ynu23jXzYYKvDckb7eiTPBMpAXHY9qHr",
  "key15": "2aHrZ96EPPQQmqRiUXyyMucV3Sctccmww9d61RXAgbrt8eAeWNdRe1y27dVaMRZ3ayQUkMwmi7EuVReBR8bQUDNq",
  "key16": "4TanHvv9Dp5wzCg9y9VnhwrFrwJT3efRzwLSjcryZCcnQxfTxQnFHLR7TzDzksowhKY6BgMJzHEAVe7BXXHFykK5",
  "key17": "2ZH8NtC8yd5Jtrhbo6ipPPTu8oycFuLwcWYhy82ko95k5gceJJ9DAd6171TzyCdLTXdjwqC7LFCkQXtj4pzLp3km",
  "key18": "51NXov2NzpVHJeq8qtwnyEA9EhMMA2kHLjr8XrC3CjJD64xTLMRBEdDzixsFdBLJo1uNozvMwpQ2ggR5EvpXAJCS",
  "key19": "4RaxhLzu8qxqkBGV7ZKWA9G3v2cMmW1h4uVbYk1XEvaGcEh9t3Reada1dPCEjnVFdC9xFP75ihsmpBrekRnZrQkC",
  "key20": "2NAbTjzU1ZSLhKCp7MBZmwM8HHMZms7i7j48CfmGffmZiGx2bZ6AgKJBfCGzVrNDT22wMumU6Zifym1rCot6VJ6u",
  "key21": "yVo78NEEZVCAdgqLN5HLvDqmoSs2ami7Znc7zs4v3QY8bMJoDVmEqKrPK48RhZyQaT2i4h1JXtPqUtg2qJf1Vxn",
  "key22": "oFvHRxRwoErf8MmA9ownm8h5UsQjkaGPdywRvQeNnddSCKLqrM46SGkRBVhcC2Jm3t48xTHFuVe13nMdEwjcFeu",
  "key23": "37d4ZqQMG4FEwRYGDRqY5fFRjyiN8xTQ9dyHzkZ3FqDxr6H94QAXCmNHxQp1nj2v4ZbuApJHeymw6njfzbX34Sk7",
  "key24": "5XauJKmfkbnLeVU4QNvEyCCMKeaKSWCKqfRr6X3D1gqn2vsGu9fS8gFtm8X9pAdSDDDjJWbWxFwRxu3xUKL62q5S",
  "key25": "Fgfdzj6qKLHCs8LbjGi3cFKLrY1p1wUPFW4bHT7BR8gMVwzCUhWC6huTGAyUL4q8ND4nwecE8DTKB5tbD7skwL1",
  "key26": "5xnb6Pc4i5yPnLLrNT7mSnf2Xs3ogxwXTECwGCby3SPiGkofH4ppNRptVZnVcDhHyQRb6cEExFZ87rAQJTvpjR1J",
  "key27": "EDyHbZrHbwZmKooMcVa6zw9NRs9j6NV4vkhmera6papoMZi9p4kxC6vQqXMhbsQ4BkTZBDvKSDpF2z52SMvwqhM",
  "key28": "2Xi48U3Rux3ufwzKbeaVhgqHXvj2ETCqMkFbacKz5swkqmawkF7rsMR9vWrJecZybhEF9jFrqzBNKRiAnmZW54sw",
  "key29": "5hATubqNMqkWeo5iaX3uGovazqnGq5xkEp2fqRr8W5PoZFm4oPBGmjv9omc72vC8DB3Qn3Z9L66nKUSKRC6mNuWH",
  "key30": "2t7gQUQ7DacmQzhpm6ww3nMPU87hFW9okkzE9bWQ711mxUrWsvoFiiQXgRwsChWUnr4cRbfJVo3swSuYDqv6iimV",
  "key31": "9bY3oqzKRzrEKpAxfhzuLh1WcnUe37CJkzgBppT9DLRmBdUVdky4nU3LF6NovzjzXBAEzk1hPM6nuLnNdfwBrPJ",
  "key32": "51YqFJfVFfZXWYueSX9yNp3ukKR3EivQhAvLDRTbwgEj6Wz2uUhy8vNVB3t5TbsRPThxxTQELQGLMNsbHyrkAmuj"
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
