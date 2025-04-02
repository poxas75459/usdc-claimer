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
    "4Nz2V1QugHFqivMrULcaLpgce5LoxrY654u1rX7U3XSLhqjVirj9YksV9oQoJpg2dB3zLt4bV8govjPBRh28C4fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHmxpVLi5wjJZvoPpnWE4ZMMKFFgbwYLkrSLdUtMcM2VBdHaPXEsymKEGVcqqM6EMzJAuULu7FcNLjKAscknt42",
  "key1": "3Nh7pYHnkqMRxGxrxFkVYFKp6bfkmeeY9CuTcMzJ4aZcpsFnLs5HPbyf3yB2KVbZRMbGPF5MpAwC3S7UE1PM65Df",
  "key2": "3e7KVuHYfMKfaEYuKf5qvdNeaCBp6jVMsoKfsCbe94AzEbeLkpuRDfdaAXAZCCqsZdhqRyDkXUwLiCnFGtKk7iKo",
  "key3": "2BdsMApg3cXirq9Up9rnAtCn8ec5rPPsmggKa6nbqUUwa7B7WjX5peKqZyyLzudnRWTe1ccoFe4FP6epHMGJemaW",
  "key4": "4uuwEEjjvbSW1hGx316nYxDe8CUQztqQWvH96i4SXS631BTHEqGyHcvgM2h9HQGC8WEakqVnWnKgLCiZ1z6fT5VB",
  "key5": "tmpd575aCc3dkp7o6KpbEquHNaA9QJABYtZShy7Mt2mdsQzwwKh7w2KcT5MB7Q3vWYG6QVSqBV1r1ptDbGW2JYt",
  "key6": "3H6JKYfnTGjuyJLSGS5pAPujoUQzYxDQXAEK3GqsPnZcLuxrbNn3XSivMT4MGy1GBjT9zcRTMXeKFEMXw9YVs51F",
  "key7": "4GZ7NMEiDAXF8JRwEwji7Vvt5wyJ2agQLYjU1CEFsTgZjfdq6y8Cb5uRTJPgstqaypySoK15nLM3QcCZTQyEh3hV",
  "key8": "5UHNM4yJFVtYBvvufNGryUtVpzYBqt4ZJ5gmmQ54XgYGYmYD2M5PZgCHQhMJFhazNzgTC6nSpPc6cQyQPPcXkLjX",
  "key9": "2ypANFMJ8nG9ENnk4em1C7pf4TyUHKxHjHUSBzAWMtLShrwHSPTtU9vL1bXyMQohUzKBEZwNpzNDjWaSEC9fry4W",
  "key10": "64THo8nTMQQMzRCWcFJNbHaNGGFw6RMyRQ1uFGpZjX9h6KGor54YgWDvbSqFd6b2n5PL1yJU5Q4gy42AzTtppR5",
  "key11": "5ain46GrYcHUjjK8cKba5kYoqtribTA9oLd2aR88iukoXW5r4PEQhWeb8qfH9h9q7E4pw2WkgQyhppXj6D3yQgVK",
  "key12": "2RQ4HQunWSVDhXA3XSZj3tNdSBXKTkS1wSz7Bc27oLJF4DSLSjqWj6ub1qT8oaxhKgBYu2eFzTZxPhFx372Yj9hB",
  "key13": "2eJRFNm17rZe6Se4CEgSsnqV3F49aFYHQZx93t3xn7PuyjmRUrZ3v4AryS9n3tHrAjhQ3H1rgMXhzi2prLUPfuEJ",
  "key14": "4CwhBS9PMzm9oS68BEnyJwndPWrs93AWRdZFj9d2a4kznpr9z2w182FqxrUdyoFTh64J1WZtwc22YMG1vvnwhfnp",
  "key15": "yi7SkzuumiUV5yHy4UAyZGAet7M9Q8idPjK7AtQ16j376csbyrwpCdiK1Jocmexe7jVK5vd1WRumkE4zP168H3v",
  "key16": "2GkDdpCdX9aw3W3GeUkqNNLxBmvdZFyad3WVND6BcRVL56NPHttmAVYsdCj3jbhc2jqE6KDHCC1kah4m4dWXZeU5",
  "key17": "2tGKFVh8ECN3YqZyMYC6SZyExKngBm6zH23MMBPPZC8WiAPanxK4UpiXtniMMuAYTcLrWLfCvyfirQW1o4k8NHHV",
  "key18": "3KXAatDnDrCUj6kbUdhTWJ7hyuNMgR8RgDAfQYMzerwMwGDTkoJBQw1czikkvP8nM3xZLVgSAvYN57wUm7HaWgWS",
  "key19": "5WsZ5tQfEbEKdLFgJ3nxmwv87hSiQCkx3FWKaum1yyBKnxJZxeETrWbLcasj4js2HMqSoANnnN5hU7vULi3s9uS4",
  "key20": "4dwc3qa5m4ouxSi75BRpbNTEraCdA7LwNxRKA9on2N8bNtzeB2fY57AawDrjPQSx9fKYcuUqjDBDQx5EtaLCdbtm",
  "key21": "5HFXFccStzfEnXn3onBKhiRx5nUg3Z5j3tJLCBVSwWJnMVoTBKvMQDR1LUuVWcApS9gNrtbMMYNRJ3GNwGo5smsG",
  "key22": "KuovH3ykWQsgsMuGmXupvM7PTU4N6567na8y64tRz3pQdSARx9YnBGf9V38XZASPXtWgxkfuKRr4suC5Lr3H2oM",
  "key23": "3QxcMoZK7WDWskWBuRLcVqpjWJBJo2dFQckeZcx545XvJ1wiUJvP2zXuBURc9W23Ec4kdXgXcrbEWrfesrJ9bn4Z",
  "key24": "2hEJY7gCRJkVzUYKgKn3SpuvLekwLqoHsVpU6VhV8Z3GL86L5CqkaYjUVHGSiF346pTuHGwitWP3AyUCD7XyavuE",
  "key25": "2LBCkXejH63yYVgB8b4VJC66eXGzZEgjvKtoYWH6H2BsmQZgvLRcPTRFyXaER5p8BokzUaxAowKXnnt4ggkE2TTk",
  "key26": "38AgKgWTpR9owbp8nsdDhJx1C9JCsqhbWi8J97LsiSFNzvzFhYakqwWoqzzsyjCAi9z8befUesfPe5c2rbwyXiCQ",
  "key27": "66uE1JnLYPrZYgHsYPazy5qrci8MTFuWDFkAqJcKxsuTGxro8kM4dMDaYYbWZRuKLgzCBeuyefETPCL93FR8Mwky",
  "key28": "4pdEgdJZJQKDVtm29pxc89s7fqPUeYxZvAP5mHyrqXSfv4xYitkGET6QWYvEyJUK9DNcyK3cg2Yjf3DWW3yRMX2P",
  "key29": "4BjMcgTdPkXCRi7gQYFdyTu4f6Uxz7Yrdz5WkEDLQidC8KAj3MVvV7kJSHz6u8UqKSxyiZZCLh4XTA6hkakcL7PP",
  "key30": "5FFAFPFNVKrWc5AnoDxKGe2jmpXBCvx7mgpjv7MpPz4VNw94DahapvSh4PwcH7Zj4Pu2vBvvMYPUPvuXxUa95Qoo",
  "key31": "4Ybvur4nKSBYcffXixopeeUVcu2MruWTFwYPRmV26eKWuahh8nRpsWRTDvMhZhkqpVMDLp9YXNZCsKKkzVSk7hCB",
  "key32": "4Gd5o9D7isBRdAhVg5KVTc3bGtMPGjvRWJG49xJzQcqWQCmMhriX5Hk1oZd9rn8uNivEzUZExD6GseLvJB35yRf6"
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
