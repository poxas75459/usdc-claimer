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
    "3QwKv9hL7pPxiYGY5o18ovy4Yy5gNtrGTq2zuPR8BJqKHkoJ56XFwaMbEHMVrcJ5uiB5LKg7WYzCiJTy5pemniX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMJ3zc5XcgeyehumvVTn73KULE88Dmh4xibcuDR6T8p1PSmq3iVP5jf6Kfy2ccGG8wgj1JpDEs5P11KMi13bAFr",
  "key1": "o9zVrzEoaZAEGC8mbGawycA6YAe8EnJTwVspPNVc7vtNZzyrqrpd9bh9Uj5jmzxpSMeDEyUFsBxBLr8e5BFugJi",
  "key2": "t3wzrSP2GacHjX8c3QfBQFDdRzKLhrr1qzsGKoFdJDQEPh1DaHhgQoNz1uVwEPqM1R5dowV3KA4Kqsn8JHUL4Qj",
  "key3": "293RBYPeUH5yo4qVBvpvHUQ1GF5snsqoX6gjxW1ghaXrhK2DBDek3XwGEAA1hb6TDoi3WvXbkjAQSQVCa4xpwn3C",
  "key4": "3ypfBCvLgx6nQCjVwWXW1RN4VnNQ5GNW3xvCziQFaF4gUBjUZ6mdzUgWEBszWLSDNYbGeTPB28yCNgdcP9wCj8yY",
  "key5": "2jT2ydumpT7dHvXkFzQztXtfCxoCz79mj8n56dEapD9WxKKLhWhrWr1rkTtDdqYFLgUctJgdf4dM3cwUEMUmJkCn",
  "key6": "A24kEQA8P2hMg1UeBz3APM3rNpCNUQD7FgLEzDZY97dxBJw4GwPqvRZpL7FQythPTVWcD72fWEr7ugQcjR1vPg1",
  "key7": "5eFTGo1uhanRJQmc63y83mh2TTQ2ShBL1DWqtnN73m3voAgepKs3JQJpCPW4fLYufutwJzvv8wZdu7g4HwuS2ib8",
  "key8": "5z8nCMS8xhetzE2b9EwrCwaymC2FVPQfWH2YzathESJtnFuJmztLCCKd1wWFkFrp2dVsR93ZJrJbPJbF87M16fDD",
  "key9": "4vX9gB9DjLmf8o4VAkqW5bCMuwrwSJnVq11oKGKZxBvpG3Y4vvETcTmy8rxUj1Mf3aHr4frG5Kdxyy6QGSqjo7Ek",
  "key10": "27eArUzqcwqQo2NuJYVk3drqQ7DDYET1RNaZ5v8E8bFA9UxYHwb38XzicZcvKDzPEt1zrkCAkFxsGVdVU4Symcwo",
  "key11": "S6PqYCUSoAKbc8XrvaV9V8yCLZftthj959qwta24rHFqbbTQwbSEcMM4Bi2pL5WEiHCaqHzmBX3rCv9Z23W5yxS",
  "key12": "2h1nbpFvHZ9riLXVwtXkDbRiQSJj3ZKZbgdkzYaQBojWFuMmPYyXKF6XYXBHeEZj47PX9wbocwCjaCG3TmkLPj4g",
  "key13": "WT2P692otL1hmezFXdY4rHYxVAXNznA6H7S75CwgYxYjx14wiBt4iZEHTSsyQBerNcNCAqF9XdmHAH29kxfcJ92",
  "key14": "5jPJWgfnj2MkvLweUriumqd5Nkzjars2LU41P6MyurrfKUKUtDQag5MGDTk1ceCNvP9BoB8ArHDyv6dwmCFsswho",
  "key15": "33LUERGTxY1K8b4iW3jbJp9sYdNf4J1CbcVhFGHi71rNwJ9h8UY7BHg8SSecVH66HpU7uVUD9BwpZiAf4dmeQSEo",
  "key16": "5JwJGQF8fFSF6rSyesWw8ueMhkRgfTv8FpFjuXRfZoHVDUC3w2bGCrjK6fnze8yhHY4TRxrDr4CSyWJvKT7BqvD4",
  "key17": "2CnChh2qz3sGK5BisjkjYq46DbACqWdG7u7wSTm6fHrtNS6jMW7YFS893bNDhHUepCZH3BgWvrqLZHjZTLxMQetA",
  "key18": "FKyT2Nq5GDVyP7KEhPFsbDiJDaXpVsuwiyB8GTUtGBP1vPxgUaxfjCS8pkQVNWQPSSpJxCjRfSP6PSNQKnnH3wa",
  "key19": "4THUzpjpA2C85ApNAiXyGKEbL7XnUdMre2CDqixRLq2eQxHTwh1CLCL44UvgikGZM1fxEuHpvsdUyCH6L35Nk4WN",
  "key20": "2c82bfPQWcrf2gvrkt4gCYhkFwoqQuRQ6MSrCWJ8tj9sDobC4VrcdSZt7p9kBBUjWXq3JfqLeUnxyzNnm7GL7Y42",
  "key21": "4y1twjst9Atk5bRZrrVp3xAfyp3vg62Pj7VuTymewMzdbQSD976CUFLH4y9L3hPy4Xq87S8HAAMyuoUNKqBxx4mG",
  "key22": "5biaKSUrHNHDBh1BDbpQgSjPUHuPcPU7T1EfK3A6wPGza3eALz2KV35D9sAhW7CZA3QbWrMCnFo1J4YpSgzzZtat",
  "key23": "5HEjer2L3qESMsWU35fbxKum7obG5she6GQRyZrckX6tUynXPc7b19r61h9XeyJkSHBYYkGNbKkxoKVXH6uHcVvA",
  "key24": "p9n5XPQy6siJFeLu7qweLciBswQqNchbRoyAdqLsYPRc6y1P7LBaWNLzTuDyxJLJoEJCCsZNusiBGrPmiFrwwPB",
  "key25": "WD19WvaJepTbrZ9JrbTGYxYcvfuc4WyKWqMTMDwFJgHyGAugKg6zb6zW941ZpAiaKe9W85xFU1wVLzxEEuF7EPX",
  "key26": "3dQTFWfHABxrbYyqH7hSDBj5CvKUNtEizZZSpas4Sr3eARqmeXLSYMnawemk5Yk7Y7h6gtQ5RH9WfGbDfrVk65G6",
  "key27": "5BCu7iEgtyAgSUU81rNf8vLi1WwjNBAX3obD3iq7UgZ8SD96wQ5TC2H8k9cKy8i48gbevG7bQXz6qfsYjSBRudZL",
  "key28": "3eFNJ2SHwjNJjo8Zu5UZZtETMF9NMQS1nZa4FQYSshaGJMuqYdTBWJcm3N5fGg2Vz2ZmCCttE2vKw681y7izf1vs",
  "key29": "sPvNr1JZEaS6umidy6pRj2FBgBBbqWH45xpzYcoLDfBKU8PLdn7fZpqfnKUp4uVbwKVsh6CFQj1MdPC8BS5xb3u",
  "key30": "tnHpZfUh9C1pqBREuPSBbzPQjDmT9X2PamqNDGukhSKsBohvGuP2QRGfC3Fxr3s3R7aoUssDXJagTWiCzYHdMtw",
  "key31": "2YTY5ooDaEjkaTAHCTn1rsQHNqazyji7TVKTeSmTifLj51djJQ1SjGjuKpTgqeBYbvkyBU1tYVwXjjBxyxe92RaK",
  "key32": "3gRGobP1J3v4Yp8p3T1AacHwPgUuq8xo3TPoYVgaqTV32ww9AMD6DbuG87kHWjnn3y6BWSem1Pi31yYwZukpWBks",
  "key33": "4Z84U6apcRGL1Kssiaw21X4YDmReukCRAGnNP3xYmkXGbDM43ev8528rpRuqY2VdWc2SKSPZGnkYJdGvLQhbWGCu",
  "key34": "5m17yNpA3x9oXqgVvtdLPPu8t3SyKdpVNaUX3szZeCLxwMbNrydC5JcJ2nYXP91sVaUByG5jYFzb2q1zc1Bv36dx",
  "key35": "3Bzq1B5esQEvdKAUmo8QRGZuC8JHfP8Y5g7aEE1igPRX9ry8Dww3NNqz9pyDiHaaEKs8HMdm5DvRWXEd5YuAbon4",
  "key36": "X4GYzJyFJUQWQ7HnUHYX5Tixx2NPhMqmhtW8vWAdrJ3KzRMCfaFQdBLfrUbpy85ANjgDjKHove5JQzRyi9sD9sL",
  "key37": "2oEZSb62ZYFqZCCqCJ7AVsiz5n9dtK6AYtNVNHwSQYKhoAUxDaYYMcFyGgwa3jZeF3jqiW3V2K5QhdWxzDuCQJHp",
  "key38": "3MyrHWaVeTWV3UzK1vGmLcuwmf7PniYFCHpP6xe8MgKSRRLw9EPVecdfYVqU4rbNxTXWkospV7QNfbG4CuJ9baiN",
  "key39": "4WBThyd4yFiE7TB2Df76Xy1inbkAF52ZuaYiYbuWMspffgCU6xWpdizUByZP5XQg3VsqKxsPyQFtkyGDgXZNPG82"
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
