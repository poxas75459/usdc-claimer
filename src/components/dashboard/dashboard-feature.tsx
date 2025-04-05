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
    "4KBqrPeCVPHh9iiRjZkqcrWMgsjUnD5Tzy7vy85H1BKQUy7napvdU4qvrrR9wmWLztBnssgohcTDpuSntnfnEsqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311HwhpE7yGSmATVkLRHQrWZdrQrcsr57wSEMPNz17msDVoT9BWpvXWgr8Z5E6qsgPL6U9RZe2KbDcRFcsufR8ci",
  "key1": "5FGYAMEd9zZeUySChFwHznRLSghyqyjAEf3jMDCVg6dBo1zYzKNcDW3E7RCk7zWwCp9WbhUvvNt2gQ5bfK6TtFCw",
  "key2": "zybgb3o8qDonsSS336QBobwWoBCpsQjcZMpFbEDHV4vyFpAfPiegcjs1stNdiC3z6kexFAArAdtvJCmm6iAzfWs",
  "key3": "4iQf51Akedtte9bAG3F1aCjXjcTTC4Xojizn7ZvmuJ2nW2MM4yrLNWiQviFfxjmPJi1eGkjRLqrb9oQszmUG4maA",
  "key4": "4zDCNNttmM1LKVh5iYN1BHHyEh1uka9qSLWxjqHUnj59nLsR2uPdUYhowb2hQ1ciLa8yHKNLaM9SmGnwyjDXKvvR",
  "key5": "zXjyiJuaKzNYArhYJe8HHgrXkzqLF71SZWkaDdDVVucohoFX3PcPT2ubqzCVRmipJXbvicRGxZub4RNp2FCcfdM",
  "key6": "5YkLXv2oiuTBfTUXAzyZgMVBq2wCAfctXxxVdxwJ5tHUHHUSFkHAeMKbSHEFZgFSQBVWMbi7ib6rLGbVs5WA3Pqa",
  "key7": "4ozFCWLEghQCG2X6PBdNScDNqGKWoz5FJ5P2jgpNv4v5pENER3BUsPLRXtfBo9NWE6FhjEkWWBfRGSsNK4YLvhJL",
  "key8": "4UdyCPB63FApNUfTAnNFCsqvM6znVkBgm8dyz3FytMz36WidUEwJWsvZz6y6sFM7cqqX7mBuJ43PtUUwUi91afMt",
  "key9": "5mCtunMQWRNb7KJjqadBLgZ5AQoKGC8pYUSFsXS3PzPH3AqVFShhpLFZDxbuvJ7jmHW3E8vgHrwzJr8kzpazGy1n",
  "key10": "5BAjDsG1ncShzN8RQYqzWPdgPuKFpfyyMJfuyWTraY7bES4sdAk3eTYGa8kgf7nFVEwdMA9gzAk7nBVetJTfCnQi",
  "key11": "31iU1eTNXaygForXYH5W1Cf3vE69tHdqsapJ4RLhPjiFwbNHESqfE3pqG6rxuY2WXxaX5jsRbbLdNNumf8P54Rcb",
  "key12": "42nbG8JKLJ6ndCcqXKtXEYsoTACcaoa65J6FqtJkAn7Dej6gT2eaQTD3RwBYMF3o26dwKkQbaeMX7EXsj1HjEaBZ",
  "key13": "57KPPqurbp3pSsn1czwLmDJmiqwP9kEVUic5rXoDGRfLhhepXcqV5EwdjFBnERyEGG5JuqSth13ooVNGcVspubp4",
  "key14": "2DMTyNF4yuKnexXUjyXsMYv9oTazHZc73EuPvBLxuZLNWec8vkgqWMDquJhKGaEQCQ8NR4iDYX2YHADhr2VNYJx6",
  "key15": "3fLYvKGspjdQaGFkEGffjhmgvYP2wYYA5HRckQioVbaoP7wxXBeFrTZriQSFfQZMbzYbSkRCh33SqqsbLGjT9e5s",
  "key16": "zX3AiKhpXrT7SxQE9qT3QS5P21ah3ahXxLfWgkKDUoEttXCbhLw4ssgKgvySWpRdURhnvuDELs8DGSJ8yEjDqfG",
  "key17": "2VthpziXyQKaxAZbDxedEUU1BSXMFRFMYSggUsM5gtvbqgY6WXKVPUJk85k3iyc6yJiobvpx1d2pFQoTuvEzYew6",
  "key18": "4G7GMUqs9TDY9UNvVFMbrqYHHkYv96jVTskSKiqtvThbXnBrdETKrKQKm7N6twr3v1tRywGQXPoRrWtyFFRDmcYJ",
  "key19": "4EbSf3Ed6LrjoxeMQ2aZ1a8Rqnvnpkuurg7EVbAtnDQA6fixijKWwF8vvcMgUA7BZAnNy8aKV3yBvKTm3pxArrCT",
  "key20": "651X1S1E7kPv1v1ZfiyrLCA3Ron6cqrHLFMwbTEVARtd7aQhPyT95PUJ7mFmnfMCxqcFqxNZE625q4pzekaRXhDe",
  "key21": "3mfUypHmxg9kRLbCzDRJrgycroKDbf76bbQZUMfhkYNJ5kbRWrpXoFR2A5xu5WGDYjr36LtF5zSyaxgy7FfSwtDN",
  "key22": "27Yuo67eXQnWAUpnvuKUQid4ibBJBE1Cf9npSz3LxVzXNWqoKFapnPcUzAQQhPF9rBsJT1Sq6JYVpyZNkS3P5eU7",
  "key23": "4jnPU59zwDEwwULM8Rz5Zxv85bfCDFpAu1RJThV1tPJVR5aFqJqFUUTdZb5xzwvyQ28r3gMZi1DmkydAKNzycds5",
  "key24": "3sjBQ1xVqkzxos4yisxthDZehHwJ48AcQQrexVocfJNJxhGURhQneNWhWiaxrexX42RULTTN4uirurQhw5zYsYhq",
  "key25": "3KxP4db5UJFAwTCcNpEppmpgR9oUJ8EBc4rucGKKQYMrXHpLxxiAN5QysHhwmoXY9bkKXH1adgDUJQnYWa5Ta6u3",
  "key26": "4VTAxrFQLtwb2S18VskZobJL4iQxuxHs7JFki7t5hC1E9dqdkaMeukYKKToPcuqYg7BbssFj7A97JTq4LHMJBNKQ",
  "key27": "58kuEE4zgXvJgWyBt4QMEFCY5bZjfL36WUer2mV3Sc4WPisU1cMQok48BohmdGTcY8s5qgXY1RNNdT8VZ9Ei9xjM",
  "key28": "54r3G7bQDyENs6UUTY8iCK7hEtDYiEAeyWrCoi9uPJYBcoTJmYTb9M1eDrMCG3qG8wu2Un1KTTdGmPBCJwgSbVM6"
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
