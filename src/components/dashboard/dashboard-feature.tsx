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
    "33w1pt5RX5hJ7PevgTj9WECpdW6zEaoWkqQTYHjpNWZrAJmba7pxWYmJ1RhqrbNvDGVyXufzw1R7DwbtXqbyso1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qGnbrpU1fANYWP1TBHDVWgJhxjj5W88Yj9WJYBwQhsn82wj9yyJXZbQKsbxCggn7jAKQoDmEkukBdijAzRYdCiM",
  "key1": "5sm2w4hiQMJajzXYp2KGvAcuo6YEUzXo3xG9GEUG8hWzZ4GAgmJzH7MEBA5gJ6Gt8UPWsY3oLgHiNLTsQ2KdPS4A",
  "key2": "ELuHKN7mW9SDP5mXQ4WN7zkdm1TfKq2tAZDehe57XGQCbs7tTTjytoSUMNpqKiNJqYRJi5FBrbdNuEZUFLtYXPU",
  "key3": "2mB2JqTvfgNLTyDPy4pZYwwRvbzHFYJnErAUsdgTH9EpjRPRHSZo56WVuqBDRdjEcxQWCzjmvRJbRyHTSWoSagPi",
  "key4": "4ztVQLjqwkfFK7wCCNKh1wMQVvruLniBRVd6GJhunEnGf7tB2sSJaBziicoeok7VeCmZimbhDaMTPdNJ1WWbhw2j",
  "key5": "4u494cQRoeXbhkRwiBdar5bz66TebrsqHpRR3QSzyzrFmAmBCMDx88QSjfe7bbV71dgNeeiPw9pMqkgzG7DESHZ3",
  "key6": "5EEaTfpbh2m3wdaqWDr5WLXpf7iKGS54BXFdYpFuBF9Ghp6bd8KxWwNU2Tigh2RJLTGfwHDe5niztoCsqkdfbx52",
  "key7": "3PfzV2k1e7DyNFtFa3QRPxDpwQgzpHosqrEW2KfZ1NMruVwRrDZk5bcEWgq4GmuYniGqmHRot2Ryv2LGx5XT4Udz",
  "key8": "5VWaFvgJb44utGPkXQ3wNxQ4knPY8LvEr7f4W2BLKJQUaHx44pL7nLWZpipaxv1QhGZ6D7r9LSCtSRjnhRfytKLJ",
  "key9": "3mg5TeQp8WGW3xWHct9ndzmHUavBPYfCE3rLAd7ZUmopZeQf3pDsiU1SLyU5x486hy9Xfzk2733zAQGUN1dPvNER",
  "key10": "2KaPaoV1jqwPPGUZhQc5nNtkEuTfFFUGLccrRRSPB8oWuUp5g62Y4KQSxcqGbdrR23o3fHBiWk4iLYfokHHz668m",
  "key11": "3KMhoe42qqD4WkAWPCzumnKpTvPnbiqfsabMcAtP4HCcQq7wzEWcemWo4zyfsanmqXFWhhogF7x42vWDXEG58rrb",
  "key12": "3oERZLtQ3ttipq9quJ19KmdiThVCwdJYjhQkp743QCpCqDm5gUwxaetGJRXNnpA4dTUoaMfhCYxoYhTxqgDQfLSU",
  "key13": "5qoFeeb9o2R7Jtcx5jMxV29LpF9SzdYz3mFoHN3HoSQCmhv7dp6zE6et9kbM117jtNGCCAG2ejNUsb3kkU8xvwvJ",
  "key14": "4JcSNuQS9h4M7eadJdb5c6uuVtBwAy4dfM8n435i2iUFfQDKgYVvgKaHMmYZw67iP3BqbHK3yfN7HuVMQgZv5h78",
  "key15": "2nadajSw8Hiq2MrAErcf91tbBcWuXfyVKu9AdnHU2fZLg3HcWsh6rL98EqNE2TrEQXf2duxK42o2ZygZ59U9NgTW",
  "key16": "636X7Q6Tqkc6sLA1qxxSAY87neWkREssEDa32MqVwn8gEkdLVqiBXWF8VicawNivWHfadq5rjb9THd1ahDAi9yDv",
  "key17": "52eo9xgRncqkRusF6YAaos31pSBGSkRHLCpxDras6QNd6QkP7ANNetKueRp3czoMPHBoV3i1xp1F7amCyyaUgn5i",
  "key18": "35NsyBBw6sRpwUQ7SEsoZALJSHA3FLASK7zMTbb6THBaXJ4TdC8CSXBWSLRRyrHDXeZ4CP5HfE6EVh2bKLTeRAzt",
  "key19": "2dnC9kWnf8sZXDBeNBwSbm4GDnopV4QcMUw9jwjxaCnFUUnhmGptBAr7Mgc5AAS8A12B4p1HjrwXEmBZTVikm43J",
  "key20": "4ZyFgRFp9sMzmdMbyJnSco7AcACM8iWQwdLDveWVhnUJuzcHEGP3Hg5s4Qf31M4ChvDKievhSfDidvgqhTEjy6u6",
  "key21": "4VrXEiqVgzMpEFmvGF5RKo84eywuju8ko7HYYStW3pQBwkm6or1Vu3R3LEvkDdywWXh3Bp2NJPM9wTHsHex3rpf2",
  "key22": "3tiHAvQxUy1Fq6XMcHxniGbgdYWMbPbhYqpmp8PVTu3VoU9vZA35Qq5mgiD2qyL35fTfKZgmEqvSxTxUNUaUsKrf",
  "key23": "53rXHsLpUgsyU2hgnUpX5DgtYYQ41vtjdJcgDYnKo5yueG1dwoM2g7RecmdgfqJwTPz1LkbSfKTEdyYWCGNdJ2wd",
  "key24": "J3z4MPKa5VjaxeT398if2hHSzEe1KvuD7wUqbohN5WzEPrd567vU64vqif3qhWmrxaaV1vAyZ2irEgTabTs1c2y",
  "key25": "VGrnRfCNUmPkoFBvEwu43npPWjXZzKxxLcnj5YRkj8WKXL9GqMf8e7yTgVNTNEHQ7uWzJVAEEi2AwknG4didwHS",
  "key26": "5ZvKWbSx1WzkHnNtZjNA8mcFSJYSGxKfDQKYPm8MGmKDUcL9vvA2JD1hFEyjfJGC9Px5VtHXoBWCgHEnB4AF2BEu",
  "key27": "3wGBCSHDSx5g5wF9AZfYEy4aAhNeqBFGh4fq9BpAGcRVQ1FZ4r2DgZAF3YQUjcR13FhnwTi1du4dujQFoGYWPgi9",
  "key28": "eFu6B4Vn9wYCvhmbMcjEjnYY2GX1ks86wy9i7y2CYBsWo2vujEWum3q9uG12h1Ho6N3R3YqhjnGaGdMXZbQ4J83",
  "key29": "51M2SBUjh37mhY7kfxyusQ91A8TpUDBuKLDNADAUCgauk3DKc2mgF1LPz9CeYXhzh4yCRCos4X6d9T9hByX6Mh9p",
  "key30": "5oa9ASZxA6CEsvkCpiQdzko2fFiFog695wwkVU7MnpRB9kkbuEbKJTLW4esf9igChakeKCqM2VjZBj5P8oEtg75u",
  "key31": "2Kch5nkCiXDfYp52puiJj3dsk3LxbuB3Mry6Bhu7JWG1rFf8CvM7TrRMKA2bBJvWkegEsgNTtcWhVvo9pYn1HqVG",
  "key32": "3dKNZAcnZqnJFUxFZEEDnE8YTLoWVtHVDk8fnLWDPwHRvHVmwEwc4kVH1TKvvc9RRN4bUt3utCdb5Hoz3G7Mjt7g",
  "key33": "4AeRbUReghth3VhW7ZHHhd6wyNhoWXu3WEBTfXd3Mjqyjb2im5qBUNwFScC3gcMzHcTATosCuzTVr43QTyj2Swme",
  "key34": "3raLfHVaRrULC7MKCezLcGM4QZyXW4gesT1YbCfvH659dkapKowNGnbjjkAgGJbU8SXWv6WTk3qijr4bgoc7SBwE",
  "key35": "4XuhGKis6KjjTFnLWiADLbW1YMGkWAX2NgfWiiGmJfZ3Ts7ukETcTNuCztHPBo8eKuD548LDookTJZpUGCPdMByM",
  "key36": "fZZh5q192NyRawWm44LkKgz3kiC3h7BS3kCZBogXt1YxSxYvL3TxHZJGVQycBPhWV4X2hzK9MSV4qmJAKL1jwC4",
  "key37": "4WVHHkeTdjcdAKMugzqARpj88XxTWxmK8UcR91KYyYWY1iLAmL3yWgEx4Mz2MYeUg9mXgPeDuMuGbZg16bfS6d99",
  "key38": "4Xih1NSToEJ3uXHKaRZZrRzVsSNGQp2CGYJKm67tsAxLjCRXV3yVsuqgwEBVKtanTQ666Uwotua7WqYn1TZgzWo7",
  "key39": "3ir6qegnLevcSahPpJksmQi4vugao1HpuPfF1pH1ZxtEnjR9r7QpBzcKwif3VacWWMYDStwwunHibQBWF6MG8UQP",
  "key40": "4GuZ9sBpqpvR2jpcmxbbddPjn1Bp1BrWyFuw6dDqJo2VEJAxQBn6wk4ipd8n3826hth8NKYJL2TDr5Tt55ZLfeFJ"
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
