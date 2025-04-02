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
    "5Hg4dfjSwqBU3NFmfk4Lu18YDs2adSBnurnKLrs8SRC9C6fYkPmaeBhYyGiq519zF92Gwo5MR3fVjUDUhJPmuELq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKXY1b5EdNBbXwHge23h38DSxJpPnZtEmffqyfFx3wgJPCarvEnkeKqRi8N4Q1bRKzN9JpqZFhZ4BW9QNfq67Fp",
  "key1": "4xoW1UqhxhaZLcvbtu8S3WiHqCqn1DsjtVZwbmBn17fpBYygsg7zNM7QpoXwyZCc1ctESJhyjPPYp9PBfhTAh2L2",
  "key2": "2wWxL8G3vqjpTPEFXw3rpgTnkqxNirZergHkrYhVGnYdxQkqY3iUH3BHaJzwypqEck6n8iJvd5HTyBtrWJeiHDf",
  "key3": "4Y6hG81vqRFAFt43ibmPCLTDC7SXfVmRoS8w31JYt7HBaZmx2P1HLh32yCje6NmmR4H3CdS5cz4GQ2hoUwjDjFc6",
  "key4": "2kupB77Uk7CzTCXUszpSwZsZqYwb7xGm71FtSEn4GokcUN3kGi4uWKkxYqhxMqkTs5A3Lz8uH2RPAFXrqPjvU2hp",
  "key5": "5rqekgV65549hDZBN5PcqPUedqm5wEE8mJHZQm2afkGqWuAf2ydCo9U7g83mnqrsjaunmqmBdDNWU5GVDav9J7dz",
  "key6": "t372o4ZdYFvKbyGrq8pqxzpXqW71Xzm2bHuuPg5JQyWCTgeowiv7znpRhEmKRGb8qkKCytxFqaBszNjcnm9BqBP",
  "key7": "VPgw6hnb6KwuHMrrkuUnaVqww9eNGFx8n2QuWKrs6cSXeqtEVzeztNvqsfZbmCUPQfFTQg9dci8YRMKFWofzaxd",
  "key8": "4cFvoJ5Cr1nB3FpUNcRoQ45vyFt5vjaR1DvDYhUgSZBfqo4A8zxqfP6sT5L1gXLp5PjxQPr3s6ciwVT2gdNqAtYo",
  "key9": "3JwYsqGiXQcuR3iWfw3smxF3b62Nfjjs9jp5QjLVbpvxSokprEmNCtiZU4D4FUMTotZRaDD7j2zUGgroCRLsVYiw",
  "key10": "i7VCXFhz4TfCGZF5tQ1MzuP9ze9qaFvKYtTW8xTnbEt69vyjrmLiHFCXA7F6ZMZXSnwmYHFpvvh4yY4W69qyGf1",
  "key11": "3pHtD1zbumjbCBws4gm369ESmKEQEMXagU5UMNqchznQcA8UUHC8j59H8Ct4apefjf1NmX3s4NEqCqD7u4v24fur",
  "key12": "4snBtrNySxCN6x96dqczgYVu2bqPXFVcckZYYPr3Ntaa3jJe39MjPHKLw6cPdsQgYdDGb5GPJBDugrykgC7bVr9F",
  "key13": "47AaYQGKzdb1isfvVEjaZJMiKrtzuL5oqYWpUhJKMWuovig4dPv9DsE6JsUK93NY9FTVVjnMmcC97yBrua72c9y7",
  "key14": "64DuJych4ZCxLD4wY9uX8mXjeJuY3qRBx2HVgbMfFncX3Ar7udjTxrqVQCQnUrDED37UQdN6bZNaSk4CoeYDktXW",
  "key15": "5Ftw7MBVYUTgevUfCPyb8Dp3cFty75gNWqave2JW3EgPc5kDwgKNLGn6ZKnUgnuaGPWkNqC5wKdteAoxuTRg4dwE",
  "key16": "3tMGkZiXnZTgLNduEEe4CJP6boqxTTvkF8gua7FFQwp1E6UivBMrtRocZwqvzNsH83j1VUmsvFz7Xn5Cjy5dB84e",
  "key17": "2BPnDJnx4RXN3BUvbvAL8jfEKomXGQhFppaYynTtjn4m1kMLGvQBdWmm8k3XwshG5ztQbTgqBe3kVLqvXQfxQnJ5",
  "key18": "2b4hNnvaZHjm9rsyxZzjvXbegd26kp9JjaTmqviy7TGh9QGEyQpLjKC2NLiRbAJ9aNU1hgM7aZuZ5w6njGpgwNuD",
  "key19": "5keJ6M348Vu1iski8YAjT2zM5BY37tuG4caVhVHT79bbnTEzZiJR9hAv9QzDyqjoPADSu1umRMXBhWWYWBxG5PSS",
  "key20": "4phrgjiTrMNxsU9ib1EmivGt9atZcXxVcV2EQjHLGHcMWTc7zcjYi1beD8XCT4U7iU1frbXmHTRYrgKH4ygZ2143",
  "key21": "44jesfiaLmMCigJQwH6xAprnCyf8Ar1sVjBG1aMCt3LEfY5K1cjvoLTafg1A3wxztao31ZygZGzo5T9wax4dAo8L",
  "key22": "4BDjkc98FP8DDUraR8j1ng8F2VfsrAV1ZxZJJByeqfdsJW1jGTNE1Vxe5iUB7zBx4ANGZsu1Vj4wTcuVWmfU1MHy",
  "key23": "293kMMrA2UqJ7kbNpbEzFW1U9YAyo8zvABWbJfg2yL7mrT4CGaxy2eEHvQpj6MJMrUitBqfHGwsQ33AGqppME1BZ",
  "key24": "2UwPgSGhBWrjLAszMPdduFBP5UPPUNo1T1PdAXv9hgCoLUe6WpV9saPd66sByvGDLUin3vuKurtcKYuvgzhXJuJW"
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
