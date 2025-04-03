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
    "41ET7jVEQVSHEQspx9KHd8AxjTYaQrCpPyfkrnZx8ZEA6WdCycqyy2tS7f8hXAYBLwRSn5da4hiQs9LeWzDzhbJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Bqvd1wsqEUQwMAWxAh1YpoYhhqak4RRcvkDttXwkQ6wTWy9n2zrVvHGCUGbtNzrPhtSYuv5BU6XhBESmgkypJF",
  "key1": "3wnQjPHp8J5ur5C3CGEky4iqxfQudk5fLRD8ZVs4TmnV5y8VEFYnmmazc1CJd7fGEerKvvYcmZnFZ5E9W9A99iFd",
  "key2": "5zZkqUr1hMN54yH82sXoXWJzXr2geU6T4AnUiFSva9Vzoj7uWzsdFQoMQi9z5KJi36wP4TNurm7W1yY76wk2jYNR",
  "key3": "3ihBy9gCmj5drpLvTZKXwwacj8QiQdthVND35sfCYmNv3am5zg89fehrvApGY8XDzj2NpkZYTJkP45hMCWeKST4S",
  "key4": "5UsJt43WgpBQUjVGYWdr7opyVjLnV17aj8aAo6qhax3XbZNSCEQAm97SRFK8SUXeibpnYr4UuQqmqNVFUCAXzzrH",
  "key5": "4ojExQaiNGdQSise86QU9NgWTdfkGbW1TawkHPgqqVTJJNRntDZaz2tr3ZU39C5UdKKuBXDkcCMHGVkhTyzCDGYU",
  "key6": "jDXXB6PTJrxM2gNwxeshTjgrEtEbNKrZRf4P9K8XN5qXu7Bxz8cb5e6AQZouSd8LSW9GY7xNW7L6fvXBpBduNF1",
  "key7": "35ExVmkSYidbAQV68W67HiWvoBH7b1ZE7aFikcNTd1c3e5A6Ra8bWyUQNerotH2haWmkrBAXLBtmSbCni2L8sHpE",
  "key8": "2AQYZvhh3VgLaKc3fAmnMPmQqD3z9WAZiGyEvMVky96Xg7p5jTWWggn3gZnBCq9rLSqYVNREBoYDtXkmiUHMmDDo",
  "key9": "3MSyZLj5zBYfan14VhSQC6XGCWtNQTua45LXh5BxvV1DtN1Rjga6sUGhso2yQDw3quTQSHbmgkdLBCvBdodeGb1Y",
  "key10": "ztxNCHSjCgarvvyY3ZDSdUTMzDCGP9MhWH85eh7Xki5VDbkWfHJXK4Eyp9UbWzm7TBKsCGpiBFcupDNgzAyX65s",
  "key11": "57Yh63JKu9yJJU871T3JJdvuh8i1VgNTE6hfd5ovsEL8nbCr4zGyX38wVRQ3iSQ2co2GwqHZJh42vayst22DgvBi",
  "key12": "5tbEo7f3NiUb3hXmzDWD9Gx2tDwoTtwkZA5nJ8kxBEaedynWSMcSeW5i87Mdret7dbbt5UeUpt8wBrJrLww8dRaD",
  "key13": "2ZGLPPY4xKZ3atbbEXwr3d6pGfCKS6MPj1YbqHqNYY23nRP8yGuojCK55bWnMPWbbFNCmbK9wDHPSo4gKLAKH4Vp",
  "key14": "5vnKR7v7DWasGdLuvMGLEHLb8wM64o2j1HDXnsiDy3ztiMz4LaGx4bzfDYK9XgJGJwrwhUWsYPje9RNEgT2ZSfUY",
  "key15": "2H3YnNBXYz7UyFCcrAY8ZsrfNeRcjtHpFrFKp8wkUN3AdeWE53qpHkUtrsL4px2D2Dgm4wxV6CVYZ2Q8ZzxtJKb1",
  "key16": "61QKmKjGL3jHkoJq9MknPrVhYNeiMaacUWuTB4qZGcizbGbFvD1J4M7sftDca7EoEipXh3rF5uunBEU6Y81K3yZk",
  "key17": "4qeqECWrCXfBqCdzaModVgmdShEyKa2jjPuFTaKpabdGSgXBa9gqhb1UxKCqdMxEhZcVa5wRCC8btuz8GMudHf2a",
  "key18": "jJwyAiFdtFwo4TirnpL5Khp13B4AauPfzGYoKW6NVMxEHLSR15aFVX8MesVJ5WaYPeiFmzhMG9TGmxNR94eJeZa",
  "key19": "ppymKYSHy1xWhopSQuVsJdivf46BGqqpakx6PTQ5DuMdWFrSB8AsNXoZSwDjgYGg9dR6eQZj8yBZSoVE81n9e4a",
  "key20": "48ebpNkRbQVkzkxC58e2vbxEtKtPuAMrxTBHZMvc4iigt4S41eBG4vuSVUsUzt9NTd69xoPihnd8JXxK322gxkUN",
  "key21": "3gNZuJNNc2MaFpwRPboAjQZiGjWzZRZDDSHGQTWuzRcY9n995dSmkbG5CEyG7WGwoR97RTY28MkmFwGfunYeBnUe",
  "key22": "Y9tb7sTV8bkTGKPPRjQaenmi6L69K9oBSNvSqhx3ifXq3dSd8wc5ydmXkiCeSxrf24Jgv4pLB5fA76xwgVTcxYd",
  "key23": "5dmvb84QuB75jUqqrqBLzHPJfLjvjhRvm8fcxFJeexR7hmnovDPFMnGCS3oaZ39EqhZe3J3mfhzdH1Mf49WckH92",
  "key24": "2tns41xd4yWzkhfmSwBcsvAoNRmSkhtLZ6wFDd4oALv89HfqFNUe4x4pacJ1JkikMuzaXDB1DMQx55Po8GA7tjLL",
  "key25": "2njUNW2B2gXPVmFUNNcnTqLDGJw1qrWfBhjpuEk7jxu3wukCU6sAzswG3xJp9quFZp1oae4UQBun2uqHiwVkHJ38",
  "key26": "5cBYgmcW3KHMs74mNs43hs8zjKCzU5a7xjYopFzrporon366ATKhFo2qT44k8FDZsvnCnB4SqSFLTQhbbmwBhEka",
  "key27": "2okkSVSTbiwHAaqwCN35Bby4VKsKYS2if1DeipyuFjoyv7rJxPg1E5w49AAtoH3iUVLDNbJeampiA235nz2Zi6yU",
  "key28": "3z5UzDpz3ELAk1q4xnBDNrn1KfpCowbf7DU86C6BBJUTvYKAiNknGnHT2HFR8fE9UuKZTx7H7HEVovCVuexfvR8m",
  "key29": "4yP5LXujCdRMWv2GYodu4j54W7J3cxjrVb2PUJmo95HuH5XfkKsez2LHxJcey14uUVPnCW56S5EvrHL4wvs5vjnm",
  "key30": "ce6R9J7wPa2Ktxgmo8jMoN7gscS6BeY6pHHWnh5YtrKYPEh9UZwQ7AixQTfGBXDetQs7f8yjiycmHzD5kFStDgD",
  "key31": "48QTQeEYd6zrhz5iJ6TYmLcJyBXbWjAe15scFhwp81jU8fGD9CBcPkHYF58QsbQ47pFMcMXSUveyohRjX64j8Hwu",
  "key32": "5o5KSAteBPUnt6MUNn3P9MgKmGMbsq3wC3WAqiBrULFkaXz3esYCyrMU2gxtKdscg4cA6ujpdq1eHyJEdvfZwkhU",
  "key33": "5KmgbGKkPwhHehY6rQwmpc7kPFJ8SM6vyBEzdySHhUKFUPJWRti3zfrq8HzS3cMfUxM9ayrDZCkrVv6d58q28DXz",
  "key34": "3SrQU6PZzHP7FQfgEccYiWhrJae5E1yj6PiXQsUsXyobxjgpVSnyDchFWwgcgkogDBkcAAqmpzHsTsf19PtzFsvn",
  "key35": "3DzmiyUanLCmc34Jyv9F78RHB9kao6h8aWckJT6ucbJ7n1GmCwkjAsQkkBN2aGPeQwpWZpKvu1YfmkhrnY5zSMTR",
  "key36": "4iWuq6ENjk3TopcRQ9VwMmQZDcb61fDUbPiqm7LaL5KomBzNqcz6DHqPB8WmgoV3vAgEirz2R8qM8QTda2Rxzx8t"
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
