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
    "3wHDhT3ZeBD3ejCGmMjmGJuYv4QuUGrGwxdrKM1mmNB35zdF8krmeZzX6bXuvB7mwGmqq6sFPmNfo72s7AqWzXDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PncBxXcqTJUKqvchsUSLGbQUqx6pLN8RvZ8HQZSVfH1c4b2zHw7XnR1irYH47NeJobQBMSQEhroen9ppdfnEh2y",
  "key1": "4inKV2aq2YgeDX2Pvy2n95YZZBLMS9SFnquTfnfC1MbhqpUtAAnbwZqEqvAF5GfLDvtbX7JKEw9yn9XN3NdC8DEJ",
  "key2": "4JCNkXGuwbqEkPBvQ3pucJCDuFUo6KBBHs64k6wWhxqNYW225mB1N4G1sdApnt6BPF7qHXNTXQMyLJ3zxHcm23Np",
  "key3": "5H35qgUCL8pwHDe94BuwFxg3PewZGkURQWatRj5Z18pM5cYduafGuFFhTXSj9YehQhhbMFLApnR9xPhZwWgvoBfx",
  "key4": "2HeoTJZZtaxEeFVrwG5SQtLX1phjEUUS12knm484AUcmAijxS7vDJ2ghipKLMpBV3z5HwUg6Ym3E6T2CBhQsDQrA",
  "key5": "2h8d3K9Lu8Nz1EcLFTZiXK8m8HcDgB9WdrftjuMxu68wCzyZQGrN4nxjNnhH8AUrCbQu32B82ikwciUE9FX9Wzj3",
  "key6": "UHiHp23kwAzaWKYXBMgZDZcDbapYCCDKZGL3vKW8Ysj7U6a9b4UXaHcqEU49yhQ7WAFSux3gturpdMo8VnJkuMH",
  "key7": "4gH44D3s21RQsLRdUuhbgzmk45QwWD9twgz896NjmPzQnRiWkuRf5tZXn39EphGr2RKUaFyruUu2XAjXc1PA8nWU",
  "key8": "e2dVdd7r5KC7JqVnFphktFHS4GGf92wTgnUgFDZSiH15KXDhYFEgkkd6vrwKQVbqzDJLEtvono3ZhLx8Jvf8xce",
  "key9": "46Fki7g4e7e6nbS4xkcxN3x8QDj6ecJhtQv42SZfUL5mXQbENjCKzQseAFHbmsvTZAFL7s1MubC5TUYK4xTyFaEw",
  "key10": "qWKF5j2mfZAikXnhB1MSRq74aGRJ3VXaRtHiYN4B8D51m9wcKEvVNMREKfYcAzjsLqqcQKBM5NShSG1VHv5gpVA",
  "key11": "65HVkW4iuAWQxDibngQx9HWpnQ7fqDEbQ5SJnd23JJpmeVjJcZh2mJR7bsFCWoj3GCaoEiY8PAjGHecfyTgpwCUX",
  "key12": "4VNpJaFFf3Z6Se7mDXZ3ZhrnrXB4Zczr2CZWXeE4AdtTMR57nPTzDQ3VezXMXb8Z186uaYhyFjTnyki4CuFhAznb",
  "key13": "5XPXKRwgMwLDwSFFAZiJff8bke9D297sfFMPZdsA23q4SzyBWsJWAuXTH2wFPc4t4pqwhj8Mr3bGbEVYZxcmLDft",
  "key14": "3pq7EzskhDq8hC3Yf7zzfj4ZmPMarmP8pxQYdg3HRzqSfk2k7Q19xSVSUYobztMp7tjxocWpwwhm7G35gGehESnL",
  "key15": "3dnjbHozARdGoc7mFXAZWib2xqurZhEnrJW49W7nUXDNKoC364n7YSBYHbGfZHWZcBwhUDGzbNaNKBVGUFHdZLa1",
  "key16": "2ehndeagmUJPTV4CkQ9Fvemd59kiriUUrxpH1Yc8HYc5AwFHto5PPTRmc58oQXWfvvMrMZeDxVhvH7UGyKEDhwkV",
  "key17": "5KRPpaJkV9r6iVMA5UmCZKEz6K8Bx6JfJ2khNRTo5s3PM7nYiZMZMeRk91XN82TVVJGLdpYUxa2NtSKAK9VzCHgv",
  "key18": "4crHVmDdb5wezAVFVPR7phWTfCGpUrQNNGEKReFSCSrzeatxsszWhtHQwFf3J5hZxRoUX6EHQmXJLRqwkQZNJubH",
  "key19": "4JcMmYjb96SASgUzvoj7z1mpdUcznpqAPrwYCRyfHWeyXECHjLn4yZ8p8oHJmExWsqFdT8E1AqLYWQMkjngF5tFp",
  "key20": "4GCRpejX2Pz2rfYNgU9ghmhUy2SfmovhSujFPN5tCkxgPok7Mrdr1KjzQeGvdVznYYBcdKD2iyTeGxHnEYqPWQqA",
  "key21": "5BEUoFYYbyKwXbPPVHVE1MMhEorNPwBRbamJrzaDEg5Mz1ET8HEeaohMziguTFq6eJzWzbV8qS1Y7ekdJQm9PkyN",
  "key22": "26v66ahMFsNmciJCUBuXkQxsH8f3aeufstAoRMc6NsdVvX1zmo5mmPKiBMqMpbSrNHeV1NrrCur4nem6XyKmScje",
  "key23": "64VqCPPKGAKxDAxFHPcWhWEfijzNmBQuCqckD93ZFXgxY8tz6qj8ceX4PsD5BjmSMDo1MJ8DWLdPWZ6yc4EdXEQr",
  "key24": "3ZTfiu2C6YnzRcFmbKwu1JrM8y2jycYXFForU4pCRJNdsMbowVgQB5qqd4iinDrkxdcZkdXYZDqvGrTKaTbTo7vE",
  "key25": "31D7txTchhBnYxcMqmP4rw7jcnQ3ebNCkBomcj7JYBytmvFW77VTAfbnHoTjQ9rs2b98btWAFFCcyAPeUrGkwbdL",
  "key26": "3NoXNKAPLWn5NWfAeBY5334T3XPgk9vXzxVF94sFD747npVrEVgwXTC4FW4t4aJ1C61huFjhANjca3mfTDtPbAG4",
  "key27": "fBpFUnHB5v9xJf1BZ8C9TmUzRogKiR7EXePxpVLCEPxRrYt1ZfJJbUsWht39VDBT4DVsERGb5fq8ez7N889c6Ls",
  "key28": "5pT9cpuv1bKLTwfp6oaygJ4maJmtgRQpmPmqFLTUTU8nQMT1HFhE36cPUyNQzxFLpeNPhL4vsupV4YfhqQbkWiSk",
  "key29": "2mieXcvBKoGPR4Ar3ytfm47tpWReZ7MtCwkH26WQ7xorUtVuQFaZuDBtSWYJipw1nEhv7qtLuhxow4XWFNYaJxdt",
  "key30": "4Ggobr3U8WMZuuQpn1L8MekWw2wT7RgrT8N7a1GtSFcUkahcmsT4DzeGg1UKRgw39wBuyb3Y7wfdErxS3GP138dC",
  "key31": "5VwJ4toRJqKoXCbAzj8H5qeUyV6peURC4o5hibCG8PhtmVuuRPRarjG7Ezzx8yxynGCvmgGBacGT3gjFvrrmEdPk",
  "key32": "46wm4vZRK8JpZYSzTatVSs2hikCCec1ghtxTcE5btfQ5z2vhfxnzBirGUtNhq7xexnGUh3Fscokt8K8Bhu8bGeRj",
  "key33": "5tWdFduta4PT8B6ECNtBKryRZAagEYQhGJmFhSaBRP83VzFqzkBeC7ZN36dtawDvouWYMbXso3GMcaTTBdMGy8or",
  "key34": "2aB7zpvzKCFDHeuUZb1fnL2FDq3KambXhF5GDH1skeNiyTTNMMg4mvsCDXuWP2Mdx13q6HhS87y1YVsEfLKRmgcG",
  "key35": "FQN26VBCjRczB8zmW6KVmkmjhfPfjDkcoAawj3RBCC97wu1KuSGLC2ArAgnNap9FuFkUnWRH9MdL2VdbJANgnLg",
  "key36": "3L8PA2ovnqzfkBQ4CmRv29inKuQiHrKBxZ7rPSB482ma7iKKqx9Kw5bjs6YjavWwPbkfw8vj4kYZNvjUjG1PxYh8",
  "key37": "3zcVyU54BRJLMqeCSSk3FKmGvyGdxkXDBDN3UDzDWmT1QXsVG2euCfVYG9D7D76rfg67anjWa6P3GmB3iaqRfVqJ",
  "key38": "5aLYWcrnGC6wRGUKXKPz79hCDqUbDciLw6LJJGXtZr5NPZoALuDSsAQEqkqsxtGzZxbGLfEF1BA5Z35Vv9vai1SF",
  "key39": "5828bBwJyBt7JERsioC1oCCbA7vUVciwEUVRu4TYPiZo2P1U8zLXuy8iwEyYmHfsZCvVexugm7JJzZLQ8QXyeKEC",
  "key40": "2hcqiM2docYJG1U8xGA7YmNFMJPX6pdG4QAzFUpeTkL2zRC71oDZuSeyx667PoLwfJMVtn7bBuaSFiX2Y8DLuAGb",
  "key41": "2txw3KGvHWd4yV8iTDpc39d4w9Mzro7DvexKpEPuuK7V6rLBiLKnhBkrSMRxgAX1Wyteppp85zymjFkEZwsayn25",
  "key42": "2WRMWNL5cB8JXjJxu6edX8b2ZUTNxD79FNEPRJJsfKUvcdF96KGySEGvvKUYTz7DG22j1HkSvoKJ765RAXiMko8y"
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
