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
    "3RFfqishmdK9tfCnVaBjCcrhoegVFwgS9dMAKsFu9DqdatEHDEuSKjK7NJhV39apLcsxQYUpFyn8bni7ENJEgCWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzK6sjVE5aW3VCfbMhLhaXFqXg1dqNPB1EUE3QazDy4rxeHCj4bHcFSvSWg9gjPNWA7xEWRbxw7BabFsafet6hK",
  "key1": "5Cu3yPGG9PhNDZ2YnVYsZKRCckToYZrEWwyDYTBjZVR1JJsa7thRdiZ12yi4Y6LC6MTLFDjfW7YnrQSxpR6LxkG7",
  "key2": "3HCR4AtiwrLZxhfcMwYTTrhq9QmAX5QQqHpF3f3Tz5wa7aTwdtB2vpfh3nMNMa1SD9K3iMZ4UdyjkVV5vnsMDaEn",
  "key3": "4LSwp11Uiypxg2ajbWF4tR3raynwCQ3hHyPmA4J7DSGjHNgRbmrjrtor2yrxecf2kj2gBKyekyynU4XnhAjbdAeo",
  "key4": "2musGshUnJMKwtSs6hSfbyv9Un7m5xY1EBcwecisgdyZYv6MRkAoaXzrEWjmuLPbeFYB5q7zYZtz5pGkpTi4nrC8",
  "key5": "mMySqqMHZRfmTxrrwW58BzFdGydCqYVxwjgJYLFTPuk8BrUukkdJKbXbSHJ64FhxU1RA2tFHwa6vge8MiM5jTtQ",
  "key6": "4Um7gbcWHY9ye4PdDp4U9ALpVe2nNo6ovC6MJJFnKfdLo8ucWNHM1mZf4bPp66xJ7ZErnznt4X9JHrEXb2R7HF6w",
  "key7": "4CSQsFDQeG2vsNPYrKJbbkf2km9VxQ8YLTNLC4LKmxMYQuus8qUK6mNkirfzRuXgZjf5sbktTQs5G7NGyXAoyTSB",
  "key8": "rBgxGQ3WPpXjvuvadwadVuE8Y6H2mW3qJpEDUiTrw8Cj7fH76K4HZA1sMBgMh9HPJZwcpgWw23UFvH5FgDDsxkq",
  "key9": "5yGdyZtJznrt3FLDAL87YL7EjJABKzqrETZ8QLJkCBGnSb6jXgW6FZEnaTDxHdPJz5Wt5SMeSFCwts74RFYdiq3X",
  "key10": "agJqSt9w32WuYJ1qTfJzq1cwDFBqnRJZHcfFNRzU1DNWBtGKPMTStjf3Ug1zKCYpg1Cun7QmhuvLDnTGfuVTcTE",
  "key11": "563Z6FAsSa6X37GXKG9bzoK8UfQjLitmwoDTPHGTTWfV8vdhSWbZYw3VnaaZeZF5NQD8XDjp3LdJ6QwsnNory4Ta",
  "key12": "4Tc81mYkvVoMcyqEzvm4rLWbRPiviRR9esoa7ugWKtpZbpw1v6XTwinX3D8HRnKCd19dNe8nVVGh7XXPogs5PsNn",
  "key13": "5HRpQiezi6CzqP9i6Lq3z7UUcagP16FU2ZYYGUrHPPFULxWahwTfZuziX2JRmr2rDuS4FvRcgshBaZQgarMQUMSz",
  "key14": "46QTkiD1zsbpuqAEhA8p51Woz87PWFU2ebuVUzubCK8rdHdaaviw51V4LL3ZQS2CTwLWBpfV6ic3RMe6GeEGEAFH",
  "key15": "4qPT1khUb7hJmJdWPrrjMBrBNNEuTWaoBWWFakdferngJNWiTR512Zkhcd8YAgcjZ1ZUAzKpqzDESWD1GLKfRCc3",
  "key16": "33g4MVQaHTE13WsuyDWCvBekJTvbA6a4mgXFzwH7csuYg2oyZTeMtM1QGzadEirFonoPeCQde6gtTv34Av6zidJ9",
  "key17": "3VG8UykLzYFb6F7KJTnH7EmQYGQd3L6zDmDxJGwnCph1fJuKh6jmtcZJ5tEEQDrTVtNxZRN7rRzjeb4xubKR9bNd",
  "key18": "3JxhA8PMgEXCWRWHpQVPpNd4w7RjfckGZykMQvK71FKyW3Rd7s2ZzbHwSdbJXdkKZQqxqNu7wLxmwDLz7fyYAzTv",
  "key19": "46A8bXmv6bJi3qa4HfFFb75dvRTANtrGHkcb7aF1WrbF8s6c7nGijL1ksojpMywxfGa8EW5DY9riiaoCDdBrJoDv",
  "key20": "4htvaznKevfx36LXkNHb6Ly4twuAkphgHuQhpyqpGLK3WSeuqAfgH3o7qFFERsS4SWYtmDKbqs5kbyggUx6qGmWN",
  "key21": "4XdsDyHY82g4jEfrEp9x7etDiT93ESNMwUpqNss5ZZEFY22o8zBSCxqdew3tMbUt1d4zT8iuWnzHhdwiMH7qMGg4",
  "key22": "5zDjUcq2tjbcc3UWy1QkeNmASPkXS2kPvnsjCwBDyxxu2QwXiwJr2suy1x2xwH658NjiQhQnxnT3PsbypQHrRX82",
  "key23": "5uvDxmUf2wXQNxVb3tHPV9mykwCTUDgFhfXCPAD1fiS1PMSDt13W76dm3jLvkogcYvsHrVWWbAy4xSY4D6tUCRkP",
  "key24": "yuXsVQjwKuiP65hjcSrio9uf8NkZdv7QYZipzHkGbakhJybJCSijaGiDJoJueWDXB1aQVFxLmZQfUs1RGWwg9SN",
  "key25": "33sPLcdSNPeKTCCmqCnViRdeidzERU3z68GU36xJfWuiraf855gCZzyd4vnPW4DnjmJjH1Ef7uMvJ9fz4MgrPuij",
  "key26": "36iPaUfPMtyKk97nEcvHDrLjQdHHy6ifcKcAebd6CEEvAgqCgBgC86a44nx7SECLACWPz54c38hjPkxyNAJ1Wesh",
  "key27": "3LWn146s7znv5Nd4SnuNJhwhbaVPSuswDr9AN3yATimRh2f3r7hYaek4wSAzYBxKYr4nFPrBRGyKodTbMcZbmBzB",
  "key28": "2XHuGG7HJKmrhyeQvR7RrfMarXQgx4F5BmtuDP6qeAnaLm67mPetHAtyhtKAiKb4sEMWDV5LkWtbfeenr4TuPLQ",
  "key29": "5rPf2vBtjb4yqBSKn3W6d8z5HWAmd2wVJGYpqTk9jm7d91pC6tRLbz9KB8qFVnD5NWrW1ENUy3GTEnT3rdvWnCAk",
  "key30": "2gUewmC4oP8zEAH1HKQ87YY9naKSchESxgCnCDWKk7hZkViciL7kHQ726iBf4zqPQZKCXrawWi9VPG7gPWTvWAX2",
  "key31": "4KywDEK3PvS5TydouM9jfG47SRPx9u4FHfrfSs35gQd32ePZRwZVoqY9vddUbGzcNetuuLf82xKSvwzvySmXf22n",
  "key32": "3Z8FwEZ2E5vioAr6QqVZWhv6RXY15xycdt6osfhyU5BnFC82mSDe82JBmTazLgDh2j4djyKJK9zoWiLh9ymEcxa",
  "key33": "2rqVf5VaVCaEqEgpLfPSSJjMuE4YSGT8yBpy9LDo5yT9gCUrycao1EGQv6UFxXX5cHHf2Fhw4ugm1HyAR2fAdJHf",
  "key34": "5t9KvNdTrgX4s7cRPKraQfgz3A4D8cEmbej1DSEQ1uXdCSHwuqWEtLHFcPrW11K9FLuCCF1vhJFGK5ZsdKki7LF9",
  "key35": "4S3VxLQMhA4PKnLftraUnd9KDLqL4MAXAqQW3SkDQfrTpSFVu5NRPCrTkpohbdQpaho8QA8XtFKNzFWpwHo1mozQ",
  "key36": "5bgNBgbMbKVUSXsTv9wqKttQepuPdbqJk8t4zTtG9iGwKh1Wrijg1wH8dFAxH3GjbSwGar1TcicJbPxWRfAeZiA2",
  "key37": "WKcPGJ8Sjk4bYG3zFJpeztbJiw4Pdi4bhaVNJGGgoWkA34cpBEwTumW8cHJSS2w48nuXKwJteCwNBknGwjkNZPf",
  "key38": "3yHHQciJUwfM8KK3hhG4XTK9vNcTr4D6FV5Sh8mcd4rWb9kzBqH8maaGNMV6iTezasrzMxz1MfVQ36tgaVBVDF7D",
  "key39": "yv5oqFKh62bvye5dvnQymUsUdnfnL4MLVZKp4CEWnU5VJ6n4N2vVp5vaR4e8mfdTZjKwmoKUr6TEPWTzvewsKck"
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
