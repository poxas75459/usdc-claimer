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
    "2EMKMwABwZCfS13w7uNVvsAapEt9VDcRYYMWgyTt7fT1jGUEJR1WiFegi3jjCeEg8gsy1kP8GCBYcd7LFJH6eLxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hqwQtwZHEG68q5JVx8h7gZKzKrV4cqzM8pmSj98VowwkY3wboPMDwfcaCNMB6kAAUoyVoatRBKG4yJGjx7xu5A",
  "key1": "3jBp1jZiLszrogugULJy23khargdp5w6Txc4GxmTd8hNLhsSzpk6AbwGW6YfaGNf4eGR2KjoikyFd9e92dbfDtcc",
  "key2": "38UaDDS6sSTnbVa4WbQXieqUBymHUBnGGWSj4EEmzVvgCNW5x9DHqrYeCpnV5EGxTofQwzwEAVvDpQpin7bbddr",
  "key3": "4WD9vVMTYetYyGP7HV8owDUpRVNMn1nrxTv1jCvkA2eYJBCJMVWJ96nJWBAxUSXoyZ6ardxp6uLQez5x7tthUJvi",
  "key4": "SCJkADRqWkpSG3g9tfC2KBtM4nDJZpkRBu2byEhnFc4qvFFzh3JquYabGFg9H4dddEKydx32ot62Z3muqBfexPB",
  "key5": "5HZPCmNMM1GT1rDXda1EkkiK1jdrLkkQ9yaDeGip1aQxiqdXejyMtsbiWanEDUo2moxDq42N8iUkNwB8akEzG5bD",
  "key6": "4v3FkVxSjdNiJbPjeYaUxUXX2iHE7TqvaJgCkzHWypGLmQEam2fmaZkqrJW1eTzWMMYAGKtywm4XccdiZEKrtF1U",
  "key7": "3wsceoipHJst1saSRxycJHnrmULEJHi1rU7Q731kLN1ax9Fzm5JMNBByqcenkNdzMZPtGoUE5gf5dKXv3t2jpoPv",
  "key8": "4H9tEDVTd8cSCjdVGk26Frmn6btdBTvzhB1aG2hRtQsLLWaJpP5RUPxKk7HJAApGwt12L6P7gycAdNoZdD8qJ4xB",
  "key9": "KGioviroqNRPCqyizqMsezbar6nJEDBJ5BF8hyavHWV7NJNueMn5BJ9gmAf9TJra82CVBBsAWAHUT4nXUsCG3gJ",
  "key10": "ft1UbjsTaFATsDZStr9RDBAhn4Q4Rcp3xgFjkyKnN3Sz2or59HvqBZLaxtBZgySjo3ye8QeUb7kC7yuGHpm6S8w",
  "key11": "31a35QTtE24W3GRsjt99m3wAhbJs92RWbKKqvTFwcSffBdN3ZbpqVxKKRQaBCAFdwYAuKtPVnvxEo8vefyyqLQ35",
  "key12": "3psJCaWNKVRPuVwzo4FNVrzumyCkTAhbYaD1P2GGHLErquLhdGFJAEef744mcPrZtJcekXxPU4mR6U6KmvrQ6ptZ",
  "key13": "fcK4f9tvMW7J61W653rrgbXEmr8JKXgY4nKYxC4MGmyt6UJA5pVFoSn2kWb3ajsgQHxt9G5nyQcjpZzNS8p9DZq",
  "key14": "57C8WckopoQn9ZtNrmx8Ekd1L8iJ23pEQTPJxvSXWdRJ56LLKoeTxp6k1uM9ULPdtNQY5Sg177td6fTnStJkjU7x",
  "key15": "a6dDFgjCaqsSv3HdEfNvQHRJFNqAAGBr7w1vCTqCRY8t52sz5QVMdDxDWFScY4HVBddMcJYjSDCZu6ZszPwSMpu",
  "key16": "5XVmammx5ETT9uce7tVz3kArZiEajUs9CMQnyJU8V8PZhgGVcufwuGeQAKYYWUdyDT1PuoG41tevut7MqUbEDEgp",
  "key17": "Z21JREY1hJsJzT23XVSvzK7uf7ZWJxkKMXZkcngMd16t3bx9k5Xiqg6MwasarEm5CdrMYJtEzkbeKwCRv15JKsZ",
  "key18": "4PapbBqRJ5zWZ6oeSk5Z4WdAMmYSXKCKjkjCPui2aaL32qvQ5FeZoX5mdDerYe6Gq9XiZ1okUZcLmvabKjhfByHr",
  "key19": "3cNgi8CyJNgPbkQrbV1ARRfD5aK4qK2Rm5rzj9iwGpvWgtS4XLk1vVDTKWEwBqksJkSor6Djv9ZbJRHwxrYgkmPE",
  "key20": "3v4rDwKzwcwF4ZWAxGukxDdWuDBKKwpgBv6jwt1zKvXRTXcZUpFUSQH6F3oDTZa9NkEuXLnfHKrsEL9Xe997N2kh",
  "key21": "57m5DhCeyLyCdB9FTYCEwtwsdn3riaNXVWtiiDYpz2Nm3o6a94M1SmicMeY4YAd7D1vCGrRx91abwLuhQCfdJQjy",
  "key22": "2Tsc5pKTDjn9uKgQGDuro73GxSgWo6zMLe4xzSEeLBpARYqsjhuxe7KdwgsXPfAjFHdN6UG6N9ZB4syMatPmdHPD",
  "key23": "5PFoZ6BU29vjuCJhYpmRzbSr3Dy2Ls1ZYepGi2C1QFHbsLN4LKq9JGxLCNvNU54UKNmefX19Zrj1GCNYEHFEVwZk",
  "key24": "rAusrJpPcViTeafPygaA998SDTj6Wr3ESUd2QkLbzPXNHtbgyF58k1zELUUNnJQJ6WBjPryrcZFGZSzr5SvM7yP",
  "key25": "3yBJi5F1QkE3voE6vxYyFYRbwRMBmPQdeB95UWpo484ooGWZf9vJCsikGqdEkTwRhWKDFmXT13S5hgp1JPGzPeUX",
  "key26": "4ZBKKo9Es4GLkmoSmWc9KNcnVW9KNQSr6e5Pka7CF7CK3w7GNiarJatiKq3fNZpRwCurVamgT7xuLD9Z5nqS37Zj",
  "key27": "3ZQ3AjMESeNb78AApkVYyBESaDoA6uAL5dfpPGNB8VzdW71eDcLqjWs2rzMQFsAAaG79D6uA84DHAXVeEHYTZfvi",
  "key28": "3dzY7qimxM63SLLa4Bz8nmkczZ8T2i8mCJfu1ZhfWrTkQ3obgfP7NcBXA7Su3YJ5sRS5GtQwEa19LrYCDHY5ES4G",
  "key29": "4KYGPsZVNe91CGrt11xX6sm7pAdmQPkB4gsAWLJjuuwG8HeFXSbnNUYEhHYqmhyUa3T9y8kgDq8ndxr7c9u5CuMf",
  "key30": "2VAQjNChPNUv3YMNoXgohEn2qYXPeY67aCoJojz6ZFv22cb1AKjwUyXDhZhvHwh3qPF188xrUwFtYQyS3n4MNpau",
  "key31": "3uit1eztfmmd9rTkeYutRP1tCZ8V97dMSnvRSzbXQPvRKEwrqD7i9ue7UHtThWJW5oYhz2b1zjLXsVpZkUcwJpYt",
  "key32": "5591gvUE2H65KV2KbVpXYA4DJtjC7i4u3FrhmSXsgbagQZW6xKNBnuxf2ksajzYFxt56c1zPqFGr1zbVzRxfnqoX",
  "key33": "3bfcJNvCrHjRDX7zrgPkigHDjiyodpdghKYYbqtxZH1dKJJ5n7M1gdQCh2NybEfH8dJ7EqCzwSqekLz2grP1iJP7",
  "key34": "2VQHXaxmYV2U5nuAPDaKP6Du2q8PcnqkQbLeAY8TK1EsmGBBmFSsWgtdPJ8qsiBadVDMXdmfRvLAFwb63yALyz5K"
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
