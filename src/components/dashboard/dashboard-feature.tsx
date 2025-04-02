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
    "5EkmF2xbLmgv6qwF9dppS3ajQcBmepstHmX5eDvwWHvRUh3D9wuMJda7xwakGgBPWcsx9qnuSevXZddpxKotd5kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2it8ALSP9UP1EuJgxBh71taHCHouxEVJx5dVHQ3qvrGCpTjHzwqkVRY367aZCR2PbAQXoG6FVMnnYhn9tgn9nE6g",
  "key1": "CmyH72HPzSHabauKytiwgrgFMLJSW532A5ff61PgNtvRyxXXVmURaPG3bN5aNKijPXDB2AGgzPzF46NwTqMUnUk",
  "key2": "3erhP4KTRy7uZnrqzrkKiFz5czECL6a8hx5dgNmeSQGLvY1tQcvfKDAsVGe7o9QPGiRHRdtNuGCbYbuw6xXmxC35",
  "key3": "5CPw9CFvTbd7wMcTo9CZmArEY6QGU5ovoyTBj7jMTVtuuDPMWfqDBGyhNbNdXhEKT6Yf8uepu2jgH3irS5QaiGfx",
  "key4": "2XKF4HpDHo9qm1Enz5WyFvgF6vQkNZqy3Uy8YWYwQ7Q2GKYE2jPVdBUGcgx6ojqFbx8iMayunm4Xtjyxk8GN5tG2",
  "key5": "5mdxmtTvY7ELZh3owMaVjEs1Ak8MV2EG5LSMajAo6wL1RZx9NedYa5W2nokiVK2fKd39KQms3QzmWSqTaovJG3mP",
  "key6": "4JaZ4GgDXDiDzPm7oPL6DQKDm1KXBGQZ2mxJKLs6Rrptv5m4VbcsREBb4nNJGiqHD6aiMLcrtUmd8PFVCkNUjScR",
  "key7": "3wVHZyq5ELxqS5P9maeC2oC69zhzAwSe2gyoFeBtnCoqm8sfub7UsqWStgASdMWHHqifaypLXiuTZJ96d3ekJDpY",
  "key8": "CRhypWsk7J88NzgVmoj8qf24V7jz77oaqYWDLBSSFdWox9KfqhrLMik9SRmJFXHRHs7JDCSJQH8DdhpWZvcntzc",
  "key9": "3WkxHrrsexJPQM8AQZbzgGVLhw3abhCKu9FcFaoKzwXA8ZpwYbFYysVTtBcoxiNzQHqtZRVrR7gus9GBNco4nnZ",
  "key10": "3gqJTkE8CBdpPV6T8bNj3NP27V6nSNdf3XjESArGVKgZUU6QPviRMJuGDUksKtkQxMejM3CRArTf6iG8dA4WDYyK",
  "key11": "38z2nFRBgS8DvNdFN6UstHUb6TY4pk7rFWAgSpQPk1ncMBwomyFMQM6X9ExcJjq6MRUBgCQi3hb1SYMYLMaCRhTM",
  "key12": "PWfCfXuwkme8GZrwfex4E8rVC38b72JWzpwmV1DcZ4aTKPvBk4dN3mTLr4oXKqCDN838YboPL1XRPoTZN8FD2Qi",
  "key13": "4X6MyPgFHxRdBqU3qqAY2mb7r9RDeYSzn1xW1J6Ss5ysN2z2eTyvdSBPHkPuChQpCGeS1RKnvkaUiUJwtqnNWFNm",
  "key14": "37QjrDVSwhomxG4vFZxQMUBPTNYXim94xgfbX74xnGEfZ4KbPjuU7W61EbhT7Dp8SehzB1ZBQFYYEVF7yvR33Snz",
  "key15": "5BhL13ZaNUcQ2MwnRaKViqX99R3mcMP7qGz3uqCnofcwSsKEHESJpnuqpYp6mn7XRiTt5xwYTi9xZdM56VL8eiSd",
  "key16": "2FqnZ4JSBRTZrd2DhbX2knkjPk9SHAP8VqcA58B39FYprCsvBvzuh4pLLrTeFHmAVX2YZXnN4di5TAqC3rVChL4q",
  "key17": "3PbezpijsL8VgjdvihoNwQ72hEjNJjKrjpvK7yVCq2DPSH1L8sGuTT3xReU18Ngk3vYAi98Y3Yf4WuMxFokf8LUm",
  "key18": "4zz8AFzGqNQHKy92Tvh1LUd5rWL9UKmcbXysxJVv35JFgT5VVnCXezGTeEGUUcrXXxgwx1cSGuoRV3PcF1dr793D",
  "key19": "5dQDvH6j3oGWempEcQVdNUSEeL5imN2Hxwq2BxZBk8tELYpgRAUHuLuvF1xSoReNeX2S9nhJ763u946AANNtRtj",
  "key20": "4P7uANygjQeDpE2YVimy8pF6TqQVgG7YDi5dEB1k5XH1BW3VSzKXeNXbTaxCDAZXDeuPtsxWdDbKAQ5YXzhLkNcU",
  "key21": "kfSSsoVgToMZST5mUVYq6t4NuVAh2Dfc6LAJUnpqSZh5M2MgPjKc4DvvejRo4pD4DhS2hvzwDrVW2psqTjN491Z",
  "key22": "4cWGzwCUAoiwcmPF7omSRw31kd3to3YBzwtpmV3mcEHfKSqwoVuoqbnJ2iR1gXcaUoYmFwvcAEYCyHXNxiRwv2pg",
  "key23": "5VvaCz96gjeeBgh7mwh6QEsqTj6QGTFcBUNxzapt2n2fbW5nYuF4d195zbgpam2766MRDupZU59n2fv8p5SJwfjB",
  "key24": "4ktQUJV7RVFUJL6WNy3SyvFhANuhNkwwQBwWjZjxHdVjea8jjdMrujjmgKFXyPCZg4Q3SqbfWxYyYxdHe12ZzzVG",
  "key25": "2QezyTQPcFUiDH9SdMUXwVifZh6mjnA7mF5EScu5g4cRSTnS687CkSMpvx5LKMAQfR21xXLKsweJCUvgPRCZ71kA",
  "key26": "QTjEv6e5nzxhaasrU9FrnPVra4HxrTHT48ZXPvvtpp3vvEh1MwvEUq8WhCuCe2o6qX52HG5d5dztzepQSqzqwfi",
  "key27": "32nHsRu4vwxBTLpqDKmmwLK9YciM82qbtc3YwGFvveGQELMNb7R7VJ7ATBxHEsV8zjDGantJiPqGM95yBp3Urrof",
  "key28": "5C4BWamCMmRLkN4HxGWRpDSxHK32Hg9jPZmTmayuBA4zyRaQXgrFRubghHVqU6PaRWtZuUWa7FGGYAQmvog4acYP",
  "key29": "29z66SDxzQcEkEjmXjDCxh74YeTATkHJeMtbrdwKzujkMjuYZSN3dPTs97oguQkeYTLn7gH1P5VXaTLfUXvAZCRN",
  "key30": "4JGCbn76muPheG6eNynXajz4BWVha2LZW7Zh9KTLZkkEN7k3uio2hQnH1jikKG4ZCrj1adHgBnraMToDKcKjs78x",
  "key31": "4BW8kvNZXyE7C6kMou32492U9UH8w7u365KvEcFsd8mLB87SbFDobxDebMvE3mhmu4i4tJgjRPXPgUFapFGdQPZU",
  "key32": "3G26qrWuuSiDKc6aTzFZgVVDkX25rzAvr2MY2bts8kQa3K9CCdVcbyExANBibmMcdTTm5UmTm9LSphtfSKDKVeAe",
  "key33": "47Z9XBD9mrUr9oj9AELG6AVfhoh8DfgUbZAbjjgJGWrVagMRRTHuNd3xGavcuZmssbAejFKXayvyYHUG6TazrWjP",
  "key34": "4xSV9odjLH6vhSquRZmRdUA18qhop35JqbvNXzNwzgT1X6JfxRdot2PnxUqeQDgXKARTMEnm5es6GwaEpV5rLinD",
  "key35": "4mKkdMXifiCg5AtQ7W3Qgv8UgoLc8M7v7EqCbGLmeRRVwQhSfP6Lxgi5GBxqzuYFwDvzgBYyJfh4gB9cdutQ7cfT",
  "key36": "4YTQxHUAwdzSaDMv32BW7G3Waffb143vvCMBARkP2SWSpu2VvMs7btwpgH3p1tSDssH3avra7W8kuGB8HGvcXswT",
  "key37": "5s2w8UMxgyNtvV7uEgX8LKqeQLTo8iKLTTzF14rq3sssLPDYRQnFmgmVyJ5rWZr8hMMEeUzZwG8t77oxfsWEybNy",
  "key38": "4MbVVEY7bH6eEG3M8qswSRg9MrC1nHAiDrZ3jqaMP5d5sHKt8iqEEYq97tXAW6RMgezNrhqsTi8Pw1Mk4LDgdA6h"
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
