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
    "5h82uMoD8dzAy9wwXFPdCyp2TiXk7Da9EZhR5FmuKrWvp2EbBudp3MctSX2Hcijx2eT22rPKSdcjKAxRUsfsKtgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkXsiw3i7rsXwXsvupzawPe5ucrvRY6GCqPJ67SfY8FNchtvQHsZacVVkF3E7nZNfnhdLkEA8HMF74yxVw3kxrC",
  "key1": "C4jnRDTUwKYvpRd6T75F8KGy1goBDv1yvn3AqmNbBJd2NSL5gb7t4CtWgaMR2uTnXNjBNPPvXM4HBco63vr2zLA",
  "key2": "2VsAAdW2yZoP1BtGDndqScwFTfDfQkkxN6KN9d8tDAWuoaPavLkkuKdZXMZF2EtfzJcP2USP6i1EQLT7oyGXbzqd",
  "key3": "nZ58uZTPTsC4BYakDgmwi4ucPeh4nLqKwWV566paqXEX2LJgkZ78AureKn1B8ojrCpBUNMyKoMwSmMFSuxVtztA",
  "key4": "54XFK3VCcFn7T3jcm4mjJJiDKtupxVX6yopcSn2T2ABgwubyF3Z4iwsELKteufrSYSf9ecsezVNo1vV3TGMPbgSi",
  "key5": "2YffknoEXCy11MZvE5nk3rm7BfvehSDuNaMhSY7ZQfYfxBqvDh8aoFmScs35seEXWjqbNGYhLtuqx4BPRBGSWuCq",
  "key6": "5wvbVWpLh7pNteVznyJ51eyF4JMhk5YeTSJEAp2D3yYHNbDqL2DR2A5kX6fwhRjWEReztVK4WbMXJWtR2JJ2adEM",
  "key7": "5AKgKMwaTj7CgPAkzb3eFhE9Tvhs8jMcF88wMVCYPzrXSiX4N2KJsRQgdLMviRSnTxdzcvcFdZGjzqCzTBN6fW5k",
  "key8": "vJaTE2fLPsG99HcBETsZjGNkLrWt4Tkfc6KvN1Hy68Axg6QV2fZ57V4eNaQ3f19yZs5PXSayqmEGjZjycU75NCK",
  "key9": "eL38qn5Z5GbLp48vygx21bA4zgKCcd1b1nMLD97ABTYzzEDZ9BRvXgQqe3RqPj4PwjEUF83P3nkPUJyPwKauQQG",
  "key10": "399kGGq4tgLyfWpGv48wLTcp6wGU5bLehuEBBUx3v4XoXPk8tbs4XhFoxrxH1AUd8ur4LAKSrUqXYLQhr1dq55ST",
  "key11": "5Qf5UmjFpMwnhNV74QoTC1CdiSARx5vtxynJZsk8KzTcu7NdKkDWuXQAr1zfK7i62kpjyUnErhkBftSg2Z24zQ29",
  "key12": "p9aGTLcbyboEHAmL9CdYGuZCPKRzNSb4hSdcCbWEbKK35Kzy7QkmqvBxwM9MKxkxWkRqbdbntDed6ihNaYoJKNX",
  "key13": "4HQo4uKFWSvMr9N6Jcw2EPh4kGk7YPxfvCoM4v3t9xJdycY7A6f1xBeVDXQHt8MTCYZBHGohDP3acRRGQ6HYd6J4",
  "key14": "2sHSLDXsdesDTosho5HgHmLTQrY4Xuot6ean6F3TMN7HmVGPwkCYSK4r4EVKqtGSLFBRRF7z8wtTAPLvMa67fTE3",
  "key15": "UBnjpWTRNQEqT7ovyDzp4pfsSjZ8bLNcFtAZhobEqHgMbQRYXdiUnA1emQu7SCK13c36mxwL4SkkQzusJiT8JLi",
  "key16": "gFXe3TGN6ZQHR7ApAtuGhPdzZGaoFvDFT2AgFyCspQvHN8qtNE2qr8usm8ee9GLspypprkix1pWujU25ezj9Jwr",
  "key17": "4PHx5DQtag53DSBybVcUis1yxJ7rhBShJJG3T2dVM5dfkXnbWnVksvva8rHhGgS7QBjiGx41jaVq3r8Xec13YW7e",
  "key18": "5hWvh7BYFQTT4FoNb5h8JK74QLXFSqeE7A27DXuuvHJBmtkhRrH9kfps9L36GYhV3Ndy8TYQSgkn2CnVY4DkJ5wG",
  "key19": "2FQg3PSuEZvoKJmGE6cP8fxpLP6WPZsjzCYR5LG3DeKMkPjnyUYNbgHM1NSGqdVBBuYtwnZyRve4yw1Nv6TNhn11",
  "key20": "2Rzg7u1yUqdiZJp4j2S3bQ2ziHLFQKD9RNF8NKdBnWHHgaAhgq5ZoKZzfkKCYRbPUitqMbGkgvm8q16zx9iCzFMC",
  "key21": "3Nh3w2E4S76k3p4H5LkrMc9QxdZLPG3VzWtU1vHaKUYG1nvDBgkQWpjyQu3QMo3x2Dx4iuUzR5fDxGg1Fqux7UyH",
  "key22": "3g2jzsyPrEf4buVbxvLtmJVurtJu8GYCpUJqGGzBuvSG7sE8KiLu46xNfvzoe1rhYBXyg4JLxpQQuH1zDNJVgLBv",
  "key23": "28RMbbgNi8Dch7eXLnKJiX9PxbLnzkmWjks57WcGntdvqZFX1G8Wyr3Zpgcsnh1UBHbyjHib26DQWhvwFkqvv2xK",
  "key24": "38NAWkYvF9Fm1sH3r2ZPwdjjq7hY8Uz1A7ZuHyjehvZtSsFMj7t2wWHPzc4fehsDRdBXTkPHuypq7ieHvsb4bUXy",
  "key25": "3ETMCNPMfLBpvZNQemJ9fwabCy4bs2DMxhkhJhcUWdEFMQ7ejarh91xqGZMtjb3297vLExLyvRvhHLJ34fbGySrD",
  "key26": "U7qyREMFQeiU1vDkDwgw2Ey1VNxJWoaPa6mAXZooNr3CMx1yXa7UfgcWA1afPUPimZ5UHHsezSFCAusN8MReTr5",
  "key27": "oXKQGTeZq3JJswcqEc34wiYmirbz363X9GEm35ocKhoVJ5BZTzj8pzR8cuqWDbjv66MmvE6TJStKnjVi1aqXHFR",
  "key28": "5aXzHQQEPBoTLkgoSsVAr688SN4KZWruVb99Wv3EkL5Zoc67gW53cJxzD3gQ5zKnzbQGNuCmGgLBFs92UeFwNLcT",
  "key29": "47QC3TyAfxDZrEGYXc1UkmBr6tQxaQYrruYLgphgERpWhogrLhjJYMEbCiF7VK7wdtaiaw3i2ASrNg7JmoWwJwkY",
  "key30": "5Ar4Hr3cZNqz2WftXTbd6P2mKCybrqUyiNDfZRVD3XCEbkMMZimquyHJVUrQgtCGu8z3pwhQNxfDJjYf3WFRTp3v",
  "key31": "3qmwHLAf6SPjzQVXANErF6kqM1EyMTWdkugvus9ygTZ1cq1NXGDuD3RikKzL7ZQ6JxFmTsbeq9YcWhdUcg5W5fQh",
  "key32": "3RFSLGFsn3PSv8Ge7K1BKZTPcg879DyF6W19ww9sE7ZNc2wjM8nkdQ8GFAhjchDtGmUYZboKLKhH2pHrQ5PHmNh1",
  "key33": "4efYmgnmaqAA9RH7LzNrsyWMXgt9sfx5d8Khzm6FCm284oWPQ47NjhBhYeoUjfSLLrSNL7D7vYb4LgxzGpDVgLb8",
  "key34": "4bbnRq7SvvnSiytTKEG1jAFRGmtEnJiscxu5UgnN7YLjYFs6v7PJ2uLsF19nzmJnRYmhwJAWvwb48sGJ8P2uvJYc",
  "key35": "4fxcgqWGF3XdcmfVEYBE1fT3siqELaJttzmV8qmQnCmeUaXp2Y4NQNdX3ek5XomEZTtnWe1c72NZ9kHuH7SY7uDw"
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
