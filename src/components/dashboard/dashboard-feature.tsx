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
    "22N6WiiXpqzTiuTQ9HgXFMwfj2vpkugKx9SQCwTmLvjSJHifpxZNWgpJHLDokeLXGhm9xEamNVY1M6yrNAsaZj99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234knBjby1muwxF1k55bi5Kb6g74o2X3Bsr5aYGmfVxEn66DSyKEqZiWdCCuoE9obhrVimL5EYNN8QyxCU4ii3ou",
  "key1": "5ctiwqMoru5cfukuBZ97jjiC7dSfRjvkmFLa4FmKfKgkmJvQiUeK6jC5VkwRU23eqYsYVzVKRxX4TtmM3d3WBGM9",
  "key2": "bMQ8XWBqch5dSKrQWyx5nVkiEmhqrNXR6c2ZcGKmi3dq99gDHisLJTJZkAr1HKuDnnzhUp3KTp7sZGcuZa3X1Tv",
  "key3": "3QV8NvDQNgBGs9oVwv9egH9J1VdDMK5xn7QCXKAhv6HVE53jMDHphCDDq1tiiooV9dzMpJnHftsYdv8CTMVH5Uxn",
  "key4": "5XVGTqigwrqpVW2qancvgpLaFYhwWAksHkQQJ9QjspMLhtSzQpUf9NF7k1XjZHt9o4VhDyXfdTSBEgxyC7QPwNSr",
  "key5": "3m8nQShX1n7fCUXpNfQ8Q8xGuuZcLDV3BNxYidLcYWGfK7nGq2ZYfdcz1H9U47WYrKTqJLEf2WViWycrKWUDLBiL",
  "key6": "3XE7J39UCkPXxpFeEAFQciPdJ9Yj176GHKmTgvgfW6PWbiXZUPBEt1cMaeJkyqLhY1p7hVNgRp9XUWWQpqVCA4n7",
  "key7": "K6uP4yxT1qJFAYLtkMqkiVCYicisSh4rH9N7HxRdatDx8eioGG3sM8M4J4vqXUsvBzyAHTVzZX24XF3zAHL86cK",
  "key8": "4ZMsnaDHK3HyUKhCgFUjsECMjUpUAb5w2gEgvcus8zYpNr3nd5YWAkVUyKh6F7wkceeY72Jq5KaQa6dL4BoKwMDv",
  "key9": "5uUYgX9ZUnXtVawxYhqzxgXPbkkMT3UzR2ZHn8HswYwc9TQ1LXR724T527UDDqP7TffoNgCqJCsVaY1S7UDyJE7a",
  "key10": "5QSsNShLM7TVwZVymeDe8uZqp4Lb8WGg3jjxKv7Kec2osJ1piMC3CMwMWVErWTya7jsa96wotXaFrp2QeKshWMLn",
  "key11": "681etrKQDDPaoXt1eeMqgSa1vYCJa7H4KpzM9FaocPucHaZm2qefafArmMFJGK7jABt8ciP7GR1ejqxtCdG8zNr",
  "key12": "3y5rKHpT9Uy8VH8Wf44usEvW6zH9t3TYEyr5y9PZjnKE6MLm12c5ff6AccxFJy2D8aPXpFeDopDy4NaBQeFQgh7i",
  "key13": "4UXzYJc4NrXRj49WNMJCihE9yLwkvxQi6C4w6igbnnKW5StzNC6bfLFqvycoDnPxb8unoG9swgHZ9vKqdxqNvbt9",
  "key14": "j1SuzwRH4uRnrmT5RRoYD6ZSGwJfRn2mASHnjdeqNDwxuBDadEhFRCnMeJoH5RwUMjbNBzaJGTYVuEyqVc8ThYo",
  "key15": "3tC8CyGrkUfPEpTe8wAZjgDSpJBXGQFAiokRmKGgRUNa5n5HJoV65aBSqXPisPVC2saKd3FZhTBbXfCZcgqatrz7",
  "key16": "e3ymupSyxV4ZQjC7MXJN5s8yc2Qr8VirfmSa7Apm3BmgYdFRse8eHBa5fonqapbNfQys2EFNwvbAF7MWKmZmkPC",
  "key17": "3Hft5QsjV36ux4nwuku12bvDkevo3FSZpPqmZcadP4d6Fjsz2e5NDvAnRnzV24JvnW1o9uU6BHScQKVhaVjRdCkw",
  "key18": "4gH5YDMLuDw2JCpmh9nFtPTuaFzGy1kXBZXEtnNSfhPwnj3KLhp5CdADi7HcKf6W58HmPa2nToFnhCQcog45vunr",
  "key19": "4kEhHgHth4SrbwjaxHcLxnocgaAntUwndm7fJqn3QGDxAg1ujefxmEkpQPtUXCenyN5zCCCFFPq1pkSws8XQiD1j",
  "key20": "31WNRQdWf133A6bTsDjLpvJsUdsMxiuR1Gqk3GovA5BFJdnTiNCaSJt8j1fhdFXcmtxpEVCxVq7fr2UtkzfaVErs",
  "key21": "2qrpdAaUCZ85eca1gycbm4jTckJVodk23Mg9mGo3BptsriSx9VEoQp8jYscY4syvYuoirJeWqH2kkqUR7gUaJcsb",
  "key22": "5r2faBvbTNwHWzP1WNRpQVrqsyTwsJwod4iZg5gZZaFzbusFXViVzwGacRaYhnKtDWXfkzeSRk3YKe42XLMtVxiE",
  "key23": "5Gncwha2RiLb2a4FSprcEE9MEzRtGEuMiFcKrd8WZ9GmnG6jKpBpMTKHkrzke5gTfb4HqHnyB51i4NLmaoy2yMxC",
  "key24": "5XrSkvsChCdN2HMMyfNTMF6rbJw3ruS2ZRXWNGBNgaUVGfJgu2jEZgUPzgG6QFVVzuCKizYX5rap7GQvMpQHFeE2",
  "key25": "sRwhdDA9Zhks6DHwPXtsTBUP3b4ZdruAaAkG51MSoXCanfRca4ovFxU2nX9bDea1Ytuhj617R6GBj35oqf4cAbh",
  "key26": "2M6Wo2fwkKeyFCzBWd1ut6axe2z8sjZFKutMpPjuKeYPYpTCNGiVfwePchxJ4oqxY7acVK8vxJpZgjWU9R1HfMUG",
  "key27": "5UHzgWJfGPvMHbNCpPqw9xjKds43RFAoiJhRCV3cmbkUYRCAnxKFHXZJ7sk3wMq2nse2ymqbNBhmjHcXpi7evDhb",
  "key28": "4VpPqPh61sJEKRZxupceSBdnJkEhBJVQCM7qs2fmATYN3aS57f45qRBkV4rkuhe6GcAnPMyqvwX2v3V6aE91ijJy",
  "key29": "53tWY9ckALWg7uQ5XUYS1rSs5WGqagaXTxrzPUbQhASjYAxpLALWaMahrN4PT1xrLScqMxSe4jEUXU2gs9Yq45c9",
  "key30": "3csoFk9bb6UCx43QkTA7xbcqrVfVpmbjEtqmxLw8YxszF3seFfLR2tu3WbixdS2vgJcFKPpGhxMGxEMrvuW3QwUv",
  "key31": "Z73mGM7WWoutMhHxRvbjzKACcmftGMhz4fXaKznovCR26MHjshmCCkFdBVUvC7V8URKaHwqv7Ywphz4q3yRny4P"
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
