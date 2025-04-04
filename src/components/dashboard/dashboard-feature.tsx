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
    "vBfzTCAZyNG7yvboSwe8SsNHDftkfNoS4bXXrsZwqaEwFBYREe7mRhmgnRDfbZHbPuFxbGEhirUaUZT8aQDdY5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCMxKdaJcNAaZNN3coRCdtAAWZ9kSPjadPyQ6QvKwnLmNioCgX62jtFNZr4LHTNjKJJxnpHRkMwtECDRnfXGqHf",
  "key1": "5Q2c6RGhkZHKkBWCq4sopdVuxCcMCYKnFEsb9kLtvnFHS8ziMN64JCYMY2F9HeTpEz2kP6hRPby4dVFttXcFKAy4",
  "key2": "4JPP3DjdGNXxCPVKSnkfnNtGTrDGuU3gmrJufkFmeFiN2eD8e7Ut1SPcaZYtYCgjpf1wKqrBddyamhiBYBX5Dpve",
  "key3": "2tzNmLxNB4KF7PV2FLYFbPdax2fSvmUGvk4kFD1TDirirjZZdBLbS6Ac3Yp4UKvxWoR7e2mx1WwYzov2nqe2noiS",
  "key4": "66LDhiie13tmmCz5stPsqmU44DXekRNxu9ou9Xax1zhxDSVpe8bocGDHnPym4KjogHZX8QU3E1euMERzu6oXfJS2",
  "key5": "369hPvRgbPZNMF4wo8rJfrk6d7ZcbhkcgYZmtgjMsC4mPng1ey3jGoKaHdtzvegrMCp4JmVRbzVh3c7j9oEdv3wq",
  "key6": "2dLjnDsWCa3sEGgEUARcPAjVNpkejEodkRR4P79LXWNabcEpJBmAr4fS64bhhXV7nyo74r1tmbxwfLz86ExLdB4x",
  "key7": "4fJa3S2y3trHaEPnjVvzFcGTkW3fv3gtQXS1BCfbixtCmPd4qR6CYpbUF3vQm83QtcaJhwKWjexLWd8YCBhppEyq",
  "key8": "5zJaVeL63xa5psHbcfrqD8wfZy5zVSN9Z5QavoxRsRFP8Qsnxvn31CF4nNdb3BZ1vy1yNf6GsMvpD3qeZ7WjrTg",
  "key9": "XKfccPBQm2DsGQm9JQnmUMKoNWUPmfRQXBVx71Qs4QotdBYxdMYZbZhEEERkdsoHbaVZxS7vGyLtd8hY7G43fNu",
  "key10": "4MjHPqE2fyMCcsBkVk8dV2JG8jsqfrgRfUARA5WaoNvYBi7XZyhQMVT6ZMRRtQKeRrQMSXac1HYQPRRgfoNWUrpD",
  "key11": "5825w2KJWuj7AZem5MgLfwfk33d2kQmFdSwytAFZzP5quoqr7bNxVNq8KsjzncJFvofuiiAYB9Hu6WRF1FscVy8g",
  "key12": "FRAjUo1Zue3S21BjagA8ir5rdxYRhXvf82UWWqepDbp3F6wJLnWV9tWotkD83kEyas6yJk7i7H4EaYaJwfjrGwD",
  "key13": "2nFybpTnuqcZdb6ZY5f4h6y2V3QJP1wMx9yBMfGTpgd7DhrdLC4LwT5dDuASHBegLrcAzUbo7S4Jiv92STa99r8H",
  "key14": "3CHfj5DgLfQaUXseyUMbzpmNkERLqoMTF2eGJdWHjfLx6Pp4DGM6TfqKs8gSsLdnR9qhZawe7NJrvEcSYnnXQirK",
  "key15": "3haxEqREK2MUwesST2HJ8p63qzn63vHLyQ5p3U54zGMHFSBhcCU1usVPhEn16ZVbeuLWC58SQaXXaLx9VQ37fziv",
  "key16": "G2Xu6owSQ9H3AzHgpDuFjardEKV5nnXmQwmUXQD2DSaCguA14hS78ZZ3RkkNda32shQFMgCfP9hNxe4cayf3Q3p",
  "key17": "5Lazu7ANprGNvTZ31oGncx49SkSCwCtnm3LA29qe7TdUL6dY9JTUiNFTjBWMzTMdakZQLj2WDf4SkvY1bfaPSwFV",
  "key18": "5thjvfKeJxkGKLrFbL1TzWDEMcmY2QRwRsJvwrJgaGyETaeYiDHM3UAHdqdstjKE3D5vSd3rundVuVzKfrqJyXrU",
  "key19": "56KBxKuW4QDZbvwR2zSUXnwhwjPRuGQjfuUu2MWKgUGXoZoFXrmi3kXViTuSNZNH9Ud6JypHPK9WXtnUAvgz65CR",
  "key20": "aWyPySQtv42bpoVFqdCGziWpPqxaACV4han6D8ejbTCHTyNfCDwPAxzG6N417VC4FF9t1ZkMq8NKoTNZkNbZ7hi",
  "key21": "2fSXY121RFmLhbCHVXgXspTAZ7TrmrTXsjzMNcEUCGw3fGGxHBMNaFQbUsRUs9cR8cnik3MgR6GkZs6B4Vuivbie",
  "key22": "5VSN1gQUWPYoWSibPPyTwfVwXaJ1HiPT79SDKyjWY6n2Efb4pJCrGtCNXnE5dqcU7PPVrgUKXt4YVJjocrznK2rC",
  "key23": "2o81fqq22t1Q5meiqHrRWxgxnziutpJWe9egfiSELrteAA26gyQZ92GS8hqkVXYyAbMPYHeh8ckV1PLbTUgbj1LV",
  "key24": "2FSpZcWvsrUeGkPTV313qYtAWpPywo3GQb7kGxEzQXdUzc5RjKWV9nakvCw7tzfZGuZaJQciJEeHFHHuTm56xdQK"
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
