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
    "4M3fDu2QKFoXdzdbs4goczVFjVA8xrnGQqAtmEfAc8fEKGWD3a7ct8kWKtvnEz2cQkFXVGsnUcHiMuts7GuJvB5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J71kpGNKy5qmQEiWFZKgQuVPqCMi1H4GwC1EhwhzbsuM9fMpxWWrzCEhB3PGimk8whryFcbzaLrPH7Uy6CJcYbC",
  "key1": "5bsRUzMpfZwGewRSqQhXrS6HWjVSk7A1Qc1HDaxf1EwPtwEhXUdVZrmmuujCkx56rGqwWdiGrBDDk8FCrrKskfBn",
  "key2": "4cwqTB3XDPXj5vuZuH9zLdyBE1mSU8TM5GTr1AHZaPt7UwfnDFTVAnjNVLm59h2i7JU4q8D39qcn33XmVpzgzxtK",
  "key3": "41f4671c2sBacVDpKVqgrwWjVgmLDii5LuzqHpshMCYTZ1vQBh9Zf7xGhMNv7QrCa1pSDhBbtvPp1ys1i7DaSWub",
  "key4": "2zS8TLgzxw4Z7Ac4H6oSg6xhG89GQ8K3vH73VX897b5MEua34tMHVZySGhbh4mMgZQY928Hrb3S3wewFvjJd9kLE",
  "key5": "4EWEuQ8zchtFWv8ADwCePgUS3XAQMknzv7Cw8zz8BdngH8JM32w1d7eWmihq941XBocspQhqQrBHGtZUqufSKYqC",
  "key6": "3UtU4zkHtiZZHP2Sz1gXmJ2ha3n3UzQ8XEz4J56mushMdqRvsbAHyWgSapnmVinFZKELxrp85CudonsapcJDZJhB",
  "key7": "21Pft1PgYwMTm8uw4McMjjLjHMdhubmyrGx7LiXEyYQXwDtCwvPeZTYnw5zMo9wLHQbf7SBuC1oDfcZBpPYdppCu",
  "key8": "CLJXzhNNLKae1QCxJzs9StaFfkycRVztvj4Cbn7LvimJM7acuLYKcUM22xmVmqGhfu2rUevUvRiyomijNAw8dHd",
  "key9": "up4xdYPdSxpugF5AnWExep2SrZW6SKmXaV1bbfyTURHLRtcjyDgUfvjvyUW2MpYF9H8gfvCySQC5G2bWwEiYCJa",
  "key10": "fDySRjBaZFck2Upx7UgeAdZBsXiabCscf3TipLqPDi2J8Y8vRiFX7FVRSQp8NFa95iZzgYHmuRh5gDGzwkCbNVZ",
  "key11": "5RQQkmNsh5HpKpGd1DsVHcjxLRNhVAF2QKHvcQncVpBze5nHqTm89rsMRJWGsDLXcPtz5GNhveN2aV7862CtrTNm",
  "key12": "2W2SQtpeEFax9fgZLTS9sHaDAZBQ7motBbpVMRgSoNknr8RUbwR6gXqmG27UYCCegdXGWimRDP7ao7hjkLc3sTf2",
  "key13": "hjyZ1pNSAVJC4JgvzGaHFSBQmcmRn12QbSY9H86jmeLmEmXpWpuAFUpRRJNfPmbUAX4M9JHDG7Kyw8yjVMpkrKw",
  "key14": "63igetHmr8Z36JeMPdFEgYZWSEhbucKWubKFRYogHiYm6JmxMqcbg3GekDyJUyoLXhVhxBdHodLqAKbeeXqSWPtc",
  "key15": "5ujxggPrDioYCvLgt3TLztg31rBG3jGEd84MKwTj7swJnJTDNvGPzEm9UcSmYdtfhh8mfFH2BHqDbTBnz8DNzgc8",
  "key16": "fg9Zi9tjuS3eXSKofpYXqriDSt6CHiZWsGzwXt7RJw1qv8QLEQZ9p3JDwpMhqZ4w1GWeFEUmYtAB7ZRJTwbcpeh",
  "key17": "3Ye1LsR67hkkpPUNzPeN9T4ucnspotfcFQcqS5N4aDw4htPg63fVRPAioPca97vaWi2sS8BBoE7jJnJVkpbqEUan",
  "key18": "621FyxRPCtUyonUkwQdLc8rW6t8iT5DHq4ScmgZrjDJarWJ8PS48X2zVq9HpftCDpZwD8xLcjnCkrbziamdHdgmk",
  "key19": "3c86TXS1vMxXKPJJJqnMWNo3EsUbLbn8T7T5NWrdCpcGY361csYpKCbnp2RLNpYegveuBp7XzDdXPrcAJ8o2gYrh",
  "key20": "3R9V6UQLb5MJr8AU9BcrhAhpCZHzyY9ALB1nTybeeA7QeFngtxLWfepmQc2pXHBnJBSUTJ9Wr82NZ2G4a4zt5Tge",
  "key21": "4cLgDpygtgSKfkydYDVFf84UN4VevMP4MaWSKBkTyUtSP4eWnouWFNEoGBajAWq7jv5rMJZWz4sU5aUxVaAJ97fi",
  "key22": "4Y8ovhk844P9TyQvEagPFQhffX7qGhrYKjZw7dS5i6N7WuWixT1E9BCLEPqErx6eat4gYfCQ5MPU5KPF4Qnx6ChK",
  "key23": "rqs3yVzuF5TZ2jVVW8T2VZbBrSidSVD8P1CnSP6BQvhDW9UnvPbVh5Rz2fW9RUjgCirdVcmXzE1hRooqMJ4VUuv",
  "key24": "3jKnzToEd41vzFUeNHFM4Lr4YGzvG8UyXnARqjGvQDhVMZ5PtRr4ems4QRRLZh9xW8QtkbFx4tNrbxSpgdD25Pnd",
  "key25": "gn7fuT6L74chREG4hYPaRnppiCaczxD8hweHJzHtqe7QnjtC46u1LhnuKLhdDMqPxDMwGWER2XPS4uSVd4yZbsi",
  "key26": "3iMmkzzMURHSyTpYeeWRSQhgm3PdE5NxAAu3vGejyzpMozH1yzmhhZfXKNxh2is5CdgEkyBNMSTvULa4RNBYcN4D",
  "key27": "6eh9s8pmdyJcVxAX8hHsLFyvZCUdTc7cBTY7eXxGtWob9s5rar6ZuCbWj35Ji89pvHfvWAni9n1CKYEkGXU4iW7",
  "key28": "2hy2ivyBMEB85DfU9o4pCRuVh81ENobXZe6QXjsSQwA8yWrXGJdbrstWNtenLAuYQ4U24mPJ7caLMggL1atriqJA",
  "key29": "66og4KqAPdLQ9kKbRw3MYrcsuTxtAchns3LAbY9enfUeencZWuedZBJFSnd7bcmnnArbJz54aYxQvAmN5UJNeSDi",
  "key30": "4df97qy7M3wqqHcfNo66gxWDSa5YY6rzgv1rTJk9uZ6VARemYpn3Fs5TmFEvKGwm2hPSehvo3vPJvRD9dLdUpMCg",
  "key31": "4vUuwe4Dx9k5CWAP7DZ3Stdmpx8aRXQtGhVtNcjCnKzSRsB8FK8STmtNQg8bSeA7CD3o2nTPoawkPWsNVRQ8yjuk",
  "key32": "4CgaErSNtEX19pHKYoNnmnnuHQYWKkJAKmk26RbXnkSc1Tp3pH14kuQLFxvmZBp1F6xRxULQq7im3mwSpp9dJXUP",
  "key33": "yJbqDCFKRZVfHKxbCqyJoxsuPZAkCJwfJuXAN1BPXojmSbjjWm6jMp44sNpsQSdqtvHhLq6JjEXss64QAA8XD2Q",
  "key34": "5NR2srr3qabpRZa1F4GPfzRGSbkeB68TfkGiK2KfmzCdn8q2gb5dXskXVHBkpVTrXNSP4dg51AGnK1sqszfoMFdm",
  "key35": "851A19d5Y9zbijn6bjH4v3XVYpr2E7ok8be2saqg37VxVn1KnfqioFTCYr5RZE9JEbwrA87hBsrs6nkkKcWuc1Y",
  "key36": "ZsFVBNEaSELrLugxZhkXf9iDq4Ljism3iuiSLwJsv61hEtG5SwctmnXXRuWf65WPXWrwoCqx8NgAMPP2JQnSL5m",
  "key37": "4NYbQPLrLCkpbEvYQBMPHWqyXkDFsebikbaMNjSyoaVBzpFjxzPJvfvLMNfYqEix5mkkpksEGvXWZ9TzQdzxJxTJ",
  "key38": "9M8MSd14N8WHnECm8JfFtXH9ZPnXH3dvf7enCMaatDK8SPi38e1sPsijSFnN6KHksPEbCfQvfPGJmjpxpFvcXv3",
  "key39": "3WPh4McyP44eNRdHPn61nLVp1UitMoQbLxmtRyL2ectFHMYMhtW7Gaujn8kEYMTHpjMEk79GyTFHTgeoEPmn8GjF",
  "key40": "5CYt3MfxrPhjPR9kBSzZ7BqKTgdAMifjbrWsPGnk5GvnQ47sVAZ4pP381iu1DtvRkdJEvU2d5YUmCapUEKqExpPw",
  "key41": "2fSYSWH9DN6TCXSWeJnmYaBQdWSKQiPMWdmGZ9Ff1RY2iWP7vMn5RVPAccP1FwExEwz6B4KWqbGFEHTkmCmqnZ2G",
  "key42": "3k8oUJhkfwb2KaYpcNTnJqgPs6vU5YeKYuGAWM64G7HZVd8QPNyowS7Ajy2qAYTKLghSS5E6BsgA1mrerPVBm2N5",
  "key43": "3ABHS2NA1BoPZJHMipiW8G4KYai7bzc48DbvJHAEvRsEuvw1JhyYPVuUrrHUWQsz4MpP736iotBoy3X2yduM558d",
  "key44": "4wt7CBiDsyvvk3wSwmbdcQDVMbhyJfSF5ZCNGXar5vaRVZnfkBEktiNc1bCmBGGDWCHwrCJohkqjXFuvyfQEwKfq"
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
