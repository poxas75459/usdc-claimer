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
    "3tH4ZKppGQirbfnBRFP8TNbqafj5K9g2q1azifzaezXH6zX62z9cVSNjDMGNuSPAoTRuownHyMdm4D1ZREkBuvMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QeZmCB74d6VymgnRMdTYfMuCsbUjmnGENobWawkgPmdbWuHxvptfSVfAQkSbQMmTG3Eo9sgFS4syKGKDJqaZBGR",
  "key1": "DvHAhTc7K5wnVeFcStoCQQZmiya65gkzEoWaZkmzk4yTLNK4dVV7TETnseR27wvJY3w2juSakzdqkxxdhSuG5aq",
  "key2": "2qgYfw47UYrAc5X1Ho9KapzerarHza78cs64GEttCD2cCzTHNNyHRduPmxHdSnAkgdnK46Jyn1BtAKQYJcr1Wv5F",
  "key3": "4Eh9NaPqrePDGdQmo2AVezxLPry7xdVU9LtbEjWrBHbBsDL8kgWpVSSwhncjQtWfU1b3tKr9CVFYFQkeDYCAPgre",
  "key4": "4Mq8ZAgwW61y6qyfnVF4wRPDzaQaAyJ1pqZ5FmmmpUebRhpwqaPf9BcD4uEgX3Q14VczeWyAWjex9sYmEMkHX5xH",
  "key5": "251kT4FhKEkLNz9agY6vk5PUsQG713m24TxSkj62H9hBtFdSszGVSZm6k7Mvb7A6L5vY64bL5nzwb9HF98Tp8hst",
  "key6": "21aVhzrmYFuYGgTnKM5P8oQTvjnqwkD1qxGdiL8MA1ygM7xt3Vo6QUnzVQCzJ4wQuqhS9tv9RTRcqgW5M7vGN848",
  "key7": "UR2JoKkFMR8tqukZYmcfqFdaLex33s3pbRuu3PgARtVDmHTf38Cwjvv4BjrSstHQbQX5skoSPEmRo75ywPr7Adm",
  "key8": "64rVdGJ9rCmj5unrTftMNQgmdVVQJdzHehmX2JwvmwUtgb3Sg9zThYSC44W3mG5Yd3sbc7shuLddHw7JZ9HNJPMZ",
  "key9": "3i72te5awG1i1e4Atrk3tgyUPf87W2Cjw7Yz8AmCWcxhGk4oazrZSQutMHVNgyJervXzRq9bqRoZ68xQpkAgt6qm",
  "key10": "2Bxxhy1BU5zujiBcYnMtxgGrPm6KcvHGteESQfhAtD7GUW68KGK4hq5YiTcamCH4bVZhKhyKtbm1P4VP2mzFu64a",
  "key11": "4VkmcuowBeHFy2vd4rCEMBiHh7879j4rijViJDWCTA7HfrWvVnHpttSAkhPrkWSq5KBx9bQfMLY5v4iZ56YbpBVk",
  "key12": "536UxVEMahms3nBACfGHfMATVpjGTc8hzkKeQiErEdKcggcnX1tzKvM6nswSAwb2T9LBJv7rQdxb3rrPKy1P9b7n",
  "key13": "QB6Ljq6WpRek4ZaoKWZGKuP4sTRoguAWZPBtAAS23AwbF9ua3NGJ1PbHtGU13y3AaMR7eLFDWVpeBcYhQzd7D3n",
  "key14": "35RHhqzuN77KMFjMgVcbfrvmHzAuZA7ByNit7M2Bb1vZHW1C5WBvzisCrCdk2RuiiXXbJUxn4aDnU6qyPCrgLduG",
  "key15": "4QmzjT5eijPW6JT45cntDeknzCFhRbgy4hwJySR73Fx1sEqWxYedgcFwn8dRsNmAcqu7K6aSsGaGt1WaJHnUQFH5",
  "key16": "62FJRwRmmtta7Z9DosE6TvrUkCrcqwKvwAHioxkVZa96S6DkjeJ7xK7b8hcmRETgCKppM6PT9nsaJF9VoWECpJDn",
  "key17": "3qfg4GRo4VpMr9QTvJN6ExSHfAZ1UcPBeYfCMPq8Cu9ex9HetUGVYHp7AbmYRivfo5HHCEuwfK1npfDiZfKGWVmG",
  "key18": "4V5Meh8TcpWfKX5Hr2JppvU3kQqJgPYvzxsmNwGTCFtY3gyBbUnkRcQP5za6S4RmHX3YkmcBuRzBzLJE6Zv5oRx5",
  "key19": "d59TbvRMr5YeF7xYPQ5KsikEput91CzVFTDPnqi1HK8LZTMdo6tAw1SyLTXLd6GQ7UKf6Z71cqnP8DAt3F8kmBA",
  "key20": "63SinbHtmDMuvtAKxAaioqVWq6RT95mPU6exZW6EN6unw4XR7bP6hiyfBCBXzBjmHVb3efwJjCP8v6pR112tTkyR",
  "key21": "5wPqcWgmYQv6nPwfzBCD58wwB42RUsjCpERhJ95XPMZwStZ1ykWwt6jL9FVw4ybarGUaE3NJxjUVhZKcz2dqBqSr",
  "key22": "5knTzJAs4sr3fQQbPKA7BTm2UdQBR7BnBfMZzjjK8drbNgz6tS9Wp2hym49tMJAUxm6ZeqKsvWLHUPVzzYxiyi6u",
  "key23": "5hs4hSn2V9nMYfv2hJjpQAmYAh82TmQt7jj51VtR1HWQqtMKgALYEsKFD69WjHKguqUEG4FN4k3gkStLeviiCyw",
  "key24": "2zqgMnws3KaZADCDvtBHv1CWkWg3hUqnrYwBrhgKpu1mGvkeCTLAWLCVDZgE2i5DvVWxaDCb7JKwC29FLP1JjGXB",
  "key25": "5Sb13PxXRQ66C9R6XAsoCSqnvaLWjXaDRrhwuSqyLvayehMEKexGSMNzhEvQuFGKPDY7puHMpS8bvv1b9ULn6NXF",
  "key26": "4QUv2ZZ4x9ns4c6CH3EX3JnVSbHUV8h2dmdznNas1o8zYGSAShNysuVeuSSo1kvG2jqUtAi69wAtXwhPqCpKuTfh",
  "key27": "39NLCajHZrDwDSjjQfRz73Debd1YjcnEpjFEZWh4Ezu9EC1uhN2PGmazRzG7KKvYC41bx4AVZR8ongo3BKuP8yBq"
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
