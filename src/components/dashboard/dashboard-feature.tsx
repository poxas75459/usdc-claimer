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
    "4GRNf5aHqjb5GMcSdTuzoZVwzyfo4JNrrx9A61EGcSidyCr7N1mqZ7jFpW9wbh2wbRu14XL7ti83PBRvFefnkFQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xzkmyg5dGX7KpJmxknruR5yjbKB6QPz4wJQdsFBFkWpZkpWNJiQUnTDBPX9P4VXkxw6qDCf76fcL1KRMN31GEnY",
  "key1": "kaoaw8ERqHyvqYdFCT1pbrvUsBh7Ppuv3T5uFCkaYGP8hhokoGTEdKGVzy1aEYiVhgWedxt4SPqoiNu7kN4yv27",
  "key2": "3MWrR1EqcDxA6yAUkK2nkAK6TuevvumrFHFGBz8wyvrvEyaPgB5V6ksZXMY6kCiZik18n8fxKZqPaAZPW3SoJfSv",
  "key3": "5PRJGhg2qWAUbA6Z8w17jJdRxRmG9wemx9gm3Sdtth77bJB3AoTpuU9zohrsc9AQ4as6GHCBFwJoseGPYddSwsZJ",
  "key4": "3BhF1PY8wwVpEMqMjUWBNvZtgF1AakesMHWEwMPsCdaPijucYQ5cWdzvrtoSvwi46JxJoLSi759ntA3W2TqofQGy",
  "key5": "5shnfnKHcbfVw6mcTbNTqRXvPUdwF4RvVMN36XpYUk7ZVXwKYdqhuDoHD1vVhaXLJxt5uFA4GCtofcfAyjoCDLyM",
  "key6": "3S2TTqb8Mj6QXGY9Yfrvtugg4XFi9Yofo2NmpUGVeC9tSpeNpanQwTeYGuXF8FfiCceiXBr8i5XCxo9jb95W3m8G",
  "key7": "uHApikwG39h1kBEDMFQSxq6xWWX8tAk5igKa9S2Sbw2agV7G5VkrFUjX4zbuFHBcUYUpCyuGfJetABW6YAiDZR5",
  "key8": "2zh3WTuLHWW4H8T5UWfm8Xrnf33Ts3RFn3JemFnPLYsvKk64KuJ256LoaEC3CNvo3oHS2eFdh3A9E4PrBxBYzp8N",
  "key9": "2VeavqdHc2bCsG3pJdTVYH2DU2enz26QMF4mknzHxqRwVdPY6ciQzNjaG7RuofKNt5BCNb1D9goMnpcXepkJwAKF",
  "key10": "61BevtvBJPPGXEdWzSijGsoVMRZ1gG12Q98KuZb3KsFeYBwnw4jv7KcYmyXkjvXQwtfMhssHRLdUTXfsjRH5dRpF",
  "key11": "37WBZw2Gwj2t7U8qfGmNsqoYYAXnLkMutuVchYRfTUWsBje8G6J6YF4TeCGeZcKmkW9BZoVTsoUjioCzNRNPjRwK",
  "key12": "4tE3u6d4CfxPvPHY3MX77nk6j24SuWZXpvjmf1P3o7CLDMeVg8Zd9kZhYhpBEUmPRQkBgzfqYMu9dCueqh2skAfn",
  "key13": "2oDTTzmaFzESqptXu1u73UirCnMk4awfRx7UY6ndoCQWDH11xiyTDHMbBzhZa8NtxBaQFY1HQovBnNLVrvwjxPY8",
  "key14": "5SfnmKaSA11nmpwkoH9HpT24AdakujzyFcwPLtmRSrivPRHXUBPE1m23sZMF5rpiq4HyZZ6GWxPkLbaFAgrUiKCM",
  "key15": "37A8B8ADPSXfwNkEUwPhUDKowCvqzscRKAFVQ9W7pvwrLktx7BpBZSM3HZsjoTW4gFUHggqZx8iET4DhwshVURdk",
  "key16": "4R5Hmowj4AzsakXun1ynXkFpitQELxS1QTotqSyAGsfspRkVqzw2ZmC4UjVgto3KuU9BU8fUbuPkksPrw3GfCk7z",
  "key17": "4XNf8N35cG45AZT6KN9gdd4nom8fDnbjTAYMCTCJLhT4gqzJNy69okmYuBLLYRSBE2R3gYH4HhkBAJDKbk7kARmn",
  "key18": "63N9gx9hBKiqBKoTTs3yYogcqh8XurrRcBAtas7aVws5AYDUWswdrrYoBRjZFif9jb8pCNh6ASMhYfTRepyzWeEb",
  "key19": "4QygTaY1YL8MTCVKQThETA6FGfuX3Ur5gwxhwnWH9R6ccZLRiyxgZNgY21yZN2RgvZx2t66uxpbSBiZoJ2cKAU8F",
  "key20": "6kDHY2pmyp9m4cvvCZAzLW4f7fRJxFQQu6DLn27KUaH42r6BUUzreBbwAHq2nDhRBLdVbKjDfTMjLPYskVjfDoL",
  "key21": "4HLxD7kWqT7Dha4VdGLo6BSV4CytSRLKCYqtQMDw2zbc8N8jhtxbxiW1wyuz3zR5rq5MumGxTitb7EJSU8Hh3g5P",
  "key22": "45F3F8Lu51xasuYUKH5zM7xWJmd2HurVZTFL5noJEUxijbbAHYPveBknRY2qGxjjBhXMkxQnVgdbEeSpGsmRpqsN",
  "key23": "5m8xf88KGFaCa9NxoKZqTxDgVpNBGFxcUYni5mV4FoD3UsB3M8P7yn7U1XHUeVhGbXtyrLisFYK2ArKfJAfPScsc",
  "key24": "4TNMBdDDeYNbGSSQMs8R5xrXdc8S6JV7S98XNXWW8yKqWVaGvJWLXYJsvHUUJuQmBhRSz1nrQq8GN2rMiCypVF29",
  "key25": "Uo7AHEx9h2qRnff6KwDm7FtxKm8gLXe39ZMweK2J1kxdchuQzpzKFaeywmQb3sNbWVJ42KaaXukd8XUPgvBjExs",
  "key26": "4iyA8S8q1HVTtMhcfQRgArtjDSe4Tp9Dkbqpmzi5CjJ2iqgtsuQ4TK389BYgXjQxR7DWdvwNooN8TPv1aXhHegfc",
  "key27": "4Sobd1gWYSYDUus4BERYz7hYR6nKd6oLQnzaVcdH5QL456vhfJiAhnzjZoZznR7FA39YHd3a5KyUq1zdqoFToKAH",
  "key28": "y7BQwP6omcwJsxH4syGFSWyb1438BUnHhEFEun27Bk4WzcZNkCsgTdt9KCPEU6MCci6aBNupYWvnZufRf8EFdRR"
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
