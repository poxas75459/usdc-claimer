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
    "5ygJVgU2rET8dyUKVzJcmKVWEgYbavHJ5kYzPu2UqsNP21mt4yU4n2G2MKSSp4Dju8GMEFXM4TYJeAi3Ns4gXhsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58K8X5rTuJqVNufPVhgnVJPTZiNjBm9f6zdS783EK4aav1W448D35Y1XQM8wqDFEfw7VAYr6x5pWLGmErqhMT6JS",
  "key1": "5hEBW1H9SdnMc7G9g1ekxno6UDukS6FVhBUib3Pa7RnfWDxW5ooP5UU146beRDNB7Xtwb8fU8b9pnoJcVai8zsvs",
  "key2": "2fas46DJb6frdtPwJx4QwhLGZ8h1d5WfstpyNXuNFvfJkn5nRadL9HBtsy7LMgmDy7GhMCoEj8E7YoLztcfMdoAD",
  "key3": "2bnVrHLoBgH5HKXYwpYabUgK3YV9zdqVv7ThQGxKADN2PmVvZP7nvx1gCkpHe5HCnFnfKGt77JEg7Yc783EtcBa5",
  "key4": "5zpHUgVFxS6oSuEZgbxYyFJCo14MjMmUDLYswpZXV8gNcWhstk14HmcN2XZDBpcXvF53vWVezHdDnFprcRcw4wmo",
  "key5": "5965edHQGw5d461xYEfbNsSUpRWZo1cSu8kVwviKs15NPpRFVokPdK6d47hRUbhfFbt8Wr3TgNFE6U9Er3zqX4Fg",
  "key6": "42oExMUgndH7tUJkbysaVzduCvY1EXcF5RNKBF2K5ibHKFqZtUHJ6neRiTnzU7LrmL2DsmfoySppDKJ5TRXn47Cc",
  "key7": "2N2RybmYqjP1HsokFt9iQfEsWFUDgTe4WAtmgw7ZQRnYTGddf8NpJ6pTtu8GRoFB9NtZwLT5DJUFcwpTc2hcQbWL",
  "key8": "66AWs2iqxmpfwjuBpGvS3P5XUrjAUbGtmNXqexLQP6JoMKcNTN8v3HBKHYFDLcvxYug6C5jUiJN1WKTJwT76dmDW",
  "key9": "4BUSSUXHJLmoo7HmMR6wGSCC5js5xYMrWYNbE3gg9R5nsN9rT4UH8sSo5aqhMrYuHgCrp93RubMibpQqcWqNT97N",
  "key10": "4Q72sB8aCWfuiTbs6bJFPzRCvycoRyCHm5VfVRbM8cNxiNDZWcN5LUpyNg1fJBzGYPFpLi2tBrPrZRSsL6wBV9EA",
  "key11": "2MyFeCPqqymTpT5Y3aB5QPjEkGn6SamvAGe8WjPZnTJYE8EGg9uMm4XPUAbo9r7WNudnM55zqfJ7Fi3CTxFxX3sn",
  "key12": "31q4FDZmrWw8qE1hNfKUd8D6swsmB2k29cEbngeq26heaoJir1F4ZetVjQbFodKaXr3k2b6jFABHYMuZeCffstdi",
  "key13": "3pHpWRmVMXc1GdL1To6ezoQCdQF1ggjqWz4jHznmuBVFQ81sYxTWCkUPixpdYFscfMUZ2xjFyNxkQXWUXf5XJY12",
  "key14": "2eAgEXX6VCk9HBHREhC5WutB86BcvK21jXQd7U1dr5Cym9kXPX8k35fq9PfsojDWqbDVLbuV8qvwy95vGJ73yRv5",
  "key15": "4xmccz1SJ6VwwF9eNCcqA2CdgdnzX2vaz1vWTvG9quDwcSuBkni21AEZ2VrKaT2n7r5DerydAjmdoMX8GGYwMMH7",
  "key16": "5dtChXU266T6BNYcdmq8xKYtJtBYZR2FsZMcq9u1vJC4okhbtmBDXzAyxUjE83NR3vKCD1KxQbqkvZCP55D9mWgZ",
  "key17": "12N86xRqLCxuXgMW7A4iQ1EJgeqdw7e1vjhZ6BCiZaqiDWexiZs8TE8ovvetoNMioME6esWrMP9ndmsnZxNRsP2",
  "key18": "ELr4CagnT9vQQSpBhV5RDiodiKadhtZ5JwMb7nqPgsudaJZjPZq2i3EtD1ruiKj3UnLgKNX25CUwuX94QZQf3Df",
  "key19": "PEDyGXrd2PJKo2phJQMGSkF8kwdH6aT639PFzHbg8CJsdgzMLE14DwWoSnat1TGjznaWRsmFjwABoLJqPhcqvh6",
  "key20": "xupjqvmVkmudG7nXRhHJV5nDMcM48xaqscto3LfyP43W4qcmQcNqeBgyD935EpH356Q1S5Po4obFw2v1QCXys3M",
  "key21": "5kY4uXEqZ8dyn2AVCn72bE6X4eWuoNdqvDt2uLbDCY27qoG86noCtUjVaR7zmamp3YUMD5BUn3mKWaEAtLhJQj4X",
  "key22": "Piu1vqp8YmqS7H4p2dYvgi3rFPT2wXQDhh4Mq5KRZjmye7h4TFpm9LH2Evm9JKBwdPbF3hfUJyuCu7xzFcpcwzo",
  "key23": "cm56mNyyz6vpES7ZQ4FME7y5e3DUMG9aJzbCRMcitWmLhy6G3sqYKncUyQ4J1diAGdvhqFzbY6eJk4iU7DSvTJ7",
  "key24": "39p8QKJM7fz7RonFqKvLa3dXKHFQ9PukuLKBte9TKLt69Ru5VcuMhFqHKCX4bk7r8JUWWwD1jMHJ18ZHMhk3q3eh",
  "key25": "3gXHYXXV6be5ijt3gqCprhi4YmZftmR2SAccKz76eRDnMGhC7FXsuNrZz2zavgGQwCV33TgJmfsLMdFkUePrLTC5",
  "key26": "5p1pdJfrHJAjBig3JYLGscpXQGdYYvdaHsqQV6YGDRiFUjpQMBaPL97mu3kvGuu92jWxCrCTXLZifS2BZChfPP7i",
  "key27": "21uuzxBsrvKu5AVR7K3j6MuiBrBo8UUdk4eBB2dSKhDpuMFL2VN53MEZM6mgPCp1gJSyzzXcA3oLyFB1YAubnLfB",
  "key28": "Pjh6CgE15sSTvesJqV3gW74G3kXFLQJopRfTwuUTrcM5MQeoCPPQd6sWjUtgXoyurX1r2jfaSq5UZECsukNE4vR",
  "key29": "2cLAGYMWshFvVak7f6bEA5tJMm3W4wt5NHZW7Y87rigkV8pwc1eXhbSbfskSVVN8LQgJMgpYVw8qUHxYW3yim296",
  "key30": "2xT6aXmYc5YZu5rNuMt9LAZitW9QyuiykGePzkYiC2HREgC7AZTpKCrThRFuxVaWjbXfsjqFB3XwgYDxaGwkGCLV",
  "key31": "4D3BV7VtHH3cnRLQmGxcswBVMDeGo1bNUh6CiXXivgVnASH6eg7cZiSeZUT1pPDkwK374qiFj36HjbELBfdQdmEF",
  "key32": "UmkudsP7DtKy2D2c8hZzWG12hwGv3LRDTU2cfTgXLo1mW7C86HRJ7Upd8JV6bueUW3YsR3VxJioJ5ajaKFd4Ep1",
  "key33": "4MAngN9paoKLkB3kjofD9GsPLux4pNCsJvWFvvD6YLFuGDyfaMFQi7NSQy2yugXEfwX8PYouarYZDZ7GfnH9XAeT",
  "key34": "3GXdehuhhRgo9DbDKUpLFDbBHVUpXwLLtYVauyjznrFNyuWnShxBvBMQBAJYsBvXL2TBcsUSZeFLnpDzSuE1sjA1",
  "key35": "4MkyFcJjSUQ7tDawKy5jc2nz2geyk4KfKswkguBAxxxgZMBog46FaotbcomnmC1pL6xhBZJz888wcGz9fs9TjjNZ",
  "key36": "328eSXGzWQJSctNJKH4GGYo8Wo44ihWEFr9yNqn2ghBYVk4T6ZSJ4oncWBzuJfbeDkMaxsG5tKnHsJv28BXGd42m",
  "key37": "yEcwJyotSvz3eVsDiS5HaBLgw9cJP3rWQJLCaxoVAmcEPgFb79uqr63wBSDjzWHZuavbHU2ccd9VXm5sBJ1Y9ge",
  "key38": "5vW3oP35W8zCNp5zAKFRrZf8ET1ke397fiTcFZwN9X37mjjPaWyZPSVTsedn5YV2SqmrUhStGkiKyaLb53BimsBZ",
  "key39": "4i3yCBnmWTi2chUTdmgARTY98RNFYhcEGyrRh78CvMuRBDhmLSuESfBeqGYKK1ZAg2RpjSvkWD1XVvhYeLFwpznb",
  "key40": "4JxwDKsd3eautmK6NtsiWyCs19vm4qJ1ghwA6Sxoru8c2LyPQH3r3uvnzGaMXuPoEs2sAkdNihwgPqCF9fN1Jpq8",
  "key41": "2vh9tcomzioTwxxobAMhdFcVsW3ysVQxhJHSd6VMHJ81YPW3XSHqsxDr59v15CCqbPJVLMRWCzRUz7V94UMSwYhf",
  "key42": "SseDMmRi97m44QwBoNw2qVjvWoazjA2XHWLsGzY3Le1CWpWrV5ugoadZk2HGZausDpaon1twywKLvP37F1Vj2Pe",
  "key43": "Rtj9JQ5x4AwsBwkey4SBztQwVDrqkbqjirbEz5WpetpJaFmgx2aatqU15ied5T6SFJTDPLd8majnETdVFQpQniL",
  "key44": "5GgG1Fnkp4EmYfmzNvs9oqA5SbMyEUgcxgXERcu7YEWSRrNZS7T414weAxArAMHnry5JTmxAGLaKUn2ZnT7Suse3",
  "key45": "2pd3exkTWEdRy1jAF6Ww7hQGjn5vWxN5e45RXZoiCwdzRhjkU8kbESgSt6fyn6KD1LDYqkjpwjmTy9QzDAS1rCra",
  "key46": "JutC5ruXd3MVNE4B3hLTKz12YMD91DcMigizwJAgkp3yw4GBQMj4TsZ3n44UWXgQQPPMa2fJd55oydFMB1MVs9r",
  "key47": "2bwMBLrrpXuhawgjDsdagxQ3Lmc5R1PiAQ5z3ynTeUFouAP2dXZxM8X4gf5Gwgwv7Hc62sAC93skTyBn58LcZjyC",
  "key48": "55f8U5w7vei2BgkXEcHCEJeP2A8sUSCDcDWi2w9nToGkzTckd4BsqJZtx7x9AXCZ7rxjypAjBuWtqNRErj2ETkik"
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
