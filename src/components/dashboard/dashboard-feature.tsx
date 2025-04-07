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
    "4HntMkBzftMksAUoijqXVHDNmzLeFDQTArzGqgAWgwEfyFqw96w5EbusvbPSs3Pk7b1kDya4FP4uQsi1tYxvcquG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkYjAGfcWsn2ovEFFHno1kaXjDhURo3NGBtrqtjszpbiZfKSoao1CoJD3BiVXPisqD59Qrs3Dfp9i9AML7vs8GK",
  "key1": "9tjZnuXAh6x7tpxfZxjtzq9U2fYWkxpf5UYhMzwz7FyQgWsfREdsRTKW13HQeg461FJVcoDshAyosm8vybBLWji",
  "key2": "36ZnQDsdqi8oMSiYN6KDqMVSXkraPHHoAxSnwMp5uZpW3HvBk9o3Mre7PHno315qA4ZeKpAnQnESSnsdxyLAgFKZ",
  "key3": "3jvsK1xcGjYHeWqRpKXrKJa3KheUBmBfVyjq7LGJDD3vYumuL3QHsE3HvEoVFZxPWTQHfnvJssvvU9pHaKJUt9Z6",
  "key4": "4go8sCnohXr2yWKgcAUAqobdyciULd7i4wasZSH4JTQyGE5pkSmQFjtKhAHiHX6Zn844iF4Du4FnYdLTFfReU7vX",
  "key5": "487VsMkQG2c97nryidyweKCNTAuFWhYzAZdS7spY8B6EMMLLG9hcerHNshE3WeE2MMGYswMA3cSX74RF8xqk15zH",
  "key6": "4M8R3HDJTrEsW49AiiybXbCfvRu9gT6pSSDa9ZgLJ2q2n6iWkcHdTkfo4p1VXm8krkpZP9WGPNtFbSfTLBRnjbHi",
  "key7": "3FbEmnPKwVFvkVs3NY5Cha6ND4Ky9EQEy6dNNeB3TkkUJfoSsHQkbW1cw7ZXwzXBTY43L7YvAcF7PvJWgexis1ff",
  "key8": "2BxWoV4FEogeBfYWmHBYJ3YzUU7cGTw6iypu8DfcfRgSNpknddNaCtjD6TkeGDB68eZfBcpTKmFDSDP5yWvQazVP",
  "key9": "5V3V3Z5LwgGYwAgqmbWYneRtRyrfDuLLqfzBfyCGgYvAjz6pDpQiyyixmpNFU8GVEFbDt721xe6fkYkgEy6eB9jK",
  "key10": "ask99hgCN7YLQWBTPDr6H27exWPLrKg2AeEaqj6htXhKUestbgYTZ1BVgUQzYZ6t5puvwDgock8hz63TY2W4YZu",
  "key11": "3k4enrssJbyhKQYygudTTiABiiURDnENzi6oxru74zyhkoSwmj3Bw7WcG2etHGGTDXYpFQcMSVNpEU9ZRsWBXYnc",
  "key12": "3NqRPSo19CvRx7oiMJndjDtau7E38QphBw2EZYSHbyWiSfRLSqEgUxxb4AfsZgZ6CL6RgBk1qCLM4kCPPas6Xu7c",
  "key13": "49AefAEpsKv3SMjhDXMesUx2wSfSvGp2HJDyGSvPCvWZXEwJPFocukBTbsZy4bsJpSpLL5Qq891vDaxZbLn3A6om",
  "key14": "34scX3UheVHXfcXti7nJSa5bh9LFJD5Q22GCRoxe4QHGZHjZJeuz9PHgdErVvJBjY8AYLC8Js3Fss7vUg5f4KxEt",
  "key15": "51w9jZ5mGtfbmca7HraduL8pqAjMtjbKRUb6bkDDkxhx4JudkEK2LAxgqJz8RYdojiXdaUYzXKHEAaym7ANng4Mm",
  "key16": "hikU2nU6H47P4fFyrdyDvCcCb72RErvmD9YyvzWmf5EQP7boXxpJZBmBPUTfgjYdH3sHxSm9FZMnncMi4xr9zzH",
  "key17": "2fW3ft7DPyjSbs2tpKedD9oF6CcfjZ3HiWbUvoSqss23wBHF4GfQuPYqddbisp6qspM2vKi6Z9V1EpRDa8eDVdaD",
  "key18": "3eoeBJUSYFSZNKiNfSyJSmtJ8ENyG2zvtBMjDEzJC8DhEdxUrUnsywFWiXQQXnDhd52ovvYwYJQYokA1b4o8c9Vq",
  "key19": "5DdQzkqJYz9KyUV5ExSnWgr59a5zYSR2W7EDi7C1Bw7ZxwhPpf1evPVxnjTZeUSgkSKomq628bm9XPowDbXiCf4P",
  "key20": "2cKuq6T2K6Mt1UVUpS7gRyv5L2f5qUuRuRXffdR5ziMhxDq2F9V2hUpZ5CKqK3eQbjHorctn9XR4Ba9xYbt4cCz",
  "key21": "3E5aybFvThjX7E2h7ZL1nZ3rXSSticYmhn9wSiDWZ5AzNr9Ga3qvgPSruxYK6N92AsEhLkGaSzwSG65Pom17xzoP",
  "key22": "u4wMJ7V9P6oih26Wysd8GyH33WNYq4YNxQykmMhWRADfSvA7uMEGoSmEUtx8AZyZW8zMcB3PBKUsLK8sfoWBkr1",
  "key23": "4RPT7K2ifVR4UF1WBuLLECKmNQSTuskH2UmcCbyrRQxApVJ9kigv2uj9mSVq3ZoVpx2cmX99CqWKoBSwtVQ1mhhj",
  "key24": "2ShMJ8yHXnYZ2jWaeSChQhf8DY8VrY2Xvb8htYeEkWzAXZZd2JamoUaaV96YREcP5FAHYF7N6gHRjhreMrfBgBxy",
  "key25": "4q8JZanTHNT1ZRVc6kdxwatrbYF5eQ8aFUznnY36vqm5C9HtDub6BaazdKPJTPPWQPCsZ5YHUZFR5ZNfq5hVGaFZ",
  "key26": "31x6sKSA4daE5V4My79atWziNXaooUyPMX3TcVmZeKXdK91AEvUVFwrPNH4jhDvemuvi5apc1JrD4cM4swUQA5oi",
  "key27": "xbTeh5zaZPiwFfbXDJ149Z4S3PdeJ6W2FhXwjCPPMUfiEd2vif2aFXq41PYG3nGEBujW6DV9kzNbrsbwQgFAYni",
  "key28": "5vHDik1cHr4ZwU7czbydCiH8dpsjhCJPTFnmRqYkacP8Px8ykq6wLiEzCKwiwWnuiJufg98wUxbGjYRWfJSpRetL",
  "key29": "58uZKqgTHCAo76yf3SaULP84XEtXGRprZaMTvAcLafApVcf5vpY5Ck5z8ozxTp5MwJhMXWRsuPrFzWrEvhaaboSy",
  "key30": "3DpWTxzdhQKmxQ8gvmv4J92q1EV8d5ERua3r6y23bBSpYbKqjVycTNHUnUCsim5gkkTHrAZN7Npbe54UrGdWMEaC",
  "key31": "8Lh9oB1hmTvNnpSkS1z9xFL2ckxDZ6twqWTK38Hv8p7NS3mX25avmbqSauYtUfS2B7b6zti7LCw5bFunXPaysp2",
  "key32": "3acBj6LC95RTkVB1FTCtLmKq7MWYXR8hPcAjRp56d8MyrY67ox5LXUhJjkYRdjFsocy7MerZ5MumYyBGd89h7byE",
  "key33": "5YhhwFm1VdrPh6Ni4ruVoTTT4cr8Y4PdzZH8Nc3MSX9fB9VCUQGkDupgT5SpncTHzsDmuPEpy1XheToBqmQkxPrz",
  "key34": "4UiV2dsxgdMbdnG4nHuH33QojLHp1LUWR7uofkModiJ1nYLbJoeE3WSnZKcD4fBhYsR2ka11yDrSGCUUUwP6n74X",
  "key35": "QS6V7yArWL4ETbHanne1jgmawMFu6tXS1jTJCGyXEKkHEa7Da2iW2sepeRgGjpdGcniEAE9xAWJsWpsc1CFe6p5",
  "key36": "3GhzqsqDuHLSZkaa6vTETqxvvVgHQ9mubqKf26mPV4SHVD7bvEZeCGoxGsiaVQK3riCnDStgSFF4fSExxaZxXKmd",
  "key37": "3HJgKryqztVaqTKQzL4Y5MxP46bqE767A6ZuQbdjwBN9iY4UpvkHYWB7i7f2kLD9iMd6ZsPhuxYysF54UgX8gHDi",
  "key38": "ceyLT8erUdTBMe7gYjrCFfojqDv3NBNuct3inASuwsYEQwK52igGRy8SPtCy73FESjoCj94WqUHgcPywebYmg1R",
  "key39": "4NwdmpbnkJEMq75B7jujHC8HQx4Qf31rnb7wTox3JLLiuLGn9AHvVMWn5oRoYSNKdfJkd8tpv1zn12SuD2irCgHN",
  "key40": "4y1WVCAV8kwC7623aPAqNGcEfPewNJ5EZt6bzsApDDwSdu3DMphSh2xUV1UoBb3mA55rTBqJMSWo2xapCCzEarYB",
  "key41": "Y1vKVe9x6GQi1xC2rpNbbKs8zcZ2cRCNTFFruXKJB6Zvr5RbjM7HnAmMpH9uZ7ZCg4ayJvXNMVd6kG68bkKYb3q"
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
