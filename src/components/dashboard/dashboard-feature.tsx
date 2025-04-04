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
    "4ZZ12N6Fuupc4JpuTvQQFyMho8Lc7Zo76R4ctjj6fTULUgy54gxLZP6uP2hykKZuEvZR8Ee35RooEc1NtqL3rwFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEokReRNnDwhS3THaxbkce9YjbY6YBiKWiuKJsxF47H7AbmfhDEyQE3vhv4b5GxKrMQ6Ak5Xj43YEoYr6BDj8H7",
  "key1": "35yorpAuZKfvFEZpnN4zVVMDuYCAme4Xdzt7jYUdon5WCaTyM1NQPCC6qNRjzs4UnjEsrys2hhekDFzRFTgDUwRM",
  "key2": "g4tiT6HXYfambDDjAmFxAwfGREVJUDty5TkKs5j2V9CTyobY9QzPbTnqzzmTmuafz8LKpoohinF4CgFYMhRguEs",
  "key3": "D5bjWr54xKijLy6U6qRWXTsU3EXC44SJT7ZZGzisf7wHFGUh7LAby5gp4191gN1sybxVPY42d3CekhKATUZ2z5g",
  "key4": "4ascsoEdw1CMjiSa4L4EUMfAdioejVn13pxCei5AoGQQZuTdHWqCx7HkLvjDJJW83BVV44kfVPUMZyHuPzqknpvB",
  "key5": "5fQt3QrfEy9utqfXzG8daTJHNAkPtwXU6ib45QVUiQ24qpoaENqjBYWQqccgmUnhYzKsRa5MXcv3i6czq5UexK7o",
  "key6": "2mq6VRYZDzmAEnfrJmf4rM1X1DNcvfhB2U6J7ZuoZiqTgQ6xYJccUmn5NuCRS6PncHFR8GwHm9ssWLHEbentxP8q",
  "key7": "9eCM4cRjQPyQi4Un1hWKSZK69C2RdVNFCu27cLRyEUuaQ6nE3X7yWH9LFCmJd4zgsvMdtZsfVmyCsughJVYi5co",
  "key8": "2B7p8KmFQxrR4NDhk9PHd6egH1PumYjUaJsH2GySM9htK3cfBq2aVKQ29CycsxZRMjVTAroye6Eyprmz2LhwMmrz",
  "key9": "3DSGy83heGujCG5CqN4qsPTjczqZF23rdZUvsGEQsRn2KTJt9q2eyMEc19ejiMXg5mnW4GdukZMFeAF9tyh5Jyfs",
  "key10": "4KLYJr6Ndp1LAKPaimAzWAeeBXYg3RXfi3dQUhmEZpkG4cCoQDEMLCN8Fy195aCktigFm1Ft99C6LQCXGzV5tMoL",
  "key11": "3nYrCQdPbgefmSsDtJVpnvF8gRtD3ZZFngnXsCsa9E2JkUhw6vQcsR6jGTsEEfmtwPHWZMAXSNSzwDvNTNEzsWfY",
  "key12": "58erWhVERcTHngeUmBBGdtVpsqGbghhQvwz4iFLMq9DXqBmEiqgGz7dM4M8TqjoYHgeiC1N447C64st3sLC7WisE",
  "key13": "3DHxufAuTKwGMTdjP2p7cLqF47wkXKBK4ssjEo3XgBbJukYy3E1G3wGktXnVxuiBXSqZwcAu3WP44BuVQsQYNiuR",
  "key14": "4pWNQMa3nTbWwkP8fct6uvocg78eBcjE7LdiQm9ZGJ6JEjzj86j2rrU2E2RCAnLChHiSypH5dEozA5htxuYpearz",
  "key15": "3rZcNgQ8E3NbKVgFq36yGCzfRJKDJZm1E7vo9EceKPv4qxmjAoXVGGT1QEyGqn4zgQXpFGy5cgiZcxfKJJDQukQJ",
  "key16": "4UiSyhrbu96zD6sb2TULRGvmraHXKJutLToVmKmyqnkGBr8xoiNpUFTYA4MHZ9EvFj1pyWaE3PQUR2rcLtVuAJF4",
  "key17": "4bSYx8tgUYzDPpxRXNJRorwdKiC6JARXTKLocs98juoqBzJfnuFj5QgPmTkyyb4KJrX2NXoZP9wRy3YT3L3xu1LP",
  "key18": "57jYDv3kqBAxVomQMNietx5PE5zvGhG63YLV6tYy5Da3Zn7QM58X1FfsbspEiRGTyqVGvURTGGdGbWWCzTDtJRKg",
  "key19": "5x2QDEKKPF1PXKXRpvsjRjm4RqfXKC2zFrmSgrGRyZTsdU4FFwv1YMHFP1nQLp4evigxCGQvXsPbut4PBEbz4rZe",
  "key20": "5YY6yWRegk75FnJQLUFjtnbQc1VGEVJMy6fGDgg4BjJ7Qio1JzqJdrqzBWUoFcDWcg4RHnaiE1gETgspjfhPz7LM",
  "key21": "66yfcXeVXPfGNBDYtb9Gx4uS9i9J7ZiLGMq7ke2iJQ5c4JbegdxJ7iQSizaccaAgAX3fjzUqdbczVQYhdtmvDV6W",
  "key22": "3DUTxQfsyRxHzxmsfvAQz5BYMnmVqPp4Cy5bm2tyDfB7Tnq5afWoH8uF3HdE2okWoxX8WnaHTCNLjQ5fz3a6kyLV",
  "key23": "Ytbfb37sg8YQW4gvTpBQYS34HdRvmZ4Fukmrg2Eu7Z578tUwhyMMSya3TWqaWXmDPxPV388MnDtP5GhANHEHukY",
  "key24": "mdsrqN2TFcSW8PavjBtYqwFHikrDNweiM6aEuSNuyyGvRiQWnQKXg2Wk6TXfXdyoV6ZhxAgg6MnD86D3SFVgYqq",
  "key25": "UytVGjgGWZwMCXwHDzAJYq4PavMHtX3Qq788M5pUhjvnpoJGZNnmq4cxxErVSGNhHNL44MHfNhhMur3Vrjrnqux",
  "key26": "2Wh6g8N8E6JuY49gH6RVK4F3uw494jtNtQsN9dEtEdrZSQcpRGyyapqAdJjDfqQVwr2UH1VWWMTpr5X56H7Sjy8x",
  "key27": "3S8QWr2gutp9P8AwRCLoiPePVPMyco5QE7rXTFHxSP8j3SW35DtDj1WBXszGrvAeqTiEwNKrfM8yi93b7LGjSVBc",
  "key28": "jDViAwDBoi8xLvLaWEPmU1GBhad1wSoR957xyi7LfhHTZsSUYtY9JSgwYtWNXvMFmDhfVRiiVM8cMPj5wvACRqg",
  "key29": "K1dBfT1YN5PDj3QGNMnugoFdDynRGULNZP87D7Rg1KzsfAx8qbiqtNnLWBpYQg8obasSJrmDXjWms4DMXzjC4sC",
  "key30": "5ocxnkvEonx2JEf54uzaCxnbr3zCnB5NbQS5vnnjkktJ9Hb6NUwsGHHFzV1MqxK4z2NJv5qG3GzSa9AsZQETi7P5",
  "key31": "63bnMkgtQLF997ptpfzsCBkWYdSqGiLWR6D4bcBeToiCUZpkQURHe1TQVwsF8aA77p5Z8Tbgu8TUJThVMus5LL38",
  "key32": "4C7ggn4NFEkpuU5q6yTbYuKF3hBETMTMDwgpf6aQDsS47THzoQyvojoeGT8BvBKTncuSqct1yguVAsA1r2oj3yZ9",
  "key33": "59k2RM4mqpAfFgak2pab2ig8vJKRE8ZijbpAYuabridPqd6xkjXVn8Rp8kWVo5NZDCUhCwNgy3MSoxVSomdbnJWQ",
  "key34": "23GWQpUxTtYctaeAwS7ZJmaRZcubeYAHXpG5RsB2HNdHbVZN7z4WB92KGrfbjacTWhNBPox3owRnDk9i8Y2pVqon",
  "key35": "4vchkC4botAcWkDn26PCVbFPGByXbh5WaNt5N6DSVgLd4mvHjmsAtxmpoDnbFJRWqCEGtCumtMdAyTnyVF6BsBQY",
  "key36": "v7p6vhnuCADAo2iTQB74e3Cp8g3BduVebDAYX2aP7ruubjVWyyoVwbRTxcxbJaQ68nj1o6z3ZAXME87F6LDAMVN",
  "key37": "2HrX3MnnrrLd3gvt8eiVRCRKTPtTvMVN4PR1YDpG5E7PrKgspxXFVHjxkYKdor5c9RM4w8xSTpa1DHi6aC5b4CVB",
  "key38": "NaBL2svWafu8SLcGmNSZLXfb3n86euFi5S9nbBDvoy1h3nkvCrUguambYkgP3CMTXMhp9FRgEZdGypj36vL1QeU",
  "key39": "4rcN4LBmP2ZLvw9VWtDALF9RRn74iJyXveLkTCBZYMS4mmF9duZFfNwW3XB3gUn2WDWV1iHHfZ77raWAejLiaiK6",
  "key40": "3ryeMXV22wTPm8GHx2LWXD9D6LpxJJRpJdtxjgBwm8U956osNKo49cKoPtFi7VvDorndgUYS7iJB7KwxMnMpisCa",
  "key41": "4bhLZqL9xu98k7PUo5e7uPhwAmE8rbMFc5D34EU7LnDWMHg2yRLyLiPz6k713mZZQJZKiL41u6AYpcjH8HpWMqsA"
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
