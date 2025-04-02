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
    "3surzTn3chHMSPhy17eUPZKwUsd7HHh8c4TNFjAtV97YUd9rNSgbCFqX4bfaZ5nuo718uvp5ecV9SNycts5bz8dJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XupLrTp9i9KS2mgYGxYE6HAwEfpNqBqg1rMnbp3s5czpzViEs6oXuWdiC2jxfiG86qv6rtHSVxNP3QqkQc1RZHe",
  "key1": "ak8urYtDcacAiG3femT8NWL6XzSjTeW1EFNsNV8AFH8oWn4FcZqLi6gbkfACDStCQfv7yRyofHbmzpgZV3QA7qn",
  "key2": "2k4Wzs8Av9p1u58VhxjUX5vUAyayfcgrResW9vJFhGpzDniAz9FK49TU8cVGwv1LspxnwDKXyknMCKEt4Xu2yfsg",
  "key3": "dA1QdQYtob38NpVQYQsM3s5FvURtCeJ29MaJs1SGxLq5d27q5DaFkHGueLscLjPdc8BwPHmsfGvvGtpe5pWStQU",
  "key4": "4oVeiLEAnw5tjQa6g5prn9DXNSuLYZoq5BubfxLyd6kjh2VxtJnZsSWbzxAw7tBrSrzFQTDFbkYkdbVEHXEjKgpY",
  "key5": "gArxfFCqwSwEN8ThfF7qfcgmTbSTf9VjK4tdPsxWCxPwT7bwyU54rsxLu86FJpdiqcVCRVuHQS8zFWC3jBzWBRB",
  "key6": "5XpSefzQZN3wV8fRbnbTsAsgL33FP5ENYRQPL7MtqU8XudaNNE7TNgGFR7dMXwaKQ314cAvCmsXL4jHJi5wkBASu",
  "key7": "4mupnfkQ5HCgVEqu1KYYDCdwTC4d6Ybe7sFRW7UqMt7EZ3UJ2hjf39wXUjc7Few5ByND1E3Rdfz4GiCkJRz3HRcc",
  "key8": "2QZxf6cdQPjWGQsXdN9FWKwea1Hdmk8Ch1yELcCvC7Tn4jE6EPoBwLVCBrFp1WVw5xpMnF2RKx9ohkd2RYgXjSfP",
  "key9": "3sSQANDQbGGxQkVNcxwiig7YBUCLsqg2NbAs4aAPm1h9HKwScZTeyyYiuHqkGNoE9VpKuh3XasXftzYHE27cnoAX",
  "key10": "4daoLEfQsVKBt7xJdoiUdxErZFXExJZjRH6bkWuN1KxzfKu6zKFHDghDjnqjiKbYLdc3PNby57nTAk7TUUMN4RnP",
  "key11": "2SuCtepbjFeuDwK7VPtBhxKXKRNHfnUiupmDi8EjuVFaQQMNsghNZhnhac2CtmBQCbc3iqK4qA34x6gb7UzZo6Bs",
  "key12": "nWPthit6zMVA1E69d1cYK3btCvuo3Cxs9rfRC8k9nANg6T5wvVc2jQBQGQKy5F6g8ZW6CFZ1a7G89fC4muhmWTs",
  "key13": "2S4EF2qMFa3RCFJtjP7uaTypFYaubpkAtABcxV79JyRoQY6ZkEYGb8e5gj9nd8SqtjNHhh6DDaZzN8pfqbbPfypT",
  "key14": "65pqsiKvq1T2TJ1BGVv5T6yiRsskRUWNx3WktsT8Kx6hzYAGWWuWQFFuQumiSXbu1zcjNd26zvRhQZxgyL9RmQp4",
  "key15": "qHCHK4LRhCk2W54HLgGXev99PX1ZoE2WJVV9nVR3YQCvb5a7ABeVnakwk95FbQfcXzFokaVa8TMsLheCviEtYWS",
  "key16": "4PZgnfHJhnsFYkEeZp5kmEGe3RAFs2jhdUvWDWKmzjisBSfKop9aJZj4xZ4MB4HdBeT8ui4WYTWFqWiCM8bXsNyg",
  "key17": "CGYVVnUJRpTz7ybaQ6kxTtJJQK4tU4gShnW93UwTYUzEgusJoZSL4FBD1H2xDtc4rLdfQqqQPibVMaWtmu7aib8",
  "key18": "2vHUkhMQ3GnpDwYfS9L4dMKeo6AGsakkAEuMxFVGoPAV6Z3autdogJe6SwKDn6KuevyQd1WxGma8h8YCZSsm4hpN",
  "key19": "5TSqmtAFjbVNoYbq2MmVDj3G7JcQKNM6n18VqZ14QP7X9bfVGkqmahdX6uJorx7wFWVNSXYWfEkksk5YgTQjE1qY",
  "key20": "d9srda7mQYVok1DjRZYfxQvzjWEjh6PwDSM3CvbFrV3gy7tcH9cmJ3y5veG1eWSSi9iwg8iPdZTwASm4oQ7rU4H",
  "key21": "4Pejzu8qMVW2JP4Cn9NX7rKjwDRSTAJU6p8FbLLVQtgQpqx6NwXNm2oTgP5NzHigraJDXwEY4NGm8AmGf6tLbq9b",
  "key22": "22L3vAkW6Kj2nGJ4U7VJptkSD3NKu6YTWyZBuztEAam3dsNwAwgCWYk9gJTgJiUF9WskQFvoWzgCwL4zZ1FVhF7K",
  "key23": "QrxjzqeNsjA62RK4hmLav2uA6BcosA823VkjK11mZLHB7L64VL9WDfdQCFNEvjfDN1dtuTFrYe4GCveSDx7Nojn",
  "key24": "4ZeF29256kDYzru9g23Ts3RwTXwEs9Ae8uwDXv7vHd1mgD7d6WmNrZwaqNo5LcipdAxwyPsRRWdV3oSDrMQ2wf5V"
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
