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
    "5LCq64e5HAR1ieR7w87rmEzyfh2CCU9Y9mcb72bree1WzEwyUvxU2deYajwcC2ogigmYUZn9ZiGyeQYJo5d5x5Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497yDAaz9wdnKZFNChZQ1LtV8qV2L2HgaaKUGAKzdibgkx5bTCZXq8EREUEH4Ecmyw4S7WaRMkQFfN6MpYV7qncv",
  "key1": "LSPJtBC3Q1YQPnAXLnukcCcDNjEBuY5wuUy3rS8jPxcABK7fu9AbwuzyJ2Q6Jz9XNohQCe2TE2pkrut5txDiuxS",
  "key2": "qiqezTtWQSe4VAG8RzTass7wcCTDwKs9MJidKXhmoddLfbzzZtgupgw8wwWZ8oQBUwCRd6JijqaB4EQzPjvLut4",
  "key3": "39nERr4XuP2kk4xodU5urEF8EkvnSnEr5UW4WGAhcThuzRQ2h1e1dvJCaZJP2v2ptxP1tFCYL5enAqVMBaVUhnzq",
  "key4": "5ACbq7jGknNDwDWg6XqMkfTTTMmubLfAEZrFdyWypCrjY18dJY2jp237abovACsYgERBgrFwpBF8wTFGA5Vugr4H",
  "key5": "5ow8qn9xqhMY1NcLj38E5S4bY4sudmiJBnAHkWQm2zVJHi4Ri7VK5tPszTYsDqU3nLUdz9e7m1U9ffYAevYGVxuX",
  "key6": "34hYVVS7cR4Sdq7ddCajEwB9LLuw7qkgbXdYFb1MzDasAjDEbUfEtHrNhbahNeyRGUgaDdN8hKJRGPWnHx4JpqZP",
  "key7": "3APWQ225bdUYmmNabLBU8Sb4tfGiXKjvv64KTcP1hvSy9VWrj8ZMwRrustQ5PgHd7veDud3LDtCZ3Ea9zGFs2hwj",
  "key8": "4HBwDwX6PJWebdjQe8xPjqpqGW2BvZCm4vDA7YTNWE3jSDd4hBLPgLTRLUNf8AnGxvAiscbCJDJFzKvwyJ5pQaNZ",
  "key9": "47mXJGqAmWoYG96U4vWkJZWV1hgvGyALM8DwAwdZZsJpcjJi4jbw4AJWT7qGxaa8eQfptsPUwqp9EgTes7fdjSCg",
  "key10": "4D1tr8gD4QYLsx86oZTJetAL2RSP1QkPjwndm2SdKwHheY7dZpsN7xuHxxSLUzcCy62SjCnAR38mbthSaRYUqzc6",
  "key11": "33ZxmJKvBxc4WX4FzDb9Aukjzed5KciRJHvsyfezu45NjYDDGXxJNw75iSEWNpa8kWuLYHXHHiv8NjrHjyX3Wqo7",
  "key12": "4xzoM1kVXZsBUxV6Z4BuCDHUhBjngK8m3sFLCbAcxwHgsppSy2osa1h637CGNTvop5eToFXx4xCVxEXGPsMk9Rsw",
  "key13": "2JyM7eqXbjZXoUzFpqxVzHHc8XLQv2WykEPraQSVYhvJRe6DjdH7gDKN2tjXG1VBLj8mwVKRSo8ikF29CifUcrjh",
  "key14": "o3fzT75sHJWqq1jzd6m8Yt2WAgTWRpmLCUdwb95D2KBrrKm9s7SHbf9kWoyySYRpGnjLfmKNJiVSmCvfsR7nTYT",
  "key15": "5MUHXyrywqCh7RK7WUP4q8AF5eZxLc8WYRwgxRs1qbhVTWV2UFVdcMXgYbqWAtmxMYwC47k158w1NZU5qeMzG61N",
  "key16": "2dMvzmdtgy9VWSznBD3MrkSRyZJ1vemgpkedEmhgdo4zn6echbHupEBRYwG9Cmy4objGW3NZg7zadcnyCBqND3nC",
  "key17": "kM8q6viCdj8wXvHBKCgFYywHR7gcrtaFmYcDPiJ1ndZfU2T3gd4gEt7gyvhRQWBQY4WNuzecU5tUL8KYvkN3LS2",
  "key18": "39zodr9seVnuKW3fxZsSkvQB2nKjJDZ1ccdugjqPh6QxJ4Th9e8n2nRf6RkTa1HquaidkdjesoJizDcQyNEbi1cW",
  "key19": "5ExA4V83vgZBcNJZSFPwWDhw9PEBLc7soBDXPmbSQepyzZPGmNx1aaneNVmZYk9ex4ixG4LiZXRDxRr4osi6H8V5",
  "key20": "2jgkX26X5JP6mXu7imQbsPHUUXMKnuXmK986c9PXaTsWGVDQc5m8Aon2K9G1pq6Ytx6G4nbrUDdmavYqyDwc618J",
  "key21": "u3UVWGkFcrcsJKpoRQGmDGK2tDBrjTMYy4FstHoR7dqkxP3n5ZJ9bp9QThpUq7EkbfCNg81LhpS2toYiZHsjbqt",
  "key22": "2RJsVdzGjVEcudUBMbQwrBdDAMBkYmYr11FNCMfkqfXCno8FJ6YKRrUt844ETZmFuwwoGXaVEC7nPh9WnRFvHBgf",
  "key23": "rD5gFJEsMoNBPcVg2fBYNPVVq55kS1mQRiQPVZqWDhApAVDQY8ZpTUPVLb66cY9bLr7cJdy2PJYhmYjzqPBvyiD",
  "key24": "468jZWxuq9jqZFqc44bfWt5HmeNMQjN6cF9kwEucPEPwmX2jkpN31DwUqmnJVCkb8ZUov5uvTP7r8YBMwCyF8MM9",
  "key25": "2wAnHbKEXsWNrC561nPmdjCNEGo1Qh3ZZ9XzzjWdWmcmPNjwUraiv7wAF3PTHbSirfS6ajfncoGfXYd966QHZnA3",
  "key26": "3TfQ4JQBbXHhG4WvakXfK7okhQE1hZvKeEmAL4xtVc93NHE5ij6hJ4KLHJQpU1MyAqo1MVmkkcS2YxeKdoWCxvcb",
  "key27": "2Vj1uoiNGgM9fuJCxxVcRq3ayfHQj9N1Fjrwr4tRLqA2VZa2vB27QWrKPfS67vtWBXCkbkV49HQ2diJ1ccNvJXWV",
  "key28": "3Sd6RD6RWPcx1EoNCTkr7dzNZhVHYMLWSr4QyNNKhAU9p4aFYEKCuhu9bampp5Tk7fosMStSAE9cDgvDEZEgoLSr",
  "key29": "5V7wzU1c53ww4qQTkJBpUVnLEnE5yDJRPSuroEQXjSrTiHuTjX6f7osAFc6EYZA1LDyjYQfUTSKHAGeUeKqBc1rt",
  "key30": "3dS3ssEQMQAUCdS55zmWdzsPaysZA7qhctsTDXqWQ27g4iqy3b5pgRKPSkGaYYwtnfba6N9REBYLzpsMHQgdTSXT",
  "key31": "5y6FCWugGhqvPyceBkhQKH6d3BCJ3Vpp1NwW8N8ZgaabfNwjRxtkGXEikfVAT6F5fEiSeYEjpDEbWmpYRnMTUnPU",
  "key32": "57TJ14srWeJonqjwikFFmGJdB1vN7AfGE6o7K5cEitVEMkADa4Z3kLryt26a34W77SpjEpKCucR2x5W47xZEHtPf",
  "key33": "3wzgyejrZYTiNER9HaPDwnDavu9i4u7DtNCvqRvepZoWc7uWg89KF5WCETrgdBwkutuUBkHq2iQGR8Sn59L6mQcX",
  "key34": "gLG9b17zNCrEqC5v9MFiGJX78KqcSRwZC2Yf6YoNXEry2QdcSxvRCEyCQDVgH3kFvKSmuswk9JAUoPk8RxvedtT",
  "key35": "5yND9uQz8gzCqNrd5sna2h7d6xANuXeiiWKjuzR1zvR6dJ8ggDcyB9efu5YVJjaXsKZfXWYxCPiUGEiUTAQfgCYw",
  "key36": "4xb9SVfMXjk9RJJSbdU8Xjv2h23qKcCgcVTBPkJhCSHGxVxBbQBAcntMbXreahvNbt8w6v7dqhBtR7fwpN6zpoRd",
  "key37": "45NDsgJeQ36H1LXytiB3ppa6u4K9YKgGhPmxuEdrBMCVLDongsmeyRFZwZ2xfYV6Dfm46C9WQYt7EujVhNe8hWzd",
  "key38": "yWtMdF3wUxB819U8NcjXZrwTg74ZZivXC37Fj7wGjEJLYfETA6AEWeSQxaU31ffXgCE2yaKfVnKMrr6446jYA23",
  "key39": "4iZZfkBkc9tE1s6DQnbEV14bn8dYiRZ2UtdP8f27cYpsfUG1F6YSeE9pERnDJDuXNE2nWd8GDCfPLhAU6oKiEQDZ",
  "key40": "EgyeDnBBZyGKkRevSzMPxJ1vFm2WR4X9A7CdvSWYyoC5dUGbzfYXJVx3FYxmiTZx2mz2xebt8ZojBrEoL31fRsM",
  "key41": "3FgszjNKpD9E4aiiahgNUPPXW3EzgrTfA2g3GRrSjFuzaAX3PuBRXCeQVaeDbQiD5d1EQmSUjyiZEWJ2rt8Bix2x",
  "key42": "2BpdqLCtY4XwEA1zqXGMKRRufnJqu1QqVfawZEvTxS1Ep4mBjJQxQbwSWbUZCJiDhjsqubMh9ub67yhgTQ9jx4PQ",
  "key43": "5fqtzB2X9ceUCNr4wTHC6P6cUHz9yvBuQrjD82S529jWnL1zhSKYRGFjedaPDAmGDKRjfFhH5Ds8b8fzWVQaxZjH",
  "key44": "66pHJh84vL2mskvrEAFQyQqe45UFj16Dq5PmFF8ndeb9f4FcDXiuqJMoRNCKHmA1ReyHCvGaBGRysgh7eJDGSkJs",
  "key45": "5jKCBqpWci7AXxyjzjo9MZ4HUcQBCHEh2ysmC1WpN3AvgHnQ3hR4AABoRsci6B381EL8cGZd9ka378cWh5Cvvbpg"
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
