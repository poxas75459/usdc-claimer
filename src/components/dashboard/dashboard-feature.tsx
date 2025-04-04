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
    "cgqr2j3bnmuPT2B8ytFDLbasZzHzWZ6TYajL31mBCeiETAdG52zuSD3kW3yoP98FUWiFc88jySZzPf32SzCjcEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jgMatAh4ZEkV8yS8URENF5Qd25scdqYqSV5ekDr8gyCfvH7N9bejVGyJ72oPWzGo31X1skTpERUrMUGoNUZPPqc",
  "key1": "3PSUn4NrRBtpmjqCNqZYPhTn6m8EoML1XsLbvMiThQEeZs6KiCwHX9cBWdZRGjtqitUTqqwvfwGZjbtGN6uXvLxC",
  "key2": "3R3cK2WEPfRUm7ZF5bN4AD6YP6LeDzcb11dX7XpoRAzzbfXz2vSZjAqe8Uqbi2puwWbSxDuSqDHzEhBqT9ngzykF",
  "key3": "3Gj3uS2p5vEqpAAF6ZoNqQ5WGh3j21SkS7FaZkmidXAPbVoGBBKa4ezHzrFBnnfKYzQsivfG1H38iRUGSJ8abBeD",
  "key4": "qVrQ48b5Nny2BoazEXacMutc8Jk3WfPqXyAYAjUFADcjSCeKpuPnegPMZY463sKrjtfJGPTjZatRc9Yk9zQ3XoQ",
  "key5": "4ePmpFCgKbAMUHJyBH1qkAGmfogcJPQMpejkPMnYSq3snMg6Tmk8hcKEungHACJ9Y2oPbiw5aW4XoEQPpfbYVC8E",
  "key6": "5Sn9J2NHVehs86qgCqz4bfQrg3iRfEsRDu7N3nm2UpFCQdJFT8r35QPWjy8kojdPSoPoXPg1gvGvJiD8v9UQADP6",
  "key7": "zaaLXvegfLPepwC21y4XsjT8vPAHHbXv1A3riid7msfMx1f4vN3Xz7fPHojDus51PKTuVusUcbeqSQwwFxjoU4V",
  "key8": "3RWQhCz9UzCY5SR3AKT7DbujNJuGGNVgRVN4TEStkTaXEa9yFcNCFwK81cGHPKcCMTAipjBHPbP8c65yBL5jdKCV",
  "key9": "ihBFrZV4RF66P1Y4tzAEWw4S3hzHvsMRPiD8sQw8wMZYTzCcxEVPzwpn1MA9Bu9DbSioS8yqmeT94PXqnTimi8R",
  "key10": "2gWricQ1p6Ew7o7PkTckMpwDiSZjDnAarzVii7G3Zw9Exz9kMfavGo2HxXjx5xgfiYPYX3Uj7X2dqQX5VmxEUYgf",
  "key11": "57QYnoY4AQWCz98AUPJymKb4BYQuKYAvkyGkoi996gKJQQq7V74pFQ5ZpXBrndk7ocRAbfHg6CcsGXWmwpRmxayw",
  "key12": "2XAYAzD8kWJjk9z2Mt396nz7fAAg1hU7zFVpb9CZs2rQNu8zjCJAWLvbdgFiysACNYJKXwW4WQAZ3DfML25behco",
  "key13": "5tB2pL6PctsUeUc4zGakDrWvvqu6YaPP7HhpmdE7eansFThz7Z8gvVxcHptrwSPfgY9xDt9Me4HngrRznzkKXDpm",
  "key14": "ngjM3YzyejuLpYJwFiV2mZCL6z8N1d6CSgdVtapHjUdjZuR5trbeftDi5iqAPH58ViDswK1xQqmwP3ZQYKWC4Ph",
  "key15": "4PrVUSCQJztSJR14nr7AAudmdWJj5QgupguzvcwfsReeDj1J3Btb6JSxyumeZBMdCE5Fr8uVhdXgNRjk7o4PyKqM",
  "key16": "2qFU4zs1bV8JKNR4CzgDjVNMy2o76Uc9bRKWMhKoRx8QLFsksxQ9Zg636zUJjGRgiUtcPJis3LN3sFneCTwNqTDJ",
  "key17": "3cK5xp4ChAdyjBJ1s8YwRz6vm7KycWarwtGFhMrySKQ9AW2G87Q4WUDdbZyAsYuZknpRcbeXhTQBu5TQdDW8yHsU",
  "key18": "4padkVgXE2oVY7v2P4tVTRuACoxHWry9DdLpMN2dxoPtQdJDi2cQz231uXJVNkSqD6KZPvL3xFBncQn2RxkkSjcP",
  "key19": "vi2DSpLZTyk5zHdKvqzqqCzLJrtAo8rSM3PGi93nwDsZQh9CtzYaMTaCz981AM7oRB47pFatZMwqnQqV8wNiiRo",
  "key20": "DjLaiU2TdL58Xe9SygjZxfjtA1MZmRkQFvdBtitocPUc897HSt7rGwQr5a3AM2DxEzUeqhnE6pwjz2yRif4ui1C",
  "key21": "3durw21md7fiYWfqwLzD9A9QpYXd39L36yMBxwzKiXVJSKaUF199LKxpmcyETudaxVf2hzZqb3MGfFwDs5zVKq6p",
  "key22": "4tmJLfWcHUDf7rpPZe9SGZQpZpaFs2jzWVNX6eYxAS6hD7VdkNKYkvPcCmWy7wcVLZUm3uN11vvuWVgnqsrgCbTp",
  "key23": "5ZChzvVUnUdVyKRmZ87pNFGcn9dxcsfxbH6Lxt2y8S7nnLr9QcpEMWWMv3jWQzwqtV6mPkST5Sg3Lf5vgok7ypNw",
  "key24": "eWQcSsD1uXvah9aKRhGDAVb4Lrdw1HBYz1wHugCyq3Y5B1TaSUZ8T2vz8EqeyVDN21MYRvGeAY5ojEARnbGjHLf",
  "key25": "5gKaYXQYSNfDeYHitmknx3LHgZqriJCBrv4CxHu87MYKHDwQrQypB8Xdbdn1tyeiur4LHqmf7mJ5T9SujSGvZpWr",
  "key26": "5Zs155mH47jZwCdqpwFFyhEnwLKXNYF3QoPiifcTP9GFngCcVzd6bqJSw4Lt9nbVySZCJd3N1VDzhWwfmpGpuRt5",
  "key27": "5Cvbr1fWFHTDsfXrmwA2YTVC41eeiK6R4iLVK7KSZ33qFzsADhq7ZZiQk1mDuLgkxA9QwmuHsTPir7RLgejCLbmh"
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
