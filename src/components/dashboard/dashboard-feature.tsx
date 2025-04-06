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
    "5juKcrBUWFxuLySBjSJ5CGviMPPKYQMZdEBAG6m8DAb26RKuipbXVBt5P5HupxNoLiBSfkHnKh94vPRntqjXwqhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHbnGWdxHny2PtUYYdmZptsrhMRK1DsW63P8Mz4w52T1rvkpU4RKtU9VZdduVZzDNPGgnwxBrWD5FSAYcV7XXge",
  "key1": "56oNABvcDBdC8GdEBvgc5akV3wMP8GwzuJBnuTQ5y3SyvudVRxFZ1EJJGdeAeuVpcF8Qhp2XMiqWQL4mjLhiw1qC",
  "key2": "3GsmQ4eQVXTH4V7F6n2gYjPPEjtfnwHS6ocrTFSpKWnfGe3TeDyK5qXNyaQq3XUMhHvSNKhPQz849yaQBxKAjEsD",
  "key3": "5HupCxrfimA6uZ7VWSFEd8KBJdc7Vzy32Epa8kXTwJ1KiBgnFiXg76iDHRXywThQ2wnqSUUPWx5JYi5QJgwW5P6d",
  "key4": "4k9dfnM6skYedrVH4aZE9gmFNA7G2iuUgddkLrEXPQdRyBUxa8Sa1bmRDpaRgZkmvyb2iUev7qPE6PjrMtospDt2",
  "key5": "3g2Q9WkHjQMfY97LUUaKoPtq3tQyH9mQLYgXntWeNfFAJPuJJjKm3y8NZKLS8ztrgnw2mZZsjv2RuEWi4gf2KBTe",
  "key6": "5iiYkkU2DqUEbX5qgYaMR1Pj9yqprcJNTVUyt2TgaYEdu2dWtLuPZCkaFjoZDdZf4uh8A3GtQKXhQRMpRpbuEibF",
  "key7": "4GsZbukn4qQ7T921jpQxC3yBKvavBLNjWEen81ppcCgxax2LETjuk4G1aWraeqAvUCoKkJAXUnbNTNFrfoL4wTGL",
  "key8": "4GLCCQ8MTuLLRU1MAqMHaGhQpejSnKqxYp4paTUzAjkM87jYEn31DTuaFj4LMRYabSUJtpddHTwnYE2QH7GErrir",
  "key9": "5S1eGRuNdnLzCcDvKEBXoMtXEa7Z1AhuMt5ZZDudZwAXveeXstzXdUXfBu4obseHQ3kbwrFtv3fGqe8s7FR9WGD7",
  "key10": "2MSUdVFrWps2nGxUm6af3MFPcfYLLXJqHnubwbT7QXLGXXDZbd8wwUitePF1gsjD4ar2do8PuwgX4n9GNojXYabH",
  "key11": "582d8nMdtX6jbJNTFt4jahPWJq19g3oMRQsEuvRKdhPpRDjT77eJ2d2EUPgmvFx75mTVV6PcMX4bo764JFq3XD48",
  "key12": "CUVAxBg3MmB4ejtV2HP9v2Daoeo24GSH7nktQ7DBbSY3RPtwqFpmS4zGcrw4PyGd4XjnKzricDKhFFe8sGnV5F1",
  "key13": "cVFY9wTSLfzhShHxTDirmCBMZfjsESD66NouwqiH4FHAmNU7aMgCSMrRrBdPocrxWJYnXNcXZjAaiuf28idSmuN",
  "key14": "kTTtRWdyd9yqiQpX3VRZub9Gh3d1Zo8SDiu9ggupHm9Uj9hpv7t3WtokDhnyPKvYNojdSxTafn3mxvDjeDJbC4Z",
  "key15": "2SSVuPnUrVdbWxaaNW36m72sCgoKUtMHAjgjYdaTfSMEpXyG8ThecLV3r9ENCT2wrUiYB49pbc3d8SjMhYQa6bpV",
  "key16": "4kLn6pAEDCuWcL6gZqfdxPnMwGzh3W7n7ap88Ce8Ty2AhanrBC6AHJPoL4F3nur9q9VSG5q4zZdBHxSyhieofezq",
  "key17": "2FRhRSkJTDK77KQUCV1ERFDJ8iBRNeEnP2r663B6SQ2yWZvRsNaHnfcfdfnP1yUT8KgCeEP4UY9gLmMSrfB27bXb",
  "key18": "5MbqyCHoKAtGgophVakif7czp8LNok8miwVdeboREf8SH7gUWL2u1JjBGw7cFDFF375Pf9xuAjwjX1nTgbqGv6ma",
  "key19": "2qjxsWFcpZ4bqeA1e4Ycr5xxFbpNS8wpxZxthqZfsx3z7dJdzxx2a3B1v4FfCZjhGTpxEXkK65NP4cQupdXN3PvD",
  "key20": "4wJjU4GrfY7bdgA545kKkAWbP4u2gAV7PjP9ojDV6FqGVBYc7Ar1rKTzAs6YjkX5wtrSe9PFen67psDbyhzn2KrY",
  "key21": "3ccZABjNeAExVwxPua3Wppezrgw9SVd2Fdztdraw2AsYJartUfuGyEw2Z913r2vnPYxWiCkqD7aamzoQpYDqZSPw",
  "key22": "67d6vDeMW6dSKp9KUYzXu9cHYzXxqT6TuqQCdmUjyFnNJBh5f8PTX9sPjxaLKhb8NocgLJUD6vrbr4jkq2UmesDm",
  "key23": "1tKQvsSTpr7RANbBzKyJ3sixQJp3XQgXBbUkqUAY1XYnc3pxm2xFp5r7zSenZaKwrYYp5eaMUrEKiYebqw25Qyn",
  "key24": "oA45hKmamD26VX4igCvSxvncLP6cZUBk7Uabx7cVANk8LpEVdSaqua1zPi5CghPm5AhXR7DuRd8j1LLguDEq6La",
  "key25": "44eVJPFYqUFsAbQ4esPo75NVRAY7ivuQtqayrXze9HzUgH8Y832zrJBQModftMmUQ9K4XEaESrZ8RcVJt64vmmp"
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
