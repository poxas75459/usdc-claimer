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
    "5a3z6PCtbWLGHUm3qYo9ZcQebQAo6YHaQxgjcwFZyQVjUNWhqxUbd6e7yoSEdrtapErWi5MQtBrnEurPZ7gGwXtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aw21PaN9GKUMwKZaWUZ1oPQ4PHk88r6oLkC1SaZaHyQ65CxqkNXwQHKn3fTKejPv5LjhzqxiGFgBV1pT57xjtMA",
  "key1": "5ZzewdhpErKRthr6maeuGhjXpQ6VJSTCN1kcQZUD7tTomPKzEFVVHPBNkEP3PpQmU5a8B8nSuDCHZ7UqtnNqTekU",
  "key2": "2d28FEkiY4bWMcJBg8dnLm6kaGdViFRRfQgRzk288Ektrd4Jp84BavECEkGFgno4y8JNs81CNGgeSSNP9AVtnS9M",
  "key3": "3Esknmj7j7h4YKgBenjm44KG6H2hNRM1hEfnZhGgwGBkbEJBdrLmhGoi1j2g6sHWzsQtF83QxVrtYaFwTQQhE2CW",
  "key4": "63DehCsGHrgW43634nFUM8GFvG1jRz6gzxTBup3L1b4WSF7xieWp7UeUZXAEsCfmJ25eggoy282q2cJsa5whuBex",
  "key5": "5sALHujRV9eVKMkppkABrjomssMZyF9dTSstrgL5Lr63NPs2XTgYRcWQvRJWWgvLJEK7UBvoKTChdMeUsVceBnoN",
  "key6": "3WeNGYtTThLCsuA4FRzF551oJ2AGkseVHcsKcJJNFRoN5e2nnzX2uEda6yHUe2XAvQrvNZ2N8tkduVrA16qMXFrZ",
  "key7": "p7PusGteYP3CDXcioK8TJRDkzkezBRJ2TmgjeG3FGRewET3fkSKC628eYX4PborDTr4wEhzmvWcLmRk6XWQc9iV",
  "key8": "3mUpXGRkU7jMeJwckiNBkSRY1DuwoBk4KoBiGGkFCET9ZNMpNXQC76dZX7YqbF5WrFCVWxhSDF1x2x9QvcAYLHE8",
  "key9": "4pyNSNaqBy9czCdzWxtd8EDMASq15nWG2YtNLx4KZVxmGKN9NH8YNZPWLkDxCWpD9ciZcKRgY9NMmpZLgXBdEaKy",
  "key10": "5AAfTS2MxiG1rADjuTZi9zFFR2EicBF3moDcuEU8Nv7ne1StsiaCEQysqeRsPwWxoWdaUeUCSqNRdNRWoXJYpDTL",
  "key11": "4n8BzF7GK9yg4qLdUoTKpDFBArDCEy3E6PRMJT7XTzYxJrL6dPvjenACdD9JDGFcRkcU4KvqXdE2RvUQTwvTm5s1",
  "key12": "D4kvxXda2mD6SFheGFYKgMhnyy378n1rTnXU2PN5fHFyH8sLEMqbFpRLzLFMmUzK3bogP14m1wEjf41sRfUc6YR",
  "key13": "3Kcf15tksiFvBJj4ZPC4i6MpHVchceWG1AgmhgGNtPCwtVrQ66Y5FedYMRG5Zs7zcjqBwAZCt9Fn4CGpE1c4Zhs8",
  "key14": "NkiXxKWLnf8A8xgfGrpKzocTcgz4dK7udJGdSmC9SDMThxiByuZ21pxnwRTxyiByCGq9WkrgvNq3hf8cdQAYigb",
  "key15": "3cPnxL7rxzZVJ96tScHojg6SMoMYZj7p48V6w2V1EdD2SzTWUQxFv4bWQuU89gFc1VXLUVfUr2pMxQHYfxGkyD3i",
  "key16": "37b9a7gA3UG3s8BjyZmHhs74ocm8m2SAH1gWrREKaHDhvDMPKcG1u8vQrSBdwksfRSuD8pfYHQFVmLh6wxBMjL9z",
  "key17": "677dTZrvm4gEY9sY5rUUz7j8vmSVt31eKErREAYbzWkTjE4RkLPFXxoGoE6VzJpAqQvaakBshRfZq67XKMoXWV1u",
  "key18": "2uNMUKXDYEVc5sBnhWtrxjahVjHhax4gdReBiE7DGQ7pGmupZhc2m7NmU5b8aKG74iUJweMyWbU3QcNhDA6fUPEN",
  "key19": "4a6puEguDbajWinUCoFvHMMwixdNkXfWnNJ5HHwgfGpmDzx9sKd7QstMVtt9k42XZ1NMjCS38YertTfax65LLAH5",
  "key20": "4AWEEiDxRWBU1xLxvx53tyPY54M1kKTKYcJNGWhCvoysx8sXTm8q26nStV3Fab33ydHU9TUGVKTNnV3FuHP5Hxr8",
  "key21": "2r77utYh5ZBaeovufTVqxi83yQHVx7etyJXLV67TUpvzHDZKUXbP2P4QY2UFCrT8zkjz9PfWfoVi4Azu2MrcLYJf",
  "key22": "3uwEqeBXuaBSYXvY7AXTv7tZuAHrc8ZZt9fARXRJcnkfYsAi9rf7778ybcyaHyVZK6TggBhxN9CQPPYZwthxrGSs",
  "key23": "46PYJocWgqtFKRtCQAbdudGvy2h2yQhUCXnTSz21UwtCXxkmvjx3yUvD7aJ5xn16KZbU6CMojyk7k81ZJ6QfHtsJ",
  "key24": "5brN9u4jx8BztAvzUBRvJ2x6qR7TJjWYK4uWSPzwCGLzpUGTv7CxQKphjEpDxGjSFxVH8vEA5fRJmfuCjtcCgkuk",
  "key25": "3cSMmTymQ1iKWMCrgQP2bNJPTLyRj7TsKo7HCFSfzH4cW58CvQo2bu1nwF1EGG9HzZHdnqeTwDWfyRqKawJGistQ",
  "key26": "5FabrYKQYsUCrJFvqBxa9wxMUoWGetjZDFggHwYik5xB44gMoQbyLbPTH3XARYfyjwyck25qHRVEgGKyeaAF8bL8",
  "key27": "4X62s68zBspKjAtrTk52Mx5BgTWQjpkkys7rnvWfKAqtYZ6xiPfVATKEpJk2KxKKhJ8wjeawVry5GogLBcYPhfCg"
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
