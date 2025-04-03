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
    "dVF21CnBf5wUGXCeySLdJ6mFgcr4YYZAUV8TyGzE29bZMTcX2gkow1gukMXc6XPpwrxWYnfTJmn7GjWay8vaaFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAxP7RsmbGYeRm9jiUkeipMsvFpWhCTFy7G5jW2VMSnXqneuaykhpXC1B1T75GtBcYgAgHYjkVBw681eemKNDFF",
  "key1": "35m1k8P7Gb479HstGE689658bBzZuTVZt5NGvtqvzVNuGwRJ6L5nLH5DdBRXmoKvnzUEL4fAbXf6tP1SKsKvzq5i",
  "key2": "cb8n5wXKQ9FnTNEHXBx5qKAM7nBq5zCnVfcMby7PfhEeYq679TVztXnGFNX5eCKcg55nEQDRyUPmZUUk4ofcz8X",
  "key3": "4eGDCCeUdZ4C1jpQzYToi1CeK8fQYRL2aSLyUF6oyTcvYQmBtepKsaN2j9FTJxfZ2QMXbNvNH769Qyop4xyEfTM",
  "key4": "5WgbCo9hbFHPxNLgTL8qagSEvfo1m5XCnuCky5Fn2SPW4qJwWDxvJY3JVWHcbn6vAYyLE37kgpaL7pmmnExiwLzb",
  "key5": "5AbfczANeaUF5BeqNH4mmWvbRCEC6b1MQTkpyH4SkdUqrajomnS2ATgBCV56v3J8b5sQmnrg1VaqsT87ZDMsed8B",
  "key6": "46CG1SCS5TWEYzNsUMsY4U7JzoQTs1RzrNBc46SHQE8XcY1wQa3H7WvLx9xAK15ZsM2RBAaiQEVRdjJFwLw7Usfn",
  "key7": "basbtNPTF8DXUFvbKmYJh1hni1zUXvMgPbccE8KymiBs4LB1KUjswj3nzhy6Lf7PeYoB2yLpBrTnibTEC3Hjw1z",
  "key8": "3f9VNnuWk3BeCijG6sANT8kDWvSVGhJDFBySzy7jTPNDEMFSrx6vYaEqnWQGCKkh9ydDtxCp8GzUEHALbr7FTsiH",
  "key9": "557BzcRXMvTQrEsa1ZypV5suga9cn7tq2rgk2z2gZ6mn6hxd89BiDnbjfMZ1M5kEiGkHPNNK7nbHkNE9eUDR3D3n",
  "key10": "Lmi7aqHtdihRFoXkrtAwwPYdDRr8pLYSgvDaZadvN16eaeDzJJjWpp22zpbew33v8P6rFxKvw8GSXzUXDZYWRgd",
  "key11": "4kRU1S1PqSB4atPXdFGpeAtdhSpNvr74RN6yWNqWzCPGrYtPxf7xq1NMssHKgFLVQarsYLhUdZHFqeqWhMYJgMQq",
  "key12": "2kxFhar9yn3EqxpuQtGEaTG7UUzH8uSwhvK5ifTedcBjJDgPxUaYCqSCnRb5a5YsmdJN4Qr2JRX4VZ2tREYtHDBR",
  "key13": "5fasZFdKGvWYQijdqsJVRPmM3XBr5qkHbHBbo72u9R31KL4XiTtRKypS4zX6X9yrW27FqKRyKVk7uVKQgcoyiCFw",
  "key14": "mho8h4uaV7RRQd5cmAYhxXp6agd3R6bt5aC3Fxpf6TxUJixtq3nU9CM3bh4EbhgKmRhEFSqoT4D5jE1ZHFTayGj",
  "key15": "jyvquJwxMNn5ZTtUCjHLcnkqny4nKXoiCZKBGtHAaKmQqSDR4u7Y5K1kh2wsWw6MagVdbFZEnxBrQNpGEp7tdNE",
  "key16": "5PeCTcHdSEHCaoHAcJLmxhq3kne6G6xERvPbLTdxeWSboWjdxyc1urtocwtrgWrm24UPu739XNV1nfjuwv1vU9K8",
  "key17": "2Yvyw5UVu4EiK3mNSQx5nZBPEKty6Q8gbqqYvATfynrW8GqihLpx1gSEtA49c7kBoQGsR1kDKZ932WTavdxrM4vw",
  "key18": "5se2pHnJvA1DHQTx9tYAZswUuA5F9tBL4LC1mG8DcFgKZ841nqBEiqv5Pyx6tE1BpEehBnUibkt76LqJDr3LDe1G",
  "key19": "37bYG6R2obw7hkQLuExWRQS7h8LEew22GdiscL3uXxsrGru2rE3kxLYWK81i2uk4eXeBC2hgcv1Zw4uouYfg7bgr",
  "key20": "3nLTbAYvJTRro5X4y8Pvd6DMyKQT3K8FMrU9ixYCYyc6tXkrKoXcABihHN5PmSdFVGcoSaXHkvp7dxw2mbPb73G2",
  "key21": "1kbWyWzHTbWeKUBhXQaGH8QwoRgcsPsksfAdxynuZf1rBgvdv6oitwwZS554eaK1Po7AFmfL1JxPrTEzzYu7LBr",
  "key22": "4LDL2ype1cqD3s3P8PfFxBHKkaRqswbGugCFTH8EjGXEpnUJv2nTZeWZV957ikM8ShsbC4ndrTgAaFnvqcGGbWAT",
  "key23": "4xb1RbxE5zPywdAkmYFyzLErxhnGw2hCv646oC9ehcGP63j37rJ9pEJyKanPvZL1mZjWz3TM4dtzv1kFUV8DJS2M",
  "key24": "2zF21iB9Tqd86jGjMvnJy1EMJBBU3Bj1u5mTg1u6EfyehLyWhHp5iGq78VZHbxn6AbZ21pC67eEHznpfJRJD2hSM",
  "key25": "3VdPUeBmB7xFp5iZJZVbj5S41L6f7qVes7bfkB61hGx7aSmsn75KxHreSMxWyUfVBznaS4udieQ4wA9J36mTRHXc",
  "key26": "RDs14bu26EqtJsi136yQUhbCRKvzU35hmb7wcLA4HCfWueaPy2sqCNkELUaxYus84QWHX7mwbvpbtrMCLZ7vjzt",
  "key27": "5fNMbD7hRXdnzsauhUNHUySSfcfrgP7AcWocHLsCj5cgUSeXmA88iwKYnGmsqtKa6XFGoCytTPChgLA7zBdHZdAF",
  "key28": "5NfZVHRmqBfru7Lk4D6dMGv2EqDFVZAtTEJ5KmJauUn9DhE9CViEV1eRZJcAawq4opr1hBAhqYgCawd4UESZzdvt",
  "key29": "2MqzLeRmbKL2pQnYRSM3udZTfpWStu1XHUuxrs6vtXriEBfPY1V9Bmc5Z2Y1L4fsRLRZ4MPveDPRcb17Fk9XQtxX",
  "key30": "2c578tGErD7iysgDXeybY9edUtX18gCsZakLTLiyN2nDiumrd3gTKH7JMUn9EXgKg1jE3h2y5tYUrhQK72ZfQ2nS",
  "key31": "4EXHLkQuDE61MccZcsxzgWTHPjefbX9G98ziAeWR1etsLbMg51Y3mU8RLYSAHUpitCwNHxhQMo3p8setHeteYBqT",
  "key32": "3p3khAtL6uNieedBYZx8DB8ex4rUaDppt1SK2NByCcQKy9WQ4fBr5eDpAUTkkyEYu23BNmeMy5xTF9f5R6uzHCZo",
  "key33": "3qFRZYb2h3RmiagBmkHW7qfC9at1pNYsJrT9PXVNsMyvdBrT9PkFHKdcLVuG6WP1htwYeFrb8HehNT4y7MijqgnK",
  "key34": "5ozuscZn9NkHtpEtrTDY4sCWocM2xrv2qrRtmdX79Ezwvy3B21tPRF3iMU6uo1x4zS1GFTZuvzBJkvUBamJ1KeZY",
  "key35": "2Gom2pHY2b8hseHZEBTB6pBiqEnkny4BrgWHWh3379WEwMZYybSnEaJbMJaGXoQTqC9rvCCzwHp4F7B4ejgseVxc"
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
