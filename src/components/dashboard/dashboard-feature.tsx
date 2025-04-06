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
    "3U1en6At93z6TLS5FgyhW8RiTD1oy6htssz8x3i4e85ycHTVB24mgwxtCXVZyzquPdf7v3Bda7MC87PxtCUvrJ9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivisdfXrj6885G77jfhKYfvMffmaGHqpqC1K18xgXhSWBiUzdHvDt1QTq2wxVHLwKbHoniQVrMGedSTq5VeJAY9",
  "key1": "2mkGD5gyn89dU5WSCi92xuXYcAex4n4eQ7uMw1psD5Q5Xn16SkLc5ok2tc5fFyGER6jqVPp6Ew2GBicdGamKg3Go",
  "key2": "4rcKKCfPSvtnzVdmRXLLuVcBVdwoasLWXEnernopqyHctyKegJS6FvaSeDb3BBMfu9FXDSzx27Tyqw4rmg3GgM9F",
  "key3": "mo7ny9DBwM2dxatN2wZQcNK1s21rYsVucnM4bDfaHsK6Y9BKjKZPBgm1PGvoVopRKrtc77exV34MzLsncjAMq9n",
  "key4": "4s62FAGn8Ufkq5Tei5d2FeTatQ8T6veDHAM1G7rx6sqk4eM3nKLvvJWDrggw9nbRBavTp5jGkz71XVWneG5NyLvX",
  "key5": "3ooj92rJs7psAiDHu28jc4Hzyf8K683FNZeN4ZdrsKWwt97yYJ1GNLZFUxMerjNVQ2WHG52AbVGXejHzihzJwTm1",
  "key6": "2pEoaC5hKfWZyrX1Ts6nkoLPUNsGzV6WonW3Fyg3aD8dEVZNkK7PDcp56Cb7jFQ78EyuqNHhd7oMqsZ7okfGqeHK",
  "key7": "3Vvi5qH8J8UVCDJ4biE6c9XLYeTQdH5f5xqnPrQ8dstxjxiQ7ExAat139BtDNuqox8bDMpSh2msa32Bb8f6aDQtc",
  "key8": "4Sx7G2g1miAfBJnSUWJmbx63M4GCM7Fodw2JJTz3cxzTt8YGpKAMcQeyBW2zTyZ3Xb48PNnDiRuBCYshBeDnhTne",
  "key9": "VjkqDnaUjhBLd7TtXVZFHaMfoCPhfe1fe2kRpoBPEsKtxGMzjwE3tUvsSxJ7bc2PrsowvaS15aFCiteAwbzCwbA",
  "key10": "CrxhtKXvuYrZoUMybBNaiMXcf1AUHg6DUoATobHveP4rXvPhzoFAs9SpEQJLuiutPnnMW2JWTgWFiiAbxDoJd1E",
  "key11": "4z5j8HLAwbM8BRgNNGVmRxDtCkEDbcWPegdvEFwTa3sCc1GyhCNTRx1ggPCUgTwdQqrVZSW6Fgr2EVECnGk6qdSA",
  "key12": "2aS4ngBrfb1RKKkYR5qqtU15a9yNJ6WSoqMLvHBeengPxJ58DJFXLCKgwdVmkkimTdRCfNFX6wGBdqPsEVm8R91V",
  "key13": "4Egmdw1NVuGasbxYeVc8uguUrSmSWYevHPN5CmHPX2W4n479TD74TDiqa79NJ4NPMEP9E5fhyJBsBL1cWMzxKjER",
  "key14": "bcaJHijaR8yiphYBLFmDEDmXxEHNKyLe6t8MyNbUPyG25FACEQMg2X8XmumPpx6oLJ5E5Rm3EEi9ZMbz2KF7A69",
  "key15": "B58b9kJ6Z6QB8cTqBkt27TBPGthu8DsV2HN82RsZ8i28Uma91nn16NFfqD91LqDh7GhXHNgf3SeEQMdkFBVMZPC",
  "key16": "1TWL6vrHPWSLbVCncrotwVTdfjvq8XmhVGPu9Whbraynzp48X2PCfKSjs9dRohUhharw16LUPNTz1ywiaG7iRU1",
  "key17": "34FuTsAJSDLvfFjKN9W1E5YvMcksa3srSm7QeDKHsf6D2c7rLzUqb2dQEg9o7RKBj9cwXCVpzPpXKQwHZuefaNLr",
  "key18": "5Zuipxy5QRrhVWtsSYr2suhzA3hEc8jbVQr3xvA6KEfPcJrAYG2w8P5iUpJkjBB1PVAhEasKGrh2QWnoXZMqKDsW",
  "key19": "63zHUzEyLi3cLmcLQD9UeabSVtRxfPdEY414GJE9fDKf9uWm3PmptC5aMYAGsjBcYzb4pxWdBK9ny6WDyBTNmoaW",
  "key20": "2ceMFbcSkgYj3uaBkHU86QtMohT8kRxLemYuNMJ2akkoqaSgU7D1bfDbvfVWyqm7QjKR5VgicdGPpnuuuadNuMJx",
  "key21": "3DETETJiaQjDrZawJWcYMYLWsnyyEJVnd6EiQqyUSFSiEnNFCHty9b2PKDt4HpCqZxL8YrQgzjdeJAxwo2kwvSMt",
  "key22": "55v3PYaJQvKJqcTQ1Wt5nPafQboW9GqxhbVaxWJ2HbZeVBtSNnapr8qvWmpGjzhsSzqXGzyJtV1szo1KhCzjMhTw",
  "key23": "4Q1edFGuReGRmAofqcPn7eLPLxZ9cndo2D8u9XdWCd1d1niFfBejwKfaQgLTxBvfyn2g48iydPTi98f4FZ4HvarV",
  "key24": "5PWvDEe1cbeyUXTSjd4DVnrQr3AuhnzCgGgHz4Fr9VbHYg6256wXj4ZStmbWT2kmdsvNXTB37m3WcXJiixkZ5xQE",
  "key25": "458EJvuVfJrX2bU5jww8T4uS1amNhv6FKo3Bqq4e8guDPBRwi99dXo2hhhvNwjPAzebGLjcZBsCCDYvRJmUq65Wj",
  "key26": "5r5p2ygJLkZzs5tFFZwJZM21xC8mYBrPeo9eeYUtTRjgQtSzBC1onL4d5rDc7JBBttKE1r7L1Dj9pJ2ww9T6pndG",
  "key27": "2ivqZPUyNC47azaNE65WygCaE1tMwq6hTFyNWMZqzwcypqBtM3ZiKoSKH6sSdSjjn4tvVJEM2us9EXGUZvhgDJ1Y",
  "key28": "5PXuLMApnmttxF5f68AgqzQJ5a9fWWH68pTvLdxFAi5EXTPjLZ5TEzgwkrKMhLgdAECjgjrF9paoLu9aFnSRfdQR",
  "key29": "4tYDbYQY6b1xeFsqybRZZJ7aJstP4GENpkXJEoN6pCFXZ7UHNHM3s7Jq4nboS3xrRV7r7AM4R2BSsvP2h3JjVzaw",
  "key30": "SkkxpVzwfCNiR6UJpVZtcN84e5AU7iR83Shi7t2opMFy1TjYP6yobqprJqbU8pY3VK6PiRF9k8ptT6p3wBu9kdo",
  "key31": "4rPACk8rYCV3Nuj14Vvsk8uVME95fPL9nFRAmZf7KzDbPD98gVR6KDF8tKMzv9fRSexgY7aetDwB8n5XbLRmLvhU",
  "key32": "5ccX1t8aVp7DaMgLucjyvwLkJF8xLizfF66Kja8HEZxhHQ76mLNKTpccw7R3apRH4RU1hdLNzwgxdQQeuqwg4TZj",
  "key33": "566tQcLTC5TmciQ6LhJ9uHNuVMgr3hgQTuKSGTM4wZXT1Kbugy9KQX2j7ZdmTpjaNFeMaZrSJZx22BZXeTjn8wjV",
  "key34": "5qT1uvsLrLHhqFDA5h5hzgXBjcWxLDAwYj9Ht7MGTbifos5SBryqAZiZmfH5BHesYXkhgZah6toTP5CkpawKfypf",
  "key35": "xNR9vfuUC3tsxERMk7zV9TSBdtaSXK3FwAhwEQGdv8P8QwJJbNm9DTrYGRZtK9BHh7Uaw91FjZS42TcoSXVZJpz",
  "key36": "5gPMoQWVqAQCrPwqFNALhJxDb752KFYD1ozoe1jAmJ8ZYrnX3vxovuafgJBXqLzgHdf5LRMQxfLaZ81jbqaBpqMj",
  "key37": "3EhNvenFw4cM2d9J5MwAvVPSCxPUun7Rg2gfWR4G8vkD8whb5mnvVLBbHPjtnQb9tevTDHL2qLCNFceDgbm6EcTT",
  "key38": "Qe5MSrAW7KhyWuPo2wmbkoUCeCeFMcniW66DMKdrWm4nZ7D5PQPNq6NMmg42fgpmBubccbrGry841xPubsNPUpv",
  "key39": "365QaQCdNtn5zQA7Y3iqS9aN6kiUSgTe5Z3QRz87sNRga2AHGrv6hCtm19bWfRiKVbeSGtxPNfYeettbiiWK852g",
  "key40": "4zzETYWfVPSrbiKbJGNSc7TBEhjZ1vFU41B55tf7mfZYGc2K1hKuAXGFBfy6akw24LzL98qxDhMZpeow5ZhX2bgr",
  "key41": "61XvxV3tSy19wBPx6MHXmCJEjw3cXNrV9rjqHuXxo45gA4vQvKD8APEXAUZdUeL6AvYgyDCQbp5Mu7KVDC1NUD3z",
  "key42": "46uEmAddZaXqpnjfRCUw59FQRdNY5AFcmc5UzcWgXx2MGeQyp55L2VNUcUtEebWkFen88Vni7KXXqKqdEEQ9ujbn",
  "key43": "5kZSncG37ji7d44cGkVXHG3Vp34TABxDWpNh95P1nZHTpi6FZY8UUgowggALQqb3sxRWZqjQWWM5QwFotnynbnkh"
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
