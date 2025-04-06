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
    "4XfDnfqwcKMry8K9QvNh1zRUzTgSUD7Fkg8XFqy4VfhrwTeE9cXewdznmPvbbLhdyJD21pExuzbEBXBEAtPrKk2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ZUSDHUWHmQy6GhmB3tiPtJ5eTMxUauYMhNyqg6WQDaqft1JzSKcG5Ad3c6nmjHj4J8sS9EgqeY9gzLA1GaCW6H",
  "key1": "5HjVKxBCfrpDgjzGNPbWmBMgZmLsdGUdTvtvL93u3xUMddcj8FRezwYZ4dAB72agwMjWQBM6W9Q5tVUsW8o2GHtD",
  "key2": "ccta8hWaSCXE7L3p1dHNxLCDyji5hJKFRrwEu59m3M2X6NNPESNrKMTKptGmWcNY99oyPAsFAzXmBVgyCrRTcEU",
  "key3": "4GC6Fvzt7R8CoxH69MBFAU41AZRu7QhtiU6aS75LL3aoydYMifzW7AiNBHTFEFp1sEDn2q5bosnVaszeohRfR2kT",
  "key4": "L7JwKktLjSFteX6CDPqECzv7sWLXFCSG6nnx8u4dKUMsGu1yh2FHf4DY4fSB7iSV8GKjmNXfz7eC3aZvxuETJiC",
  "key5": "43HnJ8kU2phb6oUWNQKRiDE4Lh8u7qHJoDqeWLfWTgrNorhqhgPQPey2SRsZFf7y8rgrw17vVMGkVmg416VUWFhq",
  "key6": "45mvA4YrB7nBTpW2oVUFS7WDWSgytTRFiqzGUbpieQbwpGje2JPb1iMQ1B6M4uvb8bqaKyFD9iLpkayXPubVUZZJ",
  "key7": "5cZjmNW1ZcLx5YrcsWmD3mcdvcfnVvfv1pxdwWGosetTdAae433MHZ521My6dAkcddXVxPwoE5ZsMHewqkVygKDm",
  "key8": "TofPjZmf7WSg8N531MkmCYgbxkup7rnRn3haU2Ed9bjmZQ1QKqN4LwGvZN5nnwg58TpKNLjZEanACVz3znC3pak",
  "key9": "4AbXffPJ4Q8NqBBp6fkbLapBnP8MHck72zTB5LqNEEC4k2VcdQA1Fi1b9xNpGG1FvCoFPhWSE8CEuWUoQQncaP8i",
  "key10": "4S7kDGSbRard1nbVGF5JGhtAtyHk8oN6nCLFnonu2FsT6xLWakLctNBhg6vB5wstE1eT6Dqu3LB2N5ps7VkfeEua",
  "key11": "BYQUcLURU8whv4Nj2pUwPV2dw4xojs91rK7nanKwcNRzP434iUPUyCw1pCpFTYAV6VUkTpygMVvkr8Ne5BkFxZK",
  "key12": "3RnUKuVBoygYR8ALK7Mh6d8wzRM8aWeXvFPkpHRZ75CHxE8XizHTcoCRN7WSnTw3VWMur6dza82EU8HyQNwN4Bt",
  "key13": "2A1XosxQHp85h2LJLpHTqPkB3CLdUuYYBBSZXKKXPj5F7YiJFzKXfL8YP8jkLQQfDL5bpjxDDiL5vEdF9TCh5MFS",
  "key14": "3mhE6BNcvggX9a8CAk2yuRkhZptbsfjyVAefd42PMZ1tg7KB7ouHX2rGFenYao7mhZnrqMudDQzKr7eMWxWAA54i",
  "key15": "wRCfaCawQVxHt15YJxsdbQMkiXPJgUwkd8gEZ3Cft1o7M6eWLchgXsjfnP7ue3Lqcj7ybmGwoeYUiojDbt3eFnR",
  "key16": "daLaG9Dh7nqghW2MhbYVvkaveuwLXrqWe4DtA6oNfiwoFmyresTorj1QNmix98LrYH9AHByzb8zki8FDVJxQJnx",
  "key17": "4kCSwBGEK3ejKg2k7vEwhfUiZpcAk11i5X8pxRTFp1KkzJgv5Fzf9ihjovCVXCckvMbkyfBh4Cb1bawQ97NnpLkZ",
  "key18": "57mWB1PDLaLm2C82JyhDVG5fTWS2cBvHVFmQ4WYqQLcxxboTZCx7JCwqvqD4dV9ruS5FjBoMdqniEJNU4CFEbm26",
  "key19": "2nj6bMKH6CJ3VS125ETuc1DgQyNqTBkf8Uccqh2pDdCgaon4jQ29TkE4FiTnHtqdYMSpvH7hbYMDNhBBCn5kiuxA",
  "key20": "3KX7jvMMxyYEXefnMoPuECHMPtY1V8tiYiz98ACTsjYKCHU9jfptjNtMNQYirHsdwwfnyrQdbyVeGGUKMDHjRfqd",
  "key21": "353Ao9z9ixyRPXW55xN9nojk6EyCUxuvwS2CbVi8XRCy8e3oN9YMkwCbcxAPk8udiP6rKHoPG2CmtzUngeGhbZ7",
  "key22": "2xLcyL3EGgMbdoK1gxCLpuCZovi1o7HUicgJCbzS2MRfmqhiQKuzVsRjFo8YVey5npWThzoAFeyoHtTSTTPTs7av",
  "key23": "3Fcz2Eejt6vYfgZi3FDwtYtNm1UE6iADjBhQGKLC5Dno7824EZD9HHao8fCvRXuaC1qTz9GtVkgVrYteGCFj4uhz",
  "key24": "3R4RJhy1rW5GR5QuKrBSFQytQEkSBye4vN1wTqB4jEk2kRP8PgyHgUR7hkfjiapHLw38ZfHPUGWC1KB9Yho2Ruu1",
  "key25": "54FLhdTjZwP7hmpzf5jJqb6DBVkuRarU3VSM3DKwMAE1CfUNy3HkeHSgiNWAQ862q6ZzYFuNqRz7paVZyCaEJwp9",
  "key26": "3PaBk2p5iueSvCcgFtr74rQqntiNLmFyNvB9F2WbH9SyD2UhXT2XveF5PSCg99KrxV3DrrT8W33x4XdFc4Titwau",
  "key27": "2stqnwvXb9jmAcTGRhgtdqE48YtRMottMKyip8YoVk9oUabiLDpDg2KDCrjYk3vhZskNxKN3X82JUFWrF1UHavZG",
  "key28": "4NE1ZSzRvQNKmhgieetL1vMBbXAosYWR7cEjrx2Gkd4hTapWV1fLQJgyNd7eZA2PNFqV42tiopfKZHMFwRSTWHer",
  "key29": "3sGqjuYiQwr6RNDHcKHM82EGX5ejbJd9S8Zweb2GXg6NkV5cMuMqHDrowjJPNRd2A8kehFZFecJUM7tcC8Vi81AM",
  "key30": "2tqnpEE1ZcLy4pUrB3nAMxrwt2rDFvCHUaCc1h9nEMUQT3aZKR69TXSwMRaBfGpfHTR6mjZJr2iiE3crD3bf85p6",
  "key31": "2U2wRMTskcsnzbcUz6TXBhC4XhVuvt51UwfFevfVKuQhHo4hgJ5MLSiYietZbMwXp4L8pcoE5AKSbweTMHaUgcRP",
  "key32": "4MQ1pK6yjTQxUVJjBWuE6anQQfhTgKbe5n4hGznaXj3w56y6PKZxqVRk2P4gZSb9xAYpFkVsZTWAnXCFRRLM1bKE",
  "key33": "2kojUxk5NWW2SxQBzMvbaeH8vsnwYamxGcLrGrtEDghYuWTU7KiTJXcFwkfn94D2jJ6qRkMaVh2VsMhwovZzkYq6",
  "key34": "5zZi5L3jAYomVma7D6SHXhcqS1pE5tyB4iVgahSa9SKQaqM9G93pznZrazacBnTnemZzi2Zj34ZMVwyoj7YR1BMu"
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
