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
    "5eHVH7kXMnFhhSgvNtNYsQKFb3guerGtciQufUVXHsspUYp9XkwzpwQVNDnZKqi9hQjKw3gh1Gki9We9V6GRR5fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvGb1PfoL7shQVfo6TH62PRYqgNfGD3WZszXxnFd15B7kyLGc6RDz4g7LoP6s6GknVz3CVVwc7GUN3Z9fwCYCDq",
  "key1": "3fzMrrFPf35m7Rm14f22Rdu666S2KqLyEDBtavbx9ff12St7iFAtZsi7Qx94YT5btdkBkyLnYbpok6CaEAenemPf",
  "key2": "3R4jvpSq11NWfFUTZ5kLAYYhCR1yPseXWJ2T7KWkdtn944uzL7rjGvG42k3wKrrDELetywUQWY3JxTHJ2v22deGQ",
  "key3": "2pets6QNWJ97KEFRkpV8kmYdj9PZtNnQBwmfbiyTcXTL7HGpXQVnK5KesMrQekyY4Lmzg2jiTEHh2o7fVn4LZYB9",
  "key4": "2bWExVGBDrv32ghuow8q1AHMKbi6AjrepMRm5645ZjPuoS5bmGqGEsvmfQrF9HFRfuapvXfMRKEf3r8XwW579K37",
  "key5": "5885RfJZDmXXbvH2x4Chqp51FLEZPLawFjxi1UgjVuGCwFGmRpAvNnUc1Ytyu4xn92Q1TsLPXtR2ukurMbX6Sbui",
  "key6": "4cEqkhXwqr5AZVTLiqFTNcBBLqdUPtyXULTdfrQezYUKeLoZi5PufvyS1gZu185pSBoLjS2R2uc8sZKigRLwJWYV",
  "key7": "5gJNQ3xD1yqvGSbao8N2uCTBUbsrvb1h2btdtovZHSdZgHEChbA1QhLuq6zgAJznUMEz1E9G7HG8VihEF3TW9KbG",
  "key8": "jmJTTG9QSWShjF4fuqAMQjPHYhuCHwHqSBNqTGntjSZRi5qiyuf1Ssmk1dRDCzNQVbaFqQMjPcd1TwmMyzELpPz",
  "key9": "4YyGsDNHU9L35ReCUeBqXHCjuoui6CchBf5FAvujZ4MFr4bcVysUbxQWJrXZLmBMetYrgDMrutW3vv7vpLxo4Ajc",
  "key10": "3yX5hC9zKfZndQx6UFF33jUReZMQjg1f9145pvYDSpyQ66mmEnQ6YRx89vGAHjgiVt5Fhkho3YAqEssgoDTi9T5D",
  "key11": "mhV2ytu26emn4L7R7BnWQCLRv7WguTzh6KkAtis7YmQ6LJcTEwazWgjnFQTgTWJC3AhWP28pQzrDGjcEWmYDBXG",
  "key12": "2K7tBHLYEebSWL8hFPL7j5zvycLiwK1nbmecN2jtSMWakPQPBJnfv2nX7dqHZz9LYP6vWU9jSrdNYYKVbWAvk86m",
  "key13": "3SHt86qwXZYp4yhJAWKWoEi41eqAdWi5j3WzGNQkrWhwBneoZvdkSjWFknZZJpjH8swcfZACBCgcMmCscT75BkYS",
  "key14": "2zC68HVPjN7AT3AXH5LSf6fsS7qpiqEubVaVUM1ksj2BFL3pcm1Rm42wJME8GtuYVGEJ6ot8bwwq5NgePPgMap4t",
  "key15": "5jjkXuFDuu7bibYEkR6YJMAeAkyszJs7qRkEePYdD6oyHp9YieovbfSLEoFJFbzq46wEherpHWJFVu1UkwAEaxya",
  "key16": "2ZNrbWTfWvsqykYk5NG6Nm43kAjhQhvezFPnFFxV1P6FWJT3vMGuUrfTNRXkYC8qT9yWkDRSi15cdfuAdNhM5q3U",
  "key17": "5qMaoRyHaPVxC7ceVDsNiSqZbkNLiCtZGUJfXF8vVU8SdxtjjC4yEtLuJf7AjLRxnVd7nKbj1yoRiakq2iZswq7L",
  "key18": "3WCBdPTCCKfjqgD5hCxWqLeE1xxvbrK2GCzLmqnapkDdDVsDC4ESqceEQRH4KuWbNBHanaQjePmvkFSUoCuZhjGu",
  "key19": "48YHYkcVJEz9zFV2twBBpsf8HqBcFWwtSpqSE12PRQZPXs21gvDCXGMejHmmf477paNvmCY8GW6rvSfhyBUxAbYv",
  "key20": "38zSGH1Cibk9kefaewrj6Rio61LvRUP1vvuAkBZba9r5CGV4XkhmcQjd7jrQm6ayqh5DEML7pv9jzsrw586USWMX",
  "key21": "oag58cW5y53vsinjQF6gpYPhGtYYvd5WvivKKiZidpeKaXVsNkzRzQa8NueGQNcHyXSiTJEiSBDJCjkroP91ggk",
  "key22": "4wpFNEG26pHrzyxJGESiV8UNdcx8vtPF6EURxdhT83HX6bKavBGoT37qac5vbyhEW6UrJ1HcNDz8z1T3kNxWiw9x",
  "key23": "wj5zb36cF7Rx6va1cyaosjRJ34dKWuDUAHvjUVMXXph5BtmPDvTYawChsS2PY98TE7GRPQgNNgivVzYF7LQVDJB",
  "key24": "5BgpNTNtBotTQuZhnBXnz73mtQQQPTiJ4vWramhD41Nk7WxYi2fTiUcLVUVtLKoU6SaW8YrzxsKL49wyVEBAQoZv",
  "key25": "42Q8SV9S4FvEoNXF2TaQBoTT4v1Huq4LeGjtgN3uzMmbaHXfMDddxQJr1gQeRCRjeyhK6cwvRXsE2RcWAhGrJVqC",
  "key26": "5XXR8tyFQshKXCEg1TiCjJemLKKfY3ra5f2GuaB3oL8AV4LkE4xhkbP8KWV4hQj5UB56KqYGVeNQsCFswUr8ereX",
  "key27": "ugjHq6HVp4KW7CTJLPom5QSgLsS2LxoqwhKjq4beirWKtB7KpMWMyqX1FGzhd5KjP68rchDifeRSRwMft9LEu7T",
  "key28": "5z3SVWCq8M6kTUMHXdN5TJT1RPDA95KqPSX77T3NuTL3sA1SP3aF8FcQ5FGXmEbThZ7LEzA47ghGSfebooVZm6RQ",
  "key29": "3Lid9LP9YVT2UTmZSfS9c4uDKVJNxJFWuHJEUDUGX3RW1YcZX2yvyPj27KyYvgJBcrWSP8Z3Q7h4DgYcnt8V5JMa",
  "key30": "3F1wFp1JBS7TA2mXgADEQXiHxd8fzAb2AF3cCgGnYuLAbxToUd1qAwKruDAXaH3Rh3nJ3vVRJUKHFR8ZmXGQaomh",
  "key31": "3A1b12kChbTZgFaMEdMz8YnvHBzCpNovGK1zbKuELAvuGHabnhjAKBjTYCv78RZ9ue6QNyxFjnoQ6p8ar9ZKKNPD",
  "key32": "4N4ckWGyAXJTe3eEDB2ZVr7TxUAXbXkBM2Wx2e3TH4YR33b2ZYQXtJ1v8T1cLvd7sxkhugpwQ7TH7rtdJZ4wXNh5",
  "key33": "PvcUV3ZpzKDdYSCcpPSqPAzCZ8URhY4AhmYXf1umWHRMQxJReFnryApjy9Unt6boPWZ4xSxk12yFxau6wgddvoR",
  "key34": "3kSj1n3LspSiJCTDidyokwKDTd31cup1FPuZDwaNco89E5VrBxWZ8HoLCY4C6G23JToekdTDvevJBSrGr9k9EiXK",
  "key35": "2xAhfER6NiC955zQYtZjeBgSScP3o4AFBnYYkFsCiJhWJete1mFkVfJZQ8kLpT47SBUbDUPJvUrrCUXJS39w2y31",
  "key36": "5xKPwRewdVXpyoyrfsFSrGF6VWPVHBADBXFXvRdZ4T2gNL5B1emYv1PD1b4eNKJJaFzfZhyrCcPrVN1pefM4FNoH",
  "key37": "ukKY2bbEgruL7y4uqXKYnWZ2xHNe3i9RVqwNTh4NouLFfXoS1DoFdVbTx4mgM3a5s4x6pcvH46Ed1pxwQcEDUG6",
  "key38": "3dYUQNGoYA3chzbcqfociiwv7gxnkhGeRw97zxU8oUhANYWV1kpfzRzzgne9vg82PHZnmAANdkp1wdKDftWBy6hn",
  "key39": "2zCnaLUjW7Tr7gf2MmL6zdCvzgkXgnaZ8bCRWY5WJkAMnzV6PMhnjrqob7jPjED1fm55xqvdnvkF5iUeF9xbz4Nb"
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
