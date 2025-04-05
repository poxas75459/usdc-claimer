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
    "fsYAMDfKmNq3XQgeHLiJ4bYJLq3PbT8AttPaXRLJesuyire6xKDiw2QwDZ2XBYwC9oj2z4WPAyGFZLs1EfHWCDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Li6guxjxp92gRgZEJsBkoPfeW3vokNMjJLZ15SVV9RXirqwExVBy5aue8aJ22gxKfeK3hPM84rUMn4KkCC31map",
  "key1": "24JmMhCkvechtwyiNiU6Jx1TqEcaC8aSZfTUkyZj2Cdj9UwWfFtjgkGw4yYqgVpsAPXddmb1Z9XCMornXe5V694p",
  "key2": "viXb8qRcBazCSy6pPRsz7uXoo1ARUYc2Chcbqizi8TPpzbLvBpMHPz5ebaG6WjRJG9W5Utyd3tFQMC7KWdLk5J2",
  "key3": "2GwQ1k12sRG2jX5jVkdVE2jZdGLcdAQ79gvPhC7JT4WzyumXpvkMWGFuvL8qZtvp9dAgK3aaDNp2183bLKzgaeCS",
  "key4": "5ZVJvLHuU4f4L8JAZ8A5si4P7zUNsRCQMzBLpPg8V6F7KwgvQzN9RmpJPX6wiTCa8n3TQze7Set5hFveAPmbVpGw",
  "key5": "3RszXUN61CnrBjbfmjd9PfrcnuYKNehNYSrEa2z5EaxvyFgsEBs9zdemc12GZqrrFr4e6xsMThJehZ1VCcNaskLH",
  "key6": "ExxmqHsLdfcQQ2QoDVxSP5wnKoxXoAMCL2KUasDfnb8LMvTir4Y2ahFmq45nebY1jR3JqvcZwk86Ex8iXu1E6HS",
  "key7": "3nu5VsyevEjr6aBWzubC9yTssMSLUBYqmqwyD7kdqybRa2KKCZHh7aJxfBntZVcaEfcL7wd18DffpHQtYo98ffvk",
  "key8": "4gH7w86iHhwp5m3ExmvFwyDhbuXyNca5LyYSi5ixMezoTG546gzXWxR7EAqA5pCL8amWYbhxikGcJxRzk8gdZiu1",
  "key9": "4PntUiKVmkFobD6As7tP6uvZdi81nwEFiiASZ9oUaSJQdzVHQnaxTREguiKuLzfYwtAyJXuBQSZ9KCfQRUwS44CK",
  "key10": "5HZ7L3x9AP1uBaURkuqrFghZzX6TmwWXVhkxWDV74q3rbHvf4YXHLptxTF2ReYCTxGzAhDHDYEQu6ScoKsJbg5AB",
  "key11": "5xkvCjFVzDhkCxvghgazqV1jDZqFPQfR8YdwHV4HMiXbYPA6Q7AVCPm65gxXqXLJ4J2JRJGKo7GdKeD7CBkD9H9v",
  "key12": "28Yk5hnSDzT4Yr9Jb18ZzLq8YB4EuBkCijAQHQ61o3J49BK5aSgpW2E39Fgew9TS6cZSNVMpgJAH1U3MuWriNRHT",
  "key13": "2PmJg6Wi7eokkYqb56JpPBCMyEt8kpRjweDzkpxDnznQpLhARNka3FfcpyX4sjgN7ZHhbEhGXe2ovhfipTgS8kX9",
  "key14": "39h8SU17Zm1gKGpFTvgxe8WDX88LTqLG9mcR4ZJPsL74kCxnuPWr882xZ5xKArW6nup9a5cWsrDDQbE4xAiaVkou",
  "key15": "4fmi9dYiscSAWedJJK3NfVCGo1yyhYY7mPK26MkbyHCUAjt55R99xfc43jzYt6MznWvAaewEsaWLS9MPssnJ4at8",
  "key16": "285StJWg5yr3F5T5fSvNrNKRNZqfVLgaGTt6DUzDKT5PaLLY92nKuuN7iufeeLoMquDVKEy4rfrsDDcm7WWdmSzL",
  "key17": "5ZWo5spDnhULXtAL85ZLZHyJstNqeASv7NUGMfcXB9picNpS5ZG7k9MRKNXfkCo6FuVG1wg9idis5c67KqVWZZkv",
  "key18": "3gfzcU2TSLRU9DtkS1XuBVS7crYY9wn2Y4r9fibN6rkyLzcDUPX8D4KUWF7ggPP99PzAm2DCstdPc9PVykKMtCXP",
  "key19": "4tkoSVhHyN6ADjcJjA8xgUfbsm4hn9rSJpXvk4b6kwJVAJtTqFeFk5Pnduym5wcfHsjH2wcrWU7A9SexQnpzJUPH",
  "key20": "xdYMpFSSWWkVpAKERWsrX4u2XrtAutQhwHRkpvDdr4RtP6Xzujx55M8ddz4UwT1btQ2VCsVaVgCuPXEMWLC9sTq",
  "key21": "5HNPcDyquD4hqN5VMezKBDSDLig76JaZD36jn7zaP1zk4aaAsSomEjCowbCsDQS9ZXK8e6ZBz8UYgnazYGijsVM7",
  "key22": "3jyMTPbFtEGtGkGKyAsNXSUo3qthTHxVN2CXhPGbF92MAzfDYYVgT7SbuDQAxYKVPD4ZueaXKN7uLWBdjemA6b9f",
  "key23": "3AAWZYGdFpmx3X4m6ne9RMhhXcD7Jo2yt59sgkzVZfBcXo6VqyNx1QZ4z5HCYUwUJUq5NpgTXEm8ZiFs2XqcsuEm",
  "key24": "KyBLQGANZ3cqCr4gBiudKumkuR5QpHMKj7r9tZeqX1xGEfYeghNkMTAzmrUhypMS2P8qiAZR1imzAVj2ThRtSh5",
  "key25": "3uzxhhtYpok7gDx8UqGDQfuASrtJcxYUCQyqjgdK439RmSPZ6b7gKiNqSMM8VjQ8PiJ7PuQmvWxDw28m2AgmdRaJ",
  "key26": "3WE4kMrtXvWY7oQaSk2uDdjk35YwNdEwegYhD46FYTrjroenU2amdwDdMwwFmXdcgTzPFJhBMYCTsqGDzLmXujKf",
  "key27": "5eXyPkZVKA4LTJ6C9RG9MFRweW4u4askB4cLRcAHfGB7NScA9df7k6LfvHRsWSoAg6TZnLN3ZpRcRuMGY3UbSMbg",
  "key28": "61zGdXqQR85kG1ZcLRRiSpeEZm8UAxW3VTjz548qW3xWxRwSii29XZvWZNtTVe1jeEkBN599TWCEvBP7yV8fu7r3",
  "key29": "sJV8uaCbKM1EKaE712m1Ai6Yk1FwHLBJY3k3t1Z5KuL9sNnN3MAGpJKEDcGgZPdZFmkMrnUZHjcH8jCC8T6fuHv",
  "key30": "5xADoZY7Z3uaL2sbP9WtvyDniZEEcAgJsGw1umdTZuSR97FjQqGBWhqeocYR2khbvgif3q1RZVocNPgig5xCq4ow",
  "key31": "4mAu1eoyESu9LmFMArofGK8rZmA85NZPe4R18mUCWCzQc69pVm7TeJN5qccyTHww4bb22c71CYvW2JbMuRu7QP4i",
  "key32": "4xVNntLy2BjbVyHDa7VnqTbUxhiqyUcrgWZYHw9hgycrcsReZtKNxVmre9LrtnKuqcCdcXYyhfSMf7wFgCcPFqkj"
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
