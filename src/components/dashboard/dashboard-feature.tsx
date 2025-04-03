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
    "3q7e6FiimbMrhQGe7XezEeAEbCJ7RptYsN4fDRsnQKTuWiipdSyhbUrKvxqn8mQDMiwYLeER9PThbmEvS87uTexH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dwJfhXjZeZaTi8WK59TnnofxVwBAE5UsdGdWvDBuoNs3nfympZb6yF6TRgaJjxcXG4ws3McZZozqt9oNm97aAg",
  "key1": "4u6VmhsqEsE3WS2NFtidBEDcF2Hq7ydBJazvnGUxNA2KeiqWuPLWK3wp1qctvZwWFjzoShQnm5gL4dkQfRkAitqb",
  "key2": "3MYgQqZGbXnhdtPX5HVcUXijRHbHtDKFbS8fLNXBZQ4pWcXtZSnQYbsoJFo5uvGuHCX9JGLAYUyzBkUZ3W4h8ge4",
  "key3": "3i8D49E1kTzavPRHJK1WNrNU2eb99Sd7X9eTC49S52ZAAjLXgewVZVWtRyRbQxFrt2PL2xFsyZFZ2AXzV63mBY66",
  "key4": "PbqAuuhf9mZ9VdynEvCEKzM283v2o63ZrRRLTWAUcmPPSfvW7ANUcrhLoAHwhnzHsx247zmT1MamAuTM3egzWFk",
  "key5": "4fcEkh5extJcoRWQ3ALuuLp5RQcsGtZRa2pPK3fPjK85q1EiMzLDC2L8ZgLgWJk3YoAnUKtB9MPeRH8BBZT3QYmQ",
  "key6": "2cr17EzefzKWBzcLGpNMu3WbNUEmWFiDaVpRZ8Hi2WDekUvNcJU51poXdh9WB8aM5diiK9wt4MW7W4nH7i67a9N8",
  "key7": "27AHvMAuTG9wmT62zcQsrqPM1DR4b1daLo8NkCES4WkmMSfM9A3w7uQd1E9SZqschS8jPqkcERe2LxZqNsBwSQ52",
  "key8": "5xPzNcoKw7FVgUuyo3p3w4FnEDgdnYB8EF7DLjTziwGehPYzo3y8oYbAfzCTEBniiBqYk9SC1Bnm66uWGBVqAnns",
  "key9": "2RVWwiCFZvFDocQNtU12reMQSXbLmq7KqXCThCc1LJzWmNBDBdURxMwMgUwuuPJ3qtTZk9H9jj5JrqU4M8K25sXz",
  "key10": "4gvEf1XRoWTRbpYaLmZhNbL7hgnAe6CTiY1LDH2dUPqzsfDr5YreuSpjaxkv49w64Hut69mT94hJSS8EmBg2dWPL",
  "key11": "WgiamU2GYgTXSTotZzzRJAR8Dr8Ke7BqapzKLbZXwkF75xzKntp5atZ1FwTR1urfJesSGTacdUgCApTcgLmhzMj",
  "key12": "23zJ78enMpbCcmoraZUs7dYZzCSc4UskCzvTG7fh7BpZbHQJLC6Bkmi3jBxymkcaD771HbKJo4qrs6VKFyfXYNXq",
  "key13": "9oZsD5M5frUfCVEhfmRtH9tVPx5vsP6zV5QxNbHz8qDDzQyxhUJLGVUfcoKTASdUgtBwjsi8qEnro5CSPpGnKV3",
  "key14": "5U5Rh4VNos3u6epQvt31ozvKxH13ikPnrPt5s9MEV7yNYCuMG778XS2Fz6g8281Se32iTgqE93oFpwqb1zDGiXQ4",
  "key15": "3P1JXSdVLXCuoEiZScB7zNfNKTnzje6HMeQpasUSVtEGBuCH4UDeaKo1UWHTjwaGUmYwgu4kWiq9JvMuw47y6Edr",
  "key16": "5KG1LUA6XVNB7S3NovFeAEU7zv7XkSgmJg1PfvzC4EUEZwhH7kLNhAQr4WoraNwchGiRwKu4gimSUnGN1X5yAWpU",
  "key17": "5UYLBYcdux5HsTCkLRAVtEGaBC3pq5z8mmxaf8M8n3a7PbYfWPfqSJt3yL28tC3LVdBvBHjch2FGXNJ9urE6nj5m",
  "key18": "uw3Di4NfWUkJfDUdEm4dPpESMZHoagsW9Ufk2fiYNGZExmo72oRRXe7u3si556bqxiZo7kPn5TT9E1yURtZQ45N",
  "key19": "YnRqJAP4y6JJu7HdFXHFikLdVoWnSfVwXRFY1z6MbXjmoTtpZjfVXdmdigsYbkm2Heqee41JUWVRfV7LpaJzuCH",
  "key20": "3X3CYAdGiS9gUhRdSink9MTzR1moJPLSKxPJpqfDyJLt5cg32tv1JcQS8Ag5TR7fMS5aUrVB1poXD5BJC5W7Jozg",
  "key21": "3vaTr7jkxkT9Uhba9JCGg52F2CnfPBEKVszuK5NRJ4KegMNs6iAYpKJGYCzaKPzrpdLjKfXAgNb78nsBSK1mTHd4",
  "key22": "23bDY6UowxZTTfTiw6HkUJJjtka4uBXFPRUpaCthEadF8NEmVizvt548Jw4kmAxhudpdc61zorsVQZaUwmdqhceh",
  "key23": "2hvdStSdfQaSJDedrFpDAcJUrmzPy9ABVDJzAt7tygWA1UB2a6TgKWpHRRxhCmbTFvC1p3qpmqGLBkZkXzsKLHg3",
  "key24": "2xbjjp1kaWYEHhEbU1aDGMD35AXWVHiwG9kamfYhxh952XRWrXpgv5EmoZuiAvNBTJhnSxE5BkkCvA7T214KHfLz",
  "key25": "4EQcZ1BACckm4NfhmcG46h3T4tev3xfSG1bzMfRs82xNsYPgdKzLD2Zn58zG8637W9ZrTwfBaCJSFhB7zGuuXDhD",
  "key26": "2mq5WTFPR7zR9iDPKhfPqdFFs92cZEtwdwGyCFP5j2w2Q56iMDLF4emKXtzpusxQaEGivenD87M3LzETuR5XDxD3",
  "key27": "25hjBvB7SuM6SQirKfu4s6NhEnYW2avFNLkybauqXdEXY33E4SDpW9A5DeXXftLAkuhgwHoA3JoVkQDth9FKe8a6",
  "key28": "53Q3mAfJdwVfD67W7wqPt5wLpyZ7m1xoAmHzvr2k3rzeqbS3FLwTSgqG26KzMm2ZHGiQjrzE4dSewBFu8TCRQ1Dt",
  "key29": "5uASi34EaYWWPKhBwRDpf19Fu4YNTuWqm6J7jYRcyP3vK2hErx3KRYjQsyppiymXqtysRrsixggQfwoAoQa69FPH",
  "key30": "3cHPojCEFypFutSTGNxgLbuPoGug9DjFKNRxcqNLrXBE3Ssetaz1ZsoBCw3SXN9LZruWfFanDT97sGU73oweNVPf",
  "key31": "2wLC2ZG3W8A8582X4Jkon438WwFSXoHvWK5K19CGUyMSY8dmvsUbExpE1QGWgfqYmWGGW54fUqwP2vWfoXbAE9rR",
  "key32": "371xZMjgZYuHeiLiAPeLHDSKatF9G2AS6wBC18FJyAjp9EKFZi3cMjS3w9GozZe1opFo6LzxducLyP1MgjhBEXUR",
  "key33": "4j8VW2pkvNoqu6S24wPzQJoagu5oMQh6pENEc7K7P6fKqUigZFvWTRAXBx6JHCxC5Gno9Cx9tmQG2mtNTWuWFGRc",
  "key34": "Y8RzzXbkSMxTtj97Rw4fkPGy3rfWQLaPFA6RkJNVUjjrzontfhAKqbtZiBBN61cqJSx9EJqjrKBN181dnB6PKHT",
  "key35": "3ko7oe2XEXKExUqzsnj5nWBDzCAg2QoU3QAmT6XyGiCC7QKssrzhbrN6EvrehKNef8AEaknpY2vqa9VhSB39bhyT",
  "key36": "54yJ7WbriWvtE6VmfEqKE7ivgf7P6RX27qoN8CrytKcqu7uYCgHojEyB34r5cx9y6ar2Mr1sAaK5U9gaj9SUCy3M",
  "key37": "3pYSZFsBzTcxWbhzGz9w1T2Sm56wwtFT7uquhyKJKYLeEFnQyVzhWW8zrzPBtRTYhCJcheDvk9KoE8EDqFST3iVa",
  "key38": "SKjtyPQ2Bckvybd11rH6t57RBVAkpMCZQSUxE52PdPB3vFEzvbjVEd5EMkXSV1kyAJowx4Bd86kBmvh6kMW8ht9",
  "key39": "5FUSiVqPM66XAJQ33Xk5fTMiHBJRcC7PWfsPECEweAV7M8hCy42v9XYeF2JcpFAXZCgVqzy3NmDkfSbzvSMJxtE",
  "key40": "3hrVQjRq5TJCEGoEBzr3yWCPAB72KAWuQei6QQCnYWFof43TwDnPhzcr5KEEJ8aRncuT7Vz415ea1s8k3aVh4gvJ",
  "key41": "4zPuZ298j5CiyY8LnJuuDJ7FfbfFSNisBLQV3Df4tRHatPkZBJMXMH2anZiJE6P6GU9hzxXBqzFQK2GJfGdrYDDD",
  "key42": "a93uBzz2oi7ynrTpwRX5moDRKg7g44VRXCapaKpKCogVyBvk8zxu1JmU8M9tsNLsxYweYjaSGajLk2C19TK3uns",
  "key43": "4poiRPfLwVzWVZAFERKhHzTf5YGAzCwkPNyGiHcQDAzkCjnVVheYX78MzYVNy1GVYBnY1km8siscps2ox6T3WQaR",
  "key44": "Y4EgnRWjRf3MK11TUQA3zQ45pqPNk27B8QLevXpmcPxqUWMFEBAdPHHdXsjiVbuWgAKVkpL4vuKhjmvfxZ5MRzA",
  "key45": "2QZCKUz7QjtreJAXscCXBBLfZaBteiCU2sHwp1UUkaCac1hdgE8WGa7Yw8Ma9BJkzrgHcc6C3ieurnEMjirPBwv2"
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
