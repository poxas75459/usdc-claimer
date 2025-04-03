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
    "4TyYXXf4WrfaNpSTXZJ5NRzWAG7PThkaEFvMZs62sL7Dgie8VKk79HhQkP4ZixE1r4WhGX4NNwtEepZJXMnWXBBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGsED4C4mHiRuQbxAc74cGLTUtbtsk1NsGH5QgA5hUVTSQZFKtjrYM3QXNynMbBjq1eCjJn642xiy8PkGnYoVja",
  "key1": "4ApzCeN3k9N1h2Z9qptXHofyvBR4QxT3ALzGGn8duTjiRrfAgGGd21qGLDnSLPwEZWD4bdoNpcQLQ2K9vw2ZCBcC",
  "key2": "47awbQ5W2aPTEPnTBoUfr6Eff3MHo5oo59NwYR7UG7Ku9f4LPXFbMQAbonSGaz7PzTicvpynsmSCHtu8kpKbMzXJ",
  "key3": "3JTC2SiZK2a5L4ooAHFK2kv3ikd9ZpxNVuCMZwMY6EsoWsqNqCLLPe8p7d2mYKcYXLweJGJ9UCznEZNUATiNbcXs",
  "key4": "4YY1oWDvKG6z5YfFXQCQkDnE6XPmRmkQTcTf9GyTcmoXf6vs5ub8TYBbCGJBfXqogEbbp6X2a34LKjtpxSwRyPbf",
  "key5": "4GfPgPGGTGqC4mGY5aExoN9sYkeqCkGghCY9QEDsJCRxFQwrA6hreJ2FH5UB1svaYA7sEixrSzKJTcyvHeWqbAf5",
  "key6": "Di4wSaRzebufms75m1w4xns4dq8qHG62NxQUAva5iguXcem3RFsNyrvW5MxsiioTX1kpuhvigSfDfL5rdohj1QZ",
  "key7": "2FbaP92dRy4xzo3aqY8fEALKcT4bEJcw9ajYZWTyMWHyrkwNB2bPNgqFjJraEJFq4dwz3kwTRQwZL4PXCvuMX1bh",
  "key8": "5hWVeEQXcpyfNF9uApiuyH8wsb4aW4gZvArFLpygJcNjp4RTDcM2wwiQkmGsSZp8qwJDm2WjF8FDbs3gZKdfm342",
  "key9": "2TJRm56AbvHvVCMqtkKR66hRtVgfc36w7vGjCHX9vsc7fMkcmesgxFrbvNjq2yT6byoYS6c6isNLGVEjXYsiW4DJ",
  "key10": "ehpsBgqX9X2gAwJPgVB2otouJkyY1224LsFrQzjnoAQfx13F8AuWFxfUCJLU3DL4GbuaFafHKqWH856obaa3cC6",
  "key11": "5xAAE8YtD8P5Lqrvz3HwehLg1PAqVNTPJTTa3u8ftcakSUiHz4NZ4uswPTtKCp74i6rxGicrLRuPAq7Pk7MEdYEV",
  "key12": "3ew8fb6hguuxN6xeNJyJepLDw8YU7ZnKTPCKhdd52Nox9tpAQHiT2sytLjssGssW4DBqJnPRcN9ssAEZTYPtFuV7",
  "key13": "2eLfHJe5tTQN6AMS5bp1KJH6q9nbxg39r7pTgqYQ2YjK5TSuNw2V46KAijYPConsJm2QXBFVL8yxYGvwJHi2FKv2",
  "key14": "eEXyeiKeRPiCLcdwMkXGJ4yRGF1fuzVKZCnnj2AXhgQZMHXWCN9C8W7zCGbRhsB34Z9T1uePKck8psbvVX4UDFg",
  "key15": "5E5aa3KGj6D2EfUgzEK2gctF7ukhoDy3wo3BP3NxHBNz5zLpK63XHmcqUqK6kYsN9u6HdMSbuNhqETBDMztiR8ZU",
  "key16": "4iVxgxtsDjF63EGeZkBHfMTcBFdHXT9MVRbf8wSG7TVXNd4SVMNXakWyNyKMtoAbPPC8orZAWTjPUS6b26NqB6zd",
  "key17": "3RuSdmLvKXQAnLMBPmrZHzMeGZx4gTft7QGf1dAneTatq8eCoSYxDpyxzfqzhCQPbmTVGPi5KStyorBFZFG4BTuW",
  "key18": "61yYaojUbx989oqfGx8srDd4MmjrTjpVgYqg3npkr3WcmzrCKWmsbAikQqEQ3AeGPKfxEYLW5L4GLssdcpioGwPY",
  "key19": "5MbNRbn6urfyP6g1aS4e8KC64RRx4LASZHeVxTzSqGAgkZ1W9GoJbtd1R9eQZtezJbsKB1J3NP8eP72nbz6AWpX4",
  "key20": "3dhED4EVyXSKGXWpN5qaXfMH5uMbDmqpkDoCSB51E1GHTmn6wpRr6gEHzaXjAyJA2hXPkKssQdVfbwTRbK5t7xdA",
  "key21": "5eceLsLZxRRD7XHRw5f458tsZGLq8j8Pi1vqnWYJPzEk9oWeWUXwTmtmgLTmUF8SUUwqVpLQiAZefF9VuCz1Ft1P",
  "key22": "wYZEahFnaBoftDjhKE4Lgu6hXDyaKmwoL87WXKDX2FKLvvNCMPevPUyrDTju6uXJTgFMMBEuyieWDPY15icpsWu",
  "key23": "KaaZtoV2hXexTpjBzEGBZDdfnUALyKXaQmrvsGUiVNaD6mFvLCsKr5LT6o9XC22YaSJg1rjq6sK19gwDroVUbvb",
  "key24": "VjRup6mZGmnP5eNqCBjXjNdU5X4x6HmgNs62UE8jh9h44zmzRzxj64QxdPZj8V2DjhBSBB2CAyYgZsXttsB4hBF",
  "key25": "57sokosLreydXGM63XW7wyjyKGFnWSqEoTrwUqPn6hTZ1FjFY2buCcoxJXigk8pKbGXRxHTHFRKZYEFAr5zavoHL",
  "key26": "34Q356s8QNvSnEpnPZP3fYtHGAaM3R8VkfoVyRPZMdgr861ZapkM5KqdbkGQgEg4Y1HKNW25MhLN7dtpJyn35DAu",
  "key27": "5sHnjSmvw5q2Duuxra8BEPk9NfPfyfa87gYzzZ4SoQPviXtWtV5yLLZgB24Uz2U4as6hLsHkWktXdE9AveBiyhsW",
  "key28": "2Agmon1K7zXmvvUkx9iAoJLAA2gctQz2Yt4ksHDkAriMWHteK4ioDkMpucKfyauTqZkXkuTWsfcEjzZB3i3UvWe8",
  "key29": "15pXjy1EydF7BQCpqKCpBFuGo3nC7UAcioz6YQRFXHKEuEhSFhRHmxYX3S2kc77d3tFagsbsLDTxR8xSum1KEPA",
  "key30": "x2BabyJBDYyw3xeNdRHrKq4m19qDTcjL2cJ25YmEZ5tXxie9U6EHUUMhMstXbGcP7Wqx5BY9mfHUarMat2Ctxrr",
  "key31": "5a77MpyxpGYoGGBGKp4VnEEYkPQinwGrwUEKeWvbsXm8oao4oKFWEHZbg8eFY2C1fimdCkE96fWQ4maSv5bDP3KV",
  "key32": "21REaFyS1jn8gmv3xAHtPQNQR4h2hXGgrjgxpYbHDUoMA94v42Es1uXb15M9zCAcUm517UZ3wDzqgCY44PtDTF4a",
  "key33": "5qbb9oW3Kn54veELFpRXjVjWUUJwPJmLTz5NzmocrCyFYCsB8Q4eXQ2mMYXMPULMiUgyvT3cwAyZ8QinJYaU4PKW",
  "key34": "47KGrDWGEXtNdUMYLV5BiC78Cdxp7gmy6vcEnD9A5W1K2CWo4wRwCfYG15PTGu4yEfN7PvFYC8UtuWRKvZXqVyUB",
  "key35": "27iQG4s2dngzmHCD4bt9mF6b3H3mRVgmJxRR4fF5hdFN2rWnj5QDsXp1DXAgPbcaLCq4qXvdaymgUCXzkUw5dGGY",
  "key36": "45DtvLLM5n3VAKe1dQJFuhK6rmiXubtBLfPFMBf8WAXkbDj1kEJvMqWUpEfErCqUjYMEussYFBeEwtHLKmLv7a8E",
  "key37": "5ubGKfcQw8vweh125W5RCXVJmFMEFqEaicDpiX9FN6Es4TqfNZuVQJrVnT16h9Jq97LN5a3ZRbyeB73rekgJMwPQ"
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
