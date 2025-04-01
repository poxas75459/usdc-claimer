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
    "38GAJNYfJsekdrcqX43LXhgJc7qF47gg9pgVNJPDQtWDQR6gdAXXGXTS859ybH6tMHjFLP7AcoLSR3Zy3bSjAu8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mykoMKxxJD2XfnGsqJXMKjzt9C445o5qfvKn9j83yKLbXmFxuxezTdV79QzLq3SZewQWJY3KEQW3PZvF7rYPj4N",
  "key1": "ueqJxkFvqXVp7b7FLFucD5bhTHFdTKdadpjvvCsW1WBErxWUNUctXqkx3Jtsio8xW7Di75rxpSqm33cfhDs6FHf",
  "key2": "3VUEDdgkPCdKCaYJKcEk2Kk7K73QZnaR3sJzXz7LYHA4C3s9mYUCqZpgeuL8QAdjxeWenmdSVcXdprS8NDKfhkJV",
  "key3": "3zbzEtRm6u8B7fFu7Z7o9xj2Er5KsYSHr3k3c7fKhctDodWjL4miENg2NcmfAqNcHyciAv9fQAMk2FZbuBYeGqJS",
  "key4": "6UArkbCnFXiz2FQYUXdfFfvGTCNXyKUX3BHh5oWAb5QHFXV2tC93a2bJ1w3b7a1uJaF4A1jQD9HxpCZvyD7Lc6j",
  "key5": "2jj69sogEdTtyDmktS7RcgZsnos9sQJriG5p4xaWAe4wr7Cb9dqohRM9wtTnsirpWNmZ5U8PDchCaUCmm8463W4S",
  "key6": "34XFSGW9UNTfY9ujpvMCNAi9GtP5cLxbe2guNFz5zG1GYV6iizA4Y7Hbmu3oWTXZuAGSLaSSAbVvWPm6kinSEWyr",
  "key7": "4frJ6LYL97wKbLGUHNi47UFVYXJL3zqVzAD5HmoJkpetyXXGo3didio9sEvGLSz61iN9McPkFQBYLvDvvk83M5XG",
  "key8": "aNCzKvaTYUjuBxJC97pF73NL8UQiiVAQDXb22MZ8z8BLy9kjCYUQ8o8BPhJTt4XVCUZWsGzDuHZgHeDiDREGope",
  "key9": "2U42CFJWbN3mnAsvFT5Xy1VhPDz3D3QbQgD2NnLyqED99f4XHumYuSLkbNKestTk6dn1rLaNTwb5MPoM2FWNKWYT",
  "key10": "3m8bJLYtHs15oSXw4F8MHTDDt7RFJ71dbw8jMabsAAxzCoh6XpxXr9q9aZzsW8g7cus9MRc81Z43tuMSUDwjkRj7",
  "key11": "5wnFJLaENfqAvMajFzi5vQEfbPLwyPzrZnvhcZ7UKwmZGejFpqsj1oX9XwbXZ1kLKMjqKHFbwzVTZFhf8C8E9xi5",
  "key12": "2n9BU6vLpFkxXWGG7JNo5eaAZhrDD5xcKXyux5UvJt45T81bF3EXua8HUGfPfbwDYd4Pu7DMp1CNEtZDKjtWgGiF",
  "key13": "2v4Lkaj8mWe1hp8aA9k7o1iqRgNkEMa1zPYQubjZHLEH9HK3e2jxQ1RsF2KEGXDFenrWAneVjbK2RE1ozFG9ZuzQ",
  "key14": "aUj6gPigGfB14nWFB4DJ4HuKWgc4RXbgsqSMhxzoXZ98Ccb1PcdwQDLnnYtYdBioFgzqSevv1D4nKL8XjJmLbEy",
  "key15": "84Nsrjcp5Mvodu1Yuod7nchkAeyvdbBJ8LsotumBoD1BE9cHtDjgMsHR5nibqHdxS1pdPprdgrRZkna8WmDmc7o",
  "key16": "UV7kASoGQCHGgQXCZa3wQyeHRVao7xkxp5eDdQBfVJniMb4FiAmueULS3kqAfZEg1yWP6Ffba8kapfQh5nB3rXd",
  "key17": "xg3ZfVMgacGe6VR2VkeFsG7ofU9CSpNdhSiT6nphs1QzuQcfXDM4UiMDbMXAncYS7Bu6VPeFX6EUfPk4Du9FEBe",
  "key18": "3tMujfevXt4w4mXTsTqsm5k2s8nmfYzQsDWrNE74dYp6F5gnPS3awo8JdN9JeidLmxbvJ17M7Ceeryd2mP8PcPWn",
  "key19": "5rk4i12UjmnvJq2GyU1Kew1wi6ymrGV75dYx9gRLyJDyc636YckMwUPu2a1YBLhRk551qWYt4rAZ5ZXYWbnmZvvd",
  "key20": "247eJSq3AYcK8wMU5wwkEswdeTq98PRu9gC3yN8NF4KAnsVWoyFqbHbhEgh5WGBHBysYQtoAyq6sepSYTEwfVY2D",
  "key21": "h2djgvWtqmtbuLa1yJWAy75e5UGPE34efgUCqBmsqo6pCN4eDxpY1dKGkAnQPPDcG1wEn9i4pWNw3WbhB6HRJzG",
  "key22": "57PX7GMd48n7D4ihkMng3RmBJS93WHNPxXBJqGyWTys3uEEAXzL7bXkHZpc2J5JbsQo8WjxLm2SGTDHZ6nLdybGT",
  "key23": "35UYXGDuofrS7dQkf7q3tMN29BDjEQ3ri7TpdDy17hUWzdqpZRr18nQjfUSqPXZXHof9Qcv7YYKCMvsC7ykJrsPb",
  "key24": "UQTUZYbbSCvRduBf6QrrWTCXTLtb4HhpsrLHMxNUCh3ZxabNmSePYU86mwBW5MzDqrpyVTy7fJkr8HXPV7rmHd2",
  "key25": "3o8jMUpsDodkZ5TnyFCbFKAruzkPi7dQ6BqukoYsw7RKKg4K2hdjP9ZEPaS9DoQ4xitY37e8FjkziGcVypNBwjXX",
  "key26": "3Sy8Zat74bA8qzU67PrMxVqKzVr1JAUw8hdfMkeDxMyxffFTSurcSQT5SekKeBkUp2LZmuT2DGFLCxi1SrEPsHss",
  "key27": "12389ZJSJFic1qMr42FM4Lj988jSP7wegRaoJVZA3HC7tXWLsCD7pGRKMgewuC6j2cuibvpUbLwa6PSwQkgYKV1c",
  "key28": "5yVMnJgR74MCZpWvw6ujd8oVwNJr62mofPaAuGVEicLwpH2trpjAqALtHf6EeKDsHAY69kkEPDjB98nfcJUFVKCG",
  "key29": "2drC2M79aPkgxk2tvg7TugfVZy5hJP6uqrVC4b1f416bMMFvwMFKV2LLionBK7PFLrHCez25eTQYYTYhRro3dRyn",
  "key30": "4myKQv8JbuxX8mit3e21jmJH6wtjPQVFZc6ePTopi18M9byhUozG447pRnb6pvdhRc7zR2Ha4do48vTFx8rsDRfM",
  "key31": "Y9mWwmbustvAGDU7PywojuAP2FXxcbw3W9sWRa6U5XzzGgYrSTkacs7uec4fpRohjUtKY9sh8saMot2NGc7wZ1n",
  "key32": "4TCjt7ZhQkZgPNGYrNR6NYCYWzhZ4ovMvJbWSZueypZAgoBP23pe45XVvNRLNj6wM8SmVppyr6mFxUYpN72e9fSP",
  "key33": "iWf9oEvhemRjEL1vUKL21Pf6jYAmNXa4LGGxHDJMCWoKPWGZU37BnGpnnGbugmh643iWEaGqzyoHCFQBbDyw999",
  "key34": "5Vq1eVUFd3bp5xkq4espZQznEJP3PcHRdtVks9xyDJBezA5n5X5Q7uonB1aFP3AFtGnRTFXhCAbAWNrk322HRDgA",
  "key35": "3gHorkZviHiBWQuNGa3CLoh1i8QyZ2r79s88CRy1PWLxZCV1S4zsMS8wcDMu68tKrc5qG7QR4TuMiwzDQ5k68Qjg",
  "key36": "5HHvxbcn6eoA5GWCgmVrFJk1sNdKx5utqciRoRubcKYPDhq2dgPRpbVkYC5Cxg3iJDB2PUhnDrptPWxfgNdY5BrN",
  "key37": "4a7rRt7xaeQZt8Z5U8SmEf9gRGUGkJDqy1tCKCxdg6GUsJ7G5PAcY1HpoHDqaZ8byoyK5LGw5hhhUpmbHfT3RcYJ",
  "key38": "51NxnFSGgEEbQTtqYq9iwv2cRXEN7SkFpKwuNsjNJqSQe3aBwHa8QkPV3gXt3SKkhhZtZX6qpQAwFiAwPBS9hTQP",
  "key39": "3cEQg8RUK1ooYePrwhMU5n4P1DAVCmVjnw5PASRi878gjDQ5Q3CsNaekPFdVMpCSViKVs1N7bQsMeFSK5hA22fgQ",
  "key40": "uyn7nLGHUma57xbXFw39PcAmkMzv3BtA5Sf4nR1dphT8ck3dUYJbtE2gb2Jy4MVuV2DBM4e1bESxyETdkvR4t2w",
  "key41": "LRPmpm5r3dMbWJDdbECoPHmz2ikRxzZLKGkKNKaRBgfCcvrJNJ7RiVQgCcncsMQ8kW1SqaNeYo9MhGgJU9BNEbU",
  "key42": "64eDveN2UKWXmKN1NFBjkPF5qtmxWYNAw1W93W3yYPstqVvYFCvbVoSk7y55r9xZKgNM21mrABDy7aVvxxiNve9g",
  "key43": "3t4ccL5cNj5ykgcrZKvdkJowks9G3dJyhZ4nQ6wmDkkocKLoJ9uvX44GEYFWxaLvXjzomf4JY2Q1FFERtttBoU8Z"
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
