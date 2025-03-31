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
    "5YntEqZ586rgBVUnJxYPn23YnAguxKCdwmQPFezj1kKjJTBuFDrWjoUzCQnYYNGiRf6eMZEbLxnNz8KhcJLv73gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dz7gpyWGD2ezVhPngtKGog9EoP9Pd1r3z6Wg1NLdnPr7tSzK1jWftoXDP321EuvnwaDVsYTkShPSzuBfrEDDLCF",
  "key1": "2UK3TeWciTAogBFkoEdmAcBeBjWD3iqNjV9E5tYsh7F3xooj88vSYtqPedHNJETHNgArv3xJqdRsafDfFhHmP6th",
  "key2": "4xngUQfnbwzG4esgrHmo9w7hvwAnwfoiEA29KB8gQUK5V2UQNXDyqnen342n1iathNmfxqvdhX23oMah6xN4j6tf",
  "key3": "5MsR44auoH3gct3AFgFzZJJi2VjU5osKb4UrA91aNd71UoQ2RxS581v8BbbYULwcAM9rxMdQDAp2oQD9zqS1rJWr",
  "key4": "5RfonQ6TjDN7eaMnqKhkfb4PfEjhyqBovgJe3e3cECtQPBs8drvnXTXaJWXh99XFs6EfASFeHydL4dKbaEFcnouL",
  "key5": "4iZrP1ufyJuQd7266FD215y2eLi5Qq8VFTAa6Twz2srzqTzLMBgnGpLC1gbzDzoNV9rZsAnAnEuyceSmWEBDFmeB",
  "key6": "49oqGQNnRuEFJFSEv6nEEzLbnmENQSxtxo6eMBhU3Day7QT2E9WaYkXCW5JwqzCDrVWgwgmSabe2VALPetdHbWi9",
  "key7": "4T8ZfPVtUJ1deBnxTx7cMyrxaYPnre6zKgUTE9PqokGBqZWKK7YmCAfZSt5mKVFfjywZUimLhD1GpKn5tQrFiQi4",
  "key8": "c6YGeTPqwxFrXh5JdLA7t612cucvMKp4WapptjCyETtuXhE9MJ4wdtovPwW7UYayhgrM7SNQeezHVMQFxfyUcQC",
  "key9": "2YXS4MrSzsPS66nECEqCuqNZtEXf6CJfFqovq3RQj5iLZzdRxENHDzwkV2aSLcs19PienuCG8dCCeQH5FzHzvnYt",
  "key10": "3M3XtG9SFdCQfmP7r34hskLSHsn7cHWsDrVbhSr21vDixThWsnDK4xsep8TV84mPPJE68XvKPLWwi2xeubvJ7HUN",
  "key11": "36GKZTsrDyxv3SZtiX4oDpRmmo642VWD4BKf2LnFucvFta92168UFrX9tFyQD7bGVKK2dtjFpoVqKiTMBqFcsfEF",
  "key12": "3hQKztXETRPP4MbBRyUvTjf8V6Xzq372W6F2dYHyqd69Y4je1XoaFZaBfiU883KzyVpAHMHYSRu4xWMoZLcZHRUD",
  "key13": "3i9bkDzKaqVMNGgybtVxKQrD47p2MY7zBzE1CV8QUFW43kXv9JWdjHWtCjba6Co9SUhRy3fpfcjThrdRTFGV7jSb",
  "key14": "47tp7PJUMSCU1QDmWs1yXvUGnGrJ4EZSg3bPibVyvX6VdvWfQPWdP4C5ZjMWRKmsxTBmCkHHtPUh1hSMctUG4m9H",
  "key15": "28Kbyhvr2UvS9PegZWGz2DhoNabfAVjJfRF5QoBYfpPrRRbebEu5F8J2cHG44h9NXJutUwWkyZWKGuDe6Ri3qZZp",
  "key16": "3ye5cdH14yyZPorywweA6e8iXDk5JNiXLRAWgSp4y7d4ZADzGnRJsu4xwJ2xuRr2PtKugoTwoybYmVysfBaCfrmd",
  "key17": "2VZWKU56Ew6mHejnK8EnRarobHpFoFmrkAE7hDL9bypuSju9RWFWuQsoZVxiPpnukrmsPBuGd7gUVvuESPAK4wQw",
  "key18": "JTyJ6kxjivRAnqyHBeBNrEh8reLUMot6rdv5miVDJ6jiVCFG5XQiKRc8SiPjsLsFAaxT7uyRsa196BYhJjBTKYo",
  "key19": "4EHqLYhVTyMNSxxFi1Uvv2gJ169xL6e7v63u2957V2zeWHtUHmGixaxNzMpsF9SRnS9DcfGW9SRgr4DqAXyRztwX",
  "key20": "5kLmqfMiVrnjFAUMcLtNTNp7Uuc9DCCizqG4NCcGtYEr9E81k6FbCZTqU8wqRhcxqkwKNr9w8j41WHJ223Tvhm1C",
  "key21": "es9KZrYYUWWCen7gaKmdmH9JbZew4yH7xdVuwgvSi93L7JxpPVENgM2RWF7vKBKFjmMCfMKbhhxU7ntVUAGke9h",
  "key22": "47XgUnm3jo8bpWQvo2uU4Gena7LcATr6ALm8m2vMmsda7jhME83XLAAT1x9swbT6DUMS6EGvUB1wz5tAkzbAscqX",
  "key23": "5QdoPA17QPnhNeUBpPu9nFrrRMr2YX9PeXk5LDkrQ6pzYTs4dvsPwfm2EQoHXbXyHCZRr4zhs6wXwuavSApWQZUH",
  "key24": "37CmHAadhEGnQm8EyagoTQxneVy9u7GyssK7pViRSPLmeUbpRW2iNqziUkhcyj1Xg1W97TLHZJxrrM9MVjwxs12a",
  "key25": "2mRujQY1hMkq8rQM1rTRpnPg9BTmZQ4KRLgTjDfYnPvQ3nwkGm8ZvyWRqw1Sy52QVNamXyuewNGs9kkMS6reZmFy",
  "key26": "4snbVRcbYza943ecFPnoPR4CW7KSgkSBvAJzGpBhqd22enDm6QSEKtuunHgvf1Shcfz14Z32FZfN8VXX4Mu9H9YL",
  "key27": "xTbsJuvgmAgrThUKpjXbshCyDNCHt2k2x9mApV6BUt342B7n83sGNQw9qHwGwCPBvs3YB3iSb64QzbgSDvzYduE",
  "key28": "45TRKWCJpZCYWqfaeqmjarkMQwAukV7RLHjNMsCcRWPdjNhKFkMsqWJrQyo7K3kz3DSTKJXkrxvrnhqAo5VA8G12",
  "key29": "4qDBxF6mLnXk8qvZMBkjTyduJJXcNUXwQxJRmPkmUHyLPN5y1cSmNv2YRM2BXBaXbU9LsfqcTC4wRh9yDpqMZHjw",
  "key30": "5baFLEfkUxLXP4PpEkxDSgxxGtqZHi8pHGbxJBAMuBfEu28hZFWZL2GGu5tR9HxiSrUis36RBtXw3wJ2MR9THCoX",
  "key31": "49dzA1kEMCtdRfdLkVLkcXaDyUSKrMbT6noR7XdU3NG6e9Us8uwMsJcdyK3u82xaSbiHkZQXuw624L1sRRL4xMnE",
  "key32": "28qJk6VC6fnuWvPRjQ3jWkMtL1DKSkR73mEnjbt7h7DNbHnMYFF1cEmc4qQj4bxiaLL3fn6w4VJBBZ5xhLcyyCit",
  "key33": "41WqwPwwqErjA2udndbUVfpVrygsvB3CifAJGC8XV7sbM5GinZmswRyEBEtZDfMSThNQtUsM7c7pkQTKAFaXcQ1e",
  "key34": "5wyEGvHs5D1f1LfxjgfpALLzskDGdFh93UsQXeTmRqVVVQxgdRyYrMF3X1QQhLgjsKzyac2oLmW9yTENgbJ3PJGt",
  "key35": "3KeVKWbreVZZk42MoHcjh4iG61EnuTb7Z35qGyNuo4SjLyU8eD5k6CEmRaNhm6YBXK7Xdrq6fGRRnpJ6H8awbCaw",
  "key36": "36PVVF9SpU21A8HVEAdyscwhQikUz3NuqxbVhXg4QkDmgaiGH7psrD3LgKrM5QyRh8YP3DFBRCUuV7kBz5WGWgBZ"
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
