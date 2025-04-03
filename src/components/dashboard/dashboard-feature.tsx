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
    "3qVVoBMPKT14S72CY3DcWNFNHpvLFAhGSGsGnT97kQhHwNXVpU6ZvDzTcUwABSVDR3kGC1xtVwTt4SBUbbpQ4SCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCW3Ahui5iHUHEJP8feQCpQD6cdqLbc4HWxHWXChwnEmzpBSXm1GigE1cR4wTscEWV6yHMgi5Qbo6a1Z1AMvjJY",
  "key1": "4amKf2iuF34UhUTQivisdJzNs9KWqaB5Ue1jQadAYBsutgapzKL4wJEzMtyTqKV653uVVwX5TVjvFYLZboAbB93d",
  "key2": "5kG26JfhN1JvwNb7g66MA1FAZDJUhnqavJ9dyAdPMzJ6ocxePGGqphTuuhppvbRqpHJibSKxAmEBvDTwreAXfx2M",
  "key3": "5avc5QSnpXXD15jMWdL43LZoZ4cuYirjNKp6sW7ach6urAgPAVomrDRVB2p1A2J3m7rmd9wSmEXnJJjqmm2HDe3Y",
  "key4": "5jzCg2CKq9NwYeVUqraAsLrh8nVu1mZBKe3mtbfz64VUx61ottjzrUPgy8tozuTn6DeyAZdkhWgYfeT4T87AebgM",
  "key5": "aowQxNyVy3SACdTvKwWRcYnLSVJDRRo5KiWfXUqS4RyyYyBseS6T1X7WmJ3NAxxnV9gqXkGWQrCFv4cYxiyXt1k",
  "key6": "vtnaFbKnLLoK5MG8Q76Mb7PqVrvJ3YMdjab5K9rayLzojztYUdLhAK7XcBF3aLA3vBn95qtsVPmdHzRiWEUkMKJ",
  "key7": "5gA5YyPW4yKuazSepGEPXwR187qVcAhPXXBwKYfNBxtLshfu33sMrc3auJAHbvYMchqNakTABbzs3wnUafN9oZNX",
  "key8": "sCvB9sEUBxyt9YCgDWe8gsA2MAn2rB8Dj5NdxEts2AzTHK6yGZDnVRsnF1jiPqdQdBAfjiiS2iWCNgrTDW3Rk7p",
  "key9": "36KexWWZgWjw4WAYS9ufpSZ3J46aFwLyjLQvVbJBwKcgXi4Pty89ztY8CmARqBC9dbTeMWyS6VpBvKp5ePUChJQC",
  "key10": "4asJLEJpQjAs5QpqBPAST6DZhGrRPUT6isge6ebAc82ghBqAqwEXQ6syKa2PFUvnXuHE2tVcTN798EUhJpBpY9ex",
  "key11": "447YzhSudkDJL5zpCVcphsqb43aHPYnLRh74sSvptTEdw5XtTeoNrrwSPNgYNfWboaskAkG6DCePMXbWmEtBKkhU",
  "key12": "2KRJNW4oie2z8kqC1sBb4cQhPJaM6T431iiHWJ5oNkLdpFncXCWeEPsrM1BioNMk7EPjuYdcF2Lw9JvvQNyAsY9q",
  "key13": "55zzhPWT1we7atD7MauL3PdAMgwWUbJCfBLxAJWtCNkZtHZH3BicQ5Dcmp7aERgNhmMhG39GHVfmJeZUfkTywLe",
  "key14": "2GDuTQyuJjTXpyeTHAaNDbYfmmUiwVCwHmh56M9aDCt6CdwuwyjsD6539wVq1xA1yN2eZ9FxWqD6C1WWjyaFzG4Y",
  "key15": "bYH2SQr9i5xG2ppxsQC69x3NUjYqJaicoTaw4QD7Pkz6Hn7FHAXM4FZN8RCdL9AyTkVQVot68iub8C8iFfLVkEY",
  "key16": "2WdgKhEAudw6A44YQJt6yvEDc1tg75kA95FbTgVJvBarKT33Nz3YdQPjvJSoWm9HnFKyghr6xZJr6skeKdZm518X",
  "key17": "65hQHYZGJpcuQCk5mBKicC7G8xMHipvLmCgKaecmU5DeEMkKByDSkgKQ2rEA4scvtyjcerqLnwnDySnqVKLZCQtD",
  "key18": "HmEJsp4qoRrmrYTD5Em3sv6AXUfefaTq9AwgRTHLSuZAbLagbhfq9Y3JMRwetR6u9Vj2evB4nFaswkTVmwMhW3p",
  "key19": "51wxvDzngcNLZEGPB5aptLhb3wCMvQAMsH1FtvQmCLRN5pi6yHXybDMuSpnt959et12yXhA4fP5radG8oejRVXBR",
  "key20": "3dvK34u3KUyM6LyGCb45b6a3gijNeb2q15bubXwkktBhjs8hFNDidaBch7geM5yqqyz6x6mDiqiAi3TcRLMCcgYq",
  "key21": "5Zwz7umrrq5LhtqsaK3jQokm2QqVUKgtoBrVRtd8gS1ukv5pssNgeTyd49CxHiTGV8m6vYerC37eHXnww7pobAoR",
  "key22": "PFrLpGsDrmafZgcKH2AVWRGWWbxLRG8G6Hgbry4diBAig6QM7psk8C2ix4UW2gPSZnbNGUVuHPQ1yib3yiFcKHM",
  "key23": "2hKvDZcv4mAnvEbYCgandwGVfcXLosdScwG7XNUupfDY3BKwXooCzZTsKvqP46PdpTSY1nrxf5iXYjuY5SPe5bcq",
  "key24": "5cZ3XLHMYkEsDeNrRZeSfPyr3apv4C2R9wbZ4ktzS2eZSeDyiwNBHgjodrje9QVjpMkoUyEk6nJvGgQTZzLhKxQc",
  "key25": "2vdTuokYQonkxsULkdfzck1vp7skAJDWCKniZF5F8ossUuXF6bggb9T39Rf2KsBGT3f5vnJdYBE8Fhds6spFeju6",
  "key26": "47zY9xLBJHbRWSivHBLrvm5YYJ2K3KJKmzQgHHcvYNtuAFF6rDcCBVYqF6oDXMvp6U512AvdNepaQrWL3HLm5qWi",
  "key27": "2FRBDYmRm1hU1bJEKt3gbxNV2HqvfvX55fPzNdXjo51Eg7xomYexSThaqD6Xfs6eG5r4d3SGyt1EEESSkVSBMUgT",
  "key28": "3bKBVpDfUwnGp2Eq5hU2LgTNjWnWcs3iNpu2pTSTm82XF21RD8WQojaqofaEFJAJ8nuHbQRGucRHF8n1XgEqNDmU",
  "key29": "3tQ3Qka1A7hPjDVM8w1nMUQBzH8s5Qy2zko9Seqqg3mX4GDnC5sXNUtAcc2fS2RPpejvR8PTgGmnJjE2f7FXf5hL",
  "key30": "3riU7ZkryQ1zfQ7HGbzSujNpFvBaKyJVjBxJ9H2Ryci1nZRvQWnEcHRwuJ7hn3a9BDUBAHMB6HCt9wTXgur2XyxF",
  "key31": "2jsfp92tcbM9ZsKsE7oDypy2k9HXX2nHvnG3F9xjWtY4u2MpVyK6b3uzxEXHyVzGTvaH5mYo9HmBhhaVgTrXFhmD",
  "key32": "3tBUdAxx1V4XKx9m2nL9GFEVyb17S6tpVxGikJ1QDL3WgPxcnZMuk7915XQPj4vZTUsM9vsozrAdurq5UYeEaZgd",
  "key33": "5vDcGcyVb75cRh4sEJs4sSXQvQAe3wy6gnJcx1JLmXVRw9vCDVQB8EapQLhRLSwKrAWRL2agUKqu8st4v4ABHW2a",
  "key34": "65zsPHZWbWCZiAzRZhzHK9HVJrQpfS2wFaimMiY7dxrAbVfrH76n7JjcSED5v1hW6C6bUJxULH2zA4CqzmM9x539"
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
