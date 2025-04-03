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
    "2CxzhStFHmhpXSSacVZyZZaMyo4Q5tLQjTVEmo1HxX46FZXtnRurqR8N7YYYrFocAzvuwY62R1AnYmt7kdKeqvGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HuUmycDkZuPDgBbNB6CQdcycP91zGWnXEDGW6VrfMf2GKaJSjPbVsm59NsM5SDbjuAoe1cNyJiF7hZi5o8THHvs",
  "key1": "5oRCqYUUb2sGaEXdXrS87yHDxdgB5ZcSoUbNocsiLLCUiVuBAwp3FHu2prnB1oN5JW18KxHoEwQ2YLTJpK8dqBXp",
  "key2": "2j3276C44es46ABVk5sfK8xUpvzByesnhYBfdzsVJFPTqNEaikam52RzY5AvoUeMzjdN44yek17pKsk4kr7uxJc",
  "key3": "4JSVAyTCZVKGAfQuUyVAHmVqJZYLWE2UvC8QY1Zhffb7XGae3o8UXrpsghTpo6ikLxtzC32HZ7JmXwsZ1taTRWGp",
  "key4": "5zR2Lp5ZmLJDc8uDZyKzWwv35yvhUNwkUA1X1k2WwPQp43ErR3cG8dvqGuDJqfFywoMEB6V7RZmoqsybzKU95arS",
  "key5": "2ftzou4eYpTmm6Rk9t5srEYgKgVv87hyzAqBBSUTnKZZfQJm3um2mjyWEvLELhVoitJVWx7ZAK8NvpMM2DZRbLas",
  "key6": "4tLXVYWmN6BWyGrq3a9WMhvNNx5DVdXmJDYjgErEQZ4RZqSESu7V4uZPE8rKg18FzywKdoWhJrxSBRbpTPAYrRj7",
  "key7": "5G1aELAaxt2W5BgyVnV17aRLv9nCZEEhirySrfZPnc4aGNdwea9UcJoNQGedaiGEjLbv6SDaD2PDLHL166u8nday",
  "key8": "J31DS5JNh8fL3wqp9RMbc5qiA4Pw2QLdLryjB9i1vQ5GL3achbiG5AGmuDiq5qP2kWa5NThL8xYZTrWzzyd1vvG",
  "key9": "53TvJYhS29kEF5YtGFTcsJZ2JYy7MUY6C444ASEVSurAZZ26rA97AiA8Vcsb5gUiBrssrAuMGrJkkbrJFTc7cLH9",
  "key10": "3AeJEBuJYCAWFau4KDGGSTgjHHxDuT1EdLuaaHMVLidzibrCujMXtnz17c6fA4UQBvxzTKDcFuv1vKvNS9SaUVAS",
  "key11": "igX1hmpy5kALzDRWksDFCtQoKCWxr37YuESMe8dKfHnNETperDqpxNBYhYYE1Y28Mqj1k3qZv8jYRzW3wH7812U",
  "key12": "4zCwHVpnfJMfkGFk2XzH7Gw2Nb2hdf9goTrcg6gzHj7gh8ojdy1LXGmtAMWnujrb7NWwPPZjR3pbezbstr5FPXKn",
  "key13": "2EaBN9Mr3cB4Q4pjQofteuqVDP5wJmhjBRGaLJNRb3xxrY94V6TUEKpANcN6dCCdZgMDpvZkRwTzqX3wXhCMGhqE",
  "key14": "5RHbe2tQqcLi3j2wRGzF2RduveDU4h4xqaFrK2hmZe6zHJZyEfsdaxdbWXHn7osunjBe8ZcgE8qr738dUJn8F17s",
  "key15": "76KNFzp479zm1huap2y8oVUfEfsCjfqTAuns9ZTn51dGQffgXxtFbgWZEu746Mbw9CoBRpBoTmPMv9ovGWJfRXp",
  "key16": "dwwbRWsSVDre9k4S2GTQ1WiqkT5y1QNQGbqLc81C4hhejSWT25uaYDhDNFuJgCACE7UdCsNyszJTXPkigtXWaKD",
  "key17": "4xRo6hcy4HLbkWBsq4jhmvqZbc4i9jL8hYWssds2GhnhNzV4mdHVkar7of4cUtYvj3PDbfoq5HzbCYK6fHTkmqh2",
  "key18": "2RXSDzpaCpN1rHDsHjNxWe4VuCV5MtRJE7zykjKk4cuqzbiAWeVSdDzrVZmNZhZdCj5NsXMWCkNMwbE7n7pdNJNQ",
  "key19": "3kiSL1p5Htcoc2ddbyQmNakiY9Pbcx1CXp6TYt7qX4TpGg76mFew141qBjDpopA8tUabgGATZB4MmaLMpQLA3Lig",
  "key20": "3N1tGAWeLYX9hNviRo3m1GPtBnu3edkC8WqThCQfNxAgfYeJNUQAaDREa9EbfgGa69FFrJ25uBWRPjFaSPttciNW",
  "key21": "28ZQ3pXwfshe7UV6YTXaoh77FQA48j39JPh5oDXDAA3RTE1MCkBVLQKdrzP8DNVZujbjUieJvRESEY3RDwHErXCp",
  "key22": "26Rd5FxYaoJeympkdZCbWCjrLBi9pQJv1wTT9cbFUtpZKdHrh4HxB6i9x7MYG5xzZKxNRcJScpcehfR2qNZv37a6",
  "key23": "GnYDJpcKbMyn1SGkQBZU46kMFeV4omVthE2c5cqkqeSeb19YyQrogQKm5pR77kRj7VB4FyDRr2k1NZsJ8bJp8zx",
  "key24": "PvBGoVNwzQGSsXHFMuw9PygQDrFVyCsdguxqvYKXBkUbrLdWH4qUuV5jvcF8euDvfufJG78V3Wkbf4NoxPsKB1x",
  "key25": "4rhNyrKJ9hh1XeNyFCETj1d4d2iddM4gB2riPQBBxZhBwJyXX4tJZsZM4UjdmTxpn4UstnKPJH8CG5d4CitEenQ2",
  "key26": "3iPNfnsg67jX7rVJydAxLzUrCCCugtcXveWLt9RVgL3Zm3w38fd1o34WazSDTG2frCVuYe2RtqxsFDCMzytjZddE",
  "key27": "4RS9MLecF9PqGarNKShowaBanEXNsMUB2qjo8PKsnQLW2zz6LkTNLUpY6W97JbfUhenFGwuMPoAvcAuWR5AaFCvK",
  "key28": "2jU2g3ZRwXnaU1guiTKVHCTrQFpyenDb2BFMsrySg8ZZw74u7BucMJSSXpjkLMDdupsDHZA2pkSGs6D8DTDpJAUr",
  "key29": "3kLT7xsZ8GbJ3t99gKy9g4QPus7GzjZWDSGt4Ugu7echs9HqPx6NhQN6PFzhDGam6Lb2gutZGEFdPFtyBQXMSzDf",
  "key30": "QUKvqVmJTw1Hg9qKZY4Exr9KuLynxbkViyrRK9vqj2CGyCQBrhjn5qw7WTAKtuVMwU8CwHFcjNVuidrLeaUz9T2",
  "key31": "47ozxGoLL9Lh1z2MmyqpZwqCgeQEZBCS1VgLiyBoyV7vHiQ98UH9z6sLU2BpiPeXeLt3ej8Ebf4ZboGU9QpHbCqq",
  "key32": "2yEHhGVywS8n97g7dGB3SNefH8d2KHDkcnUa1NozLzMWDxToUFq6X9mrkQZU1WJTQF6SMJ7XLp1GjRdHkk1xKnwM",
  "key33": "4z1iV8HkWLxPRVjJ3cLgniMVzdW1GzEkZaengrR5WgVEDNMtx35LJbpa9vcLWBnpqdSCC5SRCTuVAL3ZTsFDKToR",
  "key34": "5mEqgQwPxMQqL2ekCFX5VAeWaFVB2HPE2ms5wcWK8wDGnf7mDSCAc9XhHSoxUAebN6qC1n7iC76BFxsJybtKNFsB",
  "key35": "4KPhFHfXkEWr5g6DG4NrJU8xTdgKoupLcN4uh8LoB3u68xhC4bzBEvhWUkT5whzs1vWHbe8EFB8sJkuYrDCv5B9",
  "key36": "2Da1V6h8xAeSPK53VRSEkKNZMdqvYTJfxUMAdd8mKRKjtpjPgfATA2pZ721jk9zqrFjDFXLvMjDacBvzJQSJZPse",
  "key37": "4jZs9HhGXkoWXWe8LsngneeJ5irCDpA8jyg8AU8pQdXR7YbagPBph1w5c2RhcaFfg7jc7diz6nALUw8iZ8AtdawV",
  "key38": "5QJRVC993sY4hFe6SSaZGnybrVu7VbPNKb5JohBXyKEqPqsYrCs49qSTFrqRb6djwUgyPtuqrRFmSnN7NWbGRTNU"
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
