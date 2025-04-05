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
    "586syeyELLMo56BvooWkyH5kspy3YRzsx69Z1tQ3TX6M2HbwMDb5C7b8QtLderbge3PAUU58kDidbziR1mpP7PC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKg2vgCDLyJqcxnbkJgvqL2hmQ7umEjY6vucxfBSabBBXoEqpXtaHgY1R9jrSJXVWC6ZraHPFfqHWGpvpsWRgdR",
  "key1": "5V7mytLBsBSm8gKrENh9LXLFZbvVeTGHsj9KsJ5DXhbRQEzjbAeRMQ6FhJmHG4Rvv2e4LqE7p4t2Vs5umcYb8MAY",
  "key2": "3hf55Qq3B2CHRv92UE1S63t68XyKnkQWDz8Fj7dnt9QZbyK9PjqJ71LfqNfWHj5WrrRsqQ1WiaXPRZjTYHUqg8xf",
  "key3": "5LGfBjFRgkBcsi16NPbXEwdNuy28x9jQ5885jD9AocbrELDDSHwPtRN5RG81PKq8Fii4mgbcbDwX3V6BAK3WRaTW",
  "key4": "3Fo1rUiwydQC9awmvvLRViuL6M4umoTE181ja432TB82zfSiQzAtgMRKJnEWHqUhuFCnUS3ncbNZN8jq8tNG7w3m",
  "key5": "3vMmoMmkMhqUCV2GoKw42pXnGXYxkNAkLkLfzeJXnvXGb2ESFqvDyJamrH4AxLzKqfMyo9f9qhWrbDYe4cMSZK2P",
  "key6": "2coaW5wgnAzR2T4nTbtQkmo8MqnJ49SoT2ViDRW9V8H9AfCoDbiGSDbLZzHAj12rkPedUKLXX2L8ejYNqnhRB9oA",
  "key7": "3sSFYLQykVv4Vo7zAh8p7rdSog9xf9MDrfQ8mNuQv3WkhYu5e684KLR77jMz6298DudCAr7yVdF7AcibMV5QfXdf",
  "key8": "nZATm2FkMafkqYDndCCGkrXDdYyR5CirWL6rFCe7spmwGUsfvF5ves4maKaYRp9un9et5DeAuh5EDyRCqsP7PcM",
  "key9": "5nWYeqoiBYMABFfxjxeZTH2NLUf5QLcLzHop4zwQ3sp9GE4UDrPxzV7DLMDWPKwL3Wkd47cpTxCCDq6SvRHKGLfV",
  "key10": "65rF5kv2T8K4CrbzF1JCre8iKRxiZVCvtBgV7btJmYsZw3xqsRUiuEdufjxKPvphyutfYqaZs1u6TPncev8AzK25",
  "key11": "24csirLkXnP9YssEeaX6kYMSeRYgStHryd29KNP2gXg6QDBYEmoLqTeuq4JtioD6Uif93pQoES9LhCFREZwpV4iV",
  "key12": "4iGzJUzVFJYJUPWHfHXsjxw1rVCjbisiMw3ePJkYxAjWVwLVVJjwD7m1aToZiG5BHSckrGsJSKRKtjvkTu5R39ZQ",
  "key13": "LqkigKcJqSNGSMtZpZuNpkV27e12R6Q9LJn9tH3jVamfCJEwwgXsAYMVos5FhfMV17AK4rSjL4aDayR4FdpArj5",
  "key14": "2GQnHXA9JFpwyww9YS8uRiyNMtGuLE9jiE2Ez4JYwgMxgVmpLKNTjw87TzwP4vS1wxkKwdUi1YANQjZysyuGgiEp",
  "key15": "5BzPeDgF9c3uDg8fWZojyhKfk8131MCdGmwSfyAKkyE5LAega6Tgk6ZzJGqBe5W9F3EWCDVymMdfWCd9Ugh6zHKb",
  "key16": "3tfxzJJkvZB82t2bJrQrsbTm7AzrSHRBrHWPPUWR7iihdQY3gBCiKbKhCzxs3z7mRyd64AcY8f5Siky6CC3Ar2SL",
  "key17": "2Romm3FkrNZAoZD3Td8FGU8YpwhUVpYG3uDczPK8NqbtsfDa1QQ4nXimMvY8orH3DdwQ6JALkXY5wBj4RZ8dTYz4",
  "key18": "3zqy7Dj6aKA7cYnJYK5VyuTSBEbPeWWJZw8Mbav8dGicHekk5tg4xhpizg3jwyK7R1cC3sBYjgNXbQQoNdShtrSC",
  "key19": "2QD3z48qaU7AFDbTrk5t6LcTcSaEMKuv3VJAEs6GGGXwjFjucodz2AqXLeVSNvjQjegEWww3yCiqTPKMLs88SMrF",
  "key20": "5VAmPdDssLUoEm1v1fAgGEDFMCe4aw6383zYRvPLXJUQg4wUfnYxmyvCgF3Xv3EZGSuhKeH2FX7aPBd9rWgEkYB8",
  "key21": "4HRqvphUj9zNncHUz5ZCFgRUuZJ86C4K5ywAJmQrSu3J7Ht9SMwCUXqYHgxbHhaQ1onR61QjQ1edyXUexk52cz2K",
  "key22": "4LgTm8Q1orNqPyLqoPeBs3khADSMSGyTH1KbdCCcDsrj7apXm54HsvKq2zRo4r3gjpLq88zAvScYV6xFstT3RgRH",
  "key23": "meQ5afFj4pAYbQVn6ao7B2TbkQh6UaSxDX8yS2fx7FvdFgALQNXyYkvKMHbEvcWgPXyeJJRBmaVvo1Uk63gSiaF",
  "key24": "5SBCrh9Dc36MhhiZL9rNRepAVfFARZQdhzXDygyEjhR3kK8ciB3ZGr1EmPdMSeBqJf7SDBngNKjdMr6fXYpAdQeq",
  "key25": "5WdsmW8WavMLmgVQ3uTdkPYCSmbuJmLQjZhFiPUsXL1ZmeYo2MjNVrriHgrvuaTYUnq9AhS3aeVhqxTR45xggep9",
  "key26": "2EMUn5gQtLxGUoqxJAHRTUDZ8KwakH6ZUBitqnPXdLF2a4x7wo7svB7RJkRugGzAN8sYfWMc2vt9H5jdozSYJ3Jx",
  "key27": "58y3yovKmW1eR9125SHDEJjKhQ3awrTD9Uw2pkTGZqxxwmXNEzL16wiUzJD7ha5aqaRvXQ7dgVVdr49idc6oHXaS"
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
