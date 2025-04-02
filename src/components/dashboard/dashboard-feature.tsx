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
    "5p9e64YMKswEZXjdsaY3w5Ucw9jY2zPC2J1p76jWayvjwXqAMzKMByjchgJbqQjGFCB1cmRyCwjjfnLECFKQLxYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JP784eNZ3yZMB41hCBsC6fG2WMwtzNjFQ22es5jEJHZPfrSgf9YNG9bZL1dXuaD7PiK9xTcykSGtEQGwaLFaxiS",
  "key1": "fkFhS8ZfFNfkPCPujeptRsrVNAXZEoUYKShMFTd7e7avUUtvpzfm7N3BzbnFP1qt7eichK8aoXfnFtSqU1PcnFd",
  "key2": "3YvagAsqk2pJkzkEoGw97kwH7bkoVd2nzZCGx7mK3KRUbPuRt9nzUEPecbXeyzZ6aVhpBJPZU5BMCMtR6bHMwgW8",
  "key3": "3r27JeZ7DwzdQqFxCCdfB7pLvUNjExbZgtD4UJHMmtwyVeEwB8iRuRJYR6hoTCs9ZXoCCx5KngGPkbLxFwo5Pj76",
  "key4": "5X96tgZXge6bAkJdZ9TugmQmNvq9AM7p2yudbRREbSkp7XRiZ4jRF3KhWkjevitbMHstkbP8xp2fHrosWMHftn6F",
  "key5": "3gGxa18ZJzZMiZ8PwoaXErDev6AGnuccqC3E8v19jiZ3kgovhmQBehX9Xa358MbwEzzo3wW93XM74KZbCVDRGp6e",
  "key6": "5ebWmbQ4a9LLGavUZTvBVhUKxLNqjgL78a4VVSzndmJ7AfydVi6iFBEwnVah4q1Xoc1WAJXxAzputM8ypiLYJBwJ",
  "key7": "3pf1H6J8heDhhJR7QGAtdNMUfn9fbAo6fTcqdcWiAmP2NZjn3RaWojFicbufwvjRHTV3Xuvs8oP5zNwgDSA4zmLB",
  "key8": "7jprzB2yRET1jJa1rUJVNNNgX8sqwJFGQHn74zDQvWFFWCNNtiRqoHRyGtEmP3QEBP4ZMjrUaoAkfK26ZfCqZD2",
  "key9": "2w6VGbwnwkHtCHYGC9y35CLZKh6WWFn1giyVLgRM6FofPCWe5gQksQ39hUZXwQvYRBTm8mAV4GAdDf64JQUTqazr",
  "key10": "5rbHWnk2VDESF7HE54VVU9uKRuvf7TABRSBYJ4wJ6t7Nd7sBtbghhqJJZCi3GuY23RAn4A3a7cFoiuvKPjkKMyCg",
  "key11": "3Hv3j1uRHXCH2HanugvTiKopn56BKxw3pwk55zWVPRxQqRTLMXrrxa5T2uRX1UXbWeL5teUFwqLmZ21S9ubxUSa",
  "key12": "2nSN9RvenmHiSJKKMKAeo9kxPThBf2jZMouRhspSxHEqSaeipXtD7M8B5n3xZegagpUHvJBUuyF6jxzpEeoPinqV",
  "key13": "5io8EtTaXgcvgaXZJXpsdUUFT3auRtpLzV8zxCxZhhbSPPHY9ZoDwu27NS2Hogr1tDfEYJg62Av4Li3kKyWa2wCm",
  "key14": "3pE6P64HjHfiRB1qXjXgLSmZed9qdmWUhEKTVBNyXty3MG4RJPzc3Z4fV8Lg5NFt2pb9xJ6MhxMFLhAaPLKS6zgG",
  "key15": "2UmNZSbd4imKQ6yYFt2wuuJJMCd6uqPuF8GaPhCPUrrRKbDvPZrPasG1KfiRfrEPkHecnFn6g4jyJjuKGcN7ba3m",
  "key16": "2PA8sa6bxiuLeoRaAYDS2ZmAMVyRjhQXx4Rb48Y7hwLuBdAvt45fVfU4hrCnKxibxbkgbxMsst6dwuMP25ModtU2",
  "key17": "2ocnV16J862cz1s5LRDZi3idoXNNH3CtJBU31dBSopynqceZ25WnQjJuHrNKWrRMShUyZ6uKEQYJRFBeC1Ea9NjR",
  "key18": "5GX11BLJftsDPHL9BFr2u7Ar8SWDoZqCvTe95ACLFUxXfV1UvZrXEf5nkDuw6xfTQ8HbvskPtKeQ2ixJJCWpjUt6",
  "key19": "YVNoPG26y5JsMtfKZXGc5TNkzAJKjfLasM1X5MWYHxdTo3mXWya6do8CtpRFS7sYsJpt8M44aMzysfTgksDmCGs",
  "key20": "5t5MkhXSxu6waStUHfx5dhrNnMTgVboaPfJt1f39PqHa1aReKVkkGqwdnFDqPwfPi1geeK4iwkcdRSFS8yCBqV6K",
  "key21": "5cWTTWsuurs3Jvk3J3ZttzMEBa2cidPhzmeb6aDmEUtZ1wHG1tgr5gVjEpT66AQYPCvbSQGRpaBfHjv8Q1CvKJpz",
  "key22": "5R4KPa2HeHFSjrX2hWpyoip5nDc5khx5vgVaFBa2T7skpkb48dd3ywXb7Go5tMqyLgqnkj1kQPQV2PV4HjtjPp21",
  "key23": "52AyapxDgXk2dXTRYm5wxjkc7X5rE9GvUknzwZqaH2YFXfFYd6vpU42NtxKFtExUbgiEqz7wZj2M9xkoXpDMiyhi",
  "key24": "HJBGt3zqRKguBB5D2zbxA32PR7aXAUgjYwqu87hKvnKrmTNPkjDXiCtNqpEiqW5FSWB2D2vMG7E2FKnQGyYBreJ",
  "key25": "66EaCbjS1pf1BXyLiPBq16Gw34w6XTCz1KUK7TL9UpCioPi7Ba7R7KfARKDchDyArKnoZUoyVxAixBhJv3RUCPg1",
  "key26": "3xkqaorbw4x8qTz5vPUUcY5FN7sT3Hp6HC4brfBpkgVAJuN68BfiYi9Z5HDAS9PBSmyrpKdwQAVWGnQBZouyC81z",
  "key27": "gqj35Yk6qkBLkLwv9gjFALmiQBkfdapZWy25MMSaq8bvGTSo4nf6cTaEvpeENBEHGB9UsyZPmThj4qsPNW8wRX3",
  "key28": "jQrNbDeWuwvFVSX7ds4RZwbm2SmJYZtwvouXYRusdgKiEyVcGVLXgpx79oWrYoFmiRHqty8n1RrbpCMxLL1Nr9H"
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
