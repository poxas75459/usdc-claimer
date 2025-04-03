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
    "3Lj1z1cFdUM62oWRSy31NeAu8kEfi9njUvBnjvP96YghZgqhnFPjvNpMQTsWJzehe8rimKJAqd98jtqWF61KpX6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kukJKJbCj2ym1FvRr8rWqEZsCkreLkPeeTPjsjZ3gJZptVva2ZLF3gT5PopqSMkhK3vzVa1mJZwn1LfE9wKzsPi",
  "key1": "8X59QWb1WtqNUQC7c6LEZYrYTutsMEwRs3WTk2h1TgmuZMmaNAZo651D4HKpb1H8oG9GBYMKZR3vkRNeTRcGv6C",
  "key2": "3KLF2PZwH5Ei8FupQSudJebZKsoCRFbMRK6oqJRpYsEgg7cpNPsnMzzmF2S3HKT6wmcUgjH9yAEQJfCVPQmfQRSP",
  "key3": "57P6u2Nj4mAMsMVxfjztut3NwVUoMV8upH8CmkyEwSpNvmgsecGGJFBAqr2A5yAbEd1fTpGXQw1WbL4eeiiiHV37",
  "key4": "38e2cVynKVTFv2RNT81DBaei5mvZvzBPjpJLqdPhN57GhjvpxgjtcUmTJrCyLpw6DtU9tvxArJvF8BJ5QbgX5Gbs",
  "key5": "2W4LGaLsFXoiDiaeyNHPHgjHxF9eDKow4jMa7onY4jAXJS6kGyabiAmGvmEKTSvu3KHsBn3KqvF3dHDPB1Q4qaVT",
  "key6": "4CNeHZ66Jtc1an3BFGUPptXrSM9LzrDS68shXV6MzxLMRNhqtxvEztJRDBvNjSHhFyCrmiX3hGCmto21MzA441ec",
  "key7": "63fKYQsJm1BM9pvZU5qFLMB9afuJoPVF8Ux8xg6iEDhERacyw1VBfNqhCqaYgXUbf3taSqokWbhPnRtvmHgSXr47",
  "key8": "5TrZmQAhFVzDdgdB14AVZ6A5sxQiyHer38bwTxPaqN5dnfADArDmkAEX7nCWjyMB5d7fRJUF72hjj7wjmEWqzc1J",
  "key9": "2Gz1dkY5Mnw7NbYqm5CYJEab7A7HSkSAvemeN4if9GGedrW9x83wZxuLusxv6Nk3u9DoCNA3ueDoqWHnP79mSkQc",
  "key10": "3cwHnxC48muRZXkbBrsJhgpnXipEb8EMRv65897XGDjStmehXhHBUQizfLR7jLvGRoSN1C8JmmQBT3AR5FWBfUFq",
  "key11": "22bp7zjCfULmqmWgVr8J4Wteorv1ezKLssMr6KWqVr8A5KRaWLYyMvjqHDHgF2neu9pycY6LW8uCmfj46VrqWQKa",
  "key12": "qAXTSH5hVEqqJSP9dBZZWsfHYEd42vmFsBWnqGg7wgtH6jxPyJiJC36CbV52GcNyoLpZFmQcvpZjYqTaEiPtYMk",
  "key13": "3JBQxCkeQsaRdoVw9VYYTskwebUrLQnbb73ZgBjaKm1HeWqKrB67TjtNHxXnYBUWXi6z99EA7FydpaX9bn5WiarY",
  "key14": "2cepoZcvw8BUqaN2Udu9Y6rvYfxwkj3fFGvE86hjb1kzbxVUwLXiq9fSk5Eum3EaH21yeRKSL9VzdYCGfymzz785",
  "key15": "3kKiWW7xfi2o1x9etCEDCmbnag8vRiFYV6934UdsUJFL2zGWSatiUmqbkb3U3PSh6esFgaszHju9RGpjPHza6Wpz",
  "key16": "3fQbQwmtHsJAYDri51Wy1oQCtGhCNDfNwKSRP8fg1aiztiJfXLUgHBvib2TJSiuhGQciHna4fRDdUpywpe7hcpFY",
  "key17": "5nRGV7Gjx6PNa3RYAHJPGexSexVKdgyzZKiQQEpWchvQVKm9dpP6mrEywnzB6E3NpHDeEfz5m2NMi6gvuJZQ6QL4",
  "key18": "2U2mjhc9LjotW6AFPU8Rs5R6fayBAijWYhtYJM3sfo4T1G3NvY4tGpqFctW97QcxykHZrvXLBMjpPpG5BLCUgumK",
  "key19": "2vNtx3VtNYKQJRMo3A6xshqYaqNaoQG8rABb8SAKUYxGo6QsXMSN8xgFnx3bPCDYBykqFdG1wdu8MZtSXdHx7V83",
  "key20": "44v3cidDkd293tn5W4eQXU4k7gjjHhwV8LbnTnm6UJpLj37iqC4gzJhqjopnbZoaui3zRzDqRV65P73TtimPjDFd",
  "key21": "nJKCtvEtF245MMKeCEjEQ4wU4tvdvdpBaVn1xrB7hRR25M4FFEQeTDkwCCCp3Lpeqk9J5LszKnNEzc2MyZUEnGu",
  "key22": "32cXV5vgeTTmhCXzsRXsnENSR5TZd3NEAwPZCBFXBhQopxJ7BtmAqicrQwXANcsyrGhADmCMdefBN5uQTphobNY3",
  "key23": "494GoShFqaJVDeocJmwpt7y6vqHdpAyqRBEuUrEXQeBjtEzbnW6rnjvC8ZrRNQjjignKLLgmAVV3JU1AH6bABmh3",
  "key24": "YwjyQF6FG2qUG7P2WUP3qwVpMbmJdNZW5JYZ4HXBbsBjodWcYzWtUBC3N3K9podk34r6dJSCjuePcdVGNwitSJM",
  "key25": "2qu9rNBR4nsE4Sks5fPWfsktLVKR2SgJPKoeB1KaxxhyH1VgabazoJtcEmKB9uPgC5CrAbtXWSprxHgmYVvqHqSK",
  "key26": "3RY93vbvJwdJKXRhyNDwxErYeVbf4qY5xWWrwoniJ1XVddWVqN6s5YqC1bCksd66EBn2ZEQJ6hq55QWdxJDnnD1v",
  "key27": "67RMNZHCXXka64xUQVaEdLwjYbE9HpWZtyqp4TLCbnM883ZYcS6VT9MhdnDcivHqYrw8tiimKxvvsXp9Ny5ztkCZ",
  "key28": "3rYQm2rCuUxSn11cGuHEUDw211J2i3kecmwwF4jdJzsqT1HYsQip8JmCHLpW9w2rcP1FahKKQsUupLUKWCXw7PLe",
  "key29": "3xC6PMBx7uDvN5Jse4SNPtbp2PviCXbrSMSd2TDvPMGuLu1ZwbYa92Pt6RYyL79d9ZXtWw2r66xfLX1PXpGarZeH",
  "key30": "41DLekEbNRsgJxYpqe4uvMjshNpKooa355KsaNGM4QUz7RU4dKNXz1XVdoeYi2wxZuks5PLkgqJfEMBCaVCsRS4G",
  "key31": "294BnzHQkVFJTwDeoc374kv7MnfNs9epWwS6WDfnahiqJrpBnUo1GP83Ccfoq47H3Dfut6wTYKWQG2JVERos35Jc",
  "key32": "2omGvNBXVTc5UwYGEW4CGQ8i6nsk4K1VWcf7efTUsWSKUwoMCxiavRiURViZLsfc6yXQ7arDok4iR9yD23rNiJYn",
  "key33": "21qxMx2KnaaEpmiFdhRRzgJyrDd2uGxLW7CidXxcxgzPWXTSaQGR7mfBKVbBUQoYeBGny7fUmB9UF373XnkUvNKj"
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
