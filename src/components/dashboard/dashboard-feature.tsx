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
    "2ia2RFk2pB6DZMAH4dwJEE3RyurpcEw3a8tqHdhwZ8Fe3rc246z2Qsm6gGDqsGLcuEzntKtXRiGR6MQeofb6sEm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2stt4qRgWLefWqTy7upmF5WwYgY8cB3c7acQ5EcrQ9ULugsUPbqFyf6UKSeeT3xqyVzJ8Kr1EgNrhNhhaGT3J6HE",
  "key1": "5j3D1oYEBWBvu6BwyxH3j6rejrjWkwXMsVH79cmQ1K1hgtTx3tbPf2adtSnK1XmU7iYMugFP3EvKjs4LP8wWEEMF",
  "key2": "4K3UtkrFfuZn9Nk1nsM9inP3pnC23f32yfCZXEWz5SoTZ7CLMbZMHARxJ38QYrATk3a383scGAVC6vyeBTcycuJc",
  "key3": "2e8xojj7oqcwDpNjfc7zCMjuVGEdziaLzFgn72HGejhN1QAuXTGJLLX8iqcEdk1HNEf4dUKwgC8weR9V3SiZZNRJ",
  "key4": "2ei5pkrZyCB6y3mvdQvXBharBxBwzPtkiPsSJiAbK9JYwzicjdYAND7sXSLmUF6byek4PLqL2W8dMurfrUVN9RGW",
  "key5": "3uc68PQDzydKtDzHWMp4mBP7ssLxZ5AdTownu18tCeZGB5LBnL6zm2JxKAf9fqXLezHL2UaT9jqSe1yNceCdiXne",
  "key6": "2pRR3Ec2tq3juFsjtRZxPjobFfyg1X713GiepMq9XNRhManoBdPNKaDm5WHhYj9gEtkopAAXH4K9nTPtmCK6PeZp",
  "key7": "2CeFnwAyF87SrEMT9ERiGYe1sTD2YUFpzCRmeDupgdSMj9NPNu7kzKstA7gFRHYfxZ5YvShETbptXNEiXGDCxFgV",
  "key8": "4cbKsMoGi1X6X6uSjE7t2SrrDDJQ23UxvfrZWKSngqh7gPRZaDtdpztyW1wyEGkNLJoSzsL2isaUXAgbhsT1x1Vk",
  "key9": "2T8nfQkFW7zVV9kyKqzpBZ6NjM3rLt7Qr3oDJQXEe58z3c1vRSfG2JGMv57itAgSAdHk2bCQRG4qtMGQ7RbJzTnu",
  "key10": "43p8UG76Tgytxesirh15c37hntVihRw1yLC4wPChRfMuobULdKmGWgYZBoWr7DAthWmQBxeVzoV951Rv75kzKM1y",
  "key11": "4ZkLnddUWYhN3WkhfCRzNimHgsTWWsGznTV6HCQCdifDPoYe8BKG6iN4UC6WtbaQkLWUzUThQ2MbbF16MzNzXQQ1",
  "key12": "123Dmcp2vrht4BYEoxRGBtRZz9ofHaAxF5vD3kbV2kPhWXbXKBEVtMHBDK3bz8d8wDvszuG2D5FdihrPKLCdUNkY",
  "key13": "21XmqmSf9tqiv1hfGxaZApdtgMvTa2MnjcBj154BFY1K97DVaNmhCZ5is6hbcpdkZ7taDCnW1PEqVhurKMsoz3nM",
  "key14": "dnnGFQ6Y3SvxJJhPaENF4jrSTpDGNKkxs1SdZV3WdkScmMYN7j4Sa1TPRrdGc7LL4r2GAzY5UYYG3dBthDbV7AW",
  "key15": "3eCnMUXH82QjkupRzUWtgNfHyCUCqKAgTcRvKhCXKaadLtjrKsqpqun9wCDkiZ3rsQ56hYb71hRfaGjAS7xDXCEc",
  "key16": "5ncaRWC6y8HLuCMDD8FvtRynsa2nttCXvquw9Cpy9mgLKmnrJmauJ1zAeTwYb2zJQmjYvHqhyg1iEvDnzmz4PgBu",
  "key17": "2XJ97xnUUP5GHhqaVAgwkhWFs3x1F5PiiKSsCSBGFJ5bBkTwwqWf5xme6kyQYFuqmEj9DcGVbfWZGazPHnGHGBGU",
  "key18": "5cH8pfLxX88SBVmeGkn7Dd83bh8rNeiy6ahzgTMcTu5Sdb8EffZji9jmfDwjL9VDY6zMcJ31zJDnY1dkUnAkrxWM",
  "key19": "MUJdAfLu1SGYb5fwKU2KzqWQc8ELGtmSNew2ErKmc3iYgwHSVyN7ki1mSiWfx4xtusiG9QCQQKVxgrp6NejGSrX",
  "key20": "2mmSoEKdSGdxTUHqeuFbqfC8GKqyH4f7hUKqGuyhmBtSpKHt73mdjk5TijErnM5kKFx2NMVBb6jU1U76pZwNTHsz",
  "key21": "4wU1bAKfPnQCEQMoquPo8GNYmUxSLPtdtDJUJmaGJEerpG6Dk34NqfitM4pZTmVimtwNqZ9azjJj3xy4LmKyiorw",
  "key22": "59NNjGUCbDmGMVK9481GYkPGmatXPwd6n8zfYdza59owqMxwgLAgMN74oP92fDuHAFMFMwebzp8up6J6jitjF4d3",
  "key23": "vMHbSHpCsYtX96pgGEUtBzzUGNPkSPHCDBuPwUU7JFoZncnmdcGh38mSNCSwrdks5Tq5pahYDanTqowdTa5874K",
  "key24": "4u36Tz9Y2z7j6BHoifXF2ATkMaxfdptTNAHpqQkxHE5cyLRKucGpd6zDAWQBbMi1gFyERFvc6uF7YHJBexeXjkx5",
  "key25": "6LU3v9eNAGr2sv8SXSqWtDnRRLSQbXcHUaDNZKeESWsbsV3hz2UARLXSTVz5na7Rvd2jLV9EH4MmC2dY4VuZaPe",
  "key26": "5XidDXWakjNB5GGo4tnJVNpADx3yxBLpqYjbRkzzWiPcHvi7DVMR7q6UUkaNAHKM6WxwaX2U2K92YGT6TbDYr3Q2",
  "key27": "XiKhZApsZuKf9CJ2bpp9kEfUd2wrV99LaPu5oGuEPauzBnoqEafV7MrN1v7JGxdhMMYoXutHtbgB9Qm3a4myfdo",
  "key28": "5PkxtwkrQTh9zG8mptnin67F6ZUDAs7sKeNKhFvctGFmWFgNYaFrtCwGzpaXGhXCr7PFFb8sau2opetuzB7sNrMf",
  "key29": "5uLprXWi3zsrnCfsum4UzenrhasvwZZ4oZfMsX4EPQoRvgsJQM9kj5uAde6pzE4zL3DgWPV8PbLo6wt3K2ENGvV1",
  "key30": "4PtZhZUp8T5NcvuCzFtJMz5RoCMhpVJFr2t649NdMBk5a7AADFf587oUj9ViiUh8baFQbpyR19r5Xg4bfgPXfXb7",
  "key31": "3o5QodNTkRUo2GUVWZ4tYtdMwpUbKta9FATdw587LyUrpMvEcB3BjkykdCrHqzayFjE3uuCDMWLHJgmFKQBX4a8t",
  "key32": "6xaGJfswr63fqytejTGPzT9PRSTP8h4Rk5CBWaPsvBbWiPWvvCMZD8aiNaDfY7p91DqXhguWL1YJWTJM2ndNFcc",
  "key33": "m1YTwWAc6j5pBM2nyyHx8Di5VH2LJ1WNiN13r11u4gqEqHtwpMK2s2BzWbrEEM36t9X7RtmrvSc7oXo38GTyPYi",
  "key34": "3CxtNkNzpA56tdS72dfnBzELtfAbVkdCS4xkjjotRzC91MRCmT91pqFQogcyN47LiGogfy3KWFxi2FVDxdpm5V4N",
  "key35": "5c3KXUUPH9uo2kRSM5QkwNCSk4ojxmdJ1zXz3b3VqdwBmRqJqMzUFkzMtJa8aGTPr9QmYVz7ozQvdetRH8BFtVVB",
  "key36": "4rJSCwxVchKRaSPZQz9vmfWGZA4LtFem7grta5zi32DXnst4iz7BkmUcUCqvuUUXxpMEeFufjg79x15NzPDP54zp",
  "key37": "4h1PfdURFWFbyXZrKy7V9FqptDyWcVEPRzW8Gy8vvUwxXdwkC91596tJNBnBoK3FVcptCP45Sepn2eqKxfYM2NFK",
  "key38": "34Bqo8mRXYaWJqa3VZLhvXP6KKcFDuDupytSWorEqEqQesDdrW2GiwNXF1nYsWXbnEHXEupkj843fm9ho8Ey3a1y",
  "key39": "5RwmyqD3tC3gFdwiS9CAekfobHNQ5edP1khDDUMHNLGt9HPgGonU4FSML6p4r1pCQe5fmUfN5RXfZZSTTHVa6rTn",
  "key40": "25ETzMWaDut4BRDGdzdbh9io7KtYgzsYNLb2NsxVbuvBqoQbn3qHDKACZSp9Tb6g7s5KhhMdeGa6VCWKhjSr1RP7",
  "key41": "46VJa15FejdjJQtr3Ayoqon8HfFKwuFNuJ3oQKnXWMW3Ht8Ry7cncpJLZMJX3bYiUuo4bnMQZevRKAitVAGvnU1E",
  "key42": "2mgksZmajy7JQwuigiq8JCFmCXvoZeZx5mDdKSMx72GZVm5EZFijYh918XtZUNeRfxh9B7ugqNoGrJ8uXJLEYWip",
  "key43": "5uW6LLn9GNo7tZiSNSUQsoTzRKB9nH6271Hno41D9bqPdLiZJeszQ8HDAXPHheEMeWnRW3QtdZyA2bft9vfR5eqA",
  "key44": "2N8DiurQRcbWzUsv47HMAmTBxtx14J9E15GwvXz6EjkrvZgYfSLkohJRTSZ4mYAhE2AjR9dU1GLDx226xiNrwi4p",
  "key45": "2FTPawtNq3rPL8ssVVaUrGjHGG62drbMFYLH65LuYakwmpbhSkCq7mwCp5VZZHfXC5bx3E1KKE7cQnhhN2BXeQGE",
  "key46": "3mWosoanEMf8jBP4GVrN9bQqivBpaRsyktRiQ1SaJkCM85FtntFHPh8M4cnCH2fbagp6uxDJndwstbeKRKZ7ALns"
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
