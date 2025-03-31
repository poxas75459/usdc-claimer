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
    "4uGqvKiHuN6WnHxBR2Cavz6DLtgfHMRxkA3j1ynPPV4TjZsT16WRbcbPZhWtncfvbQFAK1oBtRCEr8uMGh2wmMqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdmrT5wxewph1yXxtKBLE9s5ECCD9DnoaYSYYJWK66aZF5qBarGQAC6zu8UD8zvXVoMZQ1mJomvZCmCKRzYLQGv",
  "key1": "5bp1CMNEZ5oZP8uLQhFmJoKAFhwnLqDNfYyGFEUDB6TaRXfoWLDf3mLiWgtZXvx9WU6EDWhrXrLMtcGCix2sKKzF",
  "key2": "54qKz3YshMEFFAbYhNdEMhSh9qMApwZxuEiiCP5FSarp1gFjgjcdpi5VCQyXxfXtU7HJpombaCKcR1FGE1PqATmv",
  "key3": "3RWYaLTjrejsYjutA6QEP83p34Nvqt5uoqo1r4d1aa1QwTWP3D9jep8NV3XaWYgPnR8YZue3VWunmc96E99gypcR",
  "key4": "2disueuvhoRZLfWRinSrNW1b3BncCVWTYgxAbdd5ytYH5o86fvmUkVsgo5oQNXAMajPSd3NusDMhQDEbhxQoxjDm",
  "key5": "67Tn1dXhHMAL1KkG1nQpcDMmPBHBKDLVvUaFurNZs4oSvPu6ATDb2tZ8JgbcR6ZaTyAgHgXCvuW8r83EJUr8319M",
  "key6": "4fHBgCSJ9AxCgJP4pQH7zJB8cJbxpUAnU8cQSRQLvvn44DKu3aAby9M8q1dHsF8qjFMQ2RWwtJL3x2JJMfNqKiEx",
  "key7": "34xSdbdAWzLZSfvR8Dyea8KJ38BUcAiYXCrGDrjEiQRHxwVzzsiNeFSqcCQjoDQxBchKL7B2FQbyHZ6YMEnMZNBw",
  "key8": "4VhxvQQU2gtqVzX18uBzGEyRD53rM11BfjujLtWRXNiYqY6HdiQcuZ3LkhKAgi7cxbxma5Q1R9RaRmjYWyTm3wHk",
  "key9": "5pW4Pgf1fJs5VVYd6TMaZvRivnReN3LM2UBrkBuwjPVdn9ayqGQjsjAXX43hGC3jEjhbKLYxTNqxwZ9YEUYUnMTc",
  "key10": "3xtsNzG5Nox49LjmDxN2qihgrnqRaRqgZf58uEPd748N5HsiGPFWXcppQ1xUki1biwiDnvaWWitHXofZjr52JfYs",
  "key11": "5VLo3S6aNs72LV98UBfBh1Ef1N9HtoqQSJX9ByNF3DqRYHhMhwkwpXp4XDg9vMeoaTMmzqxvNzLQJuywNqhS9RJe",
  "key12": "54jToj93AXZtk1YPtH8XubWvn3W6XT9Wjvc8nK1ga4uvCYtaEcqC3Ax3kNQrDBAZbXsSe9TUVtheaa3p1EXxZXVp",
  "key13": "4gG8XansGxjwQ8Lg5tvJSX1nGVL8iVVbiihTvfVoCww7f5uWE7CkiJDnEMenUSZWvYsWfEUdFbPpzEDgNpZQaUxP",
  "key14": "UQQAjpDQ89EThZdKfMf2Uu8SGH1s2mLA8dtzP6SCsRtV6RAPj92WV7DULMqZQmGZe7U3pQojgH8fhVMpP3NfjWx",
  "key15": "3TUfCS5Xf3BeXnuPy5uSW6kgEfgHEYioSAUixAkjp8o2WQYDXwBLF191NwfwwZgTqetu2HHAKF7e9n4LgJWoNQ1T",
  "key16": "2uJuBRfxNdUrkro4cGCdepkM37tYEq6jpJMET54MJgaJT8GjoVx54cpdZeHjuFogLpYqtXayFQawek6YCM3VFRyj",
  "key17": "4bYnbC3Bsc9yVHfhKEygq8PFjKh2CqctGM9kdMtf5r9yenEkUsdLcqJz8WgKx8RUZX9SQ1wzc6yosx9psVppuK7b",
  "key18": "VQD5cCJXgVEPrA34mrQKwSbNcMEFYRPncGjDT6dA4cs5j63QyfTZp4Qw5b1DF9YcPmRch7wJV7SDbhP3CKSokFn",
  "key19": "t3eVJyQj5e4puo3xkzmT9Xjdeby45o6Re5gvuquMUMPQ4pyBaCbTqWzqxE95Sw9WK1rHEXVb4mo1jsJgMDhbRDv",
  "key20": "E4ZDXbQLqef5hNAARqrAVDFEKsXjj8hXJE3pAXhg2XU5MN2oaudgX8pPQZjey4DzaAjJrne7bjL29WmWqfPx7pN",
  "key21": "TLiKEfiMhM5raR2yGLLkyv9irkfjWVyPn1KLjtyqN24gGP6mrBWruQzJ9ji6BBeqnMwtkXqZURKPN54SqVwPCYR",
  "key22": "5ixjAFwpq6yfKhsdt4TyWTXUtLq94DSuCtnbgA4kvAJ1Ybk6DjyuQSeAQK4kEwnuHEroaFvTLVwpdzDfW8AyohnB",
  "key23": "LYMf7Pghhjh4gDxeQnkc3sGEWZ1Zogi4fRgmUcMrJtxDaXUsVmpimDxjiU7zHv1eqt38ih3rr8hy8uQRfbsejnQ",
  "key24": "4HVnGaM52KEWb9pjpfyopq2NJu8krgv4tYLgnsFxR7j5JFKA6K5wABZCiTiALrKx6juRYDDjopoqU2V4AspqGt1R",
  "key25": "4TZQFHZZA9PveGBw7W1VVanvrgemjqifwKuJXdZuV3e8KeSmTbUkHsW29szVA5c61THRGUeHCCb2EWUerosoSZW8",
  "key26": "33FoaMuvNJPSXpxrLdETwg3WN62j9hgc777ceen5oZFaG4AMiQJt7f4PGQoWquHbZbWpydp44iwCM5khK92DCaE5",
  "key27": "AkzQPWYcjQ7TFeaTFVtT8ajBSenVLTKnGmiW4G8DuEzhFBXAEpjYurxti92yLw3BpG6YufCWN9C6SQS9U5KnFwF",
  "key28": "5kzhZTcCUtDqFrfu94KiUJJQynK1uiEFar914HHzYhAGUoVGGHrtQPg7stmmSba6LZUzPLaYqxQ7Qoeeosg9LE1B",
  "key29": "5pvwrMbfskRyYHS5L5kyqiyuTwvHa1QznPZZ17MFvh5oZ3tXEBCqChLJhz5m3dw4pGgCNnr36285XCheZBnrzUHp",
  "key30": "5LTkTT6YfX2aTGjqABekhqdD4Z6beoq6T2oC6TRy5e5KbEHMPP1b22QwbMiSfXmTqocUeUv3ep1JKPGHNKPntAQm"
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
