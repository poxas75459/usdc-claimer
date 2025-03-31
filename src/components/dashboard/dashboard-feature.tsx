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
    "3iBHGgsjL1fPrU9mGi4RTUQ3BAKLLMwHV8eXsivA2SWf42P7brpgW4ikkUAwRJh6dB8o92iChAkwbrfnGtmaPJiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyNcqbpNCA98Pscdg5BKjMm2qBC8pfJCVmXorEYS16zfxR8zsiPYJr7KhxZXPTp3cAMX3npbMmnBgMgLCmKkpM7",
  "key1": "2go2GYHx9dAj7v5wfeoq9u5YNcmKDv4eGHd4foWTMfPKCHhz7Pjrqh88HnnG2MFWck5U1NjrF1SVWsFQDcqQJEAE",
  "key2": "3vqy2peB7eyShaYpRnq2giDSmGMc3KScTczzv2UvYg9Qp9xgAvrZChiakjMRientrY3UuPZTJnWWbXRxB7yHi8DT",
  "key3": "4F6dzgnJJwusMDr8iDieQtY7Loz7kbVkoLjnD1RVeqirZyA13HmtFgm4eqUdpAp7qZHGghbnFTNKuVdBrrfnX6WW",
  "key4": "3fP2LaHzASJQ9xmTnGgZWnrck93TzYzhHEBEcDRJFVTCzNon4SMAsHBCBnRRm6uLHGnYXe5QLZaqoogtJE3YFcha",
  "key5": "4rHzf9MG1EcVzvzM6n2HrJgqWx9b1inKhyGVSCdkwXtp55unp6j8GPn7GDy4yc2jxJ6vycm64TiLgmbyWyfAcqS6",
  "key6": "6BPZGRxEHPrTsefiFfJtUXJuX8wyLZuM8MBPXg5eguywxqzLLtK4c95sBNbSXbA4eEvHK3ULYQzerpUhMdofhDd",
  "key7": "2Q8xLRpTBNnDQXNjFfj2tPbh1Dd6URcvVV9zLcrnu5aARW4wN5QhXLqAUDTe9mXQVbrgdBSw826nnxz96FLwhvVS",
  "key8": "2bVd5SMzXXBZAAa3npCWjh9sLv2dqc38YpfQFagFFyF2B9H12YaFqg7seaMhT9ffYaUkVYP1X1YmrhvCVkdSKtKa",
  "key9": "3nd1V7DRnpEhymEyM184Tsap7Ka5ecGf9NaL8A36nC9sv4rJrnWF6hwm7BvcwSsU2t7x8yrwD7oZ1rZJuucbJP2N",
  "key10": "JZ6jMHbUvK8o3SrN8RZqUvH4WoYmYmZ1RgNZopT4WhiqsMJQxL5hFRXxuZq9oXteSDmxwQAofaPkYhLVWUfcjtx",
  "key11": "2AT937yaeo2ydN5NPUUxh4eAU4drQsnQhJk115DzGtsL7VQLZfMmq5M81TLekEZowuCqcQveSToYBnXm4J5MnFia",
  "key12": "4UhVJ85yChnS3E5nyjNLVjJkMmxrtgoSg4LpBkbEPcySNrxxKAbTxm6PQvbMbuP7bjFqNUQvZC5bD3DPY9F3cEVx",
  "key13": "24iahoQTmEJ7MYzB9hHTvsicXp2smXeqcdATjszLPv9dkUGZzxbA3weFLuFpCi9QVxHgR293jb37Ffwx2AGhdn9x",
  "key14": "3EYtkhpgacAmvtq8bHZbRTZMeD3nAJwQPqb1rGt6AbTCCUveKN2DvPWJ1UnKh77SZTgaLuw3aaj9pp8vEtwJrzyx",
  "key15": "57JSCTs9d4nwHq7zj4CK42wUSH4rGjdtTY1TfnYQgQcWa2QaiMvbMarnuxXEzS9aufDsbwZD9jBdCTzNogXSxkdi",
  "key16": "wCGPksUZaK3TzHmzKLGRGvmjt8Uoa9jbh85Hfxci6r3MsTZC6SYYbZmoKeH3gR64dG4f7X2a8rVzAV3gwALow5r",
  "key17": "4o47serdoPKxxLrZCPjqX1BRfvkZpsW4sNb2P4EpWGRz1YQLRzXRF3w2RYSLVdswXBN1Jq6RzBZYKP5hThczztVR",
  "key18": "5iLgxJFUK3oD7G68Ct4CmjvsmqVmuyz6AWmY9kmhcTQEsEsd3X7C3r3GeLFffRfbfY3LrjpYz9PL4dXHHZRSNzNr",
  "key19": "1pYqeRaN9gpi2VepPz4Ha5mEfhjqXkqaTkTCgnxKwkBSRcXg8fPEWGC2nBSNxAvZvZeJSpYyPUw8Ec27bX1HFTc",
  "key20": "66mfz5ZFeGwJFqa53kdWA2GhwyGAzwg5KnbF2MHZU96d6Y9fCeUifSAxGdcSEsMTFjcte2L919twa7YHdAfq74Jx",
  "key21": "2rPtdJ2gkXMrCr7eJRjzneV7QunXxjLB3qjas2Co4ePFjqkw7LanxhaHWr9bVgGhp5WpXbLsLgssLuE1Y9kWVB9E",
  "key22": "48eD84ZGckAJr5Nx7gGCzmrundsSJyDxVtBiHKY8JRdWbT8GTHj74VeYYsUnrtNgnFn5rY1cwFV5vQPGmaqivCXM",
  "key23": "25VftrjB6X2ARBwBJZrTeMLWtd3xbmWVBgp6ouvVs1xhQVtjw6n7sDZbMk6rEU7Y9pRaXdbGHUhCvtuYExaSBtsQ",
  "key24": "2k6Remzsg51ML1XjJHfktZb9eFvrWqTGWfKpkEH96bfkSqhJLmwVzuimaVeuoDuD6pzid4qUbzj7MUSPsZKKmmRa",
  "key25": "3sScfguDX7VkDecyB5jbDRngLiSCbEYiKFGm4RvNFgyUQcQKeHJduKc8U9dho49zdULaaU2cyUjdH4mbm6xTyHeQ",
  "key26": "NxiG5ZehzxfedAif5sHwyichxFDad841cX1fDjANvUfKgmRGYW75kcocP2ufEwxbSBNWKBpjcJf8rKJQ4NVnPmH",
  "key27": "4iSxtEQqRYPYV1toCer4ijeuGj8V21q176NErPzY4kj4r4oKi8TsgZkCkJu1ivMXPhaiAs8GTcW6WhuQZhZ68U2n",
  "key28": "2Spqb2NVoqZSYw28e31BpEWrimXZyLRedHwPAquwdPeTGFAZ4P5T9EAFzczCno9f7b1fYsTFuupzoCGWmYAFCWJL"
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
