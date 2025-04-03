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
    "3r1Khm1ZPnD9tnWdTewezsbyD7HRx6bAAGrhNRNq6hjKZUTCcEF3vasd9zA5ynU33PwUGdgfeA3AaDargmFJ4Ver"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozmNumm4KMfFtGmizzFEo9bgpLMM8dkb4LqZjsCrAtTqYVqC7e9VwrXvtEoA2hkaAQaNWmZxoKj2eZiXpqW2e5W",
  "key1": "454qFF5M4LMhNvg9xNP7tVuz9cvKEvGDR5aEKyFGCPqAFMWgh2CL28tnYrjoV8bEnmBHjNnU8vtCaBxBdGxgy6fm",
  "key2": "5pKJgtGxdgV49Q3nYDzhGKs4adNCs1FhVuHPu1ggyjmozu4bRK3T3kieAiRBwWAGkZxaHrSCXMC3goHqmS64zAD7",
  "key3": "48XFY8yZQsj7srn8smUDuuLEt2CMCeACC5ngsoBSpCmY4L41VpZSukMBrv5zEU5jsCAc17B8etKxQwY6NpGk6Bod",
  "key4": "34XbkX6BMSNx5YDwsMQB8PtXagRxmPV5JdaJBqbGeyK1LSzyB6Qb7Qt7eTheRXLanqCj4tZ6gGHqjNopsmygK4Qf",
  "key5": "eRrMSG4E1fQWvEt3xii97d5CA6Gv8X2vzQkDFVuWWxjZs7B4c9fF5unactsqkAGrnFsXPm6PiUY7nwPAkaouEam",
  "key6": "3WJhp4xxT1ZVvoeJz6DnLZp96ofJSb4YqdKvNvw4GdzV4qFmeex35jXdeVkRj8KHHXsw3Lc33gGY4j2PoF5mx8As",
  "key7": "469xUFrFiz8v3L6PGAEy3nBnMgMiMebXKg6dmYzqDRPnvdMEUkPSMrJPmCgFjWTENnkjRh8to7u82Wn4wY22uLDU",
  "key8": "4VodNwjP6U26wzd8vDqaiQhFgRMFyDoC45kSRJPTCv9fpnSehtvxpYz7YJWKUsZ8rqWC11iQL7aBLVQe4YT4AZH5",
  "key9": "3HdqtwrWQcjad2zS7gcUzvtddSvB8r4wSh8Ucujhrdogd7WosWUkotonmcgKYkBcZuYRqDsC7HXpXHHvv56ZoVB4",
  "key10": "5sAxM1inQi166HWB6zCk8K7S19FQ5j8MoW3ZFMVhiQu1rtyNYVngUeqVmCwZEvB3VFPuqqdS4u7e6cNXbsWZsiKW",
  "key11": "5uyoiwmfzSgEZL8mht98no3CfjDwWoXAXsJthprs9e3Vi2qEAsEXfBq6CPq8XhknzCAttKAKPgFS3CnLfysaBZfU",
  "key12": "3fdkcXAxua9tKmHajtcPWECJBkgpY6fB8uHdNsfn6edgjg4J5iHjT6WbmXM1F7hHAjJqBWKhrmcHD9WAM7xPxGd4",
  "key13": "3UF8JDmNNYD4Zj4CPwCsaBTkcQiS1VFhT95pHPsWQZRitFchUisq5E4BS6aM58WVNzGebEUmDQx8b25rwHcEe8AN",
  "key14": "58gorWrN9KT72UDgPNF8MpqVGK7dkeA7due76heWJyLngxw85HSiKNkJnJMMRnYeWkFXGs4X2NKeEU5SSZa7nRrX",
  "key15": "HQVmYZJuoXvEubqzfcQrwfexjS1kWsByo7HZ1yZXG3v6zf6j8qqiuT6wB9KMk79ntooemigWVxKAHM9G5jXqdHU",
  "key16": "5qnT4RdGBQXRKk4na1MRfKXNHEiu3bJS2mpQHWtvfyqxuTYSCqqwQuoHY2vtMUw9y4Cyu2po7g34kFYcaZGS3bYv",
  "key17": "5Hqc7wd4RJMDhugTgjihkzPBeu5CYZw1VCMftprHTYbF3DKPa3EchdCD6iRRCTQZ21yyUsY3pn9prQPDEsq9tBsP",
  "key18": "5eBS6k6DRUjPyEHa5HbKPUwNphEiqJseoYaVjeEHyxS9jD985FfEYEUFnmKS7iRB9kcANmne4xSvZsBvYEmFmWr2",
  "key19": "4NGcxA5dmVFgzr6zn1CxmbTcia3rFQFRbJwhmXprb9nVHUTBRzTmoBUWBXkXtCPW371iizAhJA9CAMTpvRMB37eA",
  "key20": "3PJbWXVCRVDds53GLeazYifrJVQuJ4cyr1ezEZceFuFh252BDMyg8ejCsFJFnMM74G4ga8CFaB3gRZoaxsdpPmQD",
  "key21": "5PHmJT8Apr6qxCiXphJaTtzdevhs9DtAkAJqZ2s7GP9Wi7562kMt6QUm1igFRRVoyZ4wjsqQnQ6eCVHxWn1tvi1q",
  "key22": "5oRWvrA4T4PJyJwssDpvQHZjTmWH85WwodhrJXAT5oNvscbctVZpqAXy1bUvWTtRaJ1WJq1QU9Dx38HrF8qW6Hys",
  "key23": "3xXoTrGtWvoRYjU8wkNAq7C3LbxkUcb6qGPrJopv1hHLb6Yk3riztsyXCHzA9tMUb12Xc8tz1sBaZgVmpGbsnK4f",
  "key24": "2RirKNVEPLxDQb5zziKGYnP9zy7MtB3jGt2VQTEzb7UafCh4tupaAtaULtRb3RqyUQ8TrDhJzpNZpqth4ydoFFDU"
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
