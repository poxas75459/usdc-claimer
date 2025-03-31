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
    "46eiVWjReFrn6mFBp6jpMYBaNM5LUE2ggo8WmjKNgedxfWehBHtJicSLZGkikQCYzTJyLq3S4KpLxbAsSe5859q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uEAKb8B4HQKqHuxRrNTUdLsaP6koeSym2YRvJNNziSsMrNMqJeJzpkxoKzGMoHwepECEhMuQ5FV4tnErU71w8fF",
  "key1": "27iUP2Hne46HzPLFnJ85ib2RCmRpX7xaXWTihw9Wa4viWifQyrykFtdRRPhWqEboHQ7KyVGGmv3n9UuhAvgf9U11",
  "key2": "5Gfe84edBintNxGuzaPXtxn8hJDaMvccLi9FgNgKpXEfSfmDxhmyp3FedQsPtJK2xJkeBWvkmbf7FGrhpixUAxsa",
  "key3": "4Z9HGC7UGgmaFpCaT2gZ23KvXgMgfmgTUhAeCYrg4jAYHrbk1ivo3fQX1oR5qLkE6QZLYjyXexAp8UjkGQsL4t1G",
  "key4": "4e45QKuQnZHMeG1Y5ie1e29Tjx5jAMiXRnLokEMCS7jEaC2CAJQLnziZxT6zxT43Lr6nmwwRAkZ3NarGfwzwV14S",
  "key5": "5UWzRKHh8T2gRuk5XL2RVJWDcumGcyGa5VZLqyQsJJLge3NKf4oL8pQpHzW8FYVoxXWmFZd1MRXi6bbx5eQZ4XQV",
  "key6": "W7ULn3FZTeHG9LaTddf7jfcrcfQMwD6qwC1Tev4s1a5pgB6LaE66E4ZPhP6tRcwjBxfXNk8KJQmV8fQ1TbDjkEw",
  "key7": "4YgeUWKtTdDS5esqrA1ZabyLRNvTje8HRVQqEFMi2aSSj3fWDNEFSVtXp28awR1Rm1TvqvFnyUjBBuyzWjzxoHk5",
  "key8": "3pW6crUCATpKPSqXFibxh1qHfRiPewGG1576ZNoP9hjJc3jXvTgJJgZKdb3ssH722bKbJdWP5cm6DQccYFXYdJky",
  "key9": "4cz2sgjYdvGSKhzVC1paSto9whaQw9qfXPyCayqGTQvTEQLrtCzKwzUZMxMFoiGcfFzjTFVhGjJtknsUe6SoPoo6",
  "key10": "3PcTp16RSkgHz34iHsSXKQv7yUQD8kas3yvQcs4Ni3WFu7n4VF7qjRVcgGp7zPQU2Wxr1yKQ7jzaV9XKmGJyPmC5",
  "key11": "3LbAL6hJc3oAFPRwD2gxAwiQj5YxCJ9yEsmZ3ByZLgGU7Y8CqpjvwicWqvATMGt58UXoXTNSEFAceiJSdH2gk2wk",
  "key12": "5tWM7iQpwPgmwUFyG7cvzvxFHaC4zKCfWWzD5wLiAjKPjYzy3jh9Z36XeAWmEPWYtGKXdWXaamU8PdKCNy6Aw2pP",
  "key13": "2ibqfhz1NMckoetWphjJENVK2yfKGkheMGUfcZs4yKqfHMtEAp9SCG6cz98yHsuAeuf3G56R5TF9g3E4hbJEYvCY",
  "key14": "27HgHrMnonicefxusUPByWMTLoHaYwEru6WWv963T1g3soCf6jofFzeRUK5nCn8sY4LBLMmZuGKzyTYbBneQf6Pc",
  "key15": "63n7KfcrNb8XaFerCmJcFhGvrRjXzdoAF5c4Kg5HjVokMfLuxMNNCPEwMQ2LjzV8EE19FpxwmWs847wy6VK5fMpE",
  "key16": "5DKSgeGzsE8DWLbrC3JbjsseTxtctt36BEnH2szzMAe4k1NaG41K2ouyidWUKyjFburJF92JQU57SLp9bd2DCHN5",
  "key17": "4PhjKbay1KEsSAvhNDPcGrtGRZEWhd2qxyXcBG5DhbLLh8LQ95R6KCjHNfM7biNm8gmEh3rqi7vUDv134yzkUqjD",
  "key18": "2h2mUEfGkqWBCQQSn4qfVQUUK98N7qs821b4KwJbmJa3oonCvWwKfAY8LVgn9kLfxWtapAAmvSduV8GzqP7AJmmh",
  "key19": "2dB6KgcPzvVmAJuxYq1eg21rjoH1am7UnnnGuWtmsUsz8SkLTG4kJGZEa7pD8CfQ41YJiDMNs9gEgViSHwtw9pFx",
  "key20": "5CHsQJTnRhucYdhFAUNWzfXm6fppHawrTspM2LxpEtuMPxCTsph3bEnA6yKzwn5sJDNZYsH2PCWAMcD2CxgoEu6h",
  "key21": "2qQwdkCH9JkD614KwQP5r4nEWrdMPmVo8HrTdayMLjUfbZrVLLjw6qDUPRttYb1MH2CDzRdhxnK5QwAMa3FnhSqV",
  "key22": "5AJwf7aQoL2eTRBNtMaFYHmoH8nB9owhwWTa2EzrD7D7a7yrtY4q2rciUTgwCb1abKEsYvawh7Fm6AYqewWF3YdL",
  "key23": "4VB6awVAqgWXRJG9sGAm3EEZ3WoqATH6xN3iHbr5T6NRDSrpNPnNFXHK1PXzeuVRPWL3LMXSC7u1aD2Qw9LKZYG4",
  "key24": "DhqmU3gMWJYnKykQrWVYgYaUG4HuYcSoCYeH96YYn5j2AKuqvk6reo4CtvTiunJ9ft1zoNTFojqhk2NjRCkabbf",
  "key25": "5ghsbmT1wsSyNTZ1c74ffeC6Ykd2dYAGvKTYiLitfHNQdVF3gWNHn7JRLbxCVU9yrNhh4nx1FvLa2kvwz4TAzcHd",
  "key26": "aHeUmDTwLh1CgTs4jbpSoBBUeG4FmdvvR9eU9xRbi7Gva1RKc3NTbcgAPQjfGzu4MemXV1mNWvty6HezmXojJNM",
  "key27": "5VPLGViezEdMcHjGuiwhKip6sgrTNSa1e3JrFZjbfYUYk3Kmue6cbTqtopVbkH2mhsRDDTAfr1AU3J7TWGHQTGi5",
  "key28": "WHCcpTyhvqoF9U2HpqNMToxUjZ2qB3oJ32QBUyAFLLtiGpBaXHz1ovPizH11YbzyWvYzfZ3GZzQV4dsn4jzryX2"
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
