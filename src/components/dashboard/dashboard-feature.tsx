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
    "KnoeeN2VQD7zJcn9HBA7Jqeu6cWiUbGxPtN7HDvVpXZqvNZPKU8LMPgm2BoJnsiGyVyThNmCJUaUMWowJ1Dicnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qi4NDUxBaGufo2p6SAjxJBUMoiR6vkEpbLoJkuHVEuQHzHq8ZrDRMLGuGFcwhdwP5W5reFRbEm7MTFfqrDyjsFs",
  "key1": "2vyRkArzKCX9CZrZfgrShTDCHfe5qHmdN1znBwxbxQXkfisvyXooppTxJErcehWuPSZFSz2drgdNfJDQJgB5rBnw",
  "key2": "3Mtzk4R8xSCBBmoU9WyE6uZkkQGDYKapLjvLLeXrNKob9ccJqVzzT4oaRvjvT89j1zAN7dmA9mLWvFn5TKiyN8UQ",
  "key3": "4EpzDa8hk9qAfpyhoYDSVqTmrLmNL7GAAfxAtYdnAdAnF5Gd89gCrajmeyuzCyr7jidHhZbxAWV7aEKKzahujX1o",
  "key4": "KVSC5Un54RAccpBaAEeYoarh3EhJsMgj8tzxqZE19q5ome9nvjRuDKYZopCUvt2i65bErBw7X5V5mNiK5Hqtwam",
  "key5": "2BjQzztXePw98dYH2d23PjoAqF6eXNBQbLyJot8F3CWfQrFUmRJRsjNELuf4uCgq9QV93p5qcVEMfsN1fcEDx6W9",
  "key6": "3Z27mtCboNzrYQsDR3mEsV3wdbjgiQmhmPy26vvBWvVDg15xq1Jkp6UuYjBDoZ3Vv9nbxNy5nMF8s7bjTxQtDaBE",
  "key7": "eNChSGf1qeDzLoEH1vrtYnpjQKh9i89RxiF5HqTyUFdEPvcp1q7gem9dSBXLSktjSnLEyy1g7agcdYACs1kf9fG",
  "key8": "cBE3BvWym89GXyW9J3EXvxFNK1pjWh9geLthDtLH5R9kfNyj59RL7bY6JudcuW9NTfCfLSvQixzDHZzuyvf3cQT",
  "key9": "2XowVtYHmZj6bYz29xNG8vXPpKrWHhkRP7iDeNoypTnzpq7pbqryDxi4tjcpzFUrajg53w8yWRBkXPQatYVHmaeg",
  "key10": "zhAnfDov1qbH5XD5Jhg4Y1Vq1D8sKeBQFMcR8p2hJGB6t4EDTAtfBq4L7fQ1192ckVazrpfyDri4qofjciqHV7Y",
  "key11": "ezzZumE4LGJMYDfArKhYTX3wXkuUyvYxZCVUA3auigmaTLwmPFZ6N5m7Fh6mSRXjbHB8pi7e2jQ7XQmYuEfy17J",
  "key12": "5Y4fFgg8S1DeKJLtRD5EaCD5a2iCtL1H4nRmHF6Zew6gP1kGmHxfGRVgppMkw6VHqgxKKBqEmu7NJmCgvM5gNFGx",
  "key13": "5dSTbxDXogMZrGtQQ2DSnat4uNfUFnsduxG9iMUzJ9PGNpZfFZu24achfYVA8eFaoMBKSgAhdVtnTxu6PSUXX21y",
  "key14": "5vhk7f9qThDgBNooC3tmpPDXpPsCwNLpcSRBv6z8t8XPSmTidSUUPpS7RjeK6UEoaTrK5wTfv7djMKopaVykq1ye",
  "key15": "2ZpiWTeYqyV9Z7mc9ckSL4YrByqwsexFPyoLBF4n1f1rLkiSxV3v4392e3h8UtyMkALsPkpg4oQ1MdXpZnCpfWkp",
  "key16": "RE52RFAfdJNBXzeo4hGDa5YRradd6mjRxz4p3KuCsFfLFQmKT9dSjtvhPLNjEn8v6NA2fc5mqfytsFMURVJ5enG",
  "key17": "4yG7XgY48Kr1GV9Lgpfytnr4QQP37Sz83azmzTAqrDJZJpuKktvAREvadEAAN3HyifcmMw9wyaGx6Vfz62xvqAp6",
  "key18": "2Vnm2gpPyepx9PSMD86LurZnN6GzrNZb3fozqMDtbcrRjimpfqUXLvSU1aB2H9cCwjrAfsWwrbTF8aeUnA4DknyN",
  "key19": "2Wja4PpfvQBa1nGqLNQB73ZJ91TyoMZANaon65EARU8RnSy8iNhvNKrFP4JJaJtmE6HWNQncRkuNFpdAmnb8fPUW",
  "key20": "2HEd63ScCJKMYzsQyncD3RCqKb9f5fixPQYPhN5crknzQmbFU557mNHjF8ReXT4omQGn7M43qGxDu7bqhVdbdnZ1",
  "key21": "5dxb1cvhCEfkpN4BJg3NtBfrwgTXKoBVRsLYPGSJHm2nbyh9zvhEmQEFx7Rezp93R7AsXWmJdKoTZXmLFcp18qvM",
  "key22": "xRCVsf7iEPYX41rJBWmfL9u7dH7mUGUdgWPkTQTyU7nPXBJ2UwTs38mWVHHxJ3oQQU2e79eNL2ddM2mfUp9evgR",
  "key23": "2qWV18x39NUr8fq7fFpLAdyaho5mgbzFEeSXWpMXnckbTV8YEadLHUfrJtdyYDJDq6ZXvt12F7wmAsGyRuSGNbX7",
  "key24": "2WVpGGYhw95sn9yvZ4nofz9Pgfoh61fZV3LWToCBL5ircmAMSj4Hnvi4jAZguTw8tz4nkcGxpGxGrtY6sCqfViv7"
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
