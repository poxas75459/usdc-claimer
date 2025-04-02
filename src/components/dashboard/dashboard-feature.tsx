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
    "25V4DGnZXdSZfSkqmsQtE7DhUNvK3jAytpL7b4WTpHRbPToxMJnhmCEfYg5he9PsnWVTQLYUdSg5F9oHLgXHceVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vhH8TGXu4we4tQ7JquqQGBsY2sg9qhZAYe441zRozM2wVNKfM9Qkd9iLaNNyPVc4MSH6xvZAAz9a31ZiYhztWUr",
  "key1": "e3TRmibt9qurFo5HzNebpmtn1pY2nQq2UDwjhUj4Neq9cLaYvQD3sBASr8xKk9FJM1DXHPVgg8m7adyykprw6V6",
  "key2": "5XmCNBSgMFwaiApwJW9zTdgB5YhxRuEowZR84s2m5G85mwjRqnCUVurKFsNQ3npqteqsnKbM9ifah2V4BnscC44V",
  "key3": "2Sif8UNPn6bDJiaR23YcorB6zD1y9AQRLQGuu1L64nJZ89qtE88zWtq5r8NBYVufugP3eFFhNJUW4kTYgSDhGyH3",
  "key4": "2puruNVkXBnVAPB7o1Fiaf5n2nQk8nyAECFJ2ztzztU6CegkAoJf8d4Einr9hEdC9JLCZWDyyCfioxCL7bVn7HLn",
  "key5": "4ics2nh1jrySj3YwydQm572Fvdw6aJJkJkW9GmH6YGrY8qH49sokYi4c6oNKhHYDuNewTJFXH4QZdAqX26zk6E5J",
  "key6": "4Gjy24HnjZ61zDchfyUkRtitKgjfi1z54G7EPnDYk2UfveCmDEXBUagqr6Qk4k7Nf318H8w8tRp2sf6h8b3UUuyT",
  "key7": "3wB9SJmFUCzUTedJoSTSGgtzaubA8Jxstt7rXb8Xxna14rmKGmiAmWF5nxbmjW36eBin1fSkxofXWp96LSe1mrWb",
  "key8": "5tNrwy76MgPeMKfnj87DRQBFuKEXa2DzDdEA2cyMs3WgrvdoeYG2nHP456ssDW23zYDrv3yf8J8Cvr23xUba38bq",
  "key9": "hC2aA2XYobWEWZorWS7KemfHAy9k37p6y2521BNSwPFLbuvjTVcpafHCkX5gFqTZc5FTYP3nD1J5onCcBjCKyGH",
  "key10": "2Eh2C1nH9MspRcriW96v9gXPfHthGw3gYRkXbZ7RvNVQAH6PSGsNgJ9RKae8rviRhGhCdrUFAQLB1R8wDTqA9EgY",
  "key11": "4x1TFhRiHjHEejTL4CNHsT278iHA6Y5XdC1f4C4gGBq26GM8xuXQMjM9NB86HRh1yEJ2tjjePVq1XKtdBSxwQk9X",
  "key12": "4gBCct8hWgRjwjAF4AhPQfPV6gbiit3U6imw9aGdU8k8RgyBkFbNeU6vWVKWU2xiBVYfGXhT5kNRxMPQFtYpjVzq",
  "key13": "JYrqrRASsBHUz8eSGufEqfeCuUoqq6vR2w8JRcNtvBXWZRK3UiWEdv32fzjrZET9qq6zTPJ6RCFSmWwUyGmbVpb",
  "key14": "4zd8T1xysKrZQB2X2GbzVHxDgPhLNto3fQRsZQd4QyPezYZdZ7FQVpt1aXUh1pf1X4dK2fkPaBpVjAtTCr9QH17P",
  "key15": "5twcGbxhjFjyXFGfdsCT1YZQ3YXUFPVwbsdaCVDmYKzedTgwwsdoBAoSKYVyaLbioLUVFS9bhZv1Uce2ZYczYTXx",
  "key16": "5nED8cikynuNiYdZiqCYkgqsTFG6wj67WQ1X3paPPx95KyjfmdRc3PVf4vcPNKkWXwQpAjsARAyobDpdrfv26Y5H",
  "key17": "3Qkp1U28gzSvbmM8SjWzTSbmcFvrVrRtRm2PnytNsYqnMtFur5PCqeA3LZanNLJhogLWKMk5qNRs7LRj9qQqLZum",
  "key18": "5yVTT4tgpufqaEKGPC4Utkp1fhAPXUzpjnAEg6pAaLgVW9qM8tHopo5AM2WM5HNpAhKZfTW6wdP4S4u8LtJfoFHV",
  "key19": "5ihe5tP3gq2Fhb3P7mgNEjUe2gzESRtHafvkKPkRajDrti27ZD5zyZoUtcAiJ2jeGtXKBsuQfH7NnAc5K6zSYcyD",
  "key20": "3TPYKVhi558umK5zrWjtAk9jUF22Ma2kZhijConPtCggr4UWrGGa7BZeBvtdVj89BHDXaC4tkefuTo2s8LYFuZaN",
  "key21": "4aXxu4BYu1kSP7R4RjD2zUSpFGKxy5Z4Gq4KcnYaTfgsDs4Z45jhXJsnccEKLVjhFZypMA5Yz4b9xQAPJ4YjwRbp",
  "key22": "3RgZwxa7DT5jJgZz5R8GapKCwDxfT6Vuvrqrw5hZsriCV4FLxVht1zJgEEWkYe1Hk2Drvy2ggggRJVoXAtpP5H5j",
  "key23": "5uKqi1FKWe83v3isGwn9WDfFKQ3vuSAe7wAUpiYXNuqzLaczeMqpRkKeEC9msWTYTGZkju9aih6CCrbjJKUGx3dy",
  "key24": "4Q24qEDt74VULkSjRNqDqixa7XiRc1bWFPid6eMwuFBEJjite2NugJjYtsqj11F17Hdhrt3tQApByYSQtqX2Frus",
  "key25": "3dKbHWJQy7V6RbnJE4p8h8mtvzvxJJCqVLs6UYw5y6fNkrXwrqJpRTkXsVqX1DvebsXfvvJF6taHf8n6YcW5vEQx",
  "key26": "4aXUDkqjPfMV3V9gZkfonDEsj23c7o8gVQ26Q3H4cqZgAfmtZPdc8LjCfKohFY8PSL9LwSnEsvnJt1fx82MHc22m",
  "key27": "5GkBpHWUVM7QuQLHgpLkHzapHhBjkvm1cA2iZQ2dewXCF9eyckX7yxaAWdgALPk1djUswLFQxPYg8SpAS57w9dDV",
  "key28": "3MLNxukfNYwBzLHWYGJ6bYELMTRcqxLBGe1qD5edsqtZfDMvoesLjrVhkF4vnfTAxJZzZxN4fVopVPk3qWgwTXqY",
  "key29": "3GNm6otQiFgnMkXvQsdcsaV7f6F9XopQCy6hVehX39p8iXGHNJkFxcVSZXb1E2DKcFvVMYSzU8SLmLD2JAJvEa4b",
  "key30": "5SGHzNi8RgnhaUsN8Ht6cpdj7P6xGrqAsdZFoMhyC4DRf7MZCGJsDs64uwScxPEhC46Bajc2ydoaKg9p11N3m5ZQ",
  "key31": "zoj8n5iqYfgnzfFURZXzLjoi1JsPqCXiuVUU6EhNgJZ7tPQtDcL8ArZGqhhfdTuio3yhae783j5mhWznug9aix9",
  "key32": "5wKopPyAB3qz3m29Um5jTLzMorQ2vZRZBxQSiRR9eoezSt3JRfk7mdoSKUvf38ZXLTo7ERpgYWs36RrmRARKJPXH"
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
