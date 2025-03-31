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
    "4SDkGahVv3odHcdpy6ZEjx9o2t2thuMBC98BKzsCL9EE3UfkQHQmJWjuVLApAd7W1KtqJRTEkHHbtnKDojnGYvJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F55u1ofkBrKsLFwtkzncApNUPE2XSYLtFQB2zTVvMjDqphScFhPnJorJgjLdDVASbEHAbwAHHbFFtYNEWZyX5YZ",
  "key1": "2oFUzRsSskwVMnv1pHmzPBiAJ235uTjCzY2B6iBhN9GNp6meTyawWFzHc4mWPnRCBfiAKHDnfoqGLv3fW56oRewM",
  "key2": "3oNCKGDUvnvopxC7x4BpJaRvjijMNwNVGCvTgVjZLiT2ssvxcX1nDLt9U9bx3cA4xL8dVJ7YUCHRWRLyKW77BMqx",
  "key3": "SF7cbzxSFQfAN2BmHwAua1yLuvkJmRw5p6PJawYLULLXS3G2JJzMCVWf74XJGTRg9B18iZEaX48BE5ZNR7xhSqE",
  "key4": "3TdTCNQKaqBC8cFdb1YVjPcJSbaJuZwYUsnK85m5Zm9rYwMXXeowisRDsBTcmjNrq3upMyDaDVnwXtEBKcRrcABn",
  "key5": "J8P2wqHdLPE9hBGGo7P1hbnNPKC4o1C23HXaL43oCnQHUc5JfsKHAVMg8x2AjUwADkBQ6wzz3i23E8ora7h3yoU",
  "key6": "3Yws9QqfsTEzcE2B15Gw2X5BcWYP3gjktNPGQq8w4PYYCxxxa6A4uLPAjfx92xkeSrz19JYggS2xSiwbek4ZWTC7",
  "key7": "3f2kMz9NHYceumwShJoZjZFkfUHi34HSbuGz8uWfZPApK17CwTdhQUtLT1NphF6hdxJ5So7rrpr5U4tzHRbzX8DP",
  "key8": "53sFrsNC4T5YUHe8efDzQSU2t5kLv4eViEWsKqvoN6jg6FwXSSvBSuajf6xEZWsshBcPyE5t7JQnxQDGFGJDY5qs",
  "key9": "2NRJhjErUDTU222Fp5YmxAuvqR3NxRcVp21wN6LNCNuHxvHMLWKEErDbTQk6x3JBhuhMn6raaXBa2HrKLBHRGK9P",
  "key10": "28xHaSbs3NqaCqk3o5AUZno9edZLQUZ96eUmzJD5UZmW4y7Q8bSvQcPChk74jP5sz9mM1EhTvp1yJkTvhxDyx8g3",
  "key11": "3oiQJVnCjr1gibvceM1avmztiVbbUPaCKycWTDAJfUDttt84M9bkRurYsWch3VomwkB7PacxmAbRMpo3Vy6PBZeW",
  "key12": "4HCX3NMDVSA2ZYQEwNkU7SedU2WjmyrEN3Ya3e1hyk58XNzQ5LdXSHHFxCdau6C45Z7MWvYLu8PHQQqGWdywNL2A",
  "key13": "4UDQnPS2jZt3kr57XLW5jB6p2f54Y536MgNj8rhGcCZuMajq3DpnkHejjnUxr8cN3nbHn25nFPXfRAKgKee5qixf",
  "key14": "5g5RDhs9yQDquJDivFohjLywMHoz7jHedJG4n1VZ67RYzYYGoF4XqeZru781NQZb6fFRL2Yw4RDQtBqHpgBc1XSM",
  "key15": "27G3m3gXMhfksWXzwYkyN9drGekuiuCU9JQJuB1aBwxV28WDsjeUxcGH9NkswE7ZN9ZCkSDXam1wHdHFWiGyiybh",
  "key16": "39mN1aPkFJCCsjGU1B75jj3gZ4A6xmFfczqC21G8sydXpCoTdhE9QTUYffMzW7apKcs7uGtJwQWqg4qgSd8Mwir8",
  "key17": "bzSKNGSjjJS3sxEGnBBebhniSAMYA6WsypLKSwct4nfkw57kL2vHVYFK8fWJnqRMLynF2oW2VhnhwuVArVBwZwd",
  "key18": "4Fvv1HnWm4wDXhYFd9mGsyG3gBjw18xhTxBdTDxUbUXywTRrp9ankMU7YDr8jKwLWAqU7VtBmw4YiMk4BBTCoFie",
  "key19": "4ZTvkvGcRagqcx3YYjk2tSXKeSJcffrZ9XwdqFKKwQvbq1emjeqWkhZonpVoeCYvdUDh2niXoUYiBAvPMRAmR1cX",
  "key20": "5FnjxrJ4CtYRv8Fcp63EGV44FdGoAdS9fcc9TVdTRR5zs89xNTzFCEJwXbyEtKYFD1R6heYtPBMDrXKSm3SanvXm",
  "key21": "EHt3PeA38fv7VMjPSRtKQyg1gU2UhDDamKNCUMkFzeuKmBbU2dbBxQ247Aq5D31WZpxgnMdMXMMTmu6Xt6nzBNi",
  "key22": "3dEy3G6Tp1UQsroK2KkYpfQ2FeEr8QMsQfREpXM7skMrytUvzXiasVzRyQ6XRg5qEjD5nNtz8AXcthsv2sr4RiCw",
  "key23": "5AAf7ubrKWq3YhRRpzCmXMbL7SUcMAoVfcSmneygUN2ohAjLjEgBcbP8UtYySpFpkjTF4HhJW2SkkJrALWN7u1p9",
  "key24": "5fHSUUKmQqL3LEbrLdnvqeyXMZdDzU7y9pyn2EUHg1W1hKvnzYL1ZMm7BWX3yT3azWhxSromQrM2zkhQPLWSPoKQ",
  "key25": "5hiGnrCsePV5J5F97wWqf1Cs3unGpGPEbrUtQ3YCvLLw3T2MhLqK5NYFS2BRDqWdRX4ESZPBjjyRRvZf8eJVGMb7",
  "key26": "3dE1zjyxwedZB6neusPgapENq8FJug3xXWHb1HMuh2xFarYmn1nMoXCSQtrp4tyPdAScuLig4JqgyGX8x24eninc",
  "key27": "5cpxELj59YgzANeiGa1ZJos2DmTcM8Zq83kxHbhXCFPRXjrbYKfcSh3yEbKhDTnofUMdZxHbiCXBpu3mZSbfa6ff",
  "key28": "4JGuufHQ8waKCUYz2RAvckb8rqxy4eeVXyFNj2JKjE7fFJaBFKNVKjgaoYeTYSRZqYpqBXogaqwWPjqfEJRNvDa3",
  "key29": "638wMXQYhCw1jMjnHbBvEzuLTYZTHhvDkLdgB39svKqcHBEVSwenzwTnEPXFuB3PvXa3eCEbnzaKMr3vQGCA9bYm",
  "key30": "4dVq7eLwfCZsomApqAVQ8hd26ta4oNfRqp22Yj2HJSeqswiH4B8eJD3Qo7FyEvBNG9buK6kXaXhdzNUNmvzBK6Ai",
  "key31": "5WTbebXoVvm7mVwUuQgzGEn1WDsGb65r2f9nvpLLyCo2MSVN1MhQbTrUNUhbwiSCzbaaT8o6NBMtdFXQjYP6Jp3H",
  "key32": "5RZBWjwBNusiekjNqfF3skWgPWT8jsctLx3GMPjtpHREs9JN75Xomo6Mn6KBm874qvZ7ygL79dRjs8vCtmsKfrk3",
  "key33": "5hJANsDuwwiDj2FoybHSjQ7wLoBKQWJKxpq2Gr7UXDbDQwiKnLToyqaQQ18SvFfFJymtLbhA9biLrEM8L2BduXHq",
  "key34": "5RcTkCWwk54mwALmG1Fs7baGU4NsVz5PMqjozX7HaQyCfMc3twL7hWjCF5yuVD36QnzE1PW1EkMXC9Y44k26Svoa",
  "key35": "5AgqdsbU8YMVtWuv6GMXktNFkUiLoszP5mamGE8Y2dzPGmStejKufp7Ag1ZL9CtgTfMPQgeY5DNR14peEZKwCLP4",
  "key36": "3Q1XFvrZVyr2rjhW5TFiQyYtuvU2WrhYT1KcYddoXeGrrGmGx7yqaXA8FKX2zbEq3oBrmkFvy9igxZo29i3B9GM1",
  "key37": "DrgC9Du6B8ugLk4FPwNBfFYJP82ahJiH7iTXE8AQBKvjtCtaTXX34SskmmjsaUnVAJxfr5YbMrQjgjNX9UPggMt",
  "key38": "3QfXv6x5AM5SErGzsAkcJAw1FDaiVvMnGLHomP48hHbwDoFA8BXfTtRF7XRBTzh7ZHkr8VKt8t19g364h4LQhMVi",
  "key39": "4A5e1LiDC5BHA4jy9vZbEhCFbjrUWYTasDDVwrGPqrCyvYN1mEnKSckLk9rJwKrpBWAg7QgxUFPMnnGSsBbg2iFF",
  "key40": "4zusMEYXMpQKyVpBqy3f3Jm4ggjY7MaGRzKCVd8mFwJD75xhc8qzz2FQ8raFgZThivTYa8U33kYkrK52bSZKNTkT",
  "key41": "3myPsCTbRAAM77b4QNTox38eBDdnPECCZVwcjqC4VYu28UBKMPhSTLbiHQG3PGeQ6jRjB4frqWnTDcTYF9kQV5Zg",
  "key42": "2tWUghfFvBtYocRzJ9cs7iUwdMdwgq2UQaNEgS6kVUNTA61iXjDiVWiXRX3PZpTL5NE2iVrmyRVXmWbq95xXDHfS"
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
