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
    "5JbQm7n88UC17xgkRj1eSNC7tdfzeuxyVyWFeSAR8hAfzwGpScNhDuoUK7nkXg6buNt7a1nuaArUvPag6rwDAArX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8ThkPVn8qW6joyPWDXkBG6vduLpBH9dLCPR8pFK4G1X5z9PdTNrCws9hGD99MtPD9C75AAay36x2BpiQPKgSvX",
  "key1": "33hrzJXonHXYmEKyWTvxDGNQ3TGy2mqPj9HK5tvHTY6fYRdDpKSpdASjdCDjumBZGMxDpgLx8UN4vsN4rjKDjafV",
  "key2": "4AevJFt1WWjL3gDAkUnQinZFsWPW7yu4MbuQsr2nDnWq6rtDFwrGeQW8CVKt4TL36wrcgCgvC4ftjs7UqV58P97C",
  "key3": "5jpkTWjM51JJMJbJptk27xH7eoG5BipkMDfLsJfCfp5TznMu2SjcVLHvu5JTBLUGiXFwqhPx8wgNVfZ9KVv5RKKF",
  "key4": "3U8HUhpDAQ8znjwiZBryopYq6x6hiWRVcdojVzDCShWASADVhE5wRq1fw9oZtPUhoKxFa6o3AYoLQGVfu54JnUsw",
  "key5": "3wnZUFJwVyuMbaJjNFGnkJbMhNXY5GFid4fhiYU3MczkmQGgXCVMnL13UjDvxXaeVdwjnprR1t2ZHpiD1Spx9aBj",
  "key6": "3Y723yX6pB1HuwEXdESrMd4JBNxjf8CFTmXMForm3Z7ASTnayvhFxWSgFhcuN4HxvXwCT4cLiJgE3fhRDXHGXAw4",
  "key7": "4zcPpL38f1G1qLYFNkR1NNKfxuCxbuRpa7nHF1cw7LDLQeDf61oKQp6g87mymqyD1c11aVE4M4dELrH6VXJ6Q9xs",
  "key8": "fESd8Ff7bHTrmcMdEgweijzCtfYnx43essFcNNtzsj7FVnuw6NLduP182NkheENvqjts8BLGUFuXTRnVevmnk4g",
  "key9": "8cPE1cGRTKrV4sm2ETg9jNdyMGUuBvBLEFt11Xtxvq4GbaxEpuTVbTogG5ya3Lebw2xhBZ9YE3MzJBdfqwroz9b",
  "key10": "2oGKD54XdvxH67qeBndigW4obWjsMn71jzt45tNrUTuRMwivzNXZVLr2z74gtoLcgkrwXQdXTDqPSzbT9bR2Jg17",
  "key11": "Z4Pw48NbRBckiCfygMxoMD1LS3cEPvShj6Gcrb2YmoMahTvCnHjXtzPrbaozks4wiifhHpYWZe1UoPEiV7zFKgW",
  "key12": "5bba1cGTTdRMuBkeM5k4YrCwc7sfiTbA7xLvHgmi65hWuSzmqtCjAEA82DxaZC2cGGV24q7TDt69eN8w7WyuFeLD",
  "key13": "59PwejTdmgqNRvy6Beczv2LUjcMwhHiEQHjwNncoFZJjnF2RuspFJbj2adkfX64Fg3AmkF1qj7KsujFT1a2TisRZ",
  "key14": "5ENexh6RX88LPTesBniWkfPHi68bYB9FRiPgdoK3cQMbt7Crpw8VG15PoiYAKpXwwwxVRgmSpNmhgveDqdCgtxs6",
  "key15": "5EiwX46UQ6SNrHLcfhe3SNDHanPQnXsv656jEvCZq81bdbEF2XjJYo4vsNALgrZLSk5jYgAu5oNdLWX3oryQm8S9",
  "key16": "5i5Aw2RysR4PhRiCBo6KSSEJkqaMjjBR5MmA5VteqRq5Qter9PMaiJDxZpbG67Cm3rkmc1FsfdTRKcbvNznEvWvF",
  "key17": "2B91U1iRaW5dLHQ61vJBB17GsjWuvsYLGnMVWo7q8K8XuXDT2knEkaXUUVWmsbrU7LYAhvZXc24jGU5hDGwz1BYi",
  "key18": "DcVdkR2tKAYXJPzHwKNBcyKrVpTawZmgASBpvtAdiBLdkrgk6DQFnR5fRvXBdwaYMPBzopC6mCqpe9kYg2pvCZY",
  "key19": "5XCB14Af4SmstTrSUkQvtdJUyu5ivG4ui4StHeMLS3jkvj1nnyQRoHLP9QZaZkEHA2wMW9Rnka4uqaNHvxpcbKWn",
  "key20": "eGnPAWqPtrAbHVK2hsh9JM8sGRRnuS6kp9N6yX5pQiTXM88FsP6rHXznkBrhbLcpQBM8VBHtAuk26LvfCBkhyBs",
  "key21": "3TPtKzXgMCvtZ3LvbRGkkVDbUfDB78fiNH7qojVHRmANMRkBqXaW2NXzy3gYLQaxhvTrMqvWkekwXBUpzrsXqQZF",
  "key22": "2AZv8WDP1aJzLqKSn6dj9a3QACooCVrqV3eK8gAk7Y2wCaMCMPS9JnMAfSfHmLwxrXD47gSRM1GwTqZ1H2nTLuVG",
  "key23": "zsG2vJoaCWrtvi9dLRmPJpPQhvBZRsoUnaK7qVEFdTPiUvTqEQ4x8Vb9XVpmaYDcRVQqjmzDsg2rG9KkjBmuUvg",
  "key24": "44PCa4UrAr1vrs53b9eJvUz832YkFNRb4Advh4mLJhfV3vno9w631puNJesriH3ER1xaHqzMrryt1bQbwurtN16e",
  "key25": "sELFwQnCf94TcsVWwNa8Cy9JD2KX19mqnAinJtfZQt1LjPycZo7vyyr3bMwvKZHBp4MA4BWaYFQuXLGoMTWauDw",
  "key26": "3jmFnUTh7wDZCDaPM6Rcdxdd5R4bKaC2tHTgpuYu9n73BuC8vX9yxuPFW6wruRZt9Hvo68i7bnGdTB5S3GEJkTi3",
  "key27": "59hFKVJchwbSWB6JdmsS5F1mFa1BeNfWWceMVamwiAnHhY7gCTnrfyuVk9f2F1qepibZK1hVPi8LaxdcZBQnGgso",
  "key28": "3EJ8oN1dAFTdi2RRKyog3BckQf5DJPj5k7Gup6r2yJFbmeZ791jAN9Db6DWq7caVofVYdMThLe7EvC1mkkEGPhCw",
  "key29": "2X2Cv5DDJ8Xg8yEpJQ8Y9Q2bbNg1CyPrLXw4ccPeCXUy6MoSdC7GE6pXKGu4sxvThMH8MBvsJDtLav1sZLN27ZDn",
  "key30": "63ui99tFt8aCJ5uKGvidSguXK7Qz71doUbyfpeadPy5LMP5Sdd2H4ZmqXJ4xb7N7dZtvrEqhXX9GnTwyR8wYZ8F7",
  "key31": "46A4YF4giQ6jyum2Gc4hE3aGvSH6sG7kWgvFZ8SyU21sY56EAFj2TzNSdYRKU8U5hodvf4Pnk41nmBbagBXGpxnm",
  "key32": "3UPkEZ5XWRaoLmNWS57768vnT9hSpcHqxsZJFGtTR8iJirUMhUn1zKRYWBCX7k2R7NExMNYawGyhRvdUKtuUEnzN",
  "key33": "5x4EGeebxC2t8FQJEY6wLqKCPZAhiMUkFBKRMLdXMyQbyH9KFgFMQu8zrYDgroaFJkTbgLqCNXTvqy2ZtppE2Txk",
  "key34": "3JhCMB1yez64PhwhdXPvnhtAH6xNJH97wZJjz6rFGaM5wEgzXC17UhwW4apaSssGhqpfyTseyBy1Qa1j9cn2x76F",
  "key35": "3FFZj5n9dEktu1jiqiFrqETtaULxsNGCvpwHqUWd6pnEvs2KL8HwXUYaeCBUCDydSTEYEycxLkQcNVws3Q7RYGgK",
  "key36": "2kUyaLjXnmpqgjPwSzjrr8yp8AFu2rEDRZEWV9RM6Yizsh54EjT2thjRbZyMsPsC6KFYCkm4jnTEHCgzYk9PsJci",
  "key37": "dcqQnikVRFbkSehaRYyZnPUKxG4mE3B17FrcFG6HUhAEwQaGVoSJHqgmE65AeKnpK5vrAs4bCpUt6yVdNpEbFgz",
  "key38": "5nmdD3KQxh8a4cy8k7x1PnP2gZiodR551jVCeerSGZgFAL1Hr6cVgh6Nj3fGu5zfWqx9jF8566XZnCxuUNiQJ1W7",
  "key39": "34ytKq3nmKn9PjdquUhLzNe1c58xyfVmt8yjbo9qZ3f2eMkVMKZJ2LZhXvNkZz7fdpeeWkaqxvMNgqzd3cdTDP3p",
  "key40": "3pwytw73D8V5L9YK3456aoMG9AR3TSY5R75CvBWNxvg713LYszLYGfqEhowoVer79cjhoDenYQKw63RkizzXeM8g",
  "key41": "G6gNArBxpsX6cQjpbWMGLPym7v6H3BgCmfUZ8oqZzxaDNRtft3bJf62xSuUcw4gXAUhwNwziky63A9vbPvedYC5",
  "key42": "5tKFdkxVF8AokG5ZFhxjnxpZyPGzD3YZz2v5hefDTWkJBVAZ8DU7JYpWGLvQw3KH3YeahCgy8VEqzCkgYwwEQMBk",
  "key43": "37mW5iJ2Qo6dnbhZGCUk1NqC3B3ymQGTKmzr7LeeywPwH4dgKFFhzrfjewPVfvvUaQxp6w18HXczW4xDyWGLk1X8",
  "key44": "tjxzymqGphqyKn1zWza8rFz68whruYXxjhokXiQBFvu8x7X1NLvNSpt1YT6vf2XrKk3WU5p1yTj6pJJs7bVfA4p"
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
