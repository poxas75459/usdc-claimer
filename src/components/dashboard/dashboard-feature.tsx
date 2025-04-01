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
    "5KYid2qQScaVVee5hXrgUvargBDQQmed1PuS6XSfaVXDBysfWyB2Kf8zw4ACDGPvJkD2EWyeDnEJwgNK83HnG6HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7haJCqGm9sXYCatzLr2fk4CLnbwdDYvS4RS25KfjU7zmM8Gjahjd7zsxgK7ycyCPGJzNUWi9GQPXzsEJKrjtsEs",
  "key1": "5zFVACCe8YqMaaiemGMorFMRt1Jykug1Kg123SYqroWVJzFd4beQ7PBodjKqzaeFPmHPjiCU2bYeobXrVycyejHc",
  "key2": "4HTui8bguZUtmtx74hjoX8QQwzJTvJ3B4xKWdQ1cK2Jo49kwWd8Z72iScpD22yu9UTKLevSL2s7ZedqtmECMZDw6",
  "key3": "4HeL2PpGH6yFZ7MJKrioropiAepksYPPx1C9HQhbD1Kyp8iQusdsjhx1H3WDLsY2nyP7sAKP5gtHMctj1WBoQBJ5",
  "key4": "4Fzxse3S7SbEbsejEd76JAw73MaUSmhHqTeG1yRUq2vWjV5mUvn4Qap8DotnaW4fy9yiEotuTPuVt3g4FzzjYnxm",
  "key5": "B5E956ceM57tzBxwEbBUCuYKAryUwrmanqAXqVrx67byCPYJDiHtjfxaCVFTSewfqK3r7EKnubkQdpfvVk4jHPU",
  "key6": "DCNun1ttrZhBKv13YG64H14HY3W8BRgF2aiGmz7yHj9i4zsx1iz4HXz927DDM7TM8siaGszQuZ26CxPHNC3iETE",
  "key7": "2CHnTNCJUyMps2CKsG3PviNthJtPQaCJ8TL3vYZDaoiydc1yuguEx8yZregmYjmkvuicFRrwwKekV2GWpimQBxYh",
  "key8": "4JTCT99FvgCMa3PCrm9UKNDUQuPFKGpcEKyANxNccsWzMY2kKudrJQsezEP2T91MA4oDHTV1ZhzdmbWN4SBzfo5v",
  "key9": "2Rjuz8Rt8nyuWrbBzMVLvEJygyA1XkoGQUASd71iQ13UezqZgJq2Pe7BKfndDsBsLgAsvw3zPmNHHxL6YqMvRgcX",
  "key10": "5JxJYU8pd9wc1Gbm8kEgVJAwcx57JGBv3XehqPtGdwtuWrxC47bQvLyifwQXvcdM7TfbSnQYX5yiFpjSFfEVc5VE",
  "key11": "3XXxXiDNebBtZawMQwPVAZCwd83J9HRKphiiJ7EB9DiBRcwiKK8bBPSGSL9W9XkFfigR7pHLLMNLhnUogwoiMbhX",
  "key12": "2SuipFPFazBbCKP9PRi6ASV7twZgJjyxnwaoeWPAEjaM1rKdnVsuVqUXq2vQ2mUh33mPDAH9515rA1S6vqCJnVyr",
  "key13": "23hpZh7sJDh7GXixcbyRnbkLjWu3uTp8uiQef8jCV2td3Y7JRvKmCjiRRVVxaCMp6Ps1QV5BSKrP2GiDoGJEYzCi",
  "key14": "5KnTkmHQrWLKS3zEpGPJN4TJWQPV8jZrUQ27AYUjmM1R9RoyWVJN3BWeiS2tupJSfawZyfJrnTvZ9igLrxJZhfgb",
  "key15": "58ThU1mYptBz94pXSLgpyVvN5a2YAdWPcXBdttDyWxkDWgmfUKBGQHN3Af1nxWUjZg3WRHQGAtW6VVpCywyEqf4b",
  "key16": "4o5R5H1N1w5CFeVqNYGRfMpHnBXJvExh4oiGnj1baVMdKMExUYdCg4deHotiES8qg7MjwnZyJ3mtrcsX7sMUPtVw",
  "key17": "4Ki3yRzRUhgJqvsSPh7PhebkNKa9UwYzaG4gvRWQus55WVVpEo2xQsSWs8PvKtbvCxS28qjECT5WxQp9v2J5MixU",
  "key18": "62ZMxS6tpGDEkEAXG6Z4x4tyRLFsMtjhCPL152puaFEW7WTHCXi1SKEMtJMW9kmnoMkNiacGrQwxtAmxwKUHsf3T",
  "key19": "5tuN1feFfRhxapwkF3zRUyzsiAnoTs3BBi69QQeuVegbrU1VWPofskm1HLbwgMh5oHmoPVxQGh49QpDwJh8dEE2S",
  "key20": "2wwTW5wgiQXdrivnp1MVYzPta1LBGzmD6VNnKRA2Sq4eJsDYFESnT3eLhB7tDZxvgqKB8dmMzYEiEByc8GPgofkP",
  "key21": "4TFnuvCozeZ7pWoQeDGqMfFGBviD5Pd5keF1PFWQjbCWEC3KoUyqJXn9ed2Xc5nE5nYA9KQU6bbcnJhnUcRur2zS",
  "key22": "2vDf1hpLMhdMrDY481t6fKAaqkwN3JKRzR7KvDQ8ejmGBD9D4adFUjUDJD5N4zZwJ65cigzdCfpnyc52p7hd4H13",
  "key23": "3ofJbgc3NzTojNnZbGe7A7CvPJ2bjkvJDBw9ZCPr2uoY1UcoGX1G5rHXrP5Uhq7Aee4WB1LDcpVQQ8M2NGotrCv6",
  "key24": "27GsNQPNUzKAEro6fLhQzFenUEyMVoNE8Xjm38rmDrHr8uE1S3bNFL9wzxM8armhTVWaEfkx3je1mScRpFJ7FWwE",
  "key25": "5er35DUsvUdDep8HtnG778JehAx6Pbh5LyRAhLVj4SMyPyk6e9v3V7a8RiWeeRgZkkVuFJXedWbMpBefE4SNMfJ3",
  "key26": "5Qjst3yUkYvXf1uF874p44QHigZufdjdTQNr5hAxXo5ESdDUKwWaN71KBsVS5BYdxCPpzfd3gwFSCHAsCyi1sggo",
  "key27": "abStUtCHRdX9TNzaC4NkGwY2tT5kVoAzJUvTn9rgv5vjhmH63MVdhNa2MjhHAwQ669eg3wraSWobob5cNLj4row",
  "key28": "4pjszXrbVR2Vjgsyj93GVpTh8UaKQ8pbgtBnanJRDNDoxwr7f3jxzPRuvordsaNkXA7SQFSEYgrfDATC9g78mbDt",
  "key29": "ZpGEEiGy6rdBhAcHPFYiaR2mTeHrYG8wwPkzHqBcKR33XeyVWX6BxUthw4VkbVKLmp7Kej7hANcEqrKUWe8q1hB",
  "key30": "2CH345x3e3vgYn24PZM2fWhndXjkBvGGqLSHgUkgVgoohDAmDDFmmtGcUS7EpBZRXZAmdD3cZDFGX7PEdXp4W68a",
  "key31": "Mufp6Yq32C8bgXE9nRR1Sm6icg6QxBMFTfZWTzJsBfzBuZVJwoDZR4FcrV9H3hwQMYVEf2GfZuKcfnjXqcKhVhZ",
  "key32": "29nkTB1f3xCtzv7zjUBhGgBNFmzaYw3SStCHEi9z5ivQ4pWkAdi5yxdfHUxPxczBSoe571PA5ekKVYdniQtsFNkH",
  "key33": "2yyBXUTrZGTkPUfYMi8yx25KpFUVNki4U1myuPhdarA6kKqfXzdv5Mtja4oyFC238bd9jWJZL4ech6zWXj2eE39r",
  "key34": "2tAbDsDetF8g1n2S9qw5WR8AQ99hQeephVTUA3RZLLbtuGLguAiL2NhQecanXJM2scbEdp3r4ppEqdSTfzyuHJDb",
  "key35": "4PR7WgYkmJdRmBjvktsDbbCYayTmUGyYTGnnno2Uxh1GAPN9ie6mqJrsaQKvh2qmqeyswoGKFdiZaepEVuMvbCvQ",
  "key36": "4wkM7dUqJSwBeNJrbzrpD2CifFr9542TwuxL7YU9H4S61jo9if3vtP2dZpMePWUerV52RPpjK1BSGPmzRce3L9xs",
  "key37": "4FoHPLbx6tgZJJieHwUjBoEXZAnCZ2AANcfWVQvjRdYn3RrPecsFKF5FKQqAauEVeF9tpMCShLzxzZWaM4r5DLFL",
  "key38": "WJq1SiBJVmRSYrj7uoCtA8nCYuppn2gh3dwCKRo7SFU5iZ3aWeBgEQGdSzVJjuByBb1jUb1vZ7GVLNTxnjXPgz7",
  "key39": "6tK8FPDLp5eL5TA4N9EJFw168Jnjsbm8aMk9Xv9wVXqZpM8HueijdbQgPetLtWR1wgG5yNwtZos5CgJ7YmZXxPn",
  "key40": "JN7fLth4ViuZpgVNv6SWLceK7Ukub4QXfqazcsLEyAh1scHVDMxr989HdLewi7tshFV2jGBoixLaH9TsrPML6G8",
  "key41": "2LG5kz3LtAjW5t97fZMVdwvYudad9SfU3VQeMtLEKJSxoEimBkoky7C8xEssbXv7V7EcTkzZBiSZTfPzh7LPwTui",
  "key42": "2rypUKjojjQbZQG5dZU12YH5VX4KEomZJAUnprcb3SyWzgJZKvfjE8hr8mTF86xRoY4FZQdf48Ksd53GTq5QhFM1",
  "key43": "4Qzx7578a5zPcgy5X8WZPipTLhvJGZXkuRXNZZ18WaY8MQQ4tYdVKg3pe9bw1CuuSNNzgrpj8aS5niYSJGhwu6cz"
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
