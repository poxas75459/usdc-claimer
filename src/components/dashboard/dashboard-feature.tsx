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
    "23dXdeKcvynahcfSLhXDcroaAuBV5wnFqZijuSL3Dd7tfhYeCSAySMp5QTuZWJewGkBNH4NKzeMGi56hpHcWiwux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25RWpkj8HVCQjd6Ykr1ryJAzeFgwYUYtvt1MqfEo41pzH29aEMgfXo7BQBZPzCWrCKtekzZ9SeiLLTnKe16FiUhw",
  "key1": "5sr3YJetyHEF7XjmiTVQP4L1Phn8B8v9jAhY6yzBuswZM949GzCYaiPWKD7D7Lr9oHrHd6tkX1PLUtaEnQvHexQA",
  "key2": "2Q1GPmWLjg57rjb3YXaCoGjCFkYbok6jQrhhhPbuVsvEc7zZRnYVMCsVL5iaGB1AhcvT51YRr1sPeA7ag9yULsqm",
  "key3": "2YsiEqs8qCLwtbb7pgpdL3N2r4FzX1u7S8oHBpGKXGavrQv5aj1z8FEjDkTRHiAQFe2Jbrc5ahPbAGgWBxwEh3X7",
  "key4": "2mgPQMY27wj97Csrk8TxX2U7md1nMnoYnLnnLfMQ1RYgVyTMZ7aZ3mjgEW1LNPfYXsbip4qLG3UyHAUGE9y6Nt2y",
  "key5": "3cTYWMHXDvqUcvc3v3wvauQAMHKBKvvy7ACcK1ab1cdPY3kpN63SVCQN715YsSSPcqM4V6wtPApacJntKsvcaDsf",
  "key6": "4ve2Po9es48BYfiMpNW6AMYRYceLZiuRK1f1U4TTSqgJ5XwuSCCTLRCcyFjgXq6C8kFcxPjnNjRVfaDX7rKbFb83",
  "key7": "25CN8G9fYREFL8xQDQ8EknWBw5vmLP2MgPuRpsaRisM13W4aB95JTyZKdmPCCs89w6M7fU41Hhwam7WEAuEbsCq2",
  "key8": "kc9DGzuhXmq84k4eXU4vQwCZYNHdKpaLtB3t234zGV9wg9bKW7mV9CjHUsdEoWA56GYxvckcrqpT7kz8Ju1px8e",
  "key9": "4T6641PARhPeN2hjQjSnCPXPqB78juDHbucEAkEmdyuBkH4eoSjzziBLKY1tzz6a99xNBeGDf17jMkTcWtuMnok6",
  "key10": "tF4bTnNrNenFrxaonYpvvdST7G4sKQpd91bXDYaJ2MDnhKum3jNrSnzgeY7Fja2MrREysXsJ1j3q84qMLR7Fm6V",
  "key11": "24A8BSD5AsLf5PnpQmtSvhPSi4CgMJqTTWj6mofD31UeTVbA9276QtPVF1EDm2WNW3ZR7ah7dU5h2zcBc43k4Gnm",
  "key12": "3Mbh6KvsqeekKZb79VACSe3shApdV9CZUWMwy3uzUPkjvx9u99GhJrhTAro2PxtimyCFjVRQrQ8j2TWAxUSU3BvM",
  "key13": "3nwh8jgrbDECkDmuwsZQDCaruzhhJF9wFaSFLQvMHP3KFCvPq3ytpikvqmTpCTmW7tCvMV5G49RdwTZrDmtQyyrf",
  "key14": "4dQ479GgYuqfjcNHDD5Q13fXJwespgJJ9wc8dPfFCgrwmSV9RWiimob2UP8P1sCFxJs7YAQvP85eRFpERECid3cF",
  "key15": "sgkbEUKSVvWNiji1Z44Kg45bbk9SqGagg9cx9nyg3QHb1PQxY7V6JVwGHmAqvDu9z8H5ZAGkQayKCKtBp7GE3hB",
  "key16": "2zma8vLZEQiau9Rpcbc3XKzax6feRD6xz4gy73BVrzzXApLS1YaZdF8XzVmVGE2eTuK3gj83cDrs3mcd9b1spJZY",
  "key17": "67mfEJeTNu6uRkEHVfPHf9Wb59WV6EzLGBmW5LjawRtAHNMgGfG7U1mE7Uaq6thjNfYHNqfPsoT1JdiYYDfvu8Wb",
  "key18": "3QDqn3pWmYg8k1crDS8NBPsAv1NYxnXiMzaREPSPrj85NNfciMT1XQpi3xCc2qCaoNiFFxMFqyKemT4t7XhJxaV",
  "key19": "4jW6pNFaVuX4TaivELxJc8FkSb6i3y3Cx8aLFss2YY4DzxnhpbzyeVZ5WtGemt16bMcvL8wb5iHaFXkNipJkZKdh",
  "key20": "4zjwwNU1rcj8mBHz8tUAmoFg8u6NvfjWwZkWtvg3Vu3LsXrZunrDXzsnkAcm4jaTuBnBDBCwaRRNHuRHW3a4TVUS",
  "key21": "2n5gJEkJ3v7N7DMjFW5217gWr2KAAJptoqSfn4TVpu1t1XZFHGjWyfZquQPVw5PYUibJaewTybTjauHQ753h6aXZ",
  "key22": "57mVUBrwEEyGkFuvaFEGjeLaSf8YsVJrumQdJUSdfcwGcNevncZTbjaN5DQzDZgqiWbYiLHL4M4mpb9yMhdD5NBd",
  "key23": "Y63LZzMpq8Tj11hGt5EnBNCZqGwTgbX9ob3EUbUNrV8kkKfYUj7Y2p413jjJqDuKhBTafig5LV85Pos6g1ZHhfz",
  "key24": "52NA3C3BuxoRLiwbbjPsZEBVLyCAKxwhcgt7PhmJYM1ekveQVwtAvngEyaPEQEX7qLAogh7z5zbb6WtxjzA2ad8t",
  "key25": "4UPDjGTEfjpHstTbUd3pp3qPeZxsJ4WZQPWBGXpMFJJ6N1oeQ4HrJRAGsHUeut5A2SaLpQpacLwKQ6yn7FhTTpU1",
  "key26": "2QwWdUjYX6ZRRbd6tN7bhYmVKnN8hi8ux3yR5jituJLVRTpieFHQoPZAn4TKCnC34Qqij4Q5vxoaZGF1EzxkK7Ze",
  "key27": "2sz9MmnhvY6UMB2xN6uymhBYYaac96bmhhExy6UP2ncc3ZWicPohGRaf7YLeV7GfJFW9z4kEqmypUoTPNfKmEiFS",
  "key28": "2kQVDWWFSagAqbgx7QCBzs1yRhveZENnyzjuA96o5pWK5nJBUFrDWdoWbMeJfnuVD5x9cbKTx2gMFSneCnSA42f1",
  "key29": "2PWXgLq9FfceR7AusHvKsFicdavkLHfNV7qqmgtHKCb5LAeuKvxSjrSFt7wCwpXvy51xQT3wQiRMZ5W1gJWdNjLx",
  "key30": "3aPpUwPtqdLzRJxePujuXppjtXpYprYMapneov6nsVxRwgFohCixbzV39rGKjMVhGeqcCbRzncyJ1BhLftY3CCrp",
  "key31": "3yf1p4CdK8c44se9oa566fAFhSo4FRRpZaNC4o5ucbdR9V3XaiCJ1AunXTBbmfJXaZz994xxMzXjpgWo4a1Vs63B"
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
