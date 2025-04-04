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
    "4CbCPrqxNFe8cFhzQRWgsXA2bLM37Q7UPNHS2RKXZThFo4snUm1x7aFK6KjfVGcesfbbnMizmXz9aqLK7cXJQ3TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2pM6RMrFmhWvqYeW8cJuDYrJx4MJJJKxd2EnY43pu2o7Wsavno31JMbeqApmA5UTPpttDEQtQBvSyQDEbDTNd",
  "key1": "3gzrVfnVjim7bExxQoPMWcdv2F48WrYH9RBHiP8j5ck9RNhXMqDUrYZRm8KBkeiFtSACMXyst2En8FgZtPFU9h5E",
  "key2": "47SuYYzsHS7MvtDKrzk4WLz8RWRBH1ftzz8sg3Abt1caCNcg82DYskPFVFCT3geG6eNqNR7qnjiisW2u4tZ8qvtg",
  "key3": "41pQmFZjeXi8a9Rmu7AQyRiNaGp9fzXxmyrocibGFXRYLYEgjLmpiHFqkQ9CYQqCjwhrQ7mZPxLCqt1mKyUwmMte",
  "key4": "2d6jGxAFKzVa2EabwU6vL4y4qVGmFX6va6y5QmufsL2iYbAmyiT523SwSdDGQopP4ubbCN4T1vgieaUaQJZasyEn",
  "key5": "4FiMgzRpHWkyRP5zaC9NYcM3hPuoQD3FzryQSJQwoXFhhjqDaWiDfz1c1PYWVdVRNWAx2AkkEYgKSyBmeSCzGerz",
  "key6": "226vBLVfYk1GLnLRP4QHUAF8VnBKXGxZApH2RwSnKowUywrjifG45vY9rHcNyJtCz8JFRmGBftHJx4wZBMDPEzsn",
  "key7": "wbuZTj98hBZXnA2hqeGYPSTnuV6eCux2xTiTjVGARx2HTvZpxDP5YMhfvMhAUeYkAznD8gZMnrpx7vZ52Gj63P2",
  "key8": "3XrU51Gjdo7CDfqMLx3QWP5vMvf22JLAUjLhwVsfuY3oyX7sKfnDYUsGGwuenCn1S5HuG1ir3V25A7azH7WSi9th",
  "key9": "2mdTDwW1QQf6ZryhPFR2aqDfXpaGywTfuhsK283BFyEEW3Bi9Paunh1bEGsMopJrBQQww6HGBStxhs8dt9q5uq2B",
  "key10": "5VZnVZB5cqTc4WUKuVUn2B5WB9GUBDW93n3MdweK3yKb1fBQU19TLoBiBp4bgFzw7ptvc981GDV4e8iCJiK8jnL2",
  "key11": "33LEgqFv4c4euBPgfArppzLzNYjkvkvS8YK9S7saQy6Ytu5YcUumjetBFm24vE9wcnJx4AE6Q46oYqH7StCS78rv",
  "key12": "3T5N1XmcoEeKYEc949jKe2oRWsk641oAoMf3gMiw1vwmrFjFyxmxBhwb5tdKoKkXZ3J6T1kfY6oVK2GUj4JYbwyz",
  "key13": "4CqBFXjK5Be9N9zpvD8as8M5wZ63R1GSJBjA3oTYRtcpQy4YV3hcXpprUoMWjGV9qhr911P8nPWYq1bjCpvek9kN",
  "key14": "34fsiZnyV4qU1ZFdFkqWsWqPCDnfFQHHtwRSJyjJt7zPV6Dxw6kDuWBJn1LPxkZw5gZWsdoZUyppGe1kzTifju1t",
  "key15": "2Hzi2RaznFycQ3jd4hxCrWhEaAXeSw8bwWMTd8Qw37QZRifKEpYbbYTxaWKUbMKsMi7AmBFzZ7dkpfp1W1NCeVQf",
  "key16": "4PqAGFUqjUJEFG3ZmxsPNgZAJbiXBqesURLNz6GuPjSEYZTTE7f7RzRydP4hGJQuzv3KsXF9qmd89t5HVJjUrty3",
  "key17": "5v23yKxU4GcYsn5WLPefuL2qfDnE9e1kpgatZ3W4LsXyBM4H9qR4GqCmiwcGTkHUGuQf5Et5Cbe9y7Rn1FogHkky",
  "key18": "5RRFS3yczxnPHbAKK5XTfDiFS5tAWDFxvYM1pkwqRMHQqg1dTQDsjsbXEo1b9KnXC5uwL6aVVqc42532qZDzzE3P",
  "key19": "3YEEPw6cnKQUrKTdUNdYCHDLDxQCyT47udcnaPqc49s8kD5kzbWVoa8N3DWpRubBuz1nHUBaesMeiGxFvCS8i5Mz",
  "key20": "5A4pTeVFiAzAQz6eNBUaGo7tXKrZyK8Pp6o8s9mvk54ebKDztNzAY3quzUibrQ9yToCoTQMKqoDkpuRG3SUV5H94",
  "key21": "5gJD79qWnpVyK3EYeiQUdNZT5RP9Rafdb8p2TWw5KtgccqRWCoeXmN4hnqmduj2V7xUm8gdWUFk2dQUKx5ZKMq1k",
  "key22": "32wCHWWcyAn1XJF3C6xbjPLMjh3rBjXRLg1vrufo7WpaLWwC2AK5fViw2DziibPne7EsqaQXqFD7zDGwde7D8JWT",
  "key23": "3GFjkN8WZCNVqqtKJXJhmFDDdWm3AjdAzXtABRa8wrjVMcLsX6iGsGiwyy4ERxW6eH7aWBpSnsgtk7j6zAczMrqw",
  "key24": "3zeB7UGhV12i4GW5r6PpPGyvE1JLZqSP8KHUs3Xe8iRs8hHyHtUQy2912p87N6vLLVuZdqWRn8GApqzKHZnFrY5v",
  "key25": "5C2JbyM8V6qj2Dzh5WHEWay3cLQuY8BJpQJMEzqZqE8YVh3Rz94gF5WwbB17J5yQkCeHkVNcw7Lv4AMSvWJHUvaw",
  "key26": "4vM7NLu4iEv9YoXyTGhZEHHjcfojVxVCbHWcqYiNKPN21c9BbEKgBEnpoLZUJ6v3J7SZsYFxKGBQNFrhCeqTY1Hi",
  "key27": "3ELYxEaGhXmbCbeSrDnFBcNBJmZUYheH61vXdS5zRZvbGqWHYmzgiFcCSTV63MiajyTr5mycxYpnVwmCBRT4oqyb"
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
