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
    "54Kn6reKGTshJ5L1ErqzuHSqTu5Y7phvzxK1ZCCAffv3mQLbqKMT4QAihdPMeG641adp5srEY3HPxLFNcfx4WbZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZgv4cpaj7f9yMSDeGXWvcZSor3mB3bf6pHuQGzADoJWJgr54Gua2znVRQeELqzjzNhtRQ6r99uokAHaprVuPfY",
  "key1": "4z8vz3FLzR44dAWG81VVdRxajmXCeTw1c7QYRYN223VpBQP9u3aFNBDMkT5ffJ3fmWzk7BrAV4a9KenpEWhDamnb",
  "key2": "2sxpxS4xcmAuw3bicnPikN1wsRyeYxFX1PeAWiyxtMW7qPRd49WKVwhZ6s6cKwf5AaegGwEmnumD2y36LWihHiUk",
  "key3": "PCrGpBbEu61gFmnmhm3BA7rBPNFe6ANTJnMH4gqvaL8hyFqj6pqv2J3R82zcnvqNMUkqiMNoTVZgdvS7e11snbX",
  "key4": "4SJWGftEjwcrX8DiVnXWZYyi3pqcp5yLNevbfoM67PmkBkJmXBY4JQ2AHX1AsaF2PPEbNZxTb9mhkAcW7pqy8tug",
  "key5": "2i73XTMrJgKVP3kNtCXokKoBHxFkj83nNcmJRNtciny9yjJhMmGxcQUwivFEqzpxNd1iC6C1oyJsXTCLzbYMUuT7",
  "key6": "2FVpWa1XZDRg154fznsu7UbfN9cE64UipDUPFeBVq6i92nvCkyjQovn9a4pjwDq931mrt6U5EXMkNnfUFjp8i4FR",
  "key7": "32EWkeVLpJ9g4E6G5zH183Xcyyn5gGyTqmQE3vcfENNLyxbR8CzXo3Yq5E5s63EzMXrAMbgua94TZTS3YccuXUbq",
  "key8": "V2xdeWxAoh4TjkShxWFj3nbJYeASuPkaMvqjZRQKkXRrHXuEthjGYi9K7Qrdrcidb9jqozhuuLacMzHe3KNrRBY",
  "key9": "4qTbXKx6qrTR6ayZnwbmufwvUJfgCb4ocCZh2vbWuX9VkgNj38aNaXYUtA2M4C6b1tbjCEMykeYRiLBug95WhXeu",
  "key10": "3ZMQqxyboxpWxY51ST8KKZWrtXPovrEVPA6FZ6cmmzH6kfZJDpBqAvLpg62EXx2raNdbKz3jJBjAxwvbsR7qeVcg",
  "key11": "4dvGfsSYQGiCqo3a44o4k3e8msewVRP4Thr9Tef2aT7e1phjMHXsXGtnfiAPh8KoBy8hpXEzeUbPBqgyVD5LSKpK",
  "key12": "2f2uj5Auf28BgEqovoCvoetXZLaRZ4GGxBKNcw8YLfkDXqW4TPhLxBkfGtASU7gpMHw1cVKPwFmSmLtSikPPsTMZ",
  "key13": "3y341xE6ueKu7Ba92SsrrQDSxUtgRTfJzyNt86xJeSLn3keYv9kN5n1XxgTpv6khEEm5QWLwWrZwr9NYhPVR5jPv",
  "key14": "5mARVQePLKDq8z6hoYARFAEiFQzLUVw61LfuxVKx3e6JHxr6VDXwmGZ9XaSTxhH44ZoMmmYxgf5Q5Wctt6MVcJe8",
  "key15": "4yKeBpZXFmMadH3QsRab5Caavtjc8XXBFpjFLCRHxTWgVrjeZowLG1p4zjKqLrJKUPZGB43HcweUh1Cuy9KUBex",
  "key16": "bZo2Y8ZrAKSFssLzRNzZBNtNPtjjKQn1r8WfTdkGv2zwyY3qkmty3Mvt7ix9fgByNKhfQYQNqqFVB4tpXEJrXMx",
  "key17": "3Lz5H29DM7z7S7kL6FSN2ZraNFQd5tjsRaqnqPvmksiR1TMvsgJLZjKYXULFfV257hNH3gSYRoZdh6pax3LxbuYK",
  "key18": "58uo9gLapuiiHUytL2cfG6ER1QKk9FsWv8TjcBSpiRgB92owjGF7q9NL8N2zxEA3kt2EsQqtaGg1PnrHkKytnjYW",
  "key19": "23dqMgXoY5SpXGhz3CAvBsZPe9NPsWT7LinCS6a1MNPzHRpeJhYvkRbHRY2UzYpHBMhqrxeK2LQqRvxKsWW6d1JV",
  "key20": "5cYaWgbL5hqpYh5iySQe5NNCJMwx8VpKjUs2uYLuxNBh3kfPyr7AE1C76VmdZwMroQzd54r6xt78ajVmebQBzgs1",
  "key21": "5X2YhVD3b7T37UY5HsG6q8QHnPco6EqunoWYopFDo8bS4zUsGrj1i166ZRX1M3kELA4eMHS2WXB6gf1NrXgsoSaw",
  "key22": "4PX9TuSLphfR1w4uqQF3Uj921ezzTTMkXzwWwGt2kRn7KkXhA226HW1Zq7TqqSuJEurYpu4pv73MMM4BWDFYPWQ3",
  "key23": "65Sm11RaxSzmW8q9LxHybaMYDS5g97jXD1xVMyxPoFdcFWv7QmvZYzQ8KRo6eAFup3cBZ6vUTD4Q2SJgTGAAMsS5",
  "key24": "GHLzLYoEiNi2ohJzJNJSJf1CDTYYeSaTf2y6mtQsLfRQjLpBfxuHsDA5tLLCaXTivJMJVLWnYwrHUKG44XZgBGp",
  "key25": "4faXY7mUXywgvb7myBqaWKRGRcNoWXRPCdxjYGehSsU26QwkEaKRNoV7gKQ4EbagpvGvnyAApvYGrVwbBwZLkxXw",
  "key26": "aL7GZ8uW8yzErjUvhJBJHuJnTFFAtMoLv83KJCKrcVTTXR7CFVUiAHRTqPorWRmFG6gBKqunGpRxrRHeq4GPyYe",
  "key27": "3xSLoFvWRTw3RvHkGuQLaavp3GXNzoF5FCzzimzct473dWWdUZVhZjDXxSczhWYs4EvMgWGyf3JYGM7gHNCoisZT",
  "key28": "TEbqRr1c3gBaKpQs3rGCCzvhmNP8zTyjKCePz1Lr3R5DSX2uYhWBbpCDBpBMcRB5QbiCx5bcA4rMQ2v3F7DPeK5",
  "key29": "5TcdaC9npYioa2ADgCjDV3PoMvHuX2eHnfBbesRe9G4G6ALdrjLLAST73W6uPGXe5D2Lu6N3aq2G3edjC5mjokYE",
  "key30": "4cDNmqV5YVTJhX7xMQMGyd8PBZa7JdGZVXDMRoxDFJvsqtdihgePUQihJLYezxvDM37N76NKNFDJEpcUNYSJ6Jg6",
  "key31": "GhZU8WMNCs5C24cRLJa3Dz8F3um1TBNPVmsz5mrFmQKrrarvQje8y3cSgCfMeRBJCrkGbkTPhV61ReSwynEDqWa",
  "key32": "5fMyga3QuCaXWgyQkXf1PsdoDwRDCUQuzQXGFrHSFMd3jm2zjtxGEsLVgCpgarS9MCtqKBsoix1VaSux1Dn9B63t",
  "key33": "5LJaquXD12rh9W4wwaz5jp4LjH7mPoEHLL1f1iLgYSGwASGUZjSnqLUS6zgFXtqn2hbATR1FkfZNh2rGfphWUS4K"
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
