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
    "GmmMxFdFG5QwRq374fNdYmbkXBxor1fsCANSnwpebMCRD6pPSZUM1ZrbLBZQ1tkQ2ihfXChwDFfCjJznGhU5Dpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hf4qNjL6f7x7zG4a7LZx8dQRg1kZ7DYB4Qxeivc2iNgBKTr5QWdKwp6WCPYnuLzqHR7AveKMvgvvLYG2uFaZMqY",
  "key1": "4h9xW2oG4NdCNSnbxAxsPBxMvcXA2GF3Cm7UyeHVu6hmrPko4JbV148LbaGmq3JBaGdnQ7d2mVX6uPm7CeLHdwqt",
  "key2": "433pRZrG6eHLXDQuFJMrdigcJT9T8RiKftnqAnHDoSo2KJX6EWW52wGsiLr79sbktSghNwjXHeEnaRpNe4y6nako",
  "key3": "4KS4RqvpB1mXdeSJJBZAVtzjZWSzCFnZEYcr7NifD1o12g32KuzkrQS8TxdjJ8bJCfaJZDRHWSDog4rft9zpNxyj",
  "key4": "2dLuHVS2cmrhWqL1HzfmT5DprdX9gVExVmnvAHo1DRZ4S3cLUku4n4gAwXBgX6yFow2eXi4FZgaNFa3QPoHNgfNG",
  "key5": "Ai8LCnJyERDH6ueajST76q4zjxfHyszPfvbaJVsSRnXgwFrVkKMajd62NAoKfZ5f4z2fVggtuaHX68h9fZfGUdg",
  "key6": "3iJHsRbTBJz3jesevPdetHkEqHrQdLsvHTWUB34h9QoBTxazRyHKJmqUF6sXJsfunK62Mb8jtA3mS3T77SGWtwDN",
  "key7": "55nYDsdUFirh65w11Cy4x971fok3SnipXrrr5YJS2FqKXR1CrdLCHncJQiAyPvSRGpgaLG7UTUWRD79sPN1bVCo4",
  "key8": "5K8ecrquhrzvgGBSRiQsVLuDhtSbnFFgZkQH9rao9QaARNWVUDJFu3ei37MunQWWN5a7XLCnw4pyCc8UBg4ge7RR",
  "key9": "3RBXYgzG6MRVjjoeXAXbcrX85V5sMGd4Q1h9zNv7VDYMTFWtsHCuEc69LiBWhteh54yaVZqhPsfcJkKwYKZ82vi",
  "key10": "2kqd9wqYRL5mopVPfmPLdqBFf4EDCL8ic578wzSYNbj6CuP7JZNQjRWmKoFACV5qjTMusxE1DnuFCcAHP3HK7e8E",
  "key11": "5JNMSbBTGkS4NyZcKURBzGFiya6How3rBybieYufuJrLS1FvRk3yFpKgviPeFuuK1NvPF9QMcgw8ePM96WLJUyr6",
  "key12": "2HjqQmvEPKsUJFkzeF2DAgH88Pv7mzM2hGXQvdvq9mJmwBqPejL1tcRk6SSKGBc1vqNEyNVtdEYMa6RGrMrh36r8",
  "key13": "anatC6uMKurkc4d9XBHo6ssj6QYjeUZH6NcBX1tCcGnysjZP6wi2heE4UW8tGcUedPViZgXbfZHck6BpnNrtfpV",
  "key14": "2bgV6sCr5JxLxNKR4DLGnuWeBwYfdd29URk5bPKm67jJRhBQNypk9CrGVUiNj4cs6mtgh3NBmiU3WHLBmMVpjvhU",
  "key15": "4fvZRfkSoD26CxfqsRT8ZXrNX3cnvmXJPRrd4Sx5c5mSaXnqjvsH8F8zNQjYxHn5HsaQPNHdmsWEGxDaRRoYgCJh",
  "key16": "2zMb8UJaDyRManGv5DQ32B4UnTMy5vo72YdHaPktcm8zdbqJvCGVqFBNNqsJZHXVrSSDuvQNNg5fZDByoSC97kUG",
  "key17": "26APaK2ZoLweofD6voFaX3pBKcKttzsm2zG5sxaQPA1sHZfMBK5QbDrKaMBFqmFZV2dwMYCuKyzGzYGyqDFejeg8",
  "key18": "sqCazUK4SM8TFaZPibqJ1JAWGRGuvJmbTSmLqukPivBDx9AJzYJi32b7VsFA3bhtDgPQb18d4Km2vQZEysfsKkP",
  "key19": "279goJhLGZVDbAUbfUH2gJQNquV4YwdLLnPoyHqCUTxKK7oiG2KoTgk5HEQiQMZAAcShLxMHa7ytbCdhm2dSN7eE",
  "key20": "55Kp9ieZi2ffayXQqqkmiRDgSKpgGXNp1qGky1qwHS9sN6fqHifMqevCwX3oJFrUjatys6AjiQfxMBv1LcMJ2DrH",
  "key21": "65B47Uc2AG8Rgam4Tk7ic4ske9wKEzSQMKmqPdDjHaXsJRxMwTjBKdbrTdyPkRLJqsm28YAWvU4GoAnGha9ZvuCM",
  "key22": "2QQqk9Hia69Fdat9mXwvaYUcLEwaK1AWtNmKWRMEVmPBrb5gSkJXdFjAUcfd2Fy1hjhDZDxPfdxda2YAyGvt3KQp",
  "key23": "5rz9f2aEjswajwGqpdn4n8A1bc4TicGfQuGQw1yubYsYgHXCJRGEcrgjmKopFM1WBfK6TUmtJvcDsXUj1Dmnpi5y",
  "key24": "4wo4UYHB1Ny9aWGZUa5NHhKLHjPJVVu5TngSy6HLrAvAAX9pw848Su9RGU2JbLQ2oYKjk7Zwx5n4eY5GDrcxuPHv",
  "key25": "5xdBd7kzi5oRNfNMxpUnsmLbyNQ4GMkktBSJGN9AA1r1LJXNmAEVpA6P1BXDmgLtinebMEQADqzrEgA3XV1RwMsQ",
  "key26": "4gscBsZ7Af4N7y8c8apm6bx8WZy1wBDacXSGhSP7xrga3BYPQx79DXauTHWKFr2R9WA1yjYYRxJGHLXtC4QpFDyg",
  "key27": "59L74QwZNtc3cg41jsotpfem72QuaeACZY8dYNwRjgdrPTY5oP3P8AjdxndLJatSEAY71JTfL4EpJFNNmeF642DV"
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
