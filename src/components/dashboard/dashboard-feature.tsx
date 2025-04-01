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
    "524q5kYeBafearnBc5hoe4Eq7jQovu3SbM3tj55DgsieX6GYrS3KHZmUdWfKFztSSDfkDTxKri6FKJsEeB7ujfVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SiXF9AR57dhF8fAVKetSZj31EMaS8BM5hXzjnAhaeqpTqq8iEXVajSYvHz6FzXUWnTQGDi8qny68aDoSdTD3Doy",
  "key1": "5huhvdfa2bDna4YqtW9G3Dkju9kLeDHK8hxqjFB1NW1HTfsejDbQXZBfxfcLM8e2rajH1vdvYinw3ikgpcR4DQD7",
  "key2": "LAY6hBqWa1Um8Qs3sm1Hsy6mRdmSxPgxfB14SLoNQg2BeBLpg1eoyfBSBnRnffsuwXnKXuiMu1v1gfiVZcVt7Rh",
  "key3": "4jWhhPbbiywQC71bDEtgR5f8MqePG6x6mLTWLqTbk6TGdfA2fvmpLduTqj5Y8oxx8c1wbwMuH7wRWbyNhKzdBzoA",
  "key4": "477TCHcYigzQn8GmvXe78auN5iCbAkiqALvS4qyUNqPtXh8umrr5i6mjKLstexQq6mJBveCF9pTv1aqDNL8fc2m",
  "key5": "eEjRyjWVDqhsGKvKp5n7LyBdWX3N8GDQT8vrwMszkd3JDBxMFkCqrEhxoxor56GidBfKQtb1M7v517o9mpkwhsZ",
  "key6": "5Z7BoCznP698WJXAhA94K1C5ZTGycUvZsREfbWkAEC5cdbxofSzQhyWznWhmoMFAkCSNBwKJnwjhAGPSqJHcJ2w1",
  "key7": "5qMXZAQcVmrPKAp6fy3HvGkf24JwATiD6Uvh8jMV88RbmtS9XuzeGKrwaYnqMGbTZ9ue23j1zxHRL5J1RK3W7tBF",
  "key8": "28msEvPCouQmPMYgBM4JfciBJiGCMv9KhZQ6YMN8eeiYuoshvnsXfi1L4a5fMSSMXVoRDuQJ1ysaCqjLddDVfBDL",
  "key9": "2eRpX6P3pUfTAYm4pkk6NLTi2MfV6x6RYMLrui1Vum5zYMfdxtVvgjratshZRpie5CFUN27Sx9R66XTHZNugZVXQ",
  "key10": "3EYrTdVydkn79oZyKPre1Mwh7P4XkbkuCGbzE2L25dsxVQBtwPurFc6PXgudXoEBxRmBEBQgpZA5FfCJoQNqtkxT",
  "key11": "2HCa7Niht3v8vLNsiWJTg2mPCXxyZf3GHobPjaw8Q7bbkZwthaAsEwKmAFREzgAUcBbSQG9ZuGzSeHbnreFsRvkZ",
  "key12": "3iu55WJS2jHYTfCyhKLE1hbTg9nCcemFU6PkV4JnRLdo6TPyFwrGKcJHgxnNjoWVXh1PLtHEPMisuUvE2TcELJrt",
  "key13": "sNcuveWg6vJZQg6gfRob1f65G8ZGRXnvuZDitEaPXZnW2j6MsHhB2cXWuzGBHV9VJeaNwNajX5ciFFhjWTwthJY",
  "key14": "3TJ3AeaR6ueP12oRic5EPsuLiafgzGcEyYFjtAMPh3KD7ZUFpLs4ZisVsgT1Ax4zzP39nmnxnsuT33x6gqryHFfg",
  "key15": "3ZSouJLqhyhosWcTjvq4Ayo3mDMQWop31E6cU4ZneCSDYA6wY5gUCyE1SQHegCmgrXxqXVXoLuBqcRkcSj25dW62",
  "key16": "2AFvDy5VGo481san56Cv1mX4L89Db3amyGVQeRA7CnVLfU5EGN9WRbKkwj7GFFXxWPzq36pUHFSH1rZau7KjxFmY",
  "key17": "4YXACJmPjguyDusnbgX5cd36pPTo7cVhc24Hcp6RWPwZbeBHUQhD83JqdLGqcvdmXPrfSUMAY2SFyBVpX1TmTW9N",
  "key18": "126rcje55kReVxhybqhWGu732dg4qWQSU57uY4W9UPJ1hDAEPuqXtKD7eW6AAaS1wqyTmLGbXgyGeGtPdUBSrfdc",
  "key19": "5Nrc7KT2v4RvBVe2tjbEnr324U4mwAywCdKsUeprV8naAVVwjW7Ma1FvuZyFaDmCrdHNGTF9PwZmhHrxPGEKMCGT",
  "key20": "3i5Jr1hjotfuLhmR6qrbHvcQPSTNEsfCK48isk8N7MN5Mt5BukhqRtNPX6e5MU2ghkczQ3pEeTyhJegga8iFfCWL",
  "key21": "UtFpsEn7CgykeXdqofDFaXE83msxfjabT7MvJuy62fntHecfE88rHHqV9mJR54YzqZVzZexy7pwSNsct75BQEZ7",
  "key22": "2drBK6zWytEPFfZaJDcwVsg2eRwkic72ksDCAVadFkhTteGi5sVzF9pvMQKEP8x1LT8kJFbNeFg9shQHsNknWvbb",
  "key23": "5psLtYZCgf8rb5jyWfJi45d76e1aXmUBn35mpLAEmR2R3BhxH13WihMJtU1WQSXuPkvwc3EATZcSTr1VYyN8Hp4U",
  "key24": "4gCdtojHZcMw2Z2HapFw1QvkSaqH7Ld9g2LvZzuUzxDbXRQ9cxaBqxJ3AkSe4UMaSnz9PyUcd99LaJq73tYBJuUc",
  "key25": "2Ph3zmmGGnCrfxs63Ac6u4kRgfvFMi4N7U5hzmTWEw75Rj5KtpbbVFdsaFkUxHngXkoz9GpGmNMvWdwLpVDqsWC3",
  "key26": "2SB2UN5GN6yyo6YM5BcyiHXYeQUYEqKdPHnBBiS8WcCB1qkWHVzW34Q9f1ABtjn9v1CaqcPLSpsLWVCnRM7tpgMd",
  "key27": "PQgC6PSKWnj8SoQj9C5Ndt4e5BoFQrVxK7wfC1DJHJuotfTvUB6eLam4T1Z7TcYN3yScXLUUY7wZppksJdkM1wm",
  "key28": "31oKc9YMrjD8KjPU6sHhghjAkLw9RaMtrX7hetMPMvEXpk7btvqYXuywgMiHVVfr4XUvxLzua6TTVvA7eB1LCdxP",
  "key29": "5brJ672uMxqHCWkRjpwMg1DPrapHfR52WD3VgqTRzTpvSbokud4c1B6BQFWhSMtTKRLzQTrgiaJxqVMxk2P6Qt2A",
  "key30": "52mbsQsgQfanwSvPjRD1ZadU7rc7UNWvYTF4qb6qqWWv1fVMR6uJbL3Db5e8PLtdfaa3KLHAQF2EytCK6nZWuzpE",
  "key31": "bhTCXF1PbzAQzfxtBjQcJvDUsExNBsRmB2XHhsxQCHo3j2J6cDuxSMWvgpcUzgc3HmkpfSBsMbuh65V2gtuqn75",
  "key32": "4hHHSSjdPWGCkJo5cBS7mnDvueTVQ7K2nLvVoP6taYk2dnj7pwnHW6WyrB4uwFuvWbq4cpF6FTL6j1s7mz9VorUe",
  "key33": "3y6y7hB5m6m8wHN4dMyFb1y9MJv1CDr3YQz31h6Df8dm7oPkyjRbFnMyRxVkNEgJ8AWD6Cc2mSM22m4zQgnuvYJg",
  "key34": "5WaD6Y3Foee5D3B8bWikvzhuTvHAZ4mzKjV7Vw4riTer7C2iBLdZGtbpAHzVcd51ooyF7H5YNcCjryfHvbJT4KXE",
  "key35": "5qPh2RFQ37XZg8mBpJz6HEbohbw8QCKyBuQrbL1KdHZDHHdjLAyYHTFRnGtthnvPccYVicFkkNkL2REWzWRp16nH",
  "key36": "28KhA6sJaFHVAfWQ4jKDvCHbhLRMVQSR716tLJYEwM1Hmv4gxDBCWbJk9PJz9iNr5uhn5dnb6BxGJNQdDhC5k4SN",
  "key37": "2ubJBXvxuCn5Ms3jqw7UT57LrXK4812ekZPifaqdr8oJnpgM9f1UV6UBCfU1eubYtPWphrQzfpTki8aqmau6rRBY",
  "key38": "2X5kMStwCDUqPm4rjJMqzidM9awED5hKP55rgqmiXgYKKGpbsmpGgSqBuE9t1Z8nMTTegbvV1a2hfh6YuAzsyCob",
  "key39": "4ubEJUarWDz5xtq2igcD5AQGXr8mwUFReUEjLVa25uWtzB3kiKcArWCCWpV7PsthCC5LNo8ksTBSUWoBBFK9dYkj",
  "key40": "2bTyQmgHwzdiVNeo7hcTH3AyrmFdaWmDjUsTPUY77yf8XP62JnUcuEPLKwfbixv2xgdNCy7Ut8fkns6idCX445iF",
  "key41": "37rGsstbBWAG4yURodMJxTtkBKEqcB8Hd4wRTbyHjx68HX3VLqDd7eAGqMFRiygCqB2PV9wcmVCAEyni7frtsqQ1",
  "key42": "4cPsRzKGAXSKsLpiSTVPbYdxVYC8U3o1KJMERk7xoy31kANdiqmFL8FgUmddWbh5dq697S1QeUE5ubf22pbcKLtB",
  "key43": "rae6ZmzH2VgSDGgVfiD4hRVd9J7T6AVv1i9N3VYtXaaM2ibXb15yjNnQTW6j4NY5w4vM3xq5WCUbNo5zu23Ki44"
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
