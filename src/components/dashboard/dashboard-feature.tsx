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
    "5fY6j5PBBp7xX4WiRSztxfZv1eWUABgQousx6hsJfQ56czVjjdV4JP1tqVFFGJp4dFhnBQJcMXAy7SsHex44rPxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VK5opVUppXoNQEeaWNafj7XeEt2H1xpQCU4VcGXJ7rqPPQvp4ps1HwjLNUYWWNr2x7zfHJ7CTgJG1KQWjcCgXAq",
  "key1": "3YMdiE8fVkuPXs2ABZ7U4E1fqhX1rzFEpiVTVDBXqswX8n7HANKjXiLxpJQNevrQzgRek9JZZ2TMcksbNoivTQrp",
  "key2": "9VGw4DF6efBf6UNNwmmdJjwPg5wiPdL34bLdWPHNu5ykYSgVjkFgj7j7Bbve84AKPBGNqBEY1ajkrroivGCKTPx",
  "key3": "CcqugRxZLFwpLpZTSVVtk431Uym8YWiX1sd9YFyiCKWm1bWHTE9Zpe5HtU6SPY4P5gxYgxikBSfT1Qo5FatUgFo",
  "key4": "3BnbP6Zsu18nmNg92LAUZUNtczPn3TCzNcd6JCuj23SB8LWpad48rJGHQkzGPqiCWRJU89xG89tckgGdXaKEtEdC",
  "key5": "4C4147QPJPinoAH2JZAtR4cWWTMLAqgSn6LrAnPMJ4brHmK9ftbus2PQhi5tAqvERgwjB23Yb7N4VVYU3HWayVTf",
  "key6": "2dX8VDWcFtAQBg6e8p3H4MZ738dZ6Nkrafkoc9ChHvwjUa2A2nvcseqyLJs97taAumD614p9vbbrMTrAGwrWxop3",
  "key7": "5Lwnr3sPASPSe1vTUwbwEqFgpK3KVjb3wZ9ZTqSk4x9MgDQPrDF1jZmB3DyWXMMWyuNmnAc2DeMwiUUBeSGKcHEr",
  "key8": "46onC4mE9EMESWC69XE9UXe5i5cMbyohCfonH2ceXAy595BLwpHbD7sqZQ5xU1vT8aLQokm4Vy5AMfwwxFA4z1TE",
  "key9": "4JgxUGku33TE5X75pwc89NH8DM3xDYPxRukvjHjXSQ4vtZXEATUVrCxT92HWMZbnwiyAysLRBuvngu9Nd2vuoDjV",
  "key10": "UrpAAcGYKUuSSQTUJkoidtJH9VuTvhvLvKebPNV5vJpdbi4zH8UCYuA6AkgR2gxz1KrRH7FZHsoM6SFqirZPojy",
  "key11": "2Q2hCa5uUvwwpBdi8btzNmHY8Gr96cMaW1DZ7AFfDKGoWpCobYCBnm5CfG7QGiWK6CUtC7UJc13VKW2QqBr5HV6b",
  "key12": "4GMNrMvz36bjqXfe5Y1yLULHwdFqbbPpaof5vEdwXzyhzXzvAZo2EU4qSEB7qf7Du5uFQPxopCThdg6UTWKXaWiM",
  "key13": "3QuZThR7bJpX5Hq3H4LSuVhTzMAhuRXn3M8uaiP6bLBwJRQ7H314rkEVoH3G9Zs9kZgXCiEBEZeatQya6aN4JS7C",
  "key14": "4m57LrmSFgTtNs1v86KkRqEBrHBbRTdS1n5VP3ddbhhPCcsDyqAVMm4Kft7oqcRkF1sfhrfDsXvAsbqrPWiUwrrt",
  "key15": "2293UoYw4fcSFMUDU4Gvp6Ef39hT8BpS1ZRQLHmMhVm1mqaQrGhLMs92bf4bKMb4Twbd1kJQQk9SyqjESqnzU933",
  "key16": "3ut5cKv3YvjC3VSso27eCoK4tVgqhwLLDYQvGZ82XDVV3V58QYnqmcS8U2mRX6UZPYELFJHTeD4sneV8LAZSCHSZ",
  "key17": "3M4gs8JmVQ3pcX6ZHkhKSbivhidY2g52yfbnJCmLuqEgg8NyXxgf3p3FCHfQCXGfERi2UuBxnAdoHrg7pFZ3ZQ3W",
  "key18": "3HTAG9bwWdoxWNfGgt9m2xY3MnMJvQnZTEsBW1n768payLpxaAyXvREsD6g7bEyjP9rCa7ULKdJRBvAvRjxKu6hR",
  "key19": "3GqUMe2QmC9Xh8hDs914A4G6UZYxYPTCAeHSuzzfpStJT31iUtQPh8ZqpbxgAJkk1LYjid1rjkrK3mZrXMUXtnSu",
  "key20": "5R7CVk3e6fECmgeqxCmyh9ZFyeByqx41yDuy1hxiVhWMvLgx8tndkH4wYuMqN2PXDRfqpQV7yeXb4t3XbPb7zYEG",
  "key21": "rbYzqWJT8QovtRXJsE8PU1y8QBFmxjpF7e86HKhbiyHSsntKRrAGbY3L1QnNt7gCcRK5acmvXNF7AP6YQjZpFAX",
  "key22": "4eRDT3nzRsS6EqMK2X9Ki6VCE4PGKcFNE7pgc5byxknqJL7DTqJoCVenn2gJEWK8Y7YvKuQwzgsHQQpoQhUcyAAK",
  "key23": "3ketuqRhCyA6xZbArHN7wnYPZBsXuoWpoMAfPJmaM3UPbPwmxXD8EXyFiFjUkJbfk7j1t6VnCrGTN8vfUZaEFxMd",
  "key24": "3TzhfhXXPdioV2dybPdUBvz6QMsh3Tkfze6Do3226StcKNQUuEY9VjxGDKwEhmXRvUUMUNNBAYS5x8k3Yyu8U3tn"
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
