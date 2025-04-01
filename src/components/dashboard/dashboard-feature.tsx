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
    "5gM8NK83XWouL1wtW31U1vvdGoN2KhpeW9iKGfUZ5UzWnuvHC1XkDaDx6RvZ6ZUAL7E4hDz5Dee7pXsbZqwfvcpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bt5JvnXAQYmQtUU8YkZmPAjepeL7rnJpbXyi8UEFZm7TZaWXPHqcMnQPazapyhv76vKyQ21fEMJ79Ww2VyVJtRg",
  "key1": "3A3JpnUtBUo42QxzPoVRMKNAkfdK3Gjk2ZxuKBWoX8hgTfc3js1wZ73wHHokL9KnbMUjjWMh6kBpAKEqARcdpAvY",
  "key2": "2kfAPcrThTgzxfuftGbf9Jmk85aFhdNqjfZnh7hrER88ZFRPwP6G548JWvZjXZ8QDspMWfAfEoXxs5T6zrGiXAAk",
  "key3": "5bxkVMZAfFdeHR9h1Qvw4AhYGwQFWnyc9aV2WDhABV3NAmpT6GyVrKVwy9BZVSV72KUdroGgc6bpNu91eEgp9DNJ",
  "key4": "4RuhLZEkNtZjCELjN1dQ8TbnaodF37nJeaJfptLcvRnqJnRpLMQBkvL616wbrffebwMGihJC7oTdomFrSFiVqBNF",
  "key5": "2yYHNiFVb9fXV9zWm5vwu5RW3UjkNsJH38nbziVcUbD61hD5cKC3gXhBMPjfS8P2ubYhRGxvtVJGZdES1vcW6wRK",
  "key6": "25n5wse8vbSuS37JBzZE25FvTnEjjtSRo6SzwPnDDdDmWYFK6gKUMU5uqvJ2KiPbefGq1iu96VhAPymj8oqgAN1P",
  "key7": "5sJk11hKNZznAYPfhuGLYFjw952AuFyS4UvinWt7gYqHMSKnwrxAVH4YCUWH6U8wTwUGUoeiAyybrS7hAnHNozoS",
  "key8": "28kGed19CTbPnWp9aqvN3C4tBKNJ2SHKGgekWCMk4C9Lhy7QozdVDZabrC8e7sfJiK1uoMSagTwwJxXDZSzN8DzT",
  "key9": "3y2bMafcMPwu3L86FgzaV2BLQb4w1S9iwGXLjcNSYuL8pnS8VJfXwgqnL7CVTTGLcFNveFbXxANXgw4woTxMbwBP",
  "key10": "4B1Ut2kVKULe9i6mETLffhchfzWh8f3K61nXBpVJCzFrhFBd3qZM4pp3qGWkPLUCsFLo5hDWBQ6SELFfgz2vkv2n",
  "key11": "3wArKH9E3dZ3LYuuD59XZwgwbXyL9pn9CkCkBg7T1JNZ6VVeJje9u5JLXXtppJVsWMv4cCdSersnudSmJYNgiy4q",
  "key12": "CizgLoVq4jhjUjn7CwQyPqfwH8RSx8Y1jajwhrsqxxHxjnHDzKpN4TYx8eHRX2JG1osox95XY8VRMBq6bhwPFsA",
  "key13": "31RBfQkSC535kayLiRZhsPJtApB7a86A6E44U4L7UEJfAFhYvpSoAs5MeZQPqRSnMfshSFZA5FdSGAf5PF6moJAf",
  "key14": "3hGYpVwxHtRgkucGMjSGx16TAtkwwtofRFaDqcLxVYA3ouQkzj7s6XsLhXGMKf9bVwNd73Zpt8aGVV44vBrtjpjy",
  "key15": "4q4SaehB71C7dhG8WndWX2SZ9X7SwCBmiVnZaZtcCTW3yD33SjB6BVN1EepFomosJ6vhxt8GbjFZxDQ2nySa76CW",
  "key16": "9PGxtixoy9qkcG1ptA8KiTSMcw2xRruw5nmtLACuDLefK7j2zrUiJpC4YMCHGiWDNNRakuiJUdbdFhvynqKLKqF",
  "key17": "3FyXgdAf6P6mM9rrB6EaxqE6PT31BhzMJhjVtAXAxmMkmLetu9cdugDo5HzCLLn9Vhj4EUXvxDScGvq8e1sbtUtC",
  "key18": "YzdEdNYqcTA79J5KA1ugAFEZC7RgXEKtvZLZjg3kJhaZCkuXrU3bvYoez1vAg7Cvgv64SAxky1eqPzoQs7AJEVH",
  "key19": "4oNLajY6b57jGLNwLmd9sAJxkoaxYXvQ9brdpcMG2kidFAvc3xHVCwXafTmXg7zKrWdKqUR7TmmgeUr4WJbS5iYd",
  "key20": "4PgyZNwFsUj8cM123jCkY4wndERvqGGy2VGCEYNrPmudPg92NEqd8Sjquav4aJ2oX4QF8TpnPdGjNhVYebwm1XcM",
  "key21": "2wM46Ac2i4GgkPHreMnpjk9f4geVo8hFZ7GcUK3TuoYz55eTmJbCcUgyUYts49XgAhn9XkgGXWCtBRooo965mo81",
  "key22": "3eBC2aviquWZWN7KYmGFDatvthbnxTz1ZJS9oJw8WjCGo1uqvdCqvm6g25SckUnBcQXavoUYKJk18CETRiGAi169",
  "key23": "3sdzaCnQbME2n2Y79BWvrEtT2R736wsdobkpi4tAku7RP3XgEf1RVUvdnZPETgBxcVHtycbHhHB6eBW1EuXxeS1S",
  "key24": "3rCATQd6UiWVrXsocSkW6sFR6Ts6bdib8H1LnDSxDQFdKxwdPakgHZVHPoAPQm8xE76ZMyBwHMxggJq31iobfHrY",
  "key25": "4KsuhVyZsUuUnwZjbHs8J1czcW4GNHpCYv3242AJ8EMQFx4exjvLew6kQnuXVZYc1YwyhGkbnPzQExZzAzugnsWy",
  "key26": "652EEUHGRuahRYJroNBAZCbAcK6j3zgmbM5Lh6gwNf21t9Rg3dUb1H1xckg3HZJtNkG283oZr7VUhV9NdB4geuD4",
  "key27": "BqwGshaJRdEXbyRw5ZckRS2t4F4kufjcEgSLt5h31Bxs1gi6SwSXrsjg2Wsn6HJKGeku4FvVFhGD4Z9VhUUwWqx",
  "key28": "4Z2tQSos5z3Mj55aoZVnvhGUhvU2acCEhz2F1JFUxKw65N7Sz5v1Fer8zgZZ4HBZFJX86QpJQnAT2FxUP4d5H37g",
  "key29": "3VzJxAviwNktkYhLqxEZAP1Q4siUpWNgDbAamagUZq7294H9fPPeUvatSkAHt7azDgpxSAHXtXQLujqD1xYz2tk9",
  "key30": "4YG3o9LtkZVKFErCsJNJjzBbHpKNgHo764NFR45obaG7icdyNTZwEsfixQ1GqfuqGKHBQetTiJL2qc7Cy9ok4yWP",
  "key31": "5ckr5grfYF2W5gddSi6qEx2bnzLRQiTpkjweggkZZUgSQnhChdAoNzNZJGx6RdJDjnz2QimmyaGSjjLr4kQiPfSy",
  "key32": "2wDcwPzcCgNtK7HpTeBLYu9gooFE9cmR12VydSoQrjp1BW1XUnkw1Wiz21Mt1LXB4RTVqLA8qyzqLt1idhiBeNg3",
  "key33": "2YZdYFPVWhS4vKXuoVHTobhsv3Xnh7G2PVyCgwZu8hQcpabppwPjoC6Y6PRrQHaFKPXFCfYuc3DCFZEnYF1u1qwe",
  "key34": "3fXwSdDqjXcSyAyHuNmgCSo1Kz9kubnP3GNV1k7Ee5rjJBuWKYr6nBqzMVujKkc6VRNyifQ4U1Tc4LUtuMZHt8Zj",
  "key35": "5ywECiBqXfoERGWnMvsyiu8U5ma7XWPxp7Vj88aKPW6pZkcZvkTtKHUphP5DxoaxQKFgojNiBjbWmtxWnL2JtWjj",
  "key36": "5gRd7gD5DHQt7zY4so3wHFog5buK53vpQLJyLwEnZmFntSsyTC25sn2z9xsyuhC4vvgWP5GaivRsNkmswGDoycpG",
  "key37": "4WSvt1TjQfoTurkCKZrpmYWzv4zhrYEKdCPq27MRYGcMoRA49QRi4h5zVxtc3fMynumsKzqkxUxqieGkDE1Rj9YK",
  "key38": "67oJdqWdwniHZGHHA4aLV36yCZAqVkwejU85vRDTUcxt5oHp3LQxAAbUpc55hy2irBQAbFCsGTa7cxi7rzPwVY5C",
  "key39": "2U7powdc1cC8hgJiggGXJMZoAnPkkNRr9DBmMFd4wWdNrDzXcgq3TXKS8otaBasfS8fmJiMRHe8HP7pRoBTD8Wqd",
  "key40": "3Gu5piYa86Sz9iDhZHwsGbwcRHfqE6SirUAeccWegNcp8n7GvFkzX7d3n6SJHJusmdLQ6LXsNXpenj2DTCSmDwyz",
  "key41": "3YemZBn3URwzGzzLYDwTq6NqeUsW1U5kqrRvxG5y76tAPrSN31b6zDtMBbDCy9qwHkdrWcfNihTnQeAey3p3iEdF",
  "key42": "3wj1F7WaRf6KRgp6oBzy8wTGfpbcMSs4aRdBwfcJyFw26ui3SxWsGP4SRQ5TKPuLXBAi1skUxtUWb2DKgWYXq68L",
  "key43": "2ftgdrcR3Qpj9uzFdzMMWvrfvVJP2qrcYH43fyUSuQLPZ9XB8eih9NRmnuwUAcuMJtJqKQKuTuxskBXPTy2rYZx8",
  "key44": "3Muk6xvBtCTbsp7wz6Gqeyik8U5CTVQ1E2DXmSFtyQiwfXHG6QAd4hi98tM4v5KjjoJBzAm2CF92KFAoDR55vmZW",
  "key45": "ZYDi1NEaYLfjkabDikuGQ8NQkeAv1VioVVj3rcphoQDi4Swkoy1tDU59f1yvHiyHPwKjHTwGY9AYNkeAiLjY37j",
  "key46": "4unm6rMURMGefjvyVPc1LZzGwpEp58BzQ81ocKTMo9tcKQcRidzqUKEGfS4Yo7ySpLBCcums2cCvCQUimDkxr6nw",
  "key47": "4WNAU4n5AN6Jw1xxna6ZLjgy8uhjd5MDAMmeeeCWyViszyZ3fx3SwbKru8PygR3rNF1tcUKYN2uPDJSvok6p5SoY",
  "key48": "4NsiGqsf3SGBVbpBFTNoUZQtkY78U4wJsU3nkyFZkHB8ue2ieVvs3VNh34hx4v8DhFkg6e1CLCq7T2ynXe8Rx7H8",
  "key49": "5FJ5mPVSFAN1ug3naD6ZH1NK2FdZdp34qQUW9un1aQzWbNi5Xr7nhnJbosgTyJf8QcjnW1e1BU4FuGAHBzNp936S"
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
