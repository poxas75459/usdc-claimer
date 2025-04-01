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
    "jeN8eeJHGn63RtGLXgHpguZRCTc5SJ3zMyW6eMuKyHJjHXdpo2W8gWEZSpTS9MWuFmjh94BjHe4piFyrtqfFkpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tqGauFFMfeUubJHpJRVerRjxAGmk4XqrCvYZxAFgtaEGTPHPSecwzHsMB7Ecu8DSyDmwguTEcTXwzMpGN3V9mE",
  "key1": "3Fu1yD1oMMSE4v4jNbCzgCNF81Lud5AUoFXLWYobcB6L7Kb8jU3Q87KjKCh3Faz6mAcagkozejR3gafFFZvSFCoX",
  "key2": "oDCssWbcKy7oMSvZ9SjPj2RNzThYbD8Rb9SmVk8zdELqZNEBpJjuEcmV1DJLU3qaqnbogHamBUXUJjroYg3g6TK",
  "key3": "4GiSsTYbiWx8xAJH1yBRGkpPaFn1rCMnRMkAg1cm1Nmfgxy9s7mTSxh9BaHgAHrUT5NNzkKtWAR2NmhmEWPU86z6",
  "key4": "dEA9NYe6V2dte5aQUmFZiLfQ3Y3phEG4PEqBpXu8cxHNtGFtbDV6yPtuGf43Qyk4QSuFQF1oRh4Ncye8EZxtKxP",
  "key5": "4dttMAeSUYrYomZTnAbZCd1dqmhgprXitKTtPNFX3Co2PMURNnmyUZk9Zqavo28pJzGKZ2neEjdKxYgWdfNTBX9u",
  "key6": "4xJYr63hPHLzuDCXbxigvom7UXbdHW3UDinjJxwXvWJtK44MmCRw8LscMFu5QZWLEGU5KXY1YgLBsFCPgLCXyYRm",
  "key7": "3LRNLYcEYwvWH22YoF4z1jJPcra9pDzWYpJCwXrzi6KRRiosTWj6v18CUKugirzabrVgXMJYmbrAHtq8wQkU8dCX",
  "key8": "3rv9g6kTF3FHLJCiLsxPZkpRf1QbCEcSmEqEbR7PEMQ6YyZ5jZSWX8eP9v7PJvewbEYhwdi2LNv8Aud5fMkyvXC6",
  "key9": "2PGuhrjXsiABPKgjHwkYZm9Y5Zh3xMabcjmNBmDUb6VCefQK96eUS93NHAN9TXkNFKa8gGhYaMiRAHxxTSffSq7Y",
  "key10": "5L5QyqjXx1qdnRBaFGH7eTcwL6UBFFMCY7YbtFU2bSxtm3aiiPpEjG5A5Kjveju1UBKPvHHddYTqKikSP8GSgy47",
  "key11": "4PrQn1y7iWpGQ4kBnu9Azu9Dq6YqCGKqHJWjG26JWA3UfryXagTXENGVve5MdFGbt83ciaS3LSWYb2s5YiqnPwGm",
  "key12": "3nCytk9w2MaKUqDgoGUoTvD74nchas2ezJY17LQLeJpLKhhANpV1Z1HhXir319oV4NU8bxAG258Eb1v3jUBRSQV8",
  "key13": "4CZUwBkGYabguxazs2jQvpVZN66DafxRPfrdsLUFxCLttxKbiTq9FWxrR5J23n7cUD4oeQLHKysmD6Ej3R8YYeZa",
  "key14": "3b8kJXXyTf3X7y4h9DJvnimRHkoxPohaho5v85JegAFX3P2aLKSxkbBRdd1yn58DZwg5aEU4RzEYmNVZBhefmwQ1",
  "key15": "2nQG2n5mBunZQg1gBQweEJTw3Wy8VS873tcnaEC95Gy2M6T5xWKsqisa4bFfZVsTqWSu39pK6H9yB7rR5hue3RU4",
  "key16": "2fEroZ8MSCGzHSCk2nNnoEANjZDjVhy2WVDeKRBoxhmZuaDdnSpG1ZYB3LPghCWsTFAqbovYDn3L7C15ghqezJoi",
  "key17": "5KNS8kgDtkCyxyMFDHib99uLdoavcFmqxu764jCBQeDhkjS1XvHCf5N7X54EH7YXuEBHm72hXmMBHTG1RRL6ap88",
  "key18": "59YYUo5kEBwACkXNtjXdEcffm16RmJDj66UuDqUz2UiPEsHyx2ck11JVPoLq3YjjsEAagY2RqodZsp31WnaB1Zur",
  "key19": "aPV1U7AGhKschSBwJ6DGTJJu51pjH5M53qPuj3yYAYbx3WCCeh7hqdQq7yygPRpr3BiJFSYD5X4TsmfawAGxzuq",
  "key20": "5ZcDMk3MkBdVi41yLBZkyqo3VHoPoe1RcoBBJ9wXh4Fe9GMTN8zpHETFYsyjLEY8if83GJTUEYik6V9vS5ghfB6W",
  "key21": "3gp6TjaMuXnK2ioNe2DDCVEzAL42MzfJmZNTQujQ8Nu3M84NrgQgqsVAew5FANjrvuGxNByLXkRPuGpBqDDUwuE9",
  "key22": "EE2fZL7B1KTgbQ12CSZ3tXffzuM5r6pZvdbZDZhMi22PnzH6t1QFL2rnQziGwXZq9VLJhojhDd4AxEbRLs6hta9",
  "key23": "2VV9BvAQZyicSofLr7eCymqVfnw6sGmfJayRtkrFzehRRPM61w9k8ZYXpS2TxgRR1qPkw9sqP1PL5Z3xWdJPF7P2",
  "key24": "WffZ7Ufr5agreAPcvuta9VHjkRoCx2gWfoXm4iWUyYHLDBnMHbKjib6PzTuftKnEP8JLHMPs8qgMsFT97Jn14Df",
  "key25": "3G141uEdTUaciqAEEKYkbX7FpM2dcCzM25pP8vDgXYPmVFTgecrUjsWP8k7Sp4FKBSptftYjEmmUBDXtX7U8wrB2",
  "key26": "3ceAY4bubAppeuBLus2sFpcFbTErRS4j3XPXPitJZSL9Ysk3pvLdoc6rrCw1s98aL5f1FTWZAsVLdrknLRvmgGM1",
  "key27": "3dYEzd1vGu6YrDCRvQTrpSTaHnHqhUEsH6dpZ7CPEP7yCntHRKs95cWVUHvAhWXcLZje8bHK1sxpsKQNWLrrNoZv",
  "key28": "6Rd5VhjCjAzWCuG9vyGxR83vpJLBAt7LTXPzLc2A6nVz2h8X75e3vfLc1CKt1SmdvFmsUrH4qhPdLxzmbcjwHoC",
  "key29": "36YEpfobLg4k53cktFjbCuP2YwKjybtKFReczvSwtvjjsVV57nSJFZPiAKnrBDjqbnH7Ap8unC9PhHbGhQ6bmLJe",
  "key30": "qsNDPXPvKNkPWswTyJxtuHwvt8F1UaxowZP8RHNR7YUjZdFuJ4hX6ZyH8ea9bWx2YotxhotQS2px7PFSkgYEz9p",
  "key31": "5wndAF7MYW8CSHsQ7R773wJTH6q36h88xpxrdWnHMsgexazDS96Kat2NrHqyzUfgZu8sBzHYj8HwoCFGpHfvmbZb"
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
