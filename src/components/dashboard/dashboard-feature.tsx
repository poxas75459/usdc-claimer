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
    "3MLZx6uhbX4Uns4JuAAEbT3V9sbb6SEf3wNZH26qTSjRfDhhGegr9M8Umz9TuZ7Du7qVwWLsv1U3LJopEj8usyb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnY5aDDwLjr4kWrX4yCALC855L2qGMF2RGj4MRHvE4PyrFgwumC5qt8DG3Rzy8oxctYiHqfhNmDmjBmEXjSseLz",
  "key1": "5f5hZNQY8cnpqV2CnNerXajqUqtxuhVRn6KrkyDPwxAAdFNXCJaAzKKNshVgWeDMmp6xp3nEUbP3dCR8rfuqbxML",
  "key2": "5JMEhPgz7d7Tqep6rUGxy5GoaSz5SkgMLao1z4AtK8Mcn8jyHYuApupv7pLqyvkqgpUPCTup7dhyzxTRq93Dsza3",
  "key3": "3mN29UoTtJxSWANLPxjPDL9tuCTRyBCi6LHmxtmUTapbf5WrUXFUrLadzURzBWmheivrX6hWUXJTSPUYXx4bfqTw",
  "key4": "3TVuiNZxfWfQuDuR3cavvPV2SbDkhoWEhhRWfvkXpMwbzGdXJkj9j9nd1CTVKdC9nsfDH2AK6txmjhVj4rw81uWB",
  "key5": "XM4mbFKQhSKgXk18ynhtQ8BfUNEni5SUAGbZSWkrXozUE39i2FN9HxS9NtmsqCHtDbXxCGZVyxzsY1qJcxnNNrZ",
  "key6": "2aXot48CLTAzHG25idMwih7S2kK68hTKfC4F4XQeG2JRCy2fCWiozNgK1XS9GSn1JVG1DQCoBnXBCu177Mfp3MTn",
  "key7": "2Y39yz53mj5Uq1LJxEuWkMMFxe87WwaQJLsP8wj7LX43sDGYBCWbGZEpuQS7aa9fLcDY2L4mm2bmY5uy5z7w9MSp",
  "key8": "4GiK1pCPzqbBUEyGrNJNJxr2U2ocWRzSbEK2TNR1VWj6XCsZjp6UPKxDkNd3phjPQSLoL99L38NCbtkanUVn83Jp",
  "key9": "5mMMtJgEKa3wb9MmVpyLNeSzEckhEv9399dXhPuDm2R7RHZwgumi89TLrsq9hFZ93XeJNi6gYrPKYyARnoghsYyP",
  "key10": "3R7hk2bJRDhCHzd9zBEzHFGJqHcncruwiK4xpCMJriYQ5mGEzQD39FpjuBPMQDqZLv6ymTZww3ZtcMJvJaLFdvUQ",
  "key11": "2fVWXWrke6hRqnKqjzUt1v8hh1aRC1ipNUprmueoT3Jc6YEcFdTz2FVMe3i433iRtRnswg7XRWbkAptHDMpdFPQX",
  "key12": "caxCpb56WbFY8iQK5YEkZ5w6vR9BTxWcDLEup6bq5GaJ4crmXcMEa3qogyxvXnXohPHLE4bGjJswBijSy1FnJTH",
  "key13": "4Km7SifmF7xD9JMJGVPpWaaHKGUjg2Sb26LdvheHSJVEdYdE6UMorQJrYSr3hLyC1GTqhncEd5TdYpakwS51A7SC",
  "key14": "3d3ahTBWs22JssXaYigbuyFoQPEb6JW4ooachnHmqgMhyN5TtJ1TbeuXdP4ZzCe52YgN9GA8KoaHW1nEn2uhyEPF",
  "key15": "nuLZggwFojVG9kEcizvnwxaK9dS9G7NvvJ4vvLbgm9c8MYCDrQr9f4uS9U6DUWsYe5UFgBLPSmpEUtFfqPpNXsw",
  "key16": "2Do9Zv5gsSHnabYodyW5JLe96WXJo9afy4dh7d2dpJsf4vxUReZBxfMEidSZwwBvTRVQUQAb2PfnmSqQ4FLKV3fe",
  "key17": "5Lw5YwYNZbHHGNaYLrefrmWe7hpK7LoDgKA6wRAghmzwjKrw5rCfpS9kLPfT9FYxwjsVpTq9DfweL78UsPAXUKf7",
  "key18": "3g8WRHtTRfFfVcXsCe8RvUnHZUfF5i1JqFjBXPPDNka43n5cUnZ639a5ViYmqJk6a7CtZiesP81dj1XQ3tj5B9EE",
  "key19": "3WomBhmSGcoe9gSDvtN6WegexYU6rLv7UekHL8DCi1ddnUdwB5YstWFuAytPt6k9kGEjiPB9kZeCnVCmLeUaKCtT",
  "key20": "AjVGs8hvcyYpuVPJfpZ3yDF1cM2dT1UTWR7v6E4AVytYgFtThx9qTsUAjLoNCyfb2XBSbe44rCbxUzF6n6nVgN8",
  "key21": "3u11RwkgPa9v5n5dSFobbySAuvyHuhEp2Y6ZWcJL8aY1J4PfawJ3SJ7PtWSKcN5s5rSNaTBHVAdib4vCkrVmceFc",
  "key22": "3UqCnTUYWdD1tVF5b8RU1VjfVMrRVeRJuASDihzKirFnJaECr72poG99L48LmqLNjhkoPPpp6rLtgqNGMdiSYFqN",
  "key23": "57ysqYeGQQtL5nCoQofesY8tvUf8Bkr8VHG3gyaqXYG7KW9ncNcrB7GRpd7TYTyseccZb6SVAmPJCJ5N3TSv7VZr",
  "key24": "3GiR1kZAfNReeqkogzGiQnLp5nHYpbmi6Z6hZgsjvVS3cSh65SEb8HWHS2ie2gqmWrvD8hFxhJmE2zZ1DPDM4qBX"
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
