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
    "4aD281wzavDyS9fGqzRrKRKF1DPCBitUsMnzrtT19NJ5qdc3eLN1e2gnaMPkrhzJpNQa67LtMgW4J2MHTi67FQt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cD2VD1gqMYNpyHYtcf5EXxAc5mefvXYFXsxrWBYtRCBDxYbFqLucuNwgeCah4fEX8cmxuWL7dX3Vk68pdrqZ4fg",
  "key1": "bvParswi5GpUbkvHzj2cvvq23X69eHnprg6JPBxnBm9JzPVdJg88e2JULFJ67KfaApKGD2bb24vFAiu8q29owW9",
  "key2": "3ZBrsgr98ZXkLS6BHVDTYbixjnFWwPMbxD9WoHuE5qCQgj336af6yHFvo1Z21qyhTX75j7DHAYoZ6zsjsAaXnLMN",
  "key3": "66qWP6qk12zBDMUpR21F5aq6h5VxMFdqE6ubD2fxUomoMFCGZpkZgVKMzZUCmWCZDMg7zaTVv9AygPBLzNdJmAGR",
  "key4": "uj2FbBGTZjXtzgQY472hyJVQEZZQNnV3KVeojMZgfCJ3wGc8HDbUibASnH1sApq6yMcwwHhdesnWxSaxCUu5hn4",
  "key5": "5v6yA5quwXSkQGt2nmZTKGt9nKuDGDEQaDgh4ZhdxARnQJMd4vGYMr7KdJwapS6ZNh98XcBj1o783u4RrRFCbHwJ",
  "key6": "35CkBuHTFm68LaVumc1iumAMUYozqcNzp2zXtfGq55fRRVzd8RyT1p9mAkoT3J3jRCTscS4cKD1gzJoBbtEby53b",
  "key7": "5ez54dpgKJsNMDzNqKhQePCsddBfnE8HgFLDVve5KAoPGZqmigt2dkQsC6HQvB1FeD9cVvu9MTBwJt6rAJVwW3ky",
  "key8": "hpkvoiWEkn4EVvcSHRAzJDXVHo2ev8kDi34bmCaqunTwx7HqZSFy2RdrJBMHSztpSjK5NkKxUHkw7QDCLFZtuVZ",
  "key9": "rUq161MCbsNPq8MS9REzofx95Ry3FU14zAzqGn5S8RycgoYYaP2MCqGXiT7oiT6epXujWkutoq7oyJzHxGUX9qt",
  "key10": "CNwukL4r1RhoLNf9QcavEp4gtwCEuem3xctBBvs81vAjLVJoZdkzXYJF9upEUzf7V1gvagLV7LK8qbnW1tCxbbY",
  "key11": "3Sai3nWXWvkmLAmev97xcDsXCeFUL65C1oMC6jMk4ir9xsYZ1hVxidx73PR2xcA5dkqA14kjfSqyMW1kDyjPAfb3",
  "key12": "3hPUYkmdwLfUqMjTEMYh7mXoRKoxoxiGwh6jVBQhrvYm9mckNGTmhoiUzaroicthXR4hwJgcmqifDqpsnzGmE8EV",
  "key13": "25NJYmSb6aotsi17nttj4QeQm3WsWP4nN7yj5ZjNHhaH6SN1tgaudwkWLpjRcoryLPD42ZhGBZcfgXXMTVUMk494",
  "key14": "3JHW557K2X1NcvCx2J8iQbf8j5WGjXeD96vTTndmP4EwuX2wM3bsShCjzSk3gDxfuAU5E53gXfUmjMrC7JjaiVi",
  "key15": "5U4bFSpXr85FVFV9Wj5D1RTbWhAxGvJkW48iWnRwCRuV3SWR441JQPwuv8FmnQBCKbJJiBzcJga25AQEHiBM9gz",
  "key16": "59p1BtbsXDYcQiE2UXFLJx5fiPjpUmYvBFF3YTRSd5tLcDRSi45YVWUwMPVSY9dPGdWCGnTTzfSBhaod8U43QFWm",
  "key17": "2MCnVeNirf2XgV7FgWRoVLFgBRTUVAZMso54u8W9FjGSDciaJzdAb8VSYwpP6Xriw8A1Dk3c6NjSXEhStjUcQnF5",
  "key18": "3atfzikc1G3gqdti1jfVy6YHxiKvseYdDE6GoHABSfpbpDLPqhj9hae4awzFucudLyZizYWRXzdSjX4WWg1CiSei",
  "key19": "66x7yBCiunpukKvw3ZqhLRud5NNTL7mBtaKsNxo9Hk52MCLCAcCdwx4WM35U5MBcx2Yr9Kyj7qFCzVnzJ5KgBDKj",
  "key20": "vbnMPxFNrAGuW8QauXjwx968FwCCwDZVdh3wG4qrd9LiR5istHhYzU1PDSc7qFXmmdRpKPG6LLB7ikm8Cip9dZG",
  "key21": "3xz1MMtc1L6yKZXnHQMTww7p7d8zF2UPFGwyhM2MgZwKCBWnNQJiyReuqoN6kB7RQihsY4KRWoq3q6NCQeSVUP1b",
  "key22": "5uM6HuUthXgtpvEnHof8x4JuWEfXsnNHELrVbWugjQCKfsUsVigwkNbtMk4tZTiNWRH5U1td7msXuuR7kHHkSUfz",
  "key23": "5EodE5VbsqHsejnSwaycwfDR5oxwkAd9nn1SndjPJrLG59aoLuKc5D8KPuApDDhyQ5x9GzciDFyATtEGoBEhukMn",
  "key24": "4AvLNxdombnjHC7x8SrmDkjiszZQqNaJ6MfcHk1K1wqSZp4i6i3M7PGRmcb3D6Exsfgt9p3z2QVJUTYWPVLfzS7y",
  "key25": "24fS6CrK4nZZ177cEaHquShSakSrp9c6EwAaKztWs8miukV6NpTXgFpjYxjRRaeBQs6MkSyDv5TqrTc7QCeCR2Gp",
  "key26": "287bikd7t5VUzV3iwXzDc8JqGXRoYhM9njSmAXSEpqfSbstz2aFRanaUX2zk4njgRQT6J6BufBeF6LUiYtPf1Xiz",
  "key27": "V25b38N1y83CMC8BrKTnkJ5HkYLV1HnDDipSysGbFDotY92VNM7vUeBUVQ1iRWHsffAZ77qoAmEFm3187fyrtcG",
  "key28": "2rSYcSPJUwqJYPv9MoiUrvhjwzEpruNAauhBg3payLi5ucA997wsz3NXLLnCY49dCn8jMizuNqeGB5HiqE2ug8AB",
  "key29": "3naugLSrYQ9UQpZPu9g6MYgjkpnUJRvxVBuxktaPv2W5pVUt4CUxo4mFPvjnrj9rJdvtctGuDYwA9fDqNPeZXJmw",
  "key30": "2cQieTwwMi8xTD4YQ28mfXh1B1iTbCHzEARfGFWmGH1SLTJ6b6JvyyZgxg6uR9GhHsLavbLxcks3bfGmkj9jun6x",
  "key31": "22bmZm5LzaFSWXxRmSaMiN2u7FYDMigqo9mno9EhuQfesb7qFm2Cith54FaGVYkGv9cDRC9SknA1suxgVhdyXbqM",
  "key32": "4aJRNmhTPaz8bH7MTfbayvb5VdJMDtfSNe6a8xyBSgVtvaPPgipPdzuoA36WJ8YnwRavMpeGDhY9n4G8yt8AsrUa",
  "key33": "hsmPvPzNsobAbpaZ6hrEhQqUo4k5Pw2LQxSiPRZwb2pQC17BinyMsngdxna4xuSeSNmM5ZSZ7NyiFgWzfwNuFfw"
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
