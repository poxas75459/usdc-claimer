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
    "34k3VnLhTCHwZsaun8nrNQ77fpSwzMHCETEqmy3Txs7e9ipzxVc6coscUuGUSk2kmcc872CDGfLwRSPDjZFAQy4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgYn9vtQWRG5P8jVcWpA6QUUexLrQtfP22yA35EAQ4acZKZvB2ueVUCqdwr1YDYjLVNGYkwD9YEFDghpLHyG1hr",
  "key1": "4uB31DUegiA9Q8iaaGGvHvnFUmcXGEPv5Gzzj79n79MQFrYmRFgHR4cxFHP2q8iLSu28kK7kbMdeR6qTD5E5ezN6",
  "key2": "5wpYHLjXZhPz8dZWeVkpZAb8w5nJAZEm1a5Xo7EFXu3bcADt9wETrWM89jcKSXsKLNr4Lj3iM4AvRwCB7jdkiYV6",
  "key3": "1C9QHGNWY5DznaNRmjyQa5i3sd3ntnbDiVBjEvNYbvMuzGzFeebhbnvQP8BpN8pmwXcESpoPXZ6GZBPsKmUBgTb",
  "key4": "4xNYarRzDgn21rMfXmpaopr4r4hu4UtRGRYT7t1nxvyTdEPNDU9cQdVjYNnHDTCCVPKq8T52UyUfRBMPgj55vocA",
  "key5": "2jH4aMCApjcmfm9sjnTbfzeqkQLE7NHmZZYdcJYNRHUurvcGj4sMsiyc8TC3WVaS9StUbwpGrRJ1yBcz5MEZpdpW",
  "key6": "21k8G4zYqYPngWrdbDHc1bPZvmZnSqN8U48btfBjjmCnHcuwxzTs41A5YbhKWuoUknowvSBCrZf2izs41RxdnEoS",
  "key7": "b3uXrMxPHZW6b6QeRffjvN4E16TxYQh3vCVe6smEst4mngHV7EuKmuRDQTEpwwu7ZA3HirfNhPtzQ4JrfV9zN9j",
  "key8": "3eGXdFxUmQY8t5KeeCQtLCLkvjXLAWkJYKBwJZyfYTZxC2ncXD5JQiokrY1u3A3XrnTrY4VMrDCkszWkbDEo9y2m",
  "key9": "2V5p8BQtL9qSJ1U1BGahCRH6c3YE3uBeknzZ3Uum7MmjZhNFNEHg3EtJWiJRVXpDyxxsyrrdiKTk4xEsLQRN2ZeJ",
  "key10": "3m9UfH8rnySc9DXGocipQDsaXMzmD2igCBGSxQnvAMoYR5yvLHsRGLv1qCeBRkpPifMD5YAgKw96G2odGVa1EGsj",
  "key11": "35bN5NuiwojNsJs5w9hRNiSg6JXSdsd57JVpJEfoxFB9Xe7R6tATQhCNPuVGfbSUtZwzC46Jke2NkoyaDwUCWBXn",
  "key12": "3hkqgpNs1d6AGiKWFzeJqn7PthVQzMWu9oMuV7ryhPicfDvABc83t55uZeqwLzQthDHZLhbgWhyRwfCNnyhkUWMi",
  "key13": "2WmacxZEcEGxWDmxgzKf1zd8avQLd3zrTt2AyUdkcN2NRiBFrpHmjYeza5pAX4TddR4cYix3CnCmzutmpSb4uPBb",
  "key14": "51rpstpA8bUBA827nmt9rk7nhy9HrKKrxwiqtEQvC4hYnyANJbrsSTpmCZvDykb9Naz5fwd4YmeMKVwvMaqfMLvx",
  "key15": "6eXSmkhdGjYLgC7KhnBTTVt5WH1vUYjMnD4DrDdC9sF6vrgvnvZy9zXqu8HHS6ReLdwJKmYT7qaXvCfXExf67Mx",
  "key16": "2YDqVXZqdFTsDxoBJxe2o4yZi1GxsuSjq1GxKnNC4XHpjytxhc5L5Lp3cTPB3ukDSXKVbjZvT2SPtDGPdtAs957y",
  "key17": "5daX9pv9pt11CJBi2bYRnChZi5R7Xa28yWscaynAqDiu1M5CPUEyqsb5jHcXHL9194QmSS7nYLzSYq7L6b6Dtgq8",
  "key18": "5yW3BzNXtfm4UMgcebGc1LcWzkwH6PRZkqR5jESrpeRq2HUWvkLRDJNna3MhfxKCXAMpL7fxwo39jCouwVByX9QT",
  "key19": "3bTQvcKdUJWVoFCP2B4CV5yj26N7qeM3p4rYwpKLbpE4uaRpdfqkMSeWgudp74kTE7CzEv1fLF6UoEjRcgLp1PGk",
  "key20": "5wMHnDKCvsHm88mscNwNeHpaWX7oN8eo1QXvzqCJPGjg2kvSfUZcssNUKcotBNL1L26doeEXVbbapx3ENdDwDQxQ",
  "key21": "4zeiMtkd3eVcHkZtJneq9F5WachtR2dYgfNHcrBRQJHqrXqcSQfxwvf1cdpZbdDAPadkHbQvewGhvoLb8KwQD75z",
  "key22": "4kEyTzUEMYmU9g8HbCqrr1hWEURD3VjmdCnM28Fr2cJvavc9XmbrqcHxrS4snW2XNvWiuShxM9KExZT6ALv5Dz2A",
  "key23": "2hYXVvqL6j5ey7ztbCj9xJQNoMRYxnuPyV28JssDBpQfZdZLYeKud896AzzKT3RaD2rarNYtejtb1jzacyVVt89F",
  "key24": "2jygpWD8yW3wx4LRdSWpD1hpbVqfMwz9uQF9MJX5vbA3rDBdRKEWjaPUTEJstGevtMGcER9nmJ67qWx9z8Tq92cH",
  "key25": "2PhyrLgaAiRaZiPiupPNZfw7dgQyyDmL9QjHRu2Uxsygu4uqPR3U1Kavf4MYgwCqCDoxRoGukQWS9Dz8S5Sx9fBa",
  "key26": "4nBV1LnYo5fuybGL2GuJYaBicJZCrtagUVwmj1vbNs63aDY2etDXvR6j1u7SYT2m3xLrM1BVWZK8GvTo3NdqVZmF",
  "key27": "35DdRjAgUgED4yqBGyocVh6Vk3YNUP7gtGzKXkVZzKjZvGwF2Y2xLsDBAg7XxG5jqWVTQJsfsgkw2oY8xuXNwKSX",
  "key28": "sTtaJr9ngzcjuHEWbCy8navbz3fGvXiDkjAUkmC4QkPEg9qt26EfyY8m5Q5K3CwXceY5bwYGmoUpsEfjSWxrJqC",
  "key29": "4mvkCB2Yp8WUwwKLo9mb2Q3cyGHDPzmpgggVSagr4jRHcWETqs26ACq6TJGFVVUQbxmwAXjqqNL3ht2n9T5pPwt8",
  "key30": "5gWsipz3Y2WXdsxxQUx7A3UXy1XLhAkgafWpnhqoDMaoGL4xege4nR1TArZVyCNnct9y5QUZiom91EACzL3GtnD7",
  "key31": "2Hqjdzq8rqsN9dfrQmBT7352Zr7dAjv6F8pjVfyTkKrRKvit3SyBmSrB15AqTiwmcAa75ph96QJxTQWvTpL5tL9r",
  "key32": "QH2L4eFKnoqmzXRamHeKaVJXdUnQVL7UD9VGSHVL8uiCopbM25aLMW4WQZFrRGrL7SUoZLMmesXzFb6SnxZeZXN",
  "key33": "4ttMnudmr5qP3GgNbdC9B5H49vdRdGjP4D4rZ2gMwuvjSYEAX5y8vaapS1WD5JtcKWsZbCaLpTxYAiRb95DVvLWP",
  "key34": "5QWE78NQC2pbsmcZWMCqneiFNVaaup1GaS62jbjNevTZmTNJsMCqys4yRNWReUZkXcZZAPnV3CSRkJGK2Z6jDDgv",
  "key35": "2xwj3mLdAT5ayZibp9jv4QQhLEztQDLjae7BVT9DTkRRWxpXuZMEFKk2g2jyizVeePFksqKL4yebqWnEr1weFUqS",
  "key36": "njMXwiS7EdH76mFXLqu9TCMB8PCBSnSkmkhdBfyqsboSeXDqs7xVGRFxXrLsMY9CRqsEjp7aJvnM8i4D6BbkT3V"
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
