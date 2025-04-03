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
    "2sdTZuiDy7DRaFZHox7U5KJYoRRxBbZzSNNqszqp4YTQtpmV147cynvudRAvpoRVVeLbpLGZN384Q4j3BaSYcxJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1H2j2MRcf9kSoLwKmX3SS11tC4rs9GZNcFPXnKUkiKy3VK34yJxF1uaMJkrR1kCuFtYPVdNdyEFbAXX34qyybc",
  "key1": "uWg3xYBs8RXRjJM6PAzj4GAeLMGbGwm874MYktp7tcmW6rEExtardcYU1HPmxD1SzqqtiQKXFUgxqWHDBZKjur4",
  "key2": "2SSRY4Q844cwBxR9NQDpn8rcouxwzK2evqPar3177G3NrM61sZ9rV4gdyrAjGYJ6qaSaCfGvkGPj8J21bXKRqyNq",
  "key3": "qJbryc9AfQWpxZsVvo5RNUtQab65HB8Byw9yMc323F9zZ7ciyHLscpAo8SnbEvmfDXUasbMHa5SesE31KEXnxLR",
  "key4": "42jL8tBXssJvq8NUQxFbdsnnyf2YAZNGYTEgcQrYrEooZYKj7JR6euDXG1wRFQee3F7igpT6STKJNda4knPvRpTw",
  "key5": "2ZYe4ReMZK6r4XGsEk22qZ7PHy1UBTeA2nw3nJn1TmNZotcun3RQyaviTJT6MmWnqKwJtJnYppWv4RW7cEb4EYBn",
  "key6": "C4owN1nGF4U7DJSnBGXJ9MHu9qTgvTMai7P2iCrtNPZwvFZtfCUywdhnW8jrnNyn2m7yyniuXeokNneoU1nogHM",
  "key7": "2XfX89hqMNfjJcfVdQDqn8hPEKW675d1eTVBmya7y3JVHyWqRBpkVrvmY668GHhunPASEhsPGCkwdt38XybgQrkY",
  "key8": "1anW6UZF85yFJUYqCkrWR4FGja8Ch7GS38BDE1i7GBKRUsxhDkBd5dMX9sBKj8Bq1miNhkonwX94TKJh1inuV6Y",
  "key9": "5t1S5UVbqrpY211jQwJ2FipDw7pdEKNdnze4tc1NCyLXATHhTwXV5XcZqhJ7WNs63KZbsCy6XM16dca5saqLP43E",
  "key10": "54uhN54X2DdL1ALz5tQtQk31S1BBCii6CRyCSccYUwTYeMb1VMsgqaqYzJUhTNkYGKCjDGosrGeoHapFn2zZZjJq",
  "key11": "594wCuKaYz1buZUNhMzA2QQuPKUgSqWoN8DLGM7rCukJq3yAcZXk3iX8eJRaG2UauxwrdL4wBEUPq56nxLrQ2iWa",
  "key12": "8L8G9AsVaHuGAV4UDPXAQKs4Azg4esPVHDhpHDyjNH8Hj3Azb6W7nMJ2FtYK6KmaQxVGUyqoqhSyee6ZWigpCpr",
  "key13": "4iWS5DiURnXU1wwYSCCgnmZ8C2cDARqT1DeyiPXXFfAQhGwFUswLGuLEt4TwvUsLKJcJZhhSPEeMJ5wyw4tBfekn",
  "key14": "34qYh4RLRNsLd91jwXqz8gQ4AE53Lw59ZXmigb1AuRR1NdThKQk2G8Hs1osWynCyVArp8zfn7rnAk8tNRC1eWpDC",
  "key15": "3ioRnzwSwELHJHZAc6YNWkmK6mcYbWKF18U8WC4LZRQ3FAZNCz55BibYzYDZrRh4XQAaXhzcceXJhdth9g1LXYJH",
  "key16": "5ZP4v6wZyBUs5xjausbPTT2AJkaHLa8QBeShUdu67kish4GJdsW7gqSZZioz9Anceney96yXUyUh3e6zkNjJbUhg",
  "key17": "5RaxSrrkJLmZzJsQ3yUcC17nJcas6rGAKLDvv89Mqa2dGQgaPpeLZYxDGMK48V5ka1xTMGVyBUgno1BdhpezFqr1",
  "key18": "51J6y5pNQjfkwdndKFw12orjdjrky1uUZEdizFzJVmyT3bmWvTsPdUW3gN5KCEj1YwKiPT3KXZQ2VJY16gQKgMCm",
  "key19": "4vHwZsUJmxapFvSDwQNYARE91F7Et4KkYW2QpwnpaLVbYGMPmwaEiVTEGUSNrsgZESuq5okjZXijpk7Y8bNManGr",
  "key20": "3TCtGENkPKLXsi4okZodRsadfdUSt3NWNmLRTnodHuoq36pPoojP9Efvxv1tCjthNJvszNjDfdUkSP9mPe5nzjS7",
  "key21": "5r3jcDQAZ863YBtmAwogz9LLESCTocopcYJzyQfYiARiuxvU6odW8ZrJWNw1v9BBeYBLvWz3ZDEoW1W9kDq7kNic",
  "key22": "2v6NfaXDPhzaupEkjbgdudXTCDozon6jhaBrvcEkZVihfoYUsJX5FpBL8W6eV6LXnFnrfNTRuKfAdiWWTkVvF4no",
  "key23": "2NHAWnQcsdSDxNw2QD1UHvF2Ag8Q23scxrWg7MYnKWevpd5PWQGQZcZkZjEN9TNWPN3y5GSSArtfa2FSikdqWDBH",
  "key24": "xfLEMfnv2iH5K9Ftqvp4CJzzqPHKLH9vPfb5WHin44ettES1Wt26YZ9C6qJto1RvKqB7xDmtokaZX7MTrtjK79v",
  "key25": "5zh2zZJAryTFMhoEeAuEGDxXqfcT23imPY9boZKPpzfN3BPUvHfMch7GTdtCsQ8hhmtY8caaindxhHRucnYYXyZm",
  "key26": "5Y5Csojy2z5UyLwbtvdLPXX5PqN5TYMmUXC7ofjNnx1998TAEUPtj39mKoxm1NpcsvpHe3nJa4Uq8RTFJvTvKgaQ",
  "key27": "5SaMjSUih1FE3Wzwznf2sTGXRFZKFYyWzPvW8V8JmWpWAyVNvQv1WWBZL4yAhADj3EgxG1ezePU9nFmzszJHRxrB",
  "key28": "5tHgWKW3zzZeWoo5AaJL8LReZfMMaA4rX9az3Vw3St1dDmGc5zVoNSB4YX4AvhaqWcSQ6hzs6UZ53TjoL5Szh2Kd",
  "key29": "4f8XH2sjFLuQeUGTDzwP6ipbz4vkcUJZQZNw8rdvqvTkX5tDhb5bv71uaZ69wgJURMPSjHHiAJQVH4oYcZHm98F1",
  "key30": "5zj2yEyQNYd9v7Wy51KkVyo3YkojSR4Hwoig5xSumjwQpC6RybtiJPMDVeS5EA6fk6qTnQk765Czej72gKdYtTYe",
  "key31": "3vP3FLx5CHLEidupbUVECowugdEaCdpAaWutzh8ZLeQ7BPYWeKCEARq93u2sd7VcZkHYa5zzKKAp5RNeVwzVwVQZ",
  "key32": "4xYDhBf5Y2VYGYYm6FqThwGcZb8BuNeSg8a1Sqrb1tiLpfumVZ15S5FHGB5SGJjnCoMQGuARSF8YSdMhFKAvSjFV",
  "key33": "4MWhgPqr4gcyixym7PhvCfatRFrQ3ETpJZKzA82Zu3RCT3PhbzcpnrvqUtc7VTcvDMg673c6Txgyj6RDTi4iEWgA"
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
