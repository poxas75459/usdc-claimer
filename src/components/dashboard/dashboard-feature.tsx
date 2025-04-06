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
    "2y2wULoUZVKV96mKd1soeyKud8svK5dkVi8Vq59iQX3BZizjfvVrjaaj1QM8HjKRgQeboSZUTacZ3yFpTYdWp7Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrU6Xz5wNhuw5aTnYvtu5V1UpKAdwh1SXCbX3YQ4TjozEiikZkh1RgDWayTfwdSANijiLEXBvNp1FnwUcrisN2Z",
  "key1": "31M43CPoD4qBqzMwydCAQEaTSyL7jyUi8TDSVrxBEHP9EmrMBbvRfrrBdEmSUKZs4xFYAG6dzEHEA8LoV5bnzWKf",
  "key2": "5tKz5VJEWC2toxfB5k4QeMjd7CLJkxvmhpjFCuwF3Jt3scSy9JTFuUT16qobMk2nB5XPxk3PWx8VgZQWrVJ1p5sh",
  "key3": "BiBhg1eyGwm4iD1dDt1jxNNAaueRg9GJwRuM7S1BWLTxg5AcnzQbLdyJrog9WZwFNzNpryRcEWaL6BgFsNbka2e",
  "key4": "5Bc7RnruAtPtvTb7pGN8gAJvdTGH832fuKc6jCcjajqVybuqbvf8x1xWuB5bLL6stkCFZGSfyvLoiFUZ4deAwKv6",
  "key5": "5e31ySocvyD5mocPjDcLb4idQR8L7ssRvmCHT3jtkyeSWs5JAyDA5W74juELNBikvvmfLjvqKkLKD6ira2NiMM3U",
  "key6": "2Thvwfnq1S4Hz6MZGGEDe8s9KY9NuLVNmSSa45J9dVH18cjcocKJrFNjhW8Hv1piMHvhEwcDcxAnCpBsETnzHA8S",
  "key7": "5bWEUYyZFvNGyEfPiaYUqjtHB9Gdu82xxrFkBE1s3LnMUD3iKDEveZf5NtFhimdZMaAn5Bm9mBrU8AgoN6KjqkNG",
  "key8": "k1D2g8QAEyqoKE2J6diF7x6q3ZkjDn3ViXeJV9PPVW1dSWQJbmQmoE8YLdGeXeQisPqnbHzjsQ95L3ma4CTyWMp",
  "key9": "41b4BrthxvzGDLwM5r7YJ22aDoCnEsnd5zUxUm3yw2RMVsDyBsjQcuKi6Nr7CGkqDuD47TaY5drmSQ39DsyZ14rD",
  "key10": "7E4Jy9aE16J8WVKqMhod8omQg8YGRD8gdig2y2pUpvLRHs5w6hGhNRC3KDbkgH9UFwUm4HG7GYA5BTqShr1p9sC",
  "key11": "5QDUBQuYJdYe7di2DeqhuNrQwnY9qQzbHAzuCEVqw5pkj8bGeADSoLqbfqLD4phatQ6u9q64uWWi1rHfxBUXmJFZ",
  "key12": "4Xnc1svKs6nt9wDRW8de9YhC3NS6vp4RZ5Qx4AUYwisKf5jfS6muH9pqmZr7T3f56KkdpCrRbdtLPUbS8C716PaH",
  "key13": "4yfocTZrCRdZDMf6vHm7cVCuT4w2MZD4qraixTHoV6C1ZZ7REJ9i2rF4hRDjboF6YNdnVyRty9zg1urfKFPNv5ne",
  "key14": "22MdVManQgRXJuUrpQ86xmPEfG1Mhw7oNA2u9z7AR2Grc5eZp5uAhRENFABPhNRGbixpVa5ggmXjbmpZF3LzfGzU",
  "key15": "63CsQ19k9zm76Dnh6UHwgW77UZC6hJ7v13ABvruFSNTk21xnZ61G1z8mv72jj258ZgDqehhHpGLcKStScwDKrpy6",
  "key16": "3y3PVL8fSFSmr8nRXniKd143TGJmxUkq7RU5gQa4mWcwkSCLh2TyTrYNPJt3LWmaRpH2RNWvqjK3jLv74uNUDzWH",
  "key17": "5yzKey5viNeX9hPg63QbRkzAZiUgHhUB3ZmohtkqkebKS2bceEFckdjXTGqxxXT2mGUeX3cqaCgtBSEj2KaXzpG8",
  "key18": "61q1wFtdsuWGj8QmX6bWb8RFuWCn33UcFDik99SRkjp6bZdcMvsAU3y2mrVSyeiPx8eJDiTMBuaW6rah4j51T3s5",
  "key19": "3DRdzzMnNcS4eKzzkgvNtZVZDQJQSuYDnnWvRedEgQfuvpzp4RVuUjtq5CnepftseHvAKUE9TPrZMFsGo5GXTffV",
  "key20": "FFA5C5cuwQN8K4NPWzTcT9uiKM1A8Ga3ftdNwkmckevrAoZv5eGjxc7eRtXM9PbcXEbDX3WF8wTYf1rFFRLacaB",
  "key21": "5fZ2adm87xovQZbdRBLPzHs6tYkPySzsHXhSJ6qbEqhjo2wkvkcxaXbNWmVEqjR1jqmSsQMfkiMozX6se7mHaFc4",
  "key22": "4dBTGkLxouQrRWTSXPhXwE97m63uXCLP3jFD2ByPwa7fJEYA9WKfDwvJD2fsv5DvMHhb6WgtNFFPoo2gxShWKNmG",
  "key23": "23iWjFMuk4K2JDoRuWmATU4YgYFShrTSgft2P6ecHLpsDSFWoHkeo67a4ow8u6RxrDjpWb2rK8vyM2hsGq8YTKRd",
  "key24": "2JBELfN92BauM8F5P4bxbG3CuwTiqhzRnYzH8MXjJE4WYgwfjXZ2yAZtoub7wdBpM1cn1k4R9sDA97YtWAtAYX8X",
  "key25": "3edbpeebkiA2pKniDfzrnd9194PgVMWUgQb6n2xMpAjdBsu43Qrq9v4FfVCTRNCDZnRb8PGCWfAs2iHJpKETQe9L",
  "key26": "3qaZwc2MoPZryJhk1Wetcne4LgRf6K7N8t4DFKKrzHBXKd61UzXWQVYwhHWwnszWcmZNZDJeCwm5XHrhpmjmo2Kg",
  "key27": "4ZMWWVNTpHcpd8r5EjVhNerJsqkAD86uPoMW17NWFB3cUEQ9dmuYERTSSTUWqN7ToEqXx5RgGL7nNBSGmdsmcSAy",
  "key28": "4JbAEFfRWKPTQE2pkWJhGXRb1UHLPnW2toDFZTB2B8vFmprAyR4rYSMCtwiHsfwnsdznNkhJWbySK3Mz7umc1xPJ",
  "key29": "NF1AdGyVysRc63AKPoCunEb83py7GuN61b56QBWw3n7bJTYfp4ZMjgDbAxgziMdMnK32R7vmJHz5idwW5rcdeYb",
  "key30": "5PgNssj4R2jkXV5ZJ8d7ozAXy1gUW3LztCyr7uzJkbR1qQkZdxF76jc1eg5rYfPUuZ4PAu6wTPeQDRg7AtnKFjoK",
  "key31": "2NYHU9xd9poswDNxDUgyt8U1oiCmtqxYVzFzsaaqxrMXKbH5Xuhdexo5BReUeZRsZeV8cvBHZnzZS8CoSWi4KVZk"
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
