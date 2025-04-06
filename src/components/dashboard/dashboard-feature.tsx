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
    "3ZmfzwpUTxN6ZbpJUzRvPv9kzjvqqvy1R86pnFM2gVVTtcufkdZ3csFQ448kCJ29PUqdgnzQNRBpRwjNRwQChXV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZguAt28xYpr4uZSfoXBgRHiEfDjygGR3EfHtvEcQHNaYDjhdqSSiqHZmiozyK8YJ7D2ikkwg5thE7awggxd9ap",
  "key1": "2dttkKraLbAULnEnUeb59prWvcFHT11kX8dM9w8QsEEEo85hswuaGzpy4CoustRRW9ctB5tAUbCmPsbSQ7KpX4ME",
  "key2": "2JbgiFQNtsv28yrRsS3L755T1dcur1H8yix8vZgtky9nKcJiLKSvp4hN3hAk6Ma1kCv2UqEa9xdKGo6osuDAURhV",
  "key3": "ppjxPcfwk3LC5XdbsTD9D3tJayCGpL6qgt3MMXdYGCRXfEakad3zwFvEBNRyziUwTJXDxm2i2LWWf2nrZ4pHMYk",
  "key4": "5uQJNWSHxjoSh8oX7AXnszzYJGD9F1PscaVuyHDGSHta1EEaqtdEu3uvtyvUAPv42dSguM6ehjrn9tVT2porTBfZ",
  "key5": "5QKRGnweW1MGaaEbRn54pkVurChekVUkgRbJXGcEjFMi4AZ42Gxt4C6y1h71GZiduSARwzESDbNAf478yPhVM32x",
  "key6": "5QqosiNG1QmiQoicmkEW8rMthJKcugkfKvreDuP12pN9fmko5mEH1Arc2dg3aKhhzkBCL87aaAMwbtokEoGm2KJq",
  "key7": "5d6vikdVDpTh7xcn6MfJqyNArMKpju9PWb9M8G6qkCiyh85cdhYanzAfmScPMnTY7zUregFaSsjc9jgGALEb7XxP",
  "key8": "3mnf5roRQTSt77aKXZfywtcLVKRTaMcjVmdgjZ2rtyELYiqWmsGHfc6cseetDPhDCycufPvjCbNQBzfRuPSbRTue",
  "key9": "3YUKgRLdS4zP9eCm33fM4Txkm5CWP4HscrTdzg6K3D3JR5VsrDNMzhR2mXXgVKRXs5wo7z9fjbXTYMyWXF8bUFsv",
  "key10": "2pXGGMUb65Jv1jv1YSPruRbsyxgDiBVGQS4TFPegM5gx2b1N7SPsYXp3YSZvRv1aGS8T4VPj8EwL84sKCtsYQgBR",
  "key11": "5qEDkhy7FC9McrXLiHhVQxx86vAL37CSUD5mMERQsbQ7yc7VWQfPQpLEsLUHzZxciDJcA577fz11T6GBekH7yrqS",
  "key12": "5jewc1MsnwuPciLCL459LgvabCyCqirpokXrK3EwqvHRALTAFftKcv5cK9ExhPtHdgAC2aoLS3TPXUyyJSuRVqFw",
  "key13": "3MPvCfDrmfyoGRMWjbq7v7XVPJR4Q66uNYRMmvibqRvrgtkM5ceLu5go7n6qBRwsfnjaqRNo28ZVxDeSoLWEZAbF",
  "key14": "4DM1S4i7p5wnUb5qJTw89yXCM59WLKQBqwVTcZBSSSzKbkSUAwnWm3k8YVroebEiaEFcD4bWubPpkkyVwHNt99b4",
  "key15": "5TFDNytDyo1TayHK4metGenH8Bc6v2qg8cBw6WSheqLLKXEhJRCuFj8LTjutnyYPnxHq7LwgejBQcfMXSDrp5TQh",
  "key16": "5kzedNT4s5wdXqqunQwWaUKxPssisCEJiK3RsfFHV3nWxDuDnkufDKXT1beCvtAjsFQ77JS2tUnx56n4nhGqWG3R",
  "key17": "496tT9x2EHyzG7o81U3URvKhdj8BnuCG8tJzPEo8fEr5wsbm2Yn6dJBudy721M9o98PfE8323A7YzYBC8Frw3ySh",
  "key18": "5QJw3bhwX3gvV2uv2j6DLFK3w6Z62AcST9hwG4tfffEhffwrMpJ4wEFf3y3oyKxaU44UXhnBNmX8MEnrH9kYygmh",
  "key19": "2wyuJPNjLT1xqFKjz5HxpQDuYHJ9Nt9RucuFiPQf1xSkCJBPKufAd2ee4Mwsr96hqCUZrHBoS9AgKMho6dRmmzzb",
  "key20": "3dKtc4ZKq2mjEpTVRGNm45ZS65iKTMrknU3sXKFhhK8R5JD7BAURhfoVSN475fw7WT52Vb4e8S6bTM8caNwiiguD",
  "key21": "32kZgeVXhqxuiR3QafPzuPLHudpW5e7rKaooGnn5kyZSHGWxaoX2VQrmF2fDL6yepMS7LKjfpCAnsaiptg3nt3qZ",
  "key22": "4FAkmV39VUMYGRwdGUbz9hUT6CCT58HsrQoLGohg3HL8bYMNjnTPHE3AHSxkyXtV9TmYAWN2R6HjLUge3YtH1Hex",
  "key23": "2PRKBBY6sd61bd8hq2qZm6vkRvZqCKTND3Tjt9YpJmXXrMms3ExXSVfgih4SNEg1LkxwSDVwAqbgXGxZ1n2UL5jy",
  "key24": "4n4crprhf6JkciGDbSCJRBuByHKAaBx2knneBWYUsRSZa4ceZGjchTMgmdDkWChpasM1BYghqA7NKP1eopteut6V",
  "key25": "4ZCSRnhU6jAxPxgV7c7272Y1Ub9STKNH9YoKkLUuZp88RNwngkzYrKwCmHQBysHxhgjdxZYbLzHHQH1mo72MTU6P",
  "key26": "2EMtYninydSbP7zTF1MAdokB9ZxX4MREH6yM7KbvHjPjhZ8LHNf8pTwhCdPzmy2Mrr8PwETtddnW415WWpH2frut",
  "key27": "veFkk5op7Dut8mPQAeyks4zS4jkaYq9ju3kMsMssMPdSPFzLYwBDtFAGKuEXVJr4HmcDyn4Y7swtPaWNUQeyxdv",
  "key28": "3cjt5M89VLyFsKQWXDwddkSLtHHhcas5D1jXkvjycY3C6tEfrvcEXuLDE7wugsHzbAbdEYAePXYDQwDGkkZ5Kaxh",
  "key29": "7oU8Yrsnp4H72qgKSXyHjCYKewMJz1QCrEueUA5WdHTVgm1f4kijiyGTvy4DNMcpE6ERLxTHh14yyDcEkq8uYmp",
  "key30": "3cfMVBn1szPGPQockTCBg6FRSRL6JLs2Keze5jG33vMpCrUtpynaPrnRwQ6vFNKwKFqP63pSkBfESFtJ3MtokJEs",
  "key31": "4NecTf33DhuWCmzJNHsNvt5NLYgo6b85wX2ZSXpKcTH7RQHKQNPiJCyybW1vBdn7pW4wyUY5x5ZDzqRyLvKEcVka",
  "key32": "5QbMkeDpcpKuAj5bQVBU38SnRvxfufXjmPNYyM39rx5F9VQ96GwM9H3G9V7Q1t7z21TGTyuGTF1jBLMZ9JXtUjvj",
  "key33": "34sZs8HQomWh3fnEfcaSvVvFAdNVbcJUxoPGsgBbZgUa6as5boTfKbmJVAihTN675RgUEFSUa52tbTe5FEfgVgYX",
  "key34": "HWfyXrLSiCFaQvaiiLHKMD8wKVyEYZZG2b2fRvVHoEwsqWj4jiwXsT1V7eLbdAfrtTGyYrPaqdJDp9Un5vGcFES",
  "key35": "5vef2ki6twn5TQ6D3rpUkTxMqyKkZSf6obhvCNoFvz98gKmhpXpFyamUGvQ4XbZz8mjDtPy8G9PUQFkMP49rHCyM",
  "key36": "5UkGncimTh4P9FSHa9Ahp2dgeMA3tVRAFaSTdu2rcQwxjQzv2Pg7YNLNiib8jUUFhJcFZ15ttEeXbuzaY52HSeqz",
  "key37": "2Rv4KqdcrLCXi7gma82wVfqZvaJzf7sZWFAxS8VUD8L7xTDEnPLLXNkf15QUsSEgpiJuGLA1GjuF3bQecEPudb8y",
  "key38": "3VebY2Zmp93NNZpaDGm9KkRRGh93EC8Nn47RbFZN7RhCsD18X7fYUVfuaibu2WxbkK67KpKLLBtcLtFkuzDDrJgJ"
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
