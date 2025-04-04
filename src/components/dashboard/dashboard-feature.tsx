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
    "4vFhkWzu4yQGdLDHXGkqBttuxxmq5m1pxCmFGnoHBPRDgd3BQQE3CNZb8dv1Vq7cN4irGd9XxqFVQtGEFTRYEKqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62XU9pzPPfQB4BVyR9EN5tNPoja1cEPuCvdgSzCNcTNYvY8M79KedRP2LJLBxYvHR4Ss8sTheM5qbz2bhJgYEZBH",
  "key1": "3hfaNJ8qc8a4b4mf8zpqLPPpqWztT3k2jbxsSceGvwVKRKuYmb47C2kmj1YchTywxh2ycdQWYnCxZLTiw7HMwwyg",
  "key2": "56LeTBMhvYdvwA3dMvu64cvNYczV2Hhg8s3igZBxraw4MYBEqiHCgPFV3TdRenbEadiwHQmSeKguzxsGRt8KVZqT",
  "key3": "4Hig8PifRWSBZ9afALFmr5D65s32jsiSp378zTEyWyD6LKGPovJ6DVM6pxcJMDjbuakAk9UXSBgtLourDuETn6mQ",
  "key4": "4iTCVc6KMeYvnVmWkyQ8rXmzLDu43ptgteNSJyuMfRWVJAC6vLqt8FAM7ZKooBPURSBB8B6xgEBtyQpmks2CJbm8",
  "key5": "3RM2KC1GqkuhAX5Gv48k3vRhhX98qerYpbPw9559SyuQyfqKujCaKjYjxkQDk8q2zkNqP7qaQRt87JL2TyYF2eMG",
  "key6": "3mTQUyeT8enNaPWZzA9ow1d7xcJRakAXfxaTikQcb23ZS5WFvTbCBy6NEvBrBsoFnPhyNAkcneCJLWrjXnYHdMAf",
  "key7": "5q7zQaKoN8FZ2pbjp5dEX51f4VdHCZDQN3UEbJJwBxcSpS2dXSSwZRUaFfFpza8i6W6wKqnFVK47fnn3SM8PbW78",
  "key8": "HfounfmDv8fUygxRtGyEHvHN3b1xAnHATgX8xef4hY85qXZpZUHMeK6dkF3qCm6dRgDYXvBJW2vSSER6EkTS93d",
  "key9": "2RCqQqjKp6QcBECJnVZfB8pykJFhz4TAJitT1SDZ5qfYUDCaSi7A3k8TBQ6s3727xAhoo2WNMqvigrCGe2kmV1uj",
  "key10": "2RdgXixyZGNKwwx5otApMSxZ6dFdh7uffcRUa8xm5D4j3c5vEwHggdrVL8wm8aH1NoArj3C7oPTEMDDX9Cvvx9mE",
  "key11": "3JBpLJYqTTtH3jrdqiUfCLRj1QHq4MqeryyUzQ6RTRRwxam4gbijGWxa6XBFDvFzfKts3BhHJbcUsd8QsuT2Mu8o",
  "key12": "3g52h1gK7mPpSP9gkHhgAeXQfU7mfEbjgaur59Pxk1oNfEDbMzs3caJ2aX5GWKdxEDPkQ2SVD4jSQFaCRbxRbwsH",
  "key13": "4qLjcr7fUQo1DNTKSZpYnYiioaSyXkv3JXXKwoiqxN4WckD1vDNG58YUk9cwy7yrko7RrD8YS7D2SGLs64AZJEDe",
  "key14": "36wP7HaWb5cN82GH3c33DEGM8U4T9evcxV3ti56pKURHTXAMjbQqyyYpZSxamuArA4B37fixbmZPXsU1rCyuVg19",
  "key15": "4uVZLSGTqTRTjfa5u54HVwgB7ESqBMg3GDSqDhKw4qH1iyq8nkmggH64x1KbezBxgkFyeYH1TKydkMVyfGgrbovR",
  "key16": "gYtDgGJVoHhnUY4rXypExmuBFGNPVWxsk5MA2GqzcU81TBLXZoGPSJSAzVJ8xVZEiwCpJeFWyrjEX2tZCJjiuj4",
  "key17": "47qsgSn6nonyrkW5etLuzLXzfXitCdxLDVSGCau7MmcjiBsEYuYVNXjWBPPUfg7xrS4a8V4HsENuUcuoqd33HJLZ",
  "key18": "Znhk1rKeo1zWHUriUme7toCZR9QiHTuTwCX6MGarVmDktFNpZD34ecTnS7FyvsemdSrYTgMpP7fqVrJXnaCZJnV",
  "key19": "41VRHLTRmTZ2xKKQMR1Fw4koChh5FBuSGr7MgXkTsAXxpVgZaPvZ6ZpLLNXipguozCeSn56M2zQi14FJP7s7PtC3",
  "key20": "4PDBjcf4vnTarESdQCCDCi2fyi1LFcEzDiG4pjW8xCyLN792PDrQLVFjpts2ZVBX5RjgYZcCVFr4fyoMbLxTdjdh",
  "key21": "528PZwheRECQ93TahTW9E9qpDHPZfRGnSNMgd5hFYHtjmsDuszZWjSv4mTaKfGnEsAUjZguehAmcjNphuRgLTas8",
  "key22": "3yJ86hk3kHZAjGiYnc7yQWS2VpujfwzcZgp2J9UHoex1hShb5QpgDbLoeSxMvndyUeyfZBkjzN4xoSvVD5rFVEx",
  "key23": "2AVdHkDGtJ5UABKwAvED2fMzGj5S4jVJPVxWx6z1XXAT4XDWAwXyb9cJBcEBAjkykSBFRHxtgA3yJBU5pp2DuP6G",
  "key24": "4MfUoyj9sEADQmQ9jbVYCpAXLPLVwx7fNcaj3MtA1jrHjw8hTnC541iuuz3ZdDnarECx64SkYDBwFrRENv9SZ521",
  "key25": "3xofyRHbmDxXskiSJzwSmVJAeZrnekTGTKnCnCrdnvkVDb3qjHaYjMdU5H7c4on94qZQqF5T8gDZvZejuVWa5Nqf",
  "key26": "4y4PCAN69xQ8H6Lk5uf9tzCFqakemf7o362AnYmmRmK6MbK8zjk9U3fLnmRnwnaiSWmMkhLhnNcYrVyd62boFj98",
  "key27": "2RJMxLKtSdFzXojtb1r8zEndnQAd87W1au11xah2BZ6DfrwgpQQKMcMXpVd8zEPNwFQz9CxmDCZ79fsG5ayqYN3u",
  "key28": "3rMeTsaHAeN6bjzJ4i7EevB7L63RztPTkRUfcz5tpcWThyFgPzPYmx8d6bR4hXDzcUuEavefQCZnvjLSrMX89BtL",
  "key29": "5dbBXdXN239B6UroMDGBcV5UtsQvr4RDjtdvgk32KPYjTDuL93xuGvgBE8utBQJNaSkKbV25vu4MPViWYyoHfGga",
  "key30": "5vLkfxcb3gzQuQmx2uZik1L59AhWVqB3fChAVLyXjLgPWE1y5UpPkQYc4UNB4zyZvQ1dzfntAqm5btmzTKV9F6Ft",
  "key31": "3FUjFf7RWcptQZkQPKzvcwtByd51UxS8xVMetvfGHFvfXMMR2nttcbChn93zxbqdnLLbd5FnFc6AQ753oocLS7a6",
  "key32": "54gTSY8bwEXsHGwwzaZHiavvVWA5v9QDeq77gEfgQZe48FaSKa3LHB2WULy1vtUJPAq2kcmU4Cr9uZmqEBG8RNRs",
  "key33": "4shm3h6FSJ326gQ7AHjqx6RiPkBNTEMpj1bJ5stSaSpNdR3QjUu19Kv4UnVpXxgDHSqAeEw475ZNS1RPjZYv15mP",
  "key34": "58hn31w9vGZquVW8wqtniAUzYLAQTRXYkdXau4vH7dpdsZFqLBB6qYHHRwVj47Cd5cUKDE1H1HGbDHphLisoKUwB",
  "key35": "5AZD9H97tisfTkJeEREanHyCVu1QFLqgVgNuMCVJ22MAXdvpX1N2Uk2TK5WT9jU8PsdZu3RYLkpvppiChyZP7JTR",
  "key36": "4pWpQuhAyLusYsVPfwCvwR7bPykKCBJqnrbvDfzx5H9cvWDrncdQCBS48VPF3APNG6qoaYVkzDTiD3G46cnkCMB7",
  "key37": "3HgCbFNUAUC6gQu18UzE52A2o27FiNzn5hFB2vEV8pHa5jcnjKfEqGiDydEJWDAQGSwq6M5MJpcQ1fL4Pmw9McC6",
  "key38": "ekQM2PtqBMf7iGsdtzR2QNDworb8CGWBrMk7N23idZG7mUkHockQQ7xxj3J8tNXNHZxMLUPy1BcEv1V56dfv2KX",
  "key39": "2R79SLzbvMCoSyt4u5GBiWq1XvNVNZet4W8KR6AmtTf7iDp7Se5Dycsg8RoK3K8oTVLqMbD2cP82BgnqinWBeijM",
  "key40": "62TptmjucnCVei4u7AVYAP2gbEcB2PMkg4HZPkLxXxcXNLWm8wGSneoJ5RmHJersPUkx4bnxTdW3qR2DpHYAqo7D",
  "key41": "32NUkSNvTnD7699k1QfzzYfXUDfySjgRcHp3GzZMmqy8i7ep8eF7T4WqZ1ZABQqn7RoSxpJ4nxFiFFywtnjBge1N",
  "key42": "KUf7WnKeT1GgTi6JuwqsE1uViKLUAchzybnTmTAa74Cb9rz4oko5z4dqmZMgkCuSS4n3rUTZExaF1N3svcXyWmf",
  "key43": "2DKrtcP8gKQJnQKJMY6R5gavCFWxC3qFJSMpu2hrWfhopTZiR7crZfXr6aTDSBt4hCQyduyB8feHPWgBRxjDmkJ",
  "key44": "5NrA3Z9AymkkqCp4emAczFoGzdNwXq5b5JBpPjagPu5gQEzGZuTiPDnLmzBZZ4SU7iyoBJCBPuLzJ1StBP71PDQ5",
  "key45": "2fr9hzfuNSzkPoLnjx7JdJFZXgju47v2DLcNoqAwjHnNJdC2CmhzHzM8iBGGU1cuzrYyfHco8ns6dcNYhMeWARRg",
  "key46": "5W8Vd6hJ7m6MNFvWi7ReckuUJG72M9AESwQX8yZjqBRHpccqDrVNt5LT22Av7JRwvi8yeYT8t1QUVgyemR6wH47r",
  "key47": "3KvpKBTNtn48Qx5YWUpdo5JBhQ1pVDhQqDgACLhj3XKJftECBhvMQo5AD5BD3XLZQdWGhbRdRFvnDTRrenyms7xR"
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
