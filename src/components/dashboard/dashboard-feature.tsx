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
    "2Bei9pjLWZE5zjSaQDMKT1ABdGPjSotrTvJqPrFqsgg4LRLA3httZDWWKE2VNRbEc8RjckvJbDJBqJrQyTi68Vma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDTsj9Gj45bw8nzRWVkiDV3VCwHfYCubThiidafpnrEymsd2ykanZs1gDf8YQbZ42kqeoBmwLyH4y6kfpQbhXhS",
  "key1": "42sXXHkmkkdL7zPyZVgXwK62gFLFjB89Gd7i8RS8y37zq9i7Ejzo3MMHNb5TpdXvxiB7grmSTL7Z3zM6Y7s6q8YV",
  "key2": "4FqZxu5Hsw6cYWmtNtsU7Hn4J6fY4B3YejwkBi7Aj62k92zcTALGQQ1ENTdfa7Yna1CcbxQm414PryXYFRL8FARh",
  "key3": "4RRZUsE3s3ov476DqbioM18npJAaDZjs7tVwzM9TpoPQxgNF6foLEQs3hH2BxDjEziMFnTmf1jvh4vwMPuT5G5Sv",
  "key4": "3tKLKjLkcfdwvZDrjLnhnPG4TFSy9bzqG9YaDcPxxN2vophP2psXmdWWP95mggKG7LfZV2hJD1MyzVSFyyKKXkrQ",
  "key5": "59Epy42Bd6E2uFg32thwTNEbxvc4vJozoxnGxjadZ1BVdJ4iC4KmxQ2Xy4YQCdaSofyX5d2twVzwJjV1BtdQiGRB",
  "key6": "54Nm9QJJnbmK7wmhBEgzQaMgjqHRgweuEtyBa2B16bSqTT6XTzvq1aEg4B43CayUgNG3wKxLbHvHm6QjWn3LB5mj",
  "key7": "49iFjCz6iqWhzpnkjV1msrQTJSsahKyWu2K9fEwQsTkFtHEq9ZNuAF9cntK26ut1xcATkSqP4kLRs82F7roKUAvj",
  "key8": "tDQraywsgXnZVegfa378CKJ7AHmrRX6sLiorpe59Yy78knrJjgnjpEN3oNDrQB2sysNhNfMKttLFhcTNLEYzzVP",
  "key9": "RZqtmzv9gNoC5VKPHzGebvw4gCTxutvMXKqnxoCwUErAqVFqoZBhsDCdnJpg3tXBtQhJJEYTvTvhRQc8ASWsD4F",
  "key10": "4FwwE4yPPvKcRe6P6hyBXPi2gyozMvckmRAXAhX1M6gBgzeSvxaMG1RWKAi9p8CodLi28p4seDM6PHRXQoHp87yF",
  "key11": "41YmTYWuLSAcG8p5AEnxdAUmsU8CMRhgf1wSbyh62Vxj5UgEB6tUije6o5iDqMGbKFSABzKQed5FLZJJDxxLWgYd",
  "key12": "2Q8A6wTALVfaDySffkT2FKHfPze2mNhaSak1rp8JSw62zjq1JGTKDpZAjLbNW5gjy4HovotuywJZbJQQfM5fwrL5",
  "key13": "KsB5xsVu3fwZmMyJB1xhhhdGACvRNwbohz4EfWLh5ixm9PEFnN9FTANHaQedLBpq7y3NaAnCKS9d6XiqXJJENvp",
  "key14": "3dZVXofCtKRjqDrpF6R5LgyUA1X6u7PetrXSWj5NfQU7qxzCkKgpvvPiQFcSciUZZhfgkiTAwp4Jfrg88osUDHSW",
  "key15": "2TszieBRQ89T44QnX8uefThpPrQAeXoeNiWUi84xtgyahPLrgufEre6xA6525VHDL7Hg5V3g6vDdHqAJXwDNrQcs",
  "key16": "P7nQUdxLBd4ShPHr6SRq79hjRfaAXwhRng48owwhdR5WfapxydrFNyzWqwApDDRXNfp6HWb6eg7QX8un5B6oMw2",
  "key17": "4emb3zqGcn33d5rMsmXEAZv3MgVCoFgQiFRonnFquf6PEMsnHpHahXGKnsSNNyfCQUDuvKEpY3YrCr6nzYLPe2gh",
  "key18": "262WMxy1X7F8xSBzntuK1YzDkvK6YN2tv2vgMA86yWrF16YhhziHn7M9k2SEKUe6qJ9iCWmnUn9XG7fB8ZjhPU5U",
  "key19": "5yASBujdjXQMQa8XtfYSUJV1TGguHUvmchXckHFvUXqtgpNAqMYgT9SZGevVFh2gBjH3b8mbt31buhjaNsbMGgwb",
  "key20": "43WAGB2BEKTwNRVDGHTi3PnRuB2auUtNFeQjyitNj3itGgjybgJD9yYZ6dzrgY5CQH4qHJkngzE8iCMZDRJPrKG6",
  "key21": "3EQGFzzZnyG94mvWgnAiTMbXADG1zgPjFMzq14Y5PKnFR6vktuYppf1FzPfVQnt2TnYKvivdbHtSd5HxM8TqnAUh",
  "key22": "sLKEcxuH8rvLGFkVBZntcjB2oy887qjp3BABniMFxkC8iB2pbwERAYuo2mV9UHPtwPJzCHdCSnu2xysSPxFUg2m",
  "key23": "4nH7jt4LCY4nVW8ZBNEaTJsEyNS5T9KkabwgYb4aTWQhdZqi8Fd2aMNNxe3BwGaf8PMxvmR6xHTxZuKKD7VqqDyP",
  "key24": "4XD8Wiehsb9gjTwYL6TVAvujGhdF47ez2kHgpdDHgDFfHAw9DKSufTz9GVzK5SAnKjtK2YG1LZUCGepEhFCFJxmY"
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
