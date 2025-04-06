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
    "2WyjyTwPPR3pyei26bnctUc5HW9htcGDCCbPBX8VD3e5HqFjFUzBWdtsVWxTeKywgnDi7s7Xhqskv1xB3P9N7UXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPuF9wZZFCCuCqVUUXJ9yci6vW2L7jE4YbwuRMkcD5PboJbTRshSxoNoYbBeVwY1swNqABWx6RDQmYR3R1iYF7X",
  "key1": "4mLNB1c6UDdbb6sGdbbRd5yugf6BM5zTw2gW7FvvEnhhtgKNrWa58DH2Lfah2njfD2SNAofBekzy5zzeGBZXhHDU",
  "key2": "2fKNVa527uvXrphvG6Uh3mQVkS2bEsc2W3HDar4jLcdZYutqMWfDQduVJJeHb2w68aYDeFgnPRxzPGZU28byvayp",
  "key3": "2npWA4z9Bx8P46HYzD5DhzuJHzpSAsqmJFxCE2eG4Krr8NuXTbJ9PtC7vz1L3Ha3uhoJiwRy81RAt7NuNghLjcYC",
  "key4": "3bbHh4897zvbXrxpssRhRa4vTJEm3HBVfU8gH62hoyTgXhg67pgcU7DGvzU37VCZnTeXwKxyNXYRYvUHv6GTnh4A",
  "key5": "5rrfwxHD55QcJkVGjbFka9AffqpV2wx1k7hDg74NyeAiiVBdwR3QUCo3UkiGBskEo12R5m5RWBgNhipwdVqiWzfY",
  "key6": "iMuXwDtuMmrCMTQ8y3SRKJ6pKwU7zAYRdUDFYKfpQ7A483mmRBNyEEPoFzoBxZG9Vq2xnytYzcRE62XPTCSKHq4",
  "key7": "339Eo31SK4GJpkNZzxgVjmTZrXgVgxNxeeT2zkemE9dMMQeqbs3Bd6WVKCUiuxy1iugRVvodiVUYqJgqL9RmFshA",
  "key8": "5uHCtAoKF2kPZLqBh7rCJ8atRmEkuwjxyiEXDecdYLoAPZiY6Q1eDdMiWLEtyq7HZbz39jbNWHLzpPMgLZEMFuck",
  "key9": "4V1CMPwszkVgJhe8nNeMk8NdCaZ7MPsjz6UhwhowBBKgP3ZPD9UzfoWCPCkKu1P4KM6dgz6ywQNieRdymHE2vuBf",
  "key10": "3b8jzYAdp8jRmNzxvZwQwud1RhBDpxj8irUF436kXuM2KvmJVJ9bNQEipHYZ6kERmtTtuNSgCHi1f7yUZxuyxiCz",
  "key11": "65VwEz9JSoBg7SpHTzzTfB99cQYJFTrmsBujwYyMzLrMdJESjejfogc8GhP3TYtGgR77xF9mhdcC4ciyHwYSwL5i",
  "key12": "5U2xXK9ft9oskdUnxE3EGJpLaqPvou1WbEZUymgCbceXNMwZsiByzy3bW5zFNoe5GD2XFTjfmzoDmYoKFkbSGU2B",
  "key13": "HdKCB3Secv6NoHp3FAod2H7KyKVYX7fRJxPC6ZEdqpQSB7BizUdEJHpzwhjPQS8BqnS3wguhaKhGdojF7XTsY7U",
  "key14": "9NUrZuTacx36w2EX14vukJtgnNvhS7aXqweuqdCsZLvk6iHCzWQgucseytkPXwytiYE9LXxraiqdNAQQ8eQB8me",
  "key15": "4Xg52wwAdDfrczaEbpLV8GxUDhu4g7Gt1xoLCJ8nnMJz1z9Hao1uBbeFkCzVVCJ8utPSv3RMGVrMvX5wEiCyRzpb",
  "key16": "4nvt2iMQVsVF5KCFKbykZaMwcxdkydtAnswpY2PYiSEAEkiEVsjQLnRGTm8Q3XxQFqpfFt2MxwrKbCLA6K3FEx9o",
  "key17": "GpMxrwqeEH48vgf6V9JZfigpK4jqVbH5sHvnfKjmkaGcuz7rLzw9WGzr28FY5DD75RQYAtWHL8D6MG4nzJbfwZN",
  "key18": "3FohQNmQu1Z4SJLcHurR5avy6EWNEo53UC5wH25bih9qDt3McXWTh53pbxqwBuSyio5DqE1Bp25jZr8g4hR5KBdA",
  "key19": "3zr5sYV1pxiVXoGowWczoKNbtPzQ6BBfAaJpK3Ex7U8RCrFfPAFWu1zdAkhSz8Nd7QH2VnZ7FxKtFL68EEgDTYBx",
  "key20": "29WsNFqoEYc5quYLZgbTTzoZ1AUfRaJZvi3Y4sCfPT9EHPNa5tNWBX8jY2cnXFeppB9TT6qi2V1MmnqLLno8DLcW",
  "key21": "22YHqMdJc8EpR9YGc2NSy4uxZEB2Awyugf3qjkH4iYS2bt4n7dZFfpDG8uSyTwLNLjDWJnTRB3rv3Wd9JVMkwj2H",
  "key22": "Wii2j1fs4hh1Xgm1qoYBwHHkndqYcEndS74z4CA2KiQon7Jw9sQuByKhR4m8a7KFirWkMv6xf5dNvVZ82RvaWwL",
  "key23": "qHeUfNLSFdSQUAzD1LwQwBEk1inURhfggG3NwAvu6NJfWKmKuxkaCx3oZo8brde7aKZg24hkBui9VkEY25uJp52",
  "key24": "4MuStoUVxCmfgCJsZ2EGBSre9GxLPKzsCBCwe9Ry79phpTX2yfsDtsDpcFwFfHtPyf8GfaRQY7FFYsNEPNRpma9P",
  "key25": "5Hj78zj49x7E1Z9YtenMZZpLtx4cp7ELykqnZRaFEettFJYPHDBdchbCTCRPChxYRWVLSWoSLnc83phUguqPuCtM",
  "key26": "5CpSKvDLASUr1ideWygehJbuq2S4cp4HZmeHHUsC7cPFCHAQ9UXBW2Pxp5ncVABM1jP1qqD5ToiycWooj31NAu8i",
  "key27": "5HVPbUYPsXp1eBp18mDPCnfEabTNzrgfBvVG9qTHn5TkKGHqbP1fNQBVfhmQFc3M3myrDWTxvLQuDdwX5jCd8QhL",
  "key28": "4djPZv3oVcuK8ouyVSAGEQKdWTuctGYA6DjFd9edAaBhDdD3GsHsjoKUt4QaFQjxsxkcedfCvwvjweZrE8L8xZe1",
  "key29": "3jrKo1Bt2VpKaxd2e7mYv6gBiVguVYC6hsHe8PYa9BTKM4zeyQnrg4aoSPRbf38rw41GTUJmDotqp2ErPfBUbvBQ"
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
