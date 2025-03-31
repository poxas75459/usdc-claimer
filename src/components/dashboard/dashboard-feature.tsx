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
    "2mDPgBRXZXyFZAsDtRbCXSoC26opjXp16VDxXskgVeziMnSwD6VyXgwuVdKahbaV7cAXspEm5mSr59FzXFPiNXQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536iDJNmfwgJCrBe1jcKDDYGFsVzjhY2Yx8qPfUp7H4u75NEf4wtdtBnhZXhUriXaXVjKUYmvzoXcaQYSqvSk2Wo",
  "key1": "3g5XtwVThoVVsXcKZk1wa9CynxYuMUWYHzKWfJmeAQesa41j2FFthZdib5bad4iNRF1y4S275KCL8q4PuHmjEodE",
  "key2": "5oQ7DRXjTY3wabwMw7FbMvnHsFBCdoRc12XhvJDzN62RpdbEG1Ai7rT8FEEm6H18QuQzv4Sib7CqppjYRtF1gqHe",
  "key3": "4i5SUB8CT5hAYKn7Huwf9wuYq45z3ea7jC7ZFj4sPBbxVcToD9TiXKTaGcCq2EZQ4AtKMCokGnmEwyuBhsh9Um64",
  "key4": "5wuTEEoUBGtcfWopScnBZvNr5CoUQC64xUcbL935aQV86EEGisrcYzQ3JsLCnsXg6rS1FshLs8Uux9EckWqEEdJP",
  "key5": "4S4RRWautLotwPhcv8jBBQwhxPsH4dB4avg9ihvQbK4Y1P6dkhZ4HBHW3mE7ujtT5WobdJeCv9tXjBQNKMX3vPWg",
  "key6": "2cmfdL3RZ6vWNY7fbWh9ByoZrTjCk4h2wC8HyRBeTtFzJozQZ4jdXn4XLVKnk1hNVgqrR6FhyJeb5wgBDyGfXHxP",
  "key7": "4Bf7X79Zeh4dkMq6ebgtGAMrihRnWng64LmPFZmjaisfZwfYUaJqnaDF3m34XbWLsjhwqLMKaKASkjx9q7FZgddL",
  "key8": "53ohR84Txve4Zx2eWSZvFboVqRYCVu8pZ8iX6CyRD2og7g5X6UKL7t6AtC2NJpLr71WWLnBHfooaBAxpzsyqdHd7",
  "key9": "4Uq7wYUVuPYpRWTAKbPY8dDvFvLcXLuykEndvcNdZ8fzmtoJAqGbLxHCAhmiD3RAmaC2pyas4Fn7EFkmi1hx57uR",
  "key10": "EBWubzWJtU5zCpb2SSRPnY1VXcNgrf4yS3EoQUPWXWMVrNKdYrkVifZL5dZozcaJN2d5ExzdNd8LN3QeWXULHVJ",
  "key11": "4UWNSmrekawt3U7Fxs5PxtL94HK13nMET9y9YVQ1eRL9qgBA1xTYABcQLTtecwe9CAqyRTK7ucAtZbMHGXmP6fzH",
  "key12": "5Bzy1nYiRTaKRXEH7RxC4MktuqHY2rb3mVogdZENCDj2FPSA7Aviqha5x7uMLjXwnaanQPQXReZvd67tv2N7cBj5",
  "key13": "5bNf6rcPvzLrW8wDXu8YTZkUZsrTv1CLLcKeU6Hby8MPpRroJ4tqM9dT3QnhnsZd9D2AJQShHmPh5ePUbNac5Qnt",
  "key14": "h3eE3fXLnFXgPYMJi72cFaRekBXcnECxXJU459Cd31sQjt3fGzyVnr5JDPbnF3EA4UtWW8nsKCpY8abNTJ3JKvu",
  "key15": "3tZnQzriV4SXWnFwZ49ni6Qpq9Fr4vSCj3C5bzSmwPaJ3Hx22sfKjBstZcowQBBBgAkm4zKA7j7hjyJ7e5ELpRYa",
  "key16": "26CVUz44AihV1HcLbHBLXEF63n3Fx5FCKw421SW2oinVotPE3d9x7AgzgTm8rmxoRuefxx3K7oqpvPpDmMFkZ8LY",
  "key17": "YQ5CrpCQwcR1afEehvfNFciVszhi3Akbzo11GWiQ8svGUdzcBgz5qywaHRnxiPGZ15gJkwFpyfCfmcCV6dtEnhS",
  "key18": "3Hbtt4qQsCXXpQ5cXoPm7TTFC23YG8aepMjbvXsm32T2ucj98KqnKBpgAUzM2zfHd97jtVqdJZfvsdurKWzVALDW",
  "key19": "4VefoYTuN5xwTBPnsD7H9AAF9S5gcmAtFGNtNDfU2Mb4wgFwEWqHuha4Tqt4jExVXWmRKAroqK6cni5UJvm2t6tB",
  "key20": "szQAJ63TAF1bC6fUk3XEM941gYiJ3yudbJmtnUym7j9Jhg57uCCRmngvCsLL8UtTvarKPeCGMpMUyuYYjEQpcN3",
  "key21": "ZhvgZYtQCfx2X8Rvj2UQRPWUmRvr8baJueD28KDBbJtEfEuBkMTcNhvBfLVzFs9UQAGfbaeiXm4cW7KNxYqZ2Q2",
  "key22": "4t2XBpf6kdco8crFrgmjV9nyeVSZzNDCMLv8rNT5nAyzSZSkfpno74mm7U6k1BtqsXc4kZVRPvSheUx1Dv6p3Em1",
  "key23": "W8aKEMyopXpujuwhwWYBjdU7XPLDv3HQkcJVLL4ebuVjmJ78LjbPSH3eAyzxPD73u21XzL36QydXcH9DLyNzk8p",
  "key24": "3eyKC96yrieS3WfdR1gLjrC5uR1FZPRrTMarqQa5vXC22y66WEoaajGgvTsHSwqJj9dpS6JLDFK9mfH8A6SW2yDT",
  "key25": "5wJLZPB3Xj6CwucLJQZDjb7wJk5L54crvgsxxJCVHFaW52Qjd9iVLug4LW9yVg9xHuoYG6Es5VdU1nQnCp3ZWwNY",
  "key26": "2PnxovuGHe9xqmZ1ELeuQLotDu6BdWQmydpKjbvi4NdCWnjd2iwXSEBZnK7RVcDcH1AozNX4oJGnuMLkWuNxD968"
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
