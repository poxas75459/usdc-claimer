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
    "4q5c14fxMAdZmFCywWWqHFt9jHiSKG7oyegMeqWD6SA7oUhqhsB9HYZh8F2RCXG6UFN3Ar77TBQ1CtApFqSdeBWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryhu1dkRqaYuGETPNyH4WPhk7XUL2LUBKua2m6gWRCJ9ZEpyY3CC98T2RKroYB22JsSyP7ZYjFMC1YkJeCcRHTq",
  "key1": "34pFjwLfoC4PJ6m9b2pzHWApVJtsKBxKkBzCV9PTKXJKw2eCLMzaB2eSa9HgEUyu31gqhYoTEkMpQuCpfpH8Y3vX",
  "key2": "gdmhDJBDmETwA4Jbp5i1z51tv25oR5BVXwqbhuzP8XTWPeQvWexypgUiQaGdZixW5LPZCMUSBReiGfzW9z5XWZj",
  "key3": "3ao37j2AGWmJScHgbJsrriQoG13ANNq5xopHztr7VBeVBvXzZWEPz4xCFEhFQw93rm8tTQNCydNtBP3HdQ5BfvYy",
  "key4": "4yqYTRJ9Biv4ruDugUL1ZYTds5pq2gKDeQ8BLePVSJLMq7GpfXrsWyzrti6nAGiHcRGVed1jJDdufgj9E1byQaz4",
  "key5": "5qSuv5DmbQddxVVVCodSxPBZn7xtnxh6USrN2U1dgGBUbuRhoAvHwvTidjZhvz3CcYjE4ErADwsqa3BaMFTDeWoV",
  "key6": "41GkSFGdevcfq2zrWBJKePjB98zNWAy4pSRthoohVGpmendvKb2Htmk9phRu3ijfkLxWR1Xv5Z7sDLpXGrgAUCKy",
  "key7": "2GuXRC8uXt2i6ufGE7ZvfNKdfYoKJ5XNFcP1coYRXiuEZQhcD4newQft1xvKV3CihrjVQG4Lz6qt2Uvr8aHu94y9",
  "key8": "DSNVybWi9RzL8wQazzD1Vm9PASXXncigYeKdV93AQ2q6SW7V6TgQb1hpLxs2zMiVbDY5SsfzbszqU9sZEzhGk23",
  "key9": "58yad1Jam1r9F3KzV7M1Mxw2Gqe7jLCbcva5a4RU44oyx2618X5c4ME1Vxu89MeXp6v2LGqCcgZiGjHs5H1CtrJx",
  "key10": "2YUqjVir3n1LkVZhPouZ7H23vxKutKihh9tAin9SxXLAUy43r4p5mnZV2vjkEmGC9B7GvWwK5m3FtnqKdxxS3ej5",
  "key11": "59ncPKRyqTFScYWJMSKLsEcy9qr5vTJgtTaK5jVG6pqiQjzBVEP6A1CNkofVVZfz2hBRkG8y5beY4WgmbTKFdJ5V",
  "key12": "5XWyFwh2Zxb7Ph4sUcJHC4uEwzeYRccE2twHebMYnyrXvQheAeARCUBMEgQSjrZ1xXNb6yC5sXTxhi4rVNawfjKM",
  "key13": "2whW839MdBbsy6iqZAZe4KHvLiijtYuKv9heXprqtaiEn6RNTp3yEcd2npY85Y2pTEkWPHgcy6FsdyorQcLX95K8",
  "key14": "3Y2NhVekeoCoZP63W6GCA4cbZ63PdRkh4xJVJThaubSgCSH4QZvNBgUCkW5Lptmr4foYk1SKg4qM5atF51Jhckeb",
  "key15": "9yvDX6Sn6o3kDxjEuDgWZPpQj2zdKWjneJRwoWpxR3fongm4Wfgb9rfsn3AFxWBeX1Dza2pqZGxR3Q5qoSNXcJz",
  "key16": "3nC9qQpywgQBQeB3yUqGngaxGiEPLbpjKAMMnKpXTSqEunHHYZpsoRuR6qvCxyeEBgxNscnyx5wohNsogW7yTCjq",
  "key17": "29sxgfywr5v1VRZP8NVXCkqMv3hUd2w5mGtxzQBBembrxfkRpiAaxJfECELCZCz8ph22xEuU5mrV7BaXYwFy57aw",
  "key18": "4hDUDtm6uGJdvHwk9WKkyV1r3GhdpcMQMQAStgHuPuYVyFJ5XT3xWMLH4A6iwhVqLyghdqKZz6vfbc4ahS3hFpWv",
  "key19": "4ffjuAjGuJxp3cwDAJJUzitaDMyn1KcC7toLq6LvA3NJ3c6Be5aNX77SRwfjib615mbJF68f2jb23yM2zm4WvZN1",
  "key20": "4hRu4tJGARkxUU26UzTmKFYisu9PW5AyxPVs1yDiU9jAYvMPcJVA6PvERg5wEAap37j4Xj9oecgCuwFKno3AixDY",
  "key21": "3aHmf1tgijkCPdscTjHKH78XxzZ8xif67JjJkpZ2aHRceWnS1XZExSkGxVLhDXjmC6MTT43YMN8ivk2dG9pVUfiW",
  "key22": "5JNoi3612jG8Ve7dkJu6srdNMyu3Evjek3ix53Sbq7Wmh5myv77dHbqqBRxMzD6Cjc8d4oaqJKa9u6tbn5E28KGw",
  "key23": "4AZjDJfMDDp2AAtH6yzGrr9Jx73x7prUnVpeYxWdQWX89Xh9ryp8hWcpnmSAYCj99hrPb3VgQsuD7jxSJFykDbMU",
  "key24": "2vNWC68FKzA7e8aENUkvsbRmuYgrBPxhLnQxkNjhYqj2xKBk47mhQzg5dAmeCKRDKcPVnjFZur7h6i5GvG8JYGui",
  "key25": "3Enpzj4AwXYXSQsxgGHXCkY59LBxF5jzPwuwr5rCHVhEtNtfrhe5u8MZMzkY8Hzm3ifQ7F4UUtSPWSXzQjJj8f3a",
  "key26": "4JXiQPxDpwj7PqchWzKXHVbeVecs4UZf3rFgabunYUPCN2q6aLiiFDjqT7uQUzSeBP5ufwnTpEGpHe5DMFpwSoDt",
  "key27": "5ebpw3Yy5kHzbGBKtVL2JK8u644oP1w7AsDP67gagX3sonem6TLjLpxNGs5YsWPfhgiNEabDy7ehMXcCUM9XxMBi",
  "key28": "5VkjvrXhzDVrorzqQkEuXGGqgS3M47QvjmA2xL8ErmZ53u9FgeoLQj56whDaiGM9cqLN4LRZXrs9GXsY8V4bEDP1",
  "key29": "4xcXdU6xt2RYRDwwRUDLnkJ5zhfDczZY6AtDWGSyT3kDpzB5uajWZRvbyo41EfHoPfLkk3XVDNoHbiA4tnasRtry",
  "key30": "2WR3owSmGcPp65EKL3fsuKApMUV7FhKB3KPydTbU7mRT8RFe16MgYJgc9sqRqA7w3JHzzupn3oEEkYovY6efSr1V",
  "key31": "2rAq2ZnHi8X8JXm628PouLpg2bowQk5eRzNXmUAUAjwkMi89adztGncS9kWi3eYHVFPvg5ApHzkFTWFrz8jqXPVf",
  "key32": "23Dr1GnJaRCueFAaNDCB5J47tyJgmGLVtwmC7nnyt8Zf9fBRbxGMfiupnMgby9Jfgy19U3oqkDWhFUKJYnSfSDrr",
  "key33": "4h4os9mKP6A6AQVponSSFBTsxJoo6ApxZAaJ23EvsEzJn3c4wPE5XQA25MU7juBBrWjRw4rPJRgx3cgz7TPpB6Um",
  "key34": "5qSwrXiFSs4pNo72dspijWoKhGMTNNB8RdRXbhBbWCyrqVtjwWcmwxYEZjnDbw2K9BDVpNptojYioj16Pe9p7QQP",
  "key35": "bZYLeDVJ8Go7txvpzvKLqGMGvyuQYTqGZQvS9M2svt4wRGTRsQmssT6yVoNhRatbXZnCiC2xpHrmmhiSC7pVTgV",
  "key36": "3YD9rRTrNMhLPpSZqFsWki16PHGpUTQpTqekQ9MHvdd9d3gUn7rQKCQWcafpJLjfXtEiUvNhkiJDMfDnLWEjneAn",
  "key37": "5B8n4q1TPZqMgdd274b3jXmvGL14FDbe852CS8xexEuBAUw23UjPJmhFmFbCDSEFza2Wxbyvr4o6CXT59vXxvDym",
  "key38": "s4uY8Y6jzkQ9VZ6ZgKHzN9sUjxGHiUpFWTy7r6JHm2dWGdGbHsTYm5N1AQLmAaXWUAmrbrBai8cHkp6h4tMuRfJ",
  "key39": "4iAQrg5rw7DgR7uTbk3HAmfD24oa1XACxbfMw5eKASti7wCoGrfu5FJ8jWWACZTh6eWJ6rwNt2h5AAU5Sm2dUvN6",
  "key40": "ZPBCrMSnqBS4UR7xYjNsAq58YMGNJvFhPd8fWzH5aubEMXjp5PgaiNjmAMhNCnTjHDYsy2EFQdUQ3Nr6Tta4y5j",
  "key41": "4dMpLghhNnyMQ1tz2xuziWySDRzv7haQN8H2bBTRoTv9n4CL6H2AqFHyL9NonPoJLsrShLbA9Q2VrdwdmtwoETgE",
  "key42": "66G1uLrEeGZtxujFRSNTQVusWQUXErgkGHpG8bzcK6rKuiEBGKbCRw9ZWEcESk8TecZCTiD84vnaCnpdfyJYanmi",
  "key43": "5NvrahEJ8kNTpxXsJedWWxHxFj2YjfWertbkuwxZCefGYzjfkG7Eu9yZt3pFhZCukBGVEzLCkb5pZuS3odp71esZ",
  "key44": "61KS1PddZdHLpU76QvbxS6gTZCu9yoDonNftY61kT81nP7fk3CiuekiHkVshG7KzW4NzStyKRUHDNLC3EFNSZUfP",
  "key45": "4UiK4CdxDAe8JcPLB3C3TRjh8Mfe2C8hcmJYfnd9fjhHLBBZNpAdLEJShcNARzxJMgWe55WD59pQM9dyAfCVK9yD"
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
