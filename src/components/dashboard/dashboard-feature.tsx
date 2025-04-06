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
    "41TTZSbkzdsQAhPdsceuhvaLiPUgn1S2bjJqSAfRoaj6BmBG5XB8xHdEkPKfwakT2QFkBruw529HYb9aDkX669NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjX1vwVwqWw239rCATwCViPYX7Nmbru3CbpyFem7Wy3AEqZ9CgNZvMSqq7TWEH1M6ni7ssHF94Y76yKrLfqSiFR",
  "key1": "5hq6UhtoGKZihGQqLjrfMsbKYERyWpDsFSYMD9AtBKQLeSFDTK7wmj2BVokAZTe8jX9ijLhgvubD2XNha2WG6xqk",
  "key2": "4hKcewqaFx5TqnfWgG8N3DMYvXDSa1yfmnzDuSECCq5onc1HAp7wycs6QTYwQFhPnxwDgpHwt3tSUieph9FQgr2C",
  "key3": "5yrADxB7Khk1ts8qG4a9GGWnuJNtD12kD6oFUqm4f7uwTeJ1pyXS73bFzYCpXAn6riUdh3x7RhhaqU3EUdtYnor3",
  "key4": "3y5ShJCFkv34odndfizigbjy2y75zjyozQwzfjPwfbWRJgBUYqD32iZN8ewWJDurFPJX2W1SWnkrVdLA6Hq3jtjp",
  "key5": "Tkjrzu8suKBJzeM5QYVYNuhwEdtNaMUjfS5GQ7yFwNjmp8oLp6LdoZGWpgKyiN4u7r6qBougBdJHf8LFJnSDxm8",
  "key6": "NZnspCKRFUQJCEV59twEtbdheYDFeckHm4anob675AChmVyzShoHx3W9rRHEzKCTRncU66Ys8YxaGU5Mb4bzcpM",
  "key7": "48YEBPsX56g1ccJuzoiS5XMLetD3oUg1ExSEgC3gQEBvRmUWs4XVVFfhEaqFqRGmyQEkKM7JTSfsaWMoKUespQDC",
  "key8": "4Q5QX5jnXb3PiPDxK2ohqtqKSyEiPXgPLUPPVVwZ6Yp4i6WqLYfdP8YfmKFpaYaUErHqcfudJEbqQ7FBtqUSCoYq",
  "key9": "4LxkTtnLD1vzXtQH3nvXgh4FJHmyWs3SuPjXFAX6yaagLNshu7A8KR7WgF7ebiHpQMKRApGo5Emz4MqTmLwpDb42",
  "key10": "4tvrh5isoEfe6NsykqSLEsWCuf1ud74B3Xw918yzcwPxwcNX7g3kJVKgunm8iBJbGJyEzJDoRJkPih2wXxBXCLY2",
  "key11": "3UgfeZ2zD83NzYd3KxfJeqKZd8NCNmoFCrd4Ne47Zp9gQopBehFiTvUWJgznsqucQy2keWF6TPy8CFHY2xEKXypJ",
  "key12": "3Mj2yTzeeitdUXGRXNDYWdBy9hCNPoKwjakNM2PfVT8C5iGctSWLvYh1XePASPWv71mXWdPVUwhSDZh8qZDHCv2N",
  "key13": "3GgCLXS3mgMhepoDKwXPcq7Uo1dMJvpcqSPPBMEsRMTf25Kn3rrfJkDDoBRGGq2JJSouSc78ye1N5xhveswfkwuH",
  "key14": "2jR4WKAwgkNEA5cabkXpPnCYqZMtorHS535L66s9SXEXBAqYXLTbHyxrmqixKtMddDARGrGQSHpDJopb3mvTNbH5",
  "key15": "2Dwka3robFjDYKiuzWhhuAaRVXjTYQ2WB7oksTgQ56E2qJW1KNQV8V716SZgrN28W9JRYGUvDfTKsQNfjJVB7RCt",
  "key16": "4iSnSzQZodtmrNSiMpxv7tgz7ydEtKnrcvkah728hBnJP8qwNCsaCHWD81MtLXqtya2F84RwM4wxq3X1jqsUdGdf",
  "key17": "5LAgYLp67gV9XaaY9eheMB4qBk7XffbpyygGpkZ6J8TfQVpWyFShX49d2Ejp2ybREnbb7ncF2dq9kuCFxKzLjtm7",
  "key18": "4sitqtUvJMpHR9ezcJ2srFyA9ccH6AR26mbiMZrU1rHizzSHd1d3uGWHZJDvEnpEYWtWfjfAwddWSB8YvywPEXaD",
  "key19": "5LgeTXdLFDZAwrgLkrkD5ncpSmw9UXgBHUreDktT4p9nEbryLoW5GtEAqFggJTwsv3dfs94gzBjDYRJ5QJUjtDuS",
  "key20": "2gad6djVm7TfKWWZqQ7LgP54NPpUkgqD6eu5dDZUyM25bFfw5sAGaY7YcjndSXeyERFhnaY74261aoUxvKBma7MR",
  "key21": "2XAfysNY1t3fur5vKim31ifDAjDkfh4BLXN5q4EDbyi654WZaVV7FbMtoVJrJhJS2UmZzQy3ktQrSwU8B2zp4u1p",
  "key22": "WuVNbFeVdm81xB9TdxKAcm9csBzXpbj6QM12EEL74mduKNXK1LUt4kZvG2vN2jUYWXLypVG8RfrwSsScwxgv191",
  "key23": "5b2Qw24d3q9zmK5gunNb7cTrhwH886GXnhvdCwJuRAzRGbF7SgLG6DymiRS9mrCyzuZWGgi7e5a7AjgASheU1ZGv",
  "key24": "2MjcHG9gRijbxdB9GN58XNpy6uzjHTXL4qHw2gUoCKkVi75Zusp7r1xN2qTZdjj3WxhsUHaGSv6wNxFndkKW8zni",
  "key25": "5qr7TxadHRJextNdH24PofuKAM33uNbWfXms1oxtaBXRQhpJPBejvpm9LRikydDuPjsr31To4efUACr8sBZUdcCe",
  "key26": "4PvehKNQoGcb1Gw7gCVMfPk29sR5wan2yMiH96fQVpSGiieUNs7UvKhtYWxXCNxL77QhRTpKjs92yxWCDvjmz6Q5",
  "key27": "2LayRxLy9LZmWaXB2PiqADmMgyWfMGqq49JaE8kenn5qNrWNVba8FuE3ijjP5SWCrf2BnZr23dmVqCdPb9R6CWGa",
  "key28": "2YVZ7mkEbfmfXYf3k6s1qj4BHmrXndR9BUoAZBq53dcrgfEWPSFGNzyQduyjHyPmGLzNEEqpDJcQfwRT9DaKKBpJ",
  "key29": "4RMvFVSpwVfTQYQhBUDsYLnYc7qwQEVQE2GGoxnSXx8yGH9xBNPWhwLZUepnsoftwWtLwiU8VkPDiNr3JjQQpkSu",
  "key30": "4n171moAzJDSMQPtTC6RvdQppyQ2dg1hGuXS4Qp6LAyTDfLRmH47S4k4hkmd1Rv8pbVSiC4oKjKzSh7nrtFxbsWS",
  "key31": "3WhHP7jPDGx8bT7n6qk8WDemeN9cSrEhFUSKX4TdJLBg28jEwNWFWBNGAXWuMZAFvmy5MDwrD88UXXiwEUttvUuL",
  "key32": "5AWBhF4zRexmXsH3a9H6rKtvtyw73WTUVpF1V4cTUfbLEZnKdwjZW3stVfGtELHT49HAUAkmhPWoZbnnrDQab9Ke"
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
