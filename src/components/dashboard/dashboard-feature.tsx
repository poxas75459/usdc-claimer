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
    "aLzAEr5gWwFBbqrNCCHofmEtrs6baa5BcJAzpb5pbM9f2Jz2d9VzEBRA2qxCq4Zoq6bs2XAk7YiTUaZYw4fh3vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rkaDPyaaeL6ZQ6ydu6CPrBYVGwMotTmwQKVkUmG6gH6K94d9yA9ZQvmJVu1dBsaysdYvg4fP44dsNBu8uLEify",
  "key1": "36boGgxcd4WKeh2iFLiFa3WgUgBcDY64E2JAsXt4D32bPiX3pLZerYvhnUPxkTKCzQoCnWgD3fWdspQ3s7LQyys7",
  "key2": "3dTKV7tL45srXMy62XDKUZhnWFZ4XDwugg6v3qBkSxvNaZAWvdYT68WJ3NGwxAxhqarzCPWoD3qVGAhoTsYwwm1q",
  "key3": "5LmBkjff3YC3ha3FfvdNZwZ3paNfG1gEfNJPG2TTw8EdHH69uJk2kPiphg7EzWcbDHCYNBL32uxLs7KdftdgWPsP",
  "key4": "3HB4jE4E4unmckjxtYKngpauooVSHABNEkzHF2Pab8Jevo7cEGbQxwCd1zcMoYFNejcTRWiuZYDhLxhbzeBkhATx",
  "key5": "3PSmEh9zDEXqduXXFtTpDzsE335FKpN1LUEJvgAwgBTf49Qns8chKrd9Vi7YJU3KN9Ynih549zdMgbwe7YwGYAyh",
  "key6": "4uRoBzmPEYYoJWwZG5FhSBs3NjhZUyn4areLnD4GTHxWen1UP72ibsKmyQ1jKxJR3iqiSH7L9zvp7whJikhwVjhu",
  "key7": "35EAzZ2pQBPWqr5FjxGWf4cjgWqNvFPWSBa45sctFH28DMCmKmVnkveUYCxJoEVcc8dnFuP6UEzzYSXbvsQeGLfr",
  "key8": "5zw12Lrz7bETPRaWcBWQLYveZzgZxFsnyrBAbf5uCXcKgAAkSDUvJYZRqkpKESBvKoQ93YkDHNMwEFWGDh73yY1Y",
  "key9": "2ZQ2jGkmZGFeqQPsPr1tRu472Gk7S6k5om7dk3suucpj95p7eigBQa2DR4ATZTh3Z6Moq8hLft54HuHQdwSdnyyh",
  "key10": "4gYy8PDCLu91CwZ6NDsGR4VNJoa3tcKedLqk3D1WMiC5FzWMsZCv3N53mrzf2GeLsn5MYyTUxW3kq7XL89JDh5r",
  "key11": "4cYq7Y6mpcvTKoUHmXJMvE5dbQ9v5bKVnmGY3xVReiGYsmxhNMsf9QdXJzbCkkybTBaq82wbxejd6jTnaQ9DSSvL",
  "key12": "QQo4F2jPQeZgDhogpuvPqZjLsyD8fK7cuFjnecsFjkSToZzm2Vi1wAQUu6e46YoqPF7vTYB8LhD15PWU3hU7xSn",
  "key13": "35bLmt9D5HDvDy6Ns5F72rMYTm4joyQL7ekdeHSLMuwbi1U6SheKbXSiV96eVE4xHqJybQAqgVJrSfgLuBGnqsKB",
  "key14": "2sB7VB7hA6NYs2Xbc9tZ2aPnUr9H38EMueLUeviYFJXb5xG1qo6vszEA18AcQwJRGhoLSNhWDYiavVzJfVo8KRHQ",
  "key15": "5DGDyBRv2R7S9DTHrgLWMpArfWXedvMyGLXEH4T4qyWVeR7fcEA1cCWvVcSTDkoVfh3satdXGZ4KxhwXSZnQrMKf",
  "key16": "cwv7sC6WYUYQ9zs2Hg8Vb2194EXpjcAerdDzr91BzLYB2dLAsX7bWhikwiQwGgHQJ7diKwirQkpdBuE8d3C6Lbx",
  "key17": "5dVA6xNx3yjC2ztuge3ZdDJ82i7spQoikuSdsXfMYVHWVnCFtWuCgYNAjXnXZPciZiX7hcBqZXyCWuqgWCjoQRVk",
  "key18": "2BpznhPN8AseTimM5mDMXdhdVUyvs8MKMXEqULM3SPfNNxeyPPghWEDFQ2dM9kdVPikhYz6ESQvoYJj6JABmTEaq",
  "key19": "3bypyyJgrKqt7kQEEmNLBv7p25WnrNXrS9bY6xfTjyW969pzqtkgB1F1Y1QBWPTjz57zwMUfBacWxWWfHKw6VSXc",
  "key20": "4UF7Mwr4hL1UBbfqC4sGCPY5i27n6JkcnSi5m1K3ryD2AMKRYaiUJaEtoMf8DUDXQ9WZaaFXkcVyN9EcLVQ92MKQ",
  "key21": "4TSraoZrbzFCNeecrcWJ348FnX9USUc4TuZ2Gg4eE6zkYx92jx8VqgsWV5fNZGYhrNN9FGnK2mct83TCdCWzSArt",
  "key22": "492UGvSy2PrWtvZcuj8wgGWd9xSgvR7mddoGFpa4125SxHDaqdDAC2MsUNrUKdsQzKrB6XouEgQdG2muAywPuHqC",
  "key23": "5gsVsRU7Lh1atgR4PkhBtSYLVDn8YYcEUkbPnvMGZhm4Epfkw1r3Jn5SYVAspTbK99ekGKGZ4L6QsHwqA1HhdnnZ",
  "key24": "3R2FHa8KCiMAwMfx9LqMSci7X5L5UJbxeE98haVfMN79R9Euiaz1WPhfXxieSgpXNewJtNvTtkXKxqRPFLgVwpRH",
  "key25": "24AAGHZJyJ9gvkqP3MRcztFgVRZLE97LVH2kPpE5t4TD4ecELkZEvUbRt91Y836rfacprMWnmdTWRiJ62zeVhVUB",
  "key26": "dZru5qUHDhdKgSRqgqGtSwajDxEPgkKXP5FMpztVZx9UZvmKQ3LZjQDiVupdUeVdmYkTb9MDj8wm8K4tG6TwYYz",
  "key27": "5gh5DXA72DoEGSVrCEGUuHMJkNCaf3drTuVsyzYytm9qv22pcK8PDJUdkUTnCYt8acEtLHvG1QeaTTXrPFJpn62s",
  "key28": "c5y1jbpbjqRFAYtjTWHqiZ4Lb8caC4zPDjTvF8mJ6cxxGoX6cXJUCUj27JxKhHGEQxuVUuzN3wadSeyQ9igmxvo",
  "key29": "5x4nX1zNpeMN25Qv2PkaHFWqfB769PrwcKwvHbUenK7gZDAopBQsBZSWP9KpwgwgzZAdpcJpf9TgooUCTnuT8a96",
  "key30": "4nCYPAHT6A5pKEsfwLmjYM1WMias5Pf2KFmR8X1ryQGz2uoxiQMEWqhDJWkgyaS3RPCx5psyxrKYbhLQQ8vEn42o",
  "key31": "jvdKHwREtfqAzApq8DEGfG9ZwxdEWidPsxWMpxzxuRX7QyhqPoSxxz23ANfXQZzdJUHfn9n92egHktaUeidZD81",
  "key32": "3m4zsWrH2WtjFPqC32NqjpoSydxkACggbQhTwvbSWGsiUPx27cV1rFJ8HmNBoctLgRx94LAMkemNoyAXT7Edu6f6",
  "key33": "sgMKjS8DcCNNpH22ZrEd2ACbZznYaJAe6acF2yZqQ3X4rVaaCi8on5NwNdEhDZdBWHpRHkFP5YMBbXugUTLA8vZ"
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
