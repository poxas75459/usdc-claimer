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
    "4hbZ7UDpwPKLWNumSUDYuCYmiKa8ut7wSEzFJ41hpdagH8qFLuzgHhHn6HTutBWCtgiHoLsyaWa1YUXuK7DfmtHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbHtfdAub11yNBzLorEdf1maBpTbbeP8ATRJkKJyjTbgwK3hL4TiUc47Pf7Yisx5W4aKgmvNiqDr4W61vud5NN3",
  "key1": "6fFGPG1gFvcJp6tN362PDgPyGeHr2uJoFSxxmpbGmintXz7gSNEmvNM9eqmDDtE9bEJYDPbU35AAvk7i4xJjuWe",
  "key2": "5rBEd6LPeXJbbMDpb21LGQNuBUYeGsY9aF5EKBWvpmm4ZVqbo9k6TrmRd4vxcDvHE1DhhTFgFfDFbfUrBvJBvoca",
  "key3": "5AesY3Gy9UV5DpUKQEKAA9m9SFPB5ZMuKWQops1984mTtRP22YxoKxPjYxqLaNVSs1HMzWKFtmgen7Ey1k7zcncn",
  "key4": "hmzgx3SxujmfyUksyUsgQ6UNoig9vWtGmR4SafngJnzqYFF9WVUVE4erLU2vwsUWgDG7axJYLZEGA1yjspT4kLy",
  "key5": "Na83Yy6jFnVmEuTxuneS5qQY6vHGP7vuVSCJN1TkeEucJbcJ2StdLKriZiEdChZ4dUWAxWno2eUTrcbmMHm9UuW",
  "key6": "2vL6B8V26ky37MDQRDX9xEuJm7T9ajqXSTp5YpHzboQ8t8onPDyUKavjq2DMJWB1zqibTNUzHj1KK61ZKXXvF8Ue",
  "key7": "qZraenF84doPJqwNR5gbH8LzggvA7o9Vx6PjVxLbVDLkLmNABJqKqY69eKdGh6966wCbeH79gj38vGqbFN5aE5t",
  "key8": "412skVGbRFUxyCVcaq5ADPw4HYRrKJrL7mrg6MXaFF9NXJLiYr5JKVb7wz2TsUPYWrt58v6Qb6P6PhWKJyZNJJ5C",
  "key9": "NcoMEE7dt17ygBFJbCTgficeTMYsnT4RbZYYVKyN1hL6XofEUfCDXspyQqz8z3HdY7vvFC6TmrUxP4dxz7ioFMc",
  "key10": "4SfM33Rj431qDDs9EKb7iW2PDRWaXdwDwQ7EiXTsZqnjCBqivgpWfMgifMYZHPLvKf2c62k8DXzKdR7mHutpY66X",
  "key11": "8m2Bvcwi67c3XS71edsRqN5Fw1Dzn8QCMVNKf9q2vBCP5q7bYt9rWPKggkJSsKHnkanQuiSnX7nQ6TuAZqgiKjT",
  "key12": "NKzRKqtyKHSVVwck8PWEha1xMnTS8mtFoaRa9EnmdA2ZVVL76JGzWvMcbn7fBEPLpBYk3fPd8gKaMFk5n9T8rB2",
  "key13": "359Zz5A6YxnoeUH7JMrJkWX975qfFP5TvCmDkVSnhTwAKnQbdMtPbnrCTxSm9A7TazQWd7UBdJFRWVJU1wFMniSK",
  "key14": "4mthfTdSQWTRsngMjhpLdqLJoDmiokVip6L6X5b2FjvcvwZXCeGVs2eFgJGA9zNYktN8U3czH3RR31ccskwU7rWD",
  "key15": "6296Q9zKViFjgSzDC6EMbhBH6UR6yh2mHeHA1uqmtsEcgYZxYd6J6x2xwVEryJNZ4LQGkPNtVUyTm1vMpgq2Mnee",
  "key16": "3wpT6XpLr6RJzrSzCSuqwaSjjpKBY7QL9YYmhsTgCZFSXzF3H3wDdTxTCH88ceFcvdYDL2zxqGoxQTDAkaMoRyyL",
  "key17": "3fNz7ijbAgMt6jMwrPRDyao9JpwYQbE5jmUoGNFDjGsLUTkjDWYa6tTwXTNftcJy4FeH28dzGN2rhxoU1KMKP1nT",
  "key18": "2g5t1LUkvbkCEdofv9GYFBpbJJF2sw2Yb6GZUjeE6fC1d9KWJbn7d9bhcNi6XvXWU1BBU13nKnNw4cMJnqc1Jpey",
  "key19": "2wJsGGNKNNTbRuJN8H7mGKe2GMksbed2v5onuFLrG3CJphfyhQTrz8zAyMz9V9PrynP6fUgvDVawVwMoNdDyToLe",
  "key20": "5jTZPNRfXsKvpESpS7KtdY4qePBrwhke9aByCQpmBRFC5MRZDjo1ueMsbVYbYPXgXoU76CrpRJfLUmiNu9Fa7tJ8",
  "key21": "3Jmw214cfHsCiugVidYZ3WtF3Y7Zu8HtusuXD66gjW3Yxvf5AArUwZXY5gqGsCbH5KdZ7ctZtmDxaK1RLzAHfh6o",
  "key22": "5U7azk38LRX4cn3XtqqEq5NVsqdWYAc9pnH9X49Gbs9oqBxJBvzaXLF2RGSeyjDxeGonwbjRGekVNv568gXKeYUN",
  "key23": "5CpCthT7QwW8Egrmic33ygVTwBF6maXw1H7d1ykEewds1LpjcSurGo8nNhrBec8ynyLVSdneJ6BYdY6fDXfF6NBH",
  "key24": "4iC1QDVVZrLsxcif6scXCVxN5HEf9H6b9XZ3utMQTA9sSGDeLPtMnHK5iPiwwc2SZwwipyLmwDd3irjFYSzGDoRM",
  "key25": "4jZDH4Z6WE43xcz1x3j2pSdZhc6dVktWN4Bcd4NN7jS62CibWWmVsjk91usDpFcwHxNzL7RtRsVcCEwgj8G2kryT",
  "key26": "3rEhSpxeLLeUUAdspWuoMsQkuS9VgrMGwB8kt7R2BRr5crZTMo1SnPUGHggRJPHjiXwDbd9JPFFXgQQCMdNUFtVr",
  "key27": "5PMV9v3H3XAcf1xLKWhG7e3jutC35Uz2Qet7MBD4rU2BHkwJ7c4SFwCEXtbLnHNaJxu8UeL8fhDK5LTZkiG5YFDE",
  "key28": "4meRfHYpZbuJMz57KA7A1Dq4CYUFEt1zoFCmRRQBREUs3ogPE4E63wt3jGXL22yFuEKX1vZnPPs6WLei9neR5NPy",
  "key29": "m6tRPzzJ3rDMT3xeKUy2vdrVhWWVMeHTNU6tMU1bStYxHKmY6TtKn8kRuGU4fi4GStXyAxbVK6WLxkkCLA7VrGj",
  "key30": "3Si3vcpZqbG9aMNV65NKiDkCp5zeC6mzmTKGs6DP8Ay2Ca9yqZv8L6N5LSBGqka22drChBXpbF6AKu9qP4CZe2x9",
  "key31": "2CzuzNJDn2o12uiRTVPeFyzvCfhCm913H3uAUeiyBPQzTPKATG6xRwGrcEhsAKSXc2DqZTp5ctSiX44Uorw66zMa",
  "key32": "2dGhxVtCM9v2B5ZdUGwvuzSH1jQWDN47qcSk7tASfq2cJGLTfkkdeY1ub6E7twbK4VT36QTwmjkAwAdBPzwDwP63",
  "key33": "5RgZ2RfG13MKzbBPpin4ptisewMaJzcErYotzts8Fkgne9XHCZCoXcbMwn9LQmU7iDmhjGxzZ8jTAq2GJmUza3Wx"
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
