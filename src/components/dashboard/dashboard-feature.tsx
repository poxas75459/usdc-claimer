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
    "3MiNn5PpR5jrCxa4TGfDHksGyMqTGERdVbBtq7VxppBDqDBiYbeSPPiadNScv1r4QuKYTCnaj8wza1Db6n4FtPAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pXdyBgfMSQgodLSVkoeHwGvkWTUMhgZ3tQeG82SmvYRyMxDUWH5bUMhJCRPiiJefiVKsqPR7NwMbufdcaixfTy",
  "key1": "UGbvjLHVDVkRn3jbvGUR6eHJQNBMr8gqikYKNrRNc2vDovhSbCrU9Kq4wvv53eFw3Zj6igaB9CxVm2YYT1AfMUE",
  "key2": "28Lm9fygE7xRtyXHfoK6XnSfyp9kagiBVGG7jSjipEvLtx58BPKwpGxPaDdZLkTT32zzGUUqjqbbFsEUvJJ6qD4S",
  "key3": "2a9wNKVmLmvBaGTWNDpXrFrQXM4p7QhGsAPEiJiG4FUDJDp6tM6TgQXhVcVjzojsXtFg2rLfGoKvgezpsZyhqV95",
  "key4": "3rwwhk9Uemw5T2HFubP4vgvfSgARqH4aH3anwwTLdmDgQbs8Gx4q6EtfkoMGdypN56g1F5UevmfcbsBTem2jiYxm",
  "key5": "5CbnnzUe5YJFvK8qyPJ973xnB7Rf2TuGCuKUBQdceBtu7VvgAHCYU4pgcydQZYgMoFJJXEhnkpzejvmnNQu1HcxJ",
  "key6": "4dK746CBfTW37PRcmJWTN12t6Pa7U8Ky4QAksr4jQ72pqvremQhFEsYx6geGTYGqBFsXtT5RqWLVbJSvAt7Qjpm9",
  "key7": "2HJFr75V2snavdYooUaa2SKXoMNi7DSk7oTA38jqWW14fv2HTjDAncYB13K8FWccb47zj2ovnoFy6rEvTUYoJy8Y",
  "key8": "3F9o6JroYk8DqUszofWym3WbgigBAPwa7cUUGjLRf7akw1ZA8iPQKMSoxwUWrxmLRf2EKA75rtBaRrXPpVrbfaW5",
  "key9": "3pnHPRVVbfBMwtYo7xPXyH4UKAwm4DACzVcSxTN3tx4XK8tHtTqm2arxYtbu6Y8Qo4izzxSpr5WR9WWTGfTpE4Wi",
  "key10": "fj3UCaMJfz3cfRKUXe5dFbUKQoaqcQQL4K4Phjh8Cm2Ku8HvKVSBsuMh6Dhkz76oUZh5ffr7ekJRBzi77ytNAn8",
  "key11": "2h491HgStKDkaudf13ad3xPGxLSnT17GnHL7ngeKcnb2ToAVXyengM85u4dszzH6F6Vzp1mr6RUPobvaFsYd5mzz",
  "key12": "ChBBCS2c215oRWU9xD9HSBH29PW3mZyP1gR7wwZfkyUbWAygiZtypgdzqcoqzBjPXJBr1dVm76gyZj15E81GbWM",
  "key13": "67aCoZnBojwroaBemUNpzYQ9LkpfMZ3B4gtFGrpfBHes73QgYHE1tNeyfKEFhY6BdbA3b8R72r4ZeAWSihdAVG4c",
  "key14": "5jz1erszG2cNmCJoJCDgbqqfJkPVkQ1SuWRDc27qLEH14Quehe91pLmXJaznYCApRWscuyhZNa3DbeV1UGQyXdZL",
  "key15": "4jadaYFsXgPbgYLj8bMCdt7HihKWAyck5sJ9wZsMC8jBpfptWCYQdGQRpJQXUQ2CM92zA5F8nBafJ44PgFTJz4LP",
  "key16": "2MGiQ4ULjryXmrE8ywBt12U3K8vE2VRDR1dyZ6zEChojqHUibvD7gqptCpuqd8aRn4skczdrybrSMKYkUTTVwYt3",
  "key17": "5tkfEKCocybdYaXz3hwBEhv8AaWSi2RoqR4b7Pe28TzJf3YfJqCBua44qkSWEDkGPs3YN5J2U2FSmgSB3tm7bxi9",
  "key18": "5yN39nRr8yk6Mt6Kzxnbrftyrpxb6McLaACE7SsYVc41Q69t7NuELmQHWbTrZTNt2LTdcUUfPQUG2NjSh1sV7EJo",
  "key19": "5qvL7joLAqVuD28CHubWMJy6MntrUhLBjT9owTMvaMaUs4tsiK7iQRntjJPynWo6ixMpH6pzNKT1VrTc11fUq4eC",
  "key20": "2QHN6ADeTk4DUVCWLLaKjPw6iofDgdkg1mszrgxR4HSDAFHoi8WsCh7Dapt7uAEtxf8Y6BXfF9cM4J9ygzJMBq94",
  "key21": "5oAVpSn5LFUrR9NYnVX3qNWWovsy61pQKv8VWAv9xrcBAqmVXMLjfAAJMaLAAM4MeqMyyQ6rSxNyfw3fPoBPMpnd",
  "key22": "t7sgXQNSTBdt6oFy5e9MiadAA9LcoGAF7iUfNYgpu1XuCcZ1chEEAeDQoVcSNiJ3zLj7kPifhwW8RHGTPAkJbhP",
  "key23": "3rcurTjxuqLxsCJGBY4Q8Hud7MmcxzgC8j51GA5H1VS8i1itRfpZuphmXeJt8vmKZV3wYeESe2CqU5KJzdtziD7H",
  "key24": "5rGAXzTuVLRKmgtrSCmE8aTRX31h4LLLM7y7gEQx9qTJnZRZMY7TtjDG9SC3NhkwNaMpdXE3Qv7WXaYptrbeREgj",
  "key25": "AN9oo5iJkKdjet7FYU2tHmfF16qgKZgfKFKw1ZT9dEUVcLfSmCSBn3weBqh9qCKjnK2epuMzgVW67PNsSLfWUau",
  "key26": "4XrGaU6CC1k3tnhUm5fpJDF3hfFbXCMegKd74nN1xf9W6EpDWyHvpSuYBbSJAVjbUuJYqL73cbfmD21rcApuYrNw",
  "key27": "5q5JR1Gk1f6PqSi4wPL9AP29xwFknYBkNYgubGMGF8JKFQLPewWyR3VfivopX2BsYW8Qbn1FsufE1MT5mcvp44rH",
  "key28": "5MBYc7FzVprprKRVQxzGTYa9PVuJAVTZh9fvUUXYeS93jDuzjTTVtA2NnoA7LXeScE8pwkoFdhNUxtA6f7Jvx96j",
  "key29": "3ijyvt7PSU5gzBsY7AD7pWprUMMrzT7Rn5XJWgCPzfjRV6ePKts1xhpWwS5RSKEVTfsAhzwBFRcP5NvavCuEviqP",
  "key30": "5HcTYcD2iXb7sm4udqN7npTHMSTALN7RKvMsgfkdiHFZyvZvkMjfR5mZcZhBoZgsdQsY6aW94QfjBkEpLWWpW2Lc",
  "key31": "MoXHd9oJS5kaFNkRGYSesEcbheLvi4GNMsm2Reedjipq1DJE5Eg1yrgorNsS42NTsAjFfqBfixBGDAYK3RWCrUf",
  "key32": "4ZS6tkTdJLqNGkmM15JTRKpFUtnGyyafdNrbJSJtdGCHPNZvoCEVxkX9wVVG46gXWkftPwymHfLuL7UTDLTybDNs",
  "key33": "STzCgN2bq8Zctv9iYepQ7sjWuzcaYZsofe45YXRe8pABA7Gp5CJVAsCKGmRXsjVFR3rGTDN88vDPUkeA2fMr8ab",
  "key34": "5wZEJohMHQdeGosnfvseQ9bVTALAyEPct3Jk421BWkc7wD6pywQemkY2Puu8xjTsqRpEAkTVdQDY7CRAvHBbJrFd",
  "key35": "4ToVhuJ3ShKVNqpPzzdP1cq9W479jkRsRP5gWQhtV6nYhgEMgkFLJ8NfvZ2dn5ft6zpHuTZvuT6hc3VdTD6ganQ9",
  "key36": "5hJmQKTGSTrQnZLE6jRWkDGg7oLHbM5SUuMrH61o9dLK6yPzGRJY5SbbdUFnpVaS3cigbA7Vz9GTVebCCYL3bYMe",
  "key37": "vuhJLhm7xi3ETKSaY1jatWRAtgXKuat8gsSL9e3SkfM9bJsx6L8aHwd4BRVmDfPedagspusGuFXQoqDx6eCJ33B",
  "key38": "3jLFQE6J58JNp6E4DWRWnaAm31xoW1EJYFUe5WRpCXJUC2tYiRwfumCYkM6XnYtKFsJXwMAKxLRHWSsAmGpcRBcv",
  "key39": "W6XDHeKeGFCjXoMAvNpQ2iEs5bsS286rUZjsS95ZQ2rWveSFL7myKyYwKQ1PqwzwJo8SADpRCJkigvVRKjhP3Rj",
  "key40": "4aLAXU6ZF6DtfYRF1DQyjW3bNPfMLGAA2AfeuDjqAFyHtkYbakU59b26uW7Bzw9FUbB3xEkA4DDqXpCjGHWGR6j8",
  "key41": "2T9pBtE7SReWw5zzusNBBU5uCyDfibJ4mh6wsUd95Wr36WQdm2oRtcacpdHxzzhcuwbpAFCvRKDNbQq8Pbnt73dQ",
  "key42": "4L1C3cmVrHsHv5UYkYoD4NvNpk5PqQLZFygCEo7Zwjkjeo6v4t4T5dGF8HoxvAWLRd9hQqcV7B3zWq8zZV9br4us"
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
