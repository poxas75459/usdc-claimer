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
    "5xf1g7XgCQALFXgMiVzLtohhgJx1xAQJCYQUHKQjpcM26zHwT47p4RSevvG1gams8GEpLyQjrr4njEV6sX4wMtXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSfVwNtatEMrBgQxDRvd38NGZEcqfTbK9TPDxRrkLZB6NjkuxsZqZEi3xHv1Zd8abARNDXY3my2D6Q4R7hxvhfT",
  "key1": "3WykcnijG9SFKHqyHmKptpGLQfFNwAdsiFqzY6figMFcrCn2nMy9gqmzrJKnm7vbLkpEwTUAhLTzVHo73PXekKFv",
  "key2": "2DQ6zMPA24ZyiAHbMs62SwPzsGtzGzwXQsL2Doo1K9aX8tbKcsGE7eAKxdC91Up9xGTjv1YaQFxgj1vZAhRkHdvX",
  "key3": "5vxMtQRmPzbmLa2JJ1bkmYk5DMP48M59r7jWL9NoVgTPYt7cWqNcArdQqLMsq2akNWMHVUqUDb9E3FZ3fhttz3sZ",
  "key4": "BYysk2MXR1XRzUWcaeKEhG7xhtKvwsycLpSVupiL7eVPKmD2mSdKcy18L9w4mHjgPjUWGcvFYqDrnJXLSjZajcq",
  "key5": "5pSkZ9TRUBfYQKGhqZjvgDP35kPN9kRWhNEhXMFBhxrapoAw89yXTsf2jeWJ9doY5pv5ezn2d4GxsvR4n1Cp4sik",
  "key6": "56R36nBfB2efKDbNq8cwXgMjF5mAKkQRSdeuEyLGW3drXPbM4P1gQcMjfq17GDXGmhYkrot3NeaiEC8LEX9YoiJS",
  "key7": "yFbMHBJA1RbrswiM784kPhYkEddczYVuGfozKqi6HwgbHf998XSxiv235RHb8zaBKzzuakPFtZbVR2cYC1W33CN",
  "key8": "5Z94W2oSCZzKYdb9abLeWH8tSTR8Ufq1yFzJR3r32bjSAEwyNfPZ6qoFvCKFwzqarKgYQtJeYkAF8igSBjTkQi1p",
  "key9": "2wZdVFLLQQcE2baMvC6gjSc53joS32wcqpbqdAMJGLL8BtxoqosSweBknnkNKPVHUhajF2abQW6shLvwcKxMzPtc",
  "key10": "39LUMiYeDtz2h8fzRbn2CYU6D4jGxob3Wsiivz8Cjo2TH6TLBrC7dQqqAf7QAgZyGjYNaKwXJpvPzCgLN3MuDp7Y",
  "key11": "5jLdrK4vPtx3hsac7uDhxPBnPbcFR3aesTWiJ1mM2B5qBMxwGhVrcUww8cXxtEp1aZAxMboDvZM6oNhvTc9wfcgV",
  "key12": "5WMN735BMXBsRVRNKPHRZp7ZrvEfkB94ngrq95sq6BRXTJu42tYMX2ChCQ3bEAdLDDTwzzvSpB2iNNsRxazye7U1",
  "key13": "kWbvVDKBwUpJNJFGhodKpbc8KCSraaP7sfQE3MT5Kx7F2ZA2QStXWU7hWuGphQuRdn5hkQuuVry2uTQEZW3pUCk",
  "key14": "KjntvVjeQhMCtW5qXpBkNmkKoaDTAdXcYviQCsdwJhukoqdTN83jbXWkbqpysjaU9fCx89jtNkjWmPS9HN6cKs3",
  "key15": "5KLsLBbGE3X2AZxb58MCGpdpnC2dW6y7niioL5a4BvwsMATHCHAQnwpq9Xn7tjPgdsWXdvzjav8C9zBTdnm4DLZ",
  "key16": "2Cni2QVMU2dRc918YsUZvrUFiH2uR2wFwuB4e1kgnhCHwLP7Fb1eRPm1cXtQBgAL4FY7jgEHGENi9TeWsN3sCHQA",
  "key17": "5KFYPpk8G2yJgXLeB2UPuZS4e6uA6SRnXFcvKR35TpeT4UH2jLY8eFzbKEG2eE8b4G2Q4WW5hMteeEi5NZVUGmT8",
  "key18": "VFHwcFPPeuu3WBxXLwzNW8DLNaWzanQbvnHt6ST6vwPu6MxdvVq6bBZEckoaW2n2euPS6Vi5mrrgNn7LBn9zj89",
  "key19": "YW4kaXAkZabc8C8BaLSGiuyeVgmp2WhMx5cS4EufuEqpUrg3RX16ChKdYTttHwZQNxha4t1SymDQe6P8E6oEwHM",
  "key20": "DMk1GBjRzCQT8ZnvRhRthwKk35m47s5vRboYG2WcpFEwgz7BFmEecN9AFWKQyFLPndngbQ9Qi4D8bci1TH19hE8",
  "key21": "4yYB8nYaLvxaRPHXhDCawPGSnRyddVWKWP8uuGbuvT3uM9avosrfwv96hM9jD6qxTdS7dCFeazBhPwwsbbfRh3id",
  "key22": "2RPa62ek9sHf22hwiGhzzEf4N43zGDiEyh6izJ8EmFrGzGBuopyHxUJFeiJMHKVquJgZeHsJpihe1tRPYxhXqahR",
  "key23": "vvvSFLYvyCsAkv6vgLrvrCVrb3NPbjARgYZdNRp7fMPwUx9F7oBLDnRC5aPBy7PWMEPLKw8bne3U3dtQhsUoiQY",
  "key24": "4ohnMdqiaYYovTQaBtFDKcLV3odezbya7A6SHkbtDk9V3UozEVRzjTbpAvuR9JcTXQHcLipRerKu6W1T6CGsVXME",
  "key25": "66xgXhwBzJXgxoFjjFSEFca7MERNtq9xVsviryYe7NP386tg3eUFKcb6a2bhtwTwpGTzjteWnCssGEupWs2rrqVZ",
  "key26": "4T3qtG5spEVEAavAbBfuWz2vV9rgLd2C4wjZqEwXtt12yCKux9HPZx51Kz3FyGBTZUSQPHdgVDkavKRtcHiVcKj5",
  "key27": "NDQVwcsAmczCoZkkbfSmar3DkcfvpHgS1UDhWDkfvyGvHaGqwUk9TPFeKVMEzYFSLjW9gwDh7hhZw6xosLVcu59"
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
