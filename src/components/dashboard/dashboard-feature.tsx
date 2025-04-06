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
    "5c7utXseuQBAkUKsrj1B6joKZvJDnJq1n5NgrGMLdTzcfD7z5qfjtEtxba5vGH4KxSonh1FeAAp2Vf5165Rbb3Xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bV92DvQCDfukM7L5oXUoTfdjJvzA2AxCQN8xzfzXAGs2S4RH8m7KSSruc9Eq4bByUq3iRMWuEsVev2yKkQTBpXZ",
  "key1": "3JfZZWTiXDgCi8MuyiE8JoQvp3CLcNgeRNnRA1emz8Dp7r9Kkjqo8zsxWrw7kM97txYg5r5Qh5rMR8LCmMw3n1Wf",
  "key2": "sqbYMoNonTF5VbzDGjLVL8qkSETmBaCC9cYJXBrVfQMxNF2aQvgChWWVTKwLgr4jDGnBowhrmSZKkoSXjyjuvh9",
  "key3": "2sFkCqducF1q58jqBQyCLRdBsUDtecneMutoQPa8G8Yavw5NbguYRigPwuKWHKimVfg1mGAcYzJoTX7KsEEUADtQ",
  "key4": "3EuFgJ6skDNw6xYnAVqJVrAvzqe91oPhA6UXAaCLsq9A1bRFq43qHW6PY2sZG21RG77yLuc8MWrCogCQA2GAeRdC",
  "key5": "3orzB1mymM86LdeQn2XyYytw6jFaf7ar7cqkTtUdAF31wBvwbmWEGaw5dmvfuL15U8fg9eohiqUzyCD8BjEuBsMc",
  "key6": "3rPXo32BihhdVyjPabkm6DV9x5961peX9kK79jsNmrvGYLKNTYLMpRJbsiX67JepKuLY7eD2UoDMY2T6JmXrojjS",
  "key7": "5g9fRxjBdNgHvctRxDTwP1NkxJDyxqCP6rGX4V6ShbwG5jrSW7AEtC14ofg11gnS8AgA545hJdyQgaPsLohcAhdb",
  "key8": "3gpacWk8m18eh5pey953aH2J1uF3Tn9Jcg7XNwnRaQPGKKGPHhWSE6oXKFLDzcxHTDMvWDWGmjdG9WapuVLBEB6J",
  "key9": "3Z6bytEaCp77ffoMnGxCYXh41M7ZHYpe7JQrbMyUtGvcQXqK5DqsFLZd86vYtFtEx7Zcoe3BKwmKQu11W9joZ1XZ",
  "key10": "3CNbNqKxKX7PDVVbTn7pNaunxKk6n84oBDhgRZYnjfbj3ESfcLhN7Ub9352BxE4hE1VwxeMEVWzohgcq7tnXHBG1",
  "key11": "5MdNAz6gNfsqPNMVYojQpqKGEJCDXhfwgvaQjvcizYUf2SNdRSQRdggsfNfhJZNSn6C5Haah5oAV2fjApztqP2Mj",
  "key12": "3rMHchY3vanCTatEmRWn1dYHKwHr8aeSU2y4tfDjVbuWWriR9gSq8DCRaSbzF52SujkmAkAcM5XD6hxa8iCPLesk",
  "key13": "3Et7CEyHZcUWRBeoJL1RSw857vgPpbEeiKiuFswPSvjdhDZbzi7hQuAUG62mvhsi3jUyr15zJkAKANph9yPuCxGd",
  "key14": "5qcx5ArDDU2runFwr4NFgX2eG53ePQF2o8NzEx3rG7MVnXftZ9cnGTo298qwAJUGNuH1VHAhap5vcz3Cp7Tf1tJ1",
  "key15": "65J2NBUSf9w64tmEiHd1sHKAKB49FdbceeMXY7zsjvRdCBQYXwtgzpfZaeTKFAzec2RGRpxaPrgGrLcQRu8BcjDC",
  "key16": "4qTHkdyWzHoUpXrMsoGEpVTpMR4CU1Br5JoNurE9XtLNmKYuecigHnRjYfkQGxQwCZXZ5ZNDktFpKF4V7xaxfryc",
  "key17": "3xqBF2VKWCkjXzkk9aEMmVv3N92ShfLPJ8ebZak9WuMx7BDqEvV8aeLLZMZqVMjTvZu1pQn9fLXBeNvUg4XGoVyh",
  "key18": "29B7r2KfcWhuTLH3YwFNDqf3EdsY7Gn35q1b1o6TZnCCB5fcNRJZMSBSwustXbKp9k6niQUSFNA7vmW2qz1r7GVv",
  "key19": "4hFUe8x6PQ4YpXCRF5CGXyGj3uJg9gKvB4gq9X9X5FKqzzyy29D4dByKsVeVPjP5eQ6rgw4K8mgRrMqsawmo4doC",
  "key20": "2CbbwheUu28xA9bhhUJCcvnJVKtvqbhtLUBgiKcBZyobPS6a3YxVqUrWet2ntz8LgUP1cMcYyeecYqzJr2MoL7ai",
  "key21": "9L1w3uwf21ZJP3VwUnSu9ef3RqPBbzAvEveyU6wqgqqRNhScpBLrE32YPbBsoDktzP1bSuxofq9YD5K1aTCwGQC",
  "key22": "36msJkfuej1LGtz611P7D1z46oGuT78iAQHbfrUpN6jYiEhA3147JMMnniLL4RpCjoyzNy8C1cpUJLcqVrTqHojR",
  "key23": "42MuradgqMPLxonHPaz7abBVxnFBwrkPiFMzASzgM7BrK3GUG9dn39C9YphGEZrx9TaPLBHgdpydDyxADaxB5Y3m",
  "key24": "4jX1YeeXHYDhJdehEHYCsATJBLXj9Sms6JUxHCDK9B9gkgWJjvAvvWBVrHw4RoYTuZkHJHiFXx96fEZvA2xCyh7p",
  "key25": "NevJBdd2huo1f1fXjitEKgUzkxcAybVFko8ZMAwh2wVCkS9LVuCMUAgcw5cthAJe28W6qZ62gT6o6ei4p1msfoP",
  "key26": "59vCRjSFm2ZYpDbKyay48djNmFCHwY8bSaDx7wBvB44svmuxkQ4ZCAH4Gxbai3n2WhSpNwBHXj9T7m7iddQgsEG7",
  "key27": "27kEeMeoCGg2w57kxE6Dp7Hdan3saTmNyZEr8SU9j2qRDpD7ZaE9S12ivXwuuT42DvqcHmRoFsrGhNkhBddNFvXg",
  "key28": "22Zj48Yrmtt7puiKi7bo3oB2H5p4HLyavqSGTYyXodgxejsobkohYr1KRvi5SSCUuFpWzq2fXDqYJiYvCbwDWQkN",
  "key29": "35BbwoGmWxXXQkmBJ4Uvqth1LBYJoswG5hBa5E9wXfEHErUYVPdAvwAYdMhr9fkgSeGboSWrceFxvGrunF8NY9xH",
  "key30": "2AtmMPuTQKKMzNy6gGK5sNxCYDZbfWyD9nkiqWnypLy7ZGhDRZiBGh95JncRWyrFCaKfZNen1m6wPBDhwTsUBZjL",
  "key31": "283krTH7or97ezvTKW8h5JoyhvNtpYEtCZjz72SCf88uAjRzBarQHYUF1zpDoofUx5hfcUr3Bb7pH8969jXj1xg2",
  "key32": "54wmQsxe7jxMQcYLhTdtye4DduU5V1ihzLxNkhBssmCqcNcHJUS4vLtTNvYMb9EqMmDKQt8pVqW1gkhHkr9irUzs",
  "key33": "3p6Q8884RbN5XRuFcAikEuyjyZpNn495mXozd1R4pSVbkJPHPo3v9jk4WGADzsomMZheV8aLfou16tTeNkNzBoxf",
  "key34": "2KvYZEQThJegnttM1yWooDWQNhzAJcV4aGZzAVdTf7q16Lutpchro9NAD4wpK76UkgA1EWmfRJ3DJ5SvSpkBCi5o",
  "key35": "3rEEMJ7Xck1hfytKkDhXaXdJTYhHcwXgejsRtgqfvYMgrPD4ZaKnST2wYDkni3nzP2mGki5zG81Jt7QJBxw4rhsN",
  "key36": "2icsrJZ7TyqfdbvKJyDXL6UdiBmsGvndA9Qzk12gE97BbWdFWQaTqG44EfT9fh7KoK1btX34hpgvzJgDM9Q4bjmZ",
  "key37": "4vA72bkBCVz4xKyfvtfHJsr6ZNtGoPRJj2RJdiorz6U8LbksKBHQ8zhnXMNqEBnqu1GQrTwogwbPhCmtEGsCDGnm"
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
