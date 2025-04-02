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
    "52jKWcSqZGteV6k5h4BLhnC8uakX4zCDzpXcLYU3eDMvKqN16DDdu1x1Pez9bng8z7xiUtqQZojY6jsyRSSP59pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNxVAF5XWFWe1Aisjy8XGnKkR9wkCxifASQb9VfkmJrRUEviQ1GLnXPknzwBYUFMBH8CkcKVNdQzKGMgvwRfW2T",
  "key1": "zbQKGhMrdq44EWUHHQmjmefZ76zoaFBhAp5u844JtEuz5L5ykDc4Rg7qEWSF1gfb8uCNUzwSEr1zK9udzWDwAPx",
  "key2": "5arKiq65Agq1BtxfNmADQmNsPCxs3uBADE4PE8AHXsAKWkxBXEk6DNZ5H1rE8X4426wuMG2bA7opdsy1HLH9acH7",
  "key3": "iwuqon3HaLkzJ4ZHEzrECyGHDCjhHr6hj5zyQdWkQpDp8zTkBLDn7EKUcGazXUqn3XZDtfB3pvq5k15anM97EKm",
  "key4": "2movtM98SPyCidSwsKv4h1fZUiBj1Rs9DEuhJvpJTEYCXZndxWkHPqr7ss1nMqGw8ZAkhFKaudtaD99MyZrofvSb",
  "key5": "3jU6yzrVMDACPVrkTsFuMjaCsBdWPSRofU3LHESJP6Bpgkh6Wnit28nDvounTnsxWx4r7LjLnMWGSZobKbrUhPSX",
  "key6": "bVii2snwQWmJ3gzWJiaqW5gdAkoSNQ2Enyy1v8WowL6ESx2mjdXxiGcQMpSEH6cL9qn43ZpJvW4movZRFQKbomB",
  "key7": "2bqaqL4t417yZCNt7qZbW1JadCUTcc3jDQBu3YYuRGGamK9FSRcNaA62EKEmGExmzMjh2GSTk2dQUYraKgjg3o5j",
  "key8": "Y4TK7tjZhXEiFPqFYQMCLjiNG9YqNSmH8S54k7LgfEUSSruBCLhCrXuyWrGU7kFwL7wLDhXR4jJHiYcMvQkHh8j",
  "key9": "5mneSvrTi3CcppQbQ5sDSE3Ss8r29kCwAuYr7dPAFKeCwfzJTbTEPQT3u1uDFjMuADpG8FgEJ8QG8cc5XsvYhpWB",
  "key10": "TQBvjcfwLLxa5wtQmLqr7bwRVx4BypdCgQrAhcR51C6ooJn6H8R6vgSDTe6iqwcnvFHGHbCRZGXAxRHKGeERneo",
  "key11": "5F3YuduUHLeyNeKGNCEXXekNRhgJymn7zYRQzxfP2cW58xuwFQBCmJR99SESUGYmi8ksjA9thbJYuNuB6koFaK5M",
  "key12": "5xKsBreANUADVs8Sjmea9yua1C6bsY4xVknGkdYur25T7DZUBoF7p9wugKh7Br67AHS6xhZ4r3ZxzzzGcDMVpRzi",
  "key13": "3hJwDWv7vxyvVHKbrZEg3PW9dkiK6i4N9BtFWbPZwYGnWrqr3M1yt8pCUBF7F2YvA2L3pAKND5UV44fULV6FYZjD",
  "key14": "4pXt4ooKrAbwj8AGqthSvpDHnHtdQAmNPupwQWNN1SFnQhKP54Hdg6a9ii52hHin42trFc1xEZwtgKneZyfMSxdp",
  "key15": "2z2e8W52VyGCbL5S45zg2ZW3JiqD71xBLumQzDf6rciHcJAnGVrVNSMMcGoY6LQLFAdryaL8mYegiovcZ3mL6rQF",
  "key16": "4UqZBGpbB1Bn5Y7MHJX3RM6Y11vikmPEa7v562bhED2wzFgwW1jghU6i2iXNKVgNjRPCHWS3fWSsP1dwWtEMjvuW",
  "key17": "59nEFVDkJSpNy9ud4sv9UTDf2UPkyQsLvBRLmQirSYi3YXeZEMGXmwDB9bqUYUcYCgnyyBkYApcFZJWipACNpUXi",
  "key18": "5odeNPT58VZkkKMz6R9NMMi1NjgEw9awPGESXL6bF3uo5L7rwXhShG42swMfNvjDc8rx4jgfoUuzgMz8r5wdyfXL",
  "key19": "5sAwcmgcLTtj2u1LzWZPQ1bgrjfD5JhhnwGAB7oxM8KeNmBzwXAZK89qNqgobB37fqyJN3Vhxa3wPCyEx1hrpbuF",
  "key20": "DaPLTJj46WPryZibGNpAGxA1KNUPzpgRbcr332zD2Zw6aEAFp3LF4D83ENsSVcbQ1VUs4MC1Pbdby3ifDzpii9D",
  "key21": "2zF8G3WXy3RWbQGrUpfNS7qbEB4HPJ9BY1fbg99yLPq6AJGgNXVrokbScM48zmJWqEMzLmUYXYs8ojqTcZqLJnMF",
  "key22": "3p86fNbq6MQHtfH4oRw3ySppoRZoS9dzgP2gG2dHRX65nktxCmzQVgYWj9WnqP7Cfsno7cFJ3uYgqZqK69rSRKW7",
  "key23": "4vdYsXtRPg9gFNF11Lm9Q3LHo7FLswoabvy5XrRyyq27f4N7s5YyyjAXyZwGkCakYT3UaaayCCJv7QFS5fws8o1d",
  "key24": "5yda7ciBRd7WtsmZADmyd3kDdWYQKEmbX7fUGz8MbWPESsiUVDE6F88dynC9L9EbZsesQitBBPgYzeXgD8LD7MUc",
  "key25": "5StJQSZsv1KRTNifUUEBojah1u9XNZPxhktJVKWRVowMAbgss6UPv1fGj6ZcCBgrx6QEcJEg4kVWFsfP5FYw6X5p",
  "key26": "3wFvbcVfGWiDiXqi4yfscbmeYWsZFoe7n8D5rSaVeHjLK4We3YEr1Y7BUf4MyxG54i5EHNcHN8SYjh65nSMbwAcu",
  "key27": "4kik96jw9fHYXm3jy4L6F8x2ddcJCis4RYPmziuLrkArHar7XCKsoSPC5ePhMEGj7AQpAxE1eygRY2yYfbdSfVfe",
  "key28": "37EFSRYmJi3exPcsuQuhTMWCfARhgsm3WQnniDTRwQp2f6NYQ9ceYNzNVnhvH1vdfurxeSwEwtMfhmmCxum2FwC",
  "key29": "63GuVtAecCjhYRep2h2os3H9YpDcxQfddJ4f1hFaMGKPSihpLydVhfMcaH5q9nFV3UYS3ooF7ybTkhr8DWtcYyir",
  "key30": "4Kjxx3ehW76iEVSX7hgt3YQ9CZZsy89GtmZNw1ELCmgNgGa5xx7bBYzkRLYLSvCCAX4xafsaiuHAo93v9AU3aAnT"
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
