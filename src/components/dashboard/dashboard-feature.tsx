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
    "5kLkBEpYLLcs3fDsrNB5LcW1gQxMNtHMnN8VVRVgupgpSUJRa6QKjyPwYWw7g22M9oVFXmiTncQcnT3qKwXUVUUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtP55TjVyenczp4XHVfvV2PTtvcqtLDc1ycpjZeHE47F9D9k5oUxvA5PDrerviwnW6nieVsLHBvkio2kup5vpnD",
  "key1": "3ZS5EkSnFMpBuVH7Y2rXAbdXY3kYMNM1oyd2wD6EsBj2iwwNhgtbBSEUErU68cri5t4VSGE6yn7spxJKwcDscyko",
  "key2": "5Qw9RumphtHFspG9aKMtSe4cPPqjzRnpekagHwDjkmy4GcysUQrbWfhvVnupi8pvB3ajDotZxr89ebFPBMFvH8Th",
  "key3": "C6QFMRRADz7itJofvBRPgnmwGpR4VikJGVQxv7Lk3vJwHfBGatdghgd7RhhnXKZ9VqUN55nb2Cvs4q8pda5JnD1",
  "key4": "23mUtS7bfJyqVcfJjuCxRuCMaNKfPHk4cYULQyVQv6VpypNxuPrW58VzN9joKgb2toCJqagsBHkBBYA7wN5cfNSY",
  "key5": "4A5SEfMrEFrkjejRrFfPX5atpu2KFhML4SNUGcqJgAVeSHiQLnFwwrE91MmTpNddz3mqeBMLRh1bgB4UX7YKErQp",
  "key6": "5aHZ8rf5sbDYiQnSxJhRt6UgVoGgVRYWJMR5Kvy5uxUPviqedev2oYheXavKgUdXuKzod9m9QJjfaYNr3YstNA79",
  "key7": "66Mc2BVFQzLFNpHCdGQeDpAXNpcDQKovQwCg9RzrgsdpPnN7adt7wxnG9qXojtZHcdfcvPgDuGFf4SsUW6z7YQG6",
  "key8": "5LRdxtdYQJEkptof7mmS5Vk7EPrGNC1YH5phEHZAdKVWXfxwrqGijTxuZzKbXLFv5tRmADQQBgdzdta3Z2MmBcso",
  "key9": "gBY91Pnzv6ivjSXb2LEWogrwLMvVnEN19AyVxyMJrdQBoh6wvVisbuZpCZZzFhws7LPeAtnnm16iNAnQTefMbWU",
  "key10": "rrpwjsC65KrqgvLfKhid4kCNCjeEPUHXxCrAiksVvuLCs3gno79fNnLen2bs5y89FA9tPAbCHUVadzuupYQo43P",
  "key11": "3ZEmBLjNVUwczgiMiq2CDKXdN45v1iusXznwkfPtG8e7xGvwoc3diDk8UWyKmNxProNskJZsJDYAkhvAqYmz9ZX",
  "key12": "65dwPSSAJV2DUMZ4miFGn7bWijTHVQUe87ofEajYuL2bAujRRVebT9BvJGT7rHVB4Sw8eF8qHSW7eX6fxg6UNqwd",
  "key13": "3Stk54MrvcoNMYzkbQfQ9UvhF5DKsuEmS6gKsW6ynJpXrjfBvRJYk4WcqCezJ3Eres3NT1icuYbwqmyaM3Dp7uS9",
  "key14": "2R3qN9GCo886DWwgEYBt67Hvr4YkD5Zy8WCn7aaMrB7C2zJzSs2oNzwEoN1PohhJyfnHozpm8fYfphJWWQ1rSTgr",
  "key15": "4KovMqPA7aUQVFDFWr4sfJdgj7Dwfm5EwBvfgGgrVp93TsJFQtK6U9DbFZ97LWTgRS2bAyZAs3keJQiqRZNarpeY",
  "key16": "5fMXkuNFMibFpupKj4dMo6Jq83A5igWTDvPiuAqBCfwheVEj8j9AMxAF6vzo8tSJm7D1w2fAnHBCJWxpRkCzBP8q",
  "key17": "3Ty6kdGH46Pm3DRe6kP3YabpafqXonDsRqKaanYe853SE4tMX4y7p4zjaiQnBPQ7j9HWCcM4uU8Ag2NPJCM5z3gA",
  "key18": "5dokR7hA8pyKL77K13vXNrLSJm5iZRMQKh9XeEAN6RCb11y9ogc3Jvx3PCoubqr2THQHDVWwYK2tU8YwgGPTxoH3",
  "key19": "3oSKzGCZL8i3W9UKYiv3jYq3RVSNCJD87qAMLx5FCdGYGvCE4afZTmgWUBjFdrTe8xiy1PYHeiFsSoQavy4vJ8C3",
  "key20": "2umCUCyhpEtfpfao9J1o6eKBUYEzfaYfSEcAspYKmoexNsGZpE35SWQtzygUrr6mMHBDVSdVE2r6KPNH3jZaVTPK",
  "key21": "4mR8ax1D9mWkc8QNruiawpaE1u1An5ofYUcbftCdHCt5xxn9qQEQBF8TTHUbMfyuad42kVcJPKChXP8NBcwgMyxM",
  "key22": "ZK9MLTK3C6ibRAEWnMTrgZMhyybMPaiphCLdmDopzQt9GFvd5PKvp4KQpSWvijaJhngnA6jXzpWQF416TEHuvFw",
  "key23": "GtRwyF1q3yjqZkyUrzQaoYUogHDE2MD1R8t2LufmUfCpB1WvXuHdCCTvuz8nXwCQS9FLXCRDWjMrKBaqQKhb5tq",
  "key24": "2VkW1PSaH43iURF8GoGG5pJaV9FkWB1a3JCrYZk21MGcLbcaW23A3g2JqdSEY4FqNkAY9DUucTzYM1bsjeNUgzC3",
  "key25": "5eCbEcHbZuLUzbicobVFZmBS3Hs5LwurByErC4zv2NCYcv8SPwF7TjuoYtnYss8d5yeWEqer2nkt7FUw7tHGFQMw"
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
