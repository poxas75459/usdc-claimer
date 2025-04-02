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
    "Q9s6B4R5xzCXC8UmxDSwkM3Z3UTg18LmUwdBXGxp6BSVtqM5r3XesAiPemYcKGLiynvbbkLekuy9HuNDfRrykjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7E5MLEpAgFWVz36zUZoAB9S9HUvQ3fJFSf93xZoFjgBjwVyTxmN9zrGukKdGNupvh6TLkd5gYUafkAefZeuL6o",
  "key1": "5AzaWS7t82tCj2w8csYHvKg4BZeN6vig2XxYz1L5NVKQQMs2ewH9ygwzveiwrHcvz6298f7HbVBiXRQjHQHKxraC",
  "key2": "3FrdTrCvsMhEpJNCawQDnZJLkWLXAHbBf9oqxN9p9ETuaTzoNo2pr6Hhu5biVrL17nht2E9c7ATvueYqkFM8XZ62",
  "key3": "3L2dpa6him9y9LaADybapWXp7ZLGMMRxfRMCzE1XbW6ZCV3ULXEm1oKZuf1KtaohpXR12d6fLN3uJBgy4dAfeRDH",
  "key4": "2UG3uQgWR4zpLzskMbLTjtM2D32PX1Uzzyw5FFLZfx9AbiXyeQDzAcVr6iM5Juvu3dbQ2CaVZwALgJGD1r9i8vBk",
  "key5": "2AkidUtq9L4T5na6GHP1rQ2cTP7KCinkLyiVTwQcqTWU6jkAYUf411RdtmKdXVXo6xmm5PkwSxmEaKnxBio8D9Jt",
  "key6": "5E9Li5QjD7c5dPb5HqhjyfbNK6yJ4K7smUTtKNCBcRZ5BnEF7Yk3ZKRYkL23RNNeCqBN244NRZfbXWZEgGduCCQh",
  "key7": "4sv8Y6fbfdd9MLw4P4YnN3jodhpztM7oWHaGx94BtrTMhwRusf2oaVyYeV7QmQmqBnx4gB6VsBaPXhgUoEZnNQgX",
  "key8": "62tNr7wcVdUAv6DX79BSqekyuYRsq19CyduNDf4utU4Rig6zM63Bi1qtRcZ8cWpRTUmoe3eJWjAhQ4DD8HxAKxYu",
  "key9": "BNUiaz8GPFFtQRZrufrFyQKQeDpf3ZRZUT5ehY37r6xiJiRSnuMci9874VDhrqfPSDUVV1uFEU56QGzEQq6D7v9",
  "key10": "4oTJtCpLE1hgfjiRFKvFxUy1H9RAMHxh4vmEr4QrumgMwQKz2ktLknq7HbHqkwYmWMRADkQ2GoxBeLTYGD1sXcBA",
  "key11": "53agn7D91hmHbHj6es87MZ4rNLxMUijjFBYUcrhkGJ3dEAhLwiALRJKBXNWJzmNWVaLS36zG15CJdaYK74oUPp4d",
  "key12": "2Upzw2eR3wubAUahJaznDSAp48TQ8ifS8N8CJK6HfVQ6Pvsv58giChNvR9BYAx7jPobGDq7US1pndDQB5ZYjZgor",
  "key13": "3BWgWhJrWiaU7iWSwn4Ukx1Rmge2kmeP3oC8ji6p5fuPF758FnK7WwzKVD6SR89PztLn3dWeoP2YM4WReTS2Gb6B",
  "key14": "2rCMx2KE2Zifd3jhB3ELc9f91HA5BefHoCT2SoWW1QL4PdJPVBU1jSiFGKff3WtrZB9pFvVrs2Awk8GsmuqMBYhy",
  "key15": "4ssipTYGv3AhYp256Cbe7SQG8LP7xkDZDPH5pGEbbHFQPqDtpzZSvpw73uNQxpjswE2mQwUSgjKMMUqoAY1ciPst",
  "key16": "4FaUTUwXSTEqLoC3prENUkMTuma3WivaZiggGCkLKGE4Zz9Wh84ZGVyy8oJYTWYDUnNTe8t5vT2GUNhtsQMdmdZw",
  "key17": "4c9VeFfn1AzBGobmRnvme3MjgXeycA1CgepMB3EJwLpfDSvz8sRyAF9J8NFM6ZmXjm4LEEN5YU9Bdj4w4c7z6QS1",
  "key18": "39gRWpnjnLBiJZdaAdCLLuGnkfCLKbE9ihv3Y32bZNqa4SByGf4JZnjDEWi8VcA2Z7DcSEeMR3VmxdnJRxBGqmp4",
  "key19": "2kYJ6uaWMXPFf4AtUicBXfzrMpYmuh1NWZ5L53Y7yHBPtcXYLykiBCZXFjuPb7zw943SzKPLMzUJooUXiwWgk3Gd",
  "key20": "XGTsALnrnxGotzN9BRypz9ciixuJCxhEb6cspgXGrHXoWVwGAo6XEkP1Ae9DenNkbs9xUYP1oB84kFwkjnpdUaY",
  "key21": "LrUXg2FXxVGT9ZSN5QQs3JVDjcDn2qBWq24UWGbGx7HVZd8mxohD6zoHckjYpB72ofikbyWJkkYPtxKpUsPd26i",
  "key22": "ZNuudSPmkpcrTkvrBBRiFzLECNcqEzz8PHQeaMd55R5QXGsBxf1jDMMCuSYEqprSkztsX32ew9QgbhjbewcFukg",
  "key23": "4RJhZm8jFisw2M3mVsrgRucHQbAGcHWHFuJH8g2cuYSGNVC12z1r3VVZRCab2UM17HoVUowX8zq4foGRuYTDw5uT",
  "key24": "5mvn9y6pHbsjn4ZejVjpFeXXFfig5UgDTaEYCKR841vJjHTQfs31V5GBiB65wDdR8imiLEU17reRg2uBxAhwAADp",
  "key25": "3VLfVqBRoMqtHp8oWtdqkMMFUcScGXXnkeHqEcXsda9VVJG6vDHXD14fwe5oUExC1DvHRbL2nCoQW76wX755Nx1A",
  "key26": "3Go96ZyYsw861JgzRsTB5hpzFSkAomeNeLRXRzY2cqC7yfCkWeHXtvzADQwkojbP9bFogWRMNcL6ycspFW6wz9LR",
  "key27": "4Exqzc8RX7pVCzf2tSwhLNHYqVLsFHpD3av3zYPnPtT7dYD2BZVZgSBv9ZXwY7uhEj5BZwCPMC78kdp2pZJ1Bgzn",
  "key28": "5CFLv8sXGBYeRF8ehvoGPMq1mKwxvzSqza5HkeWXYiKU5bumFGeMMJBLTSkhVh8aBNF6oBvah9nevjqPo54Y9mB1",
  "key29": "2kqWv5mJAF7kXj3hy1hvpazckkqGyfaWW8RD3yTG1kqdJVg9NuhGvVo9g2caYB4MTQGj5AYHK5VThZt2R3FNX8Ft",
  "key30": "21gaoAf6viHv5Kpt9Q69naSjHcQVDLkRCGSM5LA1DDNp37e1rBxeMJJauJ3n3qD6CwsxCp82k9ZJUvtNFDVY1CMd",
  "key31": "3iUnpNgLYgC4JKie7CvN2HFn8xFPUzaF2Cstyc2zx6XZihC43vu9UGURkzAGTYeZ32R24e8YnHLoNWk8tvXh9zky"
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
