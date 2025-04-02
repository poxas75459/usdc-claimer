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
    "33rt9YUbqsVBWxFAH9mW6gRNK3TQ37aB7xEwcKC6gqp9EBhG2Eri4PYdbycWyAZBnVBxdokXJLNjyxQQUH5jBENh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyiABjcAa9Qd4ffcmuxvWV7hBpiko5QqfdKRL5iyED1qhRKQaVBzwTScW2HKfP72Aeo6vay7FfA7PWPyZoobr3Q",
  "key1": "swhdMZjbt46vvjSgwnzgUkhmjLxCLhZeaYQbtEvFKwGB95G3VhYvqBJQM3C5iz6VpWLxrsijCTztnTfTDYSNA5u",
  "key2": "fQAfMTfK9xFauA9ASis2pjHXcdToyJwQxhChbi3db6fXiRvJPJBH4p3WjTrxBdxQCUCK6ANWHR3RaQJ9ntKiC6Y",
  "key3": "2xSPut3SXLrvL5HxVSobRiDXZJKPv2zHtmZTWXtGqJhBYTkBBykNnmEfRtmve7AgN9ATAQVnf3FWQhkCZ4s6ie1u",
  "key4": "55cEv2HYu6x4nJ8WwB5ANx74Sf6sshMdJ3Wc3Y1GwVjL8JZ8v6WQyBDtiGjCUdCfwwKBVxLCZJPJnZq5MY6j2QsL",
  "key5": "3ZyvEyhKwfpTjtk3Fsj8AaW6wwcvHTRk7WJeaHS5p7qE4ysgVC7S6z8LYUFkv6K3CLS8JMYK474zTmNjieXQmnoj",
  "key6": "51GQD3c4Kei4v71z3RC9jpib3DDqG8FvpjR1LJRrDR5pjNUWwyUGAoFXHxFXVs6fUtb2gpqmG53oqS6Gmt2JFoa9",
  "key7": "59rmADNjf3ACyXX9zUzgNZRXQZbifKjBNAQtK3doXAX39ewPGYHDXc3ghv5KJVpkG9JSyCf1wpEhthuaApkoAzUa",
  "key8": "3qGTWcNG5ZWamd5gtyYpTmfRuxJvbJshUNHK2wSVa6186QgiKT9MGUXe2S1feVpkpELrxSeSMbVBJJ9JRGoRx6VW",
  "key9": "3ttX8JzF4ki1J7zAN9q3ZERqa9BfQ6UbiULBqzjQbBarPvTTDL3WdCTSkPfCNeXfYNZrgZxyNvfMbHUB8JuYv829",
  "key10": "MA1wbWDtLzrbT86aQUK4DWMqDk2oGg1g18Wr7p822QKyKhXacFHgFAPnzCzetjQKdr2GBEySwk4jyKbPWY9oqtZ",
  "key11": "2HMSpzMhzvywmMtAZARM5cZw9B93AGDUYBtNnZvPAUe9948hH6hY9JAngoZvLAgN49MPnyZx8Lm5y6qgQy6Yiq7X",
  "key12": "4FGorfcKGCmXp4CY8YiFb1xxdiFEUWoaUycCkF3xhdvR5A1vxCwhiUQYrYFxCfW9SGV2KspUq5vGekNoAiLfDUR4",
  "key13": "1T2HiusPLRTTGq2DKT3GnR8zQDFAT1gHEPuEsSANpQ7Xa7qVYV5hzsoZpjMv9P9NZAn1WB9SSPSsioKyt3KUgGE",
  "key14": "21dZNcZNG11RjRkWWeNb5VVqJaYDatJPRPgHLDL9An2TLWmtdsjHSGngbtpWu7KK2jd8JwCN9UL1eS6Tky96oWpj",
  "key15": "54Vs89kV44j7eRApKdpo15bT5FCDFQeFW2U5jP2o75pR5UgGzBxVUDwTqZnf1WnjqmofHGq9gMrY91pPUZ9pKg2P",
  "key16": "3RXo388eYJ3MYFcfeWRQt2ZYz6JnetDLPg4itNB9bFwAv7sVPCXngKa7JmKgwbkbX1iD4DLYh1VxUEYdK3ay8yaX",
  "key17": "55gcqXQyCxixsXWULHughvWFRLQQ6PG9YJw92sMtK1jS2Y84EtAj5jgbzqU7ycrZ3kaMkvZYPnCCexe2XLhJSBQY",
  "key18": "Lv6o4wk2hdZsQ2k3k6E9z7fNcT6jufByfd9m9Fdh4TMaGUPBKoHHn7dFHycgXTE7ssKHzQP8fYHFVZN2BesYe9H",
  "key19": "3WUzs78W9zdC1LUqFAnS8A4XCN4h9U2KQ9PT6c1CoNihht9ThhkFCJMTbokjiKgvudGD4vfPJJiBeePbodSJ2hFb",
  "key20": "64Q86o6F24vmhDweYHEsmfkAYTiJWdJRVZXpSrnLstrkJQ9RV5QkgV9URmyvX3FiqnEKNKSCVYXwiu8YmA41gRB1",
  "key21": "TfEipQycCg5BGtFZ67BcZES7e7yMFe7URcsM274bVNpVrdDwZcSqJKW6sz9RnJ6RAtv44iFawK6uEY5phiEQKUE",
  "key22": "4VzVE1fY5QfgdGs9HeKdayzcoxQS3riL2pzFm4pNbdktjbHXw5wkXkQzD9ob6F7un8Un5giUpb6fLTzNiXBa7DCd",
  "key23": "b5VWowdCDcbVTB7sW9Y9ELjvjuB6BXbb9oCysQDLtAkWmBeaB1yf7cfvriVpBZRXAEHPtpxWHucvJeqfJVzXoLh",
  "key24": "5QA3Rb7nPeQoLsG5AbxTsG2G5RVPh68k44yU9JCtAAR1SpJn6RZxikqgepsjc9xhZANeRMV2CuXqbAzYnW9p6eB5",
  "key25": "2niNkhdY7zvPDx7ARxJZ1rojRnGwrmkLUKUbUFPuhwAMFwrNEafofMzZx8PBpwqumgyVftqNKJJhBH2F2yUk9sqk",
  "key26": "mqMvQE6Las1mMLY9fEUHXnjNNvd6aCWYjGdxNrnb4iJ6tJ7j7HSRB19pZWHmVsxvy3ymZf4KsBrADeeyrK9vEke",
  "key27": "2LcXKBbsZYiJJurk6iy6RbhMBKvPRKuMKGYK4kTnmwFr1BpUWkQJNWP12wcvwUorysT2UZHE3yVaf958d2S8stW4",
  "key28": "3nm2oexK7dZr8ZgUThKNB8wqeHNtxrR42qLNqSZMxWhTxDaJ8xznCSyctaMrgXooiLuQgNxkNn5pQHmBHsykMfnv",
  "key29": "yFT49iqLxfg3CGXDWb6YnAqCvtaWYAAHb8hhVTAxPC8fnkq4kC6R2fYEeMAAYKtReLpUf7cm7vTY9QpL8gRjjef",
  "key30": "3n1zLF6besxydMw6M7vHy3KHsDgTGRyv4HSewRSYFzeHGYTXrBZMeujusDkRfZqD6bquraYRn3k3WhuDqVY5DG2E",
  "key31": "21ZGCFjtfAZ5fuzkrUZwc9ziFD1a8JCrTyB59eCFJCbQBguwQZJYsjEjwP4SSoybEpkHdvTHqfpHrUpCeVg4QMaw",
  "key32": "2XbbPJ337o8SSFG9Eurm9YyvcqNmPdTv82JhdY37tNfWN7H1V9YrtEQsvB8S817HK7aa5kTjAMGTSFi5w3hQj8Rq",
  "key33": "5CETpZAzXH7LnesCpxedW8NDJGGvtHX9dM2a87yTwMR7FWDVM2AePQZ4wgbGRdRgDUpKiVafbQ1vaG5UJHgRVoFP"
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
