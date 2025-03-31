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
    "2LEvi5fHzoaLQot7ja1e224y5yY9ZgP2NDbU219cyTB3FugXtsHKCvxf4ddjgXwiaLfaG3nWVAwYjaxjjTAMT1b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNDaQpdBg6S8zMgogEkaqGUGHdQugYcHCyLMuWP9cPAgZw6HSebJ2BxfeHbyL1iHWFY7Wgf3B1KB6MUV3nnyXVx",
  "key1": "FfxvKgGGUFtsqYC2EGkcxGQwRBQvkuHTrcctLDXdtGxdDvmBAEFRhnTkfrhwdPwtmXhZmPXhQq9XyrYxzvRC3g3",
  "key2": "59byMi9RLKkKVPDwxSYoEdpkJ52u1kRsZ4nuJv42y6ZiWxyiH3R4PiEfM6dexEcmb3wdaXf88NugzgSEYceepsPv",
  "key3": "G4yspGKtSbZ68eUhjRQLP8hmiyhdwmpfU5KWAqmrggRRWcsWVfYaRZKrNc8nRUYQXPTK9S3R5CBPpGriueQqPpp",
  "key4": "2onQPL14yTiyQp3UB2uqg3XHeMRxym6dURVgCpPpid6BYvXBm1PLdVQQeT56Hiwwax51jku3V7ZS3VUbhRcaJacw",
  "key5": "4oUvrP2wt59sMyjU43eZTNwHHdwVkNuKtDa4CuZsY9QDEaoQ9F2qhYK2kv8VBLRLReukTEMnw2kB6Leikye6wMzw",
  "key6": "5Hnomj3K6Y48t1iB5MdzQceauqTUDwegeAiJUDBdmRu7QW8G1GMoyA2E6mnvouQKKuKKWoUpeNsfq1s8w3j1viLL",
  "key7": "4eLhAFWVkdZHFrxbvpYLWiHRUcNi3nmVWuLEMWFYMxust8gXonQcox9Z2JjrutATWWUxVQ9NzBoYJAViwJtbRMEt",
  "key8": "3xHEJpZNFF2Bd8mG9A7cFtVxDJePgyMPfJgeL4bp9XNpHwjDHYz7yaQBvXHoVLw1uNunyXR1VNvtbQZDZhHEf4su",
  "key9": "3t1D5N9YjUuUTsDuBq91x8PNZFiBzmbXpnNK4T9bQgunwFtuPC3pTJ2cwhwBku9N6aca8T5KoFixVf1Vuik77je7",
  "key10": "5XyWmPezBoZz3vTzXYZ2vvEjUAcbJMajkRpwfT9qa8cVom25eP3tsvfStiwUigctbyfbsQoKQyRijbtfJtyKzjpv",
  "key11": "gnpYUvpUZVPnJ4qFix4BSPvkNHkpHJMDUTnWT6yWX5zDBjkqGsTRY5uUSmE9VXQEMpCQkczmnD1GZgYWzLB8yPK",
  "key12": "3jETcs2URzSdXYWdYMDh5rbpQsXUZYVjfTuFUMCbkZBC5SNypthamvzo9hbRdsj9iu54GwnNLNGpoqSPt7VQzBU2",
  "key13": "4RBGNPRPqJhTnSXEkewo8zSmCqZzAZo7Qm4PewqhVFGJxEJ3HUGS6tcZMuw4Q4MBo1J4R9vTyPqDhBpKcZeSsFKM",
  "key14": "28puq4HzjBiCbb4oTANpdH9TM8LUHqWT7pfUCgkBHM3pLSD2P6RiSLy4repewkuA7jQK2QgRmjs2GJWBUwgjU45M",
  "key15": "34X45taNcLiXAgu8XSzzG1DsBqvExkyZ38uWbeHScqUzHbSSBRkcfMV1Yy5FN6WSUgu7c7TymAQ47nymguu9JnnL",
  "key16": "y95AGtJWoFVdYqFYFxykVteADNxEgjNGe223YH5kTq9YC4NT1j22soXpjAq2D9ryGQjqLkM13adrHj9GbYXXWra",
  "key17": "2gESjVxEbbjrCYNxshc2fLzQULHPRyXctp17eWwMLbfKRbVULCfx3ucdwXHHgcniBnwXrwJtLAuspYKdanrb9TmE",
  "key18": "2GT6VpLEd2ZgQTxRQ5CP95BuAAGEirJYwxoWp5rLNozhtGtEL4ThAQXjUiYddRQStmFEZnktLtTcM4Ee6ZPDKUWv",
  "key19": "23gTRxksAoWkph5EZsbq8th5c22f8ifGJbbjrLJEyGZ9atwzZosYBeUfoNwjFDX3kxmjwe3RirpxjUbZrN3KZUBn",
  "key20": "3sXSBBQL3FKmgekK479xpkZKaDMdA3gdJPAhsbzYWKbPEgzhsKTJjp2JdHp9uSBdaqsRvDZ9xffxhwZkR3GVWSJg",
  "key21": "5Xe3WcLZg1Jqc7C1dRT9ZDjZQApWRvhP9QELzY98cWrULJ6k4sq8rLc51szsnvNjb3UTHFJfkMapZWWJt8CxUr89",
  "key22": "3gUBBJr6oToprer3mvNrDZsYhdqukzZSkTYBcbWqXzzNRsjd6ircPGfvTG64xw9LqnqqSGhJAuybxy9CNfaHoT9c",
  "key23": "2m7X1Y9iXmUA4zymy9RT7DVV7pv1XjAEyykKL7y5H8GUebJHQ63BDHvZfDnUdkbC62U6BvDgyEzx72ewfhZD7WQR",
  "key24": "3Qyn1xxjsWf1m7PitiJ2pik2yafY3NR98wsH9omgb6G8hFEb8KBGygfeUszUiJFysNhCzCeDWagRJEkHRSBffb8m",
  "key25": "5JSvsZd28LYXWQYYmrbMx2RAtx3QmYV8kNarWXYz2EnnZwZxw82bq6EhYZqR182Q6EKebG9AtzrNw5ocnBkLTTXi",
  "key26": "38mzwxeaCS9Xmu578yztrmLnfT32in7Yr79wvPNNn9LhUuPG3pWNj6Q6rVEFeF2owB7fi1dx3HK6BHMRkaKL7mve",
  "key27": "5junwcbpXN6JMT4fRL9yiTRmw31LMmDsPaD4DpaHuq9pch9xABg38196EC21SZz323nGK2tkKXLcoX4dLQYhWHWE",
  "key28": "28UXCbBxo1yu4s6B4ysMATfh6UxFzt8Wd7aDcTMgPd6JFt9MXM7s9vSkPLiTubGDsHi5DF2ogL1gEkmEqjizD4wD",
  "key29": "4nnRuoCLevMGWsLkCA5PVVoCuW1zVdyeGj9dqJ5JEfMKZHU1iSeV2jVVbgbkL16YexHfeNDYH4J6Lmk6nB49eJQJ",
  "key30": "DySSNz2dLkvCxQf2yZAaTnHPKtrW3aDGChtqBxXPh2Vak8EaWTfMRoKxCWjmKNPYCs4iGwv7CAUnEtrVPj5QK7P",
  "key31": "4f7ogDRaW17Rpc2hGi5XSmzAZAQ6eAzMJamgKKUhfEW6hk4F7tWzEA4ja6z9NgqYk4yDRpgLozv1tBZikNAvKY1h"
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
