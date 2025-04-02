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
    "2AuiyR7MsLeHNJnaT2yKcN8d2qNAGP198K4dLt1YMq68SdCaDx2GrJX2o7oXsD2RGneeVgE5h1h41Z7CThWkC4Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66BjtLWLEgwHdbYFpo4FVDeypVcb2sL8A7U3MREv4KQbKrJHKUaBtnTCzswmC9u6TxDz9aaQjvdBZSQJ66iJdvjf",
  "key1": "2gouvLUwCrRkJsjFr8Yb6z6vwt5VHpn5yV6Hrf7oYv8Q7LwU4Dp2yALbkoUoAxJ2G2iNo5JEVtHGMNwZAVFHuwPR",
  "key2": "4egZ2bmS5bFvw8Kuredbi6Hk3WwjhnYDbz6RN5WnNbmpvdkx8rortzfR9JL5ERjgriGGFuHUBAavRcQ2FDZPxujj",
  "key3": "8xWkeb2saUKjLD1fRhmP52EY7xjCfT6Wbd3tUtfud2AxcUZjxeJxHjT4ZZD7biXJrQuLDqw8X2ms1BvSpiYqBjo",
  "key4": "rw89q2ihJuqBEfo2ppm1VJFowMAwV2ysyzfmTESNuRAPuKisntufMKe66QGL68xjR3Ho2pNevmfGqYJtQAopN54",
  "key5": "4jKVvTjFSW8jGZiPNxALhQt2V2YayuG6wwQda7FC5LWZo96CB3gy4FvYKpF8SVYox84XjCywRN4bbhGqtei4a3vm",
  "key6": "5jMmKi716Wmcvwa3uDBbVkEGYwEGHUuUW3H8HcLV37CGfNtahoSQv72A83ay2erG26Qo149Yr7oiqXu1iVeH4bw7",
  "key7": "3FrxRd2CioyG2nkHFW6y4ovMeRmFR2HE4r5X2pb1LXwyqCHEWvmBpDGGLVo3ym3oVgxic8qMvi36P41pHYXN6dkU",
  "key8": "56guKh89daXC3HrFCWwoW64nQRKnK6KeRBt2KhuAqhyXX2tVfMod8tuvqzDBpm18YG5PXrhgCPyDwoNT69X9V1zT",
  "key9": "5wjmBcg8CZiBHyoyPs8aBq7yJyKehunqocAo4hLba3SJA4U4qzKv9NjYVmWFckzX5eYhrGUQJ3dXxftCE8SzWKF2",
  "key10": "4ED85QnHvxQ3z71pWCwvdbKAcMZn3Tp3Mpv2YifkVZk1QCSUEHkVfTd2M1rSkM4TB3gGPCa7vLUwsa7Y2jAZDL3y",
  "key11": "2pSE2R1YJaY3BqEThHu8Fweynj39tndsPStxaXCbtf4ewdbWXmDGioHBK4F1atRnZGvFHaTerD9scmf9SB2jAa66",
  "key12": "3QqTaKM1beryLgFznRk6kBMcb8wxRbeAzRfvBcDKgNqRy6JaKVLGuMtr8UBKf4pqYPKLtq8BGY9huRKA7nh92Hry",
  "key13": "4pic4B5Fp99zLjArC2y7PnAwFiw6oEGBygpbsnJmLJ3H4ZAT4y4zGVa7oeTB9Qjt5udhdmtt72ipXTawK7GG1X8M",
  "key14": "5uoc9ZswMMh9vVoVjqK4FQgoxoZBaGTobGaj9pDeT4snVS2u4LkbocggMphwrGYUJ1r7PyhBngve4XruBdddNWuN",
  "key15": "2dttK8jHWdxvzoVWFtST9QUuER3W71jFikZm6sNrKPiSnkRsbjvXaHAJcUvSoiMURXCavUFmznxbq2u1bkq3krZG",
  "key16": "2q6kMLCDDtYwuixibwRvb517wtLVfafmrA9vFczy38tWhtxdorjpaVANbPwHUPqKN5CKULXHdcHz4BgV6f1CkNVK",
  "key17": "4jK16KS1bQBsEMAzz5dW6Fqe7HiF3z3Zd7RTJcrx74GAaW6bmMQ2VgDDeUdn5PLoFKHJ1qvuqQ9gSSB9XtaiuwuA",
  "key18": "5PUcKvtkbBrF213Vd3fGoNDpgnEJf2z7Un2mwbdwQNcSo2nkfpwMMCyfPun9vXK5JyMAh23vTniNbdx4xEEeRsyu",
  "key19": "5nnxyXv9LmarQfT2AHTZdfewDLQArJB879XAfKpQhfDbKsjUQpZzVPKg5Go9iegw1PkoJQfKkbMACp58c9jsFdvJ",
  "key20": "4stQ2riwv2DrzEKMF6WkfEPBi84R3yzfaMrab7hkb1b9cgAaiw6pdw3BB7X1GMxejDjXBvkmssnpooTxVdKD1Y9X",
  "key21": "4DFcfoK49KBdpZjDRWQno6ixAeDTmzREoudhcKqBG83eh9WA5kkhkxNagiQs5bqWcGDgRQVamAfYosVtvMpJX9sw",
  "key22": "2oGrM7Qvk5kMqWYLAUysmEN5QY2RpA9BtGqtXB3A16HQEmMkYJb7QrWzgCXV7bLhQ7vwPquTMMS97uT6ZP8r9bqj",
  "key23": "38jYp7cYKGxQPQhQaQcVSgtYh5f24WtFBvk9DdAnjPQXmExMgaZkfzeiy7cySkNrJToFUbx9mTCWWRKaVrsryb6E",
  "key24": "2Drh9KUWGVXJtxsC2rPFkn26f8nqrxN4wR9Fotbr8CMrsomi5pqfqFym4H6G9A7Vi6EAWekTXWDxL7Z7eM4kKiw9",
  "key25": "2zxSSubmD4i9SL2ukLXtnPMQSnsBPucBxsLHjHHsqs2QMBpz4qC4JVWZgqe5bXkf2yMza1tYtqtnaQTGcnJ2rK1Y",
  "key26": "2r8m24TGNx48QfCYgqWqQuWGay6YufN8jZbpRX4uTaR2jLUCBEFic47WdqK64NBt9tSJzK4Yyi5ctXA4f8XQavfd",
  "key27": "5ZBMdtRqdmqN75z4xvtmF2iFVEQe93KpKLXSzSSCsrRPa777YT6jopvmQEHigm2ZzhqWWtZFfc9nf8MRcdhYJXdN",
  "key28": "35Zv52v76P5N8WQYkF6C7ySHRyyvQdURy4aS2Cr9JziSfvQDMF2Sb5UwcXm8HgoT2P9iiA2fUkKDm3agSDc3HkzK",
  "key29": "4LzjPugeXXt6PFcPY9LEfYfNEwTm9cvZPz22fuhAKzmJTYDoGr9rjueYEEz1ukYv2wH5uydkU84cDRskoZHgkuoV",
  "key30": "4gh4zt9GoWXWCt1AnWN38R3NdHrF4P6S5UEmMkywhhVrpgr7i28pv2Cw6QwVMNGcQcHzjtSMLyfw2uXRijKLA5Jv",
  "key31": "67YPABWBQBtU999GsiZsYuLaFvSvqCho8xbjTeatuPpso5WD4vitRtcSZuriHB9hi68L7onUPCoYwdY7wnmqpZ9A",
  "key32": "2EUw84iKDp6j5w2m3hZimw4YBJ6wGBcYuoahKatxhzd2TvkWkdjkGcPsp1CqpuZN4djZuZTT3wqBRCQT1D5LNhnf",
  "key33": "2jzugxDeVpwRWAaaZA5YgLmhr3svcQmojS8zh6inATrcxuRKcwTmvgoUkFdNiNNHMf4FSYwf2aDGDiNGPcmKnpWj",
  "key34": "NtU2NN72sxPa49Ghi9RewyrW7RxdZViNpfMrjsyp9B2wnGt4HYFhx3mTdNouWPRtNaJKY4GUR5yHvUUUytjcwtt",
  "key35": "26WetLub4ZsHnN3xQ6bmBKJNqQrFHVaa9o2X6hzLgmTbernAvemQvoQgWgWqZerDUACWxPnGAQgb32SWajTA8rTK",
  "key36": "4Got1ygyb3V9EUnXvV5PcSKyTpvpUYdda8gMtAeEeK3hca2Bu12JZohSsqRcYfBicNdu8g6j9uxehSiheyigoFMo",
  "key37": "2AkNtKDPY7tXokznafo8ELxnqsCPWhhurV15nGzdZuQzW9HaE3LhvY5dcAHyPMTvN4LZEXAmsDT3sN4M4ZdPiYUn",
  "key38": "3rTwd5CyMX8arHveFuhcT1RdmCTjT6jkEHLUMHT8y9ExnnBxXe9KEwHdvCE9VSYo8K5sHWibj6fLj95bnddsRAqc",
  "key39": "T5LDyNEsU84W6j2w2yfTupTGLnEbfkkPmpwMStXWi5hQsgN9CxMNE3qRBPNArZqxve8d5VtpqmBMkcyvRBkkiRp",
  "key40": "5cAPMu8n6JZbPTHzMomG2dFS6xzREPcMKDwmQa4k4Q2K7oUBSGBc1zP4MtvEG5zW9dB7jjBppfDXgR5idS25LxTP",
  "key41": "gKk6cgHQTcGoBDQUTqvQJSGTCbCb5ZjxouoZShe3wCJmRw4KScKjLMFTRqFx8A142PiatFAARdeZ1cqk41qGvdV",
  "key42": "2uQuM1afxidcKQCwXfj5LpP7vXKW4bhK33p9cHZc7KRtUUt8AJvTkb1ALLeDQQNKprevtaJK9NguBXo8xtHJ7Wqb",
  "key43": "ChmtPm4QaZcQaf2AeQ6x9ATG5mHBP43aU9jFcuyTZaweX547D4aNWcYKy7a7rMAPeeoAks3ZaHXvJkgiRjd4DV8",
  "key44": "35KVzwJ1Ze3wBM6xFTeGPuYYLPANYR39iVCoZPXkX5uVSydhivsZBAFPEAmM2BfM8sdh8dkso4wW8gF4djVB5bHe",
  "key45": "K7wBF43bc9EbjBhPPiw99vLiZmEu8t4tYQCLPoALFG4PrSCHaThXgCPw26ZxGCQYrhw95j561jkHa8qYybdLege"
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
