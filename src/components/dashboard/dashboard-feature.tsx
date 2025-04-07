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
    "3ZCNnfc9LfjyQGHggqPLjij3zvtw2RmhRN4tzLGupYQavfeJdc48iS4Xexwiqfkb8xdbehsDg2tebDNTYJZhs6x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBAWcSZfpSzKq2hKgbhcXRvv3wjpU6iHCufmq6Nm1TcKzNZvSbGL8axcyaUGPG58FeCVdX3rqcEcEVtk2Tmrfhu",
  "key1": "i2VzRKGE3HK5cXyZVn5DQk7tsxM42WjZfsaQgiM5DSAqkLh6MSHmDAx9gMpkY9NU6jAFEys1PfCzFXvmc5zWzMu",
  "key2": "3jyR5xhmVvCn5ayZaEzP8WncUQ4txuwnm417DDtP5aVpkKqFeCBBVkScEEP1wM76mZ92hFh7esswhaH9W2a3xzzj",
  "key3": "2pP4rEBFzoyhaWgr1JgP8Js4iVti4oLvmynX3cd56tRHvx83Tj3qZvw3v834Uq9svbPRGP2iBjbZHoLQr1sgWpK",
  "key4": "5scXV7ThhSr63seLGFQaWfQLF2GnmQj4WAFZ3ENrVkWm6fXmAnRa1qFHWytjqv8fiiJdCnqezHHvKZbVitojugxi",
  "key5": "63dkSAPjb9duVscbyP2sL2JqXsNkYHNdf2mwWGvNRTYmgpdEkCzqUGMqZPmEmReUKB7dc6f9pAUv73u6PCEbaVbc",
  "key6": "2WD7CHuPpQF3yKcErbcmeqZkgDQ8RzkQEKaP6MXvYWTrSU9BFjt8RjtdGjbSk5KDxEQ3v5VjWhcBBwEnsjLMYq6B",
  "key7": "4zR4KAnTcrDhGjF36PAG69Td9EY5uYdz8KMHBDaTzifQud2PAskdntmXZqrqvTajiZPD3AYquStpK96Zh1PC4uAB",
  "key8": "5STiJiZ5MfeegiKH1snuCocGjHPaPgTu4FwgPGZcMGcNehDrUS4GT7avWu5VZGadWWK9BEDU95QPcxQKnVG2WQjR",
  "key9": "4pMKcEBK8iuxerdPVpW8YkgZgxUaiBCA4fReV9nnLmsA7tPJyp5bYpf6eA4xJicLTbTqn7rcJ3BtpMew1zk2wywo",
  "key10": "S7J9W6qYymayDi3cpS2WgpqGyXvBEdA784Gx84sHqxAb7eKzMtQv1J7eoWxbKZs6kdxsfZD2ibvZNBpSPRw9exZ",
  "key11": "39vMMZUA8ix8innTd5ohRnYAYko64FMkb9MiAek1KbiTjTmwGFtMNGwa8iVymu7dL8HtMxAgxGaJgiHkfewYdvQ9",
  "key12": "2LgHq7d33nfqXQTSoVjEfe1owHWjfEyF8T3aZDZ5XEM5WyGwXoDcUGYa3yQyyNgPhrxByrxKSesgLF9zP7YN16qf",
  "key13": "4eraNrnNVqirnBAJir6WYYhWMqyZLoXaehgmQWyb6SsvohZ2aJaSJoUdhrA4bbRZk4vmb3uveELFYsDhV8GXUhzn",
  "key14": "ddtWiyJtHBn5zo2P9ejQgZ6GWQBV9Lq4UZzGSmYyWyV6agxx61yceZTGrjts9k81B58KS3RAEgSAkrbU52RAoWq",
  "key15": "3rFsMiEmpgsomLXzdTDP4PCcd36mMkWnLXhQQBmQdwXwoUUXrSfoh85ex8EnAwgS3WaCXoWYF5w17PNYGzv3YBLw",
  "key16": "36aBHz5vDdTokppZcEnG1Goivv6BAbBthDTYZRHiRHYUJUrg5yWERaJDrLo5u5hqK9K2x5GL4SX6MKdhda6x5mM8",
  "key17": "2xzn6FCK2vmthEbspAvK14tkyko5ucREL21vg5U43J2ULh37LtyMaAqptG5ghQoFnKcv8MU227nrkQ3URETs8Gy9",
  "key18": "3pDEoWD9zveqAomh3Vfd7EuNBvarmRNDzf2fa45aGN1xk8zkop1r5XtpHAvPCaZyczo5VYPwHNU3zMMzQcpEQXAE",
  "key19": "53njSkSVpCcWdE4SfYjUtWFyLDCgTnxdSCKhQ5TZsvhpTsTxJbz5tdQLruHRyeGcMMbCFxgYJF47cWpACxaGqyQp",
  "key20": "4iA9cmaFgJLNM7Xw54uHEfL8AwLeXwK9SAQUizKtKwaCL68eCZeKmjo8Ur9T7L9RYFdPf8GheJhsvpd82x7BZwza",
  "key21": "2maN6qbTuBS22dQXghQizzUVXP4Lj6Nd1BFVtWc2iHvVZFWo3HDGRRTzkUT5SxV46me9ZvBZMJfLwGphRLtcqdjo",
  "key22": "36zueX6EgLKGMc4VPqKTZs9MSsHRhzh64Fo6vZULTWuNjRzhtSLXp5CurCB6UoxZ1hCXREAbHTCyDSV1udxKEZ1L",
  "key23": "2K8p1cLvBst3FWE3ZsQ7Rp6fGPRVeatqDrzo2cg74tXtDXPzLo3f6YMHqSkjCfa5SnFQMxaFJH7vWPFQPXRhY6dd",
  "key24": "5jagvpFwR47GUW19ZH58VEyhCuf6gyW4wnRitFG2VyUV19xnwrws522XL1ydvGqj3UX9k9oA6cERPc3dHashaWVJ",
  "key25": "3NVD1TinRwAbX6EqsyALeKz2wm6ctRdG5qzJ9z6fKMnZPf2JWxShvkKGesAgizL4hTrqM2b6i8VraKdbxhvzUTTq",
  "key26": "ksk2xwvpz3mxcji7SAbWDxBcHUa8EZUNurqoG3u2mZxfjo7DAxsVR9WibsFAa3e5nikHD4sXyVg89kqAj8DFGTn",
  "key27": "yGgc2xMuhQpT8b8ma3gvWfnM84UaMCmcmnXqXgv9bfUZ1wKECY2S9T6ngFx2u1LTs1DYjKRX5JA1Pya2vaVt3uY",
  "key28": "3R9BfehUz9rT3AirSdPWeJ4NxM7HaSt31H5sHsvxGGxxAR9yweEJWNeAy3UyE7ucaP14NTLhS81WtiVMiG7qitqh",
  "key29": "ypS3srg8f3gpFPUgmHFdez1ySg7PcJFYgSgNMtwQ5jogTusK2RDZZ1Qf86ssSgtdexTzuzTjxR89d4QvCGchVzt",
  "key30": "3cz3FKTV2cnqR9cJcwpHiWoKhEMCMRYa2HvWupYDuN7JAxhCBbbbQwAYbez56Nr5QmRZehryYwsJGQRN5vX9BDJ4",
  "key31": "2TgUC7m1oLnTndc66UHFoRxn7aBGg7QrQrdeZmFWxQk8DNFtnrJ5apbE3167pEKVPuFC9uufvKVx51dx7XCy5USq",
  "key32": "28KJV6quhktBwXEY36AVWBggLM8w7QjFqkBhCrc7xBkeJnxGNGPoSBvnJHJWKBEG6JMjBYC7Qq8oNMAeNqxMFvtc",
  "key33": "4gm8crno4MraoVtBwbkXg7BzWZDuNTuz8Fe77QkzyjQbamFiT6cakdYAkSdPytzoPw7upgGFDVn9mR4BQAhWcLcL",
  "key34": "5UmdH67c5BcmSXtbjGGKs6eTW1HMbFa6UCN8Sxco9muoK52eYfv7pmPktc2tQhCwVRKwbWpdNauqbX2MBm4XijRL",
  "key35": "2y7J2m5CxhZj7JidfDRVSHhKsyhtUY49KN6yooxjVXBphnxU1cG1SgsjgARppqWoimgMMc7p6oayr77Yjm6i6568",
  "key36": "2gfQTUpxj3vzKv515FFAtKDBsbGweY3WLcCNZ7bWmjhN5hKexhGK6t1kt2wLu3ercr6L7bL6VC4CG4NmTmor5ryy",
  "key37": "2i5SMnXgDdmmfqrQUWBwZajwgTicEQ552RtE92JjYitKmtqzT5PWahh9DnUsBwgqUToCTPajCYVpWjzFQEwmxHkV",
  "key38": "4M7idFVmb4dBDLR3dPtFcV8Cj95HDrDzGSqnPQ4HkoAFCrRTcD7x8RzVDHfDnoVMmsrQk4LbRr6VsGkocfLFn5n",
  "key39": "2H5Zev36SA6G2pPEha1d52cRtM9dcvvieiZFDuX1J1KCtAR1Z1np931pzM5VTGLwFY4kJ8mTeAMtUbBv9ipuGYGC",
  "key40": "2UG92ZXck3HWpJMwNLnVdXunx8G2X238B95PviP5e1ESEAeBhK6EoLXrgH3PUaquJsNU41xBf8usgD665kekfNnq",
  "key41": "2Nx47yoEmuaRzypgkth4mZ6gGkxaah4noJHwET9AMe5AVDGELM3gX25B4CSVF37dabqcgZiLJBDRgKYQ4mAF2a7m",
  "key42": "Ljt5zyENG6YJxfCEiWamDMWve7E431mrBdFaKLU2hwZ6VJ1VHETtiQW7pHNsS9WUiMedu1rsQ3VzkqvcT8mKRCh",
  "key43": "2n8PXyQj4GWELJ2SNa2853HpkR7doXcaJp5FhWH1udrU13pqFVQJFWcJBUwoPvNEi8xVsBuPsuXC52ZSBStJEFqu",
  "key44": "2jaqWucfwrYiBYC7EJQwqGBnfbokLVd9HvG7vs8mfgvxreA4TLdswQxTqxZhnfuNGBMZgrU1T2pG2tiEHCKZBq96"
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
