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
    "52FkpEmaavKGLyjHMG6r3uKywfTn9yEQcre47tsLXWXhAfcP2nqtRWxptBHbtLmuhiMapcZqBKHBKUT6DwuKEQjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRCx3anBZTCEMqd9d9hDMyqaLgr1gkCMLBzTXcSWbhofMYDALdrQzKg35yJAhv8aQLeEoRBvShMGhfMpqJK86yE",
  "key1": "5PeBwVk5KVMkLdyCaRTBZNMw2vjNLCGR6N1sqBSi89H2PaRKzBSzm38k3QXScG2eXKnw5u5S9CpG7iuzfA32LUXx",
  "key2": "5ftHqNypLJTx3Qof71Dt9zhDtsxKy5EoRCrdYR4LrBd6jTkAkShBH5keFhADEsjEodyztqtFe4MP92xsMcw6GTrc",
  "key3": "EczKxgU1yGY8CTRAzwoX96utU9cYiWjtrrhMHdzJzD8hNV3skkGUAVbUVrERs3taHLpEoFvTfWzxM6n2mPBYbsb",
  "key4": "gZ9sBP1es2Jzssp3mSHGMJk8qYdp34FxrgXPgNmoTdj3UY3ebaBrDWd9kXVdBoQSqZzdMnCgVioNs9SvR7gtWxf",
  "key5": "3HRbxiX2dGqsWMqEb4bnsKLE4GjCjv33B4ghPAK8g3RYe7mkEcvXkELoX5d1kEQgomaSTuuwgbbb4zutx2aSniN1",
  "key6": "TkPsUgborwqwNRmWZ8rW1cZSKvV6AVTsa2LE2RTNkpeQS1wpGcfqqdTHhuSkWQTXnucgtepTJzv7wUX2BseEh4e",
  "key7": "4ykUhLegTt9nzPNC5Kposs8Mmb4mPxjbMYC7Ft2KsWFrUvL9i4ds9rNHtVtmrGVNV2BDreQT44w3CL6tSFsgubJz",
  "key8": "3PLdybWP4wehNEssRkakfYXwKpkQ38aBkAbV7bQhuYcsheRSEHeJ2jDvRq5ZCwdc3USDjt7BpimtdKN4heEmDtet",
  "key9": "2CZYTfUwfZQ78VhE2a1Avtw5hjkANwcNogPxbYqK1BeMw3zbPVCY5NjFZhm7R16ypmveguxm7gQi5xoPppBLZdN7",
  "key10": "47mVKR973gRq82kDU7Nr956ebPYHEAeuFAvafbf4moj6TAncDPmWSio7fFbutRyxGNxYBVuqQMJAXkUHZKHjoFeD",
  "key11": "3vNZBwsTF9s5tb1wWUTqnsVrMy1CEQks286FC5GLScYsyeJ3GaUX4W3T1P9hznGy9oAs8BuwSog7ksqHQStH6JEc",
  "key12": "2NgsW4VmgLwiwVSngYR5iXwjEGRrf1pmWRBaBbgeEMQ8yWpi3jBePGmvJNaeHCnaaKuCZwNn8rP84Wm6nZ1wPKkS",
  "key13": "4feKKfkzqMX3qh5MtSErKGDzbFbZg1qKVti6NPKn8RBobcC2TKdSzNAnUtQgQJmDMFRF6FgfcnWgCAT38XYLv1aX",
  "key14": "2iE5peGanBE3VZCSSFXP34RnUB78LHzdvUKngedjXap4qeCrcCoftiT1kGp58RedGrk4UjVaucS9BYnkbxpNX1qt",
  "key15": "ffdt3vjX7c4ZVQ1tSqNyGZJX2GwJFpeU1NtpNW62sZo3hoJa7nuMVSkj9JaBGMUxq4SQ7dZr8VUtSw1VwiVqqQA",
  "key16": "3cVdUpN2MpV8gAjawSWxHkHjeqBApTnhzrgWTM857mUSRUpw6UyjfBHJ7FVT4maKi6FMd2c1kesE2yzksxzwkt9s",
  "key17": "4TH1FAi39riUMSDFxyDkjcpuvU8EzaTbh6jmqrt5iyPLzaE6wdDo9Kt2NwDxHUHnqrCZYrnpUBXk65nUaK7fYRza",
  "key18": "49NomijmZ5XBasbdp1dJj2sqsKBs4Z28HvzuFimjuVnpdTEb45eu1HvtFAarneRUaQCD9CQDS7u5K4iCRrLP6t2K",
  "key19": "4AXyjDKsoXqqEscgKrNpccJH6Q7784JcnrZzdycJGSZmwEi5k3745HWo4AumSovSQWg5hCGiqPa9YTEKSAUvdqWL",
  "key20": "KoaGPRcoH5EUkYEBCBW6NH5AVokZm82NceTLViHsgYCihHPE32DdaK9cjoobHk5QQqEH1AfXtpmwj6gPQ2hMipy",
  "key21": "3nMziCEKuBkeCQVrgYDUXDcrPYHdPj5e4yjxd2EWqm4iEU5odTBv4oMW9Dq5yDVnNEokSYj3WbYDGPbq1jaznkjU",
  "key22": "2cJ5euBWG92PVXSZb1Kaug1XgJHTgS8dKGkD9xJ13ghNvQ17C5jH7DNax57k5zDBqiwKn2xPnpvxrHX8SDFLYdGu",
  "key23": "4hBAek6KYWVcf2DnxmXjwpvSsLfmepUrgZLU8B2qWvwngwhECNsHDjhfmuKUbZztYHNR6Lw12vbbtH2Na9q65bM7",
  "key24": "5zGZjBHjFPkR1g8PY2QEoCCgFPe6MUfC66rPtWMPNUtTHh34cHtdTUbywMWrHrf8SkKUVZVgq2qGPwbGPYrhdyJj",
  "key25": "53qxFroNAgwTTcgzS9MNen8XWwbniGWsyx76UBVSkmAuaD3rWh3Djtv7tyF5tuBtDQBPLpeBh3sCq1M6dcZRLRAA",
  "key26": "2dE12ajCCW6pczCdwsUsJXZ5EC5QpghQGTofQru2XvGg8NC6nhknon7H3xG6CePiRS2GtiGocYAWZFYa94gaVr9p",
  "key27": "4AQLfesUUwkAtxHceJqPERx6oXYntBKXKTCKCjdUChTHWH3EqC43Y6QhozK83wnCvdDfCGvGDtzVPaKfyS7KowVP"
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
