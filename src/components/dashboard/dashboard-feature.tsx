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
    "2dbjkDqeqEbNy8muTicyeuiyhmy8o943BeYjKWkQKDGxx3Nfxxaog7JHfgofUjw7kPq8MBTnRQ9B56z2jjXPxPPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtyTXp5XaDn3UUwFhwzcnEhNACGu6L7etvmvxR27gnTAjouE5P4CjjRTtHHecS1qtcHxRg3o2PX7Xj89J7dUg24",
  "key1": "gi5srDWHwhXDFEK2FxjfPWgSTimEsQZfBzL1Qk2kCTeAUDNAGdFmA85bZoen2scwC72xZfCh2mkDGo9wAsRP5mw",
  "key2": "peS4k2S64oDbqjMp4z9cG46qFBRoZvzynP7KG1CGVnTW9anRL5tdQUELgM4QVGZTXRQcpPCGBYt3jf8NcHp3CNA",
  "key3": "3H6CCsDbEQcxuDfM6tyqkz3aqkS5ngLZLwiozk9R27nFTmBpvjqSexuGsJVsgK89F6r97id9UWzq6L5uprXeyNrm",
  "key4": "5Go3tfGdaheV5kyygtbERhcEP5ffvKhSXvLLNcwbubB39FenQciESQTus8ExyGwgxky4J1uRLDyZUmAMdpQAgVSY",
  "key5": "3fS7rdLQMzxWexxVYECgZwjqdWQQGub2SGKzGtipgNLBvVViFZYBSBiUQ6he2zrvY5Q8ZWL8ZThdgWHPXzdXT1Y7",
  "key6": "5FTuT9bmU2Kgybd2UzqvS8Jmp7gZUthVKxQo3Svvc1ahr6Fj79vdS6ueFPRBuuj5uhyWTChLtq8ud2qj1Xp2yujJ",
  "key7": "4g2j2ZBemf91KJcEd9rmf1jpmNGeobvM38vzhz4dBLeCTpsfXVTqsCfudzgpWa9HZv3QwFXJsxVb8LQLC1jZYTd1",
  "key8": "6PRviNU9wqPMq4mNZCmBdN6RssjoZZH2VGSvkD8aZTWKgXi4EMKbKCifwAEwed3tKufNQyrsXQaJonagNAaopvV",
  "key9": "BRnToTAJKTMsG8g4GpPbe1fEfAqKeEeGiBFB5Q2FeYMpuZU4fqQjorowygXvraUM2u7EF9SYyj86i1dtGKNBhXt",
  "key10": "dwp1DETA8EUM4FxeFJ7NJ2ogxTU2kBdJmHFMcUL1ctMeWZ47FQontoKCF4AmWsKFJDMnP4UbwQ4kTFTNCq97M2S",
  "key11": "f8eCaYEhFxam6p7t1H1KWJYjJTL6NSKZ39UbQ7Ngs4vtY5tVMaEk35pS2WAJBG49UdaepnWcFR7qRzfmoGzQiok",
  "key12": "5PEZjG8PRmtHfYyX3stZy51bNuieio52ERvdspEsXjUkLm4uA1UPzT7U9P7n3dHLe7rJkCCAdvbFVXrAX7dTEQxw",
  "key13": "2r3Zcsa2pMRcJEv57YoykwQKYtdQS2TpTakVuukqKXptsHDUuhyisWjDY7ek71TxS57UvYB7u92bBnBoxuVdkWSF",
  "key14": "cdgALxjrfzfRzZsdq8y49jpmxnVomv3EkvEETstWEtduT2CjY9DuMSGV4cxJQ16YZrT2kqK6mZttZGdqF8shEKS",
  "key15": "jTucxHxHbe998B6vqt4B5UA1HaqAmmA2Uhi3rcRRhUzkHMUzDRRYDAaVeWSYe8BUKypJBaHDuQfg1AEi5TYXcLr",
  "key16": "2dACa4AqWqwr6tGR4L5TbqrckMgGyvYDFzYRosLKsJsegTfKqv56MgDUDY9LCfZ4vJsyRiCvXB42QL3wGzXaqtbR",
  "key17": "64CYj3N6EJAkjVZimwgeQcGAdnuTPB8JzFApr2bY5jc6nmjSxTp86fUWES9zRMVqGxBtLvLZRjmecQevm72kfLo5",
  "key18": "VxYnsGXkcvj6xgVNPpbRRrRXaiqh2VTZT8AqzdvXdCV7d99WcaQtwndz784uXerGrfGDm81V9DgG6jBXHfbZvBF",
  "key19": "46gdqgkVUWEDFKrLu1e83bhwzr1SnEZKsJ6MKSDgHCzGYgLjAsJ43sDWeBxLivrFUAv9vFigNfR2QDRk2zdYF4vT",
  "key20": "4dBvn3mKuFGaiW5TmMW8KDC9XX5X7uH8dn5BGXWZjhYooFbKQANzszphZ39L44yE7f726tJUTjhZ4JsxF89HVhXT",
  "key21": "562ox89egbjNiukXJvbSoCXVNEycENYjfBhbKipa8XGwb6wGiHeAurtEAjSSq2VgTv6KTPnePqnZjthDGYryXgzq",
  "key22": "3HHAMWmkvY2MAP6YeEtFNhHbUimNJAJn2t53ZcAJ55Fi6Sh9tudFwY4vzGjDsmiB5u5WDeX2v87DQZwvbhAE4Mqq",
  "key23": "52sPnhcqbQRSGKVBJkk9eyJxpuWJGKmFdri8TitbYALMk7RZecWHHUzrYFC9g48fP8pTR4xh9Tew5v3Jk8WgMtuL",
  "key24": "4s3EmQ9EQJcHMSQirg9fgoLPzFqbNgoMQJtmWUFNgejpG3LEkif1AgAFNVu3yMiFefPnERsjYgsMWT9oiCJUHHgG",
  "key25": "4u6MU9oMusoLQKVSdfDWsxv3Y9MtNA8U1LiiMge2CXa1GYMBRYWGQhgTvzrNygiZRbt495sahvQ7CQvfMX3aEf7B",
  "key26": "52RVwpnjSJhP1m7jrPcVuRkciCM3rr6NaznPhU8yjmoDgBwuKFrGVSa4jfcwQtLXd9sSNJ1MfUrL87iu2cNXAGaT",
  "key27": "3Pt8ZCZy6Y9BdHxv2GWh1qrq8MHpZJhGWynJHTWHXP4fYqSRtdyhEz2SqfFVt14nEtDDCAcJohKDFqPK7cLwDBqc",
  "key28": "66SnKZQzGSNwQ3iz5tUcmFZ2b83AnbzQCfcDc8V8LTF1pXN87Dw3DdKCmTJpJ5gqhkGXvjuZaoiZiEg4LwpaKCw4",
  "key29": "q3zANyd9NqTYYJRdH7hdTEp7dy68KiRpHvzAVyaygDq85s4K4m52nvZrAxuLzZxrVcQQLytSppmJaMcN6Gg1WVS",
  "key30": "3iu1osqQ7bxXAATv27Yrc19kp4JPWUWUQCgfARZuca74abTy1hVZP8HNx8yPP4kNsk2kdecq7wtycK5RNjDe3JnD",
  "key31": "2maPMf8U7DDMauiVpzSpvHTfDk7KSL8Q88XUuH1a7YU72TNSnwmbjZaXrvtzABZoi1S9BBbfRu3RL4pmtUBe8Bjg",
  "key32": "3iBS5gSdTPnTd6472PV44o5Y6XaXKrvVJkWgAngcsgm816HiZm3KUuzpZPp9y8g2sr6jYcCwHZpe8xokj9qkErpc",
  "key33": "28eLSQ5pZSFpsmwnzM4ufUR7uAKaSRbLrZNf83hF8YzLTKBcnyRTSVDpeyt3RwSo14Kzi8VbhZrXT5edwzSpxCnc",
  "key34": "3SvogmzfaGmSyYPpFrgZP7gWHmuuFzAj7kajhtn5vQNvMVq4WEwbWojHFgPzpUgsQxXcTo7f5hobMhDsEQCoB5om",
  "key35": "3551DGxxTVuyaZxjBXZ1eSZNmhUaYFNZV3gMNdwqyWtkjpLPn5ckCn5zaim25wDRQ2aZ5dKfc8BTwQ379zG8zwgb"
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
