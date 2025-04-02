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
    "5xRiRnAERjB2SeNJH7kP2bpQ71reG4dBudFgpVdanoSZe5UX2PhWaSTWdRjw5LcxoJrAxYfjQLZs4KeJhKoQ8pBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHvqEwyFcMUo7cfqAcVy5V7boUDM1FfiZA92BxKNjPg2ivfwLBLsRgdtZc7EQ1svNoVhkAoQK56KhSr4vwMHjbF",
  "key1": "fanTiseJBGMYoVhccqDjvoKvikVVcxEiQSbrFVALYA2gSSfw9inV9eqwQoLSyECVSGELC5jNMBhwCan4oUTGzjX",
  "key2": "3m9TrLqmz5nSknckDQrXKWrEEaHfgKnGnBABCKicdK6EHjvoxkCTeL7ybytbvPNdbJHen3eEQBWZNScbbij6sFGJ",
  "key3": "51KCDwwLQZLy55ERAq3nzWKbhqoi1im9TCWvJQrPD7pPy5RgDVNce5vpyzSBYpBH7G54Jfqh6GxeuaECiuPMBHwY",
  "key4": "6k52gyLcwQgRwwEdvoqoP66WfeZbJGqJqzMQ9qcT26skbWq9WAPsGZKs5MZNpXSKMavwDYXov3N4givh8YuKyYV",
  "key5": "28SzrTigT4x6KamnotitSn5EdTPCMKaELW7iyTnKgxdMwPTo9uuBXfSbfVdWJh8LLA3df7gDwfbUpvNf4Bkk6q6B",
  "key6": "bWvizg9ZngyKAE7bsCx3NujhRwy6PVR2iP2gpyKY7XHmbB8zZjp1783eGs5FRznLigjNVDsxegsD22jFuGp9jBT",
  "key7": "5RMiRBE6SSZWWpNYuXC9QwCkeNj4iuFnxMcCp6npnV4gNKvi9672voTB8tyBeWznikrR28HghALttZGgcBAKv1xn",
  "key8": "5aV6j1NL3QNvA5EFg421xBxSZdRB6ivab81pR1stydsWAtFytYxrje5eivMYGmQoBKDbp6yfnoMw7wNy79135y9H",
  "key9": "5dD3mzRAPY9feh1N7cvP7qg522XZ1Kr5TvoF32yawwdCpejBsKMdMJt8ZB2JnVm3JGUXvFaftSABiZ39HSmMurWJ",
  "key10": "3mgFiN7Zp6YUYTGk598kdejCDQ8GnXiX4m6cxs1WSpp2xxd5mgRXzfmwVs46Go9zEGuiQTjY76cdWj45t6GTxvJw",
  "key11": "rUgfnU8dwyVc5FhMn6mS51hoYkt7t2z7PhX7wzdFCCNTtbBxRncRD36cfqgkqGvCPtzxoQNHq4Ma2ftGdi1LRQK",
  "key12": "H847PSXoVUoSu7hzHkGytxVuNBucPMHMzx8EzPjY1u69P46CqoXHEFsfzyPdZrgWhYpiFZ78YbtpzkDijDT8SFs",
  "key13": "4GSGx31cdBQyo7HoURnakNZKhknjmPeyZiM9mbG7NvbQV6PgLgoMvkPeQ31ygJNdCq7MBy5E5jNJ98GL6NUniiFg",
  "key14": "331GYJPwpFQWohiW1XAYMW8B2dLNn7t4QNAEA3XL8y25gsL29TCe9TCchGFCa6gkpRUa9eGncezfR4SWTeJcQ87y",
  "key15": "4tNUC4T3BZXujik4MgAEPUaV7tn3sgrFWTiXUX86ZvqBo6vsVkBd9egmYLCRaev2x4bgfQGDhDsh7QMeFaR8uSTx",
  "key16": "4iogrbuvDBs57W9wnSAQ69bqqj35C7ZBMdMyoZjZJfkEhBpPvSwKsaw3D5qPwPwLchpABj2dpHyMLPeKVgXQdSqJ",
  "key17": "2VoctXBwkzjkicCBiVieGAnDGupLUQrB5p9s1KYPoUkJvwDVCaqPXVaTmrRR4v7KqHe8fhPnggfWmyytQMVGHRWw",
  "key18": "HPUSEMjSd1aUfP63ppx412daPyQ97ZyFZFEo7oH9UT69vpHY1hyP2yuMe4p4aPCB2NxXeKRv7dxKxhJ1kv2JPb9",
  "key19": "484mQ5R54mVcPv336UPXgoffuN7oGSXy15xKqkmizVjN3rhPPWYDe7izkyStKRowZiT1PZCnZYHwNyBqVyGaEwiU",
  "key20": "66Sw53YFpVmtDYoC4ZKZ69Tfqjgk9cka1HCAKoejxsZGjCBYpjo5qGamEQDTNHLzMs59NZnLzRgpqfR9VB9knJjS",
  "key21": "2U3XrrSsigwfLvaC7odMyWxEjsj2wuiCSnN8nuBJEqQ17uQPeEM5LHGw6A2Z964p865NC7by4HVgSBFdEGnrVtEV",
  "key22": "2SMF5h9UteNb4XLQ1SkhuWRT4U9CTA5wtrWQP47EnBEpNoqQr1KXDDcR5k2CiWSQrkw6vQ5o6E6oBPLefbNj5JK4",
  "key23": "4TLKeK2rXB5Bx61xDe8SihRL24DDw7RUYZWuh2H3hUxBfCGTktr4BjX3NGG9NRZJEvrR8N1YueBwWV8Xe8sqpEns",
  "key24": "2QuopVU5fmp7KY4naPfrpxGfxyyjtQZKxrqWHDy6KKBHiZepewWuMDnpR24YMcQXVB46CkHJgpxn2Nwbz1JJJ6GL",
  "key25": "Dbi72Sr15RpxpUkW3kBMpHpo6JAxrUSFKZMbfvh3bTEMFoS64oKwDPCxet75EG7wV8ZWoPqDLuvdEA3zMvG52Au",
  "key26": "5oTJnG349SFGkCYcHf4ivzoy14FQM5NhjjHcPSrgeFtTXHy4Qzk8qFGivN6EYo8qsbYqx4251siNGQREsoVpvSJs",
  "key27": "2C1b1wU7HTntHMWTFS7171kQg7pSLnBAnfMdB9outnFPFB2s287cMNxnvoxhCsw9315f5p4CrVtDobhKb8qYR7BH",
  "key28": "588oC1NgQxSfnPrCtbSYZkfK4PmSULfRE6NkDTkpBkoAcqsKdGUKjhsLSJZFZDK6pdJ2afT9Fq71w9Z22euDpf7p",
  "key29": "5pRKt2j2W96ZTrgKbSHcWiUiMNY5BknAaRmas9qABZN3zfqUc1dxChHLeDnzBDuaawCf7ordrjUNBCBVJ4pjZhjD",
  "key30": "3AWDZeogm3vVBmu8619QEZZjNexx6YfwVbf6bMiGYgwbQLiFoaSCBDB4XJPBK7WRb9dJg8WywpNughcHtAaBC44g",
  "key31": "5sJ3i3a8GNgAY3LRvge5YL7Ru6afwcX2GUdM5y78teLQPsnqeSr4x89s88D9aibGdgVnuBPPXXYc3dRHkDW5PbW9",
  "key32": "4hkgysaodBdT2pXNRXhMT3MyAautCicz1GuSvZXniY7DMWLSStekYVsUtNgW4BJMrRjSaMcrJpV9dHUT8QmCwUUo",
  "key33": "2jR5nWuQokwgewAhmbKnaYnn5LGktoC39mW4UhWnfAo8k9U9ja8LTkPuKZ18F8vBUWzJ7Cr3NZgzTL75xpEi5xxT",
  "key34": "aci5yJYbxebfLdodNLWqvhHvkNpoiqvNAT3MXJ1qedVMVYkJfTNzcbDmJprQaEyB6q4tWr7sisx5h9p4awNw2cq",
  "key35": "jB4LocUFjxcBo4cHKKUY7iCJtUygyrxwEEPuWPM2YPQJbzSfn8eBbY98amcSeikDRPKBLPBRu7ya3DHNUrhVxKt",
  "key36": "yXQwZer2M49SrJ2cP8zS13V8D4x299ugyz8iNCArHVxubhcvijKDsy9FJgnq3KaSUVMYYf8WrM3FFAwjR5F7uAd"
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
