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
    "3qZK9fHK1qR5XDqv9Rf4Y2jVUrLxDHW2eiRgmz3yFkKg6KXThf7zwyAvxGmwQxm1f7heqfD7tFWdbxqt87pzsz8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqxQydyNchv4XCqmfEyDWQtYnzBH8C8eTZdNBkc5QHT3X6gzsVCFZEn1s4ZSiMPj8EXXuPVoFGmzui8nRKcJtY1",
  "key1": "4A9xykAAHBYa6aXpbdb8tMBpczBmZGSgqxrBBzVNSSLByotdrpaMa4eP6buSGwmGaqU1HFmfbYjy5WE2HbWKB8aS",
  "key2": "41yMGDT5TjjLNopyVPDcysDZ5dYNvcbK5kCFoWY3DcgV6YmaKB3MN4BFU6iLHBf2Y654tS2qPvruszdiHx5oVQfR",
  "key3": "2L5oDTEqCyJ5wSwTJajcVTUZhQdh4DiTsZCquuYZW3NP2ErUNASNKBcXqG3Gr9bq2jD9c3agdsuP3PuLttvvhRyC",
  "key4": "7to8zy1XZQ3fVJqYkDARAxRr8q59UB38bEiyirsxhnaPCkyXJJDkuaMncPpLdqWaswos5QuZuQyzD2fofvMtShn",
  "key5": "2z6X7ZhaoeqQ6WYAzr6naNg4tVqetHPi3SQ4Et7PDowBpMubwbAnVJTZChvQXbKEynyrT364nwLC4uvHS4JdiLhB",
  "key6": "4HQZLD2Fqamdq3aPGU2U6Rx8YsdTjLiQDhxfqrd2Ma1PcRnHA56NwkSknS2ZRnaDi8sxgumXPcpFsiUX5aBWnq9Z",
  "key7": "4iDbUh8fmn7HKPvXH9YLi9qMcPU8Yhv9Tjwvamf65gPBrGU6ryxYerURgAV2Kx5hLsN1uEmYXowuNMckYrmkdUgG",
  "key8": "21RDY7qgKvXicYi2QJpJ4hButMvbqTGfPucP5v345p1oNdEq4BoCvfq9jVECxrTdGMBAisArQ7K8YAPQxrJGV2Sd",
  "key9": "64hSoq2Gtb5UzbJmYUHZV4m8L5MnXUymPBVgqMbJXTEdStmWJ3KRkyiN9qDtfz3FEwyy2pSBp4RheHLWLXw1xhed",
  "key10": "d7qDEX2pVVkBvpHoLLtEDAuSBxCmSbd1iKjpiP2anN7QrHjKZiNMg2acDU1hzR4u8yT7va1nNJoPiFhw3GU68Vn",
  "key11": "wht2tAVNSok8fSaq9bJo6txFgVYuEG2QF2WctQ5wGrrmLkRE2PX1TZyrWVJxzzSHVcAyNKraguPVKsk1BCy9CAM",
  "key12": "2xweY5coG3oF75maWh1RKb1kZK1iDiw3YCoKdCnDrGMou9bxEZd5Cmy7g257iXj9eALAgCkJT4ozJaA4jPzSw5Ma",
  "key13": "28nw8Z2ACN9hgjt8UyjQhu4AxXbiQMiY7U811QpsQFT6NJJRrgdFTzwYk4Me2bphDkAcFvc3EepamcBLrDUexMzc",
  "key14": "2RTU2qWXGwsq7ejnAbhxQSHgvCEWWNezhN9XwUHCXDuCtrU4pN5jDaY1dkMXv9QyFxeFzqgA1Q8ZPiZQPC9rDYaS",
  "key15": "5yHbWwLSP4RE2yLxd1aP5FocmmieLEBGtpAechrU4f9vtbuf5WBMhWVqfmAPVwMjszNECTGN4t3V2joCLBN2mJPx",
  "key16": "4phCeisEaroeSb4ZNGNdabo3xCL6WLYKeuvQhxRa31pkciV1kM7X2XJtSxQSK8mfEQWq6qfdPXGuXa7yfhL5goBs",
  "key17": "585ZD2jUjaQNfNJ37YeNa3Gs9VH19RM6hmXVdFNGgBeb862aBmfpM372iXiSBVa2z22prQun6HDzVk5Za8vfNMYF",
  "key18": "2Vni1zhy92yg6rPiLF9Y6odJ4Pg9xxCmbwqr6hXupfY7kBRKoPeioeeW7riA8N2AtUmP8HvZ7DGy7PGTHy3zuvhn",
  "key19": "3q8Kqqm92ME8nrEx58THTYYZPwTkcJ9BrUqfbo5W2aehGebgmPGEgDjptCGizX66uBVc1VxXaEiXQCtUiesvb5VW",
  "key20": "2AQG8e6JUkvTJt3TUkJ8eN3uCfU6iQ3tiHpUTN4z5M4YvgjWfb78gB9iBC7v68WYRyoMpwM7wTT8GnaG1mmLWFHh",
  "key21": "48VQyRLJGATJ4fUEvceUSvwJTkjQ6BiaXv4dy5qij3CtX25rueaNNDfah3NAG7b8bNQ2CrXHyRrxbVpi21x4L93d",
  "key22": "5AKhhXxNYRGH2mDwWe8cyQgPLPry4TN8WYvz7TTAtob3LZx5m2DoE32BufShDYQhXb2Rux7LRpB8xtYGGyW1KnJY",
  "key23": "5GmuNbqgZ19U6tCENf8TK4CCKJU5tM1wbQMpcJdk2w3y4EPNxB8WcpmF3rZ7z9L9tWh8HruAQi41RYdvtaQZAVLr",
  "key24": "5iT5nsYJ8u68jmF9KpcCwYxcDsxEWzgJhoi6B5AsQUBEZUTbfZc1QsUR7s46J7XLyYhy3vzUMwbkn6GjB3GRKiQg",
  "key25": "4tHMNJy4B5fNdFwv7vn8FKmwatMYTUsyQMq4sU6FY11D6JQ81iQymEVLQeV3vQTMpf4NmTxABMy5BFQHjQxJnMCj",
  "key26": "2HyjHCyrkd8zME2RN6ndjGYJVJEaptDF1ZAF5pcZaSg15YvR9edxRJmGQPRYuub4VMP9ojuemGGuhybnZZ74HbH"
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
