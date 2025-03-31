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
    "2yLC3YiBicd4HnNUjUPDAxgZ9yKajoFhaBZaesXNt4UcJLUbxVFZPa6N89YznexE2Yy4A6k7h6yaTkzugz2hMnz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6aJtfdXaKXyH5emarEqj7gkNoJYj1Xm1qPKdb3JJdKoh6byfDzczhiZXv6pkpSgY2SQWsnsyhqctE6LH65mcpk",
  "key1": "eyAmUmKTx7KkdVNjFd9TKrPSgycABx49fFsAGAMNPgTDEBqvCAX5gS5s4WTi5K9oWibr2SbfR71qhFBKrojMCmw",
  "key2": "64zyRa5A6jcR8aEwUXCeZPSV5vxbA4hacC7kus48gEc3Pi7jR42ekoMtYJY25NFE7PR2HfpwfZ5p9kVha4ftbeEA",
  "key3": "5AbF3hRb9ansyvEPeQSwBxYbw6c2XSsqZpmVLTPbZ65Mfwd77SUh6oTFKRi2UZLc1gwK4PciNNUHEiMG2wH1BEWb",
  "key4": "5w98aaP1LgPJztLGKtZMERzyefNBmDSe7ktSu6TQKKDF1zqY6fWnpVzdn5sJGJAp8kVSTZfimfXykEVP7bF2cg67",
  "key5": "4ASDsy6tgB6ttipdnyZh3strGJ3fueLat5GbbzdLtjktt6EhQv7kzawkjND7ksdhpWmZX2dd7AKATE4hXKTT7wVN",
  "key6": "5Gg1JVZWS3kRn53yVts4uVumGrQeM749eKEhCC5xHZaYDnUJ2MXrvPk2W6pLSyWAxwuuqJLRCtaKeJdFDskwpTYh",
  "key7": "3TScgiBfmxM4ptYACttBv3GgRaLeSoev8gCU1xfgy72Xpk2nsGWUqouP4S2zw9DYDPZSKVW6bh3hqcD63RxGKAws",
  "key8": "5QP6sAWMht8jcdhMBcrpXDZQdf7u7siCfvbsLpX7kcp5Qm9AmQo8fdrFd667zSXKhy4MuGPbcH1eMvUTbSJ8MzkY",
  "key9": "5mdZ63ZeBhBzA7nw3mXKYGwMbgzPfxUY4gsH6S1bHa5BxEYGXBfxPH9Kk2KomxHY4gFMGcPPoRatrvtXsCCuBwPM",
  "key10": "hvGPnBfeh7nDEHpoc6qnRmbGcxKhHYWcuPpZrX2oHz9TqusG2D8zKwwX7yQGvNozbC6MMskdyjYhsSmdJGpBsAb",
  "key11": "4aecBG9jL3tQ9kF4GY35RdYtrCaneacepjnnjRso3y13XGStwGgNB6A7SUS6ZupstJeYzPUdoYQxJEEEQYiUcDEw",
  "key12": "4gp8hkW9dnzQcL1jAjt37ADmzVz2VjjWm5c8PHjbuFHYL3Ge56s4zUYYKe4Wo62d44VqrtwnKWLnZ7csSHRZxGFz",
  "key13": "64LJZCxMj6g5suXyEZRdqhzfHf53DqeSQvgEKG5fKNuh9ejxcSGAj54VyaYsvqcXCXPEP2T1WmRTkNvgmThjnuR7",
  "key14": "5Z25kQZJvqoUJFRyHqrv9ut25G8uKudDHJqxoRkLF1XAvrrdV3tRauDT7JsQkNEmNNr8zEcp3ARmUDGa7UbyWpw9",
  "key15": "4KrVwZ5JD49jPYZ3RZvKKTYvV8G9DjnF8JkU9UDMemLUjJR6HCETfa13tX1fuaRPqLCXvQSMz8hfMe3444bVF2Ft",
  "key16": "3ayUgb5rRZVJHiTMmB8AkMvWdxgbmobmss6Bjf7issQTgWY5kuxRqNjCekG1LfEiVNrdpaMumMUyv4Nk987zQsGc",
  "key17": "3GcLmWuiCAgwXRNJDfMQscqTKQUnG39Z1UjzNfEfj1YTsazn7ZR9ZRFcngr2nqPW7oNTbzpvwzGSxFmGRjvPyYUM",
  "key18": "3w9SdMffqFt5h3xSTcxr96ct2NohH47kXLPDYJ22nwePGHSDemw1wPgDxzhmCgdcjFSPSDrzycvN6fD4nJ7ZSRVP",
  "key19": "bak9RE7MCGHY6wCPD5LYNDyyB7VNRL99azE8Zd7Y3mhKqG3iQEdoswq15LRB5cEXmBALGX6yfF573B4NTY4WWsy",
  "key20": "2jwMdpn3Km1UKRKAZAgYzscCpvh19LFNZvvpfDXoxFNa4kqQtqdcoHHgXD7WJjcLmBiQZvUvqFmEF2c1AARnKQZX",
  "key21": "3LuKyw5DX6U1tHPE7iAwoBEpcpxtKsiYLKeXSjxTxaehaB9VVm31W4hQmTK8uFkPHYhGtZ42dnCxpiZtqZQSeo8i",
  "key22": "3e5Z6VjmxB1hPBTidhEEQz6SUsuHxaQih5Kzb6o3r6Gn45TrEjpJd8RwyjSVtuZt1M7ai9cvqSqJqcUSruxFJhp5",
  "key23": "27hSt83TKoZbqpaWDVSDC9u8rKw1xPYaufWSgY7bdQfjdz58PzBbzz495njR9W4fvQVAdn1zAm8zPqVTHkmLuWEE",
  "key24": "Yk1jYCreEVtqSPq7s5cmMjAF2ba2XCmRh2rtQkbQGWUhyP8AW74dEj2PRNu1eNzk6o3xFPAWgVHJj3FgibKi6BK",
  "key25": "633PMWHi9ogKCCQuEQHtaE2rGoiFo3NBhjnk9CTBUiFtt8sK4woc7mgi4zgzZajrMycQgTUtrWPyGj8xsDEw7PLW",
  "key26": "4Mg7K9R1jfruV82c1Nrze9WRmy7qx8R7yHC2dYAAoK1A6diXCniMTg44kQ23MXFg8V9dV4U9WeoXvuEUwN5Likm9",
  "key27": "45AYWUqNGqojLaoguYB3LHWBCScGhHnno8fgDmGHyy6SGfP68esP62hVH8BETX8E5rdKdCCXAzn88JHZzZ8jWMpT",
  "key28": "4HetnTM3MRAMJZX97TNf5danNqxGjQNkAerrQyymwzUsiiiYy3tBoyMScihAUhBxHQi729WCaChgC7NxKCG3swGM",
  "key29": "5fszYge314gnmdwfXZzBFKrmzQAkgZ96WQd7dmfZibaWuXRfsKqAvFEb1nQCHHmL4ZygE6n5JwuhruaF6WTRBzEw",
  "key30": "4sFBGCLk7fPeYXGKGhve8V5qiXVoWzyUWDTbHnqMj72zkUnGbm2g8PmKHQCnhywUprKS2k4DeVXFXji9RfY45Kcp",
  "key31": "5535WhqRk19NCQzwFar5eWw3qEriKLb4aSA2zqosCvPdAH4okYLx6tGiqtAEq9xvD5BAuVggEYSQqXpBNaUpFR78",
  "key32": "2TGueXLGLTVBPQiJFyjh9MES5YkSvoio4i67j46w7UD8RUTirqiTRmHDyNpKeM5qGj1ZER3XUYK8fwJfADqywtih",
  "key33": "rDuoCrQHMfJK86uQtL6aZ4Z9unuQTi6iNDQWC5zzY3HVKxb6qcxshAQdq2bKREasyX6Ze75WN2AC4VFa7ua2aRy",
  "key34": "51FUau4fYu9gJ8XUS1p7aGedLfstJnnFZvstwS5yExaHgSLmjZzGYVDo5crcHwyL2eBuMg6FqbQZTYozgzNs4LNC",
  "key35": "5ek3w4E54QHqw6rpBba6uVbDSSy4JwZUrv9bSxjH93vPMWSL7hRA2692BWCg1WLdrKnYv7uUhg1VjWY6gEnAjpCS",
  "key36": "2Cb8eX5LFGELd9fW2sYAQBTAKunZjaMchpLQ4mxZwGJ7LQ6edXFv9EF1nRLUPLynbRQgJx7Busoxv54Buwd5tMZb",
  "key37": "2cTpnKVQLKLJe5FhB1axCK76opetjYM2U7tgHyq1MFVLgGTzGLbGTNgRgcYuiZwczD2qSPiNqm9MkeTG7Ps8Dy8s",
  "key38": "21Ldp2JMHN6yuVLqBmLguwvHeEv61j6w8fWx2ou1Vr9ib4kDF4qS3ymzs6xMkpZ56ofy4GvMoEMdMjji8HkKNQ3C",
  "key39": "3RPZRpVmwcZTQbAomYrfNSxqGNGZEBvjTHJbgXJAJLmTDQo3jJa1LT8UPiH9HxqFmBVAG7hZTGejBZA9b13J94PA",
  "key40": "5zEAwrj4KoLDsFiUV7ASwDNB9MwE5UiUkkYLD3xK3mSdCsbjgyhuyDyNhjccv6cZczgtwpTJdjHvLCEY21tZ97jd",
  "key41": "5rRQspuq54Ws33nTmnCh35K1M7ukr4YFakKapGikoMAhpZ4eqwJse6HHyzzogfWJSpUUZKcAJ3UYpttZUwL3t9YW",
  "key42": "37iGjRNwSpk12iaBdzNbxR643Wa4zN3tqCq6wiqknNbnVdLKkQByvqEhswM3KUc2tfrV9T2cPd4FNv6n9uRji89v",
  "key43": "5aFDpZXmJfMTmD3keY3us3b6wZqZCyagxZdTMMQFZMsCTwwrswmZAPMrk9hT9hQAw4AirajjxwVVDxJmyBixqwse",
  "key44": "3M1uf1FMjswQCgxxXJo67UFJC7qqwEDKGM6r7rrjZGjjQ4HswQzSHzqn1grznkQXzBFBEYmQPpVb84S3HZJcwQsX",
  "key45": "zRKxraz41YJ1Xjq3C82QXRMZFi4JABRBF9i8bC8yfmKQsRwGAszccgGHDtEL2ZRyo1JaGA9k173K77LGsM7Ltyi",
  "key46": "4N6D29NTHvJuf66PFpvuXDng5mGdtAtXir7NCttkjeWY1Dpwnz4WfBf7pMfCzP9AyyNn83pXGeFPwsJwEE3LhP9v",
  "key47": "4C7yUxRYDokfMfqJzGoCgo9ghEoNEqXdMvzwAFR5VrcZgwCP7f2ZDgtdbsHt7CkNiP117GSNSuiPCT31WH1X83My",
  "key48": "51pAK5zDXQN3ePW683yUBhTfsth6xru9zH3Hsaw9Zuk4cKNviACfMkJ25VmkHS3fkCGM8NtCvLp8iZTLPg84NjTh"
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
