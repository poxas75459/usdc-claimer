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
    "3gfU4PbxVn6hZ1aFsi9P13FkBBAH5arkxVgscjgjYb7sUYGM4mRCFvpWdSktEpZ7qXGoBDZAP8u71WV3qQSXBrVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xoj9krBrnjVH1HQnDQZHfPD3M6dVMEgCVLC5TErZ4Z5ichSNgKJv9stnWLfkuQ8ti1taoJoQZMzaesd1jsJpG9b",
  "key1": "2LFV1qKcdFWEkmcZJ4DmJyCMnzXjVBCHL9EAXqSdn5ahqwE7D4QAWniPf23bZ8BHmNpXg4eWQpxrN8uyGJ5Lx4GK",
  "key2": "5RfXJ4cj819TFPt5zmheS5Dxy78BzGYmaMs9uLztQz5WbegAPorA6zW4qXckeznMWNcdjdEhKvJjpSbpWSpS3QYf",
  "key3": "2kLDxG4frWDj5m4dDMwvEuXKKnZCrFx7JdzmpSnxwb2MkPnhJhm3U3QichLGCyYHJ7ayUczXA5e87M5bPHVjrxwD",
  "key4": "hFqmUEMQNGJqgzRKEtHw8PbSySXWS7USVw2qKHxfewN9LtNDabANgghBMmX5mYQt6ApPiP6nBr2a9S9c6bxY8uQ",
  "key5": "Coo2ze6syb22qDMySH8C7vmLPCzeuXhXGz2NRzPXs5SbA7X6NWeCaxag4e6Utwi1CvEJvJ7HjPvLQbYHCZEeX2M",
  "key6": "3jzZPb3xjhYRCmvC3sUZBV73rs6vANrU9J6wC7CYQ17Mga2SUFByaMhnhvm2feV87eCZKuMHh4fcjFkbeynVeprA",
  "key7": "66KQguCub3Z5mMssxo4STTL3ed2pTi5WyAghwZ1gViVnsUc3qwh4Uc5goUQbaWxBkFUSY1T7pcjNeNp1Z2K2nPii",
  "key8": "5HxPG9n4B7S14yBK1qWEzycUGSphq7K6PoX5QdQuCptN8nEcoPZtrnPeTGBeHjPjcc2S2UeXWnwSiRCu2KyWJTwC",
  "key9": "4SxQQFQegmbpBJYrXgLYQCfqPernNVVzjTNZk2HxEueR7bsSqRCFBj3E73cRzVXiy1ao7gnbABsMnEg5EeqbCCxP",
  "key10": "2NHo28B5RVLg8eVzoa6Xjh4guyRmcXhmQMXTJJXb1YPTZMonUdi1NpeBxZ6tdgJXWMgahtM3bTM47s5xvALqKfRF",
  "key11": "3ME3Ye8ZrFAhLPBagCyWg7nbVyxGzzNDEN2qQrgzepJB8sxLqnU1PBcxhLS11bXnmE6YwHzuVfVVKinYPZW7ojJZ",
  "key12": "2mCUfdVTHkjXBcowqcWKFTLtcqn9krJRKnEhMm9cvqWP6eGXPi3cXQpQ2AzYH3STR63D3fxJPzoXXZYmqVCcz59L",
  "key13": "KSzqqvZeAoT85BZVtF1jiV3Qzf1nnk5qNLRTXN5V5utbtp7crfeUDztCHsDJkrZgMZHwhCd3scai7NRqxbewfgn",
  "key14": "4piceTTyBfSXHR1hzLtbaZncf5c5XP1mLJpAVKnK4nL3ycx6gkhX1awzaM76MfZajPhpWQV33LuAUNkaDv5iFRFN",
  "key15": "4dAhdqJWESMgE2iVQ1HYd1qiw6x5xZnpen9Rk3ZVv6YPjjPNP7Xs5AT992X4veoi5d3pQdk75S61VodBMB5akRYT",
  "key16": "41wkHiyhKvBBkGwnJApJ3bwy4yxfydHZt1VAJjD3bq96iWoyHRKqd459gD6ofD5DgQV2kMA4ifphbjtRHNy4rT9G",
  "key17": "r1BHtzattySLh9X6Ly2aLaCjyqdLx8MiCG9ey11kRFS9z4DR8hQk4EEaSwpZChVUWxJkYctEp6K6QNJBcMysPXZ",
  "key18": "SSVXCiRPrsnVZ1LAMrysQDuPNvpeiYTJWLisbNSgF581ReEMAw3mV6YFcn1bWPkzmTkGFQQxMiUWgsYbbsSc1pS",
  "key19": "2tmfYRYpU1kw2oMckWPDRGAfe6HVrbUgogzNZuQcUsCVcJ1afMg72jbWKUBB7PEB1sbzNBnxsZsXVXWvoow6gYd7",
  "key20": "DYirtbB9vVSRvjui96bWtBtoABVww6VP5tc2GQk79K6Ekwq2Ft2pPtp53HNqe8i2he5RiXTdKvf9q4YmNDhDcKb",
  "key21": "4VbsMoEjzG8vKRT1fjpgrzD6Fb4z9zzH9y8NLBqrmMYWLtoTRLScr4CBnn4oqkqnD9JaNvEzKNxLubaQeYh67TQM",
  "key22": "L4JK1TZTqDPpZT9dV1koJaMsG1SJtjn9BenhBPbgibNvehB9psgpP5Nq8a6cJmbVAR63J5c61xwLxTW4YMXxWQP",
  "key23": "2Qfc2E55REQqd4avQzGoNCtxDDHDr3wpCe6UmAFzGuRF4yKSysSaspFU1JkodxmshrvtJvxxd9yj1hrr6YfnwpPe",
  "key24": "5EwktQJnCoiJLtubKCAaa6FLFWuZJ7KEBC337JYPbNL8JTnVbzzqqT5EfUrC8t4w3yHEySMwcfuYbJRfyay9sHjA",
  "key25": "TqpWNChFJzdGxwDZusc7u8fXCuJK39r9L6hGXi6BSKJLQ43jBnBDYQe9yR1Koc7MjfNC7yfpF49ExhUUZWuJ47t",
  "key26": "3jJXotYZBnfnAzUTntcnPdur2CRkskK4Fa238yhX5C3zx2CztVm5CEycsUZazd82jk2c2Z7rRNw1Ei3U4TCurTMK",
  "key27": "5KAjETcSymp8QUKArRBnZxY7aU4yTPLCTEu99pLQ1fwEviXiPVahWVKugrNt2hv9d4RvYffRAzvbAnCpjWmUrDMo",
  "key28": "9XNeH9SPEHhhYBeSmaLDwe7RJBN6fn9hkN4PGjV3RszTkTMzsXX118EGjAD7eK5vw3sUAARRZGuYCDEKbENtv9g",
  "key29": "41cfMjWbSbUjRSgYy89F2AAYECWy8q7NzLQh2ACayiG1HHfbVs5fUH4AMJHYrNnxqYUHmxYXyaWdz75bsq1kPZsP",
  "key30": "4s5snuB1ajv3S1ouBx6nPG1saXf3pjjwS8pHjYDjRBFALwsXGvv7h4B2YcTi2RjCHaWznVUNyMhMj4cHsgBg19MN",
  "key31": "S3UfzNuopwk16B18HXMP5U3WaPhfyMC1FhvKw6M3Cv8r5xVjowHXGNnURmDqu3ZKehk6kDkwobaWN1MReyPYznc",
  "key32": "otrVz2rEsfaCaV7fninmyoLZGzZsvJ78pDc8SuaJMRGSesMri1NGSHczidS2NmZhz9YrqoAdi2do8mHdwQ49jn2",
  "key33": "3GeKzPZBgnDmJNHYELVN8M7na4kRjJtmiRyVrRQZPuBhokeBpEHYE77tfhRwr2FVhHD55SzxRewBuMoqzbgCkc6t",
  "key34": "8TexgMfvmjucd1va7K3i8j4e9JShQtE1XjN8QuKSeLDDBweijWucCdRq389FvQfKmJgvx9FCEENnicHP7qCh5zE",
  "key35": "2CYuKfwVnYjANCBVsDTUWEBKKPsJNc4f66qf2RpRfu7A6sb7dxExLEMeK15jjnAKbaNHyR3kxvHM1UuQwS2BtrNr",
  "key36": "2bbQYxRYxrjAjA1ggCpA2gvc565F5eANxSst8v8GMM6gbdk9kv6dtqHxbMkta48a1xEgxCmKo6kd1sdA2fCmVEma",
  "key37": "2B1HxK3gKSpnBfeuvJkrxozbnPu1eXCchsT9NVBmfUZ2QvjgfFuK9yxGwRTxvHfkeJkUs1Hp8c9BaqeCV1M8VGLB",
  "key38": "zqreyZwXA5KdaXPBifRzKBZ14ECkEL93zTB3ht52SMZVMsTUCiRuvVBHcDrqMHcBhYLmCNwS33KD4P6hA7jpLNL",
  "key39": "2vMcQ4Ja51ApZXCd5hxv9vjnzeeRcCfNyXCAfiVrU74etNHnXiwrft7Rjs6wqzZbwRGKZRZXbENN61TDHk5NNR7m",
  "key40": "LUpFMySQhFaDh1YzxfX6KXmWk51iRsdiAMTwQaMU5ggkjGHCrfEVzJ8bkBT8d8E2m2MUcAnzPkBpnrkQUoEfDDN"
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
