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
    "62gFphJEDf2mQ5Miw4bpxX6RvBgCYSk6yYtTf1p7c9kGiyRL5UKdLJQTAyrGRxsL6WHgmzq89ZhiZUnLpVxdHAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irEj8s3tgHXTduE7pDj7ock78erZAQ4LL6RqtnaDxo1YEjhPn5ZMmZ19DRx9dWNzhhbBii6qxiqhrVfJjP84jvz",
  "key1": "mRZix6s2txuu3mJLgHuEnbBTdEKF4ijebNChNYRY7Rvq7moehqfRsqQwnrDo6XKXsJJkbo72E79y9tg8VZ8WT4d",
  "key2": "2dbAVjBU25VZYP5edcpW6awjZxx1TCHBfvZ8xJ5zDyqEJuC7ZA3gjiZsm92uEoYToi4ymknij7Y165ewULoiGA3w",
  "key3": "2YpNtEDDWa79pUm928HJBEAB3u6s2zq6ZEQzahfqDtHDSkUn971g6BjsiCsEiLNsWEdhEGbnETGhV8aVywMM6M5p",
  "key4": "2DYKFPnjVsv3UcjUdiNQYB578CKRZuNVXKrEZWNctxmxaCqqsgucggRLTNXkYSUSfQ8yHca5X5SP88ZYHqo5bpFF",
  "key5": "TgikpGxgdiZsxsdB7BoxXzt79hWq7CR2y3xnb9aRvUF3B1dBGBbk6iyMoA4JhCiwdpCiH9Y2j9kMpgW3Z79UDcw",
  "key6": "51U8ThUdyfy7fTMgZt6DYdbiUatiKAh9tz7vsCWBmNu6gFsnZ6z56GAd1k4TLD4jLQr9i76LNgWCo2Uat7uh12XV",
  "key7": "3MGbx6soKNky8mbFtwcKJucdktKkC7uZvkZbL5q39Jdh3QKnX2CBWKthChyBnfeZQhfemx1y2hsizu9HfSa5LMNT",
  "key8": "5tS2FnFBgTHuE9UBYtcpBqinEKyUA6uCD3okW1mPNTPhn297ewNfRJs1EqwFFidEGbYXy8pnqUxiroAmfSRiz4nr",
  "key9": "37EeiFDB7h69aDX3LTtKYnRyghNbBi5w9tupuaVdHvc895PBU2qPnW1X9BzVfY1eLNsR1zGSBf9BmacejmqcBR6t",
  "key10": "5cDKCN6Fkc7kCZo1FirMQtMnJXELMJfze861KJ4xwkcSE4P53KqPEp8VC9LvMP55iDtK1QB2sUym742kiohkJbSa",
  "key11": "5DJJVSpNUSTSe5zB1CjvynRCeCWPw7uZbPmaH9vYygALKQdGxiJXmtHepTSvn5rmSctEjazwiMxsFxNppJbkxgYU",
  "key12": "3KetorFjiHxPbPWyy6k5Lk3RZmckiKuqYjsXpXnQS77rYsTRCZ1HVXTU9XeHtuBceWyW4QVs3CPCjJUXgnAecT4X",
  "key13": "4ySajjdeknwef7x3R4o1mGsDNrtGmokcniuGHFWJU7Tf5YibtriFf3KJ9r3zmytZKy6Tc7M2Zsupp25Su5LE4FpA",
  "key14": "yuRfXeuquNYB9pAqFPWJTLNK6eKc954ddSwoJFhwk3cWyfsNfMyx7KZMWYke4Sjg5uoR91LL3cL92JojUDLpmvd",
  "key15": "2yo9Y13KpPLbzazsLyCZFHbbtxE42mSCthgGjFQz4eKWRwdeZDoU8tuXA7XQhnRKzy6VXKDwssB37DV1VJm4ZH1B",
  "key16": "9sNUfqRmURhokg1AUFaKENZd3mBbNHzyYCFW2yNwJakWkhQ6j1vJNzPvKgsDmvSHBsccSm5UfS7cK8Ce15j6WCd",
  "key17": "4WTFwjL4ZzZ8MS9EXBXPfjjVgaK9X8bb8tcBpa9191m43w6oYLUNcWt9BK5ojwHjVjzMMDwkXmugqpjKFE3Mp3Mu",
  "key18": "3zBQZAcf8LVsdkVJwFwKyPk46z361X2wz2ZU58WaaCV26veSTvfdj3VmqxsTmjyRMHTT75KyExxL9qB3zPjR1ttb",
  "key19": "5kLkU4nx3ZhShpG2Rr7MZjmzdMyEbFnhE3dk2o4QowNVMDz7rituWXzsAEZsVvEe5FAFvHsF19skYUQwqXKioeT3",
  "key20": "5PF4nBPrEn1nYRi3QLguoZZNFiHWqwuGR5ZEETFQYcQu18fEvroAdZY7affnpQ6gwXxtDpus8WxSqHgPLtvVVQTB",
  "key21": "4XEzrPqRQHawa6FL1i9N7r7ZxqdvsmFNYyf3imm6xUYW7E5Vx2T7ZJGGH4gidiGgeqQ9uMhPrMUxHJ1BrUQLdA8c",
  "key22": "4YxCkjywukfBPyUHjkcXMJfYE7eS23kW5kuoJ7pM7sFb8Lqb9L3gzGWoVE44NhAfCpJz623hFvmNLssTFMdu5Hno",
  "key23": "2m1AMNdJBJR733e2epKfBpCW23F1ezMLPwocWhKUxh5BWgzQVf7WwywW73mzdNTK9pzUbpnTzP1uTfqN8JoWufbF",
  "key24": "5NudQNDTckQ3Pjh8fjLHRpsPKNczuai9ZrU4KtXEDnJn5onoTTm4no1faP2HGwjdxk7y8athmTZrrD71C9y5ovYb",
  "key25": "29Lw911yEqEHE3TUTJkvmhXs2Fxh2HwB6w2av6M9snzh1QHEYjceEFBVF2AtdN6KZcbG9sxEvjUAKhVz34CzKb2u",
  "key26": "3iLCUgwjGvujxichSwf7jbWJdPwc5yViA1fDkQ7scrDuizN6gZq5gmqLHYQgu5Z6LmKuttsSXmgKuexeP1YcmMci",
  "key27": "YdDqkCvAEWUJujTs5G1HDYtkEnW4MY8MJ5bnB7WQZYkzzLiMpu9aDfECXNPzm7cbJu9yXPRLJ4NPn8vWHWsLjUW",
  "key28": "21dTQFPYkPfUVJiZb5jF1zebr4McJtVnxRrDfVbQMruoKPdJEANAr1kvgQFyWEw8F8nBdFdqLgDbXDcukczxDdev",
  "key29": "3ZKPBw1c3prbeE95eZHcmuHCcAxsuMKNSL5P3H6dPmynqobSMuPV5qpLCjLqTc76i7QXs7DRrMdXN6j6RBYJ5HLH",
  "key30": "372yV2u5wKLX53WKJRZ6VzDt6YU2FEChu9CnPKs6QdsiN9PTFinqVJP4Ymzgy6eYJtwnBfJG7DDBjJohzYCAKanZ",
  "key31": "1fifzXUEDFocEwvEwJJsh5Kynd8q3xzFuJDiCQdiBDuAPPEXntLKvvhQb8Fe9NwdFSVaCgeEDK4sF8s9vfCZjVg",
  "key32": "2EYta8DVncNSFAe6cSqRPew1h918ekxN4p16a6kgFnrp6QDyfngVNYGb8Q79ZQ8wvWQY4kTYsBM2dxyUcRT6766W",
  "key33": "4Hw8CLSysSJyqsuXq81krwVHkCjHSr1EhyefpgRFSqZCrtpkjXrrCBZ4Nd4zLoNZNSeZW4XZsExRMT9Aqrue2NC2",
  "key34": "4UbJ9ZhxB4TsVdFtnpEbiDe5Qs8HpiD25RiVYAV4sxUxBG5rC3UuyAaoczVBZ8VakxpygPjY5kT31d6pLvwpkf4Q",
  "key35": "3p3ffJksLHmUQddQAeZWSmaeHxYkyaaMB4UxvpUYjkLMZRkyfA53tkypinJYGM2GHa4HVXjjGUNUvTfutFrq9Ap1",
  "key36": "5cT9sy1oAaRoAoJiUfqMzz4J9Lis8Ua3QdjgQCtAPK4zPcXwr2AFoBLHT3yxqXkdZh2zh7BYjrVSyTU1Sfyc1zrt",
  "key37": "4faatKjU8bDCkjiH1GBRwznD2rWp8Z9vTiivE5cUxUUhjVXHBPH2iK6M2H9o2CwnpUNbLTNihFtkg1C1A1RuBFsd",
  "key38": "5PWYXBuqzi5U53jxcZ5BDh2LYGmuvDGRe2xCd8mHkxVkzgujdqXokT81iBS1yzauT2RqA2BLY63N9wXPZE5Ft4NA",
  "key39": "3h7d6tPneemZm5i9sjztAfRrLRjZqoApY8zAJMsjQCMLLDvsz39a7rKbEUqZVMQB1K7pfkLVNHXMLT9P9JPBVTed",
  "key40": "r2HRQ4QiVAxfjoQTzmkySkCNaeSxbTkT1YexukMv3y2ikswjxWZpmUPqfz4bNYidbmNeJYGpuSK18aKaJzJ6cn2"
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
