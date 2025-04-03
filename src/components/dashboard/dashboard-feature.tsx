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
    "32nW2bxhtH4JJDRPhhtosFyXXLSK678VrBRq3ErF5NH4g52HBPS6uHBdEoSP6hVwff4oyr4iXV1xgRXSDsHBQ9qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPEk8a9zoZNEm4CtynnWNpeM3sEKqMNpQaKwkkWXsU5HH5LgSrsTuX3858u8Vg56FpLAq3RH8hRjjxwUSdpCaPF",
  "key1": "2gAz4jUpNqzFMK6sYwNySNQQJm3A54eTuLALC52Nf4LaQLHVvbwknVGLDNeFPsoKrERZRnq77e9PXv4QVr18uqWo",
  "key2": "4FdP6xTeAo1snw8W6rw7nQp8Xf6ZyNELfHA5g7fd6HqZnxJoBs9TpbJFNwiL9djPCQrhh3JLJCNvo15GUvBuVjk5",
  "key3": "5AmaDkCog9RqtUezHz2ZKJYZtdKXpBM38eYYupNxfHY9fN9e3s1mgjVtK1mRNmDPkgy1NXakpyK2NB8HNx9vcxaz",
  "key4": "2XAVvzAVGsWDmePnHjU3KeRwgDY9hWLUAFSTM1X8R2MTMR6Wos9yf8S96eo5W4KWx1ZUcCVLgM7ETg9dFF1KRV6w",
  "key5": "2zspFs7RHFgJZV3uianCHHRA579VmXrB7PzVAyYBchrdoYKdGSXYz9a6E7K75turWp4Hd2TTfNR5vDvGLkUGbv7",
  "key6": "4xH1wJ5Qj1BQndxHMcXqJG6gMzZZ46hEaE7VvqjbczVy2N72sgKGfsMFtevDUgBbMotwerbMYZacmyg1qDYYjyqU",
  "key7": "nqGRtQB1eAmTFa5PYbKwRh4EEPgRkEXQWUSypiWemtTKrqWivdE894sZTMKW9ZpaUjGUpLPd3uM6HmKDBGft8oc",
  "key8": "4TcrRWsbbfEKwKWf2PnYSz7T7EbT59TUXDJGkFpRsoVXCRiAAHJECjsScEa2izptYoya4VTmSNs7K1JfpnN8YXKD",
  "key9": "3NJNjjydDYBxiiyNcMriqDyBKTvunKUA9yVHsUhTcibhfmtoNv6Czm5df59fFJ2gjGkeWCtE3Ao8WNebsyzMbTD5",
  "key10": "4eR9cSA6UyGoBmmPggrfeALn7bqJqJdQ3YnS5629PrhfuzAT3TKw7dKisWfdiJnbHEssaYrMUp7cP7665wKv5Qdp",
  "key11": "4ACxPVs1hCu2SKe1vGjYxArLLsY41PAzMsYPvuvqxiWNpcujSFFpgDb1UnFRQdjJpVjoStnp9YcQ86mGNbaPNMao",
  "key12": "63azQbTNG8wKGhqm5XwvvumuhFKxQpqr8pZBU1U4NxY9oSWV9yADYhKCwrKrBgfmtRSU3WZcSnkg7nVLubQWLGZh",
  "key13": "5QdV7DZhBkaP6pqvg5vALVCS91HTRkg1LdeY9W3NRKEsECke9WxSpE42CWLmaK3FZBACdY39QjvXcmja4UJMsCGn",
  "key14": "4vyMxfKoeFAeih22f26Xv7PgPhR724HUgWpwmMz4NkjkKJtxxmTG8yDaDdXTKt6Ea9faDC1MHabAegScPQxBXQ82",
  "key15": "Ym1LaGXueTNBXKRkXN1E46FfgSYXnMShAWv3x7ztkRzqoonbscELKpMkor5CAe62Vfy7Ys3umPrSG461J2wvHTg",
  "key16": "P99QGLPmXuUJxAN1iK7UAmaaGQntgxZjmy665rosbuKdmuoSa9eCVKnnFVmtPZrKUgkGMZ6sgSaZuXanuefe7Z9",
  "key17": "4FC3oG2kCn7iC9DrtaP57y6j7M22xF7AxrEZYBPE5rBBnFGWs5arVG4UnXGKtr9wuduvr5deK3KEZfJ8o7DVnK3X",
  "key18": "2X7he7k4cYPYpyc84kSXBHuNv3eZdmLh4fGxHVjnpXW2CjuUjmutfQQfN8M5H6Novz8msNC74nx6VrYbooAgcWRo",
  "key19": "oaRaU2EbWbgNizDC9PpUrpgnAho4hjm8yBoWMzkfKnYJC7Po43c7R4ekXwRBYAS7cNGxM2N6reiETMjyyhHDT6g",
  "key20": "oT2c43EAScgchGxNARucGwmRmGTx7cNoB4E9zko5paSNZvKCivLZDnPS2bLvWjhzRZp79Xkg1in5Pj2j7vwhfkB",
  "key21": "3GTx7UvAzSk5vxVtPibDn6yGyn7ZdRWRXEy9cTKQojhhZFLT8BWEnwSydwsPW4Q7ePCCUanbFU8UMuaSVYufFHKk",
  "key22": "4Wjgr4EJt1baNV7QGDTVZCgFD2aEfeiDENBBBBbcfWg2n6AnzEKMGfZUVsENDsz7psYULsy3eYnqtX79NSCCKS91",
  "key23": "3DcbsJsFnW8vGrvbxoPTiC9CAr9ZBS46NVEg5gQQ1Lb3YSq4i6idWQPy19rbsKx95saWCWjHN8ndo63bSWz381Ew",
  "key24": "3RxJKMEFLRa88xN3W8t4JXaSjbcpjNwDAMRyCJS7qf8QvnYUmVa3drw41oWNLqXpbtkaws4v7b8xK7R9xAPuLQbn",
  "key25": "4U4F8AMHXnF4wARAuCK2eHKtAGB8mwCjwosF2PiXfasuL1CkYnxCneRzNN8idVhNWuDFQ155kAgBsDNnSFR35cBF",
  "key26": "2Dpd3sZEAxLrPXBuF63tmfrwP4GWqzFJqdcCnvt5tLj3Pi6bLzgK1VD12AmQq1xf79JP6QUrfh1DawTKXYeqHEWZ"
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
