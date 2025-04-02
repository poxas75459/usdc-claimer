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
    "49QsnjmoKnDzYn6GVs4ssWsxZcynqwHYzgQEFqRXQWEhjQ1FqHpecYjrdCMH7dCLWUuJiaq8gK9zJ5mQHZayatvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eweJhXqZ8t4U5UceLBaewzhRhcusJyUTRzLf5Kivh4vf8PfwyRAo27rHEAVMcpLqmcTXYtZ9dtPkxSPia2dsoNr",
  "key1": "5Q9ETDUx4DK5C2BhbfH8iB4hEtfM7xmpygiNRD61HcXPgJvrXPRVsskUUAdCVBG79GGGdTAJ5zDQAnmbCZ5QA9Au",
  "key2": "2SEfLTaeuZCiBvg9EHLxF3GcvVy3if41wyM8tLL2uCnyWWoF5fZTX7HXF8keae4BwKjE1tsnMEpepoE8HFNYVNjp",
  "key3": "5fLrDRQ3qXaXTAXV7Zyt6hfr5Jymm6rbw51RCTENKqXYm1FqfZcuhWY4ke1GMMLJh2RrWdUYZBfqbKYRLJodcoeT",
  "key4": "5dSoXDXn1DjwkQywmfcfbKYtCi31na68wjgDC2GbdfYjKiAem77oUPjYiBzmpdG8iccSXX7WHAm7XpDByshpPA5r",
  "key5": "23Qm6KvSi9LrXJPASP2nJEjASvCNbfyC3s5e9uPqRUPXvNHU4RKDyNMR8gVdADhXRrswfqxQLQ3kDMnTsPADRLsY",
  "key6": "2GCL1jfdheZtocZzeCz1NTYxpiEv4Gk1rc7L7ub48Nay3n7dUAw4JF2tFnNT792uYZy13CvLsyWuNNn5witg6Au4",
  "key7": "34JQ6HiRAm4FUyGW3z7zMQMKqfJBW614sYe22BQJPgUEGZeQMHASf5EryTiYw8kHJ7VfnorGrSv68uDjPNewtaV9",
  "key8": "b1WWUsggi3worZCYajTWSh5uL3Qr9JT4mVD2Y9zkUKHgPZcdEce62XJ9fQMhrZrtvrF8jbDyspexSbnTphaF1SW",
  "key9": "32PMBNiraieisckChjvqSK2cJKap7pSr23t7htuzUQrNHybeDt3UwLRJagnXdfxHeNrzff9Nq9MjKGhyDsEbMvk6",
  "key10": "2vfLrvdvs7xVop3n6zyQGqovKpjt11yfwxc8Z8vjBwuUAVNyT9PiHCUZqQTz6gKX7FMzsW1hmFCWcYqGuqQgD4c1",
  "key11": "23VuJaxskeMgEP83V3YFKkYNCi4BKAQw6xxBeYUk5FRdiFsXCX26VzNhi8rC7UzhahnCw8KFo1D8RzhD9uYSorCR",
  "key12": "5HUojzSzkXw27PAwdC6hYnn7xjaCYG57Dy9enwkVJCM7WCo8HNtYKPB7u6GpsPPZC2gdzx5wMjkSVZGP4Nf2hVXp",
  "key13": "2dxFApDZYAwN6YUJx43K45zVwfshmYYEUNnuqzf3bt6r5V7etiLMtYZNUGY1Dmyx6kyNejJeMhn5nWPJJesMwoPq",
  "key14": "3KaJTBtPkNbbK63RxuGbm6KrQq1PzLom5rapQvkhyt7pDnpG2y272Ku75SEfGXVUwjrSjuo16QZFJQCYjHibs8GP",
  "key15": "2rhHJC4T1U7qfyNeuvt22jhAFjafQvswvChh3WjURtMLQx7pGFBHCKXb8Cg82o6Ju7wgkyQZJ5a4DqAzKC8S6RDg",
  "key16": "XG9MNcGcUsJ2EGyuBK4Vu1EL77ysWCPVyrx2RZgcNyPWrTbLhbWMiNtTwKCRfVwfWPNibzP79oJTsj1pNQBrG93",
  "key17": "2SYRDN9JZW1dgeX2rWwpatBN1A5qdUEuJWtKosgLNeCfaEuXijVGgSFM8bVmMKb5dGkKhwhZtZLsichM31PYAXNj",
  "key18": "2WzpsAmWNgDou8jP9TpryWM9Zm8Jd7YnH8F3tyjR1MB33tke8N3dEocQVX7i7LPsdxAntQkk5nobtv94iSaPs1Q3",
  "key19": "5issPthNMuxjbdZUURZVPURVXgJtqbMDdhbbMM5EaQzUA7G7oLnjBzgY58pTRcMpDFWiT6KGWF8Bmpaw3HjCg4Yp",
  "key20": "3hYT1VS6dz2rPURd3pZyKYn963btXcA2UcNNMCP9hrjYtb31wmnQypvEDVgNcSg8TDH8cJnmTogRkFBZ9rPWb4H",
  "key21": "qkSBGFwyGKSZ8XsTYduEBuwCWUVRsst4kgtEuDjYubPkETCyydb3sVJrfEmK78aja3XPtFCtE3j62qpFgnDCzHu",
  "key22": "cu3Xd9gMXSBgYaaeMqBXxmHFTNGLetZT22VFYJJqPTXUWGVRDewSRJ1iutY8wvrba47BRNZPfrWxb1z5uKccBme",
  "key23": "5w6KPAG9tpS6AZCGEcvaFQxC1zujjDjRaPU8eYiDotiVzLKDpZNhbFGb6PkwSj56R3LXbp1RrmmTamAwKdZ8X8VN",
  "key24": "4qWuGeVHVcVFuqDbVtBDgjjJQHkZ1xzBdueTxNpSRpcBbdToNzsMpYxMvBHwNMqavF24TQwT5SL5PRBBrPdmZRqS",
  "key25": "2f5u3wz4Np34xg7U5JPTNGF4AsHipAsJfeBjnknJJLKMEvR3jyfRJa8e8ySc7LT4BNPEvPF789q4J7FZWPyq5y4N",
  "key26": "5bgYKeAeuARReebxJc6HVqs9sDN8c3t1PcDy4gUo4sBsqne7Bz1PCjyZLDzQqBgV4w1Gaw9aw5cebVAMKofJJEBj",
  "key27": "4n5cStSMrpqwRWVkpWWdUvFojvGf8H5jpXTkRMygZcZ53br9jfVcEW2cWqmPUE8EewArsAf7xrymWVVLFq97VeQi",
  "key28": "2oR2x7os1B64g5oZgqywJFw1MhaFug5jk2VDhFwA6aw6yiVqRAWzX77yS2wKvyuktJsLmd7fadH7j3UQcdiutPZp",
  "key29": "5keJkZ97uZXt4aCxGhjViv8Gd35rRVGoXY5EavAuPXFBoCT9HfS9H3boZ7ZWjwybAWmSz2qgPZNQsE9YJ7sKQB7K",
  "key30": "4KqBEZRKigtCf3qVLryWfLDnS5FkHJXVk9e5wXM1edkhppC43zeSTo3pGNUG18unBQhUdCeGJ45E8MGnqp5rAR7K",
  "key31": "5n5uKm6AVdhLuJKqUyEFeSaXCatan6y7sRPXncxJCfMu8KNXWncTDa8hhiBY7RqTqbEucK6favZS1uTLiwrChmTG",
  "key32": "5hHUcodaJFkssbg3RrbyLk3haK2cX8yzpUQS8S1wRDmdSdD2zcQyTNogzLR21YZ37NydhUMGP6SJT6hkoBDtUuT1",
  "key33": "5D5wKGQ93DFtqRk6SKhbV7oGbJzUUWfkbrWo89CurH1M9gRGB5eqqKAwzMgu1R7PvtQFMiUWPH4XbqnCDHjU7nRS",
  "key34": "45KucipRu1sx34xuUw9dcjqXDPUpXypikQVxH26yn1fSCcbx2MMsjpGmmDVaSHzeCLs61w2nQvqoiHVJUCzc43J",
  "key35": "5EiTWkS65ejHkj14pBWNXdbfBjVX9puUUxQM6GqDKR5WXkKF1ySuerYhs1zLz2vu3dcZJ1FKWdntb6Wx3NNvxvTw",
  "key36": "46qZfG5gX7AHM2sJhNN7p4pVdsJATgBhYoUDtF6JQxTwn22PtKFFPiM9C77AgUSMVADo3gqURf1G7LVm3bQ3Bi11",
  "key37": "63Wb7DFvumHixKiWgnvDY6JW9X5wVVQt1KBne1e7jzpqnQzyxTjscVvTuQPPFJGvNYDDhnZPqRGs457qGxwtt6Q3",
  "key38": "oJZBGSRaBuFTLFxDpHai8VkbFKL4dHjd4EmQU8Lwn1EH9L199cobfhcZgbPX56MgtW26MXxVa6bgi2RYPNATJ1n",
  "key39": "2RbkvHB6MLzgYjVj5WevsECi5vpVLR21MBkwth96qSfT3epqXBxgHj4ppUSwivj5bT4nzTU353RaJjC4ZZQbkd6f",
  "key40": "4FDkAMyiyu741SxAUszhkSYM9UZo34K2MrkTk8qpcNKzpcTpLKcB3h9xyuMbsEfiNikqVJL6Qzr8Ws12xwddPYWp",
  "key41": "5y7BF3uFc6miLuTqgAGZacxTgTJHRnCEDtuwERc6SAXtU25cgdrvkR4svsmVXEwrQuaW56NConhWwkFr6BAZgBk2"
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
