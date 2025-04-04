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
    "5VfG25Cdr6UaZS9d5jHe74UxMDTsD1zb4YbqMtoC2ucEJZnWSkJad9bySZ1DRBc7AqEWwN2gpoFSEAtSjNCnSYzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "db152cFvqU7eeMCbs5nNM3RbjHgSB5wkZZesPNKy7Dc9TK5tf4uYU9c1X3epEfvgnUFMxqYXK7ub3CuYMpvnGPi",
  "key1": "2q4GRAhxRcr59rUTuBatADrvoe3ZtcZMrNfUPqhxnQB4iSZw6t6CZ3vnjRyZZvCRPdFyf2yzmcRtewpm2CnLm4Cj",
  "key2": "3RYkqu9ezKJKEmF9Uhwi4oSdHSYVLafonUFeJQ2KmQEAiXPwDuBtXHs8ELr9uihvefBV2q7edP5VQPW1NNk5EZyi",
  "key3": "43fHkpaD9VadxihtEpyBPCi89UouQPo9ogpiTo4BxGvYBHxpJzHShSsZy9EboXXkXpkPuetru4TD3e2HSjcbL96e",
  "key4": "44q1wJ5J57Vs8jcTqgWR424zGjXsP9kimLRNjQ5UY5F4Wc5wPBxFZMJ6ptBTe6WxnFVqkq1xQpFfTUNCxXYWsGQB",
  "key5": "65LfZcVYz9rMxvnGyoELTxAwpwjRvLT8xMQs6XT6szkW5qiQGp64xSQzVXjW8BHnYDKcbYdir3sfi6BXGtUKSy5x",
  "key6": "2QWdseZy4JxLmwhv1DpLXdowGdedc4Jo4mDL5Xy33gnvak9UbFKhVN3g3uS9orVaW5HXDZJADtsypXfgTjDxkrSj",
  "key7": "4M1PHYFinVpb7rnoa5ZcCM5XePJCf1ETiWSqgFMAtMbHrCHbUjkd7FX5b3bYDfatDaenPvEk2PEwziUTMnEmNkBB",
  "key8": "S1SUcF4eXrUoDdTXEbiCMuPRuP7qpyNV1urCJxPSerKmtiFLDvBiCB3tkmCYLqsL75nqtS2vsYwybsg9pGsvkys",
  "key9": "5HJT6J2XvB76wLMtDsyaYQfnZFLMdAHmTbxMyp7QJi1cidWrEn6QH3Ekg6BZ4HBpnBDgVZaMKcbvzUBo2qYwApmh",
  "key10": "5DWpD1fkQHGKvm7qVbGZTV34bCwfMXkdVATPkBxAGz8z8tFZD51coz9MgrhNDp5K91UJgxcpmEA3BSMAEXufqv36",
  "key11": "Uwu1Fk6HWL26BNfFWpeEi4ZLJyU9nGykMtJ4RobZ88a8ivDN3ehSDyDudh9zWEKaiXVbvHA8wZBKv2yUqBR1Rx2",
  "key12": "um8gzjZ6VbjckA7EeXhjkF8c4H6sEUCMARiV69JCs4tkZMSvmcA1AZSU96HD5fy9JndSQ4vrJ2jqgK7oVEW6UN3",
  "key13": "3C6HgGXSTSEnq8vLJnj4pYY5P9Mg2iobE3gEeZBLpqBKdWAveXGCsaAQXcgcmHD4Ry9WC8w8MNroVUPDsvXKRhpF",
  "key14": "3V8w3S3i4ZmWtqyTHgpeixuGtkkcjgJPMwcDtUmCw1SxjdvLekQmBTdJ6Jfy1LD34NW2gWXabUzc1ip4qvPWXDG7",
  "key15": "4YoXamYWsUbrNJsNmoXWr6jrEcrMjGxjfkBxYzQqCLFey1riqJ77R8HcuoHR6Fh56dr9X1JsSmE6VPezm2y4eQhH",
  "key16": "546TAr78mB4oBhn1NuzGGpqaHcMSCv9iBFijhmNgFopNmgW9BL7NXKTbPqaZTD7GmWLZrGgZxiww8egg4AjtrRWe",
  "key17": "5UX6wQvuJcZ66rAzgveKj1zxBJNUAUjyRD9AwomtqkAWUC2jcWaB1tVemh8XxZcUiojYaxPepuZqPLnm9AEmmWX3",
  "key18": "4FbuEKBncMGg6CDhve8GxPGGEx6e7KZpEyChBwEYBp94NRWuq87hvJy2QdnMsjKNFZ4SwEyJqUjip8vUs6JNs4Zp",
  "key19": "4HRAai4Vnt7rai4J86esste4kR1d543GJMUEf9B96DSZYCnxKZiDMJknXsD89SoqgFLpZCeJucc8g29yyAs72RRg",
  "key20": "dBuMY1MfursQFHJ1jxAVMYF45uZL3KVCqu5j7NUSxYuYS8iMp5V145QPmDku6PuCSkEhoHVdV5ydKoAg2DFrxVN",
  "key21": "oKgrGjgJA7yXSVLYUEBJ7wrSAt5crjj94A58K8CWpNyc1Hux2pEqmzVDtokjmuebBEziwzNywA6ufRXNWXsWSv5",
  "key22": "65JqGMenfKmcusRV3nNVW2ymfedNuU5cnkXgBqaQDVW5Ycd2d8CSK3pAwqk4RtN5YGBUinuU1PswHCZ4twPLCWo3",
  "key23": "2KxLQuBKmmtRq1fL3wXQhNHvJXUHJHHb3CrEkLs6QXYG33w2AaCfPBqyfaDLJ7KVsLw4tU1AdTzJEv1rKqx9T6kD",
  "key24": "4hAkaiFqQWMsHmhcwimB4voVJMbFmFAfzK5TTWW3Y9JprBGdUtSxfhygGqNfaoibUewiA2fhz8p1KbopqegVLQBg",
  "key25": "2549zJmzm6Nh1bKQ6u6nfA9tApRZzzJfTcQHajqFfnCZXHaTp1isT4iobvGdPYPF5WBVhBx8SDHa15uhm7sTE2UL",
  "key26": "2ywYb1q6ZwrEg7TuXFPMZLLJJM6rY9gwfzVBN88Rysb8BvZgE8pCMbVMv4EspcmkyfFpJC2wiH4CzHXzWh84P2xy",
  "key27": "bBRVXd94dTRCnQ7TmEzqncAsGR7v46UEZrfSnDZ8eh2zoF9pnhRKgv76H59d8Z69epVuLrS7a7YFunbEJmgBUUp",
  "key28": "35wHvcxMYosoHFJ6kL1wkbU4Hh1vfvAT7oeX63EPLmdESZg8gW7FbKT3U9SLsrpLPBfVeQoXAykTEcoqL63YE7du",
  "key29": "67bncxERmJw1d7eGU9icwY9daxkBJxmP5NyfWK4cNkjXQX6NApRWrHr78i78L8DM7Qjr75Ay3DFruUfh4ytGStim",
  "key30": "3yhqep31fj7DQg26ALucLgF8GbM1ZW7Xoy3P89XBCJSiTs8aoXox1Ep8WKMHnx9UHeEcuBRfUSmmcMxdVWeU4eCK",
  "key31": "3HzrwNBnkHAgWT7jTjJCPLr5hcKfSXUpF8RcLHBmNDFq696V29TGjMFPVpNevo8ZzeC9VygcjoU7QsPpDPuA32H7",
  "key32": "2sE9ZsBFU7Bh8FR1F5FbRTHG1C5f3Cs1EckAbXjuLgmpZjpV1jMepfC34tLaPW6u78cG4qqRi5yHAbxSKwqMaHNW",
  "key33": "4p5kLCbMxGdxt1wfgT1bN2MVnFsJBFf7P9SBK5HgnxDhBxFTwhzu518rVxoR4wZ9enrZrhvrRqJHtqeic73qgJtA"
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
