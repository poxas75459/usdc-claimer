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
    "2Y2Q9hg5WvTUSy8JxUqXZwiZbf5saGLNK4eYmKTdTNiCH4ExnfXiGHwXioVXFpzKGWbyo32Dx9mmoa8MDbejxNuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7ug7Xxag9FXK58jDTy71etboGyVHLjx7w4C4J4vk442QKH9HB7q7srk26eMWaU4qr8Hiw6E2hauz4MVpyYoKtT",
  "key1": "4rSmTbwryZ5M9bAZhFMASgXthtyyjmQCUeZuTS6YCd8NEfzjSow9S6SWQNb2QxtKrH1zLubDHuif6SKtUVEPxwpq",
  "key2": "L3J5WsXRWu15t6WYU1Ksv5XDJEj7JP5H1egKksW7JZVHGoTesrvcj5b8E1ZaW9u3GFyFpJampc85DWLwUwz2Ed3",
  "key3": "4eqhSGEuwT3fVbcmsPtf6gyZoCXVDvwzEdkvr3wmf5ExWWu5RA94gcRVxumKrES6bAFXdBXHJ1uaFH2ujFfM6wd1",
  "key4": "3nkFmJc3Coxi2xRNtvNAGR3xkuGp23AVHxFcm7NocrMPMjuvyCw6iwWziAHQmbWmney2kmdgF64aWPMYHGumyRBP",
  "key5": "2K8NTmuQViN7AhiorgAWitPdTRNmSoQzu3gZtGFfEyAnoRxmRZZw2iLMiizbUvY8QShv9K9KE6Lwmd2h8ygzTCGF",
  "key6": "2MYLjt2j57cLH1WdC5pdppZCz3LWz3LKZpR37HKCQZ5KP7rRpuXECsNHG7EER3ANPg7eJwnTXmw9pNJrE5zaZRkj",
  "key7": "3MaCJ2GXiEvJHJAV2oA84MRh658W5XgGog7WpHEcXyFBaws6RWWQpAYmyrsvWuyzPwyRtzQFb9eJ7p3JWUcSfkns",
  "key8": "5YQPVoTBmkhvNFf3uVo9ReDZYtPjx79EKGobn9ySyv8FwEodRPzwqBk2NapTTBXt1po5HbMugSPttX6QsVwWEVgQ",
  "key9": "2bJTBnT8Z1rVP5SsJobYLKfb7roMNyktwRNYyzxR8ywzPBFjBb4URjd8nLSScN7c8xCGz9LK3uxXBhoSYKi4pWyP",
  "key10": "3dMYwJnwuwrcZ6eABdvPrtEjPTsgkVQtqHXmvYPsPx6d6yNjy847oQzvJkQT8TxZQvwcPUJxezze4RPJvDEF6AtE",
  "key11": "9mcRFsacpFDPr3SGBsspYuxEDo3zNuE5YZ2kt6m53f2XvW9juoow8w9MEWmZga3rNX1UWtiN8eGMmeYqPd9Lhiu",
  "key12": "4r34u8veEtGbQrs8LStDa7CM6EwJ3tfEE7dTxHW5s2Uf3TrTKafyMvhAzy6JSjCmna3f79K8tt4kXFYpYk7JWSkG",
  "key13": "5jcP2UujDAKcJAXZYcCeipZjuY8syRaq6ALLYGy3gbtudG7BATBv1XHj3Nxrx8wk1kXAJXtpHz76b9KjUkrm2qiQ",
  "key14": "4sG1QJUjiRi4DVjpUB6obUuvjRpc3yyHkuhfeFi6E6coqSnWeETMqoXh91UJEtBTbNiJaViBWcBSCtzds6iWgZk",
  "key15": "44FzAmNcWNoUrvqBKEmGVFJRmKqaQoogyYEYMS2jrzgniMKiyPLMFoaPrQAVZLebwEMs6BUYZBWDe6ZVwUbKU21i",
  "key16": "dGx3nhVKrn2d6H9oxEG8xSxGoASRzudyVGkoYcR5jfXwzSifwt3yC85NjsUuyWTZonXweyqj2tzzZRKUXG1Ae1t",
  "key17": "qzdLmnybdZD2wkMFkMfafzAv6N3gjsci7yBEhdZ8iPaBz2WAgaKLhzMLp3j5MVjMsAwi1kq2ZdNcwdQMnfvzpuR",
  "key18": "8VyCKWcmENcFos5fAhZRPGqv9c1xSJ5kPF2CRmvWphgyc7WHMU9devHg3sKeoVRQibQA833v46HqimnyD768oB4",
  "key19": "2zCLKZoiFHGJpR6odWGGMUVLpPw8LVRvgL4SvF8a3cpVnvZYvu5ZUwMR2LWqj1L766jP91N3JyASbb3Sq7nSiT91",
  "key20": "5Zncp1eV9EwxbdGtqPGAHJmFnHz62A6pZtoPNTRzaJB6jwwtGTpkG4RKbyFR6nte15WzT44KsRELQgpxWNBuvusy",
  "key21": "3qT1kZZpouYFBijbQNnWa3uHooKi9Z7Dw7JbyrJ69AhzCU6jsXkaLCGTRX9puVjid1zUXakAQD7GzaKdytdrxaqy",
  "key22": "5dvX5a9YXPq9fbCj1z7cLAchDH6HakvFMHthkJv4bcu92bVGVqFqfQbWZALBDzpSGonJD6GqSDsExY7mNYu5c5hW",
  "key23": "4vNEENmFB2rLwjKcC5fLP73Df8z5GVigNMLrCznnP4JN6cN33X9TDqHhG8tESrRkVJpVVRuTmvJiEVxE6i4QnkjG",
  "key24": "NRgADPbF4cciHAfeFXCT4pgiRq8N9LQbvV7pbUzn8vrYTVxoqYDXBwXhNYGsExHyxfXhnhcGA9JCG8n7DpPm8yD",
  "key25": "2yvRXPrebbqiUYkuEnLJhntQvrszV2M34hvdi2TpLCai6DwmcmLgSX9fCR7tyNmeEvXv2Ux2XJyX7iHWT5YWnt2f",
  "key26": "5SSWhuSzAgSs7GqUsxg5V4wAaNawZmW1gKUZ56cqDw4oebmE7DCd9HFJd1HB73iUb7j3WYSkugbEXRLgbESUcW62"
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
