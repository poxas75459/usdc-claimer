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
    "4Fq3u333gBabRZP2KmWjqMDiAeohC333Ji1B1UFHnvpVPHQ5ckaJnajJ5FpKyvbdTbufYaX2PNQoiBncKPfww8Jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8y8uX8BC3kK45NbonFHecMGWLW2FGB3mAeGRVE4Yt9Ph4KiE3jhZ2tyVHZKnBhQJZg8CdHvX7Kh1cTmZNbdgVDM",
  "key1": "2qqm1u3aMKRdcWp3RtM56mXm5WV5c48BAviNt3fSGQcajjY1bRb9xX4mhe19pqZ2v2XPWzdcvhcAEJMog7KfJQP3",
  "key2": "2r3rUvbrgB1NiN8w6PHSaMhDPPCcae5oqpnfK7yuqcBdqbaFAmcFtDSb1kKETMKsjaMwWgCr7DmU5DZYATJ9LFYK",
  "key3": "61VptLc2gNuP6RTeyqgM1eiDcibQPFxhFRK1D9mELAaNG9u5CWfjxPS4kMZvV28xTMBBsRLcT7iJRjJchFWDmxUD",
  "key4": "2dc2es5rvhFaPxDijg4ac2DtvRSu7dPJPr87wxXmdQDtmyGj1U1D3eyL3vsUGHkS5pTGaVGvMAiCCVZoybP93rQp",
  "key5": "4sht1KguDbdncKYquJrUticZ9Vsm1tKnKkuRcdcvC7vp6dkETEfTy1JW79HwFdcH4UfyY44T4hw7ZBxaSoBiaczE",
  "key6": "5EFFAELU3pSJeuHZe5DsqJFBToAXuTwCAVLbp1jM65BkJfy8xmB4SejVowoRGmWe9UQGMpPwp19TQrZX5P5n4wCC",
  "key7": "2keJPcVzH8TjzZAihYSTsqVBifdPZxbhV8VkMmCqRsGrKbUS3apmhL4TdK2NUyyo5wwEYYj5rXva513nsf8DhjhU",
  "key8": "36a9MyNEHYD6KVP4GNhzruLhHQodNYk5Ko6WEdP9iMxLXwe7yMaUxuUT62dU13EBVHvWzy7UvkRV24v4gjdHmHwY",
  "key9": "mx1rJEYLxoRZqB8YfmpE8BZmmtAeeEpUqBY4Xqn59qSu3GyJbRCDhr5Tg8L6YS8iX6Lj2CshC7e7E8UNEnfzNfR",
  "key10": "2edjdx4CNmnF5JpMJt1q8Y9woA354cYGuJYhyyyeFVjCuPJVWnv1wb1ZersevSaEgJdcpJpCDNQ8HdGFD4mx9281",
  "key11": "ZXy7HJorHJaaSD2dAduVzyDk4gYwvrTMkMphaDiBeShWsMdbo8BCbCugQx8uYsHqDRCxYBcUFATNzU17UgxSJKS",
  "key12": "Dyoz4NreNLavEQXb8xosMG3drVJEB9t99jBv23Fh91kSehUSF2pJGbgC1jYj5hdNRHEVh9EdLpAdz8MvBgDrG7n",
  "key13": "3V2q5yQubhGSxs6opztEYX3adExhZmouJ1WVXQbBtXmsA36k3We2DRiujU3rWM9yFzTCp5xeJD7VgVzgT1tcopis",
  "key14": "2disB41YffS9XLdQQLAnNGBnNuK9MSQouJ7Guq5NrocH4eD4XnVgEuNFjSiebZZrYVFPu4mpKaCQf1eGcP3g243L",
  "key15": "5jGDeeeTjHSw9MMexy5Tpi9Uzxn1F44a8An79KjbcjQ6XN6R4bLcWHb1bNGVeNgpR4WQfDJBuEwd65NWJVrC9giV",
  "key16": "4zebCYcy39ARJJPiRc7AAFkK2JujsFT7zkNjFQwuRFj1TYAFPTiyx4jxWR5tqfnRyJBDvWgzL9zHTvMcvRMQ9uMC",
  "key17": "48B2DrTE5ivCmR5FKE1Q7fwcdSApT2v7bY5yRpKEyCeYMPjxZLLw8R1WY97nxpxL8EhXGf7qVqdwjntVKYTUfwBd",
  "key18": "3pHHcoHBMVLeXj5MxCaiDKD671wvQ8iBKCidmr1j6WBGdrDPa2YhtJLvMDngVftCgXdhyUvxNWJrmcBysdgTjPPS",
  "key19": "4WLYRvRuEqvrYBPNYE3cYisASRRNXnUdftmmGPjR3PJmKmNTbqvANWq2uSvLvNMdkRu74BMAJdm3W1nJ3ENuzBMb",
  "key20": "3MLUMx3JsLoJ79xyy5ScWNurXvm5VModRFy1ve8AmH3WSkpkXfyEcJjLqcdAqs6LWi51v3ubux5k2WgQGZPggd6i",
  "key21": "387ACDsmgnRa7nN4pB2Uh83oi4QjM7jfcQ9nH9XR2H7kdTCApuA1kuZ1Laozjv77gV5A6KRMcC1feJe1VGJvHuhf",
  "key22": "4c8rcXmt5BcADPscqsuHYqFCRXjvprSwPYrEYnmg9oAMEctPCXRgrUcPGh4MH3NBq6jvwq6EGB2KYh6WG3tMKYGM",
  "key23": "5wnvven2frHtpg5qRTLvPn8FC41hX7t1VeUGt4woqaPcnjfqBasey4ZqZt4f8xEwcXbsyqHBw3gr3QKgiM6KMxLT",
  "key24": "4rZguEh4BiMmTeU7NVD6beYk1qhjHez7Nw35WJWLq25pmMWQwpDhjkgFhJvQkHuawcw83kntdm2KdJuMJcPqFTTE",
  "key25": "5exnR7ouesxG7TzJCZSbbeE8gpmn4SajzdQJBNnHguNFDP6qukxPKyyZa827NVDz5JTfox9uMA3u7HBLw3g4hGGu",
  "key26": "3rCaj1moi7yap9GAxFepYf3nBoUuhH6EMKamVdpHawH1jNviYNGhBhTaXhNsYbcM99scyoo5hceepYpN3BeLXRpq",
  "key27": "5SjCmNZhmDmVvArFTNSLS285jx4yYKcRZhVd26qam5GLpokdLTRQ4mNfuCJkg57H88VgVYkrMks6ZoEk3syLBi8T",
  "key28": "4ABP96vrDBkLB9PzpTzgWDp6FL2H9FQRam3w4uLRDsfBndZ3mov6X8XxA3C5vD6FkvvGDBdfbjDfWTkPdYWBm3aH",
  "key29": "66RHnNKLLn6Dfs8M4Ms2tKKLRmHpsRb9gEm5YYVqeVzpPSQGsSGsjtcFzsA4CTVK8LgiNXg6VY7EHGZQQrbQ3RRD",
  "key30": "4ynJERu6LrzPTEYKTwCSVB8ANDBg1XugBaVWvPstgTTfgmqyWXvA4iiFZgBu9VB3EyWZH1fcTpvxiSj8k5m22SXM",
  "key31": "DorYNjC7UTKz9eTn8ak9CzJdT7Zbxp2jcprSwTNTopKSY6rn4aMXZ4sYLY1VkAfDbQHE6j1oivHqyJDVS2Ndk4y",
  "key32": "57a8qAxSPvQYgwoKDX5Z9wvN4pqMfHE1PohfUWcdcUGqKNy9XkdkqJfG3nFGE9jo1D6KoEp3f1wS5wSMbYETa36A"
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
