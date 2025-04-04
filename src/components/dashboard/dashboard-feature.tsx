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
    "2KDM4va8hU9npkqvJsiovDJpBimt6VoQYHpkiernKUj22aAQ6ArCtyFZyWmMwQQzfSaJpUHgJFTUhyQ27HftdQKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633cD8wd3hc1AUQJyxuA8Qq4kgCgiBMrLzZskEeWve74tgoZXg7JkK2icfwbzPrGxqhVNxxuDe7xk8hwHU1VJKZJ",
  "key1": "3j7BHx2oFXwou1nxWHnVrWjsGCou7zxDKKYM6JvcPiLsku91TVd6VEiq6XRh4md5588gLsrYDMYmrtq8AkBtqPiV",
  "key2": "5LtJZzsRiCbKUTaGypT2yvjN4sbanbq5CjTSX7PoBU9uzBRMaazNSWAkmhUPTBiAcRJ3BxAc9iWWL1Q9GBr1B72R",
  "key3": "5gDCuLHR9m7JwGXe5wUd187w4G9WSpbqZLFh2mNpcsbNiDXS9sTC3hH58Jhu5ZSts7w8bV4upAFXfEsjGQLqESuW",
  "key4": "5oJ4bcrGR3YoiEyoGDw5krA9nRiTegfuC5MDwt7SFwi58wH8xFK4v132wsgc7m41XYthNwAVdkeaiZT1VjrdMcyW",
  "key5": "2yQFPKSk2pHoqvcxoFwgMemg2Y7J6K3Fae9XdtLNzkfUi8fAYrTZ3EJkDHxKVMFJttNNvMdbhYQcSEAmPK4JVvYu",
  "key6": "4mmEpZ9KifHJ3euUh3TKMySYakd3qD9wiAnV1MA6KLpjd6NTEsTQpZ6o6YqkbY8PGR5sZoqEj4Muz4J6SXdmdirW",
  "key7": "5VtdgAZXfoUTjWvQd5pfybMmsxwJiqdHUs3eHoJaoPzjuF5yyqgQjmDj4NCf4VFjm5gma4XikYrBLp5552y5BjnA",
  "key8": "7VejNCiZq6Z8wV6Bh4N9HvsTsLkeKCUxmydHY76EGhbsWwQF2Bq6WZwvZX2B5wbWT6ZpAsqPASbg9BRHXLkuiuB",
  "key9": "46JyYs7434e6MjmkvCE1egP9A84ZBcTy6zduPCCbd4X8TtknJHZy9mRrw6XUmjNT4cJ6ZS1V58GVfAV6Wv2htuqf",
  "key10": "2ePbjttrvnRik5CNAo3x3uzVocT3LkNRPZFLuWRuAQ1LVbZfi3a1he2oaRG9hPfVrDrauPHrvLzw9ZvRHLhEJhUh",
  "key11": "5KKRZEMyPsMG1FthBkzFKvwvndUWzmjjzDUcaATvqdMnyLywyNdZ8DwjBTD2ijBC6x4XEf7Fagnf8JR3kbrBWcmj",
  "key12": "3qF8kM4PryJq77FPbAnSwbXRgQMMiyGEYn4UerKVJi9pXG547gqEaC349JddvG43iU6v1etQBKoTBnUBn2tGpvp8",
  "key13": "2jfeuKNxfKCfom7dbDGPto8pc9K8gLYBpL2BLBPLEPVTer8QcjcuYTGfUJzWaKJeLaLfwrLFJ7ufw2s8GprcTnaR",
  "key14": "32PaY9HFfsLk9bBmDk6T3CHeHiV8mEpRyzdEjWF1JVy8NcCQQxuJ7yVFWyvCis2d86h7C4TC7t2riRSrYuSWBP1M",
  "key15": "2Kd5gGibfVJXy4qdhXyxVD3C1qMUGisRxuuTi4sEyDME5gqk5NX4hQxzeWFibhKgsqquE1F4Ck7hPDimbhc9jjt5",
  "key16": "5AZq7QEb6EdM1YCY2cD1tq9ER6Tht1BdSYN2e9FBqmmfB6UFNmhygBoeuvVH3iWtf6kxUTgvLdE1NeoSnGwA4DLC",
  "key17": "378apxM39k4CnPqK7uN7DGc4UEbpaRurPzxHV9NbqXCrkPxxUHheZa2n2tgxcLHFQx3gVQonC9LF6vNZ1hCY324h",
  "key18": "549XFNacbyX2qviAx8VTX9jkeqMeZSkvBE756rhZmSCWBfq36BPKvbpHTXXhbM22J1Z1HcAau2aFhPoEFkBFRHMk",
  "key19": "5iJhT9MtiSYcM4eLTLkTKYNgs2HZcJtPKN1LTiyyh9XSTaUkWX7fS3FEgWwzcnvj5EKWiRk6uCtXcvN7XeJ7KsSZ",
  "key20": "3eAULLdivkedrxBduu8BJbkX6eToTLgDcC36x29PnyfHcgi96ie6gLnFEda5rEdHvZjBpLYZN6T8a5RkTyZt4sG8",
  "key21": "5uGFm7jPZxSyGyQotp5TaGYj9zkgKpSzp2MmKtGhsAUtH8iWz5mmUzSmS2M8sKVPMiZ5vDcmBFKSgMsUsDn8XYDo",
  "key22": "43Q1PNDRchkoUzNcGN3J4LQrpETaUpkpt4zo82WGJX19kQfizCuvLaTqNJ5kNpCdqbPXrTSH3vyYpPJZGiPoF9xW",
  "key23": "4sGMkpm4L9E22L6Nwp1jX7m1rDv8TaE97NewaHQCHniFMGmq6H7wAaodA6CTuf8MhUvh6mxjHh5KGgeNYPSK3AXW",
  "key24": "4fjBAJWpcY2Pq4ETkDU7XYzUwsQQA56JwbZfGYBRUL2YVwhv99P9AuwNSgNEaiW7uK1ktDmjmYasKMJvRbXDd2g2",
  "key25": "L583T9uxMH8StzRirDsTKn4mpcNpzmmJ9DNXQGKpYPvtsv5e2rgaxcFnNyyzYGyb7mAMy9acCkUAyhdPug8J191",
  "key26": "2wEddCAbAJZcCKpru88icBGog7jFK2ZZqGjS1smg43kEcEfuoxpA1b88FtWazxmbDMtLPYAq9wQrxz1peYevJVrd",
  "key27": "vmzghK8B47L6NtXJMWTMCWc3N8GSuDhK4Pbn1Z6fGNjiscThcSneKCAxF5tJTWhy38Fb1i6Wbf1WcvMEk9sbDmH",
  "key28": "2uNHdof66CpcKcxEcmHiSUu6UsF7cioVeZx3kzvV6rhBKDk8xJKPuzrN6WTbSDhDdPnJV1Gg64H8YYobwy8n8s5J",
  "key29": "3jbS4xYdQg2qYYUGJ5ZieBYjgWo3MthHR4kgubsuhsr3JZRpwPcfSqWoRTMYebnNGCGPcennurSNCVewSBmvwypE",
  "key30": "NQyyUK3JPN5nqXhZaSmpG9CzK1nD4nQzuqwphwvy5MSL8u1w19RhapPweS8n3LGhXtvFBJFzqFahBp5fmVUJxMM",
  "key31": "48wG2fwUU9PE6jLzQ2eHiryKkeikEhSaBjPEQD8uocF4CVVtH1aZEvVhyzB9RedHCszsm1qa6pJS1suAoBHPeL59",
  "key32": "BgUbUnGVwooCssDhART23anA5beVUmtTbHNNA6xEjoU63n9z9bB4A5Hnf1ADQbnHCs4Xgg8kEa2Wdwmd2rgKeAZ",
  "key33": "34puePSNvrydgZscNKRBvzdMcFGJdATH9E92SfB67w5YxzXkbSRBbWcpvTgMbsViQufaLkqqzeYQj9a4x9XHMFts",
  "key34": "9vqGNSUKjNgxtdo8wPsVj5ARx9nv6A3qZCgN3HrtASaNpf1NV6yuD9bys1zJaMrBXbESwGNwBtv9aM2rB5aik3V",
  "key35": "sTp6Snp1pXSnnksim6gDSVxdtEqCYEgw3RZAVv7NC9nhtQ12X5anyyxevtg5W1wGrBAtzUDyBTTzcjc4purKK9k",
  "key36": "32RJuXQEwgbDZJuXkd37RqHDL9Kge4RK3tC7bvrixwZnLgbiaEGVFFfoG2hkBdnK3CpSfvHziSGu8gsWEjpfbGas",
  "key37": "4yFpk5rEZhyfYHr7X1kbfFjgceVQSEsHQ7G7ZGTgsvH1VK5pgEiJGxN7U6SBaDV9GZ5aHUywrMjHqWwrUmT7zk9z",
  "key38": "5RHcnosAYEiQmYVuH7bXSfShtz81SrvMHYFhaodUaWAy8jSSRdQUkd5nB11M67p5rEsP83pc733H6y12K3Y42nL",
  "key39": "2Ze4iJoitjHhSYoiRGbrWpTk6azrnhbKU1Xo7wQYNf3JHn9VWcMposBBmh4c1Uo6vQxfP2ughPHrbSaZmQAozwJD",
  "key40": "YtdZejTnpx7qcs6ZRnEZ5V57vkrk9uzFSoL6Y2Z4NjXNmZ6z4JUW3Lj4KEKKRbG8ooiZzeYMLz2aQG9gSX1Xcte",
  "key41": "32DGBf6dxjx8RB8AbpmbzJTEpAb5MhMLAGepGb56xtDQcPAUtks94xHjba95HAqmQFnt3DA1krdvttS87dgsvC6V",
  "key42": "yHxWEnq9DHjHYKRH9tdAESbyKXTsjXLHkrABQLuPLKdd7R5mBUBUFDzX4Fjsk4nizZNVxw46QHt4sGgoNqPDuCe",
  "key43": "4bpb2RSAhzef4g5vmJLMmkhz2Az9Z94Mqp7iSdWHPXR3tojDf5juNk34F9XXjyj6Q1LcRj11wuzizC77neLeFCDZ",
  "key44": "56Tw61hcKm3A9wSK6S1WTSekenXZQeKbeKwD4hsz5p6EbaT4tQ9rVp9Uxtt7hJph2STv4uWHWkyFeSMLwk1CYww8",
  "key45": "5Ni6A3NoKbenBo2gCyWyf4LTGmzoWhNz7uPHBTm5vgwD7syXz48aBovkS3emTTMCoueVLPsRQZduJ2eFC8QxZGEN"
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
