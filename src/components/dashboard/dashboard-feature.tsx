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
    "3tR4qLgT7Jmm5LW3UdS7sHiFyvUiVAzQNdBbovG62LpeaiW1WbQioZEo6prdKxap3d7qBFfnY4zKSNveMrtV8pAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvbouUGZ6kaF96KnjJdiYqHnihum5Z2swQ5P4dUBGrtKmN2o357R7iwvy9rGxiZbmGUBv5KogLHyfgKn1m7Zihz",
  "key1": "2EWH9vcVLLeyfC1EicMRpjMD1cojCFbCXvGNd5LDrat4ySfa8ATwFy2mYNVnEv56H4CV61snQAvCBP2fg2xV7LJ8",
  "key2": "541x78JMZajX9oUJmNoobxHUaVUN4jwciNbvBg6rj3eKFyQeAnnCSP65NwYZWngd2uX1NV5mNo4yBJ7a3iao1qAH",
  "key3": "5o1VT7UopwsPYG1C1LXdW6wcDTmCFuiMTDnwyTTBbUzbCWCo9RRYcaZtsWwatiJFkXJ8JeiJjqctCfSC5YuCeK9F",
  "key4": "4P5NRxYe6UV47KYKitFa6Z4xFwdvivMRsxsw9r9P7GTUjyHzR85NZ3iXJMxGUe8rcENTHEBbBmRDjPfdgZLKygJU",
  "key5": "23zH9k4PR44kR1M14D5kyAJP1ek63DabaP6WuUz3dLypEASqZ3BLN6EKbBLHoibfrb6VCCjWxkxE3A9EYgFJjaKv",
  "key6": "57HoSTRotYUtoZnrTto7jU8eXu8tZ1NYpxu5zLZrT1E7ifjwqthyupxqq7VNDH5tHkcrfoo8jXTsM7GR7p2ev2Kq",
  "key7": "37TuruBUurydn4A98nbE3s2EGUcvozJKcBnTVmxMjZfpgkPeGgCAwKCNNTmWf2gU7RjAVVPg5ttNmtp5YDPttR7g",
  "key8": "25f2HuqVy1UvyrbzsTXpq2Z3tHXz4gbKcfG8vQJtp3b9ycQsiBaiGTAJMcU5KP5HhpGzDwSb6WmhJFBpnwyEqXiX",
  "key9": "5rGPRAaSHJfakSTT7TUjLA1qJjonnkSV9kKuttSGco89gQ52i6uDVnqghKSQoFPbETpBMSXJuAkM5dVxW4nsccvU",
  "key10": "5MMkwbwrpXL7zvtUKmqfmWT7iHEnwDBpFTrn2RmopCaMh9jbRGSDSvoQauvopdjLz7MBZ7Y54PSqhh1koLL4Y5Ly",
  "key11": "JhehMAn1Gkjrzzsm17K6x8mdMHvfSmfPdBXmChCoLyjX6TdyhUfAgqXBn8JeV1ePYrLCRkzb2kqSCJoD3CFe1YK",
  "key12": "3Yy5EhRX2Vf9NC1gHpmqpM7RKi2LaSLRYd9gmKsrsG5TTKDetpHCjUwAXmsU1pdQuRW1QZ7hSsb1o5saeL69rDDy",
  "key13": "4k3kRcGohPcZm6BKX5ksapVsDwb9bvgqbgiZDAjdY4Z82Eapivj5aBKsCcErw6jnqp1RAZP2RjfSUUF2K2PseQ98",
  "key14": "3gKsJWYU1bwCCugem6vYLoWBVLuZHjngzCzwVszKaGApKubmvaGiFFvtLs23y39iACisKzKyEGfG9H241ioUERrg",
  "key15": "5wJ6BZ6Z6gpFEUuC28492Dtm1wj8xUwC3Py2joUXkni9Zh57HMuqnkNWMWLMTA5HxsWdHFqZseg55MWmvogAFESJ",
  "key16": "4Gx5Qb1LgtPV1mFgnd4SCqLUAEetWHBpPZ5i5i3BkPbsC1t6zUeYVLEz7CveZPgEVew2HE3S6kxcc4uhssvZVaJB",
  "key17": "sNFVj5qWxQNsvdkcqRVXJ2bE4yLkCCdhAHWQuJsrTncmGjdqWsppZv1rrx8scwqgCtKiyjGxquGg3dQfS6bzWi5",
  "key18": "58dZGmrrKk1R9vQgSSP6C1AveQa9PV5zCbFHqnY9TyL1fW6i9RYHktXPw262abV9YtQy8RSRvCMAJ91q99yfiD1a",
  "key19": "83hmbJCciKjD8FbFf42WcfVZbJ7cvaPt7qFn3QRkp6hXAWWeARuLQNbwUfDY6PTHwPAsxAHaPv2SzeAV8QwnhWF",
  "key20": "5jq8fpLYeYyQEy7M9Mq3KvkGC1P4tjJDFG6iAzSomHkR1GzZLTQWXJzLjFAzs43xrXnz19SG7p5931DjsVVX2G8A",
  "key21": "BXzdJzLyTVVcMsVCdPjWpSJQjRR8qbpiviYK7u9CMmybTxTBE8NMGsaviBhVrJnNh5gimCNcsxxUg8q3oqTGULV",
  "key22": "5o9tBCt9DFiV18apZDpbbmJLFrTssJ2fMLQcTVKEmic6QgAEBaepgKk7D4LyyrdERuVaKEYLKJvQgqKHmTTcgX3Q",
  "key23": "3WLFWnoDVitxh5s4vpGPMjsoCT911oN4EmHNqqM3ZMCfq1LffjkdcJC2Munz3nJBCft84oQ8uew6fwzXjtmARhm6",
  "key24": "Yu99kct7FEY8RufVTa5qRsepxLruP4j3rs4QJLZRnkAZ3MhgwkHqbdygkh3Yc71EzjX5r6yxFajyWef3R3iKewo",
  "key25": "L2PRKrDMBSeHdHfxfmcuNvkByQ6c26g1jEjiUunpbgtVYiqaKXPgctxUegL5mb3VgnAADndXCN5V29fzgtkF7CU",
  "key26": "3gamEBnBMF6o4Y2DSd5Wi9JccQv6wXUrPZhzrrSiksvki1JFMyBMkHdpe1WTatX7e3eq1v2z9Qv21jq4rLpjWqPV",
  "key27": "5mrKimpkeFDKJUFvfqkPBGCKwM4xDBnPHqKp9wwfdyDYbGmAAmz7wPqgSUq1NZbWqusjfbXoyXxn6EeiAmWS9fWE",
  "key28": "4YqSYcN8eAgQctgFj9LBZraWKniTB8FzTsfuvaoTDzXmu5jjing2L4UL4DCjXnLY8DAhjVUmZnRF2Cu2KNWZA89x",
  "key29": "5bwc1ATfTzb2osnP3zC4FK3aATwoF5svHj13fQeUV5CpttxSwWehJDPuKJ9UcUkJ5mpTithUGMv4HhqdrGqQgkdU",
  "key30": "24yV6EsWFBSDkU9a1ZLrxbcKXksLpRWFEqnMstWQJFJup8TUohvJ25NvSQLmhQ7D8ku4mbS3kXe1sMv8mA3T43BT",
  "key31": "2cT1xFy15NAGhwyLzV7eYFDQpNbKHFUpCb4XvQamxDy4AHiaxU4ygJmK3f8FoUW2fpZC5qePubiNum6aEQit3igC",
  "key32": "4woFnxJHQMyW4rCTajeuEgZpfiGTqfAJJT6jorfVWgwQKCLk1wfznzTSej1U887TRV3rF31ekKJdDDZYMtGfCBHM",
  "key33": "cbfk8ZXiK6hETDk7JCYRJDvTRZX9iJHtLefGPohw5io7VnZvfYvSsEKBBN4UuD2P6iUg9CGaK298ARfXoeYkSfe",
  "key34": "67Vri8vxfSAXmWEUs9NLavXrboTtKbEGUaSohNNqG8LKA8h96oiZr9hEfG8KnYcdRv3XfQdyfZCyKuXtgYrnc9Wx",
  "key35": "3sxKL4uMGN8AqDZXBgFrrhvmBeQ7u6Yv4fRndKzatt2BBrGy8AuXmswjYANn57bAvZD1enfKRuAwZZn5PmFrsqsj",
  "key36": "5h2tBe8S4gu9bmtHkuJ5U4nb7H2zQL4j5Z586qCeUfikhC5PLypJVoibeELSCdJze1TNQ96HJxjXJNnvzyEZzkk7",
  "key37": "2ukYbJZwzb6nvNXtxwUBCdxXgTpDin5w8t8SqmypMExB57hVhvLd7JG36iH1x7m9dti3DBFtcwchHACcfu3ddnct",
  "key38": "5tduc7NcmmAg2do8JoiB4KY13FBHjNzWZm3GPJNgqhe6LnQYWA7VreQSY4XDSW1tsAHjvjzTbj3tVT7pfu8jRmsG"
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
