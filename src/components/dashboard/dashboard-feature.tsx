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
    "4kj4Rxw8NP8pzLxngk6t5ULVS9mLqegcyb97oV8bbLyFL3d691ToaanDyRoED6JqeoeHzAgmTu6ns3LimZktq9Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwxq3o3amzxQV6rZFS4477kRmLc5vnYsnwRgPYANBUS8R3TqNCAcugRZLpEERcp9PZuXmnPnSuMUGZA2HGXhohS",
  "key1": "2Zxo4ZbQHq33YaDyMwkNJaH9gb6jfim8NcLMVjNXtR1Ms93nGHAWy2FWEitzXUujoMmzBah77PTjFYKJSVwWhMhD",
  "key2": "t7cyVcbN96621Kw9Q7YvYyMxRognQJLH4YK4Hrge76GrX6GmRNuYfvqiGpQWiNynTeuvfv6E1tMGYjF99vBK8fS",
  "key3": "5NymwixEqTXpm3KLkdqGQyBrNxZ8MRJ8MqgQzzyHHEjEHUuYLiQwaSovVFVvnpFvhpfa6moBQbZU8NNB11YH537c",
  "key4": "57vKdCwwVdH6NPq6vPay4ujreEfgMp8EvUuWoTK3WK1nhCQfz3sJFT1vYfvVPFr6cRWExYsWXMUyqmE4bkz74hJX",
  "key5": "5CckcTuUgnV7E398LGxwnmBWU4Hd65uvh7aMnycyAfHSxomKW5eZoPpHJgkexCzDVrMJAsZWxvM2j6s2zVnnnHRw",
  "key6": "5KktNwApmUmvKHMCa1YZvDKXDXNV2GTdvGNxAQRXEu4cmi5xJBDWbHzNi7s4oVq1u3wt6jrc6sxJmMgdVTaMt6e7",
  "key7": "4KRTzgnv9oFYCgryQFz55VnN6hebF54aY5ZsTU21b3NZHEWXVAjtThNj7faqCUTnKsJN1n3tAgfSaiGFJ21Cmzeh",
  "key8": "sSfAbFADCY33WLnWBN5HEQWWumuwpcfQDHE9sddLbrDWBjpD2FNvFAH1ZHY6X2sCwctvJ19DZHdVJbMpbuKXAEc",
  "key9": "3XdtMPuP6kccvdRiGkxshWfekKBnWZpEeRJZ4tSu4zfvc5qLH7uK4fL1ubDPq58KkrRFHsEgvQ4Xf1aFCXj56uKL",
  "key10": "4F4icfedA5hzNhP9ZZNby42VpnJ1t3Zk3RyyFfEkrZL8CnAeNeSYCkAQ7E9EST69EwknY3rT5bZtKx851jjTpY11",
  "key11": "4v7gJ9taWTs2yWkoRLrLD27gD5AZQk4TwTpFfceLkpSNPiiorK5UXL1ca9WLJrB1RTZDa1FjR5PtQrnJKASVsHpP",
  "key12": "3bVUdmYm2o8sUZfueKQ9HVxWpdNVBpxuy84qBs9tcbC54eyfJekNXJh9bzHB6Bk5mYgWA5wbPULV8M11LdXFnSHq",
  "key13": "5QgSXCdorn9kGxPdtpYVomecc4r395UpmuivpaH9NfodWKLRsQ4PXKgJEaH5ovNGmzgjgCbgmnxTbktRWM9YRzfQ",
  "key14": "3LM2GstPtLuwQYTg5JueG98PQhyWj6zbnydLKJgrgTUxukPYBxFWoiwwckpy5A6u1KbC379muLyCUVNzZi5LkcxC",
  "key15": "KD6DiZmCPZcFEKfe8fzJPLkNfTW91EzQGZmUUrKPvCG6mvmzqWzL4AtnjvUmahReoarGqQSSR3mmpTFSkFooEzT",
  "key16": "2P4rfgRNB9mNxGNNvfZdrwRgobZqFZ9NFuuYmFqocKZGydwYBhKNDgTAcJMZ8Gbi7ho6jZHpzb9pAr1rDnCXxNCf",
  "key17": "2m5MLRi8eJrGRVusZ6hPFY4d4ASsB7sznGFoHG4uuKBqgymsmMP1wLdeTacGMaC3wHmxWz2gH2am7SFZQYLgrZJm",
  "key18": "2daxf8cBQfPYhwUhY3hYLpe9FiDTaG8NyZ99zhtPtgwLmzk6XzxJ7aatUfANNioYJm5bBqhLKVd8W8gjKnKmfeSd",
  "key19": "3XGaQFine6A7QctZMnQuAFdLEZd78mCYDJr89eADNCrGWJeT61csd5pqYDoyZTbMr46RyLuEAWhDDd5e14SkPH29",
  "key20": "3ckv6nNHt1k8yhv22i9aAHrQ8AorkokTTtj1tduQ6WnWgLT2DwkEk9RDxfWysQVpowBWput9WNozgsMFLyf2MjUk",
  "key21": "4nNy2Vx2hnj3qvbnhVK7q6zXZk98MmtbjJzzc7B9A4NrHnzkoTBsZX9U3JJCNMop6riK6Ra3SHB6a57cM9corZsH",
  "key22": "5iEUkZm97YjbFYehrbSXVuXXbFU8qDWbKrwkFhqio6HYF5hG3b7PFgsM66pQ2cKjzGrb7SgVMJSeYcjbMPb2NkoR",
  "key23": "2M7WT8UNpHKrpc6yjjsJbHkgXbqCG7yEFVX2UvLqSiuxDyA9FsdjJwosZwLXWY13WF6je3Kuqvgu3iT624EBNj3t",
  "key24": "4t3GJGJjyLSWbbUkpsrS79WpujMPYXfU9A781EwJCKcwHj7ErHsryVgwkBUMpSNYLFjRkYjKztzW1pT82aiEjnnt",
  "key25": "3XCs8HL7uyLBQVKywezRxMFgwQ4R1cGCj1vtp5cPrpf39d82RPJiWABqivuKpRVKyhiEHi6Tgcz6Ub33JeXWZBgF",
  "key26": "2txrfABbYw6BppzKGafX1wVMdnZ4CUxSYwEMorjU48TU4sSDKtKCa3LEkaR1dTarYYWUV56NLuJ4kp8aycnxgUUm",
  "key27": "3ZoqRWhSz4JvQtPLW36tCqRm6Exejb42CW95rF3wSU8y1JRfTveemaWRfcPqh7AAV9kDzpMuYzK7jxaVukP89ojX",
  "key28": "5AVU6mWyWqmzkmVDDzaUxnqRefBxeSJJnhKPGCBUsgHEVeo8exATnUFVoBavBUiL9Hm6xms3rKhT32QGq6Ks9auD",
  "key29": "3fba6fbaLDkoiEyVd7Sr3BieEXx6XXBMhrwBQZhjiQm4u5hyS5bYYgtt6p5BChZuRtQQbuh9pcD9kJxPyA7PSFoz",
  "key30": "33N5WptFiubd5ZGR5wukPHb58oQA8J3fW2MZMtpZpZv8WgUtQKwDW2i8HEEEavKQ6wxL2DipGBNJZWLoid2jkZt",
  "key31": "5W3sGyEUCxFsUu5dnGu2G6mKS57EMBBa5rrMeE6N1NS5bpdTpJTu6J8J6CFT6qYwJ79HAHbHNFcWgtnzTy2XaKjr",
  "key32": "3wt8FUi1ZfsxR8xsDxEBxAKoBVmhLmsZnmtf2qfM8Z78hYtgGmvjm71JxuW9jMzMzybRp3aQGAQZmEA5hCEXFTmz",
  "key33": "5Bfk9bkactoTvMJcmNa8sHgTpB5Pa83RKEh26m72HRjTd5YmkWGkcPBqREdxJqFi14rR6REbD3Uustnb5muXApK7",
  "key34": "65BNnrq71SDUq3q33fPgUSJYeEPzmNrnBZ471j1ZntQSjDmyKbhr6LjcVequGMjmZUeZAHgNsZVj3HmaQXbL1Vq2",
  "key35": "4EgJ3cby7pDCcFXGUNuLkrLrsT1WJk5km52nYwNaFq3BPjePP4d8NpP1oAJy1v3MSaFm7Wzc6pEGd3ENm2MbagD3",
  "key36": "3eT6VFmE7F647LkD9BLdSXwMfcofA9UXk1vvvVKHxELUo8Vx4E36izKMsS4WD1NKjpN7L9aPXH3EoYTWENjewCYi"
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
