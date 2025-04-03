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
    "5XVuam7gE7bUAYe31GLQo4KctzaZmwQfA1sivdN2cpfziuuU6QY5ha48vToMRNj7qucfycHeYj7W8Q19WgJ5TpC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ob5AnZfQi9pfUdtMTuqrXx1Bkr6SzBxtwgTmYgqW2F7JiqhHUopamexBKnGkehT6hspZytmFNucVT7KBmnXyPAf",
  "key1": "2tN924SFMkBEuqTRugwArmy62f3BiZeMRL8hPscPLQzSKYe1HAxukLTGxZbzzU9gG838YTjDVGYqDyBaZEW3iWgQ",
  "key2": "4om5brQpqYuPa3Pkv7YjqL6HPafVyi1uoR69cEShPSurBuQUXM5vEiJbjYmQSaTTjSpzsDvnL2KXPVieKoTnX6cs",
  "key3": "5BHNzJicAaF97gKjkQs2q6kiDa2PtcHqXNkdQzNT3uFHioRGN8k2sRch94LJofYBZrxHWD8xeP4EDxFHA7p9kp2c",
  "key4": "2NenwuB71UurgJFnF4k82xwkyUeTdo2X16S1sK2zSTaCFtvPBRWPDwLZUdHdbut2GDUSZ4okiPL1S5QSr4Vdt4pz",
  "key5": "62U9LMTWzZWkcLkPhGhTuJhFe269dJnb8x5Ffp5hPLAD7JHVvHQMqro5ujk4HNTaDrvCGbfVmPBcYqkqJgRytMku",
  "key6": "3DU5DXx2Y3nUFXSY3wieuoQcM7PfpjaWmN7ySJ5Q6S4xmaW2RJ4c1tupCvebJmiwZMfF8HyiQTrNDZzqeuFZqjSN",
  "key7": "5ijnxjKiB568fiYper8tPUPKe8pmXQuLM3ujS2SGoh5MC2EQrf5DY3xNkUGA18f1G4AWXuXuHJKvR9aAnvhngqo3",
  "key8": "4MVYeSUwuEYAEPeRGX3RMykTg1XDADsVCAjZMBSynRJnoSTsDJmNM8mpHDBySz373SfeAnzNpkJetwnm1YeGawfi",
  "key9": "Ko8CnMp2HV4eVpYCaYaTkvCwrhU2kAcBFLqYqn8PkbDPxNiDF23T8NWt1QjsBRHZB4CHn4Yb7wmPhuEi1pjRk1z",
  "key10": "2Ug6k7DJQt2vcnMKqTUYVAMVBpgask8KM6KyBZxT7VBtVy783T5MZmRyoVHRdVYscrnEw6TGZg2V79Pr5sBUzynJ",
  "key11": "U22XeSL12USUHJ52HHAHkAuH98hqFiJzu66TC3R5UFEr338Cui3p4tEyGSZjb57s1fajYby59dYQcD5kVCYi7MF",
  "key12": "26UR7vSncELE2q76NV48UC9J7EtwkXGuPvmsysL6XgwpqvwTY7yg3wSVPHB6qYmzNXNLnvAAn94oB9YiKr7t3tDx",
  "key13": "qA6XANdJjXaLLwwJtMjUTv6tsCCG6LeXDnce8ZzYifR3Qn8eA7gUPQhKsCfYYY7w3ZYmg98CxX5ZcZHE8H2ErKT",
  "key14": "YBhcWQG68jjMMXeuHEVMoNXqAWy7c9ZmnAEfynpgk9rEyxAMQheKU4Vt6L4crbxVqi34bGJLCEbH8i3ncpTRE36",
  "key15": "4pWaQKqRr5UaFUyPf7dzMSzLiYMjVDDWSKvwG3Z14rcbK414ASNmMTSr8HrQ5sGiu4kpQjxGJ8LgA2ZeTbQdrBLz",
  "key16": "2trvF8ou7jkvDvkfbV8aiQpVS5EWYAHUHuEy4YvC1uwChbrSfBN3EmatgpRzAZzukCvXvqZxqUF457e8rT1cGr8t",
  "key17": "5L16vPsZ74sqzMxDgtvsUd8WzJkZ4RLhWF8dGvYUgQLU31BvPmqds9eXjAAS2ZjwjPeyDTjNs193x8guoYPvCMy5",
  "key18": "g8soRnefKqiyjh2fCj5tm5dWUJjtjdi7j6GQJQruci1ZMAe8K9tzdkhPZkoRWUz2tWRZ8yii65k54aCWoNcu8fG",
  "key19": "46pTA7vb4ESLk6YR7M8Zktn9eU497pJBYGH4K7Tr9X7aJhRjgVJHqAQGcgReYWziqW1CvCYeQSnnydGnTfxmDvE",
  "key20": "4jrkUUWCf3GwH27CDx3PBDK4pTuWWS4c1Aga8jFvXUM9P8HdKb2t9PGAh7Gbu1zAYSng9dVkRJupS8GYt2MhPCch",
  "key21": "kdurU4o4iJNFfoDupGoPMqbTs7pQts9nAGQcmYNMcZGKSSiiSWTehMuTsqN4PhSypzFLo3KwTcVFrQvPLUrN56A",
  "key22": "wD9YTVk3My828LkcAmy7zGJi4rLW6xwXiHBGG8DJWKfpuZHoisUQtwd1YcJHUCkeVZqNSNfR3B2uyiTZQqC7dQa",
  "key23": "hbMnhUwaXiQRfU5BLkFaEsHCjP6T7NDZ391Mm4oSds2fdTb4RkF2MGG3SBGyGAxpBcwwBrxKmkHKwKe3D5coULv",
  "key24": "4k2ns9AyDo8L7NUZJzVAztNcjLDiQWVxohquaMk98tbzd8mV8igRYpnaed6hiCf5YYCBm5CbFbdNHHNWxxV8w468",
  "key25": "44v3bu5SA7QEo19ZjRQeoeiBTr6M9AsTeY2inX5HwEqftrDALRzdVa8aStiv6J1CHhnh3QcCE3TTcB2P9sNvpVkW",
  "key26": "LjM3e8cDaBVuUDc7Xt13kv5aDa4Ck7uZ4gQDfJEpj9SkV4fWf5MY33ENPwaxwqDJMe1CqYnczvPvRnDFSSEVutS",
  "key27": "5FGLJfYMUA6fPWXyT1tbWA6QZoQjcDSr37RTwYBANTNXAQ7AJkmDD3ggkcoh3vf9LWLgdgUU5hJMF7HJ9oA38HYA",
  "key28": "bQAtx48WfEb2hJxjx4T8MsSsndDbJYRi3XDTnVoGAWSCJvCLw1WADW9kJ7g3opJZWjPq9mzhWS1kfxGg9inMwB8"
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
