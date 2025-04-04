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
    "4cctsm9tGf1cbCyfDKgPZ1dgnwGnYnPQ358RtebsViNeLm2Y267axM2GMSBfC1T9eFBPS8RQ5eP3rRojgsuBux6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C665rXRYrb4Z9r3PGH7nAdMK9v9rtTXDdZFtYgAn1VCLF8SvUw1qtiWSebVP8cA5k72EwaUFpGYmGJWmQAhs2nr",
  "key1": "4LTKUdpeZoD5wePzYpmUhiGQFp125n2x2igtTjazf3G6JHhcijXsqbQTW3n44Rey1P36rWXnAwsgChuez3NGmNke",
  "key2": "5zr5Rci2e7xFSKomk6kvbpFwecwpiZKP7L4J3WwkSj6cm5VZbvsAAgbTmD8ztZYzuUVYPj7dHLw3ovYps3Bi7dYB",
  "key3": "5uyMyhwrjDgegFha5JWNmkwEWvQ9D72AcFzRdJMEHtbjdedrmo2zpR3qBTuASeWZJhfxirL4HxLd4o4dXNAt6DU1",
  "key4": "9UQeDWS5Yht67ds53xG9eamjZHxRxwVwAeSdDu9bM56dHmUa1ZtrzLisTGm3SKGurCqFRSUF4rWKpekgc9ojwfz",
  "key5": "61BSk774RCXxB8WQyqaKGaQCwvZsU9QU9v78RM2sThQzZ8EpKiJXSwmVysEkqfcfgHKY1wGWcKnRFNLQ3TrWSa8t",
  "key6": "5UHHBaqNdb1iYQ7ocTLNA6GriwGGhUa8F7FmfiuJUZ2F43TasUbwdZhXmKvP2oLh7V6G498oN1Wy6fgorXGqdKyK",
  "key7": "2QCofYWSMN7vDrBfamSfQU9Ck9SJY7pPC6mDdC8nLiuPc2G5TSJ3vtkMoRnkj3Gdtidq3VYp2niykn4CCom2PtWM",
  "key8": "5LGwDVRB3v6SfzCRaSEE8kJnuhrqpxrMokUoWSnwMbLGKqSN4FvgQVyt583ywBhEqmeEskVJxZLtNGfPPqbKAi6m",
  "key9": "58VDhfqXwi2kjaV4MXcna7hW7Ta6JbwMaaK9TttAuXgNfjBmNUZ4S1fkPnuqB87DQ9fsg5B2TUTCvTNsiTeUP3n7",
  "key10": "5jyd2af493Rzm9Dtsqu1VDsZMrZk1VEmFBqCr6S2edqRg4xke2Km5HodH3UafEYsz2uXRTHtGeesjA9Fm5hsHGWr",
  "key11": "4RG99r3Ax5iLrBJ3QG6pkxJ1TYZtV43yhiphEyLUTN5egosoxnChXRsAfQifBKajfQXgzmQGrm9RNUkAzonENkTB",
  "key12": "5iQ3xCLTyEmtaeNDodNBiXHpHuPUPdH6Fs9ThyGEQfLpRAQ3yDLdwzGmKZnScDN7LUmoghvYZhLqe1NSrnN7v55K",
  "key13": "Bp4ddDC5Uj1HZP4oq9VKG6ssYKnKcWYhnGrvxH4FRrPH3RhtSgrE9Lhr3uTEK5duQDYobKQ4TKNKbXc4Q4FuzVs",
  "key14": "3WXEap9DhGBjpjnPnTAbUQshgAt9o1B14LMABqKrEbo4Bow6q71gbRPS94AsVmaytvbnRAStHawJjPLzVqsai9rH",
  "key15": "2A1CAxa6hMLXCVXNYRB5VnRnu5KNvC91AQzhmp5X1Qygeg6Hw3kibRKQnGfaT26q4GcQaLeZWbRSfQmmMKS8psfS",
  "key16": "4JqajYDbYBHuzb2m6wG8QbKzri7xjEpCRiS1W5Ejfd1YKRhQYeAbAKK3mYDgidhpRqF9qXV4TXH7ceFEXfAX3zF9",
  "key17": "2n5uoYezPitRVu9nL2emJfh9WVS6PYEhUzpp1SDg8SoCzJwH1XufeVTFZk6o9gTYmuzhQ5YBYEMgSHFp88RXcCfG",
  "key18": "4sBhGbBZywkmAArCE4ZSziXDB6ZDVAb6AWGvw1STQGFkkdxcayNEGvfEjmX293h9NkSBYRhucpCsZtyjHxkk495n",
  "key19": "3X8ij64tiEYvw8kC7dLcLmkkXYfoqU5XRoUTmiKin54zepknCav6sdq2joHeHwVvb7cs2edP8mUBFGrtn1Sbf9n7",
  "key20": "3aJabymqr6vDqARpCQM41ZEWgnWn9fgvN6ZK5We2WJ76neawDAnrZrX3e2itRdsVxbBo4uMT76SKq2LUnahJnLFM",
  "key21": "4apXS2nNi1ZEh3Fv7mtVU3hYV9FHDA6fQVJ8omsnzpP157r1TsJV7mGyPzqFBm2mugszos5CmwKEvfepCVJrz1a1",
  "key22": "56dufdBZExHgpDpN2DHoPWeG7hZaetQeGbL8xxBDTHLyroLPgcMbaBJmrhCv7QmZJzqHv4b1UiczwTtW8w56zWRp",
  "key23": "2HV9uMNr2M5kU63e6SZESJX5tcYsWxUx65H9e2oGtcCJ46P3tFZzMn2sZbRua4ttV1HbmKbHvrdD3hcdwxdzLoVZ",
  "key24": "2aRpvG7iHJP6nDrwUmvR24GRffCbW3gGxs3PJWPypSt37S3gwEiPSxRC7A7fgZph2rmqFVbvpEP1CX43ak2kXT6c",
  "key25": "3Z7df2ZLDx2Zi4eVLSnrMnSYidJYeU95i2FR3QmtubaLEzGjfc6PZyFzQhzG4Ughoyfk8r5dRC6JM99GoR7kBsEk",
  "key26": "5ZPRj5x9hzvaBU5KBC2VeomRNowiSzA9VZdTGTshPifC16Y9akK1JroiX7qe2noQo7k3YYdXUSKPQ9ALwHYD3U2w",
  "key27": "4bg8ffcqXW8iUAHmTenRpe51r6pNjiwyErJuAQZT19wArvYGbg4JnV6zFg6ULjU76z6voMs8VGNmRsHH5Nr7Fhun",
  "key28": "3VZqzJajkkHScADK2FMSmX2z1tPc4c5hTGyv3GANAxfJMFc6FBf5bgTkRs5Hwdixwwn98ktAeWz4JLRNk9tqfpY6"
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
