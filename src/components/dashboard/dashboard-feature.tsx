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
    "5DV8ugbCJfjz24TcFDQH8d4RQ9Tr2HQzLpEjScSHWjeHcJPnnFN5EYfsVja6cD8ji3N5guz8JJCwHutFHjG3qRKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSkD9YuDQJGYnFSwzQ3bus28PRDkBhJi284Gdz4HZpT2Z6XVuGiDzpuauzZz9ucFCRUZFLdGxdGTLSMzksQ38nQ",
  "key1": "3gtQtAPQCKBVTJbXbWbSMEH9wLtJmodRzoDxvY1yiEKJz2wzgRy6pcjzuEEQ4gPAT1cMzUD5t8v3JNrNCLZGbeqX",
  "key2": "4M432CbWpc2jfrB4RTWdAqP3TjZTMkTLgquN9GJ7Xsjed45iHSrajg9LFZSiJVpRxTNpW5cmsmqF354qGeudquaL",
  "key3": "33PgNLSyf4wgttEpcRQD3mtCReH6XPdNMhZ7NKeovg6HSuXAPCpm1dFcDgrhAmrCPT5gpWbX6m2StDJhKtw5q1Pw",
  "key4": "4DsBA9YMZvXvzTzCWCMQk6ETpZrrMPLt49dBHUHvkbpeBQVKGYTZ5eKSSkptieNcegy4iZtG1Re3yPG1gyem7HRN",
  "key5": "3XbFLmBpgwYJpf4d3ibeHbY9CaXRPVnh6XEnxy8HmfHCLWG3KMNXBSFtzGtFJGfRgNxvixerUGHKFuLM7pgCmG4r",
  "key6": "5WZPK741XqkdNmmGFDfSrNiPKWwfVdJNhQuNkeRMda7CRyx2CWi8cUqJjJiwms3XCkGX3UPN6fYVYBfdP2QPcwNz",
  "key7": "2dhSWvRNY4a8XVjYqQEDJPzsQnhgW1DW3hZHBsGjzfJDPmztwrokmdJ6r4ZMj4CjhyrmGQyGMmCRcqNMZkXc3bT2",
  "key8": "5d8Xd1hhPCR2BJniWTFx4Noftae4UyeSJVxRC9bRVNPJ6KgiPSP3ZnfT6sCTi52s9PhBb3C7zCSq1wFCXanbc8HS",
  "key9": "5rsoJZy7aenaPF51EfzwzL829agN1AHktziBEuRxUdRYC4YqzRaPMtVhaitBKbfUJF6CF5qd5HpMWbwYe8iBrETx",
  "key10": "K6XvSu6aHa7DvkeKdaP4PbHABNEZqGM7BaHd1f9eaSTcnerwwPs3njF42qGTSH3z5AHjN9fMbX6fkLteiCtz9Fd",
  "key11": "42FovvVFDfWiTYft53SVgjozMzvjx1obfuqgnKE3Pg2F8wFrujCCGjuzQnUjCt9Hwzd2kDWE9V3i2eJGWQPwewfW",
  "key12": "PiGZKvcpUDtgZEJ7ZGhychVUb1AYx1uwPTJaZ6i6fi43kcKN7EdDFfzvj34CJTzRsnoPf3kysvMivzS6AAQrpvp",
  "key13": "DAEufSiPNH1K7zsiHhraEJFbbFsJ9V2GGL7ePHWYKcdght3VpdA1WrHVDhs5rnm68Z14fi7YaoFDBjjGiyPoFyK",
  "key14": "YVsuc8kQur1AUD5mUKCREpLB5k6utdzXuVS4sJGxpbVia62HVwtouNCJjhBi4qXAKqN6VwFe81YPvpsFUr4XHRX",
  "key15": "Fwk2u2rb26Lfbs3SyyJ8DSQUebcmDG3CoPyeYJnNAndgmY4Tyroj9ttGB4r3qc7ZoxJadcRNEfkpzXjcwALfupL",
  "key16": "5ySBTba2fYFSzfjGFhTrJ2JGeXyFiHSje582yHKzbHjhHLKwDMWJrPwAfFVmRuKgPKdTmtyfMb8MBg68niMsHZcN",
  "key17": "23cQdgB8zQHNFgQWdFHQYB3at3X2x4ew5opJegdFgU3qxLHVe19EFbasiEkm9hLYojcPas6BrJcod9JxN6JSMsDs",
  "key18": "4kgSLDTKoANsJW4sHRgVWK6kmAJEhgWRYcDLkH6BU2syeVPyP3jbenS1XZdYQaNLkWbH2jS37Fy2RmioqcuaQdHM",
  "key19": "2D4tMajyKEDpUScKm5fiJKXbxYU1cPyZnujKEiVa9H2mQWyvRUpsS78ZYXAuSWyn3pJNUkXr4tRM5affUQqxCd22",
  "key20": "rycw5XokUgQw5ZPthjukEKXHiBNX6ohgRnT4i3MQrkczBneTXCVwKryuPFVwaFhyrcELVpyMfadDCDkoaWLctCC",
  "key21": "2ne7GgE1zXv9QoKWJas1PfAMHvLbDU4MWDrxdJJuKzD79GQgeCWTyo4uLw6THuktTnefdVSykeSZJ6NNypVNW2Gp",
  "key22": "5nqoYQHsAzzbHdVxmwejHVS1Boy8aAY5v4WTT77mjFWywXWSiArMH6MhcudeJtuMyeWR6o4oURW4Du2Egohi37aU",
  "key23": "5LvbCKFdr72YSfdxdZsJbtA4m8QUW16YQ9THgRCFGUddVcJh5HWEQUhSW4sBoCBkqyQb3G5nXogGVG2H69m581Ap",
  "key24": "2xrQXrkQePwBpyrLDwiRcDjtANQRuWjrYDXMypV1N28yV21eeXVDhrQ55fegJAZPNYm4chRH991kubj5u43WRJBY",
  "key25": "k4EumTezgc4apMU5xqFUrYJQkek3n5VZTGhG1ZFvANjBWT2UQzyJ59vQYJGWB8BFPX6QYzTNuT672aj33w4Bczg",
  "key26": "3EfgQxrjoFFRCpjYS4YGbPBD9XYKJam4tJq9rzu7ikAGMHJtpjLTSqMKgk298oyN3WQ2cbVyN6Ta6uMnDbqijNmM",
  "key27": "5QHChddmAuRLLPbW4a8ZA3zQbXjvQibBisQXTkhUAYSUckGsQFrsEwRQm64mfGEbxaZJb8wTEDRoCM87gaPazQWS",
  "key28": "vRZPzgRxBb1zowLLbEAxM8wQ5fQ3Zs3LmQtkRdtr42ZAxRBdETi33dSmD1rM6Z2H5cKV8Srw5jjTCvm9ytC3WAk",
  "key29": "5F4UGUjJMJMyiL511LZZztHBfDWVF7nSjX6ErhpzG1WydzPW2kg772PRJJE8KDk3aVYM9xD3KvGEuN51sa5AnP7N",
  "key30": "4arGWiMUGTtwQhrAUTzRaFqzDpfAeEJzomFaSqiWZoijCkJPJJa7KKRWmHTcxNLgSzgdUUr89eFUUr1vPhzJCXAt",
  "key31": "5pCvHgCAtus3dD3k63y6vDFWCmj1NSfpf89UWiQyUbHpKz6xwQCk6UvbtCSVLsujXoiwDwL324ASzuXPrNfW9FLH",
  "key32": "5UCqkCnKLp4iTDM58panYYnkfZHVirqaw1hFdnjqD4XjYmnEz1fWDXZ9edvKvNrjJJmoVXR51jENiKXBFDa9gBHK",
  "key33": "4X799cQyRpTWX7CqEmvAZEztAWtndBmgXqEVys7ECQbXGVWBTeJK738uTWy2zV13S9aoRXvoW4feEqT9ATLroa5f",
  "key34": "4UhrkBwzVJqeDvBFBZgVs3PwPnY7q2bzgePtPQ1gCtMJ7GnqkdDq15VNAg28SvVmZyDaFUswoE2BRHWVWbduvn6g",
  "key35": "5w75uG2kuzKJtUg3YpL92bhoTPnAo5icZqr5tarwPXwcDYghsL6vzRu67FFjfkPimPEYdzEPkov3irS7HsbVEKET",
  "key36": "4TNNdiGKPkip13EEdY5Yg3TrSeH8mUnLYhsXHyxQEPBD9fA6qJcEyW5ac5jEoZPJsw7QnNSNSnnBoXumKqcxxMbP",
  "key37": "FCFf3GStDPeR7vkxZPtB5hUBTJg6HL5HKPy9H8FfPaFAcJknJuPqBrEgdiG8mW758wjApAAz2sJkZvZbdSb65CW",
  "key38": "4KnWanYWnYaBzTTbJoqdsM9L8P3HLpzfRFNPfi5D3iPAQ2Kuo29iQ6jscjskk6gspkkXWfzd3U83vrvdzvUReHxc"
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
