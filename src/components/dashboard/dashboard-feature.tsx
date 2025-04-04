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
    "3CaLu6brx8pdxLn3HEifXXhn2x4tP1nEUWJCzSZi1sKw6R6adcvcKb3xMtzsNRKhXNjzPZ7x5txsuxRqaa8Z3o5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YYXRZBdJiF4MjW8DXtpx1cVbSy1bewZ6Lazfev28XEpKjMEkKkKi7WDirfZYi9JNmNNmk2QHM8C9UzN2JS1Q8C2",
  "key1": "32R6w2qFumxiuuPXrnXBDnB4UbMzMmFEwDDUwdhNNJX54fkoTEbjDSMPV1KYmSRbXCVg2WT4FKk79gtf16QJWEA7",
  "key2": "4QDAyDEWDxSdSLSzRxtqdq9eDJrRAeytGRMWmhQSDsdL83aAu5YU41QRABU92vJG6yTHbWZAckzf9NjcqaMbPK1H",
  "key3": "nSP3FbhsPmRcuSXh8qpWS8kgVLBrPHB3xxS4uJpxuhvaBfhXXgdzUENnsBSg8yhwBC2WsZSPQgGYhXjrtaHh8ar",
  "key4": "2WZ68c6UtDZs12HtRXDsAVfr7ybWe89rKQnWV7WQ19ApgHcNnjYrrjViMyWmYC1TiAuE7gwoopxUUsDseokWNtfu",
  "key5": "pktMKsoRQGWhm9outFgLoTxsPsNyEtUK9xQZm8iSXXEd9uMmfMHUhHRouBPYiAtB8Z1cbG3za6AzhEGf6u6an5x",
  "key6": "5SYWq4V8UQMfrQmCcvLLoYNeZoRsPvNECVeWqwS3kFh3PgC3dWMYVhPTS4kHPY8bYqDt9sPtBCra8a4zcPK7rusa",
  "key7": "3cgNErr6iJSNfroMNh8x8TryiEZTkoekD6b6j7qTiAXNZMoHLEHJjv5jG4ideEWVD3CqsBor5tyETPNw4iTMLKkw",
  "key8": "3T5qbXooU3V9WCsnz3am7NEvf5Afk844q5EspSpQ5M2u6A2nz84gEsVQVJQCHDmkSxdnMU54YyaNB4FWfJ6RsaP",
  "key9": "A5tiA2FwzTTKyVhLPcLuhQompAqyDqVoCxfqK6GkYUDYNbZ49URGvjg4Vruj8YtxpwT3nc9ADmWicsWttAqSEwT",
  "key10": "Z7b5SP3AEPneMSjB6N7v6vUmn2GZgNRYVbWoxbi93vMw7E1yrFVr5rfFshgudwGHntM3c63tWZRUpgokpYjxSGN",
  "key11": "4MrtJRN1Xc3DNgijJeGBBAVLZWM4CN1RvSLWDL92rJmPAoXLkV2kaBnHH1aft6oTZRrofJnqpjmsEcAAxBZbme9Q",
  "key12": "3rb78UrgxLSi5qTb4waWBYcqSiCYT8apMHw3DJBjEis9XMaxMR7yK9fg2V8fk8HmV1h2ixg59i5iyBQ8mgxwdTUL",
  "key13": "2CjmUzpbojzJXgEfL5RMQcsJfwq3cMx4wffTGvfYDQsmWT3vqS8ng9ZP2kH3YK464twvGZbdJ8NNPSkXVMzmCXqY",
  "key14": "2CFKWN1AE6kFKFZkMM7zbh7ziwsbmL8U1QCGw2tb7wPdXDPYKveiEsVQBvzzTLGDBQ5nJQq4ajpz9RJapwLqHMen",
  "key15": "39kRyitna8fv73Nw1JatAzrep9KaScUy6enMWAy5inozqULcxgBUa8Uh8dR3UkCsEVWXFUXJ8wFuxEzd4QTidQ3B",
  "key16": "UyGWUfeoqQNopYGFFR1xZu59cqERZaUYQKSBXZSmnscLDdWhuEgc6uneRribU2g5mduUHnDnjS4BYDCU4jDuWtk",
  "key17": "5TjF2rC4UrTfyH2C5dGp3oESqmgEmUmc6aQYHRwEAeACZP37R6eekQdDNBAyU162B1r7xVL5W9G295JFyLAXTaic",
  "key18": "Z5qk6D7fWwbUMgK8rBqg5BLRXWekAQnTUxmBihJ1EDrnbwx8bYmVS1uETz9VFSDV35kkuYPEoaY5rmJ9ryChr7Y",
  "key19": "3CHKQfdReRX6wBtdym2EHtvzXKgmqkSJdESThSVvffUcAAVUi8Trt7RDBaR7DTdhLCSYt6iEZoEKa4rVnrpTuhEY",
  "key20": "2kAN1kiRhKLbNdFPiFoRgJ1xpvDfcLDyEnG1Kg3ENhk8zJ5HSWLuTJmSqgw4SNn2CQahM3zRqFtCAVGPVvRHPm9w",
  "key21": "43z1DYY5co9jx73KvkmEMCerb8d826erXvvWoyyUsFtL48CS6JHzLpCZsWJBELBTBCtQVktJFzMmQH7TQKL3LJgg",
  "key22": "WYfREP2wvbCcahdtrNqgUwnPuXX2R4FTp4SZLwdbLyqqKXnwzVd9GVp8k99LkWtUyz4PszAf98QctY26qtTYNfU",
  "key23": "kDi8g7jZ7YSwkpw8cahRmzFgLHxTS2U3JkpcLk5kyNV9vGZpZ3jErKLpGhzMs6moh2BBSpMsVrqsLxA73SmyUub",
  "key24": "4ySTWUw33v2k2pDfjtf1fw44syJ8EJqDGqmQ63An1huWndH2EpUvgSE7X9YRyfXCVHKf2ohohfVHVGDqf5RgJtt2",
  "key25": "3qVWWaTJ48RikK1HayTdz7vsfvzjSHR94CJs7BxKUCU6dKiis3YHtCxeCExjuXjYwJhqmTXsivVi2mtXdvwffR5p",
  "key26": "4HncVNwfUXpCZounv5xE6xDhQHf6Nq8NqBvh6sGVTFSNtv1kRxWEyLhEq5yiB9rYXeqPTXpNtA7U17yAocY2gs2F",
  "key27": "5hdQ4UuqnjVJuuzeweRE3T2hxdGfsZSYmPfLVLKrM2gqW4QhibcMyfKMgPpDDeJfFVrF3pkA46Bygt2U3zRsNt5X",
  "key28": "4ZDBAsU9PonfAoxXKYVmD5nBurgMSsXi21whLvCbvsSCuXm3J8f5cXx9vG2C5tHbjTtMfgpQswNUyBGSRZ9oppLC",
  "key29": "whYjqw41tNhzyijsfr1S4V8f32Q1iDbUsGFB5ygVMhZz9LGqujTkT5LEZ8boVw2Mpfi1GrmF6gc5pgU8LnAXW8w",
  "key30": "3o7LNN9QXHKr7izMGMcTjB3P82ocBZmNx3d7sF6kXBfwHeUYQ6Rw4J3eNKEqZML6zkdn53uENVdEMj97HsCHUEkR",
  "key31": "4apmNfpRzkTqtXUg4beGSAqcc7tozbq6sTuaNhBMxYVtouyrpentd5rafo1KfYzyw4tntUQH6N2VM5Vjh4G83U4",
  "key32": "4ZNPi8pyWCaW6Hc11TMBJpLcz6aUFCUWF5Pr3UBYQCCFiLtE7fo5L7ViM2ET2e5DhL4ThXAnBh2SDGSvwoP82B4m",
  "key33": "49uJkYJ3nNFKTMudKYM2emkSZnpNrcMgXUshxYdwXWJTjgCV7wpKgjFYqb9SdMQUM4K2bn1ouA4HQV34BvVmdpiZ",
  "key34": "5TgAC4axj1v6uUo8Dhch8ng3gv1X223DjjKR4QGuXxkCoHFT1H6LDikVEuamDwhbd5AZr4AUkuNvb2D4KnXBSinH",
  "key35": "3SL6HQrPma1wtN8EfcTwNeivkMYxvegTc3CyKFTcduVTNC7C7fkpv4rHyoQqWCBFZBjJjk3jR3YNSdpeEx2yST2P",
  "key36": "5Uj68W4yUAa3iaQWyv8ev2sbcbSXdn3ghbcbrNS1KKjoorGKwL4ucUrNmBsepQ5T8f5h4x1VVnbRq4fqF7U4rp6G",
  "key37": "WtndBsbJAdJhsoxFH8wpuCN6oaQYx8YRZTEtvkZb5LrmpHpaaJQHSAh2opxy6oFfX2rZNnjr3dBRdtATLAs2p58",
  "key38": "49UjuRN1WDZdwn9aSumREeKKG4ygAvhZPnRcJvNHbVZziPZGHDQcCfKf7HSfNjF32Ashb6isamDU5tXiA6t12M36",
  "key39": "4ay67xXykThxe8DQAnKTnJeAKrjj46d9LLqhxqzJXkF13wyWPAs2c1HCFU8tXyddJwgLVfVweLvwaye9zXfFpf3t",
  "key40": "5sKQ2MS74kC13PL9uayPAo3fSUS5CoxC6gsJPdZbEUqXqjtdktHW7VReTX3zEq9zaakgNgH4CFPmKYaHc7ta2PRo"
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
