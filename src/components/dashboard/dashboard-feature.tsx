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
    "wAFSv4PwVZuDSSTQq63mokEZj91LtJLoz6Jj26tfguQoowDpSdBTwUzUGPUEzEuZ5ZpyHJFoUA4Nq4DEWT5Rz4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jc1wju6Mi5VNtJAJsqov1d9Mde5QWz1hVjC7tUcfqeFMXXtNFTRVBqWwXq6TiQ2BGMUrm4PmjjQ9EKASNjvmT7",
  "key1": "4trAsLVX6SqWRCDsk5PZ39Ffr2RcAGg6TGaW88HzMgG1koSYTuZ5RKP1sb5je11mb4yUXPZFmE9H1j9FqzAG71ME",
  "key2": "2nQ4u2VA3DAJSLyLx9RqgK2nQSdKKtbzj1fcPkJfCeX82gL8JYbSbHaWHar77uY8HniU4UpiTQjdwyXGz37wyxa7",
  "key3": "fsAWvanfjEAfU7L25gGYDn2VWBm1ZX4MqPwUckWPpMpm6NTsDuJkQM8oCj7gJWsHmketWGBzc9LzXRW2HBhF6vs",
  "key4": "33VAo5jtUt3m1jdAcXci9a4xzvDn2X6uj8e8EFoPy6ajCYRt9XDxQrCKdnaCrd9kv9aZQagKxtE7KJSB6CK25NDi",
  "key5": "Re5UdjNfgbVHJvHYzGegDip1tkTVzS8bvdDfJt4aMrrhot2hXY7F88ftqpd57wjpURMwCBihspe7A4YCvNjoQby",
  "key6": "3VUzGZLN2pvMFxKQFFxJ4smaBXeJEpyiF77b9QFjcrkt47CNeuRYh94u7CcXKhecWFbxcM1G9BsEhYHiSzFWdvRc",
  "key7": "37JC3AA4PCe8ASLLzc2NuaRc7Y1nvqD3UF6o8faaCMFsyBHraABjQ5eBsbdNPE2CSJ8Z8w8uHKHRzbTyPz18T3gD",
  "key8": "3edrxWQaAdAtnunQXV8fBkwz915SsLJcbuADTAVxpnpd3yZERB8qTwRU6SKeKsbqikRHL2hBW9xyi3AgE5g5wZwv",
  "key9": "4oAEZfPi6dmpeXfgohYgmQ1F27TVYwZkAWifVTrBbNFAwsWHD7xgZke2gLHTbQfPCVWgXLzhLQZvqqXbVXDEqSP5",
  "key10": "67kLofJjBWMJMbADyMZJDgGcos28Pg5wjJ4qiAcSFeQnrdD8uGUrES5muaPFc4wHewQHqus6ti1XRuqtJiLdpnom",
  "key11": "VTujRduRk4VvSi1GAZaSgB92nZuyyXDDKsXyTRrpcL43DwnH5GXkRbu5yapV4TznmReGkajYNYT3zsphwVcBzkU",
  "key12": "2fPCiS5TVeCEfSoqJoM39zLicJRfNXwTWRZEHjxKwLKuWXt3mLF4kvFsKYJuBQytnk6ojoUaAzYGi9UyybA3cAxf",
  "key13": "3r7DJVFkZ5rj7pqq4LEjerFyk9VjcmqgUgLrokgiF9u5BZdZ5Q6vMWNWWbjLYJqFoqjDr2epzMXhB2yj8sYem2ut",
  "key14": "4PRMn8TURfNXpP6cMnf1uzZraXM27Z8tz1eXatYDnqemhRebVakHWWi5cBJ7hL6ibfvZi39PpHg1BC5gLCKq6qhk",
  "key15": "3VDLeGqq5haAagCvX3E1LzmzTp32CiPq8gEadccAVwpwBMBFvUhSWHr3PN7xXP1K9AuLpTpgyUL52bTHJmv9sZ5w",
  "key16": "2TaJPGTu52atBZnmrJR1STLe5NuZrdsAFXZtCeLZrkxYunGPLUpHxciZokySxwTFUSD6C54UdqFVDa34LQQ5aXkc",
  "key17": "3u3bDStA4EjKpBod2x5VMxzYZGZ3edadDvrzZkE9skDUsZ5RtMerWjMBEskotro3v3YawDX7sh3v6FxLrq7Pr3pG",
  "key18": "3sWhsuG81RM938BBDsRcEUgW5ymrfTxhnW1ZnZRSXDM62pqSQ95RnZYA9dZDwew6syYKA9of568JxeHGfhiDpd38",
  "key19": "3z4fsJ8cfWp8ephQjsUmG3ibMVnwX291T49bD8vzv87qzRHbLS8uMMcxHjCWXhNfFq6JtCiqo4hRTcjX3WTCCScU",
  "key20": "eGzBAq4SjnQumy6a4K6S31C6STQDt1W3kkhad24unDCiZcoEujiyx7eUNPDirtGb2tkz1TGjYdhqrRWqufAsFjQ",
  "key21": "4rKK5fM2hsXW75BzuYnQheePiguBt9sW9ypWSsizwmCQtbsaEdL2ccTidbsCQ2PW9F5AgozsTRYqwgEpcbpgbRwC",
  "key22": "4hP9DaSVqexkUnmTyoL13upyFmogaCFcky1aLPwAeGAhxQtWDfh4Gm6bPH4VYpSGFfM6cAN9sEVFoTFMGBEpmtqN",
  "key23": "yZCc1Cm3qcVpatxb4FmnVfyRi79Eqoz4NJkHE8KZ4DJUpBUeeZ1d5JeAsG5w2NhvqukkzBknxc76A7EbkwJfDgn",
  "key24": "4yExSES8G8vdkFRieYj5r6qzw5P9tTfNtvqLX7eR5jVjbTCRZcniXE9u4hP6BqMHGRSczc63oG8yTM5b6sX5Ztp3",
  "key25": "SVZ8YtH6mxE5kBz3zvfaGm798C7UroprfBFNFrmU1WQNaDoYjYBLmq5DAiMJxf33MeWuLnfUTwHSXs5HihhxYdN",
  "key26": "3e4mWEUxE63A7PSLGkMmWFxq3ShYMK4RsjF3m2E8ML7GoS3YvDqB8mmXkHYHn9wckNm9Hz9U2mMR9M4awFgyJmtN",
  "key27": "5AZbNaYZ9cAFw6x3dXxteb5ZcpRHzaQ3VDvo6KLjAHD1s1hAAhTKYxxjnG1ynZ44sDPNEG6fkCWCNM4thLayY17e",
  "key28": "3bXVqVWLv5nU51jCkWt2aG9spztDgGFr8w2y5q8RUrdrERgdg7F4bGsr1DyxrSDahoedVwq5baz1B8wTQA9SieXu",
  "key29": "2h5WJroDxeaRqsGDtzDJqYNf1pxADnJDhf7yTwebhTytHND1Dk9Xsu1UYoYVFViAuaLSnowyXN2oqaTCWMMymYQE",
  "key30": "YJmtu8atQVxiE9acSHmypAuMqbcVwZp9basQ23e3J97tmSYwap56q5Ge3dFoHWypabnGL7P2XgBuXsE9Rbrehpo",
  "key31": "5B9UL7x7kfbsynYeXr292XrL8Bo9SGsp7gLSJiisp15gmK6mdMgAgJFyVZ7VBU6bjCsCkNa3XQBmB2H31s1rJzSP",
  "key32": "5y5oPSJsr6Vwqt89fgezuzZs3yy8f9yJMB1LePy5UyBzfdCTXECBhvjgvznq4n1fkZpBXFu3FPeCo4yXGSvuAEFR",
  "key33": "5QneoQCUDyjWwDtpa3BYBG8DWLgYXpLZKaqhyeMZTU5YoYfBPt8tMZtink4XL3EPeZebtE2nvTFbY8dRqPh8ntyp",
  "key34": "51fiSQuPomiyGE9yc2Jd7yi1ZKVYLSfqjEBL97cL9fDSYyLK26oBh8QJjBy7ZKazRx9hsXEBYUQ497XUr2VSxnZa",
  "key35": "63fMrQoGuzmVU1FADkjHWmLpNbNenRE8HmbamxzHjdBKPLkW4Kh3bWanNdPHoTz4PLzpGkQJdtZ4tXG8Ke47zYaL",
  "key36": "56L6TimD5kurhbmVpEkdibj59zvwzih1fimpXPJtakmG2BBbu3KjUR2jNophEkKeC4cGhQqx48BoWrtz1EronZ2u",
  "key37": "53Kfi9pW5x7z8TwCffXEyCRSVZy4nCvvLA4SNyFJBaLFpNscaFDUU5GgDyzAwsB5Zz8XYU5MSh8zaRd26mZwV1kr",
  "key38": "3LTaKdTAn2Q2SjWCR11kuQcMaab8A1dFmAHb8yPu7u2VWexknV8wa6oppPWjnA8ttQUQwH7MfRjxcrtwtq2eLarG",
  "key39": "2JsoB13nz9N2tRKBvrzJxv9oBJMF7nyRqyHv6ggVDkmfpxGnCwy5rohfS5xkXLfZmNxcgaQ6TFqeyFDAWnXmnehW"
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
