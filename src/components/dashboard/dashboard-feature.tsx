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
    "27tVyFhxwo17K2zAY5XAz1e9Kky9FYJWdQEFsZ9JEQbdnrL5fiR1x64aX6JGdi3s1tLgdK3i9KCPHcWMzP8VZEqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXfLgZ552vuJminEYy4f9Hjqm5YDW5owvbKbQUxGr4UWGBpSLSVWb3yLzpbMpQfmywoXxJFeYFy4CSHnUQB1K5D",
  "key1": "9E1HBj2wxUAMKwz1UCEfFSqYzDdi8qNECAorcf8nKXmnp243amjHYdQB222xP89LVjd88DY6RbdWpNhwsSfKD4i",
  "key2": "3g2mF4tkWPSodXM2CPY99syQW6gDdeMse8NLUUZiCT112F8bEMBKYqX4XhsTP1mtAZYke3cSQiYfBb4ggozk8E82",
  "key3": "3AgcfriDHcaCAhZVu9GjnUfhztyULPVinAcd4YWpMv8qiY5daLbLoghntEkSHtiNd3bhF6Q8YWy3aLKFCi2yEdVm",
  "key4": "5EbNMGpqTPsW5bcPdhzTa55kbRWeQ2ubEbUPaJNP6hS4WcPTnRc5N6EbPAmXPx95QphEKoxF1UtyaFTpucdAr4iP",
  "key5": "5tCH75XDthMPi6kPLYmJ8wHMbnkLkG897txMNVbBWjQZpNQDDJPkNajTeuyb6H3vhTM3bBiEKoi2TWogC2CJt3Zc",
  "key6": "5eq5gUzXSUa1UvxyNQfKCeAtSqKtqZQLDmCNCTSjXAQmgZ3TM1JH3cNkE9JaGvTYSYYCHUHa6b7L4CjQ1kwzxgaV",
  "key7": "61dx4Duh8P1W33ocYZVmFVMhdf9x7gZJfif3mafM5MFeh8GVqTmB2gytnEt957A7ywq3WsV5bqTXbHdoTqKimpZF",
  "key8": "ZYQgdTeCujXUUtqRp9caWMXRuSsmHgDJ63LgYAAWUR6FVhkMRMyUr2ZhgqfBa4ByerradrJo5TW9kuCvDnhKHug",
  "key9": "4ihjkswy5SfSFP6D7C6g7nbvQgMRn8D96s4EfQxXKwRMjMSLPsB93dkptS3yB23qmPjFT3p1MfAcJ2VjukK3qxzc",
  "key10": "2ySFbLQQth7MkpHyJFtvoSrB6ZD5BuCn4V4BodF6kesYvHMTWVZcx5f4VeKtU2j3xXFkePK6PaaNTJWaSZKAKvRk",
  "key11": "3QueveEaJAAUooowDeKGg1cSoAe26jGtcygLL3T4B8TwDdHCekMC4FF4yfkU662hNVevTWKLBWq9kQnjfUtw7hTL",
  "key12": "3sY5QKx2zGWAB5im8dYnfAAapYGLXGh555Z4wnE7UXJN8KJwVwWzCbu5td4viF6PNqpG2WjaY8nuSmJJkc7ExWgt",
  "key13": "4baUiw44VNzAVBPC4WwDMxhhdSJNEdh7AK4Up2tmh8XCWhMPfQxRQWH9xXi2dZuv59e7NoA1xdQU6JZs6f3ATwXK",
  "key14": "4Ai2ZT7pfVEPocr4Es7XHq2Jb8r9mtJGK76gUGN4NajrFQ6cL5MvD6LAFnxbtiB23di1vZpjC532YTiRzAm8qGFK",
  "key15": "5b8dNviwfUQXH6SeV6ddb23J1BJ3RCbuXA6ULNCkh3MsgMA5Rm43dYDp5o5uFdTGTrrSBv9HGmwtVX4Ps4v2iKdm",
  "key16": "5jkp6XHaBKTGCe8S1rxAqEsBQLyzLoMRXZE3fECZXQDSzei7p6h3KgqR32PBTi3ARSdjTsm2Euw1cdJ3ULpULGHH",
  "key17": "2YMkzdWBQWii1uEwmHnDj8yrVN2wErHpdS1dTUNx8zWw92Tg6EFLcYL7Tkb359xi4JD6H1QPRyvHiwAawLb5vooX",
  "key18": "3xDBXEqjoACtetLEkV1BzVvThx4aLvnwFYC5iXshp9suWd6UMzx7qkBtjC1SwgpX1xQJPtgrf9CwXwKa7Hd1ttD4",
  "key19": "3okCNxhRkEpfvtKngnzWijwYhdDRQmf75f26RNXSBbdyqzomWdqv964P6cHoG3redFgJQJw6ovTpKX4pmNmFLkAV",
  "key20": "4di9iG2Rvj1LGpX69ud6wteKUHBGFXg9R5SrPx9LV4v6G4wBksFwVrR9WH98JPZQTiNKsBTa9aqijJ6Y8sDHdps5",
  "key21": "2ojsKZt8jeVeSWHYZJoe7sAxmYc4cydaiDp3E8o2RXf6nv8sqehB7CEnCBFbu8WxkuKyCeaNVd83f4nJ6XpucTKS",
  "key22": "2FBEyBXytCf1dTmGfEbpr41ung1YHcHdf5BBfcQ2mW2VJhCmyGHJ9UhZqYaV6XTJ8eSHhwCP65xWVDXdFHtEV26b",
  "key23": "4fkAzBpTQTvzm58FoTRuKWvpTeSoFu7WLUsmzZvggWoTMwYTRnmpDG6zth3aWfmCD9Vo2zqm35Bs5adtF6YHUmGF",
  "key24": "2vP32NhPUcNUCLyorRiTrAAFZWSU9aCJCfizcMjqKJi9nLZ8LsyQ2jPxavA62eLVrk2r7LD1pmkTRoLBtuD3KqkY",
  "key25": "41ZKNgM2oEimAmJFeKszAJALtSu2AueTczQCMvqtktv7N9mn2M4nhv96bT3pCTBAg1tfFseYGqHtvJRznxoi13Kc",
  "key26": "4RysWiz5ZkLLoL6ezzZC27LHbKLw8jCG3tpAS3GZ6uYHfFkgziZguHHb1FyuZmHJBp6feURdjxRua2hMnTjzoMV2",
  "key27": "26ewXrk8kiKHiZRDCEp93shEBtYoxkvnsiNVaZRbqpD17bQ1RUQLT7ZeczmZvCJrmupsU5pL5Z4XBR1AhgawByod",
  "key28": "51dym15S6CGcsDnPTEgNKsrSCpKc1dRSSEt56aMpcDiGgBnRqHiqD4cN3tqpKg93F3r3D5yNERu61gCxGjztC4XE",
  "key29": "5LV51TRkLaP9HmvnwKiUhPivVMDmVk1ctuxjK3yxuFp6tx2mpZfcECPiFaiNHp8d4iE7KZpPj8keTVwEnpURegkr",
  "key30": "3ukwJRSfbe8j7uE4DiPA2zZaMh4cdWn4bBkYbH8e2aRPWYGhqZRH3aWkPx9gDM4UNm4MfW19jPiYnC85qmGKPbC1",
  "key31": "53vT6pZCy2xHv6owXY5FSRiE3SxRytbWCXcVjeaZLcCuPeDYJHEbxhZxUx6nhsX81GGXTiezRZuGQsNXaHf317AY",
  "key32": "2PBeTuS4jiBEifVxSTLeaWgmDwd4YeNLmRAeJhgYShkVrU9E1HVPKB9CmGYhL4TTxEGAnf5JhwXJ1syGeGJZx735",
  "key33": "3AEAFQ6vAvay5mwk82YeFgh5AdjhSFFhe6tfGR7fR6UbWcqBJAGxiHSmPdZPuU1ifHw4iQwz8RntRa3yWpVYw8Vb",
  "key34": "67Utvz6TozeYYmpyhAd6yjJxsj5BBwwCYnPHBcRpkJ8t2gaJiTWfUdMy7hXeaCVSXu3x1wFU9a5VJiAK6cL1CxAF",
  "key35": "6W9cv274Aua8UQQq8vXgrYoYLqefakdjkDZfPDid7jJgeaDKNqzYWCUz4PNfEvwXvzmKmSswd72t9FjLvAkts6B",
  "key36": "5mZFAEiXCmVzvoFhwd4NA37AUTNDBMp7ajxFzF6wwM2rjJnPWgDCqzcnfUYogvLBQdQK1cmFoXRnLWKuJSShTAaT"
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
