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
    "5hhQwW7c2iMuyT4JF7urYw8KPS7uWTa8y9r3AJ773AoSqiJ2qJSyfSbxsGQnoVBKfHCo21AnBQoBGkYQnbvTBqEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muKCdDDLeumeeVNWAHNWcDfM2yXUgjXe2AevqFX2NqAwDfeaJvL2aTrzh63yDEPcr2UBTCYPPgHxUuXQBoxuWRD",
  "key1": "NvmcRWsPow41vuRGs6amYpSgUQePct9b1eMfJwZJ3EiAFaFoug1uyf8XRekZhwSLvy8LNJ1bR6g31FNLKvnRP8S",
  "key2": "43pM63BwmMUZchQTY8FBsVwv8huXgdktzXxTMZ1HVGjtxpMa4FgJNWZcnQad7yZLbbjsa6idNDMEZJBBfp69R3Ja",
  "key3": "AHLa9LZEYyTfdM1ZZQv1gLavARBws8HMuBiTt8TTp96BUQ7nnVYF5yDgLYcHy7bfxmqrS9Zq6QTgij71zK2Tqe5",
  "key4": "BukNSccrU3a9WpoF8y3WnrEkyySduSzSVU6R8ZkcTsRmBgvKgUygSScFNViN1jcgMLXokhL8hLsfuWNeS92Qu4Y",
  "key5": "3Navgb6s7oKw5iZc4RNPPBqn52M4EAGh6na6aC2QB1fvK1WoDWSg2WFdzNt1X7h4AR2KkymGDRHH1hNLDAKQFB53",
  "key6": "678u1ByEkNY7XBf7VNYydBuX6gB4w4v3qLd1nBYLrw8yHJcBvMHibQ7K3odpyJbqBN7Piz4rQixxBzzJECqVPUjW",
  "key7": "2kfqrghCHWPbQL72bwW5ix5HFsJnpzhgWsppm5KYXT7C1TM49eudPUHVXV4jWBydeWsFpL5dUpKdhogRqnGgDbix",
  "key8": "3y51B4pkmBccxuaRhYvuqZAEQwvmzHEBA3Nr3qFFb5FNJSc9j1XqVoS2JCPFqXUcTtTkRVtJXk7eiw1YaCj14SeF",
  "key9": "55nnygkFM7LyKZZd4ETpkuwTbcQiruUp5DiU2v1VUbJbUb4CgNiWJT7oySKNKiiw4mWWRxJDiUbzj1jgUoTw5a73",
  "key10": "2PvMbcA3txFa1kdrMrJ9oJ7ub8X83tB9GYY7c8xGwm19RynTrAETQC3mamBC3fCHbdMGM8UvTgNZLVqxbKYeNuzh",
  "key11": "4yqKKvqQMSxF9s8yMhUZuBxoFsXPNCsKws7NWXAGr4CenStL8WwFEBwRWjBGmUVikznXdL97EPSJ1t2U4BRfCMSY",
  "key12": "3bo3ZcmXhNfmp2njyVoqF7kZTb5bEJcd2oDsChckXE5HKuoQNczij3dvQDpEWV8kqvuMV8yfZZU9eVayZNWMrBt1",
  "key13": "5qrcqdkNN3cYLECKzzUanNydWJa83eVbniQCvJWMwESs5gucNprd5SUGQYk6sGBY8F6vsrn8b3ZexedUyRTDPGDX",
  "key14": "5PsBrbxbqSEFPjdMXKu6cP7ot4zjcpVm6Ko7Q9QLgTR5FRPnucu8eWBnFnxPRr6Mu5wbd82wJEN8qmC1KrakELuu",
  "key15": "yfLTqekM5AY47htdyyKAvxirXCt56mh8rHEEgHbv8DVb81h7UpKS17mV7XXyz4ravQqMaXw1MxAJZhf259D5iwf",
  "key16": "5Sc8xiVeV2epjEoTT1j5ChDsLGn6NpyhSMU7xuKouAxALkPLgcjWrig9bJfdQSZCLf4RXTxngfWR4DVJmU15ivdv",
  "key17": "2JWXtqrLpuV9EdVzBU7qc1h4pVAx4FfbNwuGipsez6SmJMJMyAbwjGjh8yarNuBiNHCc2dujmkEzMCd3zPjtJcuz",
  "key18": "4CxiJsM7z95Q4QhxZB8LqBVVrbsBQJPG1royup1GeG8eXauDpscqTwUNyTq9sowSwXUx5AnckMzsTjCkNASDBWdN",
  "key19": "4TnMUvYy7LAo6iAanK2QUEuLDkeR2QK9FqqiMp5SFbV9Gzvh9dQWMHJKiw9HoTDZtDavFVFnziwzQ72G9TnR9jWg",
  "key20": "3ebX4331V2r6d3dtfPWxZiybTrxs8EGxj6GjAywtqBkVxdB4UV4gutrQBSKGmedh3vSJEfcEWHKGZMQZ85mfb6Rs",
  "key21": "3EmTyoKTZmVdydnAty84Z8iGFGQrTmUyHLcJLqj8WPNs4N4VZcQxkKRrNzsoNCutnUWGeMEyvHm7iCzvKSw8KMTj",
  "key22": "RpC9tMBPCfggptSv7nhYqH6CUFmm1JkkrBWeuLjEZeaMZzqRfJhadhvempiaAguJ4GjGMYEcUrgyArawxkYpj2g",
  "key23": "3TVqFXM4CscaJkVLGsNwLSzBc7KtPS41RUw5HVL5NkAtPoy2UBs7A2N6qpJnXEC6651updMtA6MKvE2avuoCPJcT",
  "key24": "3SuuPckboLvQsyxzbMnzusmC2s2RrdDro3c4Kr4PHpgoMWjUpFdnL7GAHWAXkGqoKiW2dW1Qpr4bqxVuaPKBpBa6",
  "key25": "5JJvrZE1s4W4eimeqrVyF62pDA34wg7VmxpTRRcJQQKtWS5gyMWAwyhbBv8WtTR9aWpbJVRfBZkjS5XyEpLi9vBz",
  "key26": "2KtQdJfBbkVyQH69zXJfGNCHkECWELcNnKm3EU9F7UEeYkoB6a2vzErsU4bCyQVPXMwc18b3yNtYEaCCuDQqSaSU",
  "key27": "4cucKJPqQHzHgePhSJqmhakNEAu6HJygtaw7xkxYGZDytBMbVxh1h78YScqVmCMVpXENXZnNc5RX3vLLHz8xLbBk",
  "key28": "37G6o8GTdvGJQf4wv8141t8BJJu6sz4odKoKvbhoLxkm1uxN1yEsvnYr2AsT9S4NVMpH7VUjRbih4oLoUjUUQQ62",
  "key29": "Jzc1bjBPbrNtsdJcMy5tuA61B7hKdNVZdHT7cmEXLJMb4uyW9csg9HyySaeQvjio2fSb9FJyEjQiQ2oGkYWvAVM",
  "key30": "4AQRKUjQ9gaRQNj8EKPbYbWjpmvbBChrWnHb3eEYjQsz6jHajXMDhSPAqrxMUC86dr2BfgdKBjALpB84WECA3qSy",
  "key31": "eGK8tzBgJrwz4iyaAayq2bpRJSQrL1yFkBPU2TX8bj5zVW6BXBhbZTJuskp5cyiiPgAJ6g5rT8s4MUgQqKykhrH",
  "key32": "3788Mu9WDYgRc9f5Z18sSsiSd53mocEyUvK5EbBu4xW5jFmy911xaYKNjits8M7DnaFFW8nyY257xU4YVU3fmJhf",
  "key33": "4iGsyQGnQUbv1u4bmrfThrVxZmiGqkpXA7r4iCigZTWmrZdBmwHsVzYJY4t7Fwr63x7dYohH4NYxMrjvzDaFRmw4",
  "key34": "5q8yKkb3TNC3HkCqcXMGm4eh15Kn5g4dWdXh41wjHgCxCAkVcs9JJWCngnURUpby7tYxDiyp3XProuJccHed8Pm6"
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
