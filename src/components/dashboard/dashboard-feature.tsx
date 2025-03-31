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
    "4kuBDmazmzggngmHsXH1Vnp5bKdDnLvzHVPbK6kwSfPpa6K4Bt3eKiiSP4zcyyyZYVFsmoTMDLTViWQKFUkbhDe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWe5MCFHvCQhCk8C1DDwvf5vgVqzuBF27Bh8s4Y739wFgF4gSLjBBszs6dA9e7H849akx1DeUPX9vEbijLwNQof",
  "key1": "4qjLrFt8U3MZGATPGtHFSV4MuaVdB6Nfs7jAjkcVWfLnHdXmvW3hMM2nGYyigADWfTmz3NL2iYV6bJzEuabYUByc",
  "key2": "3nCHCU8UnzScR5AVHfeyDvb7nPdvszgffJgEytrtqHLxJ4n2ZAyuyUEnxo8uQquvY4kG2b4zpp6KrPS17MjiH9cX",
  "key3": "5BaGg32suwVNroxkxkSTwZPU9jAptTLCjVLgdg5xvkBYX3opMQPFRuzqVqbK7nLCJriLJNuCbMAj6tTSEaSfnup9",
  "key4": "yHN2iFt7JnX88uKEb6tcL6iPHUjA7Xz6fkPkrQ1WKykrV2BJQs3Mhb6c6tZCnAs4mzmhAuDXHkX8XhZYCaRKuKv",
  "key5": "4XoELeHz1d79tb89PuFokR4BkAjbTFwa3bX5TTkcADiy6AQSYvLzUshQvWjfkC5ic288wpKMxym5n9hXCwqkZQJ6",
  "key6": "emrPpRrNhXVZnhvhbG3BdhEGM5xr9GdY5V7DHjpxW45pscoSMmLTDbYuzyc3ixCeL29Y4hmz1MtCqrwrUtunPQi",
  "key7": "2upbU9GTGA52PdUU8Nap3fRe9Cnyirat6tMZgUDR6CjodgMfVvi4PqGAvjrsT6jsFQMcosefdL3KNC2hfKBAtzcF",
  "key8": "4oo7j6H1X9XAvY7dbb1qa6gbatfuMBFbTn1jGCLNrcwLKdFwyzZEPf1mHcAg94AfB2QNRodfffod9MsBLC4f6T2B",
  "key9": "M56LMnpPo6wnsWJzrf1wJpEYPcnyyKQ1vdi6NySGNRtV5DxNvx89bGbvdybqdMa8SiGqsxpLNj3hRNNNVuKbu96",
  "key10": "61bJfPXzjWXYtuhJrBSdsagJSQNiFW8PP53qjQhiYgobu8k4GWFecQqgvpRM8HQyrt4ygPuTrVexZ1C1Qhf19pcT",
  "key11": "5E3n5esZFXN1WMkqNqLULR3R1XTVMhmmCw7FnL5B6dyM3H3PHFWAvKM4QqJ2GnP2GDH68EdnDMhXhZTHn5qhWveq",
  "key12": "2ZWypsa4sGMoJ3QijQu5yPjo7qhuVzr2HdrBMGWaE1wHBRfyFvSYd3iewrFeuuHbgrYBJWmZcUGQkNYHnFwRRnvj",
  "key13": "66a4ui1hQHiaxHtKPfAhe3iYjFSDnkJ5KVWi5RAhtDbdmT3ZMawTk2mervuHqtcsHBKe5hYAdm9xyZ2ogyNgfuVr",
  "key14": "5ooTPt6gJY1hSAPsakMPX32xaK1EDZvypSiNELhZVeHbbc19wXJZFXYkVM1NqTySvaYiTRxkBvxKjHtAey6YvVc",
  "key15": "3QGawc5srTzJgq9FeKPbXJfVHjixUvaFdAHdL4XC1QQtwcuLrpSfpam376D2fhWxTeewqCNwqg6EpqaTQLiBhwG6",
  "key16": "28xdkzu8nSjdHW5Yp9eGayNCPpKKo5NHmw3zFxEYq4N6hbP9M5PCB4ypgHiZWnGegugdyFJNKwzUJcSUuAweK3TS",
  "key17": "3qhuD6BdJSVcCVKK46v5ivuEr4F25pXDon2h8dp6UsWU7gELepU98bDkq5D4FsR6VwoYzCQHjDgDsVUv7RKD57C6",
  "key18": "5mpvtbCY2KSvy3tVTEUMkPcBYP4f6wTRjxLYNrfkRo4MGYNdweyfQccxYnRkWXCtxzqcZf8xNURYNZq8bUjfk9XV",
  "key19": "3R2ARtTKfVcFwNNtrJKTzk8cTqqnVeXcJMb4naFnH3J6dvTrj742wYpYM86tekJqQBTmi5PY1PuZ1xWXLWVgGrFU",
  "key20": "5o3RE6KbBcXmVpbxyAqRi3Ru49ckVP8fykMt1C43DDn8dr5A6BbC82YhibXN5rboDw1a5VwMPDje2fky2Ea5rSek",
  "key21": "28iKz81Z8nS4Z7pZ7m9nt3iL3ttNKSYxVVYFa1cAhFAkQFRAqr4arq8uMubzoh8Jf63iRvrrtVkkZK4875BXcqun",
  "key22": "4iGjMz8iraYmSCKvAtV2qHwz9obQjWqJmdxudTU1VcwV5b1SEyx1fUz2rxVYwo8mBpWQbsnjbECJ62hSCpnUYSZh",
  "key23": "cnfPwoLuYRSVjDVAF8c7ECewZ85KUgfnXKe7HnawCnHccZsybgMHyCQDDGkZH6rwrte4mWCLdhPbTxSEargPWfr",
  "key24": "CTkHDRcEqUPKXN5YYQDv2WFMuoa9X76nTzRYCCERPc3Stw16EPiVi9bDCL7LovfPKzsuMCs6Xo38uDXEqDBxkeE",
  "key25": "4ursP4aNq6uNomZZDLEvPExhpQuMHFQm22pVw4fC2tYusJfCkCqcLNCmKwVryuc4KLYG4EZbm912X6xdje2NNxpE",
  "key26": "3CbJnjQ1wgHefms8Dxww5tg67oC1KztTNtFiDTG5GqWH9G7quRpq1qd5wfbMUNLNqSAtALfBuDnyV5LPXhXqNusa",
  "key27": "3fPL7YAgc8FBy6JXYrFNM2wBXNf58M5z88xiZdgyD3r71hefWFZPUeSv15hqjzMpVqNBx5eSrk2psuN7cn7r74Z4",
  "key28": "2NZms1ysJVhqdvG1vRCTnEQCfwByqQwZYUkJpht7p47HMadLkq4mwMdtB9Bz4aQWspKjk3EcNWeYEZpsnXQtmBdD",
  "key29": "58VQqNZfULRcTRpKnxBjjgWASYznn4UPhiwiguuhpcWmWSyCDhc89wG1syzozcK9oYapth8GFJJHBfA1J34JKpBv",
  "key30": "2sUWygLBLUNw5yXA7KpiQMv5PVSrPRChZ9Wy1F1yT37QD88DG4yqkqEipsxpb7nvx751rDjTzdvMv87pMUY8gHse",
  "key31": "4BVnMC7ebUcj3inZTvmuEj3e5MredQ5i4BcV9uC3dgD2qVmXkX9PHoLGdP4C2T7u13XV2coqWMizv7cNGkDNL35m",
  "key32": "5JrkcUe1rqU2tuit4iMSnxQkU1yZoS6ygqqqVvnXWEn4MNNvqVVATDbfsj6G6WMtY6iUcGsEcEvYU7hwQS5Mno9A",
  "key33": "4hf4Xj8WjhDMsTMifSqoeUuxuXS97iyqKsH8sVKyvVkhQWQKCwnTSymG3jRKPtb2fHCxunf9YTjsZXfJ34GGCdkN",
  "key34": "2CZtahdChtYWyypoMjTFXb1xHzkAMLTTPHdNhunCr4P63H2YftBYYNxdQgVxj1RPtiki1htX7ZTq3BRaDyg16FFz",
  "key35": "3LpsY1zFiBabxBy2MpZKyKD1UdYKmaPfRp1jC15wGix8hNmM4YvgMSEXUPZHmo9fjPDMPNYpsPix4d4v2vo2zfUr",
  "key36": "4diUJzZPyDXbVEqDqHzBZstwKjDUus1MDqbpr7FrrCZN1rmhdHA8zL8Bfz8VmJdqdjcxvn46hUFToJfUdA3YXt4J",
  "key37": "n3CuA4DRQHEZmJxHyDoUo8QeuhMd9nvMqjrfFV4hKU8Yuif3sTvZneesJvgs6egDs7UZC2RzXyygm5nz35eZB6i"
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
