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
    "5o2o6fk3tCAkqCnj2UBxJwcu3zLGqkvttMR8ZzjhG4PoLEbYfQeTBwTd8CKErKZyCX6BdFYuG3oHqE7jgnh4Nrwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLooQdBo8djkDZDP26yEtfKu1zkitZUbzj1N7jYT3tqkHBqQ61CDDo5TKTsFpkjctntegRCPr76RKQMiuW4FwvW",
  "key1": "45ztYQVjUEBZGhjdCRwNcsxrdrq1Ddpa1R8vwQDL95guJQEMwuFMk3JN9AzqiZC3Y4CwHLKgnzymR8hdKpK2ewfm",
  "key2": "4AZNrH5wBpb8c3WL2Dyz1ZFUw4nnCxkHaYLD3tNzLFAaB9rTgmC3c9SaMKghMHTq7eW3CZQZbKmpVULEpvKkevWA",
  "key3": "37buufZRgg7JXfpPJcRMQuJETX5UX5GQeCm7cPrDcAiSPFpjhHq9VSKqPjtJmFA9WcrCQ7phc81GMLSguti3PkkS",
  "key4": "2YdXVVhRpWz83wiDuGueWG6QkuE3tejBFa5bK2dKxsgVn94eLQjYyWKPCMaQepqugnExGW71hxLu3mzBeJpxZcc8",
  "key5": "3zGWU459WGtcWyAFwaLjKzmHnARUU2wSiLZ1vcrKjt6vkJp6hB6om17rbSfc8FRA1ij92vfPWsVhtHYbJ24Sz4U4",
  "key6": "2WQcms1Z5d7A5gRJ5dDyQ33ivQYFpJ2bxT7cssHzLYpuhH4QqjRsDM6wLkfCE28cMrQWfUtaD924tV41XRXGyZ6P",
  "key7": "KVpyNSiju3LHq2xcTbfQvR1pzfkJvMHfFPmWHuKKr13Zo1QL6EeY2eUgwmQkjfxZV5xPeqi4PDYvFZgU6NZYoKG",
  "key8": "5GY6w6hUdrVNnncr3uBKaXsSLo5rNHVDXH9dm3c69a1gzi2Cseb8rDeAM1RRaWsZe3xg1Ya8bRDR2oLWSHfUVW5V",
  "key9": "5nXyJZUf6y1gNJtBbPcXJkZm9iytK9eVE5BfXveqvRoNydHoG1GDytwcX3c6Y6XGCWrdx6C8oj4jMUcp1Ein7G6e",
  "key10": "2EmnEu7eSNEyrAQgoeR2BS7BXFodNAVcqQ8Kfw8DDTE524rfFJBK8GsfPYiGvsiNQMyNwqZidWEJvkEdosh1pHHi",
  "key11": "4PwyrgUuLXkMsHpBUuMPzyXAoqvDAa3c5P5cySiYtcBRxHfg4rDmrePqz7utK2iadNqW2ieB87JCXC17uUzyUAvd",
  "key12": "3Qf5Nmz88vF9kFjyVQj1Pgopqmfo6DLjHZYAA2S1XeoJ8uT2Cy6rVhnYdptyAVEsTRVpm5sthbcw71euBsB2ZYb4",
  "key13": "2y1Z2oHyE1uNxXPadxQCvmXaxLv1hnUP8FGy69fVGhrv4Kqe6X78yjDkkaQX1JSaTWgXUp8P6omDYRc67RRwbF9X",
  "key14": "4g7pakcEw7m1EmR384QgfydwP1aNFGUixLJYcaQGetLrQiivYBLRAEZiJWKieKHx7D4HcLe7pjfCfYKg7uejPJCA",
  "key15": "2BXjqGuzvHdtvqfKU4Fr6wdk7e5DqH4yNu4EEHAUdXb3T1SMvc1XQuJgqqbe1dh9TeXZnsqiEbtSomQagUZ6c7NR",
  "key16": "2EYMBTajEqwNj7bTYQRDP6gXt5Nw2KmnRf2TqVckStJkRWD2r3kJ5FzeinpNi1V5pELK9oBAdTrdhwUEhHPyjmsA",
  "key17": "5XT7KiiSdKvrkGjJTQpcEXDaA5Q9EW5mYFHTP9VBLimKMxC7fuvP54NCQyL4osfmobmMe3NoP1ydEAmMdEAxoTFH",
  "key18": "4M6W82v84EB4ph1UKSR8iXpoQqY5RZfgEpf2YBj4WC78mTAUMiqAN5CsrMXkmrgMrhiBR67FppgDoveVsVN2tx5L",
  "key19": "4FTj6Ncr5DqgD2LVpB6pRDnFGqLSGmuQHurCxjBeArHRuB32o8ecXKzHAcQRYn4tX5xAS6h6r3NGNeJqx1UexqqH",
  "key20": "5zS9o32zwfcwa7T9gZs9yhGeu8fjv4StYduXEarV9HAg9V1mdxiApWiczXriafAy8WgHdhJd7WibsD1GR5ASr7XV",
  "key21": "LuW2bacw7Bsnaar3zFxU5ZU7VmLwLAmEjvt7517ZTTEddt6UcqAWEAQ7V3q7R6NJ4zjb2Cw2BkdZJRi7cJhZkC5",
  "key22": "3cPrTL4RhEbQgNPa19aKywpRvdD34QPzpb198bhZFdWV9THqHXA71h5K2LZeUVHh2yHRC6ULhnkB6MCCph8UEQBT",
  "key23": "4KiVFPXKMv6sXLZuCyrXVwXd2F6CrVG3U1vnpkASh4PWUXZnBWCzs4jDfpGLeyTuzXUpMAbeHxo3FtTbdKfuKkf2",
  "key24": "5MQfvzfs9WbNQiZVctDfALLfefBsLGRk5RycTg5GVhQgzzQvDM6pFcRnRK8DegFS7et5PdNsyxGgvB7fN8XJMKsn",
  "key25": "5u3KCMUNfkRTYxnQm79UkDFs1SipmvfTFMFq3qG5nxVgzNVrDs7K9SPKxxXV1FG8qN7ZkbLE8qveWo7gN1N1Cx9w",
  "key26": "5Q84SBd35bLNZswuPegpksEzCn32Fud6tZCuo4MnJnek9EwfLQNmv7dNdDeJxRSrXHvz1g5AHC5rNiQvYhVv7f9t",
  "key27": "4X3M3EDozjRwPCEowCEdRLz5oavURNdbckyp2NYU3NpG9W9wrqPeUfjkk5Lo2VbTtoK47cnKZibNvKTkcXoHAwJB",
  "key28": "2opEc2r5mChMyg8yc22TBasEP1rPQt21H83epKs4H76gmJA2t6vkrS3tggfcg2ndiZUxzuYn6FF1TVyhGmJHKsQa",
  "key29": "5PLLWmrYAh2qQqgLLfdMGNSDnPBc3YAYoJXpRGYbAUYYCBNrnisQ32WgDzkkgvFEQ2qMhooANK1MyByho9CS8jsr",
  "key30": "57qs3wte7x7MScZPp2e6AqC176o3VAuaV2XBdUTV5bam25dg8N3ZnsALXgCKAQu7DnYRUeyQMbyUBvf5S721FuH",
  "key31": "3Pc9GhYhyEt6i33kxnXDmCpQ6kUH5TQnE9yavLHdRQntsRVn3nFPWYckzVtyFkZ7j75fYqqeFUv85r1HBnmBC99L",
  "key32": "396ytFQ1BAmkpjUEmrw9EHmLZE4odwvqPEXnnzsKh2PTfbZX6BEuVvUWGXaDrGc7etVfTqXmJw8EzrovucVhizTs",
  "key33": "Zyw2FK6kjckEUtem4WgEqe8Qy7MxUDsGkSUWoNET8GWpRZQF8DdQRCa4Ex7veS9SWRx4EeX4abSdDVgUj3d323a",
  "key34": "3hLdNCKjNqCwwWocbzC4MXTYjSkrbre7VaprbEXAp8XDiGAHNxAVQW8WGdqkg4Mz2uwqM9VVFKQS72y6UtaW5WQ4",
  "key35": "5AL3qF8eqtb1Pq3AQNbQzhrDkmKxCjmezJThN9b8BYtPBMvbMPgtsCPAmHgSEkA9o4M8eVUc2bRwoZb46HySsnnD",
  "key36": "4xQnRut1o4DiqZFHueNMNRATCTVs9uLJX6VVhPHj3rmg8o9vMjPPBgrEFpDFiKNUkCvjAGLHURNMcMAHdZGNnofk",
  "key37": "5qPGZuwgnjs1WinFK38Fkjw3kr3jLJ68G4nWhHyGvJcEd1MURBN3bUxHjGHZQd7XPmPaNNbFz2GXx2GjVwMcBiwF"
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
