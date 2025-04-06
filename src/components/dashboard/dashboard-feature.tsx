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
    "2rAuaYvK4JRUfr7dZztv3GAynLwmMS5eEqoLbmrxFqVHbPhomAmzrVfVGubF7hTpjQfqagDHRFuAjQNNWHDEmpbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FevqwWXJiQ5f4PKnsqk5fneLUBwkmNdi4FFLmBMEXS4s4Qna9Apipqjo29jbj1pKx8bwrxAZxcimWfXcZ8mkTEe",
  "key1": "5HEQFrWVUKtkP371mSgPB9GbN7DbFnYuBGnEkP77DrEkYHgZ1XPmab7QnoRyAmrtwCXeGKwiPhufAyvhLSkWvceX",
  "key2": "3XaGmRtrEzgYNuGniirYRZesSb567wwc7yPjRqYABdak2DV9jDHAMrxdfGWPyEqeC8wQzk8YkMnEgn4xxKAHKus5",
  "key3": "3z5buJsQkP3vCRiLu4rVEakuVfnjExFXU6Y77VbbiMo92XgXHX5LVvgfNbHjyVqjdANK6aG9jxF7aamWM3MwkDi3",
  "key4": "4MvacBzenGwpGN6cYN9nJ5by6xxSTyT4UvF4feZLftWsgoiRmGs9AQULWn7kYTkm1G62ia4uRwwukz2ivP7g3SxJ",
  "key5": "2WNM6cYpGMxwebfzYdWqNkVGhR8qSspdsBzJptTa3PDbD33Y6EHUH2j1WPyf1PVuKivDLeuBUB54qhvg87MJPAVw",
  "key6": "3jNi2GbwhJEtWoxHBXqYZ1u6c9PF9XKNnjV9PkKByRbEno1URA7pHAjAqNVNRarzfAKjTGAPmtKSCyeCe4WTXjjg",
  "key7": "5sWKgPUf9S2fKxGy63A3YiCF8LBu1hRavU1tfddr6MVUhQ2HL6fyi9xbeVR8YkZhh8ucoFLNRCZm8Rw4yE9xjwjm",
  "key8": "5nLpJnXLxnwhH12k5uUGQEWMU87WufTpqUL6GNxsMYv7icq5D2bytsEUk4G5aPjnUbjmAiwrdmatXWi2LvsS4C2u",
  "key9": "4irB1dP1kKGbyrERmz1sH6rthDC7YCVDy33MYoav9sfx4dRg7hp7dxDQ9T9tQh2k6m36AYfQ9kpiTfkGxjZitcAy",
  "key10": "2XBvZ9481tusPXrHtdecwAiWAS4h9P85FDJtLKhfqtPpbrYxyBGBvAPCCk9EhKvwzL7PrqEnfHDvYtoCU76YSbmJ",
  "key11": "5TFRhURAYmf6io8vNwRkggict4NP7VsckM7RH4Li5R67ULfR8Kzh1S7biiQXJ6qSjendiDkXbSJpAu6MU9V1Pfdp",
  "key12": "5CcTnEitZNroizSnktFsPd8VT9JW74jkJPGyZYjetAoQCkhEXiTbL4D2reffWgqcxVk9Ct4EoK7ZQM2t6gtvc15s",
  "key13": "5TcJ8fS7FWojvnuLt75rLeabLGMVnkV6JDnjUCka1riA8JETvinNmAyToWDsgeXuxn8zBDfGEWsrK23jiGXRU3Fr",
  "key14": "3qXH1FNSva4vDkWzEALTLkAxqfVsLvW3tBPAtZo4nAYd1Je1okAhfeL8B2q6PKPXH8bXAnuN7YuteMsX2ipjHVKm",
  "key15": "2uScbCZ3ScmwtavHhh1XQUoufPwXroXn4k9J2ELkJ3aFSVk8PgXRWgy8xSZzSiuU3rZMWrkAnmJLEsEtjbRXY7Xm",
  "key16": "4Mm7GhKGRrWip6bngszyHw6hRKjYt6fKKQgzXHqfd7KegTjZhHLeWEj2Kis2meJZ5ZwKPochScmWMpxdJPNPM4cW",
  "key17": "tyVL96uxyPgbLWFGq32fAAtkqhoyA1ZcaZXkZ8neJRUNtkBGH1oBnkWXHMV1MY2QgC2yUV576tpwZBSqZAWrjjv",
  "key18": "tkXNtc16FydL9EzhBhYrn7hrFFYJwfW1NwJrgqMsgh4ERfvgoAqZKBMPVUy55pNX8augGko2M7K9pvh7YvirGv1",
  "key19": "3f7Npw4QEHcHpozuDrL4gsb7i3xtQprEYb1AVPgXSXYGebUbxWjQUWZ6e4dpyU1KLCJvHNGF7Q8uaKcn8gFh8Ri3",
  "key20": "23pH62iTkpxWfkTPrH9JmmUtfTdTWzjPNZKafaxUxTMrS6PLDRHyvpnHVcjmRQqDAg8FbvjndMoCFwcnXjfh46wf",
  "key21": "2f6PtngHkP6fQA6xUnLeWbDW2aBeQW2LFm1upep1rFrHhnmZV2Jz7Jbe5AWMXJsNpEzSHVmP2ZfLJj7eLfupihVz",
  "key22": "525BmRgZgK88HwB9u9tZgCXEtN58cwDCGSCJemYxAxWgSzdeFFWcSiAgPivTmqhVcYKeg4GcGNVXQ62c89yxjSRU",
  "key23": "5Cvk3zMp3eSwd8DnGqsyLQDnrqy1wDa9nBtSMEVUj41rvSJxCfVJvnCV8mcxGiK1Ppo1qb4CGBHoWedPsUdXwDis",
  "key24": "64yT3P86dfBT5PzuiT6ivDLmVVA7VJZMWaDRSeSZhLm4xUEZ3BXRoN1TVCw8g1oK5Syik8p69uevjody4CXWCvtv",
  "key25": "LFWRpWJKpsV9mi8QnsMRbsPG9Z4HLe4cYSNbNkfy8FFH6SakDJEWFvWgkyQpMAicenQcUi8KYv3Bjpf29TocXbB",
  "key26": "2LkkYCwqyvXfZtLiyFSQdkPH27UkH4D5YSqGDJSeCSWPS2drP1uBsU9rW7Uk9NJ3mWaFS4J4K7uD6PCTdzLt8Nrq"
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
