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
    "5TfDbhUfjcPuCSQtaaj1cKVqC24yTmYG9VEroLtJPi6GhGwjLZnbLXZ5Q84Pig3pu6avjALiWTu3Z93UrhCZkLEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YJRaGZ7kPmHsW5WuypQW6zYPpWsiSpDUW8VrStzKVC7UFqDzLWe2bYFWzKdEbpF2FXmZSGNXDThh3fe9EP9VjUG",
  "key1": "2iPoRjMFyL5ySRBJBWqP2a17H84VjsM2rJdsuf9TkvWvd1oW5Euj93Y1VYjVY3bzvhUCKXUU4jmaLQJgf3R32twy",
  "key2": "28XbxAGJ2EW65urut6z1UCbrGsNSDp9DQdyfcTJVd6Y2AoJsCPx2gXySAdwqcnVatX361j1cQeRxzE4MKKYYv8MG",
  "key3": "DV928iQ3uvCbvi757vpxg2rsaJB5Z4MWypBUvyqitiG6q9EW7Vi8LuRg8Ev482ET7AaGiuDbG5bqKTTSXRd8zuV",
  "key4": "3dPnsooGnyQj21Xc5PgqVGPMvqbD6tjXtmFVhAxY2GMbuTjGGzPBx6KGSYbFtRQhT58zCUf8TAvgB5k9uYAy99CV",
  "key5": "2jsmWRfoSpanPtbmkrtf8pkSztmb7USt9JPf1F6ynAjqntroTk6dbxK24m477aHYbPT1ToxdZnKoCN1c9muijBEe",
  "key6": "t3X5MKPJZfBXNAWACJyTCgdNLKbkkcw84ZS6wa2LVFh6phDPw8dRL1XgZ9xV3WgsL7EP5CHqnCEAsSzEX4e6Zud",
  "key7": "2HVHm7UZuNW5MYpBUuF3ufw717ou4wiiQ8iSao6C41jTSKYEQAeehtY5tKQECBmcjoT2ehaY2g7tGPBV3ibigwCk",
  "key8": "4VPjwUEXGbYCjRuQ3qTpHa5H4e2W1sbgW1t6Wfu2p2zCVNgJZmVHM2221rLbyAWe3b2qnjtTkrru8thjdxbTeAPr",
  "key9": "4vXXzPWSntf5wzZmCpiespxzXAjdFbLKwjTK9gb9K4BYzBC2aR3YgPTTMCKEKK9cdKEJoSLEfBBmQbKaoxu3NSpv",
  "key10": "2QjQj8TsBRvrySgka51yZwR8fEZzxLLLZyt24PPoGZqsDj4JJ53FrDDniusdYoAjYwKKB4CWgrdiNjXduSZFPwWp",
  "key11": "4kJxxfDrJcowsvB4v6pJpzf7HFXsgm679C1zaFuuWQk9JXEHGgLhuWDvmb94uEPcTTChqXK8FiXPKvfuokEys1xS",
  "key12": "29cNtLo33pDqM8kX5sFX2JvHv9jR5QSGjRDYaZYyjLR4oufiU8tBKy9ZnFjFJerg5k9qp9e55fgVDZ9cfQUyeriP",
  "key13": "5SgL44TmAHcydMxfe7BApfA1QTChw3Uh5YfXodfVZGom32ycLBW1NuZhxt2Yfq5CfATrQwfEqDbSU7TPoAfuT4v8",
  "key14": "33mLDVnAA9pvgXTSw95Pq1mfJr1c9pXw3AXu4TRfhxLDNLVBfM7dYWEnMVVFNc3Hr1hmTw9kcSywtiRhcGjRrcuX",
  "key15": "3sZAWf16Q5oQPSX6sLmU7xysagZ2tEK5kBfFxXxiu1x5Ae6PcCM5A7i8HWVtPU7B7Q4HtNe6x6dsT1WJhMmNmjxV",
  "key16": "5m94msgdGBnrPM7H6FnAzgGYFp1QorNCyyurg7UGgqS99dysxhLpPJZyNPSGk5v1cxqP9hPQ1npsgnjyTBuxYNrv",
  "key17": "2tXv2myKMHDxsnwqGTZwcj731hjpCkpPT2L867mguZpNDKvGRUUCefE4kv6R4ZkF4rjyhYdGqxzPFNj5EtfnDy7k",
  "key18": "irF1qC8gzatXjnunFXUzibQ7hcdpR8bz2fPWJXA9ADAFVLByh6ZhFfvn216bsHb2S5mttBPwGz2xXLTXvhh3DJR",
  "key19": "2EtPJbH9mKhJJSQejxvPLqgdcjsQVv6NwwftL5RRtFjdTsV1t44dnontNhgEkswjP5MEytMUTH5mgZoYAr5SAcEH",
  "key20": "41U3HYeqk977AM1UvJnFNcEXGEYqcehfSWNRByKD2XzPGMxL8TuZMPBmXrrXntNgD9V9hZWbxS5ZWXpSVz4mukxb",
  "key21": "4PMbiVYS7YWtkwQgwUky8pQPevqnxJKm41N2FBJLSFvodo5YfUze8iwV4mLBS1Ldq4Z9oJdyG3R6MmpHmmiQMMGz",
  "key22": "2U17xWCHKWB14M3xVpqkzkTdae5NHfcQDKnPCeMSWFs5PsHDoKdk2dkChkzQ1En1Pvp1xSd35DQmppYrUfuLLS6p",
  "key23": "DBJEYnehu6yxqa6yt1NpEV9wwEbGXAMqzst1EstexvnpKRtxiQpYyuvN5DVvRZgYtfoDhyJ4pJ17S9Sd9LyyHF1",
  "key24": "CupyCRdhkeUKMubeWfELWjKvxJfhoNoRvGVEKzr5aBvVjAeJJHdL1zy5eBw64nW9oFjkJVXuBgeJVsmn3QPZGBH",
  "key25": "3EYhzpSqRNcAQzQoxozYoPrZZ9j6FpQJ218KjXbLfRpMkoDRWfiSfrMUyrNsA9aVRfEuajXALB2f2Ux3uyxr8cBh",
  "key26": "2nzWxm5BG9qJ77hc299DKYN2e5YNTWYy95jyPYDzPvZpVkkRPbRmvkxxp6D2Da4csLK8rmVLsbbTRUQTeEEUexT1",
  "key27": "JUNhCFi93j7WrgnvtT8axpUZyZsRrccCME2q82yY5v4njqHSdD76GH2NbBcRqdfU2g6tSeCDJrk6zGLedJ1wDJq",
  "key28": "2qqhzZfqfyDo2LxtWNFHErcKX5tx2b8yXs9CuxQ66XbtSCpjHtXnKyTQ4ficudgKhFRBv4H7qjrRDo5iBWx8zTmp",
  "key29": "5XLFSA3xpKievUpvneKheq6Mr5AAYuGZY3Z8wLGY8Kojx65d5v5ttkZaJLhWs8Z7DwZvpZGwnKrPm1Ajrdwrj3Gt",
  "key30": "3Fdvk9WNvxwdp5xfTtTGBrrYT7uxPAJeMUEcTyinJSFmGecU3fje4EhaSEyzJ1MiK45tTeN4aMvDMHXQ1CsjuQ5d",
  "key31": "3TD5jsMYu5J6NBMa7fWRXJQsPXA6B5jYKKBDioVm1iwpkegudosEidCF7xLCb8mDSkUM6TUXBDppM5HXGTEvphvF",
  "key32": "X8HXn8khZ2er2MTqcEz4LAnRnUsvkpzMSh9jLNFDsdDEc2AV7FCLCKhP9ch1HaixYzqAqq2UyRNzuMTjhMhU6an",
  "key33": "2Fk9xbihR75dm658zVdqwh7QR56oQjDmcwMk1zqMKrXzRsYiCvfGVCne2gFZEQRrdunQGRLCSCBgNygQ9NuhXnf2",
  "key34": "SCEtME3W5WjqzxpSsPeT248vBP1mrzWMduia9HfBAtrQAMvJsk4WBnKUHDs6ZjYfmXiPuSuEwCwwtvuxyYmPcTa",
  "key35": "67R3wR2aYhEVw2QA2GZLAcuisSQnTZUCfGBBk7QuTjKGR1Qyndn72gyug9ZP2VQuYoiEGhVLcnCaJCEA7M86h86V"
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
