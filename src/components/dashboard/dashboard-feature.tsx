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
    "u57WUiha1D3jbpDTXpX17VffJ4adA6s3Ehb2e28bUsVSfQbJaperLqHzw8URC3pKoj1H94Dqgc2mF2EnUJCGK2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLR1Zv2nrWMoWPG44STW14Ut82Tvda6ctp2A8TcC9GvqC3H6sRDrH1udW7jMhTyVZ2yTBuiauF2ZQVy3svsqKrG",
  "key1": "2fMyvb2wVu9k7KkrbTaBELJjizYobs8ZzQqMLbhiq1qviP6CD13m6Sk6fZiaRsBXKvgcSnwuupPwnngr44WhA6k2",
  "key2": "3NKwmvBtHKVUr43k4SEVQVsWeMXDc5rUU8Ty3C3H3sm4BtZnTEUvPg4NLEwFUcsG89TEHBnUrCxKtMj2MJf2Nrbm",
  "key3": "3RCVo4RcZvVMdyc19PivuHUscPWRcZXQyFzKkngQxH8DZhJdaXWCvnBMboqL22FhNXQSzbX9PkJTwSDg74MsUDJu",
  "key4": "5CH3zGZuaqsK6814N6s1126emLCqxnEWyYKuPtdE4GSK7MuRGhLhixCxjzr2Az5wsFdFrgvy83bdEoZZKUpFujL3",
  "key5": "2obgLxgMo2PNsPaFp2nE682SVTguVK2VDNt8HUeN5Xdcs9rZ2HvHgRvtULd9Hamz1BpQ67PJN7yfMQdZ7y4hEcWQ",
  "key6": "2m1NXJHyTKJtcivAFMcx36K42vVdSpirzZ595BtR2Q4Jp3kKXLygjhJctV6JmHX7Lz1jJ4WJZW14ykxx3zrgt7vG",
  "key7": "6zRKZ7B9EoXRqTsukdKyNc9QaCGAsUDJsWUrP2VoFx8zNLvdq8yE5nTZnUBWU3sn5ijK7UedkzHVxy3XhjBpPsu",
  "key8": "8Y9qQXeoZJQZn7n3pXvEs9caqNj45u56sQ2tpjJA9AJspgY2sGYjg4Vy3iKxAgQBRjpr3oCbXYBEaiFjEiNJnuG",
  "key9": "3w9wxn1EQrzfzXsr22fgVo5d2bGjQyWg7CBD8DMcdFU1uhJyoQXSUEATh2STFcXVGEXgbaJ2TqhMJCHqug1ZwLa",
  "key10": "5SWum5dBs7qV1Q9u2VsG2Kpd7aQf1BA8vBKjqe7sWjprerb8sBVKNokaCBxCE2D3iWAg73udxHT2pu1BrPqtzEdH",
  "key11": "3keHt6qjny3mnSUmLz9T7yp61yFWBayfGhAK7wocbMVp6rQRyssHLcRtF37wA9JiqBKdukujNuWyUPtA4EdApMmo",
  "key12": "2MTeq6jbos6j3yVTgb14nRPh8ZVExFAibFaJQ1WNmyDRZXLkLyAEo7neooB2FcLbybNmVaeFiZfnXeCBL3m9hQuy",
  "key13": "4KXvmGtW5z7FvLYDD3vFJ3Gtpm43dLow3oeJypQkv2XvJ5QfxDQzgc221CECxcG88Ey3rpYC5uHLQVryNFJMvx2w",
  "key14": "3FyZBBgkbzWnPvFFhQjDNNoStEkcBLJ3CZEw3kzqhrtfJMWGCXax9XCngqKvRukvSQegothfH9tRyrsFJ5Eo5heU",
  "key15": "2WZgA8abo8ozL3RWF19SPKWQtQPJaTtKDLa9zGNexp92mffp5x51JXAhWR7eHG9HkDuaLDFRmsQUFViY2Weq1Wmy",
  "key16": "2BfvfoQ74aVz25KWLqZ6c1zExthWg8Acg1Evi3iY1HTnoauD8bRZDP5QE9obHeZiPXbhLParrQi4bCq2bnKwYEdM",
  "key17": "2JL45C4aQz6Gus55noVGuhhMm6X6ZRcfZyUbjmKMvpeGW2SE9BaTuHYa3W3fGDH8UZ9MTQrcxzRMrzhNoaRtNMnQ",
  "key18": "5Tg5HnN54qr49bD4L4zFDCZz9GLcuUKmsXE1wxbzkE4v9yrB2yCqeXS4dYdAmJDfR45Q7WagsbajWsUS2Vn5NDdD",
  "key19": "26fvPQgajtoiQgpS4T2vbZ5zggDj7SU7p3b6N8xxuSbmkwHQpC971VThCDQeqjvvESADxt9LTG8d36KnTpg8xWN6",
  "key20": "4sQar7Ff4gR8M4AHBqu8Gd5yxv3btMW1E6WSBQHHG8itRxwXs5NCZE5UKjeB7MB6tEed4uXHg6ybR9VvpVqRiSUm",
  "key21": "ttGVR67mvqzT2YPd4b8emmGccrSEbHcBjbLXiRPvQCdnbHstavUfz4CxsC7Sh3pHSAq8ob7w813ZUc4yeL9W2qA",
  "key22": "Ebt7A624oqJpSrx9kRxaWMoajMvqYaut9g5Hr3YxRQtQ7dDsz47V2uJoQmFZsVjgTo55mmycXSLExYjg8oLxQLC",
  "key23": "52BK4AVWm7tTLrSKY5mkKfKNuyCTMzYs3WYWhvWp2doAzrtLWaReHhdj2vc6Wbu6CF8BKq51nB59gp2DUotXZdbf",
  "key24": "3H167AURogAaKrgPvwKtNjviSoetCcmiybvQQ5SGxk4JGLXxWYnkS4n6A9pWEZeEurj6KgGJ5wezJxgEqQRyzeFv",
  "key25": "3TX9UGydYLxq2PA4GN2XC2n985MNryQaJugB4Wf9XeEbxSNTyH3w34yy6rB2ssbyS6Fen5sX3trkWmzBg476Sq6h",
  "key26": "3dns5VNvSN7VE5L26BsPnGJyXr4KqS2gfisrCK4EA2ZjEX3UZCCbxAWf82eriU1B6RyWMPE3ERHRAq8V8maMYuHz",
  "key27": "62zc8KAcE7Ed6q2zhEUGte9933F9VdKQkzXtTzfTT95BK9EvxFzARbSETExb3DGTtYEuJpz4Bi85C8xYRnEP6NaA",
  "key28": "3VVQZH65Kr7grfKMzNTSiZB5E1yJ3CF92aVreLtKyfqZGpfcHmp1kD1tGXJeWB2V9Zx6WzicKdzRvnPBWgbow1MC",
  "key29": "5KrxHZ8YtPLpTL9qxEEx9R3j81xYxF8kX7wkLYxB4eSDajxqcPhXiqjMVTr734hbcjp24cC6TxqtDodddVhUkiqC",
  "key30": "4J4vVvEz4Jkq3HGEQqK1hzfop2XtE6iaBuoyXk5DWeaD75HvrbtsGJqGV7a2WdeEEXu3yNgXEoF2s9XTzmt2j7VV",
  "key31": "2JVT2koXBGVGzAxjXxAhoHWgDLimGiBoHtfRiGqxqU4fMbAKQT2jKjTQds3vCxZbiZXSaFqK1cqvhTZqa8PgX6mf",
  "key32": "4DPmiGRNBUV5BtLm9jcxXz2nuHANno8XjwMp4gkzJSP2o9NQCCLmGLBZDFuK8QCDm1t5pr49uwexWM7rBCap21fB",
  "key33": "3VwqnemYtgQPkMnUjnD4y3rAxUoGDhXUEZ9VtH2QkJ83nwzLMRcankc5B3TX4AypDdsbGp4FX1EpWsNRTomxYywM",
  "key34": "NAhkURsWiSThvSUm1jUWjj6yW37N7w798Ufd9uHtR6dZ5urjotsQoYKX18GxVBkapcVuf1eq9yMAHPCxy3WMvM7",
  "key35": "3ksTw1NBN84ZeLu1Vb3dqN6CgcrSrqAXaY2TyHQtTiYvbjUodR6MQA9YbMW5UpksiRZgEkdkMX2WJDM2TwJW3vkx"
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
