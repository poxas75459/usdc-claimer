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
    "4RGkKouFgqWHLQv1C514bJ5sBdrWgK2aCyGHsBMxRCqEzvyitRCkf9PLhFyrsaKFwtCyvXQkDKWRyAq1YccZT5gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521vD2kfWRhg3fjfaQA2eZDMWMnXZNwGWTK4nc8Hi9DAqiUNP81PvwL4B5n1PLMGLB4hEACAQJbanqGdyJjFSAW5",
  "key1": "4rckXxzVXcq513yTs78Tjb4eEwZp4xd2a9boCrPWFLK449p5cdANdzZAkJkhKEJYsLF1cyfA4musSiKLnSzy84vr",
  "key2": "4KMnPTziLCNvp3QfPKZQ6Ajr8D6dcSpRn5vTskNs8ReBuCDEfJmJxhev3pPC9Q4ZLWTpLfouK8xMYNjCSn2Xzn87",
  "key3": "3rL97CtTgvHVbgPqrWxB1FWKBHmP4KiGiC6qBytaMFHWC83JSZEv1Cdfc2w3KwpPKBt7FdcTee72aEZpXKCuY4AM",
  "key4": "3Ly5PqpwwMLTGH6VdvbRShveZN3kL1W1M6bzEqXDUXv9pHFGATtEhdGR1jjBAMUj1mQgfth1B2KqBrJFJuHgUZcW",
  "key5": "3ptmAxEYiKU4fDBME1jPZEKPbUvGZHBBQ9F4ZpMGm9hYBmj5Arz8Y9BsPuhHBx9rPTPa2jZw3Qsf21oiCXZPqvrY",
  "key6": "28SJM3epv94AoTNSeJnaBSMSqeSUuRENvdndXzaBpNAYbT632APGpvV5R3CFcakp5poPPavxfCqJsk5MM9QiCa7A",
  "key7": "5DZQvVeAEtzi7U3XcLNoHUumKm7NCQjjBPk6m5s5ouDgoXJtytWBZ5e41h86XsMHGjKm9DQfoXoq8VCQ2g9WErDd",
  "key8": "hMDKHSXv5TyZLYYLuKUTfXyhGbdZSr5iSvxAZNpwknvWyQQRcQ7U5op7cgQeHDPb6yEAjbPnkAwFhMkBQjaSzr9",
  "key9": "3jmqwuR3z4di9QfME1qU48VLVzQPoJiXYnVjJKEXndaBCt5TYrVtpmhmj7aLbHkxx2YyNBUPED5gyfnf6WDqDRXa",
  "key10": "3Df9AYtdJACbddJf1E6DD3CZazRUi7NDSK75YWALMwpfL1pPnRFtKZzPPRJ49pxJ71RvtLm1K8tDkpDmiSXiZHbJ",
  "key11": "24Nk227yPt8xxvGELYG4ZYkTng1kJkHNEz66qo1ZhehYkLqwrFnwjjw3J6T1Dhthtwqa8LGPo9nF6knfhjJTfJh1",
  "key12": "5wQ6HTXBmf2jXVzYbdns31AUYPaiBngZYNzWFqA36Qsm7cq8bjZoLhCdr6ziUSW1zrDMRWvtkFuepb6hQxSsvZuc",
  "key13": "3VkFq11vyzTbaq8SSH1icoiQ85fybpKd5CgTTtxqk55GEtEp5yxGstgNoH9YcxtjoErGmG75xcgpGo1tAeJaopbr",
  "key14": "JnsCnzm4AHTP3Bn3cmtgcNeHEA3kKf9DUg2uf2viXs4RMdWh5QtNMhpVQUicbT28voBx5EKc7pegPgvG1ZJ5yU6",
  "key15": "2vABpBs43mPuvXFpjMM75MvUmTE18hY5HEXWQLw4X8hinDE5GjwscyhB6jgeW6Q51TrYthhXzhrsbZNTAhZXxP3Z",
  "key16": "4ERF22C16L6L1uWWSstgn1RDwV5xEAiTA326FuFDMDGFNkPTvbnjeY7sBx6PNk177n5ZBjyVZmHK3Xs9DHZHcjcm",
  "key17": "4qjKag1ZwhGGGQSBTzTyN8RDJLQRtSvJvojttrej2RiSA7o9XCTu1Raqc8gCivVywiNwSbGGKSRRvwwfTFud1idq",
  "key18": "4GR8hUFboMiNovpEEiqvwDXWtuMbQcGPQnWAC8TfD3v5FTvgJRTBxoPGR4Qm5Jea1gmWWGjspJz58BRrMQVkqbCa",
  "key19": "5FJdjFWhSwE9T9g2MpKL1t8NSnFLbPQPKRkjBpG5tQd5fwKUy4khHNfvWo43nWmpzNJPsMsAUTN7v7nYK4jvNAXP",
  "key20": "ncsKsKBckCYA1kuE9ScNcYdCCKZsLu7unALsSLYQTeRgQ4iN6AWmkdjqSx9MA2HVxGF2XVBndZ5XQjp7i1VYGV9",
  "key21": "4mhSPnrERvckAQuVmHqBcuDUrLkTGFEuvvzf6A3tETSe8Gy5yvzoAFp3h2JhAoef2fUuTdXx1eAybdeexZpMhPY7",
  "key22": "3CGiiphQuELzeRJZfjbxm6itBA3Ki9CA1pNCbyMsaoy2mYbMuSwJFVbbYJKegvBYY61pvKvwAtZRu92YcMcCY4Gq",
  "key23": "5BXr2ke8Hap44QyLtHzW465giShUnBSHF5DiTbznUvhVaVLApVArP5Nktb8ebqptn1XwoRaTzSGEqycc8L3iMXSR",
  "key24": "4tfvjCaTM1D6Rk89rbgVmjPuvyZdeXhnzW1kxCWfaahp1hFyTX7zEQA3stQf6pJ3igDxZP42MrUUkbMdvVYnZmwa",
  "key25": "v2Uqj4EUSbGSSJkbf1ZJFJbmccLDoux6NQc8RjvF4FqYFz63Fzv7oBjsxeJaFPaF1b6LqB2eMorB2L4Vn5x4yLn",
  "key26": "gsb7SXTVNA66uQhpdMYFdG6mP4eNUNqZt8ycfaje7HWovZBpQSmPSURzAQGwKEZYQYQBe4Z7WwY1Ejn5xYHtXzx",
  "key27": "5J8jazovmxDnxMQfmW4W3Jsb4ZsR66AYbWTG6ozcB2rSCGne7erupwcrDQTcaUWebwQewNB8qK7cmp5RftJTJEC8",
  "key28": "61B4J9sch1BezAyoBK2WbypGERun4MBhw8uBFMB3vpXYJEFL4oigisKxQgYrAsmwegPigYJwxjbD82SzxijyeZ7F",
  "key29": "4mR7UHnnv8hXCK7B6eV8pvAh6hE4jx2SnzhLJFnxLLPiCjv5CYFFj6fBbrsGE5TcQe2bAvkuv3YHCdA98jgMRnqM",
  "key30": "3R5gLsKYYBuD19QuwCFymYwnkBUqRRSndKY45F8VnT4PWaUkFpREBZxbZpJn1VRF9wjc3HNL8GkaoH1Q33KVFmb1",
  "key31": "43cetJTTX6VUykjcGC1wNc69b3WgL8wjLK3xp7oPSGAj1LoE1k1V9mQ5fe15JCPsbynchGGtkN9tgMaQgAmqUgb3",
  "key32": "3AADBfMp2TFZq1DiHmousHsQnrPvvFnutTMC37ehNhLis4c158iJEGR7YpG6anBYxw2Gh5zPy8uAXLbCby7QwpKU",
  "key33": "2veAcmh5WuAqRQVByDgdJRmzGuwey76DnXwWSag5oLsywvhRHhK7hVuJ8JTEsf8nEE6QaxAjKmZGX6rDMB936684",
  "key34": "tZJzjhb39tMy925xX2sDkRXK4pa48ihEZogBs62H8vv7ydKnA46jx4KzhxGAZSp9UMdb4Noeqf19ZCjhW9P4qYj"
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
