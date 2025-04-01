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
    "4XN2LLxdCYtTP8ZCMPFtuP6xwuo86WVKEFks3q4yY8BNaBbRfQwWjwtfMUe5nmfzThGonRuTHrcbMVWUYRFjuvdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64n2ALxptt29KwYtKE6Xn1Cn58Z55YBJTW1MbHPCSXERjGeD5jNEfKpN5yiHUjjVrJwYRQFi3d2Liz8gNwQDoanX",
  "key1": "p39H8t1MdU9uiMivhoXhu7j8fLYrtyXJDA3V6ezCC1ydzMT3hpE1XX823fJ2vpX6xdjTwY9duxH7NotRhUAeytM",
  "key2": "5G9AWPLAxYtXoRgaVaEwEDLx93TEpAuXah7fwfHaMVmVPNNkxBqU9jgSd1yP1m4Pwo3cemXp16eNvPRDzjQ1kvEe",
  "key3": "55hTbqCrFFhdTuat1iiiFKnSVuNC4Ar9LxdWsBNy1Caw1BWFSJE3yAsEBBBW4uEYSDKTomhjQgMZVm4HsjT8omAQ",
  "key4": "3veAVbxLYPuqMxwYcd1uNjswSTcqnZoF2LH9VP3DSA4JnXqRbTL6o7RJ9H3vchfQmPXMDfq7wsUjTrbxR8f91moV",
  "key5": "5Kdj6f7k8iL4dpdwT28LE52bQ8DkYdBLGphxFkKCJyXvAmzNwBekcSKmoZBztehMae7aNkM5dusvtbtyBjj4s7Cc",
  "key6": "3VVi3aLy6qQK1U7jfCfXJGxrqkNgte54HNhXgnoozWQPmyLKQ3AtX2QYfWkk8Cns4jS5QoobJ3t9TVbqbF9KBsGw",
  "key7": "j2qC23iWXiE2KeLGAWFkwRSyd3FfrZcVrYrhFoXZEFXtkwbaKd6sLAN9BbycB9x4SQxBRsYuCRZsw5v8LXZp4Nd",
  "key8": "2M8eqwnZGQcsAzT5JQ8sUpbXtNd1H8CATKB5XVeS9jWzVpTeS4HSFVzsCC69yNq59YpicLGcTamTCj58sRdEYJmk",
  "key9": "4cN88PuJPE5hqMMXNJRjDb4s9T8AVgD96dwcpifJBxX2vCM4SQzGpxQMA5U8d6QTnur4pUtVXyJEgXkNeegLfoS",
  "key10": "4KqRezSap13VTmpwoWPELhF5Sx4GJrT5oGtT9seVqjT1zZLEaYuVGUzkpHNo9g6i2JGtJUtiueXZg2RJWGvxHkGB",
  "key11": "4aBSbrBk1ogLDcaFBxwaTAUC5Hn44MrqiV6Yeo6KJd1W2ha5uHRpXcNgNmnk1NTGKQrgtBgW3D1z3KPQN79cSm1w",
  "key12": "wPUTmk4me22pvH77jLZ1AQneffCcg2Dfvhu9KU7DrGRbVP4houygNJQdRbm36USNXmyKGBkDYsF1XmrPNV7qMhT",
  "key13": "2igFwpgdJZ27chk5Y9KCHt2cfaf9tDetZGNXFXWu2SgvmVJ3Ly3yiQPW5RbxDUbCNf6cdQiesxYA8ssvRx3GpWRC",
  "key14": "1Cem9mNHDp6DVzff1qWWHSEDwRSJ42DzDhzLwNT9nwZn4zrtQ96yCaDMf98AU8zfwBfNsLN5f6ysMbeLnHA5pgD",
  "key15": "2ejKuDL76YMog475cqa7YX2ZUevmvug8UncUX2yLJL3qy699iqSGS5RtjkYQvnLJhBEKdxfeEdjddVytUqF6UD5Y",
  "key16": "4ajawCgZroErizanbRu9J4osF7dPrQ5XcAFzvvWCg8fEocgEEfbd3ngAd8kYng4q8uggxNaE9Y2zGddJ5g6bZooV",
  "key17": "546badpjWxBY7xpjdZU5Fujrxsx3KZY6PvgANVQZdpkZ9RiddHrcUfuEPsKJ26vx9zYNxrkZ7Bd8rpk2aEVCvSuG",
  "key18": "BWF5hd3srikQ5VAoMNaTPDQgAXAaZNLsXzdDKJqNUEVkttCtZW2yA7rgnuyGbFuY9fxw9FEiiAPwwXKZukqhCmp",
  "key19": "2ESMYHxt9BE7BFiBwuv9brsMS6LqPkPikqp3VgvooizLinMXEqqKuPXuKWMJPWw7wucbV7HbiggiSFag9Nei3hmf",
  "key20": "eKUHW6mvcnDnkwWHHHBQwH6sMnNxgRMiwJKGAEQpuV3VVQ4dfTLzvGK7XAyijx7K6KNtq7GXYb4cHEdATkVtbjg",
  "key21": "592Tpvw6MxCrVDpGkh42VfraEb3c2xEora4aXpBgMmHcetKWBb2zvDt8KbaS5zAgGKH4rSMz3WXtMo1u4sznMMSD",
  "key22": "61qvQvH5KQMZJZV1akjNeGwf5tffpTpExThLBbpMz8mQXC5hNKRWNtWcwdV5q147zDkhxbgzDimzUCmxecZQt9Bg",
  "key23": "jYugCA5YVSQBwojJcKwbmi8meTKgxjmBpSuUiBJtf7wYCGQ5vTLUF3fnEWtFG9psag2xTFQnFWmseGBmWq8xAQr",
  "key24": "4ahfVwLVELMnw9s2E95MHERvpvkq2B94RJ2pdsQP9uZfN2z3Kzb8HurUuCupgAqvBQaDjJ3RtHHZyDDJRo6CFmWv",
  "key25": "4BEWt5Hqkt6aidmLxWjoRUMXreodVHcXwhurj4Kg5EnUuk598vsqEkfBqFRFZrjeut2UKnvWxVXwU16ZSRyHjrdD",
  "key26": "4pECjFTfvxKjjU2g8DMPtQZVHx5gmA4Cb3P5Wfum2mY5oN1AnmU6T9ySwTr4wZUQtNjXUFnW96fJYgyDHxZv97yp",
  "key27": "2k8K3X1HBvEJ6dha4bFqvE8L1FZehSAKijxV76qfiG6T7qSvBUKovFsN8kUtmVT64xbdPbndZ1LZ6Z4pmk5Jaayw"
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
