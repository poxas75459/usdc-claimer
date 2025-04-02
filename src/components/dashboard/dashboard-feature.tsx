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
    "2SSuFZ7Nh6MCTBDFsvVzAnMAdFusYvtD6N5fwXa6qbiLYYKmmScr4CUh2nbMWWfs1tsfq4REVy7T6vDPHhkJTRdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YrqYhBxVSk7FbmuXzFZu8oJhYMjT7FmireuzuLEfrux4zfjnVJ5niT7wVHt5cGtRYgTsFuCFyznB3ZuPaGbUXEo",
  "key1": "4NHCCnjUJtesUmjXBk7ZbQcnfYfKqbc1PJEQ4vEHxEJNzn8MpBUZfrQmMQkWtfLbwy2uJif84GK6CKDX5vBzhF8D",
  "key2": "5rcZpVXXqgjRHC8Uq3RCcJUX9xeke3KTFnKjr2aeV6SNm9gXkNZdtNJNPbc6zy59eynDwTdR4R1X4CQVw32J6hfG",
  "key3": "2Yh3A1spxHr9mVMWsxfS855z4xnVnAihHMHmrEWa5G2mAdYymiwcBZDNGg4dtbDmmS3RMv73a8rgGNzLEqcoX3wi",
  "key4": "MD1hav429FAkTVZ5RXvkiQ3J78STztgD3aG2uh34ciFW8Nh8vBKzQF3M3wpDnuwkRXW9ZzL1S1kRUL8KLsZNDCB",
  "key5": "5w6ewrTNgTJwgaVsKtPT4HFkHTYW4FUBJxARShnmNT7iUJjdzMbtTzK1LxunckpWuscF1W6d3dqdorX6C3rfv97u",
  "key6": "58TXyyeKi7RDwX9BcjUBLwPi9CR62gF8fJVRPpzZtewz1qsBwUr6Fxoy8ntr3i9gnYQS48hBv3QeQ11MpPtRmQWn",
  "key7": "4fwDRF64SZhW6KkHrCfv6egYr5ysEscVKaAy3WyArAjw3ZkFe8VnknJ7snxHfQcXrhiPK2onXZepWE39GppfAn7f",
  "key8": "3rNys7Kaqy27XL6wceT7bJGcHw12BfbmoiQdVwGqBytdctTzBgNDpGR72BHea6DKybivd4eAxUvuhHy1KXxRJUqn",
  "key9": "4k5dmhkKvNUCweLVV4NPEtCR3w9Z9iUYsre8iBLs2jRHg4Qy2ddPD4S6bGFH92umrpPtf4E596JjU7c1TFuY4QUF",
  "key10": "337pHM3DKfQsMYZGTrLrMHRLbD5sSqtLQmFMixDzUT21FuXSb8bq9RgdoJydqr1vjof5hYKfY6ZgbeZMX4VxN53k",
  "key11": "3qmXoihkRHWfFiKJPsjNr47szSgm5fhg5bhu9v9bgP1mDZgEj9cu2nzLUXNE2C2BSGbTaLTN59QmUorbNe9Qp5iP",
  "key12": "63aWwb3cG2SiR5HpryYG9i5Z1oh8JtvW7Cvtii8YGKAessNdG6bgzRcwbBkdnMcB93pC7s93NtM9eZ28BqaF2Us6",
  "key13": "24Bqqv6cnpHY2wBvLvs4nbxLmSgfsNngXUnYsg3zeAL8qwRcVYETDsiZfNEFXW6s7k5ZTaAR3cH8YFzQfwG4Wj8P",
  "key14": "24wJFp2xqEDc4eP2TuYmbE9yAzahmasaFq2PLoNPPkRGtW41EvexeJneqwEW4vMs9X2Y9J1KJ4iaBo1JJBM8H79Z",
  "key15": "Vz3QJ6uGWzQv9DU9NHGRC1GbT6LPtZRcLYZZ6qWcmJbfjSdqk1i3vwkymqwBEboQfFhFbjhw4w95iPTjc1FyGw3",
  "key16": "4kMu2UVk2Z69468FM6ATh6JemccrRsnpsWHQAzKNnJpHJRSqdNT4egmca2xb6v5PY1SaQiNEHQS2nz8vGXBqbt2Y",
  "key17": "31hRPpGSYu6FAefg8t4WYXkLjyLtFBdEjUnDS3TxirUhdXv91Z6zd4GDGcEP7JfNHTgaxZb8mg5TEJA6xHCiP7BR",
  "key18": "2DUBEtDx4QxixgJiQHmoVX5WWArqvAJpW9rcE16Zvy8LuBAt652ZWkpMtF5DAsZBra1QWdxEqE3NeRNfvA5bdMs9",
  "key19": "5cSQr9RW6bgSLX6u4uYJRJJieZSVTuZg7MzG9E42AceG8KnpLuyt2SLwnBToY7UCkob9dAf3p7nkWk1z22vY5Gzo",
  "key20": "4uECdpyDVpHHYQdQFFvHD9XXJgrNk61jGELc4kxr7ButFNMLntfDhC8cUMa7Y9purRjfEKujRM5x4EqtAoSwKh4g",
  "key21": "LRBF78MgSujUHCcGmF65teY9J5vM3ugbTQddsdwYENMhgJri2nC9QdyK2ZLwWjvbbiXD3jrnGydpsxhA4C3THxr",
  "key22": "3miysbFhE3VmXVBtGhmoGuEfn6Yu4CagCgJd6MGJVX594P8W8h7Envcix3NB1cj4rwhC8wqD7hv4eYCWbzC2tx5D",
  "key23": "2rQ5u3Fw78uVQndfvRzcR6JioVPVwcKKYE67tnsEmfVCzxQgB35kLVN46zr5p3Jv1yw3sXwJzfQjd6B5ZEYKxv4L",
  "key24": "21eCNJzW4NAS2xLcLFCmzGZwAX9tinh4aQPUSBBkn1BSMBoWjDzpdp2gvSjA7roSeAQbJ1fZz31CbEUWWhSmHUFS",
  "key25": "5p5hpptMdX6FkCdu6r6SjM4rXGJXYjpuDW1niHRkezcEeoqFRGMFDyfyTZ7mD68FTcibAHzVVb2oQ4ckvAoFtRmB",
  "key26": "2SfA5id44peKJGyqsw6PriLAmcZXsUut1g9N9yoKD23uocaA6EoW9jUj1LwTv25QsuXgC5mXoFG4FgR2HymAo9w4",
  "key27": "3N96Mw5v1VSNCj4C4wYCpyTaNh44zDByzAHbwEU27psK7LJdguvribMxho9mg4V2BfPuR3ohAXB7QtJ7gWFELQmS",
  "key28": "2bskk3kiGSS68pQqhqxaD9LBhYoKq4ACDqkXc9huj5bJkmmbsgADtL84twvAw1aWGBB4f9peUXDFKgQSv6HGrpK8",
  "key29": "4PqWTGnvFajgaFh3KjZ7Uxvxt3LRwDdJ8pnm6XbpCSarCAk9fvP3okJF4SaSRcUZQFiu1XKWQtGwPVPQcJtyv6Ck",
  "key30": "4ZXL2zfboUukhzHe6YMWzsdpwo12gKttzhcPgifQKrmZRQkPcsuGgpCKV3cC5T9GsS8Q2KPhcjUTkQY5qasErwG6",
  "key31": "3z449H6gJQP9zYAenLsKH7BaDCkzJAvY8fsLtPWfYnkPrBtD4GfCEGydreXyxFfqufANdQTzm6yVjscE5cYa9yef",
  "key32": "2TMPuoBwFGesQjZExLibvFNkbBScvsvyhbHVUJ59awCUsQZwXvFsNX3gsdR2HVLtYx68jads9j6Un24VJqHrbSnf"
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
