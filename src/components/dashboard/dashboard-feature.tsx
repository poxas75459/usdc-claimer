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
    "QFQKHbRfkzEJvKr71ZqYSuFtAV1qzn8mMnfQhqwtCAVKnXLQCdWN6uLWDJy3Gtyj33j17CV4akRXDocmR5uBP2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58q4ZBwS62FQPpuVRBQSqBHqwo8vwYnE7qj7YSaaSrDq2AKiW1pSAdhJYYCEGWYmS231X2YkyQWZ7ebL1otQvsBm",
  "key1": "2QYCFFghw4isaus8Fy96sHaK3PXVbAbSoA3pGSQx7oMA1N2tvzdf2BCMnTUeXqU5JnYzfNUv4jxRi9P7Qp2yeoHX",
  "key2": "ZL5CfdBQ2c8ebW5hvQDrnf7y4oEMEEZrGyxxYgjBRnjGGxiZBLaf4v2sEzs2UC9qTk8m2MA9NsG1qk5PGKnyq7C",
  "key3": "32g4vvokSpDbHFTPsiu5fzHmBv3jMYHkqAaZPQLB9Nh6NVqLM39MPKLFgHFKXMegoovKzjMuKspLMv3fHMBErCVr",
  "key4": "42Mr5kxqvQskj7RLfsECAqAyP6KWBxUpwMo67CYYRcZpEuELAVLtw7nughWybFSt8zZgPMQKfA69xSxuD5Wt1j6A",
  "key5": "3WtJJfN5LGPSrhWaEaAbHqQsEMvxg8eTHgrhiquAd1PhYqXz23DcBzHaDKXz3XUwzjpSVKif9zRQ2oVFh6GUNyA",
  "key6": "2xAjt1YJrpnfSiPVaQ3at83MyMQbHTvKJuGRrVbL3PkXHr5ASA6J5WmmVPNdcn9mT968uLK39wFraDZQewc5L5Lb",
  "key7": "5cjCdsegC9nxg5ycVrQ2rNFc49MUqNwMjcYfcm1YMSTv6M5D6Y29ecPvruUC8yMiWLMXdmGfTms3U8iFiyJg9aeN",
  "key8": "23wRewL5T3VdQMMNYxTYo9jC4UoaX5bQKyi1XGjyBiA3PoboDLDTSbuQhCVmi5mz8CwgbvBpsqALHEZjbnwj55ub",
  "key9": "2NoHGXvsLhP3rQFgiSfTjBh2ZKRpVDuHJuR2Gs8aC6AfBoGVb2x28EHhjsfPQNDSrMRnWp3yQhHRNPCgjdtWcVHx",
  "key10": "XkGpdvLqi6KeBwjkWkVA9woG5ykU5ighyb6rb59wyQCy2EY7dYd7cHeZAyqExzkCJR4AXpjosh8UX4X7de4QhH5",
  "key11": "m25dzDmbL62napnnEMLAXZoNcCAvVDhnMsXQ6sXbhSpQAoAeTg8YZBZPwVLBCvnygMMx6S9t5bmYKmDNHmKvShv",
  "key12": "2gJYryKeKq3WqV5A8n7H4J6ncPopCH5JVcDQ7xvEmPjBJsuGjHagLY6QbRK8py12vqfb2Ub5E68rmwfV89KPEHKq",
  "key13": "5PvLiCU6wroDrp6r2UARmVXKDoKNbRYra5YRyMtrGknyyiTPDWvZvQcAzaE5SWX5UEdjSZqxSv5RqJ12EcKAyHAZ",
  "key14": "2wYJmxt4zeEeiWevGVSa2AXuYvCsFXsWqfNWi86aqMDNhizFy4aScSXHFJ9Mgq9TsKxwA8kgcfDu79PnHT3ujf2z",
  "key15": "3wmHq91szkXpsths9SDi64qmSsPpcLBGF6JSZszbM3jBg34X899BvKHQrVJEPNfsazgH4HThbAazRv3DZhUWT8tW",
  "key16": "3sfG39YXzPuyfW3s3uF6HVeKas4is9XuNirb62GfsDVndtrDsTLiiW4viY65oyY1NvXBadWG93YB6cPiFxB9M41S",
  "key17": "4geKTW2Jx58srNAj1tcWN5ZvpNsCAxP63Zq8nA99R7pXnjKNgaqiqYrV67w5nQ1GezjAnN5XhGt3oEvfamVBJU32",
  "key18": "61bxgFTKZAZfQMCYuSbmPqhXZqwFUFdc8cTMLqwQJ4EGSMnQeki5TKd8HysXuEA5222hJhFWQWjhhDmKggmjwaHa",
  "key19": "46zmjvq489cBShv5LF7NuSkim7DkPVZ5gRqXFme1BoUmwtMwnDMbyPTQhYv3c6pNd39g9xmcKtQ4y3ipbaSG9rfd",
  "key20": "VMM3fw6CAyb2v1GKBkayWdDvCpqbhFZtvaG1Thte25c7hRJos8uhhCBXrtymCHavn7G8eVTN3j4JPZcAhnFTBEn",
  "key21": "v2nJNebsRm6AJhbDqa3bCfG9qn6oSFTKGjWjChcPqV9qLvUcth7Bq52TozqSvzETBFBNm1pwxpLyayL5AJTAhZ6",
  "key22": "36bk79BsnRJGMSfME68nYPhGHQj1HNq4yp9wT3QCv16TgpMwwmUvdtS11qKhoZekMVqYjK4q5Pm8LCbV3PMJsLeH",
  "key23": "aRMHQir4r5NQTnz4V3YwWWnst8nQQ1U7wKkyoyxsxce3hvvBguicnvbcvZsbZYhJ6wPDGMokRxoy3WYLxPEFAmc",
  "key24": "2amX64w4BUCuwtn1dJDVmXYjzjd1xaHKSEwFZ7ayiwQmLjkRSkXf7R8PMmQSCJnDGhyVJ9KNr2pKTgJMbnxX4us7",
  "key25": "25BeMNJDZFUQVudyx67hie8bQUEE2Jfa8ymBA1avWB6R9zVvshAa8XaQziTgAx9byYoBuwxYu69mEHV3U2fxMt8P",
  "key26": "xkXxX9QbpZRGwod1cLSpvA7uJLtfCnVTrCNnAUmd22H9GTHohR1hXaLvmxBEP1EBWHh72XuXNNniCutkmbQzA3Q",
  "key27": "5FFJA1Mn6oC7MJWdArKJZ4dC3T5zm468G4L7ehFFTrB7YyY7T35kAwiJk2p2A13iCo8wusp8nsTEYBpXyDnYR5j3",
  "key28": "2ZyncwaqdZxSs4qio7vks49req2txuXb5e4RHpYezNbJgKwmHxKgYWTQqunomEs2fx21FsDsSWyy5M93Ngzx2bTS",
  "key29": "5qMMLcN6JWpmaUTVSQgnj3nsZUmHbCc6Bx67ZiQqUkFhg8kPhPepesNtTaBnWYAG8kFxut8jYvyrkxj3RyPBZAY",
  "key30": "5bQmb4YNfc4LmWBZWYPFvYvEr3SWRejaQaYkV3ASPYocyXNT6wB6i7ScdtxJP4PKFjUHVhiVsDXeL1qM2HRR39va",
  "key31": "4PV7TEiQnsS5GQdzQLVr9Hq6TdjdjfNxUPmTNn2gqzacHBAGHJrFDaJvME4hyh4a4V3L5JmrNay74HHJH3AVTHxZ",
  "key32": "iSD5mLfhVXr9SExKZm3WY9Hxpe4AKPDrPEXbuFcvb1hNchtiXtcZkXXTEYLrb8dz3aHnJfUDEi5sMPYyDqK5jck",
  "key33": "4WDGTkChmRMiybWBwbbg25DdTaSmqR6RwK4o28HJqJCPE85v2XNvFcpmw3J8Hepp8h432DA1vy6h7h8p6jeoV2Qi",
  "key34": "5WWBZcP2UsBDh3qh8V4cK4F9Yhw8boNsXZwzVkK29UqrbAYDGHhxhFgLPsMyUVZaKVePzcb6y6SYuMJX5UumtGno",
  "key35": "3ytyerTmq3zu8bHseDHpwdXMSfoUooA3jACVHzTMnt7FNf5HCuhHuk9xvFpjiGCZm6bsxTjj65kbJ7rjyXtyzgi8",
  "key36": "42ayEJpVRvdru8J6zBQLWKBhtUjhx8PAtw7u5KazjHushgeMbtPFLM9L7pYwX8gAPRFFVcqE9tfHq6HJm7xnZTZg",
  "key37": "2v6EXrrj3FRtnx52BiYpkAGUhkDSjwSuQDgKFo4antrhyrWniYBW2KassvbMcqRc5JLNbogoEmNtaWWrprAnZqnb",
  "key38": "46R3RobbGTAJ1Y7HDCJCSrYmj4QpqEEH1M7dn4RptwXHNmhRWRVxs2QMbyDDk2m7P4nC5AdJ8q4uC63dGG8FTzfk",
  "key39": "5CzoSWuivLEBuK3GXcF1iSNyZkZ48GQWNFNpA1HV3bqaGfQTtWJ8879oSUMmzWD13hsf29XNPWSC7Sp6proonvMZ",
  "key40": "3GU1HH5LdHKWttqrf9VSiLQM4T1GmY5V1m6fCxRBvc5954KZbxJFPZ5c3s6sr63LZTeRN6FQkY2tY9jnzf9AxwG3"
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
