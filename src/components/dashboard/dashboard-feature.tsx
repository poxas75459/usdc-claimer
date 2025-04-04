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
    "51x5Aap2R1V9BJd48oNSwqhRKJLUie2Hx7GHBBmCi51GTZNqaXALqyjKd8yvFFoN6b65rJXVpF8sF3q5jknETyxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pYJUVdmZR8n1Aw9k5sfQNG5TRMt7KaahHKEPKM6QaRQy1Y5BshMPSNxTcSyPGwGsa8Qpb7s4aKN4qaAcJiJ3w3",
  "key1": "38fkdf2XjtSNdsFfrhd5ggeJ5dfK6bmXZuTwHRjgHsFraXtU1Z4sPCzuKfGYTqzQShv3AJn61qMeDorXqoEhQvPY",
  "key2": "3LrJZBcUX2ivULSMcB38YPL6PJoRRr8eV8jU3v41F8s9FG5KATMf1ahgcdjgziYsTpz6TUZUaGydNyRViFZ5hfrF",
  "key3": "5RUzna9bAJSxoJSFGw5y2JvC3ZxFT7ppMNUtzASbC9WGGxeyQAZwG7APL1DM2RQo9xd8hCEUjbtgFo6ycvrPntWB",
  "key4": "4w93k6vHnaLijs4aqaoWggRWy6pxx7F9CJQ8GwU1EJ2g3jxdzERnNcWXkc6y99nBRscjzxmoRWQdd6Lf9bAk79Tu",
  "key5": "4TKwMYffRBKiHk9cAhaSGXFNw5nN4EcQj31TScrKwsyjkkUsGppsfyp5oPSFeZfGqbHxmK5EKHteiJF9Ai7MeCrd",
  "key6": "5ickVQE2iTV1SmDREfvSAgy6mVEGJuSFQsAJuQjC9oNvqiNEDRnvaXAjEF35qaoqoz1fPcjsYUKSmmDAnAb64YW6",
  "key7": "5Z3akSyLasA8E53LV2RQTE4d3LPGMEWf2gcvf8VJQKCr65n9Xc5Toy5Wm6CWJYvW4YUhDtfMd2nkTRzMTppcR5uM",
  "key8": "8XzRCYyK9APowvVTuqwT2xo73ngPPWjWmEjKAcd4cGSr9JzECWhFdwV9SFTKgArjrZXSb3NB9ytqMHDJbq349AR",
  "key9": "2imZoM4A9guoFYKGLvV6LGEn3vNjTXjoy2ZzdnBUmoFSXkY5Fc1dk9Jo8kto52GpnHEHgNa6Y4gSSAz1xnqjiHTj",
  "key10": "N8L4FarZA9isohqZtB97HH4PjQED31gRQSbAhAR4ZrVn6kLL2tNBk16Pd5tkcpQbT5NCVnAVBfkPYeXGjdC4yzJ",
  "key11": "4gGUMSFdbYsiHytL7iqvVdd2UmAJnkRNsJb2gjMMTLJQsiaqWWrC6abPKN6MSyktmDZUGKe1KPaLoGYapNPzp9E7",
  "key12": "39nSSEpSMkHzS5bK8JzQ7xUQiBYFHpyubQXfd3QiP8RPMRv68x3Mgo6jF7offKubd8mymRDSL5UnZ9v5neYGtKGF",
  "key13": "65VkK7H1Y72hd8XZM9VNgm4xGbaqzpTsBLa7Ppm2QoDAzPxtDBgvRR4aLcih6w2g8pKvBGu365CTFyv5Zw1TnuC5",
  "key14": "3fYgkXJAUbLQkpYzXdzRU1LGZ3vdcyyikCQRaJm9w42jK7YY3wz6uzLXAA5PrdbgvFmAbY98ZPMMRacSZ6D2Xv1X",
  "key15": "3JtkQAye4GHjWYYFdGXJ4VWi7R3nWEAxDanzEfAiZ5Z7se22cWhj2okMBQZjVi7YrRNrcVQU1obyinN7mknxboaS",
  "key16": "mfZWdVyFW6VbuyqKgV6oHgZEQvoLTLkottzGQ88tfBysdioCkDyzrjsUEoRwzXTx4tSwsMfuFzLcEVHgoeiQkhs",
  "key17": "4eeTrWG9phEdQQR5mTAFyyows9wAt3d8HXxwmh8XxQvMPJo9zGE5NFJQRbDSu1dYx5DDg5i72xkRjETwUckUSz4q",
  "key18": "fzojaep5ZFcHkAYxYTA2U2Ns2ctNk2gMuQADfEKEzLUaqEzNVCXgtthq4tKiNkP2cdK7GsVjL5LYypZkBwtiLZZ",
  "key19": "3nc7PiXS4yqbLNQazni5n363PmattnXgXbSnTacpY9iR1USdQzCrXjmEV2jcJKouR2hxa1aNhphBeo7WuJBRYDzc",
  "key20": "4NdJb3zQfG5cpuTJrw9mdeTfrt7otT3Ro98SUWgHRwLESQvvUwW9tWB1PE3PL2icQSsG2frDnhJhfr1Ykt4xYK4F",
  "key21": "5w6EE5pxm4VAn1qDG93skH1NJxR7xbDDVyoivKttzegkL9bo8zyB8MDkLxQVc3cUj61fPmdw42FbNXeWWAbkQWwJ",
  "key22": "23XizhKM9n5MPgeJCnjhwvQwBgdi7ipnTeiPN6voLsZjDmHBmNenfND75qubDxTcQRfMarr1rGfF9BfLQTQERdRg",
  "key23": "4Y1fRM3FSTQaXjuChDYb8ykA5SavCY1RhybsLjwwM3RniXqbyrXvL57MZLc7dFLazRfgjE8ys3xyBfGaHVrxaSai",
  "key24": "2esnccgG8H1wEDqtcGGVv7Cu7FBNaZJ8abdqpZBkAf52K4D8CDy1ExDjzYh8teVfLoeTvgrdCxQKGpRhcPccSBJ2",
  "key25": "55gVpPAXDrCuAJqjbgY5eeUKhbsjTanzxD16whpBNnRm9Z6HYAnovZ5YrvPvBfmfhCSGgfSRCyVUcbgPzjsSjygW",
  "key26": "jT8xrBN5o3bNxL3ZXAefvvJUrZ675NyiDsJYYSWwfjsq3kS9DkVmcxCrKtfDBpaNqA7rg7ZYgEcFbCEHByUGS7J",
  "key27": "538QuGwtGhJdkaXG58z9bBtF5coKQGPUAjdW47XxfoRcdxUpHDZt79QiGHfnLb4wGk8vaPUohjYxPjsTh54c2Vw9",
  "key28": "2nobZBmVrnRVX5ZrjQGPLL9fbCE48d5BRVmyqxZZxspzoVv1MpzmV1eYC3LVUiSruY829mZ6qpCCEGWdENxwyLjd",
  "key29": "3PT64xtMmU6GFPjL5rvRf3vdzGxcC27zSbWAnvfzMPvf59LVAyoxWU7N7UJBKqHvpERZTGyadn3jJ8RBWSR8FZy1",
  "key30": "2sZuVRLiSVF7FCrTxC47pZN7NbkBk11NYxZqJ1A4qpobskDKJL5LNMZRfnABCTc5drdEtLKMqxemNorjE1ZeMJHd",
  "key31": "3Un1BwfkDpviSiT7Bn2rsegCueSwTVD3GwQkMK17fo7Av7w9gioz6RhGx5WWk46VVVs8qFCfMtpUk1PhW5coAYMx",
  "key32": "5kxNo6Qq9or9f6mfmtrJBqsF2PGEq2reYGb2KKV6oP8X6XeZM72nXjj79Gpc9XfVDVcJt7hMY4Tgw1eBhDFDs4tK",
  "key33": "5ic9Q53xawedBsEikir8Dz49MLFY29kVZ3vaPHQx2ndaH3aRs4BEYZ7fRbLY4a1D1ESjGB7LwVsaT4BGD7KsLQyu",
  "key34": "2RdE2Gwbki6CWEaQaZQPnKhFvXQuWhdj7iKXA9iq8Xti7KS26EfXNj9tFopPwqffCapTXqsTxh9vqn2FGt4NMk77",
  "key35": "2vUGLtTN5scM3Nb3KbCU2JSnGsKeNtmBmhGFrNWhoyATmHydYDnrUuYXRWs3n2h2TfCYRMXhMK3CfsxStXt9zwTK",
  "key36": "5P61sQ3mV8estyXFUP5gnpNWBkb9tYBHevZGyVUzpepWeirhxZQTcLj2kMz6qEBsMfTv6NZsHigU1xy2oe285XXz",
  "key37": "kYgcbf9HbmGuFy1zQRUzMEZ4LrQi6BPxPRMnB7ruEuFiwD9BEnyeTq23p8cS4MYKL3msmuXCsy8stSzPRb9iUKv",
  "key38": "5w6bbQmBokpEyPEuoG9ejxyBoXEnettAbaPDyCf2iM5uqoP5WwGkeitbo1comC2GK1iQZnMvyfz9p3BGVjJ6346x",
  "key39": "5xQS8TwF8vSkYYUn3Na3drjVYzE2FsV5boYnmXc9qWPMN9fyngedoLBVfaYuS57NNk72r47kuXRMe3G7b7hHs7Dm",
  "key40": "3GAKrb1sbRnTv7oXKbXdd86rBYHa2BArSrK9aCuvZt1wCa6Pci9xWRBei5yjtirpP6y1QdyzJ8NLr8snjJSKQsym",
  "key41": "3QCJgfrmbVXUMvTUUj7pJ6ufcrARzs81QjPRQvizUw6makPz9SpPYb66Re34icqrENr6RzNzruT5NEvPDkdikTn6",
  "key42": "64nte9b7BJDdRt2f1zudAbLZpbGMxp53HfxsBH8MErN2ovR25TrVkYJpP82wapYj2g3hLSvmrGYRj9L9Jh9BYZhR",
  "key43": "3DPEzZGuKAztUcUFtZFwVXxtyhfW4XNWKzAeddU6omzwE2mCDNnobwXLGHofUdupvhqg7ioLgy7kwZZtnr4H6myj",
  "key44": "xSrgHQnsev28WopzDK8sX7S1MjMqN4AJWrKaCVFLjpPzaWvEDNC9gehFKtH7gbtsgL7a7xAQYs29ziDVLVhdMTK",
  "key45": "bippUxHEzptDuxM3VR5CxjVD1114EakbhadiocCR3UfPCNbaGuzuiicYQG6M5syrCfA2rbYSW53K7mbhoRTStGb",
  "key46": "4nWB8FNrzPjpSm6WPL7GAQzQiziqgChW8CAN6Q1Ysk4a8RLRnXNNRTncwTG6ZwqbJJZN2cjcUf3U4DjQi4G5VVHq",
  "key47": "4nbQanReaCPMuDFA7WKWrMeyDC68ehwzMDpshDK9NT2P3XRv7VppEvmCAVXYs2tznSQn7nGwf3X57AQcsFvc6FLs"
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
