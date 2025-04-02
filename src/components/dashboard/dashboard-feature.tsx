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
    "9WQQUdecqjFKn8CWoRqSUs1kvPYK49D6BPfNqAQbT4EuhNrFPBvhDKP5k7VQbXMSd3RtMWpC7zBd8tpFD3EfQvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653kCsA8vMgxR6beCEPR5ZpKAukRiB6cfJx4HNWkFpFsdAFAm7VPxspnryLHr4XUYMqeEUE6NnnqZ9maBnJGxxm4",
  "key1": "5rxZVG4UFE1nioQWS3h39t4jQJwHxd4vAbNi17WV4bbYyq4az3ckxGEjynCJ7WKNPLa9Haja19C5zKMooGWaT4WS",
  "key2": "2vjMqh8iejtYbTYyYq8Ei2wpoXymGnbBkr3Yeo9wGS94DABYkpYhRjamWu2nyx4ER4yGxBWK9EiEgSkkGQX7da2m",
  "key3": "4xKuvzsvjj95e9mrM4P3h4BWpds7AAyUAZssYGJdC3vpvF7SQkFkjC4Ukbid9VvtfF6tkYqMqFxewQSiNrbY9dyR",
  "key4": "54S7hqJ67fke9uTDBJDjL4mRoFNn1JvsP1rxpmhJocyv1cCAixwGeyxm7DQYuXStuLknm46PQnviuLx5p7zDSqn4",
  "key5": "5vCwtre9iaMsMyi9f1BJqn8V4KPW4pQeHY6p9FJ8diG5szCfuenVYYPpuXPLKc63gUwNyXF9mKG92TtUK3TAaYw8",
  "key6": "4tWWJgNUhqtyY1jPLNGc4LdDCxAhLH57wYBdx8kqfVMxJu1o1P6UwXaEwedye9Vb7XmHaGWUrZ8FofoBzcK4ukjb",
  "key7": "4KHth99g2t16gQYcawrhCBnmRBWBEDeZanq5bRbov2fVoGqBVavcZ6xZq2AgppmXaKzmUxDzU9KLB3D1kJVCDHQy",
  "key8": "3x3YN1aM4Fmazy8S6o5g17UYcuG7J8VnHaX11wxs3XQZG9nVSi5MBvHmSBjgBTgEdzt2gFnDgyLB3DjHaTDsUmQX",
  "key9": "4UxyPgB7pA8hY7TB4HQnjZgDSBJHjf7yVb1P7jWAKzKjrDhvWDg1yvCLqkjRkZUH5NCoNxpeF4gJRd9V9tAwSZFJ",
  "key10": "2sTADh9WjZUQ1aMiorXC53X4tL2Q2RQWF38RVvo9985q8ueWuyquurr48JXQWTJrvE2FMUHMoNsbkxNLzDQgTFHX",
  "key11": "64SeSawVqgV3Gq7h8FVj3n78iAnz2gMJghygoRfP2yULu5t5ssAZd3yhR5KcipLH7ErqZdhBaRuWKzfxRw9dt26j",
  "key12": "43Mh6TNN4gL1qX4mj5tMGPxitK19aNWTSFDv7XH1HttcKZGUHdyo2Qmz8hpK9icU3FGqUYvYJ9PBCu2nxXMYxyw9",
  "key13": "3b3sJuNZtgDqrEioBMqB1u1PXamyF5LXCBqG9Z5bV6u3vwGSvpkEgCXmPaE4s1XoVxz245wr8oxyeesn8qnoZd1j",
  "key14": "2asxM3Ac9QESAynqC5w6Zg84mn7srdpXvZ8xzVb8qeK97CTqeXxg1BYYYhPPQ6muDd1hbQ8pASDakEHpeigihdP3",
  "key15": "2efdB9HrotqPHKatkxemf4W5pbHFnr3aDHjA2xL9NqRi5KJ4woVjBpgd99NjQ9npDTybTpU6cLXZ9quCT7Fb2LaH",
  "key16": "2Be8eQQxf1Xew77j7aPDafwS8B6XowbXVSx9KwfjNvTuB8nu6iMy99xZayGPHYxj38oLu4nJQYg38mmHZ1t1qg3A",
  "key17": "o6WGuSTj6Kj4f32aknyzyUfsESRMt3GFdQcefaWsQpZPEbBwXr9z34TsVtpGDMbrQvRm6sjNT1FohnkmWCKvAi7",
  "key18": "4aW3NXc1M6oCxvJpspq8PNzVitmnRuT7WZT1x1zLPKjEeJ5R6DrGp4Va5RjYuirJvLpcfAPD9bLXbKJ5cSfutT7f",
  "key19": "2ovRMwjHuavdETcFDxebRroVHMYLKWtwykk32LceS2riLwAhU35Gf3NtR7wTg4kxqcoF118BooSN5P1NDcBqpTXW",
  "key20": "4nPyyxs9A54V8pu7ncrL7nKRdEinqEPf6knqN2EfGVH4sQnAESjMoRcwquFZd22mp8vgrWrogiZ3GVjeJAYnVT1U",
  "key21": "3fv38cVJQWXFWQXdLimCU3sydKrKjuAvim6GtPpJG3aLuwJdHsSuan7mUyNgpiWgvCheKuTMV18jVvccRXToNPAP",
  "key22": "ZXrP5oBVjNeeKakdnS1C9qTKzPDUQEU4Z9zFhNCbqcxYxWvaYHdCzq7KLoHBvCSsCJZgjhNgo4izNZPjHugWEam",
  "key23": "5wFS8CLuix2i3TCLJHw9oeE7a7dKxjsFF3MGhgcxfvGA4su7F1Ad6LUt5fSt34rw87fNU32TxyfSt1Wk72F6qZuf",
  "key24": "2Auey8fs6fKsFz85esuYA99GPy8d7EhcGyfs8o4duE3kGGjiWJHgucY35pmS55LU26TBvQorfDJPUv6fZ5HTiV9u",
  "key25": "58pubXMx9QuCGXYyXH66yVqyjb2iXBXikL8PCUvqg4ooHKXq3uKSte1CzG36EATMS6Q76crsTLTfjkz1sLoBjTwX"
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
