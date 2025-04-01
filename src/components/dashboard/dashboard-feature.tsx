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
    "41f8mbMTS9GDGWzhdh13FEdFzq9uexgxUp1R6LNPqQAsFKjAfknfxS4rnPwqiu8JwRf6toJ8qvx5AnBCPqjkAGVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1ciQUspn2yXEr8zbG5CfPzmrwonH8tK5XZh2ozegrJpDS8KpegdrDjQ8wEdboKh2v4efKWRWbRwRvpCu3XWAg2",
  "key1": "539FzXd37qLKnJEuyGQDmuxq8ULaxXunqtD5jojCeaFjCa1GE2ySWCnqyAmHoh5c8YLKVRH9zCXPQkwUeKHy8696",
  "key2": "3DDsatetQcPQZB6KonHNeGXd1zj1tmWZ9HgQLbXe8vehKLAmoZtqhMztiwWxnD9HWi6Aj8LDFBAjKgwQ8qYURSyS",
  "key3": "3DwrVwsgjRGz2TbCU6BajmUdp32Xit3HPpAkF42L69NQjsokvN6zYDt6ZBLko2TEFx2K4BnR3zZ2S8AdffZ8FT7T",
  "key4": "4gwpY3Nhgf2XJUYWh3HJR7yZkUokQazuKN2XrfxEkkaHr7bXKb6xKe6nmzVUVeVnqr5NtUHtGFE4E6LsLUeMxegZ",
  "key5": "5Npki5YKT3HNveDqo1zqBvsVUJny98PWfRp3G7vciTPQ92GCmqGNEo9VthZhshqrRPTwyQTXMA5ouG9LDcEfJsE5",
  "key6": "2mrAHrLC6UKoVyYjsRynHrXRXGGbY9kC1ASMbjypsUyH3m1LApguTx9J1BLGyJm1PxpfwENHZD7RPXq6dnLDs1oa",
  "key7": "3FCtbfn81aDG9ihDroBP84i7FSPPAqb2DdLjFRQ6ekzd9VZvihvQ2fhzj74Ke6i2eBjRWgyxdnnenAoHfAngmGVx",
  "key8": "3a6nq816dVzKo3XtQMGGLcmqkkm4JCZjLzfLoArRGp9ZP45FmSxf9EBx4eJfLr4b6AhUdLH2Aqe2yAEsiJ7ZTo9V",
  "key9": "PoXGJ2tD2JmtNBEfHgt4isMTc9LAzebgxvWgdJxWnoroqcvGZCaPaBnRLgVcu4JT1yUeWL95yJRk8gBhZvhWMHg",
  "key10": "4jH9htfETccADNqNoVPfCuzfrnMJtbRnSuYeqMEvByL3oBtJQfBgeuXnZH9x79nnJCCpXove7aHhy9rK5Xak1AJj",
  "key11": "3RV3DP7ci3nFiQt6Yv5Q7K9cTgg5NfFvmW28d7tahNfAyhGskBqyJbkno9hZwp4YDqA4ubwM8WTaUQyxRrYLZAGB",
  "key12": "4XXr546YCewR8S6YE8yoQ67zmo5z6oxnphBJsyqFPhjY6kf1CHtkKL23LPdnQcEcBtH4CG362KDzTmoZ4vMzaHXX",
  "key13": "4N2GHyjeRkzPiVGBXDCJFtnAaw9bq79u2TdDiVa8MVoVJ6fRgzyeRD9qn1bmqsFQT6VurCjoWWKwwZVK8x5UiVnr",
  "key14": "5XKWYKWPNhjCdArMxH6a3ai7Xic1hLCkw6U8rs8ckfx3Wh5FA4LpZjeMJVngtqvRKnBkZzT4Pwnjfc1NBYDhhxie",
  "key15": "5Wrc1PbhdZBMx7owtR2ew7hRnbm7Uno9ZvDCnVghNxaRhCKXEhv1ZfcUv8RRt1WqTwj5kUe8r7qVdqJtPN3PARBZ",
  "key16": "N2MmZNwjGPTv1xSP2nD2HUmdvfA1AZ3VUBNeo7d5TXowZCMkibmCyMdi7iqF5uvryE1nMWBNUzG8wKjc4HdewM6",
  "key17": "4p9Qa5wVNCmogJYLYmhZ3jovv2MFZZzRYfVkvjoECvyTAZ8kRezsG5AUYqRbuTG4kv32FjCKnw6yiPE8CFsVwFLY",
  "key18": "FQKW2XBUs8oXM7AfXVQYDugpRjRiLEVLyQcJPWN3PqpZKYFgZJGUZddhvHuw6tsQBWMYWhfJRu6MV6wVMzJWPHV",
  "key19": "2RLWJKpER6P2PJuee5f8BcAtPseunbQFxfuVEkwQj8de8HupKGwhcV4anLdjw9fwKcnDRHYcFijZbEFAmHG1BazH",
  "key20": "43fQSF4BE2wKboFUJPWSsGZVT6WYpZfhK4rhVeLcGvGYSrmbLi66FQXZZDHN4yyt8RXM1LHSetcM7wzSrn9MesDL",
  "key21": "4qRvvFejEoKMGXY9M6veGFTcksvufiBByJ33H3JpKFzLCtPQGdUipww28v6nywVYCh4uGqEnRbUemBtvAe7EhbSP",
  "key22": "fA3roBC3tBwjFUwnAH1i5t3Fawk3Rm6j5YVfvxv3M3fdDoBL4DnhU7h3ozRR5vwpF2fpwtVPHCXTQD8LPzk8tpq",
  "key23": "4kS7RfXfDsc2KJEh5Jh4MAiSmNARXVD2TRyyu3z85Lgp1stR3qr5dvKCmg7NtKz9tQPQq5SgzTuGTFD8e64tWatK",
  "key24": "3EcHho7wA5QuW9qaQ7SnL6Acja9s6aiHtWBH4zM8tcsWsu5GWbszTNDdPRtM6XM6zjjZ33CMkVcJAiJjtriEkLat",
  "key25": "34jhZFdY5AypPmwBEM2UL1fgkhGpkBdH3Nn5yNA5ch49QJxrWjQKBMs8Vb3wPtgBG57SyQWMfUJrPscRBi3oQK15",
  "key26": "453CkDztSpe9uZHa6c8XZTbQwHH1a41iEVS1xKS1G1bRoViBsC4wYKymEXp9M6Jc5sqJPGuiU7UQrtxyHxeaBVAF",
  "key27": "43wdqwszGn3r4Gtt1vT6cQhi24XKuzBJmdHT5aeEithC7fAfro2z27LWgdxWhN45Baiaz1HoRX2KEQ3CznrXPvSP",
  "key28": "iLFv1W97kYp1PUKmfbBajpTHaSm7Zn7qG5Ef9CXza4UZ6QtvEJz2QFL1DXcpRCaBMDzZvbXGKtz9woJA7MKj3E5",
  "key29": "57zAWuwxZbJSs1EoKzSRSg1iYvesJeLyPJZBJTPCNsmgt4wkYHBNrcdvXADFUwixdRmE1FYBaJKJtNjF3ZQtdHjU",
  "key30": "63iE53iArhSg3A9B3TuDnqxu8sM5ziPcU8YZzjbwGVYf53VcfiN6mF18aM29b73B1WZGd4FRENibBCHuU7dYfEwX",
  "key31": "3bnt7K77UFpCTVTsxyT6mCMGRr9wd9imgaRrz4KD4d4hfeqyd6iMKX7YXhuVAeTSqds5V3dWY79e9n1LgknuN2jp",
  "key32": "zaRbiunQzhmUsnU6DmjZG2hpDsHKW4FXCbdMydms3zNkzYtdWUrZutesq4avkrXaCx6tPAyMDHF2T5WQArSdi46",
  "key33": "2cSmD1V5hSzmTeZ6uvwZCc2jEhSYpeThqPGap9k53VUuRVfQo6Kp5ZaAhU53jsypxcy2cE9ZS39rZ1myfFxG4tQo",
  "key34": "3wmtrmi4d6q6A3hU19s2Pf9UxoyYiQdPjhXHAxKWt7cDbqLADpeycfzW1mxfGEoNMUL22jLdLPv6p6jvRagTx3N7",
  "key35": "55DUyE1TXaM3ahM51gf5YAXdxGf8C2Ug2vyJf5dUacZBX5ZAywe4Pa3tQNx7inWLBiYYSLXe8GuyypHV1f75fAHJ",
  "key36": "2LeW3oxKY6AvHdDETM46hYyHVrQdd4FWaGHH3E7rLb9sf73b8uzFGScqzkiJYYySjXLcL5MtEqxiX9Yo9EGurb74",
  "key37": "535zbuRRdEZ4tCpKkA4KFKAh4GPyD3EC8UtJJDRdPZLwKGjG9VBJGnTKtNPU6XJe8Lz7b9Ax37bBTPMRm8XJSxEX",
  "key38": "4HL18BEyRPixJb6KukLM87NebNJnKrdhKF29qLdzDdNvPQePYB9mgT6XFzRBz6BHZ1bU4vAM3opjWwATMk7dv8Fw",
  "key39": "HyFiNjou9jTLsHDjPfWFYLUqKPrwYKgDHywAqCSgP1Zgo6HT7xchkq3FRDu1syyHpGyjLGJAonf1mQRQbE12zx8",
  "key40": "5fE1pZh6Bq7VtNKfMHHYNeuSmrgQoweLJahUFBh7fWsvmsEmp5WgAkrKpa95Hj8bgfsH5T8bYYNW1kVmDhoDH3g7",
  "key41": "bCumUA4WPEzwX5YawGCZSKkdD4ABsB1en7H3F7DRAxFE9HXZ4jJsYYp5xGjEzw2KWz1qodrqPAQ29P3Q5miCuf3",
  "key42": "JaDyA6aYnFio62gHTRSdWuUgKkmc4mmC4gFX1iGPYHitbmWb2DFrcdksyPF5FEe7C8ttBEbma56sjH9TXWzL8cF",
  "key43": "XHoWVGJwLgy4w7ZyjviaZHpd5KR9xpX2YejJf9iJMPhQi1wLFwAYMv1Rcq1CmTx56HKb9tdhS3tdXgCcATjk92U",
  "key44": "3Upu6b6EAZATa1okHzMc2UXvzkjtvPfoAcDEnGgJCB1bkyXENN7rZHz6hWyp7yRhEyvnH1RLASNgwdLZMQ9tBN8Y"
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
