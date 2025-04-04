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
    "2opncB9uUaqSkcsibCwqWrtr6YFFko24k3kc98bwkW2sqba9metH3Fa3i3u37ZGtsMuwHpdFR35jwS3saegfdFGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sknQQxiNGS6Rr3vyTbNnDAjAK9QnYBuvokdu8Y3ftRbz8w6CMFYR9mEp65HXLuc8YJoXFsgrDFCqb3Ej2JGXYUN",
  "key1": "29PzDSD3w9HY76fbVZwWRPiVugoP6ydtdb9ZfGjrZUUjnTszDPQ8NnTtiX3THNgZQAPj4jdMquqD6JSiHeXkfgcZ",
  "key2": "4eDBwVvLMf2k2U3gECT2ZgUKJR2hkcQf4Q95S64LR45jdbyT19D42wqFEChjymb7Sy8npUrgqM9rTjm1nhnQDw7m",
  "key3": "3vFy87hZSdSWiiB6yr83zEWJ3Qh32ZSzcMTf9Bqi2LwDCw87fTG8v7wb2dJ4a9WZqC7zCBybmJG7NsWpHhsxrCW1",
  "key4": "59YZEki7DBjPMKJtd6uBA7xfN4JzZZd6QShr11vEEvnfqUp1dX3hCCqFbhtuDTzhewD5QPKqfF4hKc1RnbwScu1Z",
  "key5": "51rJrXmCQ7kBgoUpPqULtq8DorANBATh7Lnb6iN8Ys7YDnup8Y2fM2j7rFV77VnCxo5tGGC6Mg1ssqi44JQsdNbe",
  "key6": "2NhDgYfTg5AixFjhMFfdKYL3c5RzUyrUYWr8x4oDBjiLEUuXhe7ng58Q7k1BFJPsQ4ZDeDHotrRAqQVth29hkb1L",
  "key7": "Sq348b47UhpBpgnBRN16SMTdz2769zYVFEcWukpNrMk9p6hgAVLw8SkXGHd8yN9dYVTtb21tontAXLauX1zo9cC",
  "key8": "4DhhehEwbZGqswsfWBruhABXVZFt9oJyxmzqJuQK98epBngR13yeqFsWXCSJdBgdvGcZN3QrsXKhCuvx6SNDdfqL",
  "key9": "3r5y1U5oJNYBf73B6Kmc631G41vMmLYQ7115AQEkJPHUfzhJLcNjhHLXwaeR7LZWtNyZZ7mTQw5j6sLf69ijXr3j",
  "key10": "2Wu5xXWfNTHTmZQb53yZh4bW5wqeW8MA2R9PMmmd8tsBRb5iUuryxy7MxpWSgCiuUAhdRd29nAq9WJhEFETBWV4k",
  "key11": "4xBNTMMpy5f6PUUwDjrNKrRm2zeWubWVbXCUHfr84b2dVXUJ9hF4eHf8oLkcTFiATNDUm16NYcgzonS8iEhWCDzW",
  "key12": "5s85hBqPxHb18uFysHCvBiGyksk9LGYrsCWF6tGtTP9CLLKGxhxqKg86npFssfd8mwjawEaWdqAgTitHWKfhN2qG",
  "key13": "4ZvGWKh84h6c6B5gH21gLb5BGEXumWA97Wweq2PtsC9WfGZDFzu1SkiGuvJb7SGRnHFDPbqY1Ls1E66aTECkW65N",
  "key14": "2chW8TLrKuvHGHAWSVsDUpUWsfCLt2r9YmgTeQYJK2Wuswh852Rncppj38djHfKmtz7Bttk6r4Uk3i2dvDKMT9Z7",
  "key15": "EtB6od34e8EwVjHyo35isNam8D1yXM8RzYRvdrBMmzJWjwbRaidsEZ2K9AJKCdfNxKHLeuqqNYjMJU727zFY1wK",
  "key16": "m73cHyEuSVfcgkT5RN2NGXfcDk8y6FmBWDqeMo6eJxcJssNUcxUkgwacuef9hoaH19WPcQTSxp5ufTneN6ygiEa",
  "key17": "32YWATC2EvSE2dzsWc78akuyP8yGV3XdWvK2NYFbxSq7H2jheixA3VmGWng2trTFT6wKJGNAVAsd17E3ThK2UkwH",
  "key18": "5PExA36faqrMBYCi5kjqEAJXoKYBbdCrwtKcNpV6deBV9kjyMN8dpQYAxZMzdgZTQWmaCEuA9LSi4qaGR3oVPEDx",
  "key19": "Pc9ETgord7x2n8iHRwiA9u1M984QQaW1JNfSaCHP2UFarzHiKRfp31idU7ase9GduZwaTjWTdXKsXHpqYsPoSn4",
  "key20": "YCCtLgCVT7LJzJXoL6RZU71HfdY1jheHpe7wPqmJLVPYuDj9t67DKvWuT5wZXtMbfR8hLaBTWu7cMUns7Sry3dj",
  "key21": "5s47Giv8zD4LyB493poz33km9peNnPH2XiJZJy4fhmfkZmt9TrdmgRHY5ZqGfRZoRLg3WMMPKWTY28CbxnKLyzZu",
  "key22": "3ncz1qCMm8vSsJQ2RgMky12LKSNg7gvQPExqJLBRWs1ua2MqK2GSFd2eeyAyJic1QvJ16MQego2cPzc4aCfnM2om",
  "key23": "3ST9VZBUqMPevLJZUdCiZY2PmsxGpF7cGBYkF25At9RpN3YdZFCKyJpJPX7kUBU3zJECxwFHYRWYn8R6cyghSbqw",
  "key24": "3r7xDRbi1f5aWaBGF5LQZdkFBU5Byye1WPPP1pMPm8pWNhw2VYC8XwBLKE9g1gKPR46MEyueQjiKR16aN2LNawW1",
  "key25": "3Txk2vmJUjrX8zGmatiXszZML8kdFSo4iYqCJFUA2XJENSme4x6Vg5vDL4uRNQVVtHhr5j182oK9zV5GaTBhXabe",
  "key26": "4DMoMuxDA6N9Hfo6LajQLprvwZiMrpymdefRz3WmnocFKynq7qFzYH6BtDeReUadncMLTxHNWXD5F5LchoVgXGm2",
  "key27": "64yoVBfKseNAShqdi3RHU68R4Wc9KqjCGUbVLA9hijB8DqT4NPbQu38gVv2o6cNWRhsYuMc6Ps3ULqgYBxugZSng",
  "key28": "45DyQRQGD5eqVDUtCSEuKi1u1AKtVA7QT2R3UNzgtkaTQcJh6JJtuStX7aYRktjAv1Te5isfQgAWQrLwopCrcZUw",
  "key29": "4mhwrWAVjFPxen3VzCg8JQZjFbNhBXpLhePXSNt5ZuD5zyxYZDAKgTh3DZUtd1Pqq8ysNdUhYtKppB96Mf2TKo5N",
  "key30": "2q57eL9rkShUumLnabZaEwGFHVrMkJcT2hVF1xECDXUXjDXxjEVsvhbzH1ZBLucVbFgbyiPkE5MhEiUGxavr4rGi",
  "key31": "57KdkgHweR48zSjh2zw3k1wk5HUyUt6m8oY27trUAhUN5Jsrd86HHxH299BoZ3FNRRUCMPWc4K3FUkrDSPuvxQX6",
  "key32": "2SV2uYtHJ4UUB6s1d7S8ua1Nq9vGGrTDDxL1aXnAc2juWmQPkvaB73UQUf8xKSsXb887h9AmNdSxTcaLUzB8TEh2",
  "key33": "52dnHBFERq8SGzZK4JWYztA2BhuqFjtpfpN1qpUCpR5DeF44a8hXYJbYqoCA9bgbZBzUAo2Sm2aeFoAQWPAGfkyH",
  "key34": "5YNchePaArrGzqE2ueHSPFzoJA15gJxVA5qsVQkX5UyvLodXMcKDshaBXbtjzDew3kYsCPhFzqh5gzDWWVXf2fUx",
  "key35": "4YryAoBF8ra5u7BXQoDWzFQUUxQ1Lkt8j8dK8yxi3M9KrGgSjsDpVKxpvpjSAoWuUQBJwHTXo4Wazh7Uy8ouieHs",
  "key36": "5ZF8H8wV4JexePpySoVc2kVugaJEVt4NN9Ag2LVuuwh4uT3HmhUjHBSDQGr8J74n3qBKzMLQcavckvA9eyTureuC",
  "key37": "5i4uFJ13yHzzWsrJbMh1ayPLw6THoQkPG3BjoGJwzTkeVsJw17a1nJwuLWj5vj8hnhC9Dffp3PqQe7a1iM5mWdn5",
  "key38": "2qi8frPYQbhyY73akVoSVoi1TnwRZP5rquZkPEoAVDzUmyRVYSfM8mqFHxah1sRW2FMmkDWrrQgFVXqHtaAxwoxE",
  "key39": "5CTHBfCrt23B8MZheNwNjNgU7y2KZzaMpzrrcAD9AS82yjFkjd2ZoLhSEANxfjs2vLJefWUc1qSbLvbxu1wTaAAs",
  "key40": "2BbVgoqkZGELeFUiF2j7E5cqr4NdMTHm86k3tT7Qd7woAqXW3o5M59HAfEfZzJCsvq5SrtmLPz5LCV8sxbp5m4H4",
  "key41": "2irWubezzVwu6vSiDCXxCopStVbRTHbeNJayNhVgnkjxSZpXxPkv1KH3ogHBwU1Q3xoN4qHxdE55J1sqyvmjMAvu",
  "key42": "4Sq2rhLAdGrzyQDFLFR4Z3jHgfBiAWDND28bQv2WTEcjSCfPEQYmYN1ADFYGxWarJgFK9RY9C3cBWy75DbtotkT6",
  "key43": "5RiYonKwAzceEZY2219XizWz8FZD3T3uj42seSNgHBFkesDKeCnL9J6keJKNg8nYynCGVvLDgRJJq2PXuy1CnY3G"
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
