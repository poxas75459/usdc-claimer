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
    "5wLbktaEG8KZmjKP7YRCT32RMhe9D3jfeZVcqEZJ9CAJuQ6virq39bPiLXACnqz1Jg1HonkYCpC5DvqQuWXT4tHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrw3YjhpWj3ovBXUfAx59J4qcYdRZmAbE6zhgZuvUuKaN7tkaXDTr3XmDkdSPMRGxx5HTXGkoZ76DpjaC9SoNh9",
  "key1": "4wjXp2ePx4QdUWWtwU3LN5TPE3HtfATw4hXJLLL6BzRc9G7xSETYuzoYQiBq5Dxq3dYKWRzrHimkpGuPyTBjAfHy",
  "key2": "itcbmnNqALnXi8AH9RmMYtZywm79SKMJFDFaA6vq4kjxTbcdTEjg5MvSeLeXufirc3NprNq63JgZbswbawCjJBq",
  "key3": "47T6wCM7gMXZjcVFa7ToEmz6RJKEqijPPEGveAGZMP5dsg47ZUc9oGhuZn7U7uyqHmtkaVWcyvwRPayP5WACuour",
  "key4": "3mXrwnhchyeC5f3hNa2ahofZ5gBkAe6uogicqejn6aTxzQopVweN2oVyPYkVYdcMLVk8dHRUPhVgb2nXZoUERRvB",
  "key5": "5UMBjC6atVmATDjsAEgvS8yNQ7NFLBNfvZkeSgMGrwM24EX9VKTBEZagBFi8xHs1bo28GXZoUvXVbkWGFKVZ4JfC",
  "key6": "ytEX6emWjd5fTU4dESKHCyPjGDWPyCh1HrZBHDuyYFDo8EibDE3RugJwyw32XXyxySMqfy1L6YV9uSrTpShou9t",
  "key7": "3SQijxARTF4mCShCZUqzNokpJM269uHL5Fm7gcm8XfVHJaND32kkZB2RLpT4Y3dVtEuxfREzJU9dHL1h6HBT6pFK",
  "key8": "3hMJpSajDd9JvD8JzEE8un3Ya6DQ3ba3Q52TzmThjYb1gaPGkUyFScyDGRnRX8UR5g8x5hLxVuLz7wZFaU7SNk8J",
  "key9": "3RNeKy4iDq7bmER7fBpBYrxzQGKE9VZZt7wwhrLGyGeux7mphUz5RczZc1v6FjZ6Xb64sZA6eewSM1AoEMUnYWs6",
  "key10": "5YYVjfDtcafGcJ1fTJdZCs4HqFcsaK2HQkEfuyJbHoSuyUxzuxw5viQ1NQXkUqeGiDrHM9nTwbi3ACEdQ7FQ7KaC",
  "key11": "2HUbpguGwMkHoWPAazpse11nwF5p9tcWwSEjeXiNuBdyzUkvrErU9K5NXSfWyDaBYwwSZESzyiQ7H9Vsx4jRiFje",
  "key12": "UMnATWkaCmfJqGrnwZwX9Jhm13qDZsGyMegMfL7C6GeJEjszLCLsY62y68i2aWTbCaqcfnfHV1PXJuWu1u6JDPe",
  "key13": "2aSsHr3RE9m2pnfkCgmUdDT9dzE1ffkBSadg4Wt1J5XaECE5Qhz9rSgQ5UGxfhbqRjaWU5mMCKZWVXyXAFWxskSu",
  "key14": "3gWtoDdFGDsH1yBKZVa7QTUoVhDGHxViPfNrDU8eXTjLRSB8ohGUcz4jRPu7u8rqNxVCAus18cfZNaLcFvFicW2h",
  "key15": "3zhCvfCYTrq1xE4518NwCGKM1TYvXLFLco2bYei2FWtouyiMTfnbHzhYEbQZVmzRi9ePYL32uwe5BCrimH13hn6j",
  "key16": "3T9uKaesoUpJ5GbtuRfNaRZn4ktGEQczk2BnXF4dL53WeTWrAX81VnMuh4U7F9on4KW4eqx5aaHVky6byZWJRnKn",
  "key17": "3AZp6b64NPDpMiZWCm8prjNHXirW8ap5XLEB7ommAAnBuGbC5tPQtTNDinRnrJLubiAMchDhZUNZjiA8qPJkzMzN",
  "key18": "3YgSzte3kRNGnS7cEvdtDu5PkckgoTgUCpU9Tpfys2dQdN3RxPU2gbK44hjoUSwgRh8tTHJTJspSpcLpZgG2CH4k",
  "key19": "5bJ6ZCrrBL3dwwXrUpkEp6Z6nWZqPaRyXNWaksr4xdyGrDYN7tiLG8S27oHnDUaESsdRUSSbfZYt3CoZgWvU7fEG",
  "key20": "2UEUnpcU8DNT3kpU5iGENEQBDcpUaWnK5cYvnx82kakTQRjRSnBbmsEREaEtuYP71mtTo9kF35SAk1oTaStRvx7y",
  "key21": "22vfvtTCkSqCMMmzcXW6PeSXwrqUvsvv5i5Vy1DGh3mqay3iWFesgwyKSsXQLhJfMW3nf2C2ggy5a9N7RXSmTSSc",
  "key22": "a4JjUzKYWLn2xJGz9Mtnhs12GM2eNnHGShktUWjCnqTTrH7vWoCNXYfYC9ZstrNoJcqebc84v4n5spL3yWPSGyP",
  "key23": "4osP3MgsJVsgrXPUJbQ5Smq3rA97pYQMjkCUHmScCMUB5sMM9DNnkj7Bdb8dpqr2p4QHbQfVywppuGTxQZRXYjXb",
  "key24": "ZThKvXXuHg996nM4SGmWfnvjLTUo3RT5CbyTP9wywPscTXyG95oG1TJ8mFR6rBsdj1qn7ec1f2zi7sA2DXcEXmn",
  "key25": "5Wtc77czAAYUwkuvYapcRgjuLvLHTLCgQGiR1CV5GTK6fs8bymnoeYZYT1Ksr4XnmDLW8tZCtpQckeNhmUJBTfPk",
  "key26": "4f35MVAwEET7XsdsdPyaL8GGjPxUEXWrsK8QS48daAtpniahCj4PT9UTzMu2xgUGVovAN5R3M9kTdA6XXZrxeeuq",
  "key27": "4D41rwe5BYjvt3jUqJvNE8zhHVY7JCqfuQz1gAj4jd2ZEPhF7VRKj8FvTdDxVr1pK3mC52yfP5B1dxbE1b2fAFmy",
  "key28": "5CNiRN7gHWcCWBBXc1g1Laftxj3PwjzhvGSN6WfZBeSMdVL9ejePZofi8zYsU23uwm3BYdHYcfhJvWLwcjk6HVYD",
  "key29": "3symxS9nWYEogkdxYQNWPR6qwigL6tMpMa2dbhWqr2fp7CdxBTz1LC6dbzeCT12gsCpzRNJhoc2phTscLST1yh4U",
  "key30": "2iXxHgEquKAorXBxCkBe8AhaM4tWVzi1mKTmK9uaBy4fwzd3E1Qt1AxtyvofSzEjSzygZRKVLVXvvp23NhSK4bqw",
  "key31": "wHiJde38hqA2bxY94xF5zG1CGNVpHm3hAxiGwCrNx5ewRgZEvfzLaehD6DocW87gfmQP88rGrRgg5bWXEKUYocV",
  "key32": "2GTKSoedDMjQWUvwCGkreX7hdUM9vs8kqLdppgyYQQ4Zymrv8MG9VwKm5bjNsGdwh7m3nKtrVvrgCx4ZSn8F2JQB"
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
