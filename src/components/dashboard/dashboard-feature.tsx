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
    "4gTtg8WiV5QMFciCeyMaoH3Gp69qytGeUDZFXJMimLP5vQSuMDh3aastZXmtKtNCTTtKmHg5SwsTHZgdHxw7Hshv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpKX6aJu98pnzQPoU6RWdWS2stHDSGBbPk8xoGjgMe6wzadwWqLJQzrv7S6RYiDdtePrBfdkPdWoKYvmm2aD8zD",
  "key1": "2wyXGboZgKpcKv7t9RmXxtKYBzd4qLwH3eU42P7DPcM2P5x6MCMspbTgNZFdkELccJBxSTgSjrN9UTnNu3rK6R7t",
  "key2": "665n8f4xkdoVQ8WGoMja7NWR3hzMG6u4vzQ7oS2fwUmTCAwV3LwNa9AB2MBnybnW4acWD6hGF65HV5CHqr85oxWA",
  "key3": "3UuVsVa3soMvXPYSXguVLqDmxuuYqcPHnbsTttJSNFVF1G22A3k5YiKP2BiDTk48U1uNXA6TXSFwjcGcVEygApgz",
  "key4": "5q6AB4ZtGSzup9uLeyS5vR3TsP1fahzER1K2iiVr45zFkaKHYs8N2Jy8PJbSu4syJ4afY4BNbnBXtd3bg14ow1vv",
  "key5": "5Pie5SxBvT2DqovHomjNWvS9Md333X5BUibVJoxN3KVfnj9d3FhM3Zm8PjbFV9tJU43ELmXisiYGghCpDnsXG1oW",
  "key6": "4V6fsL4m8h5ZjFmbi4pQ3aFajB75AfPKCWXeuA27fYF938AxeBESaZvFtTPrWET5kkVEvGKs7rFC7g8T39NAzBH6",
  "key7": "2A5UNrBCvbmnXLHT2DbiyU85xvaEcp8jkXxVXHstBD4YJRDrgcaXd8X6JcsPBkfCVjRE1AuGg4rQ3jb3iebAFqwP",
  "key8": "5TZnJErt54jdSMc6fcV3MtFKs3N45aioupsXQnhQ9BtBv5pWzuQZT2Wim9DvCp9Krq3JhFMNTb3169Ax46DvP8gG",
  "key9": "2nRH2vrr5JwYQAB3zSWwcbv9BAM344wX3QsHU2nvhnsttCbUWCeFKDCCjCTTbuKsyZEhdewpWP6PBkr7wSHeNqSk",
  "key10": "3QwNYq8fUqHjYdM66Nj5xjJk8qfuHQpMfVv7zQVfjjReamPpTbYmbNxyx9jYVA7ERgZLXAFsxuRXa1ri8tDpsDG9",
  "key11": "wiGZHGdWqxigiKGcqDnymY47M1hTkeq1G2p4xtYkVBQzCG3yr74qHzsCYDoRWfER2FykZbpFg3DFjVTQAzDqSkS",
  "key12": "2pv8F8YcUsogFsXMVaRpW5wXAzMGhTcWasVyJxfZ9wA2WHML8sqzjpPvd4rNSRP923JQBVzQ4euGkyPiupdKRkCL",
  "key13": "2yqGrnkFDfy7V5kNGCrEDmWLKcm231sfmaNT8SGC6voPa8BaXRdX8q93Dt1jUueyB6Mjj9Lhxkv2mYe5TyGWkdvd",
  "key14": "4tXks7zeXb4YtoVmvU11Pm2RAjM9iVd4d3uLw4pUvApzuveiqDnuxR5u1yxmY8WatNZmgpMLbf8N4XGjFLZVVSi6",
  "key15": "5Vb3fAqvbqHhgM98qp4FLk8xdsX4iVZJBwHryYP7vJnvVMAidfLMDjrCiVRK2CEvFXcm33mk9arJptPH443utfjt",
  "key16": "3Zcbe3C1j35SCy5MZx7wR8ZuR1s1618jPrzNUPTYQh6uPCCqcxU1DAQY4xaaoDGGzS5rhoW9a1ZYuYPu5YR3NSRd",
  "key17": "4bXF1feJqHmdFXjDJ7kT6iY5oQoioTGBzsSDuFDivGzSMLYUib17a2nq6uh8sXsbyrnF9zY1YNZJr9E3TafaLzZB",
  "key18": "2Kwjsyw6gWEWia5198fZeHuy7bFqEwA3Qtq5chxX39QE8TeZt4N8UmV2DE5URVEFmqx1uY2XNp7zgHGArGAC9DfD",
  "key19": "BiXQnsckvVW1qWP5pNamn9Gfm9EyzvUMvzw4hucg32td58nHnYEcG8BYoWhkbbLBzpcPKhZkU7HpdUQcB1Ei6Wj",
  "key20": "3fmksCNa9UbYajjRzVVGtfQi3n4Mn65gJdNTF46nWaxXVd59ap6CRod1b4R6j82vfGyVLVjnVjnf6QnGokAGGTAL",
  "key21": "4F7KnEjefJv6mGDDucAvc1TrGTYHP3QJ52XtyMvzEu7ZbW9wcE14oZxkhkT1RkYMzg91YL9wYVH5EoifmrJJ1Skp",
  "key22": "ZmF3F4MtaJw9UJJnC3AW6KuH4EyoPWeibHEsdGpzzs2ymvED913L9EvkK9Kj7WktMNuRo55kLMn95ehzY7w6hRs",
  "key23": "45BsmfMCFPJqNKDawVqF4f95NUxkyES5p4kNzYaNrABNvSoD7T9Vfms1U1LbTqaF3atNZbgNgyQmWGK5LBG2euHf",
  "key24": "4m68Z3DXiom7zQyEuskLsiXRoR2T2VUFJKz8ug2XvWEdF6ppPSFmweSVbCfy6ezP3F2AKWKbBu2FBNKYvYUzpEeb",
  "key25": "2sdgGniLMhtWn6bv3ugxVqzRu4WWDgrLVEhek5jYgdSjzmkjLVkQAWsV1x2LeusC5fUt5R1WCkLWdDSJY4obKmQo",
  "key26": "2g1xtEc4RyK6h5F49AZMW7qHHE2H8s3g4NWXErAwtzoxbvohv93KJjxRcKiis28WymFQ4LQVrqYqX4QnURvVSkQj",
  "key27": "4cDuGCw7SYvAuiBcn11nJVyvJdkfV7tzxV5VVyXKKRCvboPRtXoVFF6bV1KYAjvhQUdys3STsr2kqj3KAui4HJ7R",
  "key28": "51EmAzLsng9UCFug29Rj5vX8i776fFFHpxj5kXYHqTAczE5mb3K4CfoQeGtzyv6w8nHSZEq4nFWwvsKZhQEFdRtx",
  "key29": "2tZMzwwGn3UsQfaofynyBLD95CaPc4REUUPSE7ADRAM8TogmZ5JD7BpZy4d37mLiZ6nTyqj6HMadPGMxmcb4R3LW",
  "key30": "4za8EnGaSXyUhFZ8W1X6aVTDPzRDFdZXxgPjKBu24LQYDVSPdvYJTbtJPmhCe18qD2brwF7SfT888ehUfmbdwCDp",
  "key31": "hvDxrrXKyrebW4A2osJox2gpvTXCdwyYJ8rTi3p3uWPZL7TyhG253G49z95RmZZRBck6Z5qTZm6JpeaZggtm3Js",
  "key32": "ED7TgwmeArpNHzJ778FHEDzCehTapAS5uhPLnoLZZJSCyqYKWYFawu63QscsjV4JxBgNK1cZENzrUxDypMMPdAR"
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
