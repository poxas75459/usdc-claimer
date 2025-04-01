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
    "3s8dbNAK3uCbukADWTK5cs1v5Kxs93cB1Di6zPhQDg6P51DxxeVrzyi5btaf7kMvpNqYrsWu1ySGFvBJw5CEHqtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QzUPeGzQ7vX9cebKPt7GYG2rmM6pEmsXZLgepAacAP9jrjfLQqygZqwXDHTHr9R8hr8dK4eUYp9SJrfkdyPem6G",
  "key1": "3VdqziQqE5srcvJ95HoNdo52EqKrbKbEZQAQb5gagdRn5KcU4tmBNd2H42Td6XMGYhUcpidgsBfahyCvs3Gon242",
  "key2": "3reqj9jkLADhjiwtK3nuL3TW7Py2oaBmzKfvo3FoT6tovAV6EZk9b7wmJ8oSdiPQAJDNzXiC8G5wQXvoBuZDQgL2",
  "key3": "3rqj2JacivrqhWQFQuWLrhBfLa7V1kRx7m9yo41DqzkG3J2gPnX9geCRRd87WFqLPpURpjD4v7aZgwMcZjHhX5BT",
  "key4": "zjggCQrXMTCdwzpbg3vhchQMdTZi4dkrHCA9X2WBo6ZFb5b7UEuTD6otZeinzKBTAuNFNeeXrAt146pErben2ja",
  "key5": "3ZZcV9yQkGQj17X2JPNHsmgJZ5eZB5vVKsaoTTQGv1G9VhMPPyko4Fkr5RvwFzeYHu4uDqfUs4XAgZt2QzKnUPJs",
  "key6": "3n4sz2KVKsKNY7JBgjcQndTWKcMtNapDSwupmox38DGYxsEBBYFZDSs9WPgUxfEsE74yNRxBX4nYwWdPKi1hLyYm",
  "key7": "3TAnC1ZgPK1evdPjwcQy7JtY2vnKQvxLHiBmEWfMhUwSGRtAnmdLAGEwcRnkoF6stncD4Ge7xzcGLcwvpxGijBzS",
  "key8": "39S2RJPyC1JV3CoPBdsu8r2cmKfjxweMivxNKv8Kx6aL7r6Epi3h9zMb9EwmRQqvgvQ1C7awf6YG1ozs49xNVK9m",
  "key9": "nDAYJYbJWjAuTf1dgzirRhS78heavcHexHcEyqutANYFCfy34SATtzjgeAZdkjyUG7Qnb5vx5qR8v9LfPF7axY4",
  "key10": "3jLUeNRoVus7jmqpJpnAJi3x5CJVAfuXQBgkqgEJceqpnPEeY7KU9jBxNeMka9PU4xhaNY8zU2V9uFEt1oyPQeD1",
  "key11": "3xQa7ETQGgK67wzVRneLRBPFT56mMeUSvES7CpfuebSAWb2MrdcvkKnF35AGvR6RNwR8pWd8mrk4tEUHcikeUQwh",
  "key12": "4UUxyEZFJ34rYUz5ChXh4N5zQQPSsqANvqZdavbC44Gxs5xwEZrzF6H1JAUzAyfnasHaFV7N8CMLT6b5P7zWhFC1",
  "key13": "5VkC2V44A9Ka6756fNkFzFAPTjEXk2kWH4MwNDcqYoWf36T7Ev7B4o9jJ6ZvYn6kiEWU5F1iaqWGRywT1T3LstA",
  "key14": "2hr7aYzPEeUML6SC2au9vGQmrpF7Ky7xeQMBVRiKUbvVZFEFbNyAp1gA52qg5r5vtUyVJZhLo1sMDk1S36FMom7y",
  "key15": "5yxvkkYWQQCNvyvtgrmDa27eKi5JZjnEe4Dh38asWdAxujywKVJ23CAYTRiVYETQ1rQ9QiwGcUWmR64xzU4ChJu9",
  "key16": "4ZR515G8WTKrhvQ3zDwwsCbQm3J5KJZuQLhoSqEaHqTm88KLGuMdb6RBBX2TV6KASuUVtn7xB8aEhRR7dP7rwL47",
  "key17": "3Zi5w6KCTUiU5avzmrZRFaCBPHgCtaCqVynWU1rJEnGHTNBg1gAjrVx4Da96mCz2BioB3L6n8kd8MFah8awT4uHF",
  "key18": "3KD7Au56WzJfK9kKUvVPrHkPwLXwpxtPVkbjKapJU2Nx2jC8S4P12jYLhvsPkCprauMC5pbozJCsPP6jaSAZmpvy",
  "key19": "2qa8EmswBjJxrPqgjkybPusBuXjnXUiFGpombJNg4rgvL5JRiDmS5FE3n1fcpu9umuYcDjnUuWSf3a874r5SV989",
  "key20": "55tS5J9AH7QnzeRhKtvkG77nWofsoKA2m2covoRR3BNsDxhSjW3GSqbBJQxjf6HEcPwqrnwJqR12bQaiYePRoVs1",
  "key21": "4RRKN2tUTzGybT6i44sYJABfGrSAP3aUeZ8EjBzpDmN3iTcxpexq385ifuPZaGABSe6n1Gtxi8ZfWVAsHbA2KC1v",
  "key22": "3DEJY8wDAWp32DekzWoYfe9sbKUu5YUjtjq7C8trr2bcg48UYn5xtUjLuZ3MQ2RuvZDLS16CqtTB2Tucx1LNLMyj",
  "key23": "4daeRXer5vAfTGGZizVUQzwktQZFMX4oQCcJzHAJoBfUjCLaZg855WLNzXg4PZUoD4bEJMojavTZDs9Rs63bK5yd",
  "key24": "3xMRkvnDdW34E77YBLErCGPX6sJjzDiBJjDAAcYTHTBV2CWS7u1JSzxatTfh2hkJfQsgunHsb5K2vbwf2Xm1sDbG",
  "key25": "2rWw7YWAWLPYF1Xmp4XPtrMsVH7nLbtbMFwcbKeMmkvc3sHFpYie6J8u3iyN4eec6wsHpp5uHiuywgnDtNbyM3vo",
  "key26": "4DZRwuxVpebABSgJGDrtTpa7oCDNybcH83tG961R9ybp81jGAw1m31K52oSPfXm3emtutb8hPbS6iVWyBeSLH3Z7",
  "key27": "2EcEU1vx5yAMAHQnhrnhKS3up5dGYckVwodkUDNygbUszHuUj1MtjdTQ3jrBEDjxruSL5pbQgd4JDSFKxTzuox2c",
  "key28": "2mfjGUaopkVejtHiUYw61HW1bafW8QyFK5hLh4pCHSJMmHg1aEZjK1tbKbMYePs228UcYuZkQpKqDQ2eQxPCospg",
  "key29": "4RMv63J56qfJiMPtKHNYqPWvEkDSfg2CtxgBLghDgunodutCo6Kzh8sUt5EoKQqSKD8b8EFpjgh6fWW7JGTkVCty",
  "key30": "126JiXnEiKqMxYT6PUotPfgghF3UtHtHfVJ1Zt4E4Rjasmawk9n3LpmVjfVi7LQPqzvgrZVPKHbudYxXLWJGNEmw",
  "key31": "3tyvVzgTYkCyUGacWECMXfTCmLvvh3g4HkXCwfCovPYFjRCcSYAQjq8CB6ShS5bRxHwTPftGmZ87DBP2k7gecYdb",
  "key32": "5QQdfMhgxeSENhj5vGehcHRscQuaQyZdQ6s7kvuDaRq9tW4uEWFb2QgFMVRUzBPng7xKcdaEWrK1pXNJ48ca1ano",
  "key33": "4tBkSPaBBLmP5k5N6LM1PBpCqzfWSSmVmNoV9ekfZFzvCxryEbXuXMNSySRK4nfA7hT2vnkRYiG1rhRJ4SXhfkxo",
  "key34": "3DMzubNgAp5ctAoJHDZk6pGwcNo25XfnAggXMNrikB9Yfj9RfhniwA3seCWZLGVQoJFzTBZ9yHxrZaoAa8AB9EDy",
  "key35": "2gWdGjYNzPTgnmiFwzDq46eK9tKAYKTRDDZTPtDUw5vJhAd8x1VnLPKHjgA5Ed4FFYKW4AKnKQDWjZRwQ9dDdio4",
  "key36": "4ttbi1aKVM2dRo5SeM3HnAgT2Kd1Ku4gjroHcBrSQMrz8JLhXddUKtYqrn8jQavJpcCFpLuUNj77SWnQrYv9iHZB",
  "key37": "4e77yPsD8LdRq55Q6YXGA8Rmype3kbnP9ENP1SQkaU9gkdVLmd42HwmwiMUmNt73c5nNetuvXLQpn9UKCemmx7DT",
  "key38": "3JxDFHECDjxNi9GH2pZ7hCnoXApVP4y2tFKbKFWeigJZHQgb5ZLu8jjJfpsDrUgFK9fJLgvW79dsVsFa7ApW2N5i"
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
