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
    "35D2Ye32xYmuVc6sUFzFt7AvTojjVVw6aUPS4JyHacQpTUXYFHpBBj2xtuSLCxNBZSS9utm3Bybab4kTbSgtkkfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzJNx9jVUmpPonJxcSiKTcVg1UKiFQiVsLngVPgMdJshZTXwJhWUqBUZ9ijGHsE81hJSyXsN28E6nrh5E5PUvTi",
  "key1": "3mj4UreftZSezHpqfqzHBMmTMWQRyLFN1KvceK9UYFL7MBeXeW78kJFfdAMhzVWXVem2PnyDDuFVa9U7w2VBhqdQ",
  "key2": "2EM9wvhMfr5UjCDLqgDp7uDAkncqpP32wbpqsT6sgYjsMBrfth5ay7iwW2JmfySroFVjNT9TyUx4pgh33CXj2rcV",
  "key3": "5j96JSMF9jZkLGUFXE6rWrFhHntaZrTS5tZeM2KfFFPuaEkPJo9kcS68rC5NAQPyTmqTaAn1hva8VHFYPBNcUCJG",
  "key4": "5yNjrUZZFvL2DxSweUuynsaFfXXkF9LspLYyui1jJN7ktApi4v9VtodwqQEQQBtknvaVssw433Z4B5WWX4hBqMuy",
  "key5": "3uH4azgmdzh1TYe76i74MEov5D3fAKdiZ6yHdBQd6B1oK3aS8g2pfKUsFpjrAB6K4eXiHKmgMa3uYXZ57nXw8hJL",
  "key6": "2Du1YEoV1nTUmHNoBHVSfG8rRqpzSYKLuJZZ27STC4UDeqdHr9FYiy5HGTmML6S1ZpHCQ47sWZ1AvfjbSts9XDRW",
  "key7": "3FvmVBs9V5kCecgfsC39AwptQfYzURcUdDGtrnj6N6V7qHSCPFqJoE66gKb1ugc6LsEfvPbVEJYAybEuzZ7bbiFn",
  "key8": "3Th9XgZ3mZm2eK1KmEV9cX9kDfb2nb8bzbwvT5LtfpQTAY9bkcG1Q6DjsLsiGUxueFgAhZVBTXkREMCbgQGvt357",
  "key9": "3jNfCFQZV4vqscvHvbF5WzBy7G8vxK2kCfmX1K4VRBZU6tHo52sPGGau5MAVTsp9cfouXa5Lp9twUrGcVqTg6LtD",
  "key10": "2iZQun2ohJ2PV42Zcnu34DMu91uHrWfTkmNMrn723X3zBaPdeb2E9PUV7XuXwEJzvLZtXxrS3YeDb2UNhhkzZVZ6",
  "key11": "3PmQ6u4XLHQUq2AVPvTQHdkneEjjz4AJFwYx22chVaHERuNMV1o2LAPRHwCHWcTqfcUanGRpmtF2nxg9EMtZpa2B",
  "key12": "5n1HkbEoNJscdUTGch4QQaqwQFX7bcXq45BSAnsQ39KLcpW3YQ21KdS4yPBVAANgcLohB9yTzKKp3pfcGrUkrnCz",
  "key13": "3S8tc3sYBEY6SiX7puxwLqGXLBtSaAXXoDxrUvgSHThBXmy7yYS6PjuoSyyXaAkpnSZb8RKk3qwNWme5QfYMcwnp",
  "key14": "STSy4H4qqwH1BhCCcX9rWzYFJBYpFTwpK9PQH9J4QUbPtgZJf2X46xG4LjWtZkVWye7KN3jd3S7Yd6dRVdz4n2y",
  "key15": "4QCMW2vamtZUxYEJWMVhTJ53dAywfuUPRUHbeqvwHrjTDWb1x3UX6vhswnPSTg5fLSz5kx2zNyWfAaQ4b6yjpaie",
  "key16": "4GLG2C1P4525rdQ3N1XdpCuAwmtTmYEJNWuSnzYYMRt6K1TR4ing4oxZK9VH29hYJRZedHxm7SjMBSqbgmfthnZW",
  "key17": "E61fkpLn2xXW2EYnt5c1sQBo8fjNaLxRUZo1xZGdVN63RPFKQgxAuecuZok92XCLatudDLRDsbxiD6XKvwYigo7",
  "key18": "3PZniEcamaYJihuTm1EgYM3NkV7UJwyznN9HGgmCrJ4DMxcLT98niFSjWMH8pCGGG41FuakHrBiWFnHz8CxT9Kqj",
  "key19": "4t9PrmB8ysdUDrZ3T8SDd5tdJaHrMQybTXonmPdgtsCYqQJZD67oNvxFv2Dtcu8NzJA3dDnLJxg7JFXpjdFwxdjf",
  "key20": "2ECHVq9SziVTvPWuKjE5RCeQYC4P9vpuyinscRBcr4J3w17oFGFzmabbXMC4dUW4pexZ67skJCvibHgUFye2PNRu",
  "key21": "31qUUc3y4VsjmdCuVJN1EVYjzLPvEtepU5BNceUMTQjLgfJF8H7DpDCNLQyn6CDx7k362XotP9qLBaGw7CbPUDtS",
  "key22": "2DVEHU3FCLHME2okCMGA27VjJjKUSzLBywA6ic2jHbuu3k9w53YNRmzuVLytuATYfsoegtUoE9einiV4UERfa7UW",
  "key23": "2RgHgDkApYW7QvCBtUCzhnVwrq1o3J949Z6WXVx6mAJD9s4DpHoMcpbSMvFaNFGQFYkTsTJpPMMxn3ewVA515DN4",
  "key24": "5ures8MeyrWvuHaVYk5UojyvaRPQdQo68td1GnyETUy8fqgmNBFyRwg25MtnfsuKEWyPUmG425V6hJy53we3TMdP",
  "key25": "2KZqgpzq1LwthP6T7xCgXXYLNZbkTa84Xf8XQGz7i6txPZpnhAPunkfSEUpWF81dmvvqFjcJCm68gfRYLSWRNnfA",
  "key26": "48zXyeKf59nT6Rx5Ac2sz2pVGYMdUYsYiJbC5cYBt8o9hqHy1STcK6c4FLFGA2chPKgXR4EkVmUoVNZzhoB2zDKv",
  "key27": "3LTEVmR3aU8TMNVmGpK9MDL14d9d92DbU3UiM2uSBxSv2aNcgWHtjitMHVjMfuRkoibFb3pTcvfd5D17f7ZdQEYy",
  "key28": "4YRNhd4qcdk9ExfxgJPtKRvBTsCtAn2K9RZqnJ1n1spueXJ2VbwjFA73GQBmL1WpcN4BT7WSFNcJnKc7ec1VFcBx"
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
