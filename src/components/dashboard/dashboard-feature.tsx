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
    "2txpcCG3TFVXRsQyhXAwC1PLVbjzsuxUCc7saevMtytPC3ko6GNQyTRH2KZJn6w7W1NUuMpYvHitLw4oHigbctQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1VgT358mifqBYGQLk9wRufg9Mhb2wTGshSUVgvaJA6CkKQsBybCCiknqNCNWhqHb5SjrKcaVpbSSSmKVztpG7c",
  "key1": "2iJ2J3YXNzxdaSMa7QQhnrrnWtuX6qVFjJXyEuBM3dgXbYNki2CbFWFSpMRK72RhjqyaLAvm3C91sm62edyDKE3e",
  "key2": "2FceaZNCH3Kdz3vt8N6ZyC7FEhNoMofa4fCsu7LchfK9fysWWY98NdyDy9dr2e3pKxwtdcwJ4XUajXUEYpbCsmZD",
  "key3": "ASraPDj3mTqXNyPopNPWTPEF8MgXS27ntXzPfwMMdRWGTxNvFEz6S8EJF3jk8b9o4gdeGPADCp7vsawnhKsMfJm",
  "key4": "2cFvauNDG4VHXvxhgPRw4816H62kTESJiVGbtk7hLGnutR3665jHNCeEo6g94Gu6X4mN6uDKfBFRL6NyDq6utoxx",
  "key5": "kwiXabwySqRuqkMs6zkQa7y2F2W7EyDo5N3e6AwHp9kyZo4DzcyfFVfcnDN52fFkCnZ3fAFuwHzaDyqBYh2qwLX",
  "key6": "5XuDPHJvMe8NtrRzRTVnGQoydMT8B3oEuNbwM3WiypbcznxMx3xHxHFTTJe6CvfQhXYpoChHXbMaaCsyumvrKa7D",
  "key7": "2Di2ZxvTcAjLnoDyLtfQXfH8EoKL4XqrhUHkho9qzPL2cXt1vZsFJNWxU5E1JXJ3AxF4fpiQhUSHNPqs5HAjyFtk",
  "key8": "57vHwUbwutqnZreNEdR3SQDpiWqgntXHuseRP2NvTkmcf9seTXj15vbdsfkCYZMHTdSCTAg5WpDHYUuRQnd7XdcE",
  "key9": "5FUJpUDUYo6UaeNT4Srw1ThJsoKAdLcjowk6WgYv1qcpF4cSZkqRja27cXKZPbG28MbjaiREn1bEjkrYqNxDEmQn",
  "key10": "24N9SYFvLZKLgSQ78odb6Pwa5MXZ5xoKgQqMum3CSxfbys9NwEEZMePej1Xh58uEmmCJK8g2bAd6cNSyn1UVbvp2",
  "key11": "3F6KwsjhxY5dihZqFtrinjkELrj7JatH3v3X9MnPHHcpHTPHnPXfqB9JmBKu22UF8eyGSWJD5rz1ijr1nwNVam2j",
  "key12": "3jyGdVBXXDtoVdPa2pZx9vTmPb5U8eXW72y68zW2rxXTKxdPdov4XKSQkaZQuh4ZUpKpWrXHmCFRXJ1e4RHvYjFS",
  "key13": "5CpVQVcz3j46hXeRnKpmTd4p7pRE1aWgTL9PMWfxF8kwMzb4bsV9usvM45USb4P9seAbCpmfYeVjZz67mF93iYA1",
  "key14": "3dRtGNuaCpVRoPvZmktZsCpr2qHhAaM9tdtF24iStJTgcwPvSvbNYhDz16kZS9zwtKGd1jqWsgmYF1HsK55cPSQW",
  "key15": "Ruw4u4d96kRrpmLyskgPoXtQcnpEFRN1AgNvLrKteYZKYwzt557VJqgM9FwBG4Pwo4Yi3rCArcKXAijVJKGmJe9",
  "key16": "49ydMgD3GSQcHiy7YKtyDgwrDDxfnu8gic7e1Z1sx8tpVMXuqDuQkR8Gmj4QQe1LpKXCjD8sKWXJpnm7fCkwuEbu",
  "key17": "61Fk5muTsp8DzDCj5Tqvq29aAW2k57XSPvuV5KYtCeyRXtHHGgrz1CfnRC6VssnwiKXvR4EPuGsjMPNoUaKAG752",
  "key18": "xovJrfr4HA9PqPuBWnzFoznQeiacqyhkb9RncX1VfoXAhJjGJLNgPuL41pv4oVqM1sU4ds4r1tnaVRYGHhhSjzY",
  "key19": "5cLfSr8RrCYwrHFHTkJYFkQCwcs7ucbEVQQqwmHugkhuUNBpM3GGurAVVEga5AzF65NXj6HuEam11rQFsGBy58Yz",
  "key20": "5yTBZmsoSYkWRwnNQ7xdb63u6Nn2AFX8roSYzynj6WzDmQjKxzrQnRVNAL7t3mcXPqRDbkjn15Ktbxj5bFhBMu1V",
  "key21": "48oZDBg36ephkDKKLHS41BhkHQ5Z1qBbYBXBKy8q6pSDz1hVdJYP7Qac4rVoXYwyAfJJbLtULRkcBfhtARpuUU3j",
  "key22": "3Kpq624wgU9ebVKqtdpaYXPM8P8dfVJifGL1uH2wXaimC6c9W9uh48oTzox7DeNDR5LWQ2CYxsD7sF2eXBwnTWN8",
  "key23": "3bhnoqRSp5jfJeq7oL7bA6fctmR3EX6UYRYdJ7mmra6wY6Znit92UmFijMktsH5H1kY5tzWgqpjnVeav9p3jPKP7",
  "key24": "663ec1sLtdsDZxtf2x8UXfC7ig371BBTmPeuSDHYXEDENwNDHSyK8GdEEBeT2kXCRUxZR1R8yUMwX8xGf6oHR6g1",
  "key25": "4XLaLZcYan4yw8fqBwR4aQP3gDbDW1hYKTgJrFqNdxuHeFQt6BoUQHeNac2LPZF1dw6qpHHAbV4DZeHRHtqrYxnT"
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
