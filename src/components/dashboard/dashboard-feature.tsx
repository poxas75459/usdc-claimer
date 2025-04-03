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
    "2cHDx2hmHJPP3qJqD9oVCH1AJ7VfDYgMyVEr47164FgjQyvK5f5hC3YSRiMGUg3gZBgeFKARrQStCJ9xhivnG1kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJGUvR2iMW9kHsPXYxCN2Ah6xk5LisYUrM3W2ynF9umMCxLTnXcGb2kQnLpnFGbFwmfMWHJHa4uk7X9KncybtbB",
  "key1": "5HQM3zrCN2yMRf9m1mX3vdPxjRvzCt3M8CGBYAw7wFNSP69BZ7QuZCzdhmXddnWddYK6rPLKrZKxE5MrWgFdVGtR",
  "key2": "3D5prC28L33wb5FRxuuNFfEoTDePajdskWoEygwoAozFcuhheiFDhJL3JWQmSqQeskAjnLarypaJbh2cGWwWyfAi",
  "key3": "cM1rSQgLWC7hktWzrmnaTW9GKwrwwoR7CCXdfD7MGGQqAHDhTn6A8Cyh8kLo6KnU98xo7MrN5PKV7tFgQv8myoT",
  "key4": "2Ey6c2pHFE2EJuU6YsiidFurkq4bCBWJDWm9yCN5pZytTDmip5KpiypzihkHDz5sEzz3DViiJrerviDVYKihB5W2",
  "key5": "4k19E1U5gT6K8na8tDg89wSdehTqM1gRyPj3UACtURfwyReQzeCbmmfKiaNMuwTtasFbDs4BPegxUyGQ1HErZKH8",
  "key6": "57C5h3LZt7yMxvTCYVTcdSMg3mh8AYWQVyZwgHD2gznKFiC7G3taemavuKcTpNqS8edQRKvKBVyJeMX9u81tAYvp",
  "key7": "4tGhMphVTErwZ5NQW63RfLN6gXLGJPt8M4GfQ9tLjYiBUqtJV7RMQnddkxXQ1T5vJcBKqQ4zqkcFzRnai9hGKkXf",
  "key8": "3Vuzc6e83x8rduip7zKeSq5co5pascKDaniAtt9kMeyfTE42s2XQk23Xh1xC6u1jbuDfNyUWVYxViqG1qEqQdCzA",
  "key9": "xEemnnNk9UQzecHbjAL8uFHvpDTZw4Qf1hRwKjrM2ko2sCGYMFR41Vk49FKgZjv3ao1jaxSQXzc6qR5KQTekkHP",
  "key10": "45AhEKceB9NhxNa3xqd9aYtedkg51EBcLUkveRwMwux4J7DUNqLQ4J9JPNo1kvazAiz4K1v5cqFVP4QEuFCAioDg",
  "key11": "cWct8TbsrfuX7mgmEoiCvZ5p2YSikmpWmsb8HnBABsjrRzqbyvJwkzfbP7FgJWCVDqBVfocRvs1ropBvEuHB25Z",
  "key12": "3GfM4QiSggbjRADfzXiVs75981s9aLN7dauRZ6o14568TLNfwyaogMrSwBUXXj6dbNU93QuquGrZxJZrHDQZeCUn",
  "key13": "2Q2QecMDvghLPy6hZNNYYXBpjc2jg23pjTGY6SkXT1BRWVD1GauHn4mFPo3yjwboQuvSNLHFQxijDEqZEkUKs1xt",
  "key14": "4C37Y7WHVrKXTqHuxaFdXFyQpNNNDVMLe8E5tN2cEJHYLvWdp1TSD8ndpPD9AtuavQCUPAr7KyfoaB8VdxcKsZ3o",
  "key15": "nz7bpPx6adPsW8V7GtagRQkkFche7Hq3z2b1F5SPVjogf2rxmgVNdts21SxREh2sfd4N6AqtnGQyGCZ72AVJi3D",
  "key16": "DZzAS5Jg8btBTV3Hg6BQRg8mbyKt8qgP6pBT6nmVvUJU8eDREbWz85UBoQPA7NYiHjetxCqRuDmNWGXfm3gFA5h",
  "key17": "3tvqexE8BLATcYfAjJqhhePPg7Sga1K3dmBAxqbqZ6T8GHP1y9XzH6cPkqATY2RwFAGKNfpX8vj3Z9GmHd84CpFh",
  "key18": "r7MMBNCcPz8rbxkix95FQTrA5irx77a4UseHG8C7YQHXKhzBosJmUb4vWXZCuF4aQpMWNYG6zXK1nCKbS8JdzNp",
  "key19": "3zaVEmysrQFXs7NNp1zwyp9aP7QWPzmzbghkhNUDxVqNqHPv3oLz74PNhQSCtGmAYGtKYQvNa9kcMhYrvUFerkuy",
  "key20": "kYnMaWk2pGBCQxmBwihVXEa5WRb7GUmsVfv7wYqRHpBrmZ7Fa7Qdg5LdebNYDzRxEZSD7tp94iwjGrhXVLKEH2i",
  "key21": "TXWVb9GF2fe2gbHfWCjHjRuRdQRsBCuh2gEvTWMLpuMmV3eQ2iXDcfGyEf58pDzWdY6aKqEpSrftkbkx9HNn4Zq",
  "key22": "4SGyWBgWKR8ZcUMo3MWgAV8jJYXCGxhozxveBgNUGEqRySAahv4raZhgJfgz3UEYKFHojWW8iWRAhztDr96SNz5u",
  "key23": "4LNbWt9oWEnu5G9dimD8yBo5fhd8Bey5jKNXP5164sUSctaSHc2BFF3KE3cNba97x3DjFRcTmAJvBnUZbjXpUkvq",
  "key24": "3fzmK35wXYT7Ah3cDZJnRYwTtHM3cyyUhfydhFLwnQJ8Yorq57y4UmbuYmYDEhAPQR4HxEQSH9jrk1AA4Yn6WWtr",
  "key25": "4TtDkhZU78KnGuikMdhNmyugVnqAyDVPmND3QhHtRNKAjSvGRE1EXMqeFqmMZ6rkGyc34PK8QjGDe3Cq8rLChtpV",
  "key26": "5tEaXSHrvSYLnNbeJAgGqvhqeTMnFuEAYRqengnJsGyQf2p4HePWca4F9VdfkLXW14gxYNecc7vce5rNBUo2ARCy",
  "key27": "5DdH8ZAD36CsihUHCihAwdqGjFXVyJCusua9PvTbmVNnD66LjT6ffZrGLBhGTkxGZU8ZEqbVSNofcmvGrkr9UwoB",
  "key28": "34NwE71tPukh7Dp11Ehk5hAq5pB5nEpVwoqFd2fqNFdJCq1rcW368VCFE2nZWYWDELizCpCsPV6r48oJLYTSe9X5",
  "key29": "2Mtxdqxm2MJWKaQEXgnzRPtZ9pkhJkPNkRfJkHeogM2wwp8AGC9j5qXtcUnLjLUy2b3R8ATx6ZvjVbp99phnJoni",
  "key30": "26Moj5Meoi9ozTmNFzahAiQZBRrVttNPnwKcoPjB39jxWY4GJVxsmSECmT7HJbPLgctzsevi6iG8h9qnph5kaGnL",
  "key31": "55hfHaXhmp8253gPAcAXFYb1BsT2dKje7q4kiFProRQrPq16SK5aCUdzfRJBqQuGxAC2EukDK91gbQ2VUbiarnyd",
  "key32": "5ppb4s84gDcj8vccENs1p2rmFXoKR6479tA4KhwPo62GD1YbsGTTHHQ1XAnxMLzNLQ7Z1mgeHPGeasVqveNTGo1G",
  "key33": "29WoqShnHZM5Pv2oZR68srma11UzfzHwDd1wcDgk6zaQj6VMdfLjiKVxHMvYDAZCrc5Y58Q2BMFYWhcmASF5Qyxa",
  "key34": "4TAjszp69JGfPZbpHa5wF27vMjtBD4i4mR9hmc7JHHt54kLH1GUnpC7pEw6oybGa768YzZYw4iGmnwnLVavh3bAC",
  "key35": "8qXqS58kq79u3WdbyfZmuGD6u3w1vD8VVLzV4jfyLbSCQv8956g29PeK5Dnzve6CkwqFeF2btxdXnH7P9iWHtAJ",
  "key36": "2739KEUWRJ1J2g6tPv5XUVn1dp5oqJQAZN3ewfxwAiAW9yzxk8GF5WhrxxcGgm39G1sx1AjtCWW9UnjTYkPVkdnz",
  "key37": "4RUubvACu164iz6K4nDu2GRE9mc8XN5xa19UqQ9WYpTSPK7BKe1otsfUuLamp3KxUG4LmiHFXdepPXQxGhaaVH43",
  "key38": "3qNWYTFkCBJPhXAu93T2s1JFyyX72Rqh6hCJBWx2WddUQrm4jSR8XiGWGh966r943FY62DxeRsu48LbvZWyJBLTz",
  "key39": "2x18zAAvi46NvV2sQK4Cr6JojDv7FBuNUk7UkeJB4hUUS9xAsJdczuXGHbPW1tWjZ3Y3gkwZM5tJUq5Q3sBMDov",
  "key40": "4wTc3ScMSJaDavsVt766KprSPaKAKVwkAY2wbrQ36FhUtNmGgXvMQNFPhgUZpnTJxjArRNmHWg58QAp3HpeyEhFL",
  "key41": "5w6Yzfi1G3PKj33SudQk2o8hHbDhVGxnneJyYdiZY9PrPyZ2h7D2h4FxMMrfJDFjvWzoxw1K4yxsH1EPRMFpGvBT",
  "key42": "5aY7E7mDcs4FsmtvcihjcxSkLPuGwKsd6wcp6cFcGqgrUsq5NjYioUmV2ubJXh8mSYZzS5cdNuPko8Bn7Sp2WaDR",
  "key43": "kbFk8AmhhwdYLmDVfNu8WtjuNTYHLnSFRNt7kqswMJjRDRwLAiMPHc1muijgigkTDRtfvnZ5fEdW3YY4Pv1g5go",
  "key44": "xek2uifkP3MVRHFxsXCs9Vt2jaiRCeg8jCPhBBk47T39mtbGvwTJ8o6GkJq4LimXgwHE2ii9j7y65h4hCFdZ5G9"
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
