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
    "62o7bak42cp1Qi38razFVXCjPJVG1cg6zE82KQY2qjLmTBj8nRa4SBefa7FoeTAKhSSx3nn6Vn2DvabASr7geLfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPwUUbxSnsVqM2RwQ8s2GVjAEFnseHAkQF4ZsKhEC1prZWgisunyhy6GRMKoVc31EdmfuDFmvihUvXBztHSEQsY",
  "key1": "5Tm1XDy9mDYvTukqNYQcWpXHyFAjPtsCgXgjuucEtkFxKpaq7QYzf7oGrNfF81ek2dJ33jNSKcA3jd6TCpTmyijr",
  "key2": "M3CNgYR6yP5pmTkLJMGfS4pJFqUX9AtGZfAe22JCj8SZs8FNFERNnHjNPF8wPv5aiqjxMX9oZKeNiwxYPxsMLb2",
  "key3": "34CVDQCtsRts5QH5pwLjL97UezChNw6zJzgBmLQXJvjga7FYmjXXnD6SXrAZCFNRsEJwL9jULGR7Pseu6Vv9GFYH",
  "key4": "47X75fESSiJpYMvw9PzRw6L4dZRg7kRDGYQj7Yf5n6aQG4DQDNH4E5kR3Pouu27VEmTz6MTJyZ77PMZncfhTf5S9",
  "key5": "3T1UhAke4fLpCPHJLM4vnE2ebAtZcWVaMv32coD9X6K2hkK4EGxyA1EzzNHRHJVKWTetr7xp2PjKP6TrCtCUPU8n",
  "key6": "2fJg74ZW4cWwQ2h56Y2MP3DnaCyGkks5ufbeAQRHjvNHo8BtxnGvZidBPk2P6VkwvfzQVFv1xzxq6QJJcjRzrxkk",
  "key7": "3qmgdYskKrvJEGBQBt2MHagNsGpiCLi5XVPnN25dCC3xnpy65b68cmJRUkG8huWXzEu1tg98AGvH4z2gu6kzxjQC",
  "key8": "Ufk4rZWbLmktyiWHE4aLkvo1Uw7cXtrGjDJKrhchDFiis7FV8sqk48fqwaH46pWiAaxRzUhnFobyMuFieYERbtB",
  "key9": "3DarGTGHTqL8y49AxKymYpvM9osJUVBP8tWbzrWfQ4QyM3AujzEunHcWfJL2fh9D9429ByxL5hMKEPfjCeGKjmtv",
  "key10": "2Bc5rDHt1h5jB7Q1D721fMcCzZJ9j4uoJRoS15osXeNFsBnyNeYgd5BBnAPmzVwGsBbK32Z4eMp8BSp1Ldi1a5JU",
  "key11": "26Cjrxd9wc6nzHBuQ3G28PouXiEBTaxeFSSnc43eZistpdRAumtWmftUFENXyxRqhBKby6cgniZjhZR1cagvR8oL",
  "key12": "4VsxnNxvPvkYJ6YwCWTj76KNygbYCUvi8DgHvi2Bgxa5R5qS75Ho6fhN9LmVw5nXR3J8EYTtkWFaqmAtRxfaLt9J",
  "key13": "3kgNPccVu9gPQRsEh8soAQEDz7QfKtMEkhaMEiZta1Mf6Ent3E5oNmHt54yV2Y9jshKwHX1ajT146eX3TbCPoipK",
  "key14": "4GLxHZWFMoMevbk1LsZ13zXXMTKcCmWAKjtP1Rw877aGyLXbNknPYU33iAAKRuqSnDoPd7QkS71YBSVyHaQnmrsy",
  "key15": "3A52KeYKcLanS5GF1wRgqyb3FfXANjmxNRc6ZqZ7FvYcBBA9u9PE8ZxaHdGiSUMAaZFKsSKRE7xdaX4kek9bmJu4",
  "key16": "2kHiPdASzoTXTR35BEnmMXksxpDoN5gs4iDg2gTd7f12jdFQr135aquYtUiDSDrUhs5mL95M4rZKL3MjE2JKHVJZ",
  "key17": "2AVhRgPUg2uQTMG3JX4evTbmWyAvgEZP6rBzPVtss8ETK1UFUParSdNkchVGMtBEYWj8nBwq7VRvLxEymPHEM4s9",
  "key18": "64QxSEweRwSzgNqKhzck71FbNy4zdZZsPLnmVSFUTZDBKWNYUyc4MqpJnX4HtRyy1Q1Tv7xbqjZf8aH6mxPRTpuW",
  "key19": "2xGKeuQXAWMLVAuMSaBNiGHV2YrhVQHUNr4eyNzzdHvfV9oRFvZ1ZEAQx3t3UErgYHDH1n479LofoyGUdhHpw65t",
  "key20": "zAKsRJ6BocGKasMj4ab9GQ5wGtpiwiyoiwwj2xrSfjrgYG9U5JWB92WWwMjLdMiMCsMECPPaf8WW6efLHtwHSVM",
  "key21": "5fdaRAe1YsRfNApaenkD9M6dFufjjRPRmya9R1A2c22fmY7FdCeqv5gK5kzYVwgG3SgNsd6db6oCGYXVk7p8CHao",
  "key22": "4viKHC9HbyYJahYKr5qetFh5DKyyb8DA1JpBPC8fWjcd7ZevYELegCh57pvmM9zqHNDZAsTcxtvQENgFd3usbv6E",
  "key23": "5nPVfqFZXnBp3eF9UEobCBHHT5E5Ut4RnhHz7uhSvJQYSgZY7b6baNn8KxEvnuaE99wnFNFiJCscLnsxgtvGbUwE",
  "key24": "2sKsdWPRxpntEDKXS4Ys9vJHa5xB1iVKH5MdwhhwRCCVU59hvjvSbAsfuKTteLsAVjVLiXCRUEbbytDMxRUDAQS1",
  "key25": "5he3mqpG76kVzrTKrAEMb9BqcxPjyshsMJ73cCrN3xQZmHGM1MHtNPx1uJbAvRMA2aWougQc14rZoAPaS4V2BvZx",
  "key26": "3DKF3mFCZLk3ADXMQ6u2rwjZ17Fw1pqjsGxGkxQRYRvPxqkYwLB3Tx67VUj8CdXghu9rr8WXhF6Hp91BWg8x7Mvy",
  "key27": "mr1V9k3jqxYheH35k1SJW8Pzp1Brcuac2mpx1DG6wU9uykdYcvNdh2QezDMmrCqEevaoRTgec6i73fdBirAHvEi",
  "key28": "3XE8cvzZowUSCxr9eyn7CsE6cm4E2GQBt6RQdAcWaqRfVXbTJRaCtPkrfg81QRCkWY3fLqDdFY3LsBbHpWXUP3By",
  "key29": "37ygA7cZbcjkWddk7hzC57QLPveJT8rVgm2ApnwKEAqHzcShP92Lcyvc1e9jsvneyQYsH9vXaVVvo7ZKUknA83ow"
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
