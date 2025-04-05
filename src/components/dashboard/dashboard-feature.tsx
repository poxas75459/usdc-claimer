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
    "5XuCK21NtGERTFPavuJHpZTkuzpW23k7TAm8qGQZoWTzFMEP9Qk92DuzdAWNwDLoLqoJb63AXymoAif1U94Rp3Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mU3x7645bBR8E8gs3LoxMRf1aV4Mo7iup1EuVqio2Dy4hhXQ2gJ7WAK5EdNFXhibbkGUh61Z26qBVV6kXUU8FHS",
  "key1": "5JNUsCCAULt4GG4aGebcxKKcJ43AXVb26oAPwAtFQixC9we7EgFXGGEFu7aTpmEtqwuCr63RmxcZTE7veL7jqE52",
  "key2": "b8nYBumKFiM93eCcpDWBEouRJaFQUvqZkLrRnEEUVKMnQavo96zw1uxGoHpLto4YTaePQ31hXMiR3jGfiibqPeH",
  "key3": "3hNZD3w1QFbTTCAaWqsNHw9gtcvM3Xa6jrRU997ChSVW41fEMEdj8p8oBiLzWpNW7tMnhhkRbFGRyL9Ygumw8sGY",
  "key4": "32gKksUYZaz7UgmbeDv8xEqh1y34aHSB6qBVNwuXNm8KUmmLp4JSF4jtZKLUEchZ8XxXVghZYgNtBwWhPvN5C4Kx",
  "key5": "2hAToM66PqAN5aEFjfmf4dC2g1ib888xgFH3KR9bLx5aoSwCf9P15JYoSfMZZohADgn3o5apHdKpdv3mVvWKMEF2",
  "key6": "goJtnTS9uXHiy4QiArmz59htNwJy7bJppAJf9NvfDGWgB8gui48fsmNcjiBdL9trAWk9im6KAZFgf7xgzSYXqcz",
  "key7": "5zBXa7pZF2a2qCgYK797FHqCxyPt7zaxLo7qE96xtgBNJmQYp33Apvm8eYaoTX4D1JnXDMaSoMQ6DzgEVYDqyoMJ",
  "key8": "FL89KkDS4dj3ASFV3GyoqZUFvoZUWHxUZVW8teRvodyLkDjYAmaTyNtWDGSonzM6LxcKjyvx2YTd8AdpPmZSLcv",
  "key9": "5wwUuqsRegKevADfA6Bbe72tmL3ZHd2qeJMYyzuqwbgTBdJfEa9jxYTpAPBiz2Px3eKjaD39P5epDAMoP8G3evPm",
  "key10": "66mg8h1t1sYNc13g8MUDy2ZkRVahv5RvuFWMW1yy771vb9UFDYZkimXbEcue92G9PcKwv3ucF2zGqo5rQURkDj3d",
  "key11": "5u43fadXUhU8P9SStZwdCwdDfmKZvBaMbo1u99SeR7NE5iGNb8ktcevZLQYzQEzyrVhSNaWAiKHcP1UXxKuJKCTz",
  "key12": "Xj8QcJaSewKXAR6xPtYQraRbCGG5zws8VvLe51WsMcMZxcG9JgJiGM3CohiseSoZEReL8xueHy1G9MDsHEpt5u4",
  "key13": "3QdwFU4bBAt52ShqhqdftW8XydTCctfugaz4ao97cYAN8raDqVfHGidx4J5fSPSaxFfJtk9WbGs1YWvk1PAWPn4g",
  "key14": "3BomuBnbpzhFDo6jrF3kcsmwc4tXRzGzsd6oe5LvjCLkGptw6jgTHW3kAXmhQYCQU5ujNEPjcQPAWerJiGYj4qVf",
  "key15": "5yJqcCb7ptm7FG5eM3Ao9jMc9CgS8gJDSH2A5DWfxwbu4rT8DQNq92nnXXkuSeDhbnVqqNhEQ4BsD6c2hxo7rfe8",
  "key16": "2J3dHGeCgPdoYQN28GQys16KUb3aZ1o2BB9ZDosYsVpV9urqS72NXDS9k6ZtKEJJ86mELWL6yRTfGN34KV6iMqsF",
  "key17": "5haNMWmLbfLXv5CSPX5JNBYjiKPjkhsiVcdB52ZZytMcowBYrAmCNgm99eN3kaTeCYDjvnj8HvgkHAcdL6sQftAr",
  "key18": "5Wzxn8zJ9XwBbnmUwoXz6QB6fp89YN6no8ctHMKgS1ybjcRfWFEChwqKAn2UhEznQKCbeHEvJuckjxrbZx5HZ4UE",
  "key19": "3JrdWVhoyC4ympQjYsqTZkvfYMgSQfa5VupANpBMTb2hVaCEnCtxyr2gQQSBoqu4hJUtLTcA3kTD391PeqKbgVHt",
  "key20": "5JnVzX4faNT32HeismZtD7HmYzHpvrQNtUTNNsmdCGWS249tMpxMne2xRP1UaNd7PSx6gPw2kySdeUEevyUho2k9",
  "key21": "2wELGtUaAw5YwJ7Expsdyoz9C8B1awomYvuxewECqBrgPHbr7ajLRdmDQjjUUpGEJyij7W4XqfTxePNZJ73XtJZP",
  "key22": "4MyExc515BAdc9UzdKQ5EQw1xZah6cu5B1grVJ5EkMuMoqsmhECLdPDAhihEvqqbJCpWAFAkVMtFyi67UHpLXrrY",
  "key23": "ZNAb8rvaNBK69cwnFmEdHekPFkj8JMJFVYBJ5Bx6imHMbT8QaFpJ2aJ1ikUDj41CnYSWAjw3FKjgiZL5K5V6FCX",
  "key24": "qBNeuB2EAiJKHcWJM1Joh3baAU26LmGFwdiL2x3Hj1EmzrWMBpjpxPq867tZ6raowbg5yao1yW7wzScC1xPwLp7",
  "key25": "2NY3j8sNamK9Wxo8FVCE52LeHGDYY9RoLVhzpKt3iAndCSadBjxt5z5VMx5FbCJ99hmTAKMiHSE3JUHJEVuQLiZo",
  "key26": "3rk7DZPb1fmxZp1sBcTvavTuaNSwAEZAzX793Fbhp89fAhoahZnDWAZYGRjSGRV3r9m2TdT1KqTCzYkX4HKGNBFy",
  "key27": "4h79Y8HcuJZRmYBYhRqVMPwV5c8Jfxbh6BCneAmkTVH1oEodsU7gftHGKiMfVQuYbtAJFCyNmNrTJ6yL7LbPZcrp",
  "key28": "3eDXdAzy8Gaac9kxFQsaZKS9TuAzgyyXvUKZG6PUhsfRHLjdbJosdr3fT7asbYqJtGJRPXtbtFwFobrGeJv32QXc",
  "key29": "3hC3dxPopQDfWPz5uN42TY7FXXzKefWzKeYGXiddtFJvEfXArN1yZp8sspKdMSdj5g2YxJ5d2Ph33LJ8fqdjxajm",
  "key30": "5YjVPjNXFFGZAyUFNEkUzpD7t6nzyp16SojDR7EdzpZvRGWiVYStgZKcBtecpYTMEvoLPMhoKdiLTxmQYDRie1c2",
  "key31": "3mngGXyqqRFAsQDVk1MFUXdSeNH5yVaCKzWfvGDH8ht9nyW1F7jr3qPpnYg4AhdYRUxwzb7NxkgsLeMRTNR2CwjG",
  "key32": "5NEAC4sG5z1ByP9zPsih5NLUixTemwdNUCuQGLmcSLpvw2Bs5FExDbckRw6Rt7XXiRb1uz8J1FdeKTzyXiSUCmZc",
  "key33": "4PvYnZ5oR5kRSUXMsLuMtJ9P4Pk5H81vs43etrfFCHdJs2buSRWMhX39qVSKUvyGzDHXrxmNTS3ZSTcrokVtuHSv",
  "key34": "3AJsYk2NFe1vwU97DDxgaUTtfVTq268rqHLSDBNiBRRhutPJqduE8CK6nWGDHZrNEFbK3knHWjaM2J14b36RYVm7",
  "key35": "2vSsYYN6YUUaDFkwpHWAU42R9gSr3oEBUTZPaMab1gZHjHdpVMac4cnyyioZquexzmd5fmfB8xiGd2qca3KPWnzB"
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
