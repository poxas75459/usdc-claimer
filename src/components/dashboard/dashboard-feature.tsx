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
    "4nncDnMptXFZ8LzUueFRE9JCoPNeqLoe7GCosi7R8iNUHCf85QFGKudFGYiMtVxiggBMz4LwJgBUYs4P6ojdG9Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56efmZYNVBCe2WkdifNmr9uiJdcAjbf42XwEmx6WMKTaWEcrpUoCP6sx1hd5jZk3M1Q2T8ttXpjsFhJSF3sNaUEE",
  "key1": "5CJUSRADHRFzmB84Zp6UWCRXvYePTgKDT7pXWb2txHryHVu5NdkKZN4LEYu7TK5wFXMN7v8cCjqmAu8QzGWWd7wW",
  "key2": "3ajWobjKMCRNxhf55F2P1TQwYPmEfbsC3tS9UinJ8BtCi79oq5TfEJjCkDQiStk7n6PQj44cWdND3krruaYUxEuA",
  "key3": "3FApLh3qgQ5K5KCULTycmudiazccFHz4dZXRqR6rZyeqkTJQDqBDdi77ZrkZAsX1BfbW6hucU5uA5WADUVyBKVX8",
  "key4": "5nJ3hivzcM9UHZUkYPyjEP19edNpZsQDjbvNW5fuRVspnau6mge2K8GLf5Qu283EyTqDsgcHR7mFkRY7d5KTzg1A",
  "key5": "65PLX4VJSqsEDB9SZqrhGCNWPFayNPW8FNTR7S8oG4zTtuXTEydQcWGv89yHJztJPeAJymgCVvJzdhrHAdpNAYnP",
  "key6": "4ggpBxnuTuCSwTiP6hdmpWM1k5QBjb2uNXAXGBrBovw15E8yhny1PKheuheYuW9x8zhTR1JwhepS6HCVmXpcdpHg",
  "key7": "4QVheYRyhRCDAPQoRXiJrtkqEHhQ6aYDxQugQ85cG4Ey6kFxgYwKW8MYgqC4HhLD2TvHcgh4iQzhSBU3qGzCm4zB",
  "key8": "EMGeMjFLqqTfGVikjkARLTLTB1r3ENnjEJ6VFCSUqJ7R526QRM4iUL7KHz5nHeT6W9TbRrQwydxRWbWc38z6LLt",
  "key9": "2zwxM35Eb48HJ7u8RPQCdQoy2KkXVZx1a3xiq1jiS6NhnrbEe51r2Rp5vSp2zEG8og8P617Rnd9nCFHFK9JgA7En",
  "key10": "5gDUbuaRdbvWRW72PDwWW1HL5m76AGWDsYjTsr8yYj3Vy9DVAjb92KLEUdbWfQvThARHqrAhg7qudV52duqPFrqR",
  "key11": "AXbf4hVeianpBs2wQ7AZwV5su6AHioJUpTAPc78V9jqNajdnciC1AypM5aYY93ATtmf1Z9j3tW4E4seyKHVSWGx",
  "key12": "4AYrWwfyWzceoBfBePU6D7fDf9reG6fbJ8NuRXn7KvPrMXQqrciMPSV2n8zpbCEb4RA8eVZ29sCHnU4HZbaozEYA",
  "key13": "5HHjydmegi4EGhrQARvBvDxMHuozpCQPixbWR5r6sMhRJh78QjpHgEyjRxGwzYsDZE4tYG7aC8FRwQ7aepQ9Co2N",
  "key14": "9fMYEhbgg4rD3APsJ1PQvYrs9XmH27QLurF3B5t5xPoVHXC8RBNQnSghh7srog4p4d4BU6Tr4Y6mh6LF3BC2Ed5",
  "key15": "4iFmx3781n5S9rKbvEajbPqSpUi362Y5qnc7Wi9fx24YFFhkXneukcRw5RbZVbvBywDRbGQ2YSd9wM9xxcc49yNz",
  "key16": "4jLJRXUYCQxtNs4yZb2PihA14B1fqKu5GEkHR9yLSgFgg2kFtMRevWTNf2VQf2NnwbubHaWP35BsSzcR88TvxDtA",
  "key17": "3DUzfAGRUGU3nKB1mYSaXX3z7Ffx2bPAZaPdTFfWGGAQ2hFoWa2fuKJdCKE4kqjqUBLPqwDrzAMrjpCqpaUnfkrx",
  "key18": "3skyWGXF5JipSdopXsoVVe48FWFHCcangcKjQc5vu9irKj9Kf2nyzmoicNEyAQVjsLgeZtWQZpYwi8Ti2zkMKEmD",
  "key19": "3MwBbAD1M4UcjyL8jkWP3hdKL2aC34NMbWtipf9N4RA2JCiWHLZT4hLyqqoTSr9uuCuLJuypAHHQJjupibAomYGG",
  "key20": "5S6GpoRsxXSvXshTeHyJK8JGwBhct1tTvQCjCtdmkr2MSPAa3QafUBGcC4z6JwFv71Db7eDG2h4Ye6GbH5SRSWC1",
  "key21": "4QcCXMHTCDDhJx6pnKhY7mTpukRo1ce3cB5mbhMZiFpsyYNZEwrqGJRKuKBKCTef7UwUw2ts1VQEJ5mDWw5S66Bz",
  "key22": "2jRxghdXf46qYu2BV5KqTNgVAzFnP371b77oQTNVtssZWW5PnGQpHoQdPSxQsDwmHRw1mFeYLXRkaqSYCFLf5aVv",
  "key23": "3USJ79uGKXwaYkQrcpfexSzGAzvK5XpXNozAy1mqR7YFifSMwsyVCb6A4PJwVhb3UEnp7uHPs4hEgBWrppSWny1A",
  "key24": "2hD3VdaX7Atq7rTu8mtDBvd1nDDq8uC1dWicNsSg5iQDmrNNTpk3B2R8wgfqjipfNUXAT5qZfFLYZEBCLFrfqoL8",
  "key25": "5KM53KXQmMLUgrVH2qDjJeTb45kevrAKtK4VhxJBLHEWWUC6vNiPgXog2L7hjjs37jSLNdq1RzX4PcoecqDdE6EM",
  "key26": "5uByxHMhz6y1kFrKFrWrxKHkDouz6V9qPtXH4KzS6QPkP1D5xZuwYn7ULVSjsSCBNcMXkCwyK94JtnEtDZGrRJvC",
  "key27": "2YfPbsQTqRZ5eAzLA2TySZD2Q7EibA7DaRyZeQ4UYAfMeGRt3G4n9uZgxi3G9YVVqWEUPug9tH68dKymi4xTh2aW",
  "key28": "67kVAvHjvXhSFjrYrYtua9VQ4tXV4b1sxFw7ac1xzt1n9Mt6ghpyJedJwb8J6EAwGe2NHYErcSRrLhVxtnFryXhm",
  "key29": "2Q2WjYarp8Y2FGHfqgsP1Ynosd9C79G1rYq33nmUo6zCdHEZm2ufUkFaFUzGrkFzHuMvpgpE1ZgNSRCEat6aP3kB",
  "key30": "3xM1Kpw9nGe61X4s93NwgKcvCc5MaYW4TTtEj3CSZ5MFngQgPhpdQ9X4FYdyaVt2xLfBti98zftWZow3rUB38DyZ"
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
