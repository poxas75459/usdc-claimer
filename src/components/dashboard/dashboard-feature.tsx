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
    "5LBFW5wMzEkSCfnK4fxY6ezw7MrNM7jWxCGxFd9deEy9VUEQVXJ297sfTmYiVknmQ8KdgavbTY7K3naXyi12Zceo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HeSAzCjf5CUDrGvszy9NNH1GYZvdvbHNLgfBf15f8CfSjGHm7Kd7bYcNf1oExCLGr32Mccozcx6zCLwF3njDpq",
  "key1": "SmDGxUZuY9XGKAKUd6PtZ8QEbRobtqMn7T3NUHncEjiAYVkjF8ES5pDNG2Vxx3X3VWdWTNBrZSBzLvTWsGVUCqc",
  "key2": "2et82NdzLB1PMmChy1ULQn3BVEBFyA8XoTdfEtpwLZBqaYcZQBDE39pNSCrYj1H6ebKUnXmQEpjTDvQL9E8MZvBi",
  "key3": "YNVcRyZL8kEfaDSdQM7ypuKZENnYyrVvfh7djaDxmqJCMWQyhwDhEdKibjvoZARSe8gRGbfH2Dgqjpr17PjmnUT",
  "key4": "33FcB1EAVtiJNdcapqoq8E7KubcNuLLdK6dZMmQCNMzmB3GHKQxREErCWAMMFe3UfmfwprLasUJLQnVVcMEhJauw",
  "key5": "3DjvQMwhczxmy6u3S4BS42CBqxKd11akXLN64UHuoMWRpEw82Cf6LYz7w6DqHXwTZzvg2n21pSuBzdqzs2d1YPh3",
  "key6": "3ekx8z1Hb2635oJ8s32Cyc2CHwt3WHFrdfX8juZKttzizCukkLyDf6JqbpcuNBXNDdfhurkFuVhYE2UkFaZ45HNd",
  "key7": "4R61hPfmjS5xHJJUeA25qbrY753nbVC3rR9VxddRWDPHvLC3GQyeirDz8yhnTSeuDqFaXdGzTuW1jvJ9iEVUVAhW",
  "key8": "4GePYEBQLNjBwgKnBPC3rQp9zUQjgN4C7bWJeQ7cviExF2Gp4T3RyKJpHb5Wbwadrzxh3tayYXGUXhkZpPHXukvs",
  "key9": "636GzSXqKorxNoy5QNWRwd9uoFM1Avzc2Yc2HPBreZavuWi5eWs8B2mMiXwemu5GkszJW2PV5rasAM7XSDBX68mp",
  "key10": "5qknTmyGCxKX9fdMXc9WHy5F2GGx4NWprn3v7Yd31xsEPav8yzhS12eYqn9zxYKwfor7T4kYX7R1Dyjt4xMEvuFJ",
  "key11": "2QT27QHJcxNAat3KiyzSe2aEk5CU5scTFK9WMZsJ1SAwHQfjigvv7hxZpcJ7NSQJERymD8nozR4DejQed9nYiGFm",
  "key12": "6a4VsA2yUseTpfisC5LJBUDuViCPy9B54PS1xwna8UYUC73oxeqAuLJ5iS14XZYNJfX9U6HnwYZgcDVGXzqSJMC",
  "key13": "4nZabFBsaAvFFYdmqh99M29WNzJrucBcRw43Xrq7XpZm96RHFFS71miDNKZJ8FngAXetjFkn6Hjo7MWGJiSMF8zk",
  "key14": "4ot7CH2BaMKu63c59uhRXfao6JZPspkD11VssujF2MjUuKxLEX5qugeehbVeqAHKKxTS9LSob3qJmKU3MYs318gr",
  "key15": "4xBdmYAXzm5nFb3Gf9urrUgHkU4XZVQ6gurEgcHF6nCGHr8Aou4NMY2mr1EYqRUZRtzR929fRfMYC5Lycvj7wrse",
  "key16": "3NgRxWh7i3C585q8TWt6StvrEgRVPY4KmwupxBs91cf8Kqz4mBC2JdTZETosmtPiDc3CViZ2z2bBev8vgMegWGBB",
  "key17": "uvuCvpih9DDafi81oF4bHjweQ5kja9nNrHGA3U4z423UT9VztMoeaWWi8zQLZmTX1fwo4VbnH8USSnnvhTMfKix",
  "key18": "65mkFXda52nytkj6KhhS7QLWBLFc1pMuZTQ3Gre3vSNZ9CJdaiCE5aEZYa9jzcJQ42wW2i8mEefHGRi1e72Efrsp",
  "key19": "3MXMmtgYLTfycA27Xta9YRGqFHkEx5q3bd9zeWF4rrhb4YN7ZVmdxR2J1vnBZHxeszuKevntSTr23ZhDEhhYaWVX",
  "key20": "55Gqs3kfFxHzjWPmjJTMa1QvoEi5fv28i5dUAKNyDDR5pyoyqd9hDBJJsSyNrvtan3Y5kNT2HYAgUc4PeukNYPUE",
  "key21": "2mNKMmLCr2NXN3oysC18xy1t9fyKbs3vwsF9aFsz65FGguc83JQpMWu5qrXcrVmCwf3ESXJjiDr3eqkhDbT1RS6L",
  "key22": "3rNU9A4WKiNf2Cw1MhDoczjCgBGyenUQfrMxzrEW5HC9XqSqhZqw12mth6ZHzw6AzSw5BzyuYMj5ujZKkcrK6rNM",
  "key23": "3hpniWJRE3mfLoR3XW8oCeshmfVq6R6azaqMNMrvDvVejHanwfgSybbKbboNYkLZg3Ho7iyHVo3w3zS49H5epTXZ",
  "key24": "2nGnRyxrbHdyqB9jQmiakeJnNLwcTzCeyeYNfNBsxYsGTuyKu16uWWwYrf6FCvTkjnnZ2JH6SMykgBnBhzSeJCAe",
  "key25": "4SqmM882NUGDoGNSe2oUfQjggt835vzyiR9hVxxbAB3jAK8MdK1UMajb3tycp7APa9JwSyX2aRDxgn393cU25AJH",
  "key26": "3SGzQs3j88nX4SzqkMyS2HJaYb1ZcR9KcwxP8DgFKoXyrf4uGehrCZ16W4fDeggiTQgeoC4J4dqjQANaMRGoc2o7",
  "key27": "4DPkuAJHz62MtxGKH4n4jXHMaEUYJ6jXn4qXkmp1F8mXU5miAevccZdB9QKxE2QYt1EyTLdjFCSwQrKdLEZa6v9h",
  "key28": "4d1xVAQCsvaWPgeMMWmdUVXJApDhEYjWgo9yDwN2xn3W28qfqsTz5twStTxc8nUQYDpkb4MBWCFhCNX3oq9SAT8c",
  "key29": "YZGDdCq81BiBCb2CDrFCHUqbvCaGdwKi3WY1ia1LmKQzv9gUfHkXaY8CrR2q6D7MoBP69iyDKPDb3toe4JEjhEX",
  "key30": "4yzU3RnS8GByDWhS7LPjWkRiBkgvGyoDzjhNFearEBhgUVU371PJ1ciWfuoyE5GcEUZEFPQvVYyzzwRrVfBZrd3a",
  "key31": "2FaZhxfM7cemqu3dArMjnN6cd8xjAYvNPsDacT7Pa9YeDFCUmGiX1NpLtZ8Pmn4favB7g2zwXZEiR6NFpwfua3ZJ",
  "key32": "27e34A4YwzkuMCfmyTzw8LNjhyJkJa924sDiWUWxrgLPvxqy4UhQBgBERz1HQuzXSHT4Fx9Gg5hxN1SZNv7NeTC6",
  "key33": "9uRWsHhEgqJpPeuePvyQKQW4jBD4WaWKRo8qC5un7LGARjozcbzpxjFSr2Sxj3YZJRkzy12GJVXRUdTuYLWVzdF",
  "key34": "2U9p5DKR8tZ5UXSPaVEGwXpkuqZqFWzLjukYYRXtUtDLNXzj5CFGYgMi3i8ihGbmci9MrF74KcMq6LDNgmYWwRq5",
  "key35": "3XvDcEsoWXn31aMM29yKUKZZHCaDvCEieJujRdEGtqKRmsUSmJGAsxtyf7CtPDLVCBxEnGcpXPVJ1G68GpyqnpRQ",
  "key36": "CTsG9dRjawDycAUFHdt51a6ZBg9oRm2e8UWeZxUyEkxuPsQn2BuxttuvGk4dxPyPgfSQwP86wkcPonE6BFu3fjt",
  "key37": "5oifc9VfawanJTQ2cpdZjF7dwLFi3SJy8D4pZx4jCWKiYLzaymBXFWcyriD5xFRDsPqcFWX2ZpK7H9z4EqW36gz5"
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
