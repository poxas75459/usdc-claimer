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
    "MUaB3rLvUTRum3tc4rTeMzNPSgyrzk6NdCCuJsV3qSpyr9sLhFQS31DPmUfKjrnbBC8RbV8fTjh9N64VJJFXGnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suetCQjxpSBCLNmRXByPMCWXZrC6fP3yt3pBHwWvR3wLLrRRnZB9UL7sZgdFmb3q9WGLqzNjQPFRFnYgdGZDc2X",
  "key1": "2P8pMyydy5rtnRpHBHBMsb5X9xWXoZZyBPENUvaevnfjSv3RcUQNUjqWBpv3kT4v3A2eZf7A28jwNvqxgw4iDzNR",
  "key2": "2Vev1HT7c7mmCd5yj74Y3pPc6PyRJVPkz9xwyyPJn5RTiQM5xpPe5Y9Botje9kXYf9bAFh45NZRdzooE17anBmJz",
  "key3": "3x2rHk2AjqzHyTWaqozGMJHzFQ6RuPAu5xd5FDcLt7df7RFWUrFE8zvUsKMT324AdyozhXPNgZza1u3GdsvNariD",
  "key4": "EWenAbL8wXDmNCp4JPjZSJTDb3nbS4QniqvndFkXoqYiu23J2EVfCeTEvVXMhm75Yj5QDeTJTxseJiq6mPRN95y",
  "key5": "4e1AJyyweQ5rJepbNzRr3LkwYhBKkMUEF3gXvoupoi1xKDtcy2CTSMmA83viscRWhNetcCBnwRd8tzPQ2SWzzLMv",
  "key6": "3cfpSi9Xu5kSAjtBJBSxtFzwkax3cBQEMg2hUsvk3UW1oWZEpkhatyDnYwYaoYGokb1yRMSgCVgKZ1yKrToCcWyz",
  "key7": "4CT1pfP8XKjnEJTGVGRAeKGkfvbRmq1Zr9Ybhg1vEp5MBjgGNKqa2Zgf828iG89pzXLh3ETnPVKs9tZBCd2zaGiN",
  "key8": "4u9iLz55w4pd5M6r3QoUw3AYAtXHZWCBnkU1Mpb2xw8JrTJTY8pscSqkjkKXPwSDaR6yvegctQDvshKt5uRdzNBG",
  "key9": "5tBZ7GJKP2tSTQykju5WzNDva59M3BVQMpcK9Yxpj6gVcDoUMBnUvrt8XZUvsGNNPJE1mUH6LnQ8Qe2qxLR7Yvpc",
  "key10": "3aSN9gLqecoVacMWYuHFQRL2xv6i61ooYBawxv1NvCKyaFEai7y2KK3M8r2n1b5uc66EuKYAspobN7s7pfZjTeT2",
  "key11": "2vFw2NrfQyHeoTNxDmEUXcEA7nUewjQkBnX57QuBjnv4tCkRNVJeY9wWqktr4cyRadwFxcDbDsE6RWRNrLqdtfyR",
  "key12": "2tWkGhTvxp9oNoJrwMexyFAPTfeu4HBMhvSvAFQfBrLrCD84AdRGuGempndGsbSDGk8yQVCrBdgEdwD5NijYyS8a",
  "key13": "4WDbaSZvGg3NMwEk4yZ3CcS4oidiy7PYguHPC7wuDQmEJTNj5qdxnh1PZhgAg6nmo6vpY4wVqnGQvjHWyQAzhViD",
  "key14": "5FKGoYueonCMbRjh2wFMgmrZbTeKmPUbYWvpVasn77VHmfK7AqkQaKy9PvnjYJsc22enk7Nz12NXDERjhHhp27ZM",
  "key15": "brDeYn4Xg1RDD6u16KJF72k8HmFPExXui4CRRcG5WBpZcCZcyoaSagPUHqqmcpMoQap5hYAqgfdFJdV9h1YQv4V",
  "key16": "urHjQzP27uTk5eGTNSVa4adqy6YwUryxA1TMDW856nU6vTQQgs3oq18WDL4ou9uSB9pMVX78vTWkpT8PsJgwpRw",
  "key17": "444DF9neBDPTaTni91cpAoeQPrrGxSs6Kq5o66QKq6j8omaDw9jgd8LVRGttSdjubvgFscLG4v74ByEQRdh43nmQ",
  "key18": "3R4M35wCHiaBA8zs72L2RDKUAjp7WNpeXg9sKwA5W6CdCy1zhdTrYDGM7pxTXfMmR8PuSJJhvLixXnxv1NRbC1ok",
  "key19": "3ioKoG2rimmJnBstfovs2MDme7btZtmyqtKh2pWa2KFtNQ3Wtq9LtCnEEvZgkNixMQsMLNTGkYtAWN1o4q5cNZ2i",
  "key20": "3e9JiUVNiuYfbpQuh6xxo4wKXHAkMeCkFwGeABdHJBPErv1xacbRQxezXaUUq7kB7XPKBUozp6geRTDyhkmshfmQ",
  "key21": "5UEoesLmqwjTgv7oKhvXexFyEhiPZaPLpNFViZBL5aUngiteUHSYVVukLfo9psSjViqgFmT4G2oZkAWEJqQd2f8k",
  "key22": "3nb8oh1n9S9f6asKsKaBEgUxUP8pwdg6imBXE3g4vw7dv7hSBToDqSeP3LdEgFnBeBLrBiVZ1EWLXicDsSmoBoXS",
  "key23": "5M9uUDcEUJbHPWk4m6w6NkoiWyygYSiLvgofkEXQTr8tnhbzBL9bFPqupXnfzQ4qzftCDEtCWZcdjAdqYxdpaQES",
  "key24": "5aGV4HcALqXA2p2gFc8pz86cPgLxupfdqn83aoAPfvSSwbqGbFniZQpgEQdhrvuRa912j48f278U8xWYNmMirntL",
  "key25": "4jE8EuJtapmHTvfUigeFnK3oejiHfLzz3nCByAw9pZjYcvzeJDkKRRNxUvF1nnNLGUYq61RXK49jtYkVwLHpACZw",
  "key26": "5TouMaxLxScYB1dLqFxEAXTpPLh3YXTiJPoKyShg3qBFh7ZkJLLjHNXic8UhHDMh5nqCY2w4ZZNhGP88KfCypY7h",
  "key27": "5wYLW2nEMkXDiwr8i3GbM8XvTzFWCWcTQkUQ2Hy2jP4vPoFQdbhjDNSk99ZQsidtV33t6qoGuJ3azV6bNzV6Eo4M",
  "key28": "Nc8Hf7tSutHjjt3RrvwkFmeTv4JoMbYbPHUbmJcxv3eWtqc6zUTHaudu4rxM7uDnQmYk6V2fJqZCdaZqGKaMip2",
  "key29": "455accjtuS7otkncaAA48xn598mnDbHBC832pAD5RmENpx4tRMSQZqqCPkepCUqUh6YivbrKKBqiwXo7KxyfUMvF",
  "key30": "44VqCaFQZ3rj7nci4xptPJiRHBFR3btCyQTv3yCEiit16MZbPd1Ws7rXWNHzzQuiWdZMKAieLSSnAKyEYb16SAk7",
  "key31": "2dJXJ95Wm5UJjz6kt9wQfb3L6y8hKi7cAq5gu2xARYWT9TPofgk21vrGJTr2Ajynakqfm2p7ZLuevACCVmcameJT",
  "key32": "3ZvqyMbscLmxcdmkuYCWbG61amWyQE1dbcgLwBkPfrnJETwq2rrcW7iKNGc2XHx7GUpm7cq7hmzYT6jDhRVjRwtS",
  "key33": "4EL817irC2YwrU5o48UYwDuqJrgQhCbtGZx6sNn5LvjQYe4EV5K3y1T38PWn4g9msbgfPvukNQbVQR2h67zqtUGx",
  "key34": "2WhtwEXHXcWjjGmdEzdyV6BRKKSF3pdwomJtPrDoyaHrQDx51Em4Z8PNVdWxLWBc5AzVjduk2GtXn1c2iUaqQS15",
  "key35": "2MBCQzegxc4Bdw5uDQLbuaWXJu8zYaZtAmci9kqHW9y35HZeZBGsEvQ9j5Bu6ivjrZAKuYdHhXNL2Pp6k7CdsFCQ",
  "key36": "26vUNUMF8W4ttbvUkax2eVmLvkaKst1AMqE1aYqQjH81Ku9utadQKGa4f4cyM66NsSVk8duqBYgMkiynDjTwjVNd",
  "key37": "2PMgcKEnYjgAPNGgwujyWNmxpzwunNimsmRNmvEEFDfquHkNbqo5revWLLgGEZo7t9rJeqWBHNH3PgtptQo7mC7p",
  "key38": "4PDo1b57gX4ZAD18jLneTXJhuvDSyVUBXa3XFgH2SDwgNMZfmZJwwxhruSb3XNjZ8typvxwh9HjiFvLvhAne69bE",
  "key39": "41BRnmUwNHW5gAtxMU3Jg6ZFA2QPqK5mnhAVcrWrdZ1Z3ES2ZW7nxW6R2KGW2V5tm2bAnvyUUECCeGXbcyD9w96T",
  "key40": "4PJHcw6DThixJK6o4hNa8dNXaYWRMW3KppfXCi451JE5AcwJUwQykNc3mPDictDsGt2R69TQbsDzey4sv9GQkV43",
  "key41": "3RJQf4qArf1RYLJfNS3xfbWaBe9TnmP7nKxAczbCLUy4tpcifSrDSSKKM6ZhRde7NGrMyH8uS4okDYvouTd8pQs1"
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
