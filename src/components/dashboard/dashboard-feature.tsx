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
    "4WJCUeo9t4uCw2e8VjAHCCQAHrWZ5Xoc74G9hKryrTf9753oZVk2UJMebyu6QU1qWiY7TtvPA3APnqx4KSHudhhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxDdpDJAEU1KRLDpGb9gyc8JhmYEHv24ZxTU5FYaLcmhpV2FrbH2xyuXPogu2boot4rmXXJKNWixdXTT7WPKKUK",
  "key1": "4G8MMxCp7uYfAyN1AJPyXxCRQzhYnCLpeSxfXmMBiE6gwuTTwwjfSQJmSveqT9Loqvj34oMFa68wk4DdehzWfZzR",
  "key2": "5hrvKULvtzJwktvrj2zWNGFtUEauFyRQfkQtd8gXksDYpRWkw7G2FTUtzVNaP1FbJiqfVXUxVFw89o9CRtH6jQLN",
  "key3": "4KjgTDeBsS2D9Wfoj5vnmYETziAPYx2MH8UgsbC1Y4DN6FY7hvLRX8N1HPotKiGyWjBEAFneXQiLeBdMj9nMCCR5",
  "key4": "222w5jzgg26ZL3ZNoRWfcCwyzCZJM9dkGBa8UAu9Ceo5arfUyefa2vn2CoNiFnT9XrZaxBvCpCcCMVfe7i5nGWqZ",
  "key5": "3XwxT9fARniWqnFT7K4UaMD7eh7yRuozBMCRYCZHG2y5b6rJE47DejC6pbq3APBfzGraYChCcQrY9zyjp4fjMm5v",
  "key6": "3TMiNGpBpixEeqJgzEGnWnmvFwA2i9wfry4oVh6RSaMd4TfUUaWtrr63zbh5EZ3Qt1EQR1FAC7jyh4y8Xz7QBqma",
  "key7": "32CKjE5McNdws4iddaUpnH9uJ6Y9YZbneVN8E7zcQtGPtWCoE7QmFvmqzdKzgMEpvM7XUyhEiSf5FJJymtgXPuYV",
  "key8": "iDJKhi3advyvBwyqaur6GsiAGEworS2xkDE4tJHf9jrEAcQ1tHEvAWHV9nzpz2fqobLM3ao6zLhMcV9cm1tL1Jw",
  "key9": "4Mh4x4vJkG4mPEfDjJiGQ1TX1VjgkFx1gcSaDe7sVXoM5MiUzFy9N9rSnnwTMJUnWHUaq7oktEVgQTjJcDjcb2XL",
  "key10": "3T2AYyPTqcgVxfQ28W4RAyQy5zKRhnvFu7LgEUjpK1nqm94w6XkLvvuSq7QSN7ugUnVKhbfPfCQ9ctLJPf4AQ4JY",
  "key11": "2SDhFQyBf2jkC8XzTiNE1BiYrXWPBGcL6DAQFMp6vD5urPsGGmr4SoHrsmeNcvXMST7u6DW7ZwHFPBc4ifVD65St",
  "key12": "5hPNvSB37zR5wL35oCKnkfKLHAveYsyXY17ANKLyE7Unghw4gLpvy3mpULDKRqbjqLEJQ8nHBP8qv29sxLTjvTR1",
  "key13": "3U4RPoYtA5YbHrxDz4oNK2kPUsqf5iitqJDqq2YWDc13ewNKqNFvZSPi8prfCTTqAhBN4y5hgV5SS8vNUEkbFJRJ",
  "key14": "34Sncwvf7BL3UBbzL9pYkQHEk4rHU63MFh5g339iEJJb64cJTPbbyHpwqv4enBGnJq6zCwppnbA1KoEVfHvTxnoG",
  "key15": "3fm4iyNtmCejdY4Viu4DkSF22KnuygVgPrW88pRN7bVoAGRwzm5PRWt3hM8EwgEw6HHjfJAS4PizFTRjKH9dqha4",
  "key16": "2Z9Riy5mNvHufiMRwjyh72XsfhTuX2hZZdQ2fJL9LwAxprT9TdNVR5dPqgX51DLPiw83n64ZFgqh4E6rNxDZtam7",
  "key17": "34wq9cpPPrssLXivUgr1hhkxyV9qaG2ScNsjdZRdV9nAK6Eu6CD85Mb8Hcg278FkSJjf1zbu5X5cFsCuCtyGFSKh",
  "key18": "4PaJGnhARVuKoHQLTPwrCbJP7pk3Jkofiiwz25eBLwhb7UKWt7JnkrLaiCauuV1V4YieVXwbqtGmfnmJo6x8cZjD",
  "key19": "2Qa4iH6pkHCBoNvEypYMBeGRe7ZMaB1KBpTbn2UG3KcYrRYXuJMsT7U3uRueLQqTS6bhgPSoQQkD9iQmTccM9EgS",
  "key20": "46TXQMd5PuALRZZ8VYoFPgYz9LUsV6nSpGEUg2yQHidmxwRebT5mb4Euv3sL2a6eUxnQBMgDt5xKjuFn3CW3WaCr",
  "key21": "2wVcCngPfETaoqiUtnzsUdnwFoU8tNA7XsyP5jwoybwDKTNU28D9bAXtEP6sBEJHm8RBQG7dDF7puyRoA3Xr68J2",
  "key22": "67ELbSYCyPXR9HSsoZmWjFP81PdN7wMLiZxQyRSRhmP54Mpb8NPdUhkJJGemfGXmEzRWB9MCdN6t3GaQMBPQ4dbu",
  "key23": "2rXWcjjKXEeQaDN1CNPHtrNHKP8GxjzrYaHuVFhEwSkAxau4NwXi88FTopfmNFqyhNztiFsEnFTdT7yvfdMA1WfC",
  "key24": "5VTfERwyyQRNxYGd3zUqRbjh8SQr41Kc9KVzEsaHjpfNCYNNYJy13vhbANr2AA28ZuMic3EZPLD1QzWMqGYdnVme",
  "key25": "2cTk34cYT8aKY8Go6dgZY5ph2uswLBRhmmbPTuTX1k6MdNHsu6UQneAgEACYvgpqNUSRjb4XjFme9AEmbtr59fS9",
  "key26": "2397M7LadzzWqiCU9Ci4QfR5r9PzUn1NZmBS8rMQWgexXcG3Aukcg11JBzfJKHL3afraxqvR9vMgBaS1UrxJR73m",
  "key27": "2SR18ta2AccAcQbxGdVstdNU8ho8RnFvqvBaBSSMCt2QbsnMNbRZJttiNvy84wAyWpV2uv9Qx5GDqgoEpAZTQJQb",
  "key28": "5kzTXTSqFQAHizKFQAQCMTi2pX7frZH34cwdKvYSA4MnvqmC52ESwMeVY7VR3TDHtnd5mu6dF9T3BiWFK166n89R"
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
