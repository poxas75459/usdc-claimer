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
    "41ivKt6weGW8XoERfjDajAeuizhPPS4P3GHJdQhfvNNZYTYxBsi172kZgFVWam36ZD3bQmmWnfGxyrF2UyHXDzsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfbCCf9j6yy5nFYiuLfvasGjz5xdBmj3k9DZGkfyMzSEJEwv1fedLT3fPYvFZdidhc2odAuKp1Dc3Snokqqys2d",
  "key1": "5Unmnd9g2qGSLUtgRws3BfZYcE8k4LDdU5Cx1WLTXgkSFJ5BWJCH7G6YUuk25jkFWkVjdjqdCCmizFnNPK1Bfsqb",
  "key2": "rrDFQudrscc3RwxRP5arJnpLWeftb6harTThekXXtyR4VNHhbXo9WpRWekyKAc5UrMzoTsbCg8df59otEPojSkU",
  "key3": "2TFVpiZs3ZRuwyxiN3YzW24qmnUfpitjmGyqRxxqMxSRfiLXNtpAZ4mEuRe5XfEMBU4qR4iykDbN9rUB2nNTshgN",
  "key4": "3G47psjQErjdUpQ7mZEh9WCFQ3ZUm6nrrAThzM2BYb3rbHhizG14R9Kz2RX7PvkpLfkBhEJcfARx2nh45EnMaift",
  "key5": "5UT8rs64P66smXwLA1yneKQpvSG6YSJZWK1geKMCCtof5fh8UZzgyC3CW1wqopYDQegsBRC4ygk8CM2RGvSfJ38Q",
  "key6": "5Qh98cuiuLnG4VFHXEWwESAhFS1dkMUjK8ikTLKmwqmrcjnJFga5i7CZwb5oz8tweKqYQRck1rRY8SrKa7JRxZj4",
  "key7": "3ZBToxSVBMxPV6U9GqzbmMZh3U51RasNCYVqvuSWzVxNy3AceAqqmN6acK9kpkZKHdYBgQ6VAEEAB9Yq5ciM6BXb",
  "key8": "qiX2tyY2xuNDeE22ZTTR9UJZ7eMaJkE5CtgBXjj66uXraaVo8tsNVk9jv287oBEW7t1ryDz9Dk4Z6TauhR4F4hh",
  "key9": "4GkykFYJKVJosyCm7PgZtMSCPGxJRDGvQR79JTSSweofTpM4bGimSzyAecVmFhBTpMrZ3AXpEkfZha5nUzJUoGDM",
  "key10": "5CYz6kZxLLMEFEWQCAbkFtfjzK6PUDaqbGzAfPvbd7gyYDhT8JBBFD9ESPnEf3JXWJx2DkCbdsYopNqYxZhvUubc",
  "key11": "63LngSLCckDqbpUxQ5QWgr69oUB9z8QecL4MUaKG1iDpNUQwAigbnw19tUCgGPuEbG8djh4W6aLjDv7KKE1FGdrE",
  "key12": "4NMf36ePB1VhAYHJt68vAUNsSMEMFRnhyR6imspZQ9NBSQJzTD3GMEsSpPp2UTcMwtp1XsT8zR1PE2HemJbakJJN",
  "key13": "3bap1PXEtHUvy16NKVEhRPfC6u5bgiXn1Hz8AZRrGz1WM7sMtpbqBMATuWjRWFJBiwE3Aq86fsDLuVmxfY8rAtjY",
  "key14": "v2Hkr2urb9YjrdZRd1hML3P8Cfvi3TixgX2pJnqT5T1cVeq8ghXq2s3c6acEcywjhZSsARv2f36kBTMBCvRygQv",
  "key15": "2YpfhD9yBUd63TnmbwatgJUwDmRRzAYYNnb7jV9mTRTCptwLEbVFj6BkgVZ8DGmUBkMCiRb9k3zNNMvB7V54b4XF",
  "key16": "2nPgRyMx1KjKHq61rG41BeStqLpWgXpngP6kfcQxaMdmR8XN5tdik7kVTkyMXXdASCx2BXFxztrgy85jnxyRy3pV",
  "key17": "66ArJFVaKBhr3DBE7g8V8QUQqg49nTTNMpXAmeKsudGjb2u9PkCFze5iqx7StkNkTcuCUc6tKjd9oEVrSjiTnQjm",
  "key18": "53GV7YBsYDWUraJGXScSxunvHhDaJhSrki4S9kTWeZmStiuaUGNqQ4CgGQvZXaJUaSqq421zog41LyzsngFtCPpC",
  "key19": "3edBhytkJ11MynSzdQ1ZU1Yqg3t97F9386znXNjeucWFUTAwWRpHfKDSybxJ57UVPLye7SP2NL8Nq3BzUAFnKiuN",
  "key20": "o8za5ruDmGkRtzRszLizFgsTU92d6seqQXaCXWbPnZLaQfGdoGnbegcHNuP9jZzKGCQN9uqwefV6XsLbp6gWATR",
  "key21": "5pbAKTinpPwUQjWwNQDyB5UauBS6A136vX4zv35Y435ADsJG3THu4vw25fazSBgJbVs2LiHZVH73yac4h3fe7pB7",
  "key22": "5cQqPMUE4wq9LaVoNqbcisLwXMGZCn2hT6CRJMCHugJZcKkdYL86DdSDqGECGKepwDaUhN33b5qjpzR5FmJZMpQi",
  "key23": "4TfgYNoAGHHF7nACCHCRAMKUPf3kbikmksVrcgdMkcPKqj1L5rk7UPuhp5qWPYm74HWnFuhpB1i2LFjbxV4reydB",
  "key24": "4FgxHMaN1KP83ven5hTcJFTmoKfsNvTdUhXagn3p6WfvgL44pwSCrmPugtJRuHRcPiLYReHFXQ77u8ZNfcAp71Re",
  "key25": "3hGJKhtBE3TXcssvaoh6gtYimC7GDoD9HJMKiLm6WCukPQYwiepVhwfSLLZZfywgHDmFj3jvp4JCVdXDjeKDVXWj",
  "key26": "3V44KN9n2sneHBieUtiUH8z36NGsfPUaZDGft1nK5gsW9xyhKrRVeZCWRq4ncqTWJZf11W2rPDAGP8hP9caiZWTk",
  "key27": "RBXSm24NaMWc1UBUb989ub63gjpWM3NW3jiohM9UpJ3Hf9QqJKfTgzDzFEsY6uQwEezA4BQKKn7v97pn4c3ez1i",
  "key28": "4zWzkgnx8QQrRBonPi5DZVrPwCFSmSowCLcTSmEkQMN4zJ8ypdGiuyXkqPqyfhgL17YgewJfdiENQp2qnRkASWQa",
  "key29": "kApTMyDNP1SGdAyo1xPsdWxM9pXrs6H3m5q2RqaJSRSeDBqKebWytqj4DjbYx8Hu6KfDyN4WU7uwY51EyiMexZt",
  "key30": "ESGsXA4tmTavrrKn2EbWYJdhTeTvdvrax2ZGLQmAPMQc5giEabH8yN1baFSAz5WFfBwsnt1R6THCtjXkqzHKTvH",
  "key31": "3jjQjWvaKLLGzxYhRp1wC27sBqXtLxyG16x5UnSLSYHUG9jKYhvmE3DjA8peHwirVVgEqzoz7JpR9bWU98R66Kba",
  "key32": "354ajKU3pPS4wERUcSHD824LMo2LfznFRteDoUf4q6ZPTHMaebSwYirgyYW8m4oSrB3PWLLXat4UhoPFY3nNbhnc",
  "key33": "5o7JoQuSEAovpwuhbq1YBTn9dKvREtPTypJ3Zg15JLs1dfBr9FeonFSmy1uCPZvKEoeGKxVbwHymwgfHHgj7gFMV",
  "key34": "66QiLwHdyTj29znpntzK1DUmkRnSVwjAqQ1KWCGj8Yw2WsnXJGHAzkMJ88MjG8pvrZyinAp3wAQzsBN6prb6Wb6N",
  "key35": "VtWtouPDMmSEa2oceWkN9NTKaqr8D4ca8taJ3MVqAD26huSVAQXnqiWSsj1cp7EANif9QeGuNV5R7E8kS4NBuL4",
  "key36": "2FURNSNng3EZS9fhqDEZXEgh5XddPQ5Muw42s2GpnL9Fvg3Mi5AsvdT5jbsFnVECQjZTr2ApUEkUf3qjkPCxiNy8",
  "key37": "4gc3mMYtXWnm2JuY34kJuHW7V2acU8tyqcrEVgVtNRjzN2V3eaxSy5M4iAZCYLRPKKQXoYL7c6bQXPnBUUgpxewX",
  "key38": "2UzLca1JfVjsv1Sw215y2q4FGFb7tpVvZ3C1o52Kr9vu35fEberLEpeeAzSjA9xBv5xroWM8bmvRiDLrZLbDWyPD",
  "key39": "2GoCNtDr8KJVmcPUz34Skt5SuviHKVcEJXYNyUi1wtUqsLTgBBZjN8AsnBRt7qNZSaGFidkCneVqPpobhwdbGVhU",
  "key40": "ZcobE3iZNCMf8MpWEAbHQQjUkZL7B9yhbSBhDbqpk51bS3a4YCTSdC86fLRCKqpPrEdaCZtnUSQK8j6wX4aA9YT",
  "key41": "25fky48jEPQ7C9CTc5jaw4pZkVsVdY2WLBmMaSyVNb4BmaGuzQygE2RmhLS45aRCJ9dwE52yr4hPeyMGXFjTJLwk"
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
