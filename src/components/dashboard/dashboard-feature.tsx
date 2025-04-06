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
    "5YMeugtrubJcYc391EDhAfjS8yW98uzJc8qQmBpcNiGkHRiDFWhLMWvf8nPECQ3XfeWMKHxmkc3GtZsi8cX2WcUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pz7n3eBmrBn5kU9LRkNUSpS7WLUUgcPozAMquuGYwSjP6rA91r2wgiEUB8E2QLvWh2NeizinEXki6dvgmqqi9K",
  "key1": "45WQyYfN1VmRyjzzAiEPmZNxFkAc2njQgGFrQ1QvfDnAhXQfeMHD3kGKuJdh95DCPps2hEtPdF8z5gzjtysajb7D",
  "key2": "STbfEBcGazrEZGD1JySEun3vUUGX4hBmeMmzk1Ju2nUDa9JgJXmE1GNg4QZTXGUBLaS4ETsYpWZ59eK5HKjZGym",
  "key3": "5duojMSHDs7TwEKFgx6Dpy5qfMsbFhWzdktGmrgL7fVHxsNrKJ9JXWzpbErz3bV7c2Ptu3BBce5NBG2G6ejSWVZC",
  "key4": "585eXZHGwzYy4YsZhmyhLYfyZ6LfHmZwrKvYzVWXk8Ad3eryaejhBRH1t9qf97o3ZjS76yvAAFV5PHH7yAqHe1Eh",
  "key5": "5C89UhSKYKhKMVXwnkyMm12Ye33GYPEfypB5NRpvnCQd9Ja2rs2HjyYSwkpmYgZqtHRFFT4kxL5KjaFNGCu6VAXU",
  "key6": "5i63iiKkZTfhgHRkuGUSCYKaJfVgeYv4Gmx1r2sznX22bo7mhD4WMLCXB4mUYEbvPGXe5kd7JshTfT79xMKj6PKj",
  "key7": "2VvPBzSJBqNLcBRzUt99K1e3ixtYprKoigyjXrUohGeJeYpJCKXRWxbjJ4KQReSumHve6NWwxQuSPkMP7btZDrX9",
  "key8": "3AnWDWgimGQhsfJfUWEw2XoMnTyKJE8BY4MkUBxEDoKnaSYvyg6jdGLfehB7PptMUWh2Hf5Wdvw59F6XE2jyXSJN",
  "key9": "5ZaoA5SWFRLN73vLfTZfbDwQ2QeWdfbgrFKicv77WrzFCpftw74bqrnE8QecvxUCngM2cyyi9LWdg9BX2ATrnL8y",
  "key10": "4qEbrhdgAE2oahfTqTkuCroxptezuTuWwx6RnHTDYMEPKegnWBDEJy7JaF3dCNcVNVJZzHyNcE1BZMKENifH3qM1",
  "key11": "5rqMezKH6w2rZTpQ2eUgDuMM8ZCjt3hyhU8Lp6aAMszJDNkbUSjhNbndgztiRKuLYyoXKmjMi2Uef3LPiCvWkbt7",
  "key12": "2tyVTu4HS5geS9DYwtijQ3ZkKK1ixmNV6fv35raBsSw2zKvvmdGx4rTquSrbj8CLHB2pwJvMbK683x9diF6fSg88",
  "key13": "58QaQoesuf4GB2WTz48wN12RdqVDJB6Zre2TuCiaKtN9t7ABRQELM36CLGn8uNvBCoB7wo5JUUZwotcGzrNUZcMb",
  "key14": "tfvz2eaBKZ5ZafKVM36TmBLCYw4YRCBLLogSMQQRNTPwenuK2WH3KLmkY95sgoLg62QTQCGJTcPvUGmveJsj7oB",
  "key15": "dBLBT2symFBKY5npyPsQHQTAvRP4ThKqvgEr4gRovw53sxpFyHB4D9JzGTY72URonPYruneoBMRjnmJtm2B8zYC",
  "key16": "4eXHvxHJXxgpz62cxSAg7hwr78SDs57nwSdBHmAz6ZDVb2rhzjRKSuEuZSBGejeW23JaKe7ZNLq7R32ezoJ3t7wp",
  "key17": "5j9CFhYygzNAWWMwAYw4sSKRLtpBB1Fh4UkCo6dADTiSpQRz6QKNpwMxzWHygvQnUckxdbq3B2pfUMpMFEs22KQM",
  "key18": "64grZwN6ismfbdNWH1LLiqwHNKkbf9MdJFbGa5eh7tFwWwZTKxdHcViMihBkm9Fepx2tARUerGhPENiYB9oCHioG",
  "key19": "2Q1vRZoKXmVhpXuvDmHZz6myKkNMM1bu6zkJmmZyAPZnULmR2WUUFhNABn7JaWbVNo6uhBKyC3vdWzcfMRNjFn4T",
  "key20": "HYbmkXu4StXiNReo4BuKqJ63gobNn4kaYBki8nindgidAmnW9iYow8fvkkcKZCz1mtK9R4aQNLsNidpj5cERp4r",
  "key21": "4cFw5udNkBSqksts9bgmo3t7sTqSQ8SZQX4PTmXDNBTjCmsCEUVNzAR92vgun3UckM9AfK2S7sLNKGgXMtCsNbsy",
  "key22": "59Rdk7zU6iA8yKnUqfmxJ9DFKfrgJovtQSdVxLrA1gmZfhCfdKGV93rQuwpVMApargAFRuagF8vJGTZBF89cJQT2",
  "key23": "7nepHGo1mdDcaUDK8Sk27XT2eSZkq19sJ4a5Ay1QVgU5VBxajhbBzTcpqSX4AbAXe6xoqUB8xf7dphq7w8a4dYw",
  "key24": "3H7yzr63ZN1V5QK2rKyrmahjyn9erDjqKiEmnhtfBVGk28sijwcC6Ezr52jaAszhCnY9LZzqd153gYzNbqmu3sMM",
  "key25": "4HfTywSA42pMtc4ejdvrfEBYaGjmsfupcdZ8qQgXBPFEBc4Q6V19kdgL3N4h1mZySfx6AQfajNzq1EGgZkaNgThp",
  "key26": "ZGYi2VA3rdFDqSMbLgya8kyRKv1qsLRr7GRbmoNjEC3gc33A31tmp3zpnDqJu1BshEexn8Rgdbu3T4a7Tx5RHHR",
  "key27": "2k3SpsKRLG41RdcJPobqKSNvWL1J2MsGNqshVpDCHHEnkxH2jfkRKx6432ZpEKGZmjR3cRKsVBgjYvnCcE6oruN9",
  "key28": "3nfPRjAuaW9aPM9W8fYMvf32dkuNFPzpSSVf5JTAZDqdGbFDvVunouTV5RL7g92tyLYDG1VmhAWCvyL4YRCt4K3k",
  "key29": "2WcoRDsUUyMQqYeKBGkUh9KyuqxHwE9dsGmt6NZvVnJTccBufM5Gi99M8wX6WCqsk3f6wKmUftkXB4BXfnDJ6he",
  "key30": "qQ96HuskjqwBYcjFUPJgdDMgeuKKFy3ZSUVSCMaPqDSRfEfqkoHZyt8Yy6RXhM97dHTCsWkstywAhFVzKTJ9aHH",
  "key31": "5uP6JwRaJt2UTf2p743akmixAxBpGvdb5A21QiHQr2K85mPANtsMGRTef84aP4NXdXtW5q3fjD1ePAEmXoEtYeNq",
  "key32": "2TpMZnVnAx9TxjAfWXaSxkJeXtPyiBw3YbETRAuNxD5Yww67FSnzp72HPmJWuGtg4wExkTXS7jnLb9smfeJ471yf",
  "key33": "2ZEFZ2kw8GhbMKGMLwyviru6rPC16RH5AWBXFYxrRR61YwvD4RiCL9Zwg1rMqHnnDg4mVVstozTJZnGCsnsjcxWo",
  "key34": "to3pmSNH6M8VHnF9UDvgZJDrH8d6uWHSSuuA8pPfNhuH1HfrabNm1FGeGQ2owCuJNZUXbrTDyoASNjR9Wb96Dyi",
  "key35": "N43Phdh4o87SHFFmUSj8P7Wd8tF7yhWqiCMqH7r4usVV9ySLxXP8UafHeYKo5MVFLutAgcrNtGF8kji24JsLdRU",
  "key36": "459d4oVyooE5N9gg1qP16MXRUvL2ortMMZSmQg4WfmnELeX3qtmfCJ1c9WwtewH7KdWChDj9kgASUbjQNwYgRK78",
  "key37": "3G1WtAe6AtcQPCmGJHNnxmjqmsuAR1j2sgn8iLooR7KXsg6nttB2vZvqiFRECkGKJeFKUL49ueZUKNQemsNyKomB",
  "key38": "4aLzdeVAQ7dbuZ5jBdDfMKhcFecTv5z1v2QLNpCRFxWXTPyNBozcRSrTM6iYbLwDmdY9bA5QPoQCvjQibrQ3BBMd",
  "key39": "4Q2qfTuuBsSKQr1x2wMEpzh2LnwFaDEgJAZYfB8XxqyiBHH4T1gEeNBgCVrcP1YUvdhxkDUJ2UVzLMKKLyrV82fg",
  "key40": "3x582RVYyuysELCL6hPowx9cw6XV5BBCBQAFwLEq2ym4AK4HQZJ8YXm6mf54aSkC4nyySiaNMVRTgdKvvvJ5T56o",
  "key41": "2CnscqyTtqJZiCGCa8b5hpN4jCbspmBM8hF7VA2mLqVbXhk3qfo8tqLEXeEYP7rSLXRrAsX1YtyqnUJVbGpkYMax",
  "key42": "3ynU22L8tmYPDjyDX5jiNmta8EK4xcTEU5HHf4KqcDwxixQfwEHcXTqnMVqXWbrA2cTUzb2Sb6AzggJXsh1MWz1G",
  "key43": "aJUbGiRdEonkACiKN5uXY8CSKpXRtwk18AZGuRhSJ4s7kHsDzjWCrVPhDWwohcyu1Q7dA3R6NpQ2CHTPg4jRFa2"
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
