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
    "5MvDX9i1RQwu88un3ZYofEHfw5XPUKdV5SZiqXapq2KmjjgzJkqUVaqUSa9T4sUDEsXCDFnEzcsd3b9Sr9NvAGNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HY6eYDU1oVv19X66bbBMrhL8xmsiK5ZzSrubL57GgqWNGUGjeeop5B8rWgMR8Mg97TNVsP53UeMs5VZyu5bqWTQ",
  "key1": "57zDb4P1sd3GAEguDCEGZquLgjh6tiug3MUsySNmq3xE7aNwaT4ZTEogxVCePiu3T4VKXLfuovwV9eqBrd3jiLLv",
  "key2": "27SpU9kySkZbm4XMu4nbziKo4TsK8t1919ZLUE4ecdVSBxFMumkvjWSrwxDAK4qGmsXw9wfHNmmhgzJVLVaYDDAP",
  "key3": "2n3tXr2wxWAxzyU5oj74a3QfgowXEfStp2RPoNo3fBML95qKkTzKZ4BJj5nXUVsVy4P7pyC3XSrtCCbwhrEoFVYV",
  "key4": "3EWmAGAPEw77o1bUa9atcdbmVNLdTPkizMt4RhcQ6m8yVQUdF2bsFGtBtMcDDJPBvQvGMvE11uECAnCFh7dgeWou",
  "key5": "pdjqhb1ynE1perJ6X8Wa8E6D5vYBMiR62V1iNt3Q7V3dDw4kuzXRMdNqnQQ6k68Lv73fGW76X3LZ8RmcAXMbExn",
  "key6": "2stcv4M25Vgspb212NTSSv9n1HZemi4abdENXmQWw2xBN2D14JHntFKymm3Q4eJ44dvEnLPQLcqvMPuffj459eV6",
  "key7": "VuPw2T46CtBu6SkJabfnHmJf5f23DE33XLhjKqtyihcxCeDr7nvqdrYr8ZuBgUXVU6jdfAzThsX36yfiaUMXLdM",
  "key8": "48NF8B4AQG9KQ3UNXYktWJxBu5u6uTTFR78mKHiw9rGkdUNvrjvyrULZ1u1J3F3DzXtyYZzZdMFRLWkoTusXPbUn",
  "key9": "4YKbaYsMGN62GhDyhTHQEed9GxnvRYoVxwX3rT4xcBrWo99RysA8wdDDmKynnbwsXbXkeoMTQLqyxb2FBW8BUL1v",
  "key10": "eBjYJEdCjCtg3burMw8XFQN9gsk9bnNPipwSur3J2NKAzRJYN6sbWLhJTBcHnFBoQuLVs2u2R7qjrpnWHYF9jSF",
  "key11": "5pshiTW1aBrfY7bEu3LuC6EWpoygzGm3xCcynpc8Jm3YDScRs65t288xm6y4jWP61Wjcs4qkLCoqpiNHFLiVpARr",
  "key12": "QoevmNqs9egUgWt7pjGjK8vFMoqnfiHdcme3XgCvEhBWMxZF35NAmBe99pFLgDYeTdKirAEN5fngay2LbbYauxK",
  "key13": "i4FJ8aZwDbcLQKoZBfuhtcUinrPFe4Di5WVUrp1JCFMtQmiT9hVQ5PZwh48rE74S6DKCfxbNMjhFmAKLUAxtVpN",
  "key14": "627Ez6BdtS2S6WTEfgteNe7wya5o49E78Ne1qH63vAzU7XSvUvHQ6wkv6dwb9nLCTPmw2Psd5JtKK8A4RkKwvL9Y",
  "key15": "5Mi44CE5hQZmuyy3WnqkLQUHCgJXxTu31RXsdoi8P9KMpcBqMDdkU3xLQStm3t9h6HZRYHd5MJPzN14sqbzXECLX",
  "key16": "3b1JxQ9h14mecGvgf1WkiC4nEfBBPDBVcwQyGW9K7WiR3cdWjwJM49S7snv8GBbeVQF5V6z5Hi6rssqtM3uDuEsw",
  "key17": "3r9d9gJu77zxTf3QswhD6U8DTx4539DskDsPek5brZUMQJUKu2DZoxfHaCBChfip5JcmQFMzkMydNBxJHCDEfHk",
  "key18": "5ztfLkTUDAaMjvy4dutVt8KkmnEfdLH6m4xvFTfstXQK5K7sUoDXeqWBjgVws1m6H1kJkRmHZBr1NZTjGhJZPkHg",
  "key19": "3oyJTDKFXJb1nSYejQ2Uj7ws3jn1AUhpnp5y1A9Md9uSb3Gky9TJ35VzHBFaTuv6dpsiiaFrzHpQKspsmZGyuquv",
  "key20": "43nJxSUcK1348Rb4hVfTaQZHkAePYhwi8ajCie6ZDxbWQMz95nGdjnmTs8gndbS7gaX2ZBG5VkeHDwPbRAYWE9iA",
  "key21": "4CkuCyM7WBhcwsMrGaMjLY4s1KQzNTKRZ4M14mTbGqzJsCmnR8qBV8gY6A2iMJthKhfYUXjETRtce9tmrTG6rzxk",
  "key22": "3fTtnrirbE3aEEoxuDsbJQJtNvDm9rjznSGProPh4rX5oewQGf2BrY6pwwi316ydxyoYTuJBKh1wrEtj3JFGuPEx",
  "key23": "58S5wuGCDdvBcvBEDDScRZ1F4KUS6w9Ye4VzCtp9Vp7GeQMcCuRdrStvEj8AuL2cDaDRcJ66m9EjS6gFesmfqxWz",
  "key24": "31HZduCzG8xHsRabf3RfidBsifZELJVtPP8q18SYoMrSeHVevqrjYfZ9j8a4avzpWboQycwPXnrVXFH2GWHDHRZp",
  "key25": "4oTP5A4mDouXJti2QiAWWxf6tps65yPhdcNhwytqijzDwNtASjC9yWaSf8iFY2qDod8U9dBZPDwTcb5vdmmKEJBq",
  "key26": "KpsQwwYUQymVpDM2XgBtPpkkWuiqbGZPU1d3rio5Bmabm6fbHbw15g7bWr78PFpie3sQzwLoE9CBX88CUkfWgJN",
  "key27": "4GCufkghjEU7XJKVvdVeHxeYJWV9HoCy5zue31XREBJY9Hzf44fWL2VQNVP3Katg9G8nTkDiYvU46zNpd5UqNBtq",
  "key28": "5GHSCbBbx4ETq1vmuSkGUhSd3aZNCnd4j1gyPwdJva4K7fvDLbuD29P6RrGjeYvYRfeuZwSki8Kdj5UmqGWtv6wj",
  "key29": "5MW1DTRWEEvzXM9gki555hnSh8S84rSbjhakZhCNrsA7Gkg3MUujYhbZpwdfGt2ZSNvEVBJzQXu7VE8Ro2Ug7q5f"
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
