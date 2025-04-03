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
    "2EoWT49m1iKD9S3LvzHc2ArJ5Ke2Me4VX1mEXCM81FEMqqSmgrzkuFMbD3nioTk17AWkWtgV2YSHCXFz7G7TfUfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51oP2FZurtP5cm98XiQwifLC1AUepzdBtN3FAXbah48fDJ28tyj9ZyM2p9xTDq9V53B6cn3dSYMhWu6DvkV59Xi3",
  "key1": "YqAUnDV8VRJSY4Lz7d2Y3PFgCuBWAJdHJwqeZTuyxTb5HgBG1HySQKsu8c7iU8gMfUnjZCGd8tFLAu8RkQwAD9Y",
  "key2": "4TuKAtY5WDJdCLbPkd16fJpQpT9SxzMyqLRxUKKJ3rmc4wz3fMYNfst6fX82Wa5K2ogeDpgNDZ78YaKD5gxzuq1F",
  "key3": "9CRna7oUsgDmrdyYkAVfcnuMPn6hDdpCJzpxVk3oi44DQDaNH1MJJQCAgq82iwk8cPhSXw2yrY9PM6AEdfGt3Lv",
  "key4": "eRZ7EAGB1ifRUNbnRYgFe2Kq6cQNrR8qsDi5jz19t6hQ1e7TvxWFA7AXhR9cS6tYv6xWkjYnQ7YszhHNBwP3mxL",
  "key5": "2E3ig6Sz2HXPG2gNp8CoFELUEqmQsnxyYZ7n9XksRifatAjwpXgDseJJSvwrKVpQiqzhixbZbmRQXYKfDGC4dKEy",
  "key6": "3swfTBPoBstGxF8GosuLLt1i2G5fvE5eT923YsguDNS2RSSKWbamXZCZNrnGrnnTnPsYQtpMfKmVW3w6mvBkygJz",
  "key7": "2vkezDokGFE1dzWm6Usbhuw2UFiNmbJmUxbJCT1L5pBcoHUUuwijYZBTUwfRqphQm4qA65voaAbkZTpxHYd42KEa",
  "key8": "62go7BsZivXCkaGN3Sbhg3hkf6sFzjCPJRLBiUG1pSHjB2UNvhaJMHpPxXyFhzqPqgTqFXwj4CykU9RFsVVuHbPq",
  "key9": "3wWprcoePFHP1dQbdCfYRtPuuLC5sFc6Biyus44kr2FyQWFPoD2TNpB1LukHHqfFZAsd1tN22nhnxsTaQRSJWVM8",
  "key10": "5dEn42UF1wjdmDpaQ2WY5FUmMgjx4mHU5pz92YGKF4Fvje68VXCFYMzkRcJSpWCyhjcQG61ZHKzKKJW3m3zR4adp",
  "key11": "5gj892s3RSPvv12UBv7R33sfZ5sgzMo3e5xKMZ4dbgkCZoSQ186AeBL7ofe1tTDpe1i6xEANgNapBEx4CjH7ZSHK",
  "key12": "4uL6Avk1GRXwnLvsVdvcSZ33PBThaTDMcEiukcBxsFWaHa6Eqw9EtBp2g3tEDYGY2sbsMGRxj6em4ZoxcD4JEhWz",
  "key13": "5JxF7jHhefDmJPTtw1TzS85YRGHpR2ngjp1uFMcxuACb3YrRQ1wZpYd5HtgNcevqfQtckLzikcHfcdyHfhW4Ydso",
  "key14": "2Du73aBadK5qdbM3pdn8thWdSq8pWJyUfP3XGRQWVejMUpG65vqX6jGKeWUkvLJp7NyGCCY9WM2BLfrBuk4YCVn6",
  "key15": "5aWiPxziAkX967ALfezAhPiSNyqmchV44kioEsPMqMqLpV683LRWRAhriGMqUhNushv6gii91aZjH4JhVRYE54pi",
  "key16": "4Z9UKVDsdaqVpgSVLko6v4ivfZL8ha6PtLvofKZV7fSRRDVBg1KfKZYLusQ4QrNKwtFnD8akdZp6bWoSNZkYXhSd",
  "key17": "4ECV13SmgPNHqPiYiCfQ7e6GPwzBq9Dwx83sohHXoQZKGYZGSZ4Rv5QVuvYAegwuDQRzKdVH2pasvoBJ8trZQMyR",
  "key18": "2ovAqkTM4wMQLn6Ko79DG86GMPXZX6ocFq7xs8LyGycRZGZgEDo3PsmyVigXBBaEXGRgiKTfGg4fA1XNgYCPQLpa",
  "key19": "5CwPc4cBoXJdUrzVFdnP5cqjroJucTSV6eW6iXepjqytzMok4MVzPynur4DFN4VB2cVcX2GM6UKw9zLa7sEwKYVM",
  "key20": "391ZvQmCQdSansTmZQHtYeT6sFizKJmxQgzSMjJmXseewJmMtkojxqfhVU7q4mUWgWngVJTiLWtFEKi7brzWhqwE",
  "key21": "3Dh2PNoau1MWzzsasnrFCSc2qkzMEATMuN7WMH543oQdeSXoDXNBBGkHiZ6sKB6uQu7ZNJJB24sD8rgEqT8XhARj",
  "key22": "48CJFebnFSoRoPp5LN4HWwanEHa5qSSpcaYpNW53eEY3bDZGvs2G4dH3FhfoJWZG6NeDAuPB2SaY9fUxCwdwXu7Q",
  "key23": "5w5hJgZ4Jh8D8ahdPnBUiQ3fcJgsnTPV6Er9J3B1HYfxQ9KMYpZA3A9aTeuDUpXsPonhmVAj2K31DrW8fKDd6LsE",
  "key24": "37Pno9E6r3vSYWPefwK7AgoeGshNkZ7JEKa1g7aynY1HU1z3WfsYCTNeEpDVSZFNkcbzNDWgYDynwirhKKctMb8i",
  "key25": "5WXsndpQgcF3FLeE1yC5HgeLh4vjGuFdbw7ttgzvDdWfym7A2Q5eX7xqFwgHeuFXK4sXj2QwejvurrK83C7EQN8u",
  "key26": "e8LKDu2NVZC7Kv5JPEErV341cPZGwiLJGJPz4xD4qpnEEgneJQXgDJAZxZqnSWu3edWigvSHfWfLoyrrfF7y1T4",
  "key27": "2HTMrxUsAUnvPEgm68hdgTtTuXH56m3L3jhAVYnEYpher3KgbmW4XjaNcvXvND9PSrE6F8nbN2qeS1mR6DRsgb8D",
  "key28": "2vCzUV8d26ovipudeUHKn4HsHs5ieweDt9rru1cwJCvxrWJSAkTtya6qLDbFCUkcqqq5w9TaHrfB8sA5G7bL1UZs",
  "key29": "3YYiHjAQn3XVd8fySrgcScDW5zbCQB88NJXAEaWwgEEr17WRqugj29bfhzeW89TxxpS7r84FXrtfMZWLf31H6D9j",
  "key30": "3n43oHckqGPwTCrLnsSGq5cPujy169RZvWWKWcBGnWLQL4eH47k9eBT93pLNgThxSJJogzafM6wcokS7pPBRoZoD",
  "key31": "3hFwAYhsYPHGnjNBXPE4ghHfxzBXUnrgn3hUZPxV2LZMmbjFtj3XvRM1cLmXxJxymXh6Jbtg7BxYvmt2Ncb7ztJE",
  "key32": "2WepDE9ztrK4EBMYNy9piMgGffAaH3Qn81WyYD5jVghtnZkBxF5thKpaQofT1A8j1dEmhm9C3PouHJr6xzLEsn6R",
  "key33": "5etYfqy3fauMrGhwYswkNXepd5Q9uf849781T5oYgrgkgjyMHneobTPnPaYZjoAEazqfSSMLMnpqTUjdpngn7SrP",
  "key34": "6TRhR8ecoXTX1RcM97y12bZxF1JbH5SSRs8KEBNw3w77WHFfw6AkK7TL6HoDD1bjsbjAvcvYPnJVo8XjJmjC5XR"
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
