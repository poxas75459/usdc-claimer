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
    "4zDqgAPYbG1b7MosPrGzQ7vApAGRjtzjPxXWFMNKmwerJCsFgFnzsKw5kfJuc3RfuV65tpYBj5jRfL9porC921jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhaCy54tmuuqrzG77Yczp2hhDcSpD8BUVgoc2Sw9uwSKpiKdttgeryvKyMbQRdBzk2itLq12zZEQ9HEaPhdUsb9",
  "key1": "3KL7SDXxZRkFLAEMkk5dMWKqNGsnFP2J7GT67nkpa4NLTxQsPtqRny194bzJ9tkonnpseFDVdFBYzubkNV5HYcWG",
  "key2": "5SUEJciQQQNUn11fabRgmPoFqNwYKN76JPPQUpK6kobMg6J9tPG8UwyJZczm77wtK3an9NPFAzmzX35w3NRCfoh5",
  "key3": "2pEAM89hRYfVU4wVQciGm33iTXFgF3SLbXuEnXtPCdDv7THxZbMivHvSPoxPworAeVmu93bExoU2Exo2Q9cQuoRa",
  "key4": "2gZHaKg9aQHtyn7M4k9UoT9EYLJn9rP8JDGToduptWV9oxN62NhH64nEuingEXjGzpi4Ti9EzdQ57GZB6T4sHirr",
  "key5": "sVag5ZiD1gfmAWyB5qkTDzgTBZGedXrXtwR6c3AKrTMjDKh5n8WECDggeYZBVsGHPE8ydsDqnduKvzkV5yHv3Tx",
  "key6": "2UJQcj8GKyWjFeJdiSTqgzd1cLeonneM2adhoMdozsUE8nyzZdjS8gyzLS4Esi34rjDR35LqNmK6qD85gnp74mML",
  "key7": "4Ko18A8pHXGTxqQq928ZxVFL9a4FCtxBMGSWUjx5Af6Mmfz1MTJSsWh1jd5Yp9uHSYdb6Y17P2i3fBVmfwizgYST",
  "key8": "5R469mnRkjWFETFN7s9SDyS3erz36WFxdgMwuNzERjhRnBWErzLePEjda8zpJoz9K7ezjjymzf66RH5CVBj5CrfP",
  "key9": "3uquZrtAnpEtQ4u49nskYXB9SN4fXYxHiDH4Ms9Yqajay6Tn1pXYDXW373PsMywK6uGQQMyLpgazunncZDzrRkA3",
  "key10": "8NjZuUYyKPcbJGbH82HAdwjSexeDA8T4PS1aAfQTfRNFCjNVQtgXsjKAH3CpjszwU6PFo9ozyYbssJX2ASbymCw",
  "key11": "9mvKLBGGVVftQfqrCTTcnJSBdYYZeQYp589o3mmVm3tzv6UQKGkzFYXct8Dh715fX2p7WtFNK7EVy6qJAecYkmJ",
  "key12": "5VmuPruPjM26CdfQyL1f4truZprWJVYAam4akTLEZfXiJwq7PxQ6VvsVXLaRDxoTHeEVWwWKG9qaodv7JwgJyJfA",
  "key13": "3chVezURbfwaEq3qinzjMGRGPWMEwyPWfdf2UGbMCW42QfXA7bwoFZhCWDsx9mNJhvVmsjSFtZ9kDUHSAyRYtjNG",
  "key14": "579nA4Pb2nBN2bxPwGdJTscnuh7MFS1vkMHdTb9qf7hw5nDDk8cuc7a37reX8Jgwfd76nsFRY7bJVEnT4W7ZdP7B",
  "key15": "3VN4ojA1Tb2xto8dF8F2meyGv1GJCc58w72gUMhYfKAxEsmGE2aGzhQCAuMYoniXi5cTRkd8jnbHaAXERWbsbN6P",
  "key16": "376yohPEbWy9ZBKsxaJk1nrPQiwLbfMCrNCmewpweZ9uaT27VLcgaqmM2DZNuXBwLzUdZz8wBNzSWQDVYjD5GFFC",
  "key17": "5f3hTT1jq7uaYTsN3ehgg3H7N3ksHXMc5yhmDKMe2FgAh6bFvK9tzKKSjWXg24hJFGLarmzqUmxdJ6LfueMVbYdh",
  "key18": "nU7PzzaHfcBrv8bJu62KNZHt4eiQbD7NvRThMnbpeUfPSWUw6vFCULCvK2PuWcbuBUWYMsaQYxCwR1HQ2mvepw2",
  "key19": "3ocbpkeJ9gkRaWwGUvacXzJDPgWrZwdBDpWPeJ6tPr6kUxXEobcs8BRdcoo5EqUkTmXySNr2Cwkx5GB5LxQK2dL4",
  "key20": "4Dx6c7GotZPeQHdV6woAb6qatZ6DM23Db5eKoeM6ZQNQSSjB8X5dqqgL711FJyDuoctm3BKGVMw8kCCchLNmyD3x",
  "key21": "3f2GCSgKoV7AyrDttMSj59d77uKpZ8uTVYkVkfFTGTw76aWJHc1FwW2Zom6Hcn8VgqnLDyvVmc7Mi6cQMsAiFh2M",
  "key22": "4uAjXcRBYAiHKLwJya6TgkLxZKU78JZXbNEa8LcvwxLzrHhDaKL353qA429JM1vSuFvgWS234MVEkvdpovHGodBt",
  "key23": "2S2Y3jhN66DBpZqP5cFQTgaah5ySFfAqkBstZzRpZEx92XrVc4798MjtgVGkEFZAkiWqewXKXyN9rKgbUnK5FXJi",
  "key24": "34Ae2Bwm6dVcxrua2Q7bn8Fx68Btp2Nfyp3VmUQ8AzM5L8zN96L8kDPc598JzAwkLb1nrup4K6Rza9hc4fCDdGmR",
  "key25": "2armBhxBuB5kbqYeLELJuHRYRcEByobrVztMXTAeUPKjj78qKYeMe7M24YRDGFMWb49hEfBdggFLD9zS7tU19R86",
  "key26": "Bk92pCioDgpBhGMM9N3kAM93PPbvswrbawRmQZDLj2BQJiJdBtcHRCpDRS1x4sMvtVouJ8XpRC36sghSo6kVTM7",
  "key27": "4wLRHMSU8hzzPu7n2bwBBxs3ZQVfD7fvjyA3i96mDqUDkQu3Z3wirh5Re3rZYSRcD4wc1MBE4amwa52hE9GYmBbh",
  "key28": "5UTS8h3JxvjCpA2fWQvGRiGWofut1HymPhfoNdNbQVK9H1K6qojKuDonyDpC1pBFDobo2NDHpzjt8jrZHFyU2boZ",
  "key29": "4R5i8ng4MUGwQa821Va1EkUDwWZ5VB8G9oPB5exf4j5zVgqCgozCaokfXzDDAv268MrrY1sepRojUheq4fLXmkLU",
  "key30": "4LkyMYW2TTL5cvveAYAmmgszbegiuo8qNXYvcw7mBpoX2fg7dZKtvaDZJCX4m9qpraLv3eNq1BWcFJnZaQWppcXK",
  "key31": "4yjoUzwn8uN6bMUSyC5UPBGUerSnmGwosp1Pze7KP5z5aWjMbJev5tPZXwKE7guE6PwBcgWceP2BYXR4HPUR2Fg1",
  "key32": "2dLyp2MXBjxj11dWRFVNbgEsZD6A5BW5NNhiFVN5n7gJwRmME7N9GoqUgFQxwraqoMYhgG3K6chfG9mbSmNWnri8"
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
