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
    "2WFXH9FqZFEFXuN3VKQfqmZ6Vg82CZ4GZ6PphMWNadBLVvc94Jt98gAwXb76wtAy6JbMrJrromPGKMuFBUnwcQBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HaeeYiasdvHHBkWoRBbqVK1YxEVW9LCAvnXMPu9reqAvmV6d28n6PcDVpA8pbW8MmELFUJYfrHstRtQDFGsiZC",
  "key1": "3MhcB9VH5NepVuhJsqxGh3wZe54ZP1qugYxwqewp9Kdqp4nU2xPwPPC9UomsNR2cdzko7HqKp21sfDvfjiuJStcF",
  "key2": "3Z2B9cK6F2RQCeqnofNg7V1Erp9P84Vipik1JEnTD1Em9HTReEciaEcN5zZN1nW88wR11UgsWGdxpELsvDYQAtfg",
  "key3": "5QbPSu2xZfcciyQ22nfcvcTLPTAzqVTLLXbBUzwtvkGQBHdi4eLTZ6Qowha2tVSWwPtqfjjPQUdXoQFfPkyieZtR",
  "key4": "3Bpr59Up8NUytQdvvhNLEH1ryZ1ovt2ZAw4HVgDqC8ovBJMD94UQCsVr1gxhQjUcMm3m62JSDxaP53SPFjURgnKb",
  "key5": "2DGb4Jmw2heJ19tG2VQTn5atoyqDbxge3UCyBH3hpDDX4f58dwFwTFa7VerSUdd1SqeD3FnvitmBb4yEJQQw6Kmb",
  "key6": "VSyvZMf5uMCWvu2McXi2VqR2fDLgKoBNGLh1np8YW5UpktBH9uKpqzKrfzaVS7p8Hu7o88zYf6ewAiLAR8HuyE4",
  "key7": "2WzLi4pksBqrkCJxQpunqGmuzCKeqzpkqZ1Cpn76o3xHUy9dNN3CSsJSvmwEhQTigPmma1uvoRSro3HxeicJH3Zv",
  "key8": "3m3qYLVDFFnnN3uFjGeJ3Yv26sXqT65EbQMBfHoVx9PEZkdYnvR5BRDoWXhEe6taR5zwXP3xGeVQgQjciuxZF98F",
  "key9": "ZctWnrjjs9i9Woip8AC1YrgH5kHzDsWKV9BcUEK8r3HmJZQDqTDAz7PPSFbKhS7RPo3iGLAu5NRFQpyEomEDi83",
  "key10": "21FcLVFssm545d4Xc6ap64EH2NocdsE2VjhvS8DVbdzA4CybvHeGjioRpgSjM1QFyA9qKNqmU9xRPE6ASBP55y1g",
  "key11": "67qbYSKp9UuwniuGbHv57eHBd1mMPywcytKzk6PjdJGcHu2frQZriz5dAfMcbqqmQAMHXyS55W6Ly1VVjqAkNdnh",
  "key12": "2dJzP3gUfoLKef9DPtsVZrxDFxm2q3442PrrTCYsfKLkkt1Ng453xcnDm4xMH5Dn9EFCwEGu3JxKfLDQtxsp6uQa",
  "key13": "5YhjkiADRbUUttV9eFDNEtEvA8Q2M6aEGkbmKzBoPAv9nCXG4vHcpPuX165KASWJwMqUC3wzSAPFuZ2KYE2mo9bx",
  "key14": "51EffhAhB3xow9TyKsARzPzGdv39ZHbjZAuRW11wKYC8p8YHjQ2Ue2osonHoj6BC6dCLM54B5kt9RaqrzpLyHmfT",
  "key15": "2LguzT7CZWQAdw5R4E1HWoGApQhMbT28Gb8JMc6UAjhW8YSb1Ma9upKWGCDRec1Rstknf5ohHYRjM5Znc1m3pF9w",
  "key16": "2xouN8bVdq7LdmzxqPMeKd3NjdhdfgAFJ3wKyF1mLB4By7Y5q1fsZbFMCaCjmgxbuzjYEhv4q3sZrjYvvyVqHEYt",
  "key17": "2dL3PqHtTpUyymGjQPXanpKnzmqyjbYpAj2PqXdowS1De3MjjtGNseZr88NZ9SGRiKFXmgKc9NMm3DzAaos6YbCv",
  "key18": "2BTBZSVSE6aYtLxHStUcUWxHCocTVhW4mBBuRHAEAWFE2s8uKmfCax5RE9UjynpA2AYgZUXNapxFDDQFXM7fBh8R",
  "key19": "2Qfa9QSwy4ygScKjEwrfA7P2w43gWBE4ubCa6zqKW1WVRBe7J3otnBq1Eh7qSXyoZo2GuR1ksRCVrTQU5msB7Mfk",
  "key20": "4wosbM3SgYChmzYoTtCi5cLHQ2knYpJVAUmvLroxhYkdbqQ1jUgmCxZ4Gudn8Mwdkz7uBwk4aTM1crB4QH1gdLYe",
  "key21": "4vyecb3sQaHjYVtkcmz1vbxNzKmQSbonsgs6NZsGADYUtQ5cy9WPrxUWwRS1UkCnRHBjwrKEp7At14QqmmKZ3weZ",
  "key22": "4g6iAtSPJCbes2FbfPzcodujWgZWaEmbAHuVJjjCfUdLY66jab52LBS1VYKsvjzRkbQKv6V88WDyoAn4TXtVt8j6",
  "key23": "5E28EEcXmALpVzCSb6vKaMTwhpNZdasxSx2F6J36pnThKtUNNG6PSVFEZhkLM9L6ypTjN4Hau1kaiLzmwhwQ2BBh",
  "key24": "35Km3FFmJ8NS94sX1a59ytNgrSWdhB4akQxLhFDTwsPgpVv49GFXcQX4Zj9iEuAypXsFbuPyZpfGhMvnciKscAaq",
  "key25": "s2hHj7fdm8uqcqMRh8EdEJxqDaCcsTLHbGBJkRRE1NevaJ4FPL7Sc4AFGzQj7yZy9Cyqd3x5WG4LeVqtqfRZYP4",
  "key26": "5anvfcRLUFGXbmZsyMqCyaEjGMJKHuamfgD82ddpr335JBWChS7GJcQska9EdrPuf6rTRXoRUUUZY1rvvhfzXbZB",
  "key27": "63UrxoDhjAhEJdP9QWKyertmdBn2F8kkgTPvMzZPD4YBoh5CgCpJh3ALHCZNxdsWSb927f9xksHEj9KbLaHK9HJJ",
  "key28": "3zxtxQYDLXn8qprypwYWuLhjQY1t85rLANaxWQiHh9K6jgSXXH3aCvuaf3AwtVgNCtucnERfA1dg7XwuCG2AVZX1",
  "key29": "4NaEKTnZXECnyTnF7u4BsT3LRoxPDs6e7WwhTySt9JSMQM9wSRpD1qXXLViYn7UzfDw5Bv4pWtPUHMBDhCJKCpoz",
  "key30": "5FY2SnG3gc2wsbwo1s3qNQut7KJ7c9t1rJb9jr4zmnrVkjjGW9RayBMKVXpckf4KJGr5WnSbnFKFviu8LVaUh4XW",
  "key31": "4zYZttHk6BQtcSRud4pXXtuzVmcxeBjcM8uhExh2pf2RQscQ36iSP6Eu3px1pPTH3NbRiNAJuGcraVvmrVetPdsX",
  "key32": "RjHgeC6iEhbCrVNMCfHvtsESqjABFZejPRUCm1oynX6e4dRLJS6RvH6FLBjteaYZ1P2N4GYwgjTvmBLTCTk8RSs",
  "key33": "5AfGq5M7uJWnxCv8fgo6H3WAbKTTEYLcn7EhdHduX2tLyrwaakgeTyTc1duKE3FcnshftVhRjkUp16oHdDtodKRL",
  "key34": "3qSmM34v1rdtg4P6ufki42uCmzeyCR4tFyZGLT5EJZ6Duhxbj3qe8YwG2jSKVMKuZBn7DKxixX8vVpyEXUEEgk8q",
  "key35": "61TFSkV76ubWEQS9Akf6RUU3Rj12tLYkstcwp3vnDESF4xuRgvEuLxgkGrYhBZg7ftjKEE39So2vp7YKFqKRSoNz",
  "key36": "44PvKdi2tHDCh3ZWAii2CjSdxGze1qVQQNhMww5UZxeiMrJaXsMFo4FTPxM5iP1DS5ZTFa4uG2BCJBZki28d5AH3",
  "key37": "wUfnwrRidRrdRxHsawZFirQzWqTobjRCjgYj69unPrzRUyAGcPkeic6WZ4RuuKknZ6ra3VngwvMamegGd5hnLXU",
  "key38": "3cr523g5XqRFsRNVhYWa41DfFNWSvJT8FoYwqCY65GFKmuzDNkDq5hTzEycHxg3fQJdwLkbfNsbZLjsQLjcLKa4L",
  "key39": "tSAVMkR6FrkA4q7JEBdVNjEsKA5zgYvCwpjbzMC5bkA5A6vQa5febdBCFV5m5DvQoqrwUTSKzuraYFyuqvX8nJX",
  "key40": "2DQcHmWX8wGyTm4bZc6FjBxQSDQq29PGrhTxGSqPFs7B8Nvid3LeXPZLKfxrzjteJJSDgNoqEZqU3qLQFvywwdkV",
  "key41": "2rWLcYUwKNB75LeiZkqCnhEJgiKNdYLSvqVzzaY5KF9MMBkR3t6ktAhKoVqEUNF22jwfewXg4rbmvE5MqxPpDzHX",
  "key42": "2Hgt3kXdcdJHxci8Lz5BwzzJSbdJU2WTErqoq79JR5o2xfh5MJ3BF7NfgPxoYjytaufnzKoL4vDamWdJWUh8aqCQ",
  "key43": "4xJYov9oUCGbv7bjrb9bDkNgMsdHkSH1ekwKG2SF4vbgK4WJPmWRAEbpqqVC3MgsXHk8wnPkDwkqzCcnweRRZNAM",
  "key44": "5Jn5AUd81oESituFFk5XB4jggr5aAQJtZN84P8aCnCzYzhxUSkk9hZP5UwAMcyxsntybion7ajiLYcebFHMcPReH",
  "key45": "4YkLP7Gs1Gpk4dQKzK6h4fhwkSw2zz7QLT27hh8jP1XkHsoP15jdEBAdUVRVVD6wu6ardC5vqkG9P9E5k3bjuE9W",
  "key46": "4kWHQsRJ3KqoNtMK7zT72pHDvA7TKUuAW9yoGkUchficYBjjGfaLPpD8yjA3nPLKUAPLp6kug9sGmG68wVZEqWfg",
  "key47": "25QJz1FT44rXDtsRpc2dJs3oWs7QbnXqTMT1t1uA3wDLKURDLtAsoYoWnZjw9oseBrN5RiK1dsWnFNbsUXp51TGd",
  "key48": "2nuqBbSfYfEwDsbpNaoU6dquA9vNVEJMZiYzaEQXG24UcWJmL6nLoiTdYSEkBh5SdbNdz4MzQkthqA4ig2nZe72v",
  "key49": "yPP8zRW8QAAzebrDZfhNowPNVZcdpuhiP7yzUnZDPx7A62FWr6Gb9RhSpBbErNwC6Qi3pfyV8hjta9WXfVwJYaU"
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
