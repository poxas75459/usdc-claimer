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
    "5Cx7sSQXzWrnSmQsABxPDSZnE3wZsMb3SENKpo4YergLkMi37jXrDjidjaj3BCssqkvrYVzumBFHf2MfaNVFNqwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jzuymwWEQnmx6UzzP6YLvmdG8KMjmgL49bJSYjnQsMSPUuBEyRGUFPu7J6MEurXooHLNArfQBviVHM8RjkeSwU",
  "key1": "2ahHLY5qgi7pZfzGXwFp8ageRsQ3nt9SqjoJ87DZ3L9VSYHJoqZLbvgsGkFrf42cGZVjsT6tu8iMj1X2Xft7qVk9",
  "key2": "4tKkNDqt4hjSuVg6E8DZdu7FJrkq3xi8tY1RgfDeyX5d9gUgJWq8NEXjttwfLx5WLkCjnX5z4L9ET7jzjWD4MMGo",
  "key3": "4yqGPFDFLVgNsro8fP8fuYAMnkH2Yh2DKv5qsBQ7Vba2AVR9RVMyixjJktUbqVz9VgCwWpGf5GqtWtbprRPbDG5A",
  "key4": "333tF9FGuuB8yySE7gh4wiUZJBDpf1rudM8yVGopiEFPRBTbfY8YYv5SsV7suTa6ZsinymnKWJpSPXMwYjwj8pKJ",
  "key5": "4dBms3rbUyfeVVhYNPV2Y2ZSopoTBfyjEEv8dG28rZDLe9QyUmmeSMdDR56br2Xma6uvrboxVrwMXDwsCW7GJwUC",
  "key6": "4S3DQDTFV15CxxxU9wodhG4adURverWLPyrF7EDXiDhRtxeuaX6pGeeZtRQbHRGBSmBmxyVNTfVb8tNHH9aCaZBq",
  "key7": "5uH2XeyECr1boTCz5kmnJsgxosy4YnZTHgMvaRfVdrd1tPjz1BKGww28EzhDZSGb6RjckmxXjzqU6FSJrc4rxsus",
  "key8": "4rjwf4afuVNnjGWY1YnGVhrt4RRjaPBXjnJqUXpvC8vyDCgfMtabdVSXryzcjGXnxYJNom31fTykFUfs2nUG3UhX",
  "key9": "3aiYhp6bXkhvfegyXnyTzX5w1z2q7AXzjhq3zRk25DXh2oTmydHfTJDXoqXUmtsH1eu7ddz7bBKhdGu6G7t8NiDv",
  "key10": "RrUvKLTWdroKC9JHYLKmggaHJBa3c1pzQQMdZPRnCSycNxtiR6Z9nsu4T313Eay6Bhz4FRPsWFFug9ug5Ugcbm6",
  "key11": "2uCATKQvoUfpJpdwkqqacK6owanFFpYJyavu7gZF2ivsAB7ytZuwukqndCUwCnMyxknvM9rLSL9WCaNaqd43RVcv",
  "key12": "HFqzXRSBQAhei9LXv6zdCneouoycwmXr91VYbAgW7pqugqndztZfLA22YhXvesZ6X7XwK9exNFuMD6rwaAT1ZhX",
  "key13": "2nvaPp5QkMzLERNrF2TzXpRcvsPsjwPs7Qsn8euyzD6uH6gKTXqV5FbgCo3KvB9ssYMuftJ8zUVWKXDbKa7iEr7z",
  "key14": "tzD1X3Qr7DZYf3hvmQsV51pN5zxczH7PeCF6CvY1gsPZ9QyxhQ1wC2BcAJnZjJhH7sHjuwV7oShJBfvvD7pfYFr",
  "key15": "abZvj6fcDfCLozTycXHsEWTYcoxcTgYi8q8s9cFaV2KCA1fdJrGWDpAoVqNmTotq4DhDyv565uoueZGLHTxY9et",
  "key16": "5zWgRkFiFbFugRXDw47xSJPMuoF4F8ufZ2sXWiHJ541aNPUA4PqHJYExExZY4L6PU6cySf2wQJkwcj25sR6D4XHj",
  "key17": "2WQxG39ydCCBmg6oo8QzShWFyoNApduA26YU4vX8YPxG7TXGbvtxVom7KpfV4w98cHMfnUFEt8zg5yhrT5Ff3uvf",
  "key18": "3WqbecfcXjjuTcodiiny4jF97tetPqHaNMtzR2C5hnPHubioHQk6KzLCFAubw7czKNyVYEyZNWysv8FACRwpuuwt",
  "key19": "25sggAaqMg7reoG4Sh6kKLfqZBKEMdF5yFtz1aXNcrAmPYDprgL6cmTekwpCdN73VgYvQ5YjbzHs21CyEQ2FHSP2",
  "key20": "2iFZu6mQ47MmDow1HpJ9V4ChVGosxNfe11MBDZHjwHxDRxBjKLbaoJFwWBKJKRmny7EfCZk6MDVjJqEcAwPMTtVa",
  "key21": "48JyBtoUQVY7T2t54Cp8YsdUCSHDwsmsAwfVSkGzSwJbLwaYHL6H7m5wjfAakkYRpq3YVZrPBm4L3Yn2agyDPM8J",
  "key22": "3vcrKgiXEmuGGeQggw4iw7F6qmdg4rPC1FnutFJ8kaE5Xz2siV4UtXAdtcvH3RZFqVEpqLEpcZzngq1Sf2NKFNJv",
  "key23": "5PJbBuxzWRgw7tpTEwEXnDDomkHNqmmFextPW5ZiPVK8qnhJCJpkjUABW9xx5nSPyxNB4wPaXMLx8kkeqeMW8zdC",
  "key24": "2Ude3usdNnkPiVYvJTSX4YrKMLJ9pTVabsGBqAWXX1uYtitEhAaz5KpfGBMyHAGffYxJc9Byri6oFB2hGWvNf6C8",
  "key25": "3jvJYdMu75vMGqyCi5LiJdAa9zB46NBXeDKG4ePd1aWgEKhUXBi8HJgwGV5fUsidi3bHnhqyYfVphHUkePJrLWjf",
  "key26": "vkkDDha4VjrRsfxK4fv2YRj6f6fnxjjzS99292rwkHCwzjxx9oBDh94znvZa4wrHdT2Dc5rHD6tWwjvTkeuZBne",
  "key27": "5GDTBfGsEDeoFPDduHAu5N4skcqhTSJMwYpZDuPWQy6qffGVSMgKGNpZdD3etapCNE3jxbXXwGHrZM71Ndh6aP9X",
  "key28": "3tSQSM841UZktNy8WZHmVfP5hYyHKw8U2fo6XuW8iqU6GhoVEXMBKQTQ3YK1q8EHQ4CS3WxC3bBLjfCkYnob877k",
  "key29": "4zgtF3CMVo8E69F4qzXFZSwxC9ryRGLAvtVJe7sbtDXXkENmekaH99WtXJCqsrfpGX8VGadJyKc7uzsuWLpZKyig",
  "key30": "uHgyQe21ZTPkU1ZJj4Ck2bfxs35FDMdhmnKqY5RQojqUTayxdkbNswwvxSGMpwnaQNWSvW1J9GHBzVAVjAGtLQ1",
  "key31": "W5ufGkyiyMqfWswSsSzgg39cFai15zg7noSiNHc9oyi8NMMGAANYsmWqB23ksq6sKaT8CNEWUUbLKL7f4JocL6P",
  "key32": "4fHa1Z2K3FHwY8yvve4TZWtTidGwe2tYiqLoDzGAurRi5kmA5cipH39NFyKTVriuzBsLXz3CwmjeWayfVX8oxvHD",
  "key33": "52oVAhJ7LtFSz11Hwy6zreVsa1RgHjSBzSq8bBXcUfcvAgkjYRN6HrVyuNqyhpZmTvs63WYY5vsDxgSMvSMYsaMk",
  "key34": "3pxqm7wWyn9yL2xdLkrfqikGqFiLCq8BiwhatGpanyNXmryBhAEKyX8nihtE8VQg8NSGqPrXVeNc5xrrQLsoHN4"
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
