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
    "4fid5jP8acVKVNYZauiL3k4qQn3Z31XdvMmNQuAUbd7vAibpex7C3zQ6kSfN97DpBL3RyqfqPnRUyaiEAzB46LGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnUuvZNr3QnWwqgtBaCt8Cs9V5h8a25kv9GLX2JX5TgtnSvRRP1igcQsfHQ9F9GxZwffyDCNXHuN8q3eY6Q7aTp",
  "key1": "5nJAkeywcic2kNmJtUrcZcuzAHYmsg1tsA4o1KJeeb2Mo2j8rWwD1Azr42iGt4hgFXHeNmwmjpVbaunfmSpBhjjF",
  "key2": "5m8wiHVFTX8khEzVTUo23Wbo5LmwrKboEaGi4JykQ9SHTeBfjH4gEXk8vqxcfVh2x5nYc1uSstAhwz9mAKWBpzMv",
  "key3": "5kCzsLQjtdT6iTa5AoeVCnV4qQoiEtPMGGzzzWtuPFbw8ZPrwSxZKxtCpm1DffaaU3N5Tn4Zak96evXsWzRfrMTF",
  "key4": "3WMXrENtHjtxyjDtqriqANiRqP9458iCDNkx96RyRjGmH7WtTJc8pRotPfwp64kJ84VLsXSoGQCr94egcHMBGF9r",
  "key5": "653gFAFnMbp5UuVZ1QejeYU4Wo1UkvxEQsgJXcxJK9e4iiWvQtZpuqwVecTQ7jQAiXFPsLKfLgmpfqmrWKNLQZGW",
  "key6": "5NcGqxKY4hwFzTk1fbsdbhHvvqz412ZdZKG9jVJQd7oztes5CcgGmWMWbjEDP913THA2stsm8bb24zm9F1rYpZjC",
  "key7": "2yypfVcovuXmrBzXL6h7vwH99YmK5bfrE4UMuksRg3S4PgfhThjgiM6meXTU2NdkKwH1sDivLw4Rc4QStdk7oD8X",
  "key8": "33toYPJb2mW3AzUNxrvgpHEzuakStgqz5BLRLTXuT9ea8EaCBsZz3nPGNrrxkFfavkQW9vpWx3qjHYbguVdVJCfG",
  "key9": "3oXjg7S4YPHiRTrGRJuVjt475t6NfMLiBrUo4NuCUuf3PDLo91wVo3eyc5o5495XDwWMm736cz26ZNxNNVvU4hUw",
  "key10": "35JCuU73EobhBuvgbnJDwB9PhBeDLNPaBjtCDbpQvYUNaMLNEYY9v8s3pdjWBrnPTAaPb54KqFVLyTezz64XvxEF",
  "key11": "2Un8jrLyuqVWEbQJuDcW65ca41Z4XTwTqUt2ZgJZJy3ymkEDBnTaJeSjjMdNC8M1e4fLHbUkbe77B6hEXkUWDG5x",
  "key12": "5NPPZkaJsmTdrPDWFCFd7snAm4F3BiWXTSfsV2ZZhBsjLLMukMmYxuiEHfxgkZ2vxhGnh3jgP4yzQcTnP1aa5hh2",
  "key13": "51qcMGAocmjTqZVYz5ZZfnsvDkWvYeTrFJJ2FnA7NuBMttLwAiiagoEq3ngYUSfJcnom5M91DeRvnVykfgFGT5Lp",
  "key14": "2LKaqzU6h82ZysZvdcPoTHhhMZPzRrcmRX8bgvzx7FW3vtm1BZduiwnwdTioK1UmNE8G7XPqkRqsgZMMYJ8LXf1Y",
  "key15": "rt9YLPRDAwz2XUR2uLS2idfiSij4PPscR9d3ZY38tFQvWUgegPxjf8tNps6PXjA59LYhiX3X2PMmNRGKQX34sMq",
  "key16": "4XAt3hfQNMi7iQvHHPMyw4YiiXhMUs6b2yjA1EqQtVny1vSFF58qDUwVhpuDiH9gYsc4kp9oSkGvprkJqPV9gaHf",
  "key17": "4CWAbWr1yC4zAACtKDZaUvYLtw7aLM1ht3GcYGwWd45cXbDfHg8smu742fGsNJXfpSMzQSUh9Kr6xwMxgiM95UrM",
  "key18": "3q5ctjFnw2dEQydQm581ay5D1QswT8e4tiY9DxPYMbCzpGGo4S7cAqA7rvNU3UNHucCEogobwCYDjvMZHcRcfvfj",
  "key19": "4DBnquxkW9938qJ7ZGNavHrWUdeqyxuXAPD8VeJeZtoko9ZJCpNGKkXgty9gUcYm6iHRqFrKE19CamFmAshFicoN",
  "key20": "4ZWPywJyCcpUzJ5BpszoCrvEYms9MBgmKuWBmAZ5DunFYiwbdDiGU21CBWEJoNLC3mcra3pfUNwfjYQbcVM3fo2R",
  "key21": "2RzKgoGccgMameTX6ZX7G3kZ421ZxpZz1rT4fcBJM6Rowc4detszgaJADTr2CBvzzcL9eJ9yg1msJ2ujELE4t5rD",
  "key22": "woKsNMi4SX6Hpd6UzX3K6661LHQFimqbTX1QAK5Km4f8dFjKmXJHNNMLjDYJJaq9kSUuyRkTTtTGnXg29yywexo",
  "key23": "3bSHsmDs7N6ya4g1sAWnQvrfT8y1jBad9KbiTHycGqrbRoWvno6MZReqfwFsieQ35qE9fhYGHPrKPHrzvbt6MkQe",
  "key24": "2kD11b25xqJts1snydoShGgWLstMMVaEc2gRFShnPDF5se6rCKw7X91KioWmrE3F3q5ZT3GSTtJWoxKtBCgtEfxg",
  "key25": "z22bidqC5hp5WUjUvbzk96Yk9i6U4xarvtDivzQ5eJHB9oD65EBJjsY7kZ6zjmZ94ZWioDnJQLJada7X3e7V9A5",
  "key26": "2P2eYY5XaCB7F7Emkg9ndF7H58MmHKB2B5T8HfdRq2W6CA9rNjyiPSusC2Zf538pxTzoPGP3xgP1rfpe9VyVrR5y",
  "key27": "4qvwq4uuzTUGoCjPu2XtWmiyHNxnvSr7WtC1PUdAkSUDoUs7T1p1SCNA8A7K59V7s6hS7p67gG8jmgSGypjqCWge",
  "key28": "4jw3QhqU7CkdvGK8C8hk4b5FQKGWYA3Z2RUnXFjBJ5mEEy9JMHmqHiFaHrdVyXzQVGRuuCpB9LvAgnWNsM5hGwAm",
  "key29": "QCyYfrvA4o9oXYV7RVSXoo3X5XCnJ65bjzLeMGVoetUujDz1NHuRVxm8SgwxSgQAdZkXKswzt6esmre1e7eAwxY",
  "key30": "4SF5Sme6rkWSGJgVmkY6XFnPftPJXwvKaWrsJYRtVYSjYDeUNo1LKBB3Bc8RCu61PtRJvsUpLBUcKM9f6wcvK7pv",
  "key31": "4kq3ru11aw5eXUmiaewHzqGF7LXhhTN4oGvajzY8Qhi51KyUaqagExop4zxSUsSiovcCSeEC8SqafP6hjQM12vGf",
  "key32": "3gxXUo6TyymXZpTEf4oKr1dXYAzrP7Rbj7vzyzUtKkX5S5u55oopCZcJMAfxG8dsEHtWSabhHw9gDk3jbFvr79KQ",
  "key33": "2aE8b1Ny73VshNmn8YNLSRXCt2DFvhQhkXWzwwVoNvwQivFfn8rSTQzHtUHf7u2FFNBG8zyGYWr9gmWpxqp6dPYM",
  "key34": "NKDrcK5U5NRvLU3NsMxctepRVUQsryYpvgBxjEMh32RsYUkBYN8fDdxQRxoHcYM7f7rWSpyoR2HLNHwtYCHavJ7",
  "key35": "5oXjW79PFm5fBshLTouobJAgfQfFosr8QQaVW2JqCmKg4r3fa8tef44MyUtkBuX5niNqMY1FiU9kefHeiyeZB79M"
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
