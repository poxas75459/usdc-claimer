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
    "5ntSwXZk4VFbiGoQVSE1NMXnLvtRUvXPehmzULuN653yc6DRg66TUdgfJUTUdXnHjd35qFgp1tNVD6iaxw9BHn9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YL1FzJTL1BeqpfwDMaBmuCAY5kNUqichDcBK7xnBtbmCXwSCjMLjtL1eixceNCVyEKQYPChhn51c8XnF3TUvGvC",
  "key1": "dkT3go95WSD3GGuBKfRfU59bRC37JE2KJpc9cFxaWWpkZWt5sDmXnXvj6NgxZYX5DU64aXTbWQw6KXHr1tZhjr7",
  "key2": "3c8xpWNngnizaVYjxj5CBdMaRVVcKTfQkH8KhWQC1Dy9MQNBDnRi7TbF9LJwhFQMzK6Vhq4JnbbaDjEivKyoVJLi",
  "key3": "5YuoJzTuMUuMYcVNk73HiaBqN7uNk4CjVUz37AN2vb9meT2D694HErd7s5hZoR7A1dLArYc14tx1jrm6LDTvVqSf",
  "key4": "3L356SFzMeJZsZ7dsQERnrMcWUMpo1sdWghy3AcBsGmHSWgjuFdxfssLwgn3E5YWK4eZqTBZfFCJqD2iE3xuEKiM",
  "key5": "2QU9EFvbLjaT6bbt4x3ixoR1QJxhwtyxCgUunwRcrcsmcVFMgF1r9LNnCFwDahCY7PHD21ij3oHBww1UUjQVJiyY",
  "key6": "3azJb4wQDDZyVpqaHKig91AgJ8qStdYzfr4vQyKWYAYjnr4H6E3bhS7q1rAFcdX9Lwv7CsX6oLdGcBwTWNJX5ygr",
  "key7": "5n6Exo56NHPdokKCApH614PgvHW3XVx3BN9qKbgoLbEDyGnTQbCJCexv4c5K6VnxDN6z87vJyKQujfYKB7PrNM6q",
  "key8": "5waEcFVYCsjifJ65aUdi3mREz73qHguAbpLGVmrFHjXBQBPW7bDyW6jQf8wUCSjXNjSY8TPZK691noF4fhQHv4wx",
  "key9": "4xu5Sm7NcGz2mpqzDec8Hmdi2nQ6TEPV8hZyCsMHDosHCvHUj3Qtux8fqcHXxzisw8sxVzLQDYY26FALDNtYygvm",
  "key10": "HrjHYL8EnLhwnAZsUv4HfJDpSpL2oHvXPyxY29NhiJKgMDngfmkWo1yN7cH35UhGzqsDj4NxDsHqkos9sHmyERX",
  "key11": "5pW8yCWoZRzTmLJRH7Mt1sCrS9FLRaEHm2M48SsMzRehRDc6HSWv5iifuzrksKsv7zKBQ67NoZRFw6RQiyaxTZVy",
  "key12": "5JVo6yaMqXuVNa6fkDaEztJToZnkgtvDdD4TPqRj8wyzgN7vo3UbN49CYhHB2Kk5eQDQsvELtkAYg958SGcw9D1D",
  "key13": "SwvsDbwuWwQ8vJsenNeszWCkGj1s2FXXnGgAS5oXTY1zhz5R9EcNAiYwQdsG2msppcNaf4ByCefrg4kB7hU2kYr",
  "key14": "5FMSnJTjRtsnXE5mGC5iRXfbFxQYrZF2iZ9u5VcWYARg66A6pjko7ThJiaV3JAiDvPb17KECLqMuXZg3BKRXxXYg",
  "key15": "5Ni6AJdznbKh1xED8LNYPKLu6cSVMab3QjDU8MFPwd5D91upoCDT2e7ZZhZcngwu1ZRFCvxm6oLCJXzdPs6gBsMe",
  "key16": "5Yxm6jct6KP79MXUtBymmaF4uKHhQRJDup8XejxJfdtQkTL7zNsNhzS29r5JmhwiredfFu3qiaLf4PwVhM7QQaSg",
  "key17": "2LPP4tUVQQhhv7vNc6QRzNGG5UxFzAZ77XwDhLMyTbnFxMxGtuC9LHQg17tiCEMkixSyoDPrrAekxuf33ve6sv9x",
  "key18": "5XtnNadKe4S9wCSa5gWivF7ETCQk5VVHuzthP4jPVNyqq3CcWjcPv4mzL4hyHf7XZLWpCLjNMxJhtRuXtpG4BohM",
  "key19": "3cjLHwdds58xPqAh7p5a6XZNXfxb5D4P9cRkbHtfa4L1tGewCiyLLKUmStQhHVFJqTo88baSXLdh4eSQdJcAxfrc",
  "key20": "2rNcYWCQkeMkVMvPogD9KF7ZM1jHTacAnzGbCPmMWg1XvJjFXwomBuYLFEJuhNrrugNS51qqwter3HY64rzfdg6k",
  "key21": "2LK4bapnMZianYB2xzdwy7CphhgLUkFPAKwV6azoXXdYEcHCgGzpsr7oUvJ4FbaXrxFBDJSayNWGQX1hjG7ErM4f",
  "key22": "25fg7RYJhfA2nXNnuPMxYwDKL9Sn7pkGFMgD48hFK8QMmMh7c7Bo23sMEUrR5AcpkyduNMYp9gwc2DCsUthwEjhB",
  "key23": "3xWWTr2Tmxg4WEksa887jfT8EDFprwh79he2vcqhmDDUpKa7KdUaBD5Nij3P19okVcmgFp5iEC14k9CudM9ayfmK",
  "key24": "3BcoAJHvxbsZVbxd3GdYHfJ3Ahq1nBT1F8czdWWLTN2kgZoMupSQRdsg8FQ43NaPENpfnrN7T8xHU86NNPNJMZnf",
  "key25": "5y1G7mMaZkv9wCEjeEGNBpTJVbnVQyLhRybkRgXUCXxfhbLmxGd9zSC24wAFGf7SBJx5VTzcGH9My1FKt85GKrq3",
  "key26": "FMa1CCiaGnaeawt19MkEJ7LtN8ZD7RUDzW7k12BjruCZZH554hhnpCQ5ofWKXe2sFySLmVrnGBj9VYPygP7Usa7",
  "key27": "2T1QaSdjREMLe5fNtziHZ1pXewG7gxXxb2NCNXVvwHcaXrqPgJJSVKuQzwPdxAaTvcmYX4k9SzTdH6kd2BCoNhTE",
  "key28": "4BzxVFXBwSMhGuVgwHVPWc96AFiTR9cdg21RvGSZfsXZ8ndyzZZoz7uNMc1yRo8RXe3eBbSUkYatq1eQXX9XCUxV"
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
