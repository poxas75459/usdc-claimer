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
    "4t2dYaHaHVraHwqGnQT8CtB46rDh5tmKQgCkcFwAPbKgKwCsm4dNopZfiiV7st6MqCQfyLZ6J3WUd1jGqw5esEFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avp9LeMs4tPKMJH7pYbBwXHfyTYU3fQb8ZVvC7TzkU2KvhqhHNUPKcgj78jyU38QAL7v26BEtLTRetdkiaQ7jwa",
  "key1": "QsZCpXoQeBpj8ud2VCQoRpCqaanH2NDWRK8kgdh8o6uHYpTei88QtzRa9dDWwqDLe66gVecBNbCXG4Y8tHCLT7N",
  "key2": "2YgBpvWQWG8YqsYqcKLRZTEkJVcZ11gpQQsT7h99fsDtNGZrbsoWbFamiqkQMNrvYzBRg9sAmiQr5ypeAqANuvUS",
  "key3": "3VDjcyVYtZjXUW9cMdwm75CrVyv7nTyzPKvmQpTMQjEYS9vTDghuWHC9LETMixPHahUhXhUTt7XTsVyFrPztBD7K",
  "key4": "2pZZ5zqCeERDQTKjysS3TrhLXeJY9CPgVFZSdMUGb6CnYTH8QHL544MNUqCpuiKQvgNUJo7QxdZVAi7m7F6sDYbv",
  "key5": "2pTNzMHVCdRNFLeey8poWu6xU6PnKhaMq2uMeqQ2vFC3g79Z4MPN1x9EZMugbRbr5DcEod1zr9BiPBmqbp43qwdy",
  "key6": "28LSJBCHRA7SArJFp4CDjUqJGvVwZDYYyyyrr37t2SMUAkwiZhLvFuEjVh1NB7383zkiwheHmKMrc6wSnGA9He3o",
  "key7": "YgW9LiFEirLDMCjT38ueuXVG3RiSErCxoek7Co5PLqvNvkRtxzX1aKgjCMzWMAF6FbUWFD9GbjzFmswrGrkdi4H",
  "key8": "2XaVc4CVw6ynP2RnbJjkiXSJ9JRZKQDACz2gHiJsHtbxmU4jQnLNxJ74gpWMqCatC93jKrUu3doK7kbuu8qLWXZs",
  "key9": "2fowaan6VWNdybM1XAJH3GqV8QXxEJCv5TF1TsXW2EaQBuDPyAQpZ1CrZtMYc1ahDJhgvLTBhKkE88jHgYYvcKg6",
  "key10": "5Ff4CojcqBiqdV5oZZ9MQwiJ7YHC6QLMuRyDigLoVynsrVzumVvKLiA55swCCQMK7cw7xiqPybNY4TizWKvCHzdi",
  "key11": "49WPFg6MAWxg92bnimj3BvR66yDWhj1ptimCLviT78TGJAZWJzaxBAUutn4gbhBcwF2ZZJ4FFXRjPcP6ABvS3E6",
  "key12": "4nWrpBp2weovWNqYJUqFr5XK44ycGh8kLwNZrzC9KY9Fyqudy7cyG9Xc91umfh5Mbdti6k2RwftxhwJVGvmTJWRJ",
  "key13": "3jrspSU4rAmW4jELx2PAUSDjkxDtahg3VtU9PaoUPKJdFTv8BsMcCfD85HLqzSoAz3KWQ4CQmHmgyhwgE51Sba4T",
  "key14": "P8JjRQygQKhXuc8K2xJZHGe1w3sJLjHW7xjPqHDjYFnhgUHDoKHzSbe553jEvGHz2KeBwmW1CWCYRSzM9QfyHfz",
  "key15": "J8ZszEWbfvRfozuTAe7RLxsxx8ax3Y77vWMzELWr47DL2ZgeXBiYMMNGt1EWYUGupeGQLfKZfkh8vxhdzRAFg9u",
  "key16": "4boF5m61otoT7DdEvwHoMxr7mhMtXjjkLhEfqmL35AYLW3XmpqAvDcbHSPXQ1MDkPxFDuFpgCovsDyWyZEq3yfKz",
  "key17": "5cbN7TcNfTFC9pR9NJ5tznQ7Cm9AKHX1M9BYXUDk58xEyj1z9UKTvDLvWY6JNq1KxUzYLP9TY6e5BFg8pDMpq7hQ",
  "key18": "35sLwgFbuJuTwqU3knbcRjrKhabztXZocGw7fzSF7UVmZcnPC5TgnBXvzacn3gxNdqexer399ryfU84ktweJcfTn",
  "key19": "4SF8ZAebjq19tzpVjNC79S3gU7s2EpPZM11WeMthBv2zShiTZo1jnGV1qTfjR8sHQRj4pAzAzVgrNoi7JRcmXSLf",
  "key20": "48Jpc3zpBeMYC158i4T34tN9jZisAPReNNJjURDKSg1RnDZSm54JmruJzDAePtc4rvz5Bxd4yhSW2BELPL118VB2",
  "key21": "3Cg9zRSVyh5A3QF9oGAR6otktiZ7usRMZmTXGUaHiJYvBrCWH9ReeKrszGr1MbMihBBcofGnnKFrZTCiYeeuYbmn",
  "key22": "bU1MMQP3vrrnaBwXxwifTmStZyQdXeqDCLCECVcLw211UZH66pdrdL5cCNnNieS5Gj98DQmus9wuDoW11CXatMr",
  "key23": "kBRetnXVpcXr175Az47DZKMXkSi6FGeT9hr1Ufa2Watoy6qnz7y4gomiJNQmeEb3kb5JXq9NE1ZbuGpckUfriFi",
  "key24": "4eCDJoxuGLCpoX8wMG3VJXtdaC2cd1m4sxwTNnVECJXrQeiGDjQs9hb9sV6ejMnC9Rd3GEfojAfGGWX9i8chNAwT",
  "key25": "3PpJbooQ6GrqVfuSUnMBmYPjYp9K2shzn9yzEARmxWnrR9mPq8CQ4Jm2tk6Y7UDjJtRDGL7ewsjgU5AafgwV4uhM",
  "key26": "34rgm3cDH4nSA7QRKmCC1RwFGz8zzQb1DPir41DhXJs9n2NXvZ2TpKkc74v85YUrQjT79V7Z7ugR3AyvBYJuBMe",
  "key27": "5VcbXqjbziaKNRUMbYPa49tU1ugjcnbcQwr7r2MA4zZs9pKWhGUpzM18FNhkpLAy9vcuD5M1QQKazzDycv9G273P",
  "key28": "491M3SkefaQs9NnMMC8Mf8HDfTJ2rTy8xChtVp9dkNwN5UeP2aisqYDMs4BC1p8cbskNX6r82LTdLmPcPAmoVFQC",
  "key29": "2PxPHWTNQ9qsV6G1kQCdX26JYXroJ1CDc9smYdstYFgF6dq9NnZFhynX3W6GvXNiGH3MYWh3MmQFMv7HxDd2egs5",
  "key30": "67Lyc5KdiBMq384eErkE9NBvyTVTJcGyqts9uHU2CbH3wFjP8h55Eh6dwAtzzxfxtvJ1UrzczceJFFhrsyJscJpG",
  "key31": "3ZPFENtBLvvwrzBshivvQHrbWukbwHU8joTrMm49X628oU2a3SyxQdSqexKjVuNsPhAJ4Tr8RbCCVaYEZYg7T2C8",
  "key32": "2DyAq8SjopigyRkTcKEBH5HdhGo8vK71CD32LsH6cxEjNUZZVitrRSEXd4ik78yB35TwLQvS6uKtEEujdkdhDuHZ",
  "key33": "GS6PfWURRhLTRZqCjx9P4Q73873NtyepkGJwzQqyK7x5bKzwyMwcK8vgzw4gtw5KciNyuMRP2n29vGJ3w9ogE3V",
  "key34": "5qeCSZgomnnbfyo8mwUZQfDDXyotvoijyUE2FUTa9tzxsGTLPDmGzD2RYiLFhyD1rnusf8Gb4TMUFNoxMvD26LvM",
  "key35": "3i5tB2TGiooxLUPr2KWe5E3nvawEzjm47oRt2t545AYKwyocWTg612tcvCMxWxJC9cnLRR8T1M9euYoHotaRsVhG",
  "key36": "3JGWXVeFnPrvx898V1R5c2PN2vHtnSqvs5DTPG5dJhF6RkW36hKu7UmQmHJj4j4rugqEtzkbjwDxWcbN6PrywQfg",
  "key37": "5NLcJQBH7AxdA3Y4iknk3t2DSDCYUctW7vpofx493j1NFnBkMg85cPBcTtWYRqLsaJ1Tj13XbeA4RHyMjB6hgQQa",
  "key38": "7uwxXeEW1UdcURW1RBvTr93K9kvhkH6d73Y4tUDPYxmzGVaXTsaCfPGdhwKa2nWz3UiBGV7KtHraqGmJ7Lef1mc",
  "key39": "5tdF7KwcVpnL8porznYhBpzdNgMTAGhojB4oZumWfrtXWGbA5mSNX1U46xZcRn5BtKTXs7BP4j7cZbSwnFUe4Lme"
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
