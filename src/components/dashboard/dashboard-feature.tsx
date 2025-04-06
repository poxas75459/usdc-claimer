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
    "8NikinTgQjWDaESScEgNasPVsLHTrvHCBWivwKduniVTTPqroPzNLmHUhTRmasXXHNHn2NxVrTPzE8ymvJyo1ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCWU95KkxYCDr8fmXfc4mDBr2PRMvwtRQiw7LUTNpBFvdHdcraxTL4Ma7ig9cnwKy5h1qFWF72j7x73ENg6HsaP",
  "key1": "5z9vVgUnin8b42hr1ejaRLaprLARTjaKwNE4JEKzHhJ8YwwhabWZomettDaAcbZ5vd3PYHxECQEG5c19uYQXmTLD",
  "key2": "2as9P8tRDKSGiBRznKxnpxjdoAFqHrgXkfz4g95Q3xjiaC82VEn45vLAVWbKDd5zrLHoJFbyjoaWAbgjEXsoS1AM",
  "key3": "D4pP3LLoAPJ2ajk1qmm9GyV5y4Z5i1hDAQ62Pd4vDexTb9ZwBM4Kxtr8wv2Cg7qhrpnMNFQqwZJMuiveVXuKKgF",
  "key4": "2p4n1BppdrYMjTBwNVJqdewCiLhuGkZrCfvx4JCYWoompDeSb2bTcv5RsvJQ84tYq3yonQJa244kFe8KEqDdb1NA",
  "key5": "5LuPhg2dfhpSFxkec9NWsGMCHVVdZX6AjEEqJdzYdD117MprJkUKMyvGuhNpCwfRRo3gtniVJQKo8vFEGSZ1HBWk",
  "key6": "2CPJBHuduf9ndcwb6DeJFvDrdJL2L8sU4fQwJNZgoa1SeXhXzH7YpHSHvapgCLxSiioTkt7i8pY1mZRZBhtZDxxX",
  "key7": "5Uc3TZxYCx7yw53xvRX5AcU82eHY67N1YYQxtYEpjDzvtVvyBYuWKYe9CucpfFS8BYKAaSky1yCbfZdMuVc65DLL",
  "key8": "5eZscnWNUzttZtd76tC2dqJ7Pn87Fr9wXPz7NFa8NqXedV9erKETBonqjrEA5B3PULhxgChvtiqXJjgvfKngMpSS",
  "key9": "24wLgU6Dw7imJL4VHELD7cZ63YVo8E7Hxo2paXdzspw7ppHqt6dxH98KZcikD15X4QYiuzhQzneKoEQCjgaxcGQN",
  "key10": "2Wa8GoYQmYTYAz8xk6fJBLqXsCPwhb5FPH5E4oBbJriS8x4aQrdb4hoKfWgAj1Y5hh7y3eyCs6DPYDddkKeNP2LB",
  "key11": "3pYD4yaVn5Vg119DPm2HN8CaSx1CwKPYRTvYEAwzZqNcRSgRhUbH3cuxS8MVik4rdhMgrthNwEVc8uUFfb58nrBs",
  "key12": "26Q9DSi2azAZiV2jBEzB6pLsTb2H8URyF6dqnsggJnaPxdwLQKemmgA3Q5dDVHUN7fuJmKztm7jmyZRofNh4dEo5",
  "key13": "QnT1rdTh8wBgyMKLvxGejA6SAagiJv975enYA4ELnYRJbZroSKNhW1QrQiP1si85LfAKP3pCep1RSNhLsH87jP4",
  "key14": "4HYLzH6sM2MmYsFcFgxgFnJ6DBVBRRRM6bRU8MLDtMvzufJTZvk61bF6YzQea5MhSjH4FmyXREV8QKFrSdWc9jwt",
  "key15": "4uC5Tk2wV4GAHis2qVYPUXcoTsRVY65mHf9enwaPXfyxYcMbyyVPcFqyzfhJPPo3edMWjbuDSkWMsdfMUPgbPVEz",
  "key16": "siRDGvwQSRqSrBbxmQR2gHxDjjH3ZdHZXS2k3DtVjA3hBsWMMm54ERBLGitcLZdQ6uptR7PDGAy1MqXzRvGeFWn",
  "key17": "2FpxoKHNqXgRbNB2YhGpzhxkKzDXfQ6G92Yo7RtGzn7HMNJjH3ncxpENsURTjXjwVQUrcY6eGBZceTm8PNvwsu8C",
  "key18": "3gPPCEQevjy1nk7LiPYf5jUZbunHJFvE6y5CvQmYYZrCzXMDatBWNaGeJFWwRhRshbSycVfCLvce153HnVY6rijq",
  "key19": "LrWhpVG9czRF9BiLmpw7aQ19v84WyzviMNuzMBu5EbLoTEHy9aEKZ9AP86HPj895pahnHRSD17k7AYWQni3Sboz",
  "key20": "3Nea1iKpbwq8wJMWNmfofr2gN1XTdYSNXZJHeJ8RJsjeP19QPszHHHLUDqe6fTr5zmjUXGEixGcKkAPf3DkXpvNF",
  "key21": "4iiHmUZ2ypQdn92ZNDt5XkaWxc2xN4LV4Duzxbk1LF7o84fk3DUEnX2YSJWjGokvpAitixZNvhh6La5VTkXAaDT5",
  "key22": "53jvWub8gxi7R444Ng1n5vdZEGCy9b2qs4Jp3MZmFgLW1zVbQkc1SPPjFhtairG2d1c1vuaEeWWP975dXpw98iYt",
  "key23": "4noYYiPV6yZZEmaPANxNiXXyyNauo9GCJiVYa95EuaXZAXu47ZufSKn3Pkca2GnsjYHSxGzq8udtbBWAMYzVAx5v",
  "key24": "3fk1rZRYxUQotdPUFKZHaKmtHTzq3tdGbv1gANVXPYXf1nR4VuEwePHqykMB1UJAJcpMab9Ym5CsfRWyzAysJC66",
  "key25": "5zct6unX3HWURVnfcyMQon2zMuooZL6p7LkCz3CVowSuRm2nPq69tUJPvpji44gEvvKaxohW9kXLWq3SA3pfuuqc",
  "key26": "QCwkfK3Y3KwZ1bN74fj3LJNBXyJVzHCDh2ReGmaZdaeRhVm2MoG17kAgYXHVnxLq8NzRuPBiTi3J6A2LYbPAbnC",
  "key27": "3BcvHJ798UaoTsHyzALoz1PzqjhrZDgqtNoDcxhDYBWmQnfqkaFfVdj6yseaKL3qvRHEp1ZWfXBffXYLmsmfSu9Z",
  "key28": "4wsf8kjpTko2ruyDR7MZBpBCQZokXBtFxQkZ3AYy3PZxPdEXrXGA4N5EyadDYYhYxP41CffcThYq9Wmr58zViF6U",
  "key29": "5cQXTGRUzmjrjMabem2E94iuGCPi1ZLKN3ehFMUdbND4KHRhbpFM3PkEQEQ8rKLF7h2118PWrVwMgTBd3jRLCHte",
  "key30": "3y8X5dLS3SRGBc5hGtNAAMkN1f9BGTbRt4MmRZxUtWU6Bo9TJnUCPBNrk3fF41c2SdXKdGZF9ywULt7myJF4NgXx",
  "key31": "9Ns36Yt2Mh7H8Jd91sircttu61YeGx523MwPtE4LQgmYP2UADbP94PxCgGZE2vHMo45zHraRUR97x21AKvwbHf5",
  "key32": "4hJWZ5TfpcYmAa3au9SGECnwpdiSMsNByBZRLXjKdxZzixWVTs8ykTG4i3i6Lb1Msu86hGnrvyQk6UfJkUPig9gf",
  "key33": "2DsTsodb5vfoiGXjW6bFXAHc5XedNv75G1qLqx7h2gmskUt17mpkVbrmtFyQvLE3br95TsKxwRHNnr5E9Ls5Mx8D",
  "key34": "2HXq5mxc8Cvh3SzATKzohje9DoPqL1XQZxxkLjjr8kUjePkAXwGYuPAHmzM9iQt74owLvRy3GxLxfffV4JR85f6w"
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
