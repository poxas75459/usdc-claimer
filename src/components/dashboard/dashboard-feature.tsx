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
    "2Nyo421YkD19c9WH7Auz9G84F63TUG5pSZLcPVAszN676dPp4xaFeJ9Jb6NNENU8AEADKsv7U8S7RA6rQm2QLbaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APPTwPadqYAgQTHie4HWNdYb3ev6nwus2o5SV1a1hwzKB7gP1L5SUgrq2UfBSaQTaP1GP4d9khMkB1arFXDdcHw",
  "key1": "R2eLLkqGwvhXuCePAUvXbm9gddoBi6aETFVjhTJYfooeJA6QNKqws8dxrcf6HGeieMfqGrC8F31TFn9RCBpnttP",
  "key2": "62CZoqthW1t23gRRVjVDUxT1XUAjkVqKtmDCsF9btVWwUdbx4u3aGAgar3HXKU77zJfJwwcRyMU3WtwGbXtqY4XR",
  "key3": "21KDCJRoTCkkRGF4prhXcdVBN84hCU9oPWzmmJTdLU5ioPXPXaKUcGGmzcMTsWz3B3ZncUWMGN4VQXRvezgRo4J9",
  "key4": "3EpcxYWiXG46npC35QzZwsnkt4bCBdnGUWXQoWhPYVe74nM9xP4AcLZyo2baHH8WK8tAPryPcMw6qkMyNNh8ensx",
  "key5": "3TWaUcpd6kj31WxVth4pojKr35ZCp5nCGnKrBFJRTMDA3RhKN66gVa98GnwKfdRkby4SDW6RF9UwCCPgN9q1QLAY",
  "key6": "3PQXt8fbtwTxtdTc33d9WNvt4Sg995rMarretxN6jjPyy4J4w8X3UiNQhTQvQSRFuknW6NX24H4cCA7AZ8bomkVS",
  "key7": "3jbMjaUuNXULnjj868XbVZLqvArowbVPHUpdBEA8WDK2jL45KeqzEhfgZR9jkKLDdDfJy6yuRCcvCoz5k4HibWHj",
  "key8": "5at7wRCWvhtEkLi9PHRbrU7odPneHMwcRSKgmoMXTFUQxiXYe7fnyKGf4JJuou9kK3TNXYfYACGL5U9Wi714AHt",
  "key9": "45utGBB4NS776JgPZhJENmT5UsfJ8JEnLFwgtKCzdNXNPT5f9GxmMnfSjumhgmZ851cEjjobWzpbvFt6rG4w3LmG",
  "key10": "5821D7k7qZon2etfoGLuyGf8F36fgEgpRsvLBQSTJws4XT5XUrL7NKFvD8K9CiQzpbY1NxkBQTP7aycGkaAafi5W",
  "key11": "4CPp3UrskAYQ84fc6pGCk7jM9i3HYrF2r9EbJ682q8C7L2ePF4r1sYheuKQ5DYU5UxQazTivnK5Ezr1UsjUFAZqi",
  "key12": "5FQoAMPH6asq21z9Y99iAVSZ9dLn4NnLmhagq21RFRCR7FqyuYZ6Xt6niJKV7z1SWBNjenny5uPSTWvA2P7aSPzz",
  "key13": "63Kk5faEHpnQkcUQcx812RRrEy8dCK7KoXZ442DTxWrjoeyDCpD1MvAnFpZ3pKock8TGxex4PMffpJfdKdQSP1KV",
  "key14": "NmcJ5VVHAKGMGV4yFNd1bm2r18bLP24LQ96GsbBoNaxk2sAFNRKeT8b2Y7V8R9Gv37U1hYwwTs36dw9NfFEcvdD",
  "key15": "2DEgDRQJFqefGbxcfoymSyfXqB2LxD5HFzjc8Kjt4RZE3Tt6AjM4fsJZVE3CWw6uaZirUs4ZnQi9rad1C8HufgWX",
  "key16": "2Wxj7xyLq6o7UjGLDChswtFoob1q1Uw389seqke8tNQz7t6KcX2VjSVWCXet2tBHFSPRm4gYVXHZYsLsLuKePWsJ",
  "key17": "4NesgFgzmL3BZVxHcGEEXo6QVRAVuWo36d95pSRUzT88rYvi3A8QGrGbcCNCGpB8GkfHogMUzD55NcQcRxkZoJcC",
  "key18": "2RN3aKKrjV5w8ZwsE1L7Spaqy4sG1W1jSbk3edFiQnQJQbaLtR73QbfvYYWYbqT3vsVkW9HWGpC9jvZQ2bMtWw83",
  "key19": "qLvHe8sukYaUKxURyi6MWhMvfqdXsJkTtVmqQ3k5CTMVsdW39b6y7zxESXFcENbFwNEzcWGFh79bFcJJrbUK1Zi",
  "key20": "4qs9SShySAKreZZ7dUZ1WVFoLoUqQ9m85db7688LJq4xaVb7d1Mj75Ffpij43sd6qXP41bUQzUi3VwySNjJ9TEuu",
  "key21": "NfJtw4GX1ViuC4qaFxtZJZSoRi7C5uHXEEu3KHzqRMpqTDje6WwSLqezK3q7DGTzJfyiQ1Q2ZG8dWTWuAmnMExy",
  "key22": "oY8LsMPUAfA1L64w19MCbvbV3DgYr5tZwELmSdjf1MLR7p88J4kcvMZzYDxaNcKmb8bqJenDAsbgi3GLYh1Bwqs",
  "key23": "3cf6rmd3NWZLdzPqmAkQJofjGxTutNnuuK9ZmWMoekNCdUYSJ2YAYvhR1bmi4n9P2j431zcZKZr8K79PgVDno2dr",
  "key24": "3xTEYTxz5JDn6fheix6Fj1ti3sGFb7X5kKT9eqP68z54nmZCpQ4VQ28jcA2gxSXYYCtu4hJEGSE4CUFcnKLxRcKV",
  "key25": "CdAV3GGb38vUCwxM1UK9DAfbwamFufsT8zdUN7WbvCsggyVfBiy5UCkJMfs5P3RSnTCYzuFZqR6iZaLrWLKcZii",
  "key26": "4KdpyRtJs4YxLMFy7U6hTJSvv9CEyu4gNxNGvXvccDQMJUgM1DSy1M175o3pewnjb5csZLAQDsWz24iPJimzQaeX",
  "key27": "39szSDVGm1DaQE2PWnqPSwW9qfy8bhBJwjRi5effkSAUDM3rdUd4aeT7nFGuERyHxTrKyyxcygTxsYicE9YnEBca",
  "key28": "3LDFxs59ah5WEJrAV7FxwJ7FCWPPXB9LCCiaiBC4dLr4DHuVQenmsNb5V6cF3iyFV5w3wF2rGwtY7drELMLgUhBV",
  "key29": "pVB6sbfJ5bR88DAQbmaF6ExNrNSAPpSbmK3hfGhx96uRwoyncPeXSYXZKZScRxXJ1hC4cNK4Dbcv7drj6vX9and"
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
