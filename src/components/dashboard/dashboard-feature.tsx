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
    "5Kvx8Nd2nbe1DhtkJrSHmGPGLoWypkQAVnk9ewuwkpf2wspc9sii6vq1kWfbMRz9SFyBqxbSxvkS49fSpcf3QWYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227SB3i7CyFYpp1ZFFUdEoNwVBdtgyXv4A8GSxnUy3JVdUXozicmJaNDMcQrfNiCJUPmAEH94YsJgSMW7YU7Ei74",
  "key1": "5N7b19oNnstbMLqq8NyRfzpbEHNxaZrPP3tu533uav4i3VDCzHDQB8rRrEiwoH1JxD1dqgBXjYvbtSrjrzQyusdp",
  "key2": "4adbktY1SAkPrcxB8tg53mC24kp74HsDAnWd7qz2x2DZxpqkPgdfWSg6Syn7xvBT3xbjzXzWGgAnHkJBDmr1fLJC",
  "key3": "2qG1qmzda8334JHvGyogr1akvd5pRdQmC7LHf4KdJoCzYd5AzzgtJzERuSXFmxDGNLA7rYwpiWcUurgL1EvRwdM5",
  "key4": "3L3Wukw7hp7etg9iDUY6fvaNb8gpdbYU33X3PVcqxScxUKHJW4MsnkGpvFNX5zuLbSwjFjWo7zFEgvs7Q3B6PjK1",
  "key5": "3mTGyiDjNz5Mb1VXn9gnNaXSmtXCeWq2veNabLFsLmRBUgKRJWbW5XQpopLQ6t5BAE4XvjxwTMZCJRJ82pxY4uQZ",
  "key6": "2nHSUpjdiQDPqvijaJYV5xm6qXr5fDVVtuiuLTZghYcUmKvQatsC81tqpBnzzcZ99ptgGBNsKkszMuCDmd5hy1Z9",
  "key7": "gCnSzbXr2TZjU5muEwbndJx6f4v3t435TYA48w5YYdqh7vPeNuEsaVevimSszrS63AJP3K6DiddJmhJBNg9NuZf",
  "key8": "5Zyxko38Dgi38Ko6uCx3vQrWBpbCmkbJCEc9KfU5oEtxfnMT4u81eY5BGJRctkmP6G8seYSsXyMJpxx2D5B9oLW6",
  "key9": "4NPEMNknQVyFK7iReHSjNo7Acow49G1ijd6NnjFRJvdiEFS5E1xMqkzz7XtQfTyMgvgdiP7wwxGi9GskgWjqNGfp",
  "key10": "pzLoLBDabgpPwAdiGueDveTEdEekxR9VKLkULWiJFXsrWNNeDms8gTbQ8YVaAU3qnTMb9ST7o3Cw9UhRac13z1Y",
  "key11": "4hTFhDR6sUuRnBYFrrPkRY5ZzYdyUeUgV3WEbd6UKZH56foD2UpHeEZt9tYJ6hwPq1e9o6r5QTnCyJBK6U6L1MpR",
  "key12": "5DswCtfAF4qDXkZfvZinCEthmSwHoV69NsNjuQh1z2PWom4S8cJsLcTswfEgnBbCihJC8FWQrozkv7genxyGDx4F",
  "key13": "3Z7cmyAn6v9imE2N5CAmJDUnjcJpJeX6zpQfc45MroHnyU71S7f9jYvABAdbGZY33drLQ3dGdcn6m5WHunDZhhsF",
  "key14": "2Xg1oiaL9YEyyPjzF7J149DmianKUNCAXt3EuSPZiXikBuCtZUfzVhqXJBYHMNBpzdw7Ju6KVyF1Cctgu7V3pgo7",
  "key15": "KYcF9MCBLPGRCLcfz657pzETiWzAcrRKuhNg2Y3iUKgG2j271nyuDpnBPjb7AFaDVg9EyH7hKRdZJ8JxcQqVfQT",
  "key16": "3u5k2FEDTQC4yGzuERAGM8hQvEGYr56ctmFfGnPupDDFz17Es83sQ9zxMHZWPgnCqRRaSaHvujSYUP4vbgnbYz2j",
  "key17": "2vyNcuqYGR7rFt68igVhdNVf3aNWmkxhNNqgx3hSSt9LvisXJmGKtqKEQZCuChqnpWwXd5mUuY6FBrvq7k4MCD8w",
  "key18": "3BK2qwbasm6vCBKyN3G6c6zsjKZCU8ZYNw2XLZQf5z9mudcs1rpw7g31FxhW2b9ByhVyRF9Yk8maaRYtSB7wCnHS",
  "key19": "4H2FVJ7KYsPK7DZiB6QixzBtHVid6842mJNFjXpJptJTzaLYF9juVbBdVRE6PjDrTKLRCY9UdfvhRNELyxHM8SQ",
  "key20": "5uTdPxXu8SBSGMrjNqUn3UqagmXcgfo7mHjJhQXVAoGzY1zizk8SHXjzUHdYvZVGbweQW5v6dGJB6jdi3hX76DyX",
  "key21": "oNQMw8aNhVRMc5SBVWqZGXih5Qz58ehwzP3qsHrtZ3cCtW6HQiWxg46wzzSCThp4M7hee9wYrU6UMuVegSy3tBb",
  "key22": "5RYVSDcjAYSMuWnVrPXRT9G7GzbM11cf9kHhBC6coekq6UrWvKE7iaTBD9HSCo1v181PhLgFJPRDV1Z1qoKkXmRc",
  "key23": "21fBvQa4otA9GX8T2xqNsiPHFr3uLZniq4C1wHLLjFcaxzU3htwyPATJqyWR5oLcsNbizkfw5vVPdBGvPX5XCRBf",
  "key24": "2CuTofZHcNQj1nRLwGBnkhKpyiKQLoyj51Zy1jk6GX2WnLQTEaA9AMndUzYnJTgcb1JzvWBNpsPvDJ8L7ae4p4kD",
  "key25": "5eNHZAHZdaL1X3kSLBqnfhNQMQcSDuPAzxBGPwMVo5HA2FhPpDpbwmKnzAg6ZyYHNPRFNvaTG3asJycUurqK9UW3",
  "key26": "2MUxPYWW7ofyAkxnDqxTD9bKWarMVw34EDtXqxZsqYPCc81DbooRGRP3ze37Kshs4s1qYum6kSHc57Yy6komJz6X",
  "key27": "3s41GBPxNr9BEfoLfu8g9MVRHhjyN2uvCu1c5ESkfHuFJX2UKi3zdke1s66C5iT5eGmwH5mySXkFDp2desXQAgPR"
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
