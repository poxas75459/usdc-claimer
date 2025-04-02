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
    "4ou6jnmsB9y4WeYMnwANXuE3uANdELkfsHPq4GFDMAcazUZG3PwgYR24wV4jdkbnkPMDdALwdwsP9E1nSGEAbwPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59V2HrbSYxrith7fspDncGpcG9BD6wYuJMMaTRdaUMCf4uV89gLA38of2Y5xY5yptADLkCMFewtihs88GVkMxdi6",
  "key1": "2rPdEM8BrcbRXCgkqRMqm2EQWLX8VnCX19YvTUogMiDmE1FpJbjsUs776eHVG5BgS4qJxuT4P7sKQGupH1tBRE5s",
  "key2": "4ipxPfKYgRVJbyg4Agd7q1KdSDzprtN9jB6m5djvXEQdph23YkLRsKYMx8vEjMX3KRvrwms5Hea7527beJesDWUN",
  "key3": "3EPkZPVawxaDXAUGY8LzTUeKddsXmtv1Qsq7dxm1xLQVhbSx4bSakCZHNqdXKBu1yekz4FWfSs7fujjefYZp9sxi",
  "key4": "3biwtc8ksDAdke9iys55Wy9CfaJGR6SqFo4pmnon8dxEv1ToZ2ZhAftYHYzyH7Z5P535JqXyCFvMdneHU762W8Lq",
  "key5": "EYPYzE2QuXMQg95APHVFr9hX8vroEu8fpyz2PDYRVApEuCrKJgx75sH73g8hLXKWDYxzigHKhLbsUwYHH4AFNXx",
  "key6": "3QBM8ytPvqdwpa8MVDk7Qu52gMyTfDjXb8NjBiCCStgZqHrF7YY7STCmMJeFRZFjmg8C6baD1CfqMTwjkvaCwfSu",
  "key7": "5XegLMHB5oCPsogFJRQLpf1nVbGXB5hETXSYxpTFxzaqzbuddZz3k7B5U9SR6gbEwtBnFpXm53ocGQHmdHwy8Ggs",
  "key8": "3H2ZAiDCLAhXtCezvLqFREN4i7DZnVFWfx8YoN566yZ6w4xRWZhPaUZPc3M76J6LnGVp9TtqYj76X99bw1YJmUyw",
  "key9": "4pKif4x5pb23J9B2WPgJnuDF45WVk6233n1iJZqfJkv7uca8fMoeuyQM7tRBY9uQXLHmnYne7aipvot1reydHTsd",
  "key10": "4eUZrHY2eASwZFYVWBrdSoCenFis7UH8bTCGKYB1zZjPudj1kGBfVpgGLgXe9f4Y8xUiHzTccv2EAL9wuMA1drYo",
  "key11": "2P4jGmFryAVJqWcuFdcf5Yos6LLFaJFjvyDsYtgTkeE84Pm6eNYkEwYDpKvkXxxUyP4QhQPgxpumUrFpAPapSC9r",
  "key12": "4oY9wqFAWtPaQQ16jmcyZyuU4w1gi6yqbELBLc5LH6rm6JJhHW5ZB38bHv9EKK8ZawjvZWRiL22GBC8Cjuod5rkq",
  "key13": "3sDRSecn1GWh85o9n8QdeYDLDsLSAdevPBmkbnNgbvk9N2PMbRssYT7zb66sUcbPZqagwBziUKmGsboNoJopiYqP",
  "key14": "5ED4cVwcLWvc9q9DtviQmjrVV2qPc7Xc48VYfGw3MTAdcYxwNsynMbSHcaRekZcrYNCt9Y11oh9o9jHTv4Zvfx97",
  "key15": "ktnJkNCDCq4AAqpxXUH7x4Tgqy4ZEZaFSruqzMiEGrcR5HdJHmwaN5cC42PV5L1hStsgcpJFdeZQPwwj4hrJSfx",
  "key16": "4zsmMuaADARGinmZyYQzXRE673NC1rVt8jtoT7cFvmmVV9odsPWmk1dhhZbjCwtYdbfMdZtkpozSrpWFaPSKWe2Y",
  "key17": "67nPD9gukLdtodN41V4fo7HC9acBD2yPfJUtFWZy5kjASNyvTAbkbYjq8HHiLqUoqmca5hrSnB8BB1ie7neYFVSA",
  "key18": "3MBBXxrwtQmmwaUHgca5FaEe5VxhNYXhvGFEC4ugSAfDRnZpm5S6G7ti8hBksN8Zrt1EMise7MKQ5DSJoYA6bsgz",
  "key19": "4romiESUS6joKWjwRwEss58RqZ4KradkBN4RQbWgr9a8Eu2KH1tfErmSgmGJb9CGaYik8mbc9Hb75Qhvk4N5BUWx",
  "key20": "3W8EjnCXgE3hwpghfw9KWgcoa8uTYN7EiZ7vhyZkN8NzTmE7eSvHmXscvqDHsYYgEu7U8aLnfeMbcWQXdgkbsGaF",
  "key21": "3J3E9msdD6ypSEdgYbRFyzoCr2MZftNynEPkX85fsm2Dahk1QwCVZJK1AmvvmATAhVuX1pD1Nz7Eddk5mH9LPKYC",
  "key22": "3c78VRQBYvS2DjmMYxepVzHu93y5dnbMsNU3rYyRKkYCCzS1U9mWmQEuyhvrdbW5UFWeVsczQpFYCpW44LBDN8cb",
  "key23": "3dysCsgmNMT5i2DSzVQufouZLJ5LvdxC6ZKDoreyeJcpaYJhccbTfmCFP2xxVEhQgrtrvCaacCpEAmYYCQ8LY9vb",
  "key24": "2aZ8diQWheumixrtkbN25TDRPKW1UZssANppR1vygViGVZkLPVDTGRdd22MC8ay565bntLrkYT27XCHZe24r13FW",
  "key25": "3ENJsLpK1YQEcbJrtbEirVJ89ZhBPx6QA3mNtgeiYUfc95SjxybxoVrKxJUVzcZ5utpwipEUxmhaMgJdLXbZkQuK",
  "key26": "3YkDpjXh1JKDvG7CCBwBAHLX5v4FtusL35UakNcGqrbZbquJR93E86sEE298XhF61WbkwjG8d4Bc4czgULvkDFV6",
  "key27": "gD9qga14M26zKfugvNwgxH3kKE3EKCQmVsTvGw2VXZ9cASLv17rSyxFW8mzxuttAWMAnyasHaaFK4RgREEZVn1b",
  "key28": "2EZLWYbssRCy5JeMqHqBTvBWnHeZ1L6vKLXFB9Y9MPvasspehoP4s75U5fyunWBCiJJPXUZci3xNkka8PLYNTNFA",
  "key29": "3yf4hbik2kgXrQCyaJ7V8zwCGnLXEi9cLAXDhLHwe4Yz5moMdMceruQpbZefwqyk51U4tT8he1PysRrJMvXAAvq9",
  "key30": "2Dq8Zczt2JcMwLiDdyRy6Nz3Q3GpuYVNbzJNizmnTyUAFSaFhgrBk8nvNf1Nv9wsf3KWPPN1Wb1kH7y8ytWt2zZV",
  "key31": "1u3h65ZeWqPmbYCYDZXAG8adxQ7qBsSPBApcp3ZUgs91fwAL2XxQ5q5HRZnur6ckpPwcSusTBgeZTqDxrJz3DEv",
  "key32": "4ht5dnHWWUe3Ec1ZvYumvMHe8PQcLUJxnxwZuAikojDLNsJvWgr5AhrCT7nMwGU7YGzeqxuXps37eNRgPg9sqnYd",
  "key33": "wemVhdda2xPUgFSUVAgwPSfsvAsefXJp3T7QVtwGirSyi5NQHZgoxc93kBv8uPErRymwqyyoSsMkvxN8VZ4JwNa",
  "key34": "MsCxTN8fRmqj3LUUSsgeidZJ3yWizYc8i3wewQERpELXRBPhgGQapabj2EUVRjxg6dTiQPuMs4G87GvnkfoSo88",
  "key35": "5Xgp2pgDhHXgoFqTHBW4pEC5TCENdxF6i4SgWTpKSxnBQayBXhKPiuDS7iYqMhu9Z9bQmUAZDECaMuzJJPJQMMgX",
  "key36": "4GBrCp5Ck5WtnkzVQnGoaxzNVVephJbmsjNYdjswRvjgmspzwj7GRxHXFC3nc9pfV8iKsG8aji68pWCvVEfLtMyJ",
  "key37": "rmwzBbZXyZUfEuFKCzuN6wLxz5nxVX6rfdM8CtA9yKSFqp8vaQJndcDMtHxPTxzXeiVT8rBcGBWcig4GD4ajrge",
  "key38": "3GpFq135WT2FCS2Be7r3sDUEipW3UiohsDQzz7Ts4wXG7saedXwSfzTRtaKEHFryBsJkArQacxGJAzQ7TVvk5mhf",
  "key39": "5C6Gc6JNjQBm3WdBUzUgpRbNsJi1dZjVWNi3vykK6FvJ1Gcfc3JMovxhNHRfNEiFGeURAh3TcFDUxyAmns3LyqVv",
  "key40": "5wyQEmmGvpywCv9WCVWSf8nEQJUaVZovecAXefa63yKyhzUSAa8pZQyxTo5Xh2awZVL4CHdz92ZGmCFiK6SZfCq",
  "key41": "5K4T9LnR9mV7Wfh3oCA6t8KZnkz1LGE97m3mHZicTmVLZRe2qmAyVqqyiCxH5XQ1iSp9WrfhJTXZbbz3mmA5vhqM",
  "key42": "36SJoZ8TB67CTpei2ittbGuqDHnBGiXvu7aLJKFoGT5vCwTwLv7roftxU79FmT7HnWzpWixC79m2ZUxrmnajF5Uz",
  "key43": "43vMbHHdw7QCHF9LwPCZQ31u9R4QxCYq5yjhAxtrgGG2ffghybPsCsH9tNsw1QBqdbuyP2NDx48AEQU2ek9PpUMU",
  "key44": "3Gwn2SL8zzawTC3jzd9htu8yg697HVCmiuMJP6zDrvtfUfATkC1D5nhNJwu6Zi9WRtAaupKTd8CdrREMfq5XxMMj",
  "key45": "5Kyp3pyZUvfENQLEw1vS3AXb8XTrRicDxgpZJY9gdE71BMnfrt7mskY6xTvsVmk6pyRkYLv1rcrPu5e5jMFHb1iD",
  "key46": "3eJGPt3nZ9p8Kdzccm7BQ1ksmwABR45HpEd7KyUmbzLPsFuxxHBccVxmasENpMrZhSJsoTwwLuBvPJzxJh93piMt",
  "key47": "3KCZWhrJrS7BmbBVVizQJ79aWidZSthbMU6p92hyz9xdpx8v1eXFaAVGpg9vvuyBBmWi2spWHj63q9FVAsxMkQeL"
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
