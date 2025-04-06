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
    "4F6aiAekgrBELheiXakFVmbuWbm6qouj7YhpD6P9c1dXqmjHnNhHyUBupPEhNFE6mWMJSTpwK5B2dBMGdHm1z23n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2AtuVgJSuAtkuLZ2NJAWqmYTXFXM3VetXzUzCqN5w9MUkFJWzb6gs5TkD923JoGUcKpYVELw4RqgQRZte7ZbYq",
  "key1": "2K9Zea7AGaNY7Fe8m9GxS6A3tE2Vhpg4rXWJWBQDNUYQXPjsQcpSk4hrBmtvqJYCo3WT1xuu9kociKhUfBCHyZ96",
  "key2": "2AtVLZpq2K4NQ6YkqHjTqBpaqfxckjoepM3BAsSvEkomnKGRUKJ6BD1nHQbJCAZLy4bGG6NJF2qWBo3SAGr3zR3W",
  "key3": "2P2yhcTLurRrPhaWeQmQ4YUUTjjz4sYoEmdPLsBsc6EqKAgcEtRaoENh8u3fi4Bpi1hdNkTuXWKqjCudGUkCv1GZ",
  "key4": "48uhnFMBJfE6FgdeagaKhoZzurdRg3Qi6LmqTTCEWnp9tNUBuUwxhMrL4MvoAkgAWhqCxzQdFrB2TghZkjZesowA",
  "key5": "67e2tRfVSEUCfajveE2KhEYkbQAjpMVEtKrDmJeVw4ZfaT4hG3JmUkzvHN4pHrByCHkAeYQcY5ntBpZDe818Hzp6",
  "key6": "5k4vhHXz42XPdW3eQxV2BB55jP9cWCM3FVbttnjzccRp729pBxPiaswGG4A6S2WhTk3Tx517JB5BLAaYZUf2tiN9",
  "key7": "4i2QHS2sn8iLE77GtfXnWVaabD3Je474csoatXVQRZvAtRM1o4ZVfev4bNWnFyQYdA6hyCCkHKn8MSWoM5iai67P",
  "key8": "2B5xCGwpVbHHTeM4Aa9J1fo7NRNwFToa4v62CmyaqMxmjaiFWnzSkG1N18RmX3F5G74N9NXYhTQYN2Adsi9doqmS",
  "key9": "35fxTic5KXogSSnw7u6kXyKsPSVZaKudiHae5RM9ncWLKxpiaCaKMsXBQjJ3KA515p5kNF3Jp6mN6H66REc24Tgt",
  "key10": "2bUc1K4nhcZLWRUtBzP7iXdGuniqUuiC4CwtbiBP5t6ghmNqFhFdQKPKBsDq6Tcbr8Ur44iZb5UBiLQsWdua1t8m",
  "key11": "4eK3tfF9QXwr2BgtsKp4HnijV19FwwF4xJCjwst3Fy6PWPHWpRsL1KgbS3cJm9Rj2DLJ9nWejYUr5A6hVbLN8BQ8",
  "key12": "3aWUW1BTzv6NbUQVypY1GyqRByLDRqujwWqgvD8zWrEs1XcnGUg4kB2WsqH2fVnjrzoxycAPAvw6dnGKbkBxNEV6",
  "key13": "5HEkbMQuo4uHXLRxopWc8mpFjASG1zfN9Xn8yFJEd44xYNHj7UHs7TaoN24Y3FitTiSqgcbWnPP88vRgw4dLtpzd",
  "key14": "4ffN23BfgPgT1ZZUCnGeumTuLLuNTHcSEfydynPuH93AiCXQdekEBswU5omcA3tWx9VPefGyVatkeuinTLM4TjUY",
  "key15": "Sb48WKf9k5qVpNUQ7yM6p7CTirJoyuDBBapst9AkijJDFAWaB3SqUV1LssVxLEb7r6ewiEd5QkMrANAuzhE7516",
  "key16": "4tnguAdVQdUL2iTSRtKW9BvsESdR26sSCnafoPsfYo5mgWLLgtqvfkPyYDBpq19N4botQpfp8FSFGNyon4wqR5xA",
  "key17": "5vvCD9U7EsoZJHtD76XFAuszPLcW1UKivFv9LFnGV8EBmjPS4GHJnMhiztzusjinS5XHoCQz9Z1moGz2Lx2X7xrU",
  "key18": "2tVdqRgnQFtRQLQr1kSweteQfXFvJZa4hQhEwhazP8A6btzELwX5shZwgwZick8CTnHMremTtzVePmm4qF2MzwDX",
  "key19": "3GKA5U84vKV2kenjgD2wY2LHFjqv9rbx3vGv2ERoEpi5U5GRwjsGCLBzwjHzDGfJDu2bB6SjwmGLG59G8Tf3HS7k",
  "key20": "5pEnfBSPjHotcARb3pQ6pducy5TMAeUSwt5wABsDnF3Z2hjkgB37uRRqWoXgpaLEFyA3oodeh5oAFJF88XmWKMzf",
  "key21": "5BLaFB8xcMcVf334EoeZbTzTMkftWbj6AH4piPQLkRZrZaKMG9VEnii1T5dVAy2UgYDBESBhFzFsak4pZUHAWpJ2",
  "key22": "oH6CHjrMGtYfoGLYqR8Mqekpo1P7P4dgkdLxer1isZddyHE91YPWo5PfSH9vv57fs5mcnskxKBz7HituckvfTSy",
  "key23": "51U1DDtyARZzgE1R45ewVQ6xrYi4Di6i4HSN8ha7MUyMezydeqTHHER4N2uB8Wm8uHo3LbdJrM9HRUyznKH7JGp",
  "key24": "2vFEtyT89guR1ZH54VwFomzSwariLabp7Yn6x32xAme3kSuNJSoWkc5LQps4bouzNH8iRNJRtBn4zriPgt29ed8Y",
  "key25": "25ZsrVR8CVcMahe5NYzjqqtKaqNBWnn6dMdicV4d92MwFf8atkA6qwghMjtA7KAomNMzVNLqkEdXmVQGFno5tyNm",
  "key26": "2eHJ1oVBLnmMUPJn8FB4C2vHoPUshvktojqY1LcCjwoB2H7RHBujLmXEyzwegU32AEpWazcwnAnNANVxLozzQkT4",
  "key27": "2bvqKbg56FbmfLmtuLEh4qiu2g6Lc7TWG13wnKr3qgFun4aoQr73k5gG5rHsckTJjvs9LbBFmY2xKirJ37jkkZ3X"
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
