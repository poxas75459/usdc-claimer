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
    "2EDdYbTrYExXxi7P7qpbHba8LM3hivNY67k7PVMTrKG3Qf13PXuiHySTQ8jHKaGv5r4hAb5HZmL3rJzANpBd7s9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vqn4pMSDmbX3VGf1usSrVPU7WBbWpAvLtucSu5mHMhi2yBazYu39J1ykR35Dxw82yZ5gKzk1GA9XDbzTNNN8Dsz",
  "key1": "3Gn5P2cuaGybxKm7cW4JXy1yj6vWNkNo4crXoEyUSj28ApoYMGKUFCzEAibtg2ETXnvdYoQPSqsSbqciV6WxLVUP",
  "key2": "5m4KE9LsugbPzRGq2gY88FhFRiKUKTBLtjYhFWi9Hj6dFrUZkxsoFqtwb9mxnWeNbeJfNEX7U8tdhz7xy4WSMiJ4",
  "key3": "yofwybmop1FkXuNAN1RLM6c5GvXBc8C1et77xULcXCjgH3AHcQNhLqL2Gtnq2PsLFiSYoC9tSohxxoHEEy1fCLo",
  "key4": "DgpTiB8dgWeMzpjBPA1rWF5cfyrwkkfrt5UcUstDaF7q1rtRBqk3xCPDc6PPkowMvjFYWWpKHNAB9cxJfWXqJ1Z",
  "key5": "2hfnQXwLoBRrToK311rGpJvxMr6KbJk1Eba2jr5a8jJNgH4shhgBWnoSqJgrtypgMpp66RXNZbT1RLjBwe5qqP8q",
  "key6": "uZbMtLTcM2ASohdkdgv85odd7iJYkfnuGKakWBymSzShVfESq13yi4LihxexnDJARCEHpk8rPy5hox4aiXfoMwH",
  "key7": "JnLa6DKkpgHMX19peyFVEpi6zpA5PUPsZVbbN7dTh2sJ2Ch468MLT7y3CLXxEBrU3KNoGarvxAf3ue9uCG1wMR8",
  "key8": "3qEhXMjS69r3pD4deThX5ke5Y3CsJTHktWiKBPASsqTUfcBRUVbYnREfQhLw5tTM9kcLNsCWjbq1YXHKnUpfVCPN",
  "key9": "2z4fw5J3YNz9SP6PzHcaRnMry65w9WG5j1vs6Y7vsHfnpfdnze3PWjBmGPndhn2btTawXKwAodL8drHuSZyAkxsJ",
  "key10": "3UNgSDbXygLzpXstmn2ZJYy2uxWVVMViBwjDuTbTdHJAE5eJqeEsUUqZAEsJ7jj6W4U2c96d2Pk2KX5JuYUbso22",
  "key11": "2KuKBttTLJJZt5cDFS9S6szgQF4oV7Y6r6hpMzc9EZ3XfpmdoFxFjxMUUXiScoM2FaqbChTHubQ7bJHJsWyoZx5g",
  "key12": "2cepE7xRJTbotGaoSR4JkAF5AMgtFuzLkY2XWLkaSSQTBJq8JoKY7sAKrxPe6D4ULz4FSNsCDCM7Eg2UfZ3wQJxW",
  "key13": "4jZHsHyGcJ6wvEwZa9dwg7HSG39qqZJgoPAtzQKP7cevd8KL6kVyvNfeN3pD5neXJXsSRjxKm1htDBrJviQcSx2F",
  "key14": "5KSzAwDZU6dGu4v87EhvZr13EosR2AUYvQtPcKq3s7GcfgPyNyiCuDr6b4koi71boZhqqDAXssXVv9DGjXDgsbpL",
  "key15": "57jTPpLBzu7Jo3yJ6d5poXhABHRHj9u6NKhocfY7r1Cyx83QP4JAjj36d1owMVr7zoKsFVpexn68BAwZZKqmJUrP",
  "key16": "4t1Gp2A5RdcGbGZx4eV1MgcmX9fsWvthAUN7vqNnkuoPLuVt71Ut3m9nEmSA3ZMu17bJR8jwFv8r6RbmARY125nQ",
  "key17": "cN3mknwbby4Endd7j4kTMCxk8LRkbZ7FdgRWctHQD1cgurnVocywKYoPR8NjAMc771QPrT6JcxNYCTYwCZbrdT8",
  "key18": "6xEey2buEqDd52hBoLm1u6Dncxz9SjQzBhzhzw7RJENDdTzuthUnStBBiYRGVDFcZG6cnRDpzbjQL9c8bS8o79a",
  "key19": "2r67ZCHpY5WVshWkxBrrgCdWwBW1Gt3d3bPjNRM6hgmGUP2v4j9dhRTnQWDSx7MQDt1W7a4wLaJTD2uHnoHu4WYr",
  "key20": "Uznwk7HS5d8qTap7iXgn5kXenYL8RPUs4KCeaxdnteNaiBVJwFunbh1ddSMz7NHC8m6MmV8FgUZYyLQ5FghJMcR",
  "key21": "5RNpeS6VvBZRauoYxUNzS3M9VX98mmAVYyFz65kshQqKmv6hoRe1CBrrnSseNUxAM9qyFb1ZzRKWmhAjbGuejSTK",
  "key22": "5iJXdGr5BXiofqvXiqu5g5myQ9LafmxGBcEWEjG1VR35CkmRFbm1EZxA89kSmtgZaEgApkk5uKGvVwnW4nQ6ipPa",
  "key23": "5tKhy3TiLBVhX4TejjVWs9L6LmKih7x97K15c9UoN2oFeb8HDpc4Bhoq15336ZJXK37zYk43fTasXYhHbZgzzV6j",
  "key24": "4hHbtEXtpd6UfcgCmxETxfWTEZ2iYgSyyjeN1w6VHuokMcCazi14RmzYgTcffTXa6znSvTYCnNS5amG3P3556AAa",
  "key25": "tGqxctrjgdbcn3XQGkwkFYkDpazZPsbVHxe4Wb6fFMGXLpyJJbYyBRCAM9Yy8wmNWfcUD8tUxFis46dK8uCbucm",
  "key26": "516Xiq4LRY56SyRjRBwztwhTPdM542vRLKN1SGw8W44EfjjyFgqJq54ZU1KxuKWbJnG8ckYpERMCJ6ig3EA5iTLC"
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
