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
    "2sLgbfvSvkiTZZNnMdb7eqmTaH5BrsfAXTCSjm6svEmxaq3wdTTJKmTvUAB6NEeKr9dJwCBsPnvSv49SEWHy4qqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLgZfSgtpvP4qi9RLFpGa3MMsSJwac9ctPcvJXB3HmcUCXAmc9pyKRgJUNvJddyse3Zez3CvSMC8DgnNC2rNDca",
  "key1": "5SDVFMFF7WggGeSToXpuhXJaxgmyQo7sPKfadZHdJKp4XCU1p4oifAR4wfZsb8wBrJYhpyzCvEhJ2G8198Kjps5K",
  "key2": "Q8KqZVSweUg4d8PGUcEpkXNf7X5FHcsL5XG53o52nr4AQqZvnC4TLdwRr5oew94g9X5N9GWHzpbwDWF7RrHzQds",
  "key3": "3yWNJu9jnT9G8gqQaNS3gpfrhdAbZJ8A6rfoU7kmrwC6LUZKLXu5PikGDggjkSVaWPKK8FNoEA7ybuFYt9duEfNC",
  "key4": "uLVgun9kpqZhdWSKkwGov9HkYFviniywD2JjCi9WftezduiYmKwacL5FrSvZAsABJsaGc84vsv2hacpinwa5U2t",
  "key5": "3WYRyXj4KNwyjjpqzdjDiLitbMT1XqvMeDBQLrsCkZVARgkm9zaosfTYAjxb9a7arGFCCQarqsd1sHMo1YvqMJEq",
  "key6": "4HipXS8JF9nvTSJ3JQ8wkaKnA9usx9ybCaz73ZdQUF6yKUmdqPp4sj5sfBwEmv4qFdtMDmQHraJixAHUb5DkT8gi",
  "key7": "51jtaFDfKZjyDSThcsCikX18MrjokW4781oCfxQedMpEnE81z1jnVNFNHGLZgjXULLdsxsK7j46eAL7oMcSPzfGK",
  "key8": "5HUCiPeA8UQZbtXQJS7XD529y3eHjQ4nRxQ52H1kWoQ7DLkrqcBQEceLm5M5FLkzdFPg87WsnQKXNXtefbadjYT4",
  "key9": "3KFXbSoNDnTTnaY2wrQSZbNhiGs3HWTG6b4nf6WK4Ru1sj9ZLYAEVsjvWVRcuuMEpvssyP1UoRKLeAGcTjQCXFbY",
  "key10": "4dJWniLt7dQfz83zzfH3G5vgV8xFzoBwLoUfwriKDtzdJLEFv2yGvQBoPsmshTbXSvXqZyYrjAqQrQMU3pFLis6V",
  "key11": "4a3RKzkKPU12tgdKBXkfHAkUrxFmehkeRRnsGCCRUpnB28SzyL34rwBBQWAmcwps3PHomjBgSLwgUtjSNsoBGbjd",
  "key12": "47peZXyfEbHBVoSWWnWGX1HinaQgMigsYhyhXporU7dgcHXw22crAzRj7aM519HjfBQ72c6JdxXHztpCPRnqutHX",
  "key13": "2JxFcHvGniUVxzqL886uagNgYnm7iNLGT2MHHf2Hext1ucy4BGVFZMEAyceU1XLzAfCsFgfyLHFwQgw4oFWHcqbe",
  "key14": "4aQFwcNuSE4sNsQZViKcJNxqTyLKZrYo1w493Bd9u5qk9Jxx7ABsQN7QXVFwckFPZyWycWNtq7WBBpHLzTh3z6m6",
  "key15": "2GasQ5i6a9mN8TQGUJrugJk4uQfF69kwJw1dXTNXkrWErzXUcNc7fm3U8qbTRfEtx7uhneys41dhcNvSZsWwK9XC",
  "key16": "2bQ3t7UUTc95o7Lb4QJacfeaBDnrbPxBU69fxaXBjtzNG49zrg8Zs6HZ8wu4g5cSUCBE1KZit4JAmwoDXEmy9v1H",
  "key17": "4hJYPx3vxugih1os2gijFCGwrfJBJw2zk338KTZLEQfYKHXCdAXEYx9WnYnuCYVqBVCaoMpyMTkoF2TnjyddDBy7",
  "key18": "2XYfqnJqf8skwsxkGbfqm1LpbUaivuot7xMNFYdf9RV3HoQExDX2nZY1PRDKyS3ejSyGaEjdsetu766XN3M1DEgS",
  "key19": "3QGo7j5fp53bYgM4Kp5ckAJFBoAF8dnoH87dXWBpqv4J1KpmSWuDqx3G6Bos6K3WtwFPPMt1294FuPfaWtHdF5Rw",
  "key20": "21q73upDgeds5E2SwWhFXZuvbjMLMur6QPCSQxaYzvpyPPczq4rh5AbFKNFNdTGmgSz356ysjAZSxFoTkYRfFYnu",
  "key21": "4UP1sQxdma8qJoWHCCyWqu5pY4TpQbHRJJWHWxRRxMEecFyLgdtBgnucxGjaKMcPg7LZSA8ApWva3kuPC5EHK1kt",
  "key22": "4m67RBUxuk4Hqo6u1r5AfVeyqbyVAArHDxG9SkNdwX5UVD9GtG8ESTHCVJTn5b5bmVRd8Gum4q9rzfhEU4AoZebM",
  "key23": "61HaHHKSTGayJiUCnCgnJT8WojEVL2zCtUWyhGwjWZtPBNkkghAbQxs2JMYWqGdx2wWGqcawPb8uHsq2c9NzPKSf",
  "key24": "4B98mPSTKiiDZEAmxgpg4a1x6X2CVmn7vJA735XCs8BzFULBYd1m29VQjw9ExcW83upKthEexxYXsCip4gDAiZpR",
  "key25": "gpSLJ5mG9jHNs64fGSbKGnY9X6Qor3CRo9xv5w7gGUYkWzWmEHumtDjjcj687ZM2rL5q3prEXZB9AsFuCWiSsMb",
  "key26": "2KKCHa8G9Bzc8VkEZcegSku81FuEhDe2ALoJkQkqH5imHhJ4g1twEyfCbJ4bPaStR1vCBrrJNKw1dNQiFTsqjjGU",
  "key27": "4AWqMhKd9M4MTxY9eNYmfNj2ivE6TJjqToiHxnnVqXkZeH4fEpqTxAGX6JPxMMMTboaG7ABFQ2TUd91QBMMEPGMY",
  "key28": "2taQ5PrvJAoJUPmWHyFHtaSoAhu9i2Tjhv1CJDsFaLdu4WCxgjCPfjkvVAJjPv8xcr9Tkvod2iR3wfaRHGeRqPyG",
  "key29": "W4K5RB5dG8fDjxkwnZYnzf7ZKkfcQMUs5VKdAUH5CVNdW7qGFPQ9orDCJHbHLCi4ESnWdCSxw3kzsaU9929do9R",
  "key30": "2NbFmfU3jTssRh3JeubZaLqkFKwQNaSM8PJmyCfZ3BkQuz9PcZhe1DSiLEzy9HqanLuXjSSAsbY5xGMHEvKz6gLm",
  "key31": "1eQ1e3uf26faG2PVgU5Tgh9yDSZ1PWnghkRSc7jHHJcbA1GQ17NhU13tzvX6WcXidvvU6NUFHsk8Xb797dSTWk7",
  "key32": "4qT6uDVtRZEpoQvqmcj4YDCjUJH9h1uaf3dLyu3uiLCWudWBP7RmjwKco3jML17pUVV5NFnjXUGrMxFK7XgVWTzq",
  "key33": "5Nf8DSBrFUJRVyLcz7rUzyhRBG6uuDVjRQco9CbqGYXAYdjH5RH8GeMpRnKMmD8siK5Goa6RhR3Kpuwk18iUXvwn",
  "key34": "28skv4c3ePMJwaghSCxyhUvGTkdHKwQpBmPmhbKhABZWmxVSq94en3MGPyFD9ZyggdVfUHkKa6m2bY2gsSR27KuA",
  "key35": "53yC6MkyMPrdSnUP6Ef5RAd3Vqq1ueu6QxVQfHrUYCfrKiGGLAa4vKHW96N7AWQNj7waLM5xfgyXqUTTH5H67unG",
  "key36": "4W1z3a5pMgfEasMowXicz1Xua8R3hqGggnWSzsuc1VqqcxxRozEPrTuCPcuyV7hvVhQ8U3kCdmJjigE8vnUVbuAe",
  "key37": "2Nu8aTxSxzwKEJkieQjNyeHzfpYCvphoqJmjZKUYcaeqjQwSNSQbqGKHubvU3A91sotZmL7hWshXUptSa8bx2oof",
  "key38": "4jbYV3dpfJ1Vc7yvw5ebatAaZCdVd537KDu5snv6a1noZnnEhbVJqd13P9mqUFqvBSmDtbUmArkJbYyrpvSz8yWf",
  "key39": "3QYzp65oA4muB9E1zWjEd2znzYhBLXHTyGYwEyjyXcSiXTjyJhQeXjbDReJYV8TdtDmo3sUoaGygAgHQoiYaLkD1",
  "key40": "Repd2VJpGEBqK3gWgxwrm7dspssaWU6KvzWQuhv1fpkf9XWxfSJ5DujxuWcNPocmWnRgJbjuoJxihFdKg9JG2fR",
  "key41": "5owkwJaruPQYacmvaStyiNPne2M84bHUZ6ekyFaWmKy2iyLphHYFudwpUAz4qRYLN5d5wnt1kXjPRBNDpNSsNRGa"
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
