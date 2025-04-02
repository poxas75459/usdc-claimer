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
    "2tbzvof5uHZK2L2Bw2HwmWK7gNkz6vP9JeUU9NqS3VQPdukUMyhiiSa8v3Jud527hCaNtuwMXiSMESSqJjKXx72g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423eTrkucV7HSfZGXd6UHSvh5DSVapkLUsx8kcFRMDFHak21D4rLsha3z48GPgZ8XSDi1oHKtNSR7WjyJGWdhSge",
  "key1": "4Mm87f1QzBd5S1m1JJHwFDGnuFJAC6HzU7x2MCTjj4cRLmkbXURMX3oxT6VCqnRXr2YXtLBH8LhA7HFCeqwVH1WJ",
  "key2": "5vNBizdYKcau1AtmD77SnZ7koNu2uWi7qvDQEkkzrTNLrcmyczyZz3wXHdfRoZ5wcRWH4zVJMN8ooNmSGHXd6Rnt",
  "key3": "3Jsnf6fW2NxgDiWSReFVH79VRSQUHnqmQ5zj72Pke6me82WeTVXg1wRueBjVsJ1V9Mn2s3BV84CozVHoPhzLymQG",
  "key4": "59J834KPFSacGkw55ZfYrwmqsY1GbmAqXHJPDoz3PU3Dmdk9xdDoANmezDJXvU1LbGap1sszYg6PkyTMJujpDhmZ",
  "key5": "5ii6czWyfnZDz2gww2vBqQNdM8wuZ7MM9pb6VDntYCsREd3W1TzTBQpoRwy7gbQ4UALqCrGC47q3j4Ymhd7Bktof",
  "key6": "5mrT664k4Quq6XdLj49MhCzJHPNFcJU1riPqzKp8WeUxBhVvVBnH7vFoyh5zyvM2Kph4i9rnmEZtu4jqBEoXTs19",
  "key7": "4ULkXFX55QJLrmG2ktgckB7eRay3eV3Ks7g8vDzbNotcRHuBEQRcd4diYh6NnJ1xSmaU3zafobToFWq2xZTaWfvs",
  "key8": "5r6jw7J27WwPDUd3qTTVVEapzXtr9FPgDEP7m7pWFi1aBVxAqFUDT6WcAqKPtdXAs8wUr9FEs4y7XqtqayCLSLiG",
  "key9": "2kWoro8KqLiD3xCUdFzTgW2SY9yuyX568wvGFWTRhdNEMZwFEPtVN6BFvgZ9pCNvFjKsc3N8EhHjNSyoe6gzdxRk",
  "key10": "4uo658KUBKFoUsMziruwMXBJty2PAhaFcWD35sC3aeubMBgYsZqQryU1SY12kArZAqeD8mQqdYEVY2YZkkKsgdVZ",
  "key11": "2Bibx2wHtiGtaoXXD8fn13tcMcRDJvahtzhfYqB9jpmdbk7fKciHVvVJbLP4cLdRV4RhS4UkZaRNNC347kD9Ssce",
  "key12": "37gxkRRXGsWhVFtF32Y7mi6NtqPexJ56kdQHQiuuVYsRUvDUFL7TXo3S1ciZtQ9NJR5Q9UtJbXCMjbAwbW5gKLMQ",
  "key13": "5pc8cPdFk4npzCi5BqsPogyanaskxUCrXVpLGjuST49LKorBmpD6oocoY9J3vCFBiYK5ePy3QqF7pUwgAkV9G9oo",
  "key14": "257uZQLxDRH2x4qibo7nNQooq7xVmVPQW2zszrNQ91TnQurZrbkrZb581N7ZpmqgV3qZ9oF5eNndNgDvXLQvENZT",
  "key15": "3FbzKSKomkSTeKkRVHd8wRG2HG28nJjLfcAa8gwtE4FTE46LkpYRoYUatNFNyT6hyHN6B2pUeoNEEKVMJK2Zn8pM",
  "key16": "5E93bu3da2vXTJ5WG3qzRhfnfsCncDZq4z88Sm78YZx56GqJGMUp7ajdjH3BR9j9gmyRmwTgwgXE4u1cqtSU8ZUr",
  "key17": "c99T4p7i2cJVGSarw3P8MeYX4VqsdW8WTcCxo3HhCUr7XB3kf5G82izYhVqMi4Cuat19Uq9soNHtFandpZ18NUq",
  "key18": "2nSSJsLHKQSbHFS1XQR9NuhwMZxNJMbE6RD96DgsL4GrE3QazpL6j6wKH4PiU2ZJUs5BphU8M4gBxo1TnL6YYeHW",
  "key19": "5aCkbEMVfWgxDifKr4deMZ1a7CEHdYY6bm47aXhxtT54XHNENhMgCKmMDJsezH7F83DTaM8B6XRi7Pmy6AAU1e3L",
  "key20": "jpycWXm89aob2hbWm6bM3y2VZN3Q2QwtuDWKP6HisB8QSJbNJZEKNb5dZurrMec8BZjaEQfHz3Hgzt4aGaizcFY",
  "key21": "i1Ns4ptVjxkVoUSB7nL6tYmmitSAgWRe7igHkG74uvfpy6E3ciM3rNT99E54qBPi7CpY1jvnhgZ2FyzTJehU88y",
  "key22": "sik3jhX5oGcBq58xnE2nnf7K1hpYW8JaeAT3fKnAuMx8gE2k41udEP5KLPVf8v3G5fPER1rwVMc2FFGDUckvEAi",
  "key23": "5VLiWJpV3qmngUeAmLdzqdGveKSVKmZfwHkcqc2UwUhTsHnYHYbTo7QKVtkKAV66vA7YfYL1YgbuvUeachFjGUA6",
  "key24": "4qy2wUNzRtCEM9sfDz9LtEzfgPqAUUQXdhow8cP5kXvNtdx4M8BDio5PkHNAkx3AkSGVZdKLx7rMLYKwMwpjiDRj",
  "key25": "55oyEWWmFg5BttDMBSU2VvkNwPkbM3zKDBntJUWVgmnig5KNXhp1R9zDkWAAY4ZoLQHsNhiKgqS6JUzphYzpoYV8",
  "key26": "5HNbprjweZhYPNLtXTwxnDV6bJkqrrcED6bLTaKxaKT3bgdaPxmMvvDzyukFJvNhEV94Lh4nYbHHw4H3WVYohkpc",
  "key27": "9foScqC2HL5DrgUnZtLjUjuKsbmohadT3GJ2BKnEapNqS164cytCduvCmjNPngjSzveTKmhTUSgPWixWDXfq7wo",
  "key28": "3J79w6GwdaGgPvKU96ySkm8uf5yzcb6NuTJ7bZVNiYyZtm2DzpAcXe1rhs7icR3yMAgkmsyWViB3BDgtmxcpMfbD",
  "key29": "2EWjyzRhbqsx1pTXUepjZRN9prtqQCFacL47CpQPPW79T5uwjkiEPRyaH2zQqDk5xjfsHVN3Morz3cTGH24Nigoj",
  "key30": "2FpY1jBrwgKbkXjBWNfLcEQJeh6N9DxLzxJDjfXiiz6ZEJNhjXWgob62GLkHeED3PN8aF8R1q6kGquUJp61f8Swv",
  "key31": "4kxtZ7cd1piFNJ21hSMWKKU4TJhZuYucYPEUCiA6VetS1gT64nYZboYQk2mnTCfy3B5ZprTzzVVsqiqs6TjBSMCy",
  "key32": "2s51JrVAHQ2t1cC41JTc9wSgMQUctJXgqXcdi5PMrxrcbSgRCe6xwcBm2WQa53YPi3pepLU7XRuih3TnWcaq3hgw"
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
