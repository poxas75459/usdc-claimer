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
    "2Ed24xqMLdGLYSnUwgxPhR1LyVNzqNYUrNZJknhqDEhKUz9k4bwDNQeQD8N5pQefpUd1nnZFb5dbDK1kDGbKa2GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UrCqx3JWDNmJsdgwAF5c51yh5jfXuSmd6Ssr6M9GqRFDfrPnLD1K386DJAB8C5Cv8mKTrXhCL6nSmpZEqNGmQUJ",
  "key1": "dhwJ5nSirw9hej3igyZQpUiiC2yJMFfpPpdGQptuHGPfqUvCBuQaJAzeyQ8mPXrPXRkKi9gJVEr3jw3X4zY1d6E",
  "key2": "32dPk5DcWxSd8ENgyNsdmn7mq46s67yHLnMJYK5tTcp3ZXEZGSggNXevLZKrMW4KKSybku3anA4xL8dpt9MUnGVD",
  "key3": "47yrCfshkswicwkDERYN5H2oyx1TYos6G6xDu8E8xXBYWbcaGf7bjzvM1Lcr7G6hJr5yBGmzdDnuiJyrSURuUxLm",
  "key4": "3XoeJtJ7hiSK3SQbX4Kn9q38PVstqWUEm5demd6WbTcG4WdKAyHxJhjw26eLNgnM7BLgK62rEK9SJPAUQcoEMWGy",
  "key5": "3k2tcG6BN5L6UDaPFSnv53Bmvpi7Qjmxf9Kyzm4d3BqGS3f2U61k8Qpn8n1igPW2L4SUf3KnPWQ8nebwENLQds6d",
  "key6": "3vouBwkvSANzKjkzJP1Se7g4CKmfiXxzYsLHajTNRwNB8vnWSA6vGytKhqwfQQgfnuWyvxyVo6kE2S1aXnZCbMoF",
  "key7": "B3NhpnrHfxwwryjDiHkxDyWViuE2PsVhLC2hxHGpg36Q3Y5JFAhffJQxm99Pq1aUczAUHfwWjX4YhNzRr6TqHY7",
  "key8": "sRYP7fPpu6HNEtT9zeC2E3mt3DGZL6WtaJie7V7Ccdn1YR8G4sWhvLbYqBHThJ6E6QLhGgbprAs73Bj8pwUpKud",
  "key9": "5kLJxatgFX3urS7GrGeM1YWsH35sWctA7RDq9dhVrJAZ7SJrWMHKYaoBqVfji7DQBLixR6NF2i76SHPtn8msmik",
  "key10": "vhNQw8ywqsbuLC2oJYTxbp89FstiJuqYoVT3cXKbbrJLjpCovmobfaEKLJrP6eYQjdMh4tZkQuDjR1bNiR48CDp",
  "key11": "j4HfRLLNiaYHn8XrVKz54MzajcyCWJDKXTyQjNdDtkbWHXJZrwevRPJ5D3tQ4p1JneeNh9b71TWCU1UekgK2bK5",
  "key12": "YmA1dExPDbKebHq39GYSBLGcsUo1SEXV3dgjLVvmKuRu91NRevo8FEvKsnvCknaY7oMFN6QgWyq9HXUskNR2XRc",
  "key13": "2bbPTSWMbcXzoZkmtBHtJafrZSBLd2NrD3h9YAzHLe962XhaDkBeqVe7C2VSatzFMLRGQnGKQ1ySMFZ6CsNaS1m5",
  "key14": "4BhbCfeGNACM3LkVWhyxDvoi1dasQfibRu2zvyWJwhFxnnnF2KDe5D7WTYhLzDz4R2HXBPrzMbRdLDt6wDNEHE9R",
  "key15": "E8gcD7UQwW5vtLnLoCYSi11wExm4zwNkDjyJ3xRtbkJKPq5XgDJCgMDsSU5tFiGdqYSDNjxz2azAEaeZ4R4YW2i",
  "key16": "k6ffhAmDDXAnpxD4MqaoAAQBR7puTfgbdYNRZBYPG279Y9Uq1bjun7YvEBu1wv6UVR1dbUAJhZZW8WVKf8gZJxx",
  "key17": "g9jurGxsC98jfqyRjbAz4KXyBP35SiN6Ux3yJHFx3p3mVMvz8PcZ895AxL4sX76i5SwkrLYu9XA5SKqgkXSBuHs",
  "key18": "3hPnttZRZNbFvfHY6hQprQGNfBYMdkzGBgpME8PmXfiZqPEeCX9aLXXP9UVKgZWX1WeJDdSXZVzbbyhpYFXjazab",
  "key19": "4jh6arfhj3UQVGXWruVrad2w624chZNBTdKbzQWEiYpRew1M1JH6YzCYTb1tzt3X6S5bbV9Bea5htryeZuPCZt4C",
  "key20": "313rsZipj9cffq9zRWviWYVWVMLYGDk1iYgnb6AquCHk9wsU5wk31jefmbmzDdGobddq3UXo8DBuZ751pbJzigMi",
  "key21": "4v2MhpRi2qT7sr5dU4L9KGtVy9RdPZVq9VA7SZ29VKSLQVJ8ZpJfNZVSgJEmUFc2uHdsTKY4oGnKFekysa9xArRQ",
  "key22": "5G13GhaZCbMM1bC3NBDrN3FqL3TWRT4fvk5ys4twsn9oA66Efw9Crq5BqMT5Zoo6HMXM3jPem5CHLszzHxEgwsgb",
  "key23": "V4P1GdE2N7CtwTLsonCjzDf2vgdKZQwR1RVr9ZcsdgT7hztj4G1Lv3quD8n3twyocxm1EJucVocLGFEwhibjvfe",
  "key24": "3o2T7RVMVipZoAUxbQVvh9pM8BKbVYyAKveYX6hY14URQtR8gNZ9u6gQQLfVi9kAUGxhWfjHDk1ZsUAfrzAAH59W"
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
