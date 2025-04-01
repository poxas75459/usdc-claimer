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
    "4eEu7iiRz1QUkTNqtAuXYBuUfZdrkUigMtxrVbGDehemH591p1qYRLJMrz9Pwqb6jp6WSGw1fbsF2mebpAoMWYts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VS3NRyD36zwHMqyCpSEEKTw36aVsFfs9yXGbZUnwn2hM69SdAEcBDJuJvuvWGuauyr96AqdH5zdMt9k8y9G4wW8",
  "key1": "5srycJuDfsW4Pbqxw4PyJJWJgaujjeDm3PYYtrWkGLQo1LfeFmLQHXWbMSa2MCNpo3yNfARDCesjUrwAKT9zhiAj",
  "key2": "3cLSh3Y9vhtYxUyaNQgXvRYQmLegw99ChhWG4G5oLfUNsJGcrkvBDBpM2SwF1tNK2zAHJrTGWMmT1HQw1NT1YFTU",
  "key3": "JXQUbCzaZa2B5z6psWVnvCTgmwNE2vAvVFR86WUjUsurgfm7TJ76B76mtd6xgaMPS8xJphgzLGbt4wj2hUakQKX",
  "key4": "r5pvZvMQSKMU3gJpBcqBMjbEwwngND99KzgoSQ4h9P3BmfEUNY5KKNXbV8sMddVM8NfstX7CiWu1Hvh23cPGgKY",
  "key5": "2ZWq9yuEWaSsubUD86516HKwFBqiWASquPmzGjyLpNysT3xesdQcrGPkWYr8uwh76johSrLHjHtbDVVbpKbdHE3R",
  "key6": "2Qa8Aqiqgq3tZpU3rr7grtpr1c8Bc8iRk6LNHgJeZ1fAzkYZVerpA3NFUxtLuWkcmdPSuuaKTJC2roGvxVBFGeq",
  "key7": "A5pxoXBQNCYu2UkuFcotDMVewSeBAxQ2FZnE7yMFPoL8frz5rqXaUwKQyLFv6zq8udizcvgbRBD9z6wTCiJvKw7",
  "key8": "4RvTcv9puLxMECK6qiWJxB3dwa5kLwtHWmzXxrNkMydKwJJQftfkg39m3w7whP1U3xSRSc3GKgSVTqFyaVbnaU8h",
  "key9": "4FYnPRAwZceLdERYN11q9C21DL2zBBkX3qscDUmmJE3Mgctu2d5qUEWy6MRB6eanD4iNDNM7KojpaLusxfieHvz",
  "key10": "2TWAQQMd17pbeE9LzAqH7iAK2KqkrTnEZAfKRMwfBt4P9xwCu3piD8ueF5ioBAtmMuiVVn9g3nuDeJgprpc3SkeM",
  "key11": "RTdQEVPwfkKCkKnLWcNHHUoBqx32QoAn8JRkzCNCrrJBUFQgRxemi5MeN2HL5VrJhJtxN7ZzKkEWhdxnx8ntcTE",
  "key12": "4d5XXZUf2Zbb1GR4tXCd47z7wVfty4SfKkdWwaG3VhQdpNwZZgsJBVYX9xhN5HkKnMFq3dRUDoikzpU1YL7x2t6S",
  "key13": "3vHge8JMGvjKkjz4hiPnQLj1h8FDdsqgRB65JBe2qyympdPf1c1LiA11MMyeGswm6sCLbhofsqqPR8yaqXxZ5rdP",
  "key14": "7iE82wsMAYiGNmqLFuu1Z8rQjE8L51rLJ2HQJ4T8PSEJhJW3RzwDtPNoWCPW9F4Sj3pwC45z7fmvhGaQQeNj3oL",
  "key15": "3hP1uXNgJs13odT2prWLBnu3HfmepcQVprkpEyVtdEYAyMfkwYn8MaTbwkW2EYxWwi6aQ5GmfCUBKrsBNGCiGUvK",
  "key16": "3KBSNpg6QBHQYtUJxtJQFAWjWvWpVBwDDXhQKKm5sBJfnYAgsUqTpTvzXTFRQegYp82GXiWXTc43kyBJVG5k25i1",
  "key17": "5A4orQERgjTvPPzvu1U5Mz5F3SBG3roPpRQJRDEzv3UWUW9TGGB4cvqQ6LntaHR34nyAf82uJTiJ4QNQDwcJTDDd",
  "key18": "5AcQFzzAGQ7MvSC5DUrcQ6jRvLuaDKGPzeFj8mQKxeo1aZ9EjXCfVMyEXADscQDRRxPojiWHoN6pkhGzbjVJGuvC",
  "key19": "4cDMKt1UcddhcNHXFsZzDXMVBG7YFEm491BmZ4KSnUGqV7nkdZaz9Kuh3Tb9BXW85ZV5MhkXm1GdgddtkK12Lgux",
  "key20": "4wcCV5241GJ8nMUJf2N8pkYeu4WvHMzAe43wwoiSPqPaJ41q7PfSR64fGX7jDijKKEaXR9QNQrGoTfQKtuG5tTW6",
  "key21": "pbwG4v38nhV8j3W2H1V97iQeUQnTBuKrRJVqCBcEFbjGvHkVeF9eiMp6hf7FS5c3YKEJNRDftoygBNpqReAHcAc",
  "key22": "3MRRqqmHRXPGf2YQBendKmiRkqjKBgGGchWNz1A24bEeC3VdQRd7oFpecGrahRjMRLcj3s2HrGce5SYB5K5Vix5c",
  "key23": "4rzDwq9vgxK4PL4gJinTocDpgaMWYwxD87YPmYdtkAEgM43x8XSUBGqB5Mna6ajvzKzosA45fXejFxwtG3ssMK8R",
  "key24": "bqW6WNRWXNh3ArJRSYaK6ZiTD7vjwoxTYBKdSut5Xnq6QHZY47he5HBhc48VaS6sRgueRrA7oSDEfaYks2BUzqJ",
  "key25": "2oZjD2WsSHghGKNnvYk5ZFK1vKGJMnbFAoqf2xipyUcb3iJmnSCemvkw4pLshBgCxU7g4ayWAwEhTh2gBGLd7Dof",
  "key26": "48jyJoQphGK7oi9qnHsZJ1yRrCgFmfeb2vAEC9FRrnyCrY5uwzbztMHGtFPzCnUaTMgCcdprZQVe7tQvP5WS87Y4",
  "key27": "FM1mTy44E5FWD99qqpVXdTqkievDVgeE4S6pp2MfzQRkinRkzygoH9o8CY7AoqMvdx1wkXxyHMqYdeXpNRxZGZ8",
  "key28": "TDzHGENZcRdarPzo1pLfXdLcevbneD1DTaBqHtko7fiMuiyoy8DdntnHAZU4FBeHomqq12h95D8Vegii9v2wK62",
  "key29": "56zFLFPBgTJgdt1DTThdGgxYwzgNY2DLbNzFzc7Mu12VpRHrXXdHoCay826rY56zxRLXtjj9MHPtgrrVEz4Lmtbf",
  "key30": "3tw7Yxc34McsnjphBRfjGTzX6DSoWrzTkdGFwTDUje6kVB7S5Rq6VWGazWdm7B34GATHsRjpiGPf5hXWioMjtEy6",
  "key31": "2W7syVEiPDMvgP5fzt5gEwD42GFWfxw4wjZVDseb9ouHT9FJQV9b5F2vcb5AjDDNQ3KUip4v47hQJP1NSofdr7CN",
  "key32": "4mPofRZWPahVQsqmmJDhBo4xfqZDw47Njk1LkoJrxeiBf2mEoKaYfQ3qkJEMmMYhDwpzMQ9zCZWuqyyXb9zja2F7",
  "key33": "27KsxCuha8GJkbUzDRfBwZ1zLGH1LgGzbVJdX68Qwt2eV9jZJ85oiYU5tYMm1GMew46wNwKz6xSaiPy6J3qAXCTg",
  "key34": "4pk2aUyiKNYycWFvsvEcdFqj5R5mAooDkGnwEZrn4ZeGdCUiRB5nkhNKgdfehBGLmTpZYnxYm83YDpXivq4SJhQQ",
  "key35": "3WX1E1eemzMW2SobEXkfQgQAsmWYMrTHDTKqiAhyiJvPmiuW9e3GLDdpFyvnnNeZckSXqdLoa9nUaFE9muMPJ76h"
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
