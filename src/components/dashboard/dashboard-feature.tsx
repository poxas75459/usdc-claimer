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
    "4em7N9PZAQ7uygdVR6Ey1Uszw5wdQHW3sVpiFh8UeAp3VKYXesFZ3XcH3sUxNvYqF3Yh4evbsWd1Tp4kExFtBBFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59p8U7VGA7gx1kCzo1fqWgSRsuyFHqK5QmUy8vsG5XUFq94WWKRNaHhU64Xu1Yue352JWAchZFpfnCUGT5nZAfoB",
  "key1": "5u2uhYUmPo9z9f4uwTy1NdRs6ea5WwGFtSdCZU44MTdfQf1U4dmHCkcf4raWCKknp8Wtce2JUoZas6kbUMnbcBpt",
  "key2": "5kLSKhqjNdzVpW8dTtLXP3bWw1y4H4TM6N2aHqaCTZktBCp4qHei96XXyGA6fd11drbnXdQxDAegpm4iYu8UT4GA",
  "key3": "453Ubrc72hukwTJ5cKFHboMcpNHqqiMiSxmZPejsWtELF7TN9HKLRR5XuLnU67Rs8JfK96wFK2w3Qm938BZAh9d2",
  "key4": "5jZKbafS3L3WiCZeYDf1K79Rq7r1UiaMwG3TF1ufjMbvTqTVcpPs4exggAZoMSLyGvobZ7tkioVrVG4avMaLyZna",
  "key5": "GbugKuyW8ErQnLSUA8swLeSwsceUD7N2ufxXPYowfd3TJxJQq1Jmn6CSA3qeRW6d9aioEBmNXEdDHnS6g7jesYN",
  "key6": "5wghQ1jncyW76Jn1wLqmgwZmk3GdRWZVMeCEFXQCRQFJ8bseYKq8xy5oKc47TDZDHRZ6hfgPf3AMajrLQgxtbF9r",
  "key7": "LqWNnCUeV9wYKkw2WwzJE83JeHPp9WQoYwnTkC1De7NAjrNtwErEoZtfnt2Up3vpvAiy7HbXtcfm3GtNDyEATo3",
  "key8": "2gGMYps65Sid3Xuogd4xTcW5gYWZUk4v1SmtPvRiXyCoPCb7kuM1V9nYtHS6jLzQjnkk2ppKfsQ7TJAF2Nye9Gt6",
  "key9": "3WYauw3tbjPabZTUHVCjC8j75nAfHxf1LFCwroUxMzdAYPPwxzeZGU2WozXSQKeHmMWkZE6ydDVCwk4xHmBpYa56",
  "key10": "4GaiutAmZPVCyjc23BbbyBifcPYoRxgpd73VN3rcESg3xt3V31M4mbqLPEKu9QyqofpvCcsHCrTXmVdZSk3e94z4",
  "key11": "mdL9PZEoS6V3NhhXQ2cj7BaxdpCzJDcYw1WXSq5MR13dHnxEEyyViXuC5C7AE7fsP75SryLYv9bxFXc1D3datrJ",
  "key12": "2EzseSzjrbZk2ZSSCQN9YzdTjFfqCEdozWnhiMkkNGhERTxDQCyo34QiXQs65BVo7Yk8QiuUG3RFx5W18Q8hgdgo",
  "key13": "HBcLujgoZxKPQ5xSBTLtMz1XFvsnVDQckG7PWEYwQFjT6o4eQaektwr7FUxB7XJyRpkZPsA4NLq1wiPwhcwoW15",
  "key14": "3zCmxXqV6iVJJBJKP1paZNhJRmAvwjWAX5hDcVFYaFHrJwYdyMrJnkXgeoX6rxgXwjsfFDg7pRxYd7Uvw4jzSZAr",
  "key15": "FtMFKmWTjaSSKbJ6TMED6Ken4c6sVMUJZVu7FGjCzA4LpQwtyQfzPzdK3Sycb9txNnBWajPVpAowmVutq6jJZc4",
  "key16": "3u2dRYGBGfCztrtM1V8h3UpnFYg5MBUzf7WiUN74k3o1VQRk6fhgnpuv46FVCzWKXFDK5QDJJUE4jSUUWCK7yAra",
  "key17": "5wBKr4nbbaRx53QdTeNdDRbQttGPR5YRFJpZh566gAiKdWap9mFArW3KxE85GPHr28K7hRDawt6DemxhZcWxpFFp",
  "key18": "5jW6sTqHFncHpwiyoouAQiVx9hsrJt3c13eoKbj4FBXLQvpns99aM2sJTHsPmBjyYn78s3b3eBMuQ3YBbPhuhNZe",
  "key19": "v6cjk4DBXYeqgWBVQB6FrTipYVEYEuvRv15W5m2y6jWWugM6DYsSRuvG3AUaTSPwbkxj1p3Cs54nZK64iAq8dmD",
  "key20": "3LrwakRuum7MCY3fuWf1jbLd1sJDcYncMaJHF6PPoB1HGFBVgE9fXx9kB1Pe9nCwqVSm11S8JcqowZxGQZY3o4Y9",
  "key21": "2crVw4v9PrPzL9H3yUeAyar4vgvdgSRsVrPKkhfN7KuexcPJvALQZZWQb263LrvSBjMnbx4k6HSEVst4nS4Wpu6L",
  "key22": "55BNunrjurSKt77Lbn5zsZgupTF9ZVWgbStTsBV1ZG1wBkNq2zm8B2H5v4G7MyN8rXi3BPNNhg34woQ93do9TujB",
  "key23": "4WLwfBKt1pdaYA9M6UncuUD9NBJQ3nntPcr94Q4aXxmdPUh9ZSbWLS78QBUKFnGfRvgd5odQdnHQDtyv1Dpp6hmh",
  "key24": "2oEkeNadM4zUNhEgcfaPW6ZdKeoWqH6tKde33V68Nat29UvE7tLxjeVRs7Z7QjNJRtG8egQzPuda5Cm743VSTXva",
  "key25": "2BQYHByLUEvkCZkdbGJQFYCVCcLnpo9uvbiR16MxGEGMrGhkax67vVq78bic9VapHFJ3gZ1vuNEKp9Cdm9YL7WzK",
  "key26": "2VwitAfb7K18cAChn4PBhaHXQRmgwRxMH4pxssDRor1tENhWoH72WRbHcAtW7jfoLyiUZKpYbj8MaPNUSaYJQAx8",
  "key27": "2Mtx3b27YksTbR1xBEJ3DCW3T7LkW1xMct3yAuGmHHRotBTpfJJM1mTHRM3wBHBMQSgZZCQizbzo2evjFBCr2vkK",
  "key28": "do2RyhfwdFXUvij3TY7Yq6yaVcXYAek2YMwxwi9Ad1G1pPQ6XdRJztuarX1qW4KerBkrGBm2AeRK7U5PShKXFeH",
  "key29": "2AZSAfTyjRhQ6HV6TL1VrN4ZugiwgBSqdkgv7kKGy7yFCuDhhyhQmYLbSMWgKeaFAWGfMMYyxM1TQuHndBVrLBpi",
  "key30": "5m4ySJuFrcvu9VvuGsVAQnsTXVjiUuiFsz66BuhzKkemXXc37bW7tb6dF4fm1Fy48K4JBTsohJPLqF5bwxeowpqg",
  "key31": "3Av4Ln23its76sg8hqXYRiy3wGLVZWA79dCP56P6UNAVDSwVgwsGHrTMLB7nsRM1PgFieD3aEZJaABhsyenKNGE9",
  "key32": "22CpUVbRNkcWW6VmFvUrpQr4hhMkt5D8sWGmdJ2Sqmi3kS9ZSGH6ddJXVCYejZq3KqXVSj6JZyZkBG3tpW2eYajh",
  "key33": "5KLvKhaVNgxQJot31b7npBRyGtoYUaytoZv72BRPCeczHgN4MKwJa3xrbuoT3BPFGXEvuiHasaEQuhwqsX7GXhv"
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
