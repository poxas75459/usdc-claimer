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
    "49woLZrfgumpXWUqf7C9nHREVw5Ce6AxAfXWuVg4q3H8p8UpELH6eQJbXfEQG123vT72DjYM4Pb3x7SYm7wDTWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rj99xSw9hgVbF1Ghta1VqUb7y4oob7pk6x9GbG3ytGgowpE7joq5ZkthRotYx9hBJYNN2zzrqWLnUFZ3eFfmeC6",
  "key1": "5LRfqYSk8N8frREvGTFpBVqmf3eFg3RCcfPTYGkzZQxVqQdqFgHxzqH8Jgoxbto4KfacVNmTJpPwbgJrCeRJixaK",
  "key2": "3c5ghtFAi114VNBoJbMawNFNc8bmGSmBqgkosziN9KeqVa2TeSGSXC7cycWx5Wp2JtqbHmUxwZVS5sYgx5UFoe4L",
  "key3": "2qadA5kXeHZhumhVSSvKqzjg7Hv7zdjv5whXWWxkRQB3YXA8VHGhRz6D5fiBQ1xVzH3MypRhgQsZ9WsXs2Q89PeQ",
  "key4": "2EKEevLyF257qN1h75jVrHfhV7Q19kNk1jbSVj8ysaEwGpQksbhZz792kJRtfGDU5kwmZ9EavjX9TdYDEYYdaq3r",
  "key5": "3uhZWvbGwRCRtn3s7xtawVAPviFTWfMTDNMNsSTxTVPuuuYXozZQoeCQcAYfyqH6aKa8eeSKBhdQoJoCugFcCFdo",
  "key6": "2ZFLRaN4woT7ZgVJ1KjGh9MTQ49B43pRDTxQ7EVQMS5fv2NiRurxGwU9gcHbn9GgMozWB1bRbGxTqaxiQ5qAmM25",
  "key7": "54MUt2f1jjhstDMPJAWMzmPkqMj1UoRjgF2QPdR9npaCDziEoXLxEyFn1TDiqG5jK4oFH9kPZgzVW1AiEsBWzsfd",
  "key8": "jLheuEzLMqTnoi8mzZyxWMshRPfTZCrvLpRKz8B5ri4poAqjKQaxkn9obpqNfqhsaxAFPQR4XTBkx7dWbRKTacR",
  "key9": "tKMgunDDTvtX1nRNDqTfGC4yiaXRvHSkN9vdMG5X7PSxkUyQ7V1uBisoaXApXoVgDFbchB6Qd1gsYNLwjsAx2KH",
  "key10": "37kVb7rrU3GeKUxEbRaMAvDrM8AymbQZkx2LdojkkDJwYQq3E6xxdTS5cPrk7UUEokDsPUUaQgtVfr9afmvkag1r",
  "key11": "43MgVMRJRSEtMVCx2j6QAWwPgA8wVFxayQFY6P7jwXnoKJvgMWZDSpoATQKEnGJdfuskWgg5B7fTkCfXYnWWVDL7",
  "key12": "57WygPtxvrFyEfvwUiY345ESXTX33MbndcUfrv4osBdiWUZqUo2TKL2hVTihJxfFk6SvxmWP9LpX4hirFTSpi7hd",
  "key13": "pdBTeji6vFSHch6LL3syLMLPGzyoaiAEyRpEHN6awRhq88VcDTGx81jSmzyXqJTxPsYvo2QDD2ReF546Dj1CK5A",
  "key14": "38eVpb3WU3vHGLPmxw1VmdWCgVp4u3NxCWXmmYGn2AboR7JskQZtjcjmeXRcFR7UWaYr4hi9sR41s8DuN3HYj92H",
  "key15": "UsGcAJMzkMSpR5fMHJG6r8X3fWMWnGoRq7p3JUb4BpsdXBQLXbpoYaWmcicJytJzRMmvTAnmJKhs7Xxe1c1PpfP",
  "key16": "4GoNDy1Xhh8yzStDuVkmNS2B8BPZEsdu5ykagj9WNSyUcARK84HJGUqjLo2JogsGTXaVFN2MiqboUXMqBKSf8kc1",
  "key17": "56EEu7Ez1Dy75UrUSMRN8PmqFFkq6422bmPnf2rGzRpVPyQtZBKGE8QZzX4Q3JWiJf6Z7FwYuRxwMa4VJkmF8Rav",
  "key18": "49Qp8yJcS7u46bK7BF3fB3FFzyVeppRDkjQgX2keZDA3CrfnD1dMLgvMvDVXdNX7fXGT7cDhbVMxbqCHqPSReJHX",
  "key19": "28g7R9fF1cExAo463f7YuL8SN2A54yJxUZRGp4TAm6sGF7p9stZey69tiwTtBfxrbazq78ZFHx49gjd6XtmZr7Ae",
  "key20": "3UNfwunqTPsGmPpWGQ8Dy9yXXFda92XPKjB5EHratoS7Qe2FeSFmxvsEXnxVr9eM7TYcDRKHADNMnb7VXuBn2upC",
  "key21": "2ke9R38fmC8nYi3RhCHMUcJXCb1H6whhPtBQjkJWJxiJAtPScwrHBcrtpK5ysAeDcA4riYhtN6AP2gnqi6iZxxTQ",
  "key22": "4xSn747k9VvmsQDY9socfg8UprCiD3UMv1qTTLSr1VbJYkStA5zFgdsSQcbXJ3rCAQob8wPvp65WFotUqX9hxtCC",
  "key23": "2A7ixYRmzSL5aNjWS6vyeqMZ78aHNX9WNS7tZ6mKrmVT47dLDWWMtRNbqjNNKCYPqfTPNTEcaGPSyy4yfVCFjRwk",
  "key24": "4AUsxhBJq4JXuwctZeC3L3TzXXLCsdxR1dX2fgQjVYj9WscrtgP4DF8xXBa3gJrk9NYJxezptT6RKdE823W56ioH",
  "key25": "48QGnDwK66YvE1BuyP9fedstMN7ppYqMKjiaBLCBDnBNhg6VmA63dWAMHgVX84vzYeX7Xc9m521s4fgnjAj7zrQU",
  "key26": "2hKzqHrtB2rgauyPRbqMhtv9JKrf4Ybonwd9n5n6JTLvzPtcP7BiDQYV1Q2xzf73mXiHEpdtJawLNMNAEg2EdRXZ",
  "key27": "3h9NSjXNJ6En5pn8Yd5qbvwicE2L5y9L45Qo5kHhDCbgQLUxxTwiu1gp5QTaaUP5ASPyL4o3yAbJbCu5Lg33pLkH",
  "key28": "54fV5o6vsz49M39nFN6X8LgeVDVtFK5mvcRDTiGo2fUrh9VfwsE9ZRftMS2L6iWToVsqmADxGp5MZRhrSkJuURHs",
  "key29": "37RmpQkro4FgRmk3WAQBMcRHf4XUJJio8wQCdNLRxPkXBiS1V4sFakbA69SXfsKhQ5bxqvFNrtexFqfdbLZt8oJd",
  "key30": "2yoUV345KVFqn9LSPeY5UqThfg7RqvbKHRBpT656PPk6BuXR99cseZFS2moFRwABn6yhh71sGWKw8qU1pzScwMs4",
  "key31": "5WsRyjZ1hU1Qc8KpGPQ78k6RtXKHo9JzWwGWdK95wZxfrC8jjBeifUDbDVNthkAF4rV1mVvrzMH6vT59GPKjevUV",
  "key32": "49oXBGgStevMZN8expPzq7gCP6i2pwbTifhxrKMnkFZ3dwoi9heMuovxfXvhJwC8JoQGac8CSMwSiwNctFV2JZty",
  "key33": "5ReLXitWqk2mVKsZTqZrN9kbPTeoL9kvLDVF5Tfbqh1rSfTHvWZZLJTkw985HZq6aVDcCAbQP8FXSxZKDui5UfVh",
  "key34": "5Y77rcpYy36tNodGBNm8g5HTcDmoGWRyRckJQLU1vqJzTSW8XiCZr1zNroxJWgw8BjBpRLcPjjHBuckwAfSBHfHA",
  "key35": "5PxoX1fnUCod3VSMQKo7K65GrgyGzeJrLRocsqfd5czpuQzH2HPpeC5eYc7SZp5ax1TUqM5Far24eFMQCiiyDQNe",
  "key36": "5NhLsAun9VLGV6hZaUgcsLWGp1SvFHre57RKqAT3juPBszautdsaAx1c2EtxfBXPvqzENhJCSirBFhCjGcw68dD5",
  "key37": "UY41XwH4Zo36EUoCa4YMGZ2zJGekgEBRUrHUa73toFZfNjwFnG8zW9EYJ6r2M6gcFXLg4sCiJvySEPBgUnqdgRX",
  "key38": "3jjVL6WQfnzZdn5vNeAA4TaBU7VtwNxvxLiLmeKSbSC842xgyrKpdHM6Q5CY4mo2rLFcMfQyo2A3cQjMYriTFbH1",
  "key39": "3AwnyD6MKDQJ8KDj7ynWLH2mLhdaycAXmQUKiSZLbp1S8UqqzUGZv7jfnmgYivF5K3eDhgRf5wvjgya87c8JVL61",
  "key40": "DdECGw5WqXfkkt1ueft7zVqLEVF6seg9AkgeyJrr8PbCVffBW7u66pgsNGf8Uph1VQeAAP9wH5SDHy9BqzkzQ3o",
  "key41": "EYhkrdZnNw1KD6RaaWnaiAMU9apNtGfY8Tqu1Ex6RVEG9e5gc6CvF5LCYVEuq7DPKPRsbuNhNamSEzLasEGm3yP"
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
