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
    "5diVPie3fgioEhqjJLYp9Z1K9BsnGZXMhqhN6bpYcxztf35RyeJe6vvtihHZmu6cmbPVeEoqg9ZhzhCeKt5XjUjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqTmDK8btRQHTEnUMdN6D9zBbWcgbzrpTfqewj5hUcN16ALif8S7Gpk7pBvXcWoAnA9iAzTLEQX1tkykAT27wkq",
  "key1": "63Uo69vT3nzRNfgohKXF7CbKUjQGo3Xh4ozykMoArU7bU1W6YyoQuHAwfvzeAZ8gpxbdQmPjUz4kWzBW4khJV7UT",
  "key2": "2rPoyzbLbb73DkUjiQzUry4LR4XfUaBm4vEVY8wwYGNoKC5v2zAftL1p1ARPkxtLDahVAUTZDcTmy52CddjHSVCT",
  "key3": "3LrsCvMJ7Q6bbzxzYX1797S9FxXfXR35DMRHbB7zabBPN71iz9g65n5R1XFkysGvvK8fcBXLfyDoLcHF77PEPrkr",
  "key4": "4CdShtptPJ7SDyiiRY98j91RVydnazzpUrcEDj2Jvzcj73W99M1MES5zG2GDX2ivQu7bEeiSqMS2vznseqvTVPTH",
  "key5": "58nm7hHLPwES6KKTYww8ZLT4sKP6ijuxzGSxaGJMfRf76ve3YvSu2Fn6woZiWaLHNK9KtB9ws3R8BgZ6KZVS9mLE",
  "key6": "3jd4nhpqn8dB2CpdWdyx176jvmNgDzArzUjwWZrKKAjZ13hMVgcY3gcz7a1g5LnSZKF1rnRK3zVX7vwLomuVUqo1",
  "key7": "3vWghqiQWcG84hN7gvBP7fqkzvzJsY88q9jKC3D8DgXpKuTAaLxWXeFfyGbrANd4b5ajDbTMDcnht5mr7nqU83BE",
  "key8": "3XUi4CxzGNUHGbPeKGxWo9nBHZGLKZMrVt6cnPMdSuQbdZzVeURPxyk3LSBVQVBDQBgATSid2qoLTVbzfdpC3vsL",
  "key9": "4MLUnAk3a62Fw6P8K7nSFoHdRyNaWZRkEZHw4tcuob2zzZHG7Hkb2aH7YxQphx297zepEr7CVRJKnWZ5gRGB3LaC",
  "key10": "3rRRS4p2VfvakEQcW7MyjCehskRwjzDRQgWAi3ccGzkUAjgC5UuKvU4FCMaGLvPQhgvZLdjTK8cB9FeyGKSJcFUi",
  "key11": "uB2UagyYw2MSSyPb9MJm2e6CcqJLr5rTNmYWdv75cKtEs4LCV5qa7FUM4uJdkdApJpkZhLeTdhpwFphc4juQNYr",
  "key12": "2NoofVzxA2XRSCh9YjPQcXdojRKvQcXqX5nb5MExr3Wih5s6Xos7Jqsb665D75Ggab2CLTx61T93RYdTBG7FodnS",
  "key13": "5LMJ9TQpvm2iUzx4eZqBFfk1mKYXunpq3NhutpnZk9MSL9N4avfgPmzcqvMzGvCFcZSir5PcfzUcgeJskyNS7yYB",
  "key14": "5a1WwfNbq8mYaEePYF2a5EgN66sp6APAFK5meMzvoaKvqkJAFPdXv9ofk4yaRtdphPKXGSUpo3EkDTutXEu9HDrH",
  "key15": "eaZzVVpTwY1Met3DsVyCYfmdXSmo8861Srr54GAeHZNzxheYVYQLyCX8ULTwH7Zs4dxqKgHZdcxyqhMsdfdNxRN",
  "key16": "5FyimyDWSsTuHPhuXcbJxiNqKKhQZgruAAbDDg8ggGGfmzby2QauiuehY9Yw9RFaRsroUByVQaRPmSSQ5jPEKUTh",
  "key17": "ewT1RkkM5X7be5ua7srCgRLJX3ZiY173yV48LtwkoPB4fJodDzrejBFnHFdr4Qk7mFQZEQe6EWt8uBQxgCQYixv",
  "key18": "5bWdV2vUaMJAZ2uHvrNz5NhxdAFKNtGsTqtcDGRLBrwqfVGBffZeAA9zvN8rZWDEdprFmyoE976Ghq8efKhsAe8J",
  "key19": "35hXgQRQXieAP7kRzKdQniKTk2imX6ToAGebb33X8CVotWzgMu2hurxpDYJF4m89svThSWtgkaWp4jozocqtZyJ6",
  "key20": "4Pog27vdnit6aj28AamGsmzM3kMthYtjmajqhX8fPNxuutKyEQL4f7jbB5eWC1wc4kBeZDpoaUxutNszWfVuYULT",
  "key21": "54BHvK2HgdRah1wBgtRHLHXkfzB3KSBCrqf5rFC5i3wuZkcCkkesSQ9ExHkBwQo9Xy5wvfNdXKoDtBmk3vjnDR6k",
  "key22": "5qf4kJUR74uT7knsZkmd8qUTTv6GVdUZ86fnQBUpdEoDDnZcxNXw2h3fku8vJ8ecVXL9Lvrw8Lov6QEh2bYYwbe5",
  "key23": "3HLGPv4ehyZktE2D6BtxLnaE4YArtYzQoVUiLXfPYenxn9wsspekJ9TZATgcN1pjejKwod7nAFG1yoArSC8AXmiw",
  "key24": "22Fz3WQfnkhCCeMX1F1ZKVd8awnFS79CSLi9kS9y89maT9eveWiXuMcKRcqzLH9s2SNTFwBGsgFEokzdPU5ZocZs",
  "key25": "48W34G5vjZ9u8wfPspE8VTsCTev2ZLgXStNWDNtRUvF6NGMYe4BMWe28dcJh5jekSoQdbrie7xuoyGuXyFMq5uHj",
  "key26": "viudHxp5iUhgZCdsqttojjU9pnsNXBdJo8GeccRaKhfGABVcLPtTGeU4Ade3UubNaiXpBmkdsXNQh8H87dDKyPJ",
  "key27": "cr6eFwHsBV5hN8iXew6dtBjHGaEqJ5fFTHoQcnFg3MzUWYgYrRKTD8aqTvBL23FSVSsBAw9WsUacoXALoyhfT7e",
  "key28": "4jEAFeYAybTwyjs1aeh7tafwv1hX12qUmH15xHUonsaJ4KdyuSFGE6iY54YT4yb4TW4tEK9PJ5KhmkhMEFyeDf7n",
  "key29": "4vcXXeemcEhKfXmFusGemNQjdiN13zzA5FPcsuWD3wBSYNpqcMQG23b7YWAo5JvKc5wxjbqqXe9yURjx2apCuN8q",
  "key30": "4mBbpsLnsYDkEG9wj7VwqY9ydTauU9yDLFgYwRoFuni7Z1W7P5tDCfKU5gQbVZmm91tE6uJHPmn8hG29Bj9UFT6Q",
  "key31": "3rQoAQHGhQPuGXHv6Fwdu95LM9zmRkeGwF6ZRhFrEiwuNzr3UZkYZHHPh62Yh5biNtc8R9VPcin3LKuLAUQTj64j",
  "key32": "2ZbUWg2nYaJB2mjNkuVNpoqAtgftx5Nak3jyB2xyctt4ERrCHuR1dzHMbN8qr7Q8QUCiFjcS57RRH3RN1R5VkJaQ",
  "key33": "4ZaErvnHLVtq9uCo2agW2e3Kp54pMPdVqiAMv53AdwVw8gKeyk8VxrQ73uBvpTcbUTJCThubXSajcnRfX4PLePQk",
  "key34": "2dVB9Zb1B3Rax1tw3bVtWQjmEWfJPZVmjwVALvLwUpMnNF8y8g31wbDgbsg5oKmf5EnAhkZ2hRtKSCX99vinaN8S",
  "key35": "23PLgnEt5ijWm5CeA9Dd2GYTYQRvngML6uNUuYPt4oyWfozr9zfYpbxeGaNbWFQ9gMwjg5zmV6wdGRuvgTNSWcj4",
  "key36": "66b9oi6vE1hAnj7ATLwCv6yCRejnmRWm1vPMmFpidHeZuE374uueTzHU8bedV7UVjxK6AfEgVunZdAw1fdCZGZTx",
  "key37": "YekyTiLyjFxUePAECkukLqLB5r4qnQtocC8iffQqyjM23QKnfLxupMCcohgEZ69HJnHdAfXftgzLnLgB1P1xEde",
  "key38": "36ThHdiLsa3K2364uXQARWFLRpW69fhgHpVb84FLCfTZiazhx4X3oYfgZrV6BSLjpSkQgGFDBGe6N2VpttQeDPqD",
  "key39": "tPwD1AD2vv78dobgjJKj5vXRDvbnwmbqpumcpGoM4cNYzU3hiNMz1dY1Kco4RLh46gxNBQdauPoTwY9Hzq8c8eZ",
  "key40": "2XQzEtvGieCt6XMep7XLnLyK92JMQBzd3q3mUEFYCdspgXtQUnFqusMRfTuRdmzXKo4cqhNCoZ8ix7jJqYW4LWoR",
  "key41": "2aV4zbtdwKgPux4s9g3uGbnZu9cbqwrvzpwVSU9LAd1k2QpHZt7vntDAAsdDoD3KnCC5c7GeoQZJRN8Qy52Wp19j",
  "key42": "5Qc9mBTdVqEq6Qsr3DW2iZcngAbxYUfzMYoZbTbUpvYe17JoWtrfSh9MgiKPgTU9LtbdBfr1SnTnk7eC2zwh5iSQ",
  "key43": "2W1C1SLm7x6p6y7FqfAZfJha3essfzwj4ddinzMH5ysnFdsSjgHPkBJ3sz9kqtRLxuKXc9UXuAnHrC2uoqjfe83Q",
  "key44": "5JDjEqua6B3TkQDYQamL2FiyujfmsxaWHGLV5pV2C1gWixxheB8W316533sr7NoieekCHssE5G3WcomtVbXbtPgP",
  "key45": "3ujtN6eorCb7dqGtEamuz44LQtqsyHU12b7towGMGQBwTSSyPdo32MWLhNjpYM4CvNm4MiQvmzoabyEDDs12sb3U",
  "key46": "31bZSrQuVJjsQuVazrPGEjuXTvDgjjp7Jj9iJMVERqJqY6myNwrLWezcx9onxaH8qwopUyo7HkX5HpVx5DEgod3S"
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
