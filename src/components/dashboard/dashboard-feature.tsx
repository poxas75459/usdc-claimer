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
    "2NUUfy4tgjzhkMCjcey9mZ8nXrdGZTTmYgj4jbKLKXAjYnyLZZdbp3eStH3GvUmZRF7SgHytnT5LXNDYbd6KuoLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jrv2HH9BP4kMwGa8Ej3aTQPPR1TybPntMEAhrVcEASRH65JAbChNGEMaNmBKZ15u6ft3TZwHAi3qmLUMSWvy89",
  "key1": "2cQBtFgW4BZ487mj2jRwUua3rUMSssM7WibtDYw9QoAWjScNfxYWhgFzdS1HEu4doCECZ4Z85SBZ1MLe1yTm9b4P",
  "key2": "3w58N8D3a23xKQcupjBphdwuaozgoFiAFhC8etcoeaXaN9RyriDYs2u7X73mgBBV6sjBpZqg9T5U2kiixofGR1DV",
  "key3": "2sq5wS5CVuRaGGZ1WRnmfmfj67oky7N4BhBiuHNuUew7nUHKs5dJvmwQzn4sQ85ndMCH4r4Y49778zAKEkXwQ4Xu",
  "key4": "666Gr4KmzRpW9pzVJQf5eKjJU77omthsXL51bP4jky7rmC8sB1nSH2Ukn4eTryoGNWPa3FAmKgksKL3vepnbj9nV",
  "key5": "34sET3ep5wTv1fY4dyhZ1kbVgMPC9T4Gh369Gv1UbjxKKXZ1bV7GDLLiSCdnW3mKWVCoLfbQbTbivWPm4w4GUH3v",
  "key6": "26ea1B6VLZVkqGE96nHH1BxvV8yh1uPZKniUCbzw5HbKjui5Y9zDCwhjCKXJuXqKLFiinPxwkccL5A7n25wFbgZp",
  "key7": "SWrDzEWnwX9HZ9EoCwdopZCZ1P9Jrpc6aH7w4PgHunc3dz4SFo57kc8T47qK8kKRokKE4Qk11YSUq1hbzoNGFQf",
  "key8": "5KgYZJ1kn4ayaQbPNgEpiox62CCpzUg6bjrXRfFZsyxn8gpbfrjqNywp97ZbyZ142PVwzD8PZaoxyJrD6EfK71Fh",
  "key9": "2ckVL67BVTyrNMmh5n3ku3iTXfmFuBG8ipzUPtAjy98mczzb3e6Ds9CGPQkpSzTmsRBBoowWoktKirgu9h7oWXQ3",
  "key10": "4j61sm6bMppwAQv7Eev8PCmCyAbXXRtnfvsDVwZc9oVDnTJ6TXvRYtSPq4ANcxWyHR99EkG8e4eh12uzhnYvkigW",
  "key11": "8F6Duor3VpBWmQDk6TgahYMhTqAN3f1ts16AShoXERpJf3S76WFVZT7Kd7mEXW8m1oxSyv9aRMX6pwRoR8LM1LK",
  "key12": "3cDWEw9wxM3713RZki39yZf5ZSha5qx1sFDyHRjQ26SfpyRhqBNrwqKPkiAUwj6mDQ3ad2tBRNNsbpvaiz91mKnb",
  "key13": "XM4yFyr4NwN9aEhcAXBXKq3YCWHfYQd5wqMWcFTuiwhhQ88ZqV9teAAfZPUz9t8ahsvhBz785KrsS5dzpXMz8mP",
  "key14": "2jQ1dKJwpFbVv1Bomch4qxcCuUw7z8YtwdkJjagaJ84qMFzsHkDoFCHU4zDx1M34saWGpu7jH55i81yeg5wkheFR",
  "key15": "5Y7ncLPWbDJDazifSRRhajL4mPBygdZqvfmgDECTD8E3nDY7riJx4tt7NNunWVYjeyhJWkXDWukVCKWCiS2NJgei",
  "key16": "65PHKhC6nJNiJf4w9dkESBxAzNkAJWMbg6W7z2VrnHzpRrQjaWEey9oo1hEVVj18UsgvDVxSr4aip6RKfsUMnA4n",
  "key17": "2UfsTraDMKhXt3MiLQg4UvSKaj3zw66vfaMZvF9HAt7D6ujQJczDjZmxbgcx3kpb8F2p31yKxqy4DtHSr7VhJKHZ",
  "key18": "cuaW3FXafMKLFGi2NTZK5tp7PwMXbcbYHbxh6fcUxxa4HFRDKDUR9mEkMNcUcFw8tgQkPRT4QfRDp5L9goQo1DK",
  "key19": "4KBtqFPfH65ALRCPBYFAKre9Ev8hNZR9kT1FXuSMUgZnyocAWJkDaBkPoCPxCwTBAMcgFMTLvsbuHV8EFmhnfibe",
  "key20": "3MUE4QHDuSjKwCK5QoLNgbJCwyMp5B8NxKSmjGrqHVLGnBkPwLJxPbJtF8WBFNZNbkYMc1CVS26MxiSAp7fnuA2A",
  "key21": "2dPCfXWgfsS4otyejyzQ8yrr9L2PMZcAbYGLNDzWvaZvL85YcqD3pGiEAZBXWgDukKRLq5vJGkqokwjfKSXQFpfd",
  "key22": "r1i9U28d1cdFMQSkWvLwkTw3MYvJUn9GxQVJpnQ54WvuAV4ms6zPGCeY2Vrt7r9awNjnbM44uCe5aK88X3Nog46",
  "key23": "2aPW3A2imuEiwvdHmheTVsU3igYq6AfBtTF2MQVRqGutDNBqVXSbdorbPsnDy1JnuXG86aSxiCrmYgDSVpt9NTXe",
  "key24": "5WjnRzThhTQe293kv5sC88qvA8M3cQ6UvQFtGNSoX9kXknhw4jmZpbbX4yysfXpAiKCHPnQY7H6kc1m3ATsMDHq3",
  "key25": "4SE6PXh262gcqCxUyoiD827Wp5ovUBAFo6jLMRnJepRpGq1jSWCFxYfJZzLw1JUBj5YuUiDU97Ax8n8UuSx7ni3X",
  "key26": "3sNZm3VdCif4eU2YUSaDb3KCNAsoFmfPUZqtHZXdVfYVqxPMdy1mmFh5oHVQ3jo8GBcAJPfWuEy3bXnxZDVx8JP",
  "key27": "4FgA7CVW2AydSFA6fASFrw5UPBVgUFgfqrL7G5jnc1ZL8BNmQnu8VZ5GXWYX4PeLAEopdUyJ6J26FDM9HY9L6XKC",
  "key28": "25D4TDcVyiUBknHWu7oygnoKsH3bygbZGad5rNiEqvwfFiqEqe5fNAmqMbGgQBx7tigsp6De9DXVTTFgU3NXSWrQ",
  "key29": "5fksCjczwu3HSntKNKkqNtBDHCuKavoPYJhjEVSrhs9YBRRmDheTPaFMnhdzeBCCrw9vZCWdTkNkaHKyxk9rjUNS",
  "key30": "M9sq6qbCXF2zk6wLXNPsRkDpEYJzzbRmAQobfeBaayhzRvPE5t5pmrYNsVUY5EKogH9nSNgaRzVip1umZHRUSGy",
  "key31": "3jP8kCsy6Kg9yqnywDhK4ot3YBMqFzLvZudNaVRJjsBH4pHWPRc6eNTrKZYQi51rHMYCXBtas9amops4co76vQbp",
  "key32": "3kKcwzEoCV2rfERNfUoYAo6yUFmyTbPnDLD2khxvNZJdYSPBWsYS4egAUqvNYAwHGnGeyEpQLrQb3EqnWVQQ8fdd",
  "key33": "5GY3YQB9mZBMmWsJe2cSrJYkX9UA81f2wjh38kmCGx4ozT8RovgFHCSK4tBh6KL3QGGb45hzLCoj8VBkoAGfH6Jy",
  "key34": "5eUUJ3y7FL9356oKXXV56zdAq4bb51KHTvv9Bsf6K6PFo3rHYnFLDo4ySH5CAh76P4QWPJA1jWJZU9pVjoUP7XgN",
  "key35": "5tHyExHzM15nYxJJMCYpjdU9uxP9uGfnas5UKJKZ6WewCcHwh8q2dNmdmSH9Ew7rhdDuqfeyWsNtkGeX4JQb6j5d",
  "key36": "5YxSMuccpa7bMBU1ajupbPFLssf23NUy4kfNx2Y3S7c4qQv1yqexJvjp2wTSHSud4DNrVL2Tthu28XE8mENaNWun",
  "key37": "48yzFNbG1mVEiF2HGtXFQBbRwgVyGD4ew56ndfHi4ANwdbQ5VM3JZGrUGdafkbZAAVr6DUEAHXQFrhipzktGQx9b",
  "key38": "5x81hsEuEjonV3gcm1TDmA7HJNj5rRwZMRatp5TSHWtEcg2vnG4GNJpK2izHSBX6PGJu15NoaEU1FsSd4LT5Z84k",
  "key39": "3NrKwqS5ejEXE3ps2kGx9Ph3SJ9hwBWez9QRsgcrPgMrRknShkkQbjH2YJjmfWxBDvhYSZK8D8GuPuwF4HwoeaRJ",
  "key40": "4wboDXv32Yf418QUXdZZuqgiTmhfz8mbVjibkiJpqCVx9hpx2MRf53rfiPYsmVChemb45RMw8kDE5cBKNt9moY1o"
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
