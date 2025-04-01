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
    "2RbJbH4yvKMMyki3LQA6vUad2ZiSjZKF1n8Hyx7vm5bnnmZggH7fnGnU8FDW3SUWRBTKwqKnLLW8FZKZAHsc24eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4TwyEeasnHsE61D8yLEuzNWuYuX1sp3MAh3JiAiS9KKdERznJM26zHdPGXA6p6cUXKPLX3ufkdcyEV8HxLkHC9",
  "key1": "5kU7PmxWphTm6Kd4tfkVMk4PzrHQgrjTJgJs5ZQGkh1cULdo146J1BtCrLh5pNXypkgGXRjwduGyA1vXjaRXVnyF",
  "key2": "3JrLSR9qUm3qXputGtS9FeGMRdHiMXZdnTr5VZT8m6BbQs7rYuUAY1m6SmmULZ7KHgUZUz913sUTW6x2VPZaf5Ye",
  "key3": "3rZQ2mdM7VdZmT1HigMq1oshkXGpHxnBLHNwyM9EiuQq5f6JMSNTP3ukwS2rv1kjDrbcTZuCQz3MPRs35A7TMvKo",
  "key4": "67DpTiFqbre87NkZiCzbwsrR2B8tBKkbQKQQoFX2n6yC51eZpqt7ANxE8L5dKWcyEy2D2icHK7MPKoBsp1P2PHpJ",
  "key5": "4K9QqtF5GJFDYQrSucLrgsLJ7F3mn6EySPvEf4yoz2aua5RFRJUo8wfhnVWtYN3QpQLen2PDC9PLCEWGodNf5Kvk",
  "key6": "3yB1iHs3zjXf7k7gf5hcu416ekfAAF8eyzWTpXdereMx3c8vMuGTRvmJbEh9yUD4h72UPjAK6krFf9gZFcTpbqy3",
  "key7": "2MzjHyq9uEum1Zg6G7deYoi5GN17c55swToJRsin4mznFDGBx9jJTdPFebzRzNGQMB5bft6Jpz1bTYs5oY2M4iKN",
  "key8": "3okGQCvHsgZCYxp44eLRxKwCtfGoH4wUJNDeCBHoNYSpcNXruXYEU4VTuMQCW95bSNTtcRPDAwM2jeCC9uNSKTFr",
  "key9": "S5NoXHx1wPvH7ku6TtwkneJpJ5iDtaY1GpEBU47kf8HEKo9vK5tvJ73q7B1FZZ6YGKjkd6MkFyNV2PyrM34ySKQ",
  "key10": "5Zh2EdT95RYLas1UtvoM34jqX5GoXDKWDSPCvVZxrYKSbo7nPgJH4ijTk4GQwPQW4izDSogNJtrVLcFTMbJxVALZ",
  "key11": "4Fpigfp5A8pKr8tUUhXbgoeJPwY9pJtWqHs8Z18A22oCdSZm42kTCCcXFpQ1xmoWS9DumMBmAB6Fat7vi4YVrpGN",
  "key12": "2148FHWMsoex5RBGwxjETPqNuCCPaoZo1JyvRjCpLcccc2G43grjz6uUg4FoZEaVqL9cWE1ZU1KTKP9TmkCX91MK",
  "key13": "4NSbqH1nn13Fdg7EpgLmQ6ubyeEL3S9vpW14jSqNsa7Vcbv5JADwtxbZLrUstx2SZHVKEPZG4y1gvBycYgncNgp4",
  "key14": "67LNdSQ4K2yNecfWEH6iiayN5dodh5gJcW52pXft3s5YYN6CBjaAD4jHWTZcDVkG1NPmiEpEbVD8GiC5ks1mRSPL",
  "key15": "jzJovLdNiZjQ59QAgEu3Hka6yWiacsKUN3QVVRwM5NwH84jTekBiLXkvvMeSWXxuiQztJX7Zo9mGqn8AMr7eMk7",
  "key16": "QNZ2JwBHdbzanuPfhACYQ2MtjXK1jLTiotH18DqH4YpT8GsAEMoovAGR9AQ8PJr8UqyA6mmYWFVvWKd9j7rNtrK",
  "key17": "wtFA3VdnhTD4SSU2tqUBH6qasLo6oKP96ibJskPoZk16XmiDJkS3guyhiVrVWBP8RzDcCtPpr4mT22thznekaHP",
  "key18": "4RmMBNfgVU6cfbpbLa5cEDHfCW8PKptzmsSZDfHaMgqt1S9qaJABuD3hvMqAUdzMAmdCvtrqLXDEUKyXodjkhUFZ",
  "key19": "5dqaLz14N8bw8Y7jW4Asd12ZtbscNTX1CPsZbTydDtXjHYeNJSUsQnzbvujKWNdM4a7Gvbg8Cmz34rEXCmKYU5vh",
  "key20": "2rvinsPGuZSLRM8DU6YHZJKG3HoYEV4AueHJ3QdPS7NGNbhdzLZgzcYkNMJJZkXwmz1pqeUZbTy5ZpzifRQxZYbL",
  "key21": "2FYZYP6AQsVFLmUCswzBkXW3ohKw29AG5dAwqfjjbZntoTJ6hBs5JAbgBbn5CThxfpB1MYcJLqF7NESHiuRouZE8",
  "key22": "2LCjejyuhT8F6WSxmDHusNFoTiK1uZxTwouX9zxkD4XWfkGfvJjPNhYXE9oKjUrnPRqsZ5fMSuQC3pkka457Tpir",
  "key23": "4y7mekxjxXaPJ3j2anBSiCuxBXZyKVt3SJ5BWmonQh1BxZkueKBWgqk3jzQSJYQVvpRs9MFE2X5gqdj22M7GG7Rp",
  "key24": "2qgCSgm7rQH4Cpt6vkofGyfreCVbq1S1n8sH9BLySeXfssS7DodK18EcZzRjZVAe39dtuwUKKu6MJaoXL6GiYKsS",
  "key25": "3huou58xrSm29uk6niNJZsduTRKXtXxxzpLKeieseACPVUfpX5fr9U6o3tp8DacL5yRcjR3W9JEadFNjNsjSKKTJ",
  "key26": "47ZNhi4HA5AqmS1SS8NS6D1r8ouEBMsYhQaJfWw7J6dXZT3zBwvY49iz4uUKnERK7nvHLpYa6LkmoFex2sDRpLKp",
  "key27": "3NAwVeoVuLj3WrzsWQsRHWSv2Ebg6djbVrqyajmeQ6vj7j6gJh2EmPMkQxK4Q4pJU6Ciou4uL2BknKxaoZwjngAF",
  "key28": "TW3EKJxvjjEt61kM89eExXJs3x1k5w7MBwUxZJwzrtkmuf3iuRwcq2UtnhLHY4uVsFTEgfUrxeeixUJHWQMhNpT",
  "key29": "46A9Rj16EqP9xTMA3NYe1CpWg1PrjUYGJBibYZxwJ2zCsnoxUp4b1pFMeueAaX4FfTgqpugnKFxzZV5kzCVNPVZs",
  "key30": "4uYZKMHLVYvTSGmuRsgHv8uS82yewSNeWUtuF6eXgqFuaC2z588vXpsmzjyWr4SCmrW29Lykg7tqFKWhkiykq4bP",
  "key31": "5Gtvy8SWmeBTNbbGgpHB2LUEQEjTgnoCWKnxuYnYsELffSo6uWkqhy6GNEHjkCTEHp81jWbvrzqbfYP1NGBE8Quf",
  "key32": "5Q7BDPmHpptfsULN5U4FatyuTtgPSZhCXibSGcBCSa9GUiqjWWYN93hyP5xsZNeyHtiz3WevR1w6LokpNqZYjE4B",
  "key33": "67h6n2qnH28hhPvJC1Q5Kvm6zwyKW4NznGhktkPW8mhogLPBRAxVasi1RJ4f5DqyhUti8h5sBwWJZdU7xQkqks1U"
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
