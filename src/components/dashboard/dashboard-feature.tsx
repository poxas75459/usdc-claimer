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
    "58xq6FiPCLwW5832NV6JFz4aMzCqw2LdWazrk6qA5M79QMKAnzwiUete1hBKYMNq3C9r6nXVMUus17W5sDH55mXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjyV7FgMHsKLuqM67bsq6ao6sy1qC5i31PbT7Pj9Nv1ky7b6CG4MsALGYVvrK1hBP21kDQB1GdJwvwKSDQMZfbR",
  "key1": "35SPf75om14vFcBac2qd97T8hQRgSfrnAeW3a1XfBBcjkCrVBH18cvKH9TCViHT9RtrUAmrsNEcFQDz9CEcUhLw2",
  "key2": "2T1SD64kTpQC3BQ5cNHrggyX39C2Zy9iUHv7b7L3ozMutVJZvMExx513CwTnah1WrzqeGP3Y1NnFrWQktWKhFrqy",
  "key3": "5yUUn1SNuioaKDvXfB36V2tETqhEqbAai3z17b3qkbHKT6XVZR81kq91QWfcZXsUzB9XcpnQyYDdkcpzBudqKqGp",
  "key4": "4jp8jqywGYkixfbxQ4KUBD7bkMag6rFWN5bPgZ4rnDM7dTUKufkam36So9vGovUBbYWC398LP1bma9b5cpZaqCqk",
  "key5": "481KziiG1QmuTayhpseqUBbprBxn8ER94QubDFS727sAKHhJND3ajmg5vsWCWvHV2vwX42DAdTCGd89WoXJMW4CN",
  "key6": "54KZBBfxqWZmF9rVwAVuRPj8WF81scxLrd6kcWtQifGuR6rLVJDzGqJG1jcDMhAATSnvDqaYZgDF3MVwsMpD9FzB",
  "key7": "4eCYnduMTZjRnenVQWRRiKkByUpjS1bbV4rmERyCaUkJxuwrz62C1cnZBv25EpS18dahAFJytaD6cYrSWKDZnhUf",
  "key8": "2rnoGTpLd1mLEhsoPfkL8pJPh53DEEBPSPKTbMAm6ouYHQjB57UfXGW8GKoYV5scJc9ktdPT81UBV37eoYnFQBgY",
  "key9": "3e6JtY27ipGueoc4Mo8zzaT7G4zLdGXJLmzziTs9gCFLwbc52YFsZKAvUMQCwMmtiVW8V8trvRAXKgyNu9D4hESf",
  "key10": "5XKSqHfYMETpojXMRwwcQzASF24mvqBogqXUJRVZ5Nd7QmJkwikD87KohRaP9DxUBEvXHySDrqE2LyQppLCvJqRj",
  "key11": "4RPKtTj8H85P5gcyW1Yf66HqdBDYgKznyvKQbj5urddL5ah9XqTPxBNoVtZA72vZQWXAtVFpZFK14zoBNQkYYv7m",
  "key12": "Q5utR8nAbRfTsP4XNjm13cikmP9UzyXthjRTbJ3T5E5MreJGhva3UZd4Us2YPQgEetLQK1tKXTSRunStyvMrdEw",
  "key13": "3RhCq8BH9Nu3PYj2GFQvZKuXm2NLSVWZkBx3AtLAMNDYtsVp1raixsyTcvkNKiVrZnHK6G981cugbwPpa2LzqH4R",
  "key14": "4N27fBQVFK3xKm3gR7E6zUDvzRnKfFKvD2F8w1mgQyP4nhRQzYTsbZwScqDqMjhHp4NZRwsX9eQuxkVK6r49sJuD",
  "key15": "4gUToNhvUYq41VGiuRATYjgxG7qpnfrAnmszVikTYg7DSJLHMdoKX99QHuEvaBaQDmMUimaAhcaQko2wBAFWeuib",
  "key16": "4Dvk2G11h82Lo6rULAX9DLaKkC3CWGCUsVY6Mh7A27SKMubXKmuVrR9NSGyVeUtmYWg5UZLR2Ai5WDapeceEQ95T",
  "key17": "4MdnvcEbTea1md9vFc1U5LR7KTAPfKSrpF9eApCmNb7KydPhEQNfcRp1im7aFLGQAgyeU8goeJF8qDXA5Xa2B1mo",
  "key18": "4frTsgSZvSC2jCxrE2mbzQdP1izmWWtktf1mzCmx8sUvzBbiNRN6NYBn2CirAgRKv56g9kgxtgUF7bQwY2qqZaHs",
  "key19": "YoBqzgs5hEPvZxozH3NUHGzEbbzFxgUNe3tfQ7YwHs4uT9Bi8jKicYFMMqRvp9umWbw3zFWdTixQHxPZCJEc7zj",
  "key20": "5oq43GKdagbFf5Gsj8aZmCZFPYCwdAiW2bGpDzrfeTPVeZme4WKMDX7JkAvVWcESHRhoFsBcDs7RKxJU6b2reSyV",
  "key21": "3qKTGmLjAnU9EM5KbFkvwUW3xuaNjmYXdQxsNYEgy3rSTgBRd8kJ9MSi6nBrFgJCeF82UYiEBw61nXQuf5tUKqYt",
  "key22": "gcTzmWFvd4UStmk3cLwX8AkvuNzyTUfjWAgzEThu7ZMJk8gVzRydbTaU9XEaNtNtMPqjweZgNTMU21dARZ4AEKi",
  "key23": "Uf4mFg6VCEDpNiNNray9rxPUyG9TmrwfvyStCTktDysv8iT8Uy9MwFitdUM9ThCydNp6bsHYeCNUnxnw6gAZCpw",
  "key24": "67UF8A9xghhr9VHP7qZZ1Bqnh7M3TYTHTZ2iTLjkDaNADLqC6c6kMg1Ri1CzUd9eVvqpmcxB14JVqwkTvAZ1d4G1",
  "key25": "5JrW74qMESPDKkhQkKj6oQBCVmXwH3hjJWUwaqieGPfwy63tjZxAFHRBBXfZ6rx2RGn1xkmqe7Dwtq3GgGhoCFaW",
  "key26": "2xiSYm5uPDAbZg1E5ZHLa7N65ouqiJ3XBD4oyYyxwuGoUkdKSb8xDJjwGdBRkcAfqWbhomvuzWabTW9bad5cdP9h",
  "key27": "5deFTEkGZEns4aQjT6zAmSnHY7mT1QDJRz7QX7Db2r7nXCTaUMTgndGRgMQkMwDuVTxPBowwcJMdUg8LnxcSdqnK",
  "key28": "4F64B6z3KY2xLRUfwJL64bwC2CoQRZR1WtSaCzQqrwesRCqHt41W1yM8AVgzgQdWEQZ8b9NezZkdh7rs5PV21hDj",
  "key29": "2f38RYEVSZh1t7NERj9w2uNT5GwjVqtJUz8bdDe8NY9obY3PprzL4dfdfVnNFBzzdA55RF5qqiQ9CuF6W4zGvJHx",
  "key30": "5sRAScTFzm22WozP8MVzXrUrwkwNnGrsyP2AvecDmfDkS6FpupKThsZF5TZ6rVBtXVUYgczU5FnVf2hmp1H2YQJJ",
  "key31": "5EvJF8cJ26SzZELkt65CZrKS6dVETNTFYbbTs2PhSwYPVzmkz3fnyuHLDGQjfujzwGEvURz9tAQd7u7QdztQZTMJ"
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
