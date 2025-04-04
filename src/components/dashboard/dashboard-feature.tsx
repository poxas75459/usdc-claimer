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
    "2sPUfLiBaVKjhVMHsEV5XPTbRA2aZYbtQEiHjCEPJqKC5eoUAdcHKgGjgoyEX7r95aY8sCfzUFPaanxMcc7GRYaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nAsWv5FVoKTphQ9muXuuvTVn5RgS2KJMqSbhsreAsn2nRYo2DoG1zuxURqjXaXSmRpWMjDVBiGt5a4M2mXRYLQ",
  "key1": "4KhLjianV3X4AHuRkYFyQfFmYEiQteR6tBLGqEhgnRBQTkFnRMJ5wcGQVkJwM6Bxu35otWm18zuJQCjtg6ah7Wni",
  "key2": "32VJUqbJAezggmAcJ7U6wnX5ozbTGhio5yXEwjAa8E4oYnSwAzmyGZBCKZUAfjfMSwpYnUq8UTq8EpqivC4krc7B",
  "key3": "3ytUdfe1NkMDFnEmw2vodiuG7PRgV4ewg3ZvE64Zmo77k9RFbmy7TJwhBNKrzeN4yCHXDNTX7kFEfcRMnr5nJViu",
  "key4": "gcg4wvgfd31s19tELWQeyzXJrvZpwKsnQ5D4j9ijn1ryueAjRRELWb6bE9KUGgiLPSHNmkqtxGAcymrUGVvbWsF",
  "key5": "2HsVsXg8NccMb1MzUHZSvTpprAEwvcTyCnDiugknF89KcTrZ1BdUXta5AGTuW9MbJXDvx7GLH9qYDzRc4oZmiYb3",
  "key6": "54g1pYbAta6qLXJxXGKxWD5AEsQ94T7DkshoRQmfP15WNtgmioQUKTD9LcBSFFurjQrcqsKowL98Wm9FpJDgNTiw",
  "key7": "4Xc2svjCH9T7e2eF4wS1JiZNZiYY1FabYAZtn6nYMGf9yA45iCBjVtHhZQ5kVyoEs9cUfskL1dXEarP5iJbKRbqN",
  "key8": "U4uB4npUqXP4Ep8SVZGrfx37ZRc5TwCpjCm9vWKFQwqiEZsfX4G2SrSe2HBDDujVWAYXNqrkCV4GFfu6jvjvTMK",
  "key9": "t1a1XYECwTrdmZnMC8R7FrewVMpUnikSJM8LoeGhTvXC8MyXhL4QsEFVC4zTrZstJJ6T3RSjkJ2bWQuRZxnZuNP",
  "key10": "SFN169GHEPWmnaCKgqniCv3gKY8wxxRk9hPwLX6qr8s2eQkiuTqPtZfCPkKsB8PGk3shSxexapiDSjV5bfUaYUb",
  "key11": "5R8coUWvaY1AVAr4hM7kkSDa2CQBkDoBHoerDGLxg94KLn6MJpgzLrRLMXhgLpZmh9X23gYk6SFxD9BPM5UuSb6y",
  "key12": "ouAme86ko2pp2h14p787BTvpEBEegfp964QwQKQmg5w1BJutbEnzTz5VAwbGu3Sxkg9FkQJmbvSkJw8s6SCGGMB",
  "key13": "3jV8WWhUp6nT6McV878fDfwKWox4NhPnYMriXk9RRtFEx6Dds4PVhFhSUgVWAu8UbZRLNWXGhbcyYdmDrHnoi79f",
  "key14": "3mKfmFsNEyRkwZbYGT4b6pE7nenEmZA4r8ZidezXDdCg2HrWFdaLoL4hK687xnCneLguD2fQxtChQM4bsGF22GEK",
  "key15": "36TrrQxZAxprdPbzH4sjk4yQR8mteimBWfN9mhLcopESqaaBwym77567KwqXMPrfqbqDUHHkBkLBKo9NXPr9zhop",
  "key16": "Fb9wqj7uA8aAyVrNKgcwQbKkLCby4KcRdSyhkdewhUeA5aQc9LFbZDMwskmRL3bakEkBT4HSX9B1vb7Lfo7Ywxy",
  "key17": "5EnoHBPX3zgL4wQQommnfD6RHL2FTjAZh1GSiaWJvYUeHv9bqi5689ZqSsBnh9SCDTSJ1xCTUFpVjRXo8qjC1TSG",
  "key18": "yQ9L7MW4rftSi8W6b2Ek9fL3AhptNMRSk8EL9g66PnW3ojypJipawP5WPiGseYcGf975MGNEfRLmjDWq25AYWZR",
  "key19": "5idmtHx53Wrh4cr4Q4bThJnBTohiEU2LBNmF5agtAh6RNkEaYKcmDdQmtu3zu4kXSRbi6cvQU1eQsnqLKfAY4vg3",
  "key20": "UDJodCZ97vxHxZpX1WqhgCRBiuQH7EWpBt132aWr8jBa67R5rmVP3acAyhsHA8H1UPVPdyR6qK9iSf8nSVDnzUp",
  "key21": "5HFcCrGgz8K5ZgrNXNtvdDQHLyfwbaQTQVY1qoYcBZbwNKYx8eJSLztTBe7T7t8Hb3vMFbkoNs3Ekw3nPN6yNGnn",
  "key22": "5JH84uwyRmKvnMKSViCQVMPHKfb1x2JYAKgF44SJLQ3iYXdtR5XbDsRQ6QVtw9BrjeqfqkqK8AyZTUezRpnbgqBR",
  "key23": "21dZUfRG57JkXg3b2fPcjXuBndY915VNSxFAPF91tz8YAZk9vTyvFMGt9JYEtmtRQ6mDZMTekwnbeRMY2cJoVmNC",
  "key24": "4t7XUwKLb4jv9nugWdsY6vZnQwgd957mEqgtMWdpSWSza2R6n9YaGpFQFS37tMeaohPbk2sDLR4Crc3kBeL1Kj3f",
  "key25": "9dL3RJjoroqQEHCJw347DdZmxR6vso5N96rpAvnqCrCekW4enJQzZWWQvqKV9R8vafcVyhTajmA3exahqeNezDx",
  "key26": "2F9fctEtXwKxoisH9xWLpfqSL4afz6sTqP1NQMp8P7hQTCfUQggbTs9Z6JXiFnh7tXfeXKjTik4hPeygKxha41xx",
  "key27": "3FWhiJUsqjSLyuy7pTZRzV9d9rA545uPwL2cAyN7wNSz3mp5kHZzDEiE9JQDwK3QnKWN4QQoxXkvXnB3kWpr6Dh",
  "key28": "3fYbsPkCcv4JxMbcuddZ87PUXnRQ2nEKiXN9AEeaqmKqsB757FZc8XKp4Y9zKYd5qa4cTBwAvzxwgdwwZHzGpZBm",
  "key29": "4yqYC5wMGdb4Te3dvAmqxNpdeFrZ4rckSMR2QNTDzq9n4C6FtuKXnioFwsKpk3oMYqwR37Q5Cnu1cbXw6uN9p6B",
  "key30": "2YeEWD7mjw5Rh4KrgckY5VW2AT65tnMbHQcSgLj6m25QkqCRUh7ZDEAK8hrfUHb7iQY28brs4zSzcy7sZRfTPGLo",
  "key31": "BuEnLjVkBoAhuGn5SucbLyFkD9gveopRGJFLNJLjXFpYYwknQmqJMdtunyWsChUWbvWCshahVKBdgWd7K7JjD9z",
  "key32": "3mpenJcvvHRn8ahgEZoCRTRMKSSu1QMH6LvMuJt56XpDRnqzJzA5mZ8YemkCTuDhZVfuFio5CxJkAXMw7VXWVhMk",
  "key33": "3xV6xvis43Kdz9bcCCZX2hUpjKZbEaSLNTtzF3XWjBS1w8Lf9t5hACJtDq9ZbxsABMii5nvtjmMHWbhFCyuNJh1x",
  "key34": "yrY5EKtawN9E8V5NujgyWCBz5VThZk3aigfvLavCBM6mpmAcHzfqwBeSttMirr9EfKY8bsxQ7BmEb6794boNSGC",
  "key35": "5mk1Skbm9tat5iuGaaJojeUJLitbsV1ms5hVKdqUVxh6rzwMsBhAv2j8vUzrD2iyG3QG6YgmwvVVDA6pZ3ZgEkzJ",
  "key36": "2vqCkELYzu8apxWo8wtaykmsCxhZnZ4ek3RH7yhzEunZN4HcdKfoB5eqc1sQqwH5QhFaCoy81G2n1BhCev6j6AtN",
  "key37": "4sswzotZyrBXBxxHYARgPLx2ZtzfBCMoopeuvu7VBvSy1QubLSgZw6nmAE98DWmEb8YH6VJE87zBkf2rjkjiE3Xt",
  "key38": "3i7WWL9i4Egwz1aioQhBM8Ep5A2k84ZSzF78VURwcdfCRCiRhhQXgdtJKakTe7qe6fKjYjiqL6GktYSnwEPE5JXn",
  "key39": "sV1bBzRccJfhicrER6DQbo9ayGpDLYqjSuh1ieoo4ZvPVDJ56yEV2a8LZ8QEJv3qjzLxDurAPJjUhuzSFFUdGQo",
  "key40": "2PtVxWAxtB5RHp2rFwZDnd283e9fPxc4TYYdxCMnZKajw6xyXiL4R7CSvuPaDJvBz5U79ApXMzBCywcZffDk7UJe",
  "key41": "2jugE3MMX772U42v1pkR7LUriSqYMfb5Tse6LWpCHznBPDk6d5tjr4DEdncFLB4999Cb7MJxv5rdCpWuzMHmbF9M",
  "key42": "mDHxa3Ht6DHNVLAkLZPepDtNbe4JKEyqoYx3ZWqGis4ZKRhPbm4ZKPBMv2BWb7s5Gp67NHLYCyTQrN3HqufuXFy",
  "key43": "zBXymoGP3JNcmByys3J6n1AdTQKF1KTf1PTG5xjFLcECf5aBRt5hqr1DBcLJDCCBdvhv1TdwDtnUW2EuhAxPtHk",
  "key44": "3LU5RFRCegautHRfNypEQRVb8s4BircqA9f3D1mPXwJYRNeNU4Wrt8eAu39qRoAbua1Ajtqj4UwAqcJw9ZGAjMWC",
  "key45": "4yMTS6iXHRQTmHXX5bVmsJ5thUK3NoNAf7Pq8b6AXd1wBTGNxkNjBNBwahQ7LEv225JCbQMkCUKTEfmEq16XCj7n",
  "key46": "3HEbDMVAUzKP427gw7qyMcfLNc276mXJ791E7NEgohVZfNcdUhrKf5XcsgRZekBUq6YS79BfCp3KJePe565yfCVs",
  "key47": "2DKsMPfpApcVKDegLcMfuG9PpJfXc61hF1h5RpdGLVcyTKKdfTPFQH9utRg5yDcBKBW3875iHHuV6UgyXMAmNh46",
  "key48": "4qqkf6cAuYfvt9kfamt85YVA1ZdoMoEupUHRNAfbokp9FtVM4vBqx4QEzjZrtVgHZzSpmNyEtpoqEnwvbxasnFfo",
  "key49": "4BWkz4oRAxuC2CQeJU1gJj51qvV6zCLswhsiuT3EjFSmG2PFzPMBhgaDWcU6dWVUGjXM34djdP4oWLZjCnBU8s6G"
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
