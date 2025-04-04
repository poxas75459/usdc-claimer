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
    "tyAbuwktUmmQXeQkQ7kFcRNVLtNATajXKMtGEbDQ8KQJ1WxMwDQTMT6WHdxKwbzw4UXHWZzv8covjUj63FuqYX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gGCdsvz2gTAbvXXXSNtjKRn9KPVbWRKXbofJNn5Mxd6A8hn9Kw2LHL9PZj5S8NViSFn1q2BbrLkcJUsqjRtTVh",
  "key1": "2yxy4CgNgqKrigq5bVRG9s3AQqVtepsSoQX2haaZfgadhcAGyqL7PLeQyzdxCHSeZkK68VvYUAxUzGWVYCMsaJrA",
  "key2": "48meseA5u5JKxJgN4mW1ACh86PH9mhtNaKDwtae5QRePMJcRASWehLHkeg9Qs6iGdUXVNAvMxUht191ts9FfHkxZ",
  "key3": "3rMomz1qE7jjh5vGV1rZfBPn2NhmdZjzBp4zQ26vGB8gATLsyEjUEAAVLL5V2aZJ5Y2YsVM8G9Bx6PWWLxmhPWrA",
  "key4": "BGo6zG22wX3Df8wnRse1REZoZQcTSAiMWEDLJzpvLmpq9iRfFHrrXm25THdUbxxba5goeCpesdT3CJAMSSVGV3Z",
  "key5": "3V1kaAtfKXZZKCiMZbBn3dqttenwpk1DwWNs2196bbDoopyJTCeH7ebNhmUAhsAwPXDESXN4i2xdusmDTo7oBFGD",
  "key6": "3a9XpVsgJdkrKFjnZs58mrdJbTaDdZm97sikutVhgKxTjmRXmouWNZjHb6p3NRLWiRLGCTyX2cHffFwgDKUwm718",
  "key7": "4Q1hz77zcvKatdDbiUee3dZC6V4WkT2XykALh3nGiz9GrLCKMszMao6QRQMm6XQQbyeCyMkturQMDsr8LNUJegaS",
  "key8": "39vc4UH4nXE3PNNzszZJX8jLBrUbXyKmkcA16GiskbJbxWKFmh4fLciN3AmBpNVoFR4CxSXFx2kUeGH7epva9TBp",
  "key9": "3HtAxi86j3be4LG5oWPqwg8dLGaiMto8zfZiMbh8ntWb7Es5ari5B9dfiv98UMW9cf5nTvwvYRxmqk8xjJcENuoH",
  "key10": "22xLt9eTt1WghfQjaeFeVTEHeTsPe9jRhDFibNrGZuT1SemsmKJhuADjxgsPRDCwhArarCq4yyj9NVW6oNZCGhRL",
  "key11": "5PzkYH97JgcSkyeeaes8Wtxqan3yVEv2xEXEKgF4tXvtSG1na8v7tkpHgaXM5RppUwwFDH376b7riRYkPNnQxewS",
  "key12": "3rhPsm4dCGcVfS8ntwsjDs3LUBXfSVHpPh8uyzj6GHsMu2j5AT8rZn6B2KXrB73y2yB9hYb1YWAhRo4ivVJCNjTX",
  "key13": "4xYvjzJV6z79rCZ6RrnyeRYNZQcQUZnFEe7S1wS5PcsHuFFrqD7S4wZFYAXP6Ksv83JyZA3ob9J7XaW3WtRkCNSQ",
  "key14": "5tRP6rS7i82kE3BQixXb1CyJ7uG8YmocTjRcfbPDjV4K27KWYGFujDF2rFpKpnonYvxbLTQo6yWKaV6mqDtwNnJV",
  "key15": "hiZBFf1J7ZQEihBxDdvcBYcr96hDS7T1S1Qr7Abb9Swk3TbVDezF4xqVddna28MvGS5UTTK4gbmAjjZw68FbcW5",
  "key16": "5LbNC8SNbC68rVFAN33sBHccPm9yJi6nkHuRPjSc53GLky6J8CxF3wUW9aHgh3Bg9EkXbc8kRms1kG2c6ZBqHVg7",
  "key17": "4Pu5irEzugHU6mjpqgk4MHR2AkS5V2pzSCM9WgYRd5T5SJo6FHtTwvxkAfbpFNPPsS46UFyNtc3SvkWJqTbUrxkQ",
  "key18": "67cd1qm46T4xq6nMpUcwTmKUXwS56iuzuyrpkPzowq6aFkZHmaY1zfXCHKt7ezajCgZTpEgZWWKPV3uzNSX9Hg4B",
  "key19": "5kJtrjwr46fiuhtAv5KWeWfsts9Ff5WYgRXT2eeedeZPcx7CT4d1mPuZq1mV3ocxxgJPS1tuu4gG62EwHUPfV2SP",
  "key20": "917HvdTEopyQT8VsqPEhrztMz8fBHd5ugYXtAvHJt4KXF5oBEy5dvKtVbNAPDdjsKdCq96WQ3ehMTfyeHCTBEe2",
  "key21": "5riKYmYBKbm1nQYS5bJbsMA4rnLn9Fbnw8VmTF2HYsjpokYBxEDsjCRSoP9dnwkcvWfMVR42yB3qVHGzEmT99Nkj",
  "key22": "2mTH1sxRRATaFef8J7UUrrLhTpBS9k35WGzANX4g88Qx4yrWmJaAEjHwXKrJRoEyvKEbUk4rS9kzCcZ8oRWod2j9",
  "key23": "2WSpQ87VHRzrCsoxUpQkh8FHcMjgXa4zHVdoCDVRE3u751gcj9PD5JqRd449tTspvxHScBiCdZGGGupq4jBj6vX9",
  "key24": "66cZrYRYHNo6qudPnZxri7Eeqaf6nNMnCSmzdzoPfBkSgvuMZu7yi2CwUJWKdqjSEqVhPQoPV7SQpzBDJhHMXnT4",
  "key25": "4o83N41VKGZGwE3ErLa2p8qm5pzZ5FL3KdggbjtepfRPz6E8WD3e7iYxxa48JbK6AXPVYQc3bFtzNPuJyeaumbR",
  "key26": "231XoRnpkVH62iX5dyLa73V4btjGb4MLDvpYt5yov3XuomdbbVg7eEYH3hP5hHMP4EE4FM9dabZa9w3zQWAqi5DX",
  "key27": "2G7idPkYN8vTGj67K8nRVy1sdT2rm7y3TDWXcsBbPBec8AUt82fp1UaRq8F7BZnUrUG18B5eHZ1Kn8w4UyMN5D5B",
  "key28": "33PnWgnXYiUcVVo8yFZeKY7yzHqRpaXkYfqhcBN8eHwkupVnbG8WP892MhheCZmcESGsYN2QmPBTCeNCVRo8XHaA",
  "key29": "3DhKeFE5JK1fLsUUuJZZ3x9N1kRLha8NL8DYWqMbqBcHpBp4uRYQ2HuUPPDdCPaUDueKNvWS5y9GVCfLRRJ7AbaP",
  "key30": "2KAFemW79Lxvk3x9BJkFiZTQGNvGsVhXVXA28Fc4cjGVhBZFdzEjhoqTcM2JZFKKjQnafqMzJG7BQWN9b8Bv1BF8",
  "key31": "33gCe3nzWwrxEW9ZD8Zy9Vz4BBniY4n54GRMaQNvfMo2nXKr7DgiHsiSMfafQWbFqrHF4Zvbj1webz9ema5JzPg",
  "key32": "7ktnaN1u6oHm12S35Xi1kAfgUpu8cFHvuqc1Q2pNhEpLB7rUYxUo1wFgzTWCVPHipArv7LHoWtu2J3a4JNpFE12",
  "key33": "5NapyzgFbjCuWELY1VQzKhD72ipEToyjdgRbyNdTkXVvpGqeZDRLzpL4pRELiBTK5UG8wQK49pfdLU8Qhegyq8W9"
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
