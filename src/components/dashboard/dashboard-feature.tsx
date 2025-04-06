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
    "5bZinvapzWuEEnLdw98ZB26cwfLKvTLCoYQ39NTZfNrQb3fMBmCc7myXCyNVycoBH6kYEqyxjjTojyNSHJxz43rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AuuSSsRgdNwJJBiR2ndsu9iCPiSddBkAUYE61pjZy99sJcMztEuWZzTfwE7tYoDtxvPC5JPtS4bN7yBQgV1qmpy",
  "key1": "4jsAP73frjxzWrZ9rgycvDUC8JNrnY5sakkEz7UVFPMhZzESSveDSjPJKDnsHRc3W5oMkH8pTdMtFnok68EQ1h4d",
  "key2": "42N3Sgf3yf1pPMUs8KqUVppFy9B83UJYYocXzqPzpDUMNkcUTqgUVEdSguj9A13QDd8qKvBeYwc4CXe3KfQ5NqX2",
  "key3": "5Rugz3q611iYKTLWDnBJZW1YsZQhEqmA72MhqDBWr12LzryWQV4kse1chjDU4Ya5njKtdQddwuqrGxTvNCaC3WXZ",
  "key4": "29wVDqBfZQUrbCDP35RcnMUS1b5LtxV8w66EbwZyZJrKWNhTTTPfV7DwWDtsTJdrT1Yj1XU7iSHrNunNaZYK63NW",
  "key5": "4zfwFJ7vK4idkAmaEqYiHpffTAoUBAVSetxEeP1TNmyCqWLzfsDWn1EFQFhDJipTF7dQinYm9hbctiYS8ESbEjwx",
  "key6": "53ygyMFma2DC4SfrcC3H5dGMr6rrZHGmDigoYCFXzb8352S7jEgCumpirrUMj2UZAzuUg6ELBUM57RbFfoQecZEC",
  "key7": "amtdoEUh8c15NidGhrKMmGCMWbH3PXeeJQU1DwjaAvjyajhMKgtEJjYbWp93gbe78KQXNVWGJmawP6WdQY4QutH",
  "key8": "5MuhVkjZt6KGBhUXqSrSj8PABKqLoUWJFQCRNdK2QdHsWtQrYfw1NLmAL4ZfvcBuUHstondoWmDby1UCQKz3Gcwd",
  "key9": "2y4MC2mUsqT2AjSfkQHbXS2Wj5XSjx5ezYoicmERpAUbT6fENPVk7tChEKs7ccSxbS5jmhXzv3REDfgCZMzDCHnt",
  "key10": "2ssCBhzUHjVc9piJnZUrRV7uFnAmzhUtcV9pz4m33raHesxqPJF3aqW6DiKVMpnom2ppBNqppdWddH3sQg2ehmoy",
  "key11": "2bwNx14hvHU3ARo9pWjka64FrkcbYxzYkKzhxuwdm1EFHwU9TnUBNKpVSpAGB2vKGFkjV2xnpGWxqt5LVkx8gWr8",
  "key12": "52pbm936QBgYwqXcP1wAT5sSg27ZCsZ9ifUz28h6zEZxABX87s98bM2TUoxaYtZ586iwHNgNsNuPQGv88sNaaFg9",
  "key13": "3ziFc1Pu3nfW4NaE27h2fkRZ8J1XgXMSNCL6FMYqZc772hBPPunosFndkMnNFMzTy7ZP9qAfMVp8AxLt4qGspPza",
  "key14": "3bUZMYRUZon6nnDT1aSjdWZoJy7aqVvuVhksb42ynch3CQywopGdwoL9xwMUVvub2rMtCRJA5e3NDifNN9fhKS1M",
  "key15": "4iZZaM71LjDMwUDP1mNmyqdBKQQJcyNTj8P6baKh5H3whe83n64T92QkFjgAqp6kLaxjQi8MAa1kLrKisg3mHraT",
  "key16": "51RxA7VJAwYQHpL1CAzVmL5XrttcUzwoXMikBtVzhtbMnaYTXrKX9cEnGhY7nHAmdwaNygM6vfyuwVaBD4VeaPgn",
  "key17": "29xnEkvYjenQ7aVqyWkGDXgo9AKjjo2FMDKwxS4JjaQ3ok8X4M2189bgvbFifmrAqwPvYGWPxUQZTSESgAAqeMHc",
  "key18": "9aPw4WWbN3DAwXYaLPkr4poBdUiHHzYBe6kmnf7xTPcYtF2KPY71dnvWD6VQ1dVxMZ34Bu2YAoZ3YFkGkeEics8",
  "key19": "63W8LBhiFLjsnDHLcNBwceWDcZ7qyRruvxXAWm8PdYnxtBobVdw7FSGSp1UvAdqLVsJXNndi42VioamTVMZHWrg7",
  "key20": "2vThUSVty8JygwL6W7GidhrTqVHnzUwjAipUZHr7zWVaa4JfPXL4nT5V1EChME57G3nkCh6cQwFzL6SNov8N9ven",
  "key21": "ovi6wr7qkyTYLiJBw6MHgp4dAxRrKBpBWn9MTUdnmE1paxD5J5k8G9FCgB8dsQ5EtQBsPhgh361CPyxgstgK4Pc",
  "key22": "3ujbR9UVhkpAFEhnmVF6pWxZAF7An5PaV1zGHNeDmG9zJAQAWdxGe8Sy7JK4kU85guS9r712FpTvkyJX6rijGSHa",
  "key23": "35oS2BJVDPcJhuf38Nv4NgAxPYtvrqdeeNCcZ3MDf8dJeyJ6r6Sw7q1zPsVRL2HUzZxTaeSAwhb6bBzAw41HmH8p",
  "key24": "3L9EidUzZ2QttMfjQvFUhrDDxRqjdPzjURdau7rR61rj2XSiAjGUzX77FpsbSaHXwJSafakHnQ242sEdFYeRwvW1",
  "key25": "22AvY4WAJmNjiCrE71ENGpQmy51rnur2iX9oRNahVjza6LznPesGtYo9tvXbNK9Dm3YqRRrKzUBaMUQ7JjqfJ7SY",
  "key26": "5a7RGMgVfz76ZWfYGFh1VnYcXZiz4ZBYbAavaW7aZRc45C9dpP19xyfeiS3RiucoNk95J8VyXgaErk2X5RAXJDyo",
  "key27": "CUkCHruvk8WAjs9ioAGxFqzKVchsv9n2RyaQJ91JJbK6RCLYJowPd7a1sJEVfJiozVfNM7oMLH3GPsvjM5t4cSV",
  "key28": "5XFnwJS54SirJ23egKAAnqkbn38zxNs5Mu1UC8aiQFwHch2bX2CDmPEFVHSzKA2LiXJ14zugkBtJGH1b2UuPkXvT",
  "key29": "4mg3Wkz3owkyMwHme6PGYuj9t3G3dJdGf8GMQgcMjfCvf6nBmMr5X95NPFucyJ1RR2T8yLSR4rDysyKY4rowemX5",
  "key30": "5dCz9Bq52bTv6GsCfkzdi9cBJi298Y9S3rLPQixbhY1mD2rbprVfHKcYaukTp5sgjbURdBuYNw7s71maqV2YwVDZ",
  "key31": "4rzaCzmZxKzff54Gn44dckPakMhiMFhYhgSs2FwPdPwwYaNWxiyXowW7smUF8dVuxjop4gRSoQNyRLw7FucRvLzJ",
  "key32": "qJwt12dq2coeR5e7LpcuMXU4BT25rgchJMMrdTDrEr4DgHohmomyKdQk5DmoPRnhPHAG79RTaK76izUb9NGyEvH",
  "key33": "6kR4DQ4xRRnc8MZ3roBBVMcLZbxKokm6VCXJNz9Bc34BgCxoTuQZMUsZC3Kf3e3XQ4tZ4oEVUMjVjk8PEzfK72Y"
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
