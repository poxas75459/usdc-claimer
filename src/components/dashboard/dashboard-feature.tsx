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
    "44themccQYDBW8XJdL8545yq4UoJ9Kh42DRGZPzA4Q2m6rzJnd2yVTUuYy2Gv1WkAzBiG7esSDU3GjHBzS6Pewzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awYUT61dVGPyHyGUWJMnDPVQVHuEFmfviNLMybfiFYK2s93672f4NVNAT6zA7y6zDXiPYNH1YNNtoJm4kVTCQMM",
  "key1": "5UiCH2q7fKTatxyNNC7ejLDWc4VBAX5nFPb4AL2Y6ZD1fWmxTZJxJnegRWvVNX296dMxCyZQ39PE5LU7KLWUxTaj",
  "key2": "Dyvo9BZr5fChWC3w53vU91pFieTPpdK1sbdZjCNRhydTt78WvFZR3jKcW3MVpS2kZguPJak9k6B5LhSKRUhkjRP",
  "key3": "5fv63ETzb9Wm7TfW9MYxR2iHUTzwoWWy6gUkh55F46XsUjRcJ9kudgGjgmjthcuqnDSuwWP2wscTGku5KHwn7g3",
  "key4": "3rcBURZr7U2A5ZVsg4SXfzAg72sRxT91bmUW7LMacB529L5RbkKMosUFptec7P4Sn2a3Af6eJFkddHdjgYmKhwCt",
  "key5": "2M4LeCiqw38bzLrBWPuacWxLDkmZTieBigJJj5V2vYwVX79yuspCvjkaBbMxSoEFGK1361RJDprH32Qq5WU3dRs3",
  "key6": "3CVBpGhMWp2tZ9RpzdyJ7Qgva7YNELE5AJXdskTZ4KrtEB9QL9mHUagGM6n83kL8TuQzCHdsZf4xfcQoJLYrkrTv",
  "key7": "pX11Sd4vKZr7sFXRPbWUnzgReCmP6tEkLdXPGAaCZRwsbxzc2E34tDwsuNLTqW85oSoHUo7wqBAn64BTiikFEwf",
  "key8": "5J9UZSh98KU4yPuo3CzVYKU4mKz9XUAkDAC8CZkSaMG9keWyWXAHfLSDAecFVVrys9zJT9HwyZFgJuDhrvvniWrR",
  "key9": "5asCxBmsLtGXMqvkZN1UzhC6zSGX6yyj1BncrsxwcY1RivVZ2EuULzk7nY1Jjangh3hHMWSRFeYdu7s9VtX9cdcj",
  "key10": "9dgygXxcJMJfwMRNp9pkwG8ij5iWB7rX2t7wMSBW4Y4EAFK7S21GLKsuQLDd1yk9RHSdXMgVhSXDoS3yYVZAnC4",
  "key11": "5tVWez4uSZHg1GqQzDGBpSQvLUe3cx8duhN8FabxLfLMZ9cp7kL2LQchTecPjeWnbg4LVVrtXz4TzQhrF2tsPiTh",
  "key12": "5PaoTfVc2hE3FLggdpwyyvyyBJsAUz1714YhYmbzv9FPqKiJqnA2FsZ5oBZMvPrMa1vjfa5Gw8pk4Gz2d7K7U611",
  "key13": "zapNduhEoUb79ziJ58xASG7U2htrJuTCvzusNW3P3EYbsCu2xpTgwwpW663y2LJGCswXmhnfX84myaAJyn48r1m",
  "key14": "SL1jHPDc2Dmp17eQUhTYa2Y5B9cjB74uS3FM6Swu92L2k39dNmFmfRENjLA5AsN2T826yvm9h7t2HgSXahmKCNp",
  "key15": "3pw4ikbvCbJj2Ts2MdvRMtUVsYDVnLfxZVZjZ3iFCvsJiZWK7yvkbKtEP5dqbxScYFLiHKQsjt6p4jRinkytXQcS",
  "key16": "3Av9bydQ8LURd4b4wQXBHpiqX5dauWWHq42vGzwuKfhKqZhNanAyGF5nJ8bh7B4ZMtG9GjFrYhz42YsnyDsbHVZx",
  "key17": "2Lfnmtd491Wfw5eJzbUQU9wDm2AhU3dYZWYbsyn65WcKHMhfeCT1dFXX9Rg1wzDvkj3Noimu3jHdTM6qeJCpLvQh",
  "key18": "2XvAD5c3qQvBDTLmYq1KSekSYw3MxSJaJvmhzyrkMyj4uEUoMsKYtZ8J5CxpGRB2Mx9bydHwh7D5qi56mGdLdAX8",
  "key19": "2Dj6grVtfftg7DbanruHDxE4gnd4MYS94Qov2AKi9ooJtv2QC8i6Ez4fgzq834pQMctWAqUsfURZftJ5YHqVwnvs",
  "key20": "4XqwSnFY6fcN5VaEgNSmwdFtJG6Aqs4GX4ombWMaVQ1ggeVE1QM4ZBSyze4Pu8L2A1jh9qL147W5gcLXEGZqrm15",
  "key21": "5EeByx4asXeg8zmxQcBYccmtC76wKApNvgeRCENH8gPRNYZwEECkJzmPuQZmrHTHzngKUVZ9qD6mAEGbSGrE3TGE",
  "key22": "mq6DzX7qaZHJYgyqU8Ku1m9AENKqM12bNbGCPKJ1eAhPHhuM7pNUpdD8RGgQibVN9K4u75omJCbbH3SBEqE6z2b",
  "key23": "39gdZMFMGbkKtqAzQCQfHnTZtQJU4pr5tF8sCrN9ZbBmDAhysmDF4Dxm51m852dS6uWGhMaNdCG6Vx9JEfqCmGM9",
  "key24": "37qv5xRy8pSdq5A3k3GQKWDQrCN3TeRBEf2mLvy9uz5Jp2KXaabYpZDojCFteqzLmewbKGu62i7APdEHP88GJtvG",
  "key25": "3bxSpFbkUZs5svSb4fTELrqnkdMgfwABJV6ZJpByzbHQRAUuKV3L2hYN86aGqFTb7ywMjAcfjpao8MN682jiGZAa",
  "key26": "5ggEzpqwfrZAdL3cgohjnCjReeeY6ajTCa9dHVs8YWE1af4TncuvoHDGxre6yJe9K3WRWND86uhaq1FLjKSSWcfw",
  "key27": "2sGbpFAfQWErUFFivkyGraRTaMfw4utEjxjS3d8NHwtfy9kL52dgjEDLTE4cuA6FSt2LKj5ABSg4f5moMtrqjgrq",
  "key28": "4HvhoNfZUQX1hapMCG1BCuyyYit2F9qBbtHHDYXqdzD3GWaGCn2CniXbb8DPjNPHNMW5vtTxbVh8TiFAHheK96og",
  "key29": "3Kg3LhAkAco22uFN5FNtUaijXud3bMdU8mKBxfMebgV1ckHumJEAiQbk4DMjHpYM7tDH7GtTieeXa68Qvk796cEW",
  "key30": "57Yia7HKRsBS7V9RLEuNz512Yw5LRvTVAsM51cb9VMsSfju2g4ixrxwMjHYU91J44mVJtTGAY6CE4KRjxqCP2vmP",
  "key31": "2VaJ9Xh1G2JSu6wyUCvCyCCYrrm6ADgog5W7JCHpEeY2FSGwoE6wY36zSDsBpPKF2YhtKMZ6ckFgbCTfBpz2h3sP",
  "key32": "5eXGFZmRDmWgMMeW1Qezw3GZBLBLK89RLv2nmEhnUHokzZurfCMA7sYcrYVX4nyCASm7yK5vAEsjSDFrUnJaiUGS",
  "key33": "4pekTZaN3jfy2YX8UUJ38ipTa7UUeVwFsZC4BwJpRkxqC6adqvdLrXSVUMuAcbAHJWwwMM2Yv2y6p6RaFd2SRDih",
  "key34": "j6i34cuEUivvRmCkf67hzdDDTkBQiUaW4zgSTdMHtGZhSCqJmCJmxpFpSDufXZb1LRh7ECpXNnqZ2LzMnkDxkhs",
  "key35": "2jfKjt1hAFiSekBwpvLzbpiTEHgTij7GX1MWktb5HZyNH1w3WjMxZjHtWVVvEeuoYw2jwRmRbyUKVbG9CbFfQW6u",
  "key36": "5Y9Fk3ZxEFY2BQU9pUQQ23aiLtkjy6xWE6wJNh8wxKE4UJ5zr5HQJ8ryLkP9R9MzKtCDPq3ZX5rmoLwEobCNRfcX",
  "key37": "2iJurr8y2Ncps682kBQTFXzkDbt7q2Kkta55xneJnp2gdBFzJXhgkiuYPuQrgR9YsxUvfHfFP3zbiDJhdLQXBnwz",
  "key38": "FbudGTggTeXmgP3NQrxx1Sk9BHkdDHmZYeekM29C5CX6fTy7KkFGfwnstJEUAxKeutjijjtz5r9JpgiNyQtwGXw",
  "key39": "5gyLPjHWjDhejzn36WPvPP7SwTtdwPhET9WR2Uz9YvUxXcUKW1zGmUbyjoehXnb6wN2rQRvkjTnx5B5nxoV3pdRf",
  "key40": "5eg4PGPSwYQs3ZQAg5ctFeyns8RGKGfRN8PbQMwcS2MoGVcC9QtygJWqNbc6NsYzbktex4i89e28cPZ877YrYvFE",
  "key41": "4KvPLj9Wi7u4aDgF8RNUyNkADCJBfbuCSMSFQCwKrf1HckuZgxe3ZFi5MWuq5kUzbMAk7VphHDfkGGtiLwJFV6eG",
  "key42": "oqCpoVpGCsSVwVAVXNvaPUwAL1uKhqt8QnssKySMNJ9n5LHZkJTJghjLSVHvbwRpEC9e918qAqcPxwQaB1LdwjF",
  "key43": "qgi5NR5V1ssuH2Ng2QZVwPz4g6ckUmjKSALP1UPfTnPmEL41WZeZu1rnT1yzJQReRVkkoYanXxRyb63ZVdKcbPC",
  "key44": "3WDQSs13KEchh47eR8xb1uZRVigszzWkLGDKCyST93HoxqLcgeTuJuvWjD9ThDoS3nyh9VsQd33S21EA4w4L5Ka6",
  "key45": "5WQHaAHT26Uo7KaBZDJR4xdzpj6QrByuCJKyTnKqLUCcKBPTgV3TTzfyYSUq18sW78tSNgmvNDTF2BKUz1djdhFT",
  "key46": "4CCxTEcJkPQftqgJfzy4rbxpUi3amZ5dUtoA1AAdu5qrjzXJcrfDg6hzuu3EoYya8EBqEvBaWReVhTmHDQda48ds",
  "key47": "WJQe6buuuTYzLSVZyMKShyw7BHapiX9TQvV6BmWmVK1KJhSBH6YukLiPPhKSv8Ub1xmYYSaLNPSdGCzwTfMm8jq",
  "key48": "SBYwaYFR1FZBD5cYJfZdrMb82wMqwSVERdxSHL69QuCHxkXWRgwN3hzmnhexpXekgHu975uGL1DVmvMY8DYhfS6",
  "key49": "NLwrQNLHU8gXGXy896n498EGfkJDDep8od9ZRNhHHQwxLT169sfHvw3u8jmU2SZS31GE79M8eQpxQNw366FhEtN"
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
