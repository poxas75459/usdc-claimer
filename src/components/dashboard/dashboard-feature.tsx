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
    "4RVFVXbtKVYx4RC5gab4tsTBecxLrJCY4NVE5ULj7tBeisWVStFkpMt7tTTbM2CzJnMurozQUP4b7ueQ7iJjUzR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZdSSqSQdLXyp5eaZe8neAzyQkjEsVEBBiSyg5jBevkMNtgWqkF43YrXuk69DBwBMZWM4dkMfBhV7SCg1GLMxMY",
  "key1": "2R6YP5ScvzAcgTxnU6VURwVrz9QjXZGZyvM1asYTdbneZKmeChHNfB6Xd39dpzeRPHjpqWnyQS1PQFkXsVcpNB55",
  "key2": "2bg1wRhL6RTxQHd2o1QHDovGGQyX5QxyXU4WG2uFMazAC94tkJmvMed3inywaBcqhop1s2C9bMTNSLYfV6zKKCP4",
  "key3": "2Gx5rKLczcaGAtUfmV4GpxdrXyaja2JYsExEztLwxW6bQF13dVWi5dcDfSMFnQCMo8Rv2jBgWhdyrZPbENHEQUYh",
  "key4": "4zRD8BNo95EVeEvwaes4S42FPP1gs4jsQkbnkrfw3Pw3VPttaEkMkR73sBGSVDT1oK3FYBwFSdiNZDQSY1U9jqDN",
  "key5": "HA3sD9vHdq5aYwrnwLsE5by7wkeZp6XxYdnjDQYLQkR7JShBoojqf3UKVXTBEbQjzBuSF5AM6df7qnWSShWuaGG",
  "key6": "ZW8EFfmN4V2Sn455ntf9q7gqCRiM1q5Yp5s31Xc4m1bhVbgSgA16bhbB7pBwpgrbuaiha4nwS4dXwLRRseSkvTj",
  "key7": "4kbQsDKkCLF17WGU6b2D4ifuVmjQY2qhgvtALSFfLLvP4UsJ9LHoiEcZ6J1oT9NsshrkAQVTyXATfPcMqzTksRzu",
  "key8": "4KWJNuXyEriBapmvuMT34r9SfpwjHigbLUUKGzuQsWEA99QyNbh14nPjED9K2gNwmZrUNWX4CpScxTjjwStWxSMA",
  "key9": "2tZ85pgpoodhkw8fzGwGDhR7Hm3XvxNSGrXwJQk7Ku2jcDY1GC2j6hGYw6o3XxGH8RHbYkMvJfMepPea8JhXvqwy",
  "key10": "AKGnULVyNneTpvpRK6j6TjDYuSVVpKXpRvPaciisFDMc8XJLfuDeUctSFtS9tzGNBv7pk16pKM3VdqpPYPSoMdS",
  "key11": "Jn4tCHRnuXCpShk7UnC2wswH7xWonYnnHY9iriN7x6nkEArQ6rosbVBHYE5nxijPHiEam9MsHQjXNEz8mbkibDS",
  "key12": "4KUtwQX3DEcBpQkqZzDDyogN3RvHvyQer1cfgJwHw7cKbp6U1RA5b3UgrqoA6dsTBke2ZNCxumBNEuYgum5bP3gX",
  "key13": "5xYHU39U68XLuzBLVDraeC9yjPur87Lgcvm3UrdxFRR8bTGWJ8x9zhVBEc9ZNhCQZN8mrjcDrdwefg6iJW1zR9CZ",
  "key14": "2ResFcupriJnhEA46iUK5gTFcYEWrZARsFGnAeN13ohg4jGsQMyAhu6ztnFaaRCBYHwCM98Q5A99C2Cf6qcrqJDq",
  "key15": "vS9MbqPgf63DYUpatyrHPpCtizDsUphttzxhpPHcW5uZ2S1xg9k4CP4y2ZMD3EBDcsrZXg3ApoZcGgYQ7WJgTTM",
  "key16": "2Bawt3eVAiekKx6KGqGUj2xVUacud8GtPF1xasJkxdRYqqEA4vNdpBF9ncDaSfWSSKJQzbW44aftyNR6hkBLtgSz",
  "key17": "3gzi2xLfcbRuVnMKtRmoKS2BPaviyNX9x14YHvKYhV32NWWBrVZfcAzS6zCd48vtYZRKeAjCnGVUVAeLCA3nEqXH",
  "key18": "3KodSynwSxAiYL7kgk4rvQaZyJWvwC4MRHKJboFA5eyyzdbBCfjQNpGDZUocVPyaHVKucKs6S4mXTwX4zwPwNuxd",
  "key19": "2hBe7tDUruPRF4AMf6uBWBqXaRkAvm7ZxzJLbzCfH3xg7UWYpUcBe5oyRWM9mEZ2nR25Kiun7HzTsguGNqigN3Xj",
  "key20": "2VauKDSRdZVAwfRHHXo7gj4E5msv26TRTB2jNSrvKYthfxzMkkoJfi9uyEFie1sM9vcwdnftJ7oHr3tskXbLtH58",
  "key21": "3cmPi9nrNVJ4jxCz7ZeVSbrdRkYkjiZe8n5yARu82PoKSWp7L91FLt4BePSq21U3g71SwGQW15RCLonfPJwx1pFH",
  "key22": "5uq6co5oZjSQizH8zG7ubZfGCYPDnt9TWFauWgo8EnfGqNDRgAY6XKrkR7uUeJPFDJx7SX1NkgnCZmEhPu23EDNZ",
  "key23": "5BcmJeB6vS1bfVduLaFNaT8NqQpfk5qFZekt7XZ6CgKKtqh8M5tnPRPnSHpwME2xsWccnWAbp17K5N8Tvnd83XPN",
  "key24": "RRjJKAPQCrMemrDvL5Vu7cp6oG7NHkrEzaVSTGYZMvJwTwvr7wGK4QALHJuZyxRMDrVFgcTVMjiMdBFEpguEcjp",
  "key25": "44t45zJZaJSJ3Jbei3Rz9TydDTh1J8LNUttynEV145zLBNybpDAuUvsjitDdfVBPvukUnbScNmsFomFfNGG2pfsX",
  "key26": "2qqYHpSjx7LqpgDajqa4b1yPK1SYnLobgPnoVUhynwZFF2k8W9EjGKH6MxZsjQErskjAme8UmkbNY3mH3fwEK1tw",
  "key27": "4SoBzFjVyBPxrcKiHmV1mQQz63a6ffaaEsB7ZVBHtFYoq9FmnAp5C5st786zvgasfsHpfL9CQPmbfpsnXxFFG8Be",
  "key28": "2DxygMW5hVuf8YzXUTMhScM5c6vUB1g3jFTHApA6M79eZsYzvvjC6bV29QumD74ti12kFU8p2reGfodVnryt7pLC",
  "key29": "55XoMjAu9sVEGW9RzJiyRDADfZpPLLmFVNrvuRQe23TWVpcbTonjZNuGbsuaZvL8bMcXAKwgAkQxd2Tqs77rEMGg",
  "key30": "2F3hbxA8H4qLLkGDcWGyBAzZcXSJuCSxFWcTZB3otckGUnnSjbkHCCeBFZJjGj1Y6KbSug2L3cBCtUh1MorBrq2Q",
  "key31": "3mVsEQfcXHVhzMhCjCm5jeCCBVM5o3E6S6qRmgCzh4J3AwqjriZeKVqL1e8ikW9SGkg5CeFn3yG5YaUQEgGRbySS",
  "key32": "4cMMJJMxvZXQxedV9CFDEpPHKB4Q4F34tGzPL9uQgwvwpWyfVsF1HBk5Gvg2XhasT56TttiiWSx1Q7YhNiyt65TA",
  "key33": "5kJ7DWj4FMmSrjxyKUmsjvizxNDwX2SKtfG8FnPjA7GWNLnLwSC7jWvk5AuXg6mt4mRfRxtGuonpe8vFLWrcpEsn",
  "key34": "4tKoe35Mfu2jJmtCZtDB4tE96EESRx44NfAiyd66rpzwvp9PxPT6VL1hnLoRjHmTsZTZKYJLSLMmCQVxnsd3pK2a",
  "key35": "2MQyaJFYWLbBvqZZGTCTSUk66snkA9Z3SwxK6EUJ7i2uBkxCoLPrKVzrgxrPb8ciXqie6oj9aV5soDb2PGyddhfT",
  "key36": "f4xyjVZA2id9JUeEnXPuSt18ys366NePrwAj2fRr24c13Q5fbKKSSA1RZaZR8cQNXWvMsutuFcBFUxKwaHpGWMT",
  "key37": "2it8kMiPz5atPD7psoGiwDLfoBAnNVjNN6tMe5epZDgBcjPAZNFUFTqSYqQcXTE3drDdVF9Y1PLyqdGXEqfcQJ5e",
  "key38": "4qVbqru9GPFvK3Uy1ZddWHhqcjiAaAZc6kZMtDGA9tjR9wpKPqAdU7BvbNk6rGBRE69RRkm8gMCd6hRVEeLQYiiv",
  "key39": "5iwsvPP54rKZKGzhpH4ycLDATFDjiaBfovmNLKzUCaB6K5Gf1AwBi5BNrQkPXwixtNGvSY1hDaHZ4snbxLgS5HM4",
  "key40": "48TTKHKxzdNaMzXJrdXuj4Jg3bpGTSYqsjfLYGZU7y1DB9yVLqQFoa2ysL5QHUhZ5azCmApbx5E3u1CpysPVei1p"
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
