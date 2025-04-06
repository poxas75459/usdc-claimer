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
    "qTe4LWYHab1g9hp9fVfUpk8y5ApCgsRcft37SojbLqUHbNXR9YCFxAQsWyH3YaE4dgqNmb63D9KjrQsTadMFe63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yT21z4jbTk1Wo4Hs9TFwNj7kmD4DfMakT5dDCqkqKQwGbCfmkfDG1Gw7mwX3zXqnKxG4ny9sAAD7BTSqB91iy6G",
  "key1": "3799Nw1G2WZD8EvtLznyAec753TNKXz6Lpbkw85h2di8eD8DrFqKmerdqs8v2buKyekFPepsJss9Kgyjfb4CdHCN",
  "key2": "4PBHJX4uWbKxP4uKy9Wg4ddstnwosND8Z2Gyj8eiiGfWEWh2zqTQsXzw2ZyQqXEoqT9QcFzUad3WUp2APcNyJGqT",
  "key3": "3Skx9gu3Fzf4RggDzcSLjCX3EdAcrmGtaFw7jMPakH5jajstZRHPR8tzg9rR6p8x3pA8kg8zK1eT4yMV6opwBCzV",
  "key4": "3z8eTWgPdRDa7rqan1aDHPwQte6FyjNkKkQmFw4G2zeNmW1zPntJHYoehoEzvhtNgU2YqJUqsfSm6Esfyuy3tE6m",
  "key5": "3NQdhChtMejrvH9tb659hmXqbmWx6dcSusYC4PARUi9Qf2Fg4BwaG2ZXfyro8NSGL9ew1khbfqaetjEYKHkdDczf",
  "key6": "4AqC5a5K4VWJKVfUdC87zLPuWGCJkwvUhyLjPcgG5o4ZsPanJYfQPARkctnbDRtfqsGDD6b6W2Va6nz7sKEqc82",
  "key7": "3an83NRGGFZuuEwf4gdaeqvMfTrBKZRBwvpjpc1J1xyX3uiXVTr7BwbgDHA9wEa2QdsC3NvFwV4euZpte7QYfDB1",
  "key8": "4zTjyVJ8GkBLvBuWhkWWvGMhfwgLZVwVQ7tEPKueP8qtLprxqZMEXRP1cYzAdci4sLqW4UFbyw4jtLpVAevorwZN",
  "key9": "5F8YF3QzhEa9ksfrH83o4SfByKcqqJ5rW9cMvnKuV29wtKJ7zvAssEPQeBeNZfvJa4zKf5nGj36hLYHvEUfXzSNQ",
  "key10": "Jm7csjbMJ8gPc9rwF4XjnuZ7vwaDkm1kaD5UVs7YVC1UWoFp9kUcX4utN3MeaXL98QAEiCDpekhDMVUxDn1ehCL",
  "key11": "3eMYUnDEfHSSuWGxHGy4qasH7j3pnCmgCUcr7J3U9MmesP9WGDbsmHNqgHSVwddqz4qPcuJF8Pxuohjay82Yjy3G",
  "key12": "2UBYo5F671Wjfu1MrDbYvv2hvP4UzM2KHgezjFptNiFrSis9KprxJatQos1A7TUCtWr4MsXL8uoPkouoxowM3ZeU",
  "key13": "oiFS9VhWHvQNbfLEdV4abn9F3yiNSYEzf8M6u6UhzjhLYD1gKYb6NZTxfbAxcJGB6qna5FK5muW6jQ3K58sKdYA",
  "key14": "25k21V4c2YnVQHiPBWUiU9W2LnpLxgvVSBCoo7bcTtTmTd1VN3sjETyiAwFh6KtQWQtU5dPJLnR5kdWxAmhtsync",
  "key15": "2C4hwGmJUxcCWenjq9HeFuWDfZeVsQMeWpAimNop6kExpcZoHBELTm6YPvnARFfZNSSvfBGEA3ETRm6ZGWbmbcRj",
  "key16": "2xibSkiPsfqifB7Zv2qqeYfjPaHZy9rox4s2WHr3DAZsHennQk3FfR5c5q3AXyN4vbzwrM8R9A3hURSfQ6RU7Wid",
  "key17": "4PraGZ5VyEoTguVuvTqLiPX6nixkzk9KecEQftFkyYeAPyQzTyHKojoYajjGH5neZAW6tpaEH9bTVyG54a4YRuYp",
  "key18": "3ZezQToayZigq4AXSaJ2G2XiDX5SXNixMpXMVP1qcBgPiksW7XKKXQe3A763kjAHdpZ3pQY17LAY2mSyhaSVyKRN",
  "key19": "47JjYTdt16WYtBWCUbKz5sYock3GhBatwiLPmw5dLSgiJBxx6rXEGnEMqZpR3hfuUJwRb8zv5b5UEcuDzokXhCxV",
  "key20": "3sG9Lta9EmDifkGgMmfDKHx6FJ8qBTCPD3UDhT8AiU32ZhmLEvUnaeAG8TqpX6uB6vWGmDD6NFSJhyiVKKpuXSeH",
  "key21": "b6QtNtHrMtMED62TsUd539wLxY6JtxVoQSdztiFuwqTuwq6drZrgSsBoUNi7hqf3RiqZRSWC64qtVYL4mGKzxQD",
  "key22": "41Zhvvuh9NwvaigqhwZa1euvQ2PueSLoXw9Mj97ykUQqt4MjyPh2hVk7nNbrefKPweeETBP9yiwy54t5i5kJhxv6",
  "key23": "5VoxuhhdWSyB7AQxrsH9mm4WZXwYfyWN6U2a5fRQHjWo7Cnjd6Mfi6eRW26YzyGDvaJZ75dDMJSJ7UKZQ2Jk1WjQ",
  "key24": "5y7WjcniipeGYnFU3XXv2FMYf1SABTuWr8x6gcQKhEpRpBAGLw4RPmg9cuEL8rt1QMsvrNYnnmRxk8pBprr8gtMM"
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
