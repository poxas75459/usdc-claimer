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
    "4Lpu54cLiFHBSeAwVk4uWpbKDMZKhNNmYbWvAQXDGfbLPBoaDPiUv19APrLgy7Gg1NZzjUjrNnHuGxUdpq34ogpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8H6ZQqtRpENeEuHpaFni9c2BsDDhCDuYa5v3V5NyfQJFyVZBeAakEEKGQpQr6Ubwgq6p8HWTTrCgbQAcFbUnabV",
  "key1": "2mdKdnSrQXVbrjK68zZyHCiUFgRzNmSjra72jr4z575p92NHyyPXvRne9EFVVwyq3deD2yb8EiGa4ZXciPyuY2ae",
  "key2": "5FzUSjMApaThftELGUwJJdHToX2Dq6Bj2FEUyE6tPNXy3emmZyaCWC2QDrorJAh5nCMK4KCsWA583SMMupXDSJUW",
  "key3": "55fxYsXvQD9ADiXiNmYZW46EoGCMt4NT9z1yECHguTXa7yvf3GYg2Er9kVn4gpKGRjz4RRiYqMmfd9oBZfJG9C1S",
  "key4": "2sgzZ2w2JFZYCAYoWsfLj8aBpfAFmNsCRRXtrQs2o82z3GQeNhU96oW1cMzAxvDkMbdMuD5VZjAxGTSELEohBwQX",
  "key5": "3XZcYGEcQCGC6n4aQPEfw5cqAJ923jNR9gnGv44ak3NTit4dpnQBH9sqTrZH8BC4r3z7j8eChDcZAmtmNFBhT3EQ",
  "key6": "4efnqcfxrojSBabX5P1EoRZzVw22C1SytzJ9cGxq6ahnNqW4KkUpAZb3UeypkjmTeHyCa7hy9a3j3VTPSjP3iKhR",
  "key7": "22Xh6gyuviZx8ev2eFczGXj9jtqs5U1sYkmi1a57Pw9A95x9K2szEAefe9mbNhWr2horZmkc7n3HyaVruFQhyiJP",
  "key8": "5Rq48KXYKN47pqoU1Q8TLHsp6fCX2d5YjcvWR4NN9LVX4ZtUnhYKPS3sM86MfBmrThWbBFCmw41rt7HFgxwHGkRf",
  "key9": "hCCkyF4QX926y9PrevZaawRAMEcNZJXPLhFvLGSRjGdfPEF7rd5uBwzTJjucDxHE39FBinP5KjA7DcUb2yw4GG9",
  "key10": "4tDHTe3VgFQJfP64UpTLefUnshcTAufrny2GmsPrbNxJVodY4XLYePTm8zmHXPnpaa4ZcUzJYAEGgZBT5biWEuP4",
  "key11": "4oboBHdkmsHNJJzMdWgqz9TFHGxSF3EJRyr8JM79hEc9114UNMLR2gVzr99VhGSxV7fUMJaTjdDK68SpFpeQaaqx",
  "key12": "1U1PBBPU9nTghzSz1r1DgykXLacUcn6rSeSpPG4ZGUNTVWdTPnbmAS3pfvB4Pkav6j3TJHzfxRs75pZGmmcEoyE",
  "key13": "5RbSpUvu8uE7py4m56CpHAvzebiEDySmHVsZ4toNUi896pb5t7beW6YYCSKfMP9ck7WtBwBqP9mjPD8biWLjx1N8",
  "key14": "3nT5JtLatnmLpPDGFCaFYLKu6AsXFM1Vusoj7mJELGqu9ysPUE44HqMxYTwCov71TSVrqgikCqZxeny6iszwpvu",
  "key15": "49RCFTuxwwvYkCy165enqUUiKk8Fyjyq2LX1HcFUQ41JabiWCP3YG5ZpgFPYfMw5LGrXV4DHvmDSM5L3mhAzmDjF",
  "key16": "37on44fr3MWVtcyomKaBfciLjLWSkyZppipgxEaHpCL69aSGSuCbGUVNSvCB2aQ5XjD4VbehCxuKv7ufk9yBHthP",
  "key17": "4au2r9MfMoF62ELj6dJFFHcfrRSLztoMQFt25ZeNTXB3hL2EK9yuKVvScfoXavjTB6eRQ9tmvywDaZ4Tcc6MzJHE",
  "key18": "4xBioa14LZMJ2UbovDv9nsHuDnJctgHLJUX1DoybzoZRZDHE4FPuftS26dEyBDBjhRGnYQBR44VLu85LxpzDPv7w",
  "key19": "2nfCbHUA32pkaoLCM66TD2tJbqQfaq5xMPxovVdcLCCsNLLzsRj9mv5Dzzv4NdVhaXu1ZFFwJXHvi97p1pM8YUcR",
  "key20": "26kPv2tTb2pZZmRTQzsAgRgbycuqkL9kXABw4zUv8BppJmhtJSP3YSNdqeUJ6hcWEkLACz8342u6MSDwr5SQTxV2",
  "key21": "2qS8ztmoWibzM2DeEZjF5ge78cgg6bWzWVk1oqxvroXugk3G5bcS9KBkFhtSDHErwt7iHz9HVf8bt3gJkVfnvHyB",
  "key22": "3L4cFKtZGyewj7xkDdpWxynVgPJQjK5ts4ZKYgZzHNSLSoZ8871RqxpyJUqdSWaiZ9gfFXeHPSBp6JYd5JKY2Csg",
  "key23": "4e2CtBaV5F6yck6AcgRyf3ZdTwtTiXPNPmFz6kFEcnfDZHdFwENXvhTrZa8PonrVXNHawJ3Up5JvgLJbVHbEt19M",
  "key24": "2rWns16Dt315KeNuBLciw6sNTwF4BbdzYTRVNpcwsiXBsCJ73aKSpq6okajroU6oizzqE6uQNZrKuAB2DC5MCfFT",
  "key25": "4my7sLqN1CYgSG5fJ9BHmP94aaj7CqUozyArZDYfy26ZmAaoq7goM9vaLsjLfRN9FeSQb36QthStbFamSfc2sQEe",
  "key26": "3k7yFLn9WDrYbhVgCDbAvuzWvuEZUM6vzGrX9rP1adi4zXn1wunP7sqwd5vWZKnwsfmJTmPRZ8myMLYkEGQoGasW",
  "key27": "5QidMytjbjCWTHamMEkmW2kKak16sC3qV1TJKUJupsTYz2MKBPRmEYjr6rA7w9M21Dw5NeL1vAMbL1LafKrRCR3L",
  "key28": "qxt2yk8EJjCC5735khB3KVmSaFwbC5g6feyj54gaczxkUn15NdPZ6QmdxHqrKpRYjBwqtE4AeVKHhSnWouRjAou",
  "key29": "5XX7UxsqJUNY8esUyEgv5XVx3Exsv3vurqMDThDmMqD3WS3NtjC2P7Qu5vjMtDMDnYxuxbpxJHoNpB7zwEWGTyjc",
  "key30": "2uAjyQaQBYD3A354yXKCqfkUP1MhoPxznLajMkUj3vNjvvupH6UP4tWTdZ5RK2Uz1QgrqDAAGGJRBKwu7FzG7WzS",
  "key31": "5VEiuTK5wzWvGujkV6ANJEkvo37JnPQG8utrLcRM77RjfVqTKDuSppNUMG1tkoHsXXoXs9HVPyTeds9tAzgxVaCX"
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
