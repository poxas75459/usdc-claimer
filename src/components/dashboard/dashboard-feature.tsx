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
    "2UgK1ZVPzH29jiJkS6nVJcNvcdYq3W4urp5LSuk4f4BV6QLaionUjhLuuyk7b9N4DexkiKJTinwVqpfq9mvasfCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWMmmPMWBJXV1M4jk7DdXKoisa2nwyssFbdea8hjvCLDAHVWSrsh4eVzjWeTMykaNucd2j7HXLbgdRLbD6CQX6U",
  "key1": "27KDuWU4dqJeetJxrUsrzRC27zwDNnq2LR5MrUjMMLWSLPjpUUQxFFfkR1X1o9wsr5fBnUQarLo9CWoJGxHn8GxL",
  "key2": "cnwDPeEa4Fq1zW5dTZKoECV5SrvDkBhEeJuaQTbQM2vjktpck7KK4wuqUQA7nr3vCqRKxhVe2zhPg9naJ6Lw5QV",
  "key3": "g83GKGuqBFFqm9bAWCdSZu7MtcWCtYWtdfkA2mwVt16gBz2G4jdRP81n2HYdm5PTJvgHcbceUjKSFscSeKDrm5Q",
  "key4": "4YLh6KQnjNpL9U3yGVBw9XHpRJ8qNQVm6T6nu5RkiANxy9Wb4oqtG3emR67nYJGfDayFewuzTnME5iEsjjYetaGF",
  "key5": "4hq3ao9TPHCpTqtdFHuF9bK36qTUhKv6Qc9zmbhFctJpfBtN4vrFsQQbJNoxEu3LyQTZ8sYXzCgbkjUy8QPfDjQm",
  "key6": "37YFHcSw4CoDu4fn8aS8TFqfTWmFT6rqfSQZByDNF1tyh4JYm1YMyaC9WWpz8o7nKBLJphNv4zQrKtgW7HyiWhz1",
  "key7": "2LKw2MvoVhmHNc1Magi5zYzceXGFaP9gSfN4vVeT1tQL4V5tJHtKozWkptrSfLWgSN8iUqmECk8nggzSmMSi7kst",
  "key8": "MRHT3YVYYpMv3CjEto1droMNpWZoRbpTRTsK5Gfzbecf1uvFqWfFetbk1JDJ9CkHMv11qMQr3XTMpwW27sTLy7b",
  "key9": "3oU8sZq6NzM8qwFLoDbWQX2SNnTn2aHeKUBecS39j2T14z377fwq238G7ciXA2CTeVxdxf4q3M2EXeEwBvZMUrqs",
  "key10": "YHGaMps6mNVEh8rbqRstjN3ztEQZeviWNWbdUN9kPVnu1w5rXgXKj7QjnE7WRNW433kBN6hniPLx7uhp2YmxhXu",
  "key11": "6noPNEhDFYiB4myU91FkaCYrvzQPkYnf8uu7kVXGFm2TRKEFKdVvUQt4sX6jxLsB9DDZQPy81VBgqHRUEJ52fSS",
  "key12": "4YAjWbW3gsYfcJcMh3PeCn7vmZDZRzUSaizGThGKMAUtFpVWKGc6aCCHPjzHtZVWKJad6AwUpKeacdgMAkbQjwg8",
  "key13": "4SkhszcJvhJJaneXBiiPz6FdHfX1myWeM9p1wFqJcnew8HVv8GisNC3fkKkeybHRrA1ztASMCfouGJV8b5sqqJnk",
  "key14": "24YajzJehqhA6i5Z8ATBVjmgckmcWUiGQKwek54nDoYJTdbC27AcsN5fA5ovS7pKGyJ8ykJY3GvRN2HWvBRp27JK",
  "key15": "3dZvxVHgZ2iie48sBEUMN71uow6pqSE1FcEnUYCNNMwouqQ9JG7hFH5b1t2rv6Yfs28sTnXE7EkbkYBFQLHvTJ7Y",
  "key16": "3A2zNQwqNmPbV9LCwLKXkN95MptEeeTcr1Jg7pFsoTFSB9co5mckML4uddSMQv1ZuW8J9fCDnbKZ7UDrbURxGzKP",
  "key17": "62ytzTun5iAazqzemr54fHFzLV9vGC8FUEcY7nXQ2wqR9QCqVwzd35igGT2Tn8ordjiZawKQhzunbf7pMc6dHZ4",
  "key18": "4wHS5W3ahVhof5jGUKDTveNrH33ondYeFXERHnXnyqUvfdRmp6aFFuSnxkdy1oFQFmFRJCL1sHzr1998vHLXtvL4",
  "key19": "3cTHHZpG3BEPm65xJkwGkqztcZhRtsd8ZHdJaQ6s4Q6mhCqPqHCm4gMGBRZBHAAYsyiKsZ8YAGmiBCEa5Uz4fJQA",
  "key20": "42TqkQDz6LwRaKb1yNzHVfozGdjW2pS6obgQZruRsArrqdMMB7Mpv6ghpFJnYcPR3tg1hymwVrmGKBiTgR35tvU8",
  "key21": "o8DV8pbNZTCXDzhmJ2ab1Vm8bBZwcpkQGzCAaJ6VVMM6LE3RYd3eRTaKVhr9po6NhtbxF67uhBAoH8sQXNxGxK9",
  "key22": "33XhWLDUYUEBa8rENQPZTNk5oDXTdi5aXRWMpLUGER7eb22VEE5rn1Ez3AVZNKKnqWxNyvg6priKPCe9m2hKkN9K",
  "key23": "DLCvM4h27hDogLLbAwiAeV94oLano8EZHWBNER9toDNcuvxSqHmLBncYARwAPXA9TbvWke68yPGEosqi4GQqeCB",
  "key24": "2f5MxqeJTaxkbTVkDbqFBKRQGAspRn6scBVzWnwK9CGTN4xWUTD4MEMcbbN7wLHSKquZDwjAgvXh3jEvQxscMWgC",
  "key25": "42r7Z6ZDFkbKtVUs5RZczJghL3QCJKbAUJq5CbK3ncRS5sfBAQCVCB7t6RXqw6tU1xUEwnTJfmsCBkSrXWmbq7Um",
  "key26": "2Mc4ro5r6qxxQyFXcTSaThAxUHWGCcVYJmbVCuBz7L4xXof2vp2TnVzp1iM8pTfEyMdpQUhHsPtSejM7pX8DDSi4",
  "key27": "3SU7Tf8jn93sE9hiNVQExZUCWq9oi7UrGrSZziGoh7o8fLDbGYt4Y554tZybbeFDq8fqw1UvCEqukZF1mnGKfnrg",
  "key28": "3qwZZTXwn8qXLteoP3w34CGNi6s7LMBzjWajKzGiNzgxhMB4irqgCmCrwRvh74ZWnfCXy8hvbys4bYop4rCEFkPG",
  "key29": "3dBUMZeWuLRnxqAcotRW1ydqV1fUbxExmP6o97yu8ns7HZEy6iDLUAD3uJ4dau2rQe8jQYT54NkxVVoui9Jwx9Ce",
  "key30": "4EauFv9A3zFSoNBFsAD3iSAJ5kfeHi3ZewbLMUkbgPdVMc3gpnARSmkMPZNbGKq1PRox87oDGYuSB3wWABASNarC",
  "key31": "3QYqUTm4rdecTpEZ6wMyMKUorrqvr6W2wLcHDCmqfUbz6T1oft13bVsmnM4CQcQswRwf8fT8EYBUSvKmzt2WMHwR",
  "key32": "41yguHdbS62ExvEyA5qFzrVy6paWe18UwuTnveH7RQNAgAS6gjxvGKXVExNBYEDBseMeuMVKrSgM9LEACb7ykTc5",
  "key33": "WRxF8Q44BKKP92kAKMqJuP9aJWBkk1e3QT1wGspHeiawBzKFthTx4f2r3bpmdcUdDavpMxDYkZMDVRedwakyC2n",
  "key34": "5ZSvSNydRrRfUusu33rC4LW6rtSBemQ6enhowbLcbRvAxPr8vsckk2MyF48VsYKZBzi9PNtY51KLcb3YPTMY72LL",
  "key35": "4P17CKzjFW4CGYEJwJ2quti4DEtkbGJNsmcjhHU55LPweJbijmEpNsB8gqETifhuYP8iPMEzYTS2iVDsf6idPTPU"
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
