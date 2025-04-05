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
    "2gppDqi8CXWfL8AGF6g2HeyrUCS7gC6qAuHBTgdmYjSe3LCaiA4C1XAezWfG5r5bc8eWcRNd2Nxw7Ps5KXE7wUto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeNt37JcVVaHU8GWEL7J2a4eVTnNmAeE8Lmh5D5nKzSXfVBLp5Hhnwft7mrvzJjE3y2opK52FYiradkNJws5T3h",
  "key1": "3PamtZdgwERy8obfWUJMxf3GeccyC8hENcVpgCEEtHqpefR1uK27D7XRdk2jCHMCYdMji577sPhsBtoTH75358dC",
  "key2": "65roeUVNAiFY3922SUTTbNoHppQwYH9gUkGkLoj2286Z38VhT8LBXBFRL9wpmUMq11KFADztumL1suYMcDuigbwo",
  "key3": "4wSuT7WZM1fYkCnoTK9ew4ZVcMC934dp2PEH4ye2QMFWCJDTmeD3XtnSjTettwa23YwKXJBAxzYcwdzCqfVoJ8WS",
  "key4": "5zCusUXm38QSafNrRcHRwLpFuLgmPRLPBdU18HN8nKKzgCVCtU4s94UwmH8ht9AZnrpb6QSMU2gxniCF2LQa7D6Y",
  "key5": "5wRLEPuS86evD4kf716og2rSNPuLLxvCngkzNwchF6cinzzjjhxGQHwWJX7KFjaAHonfXEnw2maMtgeUDEEDjg6x",
  "key6": "yFGT8ie3ZnXVgWDnUqSGX3rddKFRYqcFcfWuDgJ5ybWn3G8M67MVLe7Y61epvcLX8WT7xehYSW5s3PnjGnAG4SK",
  "key7": "31DYrvDEbvZHz7haJVF4e5ZbhbmoVXJ3NEQp5MKVz9wLaMFcXVyNrS3szHcX7UCrzJubQa8mzXowyhzJ71Qsw4Nv",
  "key8": "2ZhWazmoUgx8SLxyUL54CaezZvRiJt7bdQjqePLcRM7Rkv5RG6KrGAC9qPrwZ2rsE8d8WY7qhPKoDE4JdcX13uhJ",
  "key9": "2jy2S3iRd1gYcvR2yccijmoond28QZ32LmFGrcxDVy6UfXKGYfMx3auVwUAHZrmHox9TERMSaG47UMNKWNkW9DKn",
  "key10": "2MRWpZFF39JJkpENiaQWCo4d5YvobMKGq8zh8CZg3RoEq1Ubg2xPBsaPRvGohcDdAQzqZgmh5Vp32Kew9U2Ph7SX",
  "key11": "yrF4VWVvrq8mQR1U6P2TEZPVTganz3KvkVpFyKyDhRotUGKZTLqYizT3bitRF1Stk7F6qizfjTYJdhfhZbQpjFc",
  "key12": "AWXjmYyQ1RdhM1uwsU6TSQLXzCLsCo7tTAhiNsR8NcNjEJNHbnpmnXhUYH7NXk8k4m5bPa4vZkRXzHtWZakeJnb",
  "key13": "65v1hviPbFAgTCym1MarVP4d4YWcW262YetoJ123Yxkt1eAZtrMvgoA2Mbmo3a5cgnL1LgEBQh91EAxu4H7QNiYN",
  "key14": "4ZtbeX85r6mKW9GUEfSvnjD4fhBbEAtftdS6JbvhJHPQsBaG2g1oH75pJwCKzQcpMQLhj6B8TceR4JMisYsUgWHk",
  "key15": "5HGgjVTYH4D8QtKMnKUMXoaqsa9yuaALTwC8hpNBHwLyd4j9tsTZRaaSBgaLnqd4EEzV6otBTEU4ugqznCcTTN9g",
  "key16": "3KWZ3zQ16GFngBu5U6yvegiccX7ddZfoHkBqFojJw4PfSitzrdgX2c9UGiAkN8pfwFQXvMyk8EUqq4H43PNJPgEq",
  "key17": "4Pu2eV1xQk9YVdJTc2xctbGtyiBY4Jwj3UMBV93RNaS7DVdwyjKkMEpD5T8bp7xttTkvYdsH1RzE3uZXgPmiCupA",
  "key18": "5S2tp1WoF3Q1crU9mJPy53M7udbmw2EfLPSGU9bDSRwdPEtSAifQPv74xHoxX4gQYpCtgjVi9aGFft3HeRvKYDzf",
  "key19": "3btrcbSngtWs6vuVaJXpHjEwGapwqU6BAPXPzU2JdigTEuoo4RRKWme44v2EpXBdF9d5d3dM1A2Y8KX9DEAmxAdR",
  "key20": "3ESx9g27RrP7eBxEvdf1AJRjnxf49ngshsTf7mZvCS6Rj4AiSSEznhrjp5Msgdz65DoNozFiNbmiXvsSSdwarec9",
  "key21": "3sNxD6Y2u3RTiHkf2TCAdfRy48U8t4du7At8Vi7LKf1SJ7ngMo1kAdMA9zkPEq5xroHUKqMpM18N7djebDpiecQ7",
  "key22": "5H7E3Ag39iv5XXMLFFMjYEbpnKeDBsfrHLKjh9Tg7t93EQKzEtdYnVLENwYD4BEAFE2MuurzHbrNfsMHbGB4t2of",
  "key23": "4HcELKFKLD5xWj6irveDaMcSysXmFuvUzQwUBKMTGKGWp1VsU31t9tiLBWpBrZsqGKqjj8CNLZT4G5pkW6fs8ER8",
  "key24": "4F2cJq2ZzbEXxMCejxKwEMs9iWVDCVZW21WVFSnPdbGfRMmt6QGXsGibQKXmScsk3yFazQcs2kZnLBN27cwCfYbu",
  "key25": "HX6Unrq2FzWAGP1uMkp7JBirqgFg7jdSWHBk5fw2AVJC7JVBPUnHabBFiKvQz4avyvLDUfyfXg5DSDA8ywcAsJi",
  "key26": "4uD8EDAEZWCGvjQMHTUbBMUGYx2T3kWYk7dYswdqG5jCZSQ7Hi7t7KpkN2NRj1UiKHMnEkTiVmAJvDUmBSgKEyx9",
  "key27": "2mtjtSmRhQkW3C57QmSrK89e2B7cBtEsLEafjQY9VB3pawmKxsXAMsbnoC6bmDLEmKtnS1u7GQFxqcSBzHnan41s",
  "key28": "44NyVvqmuAUGfmVkpkUdu5KDX3KBu4cqjxK29o7Xn99xomJigQiv6Y2vBw5isZfi83r6Q81BiiEPmiZ3KbgyYBkW",
  "key29": "2uPVBmkxm7y2hxHCdgGsGg67UHqbpaDHknnG4jD3tsEBM1gjdhraA4MFccLBAJwhMeYeHGWiE1Go2VoxJVkUk1xT",
  "key30": "3s5cSUqPV9Xip1mg19DPh3mtKwzah59kjjMFo8MvTWKtTiXcyM3zjgsJgmGFRedxadqdDDNqbYV8yj3M5LZwdpkm",
  "key31": "4ynemHBsF3SxgRT5TVSSUtk2XhHxXaHHgaKohWgYFwCZka624GuBR81gRQmfokVmy3MpXFBHPTEx95qD3gUc8Mg7",
  "key32": "4WRytA6H7v3ijA71DLDP2nKX7rGR7aVijotam3QdyHwXf5h1jBrRz6yQgMRcd82vDjqY1J9ffr3rMuxqA2649heB",
  "key33": "32nrGv4CSJ4Kj4zSpVUkuwYM7NuySXepo4YsAjWuy2Xw4US43sGu7EDMq9mxBFhP9Pn8xBvvCEWN3XFsivo9j9gh",
  "key34": "2FARAqWgn3DoSNaE9dC1L4QUvTCVmijdok3y3cQXLUzkT842AV8Ade9QZy6qaJ7NEPGRKG25MCD8en7b23bSM3z5",
  "key35": "4iLn4NcvvCTq6c2EpXikbA2MKqYos11aCQfuucVWr6CD5DXJhXw4t9jAEq1ePSH6NGbAiNYEJrVvhZ4x3Mob8KvP",
  "key36": "3MVQYpV7wqQ1CqwCjZ8Q8GYohp5wyfNRjPAbRp2csbxF7MTxG11z2axmh2xbBuk1AQmMvNBa9J8ULJcTHAmNdpgY",
  "key37": "2aJ7XuapEf65Sk6ZWvUX48o4Ctx3Rcg81A54pC4wEUNZ2mKBtwh9QUjmqafRBFKGg6mHRw8usgQmtjnFezTgR3yF",
  "key38": "2fQYqARMdq3TYfh6x5r8mvFnNcRcx8SxhKjJyHxAXCefirY7v7HT7nor3ejhkngGCnzNchxnJ41oq3xVmFkyr72S",
  "key39": "3YrbdUgtKJWbACbV6rKYJKQGnW1Z12mByHHW12cnhi8HiHYnwNyLMk4ELS5Uf9gfgzRgJF3xkJ9Ya421atmFpSU",
  "key40": "rb9zsV7TEDi74a9jLY9FANueg8oEzkgb4gqpkQKPD7cMt132NxFjrm7Fn8m1jJeQ8CQkkszgd34tDxx44ytuhx1",
  "key41": "5Mdq8gdBhyyWEnZdA5vkPkoyT8yAQaiFxFTA1xZsQSb8ZGQbrWQMREbFKSrnXw6oSB8UEsoYYnP2kEv3gskPLGJr",
  "key42": "42eAdHayiP67Zn83aZp26iDyRubSZ9JjixPh7DUg5PBgGqgfTgfKY7E2UYvK8avQ84F9f5nG29LZUyBHiCgLt6rT",
  "key43": "5mYjW4mmJrN7t1XW67Y5nHmdCtuvDZESJZKKqJ1Joji6KFomojF5ac3nXyXWcSCqX6GV3fZAWhodo81KaYTSQmiQ",
  "key44": "4u24ekKWrdx2QKcLrhteC7N9JAh8G5mTuUgQomPgJFrYs2fqsRe3s6L3Eyuobsjki7nU1rqKZ1c1id6jUvfRSNkr",
  "key45": "2GYg7cfFusZg8SsssVwTbBfeMiXWf1nYXp6u7zWMDGzqLPMmCSjs23DTBLF752Z6kFMJtc2JAKWohtpNRPeP7fDs",
  "key46": "2eX52y76bEmSG5aYhPQdjmiSut5wyJuWxDDYN71k3yUnDDps8zhyEHHQfAWUnnMFFuXQioZMugPbKYxcxykHRY2t",
  "key47": "2eUTHvpNjSwVd5cqqSqkjxTX1t7i81FBWeR9TK461c1hHPHgC1Q4udwETGiFzjpqwnj3peRT3YKqPxbME8NjJUxJ"
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
