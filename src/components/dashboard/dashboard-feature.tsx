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
    "5WL8VrebcKar2g5pGPEoHHZixBnwzbfK3e5bLSvrY4SgpswaQM8vuyg8gtTsczhKFDbyroQThiPha473rxyN56ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFxWZQguztkFW89nBgoZjmYngQxSMbcLmXPMz9asVfVAGZHfpf2AmdBEeq3Fnhcx66Ppyhog5oUxRP9bLg3diYP",
  "key1": "2PDNBNRyhQimnFsBLSssgoinmJ93M7ULhyC9egy3dWTUjGUXqh4QsDi43n2QhctFngJMMnrtvcmzFqnc34z6z66e",
  "key2": "41eGk4p5xsvgLBDattXJp1KmnB3SzLfSLD7vHacwGj6hsPGHXtXXNvT6PjmmJ8mF8KkTAZqNUctKVaBhfPgmZKTY",
  "key3": "4xhvihDGeLD1NK728cqtkc2izA2zzWsWQjrg3TQZwVFVQRQ45TW9pxS1ZcxfRptcJQUWq18wJAGjDivKae5x6Jig",
  "key4": "5afHiQEAFo87QENSZ1RPWozk88hSsRe5xVQwuTUza7HrrYaxssuZMRfs129ofGxZ1MNQBCskEL2p2CYyhy3KNqQh",
  "key5": "39yMkzucfwaQo4vbToPWPACZckGTRZb1QNPsEWiH4uuyCV24T5PyGcqCWCQmeCoCshmv4ije4rL3PGRGjrctdN11",
  "key6": "4uwK8qDsc1d2Z6kvPhhJubDfvBJ5dWPayCSw5pAr3bPPpYvaAxjsi4h14ebLtfembvRVqpHgEcVUUff2DCyVK6zb",
  "key7": "3LygZgoD4dFkEAeWqyEvQbJsPNptbjE7rb1oW84wEeNDPBYN2AGiRM2ViLAF7vZMnKHNZVUbrBv6YimTFmtFoyw",
  "key8": "3dWJmDJAa6RonU2nMi2kuMTf7KbdJhCdYCDXdmvh8uUnBALWmKVBMNhyWSynMQYxcAzZUUfJG2u5HXBD4eFVZLTv",
  "key9": "ZgAYCwoAtAmssYWB9EiFo6UcCb6E2rXNHRRhNKsHEfnwZchBk7bupjBz53QouBhGa57McKQLJF3TUQjh4ixbiC6",
  "key10": "3B3LRzqMKCYCxX4NLXJuESdr7ZSUHZERsRc66vPb74zam3Bdq3wGAEDjtVdLtV3RQ13fncKCv9qs36Q4C8SVWLFL",
  "key11": "2ASYnBSxZg89Hjt1YNSUdGhyPCY6Q6ndTxtFEfXs484RYdLm61Ktb6LQmkVhfUJjnf6wDhZL2YFDJq1ZJTHrsDaz",
  "key12": "2tYcELAREoe1aW7j1ZPds5hQL3VbYXxtLnDf2fvUK6YL1z4Y5sqU5JmXdxUhKGMMuiTqXw3RbwhMmAjnD12oxcDP",
  "key13": "2jyfKc6SwvszVJG16aM2TuUa6BUt7TonYyv32eTQMH3CsZn4PZ8RqcP9SCx9mi1x8PCSk85Xyo4XVVxwNnwbVtwo",
  "key14": "3ubrTycUcoePEMpwrVqa4UaeeYY3rktJr7NJ7beZY28C7WnYrfw47c1bDeaNEfWzCH9QsnTrKBorA3SgNhfP9YbY",
  "key15": "4Rc7ZE31GaU78e6d2DgJBfSvCwuiaE1v9Q4LHkkoYqahCjzzP8U9s7yB5LbJev5hTNokkVdfQcmJvah33UZkY2yY",
  "key16": "4uSe8AzsF7rmYg2W5Z3D9tiqwCu8g2U9zDtitM7DNKjmvA6geyi18J5iJJAHsdBgJWtaYEyMbiH8TXk2LnS1UJt8",
  "key17": "4j9G7QYKTHhHDpirvcrun7usr8wJQkC7oQCZAVerYirBMmMHCEVEwpPgGFMFj7TMrvRbuywcKY1xVyP9XbEQuo4T",
  "key18": "51RjXbjM8P383qRyu5DFd865pQrGqEyL1W3fMQv9kePEAv6j1JgYBzSwo7E3YJB5QjJ5YNmfythTuAB8GkUHk9PX",
  "key19": "2k198g5xejCUkG9PCkSepX7SyuLDvfiNJVMb73hhdQR8Z21ikvtGDbEKBznY2UcfkhLJFfxgyVHx4BFXYFpoa6GX",
  "key20": "2YhTtZ6KYMHZ1Sd6rej7itf5zQgfHe9TSAxuqcRkMJH4dm3zqnAWwPuZ7pPb4xukJaP6bewkn24derrH3Ud48KPQ",
  "key21": "5aTGn42rnpFv8jDW2pcmUsFhzhCqGojKWcFb2vugzz5STKyh6nCFPrPTuqV6wUpzcfDCJ587tRjC7RuxSCnZdjm",
  "key22": "4tmoMnLe64m5UmPaHRjopHsEByrXRAwMtnzXZbwWPoCS1JS7qhu6VA2QBdjz2U876sBnWFntxWogA5bFGJdwZYbV",
  "key23": "4kQ2BvQL4gMvqPzmJn1AX1Cvm7iStW1xTb9PaJ4movubX3NVTtgQUbFP764RT6Ejj58i3kzsFoy8TshZTw144KTb",
  "key24": "2Sza6QHmr4s86GR7zqThwLXbFY3wed9stDMpLVK4Qep23eq6m9yddiZdxEHSWBp4WqFpVm1Hs6mXbSomAtWgAUTq",
  "key25": "5noGGKyJBmAnqc358nvsAjAhQcc6CFoL5mMTnhTEJbC44gmcdSse2HXUzGZdubaiCtKLDaJDrPDQDCfCGTZY1qRn",
  "key26": "5w3c2rc3L6gfigbvMGjunETYtDiLP5cX7wrutaqaXSuCqSdwvt3mUbxdQqswKsUh3Thys2oTFqh7R2xzcrFZ33KD",
  "key27": "PpiDyVbdsL7vCkAVzmKHrSJap46B2ZE8CfA2AxmRGHY4omNHmYLLsUoNWQJJ8xEAekmqm1qtY1i9sCemkznENpH",
  "key28": "2QcB8cmgHiCUXzydPzJDBSGdVaAMDde17gw24LSeY9zVfqCj4iCrNs3xS5NgpK5CsRk4dtbFphCXGsVnYcSRfKFA",
  "key29": "5nNJpzf8sHSEePsQzMDZHrkGmNiibCuoQfKvmwodKK6PtaMEUbTj5ueCD8iQjqTbe1A8webtQuKBKAdUFpC1726Y",
  "key30": "4kNy9d9yFTbMmb1vzjJN3tq3GPGWEdhcGkTuyojDnNgWDoZGsTDGWW7JuEfxWkxmpJYUiJxqx5TsYrZZZqrjW7k",
  "key31": "39ALHNmQYKEsXPS6WXeRuboSXTr9mJ1P6QidnwKGrQyiCD3CWunAkJjN6tKPAsc8XEwEU4GLze45MwHwKxQcMCZ2",
  "key32": "5gHzZATtgChdMftZLJBVvWqoHm7dzCjKdd1gHWbLyMyB4ydR1QZ2PLuekf1W6DAou35F2jEFSa9baPhQmdJ6pt5J",
  "key33": "NF1q3i2w7RCLjXUrxsbjF2PhNPCAQuCd8EyzutP66SBgRDoFyyCXNMYk9w5hjR691b2wZkwvAt1PWWmn4x2nTZa",
  "key34": "FJ7Jid4ZdpftxrR7iZNeWHXbYWnHtr4B7yzTBf8sn6t6fQZdVH5Ww7455SZejfNyGnFeYYmqLDZx4zrj7fSPrff",
  "key35": "51hV5bw8JLVvXu6UEYMNxwq2LRjcbXc6Z3mZrmJtbwyvtsA7dq282qZxAVw1Yyf7kWqewW7DTL7KakyR6Nej4ZY1",
  "key36": "5DuepkpjtBgsqSc6nyr5o6r8svbr5AdvSPXgLM8u7PhvSUdbcjFwgndWZqRyd1gy6u4Vt1gEKajGnQ8TUvjK6UnY",
  "key37": "28CiezzypJMHtcBnWFGJ8kptiKboq6GaPEojKs2Pp17rddZ5ZjmFijW2jkM3j5Ut9CXaqB1fPC1UXK9KNQtTiHmX",
  "key38": "5dQ1YTRAmCDs8NsNRLGkEa3Mq92qqYgshwQcn8VroXKu55gozQA3MopiVFCs9Yp6hAhyf5x4LQ22Na8Nqx7SHMyM",
  "key39": "28fz3Ru1TjLS7E5H1QWLXCbA2Zf5xfhNSDuBz9ZzjKafnoYr2RRCQDdP1RdXwFbHhEBYLcCVgtRKUTci5kcvefAR"
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
