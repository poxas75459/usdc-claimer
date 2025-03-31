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
    "5avWSP4VwojfVZbi4wFwCAMUe7gqf821q18LizwadFzjTmuxF1k2ZNiCbYaFxxY4pdDYKnvHi2NCCqbfRTzTuw1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAEAcyw5uQkDDSaQUsx3znRtH9ndfMRHZfXVnz27bwfjanL5n6Dioddj5UKRD9MoqqJagkGudt45aCMjy988Zjm",
  "key1": "3jmQcM1xWfg8uLeVd4zXUhfXYStvUqM7eU3jyDA1wT9mnBQDEwaGriaKAYjdbeF33GZQmX9Ua1e2aZgVdRyQvbY8",
  "key2": "5rfrG4f6ouBkEPFyGqzwyQmRNvaM8hDoqFyDJGWnhJtE7Y7rd2c6t59zmkKjpTZi7BQgXq2tf7Lru8oyTHpfMzqT",
  "key3": "DC7bQXTiA7d43rNbQyXUvLdvQw2KqPdPEYpxi4V5PMJ3A7rTdcpWDHSfLKHmpm7SZxg42scvFKfbF9HuxZw9ZNy",
  "key4": "Yb5PYPSNJe9CH6WEwgY9rPoyz8gQ1UUsxu2N2SGwuJZoXYrt1RPnKcruRxKgsQVokxys7CFt2YLroSvwh6b3nEd",
  "key5": "5QH4HoqwXe1GhBqQnBkdmtxrn7MRN884KmpbemJqPmcDWpx4TJAvwuunxtoXmZkL5ZLVPcPhFhhci89fSAHAxfUE",
  "key6": "2XR54SZi437zNhVunSgt6EFzKCvUmayUZ5YFKxnTJXtx9G2qAR2gPfcns1M1U6kA19KZtuN9MwuKsJeCQicscqyS",
  "key7": "4TNxaLoZ6eQLnotY1YZEvE7pJnY8vAo2PESMLaGuvJF1KLKf2ioaxqCpFi9m9JdMaizBDfKiAXTVa7X635YsPBZF",
  "key8": "4FbUHgrutbve1sscTHz18uMrAP2Vhx7EHEu5G8sRQ4Q2vrgDs4opkcMgtmYV2HrYB1hKijAtxCwVA3BAQ54zq5zW",
  "key9": "5AjDLVoMNyNdabzh6NjzhMZMQw2vewKkzpXRvvcdRzXmQLvMUNZqLbJ8yNd8y9gLwU1jHnPCLBum4UFmLMiaL6P5",
  "key10": "3QRkqGTBCWj3ntsYEHrXLTuBedxSSC9iyHz5zXpCtsyV7ySkcU2bucMFQ9Z2xPZrP3LjBsiMA2cspK3fYYYQEVr8",
  "key11": "2JLmaY14ksXBi1CJrM4rbCFoRPi9nhjDVhYrhBA6KLH6vb86nJvW9q3tUgQt6zwW75wRNt2zq3wGKKi1n6YEEgaq",
  "key12": "3jck1gqSF4XYfsGxcbGWDdt3YFoUp5A6whTxsvuLCvxPdCnFYZZmwyUqaZnNtDAxhkfH6kwAdwoJzSLnzYyZoCnp",
  "key13": "2JEUPQnpgtjSvxDp2ZaQpCkYNpQpAz2VBJvSqZEPaujf2gkdxzFS1rPirdd4avwKZn6hRcoTnixeZsuewytoKndr",
  "key14": "3VmVovDJn3h79VFrsucKfX8bdn1PDgsxzrRyjnpGafkqn7iZKtKzKe8yXg7b4Akv9dAeN9UFyJDst79skKnNkEvw",
  "key15": "43TFhZJaw28yCW9LUftWiKPqv9mCm5aF236qETCepKVVgFkhNCuxagSF1CCbkMHhCAJ4BGu2RXEt8yNyWW1sd1gw",
  "key16": "4kn4aRiMNb7DooiZDNnidDbm3FxxZttRsdyGMJwiQACMxrG7UZQyrwoKpr9KHojbhxcGnazeTe2Cp8aCMDTxuGwB",
  "key17": "esHjLAYVja3qsspNpaaxKxRiQfZG2vKwxJ3KXudS65hKxSwj4KjpMrpVdPSK4s82gtNcj2yM5zSrozrF8pUAyqi",
  "key18": "2vRg5oAGxSPw4S89dRvgaTxfG8M712dWU4kwqjogPEaXnEAQdy97rL67ykqVDFFy8RhGtJYBUAdr3ZNNNk1xPkk3",
  "key19": "5qkpedHBxbXq3A9V1PZtpJF4xUxYJx2xQwruXnYZcWWjmLjJJRTTJup6ezoadEuyj5PBa9pNT3gWYot4ZSywAKTL",
  "key20": "3MhCkiw52MDCNPTaCspitgKsKMo71WLJYJfqY2T17MoHh5X9FryBeSnuh9Lj13u6x9BFTmvSDtsKKKtoZ2UABxzV",
  "key21": "PU6iU4rAwQ6CBtgj5no5cW8i4iq13irPZRhwvgabXao4nPHwKwftBmH7afnwU9CZucegeUWrvqJHZLT8peRBpfR",
  "key22": "5WKduFR4VWg3QaLdphY4Pmc3vGSaPrdG4fnQo2Eq6w5YHvUQUhDwzwnhkm8vGozMMfxZedX4XG7pPcWWjdcfaPcJ",
  "key23": "3K2Jnha8j49RmaRqFQZxTXNu25wGZ93XapDKxXBW34MtqLfjeZHEjpeYDtxLFVcSHesUoZSknrH6heh3Gsr9h2tt",
  "key24": "SSoKjG5DV3L2SoLuY89ecqLm6qfgYhhCHTx4Dvnxqnkmu4PKTgbvcNRsopiJC4V7vdMMhBKxfXk9gujDWKoo7XP",
  "key25": "4BBLLFYiLiCfcXTd5yJtg4DKHxHKC5jnV9VYA8y9A8RLFF2sfFi3BRBYAjL6Z7HTNAVvGmgPAoS7zZZzHDGKeVV2",
  "key26": "3LLCFhrUFbxutJXp8QAWjrfCEpipBUx32DGmhe7URYvpN3TovEZpUYCHvJBiyS1X9PLqYpec7BSkJTqbS9kDdpeg"
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
